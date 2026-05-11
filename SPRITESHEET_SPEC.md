# SPRITESHEET GENERATION SPEC
> Tactical Isometric MOBA/RPG — 234 personnages, 18 éléments, 13 classes
> Pipeline complet : Meshy AI → GLB → Rendu 4 directions → Spritesheets → Shaders

---

## 1. CONTEXTE TECHNIQUE

### Format de base (confirmé via codebase)

| Paramètre | Valeur |
|-----------|--------|
| Résolution par frame | **64 × 64 px** |
| Frames par animation | **8 frames** |
| Layout spritesheet | **Horizontal strip** |
| Spritesheet une direction | 512 × 64 px |
| Spritesheet 4 directions | **512 × 256 px** (8 cols × 4 rows) |
| Frame rate | **8 FPS** (infinite loop) |
| Mode Phaser | `pixelArt: true` (nearest-neighbor) |
| Format fichier | PNG RGBA individuel par slot |
| Atlas JSON | Aucun requis (sauf attaques packées) |

### Slots d'animation par personnage (17 total)

```
portrait.png       — 1 frame (512×512 haute qualité, pas isométrique)
idle.png           — 512×256 (8 frames × 4 directions)
run.png            — 512×256
swim.png           — 512×256
fly.png            — 512×256
attack-01.png      — 512×256
attack-02.png      — 512×256
attack-03.png      — 512×256
attack-04.png      — 512×256
attack-05.png      — 512×256
attack-06.png      — 512×256
attack-07.png      — 512×256
attack-08.png      — 512×256
attack-09.png      — 512×256
attack-10.png      — 512×256
hurt.png           — 512×256
die.png            — 512×256
model.glb          — Modèle 3D source (Meshy AI)
```

**Total par personnage** : 17 PNGs + 1 GLB = 18 fichiers
**Total projet** : 234 × 18 = **4 212 fichiers** (3 978 PNGs + 234 GLBs)

---

## 2. FORMAT 4 DIRECTIONS ISOMÉTRIQUES

### Convention angles de caméra (matching blocks_1.png)

La caméra Three.js orbite autour du modèle en maintenant l'angle d'élévation isométrique (arctan(1/√2) ≈ 35.26°). L'azimuth tourne par incréments de 90°.

```
Direction 0 — SE  (azimuth = 45°  = π/4)     ← vue par défaut actuelle
Direction 1 — SW  (azimuth = 135° = 3π/4)
Direction 2 — NW  (azimuth = 225° = 5π/4)
Direction 3 — NE  (azimuth = 315° = 7π/4)
```

En jeu : la direction du personnage est gérée par la rotation de la caméra. `frameY = direction * 64` dans le spritesheet pour sélectionner la bonne ligne.

### Layout spritesheet 512 × 256

```
         Frame0  Frame1  Frame2  Frame3  Frame4  Frame5  Frame6  Frame7
Dir SE   [64×64][64×64][64×64][64×64][64×64][64×64][64×64][64×64]  y=0
Dir SW   [64×64][64×64][64×64][64×64][64×64][64×64][64×64][64×64]  y=64
Dir NW   [64×64][64×64][64×64][64×64][64×64][64×64][64×64][64×64]  y=128
Dir NE   [64×64][64×64][64×64][64×64][64×64][64×64][64×64][64×64]  y=192
```

### Chargement Phaser

```typescript
// Chargement
this.load.spritesheet('pyrakh-idle', 'characters/001-pyrakh/idle.png', {
  frameWidth: 64,
  frameHeight: 64
});

// Sélection frame par direction et frame d'animation
// direction: 0=SE, 1=SW, 2=NW, 3=NE
// animFrame: 0-7
const frameIndex = direction * 8 + animFrame; // 0-31

// Création animation pour chaque direction
for (let dir = 0; dir < 4; dir++) {
  this.anims.create({
    key: `pyrakh-idle-dir${dir}`,
    frames: this.anims.generateFrameNumbers('pyrakh-idle', {
      start: dir * 8, end: dir * 8 + 7
    }),
    frameRate: 8,
    repeat: -1
  });
}
```

### Portrait — format spécial

Le portrait n'est pas un spritesheet animé. C'est une image UI haute qualité :
- **Résolution** : 512 × 512 px (ou 256 × 256 minimum)
- **Angle** : 3/4 face (buste, non isométrique)
- **Fond** : transparent ou gradient élément
- **Génération** : via Meshy viewer (vue frontale) ou génération IA séparée

---

## 3. PIPELINE MESHY AI → SPRITESHEETS

### Vue d'ensemble

```
[character data JSON]
        ↓
[Stage 1] Prompt Meshy
  description_physique + element + classe + faction
        ↓
[Stage 2] Meshy AI API → model.glb
  POST /v2/text-to-3d → poll → download GLB
        ↓
[Stage 3] Rendu headless 4 directions
  viewer.js étendu → captureAnimation4Dir()
  Pour chaque animation × 4 azimuths :
    8 frames × 64×64 → assemble 512×256
        ↓
[Stage 4] Post-processing
  rembg background removal
  Pixel-art downscale (4× internal → 64×64 nearest-neighbor)
  Assemblage spritesheet
        ↓
[Stage 5] QC automatique + review UI
        ↓
[Stage 6] Intégration characters.json
```

### 3.1 Meshy AI API

**Endpoint** : `https://api.meshy.ai/openapi/v2/text-to-3d`

**Prompt engineering pour Meshy** :

```python
MESHY_STYLE_TAGS = "low-poly game character, isometric RPG, 3D sprite, T-pose, neutral stance"

def build_meshy_prompt(char: dict) -> dict:
    element_3d = ELEMENT_3D_TOKENS[char['element']]
    class_3d = CLASS_3D_TOKENS[char['classe']]
    faction_3d = FACTION_3D_TOKENS[char['faction']]
    physique = char['description_physique'][:200]

    return {
        "mode": "preview",
        "prompt": f"{MESHY_STYLE_TAGS}, {class_3d}, {element_3d}, "
                  f"{physique}, {faction_3d}",
        "negative_prompt": "realistic, photorealistic, 2D, flat, blurry, "
                           "multiple characters, background, environment",
        "art_style": "realistic",  # meilleure qualité pour game chars
        "topology": "quad",
        "target_polycount": 10000,
        "should_remesh": True
    }
```

**Tokens 3D par élément** :

```python
ELEMENT_3D_TOKENS = {
    "Feu":        "molten-veined skin, lava cracks glowing orange, fire-scorched armor, ember particles",
    "Eau":        "translucent blue-tinted skin, water droplet surface, coral and shell accents, aquamarine glow",
    "Glace":      "crystalline ice armor, frosted skin, icicle formations, blue-white geometric cracks",
    "Electrique": "metallic yellow-charged skin, arc lightning traces on armor, sparking nodes, electric blue accents",
    "Plante":     "bark-textured skin, vine wrappings, leaf motifs, green bioluminescent veins",
    "Sol":        "clay and stone skin, cracked earth patterns, mineral striations, brown-grey palette",
    "Roche":      "granite-textured heavy armor, mineral crystal protrusions, grey stone skin, quartz veining",
    "Vent":       "translucent ethereal form, feather-light cloth, wind-swept hair, pale blue-white palette",
    "Dragon":     "dragon scale overlapping armor, draconic sigils, deep red and gold, regal crown protrusions",
    "Nuee":       "chitinous exoskeleton segmented armor, compound eye motifs, insect wing appendages, iridescent dark carapace",
    "Psy":        "smooth polished skin with neural pathway glows, floating geometric shapes, purple crystal nodes",
    "Tenebres":   "void-dark skin with rim light only, tattered shadowy robes, anti-light shadow aura",
    "Fee":        "iridescent fairy-wing membranes, gossamer robes, gemstone faceting, soft pink-white glow",
    "Poison":     "slimy green-purple skin, bubbling toxic accents, corroded armor, noxious vapor wisps",
    "Spectre":    "translucent ghost form, ethereal wispy edges, pale yellow-lavender, spectral trails",
    "Gravite":    "warped gravitational distortion on skin, orbital ring motifs, dark purple-brown, compressed textures",
    "Combat":     "battle-scarred muscular form, reinforced impact armor, striking force lines, deep crimson",
    "Normal":     "realistic natural textures, practical leather and cloth, no magical enhancement, neutral tones",
}

FACTION_3D_TOKENS = {
    "Empire":       "crown insignia on chest, pristine ornate jeweled armor, pink magenta accents, regal crystalline elements",
    "Convergence":  "ritual scars geometric patterns, extraction wounds, organic-metallic hybrid, deep red dark orange",
    "Dissidentes":  "worn patched salvaged gear, subtle broken-chain insignia, dark grey purple, improvised modifications",
    "Independent":  "eclectic personal style, minimal faction markers, practical utilitarian gear, element-dominant aesthetic",
}

CLASS_3D_TOKENS = {
    "Enchanteur-Soutien":   "slender robed figure, staff with crystal focus, flowing cloth, graceful proportions",
    "Enchanteur-Capteur":   "robed figure with binding chains, glyphs on robes, hands in casting gesture",
    "Juggernaut":           "massive barrel-chested armored warrior, oversized two-handed weapon, heavy full plate",
    "Plongeur":             "compact lean agile figure, dual daggers, minimal leather armor, crouching ready pose",
    "Mage-Burst":           "slender wizard, focus orb, glowing hand, light robes with magical aura",
    "Battlemage":           "athletic warrior-mage, sword plus magical aura on weapon, medium reinforced leather",
    "Artillerie":           "broad-shouldered figure with cannon or large crossbow, mechanical elements, heavy armor",
    "Tireur":               "lean archer with bow and quiver, leather armor, drawing pose",
    "Assassin":             "lithe hunched figure, single blade, minimal armor, shadow-draped cloak",
    "Escrimeur":            "tall elegant fencer, rapier en garde, very light ornamental clothing",
    "Vanguard":             "athletic warrior with large shield forward, sword secondary, medium-heavy plate",
    "Gardien":              "solid tank figure, massive shield primary, full plate armor with ward runes",
    "Specialiste":          "unique specialized figure, custom tools or hybrid weapon, distinctive appearance",
}
```

**Polling et download** :

```python
import httpx, asyncio, os

MESHY_API_KEY = os.environ['MESHY_API_KEY']
HEADERS = {"Authorization": f"Bearer {MESHY_API_KEY}"}

async def generate_meshy_model(char: dict, output_path: str) -> bool:
    prompt_data = build_meshy_prompt(char)

    async with httpx.AsyncClient(timeout=60) as client:
        # 1. Submit preview job
        resp = await client.post(
            "https://api.meshy.ai/openapi/v2/text-to-3d",
            headers=HEADERS, json=prompt_data
        )
        job_id = resp.json()["result"]

        # 2. Poll preview completion
        preview_url = await poll_meshy_job(client, job_id, "preview")

        # 3. Refine (better topology)
        refine_resp = await client.post(
            "https://api.meshy.ai/openapi/v2/text-to-3d",
            headers=HEADERS,
            json={"mode": "refine", "preview_task_id": job_id}
        )
        refine_id = refine_resp.json()["result"]
        glb_url = await poll_meshy_job(client, refine_id, "refine")

        # 4. Download GLB
        glb_data = await client.get(glb_url)
        os.makedirs(os.path.dirname(output_path), exist_ok=True)
        with open(output_path, 'wb') as f:
            f.write(glb_data.content)
        return True

async def poll_meshy_job(client, job_id: str, expected_mode: str, timeout=300):
    elapsed = 0
    while elapsed < timeout:
        await asyncio.sleep(5)
        elapsed += 5
        resp = await client.get(
            f"https://api.meshy.ai/openapi/v2/text-to-3d/{job_id}",
            headers=HEADERS
        )
        data = resp.json()
        if data.get("status") == "SUCCEEDED":
            return data["model_urls"]["glb"]
        if data.get("status") in ("FAILED", "EXPIRED"):
            raise RuntimeError(f"Meshy job {job_id} failed: {data}")
    raise TimeoutError(f"Meshy job {job_id} timed out after {timeout}s")
```

**Coût Meshy** : ~$0.30-0.60 par modèle (preview + refine). 234 modèles ≈ **$70-140 total**.

---

## 4. RENDU 4 DIRECTIONS — EXTENSION viewer.js

### Modification `captureAnimation` → `captureAnimation4Dir`

```javascript
// Ajouter à la classe GLBViewer dans viewer.js

/**
 * Capture une animation sur 4 directions isométriques.
 * Retourne un Blob PNG 512×256 (8 frames × 4 directions).
 */
async captureAnimation4Dir(animName, frameCount = 8, frameSize = 64) {
  const AZIMUTHS = [
    Math.PI / 4,        // 45°  = Direction SE (vue par défaut)
    3 * Math.PI / 4,    // 135° = Direction SW
    5 * Math.PI / 4,    // 225° = Direction NW
    7 * Math.PI / 4,    // 315° = Direction NE
  ];

  const clip = this._animClips.find(c => c.name === animName);
  if (!clip || !this._model) return null;

  const scale = 4; // Rendu interne 4× pour qualité pixel-art
  const duration = clip.duration;
  const elev = Math.atan(1 / Math.SQRT2);
  const dist = 10;

  // Canvas de sortie finale : 512 × 256
  const outCanvas = document.createElement('canvas');
  outCanvas.width  = frameSize * frameCount;  // 512
  outCanvas.height = frameSize * AZIMUTHS.length; // 256
  const outCtx = outCanvas.getContext('2d');
  outCtx.imageSmoothingEnabled = false;

  // Render target et canvas temporaires
  const rt = new THREE.WebGLRenderTarget(frameSize * scale, frameSize * scale);
  const tmpCanvas = document.createElement('canvas');
  tmpCanvas.width = frameSize * scale;
  tmpCanvas.height = frameSize * scale;
  const tmpCtx = tmpCanvas.getContext('2d');
  const pixCanvas = document.createElement('canvas');
  pixCanvas.width = frameSize;
  pixCanvas.height = frameSize;
  const pixCtx = pixCanvas.getContext('2d');
  pixCtx.imageSmoothingEnabled = false;

  for (let dirIdx = 0; dirIdx < AZIMUTHS.length; dirIdx++) {
    const azimuth = AZIMUTHS[dirIdx];

    // Repositionner la caméra pour cette direction
    const camX = dist * Math.cos(elev) * Math.cos(azimuth);
    const camZ = dist * Math.cos(elev) * Math.sin(azimuth);
    const camY = dist * Math.sin(elev);
    this._camera.position.set(camX, camY, camZ);
    this._camera.lookAt(0, 1, 0);
    this._camera.updateMatrixWorld();

    for (let frameIdx = 0; frameIdx < frameCount; frameIdx++) {
      // Avancer l'animation au bon moment
      const t = (frameIdx / frameCount) * duration;
      this._mixer.setTime(t);

      // Rendu interne haute résolution
      this._renderer.setRenderTarget(rt);
      this._renderer.render(this._scene, this._camera);
      this._renderer.setRenderTarget(null);

      // Lire les pixels (WebGL = bottom-left origin → flip Y)
      const pixels = new Uint8Array(frameSize * scale * frameSize * scale * 4);
      this._renderer.readRenderTargetPixels(rt, 0, 0, frameSize * scale, frameSize * scale, pixels);

      const imageData = tmpCtx.createImageData(frameSize * scale, frameSize * scale);
      for (let row = 0; row < frameSize * scale; row++) {
        const srcRow = frameSize * scale - 1 - row;
        const src = srcRow * frameSize * scale * 4;
        const dst = row  * frameSize * scale * 4;
        imageData.data.set(pixels.subarray(src, src + frameSize * scale * 4), dst);
      }
      tmpCtx.putImageData(imageData, 0, 0);

      // Downscale pixel-art vers 64×64
      pixCtx.clearRect(0, 0, frameSize, frameSize);
      pixCtx.drawImage(tmpCanvas, 0, 0, frameSize, frameSize);

      // Coller dans la grille de sortie
      const destX = frameIdx * frameSize;
      const destY = dirIdx  * frameSize;
      outCtx.drawImage(pixCanvas, destX, destY);
    }
  }

  rt.dispose();

  // Restaurer la vue SE par défaut
  this._setIsometricView();

  // Exporter en Blob PNG
  return new Promise(resolve => outCanvas.toBlob(resolve, 'image/png'));
}

/**
 * Capture le portrait (vue 3/4 face, 512×512, non isométrique).
 */
async capturePortrait(outSize = 512) {
  if (!this._model) return null;

  // Vue frontale légèrement relevée
  const dist = 5;
  this._camera.position.set(0, 2.5, dist * 0.7);
  this._camera.lookAt(0, 1.5, 0);
  this._camera.updateMatrixWorld();

  const rt = new THREE.WebGLRenderTarget(outSize, outSize);
  this._renderer.setRenderTarget(rt);
  this._renderer.render(this._scene, this._camera);
  this._renderer.setRenderTarget(null);

  const pixels = new Uint8Array(outSize * outSize * 4);
  this._renderer.readRenderTargetPixels(rt, 0, 0, outSize, outSize, pixels);

  const canvas = document.createElement('canvas');
  canvas.width = outSize; canvas.height = outSize;
  const ctx = canvas.getContext('2d');
  const imgData = ctx.createImageData(outSize, outSize);
  for (let row = 0; row < outSize; row++) {
    const srcRow = outSize - 1 - row;
    imgData.data.set(
      pixels.subarray(srcRow * outSize * 4, (srcRow + 1) * outSize * 4),
      row * outSize * 4
    );
  }
  ctx.putImageData(imgData, 0, 0);

  rt.dispose();
  this._setIsometricView(); // Restaurer

  return new Promise(resolve => canvas.toBlob(resolve, 'image/png'));
}
```

### Script de batch export (Node.js headless avec Puppeteer)

```javascript
// scripts/batch-render.mjs
// Lance le viewer en headless, charge chaque GLB, exporte tous les slots

import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

const CHARS = JSON.parse(fs.readFileSync('public/characters/characters.json', 'utf-8'));
const SLOTS = ['idle', 'run', 'swim', 'fly',
               'attack-01','attack-02','attack-03','attack-04','attack-05',
               'attack-06','attack-07','attack-08','attack-09','attack-10',
               'hurt', 'die'];

async function exportCharacter(page, char) {
  const slug = char.assets.model_glb.split('/')[1]; // e.g. "001-pyrakh"
  const glbPath = `http://localhost:3000/${char.assets.model_glb}`;
  const outDir = `public/characters/${slug}`;
  fs.mkdirSync(outDir, { recursive: true });

  // Charger le modèle
  await page.evaluate(async (url) => {
    await window.__viewer.loadModel(url);
  }, glbPath);

  // Portrait
  const portraitBlob = await page.evaluate(() => window.__viewer.capturePortrait(512));
  fs.writeFileSync(`${outDir}/portrait.png`, Buffer.from(portraitBlob));

  // Animations
  const animNames = await page.evaluate(() => window.__viewer.getAnimationNames());

  for (const slot of SLOTS) {
    // Trouver le clip correspondant (name matching ou fallback sur premier clip)
    const animName = animNames.find(n => n.toLowerCase().includes(slot.split('-')[0]))
                  ?? animNames[0];

    const blob = await page.evaluate(async (anim) => {
      const b = await window.__viewer.captureAnimation4Dir(anim);
      const arr = new Uint8Array(await b.arrayBuffer());
      return Array.from(arr);
    }, animName);

    fs.writeFileSync(`${outDir}/${slot}.png`, Buffer.from(blob));
    console.log(`  ✓ ${slug}/${slot}.png`);
  }
}

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.goto('http://localhost:3000/characters/index.html');
  await page.waitForFunction(() => window.__viewer);

  for (const char of CHARS) {
    console.log(`▶ ${char.id} ${char.nom}`);
    await exportCharacter(page, char);
  }

  await browser.close();
})();
```

---

## 5. PIPELINE ALTERNATIF — IMAGE 2D (sans modèle 3D)

Pour les personnages dont le modèle Meshy est de mauvaise qualité, pipeline de génération 2D directe.

### Architecture

```
characters.json → PromptBuilder → Stability AI API (SDXL)
                → 4×8=32 images séparées (une par frame/direction)
                → rembg background removal
                → Assemblage 512×256 spritesheet
```

### PromptBuilder

```python
FIXED_STYLE = (
    "isometric game character sprite, pixel art with hand-painted details, "
    "64x64 pixel art, 2D sprite, transparent background, "
    "isometric 3/4 view from top-left, sharp pixel outline, "
    "professional game asset"
)

NEGATIVE = (
    "realistic, photorealistic, 3D render, blurry, low quality, "
    "extra limbs, deformed, watermark, text, background, "
    "bottom-left lighting, front lighting, back lighting, "
    "wrong perspective, overhead view, side view"
)

DIR_TOKENS = {
    0: "facing south-west, back toward viewer",     # SE camera
    1: "facing north-west, profile view",           # SW camera
    2: "facing north-east, back away from viewer",  # NW camera
    3: "facing south-east, profile view",           # NE camera
}

ANIM_TOKENS = {
    "idle":     "standing idle pose, relaxed stance, subtle breathing",
    "run":      "running pose, mid-stride, dynamic movement",
    "swim":     "swimming motion, arms extended, horizontal lean",
    "fly":      "flying pose, arms spread, elevated",
    "attack-01": "aggressive attack pose, weapon raised, momentum",
    "attack-02": "follow-through swing, weapon extended",
    # ... etc
    "hurt":     "recoil from impact, pain expression, backward lean",
    "die":      "collapsing, falling pose, final moment",
}

def build_prompt(char, slot, direction):
    element_tok = ELEMENT_PROMPT_TOKENS[char['element']]
    class_tok = CLASS_PROMPT_TOKENS[char['classe']]
    faction_tok = FACTION_PROMPT_TOKENS[char['faction']]
    physique = char['description_physique'][:150]
    dir_tok = DIR_TOKENS[direction]
    anim_tok = ANIM_TOKENS.get(slot, "neutral pose")

    return (
        f"{FIXED_STYLE}, "
        f"{element_tok}, {class_tok}, {faction_tok}, "
        f"{physique}, {dir_tok}, {anim_tok}"
    )
```

### Gestion seed

```python
import hashlib

def stable_seed(char_id: int, slot: str, direction: int) -> int:
    """Seed déterministe et reproductible par (char, slot, direction)."""
    h = hashlib.sha256(f"char_{char_id:04d}_{slot}_{direction}".encode()).digest()
    return int.from_bytes(h[:4], 'big')
```

---

## 6. POST-PROCESSING

### Background removal (rembg)

```python
from rembg import remove, new_session
from PIL import Image
import io

session = new_session("u2net")  # RMBG-1.4 ou birefnet pour meilleure qualité

def remove_bg(input_path: str, output_path: str):
    with open(input_path, 'rb') as f:
        img = f.read()
    result = remove(img, session=session)
    with open(output_path, 'wb') as f:
        f.write(result)
```

### Assemblage spritesheet 4-directions

```python
from PIL import Image

FRAME_SIZE = 64
FRAME_COUNT = 8
DIR_COUNT = 4

def assemble_spritesheet(frames_by_dir: dict[int, list[str]], output_path: str):
    """
    frames_by_dir = {
        0: ['dir0_frame0.png', ..., 'dir0_frame7.png'],  # SE
        1: [...],  # SW
        2: [...],  # NW
        3: [...],  # NE
    }
    Output: 512×256 RGBA PNG
    """
    sheet = Image.new('RGBA', (FRAME_SIZE * FRAME_COUNT, FRAME_SIZE * DIR_COUNT), (0,0,0,0))

    for dir_idx in range(DIR_COUNT):
        for frame_idx in range(FRAME_COUNT):
            img = Image.open(frames_by_dir[dir_idx][frame_idx]).convert('RGBA')
            img = img.resize((FRAME_SIZE, FRAME_SIZE), Image.NEAREST)
            x = frame_idx * FRAME_SIZE
            y = dir_idx * FRAME_SIZE
            sheet.paste(img, (x, y), img)

    sheet.save(output_path, 'PNG')
```

---

## 7. BASE DE DONNÉES DE SUIVI (SQLite)

```sql
-- Modèle de tracking complet

CREATE TABLE IF NOT EXISTS generation_jobs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    character_id INTEGER NOT NULL,
    character_slug TEXT NOT NULL,
    slot TEXT NOT NULL,
    direction INTEGER DEFAULT -1,       -- -1 = portrait/single, 0-3 = direction
    output_path TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'pending',
                                        -- pending | in_progress | success | failed | rejected
    source TEXT DEFAULT 'meshy',        -- meshy | stability | replicate | manual
    attempts INTEGER DEFAULT 0,
    last_attempt_ts TIMESTAMP,
    error_msg TEXT,
    cost_usd REAL DEFAULT 0,
    prompt_used TEXT,
    seed_used INTEGER,
    UNIQUE(character_slug, slot, direction)
);

CREATE TABLE IF NOT EXISTS meshy_jobs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    character_id INTEGER NOT NULL,
    character_slug TEXT NOT NULL,
    meshy_task_id TEXT,
    status TEXT DEFAULT 'pending',      -- pending | preview | refine | done | failed
    model_url TEXT,
    output_glb_path TEXT,
    cost_credits INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    completed_at TIMESTAMP
);

CREATE TABLE IF NOT EXISTS qc_results (
    job_id INTEGER REFERENCES generation_jobs(id),
    file_size_bytes INTEGER,
    alpha_coverage REAL,               -- % pixels opaques
    unique_colors INTEGER,
    phash TEXT,
    qc_pass BOOLEAN,
    qc_reason TEXT,
    reviewed_by TEXT DEFAULT 'auto',  -- auto | human
    reviewed_at TIMESTAMP
);
```

---

## 8. ORCHESTRATEUR PRINCIPAL

```python
# scripts/pipeline/run_pipeline.py

import asyncio, argparse, sqlite3, json, os
from pathlib import Path

BASE = Path(__file__).parent.parent.parent  # Racine du projet
CHARS_JSON = BASE / "public/characters/characters.json"
DB_PATH = Path(__file__).parent / "generation_state.db"

async def run_pipeline(args):
    with open(CHARS_JSON) as f:
        chars = json.load(f)

    # Filtrer si --filter-slug
    if args.filter_slug:
        chars = [c for c in chars if args.filter_slug in c.get('folder', '')]

    db = sqlite3.connect(DB_PATH)
    init_db(db)

    if args.stage <= 1:
        await stage_meshy_generate(chars, db, dry_run=args.dry_run)

    if args.stage <= 2:
        await stage_render_spritesheets(chars, db, dry_run=args.dry_run)

    if args.stage <= 3:
        await stage_postprocess(chars, db)

    if args.stage <= 4:
        await stage_qc(chars, db)

    if args.stage <= 5:
        await stage_integrate(chars, db)

    db.close()

if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('--stage', type=int, default=5)
    parser.add_argument('--dry-run', action='store_true')
    parser.add_argument('--filter-slug', type=str)
    args = parser.parse_args()
    asyncio.run(run_pipeline(args))
```

---

## 9. SYSTÈME VISUEL — IDENTITÉ PAR ÉLÉMENT

### Palettes couleur et tokens prompt

| Élément | Couleur primaire | Secondaire | Ombre | Aura |
|---------|-----------------|------------|-------|------|
| Feu | #FF4500 | #FFD700 | #8B0000 | Flammes montantes orange |
| Eau | #1E90FF | #87CEEB | #00008B | Vagues pulsées cyan |
| Glace | #00FFFF | #E0FFFF | #4169E1 | Cristaux géométriques |
| Électrique | #FFFF00 | #FFD700 | #8B008B | Arcs jaune-blanc erratiques |
| Plante | #228B22 | #90EE90 | #8B4513 | Spirale verte organique |
| Sol | #8B4513 | #D2B48C | #556B2F | Nuage de poussière terreux |
| Roche | #808080 | #A9A9A9 | #36454F | Fragments minéraux orbitaux |
| Vent | #B0C4DE | #F0F8FF | #4682B4 | Vortex spirale pâle |
| Dragon | #DC143C | #FFD700 | #2F4F4F | Couronne draconique rouge-or |
| Nuée | #FF6347 | #FFB6C1 | #1C1C1C | Essaim chaotique rouge-orange |
| Psy | #9370DB | #DDA0DD | #4B0082 | Formes géométriques flottantes |
| Ténèbres | #1A1A1A | #696969 | #FF1493 | Vide absorbant, anti-lumière |
| Fée | #FFB6C1 | #FFC0CB | #FF69B4 | Étincelles et étoiles roses |
| Poison | #228B22 | #00FF00 | #800080 | Gaz toxique vert-violet |
| Spectre | #FFFACD | #E6E6FA | #2F4F4F | Halo spectral qui pulse |
| Gravité | #1C1C3C | #8B7355 | #FFD700 | Anneaux orbitaux |
| Combat | #8B0000 | #DC143C | #FFD700 | Lignes de force d'impact |
| Normal | #A9A9A9 | #D3D3D3 | #696969 | Lueur subtile quasi-neutre |

### Couleurs faction

| Faction | Primaire | Secondaire | Marqueur |
|---------|----------|------------|---------|
| Empire | #FFB6C1 | #FF69B4 | Couronne + mandala floral |
| Convergence | #8B0000 | #DC143C | Cicatrices rituelles + circuits |
| Dissidentes | #2F4F4F | #4B0082 | Symbole voilé + équipement usé |
| Indépendant | Variable | Élément dominant | Pas de marqueur imposé |

---

## 10. SHADERS PHASER.JS

### Architecture shader dans Phaser 3

Les shaders sont implémentés comme des **Custom WebGL Pipelines** :

```typescript
// src/engine/shaders/ElementAuraPipeline.ts
import Phaser from 'phaser';

export class ElementAuraPipeline extends Phaser.Renderer.WebGL.WebGLPipeline {
  constructor(game: Phaser.Game) {
    super({
      game,
      name: 'ElementAura',
      fragShader: ELEMENT_AURA_FRAG,
    });
  }
}

// Enregistrement (dans game.ts / config)
// game.renderer.pipelines.add('ElementAura', new ElementAuraPipeline(game));
// sprite.setPipeline('ElementAura');
```

### Shader 1 — Aura élémentaire (per-element glow)

```glsl
// Element Aura Fragment Shader
#ifdef GL_ES
precision mediump float;
#endif

uniform sampler2D uMainSampler;
uniform vec2 uResolution;
uniform vec4 uElementColor;    // Couleur primaire de l'élément
uniform float uTime;           // Temps pour animation
uniform float uIntensity;      // Force de l'aura (0.0-1.0)

varying vec2 outTexCoord;

void main() {
  vec4 texColor = texture2D(uMainSampler, outTexCoord);

  // Glow calculé sur les pixels de bordure (pixels opaques adjacents à transparents)
  float alpha = texColor.a;
  float glow = 0.0;

  vec2 pixel = 1.0 / uResolution;
  // Échantillonnage 8-directions pour détecter les contours
  for (float x = -2.0; x <= 2.0; x++) {
    for (float y = -2.0; y <= 2.0; y++) {
      if (x == 0.0 && y == 0.0) continue;
      vec2 offset = vec2(x, y) * pixel;
      float neighbor = texture2D(uMainSampler, outTexCoord + offset).a;
      glow += neighbor * (1.0 - alpha);
    }
  }
  glow = clamp(glow / 16.0, 0.0, 1.0);

  // Animation pulse de l'aura
  float pulse = 0.5 + 0.5 * sin(uTime * 2.0);
  vec4 auraColor = uElementColor * glow * uIntensity * (0.7 + 0.3 * pulse);

  gl_FragColor = texColor + auraColor;
}
```

### Shader 2 — Flash de hit (damage feedback)

```glsl
// Hit Flash Fragment Shader
uniform sampler2D uMainSampler;
uniform float uFlash;         // 0.0 = normal, 1.0 = white flash complet

varying vec2 outTexCoord;

void main() {
  vec4 texColor = texture2D(uMainSampler, outTexCoord);
  if (texColor.a < 0.01) discard;

  // Interpolation vers blanc pur
  vec4 flashColor = vec4(1.0, 1.0, 1.0, texColor.a);
  gl_FragColor = mix(texColor, flashColor, uFlash);
}
```

### Shader 3 — Outline pixel-art (contour coloré par élément)

```glsl
// Pixel Art Outline Shader
uniform sampler2D uMainSampler;
uniform vec2 uResolution;
uniform vec4 uOutlineColor;   // Couleur contour (élément primaire)
uniform float uOutlineWidth;  // En pixels (1.0 ou 2.0)

varying vec2 outTexCoord;

void main() {
  vec4 texColor = texture2D(uMainSampler, outTexCoord);
  vec2 pixel = uOutlineWidth / uResolution;

  if (texColor.a < 0.5) {
    // Pixel transparent : vérifier si voisin est opaque → contour
    float maxNeighborAlpha = 0.0;
    maxNeighborAlpha = max(maxNeighborAlpha, texture2D(uMainSampler, outTexCoord + vec2(pixel.x, 0.0)).a);
    maxNeighborAlpha = max(maxNeighborAlpha, texture2D(uMainSampler, outTexCoord - vec2(pixel.x, 0.0)).a);
    maxNeighborAlpha = max(maxNeighborAlpha, texture2D(uMainSampler, outTexCoord + vec2(0.0, pixel.y)).a);
    maxNeighborAlpha = max(maxNeighborAlpha, texture2D(uMainSampler, outTexCoord - vec2(0.0, pixel.y)).a);

    if (maxNeighborAlpha > 0.5) {
      gl_FragColor = uOutlineColor;
      return;
    }
  }

  gl_FragColor = texColor;
}
```

### Shader 4 — Ombre isométrique

```glsl
// Isometric Shadow Shader
// Appliqué au sprite dupliqué (version aplatie sous le personnage)
uniform sampler2D uMainSampler;
uniform float uOpacity;       // Opacité de l'ombre (0.2-0.4)
uniform vec2 uShear;          // Déformation isométrique (0.5, -0.3)

varying vec2 outTexCoord;

void main() {
  // Distorsion de coordonnées pour ombre isométrique
  vec2 shadCoord = outTexCoord + outTexCoord * uShear;
  vec4 texColor = texture2D(uMainSampler, shadCoord);

  // Ombre = silhouette noire semi-transparente
  gl_FragColor = vec4(0.0, 0.0, 0.0, texColor.a * uOpacity);
}
```

### Shader 5 — Sélection (unit selected glow)

```glsl
// Selection Glow Shader
uniform sampler2D uMainSampler;
uniform float uTime;
uniform vec4 uSelectionColor; // #00FF88 typiquement

varying vec2 outTexCoord;

void main() {
  vec4 texColor = texture2D(uMainSampler, outTexCoord);

  // Pulse animé
  float pulse = 0.6 + 0.4 * sin(uTime * 4.0);
  vec4 glow = uSelectionColor * (1.0 - texColor.a) * pulse * 0.5;

  gl_FragColor = texColor + glow;
}
```

### Shader 6 — Fog of War (zones non explorées)

```glsl
// Fog of War Shader (appliqué aux tiles, pas aux personnages)
uniform sampler2D uMainSampler;
uniform float uFogLevel;  // 0.0 = visible, 1.0 = noir complet, 0.5 = vu mais pas actif

varying vec2 outTexCoord;

void main() {
  vec4 texColor = texture2D(uMainSampler, outTexCoord);

  // Desaturation pour zones "vues mais pas actives"
  float gray = dot(texColor.rgb, vec3(0.299, 0.587, 0.114));
  vec3 desaturated = vec3(gray);
  vec3 color = mix(texColor.rgb, desaturated, clamp(uFogLevel * 2.0, 0.0, 1.0));

  // Assombrissement pour fog complet
  color *= (1.0 - clamp(uFogLevel, 0.0, 0.8));

  gl_FragColor = vec4(color, texColor.a);
}
```

### Intégration shaders dans l'engine

```typescript
// src/engine/shader-manager.ts
import { ELEMENT_COLORS } from './constants';

export class ShaderManager {
  private scene: Phaser.Scene;

  constructor(scene: Phaser.Scene) {
    this.scene = scene;
    this.registerPipelines();
  }

  private registerPipelines() {
    const renderer = this.scene.game.renderer as Phaser.Renderer.WebGL.WebGLRenderer;
    if (!renderer.gl) return; // Canvas renderer fallback

    renderer.pipelines.add('ElementAura',  new ElementAuraPipeline(this.scene.game));
    renderer.pipelines.add('HitFlash',     new HitFlashPipeline(this.scene.game));
    renderer.pipelines.add('PixelOutline', new OutlinePipeline(this.scene.game));
    renderer.pipelines.add('IsomShadow',   new ShadowPipeline(this.scene.game));
    renderer.pipelines.add('Selection',    new SelectionPipeline(this.scene.game));
  }

  applyElementAura(sprite: Phaser.GameObjects.Sprite, element: string) {
    const color = ELEMENT_COLORS[element]; // { r, g, b } 0-1
    sprite.setPipeline('ElementAura');
    sprite.pipeline.set4f('uElementColor', color.r, color.g, color.b, 1.0);
    sprite.pipeline.set1f('uIntensity', 0.8);
  }

  triggerHitFlash(sprite: Phaser.GameObjects.Sprite) {
    sprite.setPipeline('HitFlash');
    this.scene.tweens.add({
      targets: { flash: 0 },
      flash: 1,
      yoyo: true,
      duration: 80,
      onUpdate: (tween, target) => {
        sprite.pipeline.set1f('uFlash', target.flash);
      },
      onComplete: () => sprite.resetPipeline()
    });
  }
}
```

---

## 11. STRUCTURE DE FICHIERS FINALE

```
public/characters/
├── characters.json               ← Index principal
├── index.html                    ← Character viewer UI
├── viewer.js                     ← Three.js viewer (étendu 4-dir)
├── app.js
└── {id}-{slug}/                  ← Un dossier par personnage
    ├── model.glb                 ← Modèle 3D Meshy AI
    ├── portrait.png              ← 512×512 (UI portrait)
    ├── idle.png                  ← 512×256 (8 frames × 4 dir)
    ├── run.png                   ← 512×256
    ├── swim.png                  ← 512×256
    ├── fly.png                   ← 512×256
    ├── attack-01.png             ← 512×256
    ├── attack-02.png             ← 512×256
    ├── attack-03.png             ← 512×256
    ├── attack-04.png             ← 512×256
    ├── attack-05.png             ← 512×256
    ├── attack-06.png             ← 512×256
    ├── attack-07.png             ← 512×256
    ├── attack-08.png             ← 512×256
    ├── attack-09.png             ← 512×256
    ├── attack-10.png             ← 512×256
    ├── hurt.png                  ← 512×256
    └── die.png                   ← 512×256

scripts/pipeline/
├── run_pipeline.py               ← Entrypoint orchestrateur
├── stage1_meshy_generate.py      ← Meshy API → GLBs
├── stage2_render_sprites.py      ← GLB → 4-dir spritesheets (Puppeteer/headless)
├── stage3_postprocess.py         ← rembg + assemblage
├── stage4_qc.py                  ← QC auto + Flask review UI
├── stage5_integrate.py           ← Mise à jour characters.json
├── prompt_builder.py             ← Génération prompts Meshy + SD
├── generation_state.db           ← SQLite tracking (auto-créé)
├── requirements.txt
└── .env.example

src/engine/shaders/
├── ElementAuraPipeline.ts
├── HitFlashPipeline.ts
├── OutlinePipeline.ts
├── ShadowPipeline.ts
├── SelectionPipeline.ts
└── shader-manager.ts
```

---

## 12. TIMELINE ET COÛTS

| Phase | Tâche | Durée | Coût |
|-------|-------|-------|------|
| Setup | Infrastructure, deps, tests pipeline | 4-6h | $0 |
| Stage 1 | Génération 234 modèles Meshy (preview+refine) | ~12h (async) | $70-140 |
| Stage 2 | Rendu headless 4-dir (234 chars × 17 slots) | ~6-10h | $0 (local) |
| Stage 3 | Post-processing (rembg, assemblage) | ~2h (batch) | $0 |
| Stage 4 | QC auto + review humain (10% regen) | 4-8h humain | ~$10 |
| Stage 5 | Intégration + validation | 1h | $0 |
| Shaders | Implémentation 6 shaders + intégration | 8-12h dev | $0 |
| **Total** | | **~35-50h** | **$80-150** |

### Alternative si Meshy qualité insuffisante

Utiliser Stability AI SDXL pour les frames 2D directement :
- ~$0.002/image × 3 978 images = **~$8 total**
- Pipeline : prompt IA → rembg → assemblage 4-dir manuelle
- Limitation : incohérence entre frames d'une même animation

---

## 13. COMMANDES DE LANCEMENT

```bash
# Installation
pip install -r scripts/pipeline/requirements.txt

# Variables d'environnement
cp scripts/pipeline/.env.example scripts/pipeline/.env
# Editer .env : MESHY_API_KEY, STABILITY_API_KEY

# Test sur 1 personnage
python scripts/pipeline/run_pipeline.py --stage 1 --filter-slug 001-pyrakh --dry-run

# Générer les modèles Meshy pour tous les personnages
python scripts/pipeline/run_pipeline.py --stage 1

# Rendu headless des spritesheets (requiert serveur local + Puppeteer)
npm run dev &  # Lancer le serveur Phaser
python scripts/pipeline/run_pipeline.py --stage 2

# Post-processing
python scripts/pipeline/run_pipeline.py --stage 3

# QC + review UI (http://localhost:5050)
python scripts/pipeline/run_pipeline.py --stage 4

# Intégration finale
python scripts/pipeline/run_pipeline.py --stage 5

# Vérification complète
python scripts/pipeline/stage5_integrate.py --verify
```

---

## 14. NOTES CRITIQUES

1. **Format 512×256** : Les animations existantes (idle.png, etc.) dans characters.json référencent actuellement des fichiers sans direction. La transition vers le format 4 directions nécessite de **mettre à jour le loader Phaser** pour utiliser `frameHeight: 64` (au lieu de la hauteur totale) et calculer `frameIndex = direction * 8 + animFrame`.

2. **Modèles Meshy + Animations** : Meshy génère des modèles statiques (T-pose). Les animations doivent être ajoutées via une **animation bank GLB** séparée (un GLB avec des clips d'animation standard réutilisables : idle, run, etc.) que le viewer charge en parallèle via le système `loadAnimationBank()` déjà prévu dans viewer.js.

3. **Cohérence 4 directions** : Si les modèles 3D ont été correctement générés en T-pose, les 4 directions sont automatiquement cohérentes (c'est le même modèle vu de 4 angles). C'est l'avantage majeur du pipeline 3D vs génération 2D.

4. **Shaders et performance** : Les shaders WebGL ont un coût. Limiter à 1 shader actif par sprite simultanément. Utiliser `sprite.resetPipeline()` immédiatement après les effets temporaires (flash, sélection).

5. **Portrait différent des animations** : Le portrait est une vue buste frontale, pas isométrique. Capturer depuis `capturePortrait()` en 512×512, pas via `captureAnimation4Dir`.
