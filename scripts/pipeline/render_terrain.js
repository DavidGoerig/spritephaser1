/**
 * render_terrain.js — Headless renderer for terrain tiles and props.
 *
 * Usage:
 *   node render_terrain.js --slug=feu-lava --type=tile --glb=path/to/model.glb
 *   node render_terrain.js --slug=wall-stone --type=prop --glb=path/to/model.glb
 *
 * Tile output: public/blocks/gen/{slug}/{slug}-strip.png
 *   → 256×64 horizontal strip (4 × 64×64 frames, Y-rotations 0/90/180/270°)
 *   → loaded as frameWidth:64,frameHeight:64 spritesheet; applyDirectionFrame() picks frame 0-3
 *
 * Prop output: public/objects/gen/{slug}/{slug}-{dir}.png
 *   → 4 separate 64×128 images (isometric camera N/E/S/W)
 *   → dir: 0=North, 1=East, 2=South, 3=West
 */

import { chromium } from 'playwright';
import http         from 'http';
import fs           from 'fs';
import path         from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// ── CLI args ──────────────────────────────────────────────────────────────────
function arg(key, def) {
  const e = process.argv.find(a => a.startsWith(`--${key}=`));
  return e ? e.split('=').slice(1).join('=') : def;
}

const slug    = arg('slug', null);
const type    = arg('type', 'tile');   // 'tile' | 'prop'
const glbPath = arg('glb',  null);
const port    = parseInt(arg('port', '9886'), 10);

if (!slug || !glbPath) {
  console.error('Usage: node render_terrain.js --slug=NAME --type=tile|prop --glb=PATH');
  process.exit(1);
}

// ── Paths ─────────────────────────────────────────────────────────────────────
const ROOT        = path.resolve(__dirname, '../../');
const PUBLIC_DIR  = path.join(ROOT, 'public');
const OUTPUT_DIR  = type === 'tile'
  ? path.join(PUBLIC_DIR, 'blocks',  'gen', slug)
  : path.join(PUBLIC_DIR, 'objects', 'gen', slug);

const MIME = {
  '.html': 'text/html', '.js': 'application/javascript',
  '.glb': 'model/gltf-binary', '.png': 'image/png', '.json': 'application/json',
};

function startServer(rootDir, port) {
  return new Promise((resolve, reject) => {
    const srv = http.createServer((req, res) => {
      const fp = path.join(rootDir, req.url.split('?')[0]);
      fs.readFile(fp, (err, data) => {
        if (err) { res.writeHead(404); res.end('Not found'); return; }
        res.writeHead(200, { 'Content-Type': MIME[path.extname(fp)] || 'application/octet-stream' });
        res.end(data);
      });
    });
    srv.listen(port, '127.0.0.1', () => { console.log(`[server] http://127.0.0.1:${port}`); resolve(srv); });
    srv.on('error', reject);
  });
}

// ── Tile rendering — 4 Y-rotations, combined into 256×64 strip ───────────────
async function renderTile(page, glbUrl) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  await page.goto(`http://127.0.0.1:${port}/characters/headless.html`, { timeout: 15000 });
  await page.waitForFunction(() => window.__viewerReady === true, { timeout: 15000 });

  await page.evaluate(async url => { await window.loadModel(url); }, glbUrl);
  console.log('[render] Tile model loaded');

  // Capture 4 Y-rotation renders (64×64 each) → combine into 256×64 strip
  const stripData = await page.evaluate(async ({ slug }) => {
    const viewer = window._viewer ?? window.__viewer;
    // The headless viewer is exposed as the global viewer instance
    // We call a custom capture function
    const FRAME_SIZE = 64;
    const SCALE = 4;
    const renderW = FRAME_SIZE * SCALE;
    const renderH = FRAME_SIZE * SCALE;
    const outCanvas = document.createElement('canvas');
    outCanvas.width  = FRAME_SIZE * 4;  // 4 rotations
    outCanvas.height = FRAME_SIZE;
    const outCtx = outCanvas.getContext('2d');
    outCtx.imageSmoothingEnabled = false;

    return await window.captureTileStrip({ frameSize: FRAME_SIZE });
  }, { slug });

  if (!stripData) throw new Error('captureTileStrip returned null');

  // stripData is base64 PNG
  const buf = Buffer.from(stripData.replace(/^data:image\/png;base64,/, ''), 'base64');
  const outPath = path.join(OUTPUT_DIR, `${slug}-strip.png`);
  fs.writeFileSync(outPath, buf);
  console.log(`[render] Tile strip → ${outPath}`);
}

// ── Prop rendering — 4 isometric camera angles ───────────────────────────────
async function renderProp(page, glbUrl) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  await page.goto(`http://127.0.0.1:${port}/characters/headless.html`, { timeout: 15000 });
  await page.waitForFunction(() => window.__viewerReady === true, { timeout: 15000 });

  await page.evaluate(async url => { await window.loadModel(url); }, glbUrl);
  console.log('[render] Prop model loaded');

  // Capture 4 isometric direction images (64×128 each)
  const results = await page.evaluate(async () => {
    return await window.capturePropDirs({ frameW: 64, frameH: 128 });
  });

  if (!results) throw new Error('capturePropDirs returned null');

  for (const [dir, dataUrl] of Object.entries(results)) {
    const buf = Buffer.from(dataUrl.replace(/^data:image\/png;base64,/, ''), 'base64');
    const outPath = path.join(OUTPUT_DIR, `${slug}-${dir}.png`);
    fs.writeFileSync(outPath, buf);
    console.log(`[render] Prop dir ${dir} → ${outPath}`);
  }
}

// ── Main ──────────────────────────────────────────────────────────────────────
async function main() {
  const absGlb  = path.resolve(glbPath);
  const relGlb  = path.relative(PUBLIC_DIR, absGlb).replace(/\\/g, '/');
  const glbUrl  = `http://127.0.0.1:${port}/${relGlb}`;

  if (!fs.existsSync(absGlb)) {
    console.error(`[render] GLB not found: ${absGlb}`); process.exit(2);
  }

  const server  = await startServer(PUBLIC_DIR, port);
  const browser = await chromium.launch({ headless: true, args: ['--no-sandbox', '--disable-gpu'] });

  try {
    const page = await browser.newPage();
    page.on('console', msg => {
      const t = msg.text();
      if (t.startsWith('[headless]') || t.startsWith('[terrain]') || t.startsWith('[Viewer]'))
        console.log(`  [browser] ${t}`);
    });
    page.on('pageerror', e => console.error(`  [browser error] ${e.message}`));

    if (type === 'tile') {
      await renderTile(page, glbUrl);
    } else {
      await renderProp(page, glbUrl);
    }

    console.log(`[render] Done — ${slug} (${type})`);
  } finally {
    await browser.close();
    server.close();
  }
}

main().catch(e => { console.error(e); process.exit(1); });
