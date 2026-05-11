#!/usr/bin/env node
/**
 * Copies RPG Character Mecanim FBX animations (Unarmed + Relax subset)
 * into public/characters/anim-library/{slot}/ and updates manifest.json.
 *
 * Source: C:\Users\David\My project (1)\Assets\ExplosiveLLC\RPG Character Mecanim Animation Pack\
 * Usage:  node scripts/sort-rpg-anims.js
 *         node scripts/sort-rpg-anims.js --dry-run
 */

import fs   from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const SRC  = 'C:/Users/David/My project (1)/Assets/ExplosiveLLC/RPG Character Mecanim Animation Pack/Animations';
const OUT  = path.join(__dirname, '..', 'public', 'characters', 'anim-library');
const DRY  = process.argv.includes('--dry-run');

// ── Slot rules: [ regex-on-filename, slot ] in priority order ──
// Most specific patterns first — generic idle/Relax fallback last.
const RULES = [
  // Death
  [/Death|Die\b/i,                            'die'],
  // Hurt
  [/GetHit|KnockDown|GetUp|Hurt/i,            'hurt'],
  // Attacks — specific before generic
  [/Attack-?Kick|Kick/i,                      'attack-01'],
  [/Air-?Attack|Attack-?[LR]\d|Attack[123]/i, 'attack-02'],
  [/Cast|Throw|Stab|Activate/i,               'attack-03'],
  [/Block|Dodge|Roll/i,                       'attack-04'],
  [/Shoot|Fire|Aim/i,                         'attack-05'],
  [/Climb|Crawl/i,                            'attack-06'],
  [/Attack/i,                                 'attack-03'], // generic attack fallback
  // Locomotion — before idle so relax-walk/run/jump route correctly
  [/Walk/i,                                   'walk'],
  [/Run/i,                                    'run'],
  [/Jump/i,                                   'jump'],
  [/Swim|Ascend|Tread/i,                      'swim'],
  // Idle / rest as final catch-all
  [/Idle/i,                                   'idle'],
  [/Relax/i,                                  'idle'],
];

// ── Only copy from these sub-folders (most universally useful) ──
const ALLOWED_DIRS = new Set(['Unarmed', 'Relax']);

// ── Walk source tree ──────────────────────────────────────────
function walkDir(dir, files = []) {
  for (const entry of fs.readdirSync(dir)) {
    const full = path.join(dir, entry);
    try {
      const stat = fs.statSync(full);
      if (stat.isDirectory()) walkDir(full, files);
      else if (/\.fbx$/i.test(entry) && !entry.endsWith('.meta')) files.push(full);
    } catch {}
  }
  return files;
}

// ── Classify one file ─────────────────────────────────────────
function classify(filepath) {
  const dir  = path.basename(path.dirname(filepath));  // e.g. "Unarmed"
  const name = path.basename(filepath);
  if (!ALLOWED_DIRS.has(dir)) return null;

  for (const [re, slot] of RULES) {
    if (re.test(name)) return slot;
  }
  return null; // skip
}

// ── Derive clean output filename ──────────────────────────────
function outName(filepath) {
  // "RPG-Character@Unarmed-Walk-Forward.FBX" → "unarmed-walk-forward.fbx"
  return path.basename(filepath)
    .replace(/^RPG-Character@/i, '')
    .toLowerCase()
    .replace(/\.fbx$/, '.fbx');
}

// ── Main ──────────────────────────────────────────────────────
const all   = walkDir(SRC);
const bySlot = {};

for (const f of all) {
  const slot = classify(f);
  if (!slot) continue;
  if (!bySlot[slot]) bySlot[slot] = [];
  bySlot[slot].push(f);
}

let copied = 0, skipped = 0, total = 0;

for (const [slot, files] of Object.entries(bySlot)) {
  const dir = path.join(OUT, slot);
  if (!DRY) fs.mkdirSync(dir, { recursive: true });

  console.log(`\n── ${slot}  (${files.length})`);
  for (const src of files) {
    const name = outName(src);
    const dest = path.join(dir, name);
    total++;
    if (!DRY && fs.existsSync(dest)) {
      process.stdout.write(`  ✓ skip  ${name}\n`);
      skipped++;
      continue;
    }
    if (!DRY) fs.copyFileSync(src, dest);
    process.stdout.write(`  ${DRY ? '[dry]' : '↓ ok  '} ${name}\n`);
    copied++;
  }
}

// ── Update manifest.json ──────────────────────────────────────
if (!DRY) {
  const manifestPath = path.join(OUT, 'manifest.json');
  let manifest = {};
  if (fs.existsSync(manifestPath)) {
    try { manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8')); } catch {}
  }

  for (const [slot, files] of Object.entries(bySlot)) {
    const names = files.map(outName); // keep extension so UI knows loader to use
    // Merge — keep existing BVH entries, add FBX ones (no dups)
    const existing = new Set(manifest[slot] ?? []);
    for (const n of names) existing.add(n);
    manifest[slot] = [...existing];
  }

  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
  console.log(`\n📋 Manifest mis à jour → ${manifestPath}`);
}

console.log(`\n✅ ${DRY ? '[DRY RUN] ' : ''}${copied} copiés, ${skipped} déjà présents — total ${total} fichiers`);
console.log(`📁 ${OUT}`);
