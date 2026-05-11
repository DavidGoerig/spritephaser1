/**
 * render_sprites.js — Puppeteer-based headless spritesheet renderer
 *
 * Usage:
 *   node render_sprites.js --char=001-pyrakh [--glb=path/to/model.glb]
 *                          [--frame-count=8] [--frame-size=64] [--port=9876]
 *
 * Requires: public/characters/headless.html, public/characters/viewer.js
 * Output:   public/characters/{slug}/{slot}.png
 */

import puppeteer from 'puppeteer';
import express   from 'express';
import minimist  from 'minimist';
import fs        from 'fs';
import path      from 'path';
import { createServer } from 'http';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// ── CLI args ──────────────────────────────────────────────────────────────────

const argv = minimist(process.argv.slice(2), {
  string:  ['char', 'glb'],
  number:  ['port', 'frame-count', 'frame-size'],
  default: { port: 9876, 'frame-count': 8, 'frame-size': 64 },
});

const charSlug   = argv.char;
const glbOverride = argv.glb   || null;
const port        = argv.port;
const frameCount  = argv['frame-count'];
const frameSize   = argv['frame-size'];

if (!charSlug) {
  console.error('Usage: node render_sprites.js --char=<slug> [--glb=<path>]');
  process.exit(1);
}

// ── Paths ─────────────────────────────────────────────────────────────────────

const ROOT       = path.resolve(__dirname, '../../');
const PUBLIC_DIR = path.join(ROOT, 'public');
const CHAR_DIR   = path.join(PUBLIC_DIR, 'characters', charSlug);
const GLB_PATH   = glbOverride
  ? path.resolve(glbOverride)
  : path.join(CHAR_DIR, 'model.glb');

if (!fs.existsSync(CHAR_DIR)) {
  fs.mkdirSync(CHAR_DIR, { recursive: true });
}

if (!fs.existsSync(GLB_PATH)) {
  console.error(`[render] GLB not found: ${GLB_PATH}`);
  process.exit(2);
}

// ── Static file server ────────────────────────────────────────────────────────

function startServer(dir, port) {
  const app = express();
  app.use(express.static(dir, { maxAge: 0 }));
  return new Promise((resolve, reject) => {
    const srv = createServer(app);
    srv.listen(port, '127.0.0.1', () => {
      console.log(`[server] Serving ${dir} on http://127.0.0.1:${port}`);
      resolve(srv);
    });
    srv.on('error', reject);
  });
}

// ── Base64 → file ─────────────────────────────────────────────────────────────

function saveDataUrl(dataUrl, destPath) {
  const base64 = dataUrl.replace(/^data:image\/png;base64,/, '');
  fs.writeFileSync(destPath, Buffer.from(base64, 'base64'));
}

// ── Main ──────────────────────────────────────────────────────────────────────

async function main() {
  const server = await startServer(PUBLIC_DIR, port);

  const browser = await puppeteer.launch({
    headless: 'new',
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--enable-webgl',
      '--enable-unsafe-webgpu',
      '--ignore-gpu-blocklist',
      '--use-gl=angle',
      '--use-angle=swiftshader',
    ],
  });

  try {
    const page = await browser.newPage();

    // Forward console messages for debugging
    page.on('console', msg => console.log(`[browser ${msg.type()}]`, msg.text()));
    page.on('pageerror', err => console.error('[browser error]', err.message));

    const headlessUrl = `http://127.0.0.1:${port}/characters/headless.html`;
    console.log(`[render] Opening ${headlessUrl}`);
    await page.goto(headlessUrl, { waitUntil: 'networkidle0', timeout: 30_000 });

    // Wait for viewer ready flag
    await page.waitForFunction(() => window.__viewerReady === true, { timeout: 15_000 });
    console.log('[render] Viewer ready');

    // Build the model URL relative to the static server
    const glbRelative = path.relative(PUBLIC_DIR, GLB_PATH).replace(/\\/g, '/');
    const glbUrl = `http://127.0.0.1:${port}/${glbRelative}`;
    console.log(`[render] Loading GLB: ${glbUrl}`);

    const loadResult = await page.evaluate(async (url) => {
      return await window.loadModel(url);
    }, glbUrl);

    console.log('[render] Clips found:', loadResult?.animClips ?? []);

    // Generate all spritesheets
    console.log(`[render] Generating spritesheets (${frameCount} frames @ ${frameSize}px)…`);
    const spritesheets = await page.evaluate(
      async (fc, fs) => await window.generateAllSpritesheets(fc, fs),
      frameCount,
      frameSize
    );

    if (!spritesheets || typeof spritesheets !== 'object') {
      console.error('[render] generateAllSpritesheets returned nothing');
      process.exit(3);
    }

    // Save each slot
    let saved = 0;
    for (const [slot, dataUrl] of Object.entries(spritesheets)) {
      if (!dataUrl?.startsWith('data:image/png;base64,')) {
        console.warn(`[render] Skipping invalid data URL for slot "${slot}"`);
        continue;
      }
      const outPath = path.join(CHAR_DIR, `${slot}.png`);
      saveDataUrl(dataUrl, outPath);
      const isPortrait = slot === 'portrait';
      const dims = isPortrait ? '512×512' : `${frameSize * frameCount}×${frameSize * 4}`;
      console.log(`[render] Saved ${slot}.png (${dims})`);
      saved++;
    }

    console.log(`[render] Done — ${saved} sprites saved to ${CHAR_DIR}`);

  } finally {
    await browser.close();
    await new Promise(r => server.close(r));
  }
}

main().catch(err => {
  console.error('[render] Fatal:', err);
  process.exit(1);
});
