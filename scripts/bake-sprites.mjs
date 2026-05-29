#!/usr/bin/env node
/**
 * bake-sprites.mjs
 *
 * Bakes spritesheet PNGs for all characters that have a model.glb on disk.
 * Output: public/characters/{folder}/sprites/{state}-{dir}.png
 *         (non-directional states: {state}.png only)
 *
 * Prerequisites:
 *   npm run start   ← Vite dev server must be running on port 5173
 *
 * Usage:
 *   node scripts/bake-sprites.mjs [--char 001-pyrakh] [--frame-w 128] [--frame-h 192]
 */

import { chromium } from 'playwright';
import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync } from 'fs';
import { join, resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const CHARS_BASE = join(ROOT, 'public', 'characters');
const VITE_URL = 'http://localhost:5173';

// Animation bank GLBs to inject (loaded in order; last wins on name conflicts)
const BANK_URLS = [
  '/characters/meshy-anims/idle.glb',
  '/characters/meshy-anims/idle_02.glb',
  '/characters/meshy-anims/idle_03.glb',
  '/characters/meshy-anims/walking.glb',
  '/characters/meshy-anims/behit_flyup.glb',
  '/characters/meshy-anims/dead.glb',
  '/characters/meshy-anims/attack.glb',
  '/characters/meshy-anims/skill_01.glb',
  '/characters/meshy-anims/skill_02.glb',
  '/characters/meshy-anims/skill_03.glb',
  // Extended action bank (attack-05..10 candidates — skip silently if no matching slot)
  '/characters/meshy-anims/action_004.glb',
  '/characters/meshy-anims/action_005.glb',
  '/characters/meshy-anims/action_006.glb',
  '/characters/meshy-anims/action_007.glb',
  '/characters/meshy-anims/action_008.glb',
  '/characters/meshy-anims/action_009.glb',
  '/characters/meshy-anims/action_010.glb',
  '/characters/meshy-anims/action_011.glb',
];

// Parse CLI args
const args = process.argv.slice(2);
const charFilter = args[args.indexOf('--char') + 1] ?? null;
const frameW = parseInt(args[args.indexOf('--frame-w') + 1] ?? '128', 10);
const frameH = parseInt(args[args.indexOf('--frame-h') + 1] ?? '192', 10);

function findCharFolders() {
  return readdirSync(CHARS_BASE, { withFileTypes: true })
    .filter(e => e.isDirectory() && /^\d{3}-/.test(e.name))
    .map(e => e.name)
    .filter(name => existsSync(join(CHARS_BASE, name, 'model.glb')))
    .filter(name => !charFilter || name === charFilter)
    .sort();
}

function inferCharId(folder) {
  return parseInt(folder.slice(0, 3), 10);
}

async function main() {
  const folders = findCharFolders();
  if (folders.length === 0) {
    console.error('No character folders with model.glb found.');
    console.error(`  base dir: ${CHARS_BASE}`);
    console.error(`  filter:   ${charFilter ?? '(none)'}`);
    process.exit(1);
  }
  console.log(`Found ${folders.length} character(s) to bake:`);
  folders.forEach(f => console.log(`  ${f}`));

  const browser = await chromium.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-gpu'],
  });
  const ctx = await browser.newContext();
  const page = await ctx.newPage();

  page.on('console', msg => {
    const text = msg.text();
    if (text.startsWith('[bake]') || text.startsWith('[headless]') || text.startsWith('[Viewer]')) {
      console.log(`  [browser] ${text}`);
    }
  });
  page.on('pageerror', err => console.error(`  [browser error] ${err.message}`));

  console.log(`\nOpening ${VITE_URL}/characters/headless.html ...`);
  try {
    await page.goto(`${VITE_URL}/characters/headless.html`, { timeout: 15000 });
  } catch (e) {
    console.error(`\nFailed to connect to ${VITE_URL}. Is "npm run start" running?`);
    await browser.close();
    process.exit(1);
  }

  await page.waitForFunction(() => window.__viewerReady, { timeout: 10000 });
  console.log('Viewer ready.\n');

  const summary = [];

  for (const folder of folders) {
    const charId = inferCharId(folder);
    const modelUrl = `/characters/${folder}/model.glb`;
    const spriteDir = join(CHARS_BASE, folder, 'sprites');

    console.log(`━━━ ${folder} (id=${charId}) ━━━`);

    // Load character model
    console.log('  Loading model...');
    await page.evaluate(async url => {
      await window.loadModel(url);
    }, modelUrl);

    // Inject animation bank clips
    console.log('  Injecting animation banks...');
    let injectedTotal = 0;
    for (const bankUrl of BANK_URLS) {
      try {
        const res = await page.evaluate(async url => {
          return await window.loadAndInjectBank(url);
        }, bankUrl);
        if (res?.injected?.length) {
          injectedTotal += res.injected.length;
          console.log(`    ${bankUrl.split('/').pop()}: ${res.injected.join(', ')}`);
        }
      } catch (e) {
        // File may not exist — silently skip
      }
    }
    console.log(`  Total clips injected: ${injectedTotal}`);

    // Capture spritesheets
    console.log(`  Capturing (${frameW}×${frameH} frames)...`);
    let sheets;
    try {
      sheets = await page.evaluate(
        async (opts) => await window.captureSpritesheetsByDir(opts),
        { frameW, frameH },
      );
    } catch (e) {
      console.error(`  Capture failed: ${e.message}`);
      summary.push({ folder, ok: false, error: e.message });
      continue;
    }

    const slotCount = Object.keys(sheets).length;
    if (slotCount === 0) {
      console.warn('  No slots captured — check animation clip names.');
      summary.push({ folder, ok: false, error: 'no slots captured' });
      continue;
    }

    // Save PNGs to disk
    mkdirSync(spriteDir, { recursive: true });
    let fileCount = 0;
    for (const [slot, dirs] of Object.entries(sheets)) {
      const isDirectional = Object.keys(dirs).length > 1;
      for (const [dir, dataUrl] of Object.entries(dirs)) {
        const fname = isDirectional ? `${slot}-${dir}.png` : `${slot}.png`;
        const buf = Buffer.from(dataUrl.split(',')[1], 'base64');
        writeFileSync(join(spriteDir, fname), buf);
        fileCount++;
      }
    }
    console.log(`  Saved ${fileCount} files → ${spriteDir}`);
    summary.push({ folder, ok: true, files: fileCount, slots: slotCount });
  }

  await browser.close();

  console.log('\n━━━ Summary ━━━');
  for (const s of summary) {
    if (s.ok) {
      console.log(`  ✓ ${s.folder}: ${s.slots} slots, ${s.files} files`);
    } else {
      console.log(`  ✗ ${s.folder}: ${s.error}`);
    }
  }
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
