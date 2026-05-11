import { GLBViewer } from './viewer.js';

// ── Data ───────────────────────────────────────────────────────

const ANIMATION_SLOTS = [
  'idle', 'walk', 'run', 'jump', 'swim', 'fly',
  'attack-01', 'attack-02', 'attack-03', 'attack-04', 'attack-05',
  'attack-06', 'attack-07', 'attack-08', 'attack-09', 'attack-10',
  'hurt', 'die', 'portrait',
];

const ELEM_SLUG = {
  'Feu': 'feu', 'Eau': 'eau', 'Glace': 'glace', 'Electrique': 'electrique',
  'Plante': 'plante', 'Sol': 'sol', 'Roche': 'roche', 'Vent': 'vent',
  'Nuee': 'insecte', 'Insecte': 'insecte', 'Psy': 'psy',
  'Tenebres': 'tenebres', 'Ténèbres': 'tenebres',
  'Fee': 'fee', 'Fée': 'fee',
  'Poison': 'poison', 'Spectre': 'spectre',
  'Gravite': 'gravite', 'Gravité': 'gravite',
  'Combat': 'combat', 'Normal': 'normal',
};

// ── Meshy → slot mapping ───────────────────────────────────────
// Keys are Meshy clip names (after renaming); values are target slot names.
// For slots with multiple candidates, first match wins (later ones are skipped
// if the slot is already assigned).

const MESHY_TO_SLOT = {
  'idle':           'idle',
  'idle 02':        'idle',
  'idle 03':        'idle',
  'walking':        'walk',
  'run 02':         'run',
  'run 03':         'run',
  'runfast':        'run',
  'jump run':       'jump',
  'attack':         'attack-01',
  'skill 01':       'attack-02',
  'skill 02':       'attack-03',
  'skill 03':       'attack-04',
  'action 000':     'attack-05',
  'action 001':     'attack-06',
  'action 002':     'attack-07',
  'action 003':     'attack-08',
  'action 004':     'attack-09',
  'action 005':     'attack-10',
  'dead':           'die',
  'behit flyup':    'hurt',
  'arise':          'walk',
  'alert':          'idle',
};

let allChars = [];
let libraryManifest = {};
let filtered = [];
let activeChar = null;
let viewer = null;
let createViewer = null;
let editingChar = null; // null = new char, or existing char object
let viewerBankClips = [];   // clips loaded via 🎬 Anims into the main viewer
let createBankClips = [];   // clips loaded via 🎬 Anims into the create viewer
let sharedBankClips = [];   // clips saved to / loaded from characters/anim-bank/
let meshyBankClips  = [];   // pre-loaded Meshy native animations (characters/meshy-anims/)
let allWeapons      = [];   // loaded from /weapons/weapons.json

// ── Slot data helpers ──────────────────────────────────────────
// animSlots values can be bare strings (legacy) or {clip, weapons:{right?,left?}}.
// normalizeSlot always returns a mutable {clip, weapons} object (never a reference to stored data).
function normalizeSlot(val) {
  if (!val) return { clip: null, weapons: {} };
  if (typeof val === 'string') return { clip: val, weapons: {} };
  return { clip: val.clip ?? null, weapons: { ...(val.weapons ?? {}) } };
}

function setSlotClip(char, slot, clipName) {
  char.animSlots ??= {};
  const current = normalizeSlot(char.animSlots[slot]);
  current.clip = clipName;
  char.animSlots[slot] = current;
}

function setSlotWeapon(char, slot, hand, weaponId) {
  char.animSlots ??= {};
  const current = normalizeSlot(char.animSlots[slot]);
  if (weaponId) current.weapons[hand] = weaponId;
  else delete current.weapons[hand];
  char.animSlots[slot] = current;
}

// Attach/detach weapons for the given slot on the main viewer.
function applySlotWeapons(char, slot) {
  const slotData = normalizeSlot(char?.animSlots?.[slot]);
  for (const hand of ['right', 'left']) {
    const wid = slotData.weapons[hand];
    if (wid) {
      const w = allWeapons.find(x => x.id === wid);
      if (w) viewer.attachWeapon(`/${w.glb}`, w.grip ?? {}, hand);
      else viewer.detachWeapon(hand);
    } else {
      viewer.detachWeapon(hand);
    }
  }
}

// ── DOM refs ───────────────────────────────────────────────────

const $ = id => document.getElementById(id);
const charList   = $('char-list');
const countEl    = $('count');
const searchEl   = $('search');
const fElement   = $('filter-element');
const fClass     = $('filter-class');
const fFaction   = $('filter-faction');
const fEspece    = $('filter-espece');
const detail     = $('detail');
const emptyState = $('empty-state');

// ── Load data ──────────────────────────────────────────────────

async function init() {
  // Load characters and library manifest (blocking). Meshy bank loads in background.
  const [charsRes] = await Promise.all([
    fetch('characters.json').catch(() => null),
    fetch('anim-library/manifest.json')
      .then(r => r.ok ? r.json() : {})
      .then(data => { libraryManifest = data; })
      .catch(() => {}),
    loadAnimBank(),
    loadWeaponsIndex(),
  ]);
  // Load Meshy bank in background — don't block UI startup (20 GLBs × 1.6 MB each)
  loadMeshyAnimBank();

  try {
    if (!charsRes || !charsRes.ok) throw new Error(`HTTP ${charsRes?.status ?? 'network error'}`);
    allChars = await charsRes.json();
  } catch (err) {
    $('empty-state').textContent = `Impossible de charger characters.json (${err.message}). Lance un serveur local : npx serve .`;
    $('empty-state').style.color = '#ef5350';
    return;
  }

  populateFilters();
  applyFilters();

  // Init Three.js viewer
  viewer = new GLBViewer($('viewer-canvas'));
  viewer.onStatus = msg => {
    const el = $('viewer-status');
    el.textContent = msg;
    el.className = msg.startsWith('▶') ? 'status-playing'
                 : (msg.startsWith('⚠') || msg.startsWith('Erreur')) ? 'status-error'
                 : '';
    $('btn-stop').disabled = !msg.startsWith('▶');
  };
  viewer.onAnimationsLoaded = names => onAnimationsLoaded(names);

  // File inputs
  $('file-glb').addEventListener('change', async e => {
    const file = e.target.files[0];
    if (!file) return;
    viewer.loadFile(file);
    $('viewer-wrap').classList.remove('empty-model');
    if (activeChar) await saveGlbForChar(file, activeChar, 'viewer-status');
    e.target.value = '';
  });
  $('file-anims').addEventListener('change', e => {
    const files = [...e.target.files].filter(isAnimFile);
    if (!files.length) return;
    loadFilesIntoBrowser(files, 'anim-browser-list', 'anim-browser', viewer);
  });

  // ── Create viewer setup ───────────────────────────────────
  createViewer = new GLBViewer($('create-canvas'));
  createViewer.onStatus = msg => {
    const el = $('create-viewer-status');
    el.textContent = msg;
    el.className = msg.startsWith('▶') ? 'status-playing'
                 : (msg.startsWith('⚠') || msg.startsWith('Erreur')) ? 'status-error'
                 : '';
    $('btn-create-stop').disabled = !msg.startsWith('▶');
  };
  createViewer.onAnimationsLoaded = names => renderCreateAnimButtons(names);

  $('file-create-glb').addEventListener('change', e => {
    const file = e.target.files[0];
    if (file) { createViewer.loadFile(file); $('create-viewer-wrap').classList.remove('empty-model'); }
  });
  $('file-create-anims').addEventListener('change', e => {
    const files = [...e.target.files].filter(isAnimFile);
    if (!files.length) return;
    loadFilesIntoBrowser(files, 'create-anim-browser-list', 'create-anim-browser', createViewer);
  });

  $('btn-create-stop').addEventListener('click', () => createViewer.stopAnimation());
  $('btn-create-load-glb').addEventListener('click', () => $('file-create-glb').click());
  $('btn-create-load-anims').addEventListener('click', () => $('file-create-anims').click());
  $('btn-create-save-anims').addEventListener('click', () => saveAnimsToBank(createViewer, 'create-viewer-status'));
  $('btn-create-export').addEventListener('click', exportCreateSpritesheet);
  $('btn-create-save').addEventListener('click', saveNewChar);
  $('btn-create-cancel').addEventListener('click', hideCreatePanel);
  $('btn-new-char').addEventListener('click', () => showCreatePanel(null));

  // Drag & drop on create viewer
  const createWrap = $('create-viewer-wrap');
  createWrap.addEventListener('dragover', e => { e.preventDefault(); createWrap.classList.add('drag-over'); });
  createWrap.addEventListener('dragleave', e => { if (!createWrap.contains(e.relatedTarget)) createWrap.classList.remove('drag-over'); });
  createWrap.addEventListener('drop', e => {
    e.preventDefault();
    createWrap.classList.remove('drag-over');
    const files = [...e.dataTransfer.files].filter(f => f.name.endsWith('.glb') || f.name.endsWith('.gltf'));
    if (!files.length) return;
    const [first, second] = files;
    const loadCreateModel = (file) => {
      createViewer.loadFile(file);
      createWrap.classList.remove('empty-model');
    };
    const loadCreateAnims = (file) => {
      createViewer.loadBrowserClips(file, clips => {
        createBankClips = [...createBankClips, ...clips];
        refreshAnimBrowser('create-anim-browser-list', 'create-anim-browser', createViewer, createBankClips);
      });
    };
    if (!createViewer.hasModel()) {
      loadCreateModel(first);
      if (second) loadCreateAnims(second);
    } else if (files.length >= 2) {
      loadCreateModel(first);
      loadCreateAnims(second);
    } else {
      askAnimOrModel(
        first.name,
        () => loadCreateAnims(first),
        () => loadCreateModel(first)
      );
    }
  });

  $('btn-stop').addEventListener('click', () => viewer.stopAnimation());
  $('btn-load-glb').addEventListener('click', () => $('file-glb').click());
  $('btn-load-anims').addEventListener('click', () => $('file-anims').click());
  $('btn-save-anims').addEventListener('click', () => saveAnimsToBank(viewer, 'viewer-status'));
  $('btn-export').addEventListener('click', exportSpritesheet);

  // ── Drag & drop GLB directly onto the viewer ──────────────────
  const viewerWrap = $('viewer-wrap');

  viewerWrap.addEventListener('dragover', e => {
    e.preventDefault();
    viewerWrap.classList.add('drag-over');
  });

  viewerWrap.addEventListener('dragleave', e => {
    if (!viewerWrap.contains(e.relatedTarget)) {
      viewerWrap.classList.remove('drag-over');
    }
  });

  viewerWrap.addEventListener('drop', e => {
    e.preventDefault();
    viewerWrap.classList.remove('drag-over');

    const files = [...e.dataTransfer.files].filter(isAnimFile);

    if (files.length === 0) {
      $('viewer-status').textContent = 'Dépose un fichier .glb ou .gltf';
      return;
    }

    const isMeshGlb = f => f.name.endsWith('.glb') || f.name.endsWith('.gltf');
    const loadViewerAnims = (fs) => loadFilesIntoBrowser(fs, 'anim-browser-list', 'anim-browser', viewer);

    // BVH files always go to the browser
    const bvhFiles = files.filter(f => f.name.endsWith('.bvh'));
    const glbFiles = files.filter(isMeshGlb);
    if (bvhFiles.length) loadViewerAnims(bvhFiles);

    if (!glbFiles.length) return;
    const [first, second] = glbFiles;
    const loadModel = async (f) => {
      viewer.loadFile(f);
      $('viewer-wrap').classList.remove('empty-model');
      if (activeChar) await saveGlbForChar(f, activeChar, 'viewer-status');
    };
    if (!viewer.hasModel()) {
      loadModel(first);
      if (second) loadViewerAnims([second]);
    } else if (glbFiles.length >= 2) {
      loadModel(first);
      loadViewerAnims([second]);
    } else {
      askAnimOrModel(
        first.name,
        () => loadViewerAnims([first]),
        () => loadModel(first)
      );
    }
  });

  // ── Modal wiring ──────────────────────────────────────────────
  $('btn-edit-char').addEventListener('click', () => { if (activeChar) showCreatePanel(activeChar); });
  $('export-select-all').addEventListener('change', e => {
    $('export-slot-list').querySelectorAll('input:not(:disabled)').forEach(cb => cb.checked = e.target.checked);
  });
  $('export-modal-cancel').addEventListener('click', () => { $('export-modal').hidden = true; });
  $('export-modal-go').addEventListener('click', () => {
    const selected = [...$('export-slot-list').querySelectorAll('input:checked')].map(cb => cb.value);
    runExport(selected);
  });
}

// ── Drop modal (replaces confirm()) ────────────────────────────

function askAnimOrModel(filename, onAnim, onModel) {
  const modal = $('drop-modal');
  $('drop-modal-msg').textContent =
    `Un modèle est déjà chargé. Que faire avec "${filename}" ?`;
  modal.hidden = false;
  $('drop-modal-anim').onclick   = () => { modal.hidden = true; onAnim(); };
  $('drop-modal-replace').onclick = () => { modal.hidden = true; onModel(); };
}

// ── Filters ────────────────────────────────────────────────────

function populateFilters() {
  const uniq = (key) => [...new Set(allChars.map(c => c[key]).filter(Boolean))].sort();

  for (const v of uniq('element'))  addOption(fElement, v);
  for (const v of uniq('classe'))   addOption(fClass, v);
  for (const v of uniq('faction'))  addOption(fFaction, v);
  for (const v of uniq('espece'))   addOption(fEspece, v);

  [searchEl, fElement, fClass, fFaction, fEspece].forEach(el =>
    el.addEventListener('input', applyFilters)
  );
}

function addOption(select, value) {
  const opt = document.createElement('option');
  opt.value = value;
  opt.textContent = value;
  select.appendChild(opt);
}

function applyFilters() {
  const q   = searchEl.value.toLowerCase();
  const el  = fElement.value;
  const cl  = fClass.value;
  const fa  = fFaction.value;
  const esp = fEspece.value;

  filtered = allChars.filter(c =>
    (!q   || c.nom.toLowerCase().includes(q)) &&
    (!el  || c.element === el) &&
    (!cl  || c.classe === cl) &&
    (!fa  || c.faction === fa) &&
    (!esp || c.espece === esp)
  );

  renderList();
}

// ── List ───────────────────────────────────────────────────────

function renderList() {
  countEl.textContent = `${filtered.length} / ${allChars.length} personnages`;
  charList.innerHTML = '';

  for (const char of filtered) {
    const item = document.createElement('div');
    item.className = 'char-item' + (activeChar?.id === char.id ? ' active' : '');
    item.dataset.id = char.id;

    const dot = document.createElement('span');
    dot.className = `elem-dot elem-${ELEM_SLUG[char.element] ?? 'normal'}`;

    const name = document.createElement('span');
    name.className = 'char-name';
    name.textContent = char.nom;

    const idSpan = document.createElement('span');
    idSpan.className = 'char-id';
    idSpan.textContent = `#${String(char.id).padStart(3, '0')}`;

    item.append(dot, name, idSpan);
    item.addEventListener('click', () => selectChar(char));
    charList.appendChild(item);
  }
}

// ── Detail ─────────────────────────────────────────────────────

function selectChar(char) {
  activeChar = char;

  // Update list active state
  document.querySelectorAll('.char-item').forEach(el => {
    el.classList.toggle('active', +el.dataset.id === char.id);
  });

  // Populate detail
  emptyState.hidden = true;
  detail.hidden = false;

  $('detail-element').textContent = char.element;
  $('detail-element').style.borderColor = getElemColor(char.element);
  $('detail-element').style.color = getElemColor(char.element);
  $('detail-classe').textContent = char.classe;
  $('detail-nom').textContent = char.nom;
  $('detail-espece').textContent = char.espece;
  $('detail-region').textContent = char.region;
  $('detail-faction').textContent = char.faction;

  const el2Wrap = $('detail-element2-wrap');
  if (char.element2) {
    el2Wrap.hidden = false;
    $('detail-element2').textContent = char.element2;
  } else {
    el2Wrap.hidden = true;
  }

  $('desc-physique').textContent = char.description_physique;
  $('desc-personnalite').textContent = char.description_personnalite;
  $('desc-lore').textContent = char.position_lore;
  $('desc-combat').textContent = char.style_combat;
  $('desc-classe').textContent = char.modifications_classe;

  renderAssets(char);
  viewerBankClips = [];
  renderAnimButtons('anim-buttons', [], viewer);
  $('anim-browser').hidden = true;
  // Reset animation state WITHOUT destroying the model so it stays visible while
  // the new character's model loads (_loadModel replaces it atomically).
  viewer?.clearAnimState();

  // If meshy bank is already loaded, auto-assign will happen after loadUrl callback.
  // Auto-load GLB — model replaces the previous one once ready.
  checkAndLoadGlb(char);
}

// ── GLB save to server ─────────────────────────────────────────
// Saves the GLB binary to public/<char.assets.model_glb> via Vite middleware.
// The relative path is resolved from the page URL to public/.

async function saveGlbForChar(file, char, statusId) {
  const relPath = glbPublicPath(char);
  const statusEl = $(statusId);
  try {
    statusEl && (statusEl.textContent = `Sauvegarde du modèle…`);
    const buf = await file.arrayBuffer();
    const res = await fetch('/api/save-file', {
      method: 'POST',
      headers: { 'X-File-Path': relPath },
      body: buf,
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    statusEl && (statusEl.textContent = `Modèle sauvegardé → ${relPath}`);
  } catch (err) {
    statusEl && (statusEl.textContent = `Sauvegarde échouée : ${err.message}`);
  }
}

// The path relative to public/ for a character's model GLB
function glbPublicPath(char) {
  // char.assets.model_glb is e.g. "characters/001-pyrakh/model.glb"
  // public/ is the root, so save path = char.assets.model_glb
  return char.assets.model_glb;
}

// ── Per-character animation slot persistence ───────────────────
// char.animSlots = { "idle": "idle", "walk": "walking", "attack-01": "attack", … }
// Values are Meshy bank clip names. Null/absent = use auto-default.

function applyCharAnimSlots(char, viewerInst) {
  const slots = char.animSlots ?? {};
  for (const [slot, val] of Object.entries(slots)) {
    const { clip: clipName } = normalizeSlot(val);
    if (!clipName) continue;
    const clip = meshyBankClips.find(c => c.name === clipName)
              ?? viewerInst.getModelClips().find(c => c.name === clipName);
    if (clip) {
      viewerInst.assignClipToSlot(clip, slot);
      viewerInst.injectClip?.(clip);
    } else {
      console.warn(`[CharSlots] Clip "${clipName}" not found in bank (slot: ${slot})`);
    }
  }
}

async function saveCharSlots(char) {
  const idx = allChars.findIndex(c => c.id === char.id);
  if (idx >= 0) allChars[idx] = char;
  try {
    const res = await fetch('/api/save-file', {
      method: 'POST',
      headers: { 'X-File-Path': 'characters/characters.json', 'Content-Type': 'application/json' },
      body: JSON.stringify(allChars, null, 2),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
  } catch (err) {
    console.warn('[CharSlots] Save failed:', err);
    viewer?.onStatus?.('⚠ Sauvegarde slots échouée');
  }
}

async function loadWeaponsIndex() {
  try {
    const res = await fetch('/weapons/weapons.json');
    if (res.ok) allWeapons = await res.json();
  } catch { /* no weapons file yet */ }
}

// ── Weapon library helpers ─────────────────────────────────────

function slugify(name) {
  return name.normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

async function saveWeaponsJson() {
  await fetch('/api/save-file', {
    method: 'POST',
    headers: { 'X-File-Path': 'weapons/weapons.json', 'Content-Type': 'application/json' },
    body: JSON.stringify(allWeapons, null, 2),
  });
}

async function addWeaponToLibrary(file, name) {
  const id = slugify(name);
  if (!id) throw new Error('Nom invalide');
  if (allWeapons.find(w => w.id === id)) throw new Error(`ID "${id}" déjà utilisé`);

  // Save GLB binary
  await fetch('/api/save-file', {
    method: 'POST',
    headers: { 'X-File-Path': `weapons/${id}/model.glb` },
    body: file,
  });

  const entry = { id, name, glb: `weapons/${id}/model.glb`, grip: {} };
  allWeapons.push(entry);
  await saveWeaponsJson();
  return entry;
}

function removeWeaponFromLibrary(id) {
  const idx = allWeapons.findIndex(w => w.id === id);
  if (idx < 0) return;
  allWeapons.splice(idx, 1);
  saveWeaponsJson().catch(err => console.warn('[Library] remove save failed:', err));
}

async function renameWeapon(id, newName) {
  const w = allWeapons.find(x => x.id === id);
  if (!w || !newName.trim()) return;
  w.name = newName.trim();
  await saveWeaponsJson();
}

// ── Weapons library modal ──────────────────────────────────────

function showWeaponsLibrary() {
  let modal = document.getElementById('weapons-library-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'weapons-library-modal';
    document.body.appendChild(modal);
  }

  const render = () => {
    const hasWeap = !!viewer?.hasModel();
    modal.innerHTML = `
      <div class="wlib-inner">
        <div class="wlib-header">
          <span class="wlib-title">⚔ Armurerie</span>
          <button class="wlib-close" id="wlib-close">✕</button>
        </div>
        <div class="wlib-body">
          <div class="wlib-dropzone" id="wlib-dropzone">
            <span class="wlib-drop-hint">Dépose un <strong>.glb</strong> ici</span>
            <label class="wlib-browse-btn">Parcourir…
              <input type="file" accept=".glb,.gltf" id="wlib-file-input" style="display:none">
            </label>
          </div>
          <div class="wlib-naming" id="wlib-naming" hidden></div>
          <div class="wlib-section-label">${allWeapons.length} arme${allWeapons.length !== 1 ? 's' : ''}</div>
          <div class="wlib-list" id="wlib-list"></div>
        </div>
      </div>`;

    modal.hidden = false;

    // ── Close ──────────────────────────────────────────────────
    document.getElementById('wlib-close').onclick = () => { modal.hidden = true; };
    modal.onclick = (e) => { if (e.target === modal) modal.hidden = true; };

    // ── Weapon list ────────────────────────────────────────────
    const list = document.getElementById('wlib-list');
    if (!allWeapons.length) {
      list.innerHTML = '<div class="wlib-empty">Aucune arme — dépose un GLB pour commencer</div>';
    }
    for (const w of allWeapons) {
      const hasGrip = w.grip && (
        (w.grip.position ?? [0,0,0]).some(v => v !== 0) ||
        (w.grip.rotation ?? [0,0,0]).some(v => v !== 0) ||
        (w.grip.scale != null && w.grip.scale !== 1)
      );
      const row = document.createElement('div');
      row.className = 'wlib-row';
      row.innerHTML = `
        <span class="wlib-row-name" contenteditable="true" spellcheck="false">${w.name}</span>
        <span class="wlib-grip-badge ${hasGrip ? 'configured' : ''}">${hasGrip ? '✓ grip' : '— auto'}</span>
        <button class="wlib-grip-btn" data-id="${w.id}" title="Ajuster la prise en main">⚙ Prise</button>
        <button class="wlib-remove-btn" data-id="${w.id}" title="Supprimer">×</button>`;

      // Inline rename on blur
      const nameEl = row.querySelector('.wlib-row-name');
      nameEl.addEventListener('blur', async () => {
        const newName = nameEl.textContent.trim();
        if (newName && newName !== w.name) {
          await renameWeapon(w.id, newName).catch(() => { nameEl.textContent = w.name; });
        } else {
          nameEl.textContent = w.name;
        }
      });
      nameEl.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); nameEl.blur(); } });

      // Grip editor
      row.querySelector('.wlib-grip-btn').onclick = () => {
        modal.hidden = true;
        showGripEditor(w.id, 'right');
      };

      // Remove with inline confirm
      const removeBtn = row.querySelector('.wlib-remove-btn');
      removeBtn.onclick = () => {
        if (removeBtn.dataset.confirm) {
          removeWeaponFromLibrary(w.id);
          render();
        } else {
          removeBtn.textContent = '? Oui';
          removeBtn.dataset.confirm = '1';
          removeBtn.classList.add('confirming');
          setTimeout(() => {
            if (removeBtn.dataset.confirm) {
              removeBtn.textContent = '×';
              delete removeBtn.dataset.confirm;
              removeBtn.classList.remove('confirming');
            }
          }, 2500);
        }
      };

      list.appendChild(row);
    }

    // ── Drop zone ──────────────────────────────────────────────
    const dropzone = document.getElementById('wlib-dropzone');
    const fileInput = document.getElementById('wlib-file-input');

    const handleFile = (file) => {
      if (!file?.name.match(/\.(glb|gltf)$/i)) return;
      showNamingForm(file);
    };

    dropzone.addEventListener('dragover', e => { e.preventDefault(); dropzone.classList.add('drag-over'); });
    dropzone.addEventListener('dragleave', () => dropzone.classList.remove('drag-over'));
    dropzone.addEventListener('drop', e => {
      e.preventDefault();
      dropzone.classList.remove('drag-over');
      handleFile(e.dataTransfer.files[0]);
    });
    fileInput.addEventListener('change', e => handleFile(e.target.files[0]));

    // ── Naming form ────────────────────────────────────────────
    const showNamingForm = (file) => {
      const sizekb = (file.size / 1024).toFixed(0);
      const defaultName = file.name.replace(/\.(glb|gltf)$/i, '').replace(/[-_]/g, ' ');
      const naming = document.getElementById('wlib-naming');

      naming.hidden = false;
      dropzone.hidden = true;
      naming.innerHTML = `
        <div class="wlib-naming-file">${file.name} <span class="wlib-naming-size">${sizekb} KB</span></div>
        <label class="wlib-naming-label">Nom
          <input type="text" class="wlib-naming-input" id="wlib-name-input"
            value="${defaultName}" placeholder="Nom de l'arme" autocomplete="off">
        </label>
        <div class="wlib-naming-id">ID : <span id="wlib-id-preview">${slugify(defaultName)}</span></div>
        <div class="wlib-naming-error" id="wlib-name-error"></div>
        <div class="wlib-naming-actions">
          <button class="wlib-naming-cancel" id="wlib-name-cancel">Annuler</button>
          <button class="wlib-naming-add" id="wlib-name-add">Ajouter à l'armurerie</button>
        </div>`;

      const nameInput  = document.getElementById('wlib-name-input');
      const idPreview  = document.getElementById('wlib-id-preview');
      const errorEl    = document.getElementById('wlib-name-error');
      const addBtn     = document.getElementById('wlib-name-add');

      const validate = () => {
        const id = slugify(nameInput.value);
        idPreview.textContent = id || '—';
        const conflict = allWeapons.find(w => w.id === id);
        const empty = !nameInput.value.trim();
        errorEl.textContent = empty ? '' : conflict ? `ID "${id}" déjà utilisé` : '';
        addBtn.disabled = empty || !!conflict;
      };
      nameInput.addEventListener('input', validate);
      validate();
      nameInput.focus();
      nameInput.select();

      document.getElementById('wlib-name-cancel').onclick = () => {
        naming.hidden = true;
        dropzone.hidden = false;
        fileInput.value = '';
      };

      addBtn.onclick = async () => {
        addBtn.disabled = true;
        addBtn.textContent = '⏳ Sauvegarde…';
        try {
          await addWeaponToLibrary(file, nameInput.value.trim());
          render();
        } catch (err) {
          errorEl.textContent = err.message;
          addBtn.disabled = false;
          addBtn.textContent = 'Ajouter à l\'armurerie';
        }
      };
    };
  };

  render();
}

// ── Weapon picker modal ────────────────────────────────────────

function showWeaponPicker(slot, hand, char, onChanged) {
  let modal = document.getElementById('weapon-picker-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'weapon-picker-modal';
    modal.innerHTML = `
      <div class="picker-inner">
        <div class="picker-header">
          <span id="weapon-picker-label"></span>
          <button id="weapon-picker-armory" class="picker-armory-btn" title="Gérer l'armurerie">⚔ Armurerie</button>
          <button id="weapon-picker-close" class="picker-close">✕</button>
        </div>
        <div id="weapon-picker-list"></div>
      </div>`;
    document.body.appendChild(modal);
  }

  const label = document.getElementById('weapon-picker-label');
  const handLabel = hand === 'right' ? 'main droite ⚔' : 'main gauche 🛡';
  label.textContent = `${slot} — ${handLabel}`;

  document.getElementById('weapon-picker-close').onclick = () => { modal.hidden = true; };
  document.getElementById('weapon-picker-armory').onclick = () => { modal.hidden = true; showWeaponsLibrary(); };
  modal.onclick = (e) => { if (e.target === modal) modal.hidden = true; };

  const list = document.getElementById('weapon-picker-list');
  list.innerHTML = '';

  const currentId = normalizeSlot(char?.animSlots?.[slot]).weapons[hand] ?? null;

  const makeRow = (id, name, isCurrentRow, onPreview, onAssign) => {
    const row = document.createElement('div');
    row.className = 'picker-row' + (isCurrentRow ? ' current' : '');
    const nameEl = document.createElement('span'); nameEl.className = 'picker-row-name'; nameEl.textContent = name;
    const assignBtn = document.createElement('button'); assignBtn.className = 'picker-row-assign';
    assignBtn.textContent = isCurrentRow ? '✓ Actuel' : 'Assigner';
    assignBtn.onclick = onAssign;
    if (onPreview) {
      const previewBtn = document.createElement('button'); previewBtn.className = 'picker-row-preview';
      previewBtn.textContent = '▶ Aperçu';
      previewBtn.onclick = onPreview;
      row.append(nameEl, previewBtn, assignBtn);
    } else {
      row.append(nameEl, assignBtn);
    }
    list.appendChild(row);
  };

  // "None" row — removes weapon from this slot+hand
  makeRow(null, '— Aucune arme', !currentId, null, () => {
    setSlotWeapon(char, slot, hand, null);
    viewer.detachWeapon(hand);
    saveCharSlots(char);
    onChanged?.();
    modal.hidden = true;
  });

  if (!allWeapons.length) {
    const empty = document.createElement('div'); empty.className = 'picker-empty';
    empty.textContent = 'Aucune arme disponible — ajoute des GLB dans public/weapons/';
    list.appendChild(empty);
  }

  for (const w of allWeapons) {
    const isCurrent = w.id === currentId;
    const row = document.createElement('div');
    row.className = 'picker-row' + (isCurrent ? ' current' : '');

    const nameEl = document.createElement('span');
    nameEl.className = 'picker-row-name';
    nameEl.textContent = w.name;

    const gripBtn = document.createElement('button');
    gripBtn.className = 'picker-row-grip';
    gripBtn.textContent = '⚙';
    gripBtn.title = 'Ajuster la prise en main';
    gripBtn.onclick = () => {
      modal.hidden = true;
      showGripEditor(w.id, hand);
    };

    const previewBtn = document.createElement('button');
    previewBtn.className = 'picker-row-preview';
    previewBtn.textContent = '▶ Aperçu';
    previewBtn.onclick = () => viewer.attachWeapon(`/${w.glb}`, w.grip ?? {}, hand);

    const assignBtn = document.createElement('button');
    assignBtn.className = 'picker-row-assign';
    assignBtn.textContent = isCurrent ? '✓ Assigné' : 'Assigner';
    assignBtn.onclick = () => {
      setSlotWeapon(char, slot, hand, w.id);
      viewer.attachWeapon(`/${w.glb}`, w.grip ?? {}, hand);
      saveCharSlots(char);
      onChanged?.();
      modal.hidden = true;
    };

    row.append(nameEl, gripBtn, previewBtn, assignBtn);
    list.appendChild(row);
  }

  modal.hidden = false;
}

// ── Grip editor ───────────────────────────────────────────────

function showGripEditor(weaponId, hand) {
  const w = allWeapons.find(x => x.id === weaponId);
  if (!w) return;

  // Ensure the weapon is attached for live preview
  viewer.attachWeapon(`/${w.glb}`, w.grip ?? {}, hand);

  const handLabel = hand === 'right' ? '⚔ Main droite' : '🛡 Main gauche';

  // Working copy of the grip — mutated by sliders, saved on confirm
  let grip = {
    position: [...(w.grip?.position ?? [0, 0, 0])],
    rotation: [...(w.grip?.rotation ?? [0, 0, 0])],
    scale: w.grip?.scale ?? 1,
  };

  const toDeg = r  => parseFloat((r * 180 / Math.PI).toFixed(1));
  const toRad = d  => parseFloat((d * Math.PI / 180).toFixed(5));
  const fmt   = v  => parseFloat(parseFloat(v).toFixed(4));

  const sliderRow = (id, label, val, min, max, step) => `
    <div class="grip-row">
      <label class="grip-label">${label}</label>
      <input type="number" class="grip-num" id="${id}" value="${val}" step="${step}" min="${min}" max="${max}">
      <input type="range"  class="grip-range" id="${id}-r" value="${val}" step="${step}" min="${min}" max="${max}">
    </div>`;

  let modal = document.getElementById('grip-editor-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'grip-editor-modal';
    document.body.appendChild(modal);
  }

  modal.innerHTML = `
    <div class="grip-editor-inner">
      <div class="grip-editor-header">
        <span class="grip-editor-title">${w.name} — ${handLabel}</span>
        <button id="grip-auto-btn" class="grip-auto-btn">⚡ Auto</button>
      </div>
      <div class="grip-editor-body">
        <div class="grip-section-label">Position</div>
        ${sliderRow('grip-px', 'X', fmt(grip.position[0]), -5,   5,    0.001)}
        ${sliderRow('grip-py', 'Y', fmt(grip.position[1]), -5,   5,    0.001)}
        ${sliderRow('grip-pz', 'Z', fmt(grip.position[2]), -5,   5,    0.001)}
        <div class="grip-section-label">Rotation (°)</div>
        ${sliderRow('grip-rx', 'X', toDeg(grip.rotation[0]), -180, 180, 0.5)}
        ${sliderRow('grip-ry', 'Y', toDeg(grip.rotation[1]), -180, 180, 0.5)}
        ${sliderRow('grip-rz', 'Z', toDeg(grip.rotation[2]), -180, 180, 0.5)}
        <div class="grip-section-label">Taille</div>
        ${sliderRow('grip-sc', 'Scale', grip.scale, 0.001, 10, 0.001)}
      </div>
      <div class="grip-editor-footer">
        <button id="grip-cancel-btn" class="grip-cancel-btn">Annuler</button>
        <button id="grip-save-btn"   class="grip-save-btn">Sauvegarder</button>
      </div>
    </div>`;

  modal.hidden = false;

  // ── Sync viewer from current grip state ──────────────────────
  const syncViewer = () => viewer.updateWeaponGrip(grip, hand);

  // ── Wire a number+range pair ─────────────────────────────────
  const wire = (id, get, set) => {
    const num   = document.getElementById(id);
    const range = document.getElementById(id + '-r');
    num.oninput = () => { set(num.value); range.value = num.value; syncViewer(); };
    range.oninput = () => { set(range.value); num.value = range.value; syncViewer(); };
  };

  wire('grip-px', () => grip.position[0], v => { grip.position[0] = fmt(v); });
  wire('grip-py', () => grip.position[1], v => { grip.position[1] = fmt(v); });
  wire('grip-pz', () => grip.position[2], v => { grip.position[2] = fmt(v); });
  wire('grip-rx', () => toDeg(grip.rotation[0]), v => { grip.rotation[0] = toRad(v); });
  wire('grip-ry', () => toDeg(grip.rotation[1]), v => { grip.rotation[1] = toRad(v); });
  wire('grip-rz', () => toDeg(grip.rotation[2]), v => { grip.rotation[2] = toRad(v); });
  wire('grip-sc', () => grip.scale, v => { grip.scale = fmt(v); });

  // ── Auto button — bounding box heuristic ─────────────────────
  document.getElementById('grip-auto-btn').onclick = () => {
    const computed = viewer.computeAutoGrip(hand);
    if (!computed) return;
    grip = computed;
    // Adapt scale slider range around the computed value so the slider is usable
    // regardless of whether the weapon is in meters or centimetres.
    const s = computed.scale;
    const sMin = parseFloat(Math.max(0.0001, s * 0.05).toFixed(5));
    const sMax = parseFloat((s * 20).toFixed(4));
    const sStep = parseFloat((s * 0.02).toFixed(5));
    for (const id of ['grip-sc', 'grip-sc-r']) {
      const el = document.getElementById(id);
      el.min = sMin; el.max = sMax; el.step = sStep;
    }
    // Adapt position slider ranges around computed values so small offsets are usable.
    for (const [axId, val] of [
      ['grip-px', computed.position[0]],
      ['grip-py', computed.position[1]],
      ['grip-pz', computed.position[2]],
    ]) {
      const absVal = Math.abs(val);
      const pRange = Math.max(5, absVal * 2);
      const pStep  = parseFloat(Math.max(0.001, absVal * 0.01).toFixed(5));
      for (const id of [axId, axId + '-r']) {
        const el = document.getElementById(id);
        el.min = -pRange; el.max = pRange; el.step = pStep;
      }
    }
    populateInputs();
  };

  // ── Populate all inputs from current grip ────────────────────
  const populateInputs = () => {
    const set = (id, val) => {
      document.getElementById(id).value = val;
      document.getElementById(id + '-r').value = val;
    };
    set('grip-px', fmt(grip.position[0]));
    set('grip-py', fmt(grip.position[1]));
    set('grip-pz', fmt(grip.position[2]));
    set('grip-rx', toDeg(grip.rotation[0]));
    set('grip-ry', toDeg(grip.rotation[1]));
    set('grip-rz', toDeg(grip.rotation[2]));
    set('grip-sc', grip.scale);
    syncViewer();
  };

  // ── Save — write grip back to weapons.json ───────────────────
  document.getElementById('grip-save-btn').onclick = async () => {
    w.grip = {
      position: [...grip.position],
      rotation: [...grip.rotation],
      scale: grip.scale,
    };
    try {
      await fetch('/api/save-file', {
        method: 'POST',
        headers: { 'X-File-Path': 'weapons/weapons.json', 'Content-Type': 'application/json' },
        body: JSON.stringify(allWeapons, null, 2),
      });
      viewer.onStatus?.(`✓ Prise sauvegardée — ${w.name}`);
    } catch (err) {
      viewer.onStatus?.(`⚠ Erreur sauvegarde prise: ${err.message}`);
    }
    modal.hidden = true;
  };

  // ── Cancel — restore original grip ──────────────────────────
  document.getElementById('grip-cancel-btn').onclick = () => {
    viewer.updateWeaponGrip(w.grip ?? {}, hand);
    modal.hidden = true;
  };
}

// Bug 3 fix: skip the fragile HEAD check entirely.
// Just call viewer.loadUrl directly; GLTFLoader's onError handles 404 gracefully.
async function checkAndLoadGlb(char) {
  const modelPath = char.assets.model_glb;
  // Strip 'characters/' prefix since we're already at /characters/ URL
  const relUrl = modelPath.replace(/^characters\//, '');

  viewer.loadUrl(relUrl, names => {
    $('viewer-wrap').classList.remove('empty-model');
    onAnimationsLoaded(names);
    // 1. Apply saved slot assignments (explicit, per-character)
    applyCharAnimSlots(char, viewer);
    // 2. Fill remaining empty slots with meshy defaults
    if (meshyBankClips.length > 0) {
      autoAssignMeshyToViewer(viewer, 'anim-buttons');
    }
    // Refresh buttons to reflect the final assignment state
    renderAnimButtons('anim-buttons', names, viewer);
    // 3. Apply weapons for the idle slot (default visible state)
    applySlotWeapons(char, 'idle');
  });
}

// ── Animation slots ────────────────────────────────────────────
// Compact pill buttons — each is also a drop zone for a single Mixamo GLB.
// Animation sources (priority order):
//   1. _slotClips[slot]       explicit per-slot drop
//   2. findMatchingAnim()     auto-match from model's embedded clips

// Bug 1 fix: removed viewer.stopAnimation?.() — viewer auto-plays the first animation.
function onAnimationsLoaded(animNames) {
  $('viewer-wrap').classList.remove('empty-model');
  renderAnimButtons('anim-buttons', animNames, viewer);
  // Do NOT call viewer.stopAnimation() here — the viewer auto-plays the first anim.
  refreshAnimBrowser('anim-browser-list', 'anim-browser', viewer, viewerBankClips);
}

function renderAnimButtons(containerId, animNames, viewerInst) {
  const container = $(containerId);
  container.innerHTML = '';
  for (const slot of ANIMATION_SLOTS.filter(s => s !== 'portrait')) {
    container.appendChild(buildSlotRow(slot, animNames, viewerInst));
  }
}

// Returns {srcSlot, filename}[] — attack-* slots share a common pool
function getSlotLibFiles(slot) {
  if (/^attack-\d+$/.test(slot)) {
    return ANIMATION_SLOTS
      .filter(s => /^attack-\d+$/.test(s))
      .flatMap(s => (libraryManifest[s] ?? []).map(f => ({ srcSlot: s, filename: f })));
  }
  return (libraryManifest[slot] ?? []).map(f => ({ srcSlot: slot, filename: f }));
}

function buildSlotRow(slot, animNames, viewerInst) {
  const row = document.createElement('div');
  row.className = 'slot-row';
  row.dataset.slot = slot;

  const nameEl  = document.createElement('span'); nameEl.className  = 'slot-row-name';
  nameEl.textContent = slot;

  const clipEl  = document.createElement('span'); clipEl.className  = 'slot-row-clip';

  const pickBtn  = document.createElement('button'); pickBtn.className  = 'slot-row-pick';
  pickBtn.textContent = 'Choisir';

  const playBtn  = document.createElement('button'); playBtn.className  = 'slot-row-play';
  playBtn.textContent = '▶';

  const clearBtn = document.createElement('button'); clearBtn.className = 'slot-row-clear';
  clearBtn.textContent = '×';
  clearBtn.title = 'Supprimer l\'assignation';

  const weapRBtn = document.createElement('button'); weapRBtn.className = 'slot-row-weap';
  weapRBtn.title = 'Arme main droite';

  const weapLBtn = document.createElement('button'); weapLBtn.className = 'slot-row-weap';
  weapLBtn.title = 'Arme main gauche';

  row.append(nameEl, clipEl, weapRBtn, weapLBtn, pickBtn, playBtn, clearBtn);

  const refresh = () => {
    const assignedName = viewerInst.getSlotClipName(slot);
    const autoMatch    = findMatchingAnim(slot, animNames);
    const isAssigned   = !!assignedName;
    const hasAuto      = !isAssigned && !!autoMatch;
    row.className = 'slot-row' + (isAssigned ? ' assigned' : hasAuto ? ' auto' : '');
    clipEl.textContent = isAssigned ? assignedName : hasAuto ? autoMatch : '—';
    playBtn.disabled  = !isAssigned && !hasAuto;
    pickBtn.textContent = isAssigned ? '✎' : 'Choisir';
    clearBtn.hidden   = !isAssigned;

    const slotWeapons = normalizeSlot(activeChar?.animSlots?.[slot]).weapons;
    const wR = slotWeapons.right; const wL = slotWeapons.left;
    weapRBtn.textContent = wR ? '⚔' : '·';
    weapRBtn.title = `Main droite: ${allWeapons.find(w => w.id === wR)?.name ?? 'aucune'}`;
    weapRBtn.classList.toggle('has-weapon', !!wR);
    weapLBtn.textContent = wL ? '🛡' : '·';
    weapLBtn.title = `Main gauche: ${allWeapons.find(w => w.id === wL)?.name ?? 'aucune'}`;
    weapLBtn.classList.toggle('has-weapon', !!wL);
  };
  refresh();

  pickBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    showAnimPicker(slot, animNames, viewerInst, refresh);
  });

  playBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (!viewerInst.playSlot(slot)) {
      const auto = findMatchingAnim(slot, animNames);
      if (auto) viewerInst.playAnimation(auto);
    }
    if (activeChar && viewerInst === viewer) applySlotWeapons(activeChar, slot);
  });

  clearBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    viewerInst.clearSlot(slot);
    viewer.detachAllWeapons();
    if (activeChar) {
      activeChar.animSlots ??= {};
      delete activeChar.animSlots[slot];
      saveCharSlots(activeChar);
    }
    refresh();
  });

  weapRBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (!activeChar) return;
    showWeaponPicker(slot, 'right', activeChar, refresh);
  });

  weapLBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (!activeChar) return;
    showWeaponPicker(slot, 'left', activeChar, refresh);
  });

  // Drag-and-drop onto the row
  row.addEventListener('dragover', (e) => {
    if ([...e.dataTransfer.types].includes('Files')) { e.preventDefault(); row.classList.add('drag-over'); }
  });
  row.addEventListener('dragleave', () => row.classList.remove('drag-over'));
  row.addEventListener('drop', (e) => {
    e.preventDefault();
    row.classList.remove('drag-over');
    const file = [...e.dataTransfer.files].find(isAnimFile);
    if (!file) return;
    if (!viewerInst.hasModel()) { viewerInst.onStatus?.('Charge d\'abord un modèle GLB.'); return; }
    const onDrop = (clip) => {
      viewerInst.assignClipToSlot(clip, slot);
      viewerInst.playSlot(slot);
      if (activeChar && viewerInst === viewer) {
        setSlotClip(activeChar, slot, clip.name);
        saveCharSlots(activeChar);
      }
      refresh();
      viewerInst.onStatus?.(`${slot} ← ${clip.name}`);
    };
    if (/\.bvh$/i.test(file.name)) viewerInst.loadBvhFile(file, onDrop);
    else if (/\.fbx$/i.test(file.name)) viewerInst.loadFbxFile(file, onDrop);
    else viewerInst.loadSlotFromFile(file, slot, (slotName, clipName) => {
      if (clipName) {
        if (activeChar && viewerInst === viewer) {
          setSlotClip(activeChar, slot, clipName);
          saveCharSlots(activeChar);
        }
        refresh();
        viewerInst.playSlot(slot);
      }
    });
  });

  return row;
}

// ── Auto-assign Meshy bank clips to viewer slots ───────────────
// Called after the Meshy bank finishes loading OR after a model finishes loading
// (whichever happens second). Only fills slots not already manually assigned.

function autoAssignMeshyToViewer(viewerInst, buttonContainerId) {
  if (!viewerInst.hasModel() || !meshyBankClips.length) return;

  // Build the set of slots that already have an explicit assignment
  const alreadyAssigned = new Set(Object.keys(viewerInst.getSlotAssignments?.() ?? {}));

  for (const [meshyName, slot] of Object.entries(MESHY_TO_SLOT)) {
    // Skip if this slot was already assigned (don't overwrite manual assignments,
    // and don't let later MESHY_TO_SLOT entries overwrite earlier ones)
    if (alreadyAssigned.has(slot)) continue;

    const clip = meshyBankClips.find(c => c.name === meshyName);
    if (clip) {
      viewerInst.assignClipToSlot(clip, slot);
      // Also inject the clip into the viewer's internal animation pool
      viewerInst.injectClip?.(clip);
      alreadyAssigned.add(slot);
    }
  }

  // Refresh the slot-button grid so newly assigned slots light up
  const animNames = viewerInst.getAnimationNames?.() ?? [];
  renderAnimButtons(buttonContainerId, animNames, viewerInst);

  // Auto-play idle if nothing is currently playing
  viewerInst.playSlot?.('idle');
}

// ── Animation picker modal ─────────────────────────────────────

let _pickerState = null; // { slot, animNames, viewerInst, onChanged, activeTab }

function showAnimPicker(slot, animNames, viewerInst, onChanged) {
  const modal = $('anim-picker-modal');
  $('anim-picker-slot-label').textContent = slot;
  $('anim-picker-search').value = '';

  _pickerState = { slot, animNames, viewerInst, onChanged, activeTab: 'model' };

  // Tab activation
  modal.querySelectorAll('.picker-tab').forEach(t => {
    t.classList.toggle('active', t.dataset.tab === 'model');
    t.onclick = () => {
      modal.querySelectorAll('.picker-tab').forEach(x => x.classList.remove('active'));
      t.classList.add('active');
      _pickerState.activeTab = t.dataset.tab;
      _renderPickerList();
    };
  });

  $('anim-picker-search').oninput = _renderPickerList;
  $('anim-picker-close').onclick = closeAnimPicker;
  modal.onclick = (e) => { if (e.target === modal) closeAnimPicker(); };

  modal.hidden = false;
  _renderPickerList();
}

function closeAnimPicker() {
  $('anim-picker-modal').hidden = true;
  _pickerState = null;
}

function _renderPickerList() {
  if (!_pickerState) return;
  const { slot, animNames, viewerInst, onChanged, activeTab } = _pickerState;
  const q = $('anim-picker-search').value.toLowerCase().trim();
  const list = $('anim-picker-list');
  list.innerHTML = '';
  const assignedName = viewerInst.getSlotClipName(slot);

  const filter = name => !q || name.toLowerCase().includes(q);

  // ── helper: clip object row ──────────────────────────────────
  const addClipRow = (clip) => {
    if (!filter(clip.name)) return;
    const row = document.createElement('div');
    row.className = 'picker-row' + (clip.name === assignedName ? ' current' : '');

    const nameEl = document.createElement('span'); nameEl.className = 'picker-row-name';
    nameEl.textContent = clip.name;

    const previewBtn = document.createElement('button'); previewBtn.className = 'picker-row-preview';
    previewBtn.textContent = '▶ Aperçu';
    previewBtn.onclick = () => {
      list.querySelectorAll('.picker-row').forEach(r => r.classList.remove('previewing'));
      row.classList.add('previewing');
      viewerInst.playClipObject(clip);
    };

    const assignBtn = document.createElement('button'); assignBtn.className = 'picker-row-assign';
    assignBtn.textContent = clip.name === assignedName ? '✓ Assigné' : 'Assigner';
    assignBtn.onclick = () => {
      viewerInst.assignClipToSlot(clip, slot);
      viewerInst.injectClip?.(clip);
      viewerInst.playClipObject(clip);
      if (activeChar && viewerInst === viewer) {
        setSlotClip(activeChar, slot, clip.name);
        saveCharSlots(activeChar);
      }
      onChanged?.();
      closeAnimPicker();
    };

    row.append(nameEl, previewBtn, assignBtn);
    list.appendChild(row);
  };

  // ── helper: model-anim-name row ──────────────────────────────
  const addNameRow = (name) => {
    if (!filter(name)) return;
    const row = document.createElement('div');
    row.className = 'picker-row' + (name === assignedName ? ' current' : '');

    const nameEl = document.createElement('span'); nameEl.className = 'picker-row-name';
    nameEl.textContent = name;

    const previewBtn = document.createElement('button'); previewBtn.className = 'picker-row-preview';
    previewBtn.textContent = '▶ Aperçu';
    previewBtn.onclick = () => {
      list.querySelectorAll('.picker-row').forEach(r => r.classList.remove('previewing'));
      row.classList.add('previewing');
      viewerInst.playAnimation(name);
    };

    const assignBtn = document.createElement('button'); assignBtn.className = 'picker-row-assign';
    assignBtn.textContent = name === assignedName ? '✓ Assigné' : 'Assigner';
    assignBtn.onclick = () => {
      const clips = viewerInst.getModelClips();
      const clip  = clips.find(c => c.name === name);
      if (clip) {
        viewerInst.assignClipToSlot(clip, slot);
        if (activeChar && viewerInst === viewer) {
          setSlotClip(activeChar, slot, clip.name);
          saveCharSlots(activeChar);
        }
      }
      viewerInst.playAnimation(name);
      onChanged?.();
      closeAnimPicker();
    };

    row.append(nameEl, previewBtn, assignBtn);
    list.appendChild(row);
  };

  // ── helper: BVH/FBX file row ─────────────────────────────────
  const addFileRow = ({ srcSlot, filename }) => {
    const displayName = filename.replace(/\.(bvh|fbx)$/i, '');
    if (!filter(displayName)) return;
    const row = document.createElement('div');
    row.className = 'picker-row' + (displayName === assignedName ? ' current' : '');

    const nameEl = document.createElement('span'); nameEl.className = 'picker-row-name';
    nameEl.textContent = displayName + (srcSlot !== slot ? ` [${srcSlot}]` : '');

    const previewBtn = document.createElement('button'); previewBtn.className = 'picker-row-preview';
    previewBtn.textContent = '▶ Aperçu';
    previewBtn.onclick = async () => {
      list.querySelectorAll('.picker-row').forEach(r => r.classList.remove('previewing'));
      row.classList.add('previewing');
      previewBtn.textContent = '⏳';
      await loadAndApplyLibAnim(srcSlot, slot, filename, viewerInst, false);
      previewBtn.textContent = '▶ Aperçu';
    };

    const assignBtn = document.createElement('button'); assignBtn.className = 'picker-row-assign';
    assignBtn.textContent = displayName === assignedName ? '✓ Assigné' : 'Assigner';
    assignBtn.onclick = async () => {
      assignBtn.textContent = '⏳';
      await loadAndApplyLibAnim(srcSlot, slot, filename, viewerInst, true);
      onChanged?.();
      closeAnimPicker();
    };

    row.append(nameEl, previewBtn, assignBtn);
    list.appendChild(row);
  };

  const addSection = (title) => {
    const hdr = document.createElement('div'); hdr.className = 'picker-section-header';
    hdr.textContent = title; list.appendChild(hdr);
  };

  if (activeTab === 'model') {
    const names = animNames.filter(Boolean);
    if (!names.length) {
      list.innerHTML = '<div class="picker-empty">Aucune animation dans ce modèle</div>'; return;
    }
    names.forEach(addNameRow);
  } else if (activeTab === 'meshy') {
    if (!meshyBankClips.length) {
      list.innerHTML = '<div class="picker-empty">Banque Meshy en cours de chargement…</div>'; return;
    }
    meshyBankClips.forEach(addClipRow);
  } else if (activeTab === 'saved') {
    if (!sharedBankClips.length) {
      list.innerHTML = '<div class="picker-empty">Aucune animation sauvegardée</div>'; return;
    }
    sharedBankClips.forEach(addClipRow);
  } else if (activeTab === 'lib') {
    const libItems = getSlotLibFiles(slot);
    if (!libItems.length) {
      list.innerHTML = '<div class="picker-empty">Aucun fichier BVH/FBX pour ce slot</div>'; return;
    }
    libItems.forEach(addFileRow);
  }

  if (!list.children.length) {
    list.innerHTML = '<div class="picker-empty">Aucun résultat</div>';
  }
}

async function loadAndApplyLibAnim(srcSlot, targetSlot, filename, viewerInst, assign) {
  if (!viewerInst.hasModel()) {
    viewerInst.onStatus?.('⚠ Charge un modèle GLB d\'abord (bouton 📂 GLB)');
    return;
  }
  const ext = filename.split('.').pop().toLowerCase();
  const url = `anim-library/${srcSlot}/${filename}`;
  viewerInst.onStatus?.(`⏳ Chargement ${filename}…`);
  console.log(`[LibAnim] Loading ${url} → slot "${targetSlot}" (assign=${assign})`);
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status} — ${url}`);
    const buf  = await res.arrayBuffer();
    const file = new File([buf], filename);
    const onClip = (clip) => {
      if (assign) viewerInst.assignClipToSlot(clip, targetSlot);
      viewerInst.playClipObject(clip);
      console.log(`[LibAnim] Clip ready: ${clip.name}, ${clip.tracks.length} tracks`);
    };
    if (ext === 'bvh') viewerInst.loadBvhFile(file, onClip);
    else               viewerInst.loadFbxFile(file, onClip);
  } catch (err) {
    console.error('[LibAnim] Error:', err);
    viewerInst.onStatus?.(`⚠ Erreur: ${err.message}`);
  }
}

// ── Load multiple files (GLB or BVH) into a browser panel ─────
// BVH files: one clip each.  GLB files: all embedded clips.

async function loadFilesIntoBrowser(files, listId, panelId, viewerInst) {
  const newClips = [];
  for (const file of files) {
    if (/\.bvh$/i.test(file.name)) {
      await new Promise(res => viewerInst.loadBvhFile(file, clip => { newClips.push(clip); res(); }));
    } else if (/\.fbx$/i.test(file.name)) {
      await new Promise(res => viewerInst.loadFbxFile(file, (clip, all) => { newClips.push(...(all ?? [clip])); res(); }));
    } else {
      await new Promise(res => viewerInst.loadBrowserClips(file, clips => { newClips.push(...clips); res(); }));
    }
  }
  if (viewerInst === viewer) {
    viewerBankClips = [...viewerBankClips, ...newClips];
    refreshAnimBrowser(listId, panelId, viewerInst, viewerBankClips);
  } else {
    createBankClips = [...createBankClips, ...newClips];
    refreshAnimBrowser(listId, panelId, viewerInst, createBankClips);
  }
}

// ── Animation browser ──────────────────────────────────────────
// Load a GLB with many animations, preview each, assign to a slot.

function appendBrowserRows(container, containerId, clips, animNames, viewerInst) {
  for (const clip of clips) {
    const row = document.createElement('div');
    row.className = 'browser-row';

    const nameEl = document.createElement('span');
    nameEl.className = 'browser-clip-name';
    nameEl.textContent = clip.name;
    nameEl.title = clip.name;

    const playBtn = document.createElement('button');
    playBtn.className = 'browser-play';
    playBtn.textContent = '▶';
    playBtn.title = 'Prévisualiser';
    playBtn.addEventListener('click', () => {
      container.querySelectorAll('.browser-row').forEach(r => r.classList.remove('playing'));
      row.classList.add('playing');
      viewerInst.playClipObject(clip);
    });

    const sel = document.createElement('select');
    sel.className = 'browser-slot-sel';
    sel.innerHTML = `<option value="">→ slot</option>` +
      ANIMATION_SLOTS.filter(s => s !== 'portrait')
        .map(s => `<option value="${s}">${s}</option>`).join('');

    const assignBtn = document.createElement('button');
    assignBtn.className = 'browser-assign';
    assignBtn.textContent = 'OK';
    assignBtn.title = 'Assigner ce clip au slot sélectionné';
    assignBtn.addEventListener('click', () => {
      const slot = sel.value;
      if (!slot) return;
      viewerInst.assignClipToSlot(clip, slot);
      const gridId = containerId === 'anim-browser-list' ? 'anim-buttons' : 'create-anim-buttons';
      const grid = $(gridId);
      const existing = grid?.querySelector(`[data-slot="${slot}"]`);
      if (existing) existing.replaceWith(buildSlotRow(slot, animNames, viewerInst));
      sel.value = '';
      row.classList.add('assigned-flash');
      setTimeout(() => row.classList.remove('assigned-flash'), 800);
    });

    row.append(nameEl, playBtn, sel, assignBtn);
    container.appendChild(row);
  }
}

// Renders two labeled sections: model animations + externally loaded bank clips.
function refreshAnimBrowser(listId, panelId, viewerInst, bankClips) {
  const modelClips = viewerInst.getModelClips?.() ?? [];
  const animNames  = viewerInst.getAnimationNames();
  const container  = $(listId);
  container.innerHTML = '';
  let hasContent = false;

  if (modelClips.length) {
    hasContent = true;
    const hdr = document.createElement('div');
    hdr.className = 'browser-section-header';
    hdr.textContent = 'Animations du modèle';
    container.appendChild(hdr);
    appendBrowserRows(container, listId, modelClips, animNames, viewerInst);
  }

  if (bankClips.length) {
    hasContent = true;
    const hdr = document.createElement('div');
    hdr.className = 'browser-section-header';
    hdr.textContent = 'Banque chargée';
    container.appendChild(hdr);
    appendBrowserRows(container, listId, bankClips, animNames, viewerInst);
  }

  if (sharedBankClips.length) {
    hasContent = true;
    const hdr = document.createElement('div');
    hdr.className = 'browser-section-header';
    hdr.textContent = 'Anims sauvegardées';
    container.appendChild(hdr);
    appendBrowserRows(container, listId, sharedBankClips, animNames, viewerInst);
  }

  if (meshyBankClips.length) {
    hasContent = true;
    const hdr = document.createElement('div');
    hdr.className = 'browser-section-header';
    hdr.textContent = `Banque Meshy (${meshyBankClips.length})`;
    container.appendChild(hdr);
    appendBrowserRows(container, listId, meshyBankClips, animNames, viewerInst);
  }

  if (!hasContent) {
    container.innerHTML = '<div class="browser-empty">Aucune animation trouvée</div>';
  }
  $(panelId).hidden = !hasContent;
}

function renderAnimBrowser(containerId, clips, animNames, viewerInst) {
  const container = $(containerId);
  container.innerHTML = '';
  if (!clips.length) {
    container.innerHTML = '<div class="browser-empty">Aucune animation trouvée</div>';
    return;
  }
  appendBrowserRows(container, containerId, clips, animNames, viewerInst);
}

function isAnimFile(f) {
  return /\.(glb|gltf|bvh|fbx)$/i.test(f.name);
}

function findMatchingAnim(slot, animNames) {
  const s = slot.toLowerCase();
  return animNames.find(a => {
    const al = a.toLowerCase();
    return al === s || al.includes(s) || s.includes(al);
  });
}

// ── Asset slots ────────────────────────────────────────────────

// Bug 6 fix: strip 'characters/' prefix from slot.url before fetching,
// because the page is already served from /characters/ so the full path
// would resolve to /characters/characters/... (double prefix).
function renderAssets(char) {
  const grid = $('asset-grid');
  grid.innerHTML = '';
  let presentCount = 0;

  const slots = [
    { key: 'portrait', label: 'portrait', url: char.assets.portrait },
    { key: 'idle',     label: 'idle',     url: char.assets.idle },
    { key: 'walk',     label: 'walk',     url: char.assets.walk },
    { key: 'run',      label: 'run',      url: char.assets.run },
    { key: 'jump',     label: 'jump',     url: char.assets.jump },
    { key: 'swim',     label: 'swim',     url: char.assets.swim },
    { key: 'fly',      label: 'fly',      url: char.assets.fly },
    ...Array.from({ length: 10 }, (_, i) => ({
      key: `attack-${String(i+1).padStart(2,'0')}`,
      label: `attack-${String(i+1).padStart(2,'0')}`,
      url: char.assets.attack[i],
    })),
    { key: 'hurt', label: 'hurt', url: char.assets.hurt },
    { key: 'die',  label: 'die',  url: char.assets.die  },
    { key: 'glb',  label: 'model.glb', url: char.assets.model_glb },
  ];

  for (const slot of slots) {
    const div = document.createElement('div');
    div.className = 'asset-slot';

    const label = document.createElement('div');
    label.className = 'slot-label';
    label.textContent = slot.label;

    const icon = document.createElement('div');
    icon.className = 'slot-missing';
    icon.textContent = '○';

    div.append(icon, label);
    div.title = slot.url;
    grid.appendChild(div);

    // Strip 'characters/' prefix: the page is at /characters/, so raw paths
    // like "characters/001-pyrakh/portrait.png" would double-resolve.
    const checkUrl = (slot.url ?? '').replace(/^characters\//, '');
    fetch(checkUrl, { method: 'HEAD' }).then(r => {
      if (r.ok) {
        div.classList.add('present');
        icon.textContent = '✓';
        icon.style.color = '#4caf50';
        icon.className = 'slot-ok';
        presentCount++;
        $('asset-count').textContent = presentCount;
      }
    }).catch(() => {});
  }
}

// ── Spritesheet export (with slot selection modal) ─────────────

function exportSpritesheet() {
  if (!activeChar || !viewer?.hasModel()) {
    alert('Charge un modèle GLB d\'abord.'); return;
  }
  openExportModal(viewer, activeChar.nom);
}

function openExportModal(viewerInst, nom) {
  const animNames = viewerInst.getAnimationNames();
  const slots = ANIMATION_SLOTS.filter(s => s !== 'portrait');
  const list  = $('export-slot-list');
  list.innerHTML = '';
  for (const slot of slots) {
    // Available if explicitly assigned OR auto-matched from loaded GLB
    const avail = !!viewerInst.getSlotClipName(slot) || !!findMatchingAnim(slot, animNames);
    const lbl = document.createElement('label');
    lbl.style.opacity = avail ? '1' : '0.35';
    const cb = document.createElement('input');
    cb.type = 'checkbox'; cb.value = slot; cb.checked = avail; cb.disabled = !avail;
    const tag = viewerInst.getSlotClipName(slot) ? ' 📌' : '';
    lbl.append(cb, ` ${slot}${tag}`);
    list.appendChild(lbl);
  }
  $('export-select-all').checked = true;
  $('export-modal-status').textContent = '';
  $('export-modal').hidden = false;

  $('export-modal-go').onclick = () => {
    const selected = [...list.querySelectorAll('input:checked')].map(cb => cb.value);
    runExport(viewerInst, nom, selected);
  };
}

async function runExport(viewerInst, nom, selectedSlots) {
  const slug = nom.toLowerCase()
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  const statusEl = $('export-modal-status');

  const portraitBlob = await viewerInst.capturePortrait(512);
  if (portraitBlob) downloadBlob(portraitBlob, `${slug}_portrait.png`);

  let done = 0;
  const skipped = [];
  for (const slot of selectedSlots) {
    statusEl.textContent = `Export ${slot} (${done + 1}/${selectedSlots.length})…`;
    let blob = null;
    if (viewerInst.getSlotClipName(slot)) {
      blob = await viewerInst.captureSlot(slot, 8, 64);
    } else {
      const match = findMatchingAnim(slot, viewerInst.getAnimationNames());
      if (match) blob = await viewerInst.captureAnimation4Dir(match, 8, 64);
    }
    if (blob) { downloadBlob(blob, `${slug}_${slot}.png`); done++; }
    else skipped.push(slot);
  }
  const skipNote = skipped.length ? ` — ⚠ ignorés : ${skipped.join(', ')}` : '';
  statusEl.textContent = `Terminé — ${done} fichiers + portrait${skipNote}.`;
  $('viewer-status').textContent = statusEl.textContent;
}

function downloadBlob(blob, filename) {
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  // Revoke after a tick so the browser has time to start the download
  setTimeout(() => URL.revokeObjectURL(a.href), 100);
}

// ── Helpers ────────────────────────────────────────────────────

const ELEM_COLORS = {
  'Feu':        '#e25822',
  'Eau':        '#2196f3',
  'Glace':      '#b0e0e6',
  'Electrique': '#ffd600',
  'Plante':     '#4caf50',
  'Sol':        '#8d6e63',
  'Roche':      '#9e9e9e',
  'Vent':       '#b0bec5',
  'Nuee':       '#8bc34a',  // same dir as Insecte
  'Insecte':    '#8bc34a',
  'Psy':        '#9c27b0',
  'Tenebres':   '#37474f',
  'Ténèbres':   '#37474f',
  'Fee':        '#f48fb1',
  'Fée':        '#f48fb1',
  'Poison':     '#76ff03',
  'Spectre':    '#78909c',
  'Gravite':    '#5c6bc0',
  'Gravité':    '#5c6bc0',
  'Combat':     '#ef5350',
  'Normal':     '#bdbdbd',
};

function getElemColor(element) {
  return ELEM_COLORS[element] ?? '#888';
}

// ── Create panel ───────────────────────────────────────────────

function showCreatePanel(char = null) {
  editingChar = char;
  $('create-title').textContent = char ? `Modifier — ${char.nom}` : 'Nouveau personnage';

  const c = char ?? {};
  $('f-nom').value          = c.nom ?? '';
  $('f-element').value      = c.element ?? 'Feu';
  $('f-element2').value     = c.element2 ?? '';
  $('f-classe').value       = c.classe ?? 'Capteur';
  $('f-faction').value      = c.faction ?? 'Empire';
  $('f-espece').value       = c.espece ?? '';
  $('f-region').value       = c.region ?? '';
  $('f-physique').value     = c.description_physique ?? '';
  $('f-personnalite').value = c.description_personnalite ?? '';
  $('f-lore').value         = c.position_lore ?? '';
  $('f-combat').value       = c.style_combat ?? '';
  $('f-classe-mod').value   = c.modifications_classe ?? '';

  renderCreateAnimButtons(createViewer?.getAnimationNames() ?? []);

  $('empty-state').hidden = true;
  $('detail').hidden = true;
  $('create-panel').hidden = false;
}

function hideCreatePanel() {
  $('create-panel').hidden = true;
  if (activeChar) {
    $('detail').hidden = false;
  } else {
    $('empty-state').hidden = false;
  }
  editingChar = null;
}

function toSlug(str) {
  return str.toLowerCase()
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function saveNewChar() {
  const nom = $('f-nom').value.trim();
  if (!nom) { alert('Le nom est obligatoire.'); return; }

  const slug = toSlug(nom);

  const elem = $('f-element').value;
  const elemSlug = ELEM_SLUG[elem] ?? 'normal';
  const nextId = Math.max(0, ...allChars.map(c => c.id)) + 1;
  const id = editingChar?.id ?? nextId;
  const paddedId = String(id).padStart(3, '0');
  const folder = `${elemSlug}/${paddedId}-${slug}`;

  const char = {
    id,
    nom,
    element: elem,
    element2: $('f-element2').value || null,
    classe: $('f-classe').value,
    espece: $('f-espece').value.trim(),
    region: $('f-region').value.trim(),
    faction: $('f-faction').value,
    description_physique:      $('f-physique').value.trim(),
    description_personnalite:  $('f-personnalite').value.trim(),
    position_lore:             $('f-lore').value.trim(),
    style_combat:              $('f-combat').value.trim(),
    modifications_classe:      $('f-classe-mod').value.trim(),
    folder,
    assets: buildAssetPaths(paddedId, slug),
  };

  if (editingChar) {
    const idx = allChars.findIndex(c => c.id === editingChar.id);
    if (idx >= 0) allChars[idx] = char;
  } else {
    allChars.push(char);
  }

  applyFilters();
  selectChar(char);
  hideCreatePanel();

  // Toast + optional JSON download
  const isEdit = !!editingChar;
  const json = JSON.stringify(allChars, null, 2);
  const jsonBlob = new Blob([json], { type: 'application/json' });
  const jsonUrl  = URL.createObjectURL(jsonBlob);

  const toast = document.createElement('div');
  toast.style.cssText = `position:fixed;bottom:24px;right:24px;background:var(--accent);
    color:#fff;padding:10px 18px;border-radius:8px;font-size:13px;font-weight:600;
    z-index:300;box-shadow:0 4px 16px #0006;animation:toastIn 0.2s ease;
    display:flex;align-items:center;gap:12px`;
  toast.textContent = isEdit ? `"${nom}" mis à jour.` : `"${nom}" ajouté.`;
  const dl = document.createElement('a');
  dl.textContent = '↓ characters.json';
  dl.href = jsonUrl; dl.download = 'characters.json';
  dl.style.cssText = 'color:#fff;opacity:0.75;font-weight:400;text-decoration:underline;cursor:pointer';
  toast.appendChild(dl);
  document.body.appendChild(toast);
  setTimeout(() => { toast.remove(); URL.revokeObjectURL(jsonUrl); }, 5000);
}

function buildAssetPaths(paddedId, slug) {
  const base = `characters/${paddedId}-${slug}`;
  return {
    portrait: `${base}/portrait.png`,
    idle:     `${base}/idle.png`,
    walk:     `${base}/walk.png`,
    run:      `${base}/run.png`,
    jump:     `${base}/jump.png`,
    swim:     `${base}/swim.png`,
    fly:      `${base}/fly.png`,
    attack: Array.from({ length: 10 }, (_, i) =>
      `${base}/attack-${String(i+1).padStart(2,'0')}.png`
    ),
    hurt:      `${base}/hurt.png`,
    die:       `${base}/die.png`,
    model_glb: `${base}/model.glb`,
  };
}

// Bug 7 fix: removed createViewer.stopAnimation?.() call.
// The create viewer also auto-plays its first animation on load.
function renderCreateAnimButtons(animNames) {
  renderAnimButtons('create-anim-buttons', animNames, createViewer);
  // Do NOT call createViewer.stopAnimation() here.
  refreshAnimBrowser('create-anim-browser-list', 'create-anim-browser', createViewer, createBankClips);
}

function exportCreateSpritesheet() {
  if (!createViewer?.hasModel()) { alert('Charge un modèle GLB d\'abord.'); return; }
  const nom = $('f-nom').value.trim() || 'nouveau-personnage';
  openExportModal(createViewer, nom);
}

// ── Shared animation bank ──────────────────────────────────────

// Feature: after all Meshy clips are loaded, auto-assign to the current viewer
// if a model is already loaded (handles the case where model loaded before bank).
async function loadMeshyAnimBank() {
  try {
    const res = await fetch('meshy-anims/manifest.json');
    if (!res.ok) return;
    const manifest = await res.json(); // [{ name, file, animName }]
    for (const { file, name } of manifest) {
      try {
        const r = await fetch(`meshy-anims/${file}`);
        if (!r.ok) { console.warn(`[MeshyBank] ${file} → HTTP ${r.status}`); continue; }
        const buf = await r.arrayBuffer();
        const url = URL.createObjectURL(new Blob([buf], { type: 'model/gltf-binary' }));
        const clips = await GLBViewer.loadGlbClips(url).catch(err => { console.warn(`[MeshyBank] Failed to parse ${file}:`, err); return []; });
        URL.revokeObjectURL(url);
        if (!clips.length) continue;
        // Rename from "Armature|Idle|baselayer" to friendly slug
        clips.forEach(clip => { clip.name = name; });
        meshyBankClips.push(...clips);
      } catch (err) { console.warn(`[MeshyBank] Error loading ${file}:`, err); }
    }

    // After all clips loaded: auto-assign to current viewer if model is ready.
    // (If the model wasn't loaded yet, checkAndLoadGlb will call this after load.)
    if (viewer?.hasModel()) {
      autoAssignMeshyToViewer(viewer, 'anim-buttons');
    }
  } catch { /* no meshy bank yet */ }
}

async function loadAnimBank() {
  try {
    const res = await fetch('anim-bank/manifest.json');
    if (!res.ok) return;
    const manifest = await res.json(); // [{ name, file }]
    const clips = await Promise.all(
      manifest.map(async ({ file }) => {
        try {
          const r = await fetch(`anim-bank/${file}`);
          if (!r.ok) return null;
          return GLBViewer.clipFromJSON(await r.json());
        } catch { return null; }
      })
    );
    sharedBankClips = clips.filter(Boolean);
  } catch { /* no bank yet — normal first run */ }
}

async function saveAnimsToBank(viewerInst, statusId) {
  const statusEl = $(statusId);
  const exports = viewerInst.exportModelClipsJSON();
  if (!exports.length) {
    if (statusEl) statusEl.textContent = '⚠ Aucune animation à sauvegarder';
    return;
  }
  if (statusEl) statusEl.textContent = `Sauvegarde de ${exports.length} animation(s)…`;

  const newEntries = [];
  for (const { name, json } of exports) {
    const filename = name.replace(/[^a-z0-9_\-]/gi, '_') + '.json';
    try {
      const res = await fetch('/api/save-file', {
        method: 'POST',
        headers: { 'X-File-Path': `characters/anim-bank/${filename}`, 'Content-Type': 'application/json' },
        body: JSON.stringify(json),
      });
      if (res.ok) newEntries.push({ name, file: filename });
    } catch (err) {
      console.error('[AnimBank] save error:', name, err);
    }
  }

  // Merge with existing manifest
  let manifest = [];
  try {
    const r = await fetch('anim-bank/manifest.json');
    if (r.ok) manifest = await r.json();
  } catch {}
  for (const entry of newEntries) {
    if (!manifest.find(e => e.file === entry.file)) manifest.push(entry);
  }

  await fetch('/api/save-file', {
    method: 'POST',
    headers: { 'X-File-Path': 'characters/anim-bank/manifest.json', 'Content-Type': 'application/json' },
    body: JSON.stringify(manifest),
  });

  await loadAnimBank();
  if (statusEl) statusEl.textContent = `✓ ${newEntries.length} anim. sauvegardée(s)`;
}

// ── Boot ───────────────────────────────────────────────────────
init();
