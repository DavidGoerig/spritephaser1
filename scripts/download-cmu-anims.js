#!/usr/bin/env node
/**
 * Downloads Bandai Namco Research Motiondataset BVH files,
 * organised by game animation slot, and writes anim-library/manifest.json.
 *
 * Usage:  node scripts/download-cmu-anims.js
 *         node scripts/download-cmu-anims.js --slot walk
 *         node scripts/download-cmu-anims.js --list
 */

import https from 'https';
import fs    from 'fs';
import path  from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const BASE = 'https://raw.githubusercontent.com/BandaiNamcoResearchInc/Bandai-Namco-Research-Motiondataset/master/dataset';
const DS1  = `${BASE}/Bandai-Namco-Research-Motiondataset-1/data`;
const OUT  = path.join(__dirname, '..', 'public', 'characters', 'anim-library');

const args     = process.argv.slice(2);
const onlySlot = args.includes('--slot') ? args[args.indexOf('--slot') + 1] : null;
const listOnly = args.includes('--list');

// ── All personality styles in the Bandai dataset ──────────────
const STYLES = [
  'active', 'angry', 'childish', 'chimpira', 'feminine', 'giant', 'happy',
  'masculinity', 'musical', 'normal', 'not-confident', 'old', 'proud', 'sad', 'tired',
];

// ── Mapping: game slot → Bandai animation keys ─────────────────
// Format: {action}_{style}  →  file = dataset-1_{action}_{style}_001.bvh
const LIBRARY = {
  idle: [
    'respond_normal',
    'guide_normal',
    'call_normal',
  ],
  walk: [
    ...STYLES.map(s => `walk_${s}`),
    ...STYLES.map(s => `walk-back_${s}`),
    ...STYLES.map(s => `walk-left_${s}`),
    ...STYLES.map(s => `walk-right_${s}`),
  ],
  run: [
    ...STYLES.map(s => `run_${s}`),
    ...STYLES.map(s => `dash_${s}`),
  ],
  'attack-01': ['punch_normal'],
  'attack-02': ['kick_normal'],
  'attack-03': ['slash_normal'],
  hurt: [
    'bow_sad', 'bow_angry', 'bow_not-confident', 'bow_tired', 'bow_active',
  ],
  die: [
    'bow_not-confident', 'bow_sad', 'bow_old', 'bow_tired',
  ],
  portrait: ['guide_normal'],
  emote: [
    ...STYLES.map(s => `bow_${s}`),
    ...STYLES.map(s => `bye_${s}`),
    ...STYLES.map(s => `byebye_${s}`),
    'dance-long_normal',
    'dance-short_normal',
  ],
};

// ── Download helper ────────────────────────────────────────────

function downloadFile(url, dest) {
  return new Promise((resolve) => {
    if (fs.existsSync(dest)) {
      process.stdout.write(`  ✓ skip  ${path.basename(dest)}\n`);
      return resolve('skip');
    }
    const tmp = dest + '.tmp';
    const file = fs.createWriteStream(tmp);
    https.get(url, (res) => {
      if (res.statusCode !== 200) {
        file.close();
        fs.unlink(tmp, () => {});
        process.stdout.write(`  ✗ ${res.statusCode}   ${path.basename(dest)}\n`);
        return resolve('err');
      }
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        fs.renameSync(tmp, dest);
        process.stdout.write(`  ↓ ok    ${path.basename(dest)}\n`);
        resolve('ok');
      });
    }).on('error', (err) => {
      file.close();
      fs.unlink(tmp, () => {});
      process.stdout.write(`  ✗ err   ${path.basename(dest)} — ${err.message}\n`);
      resolve('err');
    });
  });
}

// ── Main ──────────────────────────────────────────────────────

async function main() {
  if (listOnly) {
    console.log('\nSlots disponibles :\n');
    for (const [slot, anims] of Object.entries(LIBRARY)) {
      console.log(`  ${slot.padEnd(12)} ${anims.length} animations`);
      anims.forEach(a => console.log(`    ${a}`));
    }
    return;
  }

  const slots = onlySlot
    ? { [onlySlot]: LIBRARY[onlySlot] ?? [] }
    : LIBRARY;

  let total = 0, ok = 0, skip = 0, fail = 0;
  const manifest = {};

  for (const [slot, anims] of Object.entries(slots)) {
    const dir = path.join(OUT, slot);
    fs.mkdirSync(dir, { recursive: true });
    console.log(`\n── ${slot} (${anims.length} animation(s))`);
    manifest[slot] = [];

    for (const anim of anims) {
      const filename = `dataset-1_${anim}_001.bvh`;
      const url      = `${DS1}/${filename}`;
      const dest     = path.join(dir, `${anim}.bvh`);
      const result   = await downloadFile(url, dest);
      total++;
      if (result === 'ok')   { ok++;   manifest[slot].push(anim + '.bvh'); }
      if (result === 'skip') { skip++; manifest[slot].push(anim + '.bvh'); }
      if (result !== 'ok' && result !== 'skip') fail++;
    }
  }

  // Write manifest so the UI knows what's available per slot
  if (!onlySlot) {
    const manifestPath = path.join(OUT, 'manifest.json');
    // Merge with existing manifest if doing partial download
    let existing = {};
    if (fs.existsSync(manifestPath)) {
      try { existing = JSON.parse(fs.readFileSync(manifestPath, 'utf8')); } catch {}
    }
    const merged = { ...existing, ...manifest };
    fs.writeFileSync(manifestPath, JSON.stringify(merged, null, 2));
    console.log(`\n📋 Manifest → ${manifestPath}`);
  } else {
    // Partial: merge this slot into existing manifest
    const manifestPath = path.join(OUT, 'manifest.json');
    let existing = {};
    if (fs.existsSync(manifestPath)) {
      try { existing = JSON.parse(fs.readFileSync(manifestPath, 'utf8')); } catch {}
    }
    existing[onlySlot] = manifest[onlySlot] ?? [];
    fs.writeFileSync(manifestPath, JSON.stringify(existing, null, 2));
    console.log(`\n📋 Manifest mis à jour → ${manifestPath}`);
  }

  console.log(`\n✅ Terminé — ${ok} téléchargés, ${skip} déjà présents, ${fail} échecs`);
  console.log(`📁 ${OUT}`);
  if (ok + skip > 0) {
    console.log(`\nPour utiliser : ouvrez le Character Bank et choisissez un variant`);
    console.log(`  dans le menu ▾ de chaque slot de la grille d'animations.`);
  }
}

main().catch(console.error);
