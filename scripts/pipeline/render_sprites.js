/**
 * render_sprites.js — Playwright headless spritesheet renderer
 *
 * Usage:
 *   node render_sprites.js --char=001-pyrakh [--glb=path/to/model.glb]
 *                          [--frame-w=128] [--frame-h=192] [--port=9876]
 *
 * Requires: public/characters/headless.html, public/characters/viewer.js
 * Output:   public/characters/{slug}/sprites/{state}-{dir}.png  (directional)
 *           public/characters/{slug}/sprites/{state}.png         (non-directional)
 *
 * Injects shared animation bank GLBs from public/characters/meshy-anims/
 * — no per-character Meshy rigging/animation API calls needed.
 */

import { chromium } from 'playwright';
import http         from 'http';
import fs           from 'fs';
import path         from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// ── CLI args ──────────────────────────────────────────────────────────────────

function arg(key, def) {
  const entry = process.argv.find(a => a.startsWith(`--${key}=`));
  return entry ? entry.split('=').slice(1).join('=') : def;
}

const charSlug   = arg('char', null);
const glbOverride = arg('glb',  null);
const port       = parseInt(arg('port',    '9876'), 10);
const frameW     = parseInt(arg('frame-w', '128'),  10);
const frameH     = parseInt(arg('frame-h', '192'),  10);

if (!charSlug) {
  console.error('Usage: node render_sprites.js --char=<slug> [--glb=<path>]');
  process.exit(1);
}

// ── Paths ─────────────────────────────────────────────────────────────────────

const ROOT       = path.resolve(__dirname, '../../');
const PUBLIC_DIR = path.join(ROOT, 'public');
const CHAR_DIR   = path.join(PUBLIC_DIR, 'characters', charSlug);
const SPRITE_DIR = path.join(CHAR_DIR, 'sprites');
const GLB_PATH   = glbOverride
  ? path.resolve(glbOverride)
  : path.join(CHAR_DIR, 'model.glb');

// Shared animation bank GLBs (all Meshy models use the same 24-bone skeleton)
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

// ── Minimal static file server ────────────────────────────────────────────────

const MIME = {
  '.html': 'text/html',
  '.js':   'application/javascript',
  '.glb':  'model/gltf-binary',
  '.png':  'image/png',
  '.json': 'application/json',
};

function startServer(rootDir, port) {
  return new Promise((resolve, reject) => {
    const srv = http.createServer((req, res) => {
      const filePath = path.join(rootDir, req.url.split('?')[0]);
      fs.readFile(filePath, (err, data) => {
        if (err) { res.writeHead(404); res.end('Not found'); return; }
        res.writeHead(200, { 'Content-Type': MIME[path.extname(filePath)] || 'application/octet-stream' });
        res.end(data);
      });
    });
    srv.listen(port, '127.0.0.1', () => {
      console.log(`[server] http://127.0.0.1:${port}`);
      resolve(srv);
    });
    srv.on('error', reject);
  });
}

// ── Main ──────────────────────────────────────────────────────────────────────

async function main() {
  if (!fs.existsSync(CHAR_DIR)) fs.mkdirSync(CHAR_DIR, { recursive: true });

  if (!fs.existsSync(GLB_PATH)) {
    console.error(`[render] GLB not found: ${GLB_PATH}`);
    process.exit(2);
  }

  const server = await startServer(PUBLIC_DIR, port);

  const browser = await chromium.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-gpu'],
  });

  try {
    const page = await browser.newPage();
    page.on('console', msg => {
      const text = msg.text();
      if (text.startsWith('[bake]') || text.startsWith('[headless]') || text.startsWith('[Viewer]')) {
        console.log(`  [browser] ${text}`);
      }
    });
    page.on('pageerror', err => console.error(`  [browser error] ${err.message}`));

    const headlessUrl = `http://127.0.0.1:${port}/characters/headless.html`;
    console.log(`[render] Opening ${headlessUrl}`);
    await page.goto(headlessUrl, { timeout: 15000 });
    await page.waitForFunction(() => window.__viewerReady === true, { timeout: 15000 });
    console.log('[render] Viewer ready');

    // Load character model
    const glbRelUrl = path.relative(PUBLIC_DIR, GLB_PATH).replace(/\\/g, '/');
    const glbUrl    = `http://127.0.0.1:${port}/${glbRelUrl}`;
    console.log(`[render] Loading model: ${glbUrl}`);
    await page.evaluate(async url => { await window.loadModel(url); }, glbUrl);

    // Inject shared animation banks
    console.log('[render] Injecting animation banks...');
    let injectedTotal = 0;
    for (const relUrl of BANK_URLS) {
      const fullUrl = `http://127.0.0.1:${port}${relUrl}`;
      try {
        const res = await page.evaluate(async url => {
          return await window.loadAndInjectBank(url);
        }, fullUrl);
        if (res?.injected?.length) {
          injectedTotal += res.injected.length;
          console.log(`  ${relUrl.split('/').pop()}: ${res.injected.join(', ')}`);
        }
      } catch (_) {
        // Bank file may not exist on disk — skip silently
      }
    }
    console.log(`  Total clips injected: ${injectedTotal}`);

    // Capture per-direction spritesheet strips
    console.log(`[render] Capturing (${frameW}×${frameH} frames)...`);
    let sheets;
    try {
      sheets = await page.evaluate(
        async opts => await window.captureSpritesheetsByDir(opts),
        { frameW, frameH },
      );
    } catch (e) {
      console.error(`[render] Capture failed: ${e.message}`);
      process.exit(3);
    }

    const slotCount = Object.keys(sheets).length;
    if (slotCount === 0) {
      console.error('[render] No slots captured — check animation clip names');
      process.exit(3);
    }

    // Save PNGs  →  sprites/{state}-{dir}.png  or  sprites/{state}.png
    fs.mkdirSync(SPRITE_DIR, { recursive: true });
    let saved = 0;
    for (const [slot, dirs] of Object.entries(sheets)) {
      const isDirectional = Object.keys(dirs).length > 1;
      for (const [dir, dataUrl] of Object.entries(dirs)) {
        const fname = isDirectional ? `${slot}-${dir}.png` : `${slot}.png`;
        const buf   = Buffer.from(dataUrl.split(',')[1], 'base64');
        fs.writeFileSync(path.join(SPRITE_DIR, fname), buf);
        saved++;
      }
    }
    console.log(`[render] Done — ${slotCount} slots, ${saved} files → ${SPRITE_DIR}`);

  } finally {
    await browser.close();
    await new Promise(r => server.close(r));
  }
}

main().catch(err => {
  console.error('[render] Fatal:', err);
  process.exit(1);
});
