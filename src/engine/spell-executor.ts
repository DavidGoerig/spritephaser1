import type { Sort } from '../data/character-kits';
import type { CombatUnit } from './combat-unit';
import type { StatusEffect } from './combat-unit';
import type { CombatManager } from './combat-manager';
import { CLASS_STATS } from './combat-stats';

export interface SpellTarget {
  x: number;
  y: number;
  z: number;
}

export interface SpellResult {
  success: boolean;
  message: string;
}

// ── Damage helpers ───────────────────────────────────────────────────────────

function baseDamage(caster: CombatUnit, sort: Sort, multiplier = 1.0): number {
  const base = CLASS_STATS[caster.personnage.classe].baseDamage;
  const buffed = caster.hasStatus('buff_damage') ? 1.2 : 1.0;
  return Math.round((base + sort.coutPM * 6) * buffed * multiplier);
}

function baseHeal(_caster: CombatUnit, sort: Sort): number {
  return Math.round(sort.coutPM * 8 + 15);
}

function damageUnit(target: CombatUnit, amount: number, manager: CombatManager): void {
  if (!target.isAlive) return; // already dying — skip
  const finalAmount = target.hasStatus('charged') ? Math.round(amount * 1.5) : amount;
  target.takeDamage(finalAmount);
  manager.tallyDamage(finalAmount);
  if (!target.isAlive) manager.scheduleRemoveUnit(target);
}

// ── Terrain helpers ──────────────────────────────────────────────────────────

function setLineTiles(
  cx: number, cy: number,
  tx: number, ty: number,
  z: number,
  element: string,
  manager: CombatManager,
) {
  const dx = tx - cx;
  const dy = ty - cy;
  const steps = Math.max(Math.abs(dx), Math.abs(dy));
  if (steps === 0) { manager.setTileElement(cx, cy, z, element); return; }
  for (let i = 1; i <= steps; i++) {
    const nx = cx + Math.round(dx * i / steps);
    const ny = cy + Math.round(dy * i / steps);
    if (nx >= 0 && nx < 10 && ny >= 0 && ny < 10) {
      manager.setTileElement(nx, ny, z, element);
    }
  }
}

function setWallTiles(
  cx: number, cy: number,
  tx: number, ty: number,
  z: number,
  element: string,
  manager: CombatManager,
  length = 3,
) {
  const dx = tx - cx;
  const dy = ty - cy;
  // Perpendicular direction to attack vector
  const px = -Math.sign(dy);
  const py = Math.sign(dx);
  const half = Math.floor(length / 2);
  for (let i = -half; i <= half; i++) {
    const nx = tx + px * i;
    const ny = ty + py * i;
    if (nx >= 0 && nx < 10 && ny >= 0 && ny < 10) {
      manager.setTileElement(nx, ny, z, element);
    }
  }
}

function setZoneTiles(
  cx: number, cy: number, z: number,
  radius: number,
  element: string,
  manager: CombatManager,
) {
  for (let dx = -radius; dx <= radius; dx++) {
    for (let dy = -radius; dy <= radius; dy++) {
      if (Math.abs(dx) + Math.abs(dy) <= radius) {
        const nx = cx + dx, ny = cy + dy;
        if (nx >= 0 && nx < 10 && ny >= 0 && ny < 10) {
          manager.setTileElement(nx, ny, z, element);
        }
      }
    }
  }
}

// ── Unit-range helpers ───────────────────────────────────────────────────────

function unitsInRadius(
  cx: number, cy: number, radius: number,
  manager: CombatManager,
  excludeSelf?: CombatUnit,
): CombatUnit[] {
  return manager.units.filter(
    u => u.isAlive && u !== excludeSelf &&
         Math.abs(u.x - cx) + Math.abs(u.y - cy) <= radius,
  );
}

function unitsInCone(
  caster: CombatUnit,
  tx: number, ty: number,
  range: number,
  manager: CombatManager,
): CombatUnit[] {
  const dx = tx - caster.x;
  const dy = ty - caster.y;
  const len = Math.sqrt(dx * dx + dy * dy) || 1;
  return manager.units.filter(u => {
    if (!u.isAlive || u === caster) return false;
    const ux = u.x - caster.x, uy = u.y - caster.y;
    const dist = Math.sqrt(ux * ux + uy * uy);
    if (dist === 0 || dist > range) return false;
    const dot = (dx / len) * (ux / dist) + (dy / len) * (uy / dist);
    return dot > 0.5; // within ±60° half-angle
  });
}

function tilesInCone(
  caster: CombatUnit,
  tx: number, ty: number,
  range: number,
): Array<{ x: number; y: number }> {
  const dx = tx - caster.x;
  const dy = ty - caster.y;
  const len = Math.sqrt(dx * dx + dy * dy) || 1;
  const out: Array<{ x: number; y: number }> = [];
  for (let gx = 0; gx < 10; gx++) {
    for (let gy = 0; gy < 10; gy++) {
      const ux = gx - caster.x, uy = gy - caster.y;
      const dist = Math.sqrt(ux * ux + uy * uy);
      if (dist === 0 || dist > range) continue;
      const dot = (dx / len) * (ux / dist) + (dy / len) * (uy / dist);
      if (dot > 0.5) out.push({ x: gx, y: gy });
    }
  }
  return out;
}

function pushUnit(target: CombatUnit, dx: number, dy: number, steps: number, manager: CombatManager) {
  for (let i = 0; i < steps; i++) {
    const nx = target.x + dx, ny = target.y + dy;
    if (nx < 0 || nx >= 10 || ny < 0 || ny >= 10 || manager.getUnitAt(nx, ny)) break;
    target.moveTo(nx, ny, target.z);
  }
}

function pullUnit(target: CombatUnit, toward: CombatUnit, steps: number, manager: CombatManager) {
  const dx = Math.sign(toward.x - target.x);
  const dy = Math.sign(toward.y - target.y);
  for (let i = 0; i < steps; i++) {
    const nx = target.x + dx, ny = target.y + dy;
    // Stop 1 tile away from the puller
    if (nx === toward.x && ny === toward.y) break;
    if (nx < 0 || nx >= 10 || ny < 0 || ny >= 10 || manager.getUnitAt(nx, ny)) break;
    target.moveTo(nx, ny, target.z);
  }
}

// ── Element-specific spell handlers ─────────────────────────────────────────
// Returns SpellResult if handled, null to fall through to generic branching.

type SpecificHandler = (
  sort: Sort,
  caster: CombatUnit,
  target: SpellTarget,
  manager: CombatManager,
  enemy: CombatUnit | null,
  ally: CombatUnit | null,
) => SpellResult | null;

const SPECIFIC: Record<string, SpecificHandler> = {

  // ══════════════════════════════════════════════════════════════════════════
  // FEU
  // ══════════════════════════════════════════════════════════════════════════

  // Sort 1 — Boule de Feu: projectile damage + ignite tile
  'Feu|1': (sort, caster, target, manager, enemy) => {
    if (!enemy) {
      manager.setTileElement(target.x, target.y, target.z, 'Feu');
      return { success: true, message: `${caster.personnage.nom} enflamme la case` };
    }
    const dmg = baseDamage(caster, sort);
    damageUnit(enemy, dmg, manager);
    manager.setTileElement(target.x, target.y, target.z, 'Feu');
    return { success: true, message: `${caster.personnage.nom} → ${enemy.personnage.nom} −${dmg} PV, case enflammée` };
  },

  // Sort 2 — Embrasement Forcé: damage + burn 2 turns
  'Feu|2': (sort, caster, _target, manager, enemy) => {
    if (!enemy) return null;
    const dmg = baseDamage(caster, sort, 0.9);
    damageUnit(enemy, dmg, manager);
    if (enemy.isAlive) {
      enemy.addStatus({ type: 'burn', turns: 2, dmgPerTurn: 8 } as StatusEffect);
    }
    return { success: true, message: `${caster.personnage.nom} embrase ${enemy.personnage.nom} −${dmg} PV + brûle 2 tours` };
  },

  // Sort 3 — Traînée Ignée: line of Feu tiles, no direct damage
  'Feu|3': (_sort, caster, target, manager) => {
    setLineTiles(caster.x, caster.y, target.x, target.y, target.z, 'Feu', manager);
    return { success: true, message: `${caster.personnage.nom} trace une traînée de feu` };
  },

  // Sort 4 — Mur de Flammes: 3-tile perpendicular wall of Feu
  'Feu|4': (_sort, caster, target, manager) => {
    setWallTiles(caster.x, caster.y, target.x, target.y, target.z, 'Feu', manager, 3);
    return { success: true, message: `${caster.personnage.nom} dresse un mur de flammes` };
  },

  // Sort 5 — Combustion: AoE damage radius 1 around caster + Feu tiles
  'Feu|5': (sort, caster, target, manager) => {
    const hits = unitsInRadius(caster.x, caster.y, 1, manager, caster)
      .filter(u => u.team !== caster.team);
    const dmg = baseDamage(caster, sort, 0.8);
    let count = 0;
    for (const u of hits) {
      damageUnit(u, dmg, manager);
      count++;
    }
    setZoneTiles(target.x, target.y, target.z, 1, 'Feu', manager);
    return { success: true, message: `${caster.personnage.nom} explose — ${count} touché(s) −${dmg} PV, zone enflammée` };
  },

  // Sort 6 — Aspiration: pull enemy 3 tiles toward caster
  'Feu|6': (_sort, caster, _target, manager, enemy) => {
    if (!enemy) return null;
    pullUnit(enemy, caster, 3, manager);
    return { success: true, message: `${caster.personnage.nom} attire ${enemy.personnage.nom}` };
  },

  // Sort 7 — Forja Volcanique: convert all Roche/Feu tiles in radius 2 → Magma
  'Feu|7': (_sort, caster, target, manager) => {
    let converted = 0;
    for (let dx = -2; dx <= 2; dx++) {
      for (let dy = -2; dy <= 2; dy++) {
        if (Math.abs(dx) + Math.abs(dy) > 2) continue;
        const nx = target.x + dx, ny = target.y + dy;
        if (nx < 0 || nx >= 10 || ny < 0 || ny >= 10) continue;
        const el = manager.getTileElement(nx, ny, target.z);
        if (el === 'Roche' || el === 'Feu') {
          manager.setTileElement(nx, ny, target.z, 'Magma');
          converted++;
        }
      }
    }
    return { success: true, message: `${caster.personnage.nom} forge la lave — ${converted} cases → Magma` };
  },

  // Sort 8 — Inferno: damages ALL units standing on Feu or Magma tiles
  'Feu|8': (sort, caster, _target, manager) => {
    let count = 0;
    const dmg = baseDamage(caster, sort, 0.75);
    const victims = [...manager.units].filter(u => u.isAlive && u !== caster);
    for (const u of victims) {
      const el = manager.getTileElement(u.x, u.y, u.z);
      if (el === 'Feu' || el === 'Magma') {
        damageUnit(u, dmg, manager);
        count++;
      }
    }
    return { success: true, message: `${caster.personnage.nom} inferno — ${count} cible(s) sur case de feu −${dmg} PV` };
  },

  // Sort 9 — Météore: heavy damage + push 2 tiles away from caster
  'Feu|9': (sort, caster, target, manager, enemy) => {
    if (!enemy) {
      manager.setTileElement(target.x, target.y, target.z, 'Magma');
      return { success: true, message: `${caster.personnage.nom} — météore s'écrase, case → Magma` };
    }
    const dmg = baseDamage(caster, sort, 1.5);
    damageUnit(enemy, dmg, manager);
    if (enemy.isAlive) {
      const dx = Math.sign(target.x - caster.x);
      const dy = Math.sign(target.y - caster.y);
      pushUnit(enemy, dx, dy, 2, manager);
    }
    manager.setTileElement(target.x, target.y, target.z, 'Magma');
    return { success: true, message: `${caster.personnage.nom} — météore : −${dmg} PV, repoussé + case Magma` };
  },

  // Sort 10 — Apocalypse de Feu: AoE radius 3 + all tiles → Feu
  'Feu|10': (sort, caster, target, manager) => {
    const dmg = baseDamage(caster, sort, 1.2);
    const victims = unitsInRadius(target.x, target.y, 3, manager, caster)
      .filter(u => u.team !== caster.team);
    for (const u of victims) damageUnit(u, dmg, manager);
    setZoneTiles(target.x, target.y, target.z, 3, 'Feu', manager);
    return { success: true, message: `${caster.personnage.nom} — apocalypse ! ${victims.length} touché(s), zone enflammée` };
  },

  // ══════════════════════════════════════════════════════════════════════════
  // EAU
  // ══════════════════════════════════════════════════════════════════════════

  // Sort 1 — Jet d'Eau: damage + apply wet
  'Eau|1': (sort, caster, target, manager, enemy) => {
    if (!enemy) {
      manager.setTileElement(target.x, target.y, target.z, 'Eau');
      return { success: true, message: `${caster.personnage.nom} inonde la case` };
    }
    const dmg = baseDamage(caster, sort);
    damageUnit(enemy, dmg, manager);
    if (enemy.isAlive) enemy.addStatus({ type: 'wet', turns: 3 });
    return { success: true, message: `${caster.personnage.nom} → ${enemy.personnage.nom} −${dmg} PV, mouillé 3 tours` };
  },

  // Sort 2 — Inondation: 2×2 Eau terrain zone
  'Eau|2': (_sort, caster, target, manager) => {
    for (let dx = 0; dx <= 1; dx++) {
      for (let dy = 0; dy <= 1; dy++) {
        const nx = target.x + dx, ny = target.y + dy;
        if (nx >= 0 && nx < 10 && ny >= 0 && ny < 10) {
          manager.setTileElement(nx, ny, target.z, 'Eau');
        }
      }
    }
    return { success: true, message: `${caster.personnage.nom} inonde une zone 2×2` };
  },

  // Sort 3 — Brume: slow all enemies in radius 2 around caster
  'Eau|3': (_sort, caster, _target, manager) => {
    const slowed = unitsInRadius(caster.x, caster.y, 2, manager, caster)
      .filter(u => u.team !== caster.team);
    for (const u of slowed) u.addStatus({ type: 'slow', turns: 2 });
    return { success: true, message: `${caster.personnage.nom} brume — ${slowed.length} ennemi(s) ralenti(s)` };
  },

  // Sort 4 — Vague: push enemy + wet + Eau terrain line
  'Eau|4': (_sort, caster, target, manager, enemy) => {
    if (!enemy) {
      setLineTiles(caster.x, caster.y, target.x, target.y, target.z, 'Eau', manager);
      return { success: true, message: `${caster.personnage.nom} — vague, terrain Eau` };
    }
    const dx = Math.sign(target.x - caster.x);
    const dy = Math.sign(target.y - caster.y);
    pushUnit(enemy, dx, dy, 2, manager);
    enemy.addStatus({ type: 'wet', turns: 2 });
    setLineTiles(caster.x, caster.y, target.x, target.y, target.z, 'Eau', manager);
    return { success: true, message: `${caster.personnage.nom} repousse ${enemy.personnage.nom} + mouillé + ligne Eau` };
  },

  // Sort 6 — Maelstrom: pull all enemies within radius 3 toward target point
  'Eau|6': (_sort, caster, target, manager) => {
    const pulled = unitsInRadius(target.x, target.y, 3, manager)
      .filter(u => u.team !== caster.team);
    for (const u of pulled) {
      const dx = Math.sign(target.x - u.x);
      const dy = Math.sign(target.y - u.y);
      const nx = u.x + dx, ny = u.y + dy;
      if (nx >= 0 && nx < 10 && ny >= 0 && ny < 10 && !manager.getUnitAt(nx, ny)) {
        u.moveTo(nx, ny, u.z);
      }
    }
    return { success: true, message: `${caster.personnage.nom} maelstrom — ${pulled.length} ennemi(s) attirés` };
  },

  // Sort 7 — Transmutation: heal ally or convert tile element
  'Eau|7': (sort, caster, target, manager, _enemy, ally) => {
    const healTarget = ally ?? caster;
    const amount = baseHeal(caster, sort);
    healTarget.heal(amount);
    manager.setTileElement(target.x, target.y, target.z, 'Eau');
    return { success: true, message: `${healTarget.personnage.nom} soigné +${amount} PV, case → Eau` };
  },

  // ══════════════════════════════════════════════════════════════════════════
  // GLACE
  // ══════════════════════════════════════════════════════════════════════════

  // Sort 1 — Souffle Glacial: cone damage all in 60° arc + Glace tiles
  'Glace|1': (sort, caster, target, manager) => {
    const coneUnits = unitsInCone(caster, target.x, target.y, sort.portee, manager)
      .filter(u => u.team !== caster.team);
    const dmg = baseDamage(caster, sort, 0.7);
    for (const u of coneUnits) damageUnit(u, dmg, manager);
    for (const t of tilesInCone(caster, target.x, target.y, sort.portee)) {
      manager.setTileElement(t.x, t.y, target.z, 'Glace');
    }
    return { success: true, message: `${caster.personnage.nom} souffle glacial — ${coneUnits.length} touché(s), zone → Glace` };
  },

  // Sort 2 — Congélation: freeze target 1 turn
  'Glace|2': (_sort, caster, _target, _manager, enemy) => {
    if (!enemy) return null;
    enemy.addStatus({ type: 'freeze', turns: 1 });
    return { success: true, message: `${caster.personnage.nom} gèle ${enemy.personnage.nom} (1 tour)` };
  },

  // Sort 3 — Patinoire: 2×2 Glace terrain
  'Glace|3': (_sort, caster, target, manager) => {
    for (let dx = 0; dx <= 1; dx++) {
      for (let dy = 0; dy <= 1; dy++) {
        const nx = target.x + dx, ny = target.y + dy;
        if (nx >= 0 && nx < 10 && ny >= 0 && ny < 10) {
          manager.setTileElement(nx, ny, target.z, 'Glace');
        }
      }
    }
    return { success: true, message: `${caster.personnage.nom} crée une patinoire 2×2` };
  },

  // Sort 4 — Éclat de Glace: damage ×2 if target stands on Glace
  'Glace|4': (sort, caster, target, manager, enemy) => {
    if (!enemy) return null;
    const onGlace = manager.getTileElement(target.x, target.y, target.z) === 'Glace';
    const multiplier = onGlace ? 2.0 : 1.0;
    const dmg = baseDamage(caster, sort, multiplier);
    damageUnit(enemy, dmg, manager);
    const tag = onGlace ? ' (CRITIQUE sur Glace !)' : '';
    return { success: true, message: `${caster.personnage.nom} → ${enemy.personnage.nom} −${dmg} PV${tag}` };
  },

  // Sort 5 — Pont Glacé: Glace line between caster and target
  'Glace|5': (_sort, caster, target, manager) => {
    setLineTiles(caster.x, caster.y, target.x, target.y, target.z, 'Glace', manager);
    return { success: true, message: `${caster.personnage.nom} crée un pont de glace` };
  },

  // Sort 6 — Avalanche: AoE damage radius 2 + slow + Glace terrain
  'Glace|6': (sort, caster, target, manager) => {
    const victims = unitsInRadius(target.x, target.y, 2, manager)
      .filter(u => u.team !== caster.team);
    const dmg = baseDamage(caster, sort, 0.85);
    for (const u of victims) {
      damageUnit(u, dmg, manager);
      if (u.isAlive) u.addStatus({ type: 'slow', turns: 2 });
    }
    setZoneTiles(target.x, target.y, target.z, 2, 'Glace', manager);
    return { success: true, message: `${caster.personnage.nom} avalanche — ${victims.length} touché(s), ralentis + zone Glace` };
  },

  // Sort 8 — Mur de Glace: 5-tile wall (overriding generic wall logic)
  'Glace|8': (_sort, caster, target, manager) => {
    setWallTiles(caster.x, caster.y, target.x, target.y, target.z, 'Glace', manager, 5);
    return { success: true, message: `${caster.personnage.nom} dresse un grand mur de glace` };
  },

  // Sort 9 — Fracturation: shatter all Glace tiles in radius 3 dealing damage
  'Glace|9': (sort, caster, target, manager) => {
    let shattered = 0;
    const dmg = baseDamage(caster, sort, 0.6);
    for (let dx = -3; dx <= 3; dx++) {
      for (let dy = -3; dy <= 3; dy++) {
        if (Math.abs(dx) + Math.abs(dy) > 3) continue;
        const nx = target.x + dx, ny = target.y + dy;
        if (nx < 0 || nx >= 10 || ny < 0 || ny >= 10) continue;
        if (manager.getTileElement(nx, ny, target.z) === 'Glace') {
          manager.setTileElement(nx, ny, target.z, null);
          shattered++;
          const u = manager.getUnitAt(nx, ny);
          if (u) damageUnit(u, dmg, manager);
        }
      }
    }
    return { success: true, message: `${caster.personnage.nom} fracture ${shattered} case(s) de glace` };
  },

  // ══════════════════════════════════════════════════════════════════════════
  // ELECTRIQUE
  // ══════════════════════════════════════════════════════════════════════════

  // Sort 1 — Arc Électrique: damage + chain to adjacent WET units
  'Electrique|1': (sort, caster, target, manager, enemy) => {
    if (!enemy) {
      manager.setTileElement(target.x, target.y, target.z, 'Electrique');
      return { success: true, message: `${caster.personnage.nom} électrifie la case` };
    }
    const dmg = baseDamage(caster, sort);
    damageUnit(enemy, dmg, manager);
    manager.setTileElement(target.x, target.y, target.z, 'Electrique');

    // Chain to wet / charged enemies adjacent to primary target
    const chainTargets = manager.units.filter(u =>
      u.isAlive && u !== enemy && u.team !== caster.team &&
      (u.hasStatus('wet') || u.hasStatus('charged')) &&
      Math.abs(u.x - enemy.x) + Math.abs(u.y - enemy.y) <= 2,
    );
    const chainDmg = Math.round(dmg * 0.6);
    for (const c of chainTargets) damageUnit(c, chainDmg, manager);

    const chainMsg = chainTargets.length > 0 ? ` + chaîne ×${chainTargets.length} (−${chainDmg})` : '';
    return { success: true, message: `${caster.personnage.nom} arc électrique −${dmg} PV${chainMsg}` };
  },

  // Sort 2 — Champ Magnétique: stun all enemies in radius 1
  'Electrique|2': (_sort, caster, target, manager) => {
    const stunned = unitsInRadius(target.x, target.y, 1, manager)
      .filter(u => u.team !== caster.team);
    for (const u of stunned) u.addStatus({ type: 'stun', turns: 1 });
    manager.setTileElement(target.x, target.y, target.z, 'Electrique');
    return { success: true, message: `${caster.personnage.nom} champ magnétique — ${stunned.length} étourdi(s) 1 tour` };
  },

  // Sort 3 — Foudre: heavy long-range damage + charged debuff
  'Electrique|3': (sort, caster, target, manager, enemy) => {
    if (!enemy) {
      manager.setTileElement(target.x, target.y, target.z, 'Electrique');
      return { success: true, message: `${caster.personnage.nom} foudroie la case` };
    }
    const dmg = baseDamage(caster, sort, 1.4);
    damageUnit(enemy, dmg, manager);
    if (enemy.isAlive) enemy.addStatus({ type: 'charged', turns: 2 });
    return { success: true, message: `${caster.personnage.nom} foudroie ${enemy.personnage.nom} −${dmg} PV, chargé 2 tours` };
  },

  // Sort 4 — Overcharge: self buff_damage + charged
  'Electrique|4': (_sort, caster, _target, _manager) => {
    caster.addStatus({ type: 'buff_damage', turns: 3 });
    caster.addStatus({ type: 'charged', turns: 2 });
    return { success: true, message: `${caster.personnage.nom} surcharge — +20% dégâts pendant 3 tours` };
  },

  // Sort 5 — Grille Conductrice: large Electrique zone
  'Electrique|5': (_sort, caster, target, manager) => {
    setZoneTiles(target.x, target.y, target.z, 2, 'Electrique', manager);
    return { success: true, message: `${caster.personnage.nom} électrifie une zone` };
  },

  // ══════════════════════════════════════════════════════════════════════════
  // PLANTE
  // ══════════════════════════════════════════════════════════════════════════

  // Sort 1 — Bourgeon Offensif: damage + root 2 turns
  'Plante|1': (sort, caster, target, manager, enemy) => {
    if (!enemy) {
      manager.setTileElement(target.x, target.y, target.z, 'Plante');
      return { success: true, message: `${caster.personnage.nom} plante un bourgeon` };
    }
    const dmg = baseDamage(caster, sort, 0.8);
    damageUnit(enemy, dmg, manager);
    if (enemy.isAlive) enemy.addStatus({ type: 'root', turns: 2 });
    return { success: true, message: `${caster.personnage.nom} → ${enemy.personnage.nom} −${dmg} PV, enraciné 2 tours` };
  },

  // Sort 2 — Enracinement: pure root + Plante terrain
  'Plante|2': (_sort, caster, target, manager, enemy) => {
    if (enemy) enemy.addStatus({ type: 'root', turns: 3 });
    manager.setTileElement(target.x, target.y, target.z, 'Plante');
    const who = enemy ? enemy.personnage.nom : 'la case';
    return { success: true, message: `${caster.personnage.nom} enracine ${who}` };
  },

  // Sort 3 — Régénération: regen buff on ally/self
  'Plante|3': (_sort, caster, _target, _manager, _enemy, ally) => {
    const healTarget = ally ?? caster;
    healTarget.addStatus({ type: 'regen', turns: 3, healPerTurn: 12 });
    return { success: true, message: `${healTarget.personnage.nom} régénère +12 PV/tour (3 tours)` };
  },

  // ══════════════════════════════════════════════════════════════════════════
  // POISON
  // ══════════════════════════════════════════════════════════════════════════

  // Sort 1 — Venin: small damage + poison 3 turns
  'Poison|1': (sort, caster, target, manager, enemy) => {
    if (!enemy) {
      manager.setTileElement(target.x, target.y, target.z, 'Poison');
      return { success: true, message: `${caster.personnage.nom} empoisonne la case` };
    }
    const dmg = baseDamage(caster, sort, 0.5);
    damageUnit(enemy, dmg, manager);
    if (enemy.isAlive) enemy.addStatus({ type: 'poison', turns: 3, dmgPerTurn: 8 });
    return { success: true, message: `${caster.personnage.nom} → ${enemy.personnage.nom} −${dmg} PV + poison 3 tours` };
  },

  // Sort 2 — Nuage Toxique: AoE poison radius 2
  'Poison|2': (_sort, caster, target, manager) => {
    const victims = unitsInRadius(target.x, target.y, 2, manager)
      .filter(u => u.team !== caster.team);
    for (const u of victims) u.addStatus({ type: 'poison', turns: 2, dmgPerTurn: 6 });
    setZoneTiles(target.x, target.y, target.z, 2, 'Poison', manager);
    return { success: true, message: `${caster.personnage.nom} nuage toxique — ${victims.length} empoisonné(s)` };
  },

  // ══════════════════════════════════════════════════════════════════════════
  // PSY
  // ══════════════════════════════════════════════════════════════════════════

  // Sort 1 — Ondes Mentales: damage + confuse
  'Psy|1': (sort, caster, _target, manager, enemy) => {
    if (!enemy) return null;
    const dmg = baseDamage(caster, sort, 0.7);
    damageUnit(enemy, dmg, manager);
    if (enemy.isAlive) enemy.addStatus({ type: 'confuse', turns: 2 });
    return { success: true, message: `${caster.personnage.nom} perturbe ${enemy.personnage.nom} −${dmg} PV, confus 2 tours` };
  },

  // Sort 2 — Télékinésie: pick up and throw enemy (push + damage)
  'Psy|2': (sort, caster, target, manager, enemy) => {
    if (!enemy) return null;
    const dx = Math.sign(target.x - caster.x);
    const dy = Math.sign(target.y - caster.y);
    const prevX = enemy.x, prevY = enemy.y;
    pushUnit(enemy, dx, dy, 3, manager);
    const dmg = baseDamage(caster, sort, 0.6);
    damageUnit(enemy, dmg, manager);
    const dist = Math.abs(enemy.x - prevX) + Math.abs(enemy.y - prevY);
    return { success: true, message: `${caster.personnage.nom} propulse ${enemy.personnage.nom} ${dist} case(s) −${dmg} PV` };
  },

  // ══════════════════════════════════════════════════════════════════════════
  // TÉNÈBRES
  // ══════════════════════════════════════════════════════════════════════════

  // Sort 1 — Absorption: damage + heal caster for half
  'Ténèbres|1': (sort, caster, _target, manager, enemy) => {
    if (!enemy) return null;
    const dmg = baseDamage(caster, sort);
    damageUnit(enemy, dmg, manager);
    caster.heal(Math.round(dmg / 2));
    return { success: true, message: `${caster.personnage.nom} absorbe ${enemy.personnage.nom} −${dmg} PV, +${Math.round(dmg / 2)} pour soi` };
  },

  // ══════════════════════════════════════════════════════════════════════════
  // SOL
  // ══════════════════════════════════════════════════════════════════════════

  // Sort 1 — Séisme: AoE damage + slow in radius 2, Sol terrain
  'Sol|1': (sort, caster, target, manager) => {
    const victims = unitsInRadius(target.x, target.y, 2, manager)
      .filter(u => u.team !== caster.team);
    const dmg = baseDamage(caster, sort, 0.8);
    for (const u of victims) {
      damageUnit(u, dmg, manager);
      if (u.isAlive) u.addStatus({ type: 'slow', turns: 1 });
    }
    setZoneTiles(target.x, target.y, target.z, 2, 'Sol', manager);
    return { success: true, message: `${caster.personnage.nom} séisme — ${victims.length} touché(s), zone Sol` };
  },

  // ══════════════════════════════════════════════════════════════════════════
  // VENT
  // ══════════════════════════════════════════════════════════════════════════

  // Sort 1 — Rafale: push all enemies in line away from caster
  'Vent|1': (sort, caster, target, manager) => {
    const dx = Math.sign(target.x - caster.x);
    const dy = Math.sign(target.y - caster.y);
    const inLine = manager.units.filter(u => {
      if (!u.isAlive || u.team === caster.team) return false;
      // Check if unit is roughly along the attack axis
      const ux = u.x - caster.x, uy = u.y - caster.y;
      const len = Math.sqrt(ux * ux + uy * uy) || 1;
      const dot = dx * (ux / len) + dy * (uy / len);
      return dot > 0.7 && Math.abs(ux) + Math.abs(uy) <= sort.portee;
    });
    for (const u of inLine) pushUnit(u, dx, dy, 2, manager);
    return { success: true, message: `${caster.personnage.nom} rafale — ${inLine.length} repoussé(s)` };
  },

  // ══════════════════════════════════════════════════════════════════════════
  // COMBAT
  // ══════════════════════════════════════════════════════════════════════════

  // Sort 1 — Assaut: charge to enemy + extra damage if Déplacement+Dégâts
  'Combat|1': (sort, caster, target, manager, enemy) => {
    if (!enemy) return null;
    const dmg = baseDamage(caster, sort, 1.2);
    const adjacent = findAdjacentEmpty(caster, target, manager);
    if (adjacent) caster.moveTo(adjacent.x, adjacent.y, target.z);
    damageUnit(enemy, dmg, manager);
    if (enemy.isAlive) enemy.addStatus({ type: 'stun', turns: 1 });
    return { success: true, message: `${caster.personnage.nom} assaut — −${dmg} PV, étourdi 1 tour` };
  },

  // ══════════════════════════════════════════════════════════════════════════
  // GRAVITÉ
  // ══════════════════════════════════════════════════════════════════════════

  // Sort 1 — Champ Gravitationnel: slow + weighted all enemies in radius 2
  'Gravité|1': (_sort, caster, target, manager) => {
    const targets = unitsInRadius(target.x, target.y, 2, manager)
      .filter(u => u.team !== caster.team);
    for (const u of targets) {
      u.addStatus({ type: 'slow', turns: 2 });
      u.addStatus({ type: 'weighted', turns: 2 });
    }
    return { success: true, message: `${caster.personnage.nom} champ gravitationnel — ${targets.length} alourdi(s)` };
  },

  // Sort 2 — Singularité: pull all enemies in radius 3 toward target point
  'Gravité|2': (_sort, caster, target, manager) => {
    const pulled = unitsInRadius(target.x, target.y, 3, manager)
      .filter(u => u.team !== caster.team);
    for (const u of pulled) {
      const dx = Math.sign(target.x - u.x);
      const dy = Math.sign(target.y - u.y);
      const nx = u.x + dx, ny = u.y + dy;
      if (nx !== target.x || ny !== target.y) {
        if (nx >= 0 && nx < 10 && ny >= 0 && ny < 10 && !manager.getUnitAt(nx, ny)) {
          u.moveTo(nx, ny, u.z);
        }
      }
    }
    return { success: true, message: `${caster.personnage.nom} singularité — ${pulled.length} attirés` };
  },

  // ══════════════════════════════════════════════════════════════════════════
  // FÉE
  // ══════════════════════════════════════════════════════════════════════════

  // Sort 1 — Enchantement: confuse enemy or regen ally
  'Fée|1': (_sort, caster, _target, _manager, enemy, ally) => {
    if (enemy) {
      enemy.addStatus({ type: 'confuse', turns: 2 });
      return { success: true, message: `${caster.personnage.nom} enchante ${enemy.personnage.nom} — confus 2 tours` };
    }
    const healTarget = ally ?? caster;
    healTarget.addStatus({ type: 'regen', turns: 3, healPerTurn: 10 });
    return { success: true, message: `${healTarget.personnage.nom} béni — régénération 3 tours` };
  },

  // Sort 2 — Bouclier Féerique: shield ally
  'Fée|2': (_sort, caster, _target, _manager, _enemy, ally) => {
    const shieldTarget = ally ?? caster;
    const shieldAmount = Math.round(CLASS_STATS[caster.personnage.classe].baseDamage * 3);
    shieldTarget.addStatus({ type: 'shield', turns: 3, amount: shieldAmount });
    return { success: true, message: `${shieldTarget.personnage.nom} protégé — bouclier ${shieldAmount} PV` };
  },

  // ══════════════════════════════════════════════════════════════════════════
  // SPECTRE
  // ══════════════════════════════════════════════════════════════════════════

  // Sort 1 — Drain: damage + steal HP
  'Spectre|1': (sort, caster, _target, manager, enemy) => {
    if (!enemy) return null;
    const dmg = baseDamage(caster, sort, 0.9);
    damageUnit(enemy, dmg, manager);
    caster.heal(Math.round(dmg * 0.45));
    return { success: true, message: `${caster.personnage.nom} draine ${enemy.personnage.nom} −${dmg} PV, récupère ${Math.round(dmg * 0.45)}` };
  },

  // Sort 2 — Phase: self-buff, caster becomes untargetable (buff_damage as proxy)
  'Spectre|2': (_sort, caster) => {
    caster.addStatus({ type: 'buff_damage', turns: 2 });
    return { success: true, message: `${caster.personnage.nom} entre en phase spectrale — +20% dégâts` };
  },

  // ══════════════════════════════════════════════════════════════════════════
  // DRAGON
  // ══════════════════════════════════════════════════════════════════════════

  // Sort 1 — Souffle du Dragon: cone fire damage
  'Dragon|1': (sort, caster, target, manager) => {
    const coneUnits = unitsInCone(caster, target.x, target.y, sort.portee, manager)
      .filter(u => u.team !== caster.team);
    const dmg = baseDamage(caster, sort, 0.9);
    for (const u of coneUnits) {
      damageUnit(u, dmg, manager);
      if (u.isAlive) u.addStatus({ type: 'burn', turns: 1, dmgPerTurn: 6 });
    }
    for (const t of tilesInCone(caster, target.x, target.y, sort.portee)) {
      manager.setTileElement(t.x, t.y, target.z, 'Feu');
    }
    return { success: true, message: `${caster.personnage.nom} souffle du dragon — ${coneUnits.length} touché(s), zone enflammée` };
  },

  // ══════════════════════════════════════════════════════════════════════════
  // ROCHE
  // ══════════════════════════════════════════════════════════════════════════

  // Sort 1 — Lancer de Pierre: damage + root
  'Roche|1': (sort, caster, target, manager, enemy) => {
    if (!enemy) {
      manager.setTileElement(target.x, target.y, target.z, 'Roche');
      return { success: true, message: `${caster.personnage.nom} place une roche` };
    }
    const dmg = baseDamage(caster, sort);
    damageUnit(enemy, dmg, manager);
    if (enemy.isAlive) enemy.addStatus({ type: 'slow', turns: 2 });
    return { success: true, message: `${caster.personnage.nom} − ${enemy.personnage.nom} −${dmg} PV, ralenti` };
  },

  // Sort 2 — Mur de Pierre: long wall of Roche
  'Roche|2': (_sort, caster, target, manager) => {
    setWallTiles(caster.x, caster.y, target.x, target.y, target.z, 'Roche', manager, 5);
    return { success: true, message: `${caster.personnage.nom} dresse un mur de pierre` };
  },

  // ══════════════════════════════════════════════════════════════════════════
  // INSECTE
  // ══════════════════════════════════════════════════════════════════════════

  // Sort 1 — Essaim: small damage + poison
  'Insecte|1': (sort, caster, _target, manager, enemy) => {
    if (!enemy) return null;
    const dmg = baseDamage(caster, sort, 0.4);
    damageUnit(enemy, dmg, manager);
    if (enemy.isAlive) {
      enemy.addStatus({ type: 'poison', turns: 2, dmgPerTurn: 6 });
      enemy.addStatus({ type: 'slow', turns: 1 });
    }
    return { success: true, message: `${caster.personnage.nom} essaim − ${enemy.personnage.nom} −${dmg} PV, empoisonné + ralenti` };
  },

  // ══════════════════════════════════════════════════════════════════════════
  // NORMAL
  // ══════════════════════════════════════════════════════════════════════════

  // Sort 1 — Attaque Basique: pure damage, no frills
  'Normal|1': (sort, caster, _target, manager, enemy) => {
    if (!enemy) return null;
    const dmg = baseDamage(caster, sort, 1.1);
    damageUnit(enemy, dmg, manager);
    return { success: true, message: `${caster.personnage.nom} frappe ${enemy.personnage.nom} −${dmg} PV` };
  },
};

// ── Main execute function ────────────────────────────────────────────────────

export function executeSpell(
  sort: Sort,
  caster: CombatUnit,
  target: SpellTarget,
  manager: CombatManager,
): SpellResult {
  const targetUnit = manager.getUnitAt(target.x, target.y);
  const enemy = targetUnit && targetUnit.team !== caster.team ? targetUnit : null;
  const ally  = targetUnit && targetUnit.team === caster.team && targetUnit !== caster ? targetUnit : null;

  // Try element-specific handler first
  const key = `${caster.personnage.element}|${sort.num}`;
  const specific = SPECIFIC[key];
  if (specific) {
    const result = specific(sort, caster, target, manager, enemy, ally);
    if (result) return result;
  }

  // ── Generic type-based fallback ──────────────────────────────────────────
  const t = sort.type.toLowerCase();

  // Déplacement (pure move)
  if (t.includes('déplacement') && !t.includes('dégâts')) {
    if (!targetUnit) {
      caster.moveTo(target.x, target.y, target.z);
      return { success: true, message: `${caster.personnage.nom} se déplace en (${target.x},${target.y})` };
    }
  }

  // Déplacement + Dégâts (charge)
  if (t.includes('déplacement') && t.includes('dégâts') && enemy) {
    const dmg = baseDamage(caster, sort);
    damageUnit(enemy, dmg, manager);
    const adjacent = findAdjacentEmpty(caster, target, manager);
    if (adjacent) caster.moveTo(adjacent.x, adjacent.y, target.z);
    return { success: true, message: `${caster.personnage.nom} charge ${enemy.personnage.nom} : −${dmg} PV` };
  }

  // Dégâts
  if (t.includes('dégâts') && !t.includes('déplacement')) {
    if (enemy) {
      const dmg = baseDamage(caster, sort);
      damageUnit(enemy, dmg, manager);
      if (t.includes('terrain')) {
        manager.setTileElement(target.x, target.y, target.z, caster.personnage.element);
      }
      return { success: true, message: `${caster.personnage.nom} → ${enemy.personnage.nom} : −${dmg} PV` };
    }
    if (t.includes('terrain')) {
      manager.setTileElement(target.x, target.y, target.z, caster.personnage.element);
      return { success: true, message: `${caster.personnage.nom} transforme la case` };
    }
  }

  // Terrain (no damage)
  if (t.includes('terrain') && !t.includes('dégâts') && !t.includes('déplacement')) {
    const existing = manager.getTileElement(target.x, target.y, target.z);
    manager.setTileElement(target.x, target.y, target.z, caster.personnage.element);
    const interaction = checkTerrainInteraction(caster.personnage.element, existing, manager, target);
    return { success: true, message: interaction ?? `Case → ${caster.personnage.element}` };
  }

  // Soin
  if (t.includes('soin')) {
    const healTarget = ally ?? caster;
    const amount = baseHeal(caster, sort);
    healTarget.heal(amount);
    return { success: true, message: `${caster.personnage.nom} soigne ${healTarget.personnage.nom} +${amount} PV` };
  }

  // Buff
  if (t.includes('buff') && !t.includes('dégâts')) {
    const buffTarget = ally ?? caster;
    buffTarget.addStatus({ type: 'buff_damage', turns: 2 });
    return { success: true, message: `${buffTarget.personnage.nom} renforcé (+20% dégâts, 2 tours)` };
  }

  // Contrôle — push enemy
  if (t.includes('contrôle') && enemy) {
    const dx = Math.sign(target.x - caster.x);
    const dy = Math.sign(target.y - caster.y);
    const nx = target.x + dx, ny = target.y + dy;
    if (nx >= 0 && nx < 10 && ny >= 0 && ny < 10 && !manager.getUnitAt(nx, ny)) {
      enemy.moveTo(nx, ny, target.z);
      return { success: true, message: `${caster.personnage.nom} repousse ${enemy.personnage.nom}` };
    }
    return { success: true, message: `${enemy.personnage.nom} résiste au contrôle` };
  }

  // Invocation — placeholder
  if (t.includes('invocation')) {
    return { success: true, message: `${caster.personnage.nom} invoque (non implémenté)` };
  }

  return { success: false, message: `${caster.personnage.nom} : sort inefficace` };
}

// ── Utility ──────────────────────────────────────────────────────────────────

function findAdjacentEmpty(
  _caster: CombatUnit,
  target: SpellTarget,
  manager: CombatManager,
): { x: number; y: number } | null {
  for (const [dx, dy] of [[-1, 0], [1, 0], [0, -1], [0, 1]]) {
    const nx = target.x + dx, ny = target.y + dy;
    if (nx >= 0 && nx < 10 && ny >= 0 && ny < 10 && !manager.getUnitAt(nx, ny)) {
      return { x: nx, y: ny };
    }
  }
  return null;
}

function checkTerrainInteraction(
  element: string,
  existing: string | null,
  manager: CombatManager,
  target: SpellTarget,
): string | null {
  if (element === 'Feu' && existing === 'Roche') {
    manager.setTileElement(target.x, target.y, target.z, 'Magma');
    return 'Feu + Roche → Magma !';
  }
  if (element === 'Feu' && (existing === 'Eau' || existing === 'Glace' || existing === 'Vent')) {
    manager.setTileElement(target.x, target.y, target.z, 'Vapeur');
    return `Feu + ${existing} → Vapeur !`;
  }
  if (element === 'Eau' && existing === 'Electrique') {
    return "Eau conduit l'électricité !";
  }
  if (element === 'Glace' && existing === 'Eau') {
    manager.setTileElement(target.x, target.y, target.z, 'Glace');
    return 'Eau gelée !';
  }
  if (element === 'Roche' && existing === 'Feu') {
    manager.setTileElement(target.x, target.y, target.z, 'Magma');
    return 'Roche + Feu → Magma !';
  }
  if (element === 'Plante' && (existing === 'Feu' || existing === 'Magma')) {
    manager.setTileElement(target.x, target.y, target.z, 'Feu');
    return 'Plante brûlée !';
  }
  if (element === 'Vent' && existing === 'Feu') {
    manager.setTileElement(target.x, target.y, target.z, 'Vapeur');
    return 'Vent attise le feu → Vapeur !';
  }
  return null;
}
