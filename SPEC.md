# SPEC — Character Bank : Analyse Fonctionnelle
> Version 2.0 · Avril 2026 · Remplace la version précédente

---

## 1. Contexte produit

Le Character Bank est un outil de production interne pour le projet MOBA/RPG tactique isométrique. Son rôle est de centraliser la gestion des personnages jouables (22+ espèces, 13 classes, 4 factions, 18 éléments), de permettre l'assignment d'animations sur chaque personnage, et d'exporter les spritesheets finales vers le moteur Phaser.

Il ne s'agit pas d'un outil joueur : c'est un pipeline de production d'assets, accessible via navigateur, sans étape de build, servi par Vite en développement.

---

## 2. Architecture technique existante

### 2.1 Stack

| Couche | Technologie |
|---|---|
| Rendu 3D navigateur | Three.js 0.165 (CDN, import map) |
| Format personnage | GLB / GLTF (mesh + armature + animations) |
| Formats animations sources | GLB, FBX (RPG Character Mecanim), BVH (Bandai, CMU) |
| UI character bank | Vanilla JS ES modules (app.js, viewer.js) |
| Serveur dev | Vite (middleware `/api/save-file` pour persistance) |
| Pipeline batch | Python 3 (asyncio, aiohttp, sqlite3) + Meshy AI v2 |
| Rendu headless optionnel | Blender 3.6+ (bpy, stage2_render_sprites.py) |
| Moteur jeu | Phaser 3 + TypeScript (src/) — consommateur final des spritesheets |

### 2.2 Fichiers clés

```
public/characters/
  index.html          — point d'entrée UI (aucun bundler)
  app.js              — logique UI : liste, filtres, picker, export
  viewer.js           — GLBViewer (Three.js) : chargement, retargeting, capture
  styles.css          — thème sombre, layout sidebar/main
  characters.json     — registre de tous les personnages (source de vérité)
  meshy-anims/        — 40 GLBs d'animations Meshy natives (~50 KB chacun)
    manifest.json     — mapping nom friendly → fichier
  anim-bank/          — animations sauvegardées (JSON Three.js AnimationClip)
    manifest.json
  anim-library/       — bibliothèque FBX/BVH par slot (RPG Character Mecanim, Bandai, CMU)
    manifest.json     — mapping slot → [fichiers]
    idle/             — ~45 fichiers FBX/BVH
    walk/             — ~55 fichiers FBX/BVH
    run/              — ~45 fichiers FBX/BVH
    attack-01..04/    — fichiers FBX/BVH par slot combat
    hurt/, die/, jump/

scripts/pipeline/
  meshy_pipeline.py   — génération GLB via Meshy AI v2, polling, download
  stage2_render_sprites.py  — rendu Blender headless → spritesheets
  run_pipeline.py     — orchestrateur complet
  pipeline.db         — SQLite : état par personnage (pending/generating/done/error)
```

---

## 3. Fonctionnalités existantes (ce qui fonctionne)

### 3.1 GLBViewer — viewer.js

**Chargement de modèles**
- Chargement GLB/GLTF via URL ou File object (drag & drop ou file picker)
- Auto-sauvegarde vers `public/characters/{slug}/model.glb` via `/api/save-file` quand un personnage est actif
- Auto-chargement du GLB au HEAD request (test d'existence sans 404)
- Dispose complet des geometries/materials/textures pour libérer la VRAM

**Camera isométrique**
- Caméra orthographique, élévation arctangente true-isometric (arctan(1/√2) ≈ 35.26°)
- 4 directions : SE (45°), SW (135°), NW (225°), NE (315°) — convention blocks_1.png
- OrbitControls activé (zoom 0.5x–3x, pas de pan) pour inspection manuelle
- `setDirection(dir)` pour positionnement programmatique

**Retargeting d'animations — 3 formats supportés**

| Format source | Stratégie de retargeting |
|---|---|
| GLB Meshy natif | Strips `mixamorig:` prefix, renomme `.bones[Name].prop` → `Name.prop`, supprime position/scale |
| FBX RPG Character Mecanim (B_*) | Map statique B_Pelvis→Hips, B_Spine→Spine, etc. (21 os) |
| BVH Bandai Namco (X-up, ZXY Euler) | Correction axiale Q_meshy = R_rest_inv × Q_bvh × R_rest, par os |
| BVH CMU Motion Capture (Y-up) | Renommage seul, pas de correction d'axe |

La logique est entièrement en JavaScript côté navigateur — pas de dépendance serveur pour le retargeting.

**Slots d'animation (19 slots)**
```
idle, walk, run, jump, swim, fly,
attack-01 à attack-10,
hurt, die, portrait
```
Chaque slot peut recevoir un clip de n'importe quelle source (modèle, banque Meshy, banque sauvegardée, bibliothèque FBX/BVH). La priorité à la lecture est : slot explicitement assigné > auto-match par nom.

**Capture et export spritesheet**
- `captureAnimation4Dir(name, 8, 64)` : PNG 512×256, 8 frames × 4 directions isométriques
- `capturePortrait(512)` : PNG 512×512, vue SE, cadrage tête
- Rendu interne à 4× (256px), downscale nearest-neighbour vers 64px (pixel art)
- `exportAllSlots()` : retourne `{portrait, idle, run, …}` en base64
- Export déclenchable par slot via modal de sélection

**Banques d'animations**
- Banque Meshy : 40 GLBs chargés en tâche de fond au démarrage (séquentiel, sans bloquer l'UI)
- Banque sauvegardée (`anim-bank/`) : AnimationClips sérialisés en JSON Three.js, chargés au démarrage
- Bibliothèque FBX/BVH (`anim-library/`) : fichiers chargés à la demande depuis le picker

### 3.2 Interface UI — app.js

**Liste de personnages**
- Chargement `characters.json` au démarrage
- Filtres cumulatifs : recherche texte, élément, classe, faction, espèce
- Compteur `N / total personnages`
- Point coloré par élément (18 couleurs)

**Fiche personnage**
- Affichage : nom, élément(s), classe, espèce, région, faction
- Lore : description physique, personnalité, position lore, style combat, modifications classe
- Grille d'assets : 19 slots (portrait + animations + model.glb) avec vérification d'existence par HEAD request et indicateur ✓/○

**Viewer intégré**
- Canvas Three.js dans la fiche
- Drag & drop GLB/FBX/BVH directement sur le viewer (modal de choix si un modèle est déjà chargé)
- Boutons : Stop, Charger GLB, Charger Anims, Sauvegarder en banque, Exporter

**Rows de slots d'animation**
- Une ligne par slot (hors portrait)
- Statut visuel : non assigné (gris) / auto-match (bleu) / assigné explicitement (vert)
- Boutons : Choisir (ouvre le picker) / ▶ (joue le slot)
- Drag & drop d'un fichier directement sur la row d'un slot

**Picker d'animation (modal)**
- 4 onglets : Modèle / Banque Meshy / Sauvegardées / BVH-FBX
- Recherche textuelle dans chaque onglet
- Bouton Aperçu (joue sans assigner) + bouton Assigner
- Indicateur de l'animation couramment assignée

**Browser d'animations**
- Panel latéral dans le viewer
- Sections : Animations du modèle / Banque chargée / Anims sauvegardées / Banque Meshy
- Par clip : nom, bouton ▶, select slot, bouton OK (assign)

**Formulaire de création / édition**
- Viewer dédié (`create-canvas`) avec mêmes fonctionnalités
- Champs : nom, élément 1+2, classe, faction, espèce, région, 5 textes lore
- Génération automatique du slug et des chemins d'assets
- Sauvegarde locale (toast + lien download du `characters.json` mis à jour)
- Pas de persistance serveur du JSON (download manuel requis)

### 3.3 Pipeline Python — scripts/pipeline/

**meshy_pipeline.py**
- Mode single (`--char SLUG`), batch (`--all`), status (`--status`)
- Flags : `--glb PATH` (bypass Meshy), `--skip-meshy` (GLB déjà présent), `--dry-run`
- Génération Meshy v2 : preview (~$0.50) + refine (~$2.00) = ~$2.50/personnage
- Polling toutes les 15s, timeout 30min par étape
- SQLite `pipeline.db` : état par personnage (pending / generating / glb_ready / rendering / done / error)
- Ledger de coûts dans la DB
- Batch séquentiel (rate limits Meshy agressifs)
- Coût estimé total : ~$585 pour 234 personnages

**stage2_render_sprites.py (Blender headless)**
- Cycles renderer, 64 samples, dénoising
- Éclairage 3 points (key, fill, rim)
- Rendu 256px interne → Pillow downscale → 512×256 PNG par slot
- Alternative navigateur : `_captureClip4Dir` dans viewer.js (même résultat, sans Blender)

---

## 4. Axes d'amélioration — Analyse prioritaire

Notation : **Impact** (1–5) × **Faisabilité** (1–5) × **Urgence** (1–5) → Score composite

---

### AXE 1 — Pipeline export automatisé (spritesheet → engine Phaser)
**Priorité : CRITIQUE**
Score : Impact 5 × Faisabilité 4 × Urgence 5 = **100**

**Problème actuel**
L'export génère des fichiers PNG téléchargés dans le dossier "Téléchargements" du navigateur. Aucun mécanisme ne les place automatiquement dans `public/characters/{slug}/`. L'utilisateur doit déplacer chaque fichier manuellement (19 fichiers × N personnages). La grille d'assets dans la fiche reste à ○ même après export.

**Solution cible**
- Modifier `/api/save-file` pour accepter les spritesheets PNG (pas seulement les GLB)
- Dans `runExport()`, appeler `/api/save-file` avec le chemin canonique (`characters/{slug}/{slot}.png`) en plus du download navigateur
- Ajouter un bouton "Export + Sauvegarder" distinct du download local
- Rafraîchir la grille d'assets après export réussi

**Impact**
Déblocage complet du pipeline : chaque export devient immédiatement disponible pour le moteur Phaser sans intervention manuelle.

---

### AXE 2 — Performance chargement des 40 GLBs Meshy au démarrage
**Priorité : HAUTE**
Score : Impact 4 × Faisabilité 5 × Urgence 4 = **80**

**Problème actuel**
`loadMeshyAnimBank()` charge 40 GLBs séquentiellement au démarrage, même si l'utilisateur n'en a pas besoin immédiatement. Chaque GLB contient mesh + textures (extractibles mais consommés quand même). La banque Meshy n'est consultée que depuis le picker (onglet "Banque Meshy"). Pendant le chargement, l'onglet affiche "Banque Meshy en cours de chargement…" indéfiniment si la connexion est lente.

**Solutions cibles**
1. **Lazy loading** : ne charger les GLBs Meshy qu'à la première ouverture de l'onglet "Banque Meshy" dans le picker (pas au démarrage)
2. **Pré-extraction offline** : convertir les 40 GLBs en JSON Three.js AnimationClip (comme `anim-bank/`) via un script Node.js ponctuel — divise les requêtes réseau par ~20 (JSON vs GLB)
3. **Chargement parallèle avec pool limité** : si lazy loading adopté, charger par lots de 5 avec `Promise.allSettled()` plutôt que séquentiellement

**Impact**
Démarrage quasi-instantané. Actuellement le démarrage charge ~2 MB de données inutiles si l'utilisateur consulte uniquement la fiche d'un personnage.

---

### AXE 3 — Validation automatique des animations (détection de déformations)
**Priorité : HAUTE**
Score : Impact 4 × Faisabilité 3 × Urgence 4 = **48**

**Problème actuel**
Le retargeting BVH/FBX peut produire des déformations silencieuses (bras en T-pose inversée, membres en hyperextension) qui ne sont détectables qu'à l'oeil en regardant le viewer. Aucun signal automatique n'existe. Avec 40 animations × N personnages, la validation manuelle est irréaliste.

**Métriques de validation à implémenter**
1. **Bounding box check** : après chaque frame de l'animation, vérifier que la bounding box du mesh ne dépasse pas 3× la bounding box T-pose — signale les members étirés à l'infini (symptôme classique de scale track non supprimé)
2. **Symétrie heuristique** : comparer les positions monde de LeftHand et RightHand — si l'écart Y dépasse 2× la hauteur du personnage sur plus de 30% des frames, l'animation est suspecte
3. **Continuité des tracks** : détecter les sauts de quaternion > 90° entre frames consécutives (souvent causés par une mauvaise correction d'axe BVH)

**UX cible**
- Indicateur par slot dans la row : ✓ (valide) / ⚠ (suspect) / ✗ (déformé)
- Déclenchement automatique après assignment ou après chargement d'un clip
- Console log détaillé pour debug

---

### AXE 4 — Gestion des versions d'animations (rollback)
**Priorité : MOYENNE**
Score : Impact 3 × Faisabilité 4 × Urgence 3 = **36**

**Problème actuel**
`saveAnimsToBank()` écrase silencieusement le fichier existant dans `anim-bank/` si le nom est identique. Le manifest est mis à jour mais sans historique. Si une nouvelle version d'une animation est buggée, il n'est pas possible de revenir à la précédente sans intervention manuelle sur le filesystem.

**Solution cible**
1. **Versionning par timestamp** : lors de la sauvegarde, nommer les fichiers `{name}_{timestamp}.json` et conserver les N dernières versions (configurable, défaut 3)
2. **Manifest enrichi** : stocker `{ name, file, savedAt, version }` dans le manifest
3. **UI rollback** : dans le picker onglet "Sauvegardées", afficher les versions disponibles par clip avec date, bouton "Restaurer cette version"
4. **Sauvegarde avant écrasement** : si un fichier de même nom existe, le renommer automatiquement `{name}_backup_{timestamp}.json` avant d'écraser

---

### AXE 5 — Retargeting inter-squelettes (personnages non-bipèdes)
**Priorité : MOYENNE**
Score : Impact 4 × Faisabilité 2 × Urgence 3 = **24**

**Problème actuel**
Le retargeting actuel suppose un squelette humanoïde standard (Mixamo/Meshy, 21 os). Les personnages élémentaires non-bipèdes (Insecte/Nuée, Spectre, Gravité) peuvent avoir des squelettes radicalement différents. Le retargeting par renommage d'os ne fonctionne que si les noms correspondent — sinon, zéro tracks, animation vide.

**Solutions envisagées**
1. **Mapping par profil squelette** : détecter le squelette du modèle chargé (compter les os, identifier les os racines) et choisir le bon mapping parmi un catalogue extensible
2. **Retargeting partiel tolérant** : si moins de 50% des os matchent, appliquer uniquement les os connus et laisser les autres en bind pose (actuellement : clip rejeté si 0 track)
3. **Outil de mapping manuel** : UI pour créer un mapping os-source → os-cible pour un modèle spécifique, persisté en JSON dans le dossier du personnage
4. **`SkeletonUtils.retargetClip`** : Three.js fournit cette utilitaire mais requiert que les deux squelettes soient dans la scene simultanément — intégrable mais lourd

**Contrainte** : cette fonctionnalité est bloquée par la disponibilité des modèles 3D non-bipèdes, qui n'existent pas encore. La priorité d'implémentation est donc différée au moment où le premier personnage non-humanoidde sera produit.

---

### AXE 6 — Support multi-personnages simultanés
**Priorité : BASSE**
Score : Impact 3 × Faisabilité 3 × Urgence 2 = **18**

**Problème actuel**
Un seul viewer est actif à la fois (viewer principal pour la fiche, createViewer pour le formulaire). Il n'est pas possible de comparer deux personnages côte à côte avec leurs animations, ni de valider la cohérence visuelle d'un groupe (tailles relatives, lisibilité ensemble).

**Solution cible**
- Mode "Comparaison" : layout 2 colonnes avec deux canvas Three.js indépendants (deux instances GLBViewer)
- Synchronisation de l'animation : un slider de temps partagé qui fait avancer les deux mixers en parallèle
- Synchronisation de la direction : les deux cameras pivotent ensemble

**Complexité principale** : duplication des instances WebGL (chaque GLBViewer crée son propre renderer) — impact mémoire GPU à surveiller. Solution alternative : un seul renderer avec deux viewports (scissor/viewport API Three.js).

---

### AXE 7 — UI/UX sélection animation — Améliorations ciblées
**Priorité : BASSE–MOYENNE**
Score : Impact 3 × Faisabilité 5 × Urgence 2 = **30**

**Problèmes actuels**

| Problème | Impact | Solution |
|---|---|---|
| La banque Meshy charge en tâche de fond sans progression visible dans le picker | Confusion UX ("aucun résultat" → puis résultats apparaissent) | Spinner avec compte `X/40 chargés` dans l'onglet Meshy |
| Le picker ferme après chaque assignment (impossible d'assigner plusieurs slots en série) | Friction pour un travail batch | Option "Ne pas fermer après assignation" |
| Aucune prévisualisation thumbnail par clip | Impossible de choisir sans preview sonore | Capture frame 0 en 32×32 à l'assignation, affichée dans la row |
| Les slots attack-01 à attack-10 partagent le même pool dans le picker lib | Les attaques spéciales sont noyées dans les attaques basiques | Grouper par famille dans le picker (kicks / casts / rolls) |
| Pas de raccourci clavier dans le picker | Ralentit le workflow | Flèches ↑↓ pour naviguer, Espace pour preview, Entrée pour assigner |

---

## 5. Lacunes critiques non couvertes par les axes ci-dessus

### 5.1 Persistance de `characters.json`
La modification d'un personnage (création ou édition) est sauvegardée **uniquement en mémoire**. Le JSON mis à jour est proposé en download via un toast éphémère. Si l'utilisateur oublie de le télécharger, les modifications sont perdues au rechargement.

**Solution immédiate** : ajouter un endpoint `/api/save-file` call pour `characters/characters.json` dans `saveNewChar()`, en miroir de ce qui existe pour les GLB et les animations. Coût d'implémentation : <1h.

### 5.2 `walk` absent des slots dans `exportAllSlots()`
`exportAllSlots()` dans viewer.js exporte : `idle, run, swim, fly, attack-01..10, hurt, die`. Le slot `walk` est absent de cette liste alors qu'il est présent dans `ANIMATION_SLOTS` et dans les chemins d'assets (`characters.json`). Bug silencieux.

### 5.3 Absence de la connexion entre l'asset `walk` et la structure `characters.json`
`buildAssetPaths()` dans app.js génère un path `walk` dans les assets, mais les assets existants dans `characters.json` pour les premiers personnages ne contiennent pas de clé `walk` (ils ont `idle, run, swim, fly` directement). Incohérence de schema entre les anciens et nouveaux personnages.

### 5.4 Le `render_sprites.js` est manquant
`meshy_pipeline.py` appelle `scripts/pipeline/render_sprites.js` (Node.js) mais ce fichier n'existe pas. Le pipeline Python s'arrête proprement (`[WARN] render_sprites.js not found`) mais la phase render est complètement désactivée. Les spritesheets ne sont générables qu'en mode navigateur.

### 5.5 Pas de connexion entre les assignments de slots et le moteur Phaser
Le moteur Phaser (`src/engine/animation-manager.ts`) crée des animations depuis des spritesheet via `generateFrameNumbers()`. Il n'existe aucun mapping automatique entre les paths d'assets dans `characters.json` et le chargement dans Phaser. Cette connexion doit être construite manuellement dans `src/game.ts` ou via un loader dédié.

---

## 6. Synthèse des priorités

| Rang | Axe | Score | Effort estimé |
|---|---|---|---|
| 1 | Export auto vers public/ (Axe 1) | 100 | 2–4h |
| 2 | Persistance characters.json (5.1) | Critique | <1h |
| 3 | Fix bug walk manquant dans export (5.2) | Critique | 15min |
| 4 | Performance chargement Meshy (Axe 2) | 80 | 4–8h |
| 5 | Validation animations (Axe 3) | 48 | 1–2 jours |
| 6 | UI/UX picker — améliorations ciblées (Axe 7) | 30 | 1 jour |
| 7 | Versioning animations (Axe 4) | 36 | 1–2 jours |
| 8 | Connexion Phaser loader (5.5) | Bloquant pour le jeu | 1–3 jours |
| 9 | render_sprites.js Node (5.4) | Moyen | 2–4 jours |
| 10 | Multi-personnages simultanés (Axe 6) | 18 | 3–5 jours |
| 11 | Retargeting non-bipèdes (Axe 5) | 24 | 5–10 jours |

---

## 7. Inventaire de l'existant au 26 avril 2026

| Ressource | Quantité | État |
|---|---|---|
| Personnages dans characters.json | 234+ | Données lore complètes, assets visuels manquants |
| GLBs modèles produits | 0 (pipeline non exécuté) | En attente clé API Meshy |
| Animations banque Meshy | 40 GLBs | Présents, chargés au démarrage |
| Animations banque sauvegardée | 2 clips | Armature\|ForwardRight_Run, Armature\|running |
| Animations bibliothèque FBX/BVH | ~150 fichiers | idle (45), walk (55), run (45), attack-01..04, hurt, die |
| Spritesheets exportées | 0 | Aucun GLB source disponible |
| Moteur Phaser | Opérationnel | AnimationManager fonctionne, pas de chargement personnage |
