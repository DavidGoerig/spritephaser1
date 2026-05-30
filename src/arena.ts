/**
 * Arena — per-character combat sandbox.
 * URL: /arena?id=<charId>
 * Loads a character, places them on a flat 9×9 grid with a target dummy,
 * and lets the user try all 10 attack animations + VFX with no rules.
 */

import Phaser from "phaser";
import { ELEMENT_KITS } from "./data/character-kits";
import type { Personnage } from "./data/character-types";
import type { Sort } from "./data/character-kits";
import { loadCharSprites, BAKED_CHARS } from "./utils/load-char-sprites";
import { getAllVFXIds } from "./data/spell-vfx-map";
import { playSpellVFX, type IVFXScene } from "./engine/spell-vfx";
import { CharSprite } from "./engine/char-sprite";
import { ELEMENT_TINTS } from "./engine/element-colors";
import { HitFlashPipeline } from "./engine/pipelines/hit-flash-pipeline";
import { ElementGlowPipeline } from "./engine/pipelines/element-glow-pipeline";
import { sfxSpell, sfxDamage } from "./engine/sound-engine";

// ── Minimal isometric grid math (no camera rotation in the arena) ────────────

const TILE_W = 64;
const OX = 512, OY = 220, OZ = 32;

function isoPos(gx: number, gy: number, gz = 0) {
  const cx = gx * TILE_W, cy = gy * TILE_W;
  const isoX = cx - cy, isoY = (cx + cy) / 2;
  return {
    x: isoX / 2 + OX,
    y: isoY / 2 + OY - OZ * gz,
  };
}

// ── Fake caster interface (duck-typed for playSpellVFX) ─────────────────────

interface FakeCaster {
  x: number; y: number; z: number;
  screenX: number; screenY: number;
  personnage: Personnage;
  setFacing: (d: 0|1|2|3) => void;
  playAnim: (state: string) => void;
  hasStatus: () => false;
}

// ── Arena scene ──────────────────────────────────────────────────────────────

class ArenaScene extends Phaser.Scene implements IVFXScene {
  private charId = 1;
  private char: Personnage | null = null;
  private charSprite!: CharSprite;
  private casterGX = 4; private casterGY = 3;
  private targetGX = 4; private targetGY = 6;
  private targetGfx!: Phaser.GameObjects.Graphics;
  private targetHP = 100;
  private targetHPBar!: Phaser.GameObjects.Rectangle;
  private infoText!: Phaser.GameObjects.Text;
  private spellButtons: Phaser.GameObjects.Container[] = [];
  private cooldowns: number[] = new Array(10).fill(0);
  private cdLabels: Phaser.GameObjects.Text[] = [];
  private slotBgs: Phaser.GameObjects.Rectangle[] = [];
  private animating = false;

  constructor() {
    super({ key: 'Arena' });
  }

  // ── IVFXScene ──────────────────────────────────────────────────────────────
  screenPosFromGrid(gx: number, gy: number, gz: number) {
    return isoPos(gx, gy, gz);
  }

  // ── Phaser lifecycle ───────────────────────────────────────────────────────
  preload() {
    const params = new URLSearchParams(window.location.search);
    this.charId = parseInt(params.get('id') ?? '1', 10);

    // Tiles
    for (let i = 1; i <= 101; i++) {
      this.load.image(`t${i}`, `/blocks/blocks_${i}.png`);
    }

    // Characters DB
    this.load.json('chardb', '/characters/characters.json');

    // VFX sheets
    for (const id of getAllVFXIds()) {
      this.load.spritesheet(`vfx_${id}`, `/spells/spritesheets/${id}.png`, {
        frameWidth: 48, frameHeight: 48,
      });
    }

    // Baked character sprites
    const baked = BAKED_CHARS.find(b => b.id === this.charId);
    if (baked) loadCharSprites(this, this.charId, baked.folder);

  }

  create() {
    // Register WebGL pipelines
    if (this.renderer instanceof Phaser.Renderer.WebGL.WebGLRenderer) {
      this.renderer.pipelines.addPostPipeline('HitFlashPipeline', HitFlashPipeline);
      this.renderer.pipelines.addPostPipeline('ElementGlowPipeline', ElementGlowPipeline);
    }

    // Register VFX animations
    for (const id of getAllVFXIds()) {
      const key = `vfx_${id}`;
      if (!this.anims.exists(`anim_${key}`)) {
        this.anims.create({
          key: `anim_${key}`,
          frames: this.anims.generateFrameNumbers(key, {}),
          frameRate: 16, repeat: 0,
        });
      }
    }

    // Build character from DB
    type RawChar = { id: number; nom: string; element: string; element2?: string; classe: string; espece: string; region: string; faction: string; [k: string]: unknown };
    const records = this.cache.json.get('chardb') as RawChar[];
    const raw = records?.find(r => r.id === this.charId);
    if (raw) {
      const kit = ELEMENT_KITS[raw.element as keyof typeof ELEMENT_KITS];
      if (kit) {
        this.char = {
          id: raw.id, nom: raw.nom,
          element: raw.element as Personnage['element'],
          element2: raw.element2 as Personnage['element'] | undefined,
          classe: raw.classe as Personnage['classe'],
          espece: raw.espece as Personnage['espece'],
          region: raw.region as Personnage['region'],
          faction: raw.faction as Personnage['faction'],
          description_physique: '', description_personnalite: '',
          position_lore: '', style_combat: '', modifications_classe: '',
          kit,
        };
      }
    }

    // Draw ground
    this._buildGrid();

    // Character sprite
    const elemColor = this.char ? (ELEMENT_TINTS[this.char.element] ?? 0xFF8844) : 0xFF8844;
    this.charSprite = new CharSprite(this, this.charId, elemColor, 0x4488FF);
    const cp = isoPos(this.casterGX, this.casterGY);
    this.charSprite.setPosition(cp.x, cp.y - 18).setDepth(this.casterGX * 64 + this.casterGY * 64 + 600);
    this.charSprite.play('idle');

    // Target dummy
    const tp = isoPos(this.targetGX, this.targetGY);
    this.targetGfx = this.add.graphics().setDepth(this.targetGX * 64 + this.targetGY * 64 + 600);
    this._drawTarget(tp.x, tp.y);

    // Target HP bar background
    this.add.rectangle(tp.x, tp.y - 42, 36, 6, 0x333333).setDepth(99_990);
    this.targetHPBar = this.add.rectangle(tp.x - 18, tp.y - 42, 36, 6, 0x22DD44)
      .setOrigin(0, 0.5).setDepth(99_991);

    // Dim overlay at bottom for HUD
    this.add.rectangle(512, 576 - 50, 1024, 100, 0x000000, 0.82).setScrollFactor(0).setDepth(9_000);

    // Back link + title
    this.add.text(12, 12, '← Personnages', {
      fontSize: '13px', color: '#aaaaaa',
      backgroundColor: '#00000099', padding: { x: 8, y: 5 },
    }).setScrollFactor(0).setDepth(9_001).setInteractive({ useHandCursor: true })
      .on('pointerup', () => { window.location.href = '/characters/'; });

    const nom = this.char?.nom ?? `Personnage #${this.charId}`;
    const meta = this.char ? `${this.char.element} · ${this.char.classe}` : '';
    this.add.text(512, 14, `⚔ ARÈNE  —  ${nom}`, {
      fontSize: '15px', color: '#FFD700', fontStyle: 'bold',
    }).setOrigin(0.5, 0).setScrollFactor(0).setDepth(9_001);
    this.add.text(512, 34, meta, {
      fontSize: '11px', color: '#aaaaaa',
    }).setOrigin(0.5, 0).setScrollFactor(0).setDepth(9_001);

    this.infoText = this.add.text(512, 576 - 90, 'Clique sur un sort pour le lancer', {
      fontSize: '11px', color: '#888888',
    }).setOrigin(0.5).setScrollFactor(0).setDepth(9_001);

    // Spell buttons
    this._buildSpellBar();

    // Spacebar resets target
    this.input.keyboard!.on('keydown-SPACE', () => this._resetTarget());
    this.add.text(512, 576 - 14, '[Espace] Réinitialiser la cible', {
      fontSize: '9px', color: '#555555',
    }).setOrigin(0.5).setScrollFactor(0).setDepth(9_001);
  }

  update() {
    // Tick cooldowns (visual only — no real turn system)
  }

  // ── IVFXScene helper ───────────────────────────────────────────────────────
  private _buildGrid() {
    for (let gy = 0; gy < 9; gy++) {
      for (let gx = 0; gx < 9; gx++) {
        const p = isoPos(gx, gy);
        const depth = gx * 64 + gy * 64;
        // Highlight the caster and target cells
        const isCaster = gx === this.casterGX && gy === this.casterGY;
        const isTarget = gx === this.targetGX && gy === this.targetGY;
        const tile = this.add.image(p.x, p.y + 18, 't1')
          .setDepth(depth)
          .setTint(isCaster ? 0x4466FF : isTarget ? 0xFF4444 : 0xFFFFFF);
        if (isCaster || isTarget) tile.setAlpha(0.85);
      }
    }
  }

  private _drawTarget(sx: number, sy: number) {
    this.targetGfx.clear();
    // Body (diamond pillar)
    this.targetGfx.fillStyle(0xCC2222, 1);
    this.targetGfx.fillEllipse(sx, sy - 10, 22, 28);
    this.targetGfx.lineStyle(2, 0xFF6666, 0.9);
    this.targetGfx.strokeEllipse(sx, sy - 10, 22, 28);
    // Head
    this.targetGfx.fillStyle(0xEE3333, 1);
    this.targetGfx.fillCircle(sx, sy - 26, 9);
    // Cross marker
    this.targetGfx.lineStyle(2, 0xFFAAAA, 0.7);
    this.targetGfx.lineBetween(sx - 6, sy - 26, sx + 6, sy - 26);
    this.targetGfx.lineBetween(sx, sy - 32, sx, sy - 20);
  }

  private _buildSpellBar() {
    const sorts = this.char?.kit?.sorts ?? [];
    const count = Math.min(10, sorts.length);
    if (count === 0) {
      this.add.text(512, 576 - 52, '(aucun sort disponible)', {
        fontSize: '11px', color: '#666666',
      }).setOrigin(0.5).setScrollFactor(0).setDepth(9_002);
      return;
    }

    const SLOT_W = Math.min(90, Math.floor(980 / count));
    const startX = 512 - (count * SLOT_W) / 2 + SLOT_W / 2;
    const Y = 576 - 50;

    for (let i = 0; i < count; i++) {
      const sort = sorts[i];
      const sx = startX + i * SLOT_W;

      const bg = this.add.rectangle(sx, Y, SLOT_W - 4, 88, 0x1a1a2e, 0.95)
        .setScrollFactor(0).setDepth(9_001).setInteractive({ useHandCursor: true });
      const keyLbl = this.add.text(sx - SLOT_W / 2 + 5, Y - 40, `${i + 1}`, {
        fontSize: '8px', color: '#666666',
      }).setScrollFactor(0).setDepth(9_002);
      const nameLbl = this.add.text(sx, Y - 22, sort.nom.slice(0, 10), {
        fontSize: '9px', color: '#dddddd', wordWrap: { width: SLOT_W - 6 }, align: 'center',
      }).setOrigin(0.5).setScrollFactor(0).setDepth(9_002);
      const costLbl = this.add.text(sx, Y - 4, `${sort.coutPM}PM`, {
        fontSize: '9px', color: '#4488ff',
      }).setOrigin(0.5).setScrollFactor(0).setDepth(9_002);
      const typeLbl = this.add.text(sx, Y + 12, sort.type.split('/')[0].slice(0, 9), {
        fontSize: '7px', color: '#666666',
      }).setOrigin(0.5).setScrollFactor(0).setDepth(9_002);
      const cdLbl = this.add.text(sx, Y + 26, '', {
        fontSize: '9px', color: '#FF8833',
      }).setOrigin(0.5).setScrollFactor(0).setDepth(9_002);

      const idx = i;
      bg.on('pointerover', () => { if (this.cooldowns[idx] <= 0) bg.setFillStyle(0x2a2a4a); });
      bg.on('pointerout',  () => bg.setFillStyle(0x1a1a2e));
      bg.on('pointerup',   () => this._castSpell(idx, sort, bg, cdLbl));

      this.cdLabels.push(cdLbl);
      this.slotBgs.push(bg);
      this.spellButtons.push(this.add.container(0, 0, [bg, keyLbl, nameLbl, costLbl, typeLbl, cdLbl]));

      // Keyboard shortcut
      const keyCode = i < 9
        ? Phaser.Input.Keyboard.KeyCodes.ONE + i
        : Phaser.Input.Keyboard.KeyCodes.ZERO;
      const key = this.input.keyboard!.addKey(keyCode);
      key.on('down', () => this._castSpell(idx, sort, bg, cdLbl));
    }
  }

  private _castSpell(idx: number, sort: Sort, bg: Phaser.GameObjects.Rectangle, cdLbl: Phaser.GameObjects.Text) {
    if (this.animating || this.cooldowns[idx] > 0) return;

    this.animating = true;
    this.cooldowns[idx] = sort.cooldown + 1;

    // Update label immediately
    if (sort.cooldown > 0) {
      cdLbl.setText(`CD:${this.cooldowns[idx]}`);
      bg.setFillStyle(0x0d0d1a);
    }

    const cp = isoPos(this.casterGX, this.casterGY);
    const casterScreenX = cp.x;
    const casterScreenY = cp.y - 18;

    const fakeCaster: FakeCaster = {
      x: this.casterGX, y: this.casterGY, z: 0,
      screenX: casterScreenX, screenY: casterScreenY,
      personnage: this.char!,
      setFacing: (d) => this.charSprite.setDirection(d),
      playAnim: (state) => this.charSprite.play(state as Parameters<CharSprite['play']>[0]),
      hasStatus: () => false,
    };

    // Show spell info
    const elem = this.char?.element ?? '';
    sfxSpell(elem);
    this.infoText.setText(`${sort.nom}  ·  ${sort.type}  ·  Portée ${sort.portee}  ·  ${sort.coutPM}PM`).setColor('#FFD700');

    playSpellVFX(this, sort, fakeCaster as any, this.targetGX, this.targetGY, 0, () => {
      // Hit effect on dummy
      this._hitTarget(sort);
      this.time.delayedCall(350, () => {
        this.charSprite.play('idle');
        this.animating = false;
        // Tick cooldowns
        for (let i = 0; i < this.cooldowns.length; i++) {
          if (this.cooldowns[i] > 0) this.cooldowns[i]--;
        }
        this._refreshCooldownLabels();
      });
    });
  }

  private _hitTarget(sort: Sort) {
    const dmg = Math.round(10 + sort.coutPM * 5);
    sfxDamage(dmg);
    this.targetHP = Math.max(0, this.targetHP - dmg);
    this.targetHPBar.setDisplaySize(Math.max(0, 36 * this.targetHP / 100), 6);
    this.targetHPBar.setFillStyle(this.targetHP > 50 ? 0x22DD44 : this.targetHP > 25 ? 0xDDDD22 : 0xDD2222);

    // Flash red
    const tp = isoPos(this.targetGX, this.targetGY);
    this._drawTarget(tp.x, tp.y);
    const flash = this.add.rectangle(tp.x, tp.y - 18, 24, 32, 0xFF2222, 0.5).setDepth(99_999);
    this.tweens.add({ targets: flash, alpha: 0, duration: 250, onComplete: () => flash.destroy() });

    // Damage float
    const dmgTxt = this.add.text(tp.x, tp.y - 40, `-${dmg}`, {
      fontSize: '14px', color: '#FF4444', stroke: '#000', strokeThickness: 2,
    }).setOrigin(0.5).setDepth(100_000);
    this.tweens.add({ targets: dmgTxt, y: tp.y - 70, alpha: 0, duration: 900, ease: 'Quad.Out', onComplete: () => dmgTxt.destroy() });

    if (this.targetHP <= 0) {
      this.time.delayedCall(400, () => {
        this.add.text(tp.x, tp.y - 50, 'K.O.!', {
          fontSize: '18px', color: '#FFDD00', stroke: '#000', strokeThickness: 3, fontStyle: 'bold',
        }).setOrigin(0.5).setDepth(100_001);
        this.time.delayedCall(1200, () => this._resetTarget());
      });
    }
  }

  private _resetTarget() {
    this.targetHP = 100;
    this.targetHPBar.setDisplaySize(36, 6).setFillStyle(0x22DD44);
    const tp = isoPos(this.targetGX, this.targetGY);
    this._drawTarget(tp.x, tp.y);
    this.infoText.setText('Cible réinitialisée').setColor('#44FF88');
    this.time.delayedCall(800, () => this.infoText.setText('Clique sur un sort pour le lancer').setColor('#888888'));
  }

  private _refreshCooldownLabels() {
    for (let i = 0; i < this.cdLabels.length; i++) {
      const cd = this.cooldowns[i];
      this.cdLabels[i].setText(cd > 0 ? `CD:${cd}` : '');
      this.slotBgs[i].setFillStyle(cd > 0 ? 0x0d0d1a : 0x1a1a2e);
    }
  }
}

// ── Boot ─────────────────────────────────────────────────────────────────────

// eslint-disable-next-line @typescript-eslint/no-floating-promises
(async () => {
  const game = new Phaser.Game({
    type: Phaser.AUTO,
    width: 1024,
    height: 576,
    backgroundColor: '#0d0d14',
    scene: ArenaScene,
  });
  void game;
})();
