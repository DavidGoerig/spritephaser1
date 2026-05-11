/**
 * GLBViewer — Three.js isometric character viewer
 *
 * - Isometric camera (45° elevation, 45° azimuth)
 * - Loads GLB/GLTF models
 * - Plays animations from the model OR from a separate animation bank GLB
 * - Captures frames for spritesheet export
 * - Pixel filter via canvas post-processing
 */

import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// Common root-bone names across rigs — used as fallback when no model is available.
// Meshy/Mixamo → "Hips", Blender default → "Root", some pipelines → "Pelvis"/"Hips_01".
const ROOT_BONE_CANDIDATES = new Set(['Hips', 'Root', 'Pelvis', 'Hips_01', 'joint_root']);

// Strip non-root translation + all scale channels from a set of animation clips.
// modelScene: the Three.js scene — inspected to find the actual root bone name.
// When null, any bone whose name is in ROOT_BONE_CANDIDATES is treated as root.
// ALL scale tracks are always removed (they are skeleton-specific and deform other models).
function stripTranslations(clips, modelScene) {
  // Resolve root bone name from the live scene graph when available.
  let rootBoneName = null;
  if (modelScene) {
    modelScene.traverse(obj => {
      if (!rootBoneName && obj.isBone && !obj.parent?.isBone) {
        rootBoneName = obj.name;
      }
    });
  }

  return clips.map(clip => {
    const tracks = clip.tracks.filter(t => {
      const dot  = t.name.lastIndexOf('.');
      const prop = dot >= 0 ? t.name.slice(dot + 1) : '';
      if (prop === 'scale') return false;
      if (prop === 'position') {
        // Normalise away .bones[] wrapper and mixamorig: prefix before comparing.
        const rawPart = t.name.slice(0, dot);
        const boneName = (rawPart.match(/^\.bones\[([^\]]+)\]$/)?.[1] ?? rawPart)
          .replace(/^mixamorig:/i, '');
        // With a live model: keep only the detected root bone's position track.
        // Without a model: keep any track whose bone name is a known root candidate.
        return rootBoneName
          ? boneName === rootBoneName
          : ROOT_BONE_CANDIDATES.has(boneName);
      }
      return true;
    });
    return new THREE.AnimationClip(clip.name, clip.duration, tracks);
  });
}

export class GLBViewer {
  constructor(canvas) {
    this.canvas = canvas;
    this.onStatus = () => {};
    this._animNames = [];
    this._mixer = null;
    this._activeAction = null;
    this._model = null;
    this._animClips = [];   // clips from the model or from the animation bank
    this._modelClips = [];  // clips embedded in the loaded GLB model
    this._loadGen   = 0;    // incremented on each loadUrl; stale callbacks compare against this
    this._weaponRight    = null; // Object3D parented to RightHand bone
    this._weaponLeft     = null; // Object3D parented to LeftHand bone
    this._weaponRightGen = 0;   // incremented per attachWeapon call; stale loader callbacks bail out
    this._weaponLeftGen  = 0;
    this._pendingWeapons = {};   // { right?: {url,grip}, left?: {url,grip} } — queued while model loads

    this._init();
    this._animate();
  }

  // ── Setup ────────────────────────────────────────────────────

  _init() {
    const canvas = this.canvas;

    // Renderer — no alpha:true to avoid premultiplied-alpha compositing issues
    // that can make the model invisible in certain browser/GPU configurations.
    // Use a solid background colour instead.
    this._renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    this._renderer.setPixelRatio(window.devicePixelRatio);
    this._renderer.setClearColor(0x0d0d14, 1);
    this._renderer.shadowMap.enabled = true;
    this._renderer.outputColorSpace = THREE.SRGBColorSpace;
    // Initial size — use false so we never write inline style that overrides CSS.
    this._renderer.setSize(640, 480, false);

    // Scene
    this._scene = new THREE.Scene();

    // Isometric camera — sized 1:1 initially; _onResize corrects it.
    const d = 3;
    this._camera = new THREE.OrthographicCamera(-d, d, d, -d, 0.01, 100);
    this._setIsometricView();

    // Controls (orbit — user can rotate if needed)
    this._controls = new OrbitControls(this._camera, canvas);
    this._controls.enablePan = false;
    this._controls.minZoom = 0.5;
    this._controls.maxZoom = 3;
    this._controls.target.set(0, 1, 0);
    this._controls.update();

    // Lights
    const ambient = new THREE.AmbientLight(0xffffff, 0.6);
    const dir = new THREE.DirectionalLight(0xffffff, 1.2);
    dir.position.set(5, 10, 5);
    dir.castShadow = true;
    const fill = new THREE.DirectionalLight(0x8888ff, 0.4);
    fill.position.set(-5, 3, -5);
    this._scene.add(ambient, dir, fill);

    // Grid helper
    const grid = new THREE.GridHelper(6, 6, 0x333355, 0x222233);
    this._scene.add(grid);

    // ResizeObserver on the PARENT (viewer-wrap) so we get notified when the
    // panel becomes visible.  Clear any inline style setSize might have left
    // before reading clientWidth/Height so CSS flex layout wins.
    this._resizeObserver = new ResizeObserver(() => this._onResize());
    this._resizeObserver.observe(canvas.parentElement);
    // Trigger once immediately in case the parent is already visible.
    this._onResize();
  }

  _setIsometricView() {
    // True isometric: 45° azimuth, arctan(1/√2) ≈ 35.26° elevation
    const angle = Math.PI / 4;
    const elev  = Math.atan(1 / Math.SQRT2);
    const dist  = 10;
    this._camera.position.set(
      dist * Math.cos(elev) * Math.cos(angle),
      dist * Math.sin(elev),
      dist * Math.cos(elev) * Math.sin(angle)
    );
    this._camera.lookAt(0, 1, 0);
  }

  _onResize() {
    const canvas = this.canvas;
    // Strip any inline style previously set by renderer.setSize(w, h, true) so
    // that CSS flex layout (flex:1; height:100%) can determine the real size.
    canvas.style.width  = '';
    canvas.style.height = '';
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    if (!w || !h) return;
    const aspect = w / h;
    const d = 3;
    this._camera.left   = -d * aspect;
    this._camera.right  =  d * aspect;
    this._camera.top    =  d;
    this._camera.bottom = -d;
    this._camera.updateProjectionMatrix();
    // Pass false so we never write inline styles that fight with CSS.
    this._renderer.setSize(w, h, false);
  }

  // ── Render loop ──────────────────────────────────────────────

  _clock = new THREE.Clock();

  _animate() {
    this._rafId = requestAnimationFrame(() => this._animate());
    const dt = this._clock.getDelta();
    this._mixer?.update(dt);
    this._controls.update();
    this._renderer.render(this._scene, this._camera);
  }

  destroy() {
    cancelAnimationFrame(this._rafId);
    this._resizeObserver?.disconnect();
    this._controls.dispose();
    this._disposeModel();
    this._renderer.dispose();
  }

  // ── Load from File object ────────────────────────────────────

  loadFile(file) {
    const url = URL.createObjectURL(file);
    this.loadUrl(url, names => {
      URL.revokeObjectURL(url);
      if (this.onAnimationsLoaded) this.onAnimationsLoaded(names);
    });
  }

  // ── Load from URL ────────────────────────────────────────────

  loadUrl(url, callback) {
    const gen = ++this._loadGen; // snapshot; stale callbacks bail out early
    this.onStatus('Chargement du modèle…');
    const loader = new GLTFLoader();
    loader.load(
      url,
      (gltf) => {
        if (gen !== this._loadGen) return; // a newer load was started — discard
        this._loadModel(gltf);
        callback?.(this._animNames);
        this.onStatus(`Modèle chargé — ${this._animNames.length} animations`);
      },
      (e) => { if (gen === this._loadGen) this.onStatus(`Chargement : ${Math.round(e.loaded / e.total * 100)}%`); },
      (err) => { if (gen === this._loadGen) this.onStatus(`Erreur : ${err.message ?? err}`); }
    );
  }

  _disposeModel() {
    if (!this._model) return;
    this.detachAllWeapons();
    this._mixer?.stopAllAction();
    this._model.traverse(obj => {
      obj.geometry?.dispose();
      if (Array.isArray(obj.material)) obj.material.forEach(m => m.dispose());
      else obj.material?.dispose();
    });
    this._scene.remove(this._model);
    this._model = null;
  }

  _loadModel(gltf) {
    // Save pending weapons before _disposeModel clears them
    const pendingWeapons = { ...this._pendingWeapons };
    this._disposeModel();

    this._model = gltf.scene;

    // ── Bbox strategy ──────────────────────────────────────────────
    // We always overwrite root position and scale, so reset them first.
    // This makes the bbox computation root-agnostic: whatever the GLTF stored
    // on the root node (scale=0.01 for cm→m, etc.) is irrelevant because we
    // replace it.  Quaternion is preserved — some exporters add a root rotation
    // for coordinate-system conversion and we want to keep that.
    //
    // After normalising the root, we update children's matrixWorld so any
    // intermediate node (e.g. an Armature with scale=100) is correctly reflected
    // in the bounding box.  Without this step those intermediate scales are
    // ignored and the model ends up 100× too large on first render.
    this._model.position.set(0, 0, 0);
    this._model.scale.set(1, 1, 1);
    this._model.updateWorldMatrix(false, true);

    const box = new THREE.Box3().setFromObject(this._model);
    const size = box.getSize(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z);

    if (isFinite(maxDim) && maxDim > 1e-6) {
      const scale = 2 / maxDim;
      this._model.scale.setScalar(scale);
      // Center X/Z, lift feet to Y=0 using the unscaled bounding box.
      const center = box.getCenter(new THREE.Vector3()).multiplyScalar(scale);
      this._model.position.set(
        -center.x,
        -center.y + size.y * scale / 2,
        -center.z
      );
      console.log(`[Viewer] _loadModel: bbox=${size.x.toFixed(2)}×${size.y.toFixed(2)}×${size.z.toFixed(2)} → scale=${scale.toFixed(4)}, pos=(${(-center.x).toFixed(2)}, ${(-center.y + size.y*scale/2).toFixed(2)}, ${(-center.z).toFixed(2)})`);
    } else {
      console.warn('[Viewer] _loadModel: degenerate bounding box — using identity transform.', size);
    }

    this._scene.add(this._model);

    // Disable frustum culling on all meshes: Three.js computes the culling
    // sphere from raw bind-pose geometry, which is often degenerate for Meshy
    // GLBs (vertices stored in bone-local space). Without this, meshes are
    // incorrectly culled and invisible even though the model is in the frustum.
    // Apply to isMesh (superset of isSkinnedMesh) to catch accessories/props.
    this._model.traverse(obj => {
      if (obj.isMesh) {
        obj.frustumCulled = false;
        obj.castShadow    = true;
        obj.receiveShadow = true;
      }
    });

    // Animations — strip non-root translation and scale tracks so the model's
    // own clips don't deform other characters when reused.
    this._modelClips = stripTranslations(gltf.animations ?? [], this._model);
    this._animClips  = [...this._modelClips];
    this._setupMixer();

    // FIX Bug 2: Auto-play first available animation so model is never stuck in T-pose.
    // The viewer should not rely on the caller invoking stopAnimation() or playAnimation().
    if (this._animClips.length > 0) {
      this._activeAction = this._mixer.clipAction(this._animClips[0], this._model);
      this._activeAction.reset().play();
      this.onStatus(`▶ ${this._animClips[0].name}`);
    }

    // Re-attach weapons that were queued before the model finished loading.
    this._pendingWeapons = {};
    for (const [hand, { url, grip }] of Object.entries(pendingWeapons)) {
      this.attachWeapon(url, grip, hand);
    }
  }

  // ── Promise-based loaders (headless/pipeline use) ────────────

  loadModel(url) {
    return new Promise((resolve, reject) => {
      this.loadUrl(url, names => resolve({ animClips: names }));
    });
  }

  loadAnimationBank(url) {
    return new Promise((resolve, reject) => {
      const loader = new GLTFLoader();
      loader.load(
        url,
        (gltf) => {
          this._animClips = gltf.animations;
          this._setupMixer();
          resolve({ animClips: this._animNames });
        },
        null,
        (err) => reject(new Error(err?.message ?? String(err)))
      );
    });
  }

  // ── Load animation bank (separate GLB with just animations) ──

  loadAnimationsFile(file, callback) {
    const url = URL.createObjectURL(file);
    this.onStatus('Chargement de la banque d\'animations…');
    const loader = new GLTFLoader();
    loader.load(
      url,
      (gltf) => {
        URL.revokeObjectURL(url);
        this._animClips = this._retargetClips(gltf.animations);
        this._setupMixer();
        callback?.(this._animNames);
        this.onStatus(`Banque chargée — ${this._animNames.length} animations`);
      },
      null,
      (err) => this.onStatus(`Erreur banque : ${err.message ?? err}`)
    );
  }

  // ── BVH support (CMU Motion Capture) ─────────────────────────
  // CMU BVH bone names are close to Meshy/Mixamo but not identical.
  // This map converts CMU names → Meshy names and drops bones without
  // a Meshy equivalent.  BVHLoader outputs ".bones[name].prop" paths
  // which we normalise to "name.prop" for GLTF/AnimationMixer compat.

  // Bone name mappings: foreign skeleton → Meshy/Mixamo names.
  // Any bone not listed here is silently dropped.

  // ── RPG Character Mecanim FBX rig → Meshy/Mixamo bone mapping ─
  static _FBX_MAP_RPGCHAR = {
    B_Pelvis:     'Hips',
    B_Spine:      'Spine',
    B_Spine2:     'Spine02',
    B_Neck:       'neck',
    B_Head:       'Head',
    B_L_Clavicle: 'LeftShoulder',
    B_L_UpperArm: 'LeftArm',
    B_L_Forearm:  'LeftForeArm',
    B_L_Hand:     'LeftHand',
    B_R_Clavicle: 'RightShoulder',
    B_R_UpperArm: 'RightArm',
    B_R_Forearm:  'RightForeArm',
    B_R_Hand:     'RightHand',
    B_L_Thigh:    'LeftUpLeg',
    B_L_Calf:     'LeftLeg',
    B_L_Foot:     'LeftFoot',
    B_L_Toe0:     'LeftToeBase',
    B_R_Thigh:    'RightUpLeg',
    B_R_Calf:     'RightLeg',
    B_R_Foot:     'RightFoot',
    B_R_Toe0:     'RightToeBase',
  };

  static _BVH_MAPS = {
    // ── Bandai Namco Research Motiondataset ──────────────────────
    bandai: {
      Hips:        'Hips',
      Spine:       'Spine',
      Chest:       'Spine02',
      Neck:        'neck',
      Head:        'Head',
      Shoulder_L:  'LeftShoulder',
      UpperArm_L:  'LeftArm',
      LowerArm_L:  'LeftForeArm',
      Hand_L:      'LeftHand',
      Shoulder_R:  'RightShoulder',
      UpperArm_R:  'RightArm',
      LowerArm_R:  'RightForeArm',
      Hand_R:      'RightHand',
      UpperLeg_L:  'LeftUpLeg',
      LowerLeg_L:  'LeftLeg',
      Foot_L:      'LeftFoot',
      Toes_L:      'LeftToeBase',
      UpperLeg_R:  'RightUpLeg',
      LowerLeg_R:  'RightLeg',
      Foot_R:      'RightFoot',
      Toes_R:      'RightToeBase',
    },
    // ── CMU Motion Capture (ASF/AMC → BVH conversions) ──────────
    cmu: {
      Hips:         'Hips',
      LeftUpLeg:    'LeftUpLeg',
      LeftLeg:      'LeftLeg',
      LeftFoot:     'LeftFoot',
      LeftToeBase:  'LeftToeBase',
      RightUpLeg:   'RightUpLeg',
      RightLeg:     'RightLeg',
      RightFoot:    'RightFoot',
      RightToeBase: 'RightToeBase',
      LowerBack:    'Spine',
      Spine:        'Spine01',
      Spine1:       'Spine02',
      Neck:         'neck',
      Neck1:        'neck',
      Head:         'Head',
      LeftShoulder: 'LeftShoulder',
      LeftArm:      'LeftArm',
      LeftForeArm:  'LeftForeArm',
      LeftHand:     'LeftHand',
      RightShoulder:'RightShoulder',
      RightArm:     'RightArm',
      RightForeArm: 'RightForeArm',
      RightHand:    'RightHand',
    },
  };

  // Extract bone name from track name — supports both:
  //   ".bones[BoneName].property"  (old Three.js BVHLoader format)
  //   "BoneName.property"           (current Three.js BVHLoader / FBX format)
  static _bvhTrackBone(trackName) {
    const m = trackName.match(/^\.bones\[([^\]]+)\]/) || trackName.match(/^([^.\s]+)\./);
    return m ? m[1] : null;
  }

  static _parseBvhTrack(trackName) {
    // Returns { bone, prop } or null
    let m = trackName.match(/^\.bones\[([^\]]+)\](.+)$/);
    if (m) return { bone: m[1], prop: m[2] };
    m = trackName.match(/^([^.\s]+)(\..+)$/);
    if (m) return { bone: m[1], prop: m[2] };
    return null;
  }

  // Auto-detect skeleton format from bone names in the clip
  static _detectBvhMap(clip) {
    const bones = new Set(clip.tracks.map(t => GLBViewer._bvhTrackBone(t.name)).filter(Boolean));
    if (bones.has('UpperArm_L') || bones.has('LowerArm_L')) return GLBViewer._BVH_MAPS.bandai;
    return GLBViewer._BVH_MAPS.cmu; // default fallback
  }

  // ── BVH remap — Bandai X-up skeleton → Meshy/Mixamo Y-up skeleton ────────────
  //
  // Background — why a correction is needed
  // ────────────────────────────────────────
  // Bandai BVH files use an X-up convention: every bone's local +X axis points
  // toward the child joint (offsets are like `OFFSET 15.7 0 0`, never along Y).
  // Rotations are stored as ZXY Euler angles and Three.js BVHLoader converts each
  // frame to a quaternion expressed in that bone's local coordinate frame.
  //
  // Meshy/Mixamo skeletons are Y-up: every bone's +Y axis points to the child.
  // So even at "zero rotation" (identity Euler in BVH), the BVH quaternion still
  // encodes a 90° difference between the two conventions — visible as the large
  // standing-pose rotation that appears in every channel (Hips Z≈87°, etc.).
  //
  // The correction
  // ──────────────
  // Let R_rest be the quaternion that maps the BVH rest frame to the Meshy rest
  // frame. For every Bandai bone (X-up ← → Y-up):
  //
  //   R_rest = Quaternion.setFromEuler( Euler(0, 0, +PI/2) )
  //            ↑ rotates +Y axis to +X axis, i.e. the "standing" bias
  //
  // To strip the baked offset from a BVH quaternion Q_bvh and re-express the
  // MOTION delta in the Meshy (Y-up) local frame:
  //
  //   Q_meshy = R_rest_inv  *  Q_bvh  *  R_rest
  //
  // This is a change-of-basis: it undoes the BVH frame, applies the motion, then
  // re-applies the BVH frame — leaving only the pure animation delta relative to
  // the bind pose, expressed in the Meshy coordinate system.
  //
  // Derivation check: when Q_bvh = R_rest (the "standing still" quaternion):
  //   Q_meshy = R_rest_inv * R_rest * R_rest = identity * R_rest = R_rest
  // Hmm — that would mean idle still has a rotation. We need Q_meshy=identity for
  // the bind-pose frame. The correct formulation when the BVH skeleton's bind pose
  // IS the animation's frame-0 is:
  //
  //   Q_delta_in_bvh_frame  = Q_bvh_bindInv  *  Q_bvh_k
  //   Q_meshy_k             = Q_delta_in_bvh_frame   (if both conventions matched)
  //
  // But because the BVH bind pose itself represents a 90° rotated standing figure
  // relative to Meshy's bind pose, we additionally need the axis correction.
  // The complete formula is therefore:
  //
  //   Q_bvh_bind = frame-0 quaternion of that bone (the "neutral standing" value)
  //   Q_meshy_k  = R_rest_inv * (Q_bvh_bind_inv * Q_bvh_k) * R_rest
  //              = (R_rest_inv * Q_bvh_bind_inv) * Q_bvh_k * R_rest
  //
  // We precompute  C = R_rest_inv * Q_bvh_bind_inv  per bone, then per frame:
  //   Q_meshy = C * Q_bvh_k * R_rest
  //
  // This gives identity at frame-0 AND correct motion in the Meshy Y-up frame.
  //
  // Note: for CMU BVH files the skeleton is already Y-up, so no axis correction
  // is needed — we still strip the frame-0 bias the same way (C = Q_bvh_bind_inv,
  // R_rest = identity).
  //
  _remapBvhClip(clip, name) {
    const map = GLBViewer._detectBvhMap(clip);
    const isBandai = map === GLBViewer._BVH_MAPS.bandai;

    // R_rest: rotation that maps Meshy Y-up rest frame to BVH X-up rest frame.
    // Euler(0,0,+PI/2) rotates +Y → +X, which is the per-bone bias in Bandai BVH.
    // For CMU (already Y-up), R_rest = identity.
    const R_rest     = isBandai
      ? new THREE.Quaternion().setFromEuler(new THREE.Euler(0, 0, Math.PI / 2))
      : new THREE.Quaternion(); // identity
    const R_rest_inv = R_rest.clone().invert();

    // C is the per-frame constant that converts from BVH local frame to Meshy frame.
    // Pure change-of-basis: Q_meshy = R_rest_inv * Q_bvh * R_rest
    // (No frame-0 correction — BVH rotations are already relative to bind = identity.)
    const C = R_rest_inv.clone();

    const seen   = new Set();
    const tracks = [];
    const _q     = new THREE.Quaternion();

    for (const track of clip.tracks) {
      const parsed = GLBViewer._parseBvhTrack(track.name);
      if (!parsed) continue;

      // Drop joint_Root entirely — it is the BVH scene root (6-DOF world transform),
      // has no Meshy counterpart, and carries centimetre-scale position data.
      if (parsed.bone === 'joint_Root') continue;

      // Drop all position and scale tracks — BVH positions are in source-rig units
      // (~cm, completely incompatible with the auto-scaled Meshy model).
      if (parsed.prop === '.position' || parsed.prop === '.scale') continue;

      const meshyBone = map[parsed.bone];
      if (!meshyBone) continue;

      const key = meshyBone + parsed.prop;
      if (seen.has(key)) continue;
      seen.add(key);

      const cloned = track.clone();
      cloned.name  = key;

      // Q_meshy = R_rest_inv * Q_bvh * R_rest  (change-of-basis, per frame)
      if (parsed.prop === '.quaternion') {
        const v = cloned.values;
        for (let i = 0; i < v.length; i += 4) {
          _q.set(v[i], v[i + 1], v[i + 2], v[i + 3]);
          _q.premultiply(C).multiply(R_rest);
          v[i]     = _q.x;
          v[i + 1] = _q.y;
          v[i + 2] = _q.z;
          v[i + 3] = _q.w;
        }
      }

      tracks.push(cloned);
    }

    const out = new THREE.AnimationClip(name, clip.duration, tracks);
    console.log(`[BVH] _remapBvhClip "${name}": ${tracks.length} tracks (isBandai=${isBandai})`);
    return out;
  }

  // ── BVH file loader ───────────────────────────────────────────────────────────
  //
  // Pipeline
  // ────────
  // 1. Load BVH via BVHLoader → result.clip (tracks as ".bones[Name].prop") +
  //    result.skeleton (BVH rig — kept only for debugging, not for retargetClip).
  // 2. Run _remapBvhClip to:
  //    a) Drop joint_Root and all position/scale tracks.
  //    b) Apply per-bone bind-pose removal + X-up→Y-up axis correction.
  //    c) Rename ".bones[BvhBone].quaternion" → "MeshyBone.quaternion".
  // 3. Reset Meshy skeleton to bind pose (skeleton.pose()).
  // 4. Invoke callback with the corrected AnimationClip.
  //
  // Why we skip SkeletonUtils.retargetClip
  // ───────────────────────────────────────
  // retargetClip requires source/target to share a common world frame and
  // matching scale. Bandai BVH is in centimetre scale and X-up, so retargetClip
  // either crashes (joint_Root has no namesMap entry) or produces wildly wrong
  // translations. The local-space correction in _remapBvhClip is the correct
  // approach for this specific skeleton format.
  //
  loadBvhFile(file, callback) {
    import('three/addons/loaders/BVHLoader.js')
      .then(({ BVHLoader }) => {
        const url = URL.createObjectURL(file);
        new BVHLoader().load(
          url,
          (result) => {
            URL.revokeObjectURL(url);
            const clipName = file.name.replace(/\.bvh$/i, '');

            // Log raw track names to aid debugging.
            console.log(
              `[BVH] Loaded "${clipName}": ${result.clip.tracks.length} raw tracks,`,
              result.clip.tracks.slice(0, 6).map(t => t.name)
            );

            // Build the corrected, renamed clip.
            const clip = this._remapBvhClip(result.clip, clipName);

            if (!clip.tracks.length) {
              console.warn(
                '[BVH] No compatible bones found. Raw track names:',
                result.clip.tracks.slice(0, 8).map(t => t.name)
              );
              this.onStatus?.(`BVH : aucun os compatible dans "${file.name}"`);
              return;
            }

            // Reset target skeleton to bind pose so the animation starts clean.
            let skinnedMesh = null;
            this._model?.traverse(o => { if (o.isSkinnedMesh && !skinnedMesh) skinnedMesh = o; });
            skinnedMesh?.skeleton.pose();

            console.log(
              `[BVH] "${clipName}": ${clip.tracks.length} tracks ready.`,
              clip.tracks.slice(0, 4).map(t => t.name)
            );

            callback?.(clip);
          },
          null,
          (err) => this.onStatus?.(`Erreur BVH : ${err.message ?? err}`)
        );
      })
      .catch(err => this.onStatus?.(`BVHLoader indisponible : ${err.message ?? err}`));
  }

  // ── FBX support (RPG Character Mecanim pack) ─────────────────
  // FBX track names are "BoneName.property" (no .bones[] wrapper).
  // We remap B_* → Meshy/Mixamo names and drop unknown bones.

  // ── _remapFbxClip ─────────────────────────────────────────────
  // Simple local-space fallback: renames B_* tracks to Meshy names,
  // strips position/scale. Used when SkeletonUtils.retargetClip is
  // unavailable or when there is no loaded Meshy model to retarget onto.
  _remapFbxClip(clip, map, name) {
    const seen = new Set();
    const tracks = [];
    for (const track of clip.tracks) {
      // Support both "BoneName.prop" and ".bones[BoneName].prop" formats
      const parsed = GLBViewer._parseBvhTrack(track.name);
      if (!parsed) continue;
      const prop = parsed.prop.replace(/^\./, ''); // strip leading dot
      // Position and scale values are in source-rig space → skip both.
      if (prop === 'position' || prop === 'scale') continue;
      const mapped = map[parsed.bone];
      if (!mapped) continue;
      const key = `${mapped}.${prop}`;
      if (seen.has(key)) continue;
      seen.add(key);
      const cloned = track.clone();
      cloned.name = key;
      tracks.push(cloned);
    }
    return new THREE.AnimationClip(name ?? clip.name, clip.duration, tracks);
  }

  loadFbxFile(file, callback) {
    import('three/addons/loaders/FBXLoader.js').then(({ FBXLoader }) => {
      const url = URL.createObjectURL(file);
      new FBXLoader().load(
        url,
        (group) => {
          URL.revokeObjectURL(url);
          const clips = group.animations ?? [];
          if (!clips.length) {
            this.onStatus?.(`FBX : aucune animation dans "${file.name}"`);
            return;
          }
          const clipName = file.name.replace(/\.fbx$/i, '');
          const remapped = clips.map((c, i) => {
            const name = i === 0 ? clipName : `${clipName}_${i}`;
            // Try B_* (RPG Character Mecanim) first
            const via_b = this._remapFbxClip(c, GLBViewer._FBX_MAP_RPGCHAR, name);
            if (via_b.tracks.length > 0) return via_b;
            // Fallback: Mixamo / generic humanoid (strips mixamorig: prefix)
            const [retargeted] = this._retargetClips([c]);
            retargeted.name = name;
            return retargeted;
          }).filter(c => c.tracks.length > 0);
          if (!remapped.length) {
            this.onStatus?.(`FBX : aucun os compatible dans "${file.name}"`);
            return;
          }
          console.log(`[FBX] ${clipName}: ${remapped[0].tracks.length} tracks`, remapped[0].tracks.slice(0,3).map(t=>t.name));
          callback?.(remapped[0], remapped);
          group.traverse(obj => {
            obj.geometry?.dispose();
            if (Array.isArray(obj.material)) obj.material.forEach(m => m.dispose());
            else obj.material?.dispose();
          });
        },
        null,
        (err) => this.onStatus?.(`Erreur FBX : ${err.message ?? err}`)
      );
    }).catch(() => this.onStatus?.('FBXLoader indisponible'));
  }

  // ── _retargetClips ────────────────────────────────────────────
  // Retargets Unity/Mixamo GLB clips onto the loaded Meshy model.
  //
  // Both Meshy and Mixamo share the same skeleton definition, so the
  // only transforms needed are:
  //   1. Strip "mixamorig:" prefix from track names.
  //   2. Rename ".bones[BoneName].prop" → "BoneName.prop" so that
  //      AnimationMixer (rooted at this._model Group) can resolve
  //      tracks by object-name traversal instead of the .bones[] path
  //      that only works when the mixer is rooted at a SkinnedMesh.
  //   3. Drop .position and .scale tracks (source-skeleton units are
  //      incompatible with the Meshy model's auto-scaled local space).
  _retargetClips(clips) {
    if (!clips?.length) return clips;

    // Helper: parse a track name into { bone, prop } regardless of format.
    // Handles:
    //   "mixamorig:BoneName.quaternion"
    //   "BoneName.quaternion"
    //   ".bones[BoneName].quaternion"
    //   ".bones[mixamorig:BoneName].quaternion"
    const parseTrack = (name) => {
      // .bones[...].prop format (produced by SkeletonUtils.retargetClip)
      let m = name.match(/^\.bones\[([^\]]+)\](\..+)$/);
      if (m) return { bone: m[1].replace(/^mixamorig:/i, ''), prop: m[2] };
      // plain "BoneName.prop" (with optional mixamorig: prefix)
      m = name.match(/^([^.\s]+)(\..+)$/);
      if (m) return { bone: m[1].replace(/^mixamorig:/i, ''), prop: m[2] };
      return null;
    };

    return clips.map(clip => {
      const tracks = [];
      for (const track of clip.tracks) {
        const parsed = parseTrack(track.name);
        if (!parsed) continue;

        // Strip the leading dot from prop for suffix checks
        const propSuffix = parsed.prop.replace(/^\./, '');

        // Drop position and scale — source units cause octopus deformation.
        if (propSuffix === 'position' || propSuffix === 'scale') continue;

        const newName = parsed.bone + parsed.prop; // e.g. "LeftArm.quaternion"

        if (newName === track.name) {
          tracks.push(track);
        } else {
          const cloned = track.clone();
          cloned.name = newName;
          tracks.push(cloned);
        }
      }
      return new THREE.AnimationClip(clip.name, clip.duration, tracks);
    });
  }

  _setupMixer() {
    if (!this._model) return;
    this._mixer = new THREE.AnimationMixer(this._model);
    this._animNames = this._animClips.map(c => c.name);
    const bones = [];
    this._model.traverse(obj => { if (obj.isBone) bones.push(obj.name); });
    console.log('[Viewer] Model bones:', bones);
  }

  stopAnimation() {
    if (this._mixer) this._mixer.stopAllAction();
    this._activeAction = null;
    // Reset all bones to bind pose so model stays visible in T-pose
    this._model?.traverse(o => { if (o.isSkinnedMesh) o.skeleton.pose(); });
    this.onStatus('T-pose');
  }

  playClipObject(clip) {
    if (!clip || !this._mixer) {
      console.warn('[Viewer] playClipObject: no clip or no mixer', { clip: !!clip, mixer: !!this._mixer });
      return;
    }
    // Stop all current actions cleanly before switching to avoid a blend-weight
    // gap where no action has weight > 0 (which collapses bones to bind pose).
    this._mixer.stopAllAction();
    this._activeAction = this._mixer.clipAction(clip, this._model);
    this._activeAction.reset().play();
    console.log(`[Viewer] Playing: ${clip.name} (${clip.tracks.length} tracks, ${clip.duration.toFixed(2)}s)`);
    // Log matched bones for debugging
    if (this._model) {
      const modelBones = new Set();
      this._model.traverse(o => { if (o.isBone) modelBones.add(o.name); });
      const trackBones = clip.tracks.map(t => {
        const dot = t.name.lastIndexOf('.');
        return dot >= 0 ? t.name.slice(0, dot) : t.name;
      });
      const matched = trackBones.filter(b => modelBones.has(b));
      if (matched.length === 0 && trackBones.length > 0)
        console.warn(`[Viewer] No bone matches for "${clip.name}" — wrong skeleton? Model bones:`, [...modelBones].slice(0, 8));
      console.log(`[Viewer] Track bones: ${trackBones.length}, matched in model: ${matched.length}/${modelBones.size}`);
    }
    this.onStatus(`▶ ${clip.name}`);
  }

  // ── loadBrowserClips ──────────────────────────────────────────
  // Loads clips from a GLB or FBX for browsing/slot assignment.
  // No side-effects on the model or animation slots.
  //
  // For FBX: delegates to loadFbxFile (SkeletonUtils retarget or remap).
  // For GLB: strips mixamorig: prefix, renames .bones[] tracks, drops
  //          position/scale via _retargetClips, then does a final safety
  //          pass to catch any residual .bones[] paths that _retargetClips
  //          might have left if a clip arrived in an unexpected format.
  loadBrowserClips(file, callback) {
    if (/\.fbx$/i.test(file.name)) {
      this.loadFbxFile(file, (clip, allClips) => callback?.(allClips ?? [clip]));
      return;
    }
    const url = URL.createObjectURL(file);
    const loader = new GLTFLoader();
    loader.load(
      url,
      (gltf) => {
        URL.revokeObjectURL(url);

        // Primary retarget pass (handles mixamorig:, .bones[], position/scale).
        let clips = this._retargetClips(gltf.animations ?? []);

        // Safety pass: any track still using ".bones[BoneName].prop" format
        // would silently fail in AnimationMixer when the mixer is rooted at
        // this._model (a Group).  Rename them now.
        clips = clips.map(clip => {
          const tracks = clip.tracks.map(t => {
            const m = t.name.match(/^\.bones\[([^\]]+)\](\..+)$/);
            if (!m) return t;
            const renamed = t.clone();
            renamed.name = m[1].replace(/^mixamorig:/i, '') + m[2];
            return renamed;
          });
          return new THREE.AnimationClip(clip.name, clip.duration, tracks);
        });

        console.log(`[Browser] ${file.name}: ${clips.length} clip(s)`,
          clips[0]?.tracks.slice(0, 3).map(t => t.name));

        callback?.(clips);
        this.onStatus(`${clips.length} animation(s) chargée(s)`);
      },
      null,
      (err) => this.onStatus(`Erreur : ${err.message ?? err}`)
    );
  }

  assignClipToSlot(clip, slotName) {
    this._slotClips[slotName] = clip;
  }

  // ── Playback ─────────────────────────────────────────────────

  playAnimation(name) {
    if (!this._mixer) { console.warn('[Viewer] playAnimation: no mixer'); return; }
    if (!this._animClips.length) { console.warn('[Viewer] playAnimation: _animClips is empty'); return; }
    const clip = this._animClips.find(c => c.name === name) ?? this._animClips[0];
    this._mixer.stopAllAction();
    this._activeAction = this._mixer.clipAction(clip, this._model);
    this._activeAction.reset().play();
    console.log(`[Viewer] playAnimation: "${clip.name}" (${clip.tracks.length} tracks, ${clip.duration.toFixed(2)}s)`);
    if (this._model) {
      const modelBones = new Set();
      this._model.traverse(o => { if (o.isBone) modelBones.add(o.name); });
      const trackBones = clip.tracks.map(t => { const d = t.name.lastIndexOf('.'); return d >= 0 ? t.name.slice(0, d) : t.name; });
      const matched = trackBones.filter(b => modelBones.has(b));
      console.log(`[Viewer] playAnimation: track bones ${trackBones.length}, matched ${matched.length}/${modelBones.size}`);
    }
    this.onStatus(`▶ ${clip.name}`);
  }

  getAnimationNames() { return this._animNames; }
  getAnimationClips() { return this._animClips; }
  getModelClips()     { return this._modelClips; }
  hasModel() { return !!this._model; }

  // Serialize model's embedded clips for saving to the shared anim bank.
  exportModelClipsJSON() {
    return this._modelClips.map(clip => ({
      name: clip.name,
      json: THREE.AnimationClip.toJSON(clip),
    }));
  }

  // Deserialize a clip loaded from the shared anim bank.
  static clipFromJSON(json) {
    return THREE.AnimationClip.parse(json);
  }

  // FIX Bug 4: Public method to inject an external clip into the internal clip bank.
  // Assigns the clip so playAnimation(clip.name) can find it, and optionally into
  // a named slot so playSlot(slotName) works too.
  //
  // Usage:
  //   viewer.injectClip(clip);                   // bank only
  //   viewer.injectClip(clip); viewer.assignClipToSlot(clip, 'idle');  // bank + slot
  injectClip(clip) {
    // Only add if not already present (by name)
    if (!this._animClips.find(c => c.name === clip.name)) {
      this._animClips.push(clip);
      this._animNames = this._animClips.map(c => c.name);
    }
  }

  // Load AnimationClips from a GLB at a given URL.
  // FIX Bug 5: Only strips scale tracks (not position tracks) when called without
  // a live model scene, so that Meshy bank clips retain their Hips position track
  // (root motion). Scale tracks are always stripped as they are skeleton-specific.
  // Also normalises track names: strips "mixamorig:" prefix and converts
  // ".bones[BoneName].prop" paths to "BoneName.prop" so that AnimationMixer
  // can resolve bones by name traversal when the mixer root is a Group.
  // Disposes all geometry/texture/material data after extracting clips to avoid
  // GPU memory exhaustion (the GLBs contain full character meshes we don't need).
  // Returns a Promise<AnimationClip[]>.
  static loadGlbClips(url) {
    return new Promise((resolve, reject) => {
      new GLTFLoader().load(
        url,
        (gltf) => {
          // FIX Bug 5: Only drop scale tracks — keep position tracks (including
          // Hips root motion) since we don't have a live model to determine the
          // root bone name, and the Meshy bank clips need their position data.
          let clips = (gltf.animations ?? []).map(clip => {
            const tracks = clip.tracks.filter(t => {
              const dot = t.name.lastIndexOf('.');
              const prop = dot >= 0 ? t.name.slice(dot + 1) : '';
              return prop !== 'scale'; // drop scale, keep position and quaternion
            });
            return new THREE.AnimationClip(clip.name, clip.duration, tracks);
          });

          // Normalise track names so the clips work with any Meshy/Mixamo model:
          //   ".bones[mixamorig:Hips].quaternion" → "Hips.quaternion"
          //   "mixamorig:Hips.quaternion"          → "Hips.quaternion"
          clips = clips.map(clip => {
            const tracks = clip.tracks.map(t => {
              // Handle .bones[...].prop format
              let m = t.name.match(/^\.bones\[([^\]]+)\](\..+)$/);
              if (m) {
                const boneName = m[1].replace(/^mixamorig:/i, '');
                const renamed = t.clone();
                renamed.name = boneName + m[2];
                return renamed;
              }
              // Handle mixamorig:BoneName.prop format
              if (/^mixamorig:/i.test(t.name)) {
                const renamed = t.clone();
                renamed.name = t.name.replace(/^mixamorig:/i, '');
                return renamed;
              }
              return t;
            });
            return new THREE.AnimationClip(clip.name, clip.duration, tracks);
          });

          // Free GPU resources — we only keep the AnimationClip data.
          gltf.scene?.traverse(obj => {
            obj.geometry?.dispose();
            const mats = Array.isArray(obj.material) ? obj.material : obj.material ? [obj.material] : [];
            mats.forEach(m => {
              Object.values(m).forEach(v => { if (v?.isTexture) v.dispose(); });
              m.dispose();
            });
          });
          resolve(clips);
        },
        null,
        reject
      );
    });
  }

  clear() {
    this._disposeModel();
    this._mixer = null;
    this._animNames = [];
    this._animClips = [];
    this._modelClips = [];
    this._slotClips = {};
  }

  // Reset animation state only — keeps the current model visible.
  // Call this when switching characters so the old model stays on screen
  // while the new one loads; _loadModel will replace it atomically.
  clearAnimState() {
    this._loadGen++;           // invalidate any in-flight loadUrl for the old character
    if (this._mixer) this._mixer.stopAllAction();
    this._activeAction = null;
    this._animClips = [];
    this._animNames = [];
    this._slotClips = {};
    this.detachAllWeapons();
    this._model?.traverse(o => { if (o.isSkinnedMesh) o.skeleton.pose(); });
  }

  // ── Weapon attachment ─────────────────────────────────────────

  _findBone(name) {
    let found = null;
    this._model?.traverse(o => {
      if (!found && o.isBone && (o.name === name || o.name === `mixamorig:${name}`)) found = o;
    });
    return found;
  }

  // Attach a weapon GLB to a hand bone.
  // hand: 'right' (RightHand) or 'left' (LeftHand).
  // grip: { position:[x,y,z], rotation:[x,y,z], scale:n } — weapon-local offset.
  // If grip is empty/default, auto-grip is computed automatically after load.
  // If the model isn't loaded yet, the attachment is queued and applied after _loadModel.
  attachWeapon(url, grip = {}, hand = 'right') {
    this.detachWeapon(hand);
    if (!this._model) {
      this._pendingWeapons[hand] = { url, grip };
      return;
    }
    // Capture the current gen AFTER detachWeapon incremented it.
    // Any in-flight loader from a previous attachWeapon call will have the old gen
    // and will bail out when the callback fires.
    const genKey = hand === 'left' ? '_weaponLeftGen' : '_weaponRightGen';
    const gen = this[genKey];
    console.log(`[Viewer] attachWeapon: url=${url} hand=${hand} gen=${gen}`);
    const loader = new GLTFLoader();
    loader.load(url, gltf => {
      if (this[genKey] !== gen) {
        // A newer attachWeapon (or detachWeapon) was called while this was loading — discard.
        console.log(`[Viewer] attachWeapon: stale load discarded (gen ${gen} vs ${this[genKey]})`);
        return;
      }

      const mesh = gltf.scene;
      mesh.traverse(o => {
        if (o.isMesh) { o.frustumCulled = false; o.castShadow = true; }
      });

      const boneName = hand === 'left' ? 'LeftHand' : 'RightHand';
      const bone = this._findBone(boneName);
      if (!bone) {
        const found = [];
        this._model?.traverse(o => { if (o.isBone) found.push(o.name); });
        console.error(`[Viewer] attachWeapon: bone "${boneName}" NOT FOUND. Bones in model:`, found);
        this.onStatus?.(`⚠ Bone "${boneName}" introuvable dans le modèle`);
        return;
      }

      // Determine if a meaningful grip was provided
      const hasCustomGrip = (grip.scale != null && grip.scale !== 1) ||
        (grip.position ?? [0, 0, 0]).some(v => v !== 0) ||
        (grip.rotation ?? [0, 0, 0]).some(v => v !== 0);

      // Apply stored grip values
      const pos = grip.position ?? [0, 0, 0];
      const rot = grip.rotation ?? [0, 0, 0];
      mesh.position.set(pos[0], pos[1], pos[2]);
      mesh.rotation.set(rot[0], rot[1], rot[2]);
      mesh.scale.setScalar(grip.scale ?? 1);

      bone.add(mesh);
      if (hand === 'left') this._weaponLeft  = mesh;
      else                 this._weaponRight = mesh;

      // No custom grip configured — auto-compute a sensible one
      if (!hasCustomGrip) {
        console.log('[Viewer] attachWeapon: no grip configured, running auto-grip');
        this.computeAutoGrip(hand);
      }

      console.log(`[Viewer] attachWeapon: attached to "${boneName}" ok (gen=${gen})`);
    }, null, err => {
      if (this[genKey] !== gen) return; // stale
      console.error(`[Viewer] attachWeapon load error:`, err);
      this.onStatus?.(`⚠ Weapon load error: ${err?.message ?? err}`);
    });
  }

  detachWeapon(hand = 'right') {
    // Increment gen first so any in-flight GLTFLoader callback for this hand
    // sees a stale gen and discards itself (prevents the race condition where
    // multiple rapid attachWeapon calls leave several meshes on the bone).
    if (hand === 'left') this._weaponLeftGen++;
    else                 this._weaponRightGen++;

    const ref = hand === 'left' ? '_weaponLeft' : '_weaponRight';
    const obj = this[ref];
    if (obj) {
      obj.parent?.remove(obj);
      obj.traverse(o => {
        o.geometry?.dispose();
        if (Array.isArray(o.material)) o.material.forEach(m => m.dispose());
        else o.material?.dispose();
      });
      this[ref] = null;
    }
    delete this._pendingWeapons[hand];
  }

  detachAllWeapons() {
    this.detachWeapon('right');
    this.detachWeapon('left');
  }

  // ── Grip editor helpers ───────────────────────────────────────

  // Update the already-attached weapon's transform in place — no GLTFLoader call.
  // Called on every slider move for instant live preview.
  updateWeaponGrip(grip = {}, hand = 'right') {
    const obj = hand === 'left' ? this._weaponLeft : this._weaponRight;
    if (!obj) return;
    const [px, py, pz] = grip.position ?? [0, 0, 0];
    const [rx, ry, rz] = grip.rotation ?? [0, 0, 0];
    obj.position.set(px, py, pz);
    obj.rotation.set(rx, ry, rz);
    obj.scale.setScalar(grip.scale ?? 1);
  }

  // Temporarily move the weapon to scene root at identity transform,
  // measure its bounding box, re-attach, and return a grip that centres
  // the bottom of the weapon at the bone origin at a reasonable scale.
  //
  // Vertex-analysis auto-grip: detects handle end via cross-section radius
  // slicing, orients blade toward world-up using bone world quaternion, and
  // places the grip so the handle sits at the bone origin.
  computeAutoGrip(hand = 'right') {
    const weaponGroup = hand === 'left' ? this._weaponLeft : this._weaponRight;
    if (!weaponGroup) return null;
    const boneName = hand === 'left' ? 'LeftHand' : 'RightHand';
    const bone = this._findBone(boneName);
    if (!bone) return null;

    // Capture bone world transform BEFORE detaching (needed for orientation math).
    const boneWS = new THREE.Vector3();
    const boneWQ = new THREE.Quaternion();
    bone.getWorldScale(boneWS);
    bone.getWorldQuaternion(boneWQ);
    const invBoneScale = boneWS.x > 1e-6 ? 1 / boneWS.x : 1;

    // Detach weapon to scene root at identity so geometry is in world space.
    bone.remove(weaponGroup);
    weaponGroup.position.set(0, 0, 0);
    weaponGroup.rotation.set(0, 0, 0);
    weaponGroup.scale.set(1, 1, 1);
    this._scene.add(weaponGroup);
    weaponGroup.updateWorldMatrix(false, true);

    // Collect all vertices in world space.
    const verts = [];
    const _v = new THREE.Vector3();
    weaponGroup.traverse(obj => {
      const pos = obj.geometry?.attributes?.position;
      if (!pos) return;
      for (let i = 0; i < pos.count; i++) {
        verts.push(_v.fromBufferAttribute(pos, i).applyMatrix4(obj.matrixWorld).clone());
      }
    });

    // Bounding box and longest axis (= blade direction in object space).
    const box    = new THREE.Box3().setFromObject(weaponGroup);
    const size   = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());

    const axisCandidates = [
      { dir: new THREE.Vector3(1, 0, 0), dim: size.x },
      { dir: new THREE.Vector3(0, 1, 0), dim: size.y },
      { dir: new THREE.Vector3(0, 0, 1), dim: size.z },
    ].sort((a, b) => b.dim - a.dim);

    const bladeDir = axisCandidates[0].dir.clone();
    const maxDim   = axisCandidates[0].dim;

    // Project all verts onto blade axis, find axis extent.
    const projections = verts.map(v => v.dot(bladeDir));
    const axisMin = Math.min(...projections);
    const axisMax = Math.max(...projections);
    const axisLen = axisMax - axisMin;

    // Slice into N segments, compute average cross-section radius per slice.
    const N = 24;
    const sliceRadius = new Array(N).fill(0);
    const sliceCount  = new Array(N).fill(0);
    const perpA = axisCandidates[1].dir;
    const perpB = axisCandidates[2].dir;

    for (const v of verts) {
      const t = axisLen > 1e-6 ? (v.dot(bladeDir) - axisMin) / axisLen : 0.5;
      const si = Math.min(Math.floor(t * N), N - 1);
      const da = v.dot(perpA) - center.dot(perpA);
      const db = v.dot(perpB) - center.dot(perpB);
      sliceRadius[si] += Math.sqrt(da * da + db * db);
      sliceCount[si]++;
    }
    for (let i = 0; i < N; i++) {
      if (sliceCount[i] > 0) sliceRadius[i] /= sliceCount[i];
    }

    // Handle = thinner end (compare first 30% vs last 30% of slices).
    const band = Math.max(1, Math.floor(N * 0.3));
    let startR = 0, endR = 0;
    for (let i = 0; i < band; i++) startR += sliceRadius[i];
    for (let i = N - band; i < N; i++) endR   += sliceRadius[i];
    startR /= band;
    endR   /= band;

    // Handle end is the thinner side; blade end is the other.
    // gripPoint = position of the handle end centre in world space.
    const handleAtStart = startR <= endR;
    const handleT = handleAtStart ? axisMin : axisMax;
    const gripPoint = bladeDir.clone().multiplyScalar(handleT)
      .add(new THREE.Vector3(
        center.dot(perpA) * perpA.x + center.dot(perpB) * perpB.x,
        center.dot(perpA) * perpA.y + center.dot(perpB) * perpB.y,
        center.dot(perpA) * perpA.z + center.dot(perpB) * perpB.z,
      ));

    // Re-attach to bone.
    this._scene.remove(weaponGroup);
    bone.add(weaponGroup);

    // Scale: fit blade to 1.0 world unit, then convert to bone-local.
    const scale = maxDim > 1e-6
      ? parseFloat((1.0 / maxDim * invBoneScale).toFixed(4))
      : parseFloat(invBoneScale.toFixed(4));

    // Orientation: rotate so blade points world-up, expressed in bone-local space.
    // bladeDir may point toward handle — if handle is at start, flip so it points
    // toward the tip (away from handle).
    const bladeDirNorm = handleAtStart ? bladeDir.clone() : bladeDir.clone().negate();
    const worldRot  = new THREE.Quaternion().setFromUnitVectors(
      bladeDirNorm.normalize(),
      new THREE.Vector3(0, 1, 0),
    );
    const localQuat = boneWQ.clone().invert().multiply(worldRot);
    const euler     = new THREE.Euler().setFromQuaternion(localQuat, 'XYZ');

    // Position: negate the rotated+scaled grip point so handle sits at bone origin.
    const weaponPos = gripPoint.clone()
      .multiplyScalar(scale)
      .applyQuaternion(localQuat)
      .negate();

    const grip = {
      position: [
        parseFloat(weaponPos.x.toFixed(4)),
        parseFloat(weaponPos.y.toFixed(4)),
        parseFloat(weaponPos.z.toFixed(4)),
      ],
      rotation: [
        parseFloat(euler.x.toFixed(5)),
        parseFloat(euler.y.toFixed(5)),
        parseFloat(euler.z.toFixed(5)),
      ],
      scale,
    };

    console.log(`[Viewer] computeAutoGrip: handleAtStart=${handleAtStart}, startR=${startR.toFixed(3)}, endR=${endR.toFixed(3)}, scale=${scale}`);

    this.updateWeaponGrip(grip, hand);
    return grip;
  }

  // ── Per-slot animation assignment ─────────────────────────────
  // Each slot (idle, run, swim…) can have its own AnimationClip
  // loaded from a separate GLB (e.g. a Mixamo download).

  _slotClips = {};

  loadSlotFromFile(file, slotName, callback) {
    const url = URL.createObjectURL(file);
    const loader = new GLTFLoader();
    loader.load(
      url,
      (gltf) => {
        URL.revokeObjectURL(url);
        if (!gltf.animations?.length) {
          this.onStatus(`Aucune animation dans "${file.name}"`);
          callback?.(slotName, null);
          return;
        }
        const retargeted = this._retargetClips(gltf.animations);
        this._slotClips[slotName] = retargeted[0];
        callback?.(slotName, retargeted[0].name);
        this.onStatus(`"${slotName}" ← ${retargeted[0].name}`);
      },
      null,
      (err) => this.onStatus(`Erreur slot : ${err.message ?? err}`)
    );
  }

  playSlot(slotName) {
    const clip = this._slotClips[slotName];
    if (!clip || !this._mixer) return false;
    this._activeAction?.fadeOut(0.2);
    this._activeAction = this._mixer.clipAction(clip, this._model);
    this._activeAction.reset().fadeIn(0.2).play();
    this.onStatus(`▶ ${slotName} : ${clip.name}`);
    return true;
  }

  clearSlot(slotName) {
    delete this._slotClips[slotName];
  }

  getSlotClipName(slotName) {
    return this._slotClips[slotName]?.name ?? null;
  }

  getSlotAssignments() {
    return Object.fromEntries(
      Object.entries(this._slotClips).map(([k, v]) => [k, v.name])
    );
  }

  async captureSlot(slotName, frameCount = 8, frameSize = 64) {
    const clip = this._slotClips[slotName];
    if (!clip || !this._model) return null;
    return this._captureClip4Dir(clip, frameCount, frameSize);
  }

  // ── Directional camera ───────────────────────────────────────
  // dir: 0=SE (default), 1=SW, 2=NW, 3=NE — matches blocks_1.png convention

  setDirection(dir = 0) {
    const baseAngle = Math.PI / 4; // 45° = SE
    const angle = baseAngle + (dir * Math.PI / 2);
    const elev = Math.atan(1 / Math.SQRT2);
    const dist = 10;
    this._camera.position.set(
      dist * Math.cos(elev) * Math.cos(angle),
      dist * Math.sin(elev),
      dist * Math.cos(elev) * Math.sin(angle)
    );
    this._camera.lookAt(0, 1, 0);
    this._camera.updateProjectionMatrix();
  }

  // ── Spritesheet capture ───────────────────────────────────────
  // Returns array of Blobs (one per frame), rendered from isometric view
  // with optional pixel-art downscale filter.

  async captureAnimation(animName, frameCount = 8, outW = 64, outH = 64) {
    const clip = this._animClips.find(c => c.name === animName);
    if (!clip || !this._model) return [];

    const duration = clip.duration;
    const blobs = [];

    // Offscreen render target at 2x for quality before downscale
    const scale = 4;
    const rt = new THREE.WebGLRenderTarget(outW * scale, outH * scale);
    const rtCamera = this._camera.clone();

    // Temp canvas for pixel-art downscale
    const tmpCanvas = document.createElement('canvas');
    tmpCanvas.width = outW;
    tmpCanvas.height = outH;
    const tmpCtx = tmpCanvas.getContext('2d');
    tmpCtx.imageSmoothingEnabled = false;

    const readCanvas = document.createElement('canvas');
    readCanvas.width = outW * scale;
    readCanvas.height = outH * scale;
    const readCtx = readCanvas.getContext('2d');

    for (let i = 0; i < frameCount; i++) {
      const t = (i / frameCount) * duration;

      // Advance mixer to time t
      this._mixer.setTime(t);

      // Render to RT
      this._renderer.setRenderTarget(rt);
      this._renderer.render(this._scene, rtCamera);
      this._renderer.setRenderTarget(null);

      // Read pixels
      const pixels = new Uint8Array(outW * scale * outH * scale * 4);
      this._renderer.readRenderTargetPixels(rt, 0, 0, outW * scale, outH * scale, pixels);

      // Flip Y (WebGL origin is bottom-left)
      const imageData = readCtx.createImageData(outW * scale, outH * scale);
      for (let row = 0; row < outH * scale; row++) {
        const srcRow = outH * scale - 1 - row;
        const src = srcRow * outW * scale * 4;
        const dst = row  * outW * scale * 4;
        imageData.data.set(pixels.subarray(src, src + outW * scale * 4), dst);
      }
      readCtx.putImageData(imageData, 0, 0);

      // Pixel-art downscale (nearest-neighbour via imageSmoothingEnabled=false)
      tmpCtx.clearRect(0, 0, outW, outH);
      tmpCtx.drawImage(readCanvas, 0, 0, outW, outH);

      const blob = await new Promise(res => tmpCanvas.toBlob(res, 'image/png'));
      blobs.push(blob);
    }

    rt.dispose();
    // Resume normal playback
    if (this._activeAction) this.playAnimation(this._activeAction.getClip().name);

    return blobs;
  }

  // ── 4-direction spritesheet capture ───────────────────────────
  // Returns a single Blob: 512×256 PNG (8 frames × 4 isometric directions)
  // Row order: SE (y=0), SW (y=64), NW (y=128), NE (y=192)

  async captureAnimation4Dir(animName, frameCount = 8, frameSize = 64) {
    const clip = this._animClips.find(c => c.name === animName);
    if (!clip || !this._model) return null;
    return this._captureClip4Dir(clip, frameCount, frameSize);
  }

  async _captureClip4Dir(clip, frameCount = 8, frameSize = 64) {
    const AZIMUTHS = [
      Math.PI / 4,        // 45°  SE — default view
      3 * Math.PI / 4,    // 135° SW
      5 * Math.PI / 4,    // 225° NW
      7 * Math.PI / 4,    // 315° NE
    ];
    const elev = Math.atan(1 / Math.SQRT2);
    const dist = 10;

    if (!this._model) return null;

    const duration = clip.duration;
    const scale = 4;
    const renderW = frameSize * scale;
    const renderH = frameSize * scale;

    const rt = new THREE.WebGLRenderTarget(renderW, renderH);

    // Output: 512 × 256 composited canvas
    const outCanvas = document.createElement('canvas');
    outCanvas.width  = frameSize * frameCount;  // 512
    outCanvas.height = frameSize * AZIMUTHS.length; // 256
    const outCtx = outCanvas.getContext('2d');
    outCtx.imageSmoothingEnabled = false;

    // Intermediary canvases
    const readCanvas = document.createElement('canvas');
    readCanvas.width  = renderW;
    readCanvas.height = renderH;
    const readCtx = readCanvas.getContext('2d');

    const frameCanvas = document.createElement('canvas');
    frameCanvas.width  = frameSize;
    frameCanvas.height = frameSize;
    const frameCtx = frameCanvas.getContext('2d');
    frameCtx.imageSmoothingEnabled = false;

    const savedCamPos = this._camera.position.clone();

    for (let dirIdx = 0; dirIdx < AZIMUTHS.length; dirIdx++) {
      const azimuth = AZIMUTHS[dirIdx];

      // Reposition camera for this direction
      this._camera.position.set(
        dist * Math.cos(elev) * Math.cos(azimuth),
        dist * Math.sin(elev),
        dist * Math.cos(elev) * Math.sin(azimuth)
      );
      this._camera.lookAt(0, 1, 0);
      this._camera.updateMatrixWorld();

      for (let frameIdx = 0; frameIdx < frameCount; frameIdx++) {
        const t = (frameIdx / frameCount) * duration;
        this._mixer.setTime(t);

        this._renderer.setRenderTarget(rt);
        this._renderer.render(this._scene, this._camera);
        this._renderer.setRenderTarget(null);

        // Read + flip Y
        const pixels = new Uint8Array(renderW * renderH * 4);
        this._renderer.readRenderTargetPixels(rt, 0, 0, renderW, renderH, pixels);

        const imageData = readCtx.createImageData(renderW, renderH);
        for (let row = 0; row < renderH; row++) {
          const srcRow = renderH - 1 - row;
          const src = srcRow * renderW * 4;
          const dst = row * renderW * 4;
          imageData.data.set(pixels.subarray(src, src + renderW * 4), dst);
        }
        readCtx.putImageData(imageData, 0, 0);

        // Nearest-neighbour downscale to frameSize
        frameCtx.clearRect(0, 0, frameSize, frameSize);
        frameCtx.drawImage(readCanvas, 0, 0, frameSize, frameSize);

        // Composite into output grid
        outCtx.drawImage(frameCanvas, frameIdx * frameSize, dirIdx * frameSize);
      }
    }

    // Restore camera
    this._camera.position.copy(savedCamPos);
    this._camera.lookAt(0, 1, 0);
    this._camera.updateMatrixWorld();

    rt.dispose();
    if (this._activeAction) this.playAnimation(this._activeAction.getClip().name);

    return new Promise(res => outCanvas.toBlob(res, 'image/png'));
  }

  // ── Portrait capture ──────────────────────────────────────────
  // Returns a single Blob: 512×512 PNG, front-facing (SE azimuth), high quality
  // Rendered at 4× then downscaled for clean pixel art.

  async capturePortrait(outSize = 512) {
    if (!this._model) return null;

    const scale = 2;
    const renderSize = outSize * scale;
    const rt = new THREE.WebGLRenderTarget(renderSize, renderSize);

    // Tighter framing for portrait: zoom in, center on head
    const portraitCamera = this._camera.clone();
    const elev = Math.atan(1 / Math.SQRT2);
    const dist = 5; // closer than normal
    portraitCamera.position.set(
      dist * Math.cos(elev) * Math.cos(Math.PI / 4),
      dist * Math.sin(elev),
      dist * Math.cos(elev) * Math.sin(Math.PI / 4)
    );
    portraitCamera.lookAt(0, 1.5, 0); // aim higher toward head
    portraitCamera.updateMatrixWorld();

    // Use T-pose / idle frame 0 for portrait
    if (this._mixer && this._animClips.length > 0) {
      this._mixer.setTime(0);
    }

    this._renderer.setRenderTarget(rt);
    this._renderer.render(this._scene, portraitCamera);
    this._renderer.setRenderTarget(null);

    const pixels = new Uint8Array(renderSize * renderSize * 4);
    this._renderer.readRenderTargetPixels(rt, 0, 0, renderSize, renderSize, pixels);

    const readCanvas = document.createElement('canvas');
    readCanvas.width  = renderSize;
    readCanvas.height = renderSize;
    const readCtx = readCanvas.getContext('2d');
    const imageData = readCtx.createImageData(renderSize, renderSize);
    for (let row = 0; row < renderSize; row++) {
      const srcRow = renderSize - 1 - row;
      const src = srcRow * renderSize * 4;
      const dst = row * renderSize * 4;
      imageData.data.set(pixels.subarray(src, src + renderSize * 4), dst);
    }
    readCtx.putImageData(imageData, 0, 0);

    const outCanvas = document.createElement('canvas');
    outCanvas.width  = outSize;
    outCanvas.height = outSize;
    const outCtx = outCanvas.getContext('2d');
    outCtx.imageSmoothingEnabled = false;
    outCtx.drawImage(readCanvas, 0, 0, outSize, outSize);

    rt.dispose();
    if (this._activeAction) this.playAnimation(this._activeAction.getClip().name);

    return new Promise(res => outCanvas.toBlob(res, 'image/png'));
  }

  // ── Export all animation slots ────────────────────────────────
  // Returns { portrait: base64, idle: base64, run: base64, ... }
  // Skips slots whose animation clip is not found in the model.

  async exportAllSlots(frameCount = 8, frameSize = 64) {
    const SLOTS = [
      'idle', 'run', 'swim', 'fly',
      'attack-01', 'attack-02', 'attack-03', 'attack-04', 'attack-05',
      'attack-06', 'attack-07', 'attack-08', 'attack-09', 'attack-10',
      'hurt', 'die',
    ];

    const result = {};

    // Portrait first (single frame SE, 512×512)
    const portraitBlob = await this.capturePortrait(512);
    if (portraitBlob) result.portrait = await this._blobToBase64(portraitBlob);

    // Animation slots (512×256 spritesheet per slot)
    for (const slot of SLOTS) {
      const clipName = this._animClips.find(c =>
        c.name === slot ||
        c.name.toLowerCase().replace(/[\s_]+/g, '-') === slot
      )?.name;
      if (!clipName) continue;

      const blob = await this.captureAnimation4Dir(clipName, frameCount, frameSize);
      if (blob) result[slot] = await this._blobToBase64(blob);
    }

    return result;
  }

  // ── Utility ───────────────────────────────────────────────────

  _blobToBase64(blob) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result); // data:image/png;base64,...
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  }
}
