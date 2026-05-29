import type Game from '../game';
import type { Sort } from '../data/character-kits';
import type { CombatUnit } from './combat-unit';
import type { AnimState } from './char-sprite';
import Grid from './grid';
import { calculateIsoScreenPosition } from '../utils/math';
import { ELEMENT_TINTS } from './element-colors';
import { getVFXId } from '../data/spell-vfx-map';

// Module-level state set once per spell dispatch
let _vfxKey    = '';
let _vfxCostPM = 0;   // used to scale screen-shake intensity

// ── Types ───────────────────────────────────────────────────────────────────

type TravelPath = 'projectile' | 'arc' | 'aoe' | 'self' | 'beam' | 'charge' | 'cone' | 'line';
type Pt = { x: number; y: number };

const WINDUP_MS = 200;

const SPELL_VFX_CONFIG: Partial<Record<string, TravelPath>> = {
  'Feu|3':  'line',   'Feu|4':  'line',   'Feu|5':  'aoe',   'Feu|10': 'aoe',
  'Glace|1': 'cone',  'Glace|6': 'aoe',
  'Electrique|1': 'projectile', 'Electrique|2': 'aoe', 'Electrique|5': 'aoe',
  'Eau|2': 'aoe',     'Eau|3': 'aoe',     'Eau|4': 'arc',    'Eau|6': 'aoe',
  'Plante|3': 'self', 'Fée|2': 'self',
  'Dragon|1': 'cone',
  'Gravité|1': 'aoe', 'Gravité|2': 'aoe',
  'Vent|1': 'beam',   'Spectre|2': 'self',
};

// ── Position helpers ─────────────────────────────────────────────────────────

function travelPath(sort: Sort, element: string): TravelPath {
  const override = SPELL_VFX_CONFIG[`${element}|${sort.num}`];
  if (override) return override;
  const t = sort.type.toLowerCase();
  if (t.includes('déplacement') && t.includes('dégâts')) return 'charge';
  if (t.includes('déplacement')) return 'self';
  if (t.includes('buff') || t.includes('soin')) return 'self';
  if (t.includes('zone') || t.includes('invocation')) return 'aoe';
  if (t.includes('terrain') && !t.includes('dégâts')) return 'aoe';
  if (t.includes('contrôle')) return 'projectile';
  if (t.includes('dégâts')) return sort.portee >= 4 ? 'projectile' : 'arc';
  return 'aoe';
}

function attackAnimState(sortNum: number): AnimState {
  const n = Math.max(1, Math.min(10, sortNum));
  return `attack-${String(n).padStart(2, '0')}` as AnimState;
}

function unitPos(unit: CombatUnit, scene: Game): Pt {
  const [cx, cy] = scene.grid.getRenderCartCoords(unit.x, unit.y);
  const [sx, sy] = calculateIsoScreenPosition(cx, cy, 0, Grid.OFFSET_X, Grid.OFFSET_Y, Grid.OFFSET_Z);
  return { x: sx, y: sy - Grid.OFFSET_Z * unit.z - 18 };
}

function gridPos(gx: number, gy: number, gz: number, scene: Game): Pt {
  const [cx, cy] = scene.grid.getRenderCartCoords(gx, gy);
  const [sx, sy] = calculateIsoScreenPosition(cx, cy, 0, Grid.OFFSET_X, Grid.OFFSET_Y, Grid.OFFSET_Z);
  return { x: sx, y: sy - Grid.OFFSET_Z * gz - 18 };
}

function facingDir(caster: CombatUnit, tx: number, ty: number): 0 | 1 | 2 | 3 {
  const dx = tx - caster.x, dy = ty - caster.y;
  if (Math.abs(dx) >= Math.abs(dy)) return dx > 0 ? 1 : 3;
  return dy > 0 ? 2 : 0;
}

// ── Sprite primitives ────────────────────────────────────────────────────────

/**
 * Primary impact sprite: punch-in (Back.Out 150ms) → hold briefly → grow+fade (420ms).
 * Uses ADD blend mode so it glows over the scene.
 * @param scale  Final display scale
 * @param delay  ms before spawning (stagger for multi-hit)
 */
function spawnVFXSprite(scene: Game, pos: Pt, scale = 1.5, delay = 0) {
  if (!_vfxKey || !scene.textures.exists(_vfxKey)) return;
  const animKey = `anim_${_vfxKey}`;

  scene.time.delayedCall(delay, () => {
    // ── Background bloom layer (softer, slightly larger, depth behind) ──────
    if (scene.textures.exists(_vfxKey)) {
      const bloom = scene.add.sprite(pos.x, pos.y, _vfxKey)
        .setDepth(99_000)
        .setScale(scale * 0.6)
        .setAlpha(0.35)
        .setBlendMode(Phaser.BlendModes.ADD);
      scene.tweens.add({
        targets: bloom,
        scaleX: scale * 1.7, scaleY: scale * 1.7, alpha: 0,
        duration: 680,
        ease: 'Power1',
        onComplete: () => bloom.destroy(),
      });
    }

    // ── Main sprite: punch-in then fade ─────────────────────────────────────
    const spr = scene.add.sprite(pos.x, pos.y, _vfxKey)
      .setDepth(99_001)
      .setScale(scale * 0.4)
      .setAlpha(1)
      .setBlendMode(Phaser.BlendModes.ADD);

    if (scene.anims.exists(animKey)) spr.play({ key: animKey, repeat: 0 });

    scene.tweens.add({
      targets: spr,
      scaleX: scale, scaleY: scale,
      duration: 150,
      ease: 'Back.Out',
      onComplete: () => {
        scene.tweens.add({
          targets: spr,
          alpha: 0,
          scaleX: scale * 1.3, scaleY: scale * 1.3,
          duration: 420,
          delay: 80,
          ease: 'Power2',
          onComplete: () => spr.destroy(),
        });
      },
    });
  });
}

/**
 * Looping sprite for travel — stays at scale and alpha until caller destroys it.
 */
function spawnTravelSprite(scene: Game, pos: Pt, scale = 0.65): Phaser.GameObjects.Sprite | null {
  if (!_vfxKey || !scene.textures.exists(_vfxKey)) return null;
  const animKey = `anim_${_vfxKey}`;
  const spr = scene.add.sprite(pos.x, pos.y, _vfxKey)
    .setDepth(99_000).setScale(scale).setAlpha(0.85)
    .setBlendMode(Phaser.BlendModes.ADD);
  if (scene.anims.exists(animKey)) spr.play({ key: animKey, repeat: -1 });
  return spr;
}

/**
 * Two expanding concentric rings from the impact point.
 * Gives every hit visual weight/grounding.
 */
function vfxShockwave(scene: Game, color: number, pos: Pt, delay = 0) {
  for (let ring = 0; ring < 2; ring++) {
    scene.time.delayedCall(delay + ring * 70, () => {
      const p   = { r: 6, a: ring === 0 ? 0.85 : 0.55 };
      const gfx = scene.add.graphics().setDepth(98_998).setPosition(pos.x, pos.y);
      scene.tweens.add({
        targets: p,
        r: ring === 0 ? 58 : 44,
        a: 0,
        duration: ring === 0 ? 420 : 340,
        ease: 'Power2',
        onUpdate: () => {
          gfx.clear();
          const thick = Math.max(0.5, (ring === 0 ? 2.5 : 1.5) * (1 - p.r / (ring === 0 ? 58 : 44)));
          gfx.lineStyle(thick, color, p.a);
          gfx.strokeCircle(0, 0, p.r);
        },
        onComplete: () => gfx.destroy(),
      });
    });
  }
}

/**
 * Screen shake scaled to spell PM cost.
 * Cost 2-3 → subtle; 4-5 → medium; 6+ → heavy.
 */
function shakeCamera(scene: Game) {
  if (_vfxCostPM < 2) return;
  const intensity = Math.min(0.011, 0.002 * _vfxCostPM);
  const duration  = 80 + _vfxCostPM * 18;
  scene.cameras.main.shake(duration, intensity);
}

// ── Public API ───────────────────────────────────────────────────────────────

export function playSpellVFX(
  scene: Game,
  sort: Sort,
  caster: CombatUnit,
  targetX: number,
  targetY: number,
  targetZ: number,
  onImpact?: () => void,
): void {
  const element = caster.personnage.element;
  const color   = ELEMENT_TINTS[element as keyof typeof ELEMENT_TINTS] ?? 0xFFFFFF;
  const path    = travelPath(sort, element);
  const from    = unitPos(caster, scene);
  const to      = gridPos(targetX, targetY, targetZ, scene);

  _vfxKey    = `vfx_${getVFXId(element, sort.num)}`;
  _vfxCostPM = sort.coutPM;

  caster.setFacing(facingDir(caster, targetX, targetY));
  caster.playAnim(attackAnimState(sort.num));
  vfxCasterCharge(scene, color, from);

  scene.time.delayedCall(WINDUP_MS, () => {
    switch (path) {
      case 'projectile': vfxProjectile(scene, color, from, to, onImpact); break;
      case 'arc':        vfxArc(scene, color, from, to, onImpact);        break;
      case 'aoe':        vfxAoe(scene, color, to, onImpact);              break;
      case 'self':       vfxAoe(scene, color, from, onImpact);            break;
      case 'beam':       vfxBeam(scene, color, from, to, onImpact);       break;
      case 'charge':     vfxCharge(scene, color, from, to, onImpact);     break;
      case 'cone':       vfxCone(scene, color, from, to, onImpact);       break;
      case 'line':       vfxLine(scene, color, from, to, onImpact);       break;
    }
  });
}

// ── Caster charge flash ───────────────────────────────────────────────────────

function vfxCasterCharge(scene: Game, color: number, pos: Pt) {
  if (_vfxKey && scene.textures.exists(_vfxKey)) {
    const spr = scene.add.sprite(pos.x, pos.y, _vfxKey)
      .setDepth(99_001).setScale(0.28).setAlpha(0.7)
      .setBlendMode(Phaser.BlendModes.ADD);
    scene.tweens.add({
      targets: spr,
      scaleX: 0.8, scaleY: 0.8, alpha: 0,
      duration: WINDUP_MS + 80,
      ease: 'Power2.Out',
      onComplete: () => spr.destroy(),
    });
    return;
  }
  const gfx = scene.add.graphics().setDepth(99_001).setPosition(pos.x, pos.y);
  gfx.fillStyle(color, 0.5);
  gfx.fillCircle(0, 0, 9);
  scene.tweens.add({
    targets: gfx,
    scaleX: 1.8, scaleY: 1.8, alpha: 0,
    duration: WINDUP_MS + 80, ease: 'Power2',
    onComplete: () => gfx.destroy(),
  });
}

// ── Travel paths ─────────────────────────────────────────────────────────────

// Projectile: looping travel sprite + afterimage ghosts every ~20px + impact
function vfxProjectile(scene: Game, color: number, from: Pt, to: Pt, onImpact?: () => void) {
  const dist     = Phaser.Math.Distance.Between(from.x, from.y, to.x, to.y);
  const duration = Math.max(180, dist * 1.8);

  const travSpr = spawnTravelSprite(scene, from, 0.6);

  // Faint ring trail for motion contrast
  const trail = scene.add.graphics().setDepth(98_999).setPosition(from.x, from.y);
  trail.lineStyle(2, color, 0.28);
  trail.strokeCircle(0, 0, 14);

  if (travSpr) {
    // Afterimage state — spawn a fading ghost every ~20px of travel
    let lastGhostDist = 0;
    let traveledDist  = 0;
    let prevX = from.x, prevY = from.y;

    scene.tweens.add({
      targets: [travSpr, trail],
      x: to.x, y: to.y,
      duration,
      ease: 'Linear',
      onUpdate: () => {
        const dx = travSpr.x - prevX;
        const dy = travSpr.y - prevY;
        traveledDist += Math.sqrt(dx * dx + dy * dy);
        prevX = travSpr.x;
        prevY = travSpr.y;

        if (traveledDist - lastGhostDist >= 20) {
          lastGhostDist = traveledDist;
          const ghost = scene.add.sprite(travSpr.x, travSpr.y, _vfxKey)
            .setDepth(98_997).setScale(0.35).setAlpha(0.45)
            .setBlendMode(Phaser.BlendModes.ADD);
          scene.tweens.add({
            targets: ghost, alpha: 0, scaleX: 0.15, scaleY: 0.15,
            duration: 200, ease: 'Power2',
            onComplete: () => ghost.destroy(),
          });
        }
      },
      onComplete: () => {
        travSpr.destroy();
        trail.destroy();
        onImpact?.();
        spawnVFXSprite(scene, to, 1.8);
        vfxShockwave(scene, color, to);
        shakeCamera(scene);
      },
    });
  } else {
    const orb = scene.add.graphics().setDepth(99_000).setPosition(from.x, from.y);
    orb.fillStyle(color, 1);
    orb.fillCircle(0, 0, 8);
    scene.tweens.add({
      targets: [orb, trail],
      x: to.x, y: to.y,
      duration, ease: 'Linear',
      onComplete: () => {
        orb.destroy(); trail.destroy();
        onImpact?.();
        vfxImpact(scene, color, to);
      },
    });
  }
}

// Arc: sprite follows Bézier curve + shockwave at landing
function vfxArc(scene: Game, color: number, from: Pt, to: Pt, onImpact?: () => void) {
  const midX = (from.x + to.x) / 2;
  const midY = Math.min(from.y, to.y) - 55;
  const prog  = { t: 0 };

  const travSpr = spawnTravelSprite(scene, from, 0.55);
  const orbGfx  = !travSpr
    ? scene.add.graphics().setDepth(99_000).setPosition(from.x, from.y)
    : null;
  if (orbGfx) { orbGfx.fillStyle(color, 1); orbGfx.fillCircle(0, 0, 6); }

  scene.tweens.add({
    targets: prog, t: 1, duration: 380, ease: 'Sine.InOut',
    onUpdate: () => {
      const t  = prog.t;
      const nx = (1 - t) * (1 - t) * from.x + 2 * (1 - t) * t * midX + t * t * to.x;
      const ny = (1 - t) * (1 - t) * from.y + 2 * (1 - t) * t * midY + t * t * to.y;
      travSpr?.setPosition(nx, ny);
      orbGfx?.setPosition(nx, ny);
    },
    onComplete: () => {
      travSpr?.destroy();
      orbGfx?.destroy();
      onImpact?.();
      spawnVFXSprite(scene, to, 1.6);
      vfxShockwave(scene, color, to);
      shakeCamera(scene);
    },
  });
}

// AoE / Self: sprite immediately at position + shockwave + shake
function vfxAoe(scene: Game, color: number, pos: Pt, onImpact?: () => void) {
  onImpact && scene.time.delayedCall(80, onImpact);

  if (_vfxKey && scene.textures.exists(_vfxKey)) {
    spawnVFXSprite(scene, pos, 1.8);
    vfxShockwave(scene, color, pos, 80);
    scene.time.delayedCall(80, () => shakeCamera(scene));
    return;
  }

  // Fallback: fill flash + expanding rings
  const fill = scene.add.graphics().setDepth(99_000).setPosition(pos.x, pos.y);
  fill.fillStyle(color, 0.4);
  fill.fillCircle(0, 0, 22);
  scene.tweens.add({ targets: fill, alpha: 0, duration: 280, onComplete: () => fill.destroy() });
  for (let i = 0; i < 3; i++) {
    scene.time.delayedCall(i * 90, () => {
      const ring = scene.add.graphics().setDepth(99_000).setPosition(pos.x, pos.y);
      const p    = { r: 6, a: 0.9 };
      scene.tweens.add({
        targets: p, r: 48, a: 0, duration: 520, ease: 'Power2',
        onUpdate: () => {
          ring.clear();
          ring.lineStyle(Math.max(0.5, 3.5 * (1 - p.r / 48)), color, p.a);
          ring.strokeCircle(0, 0, p.r);
        },
        onComplete: () => ring.destroy(),
      });
    });
  }
}

// Beam: animated sine-wave width while fading + shockwave at endpoint
function vfxBeam(scene: Game, color: number, from: Pt, to: Pt, onImpact?: () => void) {
  const gfx  = scene.add.graphics().setDepth(99_000);
  const prog = { t: 0 };

  scene.tweens.add({
    targets: prog, t: 1, duration: 400, ease: 'Linear',
    onUpdate: () => {
      gfx.clear();
      const fade  = 1 - prog.t;
      const width = 4 + Math.sin(prog.t * Math.PI * 5) * 2.5; // oscillating thickness
      // Outer glow
      gfx.lineStyle(width + 3, color, fade * 0.55);
      gfx.lineBetween(from.x, from.y, to.x, to.y);
      // Bright core
      gfx.lineStyle(Math.max(1, width * 0.4), 0xFFFFFF, fade * 0.85);
      gfx.lineBetween(from.x, from.y, to.x, to.y);
    },
    onComplete: () => {
      gfx.destroy();
      onImpact?.();
      spawnVFXSprite(scene, to, 1.6);
      vfxShockwave(scene, color, to);
      shakeCamera(scene);
    },
  });
}

// Charge: accelerating travel sprite + impact
function vfxCharge(scene: Game, color: number, from: Pt, to: Pt, onImpact?: () => void) {
  const dist  = Phaser.Math.Distance.Between(from.x, from.y, to.x, to.y);
  const durMs = Math.max(150, dist * 1.2);

  const trail = scene.add.graphics().setDepth(98_999);
  trail.fillStyle(color, 0.22);
  trail.fillRect(from.x - 6, from.y - 6, 12, 12);

  const travSpr = spawnTravelSprite(scene, from, 0.7);
  const orbGfx  = !travSpr
    ? scene.add.graphics().setDepth(99_000).setPosition(from.x, from.y)
    : null;
  if (orbGfx) { orbGfx.fillStyle(color, 1); orbGfx.fillCircle(0, 0, 11); }

  const tgt = travSpr ?? orbGfx!;
  scene.tweens.add({
    targets: tgt, x: to.x, y: to.y,
    duration: durMs, ease: 'Power3.In',
    onComplete: () => {
      tgt.destroy(); trail.destroy();
      onImpact?.();
      spawnVFXSprite(scene, to, 1.8);
      vfxShockwave(scene, color, to);
      shakeCamera(scene);
    },
  });
}

// Cone: fan Graphics + 5 staggered impact sprites across the spread
function vfxCone(scene: Game, color: number, from: Pt, to: Pt, onImpact?: () => void) {
  const angle  = Math.atan2(to.y - from.y, to.x - from.x);
  const spread = Math.PI / 3;
  const length = Math.max(60, Phaser.Math.Distance.Between(from.x, from.y, to.x, to.y));

  const gfx  = scene.add.graphics().setDepth(99_000);
  const prog = { t: 0 };

  scene.tweens.add({
    targets: prog, t: 1, duration: 320, ease: 'Quad.Out',
    onUpdate: () => {
      const r = length * prog.t;
      gfx.clear();
      gfx.fillStyle(color, 0.45 * (1 - prog.t * 0.6));
      gfx.beginPath();
      gfx.moveTo(from.x, from.y);
      for (let i = 0; i <= 8; i++) {
        const a = angle - spread + (2 * spread * i / 8);
        gfx.lineTo(from.x + Math.cos(a) * r, from.y + Math.sin(a) * r);
      }
      gfx.closePath();
      gfx.fillPath();
    },
    onComplete: () => {
      gfx.destroy();
      onImpact?.();
      const tipL = { x: from.x + Math.cos(angle - spread)        * length,       y: from.y + Math.sin(angle - spread)        * length       };
      const tipR = { x: from.x + Math.cos(angle + spread)        * length,       y: from.y + Math.sin(angle + spread)        * length       };
      const midL = { x: from.x + Math.cos(angle - spread * 0.5)  * length * 0.6, y: from.y + Math.sin(angle - spread * 0.5)  * length * 0.6 };
      const midR = { x: from.x + Math.cos(angle + spread * 0.5)  * length * 0.6, y: from.y + Math.sin(angle + spread * 0.5)  * length * 0.6 };
      spawnVFXSprite(scene, to,   1.5,  0);   vfxShockwave(scene, color, to,   0);
      spawnVFXSprite(scene, tipL, 1.0,  55);  vfxShockwave(scene, color, tipL, 55);
      spawnVFXSprite(scene, tipR, 1.0,  80);  vfxShockwave(scene, color, tipR, 80);
      spawnVFXSprite(scene, midL, 0.85, 110);
      spawnVFXSprite(scene, midR, 0.85, 135);
      shakeCamera(scene);
    },
  });

  // White edge lines
  const edgeL = scene.add.graphics().setDepth(98_999);
  const edgeR = scene.add.graphics().setDepth(98_999);
  scene.tweens.add({
    targets: { t: 0 }, t: 1, duration: 300,
    onUpdate: (tw) => {
      const r = length * (tw.targets[0] as { t: number }).t;
      edgeL.clear(); edgeR.clear();
      edgeL.lineStyle(1.5, 0xFFFFFF, 0.4);
      edgeR.lineStyle(1.5, 0xFFFFFF, 0.4);
      edgeL.lineBetween(from.x, from.y, from.x + Math.cos(angle - spread) * r, from.y + Math.sin(angle - spread) * r);
      edgeR.lineBetween(from.x, from.y, from.x + Math.cos(angle + spread) * r, from.y + Math.sin(angle + spread) * r);
    },
    onComplete: () => { edgeL.destroy(); edgeR.destroy(); },
  });
}

// Line: 5 rushing orbs + sprites at equidistant points on completion + shockwave
function vfxLine(scene: Game, color: number, from: Pt, to: Pt, onImpact?: () => void) {
  const dist     = Phaser.Math.Distance.Between(from.x, from.y, to.x, to.y);
  const duration = Math.max(240, dist * 2.2);
  const NUM      = 5;

  for (let i = 0; i < NUM; i++) {
    scene.time.delayedCall(i * 45, () => {
      const orb = scene.add.graphics().setDepth(99_000).setPosition(from.x, from.y);
      orb.fillStyle(color, 0.9 - i * 0.1);
      orb.fillCircle(0, 0, 5 - i * 0.5);
      scene.tweens.add({
        targets: orb, x: to.x, y: to.y,
        duration: duration - i * 40, ease: 'Linear',
        onComplete: () => {
          orb.destroy();
          if (i === NUM - 1) {
            onImpact?.();
            spawnVFXSprite(scene, to, 1.6, 0);
            vfxShockwave(scene, color, to, 0);
            for (let s = 1; s <= 3; s++) {
              const t  = s / 4;
              const pt = { x: from.x + (to.x - from.x) * t, y: from.y + (to.y - from.y) * t };
              spawnVFXSprite(scene, pt, 0.9, s * 40);
              vfxShockwave(scene, color, pt, s * 40 + 20);
            }
            shakeCamera(scene);
          }
        },
      });
    });
  }
}

// ── Fallback impact (no sprite available) ─────────────────────────────────────

function vfxImpact(scene: Game, color: number, pos: Pt) {
  if (_vfxKey && scene.textures.exists(_vfxKey)) {
    spawnVFXSprite(scene, pos, 1.6);
    vfxShockwave(scene, color, pos);
    shakeCamera(scene);
    return;
  }
  const gfx = scene.add.graphics().setDepth(99_001).setPosition(pos.x, pos.y);
  gfx.fillStyle(color, 0.75);
  gfx.fillCircle(0, 0, 14);
  gfx.lineStyle(2, 0xFFFFFF, 0.9);
  gfx.strokeCircle(0, 0, 14);
  scene.tweens.add({
    targets: gfx,
    scaleX: 2.8, scaleY: 2.8, alpha: 0,
    duration: 300, ease: 'Power2',
    onComplete: () => gfx.destroy(),
  });
}
