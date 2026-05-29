import type Game from '../game';
import type { Personnage } from '../data/character-types';
import type { Sort } from '../data/character-kits';
import { CombatUnit } from './combat-unit';
import { CLASS_STATS } from './combat-stats';
import { executeSpell } from './spell-executor';
import { playSpellVFX } from './spell-vfx';
import { ELEMENT_TINTS } from './element-colors';
import { RangeOverlay } from './range-overlay';

export type CombatPhase = 'idle' | 'active' | 'victory';

export class CombatManager {
  units: CombatUnit[] = [];
  private currentIndex = 0;
  round = 1;
  phase: CombatPhase = 'idle';
  selectedSpellIndex: number | null = null;
  winner: 0 | 1 | null = null;
  isAITurn = false;

  // element type per tile: key = "x,y,z"
  private tileElements: Map<string, string> = new Map();
  // dirty tiles that need visual refresh
  private dirtyTiles: Set<string> = new Set();

  log: string[] = [];

  /** True while a spell animation is playing — blocks all input */
  isAnimating = false;

  private _roundDamage = 0;
  private _roundKills = 0;

  tallyDamage(amount: number) { this._roundDamage += amount; }

  private scene: Game;
  private rangeOverlay: RangeOverlay;

  constructor(scene: Game) {
    this.scene = scene;
    this.rangeOverlay = new RangeOverlay(scene);
  }

  addUnit(personnage: Personnage, x: number, y: number, z: number, team: 0 | 1): CombatUnit {
    const unit = new CombatUnit(this.scene, personnage, x, y, z, team);
    this.units.push(unit);
    return unit;
  }

  get currentUnit(): CombatUnit | null {
    return this.units[this.currentIndex] ?? null;
  }

  start() {
    this.units.sort(
      (a, b) => CLASS_STATS[b.personnage.classe].initiative - CLASS_STATS[a.personnage.classe].initiative,
    );
    this.currentIndex = 0;
    this.phase = 'active';
    this.round = 1;
    this.currentUnit?.beginTurn();
    this.currentUnit?.setSelected(true);
    this.addLog(`Tour 1 — ${this.currentUnit?.personnage.nom ?? ''}`);
    this._applyTileEffects();
    if (this.phase !== 'active') return;
    this._showDefaultOverlay();
    this._maybeScheduleAI();
  }

  endTurn() {
    this.currentUnit?.setSelected(false);
    this.selectedSpellIndex = null;
    this.rangeOverlay.clear();

    let next = (this.currentIndex + 1) % this.units.length;
    let loops = 0;
    while (!this.units[next]?.isAlive && loops < this.units.length) {
      next = (next + 1) % this.units.length;
      loops++;
    }
    if (next <= this.currentIndex) {
      const prevRound = this.round;
      this.round++;
      const dmg = this._roundDamage;
      const kills = this._roundKills;
      this._roundDamage = 0;
      this._roundKills = 0;
      if (dmg > 0 || kills > 0) {
        this.addLog(`— Fin round ${prevRound} · ${dmg} dégâts · ${kills} élim. —`);
      }
    }
    this.currentIndex = next;

    const unit = this.currentUnit;
    if (!unit) return;
    unit.beginTurn();

    // Unit may die from burn/poison DOT at turn start
    if (!unit.isAlive) {
      this.removeUnit(unit);
      if (this.phase !== 'active') return;
      const survivor = this.currentUnit;
      if (!survivor) return;
      survivor.setSelected(true);
      this.addLog(`Tour ${this.round} — ${survivor.personnage.nom}`);
      this._applyTileEffects();
      if (this.phase !== 'active') return;
      this._showDefaultOverlay();
      this._maybeScheduleAI();
      return;
    }

    unit.setSelected(true);
    this.addLog(`Tour ${this.round} — ${unit.personnage.nom}`);
    this._applyTileEffects();
    if (this.phase !== 'active') return;
    this._showDefaultOverlay();
    this._maybeScheduleAI();
  }

  getUnitAt(x: number, y: number): CombatUnit | null {
    return this.units.find(u => u.isAlive && u.x === x && u.y === y) ?? null;
  }

  /** Delay removal to let the death animation play (750 ms). */
  scheduleRemoveUnit(unit: CombatUnit) {
    this.scene.time.delayedCall(750, () => {
      if (!unit.isDestroyed && this.units.includes(unit)) this.removeUnit(unit);
    });
  }

  removeUnit(unit: CombatUnit) {
    this.addLog(`${unit.personnage.nom} est éliminé`);
    if (this.phase === 'active') this._roundKills++;
    unit.destroy();
    this.units = this.units.filter(u => u !== unit);

    if (this.currentIndex >= this.units.length) {
      this.currentIndex = Math.max(0, this.units.length - 1);
    }

    const victory = this.checkVictory();
    if (victory !== null) {
      this.winner = victory;
      this.phase = 'victory';
      this.addLog(`Équipe ${victory === 0 ? 'A' : 'B'} gagne !`);
    }
  }

  handleTileClick(x: number, y: number, z: number) {
    if (this.phase !== 'active' || this.isAITurn || this.isAnimating) return;
    const unit = this.currentUnit;
    if (!unit) return;

    const targetUnit = this.getUnitAt(x, y);

    // Confuse: block spells and enemy attacks; movement still allowed
    if (unit.hasStatus('confuse') && (this.selectedSpellIndex !== null || (targetUnit && targetUnit.team !== unit.team))) {
      this.addLog(`${unit.personnage.nom} est confus — action annulée !`);
      return;
    }

    // Cast selected spell
    if (this.selectedSpellIndex !== null) {
      const idx = this.selectedSpellIndex;
      const sort = unit.getSort(idx);
      const spellDist = Math.abs(x - unit.x) + Math.abs(y - unit.y);

      if (unit.cooldowns[idx] > 0) {
        this.addLog(`Sort en recharge (${unit.cooldowns[idx]} tours)`);
        return;
      }
      if (spellDist > sort.portee) {
        this.addLog(`Hors de portée (max ${sort.portee} cases)`);
        return;
      }
      if (!unit.spendPM(sort.coutPM)) {
        this.addLog(`PM insuffisants (${unit.currentPM}/${sort.coutPM})`);
        return;
      }
      unit.cooldowns[idx] = sort.cooldown;
      unit.hasActed = true;
      this.selectedSpellIndex = null;
      this.isAnimating = true;
      playSpellVFX(this.scene, sort, unit, x, y, z, () => {
        const result = executeSpell(sort, unit, { x, y, z }, this);
        this.addLog(result.message);
        this.applyTileElementTints();
        this.scene.time.delayedCall(320, () => {
          unit.playAnim('idle');
          this.isAnimating = false;
          this._showDefaultOverlay();
        });
      });
      return;
    }

    // Click own unit: select (already current, nothing to do)
    if (targetUnit === unit) return;

    // Click ally: nothing
    if (targetUnit && targetUnit.team === unit.team) return;

    // Click empty tile: move
    if (!targetUnit && !unit.hasMoved) {
      const dist = Math.abs(x - unit.x) + Math.abs(y - unit.y);
      const moveRange = unit.getEffectiveMoveRange(CLASS_STATS[unit.personnage.classe].moveRange);
      if (dist > moveRange) {
        this.addLog(`Trop loin (max ${moveRange} cases)`);
        return;
      }
      const topZ = this.scene.grid.getTopTile(x, y)?.z ?? 0;
      unit.moveTo(x, y, topZ);
      unit.hasMoved = true;
      this.rangeOverlay.clear();
      this.addLog(`${unit.personnage.nom} → (${x},${y})`);
      return;
    }

    // Click enemy with no spell: basic attack (sort[0])
    if (targetUnit && targetUnit.team !== unit.team && !unit.hasActed) {
      const sort = unit.getSort(0);
      const atkDist = Math.abs(x - unit.x) + Math.abs(y - unit.y);
      if (atkDist > sort.portee) {
        this.addLog(`Hors de portée (attaque de base : ${sort.portee} cases)`);
        return;
      }
      if (unit.spendPM(sort.coutPM)) {
        unit.cooldowns[0] = sort.cooldown;
        unit.hasActed = true;
        this.isAnimating = true;
        playSpellVFX(this.scene, sort, unit, x, y, z, () => {
          const result = executeSpell(sort, unit, { x, y, z }, this);
          this.addLog(result.message);
          this.applyTileElementTints();
          this.scene.time.delayedCall(320, () => {
            unit.playAnim('idle');
            this.isAnimating = false;
            this._showDefaultOverlay();
          });
        });
      } else {
        this.addLog('PM insuffisants pour attaquer');
      }
    }
  }

  selectSpell(index: number) {
    if (this.phase !== 'active' || this.isAITurn) return;
    const unit = this.currentUnit;
    if (!unit || unit.hasActed) {
      this.addLog('Action déjà utilisée ce tour');
      return;
    }
    this.selectedSpellIndex = this.selectedSpellIndex === index ? null : index;
    if (this.selectedSpellIndex !== null) {
      const portee = unit.getSort(this.selectedSpellIndex).portee;
      this.rangeOverlay.showSpellRange(unit, portee, this);
    } else {
      this._showDefaultOverlay();
    }
  }

  private static readonly REACTIONS: Record<string, string> = {
    'Eau+Feu':        'Vapeur',
    'Feu+Glace':      'Vapeur',
    'Dragon+Glace':   'Vapeur',
    'Dragon+Eau':     'Vapeur',
    'Eau+Electrique': 'Electrique',
    'Electrique+Sol': 'Electrique',
    'Eau+Sol':        'Sol',
    'Feu+Plante':     'Feu',
    'Glace+Plante':   'Glace',
    'Combat+Ténèbres':'Normal',
    'Feu+Roche':      'Magma',
    'Magma+Eau':      'Roche',
  };

  setTileElement(x: number, y: number, z: number, element: string | null) {
    const key = `${x},${y},${z}`;
    if (!element) { this.tileElements.delete(key); this.dirtyTiles.add(key); return; }

    const existing = this.tileElements.get(key);
    if (existing && existing !== element) {
      const pair = [existing, element].sort().join('+');
      const reacted = CombatManager.REACTIONS[pair];
      if (reacted) {
        this.tileElements.set(key, reacted);
        this.dirtyTiles.add(key);
        this.addLog(`Réaction ${existing} + ${element} → ${reacted} !`);
        if (reacted === 'Vapeur') {
          // Steam burst: small AoE damage
          for (const u of this.units.filter(u => u.isAlive)) {
            if (Math.abs(u.x - x) <= 1 && Math.abs(u.y - y) <= 1) {
              this.addLog(`${u.personnage.nom} brûlé par la vapeur −8 PV`);
              u.takeDamage(8);
              if (!u.isAlive) this.scheduleRemoveUnit(u);
            }
          }
        }
        return;
      }
    }
    this.tileElements.set(key, element);
    this.dirtyTiles.add(key);
  }

  getTileElement(x: number, y: number, z: number): string | null {
    return this.tileElements.get(`${x},${y},${z}`) ?? null;
  }

  applyTileElementTints() {
    for (const key of this.dirtyTiles) {
      const [xs, ys, zs] = key.split(',');
      const x = parseInt(xs), y = parseInt(ys), z = parseInt(zs);
      const element = this.tileElements.get(key) ?? null;
      const tile = this.scene.grid.getTile(x, y, z);
      if (tile) {
        const color = element ? (ELEMENT_TINTS[element] ?? null) : null;
        tile.setCustomTint(color);
      }
    }
    this.dirtyTiles.clear();
  }

  syncUnitPositions() {
    for (const unit of this.units) {
      unit.syncPosition();
    }
    this.rangeOverlay.refresh();
  }

  getSpellArea(sort: Sort, caster: CombatUnit, tx: number, ty: number): Array<{ x: number; y: number }> {
    const type = sort.type;

    if (/zone|rayon/i.test(type)) {
      const tiles: Array<{ x: number; y: number }> = [];
      for (let x = 0; x < 10; x++)
        for (let y = 0; y < 10; y++)
          if (Math.abs(x - tx) + Math.abs(y - ty) <= 2) tiles.push({ x, y });
      return tiles;
    }

    if (/cône|cone/i.test(type)) {
      const dx = tx - caster.x, dy = ty - caster.y;
      const len = Math.sqrt(dx * dx + dy * dy);
      if (len === 0) return [{ x: tx, y: ty }];
      const nx = dx / len, ny = dy / len;
      const tiles: Array<{ x: number; y: number }> = [];
      for (let x = 0; x < 10; x++) {
        for (let y = 0; y < 10; y++) {
          const ex = x - caster.x, ey = y - caster.y;
          const dist = Math.abs(ex) + Math.abs(ey);
          if (dist === 0 || dist > sort.portee) continue;
          const elen = Math.sqrt(ex * ex + ey * ey);
          if ((ex / elen) * nx + (ey / elen) * ny >= 0.5) tiles.push({ x, y });
        }
      }
      return tiles;
    }

    if (/ligne|traînée|mur/i.test(type)) {
      const dx = tx - caster.x, dy = ty - caster.y;
      const steps = Math.max(Math.abs(dx), Math.abs(dy));
      if (steps === 0) return [{ x: tx, y: ty }];
      const tiles: Array<{ x: number; y: number }> = [];
      for (let i = 1; i <= Math.min(steps, sort.portee); i++) {
        const x = caster.x + Math.round((dx / steps) * i);
        const y = caster.y + Math.round((dy / steps) * i);
        if (x >= 0 && x < 10 && y >= 0 && y < 10) tiles.push({ x, y });
      }
      return tiles;
    }

    return [{ x: tx, y: ty }];
  }

  showSpellAreaPreview(sort: Sort, caster: CombatUnit, tx: number, ty: number) {
    this.rangeOverlay.showSpellArea(this.getSpellArea(sort, caster, tx, ty));
  }

  clearSpellAreaPreview() {
    this.rangeOverlay.clearArea();
  }

  private _showDefaultOverlay() {
    const unit = this.currentUnit;
    if (!unit) { this.rangeOverlay.clear(); return; }
    if (!unit.hasMoved) {
      this.rangeOverlay.showMoveRange(unit, CLASS_STATS[unit.personnage.classe].moveRange, this);
    } else {
      this.rangeOverlay.clear();
    }
  }

  // ── Tile effects ─────────────────────────────────────────────

  private _applyTileEffects() {
    const unit = this.currentUnit;
    if (!unit || this.phase !== 'active') return;

    const element = this.getTileElement(unit.x, unit.y, unit.z);
    if (!element) return;

    const TILE_DMG: Record<string, number> = {
      Feu: 15, Magma: 28, Electrique: 20, Poison: 10, Vapeur: 5,
      Ténèbres: 12, Dragon: 22,
    };
    const TILE_MSG: Record<string, string> = {
      Feu: 'brûle', Magma: 'brûle dans la lave', Electrique: 'est électrocuté',
      Poison: 'est empoisonné', Vapeur: 'est brûlé à la vapeur',
      Ténèbres: 'est drainé par les ombres', Dragon: 'est brûlé par le souffle draconique',
    };

    // Cross-status × tile bonus effects (before base damage)
    if (element === 'Electrique' && unit.hasStatus('wet')) {
      this.addLog(`${unit.personnage.nom} est conducteur ! Double choc électrique`);
      unit.takeDamage(25);
      unit.removeStatus('wet');
      if (!unit.isAlive) { this.removeUnit(unit); return; }
    }
    if (element === 'Feu' && unit.hasStatus('freeze')) {
      this.addLog(`${unit.personnage.nom} dégèle ! Vapeur libérée`);
      unit.removeStatus('freeze');
      this.setTileElement(unit.x, unit.y, unit.z, 'Vapeur');
    }
    if ((element === 'Poison' || element === 'Sol') && unit.hasStatus('root')) {
      this.addLog(`${unit.personnage.nom} est piégé plus profondément (−5 PV bonus)`);
      unit.takeDamage(5);
      if (!unit.isAlive) { this.removeUnit(unit); return; }
    }

    const dmg = TILE_DMG[element] ?? 0;
    if (dmg > 0) {
      this.addLog(`${unit.personnage.nom} ${TILE_MSG[element]} ! −${dmg} PV`);
      unit.takeDamage(dmg);
      if (!unit.isAlive) { this.removeUnit(unit); return; }
    }

    switch (element) {
      case 'Glace':
        if (!unit.hasStatus('freeze')) {
          unit.addStatus({ type: 'freeze', turns: 1 });
          unit.hasMoved = true;
          unit.hasActed = true;
          this.addLog(`${unit.personnage.nom} est gelé ! Tour passé`);
        }
        break;

      case 'Plante':
        unit.heal(8);
        this.addLog(`${unit.personnage.nom} se régénère sur la végétation (+8 PV)`);
        break;

      case 'Fée':
        unit.addStatus({ type: 'regen', turns: 2, healPerTurn: 8 });
        this.addLog(`${unit.personnage.nom} est béni par la fée (regen 8 PV/tour)`);
        break;

      case 'Combat':
        unit.addStatus({ type: 'buff_damage', turns: 2 });
        this.addLog(`${unit.personnage.nom} entre en furie de combat (+20% dégâts, 2 tours)`);
        break;

      case 'Sol':
        if (!unit.hasStatus('slow')) {
          unit.addStatus({ type: 'slow', turns: 2 });
          this.addLog(`${unit.personnage.nom} s'enlise dans la boue (lent 2 tours)`);
        }
        break;

      case 'Roche':
        if (!unit.hasStatus('root')) {
          unit.addStatus({ type: 'root', turns: 1 });
          unit.hasMoved = true;
          this.addLog(`${unit.personnage.nom} est piégé par les rochers (enraciné)`);
        }
        break;

      case 'Psy':
        if (!unit.hasStatus('confuse')) {
          unit.addStatus({ type: 'confuse', turns: 1 });
          this.addLog(`${unit.personnage.nom} est troublé par les ondes psy (confus)`);
        }
        break;

      case 'Vent': {
        const freed: string[] = [];
        for (const t of ['slow', 'weighted', 'root'] as const) {
          if (unit.hasStatus(t)) { unit.removeStatus(t); freed.push(t); }
        }
        if (freed.length > 0) {
          this.addLog(`${unit.personnage.nom} est libéré par le vent (${freed.join(', ')} dissipé)`);
        }
        break;
      }
    }
  }

  // ── AI (team B) ───────────────────────────────────────────────

  private _maybeScheduleAI() {
    if (this.phase !== 'active') return;
    const unit = this.currentUnit;
    if (!unit || unit.team !== 1) return;
    this.isAITurn = true;
    this.scene.time.delayedCall(800, () => this._aiMove());
  }

  private static readonly BONUS_TILES = new Set(['Plante', 'Fée', 'Combat']);
  private static readonly DANGEROUS_TILES = new Set(['Feu', 'Magma', 'Electrique', 'Poison', 'Vapeur', 'Ténèbres', 'Dragon']);

  private _aiMove() {
    const unit = this.currentUnit;
    if (!unit || this.phase !== 'active') { this.isAITurn = false; return; }

    const enemies = this.units.filter(u => u.team !== unit.team && u.isAlive);
    if (!enemies.length) { this.isAITurn = false; this.endTurn(); return; }

    const nearest = [...enemies].sort(
      (a, b) => (Math.abs(a.x - unit.x) + Math.abs(a.y - unit.y))
              - (Math.abs(b.x - unit.x) + Math.abs(b.y - unit.y)),
    )[0];

    if (!unit.hasMoved) {
      const moveRange = unit.getEffectiveMoveRange(CLASS_STATS[unit.personnage.classe].moveRange);
      const distToNearest = Math.abs(nearest.x - unit.x) + Math.abs(nearest.y - unit.y);

      // Prefer a reachable bonus tile that doesn't retreat more than 1 step from the enemy
      const bonusDest = this._aiBonusStep(unit, nearest, moveRange, distToNearest);
      const dest = bonusDest ?? this._aiPathStep(unit, nearest, moveRange);

      if (dest) {
        const topZ = this.scene.grid.getTopTile(dest.x, dest.y)?.z ?? 0;
        unit.moveTo(dest.x, dest.y, topZ);
        unit.hasMoved = true;
        this.rangeOverlay.clear();
        this.addLog(bonusDest
          ? `${unit.personnage.nom} avance vers une case avantageuse`
          : `${unit.personnage.nom} avance`);
      }
    }

    this.scene.time.delayedCall(600, () => this._aiAttack());
  }

  /** Returns the best reachable bonus tile if one is worth stepping to, else null. */
  private _aiBonusStep(
    unit: CombatUnit, nearest: CombatUnit, moveRange: number, distToNearest: number,
  ): { x: number; y: number } | null {
    let best: { x: number; y: number } | null = null;
    let bestScore = -Infinity;

    for (let x = 0; x < 10; x++) {
      for (let y = 0; y < 10; y++) {
        const dist = Math.abs(x - unit.x) + Math.abs(y - unit.y);
        if (dist === 0 || dist > moveRange) continue;
        if (this.getUnitAt(x, y)) continue;
        const topZ = this.scene.grid.getTopTile(x, y)?.z ?? 0;
        const el = this.getTileElement(x, y, topZ) ?? '';
        if (!CombatManager.BONUS_TILES.has(el)) continue;

        const newDist = Math.abs(nearest.x - x) + Math.abs(nearest.y - y);
        // Don't retreat more than 1 step further from the enemy
        if (newDist > distToNearest + 1) continue;

        // Score: closing in on enemy outweighs bonus, but bonus is still worth a detour
        const score = (distToNearest - newDist) * 2 + 3
          + (el === 'Combat' ? 2 : 0)                        // Combat bonus: extra damage
          + (el === 'Fée' ? 1 : 0)                           // Fée: regen
          + (unit.currentPV < unit.maxPV * 0.5 && el === 'Plante' ? 3 : 0); // Plante: heal when low

        if (score > bestScore) { bestScore = score; best = { x, y }; }
      }
    }
    return best;
  }

  private _aiAttack() {
    const unit = this.currentUnit;
    if (!unit || this.phase !== 'active') { this.isAITurn = false; return; }

    const enemies = this.units.filter(u => u.team !== unit.team && u.isAlive);
    if (!enemies.length) { this.isAITurn = false; this.endTurn(); return; }

    // Confuse: attack a random ally instead
    if (unit.hasStatus('confuse') && !unit.hasActed) {
      const allies = this.units.filter(u => u.team === unit.team && u !== unit && u.isAlive);
      if (allies.length > 0) {
        const victim = allies[Math.floor(Math.random() * allies.length)];
        const sort = unit.getSort(0);
        if (unit.spendPM(sort.coutPM)) {
          unit.cooldowns[0] = sort.cooldown;
          unit.hasActed = true;
          this.isAnimating = true;
          this.addLog(`${unit.personnage.nom} est confus ! Attaque ${victim.personnage.nom}`);
          playSpellVFX(this.scene, sort, unit, victim.x, victim.y, victim.z, () => {
            executeSpell(sort, unit, { x: victim.x, y: victim.y, z: victim.z }, this);
            this.applyTileElementTints();
            this.scene.time.delayedCall(320, () => {
              unit.playAnim('idle');
              this.isAnimating = false;
              this.scene.time.delayedCall(280, () => {
                this.isAITurn = false;
                if (this.phase === 'active') this.endTurn();
              });
            });
          });
          return;
        }
      }
    }

    const nearest = [...enemies].sort(
      (a, b) => (Math.abs(a.x - unit.x) + Math.abs(a.y - unit.y))
              - (Math.abs(b.x - unit.x) + Math.abs(b.y - unit.y)),
    )[0];

    if (!unit.hasActed) {
      const lowHP = unit.currentPV < unit.maxPV * 0.45;
      let bestIdx = -1;
      let bestScore = -Infinity;
      let bestTx = nearest.x, bestTy = nearest.y, bestTz = nearest.z;

      for (let i = 0; i < unit.personnage.kit.sorts.length; i++) {
        const sort = unit.getSort(i);
        if (!sort || unit.cooldowns[i] > 0 || unit.currentPM < sort.coutPM) continue;

        const isDmg     = sort.type.includes('Dégâts');
        const isHeal    = sort.type.includes('Soin');
        const isTerrain = sort.type.includes('Terrain');
        const isCtrl    = sort.type.includes('Contrôle');
        const isBuff    = sort.type.includes('Buff');

        const inRange = enemies.filter(
          e => Math.abs(e.x - unit.x) + Math.abs(e.y - unit.y) <= sort.portee,
        );
        const weakest = inRange.length
          ? inRange.reduce((a, b) => a.currentPV <= b.currentPV ? a : b)
          : null;

        let score = 0;
        let tx = nearest.x, ty = nearest.y, tz = nearest.z;

        if (isHeal) {
          score = lowHP ? 30 : 4;
          tx = unit.x; ty = unit.y; tz = unit.z;
        } else if (isDmg && weakest) {
          score = 20;
          if (weakest.currentPV < 40) score += 8;
          tx = weakest.x; ty = weakest.y; tz = weakest.z;
        } else if ((isTerrain || isCtrl) && inRange.length > 0) {
          score = 12;
          tx = inRange[0].x; ty = inRange[0].y; tz = inRange[0].z;
        } else if (isBuff && !isDmg && !isHeal && !isTerrain && !isCtrl) {
          score = lowHP ? 5 : 9;
          tx = unit.x; ty = unit.y; tz = unit.z;
        } else {
          continue;
        }

        if (score > bestScore) {
          bestScore = score;
          bestIdx = i;
          bestTx = tx; bestTy = ty; bestTz = tz;
        }
      }

      if (bestIdx >= 0) {
        const sort = unit.getSort(bestIdx);
        if (unit.spendPM(sort.coutPM)) {
          unit.cooldowns[bestIdx] = sort.cooldown;
          unit.hasActed = true;
          this.isAnimating = true;
          playSpellVFX(this.scene, sort, unit, bestTx, bestTy, bestTz, () => {
            const result = executeSpell(sort, unit, { x: bestTx, y: bestTy, z: bestTz }, this);
            this.addLog(result.message);
            this.applyTileElementTints();
            this.scene.time.delayedCall(320, () => {
              unit.playAnim('idle');
              this.isAnimating = false;
              this.scene.time.delayedCall(280, () => {
                this.isAITurn = false;
                if (this.phase === 'active') this.endTurn();
              });
            });
          });
          return; // Turn end handled inside callback
        }
      }
    }

    // No attack fired — end turn after short pause
    this.scene.time.delayedCall(400, () => {
      this.isAITurn = false;
      if (this.phase === 'active') this.endTurn();
    });
  }

  private _aiPathStep(
    unit: CombatUnit, target: CombatUnit, moveRange: number,
  ): { x: number; y: number } | null {
    const canStep = (nx: number, ny: number) => {
      if (this.getUnitAt(nx, ny)) return false;
      const topZ = this.scene.grid.getTopTile(nx, ny)?.z ?? 0;
      return !CombatManager.DANGEROUS_TILES.has(this.getTileElement(nx, ny, topZ) ?? '');
    };

    let cx = unit.x, cy = unit.y;
    const maxSteps = Math.min(moveRange, Math.abs(target.x - cx) + Math.abs(target.y - cy) - 1);
    for (let step = 0; step < maxSteps; step++) {
      const dx = Math.sign(target.x - cx);
      const dy = Math.sign(target.y - cy);
      const preferX = Math.abs(target.x - cx) >= Math.abs(target.y - cy);
      let nx = cx, ny = cy;
      if (preferX && dx !== 0 && canStep(cx + dx, cy)) nx = cx + dx;
      else if (!preferX && dy !== 0 && canStep(cx, cy + dy)) ny = cy + dy;
      else if (dx !== 0 && canStep(cx + dx, cy)) nx = cx + dx;
      else if (dy !== 0 && canStep(cx, cy + dy)) ny = cy + dy;
      else break;
      cx = nx; cy = ny;
    }
    return (cx !== unit.x || cy !== unit.y) ? { x: cx, y: cy } : null;
  }

  private checkVictory(): 0 | 1 | null {
    const t0 = this.units.filter(u => u.team === 0 && u.isAlive).length;
    const t1 = this.units.filter(u => u.team === 1 && u.isAlive).length;
    if (t0 === 0) return 1;
    if (t1 === 0) return 0;
    return null;
  }

  addLog(msg: string) {
    this.log.unshift(msg);
    if (this.log.length > 8) this.log.pop();
  }
}
