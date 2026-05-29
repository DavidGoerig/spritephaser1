import type Game from '../game';
import type { Personnage } from '../data/character-types';
import type { Sort } from '../data/character-kits';
import { CLASS_MODS } from '../data/class-mods';
import Grid from './grid';
import { calculateIsoScreenPosition } from '../utils/math';
import { CLASS_STATS, PM_REGEN_PER_TURN } from './combat-stats';
import { ELEMENT_TINTS, UNIT_TEAM_COLORS } from './element-colors';
import { CharSprite, type AnimState } from './char-sprite';
import { sfxDamage, sfxBlock, sfxHeal, sfxDeath } from './sound-engine';

// ── Status effect types ──────────────────────────────────────────────────────

export type StatusEffect =
  | { type: 'burn';        turns: number; dmgPerTurn: number }
  | { type: 'poison';      turns: number; dmgPerTurn: number }
  | { type: 'regen';       turns: number; healPerTurn: number }
  | { type: 'freeze';      turns: number }   // skips entire turn
  | { type: 'stun';        turns: number }   // skips entire turn (no terrain freeze)
  | { type: 'root';        turns: number }   // can't move, can act
  | { type: 'slow';        turns: number }   // move range halved
  | { type: 'wet';         turns: number }   // conducts Electrique chains
  | { type: 'charged';     turns: number }   // amplifies Electrique damage received
  | { type: 'weighted';    turns: number }   // Gravité — move range halved
  | { type: 'shield';      turns: number; amount: number }   // absorbs flat damage
  | { type: 'buff_damage'; turns: number }   // +20% damage dealt
  | { type: 'confuse';     turns: number };  // attacks random target (AI override)

// ── CombatUnit ──────────────────────────────────────────────────────────────

export class CombatUnit {
  readonly personnage: Personnage;
  x: number;
  y: number;
  z: number;
  team: 0 | 1;

  readonly maxPV: number;
  currentPV: number;
  readonly maxPM: number;
  currentPM: number;
  cooldowns: number[];

  hasMoved = false;
  hasActed = false;
  statusEffects: StatusEffect[] = [];

  private scene: Game;
  private charSprite!: CharSprite;
  private selectionRing!: Phaser.GameObjects.Graphics;
  private nameLabel!: Phaser.GameObjects.Text;
  private hpBarBg!: Phaser.GameObjects.Rectangle;
  private hpBar!: Phaser.GameObjects.Rectangle;
  private statusBadges!: Phaser.GameObjects.Graphics;
  private readonly baseElemColor: number;

  private static readonly BADGE_COLORS: Partial<Record<StatusEffect['type'], number>> = {
    burn: 0xFF4400, poison: 0x44FF22, freeze: 0x88DDFF, stun: 0xFFFF44,
    root: 0x886600, slow: 0x9988AA, wet: 0x4488FF, charged: 0xFFDD00,
    shield: 0xAABBFF, buff_damage: 0xFF8844, confuse: 0xFF44FF,
    regen: 0x44FF88, weighted: 0x555555,
  };

  screenX = 0;
  screenY = 0;

  constructor(scene: Game, personnage: Personnage, x: number, y: number, z: number, team: 0 | 1) {
    this.scene = scene;
    this.personnage = personnage;
    this.x = x;
    this.y = y;
    this.z = z;
    this.team = team;

    const stats = CLASS_STATS[personnage.classe];
    this.maxPV = stats.pv;
    this.currentPV = stats.pv;
    this.maxPM = stats.pm;
    this.currentPM = stats.pm;
    this.cooldowns = new Array(10).fill(0);
    this.baseElemColor = ELEMENT_TINTS[personnage.element] ?? 0xAAAAAA;

    this.createSprites();
    this.syncPosition();
  }

  private createSprites() {
    const elemColor = ELEMENT_TINTS[this.personnage.element] ?? 0xAAAAAA;
    const teamColor = UNIT_TEAM_COLORS[this.team];

    this.selectionRing = this.scene.add.graphics().setScrollFactor(1);
    this.charSprite = new CharSprite(
      this.scene, this.personnage.id, elemColor, teamColor,
    );

    this.hpBarBg = this.scene.add
      .rectangle(0, 0, 26, 4, 0x222222)
      .setScrollFactor(1);
    this.hpBar = this.scene.add
      .rectangle(0, 0, 26, 4, 0x22DD44)
      .setScrollFactor(1)
      .setOrigin(0, 0.5);

    this.nameLabel = this.scene.add
      .text(0, 0, this.personnage.nom.slice(0, 9), {
        fontSize: '8px',
        color: '#ffffff',
        stroke: '#000000',
        strokeThickness: 2,
      })
      .setOrigin(0.5)
      .setScrollFactor(1);

    this.statusBadges = this.scene.add.graphics().setScrollFactor(1);
  }

  syncPosition() {
    const [cx, cy] = this.scene.grid.getRenderCartCoords(this.x, this.y);
    const [sx, sy] = calculateIsoScreenPosition(
      cx, cy, 0,
      Grid.OFFSET_X, Grid.OFFSET_Y, Grid.OFFSET_Z,
    );
    const screenY = sy - Grid.OFFSET_Z * this.z - 18;
    const depth = cx + cy + Grid.OFFSET_Z * this.z + 600;

    this.screenX = sx;
    this.screenY = screenY;

    this.charSprite.setPosition(sx, screenY).setDepth(depth);
    this.selectionRing.setPosition(sx, screenY).setDepth(depth - 1);
    this.nameLabel.setPosition(sx, screenY - 20).setDepth(depth + 1);

    const hpPct = Math.max(0, this.currentPV / this.maxPV);
    this.hpBarBg.setPosition(sx, screenY + 18).setDepth(depth + 1);
    this.hpBar.setPosition(sx - 13, screenY + 18).setDepth(depth + 2)
      .setFillStyle(hpPct > 0.5 ? 0x22DD44 : hpPct > 0.25 ? 0xDDDD22 : 0xDD2222);
    if (!this._hpAnimating) {
      this.hpBar.setDisplaySize(Math.max(1, 26 * hpPct), 4);
    }

    this._drawStatusBadges(sx, screenY + 26, depth + 3);
    this._updateGlow();
  }

  private static readonly GLOW_PRIORITY: Array<[StatusEffect['type'], number, number]> = [
    ['confuse',    0xFF44FF, 0.65],
    ['stun',       0xCCEEFF, 0.65],
    ['freeze',     0x88DDFF, 0.70],
    ['burn',       0xFF4400, 0.60],
    ['poison',     0x44FF22, 0.55],
    ['charged',    0xFFDD00, 0.60],
    ['shield',     0xAABBFF, 0.45],
    ['regen',      0x44FF88, 0.40],
    ['root',       0x886600, 0.45],
  ];

  private _updateGlow() {
    for (const [type, color, amount] of CombatUnit.GLOW_PRIORITY) {
      if (this.hasStatus(type)) { this.charSprite.setGlow(color, amount); return; }
    }
    this.charSprite.setGlow(this.baseElemColor, 0.28);
  }

  private _tweenHPBar() {
    const pct = Math.max(0, this.currentPV / this.maxPV);
    this._hpAnimating = true;
    this.hpBar.setFillStyle(pct > 0.5 ? 0x22DD44 : pct > 0.25 ? 0xDDDD22 : 0xDD2222);
    this.scene.tweens.killTweensOf(this.hpBar);
    this.scene.tweens.add({
      targets: this.hpBar,
      displayWidth: Math.max(1, 26 * pct),
      duration: 280,
      ease: 'Power2',
      onComplete: () => { this._hpAnimating = false; },
    });
  }

  private _drawStatusBadges(cx: number, cy: number, depth: number) {
    this.statusBadges.clear().setDepth(depth);
    if (this.statusEffects.length === 0) return;
    const S = 4, GAP = 1;
    const totalW = this.statusEffects.length * (S + GAP) - GAP;
    let bx = cx - totalW / 2;
    for (const e of this.statusEffects) {
      const color = CombatUnit.BADGE_COLORS[e.type] ?? 0xFFFFFF;
      this.statusBadges.fillStyle(color, 1).fillRect(bx, cy, S, S);
      bx += S + GAP;
    }
  }

  private floatText(text: string, color: string) {
    const t = this.scene.add.text(this.screenX, this.screenY - 20, text, {
      fontSize: '14px', color, stroke: '#000000', strokeThickness: 2,
    }).setOrigin(0.5).setDepth(99999).setScrollFactor(1);
    this.scene.tweens.add({
      targets: t,
      y: this.screenY - 58,
      alpha: 0,
      duration: 1100,
      ease: 'Quad.Out',
      onComplete: () => t.destroy(),
    });
  }

  moveTo(x: number, y: number, z: number) {
    const dx = x - this.x, dy = y - this.y;
    if (dx !== 0 || dy !== 0) {
      // Grid-space dominant direction → screen-space facing accounting for camera rotation
      let gf = Math.abs(dx) >= Math.abs(dy) ? (dx > 0 ? 1 : 3) : (dy > 0 ? 2 : 0);
      this.setFacing(((gf + this.scene.grid.direction) % 4) as 0 | 1 | 2 | 3);
    }
    this.x = x; this.y = y; this.z = z;
    this.syncPosition();
  }

  playAnim(state: AnimState, onComplete?: () => void): this {
    this.charSprite.play(state, onComplete);
    return this;
  }

  setFacing(dir: 0 | 1 | 2 | 3): this {
    this.charSprite.setDirection(dir);
    return this;
  }

  setSelected(on: boolean) {
    this.selectionRing.clear();
    if (on) {
      this.selectionRing.lineStyle(3, 0xFFFF00, 1);
      this.selectionRing.strokeCircle(0, 0, 17);
    }
  }

  takeDamage(amount: number) {
    // Shield absorbs first
    const shield = this.statusEffects.find(
      (e): e is Extract<StatusEffect, { type: 'shield' }> => e.type === 'shield',
    );
    if (shield) {
      const absorbed = Math.min(shield.amount, amount);
      shield.amount -= absorbed;
      amount -= absorbed;
      if (shield.amount <= 0) {
        this.statusEffects = this.statusEffects.filter(e => e !== shield);
      }
      if (amount <= 0) {
        sfxBlock();
        this.floatText('BLOQUÉ', '#AAAAFF');
        this.syncPosition();
        return;
      }
    }

    // Charged units take +50% Electrique damage — handled by caller via chargedMultiplier()
    this.currentPV = Math.max(0, this.currentPV - amount);
    this._tweenHPBar();
    this.syncPosition();
    sfxDamage(amount);
    this.floatText(`-${amount}`, '#FF4444');
    this.charSprite.flash();
    if (this.currentPV <= 0) {
      sfxDeath();
      this.charSprite.play('die');
    } else {
      this.charSprite.play('hurt', () => this.charSprite.play('idle'));
    }
  }

  heal(amount: number) {
    this.currentPV = Math.min(this.maxPV, this.currentPV + amount);
    this._tweenHPBar();
    this.syncPosition();
    sfxHeal();
    this.floatText(`+${amount}`, '#44FF88');
  }

  spendPM(amount: number): boolean {
    if (this.currentPM < amount) return false;
    this.currentPM -= amount;
    return true;
  }

  /** Returns true if the unit has the given status type active. */
  hasStatus(type: StatusEffect['type']): boolean {
    return this.statusEffects.some(e => e.type === type);
  }

  /** Adds a status effect, replacing any existing effect of the same type. */
  addStatus(effect: StatusEffect) {
    this.statusEffects = this.statusEffects.filter(e => e.type !== effect.type);
    this.statusEffects.push(effect);
    this.syncPosition();
  }

  /** Removes all effects of the given type. */
  removeStatus(type: StatusEffect['type']) {
    this.statusEffects = this.statusEffects.filter(e => e.type !== type);
    this.syncPosition();
  }

  /** Resolves which kit sort to show in slot index, respecting class_mods.sortOrder. */
  getSort(slotIndex: number): Sort {
    const sorts = this.personnage.kit.sorts;
    const mods = this.personnage.class_mods ?? CLASS_MODS.get(this.personnage.id);
    const order = mods?.sortOrder;
    if (order && slotIndex < order.length && order[slotIndex] < sorts.length) {
      return sorts[order[slotIndex]];
    }
    return sorts[Math.min(slotIndex, sorts.length - 1)];
  }

  /** Effective move range accounting for slow/weighted status. */
  getEffectiveMoveRange(base: number): number {
    if (this.hasStatus('slow') || this.hasStatus('weighted')) return Math.max(1, Math.floor(base / 2));
    return base;
  }

  beginTurn() {
    this.hasMoved = false;
    this.hasActed = false;

    // PM regen
    this.currentPM = Math.min(this.maxPM, this.currentPM + PM_REGEN_PER_TURN);

    // Cooldown decay
    this.cooldowns = this.cooldowns.map(cd => Math.max(0, cd - 1));

    // Per-turn damage / heal effects (fire before checking death)
    if (this.isAlive) {
      for (const e of this.statusEffects) {
        if (!this.isAlive) break;
        if (e.type === 'burn' || e.type === 'poison') {
          this.takeDamage(e.dmgPerTurn);
        } else if (e.type === 'regen') {
          this.heal(e.healPerTurn);
        }
      }
    }

    // Turn-blocking effects
    if (this.isAlive) {
      if (this.statusEffects.some(e => e.type === 'freeze' || e.type === 'stun')) {
        this.hasMoved = true;
        this.hasActed = true;
        this.floatText(this.hasStatus('freeze') ? 'GELÉ' : 'ÉTOURDI', '#88AAFF');
      } else if (this.statusEffects.some(e => e.type === 'root')) {
        this.hasMoved = true;
        this.floatText('ENRACINÉ', '#88FF44');
      }
    }

    // Decay turns (run after processing so a 1-turn effect fires exactly once)
    this.statusEffects = (this.statusEffects as StatusEffect[])
      .map(e => ({ ...e, turns: e.turns - 1 }))
      .filter(e => e.turns > 0) as StatusEffect[];
  }

  private _hpAnimating = false;
  private _destroyed = false;
  get isDestroyed() { return this._destroyed; }

  destroy() {
    if (this._destroyed) return;
    this._destroyed = true;
    this.charSprite.destroy();
    this.selectionRing.destroy();
    this.nameLabel.destroy();
    this.hpBarBg.destroy();
    this.hpBar.destroy();
    this.statusBadges.destroy();
  }

  get isAlive() {
    return this.currentPV > 0;
  }
}
