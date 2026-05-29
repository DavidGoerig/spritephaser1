import Grid from "./engine/grid";
import Mouse from "./utils/mouse";
import Camera from "./utils/camera";
import { Direction, StairDirection, type OptionalTileSetter } from "./engine/types";
import { UI, ANIMATION } from "./engine/constants";
import { CombatManager } from "./engine/combat-manager";
import { HUD } from "./ui/hud";
import { ELEMENT_KITS } from "./data/character-kits";
import type { Personnage } from "./data/character-types";
import { HitFlashPipeline } from "./engine/pipelines/hit-flash-pipeline";
import { ElementGlowPipeline } from "./engine/pipelines/element-glow-pipeline";
import {
  BLOCK_BY_ID, CATEGORY_COLORS, CATEGORY_LABELS, getBlocksForCategory,
  type BlockCategory,
} from "./data/block-catalog";
import { loadCharSprites, BAKED_CHARS } from "./utils/load-char-sprites";
import { getAllVFXIds } from "./data/spell-vfx-map";

// ── Preset definitions ─────────────────────────────────────────
interface CombatPreset { name: string; elementA: string; elementB: string; teamSize?: 2 | 3 | 5; }

const PRESET_DEFS: CombatPreset[] = [
  // 2v2
  { name: 'Feu vs Eau',          elementA: 'Feu',        elementB: 'Eau'       },
  { name: 'Electrique vs Glace', elementA: 'Electrique', elementB: 'Glace'     },
  { name: 'Ténèbres vs Combat',  elementA: 'Ténèbres',   elementB: 'Combat'    },
  { name: 'Plante vs Poison',    elementA: 'Plante',     elementB: 'Poison'    },
  { name: 'Dragon vs Psy',       elementA: 'Dragon',     elementB: 'Psy'       },
  { name: 'Vent vs Sol',         elementA: 'Vent',       elementB: 'Sol'       },
  // 3v3
  { name: 'Feu vs Eau  [3v3]',      elementA: 'Feu',      elementB: 'Eau',    teamSize: 3 },
  { name: 'Dragon vs Spectre [3v3]', elementA: 'Dragon',   elementB: 'Spectre',teamSize: 3 },
  { name: 'Psy vs Fée  [3v3]',      elementA: 'Psy',      elementB: 'Fée',    teamSize: 3 },
];

export default class Game extends Phaser.Scene {
  grid = new Grid(this);
  mouse = new Mouse(this);
  camera = new Camera(this);

  // UI / hover state
  private hoverTile: import("./engine/tile").default | null = null;
  private infoBg!: Phaser.GameObjects.Rectangle;
  private infoText!: Phaser.GameObjects.Text;
  private hoverSelector!: Phaser.GameObjects.Image;
  private tacticalMode = false;
  private tacticalMode2 = false;

  // Keyboard cursor
  private cursorX = 5;
  private cursorY = 5;
  private cursorZ = 0;
  private useKeyboardCursor = false;

  // Combat
  private combatMode = false;
  private combatManager!: CombatManager;
  private hud!: HUD;

  // Character database (loaded from characters.json)
  private charDB = new Map<number, Personnage>();
  // Custom teams saved from the character bank
  private customTeams: { teamA: Personnage[]; teamB: Personnage[] } | null = null;

  // Block palette (sculpt mode)
  private selectedBlockId = 1;
  private paletteCategory: BlockCategory = 'Terrain';
  private palettePage = 0;
  private _palAll: Phaser.GameObjects.GameObject[] = [];
  private _palGrid: Phaser.GameObjects.GameObject[] = [];
  private _palCatTexts: Phaser.GameObjects.Text[] = [];
  private _palLabel!: Phaser.GameObjects.Text;
  private _palPageTxt!: Phaser.GameObjects.Text;
  private _palGridX = 0;
  private _palGridY = 0;

  // Preset selector
  private selectedPreset = 0;
  private presetBg!: Phaser.GameObjects.Rectangle;
  private presetTitle!: Phaser.GameObjects.Text;
  private presetTeamA!: Phaser.GameObjects.Text;
  private presetTeamB!: Phaser.GameObjects.Text;
  private presetHint!: Phaser.GameObjects.Text;

  constructor() {
    super("Game");
  }

  preload() {
    this.input.mouse?.disableContextMenu();

    this.load.on("loaderror", (file: Phaser.Loader.File) => {
      console.error(`Failed to load: ${file.key}`);
    });

    // Character database — source of truth for all combat units
    this.load.json('chardb', '/characters/characters.json');
    this.load.json('teams', '/characters/teams.json');

    for (let i = 1; i <= 101; i++) {
      this.grid.loadTile(`/blocks/blocks_${i}.png`, 64, 64);
    }
    this.grid.loadTile(`/blocks/mushroom.png`, 64, 64); // id 102

    // Character spritesheets — silently no-ops for chars not yet baked
    for (const { id, folder } of BAKED_CHARS) {
      loadCharSprites(this, id, folder);
    }

    // Spell VFX spritesheets (4×4 grid, 48×48 per frame)
    for (const id of getAllVFXIds()) {
      this.load.spritesheet(`vfx_${id}`, `/spells/spritesheets/${id}.png`, {
        frameWidth: 48, frameHeight: 48,
      });
    }
    this.load.image("selector", "/blocks/selector.png");
    this.load.image("selector3", "/blocks/selector3.png");
    this.grid.loadObject(`/objects/1.png`, 5);
    this.grid.loadObject(`/objects/2.png`, 6);
    this.grid.loadObject(`/objects/3.png`, 12, 16, 16);
  }

  create() {
    // Build character DB first — all other systems depend on it
    this._buildCharDB();

    // Register WebGL post-processing pipelines (no-op in Canvas mode)
    if (this.renderer instanceof Phaser.Renderer.WebGL.WebGLRenderer) {
      this.renderer.pipelines.addPostPipeline('HitFlashPipeline', HitFlashPipeline);
      this.renderer.pipelines.addPostPipeline('ElementGlowPipeline', ElementGlowPipeline);
    }

    // Spell VFX animations (16 frames at 16 fps, play-once)
    for (const id of getAllVFXIds()) {
      const key = `vfx_${id}`;
      this.anims.create({
        key: `anim_${key}`,
        frames: this.anims.generateFrameNumbers(key, {}),
        frameRate: 16,
        repeat: 0,
      });
    }

    this.grid.create();
    this.camera.create();

    // ── Info panel (sculpt mode) ──────────────────────────────
    this.infoBg = this.add.rectangle(
      UI.INFO_MARGIN + UI.INFO_BG_WIDTH / 2,
      this.scale.height - UI.INFO_MARGIN - UI.INFO_BG_HEIGHT / 2,
      UI.INFO_BG_WIDTH,
      UI.INFO_BG_HEIGHT,
      UI.INFO_BG_COLOR,
      UI.INFO_BG_ALPHA,
    ).setOrigin(0.5).setScrollFactor(0).setVisible(false);

    this.infoText = this.add.text(
      UI.INFO_MARGIN + UI.INFO_TEXT_PADDING,
      this.scale.height - UI.INFO_MARGIN - UI.INFO_BG_HEIGHT + UI.INFO_TEXT_PADDING,
      "",
      { fontSize: UI.INFO_TEXT_FONT_SIZE, color: UI.INFO_TEXT_COLOR },
    ).setScrollFactor(0).setVisible(false);

    this.hoverSelector = this.add.image(0, 0, "selector")
      .setVisible(false)
      .setDepth(UI.SELECTOR_DEPTH)
      .setAlpha(UI.SELECTOR_ALPHA);

    // ── Animations ───────────────────────────────────────────
    this.grid.createTileAnim(102, ANIMATION.DEFAULT_FRAME_RATE, ANIMATION.DEFAULT_REPEAT, ANIMATION.DEFAULT_REPEAT_DELAY);

    // ── Build demo map ────────────────────────────────────────
    const map: OptionalTileSetter[][] = Array.from({ length: Grid.ROW }, () =>
      Array.from({ length: Grid.COLUMN }, () => 1 as OptionalTileSetter)
    );

    const platform = (x0: number, y0: number, w: number, h: number, z: number) => {
      for (let y = y0; y < y0 + h; y++)
        for (let x = x0; x < x0 + w; x++)
          if (x >= 0 && x < Grid.COLUMN && y >= 0 && y < Grid.ROW)
            map[y][x] = { id: 1, z };
    };

    const stair = (x: number, y: number, z: number, dir: StairDirection) => {
      if (x >= 0 && x < Grid.COLUMN && y >= 0 && y < Grid.ROW)
        map[y][x] = { id: 2, z, direction: dir };
    };

    platform(4, 4, 2, 2, 1);
    platform(4, 6, 1, 1, 0);
    stair(4, 6, 1, StairDirection.SouthWestToNorthEast);
    platform(1, 1, 2, 2, 2);
    platform(1, 3, 1, 1, 0);
    platform(1, 3, 1, 1, 1);
    stair(1, 3, 2, StairDirection.SouthWestToNorthEast);
    platform(7, 7, 2, 2, 1);
    platform(7, 6, 1, 1, 0);
    stair(7, 6, 1, StairDirection.SouthEastToNorthWest);

    this.grid.setGrid(map);
    this.grid.setTile(4, 4, 2, { id: 102 });

    // ── Combat & HUD objects ──────────────────────────────────
    this.combatManager = new CombatManager(this);
    this.hud = new HUD(this);
    this.hud.setManager(this.combatManager);

    // ── Block palette (sculpt mode) ───────────────────────────
    this._createPalette();

    // ── Preset selector panel ─────────────────────────────────
    const cx = this.scale.width / 2;
    const cy = this.scale.height / 2;
    this.presetBg = this.add.rectangle(cx, cy, 460, 118, 0x000000, 0.78)
      .setScrollFactor(0).setDepth(490).setOrigin(0.5);
    this.presetTitle = this.add.text(cx, cy - 40, '', {
      fontSize: '17px', color: '#FFD700', stroke: '#000000', strokeThickness: 3,
    }).setOrigin(0.5).setScrollFactor(0).setDepth(491);
    this.presetTeamA = this.add.text(cx, cy - 10, '', {
      fontSize: '11px', color: '#44DDFF',
    }).setOrigin(0.5).setScrollFactor(0).setDepth(491);
    this.presetTeamB = this.add.text(cx, cy + 14, '', {
      fontSize: '11px', color: '#FF8866',
    }).setOrigin(0.5).setScrollFactor(0).setDepth(491);
    this.presetHint = this.add.text(cx, cy + 42, '[1–6] choisir  ·  [C] démarrer  ·  [ESC] quitter', {
      fontSize: '10px', color: '#888888',
    }).setOrigin(0.5).setScrollFactor(0).setDepth(491);
    this._updatePresetUI();

    // ── Keyboard bindings ─────────────────────────────────────
    const keys = this.input.keyboard!.addKeys({
      rotateLeft:  Phaser.Input.Keyboard.KeyCodes.Q,
      rotateRight: Phaser.Input.Keyboard.KeyCodes.E,
    }) as Record<string, Phaser.Input.Keyboard.Key>;

    keys.rotateLeft.on("down", () => {
      const next = (this.grid.direction + 1) % 4;
      this.grid.updateDirection(next as Direction);
      this.combatManager.syncUnitPositions();
    });
    keys.rotateRight.on("down", () => {
      const next = (this.grid.direction + 3) % 4;
      this.grid.updateDirection(next as Direction);
      this.combatManager.syncUnitPositions();
    });

    this.input.keyboard!.on("keydown-T", () => {
      this.tacticalMode = !this.tacticalMode;
      this.grid.setTacticalMode(this.tacticalMode);
    });
    this.input.keyboard!.on("keydown-Y", () => {
      this.tacticalMode2 = !this.tacticalMode2;
      this.grid.setTacticalMode2(this.tacticalMode2);
    });

    this.input.keyboard!.on("keydown-C", () => this.startCombat());
    this.input.keyboard!.on("keydown-ESC", () => this.stopCombat());
    this.input.keyboard!.on("keydown-ENTER", () => {
      if (this.combatMode) this.combatManager.endTurn();
    });

    // Number keys 1-9,0 → spell in combat / preset selector out of combat
    const spellKeys = [
      Phaser.Input.Keyboard.KeyCodes.ONE,   Phaser.Input.Keyboard.KeyCodes.TWO,
      Phaser.Input.Keyboard.KeyCodes.THREE, Phaser.Input.Keyboard.KeyCodes.FOUR,
      Phaser.Input.Keyboard.KeyCodes.FIVE,  Phaser.Input.Keyboard.KeyCodes.SIX,
      Phaser.Input.Keyboard.KeyCodes.SEVEN, Phaser.Input.Keyboard.KeyCodes.EIGHT,
      Phaser.Input.Keyboard.KeyCodes.NINE,  Phaser.Input.Keyboard.KeyCodes.ZERO,
    ];
    spellKeys.forEach((code, i) => {
      this.input.keyboard!.on(
        `keydown-${String.fromCharCode(code === Phaser.Input.Keyboard.KeyCodes.ZERO ? 48 : 48 + i + 1)}`,
        () => {
          if (this.combatMode) {
            this.combatManager.selectSpell(i);
          } else if (i < PRESET_DEFS.length) {
            this.selectedPreset = i;
            this._updatePresetUI();
          }
        }
      );
    });

    // Arrow keys — sculpt-mode cursor
    const arrowKeys = this.input.keyboard!.addKeys({
      up:    Phaser.Input.Keyboard.KeyCodes.UP,
      down:  Phaser.Input.Keyboard.KeyCodes.DOWN,
      left:  Phaser.Input.Keyboard.KeyCodes.LEFT,
      right: Phaser.Input.Keyboard.KeyCodes.RIGHT,
    }) as Record<string, Phaser.Input.Keyboard.Key>;

    arrowKeys.up.on("down",    () => { this.useKeyboardCursor = true; if (this.cursorY > 0) this.cursorY--; });
    arrowKeys.down.on("down",  () => { this.useKeyboardCursor = true; if (this.cursorY < Grid.ROW - 1) this.cursorY++; });
    arrowKeys.left.on("down",  () => { this.useKeyboardCursor = true; if (this.cursorX > 0) this.cursorX--; });
    arrowKeys.right.on("down", () => { this.useKeyboardCursor = true; if (this.cursorX < Grid.COLUMN - 1) this.cursorX++; });

    const verticalKeys = this.input.keyboard!.addKeys({
      upZ:      Phaser.Input.Keyboard.KeyCodes.W,
      downZ:    Phaser.Input.Keyboard.KeyCodes.S,
      pageUp:   Phaser.Input.Keyboard.KeyCodes.PAGE_UP,
      pageDown: Phaser.Input.Keyboard.KeyCodes.PAGE_DOWN,
    }) as Record<string, Phaser.Input.Keyboard.Key>;

    const moveUp   = () => { this.useKeyboardCursor = true; if (this.cursorZ < Grid.MAX_Z) this.cursorZ++; };
    const moveDown = () => { this.useKeyboardCursor = true; if (this.cursorZ > 0) this.cursorZ--; };
    verticalKeys.upZ.on("down",    moveUp);
    verticalKeys.downZ.on("down",  moveDown);
    verticalKeys.pageUp.on("down", moveUp);
    verticalKeys.pageDown.on("down", moveDown);

    this.input.on("pointermove", () => { this.useKeyboardCursor = false; });

    // ── Click handler ─────────────────────────────────────────
    this.input.on("pointerup", (pointer: Phaser.Input.Pointer) => {
      // Palette region — let its own interactive objects handle clicks
      if (!this.combatMode && pointer.x >= 798) return;

      const tile = this.grid.getTileByIsoPos(pointer.worldX, pointer.worldY);
      if (!tile) return;

      if (this.combatMode) {
        this.combatManager.handleTileClick(tile.x, tile.y, tile.z);
        return;
      }

      const topTile = this.grid.getTopTile(tile.x, tile.y);
      const currentHeight = topTile ? topTile.z : -1;
      if (pointer.button === 0) {
        if (currentHeight < Grid.MAX_Z)
          this.grid.setTile(tile.x, tile.y, currentHeight + 1, this.selectedBlockId);
      } else if (pointer.button === 2) {
        if (currentHeight >= 0)
          this.grid.setTile(tile.x, tile.y, currentHeight, null);
      }
    });
  }

  // ── Character DB ──────────────────────────────────────────

  private _buildCharDB() {
    type RawChar = {
      id: number; nom: string; element: string; element2?: string;
      classe: string; espece: string; region: string; faction: string;
      description_physique?: string; description_personnalite?: string;
      position_lore?: string; style_combat?: string; modifications_classe?: string;
      assets?: Record<string, unknown>;
    };

    const records = this.cache.json.get('chardb') as RawChar[];
    if (!records) { console.error('chardb not loaded'); return; }

    for (const r of records) {
      const kit = ELEMENT_KITS[r.element as keyof typeof ELEMENT_KITS];
      if (!kit) continue;
      const p: Personnage = {
        id:                     r.id,
        nom:                    r.nom,
        element:                r.element as Personnage['element'],
        classe:                 r.classe  as Personnage['classe'],
        espece:                 r.espece  as Personnage['espece'],
        region:                 r.region  as Personnage['region'],
        faction:                r.faction as Personnage['faction'],
        description_physique:   r.description_physique   ?? '',
        description_personnalite: r.description_personnalite ?? '',
        position_lore:          r.position_lore          ?? '',
        style_combat:           r.style_combat            ?? '',
        modifications_classe:   r.modifications_classe    ?? '',
        kit,
      };
      if (r.element2) p.element2 = r.element2 as Personnage['element'];
      this.charDB.set(r.id, p);
    }
    console.log(`CharDB loaded: ${this.charDB.size} characters`);

    // Load custom teams saved from the character bank
    const raw = this.cache.json.get('teams') as { teamA: { id: number }[]; teamB: { id: number }[] } | null;
    if (raw?.teamA?.length && raw?.teamB?.length) {
      const resolve = (list: { id: number }[]) =>
        list.map(e => this.charDB.get(e.id)).filter((p): p is Personnage => !!p);
      const a = resolve(raw.teamA);
      const b = resolve(raw.teamB);
      if (a.length > 0 && b.length > 0) {
        this.customTeams = { teamA: a, teamB: b };
        const rawSz = Math.max(a.length, b.length);
        const sz: 2 | 3 | 5 = rawSz >= 5 ? 5 : rawSz >= 3 ? 3 : 2;
        PRESET_DEFS.unshift({
          name: `⚔ Équipes personnalisées`,
          elementA: a[0].element,
          elementB: b[0].element,
          teamSize: sz,
        });
      }
    }
  }

  // ── Preset UI ─────────────────────────────────────────────

  private _updatePresetUI() {
    const p = PRESET_DEFS[this.selectedPreset];
    const num = this.selectedPreset + 1;
    const sz = p.teamSize ?? 2;
    this.presetTitle.setText(`[ ${num} / ${PRESET_DEFS.length} ]   ${p.name}  (${sz}v${sz})`);
    const poolInfo = (el: string) => {
      const n = [...this.charDB.values()].filter(c => c.element === el).length;
      return `${el}  (${n} disponibles)`;
    };
    this.presetTeamA.setText(`A : ${poolInfo(p.elementA)}`);
    this.presetTeamB.setText(`B : ${poolInfo(p.elementB)}`);
  }

  private _hidePresetUI() {
    ([this.presetBg, this.presetTitle, this.presetTeamA, this.presetTeamB, this.presetHint] as Phaser.GameObjects.GameObject[])
      .forEach(o => (o as any).setVisible(false));
  }

  private _showPresetUI() {
    ([this.presetBg, this.presetTitle, this.presetTeamA, this.presetTeamB, this.presetHint] as Phaser.GameObjects.GameObject[])
      .forEach(o => (o as any).setVisible(true));
    this._updatePresetUI();
  }

  // ── Combat lifecycle ──────────────────────────────────────

  private _pickN(element: string, n: number): Personnage[] | null {
    const pool = [...this.charDB.values()].filter(p => p.element === element);
    if (pool.length === 0) return null;
    const shuffled = [...pool].sort(() => Math.random() - 0.5);
    const picked: Personnage[] = [];
    for (let i = 0; i < n; i++) {
      picked.push(shuffled[i % shuffled.length]);
    }
    // Ensure no duplicate IDs if pool is large enough
    if (pool.length >= n) {
      return shuffled.slice(0, n);
    }
    return picked;
  }

  private startCombat() {
    for (const unit of [...this.combatManager.units]) unit.destroy();
    this.combatManager = new CombatManager(this);
    this.hud.setManager(this.combatManager);

    const preset = PRESET_DEFS[this.selectedPreset];
    const isCustom = this.customTeams !== null && this.selectedPreset === 0 && preset.name.startsWith('⚔');
    const sz = preset.teamSize ?? 2;

    const teamA = isCustom ? this.customTeams!.teamA.slice(0, sz) : this._pickN(preset.elementA, sz);
    const teamB = isCustom ? this.customTeams!.teamB.slice(0, sz) : this._pickN(preset.elementB, sz);

    if (!teamA || !teamB) {
      console.error(`Cannot start "${preset.name}" — missing characters in DB`);
      return;
    }

    // Spawn positions per team size
    const POS_A: Record<number, [number, number][]> = {
      2: [[2, 2], [3, 2]],
      3: [[1, 2], [2, 2], [3, 2]],
      5: [[1, 1], [1, 3], [2, 2], [1, 5], [1, 7]],
    };
    const POS_B: Record<number, [number, number][]> = {
      2: [[7, 7], [6, 7]],
      3: [[6, 7], [7, 7], [8, 7]],
      5: [[8, 2], [8, 4], [7, 3], [8, 6], [8, 8]],
    };
    const posA = POS_A[sz] ?? POS_A[2];
    const posB = POS_B[sz] ?? POS_B[2];

    const actualSz = Math.min(sz, teamA.length, teamB.length);
    for (let i = 0; i < actualSz; i++) {
      const [ax, ay] = posA[i];
      const [bx, by] = posB[i];
      this.combatManager.addUnit(teamA[i], ax, ay, this.grid.getTopTile(ax, ay)?.z ?? 0, 0);
      this.combatManager.addUnit(teamB[i], bx, by, this.grid.getTopTile(bx, by)?.z ?? 0, 1);
    }

    this._applyPresetTerrain(this.selectedPreset);
    this.combatManager.start();

    this.combatMode = true;
    this.hud.setVisible(true);
    this._hidePresetUI();
    this._setPaletteVisible(false);
    this.infoBg.setVisible(false);
    this.infoText.setVisible(false);
  }

  stopCombat() {
    if (!this.combatMode) return;
    for (const unit of [...this.combatManager.units]) unit.destroy();
    this.combatMode = false;
    this.hud.setVisible(false);
    this._showPresetUI();
    this._setPaletteVisible(true);
  }

  private _applyPresetTerrain(presetIndex: number) {
    type TileEl = { x: number; y: number; el: string };
    const rect = (x1: number, y1: number, x2: number, y2: number, el: string): TileEl[] => {
      const pts: TileEl[] = [];
      for (let y = y1; y <= y2; y++) for (let x = x1; x <= x2; x++) pts.push({ x, y, el });
      return pts;
    };
    const DEFS: TileEl[][] = [
      [ // 0: Feu vs Eau
        ...rect(1, 1, 4, 4, 'Feu'), ...rect(5, 5, 8, 8, 'Eau'),
        { x: 4, y: 5, el: 'Vapeur' }, { x: 5, y: 4, el: 'Vapeur' },
      ],
      [ // 1: Electrique vs Glace
        ...rect(1, 1, 4, 4, 'Electrique'), ...rect(5, 5, 8, 8, 'Glace'),
        { x: 4, y: 4, el: 'Glace' }, { x: 5, y: 5, el: 'Electrique' },
        { x: 4, y: 5, el: 'Vapeur' }, { x: 5, y: 4, el: 'Vapeur' },
      ],
      [ // 2: Ténèbres vs Combat
        ...rect(1, 1, 4, 4, 'Ténèbres'), ...rect(5, 5, 8, 8, 'Combat'),
        { x: 4, y: 5, el: 'Ténèbres' }, { x: 5, y: 4, el: 'Combat' },
      ],
      [ // 3: Plante vs Poison
        ...rect(1, 1, 4, 4, 'Plante'), ...rect(5, 5, 8, 8, 'Poison'),
        { x: 4, y: 5, el: 'Plante' }, { x: 5, y: 4, el: 'Poison' },
      ],
      [ // 4: Dragon vs Psy
        ...rect(1, 1, 4, 4, 'Dragon'), ...rect(5, 5, 8, 8, 'Psy'),
        { x: 4, y: 5, el: 'Dragon' }, { x: 5, y: 4, el: 'Psy' },
      ],
      [ // 5: Vent vs Sol
        ...rect(1, 1, 4, 4, 'Vent'), ...rect(5, 5, 8, 8, 'Sol'),
        { x: 4, y: 5, el: 'Roche' }, { x: 5, y: 4, el: 'Roche' },
      ],
      [ // 6: Feu vs Eau 3v3 — battlefield with scattered Vapeur mid-zone
        ...rect(0, 0, 3, 4, 'Feu'), ...rect(6, 5, 9, 9, 'Eau'),
        ...rect(4, 4, 5, 5, 'Vapeur'),
        { x: 3, y: 5, el: 'Vapeur' }, { x: 6, y: 4, el: 'Vapeur' },
      ],
      [ // 7: Dragon vs Spectre 3v3 — contested Ténèbres mid
        ...rect(0, 0, 3, 4, 'Dragon'), ...rect(6, 5, 9, 9, 'Spectre'),
        ...rect(4, 3, 5, 6, 'Ténèbres'),
        { x: 3, y: 4, el: 'Dragon' }, { x: 6, y: 5, el: 'Spectre' },
      ],
      [ // 8: Psy vs Fée 3v3 — central combat arena
        ...rect(0, 0, 3, 4, 'Psy'), ...rect(6, 5, 9, 9, 'Fée'),
        ...rect(4, 4, 5, 5, 'Combat'),
        { x: 3, y: 5, el: 'Plante' }, { x: 6, y: 4, el: 'Plante' },
      ],
    ];
    for (const tile of DEFS[presetIndex] ?? []) {
      const z = this.grid.getTopTile(tile.x, tile.y)?.z ?? 0;
      this.combatManager.setTileElement(tile.x, tile.y, z, tile.el);
    }
    this.combatManager.applyTileElementTints();
  }

  // ── Block palette ─────────────────────────────────────────

  private _createPalette() {
    const PX = 800;
    const PW = 214;
    const DEP = 200;
    const SF = 0;
    let y = 10;

    const push = (...objs: Phaser.GameObjects.GameObject[]) =>
      objs.forEach(o => this._palAll.push(o));

    push(this.add.rectangle(PX + PW / 2, y + 240, PW, 480, 0x111111, 0.88)
      .setScrollFactor(SF).setDepth(DEP));

    push(this.add.text(PX + PW / 2, y + 6, '▣  BLOCS', {
      fontSize: '10px', color: '#FFD700',
    }).setOrigin(0.5, 0).setScrollFactor(SF).setDepth(DEP + 1));
    y += 24;

    const categories: BlockCategory[] = [
      'Terrain', 'Nature', 'Eau', 'Feu', 'Glace', 'Roche', 'Acier',
      'Poison', 'Ténèbres', 'Psy', 'Spectre', 'Fée', 'Stellaire', 'Spécial',
    ];
    const tabW = Math.floor(PW / 2) - 4;
    const tabH = 18;
    categories.forEach((cat, i) => {
      const col = i < 7 ? 0 : 1;
      const row = i < 7 ? i : i - 7;
      const tx = PX + 2 + col * (tabW + 4) + tabW / 2;
      const ty = y + row * (tabH + 2) + tabH / 2;
      const hex = CATEGORY_COLORS[cat].toString(16).padStart(6, '0');
      const txt = this.add.text(tx, ty, CATEGORY_LABELS[cat], {
        fontSize: '9px', color: '#ffffff',
        backgroundColor: `#${hex}88`,
        padding: { x: 3, y: 2 },
      }).setOrigin(0.5).setScrollFactor(SF).setDepth(DEP + 1)
        .setInteractive({ useHandCursor: true })
        .on('pointerup', () => {
          this.paletteCategory = cat;
          this.palettePage = 0;
          this._rebuildPaletteGrid();
        });
      this._palCatTexts.push(txt);
      push(txt);
    });
    y += 7 * (tabH + 2) + 4;

    const prevBtn = this.add.text(PX + 8, y + 3, '◀', {
      fontSize: '12px', color: '#ffffff',
    }).setScrollFactor(SF).setDepth(DEP + 1)
      .setInteractive({ useHandCursor: true })
      .on('pointerup', () => {
        if (this.palettePage > 0) { this.palettePage--; this._rebuildPaletteGrid(); }
      });
    this._palPageTxt = this.add.text(PX + PW / 2, y + 3, '1/1', {
      fontSize: '9px', color: '#888888',
    }).setOrigin(0.5, 0).setScrollFactor(SF).setDepth(DEP + 1);
    const nextBtn = this.add.text(PX + PW - 18, y + 3, '▶', {
      fontSize: '12px', color: '#ffffff',
    }).setScrollFactor(SF).setDepth(DEP + 1)
      .setInteractive({ useHandCursor: true })
      .on('pointerup', () => {
        const maxPage = Math.ceil(getBlocksForCategory(this.paletteCategory).length / 20) - 1;
        if (this.palettePage < maxPage) { this.palettePage++; this._rebuildPaletteGrid(); }
      });
    push(prevBtn, this._palPageTxt, nextBtn);
    y += 20;

    this._palGridX = PX;
    this._palGridY = y;

    this._palLabel = this.add.text(PX + PW / 2, y + 5 * 50 + 6, '', {
      fontSize: '9px', color: '#cccccc',
    }).setOrigin(0.5, 0).setScrollFactor(SF).setDepth(DEP + 1);
    push(this._palLabel);

    this._rebuildPaletteGrid();
  }

  private _rebuildPaletteGrid() {
    this._palGrid.forEach(o => (o as Phaser.GameObjects.GameObject & { destroy(): void }).destroy());
    this._palGrid = [];

    const categories: BlockCategory[] = [
      'Terrain', 'Nature', 'Eau', 'Feu', 'Glace', 'Roche', 'Acier',
      'Poison', 'Ténèbres', 'Psy', 'Spectre', 'Fée', 'Stellaire', 'Spécial',
    ];
    this._palCatTexts.forEach((txt, i) => {
      txt.setAlpha(categories[i] === this.paletteCategory ? 1 : 0.55);
    });

    const blocks = getBlocksForCategory(this.paletteCategory);
    const PER_PAGE = 20;
    const maxPage = Math.max(0, Math.ceil(blocks.length / PER_PAGE) - 1);
    this.palettePage = Math.min(this.palettePage, maxPage);
    const pageBlocks = blocks.slice(this.palettePage * PER_PAGE, (this.palettePage + 1) * PER_PAGE);
    this._palPageTxt.setText(`${this.palettePage + 1}/${maxPage + 1}`);

    const CELL = 48;
    const GAP = 2;
    const COLS = 4;
    const DEP = 201;

    pageBlocks.forEach((block, i) => {
      const col = i % COLS;
      const row = Math.floor(i / COLS);
      const cx = this._palGridX + 7 + col * (CELL + GAP) + CELL / 2;
      const cy = this._palGridY + row * (CELL + GAP) + CELL / 2;
      const isSelected = block.id === this.selectedBlockId;

      const cellBg = this.add.rectangle(cx, cy, CELL, CELL,
        isSelected ? 0xFFD700 : 0x333333, isSelected ? 0.9 : 0.5)
        .setScrollFactor(0).setDepth(DEP);

      const key = `t${block.id}`;
      const img = this.textures.exists(key)
        ? this.add.image(cx, cy, key).setDisplaySize(CELL - 4, CELL - 4)
        : this.add.rectangle(cx, cy, CELL - 4, CELL - 4, 0x555555) as unknown as Phaser.GameObjects.Image;
      img.setScrollFactor(0).setDepth(DEP + 1)
        .setInteractive({ useHandCursor: true })
        .on('pointerup', () => {
          this.selectedBlockId = block.id;
          this._palLabel.setText(block.name);
          this._rebuildPaletteGrid();
        });

      this._palGrid.push(cellBg, img);
    });

    const sel = BLOCK_BY_ID.get(this.selectedBlockId);
    if (sel) this._palLabel.setText(sel.name);
  }

  private _setPaletteVisible(v: boolean) {
    const setVis = (o: Phaser.GameObjects.GameObject) =>
      (o as unknown as { setVisible(b: boolean): void }).setVisible(v);
    this._palAll.forEach(setVis);
    this._palGrid.forEach(setVis);
  }

  // ── Main loop ─────────────────────────────────────────────

  update() {
    let tile: import("./engine/tile").default | null = null;

    if (this.useKeyboardCursor) {
      tile = this.grid.getTile(this.cursorX, this.cursorY, this.cursorZ);
      if (!tile) {
        tile = this.grid.getTile(this.cursorX, this.cursorY);
        if (tile) this.cursorZ = tile.z;
      }
    } else {
      const pointer = this.input.mousePointer;
      tile = this.grid.getTileByIsoPos(pointer.worldX, pointer.worldY);
      if (tile) {
        this.cursorX = tile.x;
        this.cursorY = tile.y;
        this.cursorZ = tile.z;
      }
    }

    if (this.hoverTile && this.hoverTile !== tile) {
      this.hoverTile.setHighlighted(false);
    }
    this.hoverTile = tile ?? null;

    if (tile) {
      this.hoverSelector.setPosition(tile.worldX, tile.worldY).setVisible(true);
      tile.setHighlighted(true);

      if (!this.combatMode) {
        this.infoText.setText(`x:${tile.x} y:${tile.y} z:${tile.z}  id:${tile.id ?? '?'}`);
        this.infoBg.setVisible(true);
        this.infoText.setVisible(true);
      }
    } else {
      this.hoverSelector.setVisible(false);
      if (!this.combatMode) {
        this.infoBg.setVisible(false);
        this.infoText.setVisible(false);
      }
    }

    if (this.combatMode) {
      this.hud.update();
      const hoveredUnit = tile ? this.combatManager.getUnitAt(tile.x, tile.y) : null;
      this.hud.setHoverUnit(hoveredUnit ?? this.combatManager.currentUnit);
      if (!hoveredUnit && tile) {
        const el = this.combatManager.getTileElement(tile.x, tile.y, tile.z);
        this.hud.setHoverTile(el);
      } else {
        this.hud.setHoverTile(null);
      }

      // AoE spell preview: orange highlight when hovering a tile in spell range
      const cm = this.combatManager;
      const si = cm.selectedSpellIndex;
      const cu = cm.currentUnit;
      if (si !== null && cu && tile && !cm.isAnimating) {
        const sort = cu.getSort(si);
        const dist = Math.abs(tile.x - cu.x) + Math.abs(tile.y - cu.y);
        if (dist > 0 && dist <= sort.portee) {
          cm.showSpellAreaPreview(sort, cu, tile.x, tile.y);
        } else {
          cm.clearSpellAreaPreview();
        }
      } else {
        cm.clearSpellAreaPreview();
      }
    }
  }
}
