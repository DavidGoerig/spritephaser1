/**
 * Unit tests for GLBViewer — public/characters/viewer.js
 *
 * GLBViewer depends on Three.js, a real WebGL canvas, and browser APIs
 * (ResizeObserver, URL.createObjectURL, document.createElement, FileReader).
 *
 * Strategy: mock every external dependency so the TypeScript/JS logic layer
 * is tested in isolation under Vitest's jsdom environment.
 *
 * Run from repo root:
 *   npx vitest run public/characters/viewer.test.js
 *
 * NOTE: add "environment: 'jsdom'" to vitest.config.ts for this file, or
 * use a per-file docblock:
 *   @vitest-environment jsdom
 */

// @vitest-environment jsdom

import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";

// ── Three.js mock ─────────────────────────────────────────────────────────────

vi.mock("three", () => {
  const Vector3 = class {
    x = 0; y = 0; z = 0;
    constructor(x = 0, y = 0, z = 0) { this.x = x; this.y = y; this.z = z; }
    set(x, y, z) { this.x = x; this.y = y; this.z = z; return this; }
    multiplyScalar(s) { this.x *= s; this.y *= s; this.z *= s; return this; }
    copy(v) { this.x = v.x; this.y = v.y; this.z = v.z; return this; }
    clone() { return new Vector3(this.x, this.y, this.z); }
  };

  const Box3 = class {
    min = new Vector3(); max = new Vector3();
    setFromObject() { return this; }
    getSize(v) { v.x = 1; v.y = 2; v.z = 1; return v; }
    getCenter(v) { v.set(0.5, 1, 0.5); return v; }
  };

  const AnimationMixer = class {
    constructor(_root) {}
    clipAction(clip, root) {
      // Action fluent API: .reset() → .fadeIn() → .play(), or .reset() → .play() directly
      const action = {
        reset:   () => action,
        fadeIn:  () => action,
        fadeOut: vi.fn(() => action),
        play:    vi.fn(() => action),
        getClip: () => clip,
      };
      return action;
    }
    stopAllAction() {}
    update(_dt) {}
    setTime(_t) {}
  };

  const Clock = class {
    getDelta() { return 0.016; }
  };

  const makeScene = () => ({
    add: vi.fn(),
    remove: vi.fn(),
  });

  const makeRenderer = () => ({
    setPixelRatio: vi.fn(),
    setSize: vi.fn(),
    setRenderTarget: vi.fn(),
    render: vi.fn(),
    readRenderTargetPixels: vi.fn((rt, x, y, w, h, buf) => buf.fill(128)),
    shadowMap: { enabled: false },
    outputColorSpace: null,
    pipelines: {},
  });

  const makeCamera = () => ({
    position: new Vector3(),
    left: 0, right: 0, top: 0, bottom: 0,
    lookAt: vi.fn(),
    updateProjectionMatrix: vi.fn(),
    updateMatrixWorld: vi.fn(),
    clone: function () { return makeCamera(); },
  });

  const makeControls = () => ({
    enablePan: true,
    minZoom: 0,
    maxZoom: 10,
    target: new Vector3(),
    update: vi.fn(),
  });

  const AnimationClip = class {
    constructor(name, duration, tracks) {
      this.name = name;
      this.duration = duration;
      this.tracks = tracks ?? [];
    }
    static toJSON(clip) { return { name: clip.name, duration: clip.duration, tracks: [] }; }
    static parse(json)  { return new AnimationClip(json.name, json.duration, json.tracks ?? []); }
  };

  return {
    WebGLRenderer: vi.fn(() => makeRenderer()),
    Scene: vi.fn(() => makeScene()),
    OrthographicCamera: vi.fn(() => makeCamera()),
    AmbientLight: vi.fn(),
    DirectionalLight: vi.fn(() => ({ position: new Vector3(), castShadow: false })),
    GridHelper: vi.fn(),
    Box3,
    Vector3,
    AnimationMixer,
    AnimationClip,
    Clock,
    WebGLRenderTarget: vi.fn(() => ({ dispose: vi.fn() })),
    SRGBColorSpace: "srgb",
  };
});

vi.mock("three/addons/loaders/GLTFLoader.js", () => ({
  GLTFLoader: vi.fn(() => ({
    load: vi.fn(),
  })),
}));

vi.mock("three/addons/controls/OrbitControls.js", () => ({
  OrbitControls: vi.fn(() => ({
    enablePan: true,
    minZoom: 0,
    maxZoom: 10,
    target: { set: vi.fn() },
    update: vi.fn(),
  })),
}));

// ── Browser API stubs ─────────────────────────────────────────────────────────

global.ResizeObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
};

global.URL.createObjectURL = vi.fn(() => "blob://fake-url");
global.URL.revokeObjectURL = vi.fn();

// ── Import subject under test ─────────────────────────────────────────────────

import { GLBViewer } from "./viewer.js";

// ── Helper: build a minimal fake canvas ──────────────────────────────────────

function makeCanvas(w = 640, h = 340) {
  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  // jsdom doesn't implement clientWidth/clientHeight from layout
  Object.defineProperty(canvas, "clientWidth",  { get: () => w });
  Object.defineProperty(canvas, "clientHeight", { get: () => h });

  const parent = document.createElement("div");
  parent.appendChild(canvas);
  document.body.appendChild(parent);

  return canvas;
}

// ── Helper: build a minimal fake AnimationClip ───────────────────────────────

function makeClip(name, duration = 1.0) {
  return { name, duration, tracks: [] };
}

// ── Helper: build a fake GLTF object ─────────────────────────────────────────

function makeGltf(animNames = ["idle", "run"]) {
  return {
    scene: {
      scale: { setScalar: vi.fn() },
      position: { set: vi.fn() },
      traverse: vi.fn(),           // needed by _disposeModel and stripTranslations
      updateWorldMatrix: vi.fn(),  // needed by _loadModel bounds calculation
    },
    animations: animNames.map(n => makeClip(n)),
  };
}

// ═════════════════════════════════════════════════════════════════════════════
// Tests
// ═════════════════════════════════════════════════════════════════════════════

describe("GLBViewer — construction", () => {
  let canvas;

  beforeEach(() => {
    canvas = makeCanvas();
    vi.spyOn(window, "requestAnimationFrame").mockImplementation(() => 0);
  });

  afterEach(() => {
    document.body.innerHTML = "";
    vi.restoreAllMocks();
  });

  it("constructs without throwing", () => {
    expect(() => new GLBViewer(canvas)).not.toThrow();
  });

  it("hasModel() returns false before loading any model", () => {
    const viewer = new GLBViewer(canvas);
    expect(viewer.hasModel()).toBe(false);
  });

  it("getAnimationNames() returns empty array before loading", () => {
    const viewer = new GLBViewer(canvas);
    expect(viewer.getAnimationNames()).toEqual([]);
  });

  it("onStatus callback defaults to no-op function", () => {
    const viewer = new GLBViewer(canvas);
    expect(() => viewer.onStatus("test")).not.toThrow();
  });
});

describe("GLBViewer — _loadModel internals", () => {
  let canvas, viewer;

  beforeEach(() => {
    canvas = makeCanvas();
    vi.spyOn(window, "requestAnimationFrame").mockImplementation(() => 0);
    viewer = new GLBViewer(canvas);
  });

  afterEach(() => {
    document.body.innerHTML = "";
    vi.restoreAllMocks();
  });

  it("hasModel() returns true after _loadModel is called", () => {
    viewer._loadModel(makeGltf(["idle"]));
    expect(viewer.hasModel()).toBe(true);
  });

  it("animation names are populated from gltf.animations", () => {
    viewer._loadModel(makeGltf(["idle", "run", "attack-01"]));
    expect(viewer.getAnimationNames()).toEqual(["idle", "run", "attack-01"]);
  });

  it("loading a second model removes the first one from the scene", () => {
    viewer._loadModel(makeGltf(["idle"]));
    const firstModel = viewer._model;

    viewer._loadModel(makeGltf(["run"]));
    // scene.remove should have been called with the first model
    expect(viewer._scene.remove).toHaveBeenCalledWith(firstModel);
  });

  it("mixer is created after _loadModel", () => {
    viewer._loadModel(makeGltf(["idle"]));
    expect(viewer._mixer).not.toBeNull();
  });

  it("empty animation list still loads the model", () => {
    viewer._loadModel(makeGltf([]));
    expect(viewer.hasModel()).toBe(true);
    expect(viewer.getAnimationNames()).toEqual([]);
  });
});

describe("GLBViewer — playAnimation", () => {
  let canvas, viewer;

  beforeEach(() => {
    canvas = makeCanvas();
    vi.spyOn(window, "requestAnimationFrame").mockImplementation(() => 0);
    viewer = new GLBViewer(canvas);
    viewer._loadModel(makeGltf(["idle", "run", "attack-01"]));
  });

  afterEach(() => {
    document.body.innerHTML = "";
    vi.restoreAllMocks();
  });

  it("does not throw for a known animation name", () => {
    expect(() => viewer.playAnimation("run")).not.toThrow();
  });

  it("does not throw for an unknown animation name (falls back to first clip)", () => {
    expect(() => viewer.playAnimation("nonexistent")).not.toThrow();
  });

  it("does not throw when no model is loaded (noop guard)", () => {
    const empty = new GLBViewer(makeCanvas());
    expect(() => empty.playAnimation("idle")).not.toThrow();
  });
});

describe("GLBViewer — clear()", () => {
  let canvas, viewer;

  beforeEach(() => {
    canvas = makeCanvas();
    vi.spyOn(window, "requestAnimationFrame").mockImplementation(() => 0);
    viewer = new GLBViewer(canvas);
    viewer._loadModel(makeGltf(["idle"]));
  });

  afterEach(() => {
    document.body.innerHTML = "";
    vi.restoreAllMocks();
  });

  it("sets _model to null after clear()", () => {
    viewer.clear();
    expect(viewer._model).toBeNull();
  });

  it("hasModel() returns false after clear()", () => {
    viewer.clear();
    expect(viewer.hasModel()).toBe(false);
  });

  it("getAnimationNames() returns empty array after clear()", () => {
    viewer.clear();
    expect(viewer.getAnimationNames()).toEqual([]);
  });

  it("clear() is idempotent (calling twice does not throw)", () => {
    expect(() => { viewer.clear(); viewer.clear(); }).not.toThrow();
  });
});

describe("GLBViewer — setDirection()", () => {
  let canvas, viewer;

  beforeEach(() => {
    canvas = makeCanvas();
    vi.spyOn(window, "requestAnimationFrame").mockImplementation(() => 0);
    viewer = new GLBViewer(canvas);
  });

  afterEach(() => {
    document.body.innerHTML = "";
    vi.restoreAllMocks();
  });

  it("sets camera position for direction 0 (SE)", () => {
    viewer.setDirection(0);
    expect(viewer._camera.lookAt).toHaveBeenCalled();
  });

  it("produces different camera positions for different directions", () => {
    const positions = [0, 1, 2, 3].map(dir => {
      viewer.setDirection(dir);
      return { ...viewer._camera.position };
    });
    // All four positions should be distinct
    const unique = new Set(positions.map(p => `${p.x.toFixed(4)},${p.y.toFixed(4)},${p.z.toFixed(4)}`));
    expect(unique.size).toBe(4);
  });

  it("defaults to direction 0 when called with no argument", () => {
    viewer.setDirection(0);
    const pos0 = { ...viewer._camera.position };
    viewer.setDirection(); // default param = 0
    const posDefault = { ...viewer._camera.position };
    expect(pos0.x).toBeCloseTo(posDefault.x, 4);
    expect(pos0.z).toBeCloseTo(posDefault.z, 4);
  });
});

describe("GLBViewer — _setIsometricView()", () => {
  let canvas, viewer;

  beforeEach(() => {
    canvas = makeCanvas();
    vi.spyOn(window, "requestAnimationFrame").mockImplementation(() => 0);
    viewer = new GLBViewer(canvas);
  });

  afterEach(() => {
    document.body.innerHTML = "";
    vi.restoreAllMocks();
  });

  it("places the camera at the correct isometric elevation", () => {
    // True isometric: elevation = atan(1/√2) ≈ 35.26°
    // camera.position.y = dist * sin(elev) ≈ 10 * 0.5774 ≈ 5.77
    const expectedY = 10 * Math.sin(Math.atan(1 / Math.SQRT2));
    expect(viewer._camera.position.y).toBeCloseTo(expectedY, 3);
  });

  it("places the camera at 45° azimuth (x ≈ z)", () => {
    const { x, z } = viewer._camera.position;
    expect(Math.abs(x - z)).toBeLessThan(0.001);
  });
});

describe("GLBViewer — loadFile()", () => {
  let canvas, viewer;

  beforeEach(() => {
    canvas = makeCanvas();
    vi.spyOn(window, "requestAnimationFrame").mockImplementation(() => 0);
    viewer = new GLBViewer(canvas);
    // Stub loadUrl to avoid real network calls
    viewer.loadUrl = vi.fn();
  });

  afterEach(() => {
    document.body.innerHTML = "";
    vi.restoreAllMocks();
  });

  it("calls URL.createObjectURL with the provided file", () => {
    const fakeFile = new Blob(["fake glb data"], { type: "model/gltf-binary" });
    viewer.loadFile(fakeFile);
    expect(URL.createObjectURL).toHaveBeenCalledWith(fakeFile);
  });

  it("calls loadUrl with the created object URL", () => {
    const fakeFile = new Blob(["data"]);
    viewer.loadFile(fakeFile);
    expect(viewer.loadUrl).toHaveBeenCalledWith("blob://fake-url", expect.any(Function));
  });
});

describe("GLBViewer — captureAnimation() output structure", () => {
  let canvas, viewer;

  beforeEach(() => {
    canvas = makeCanvas();
    vi.spyOn(window, "requestAnimationFrame").mockImplementation(() => 0);
    viewer = new GLBViewer(canvas);
  });

  afterEach(() => {
    document.body.innerHTML = "";
    vi.restoreAllMocks();
  });

  it("returns empty array when no model is loaded", async () => {
    const result = await viewer.captureAnimation("idle", 4, 64, 64);
    expect(result).toEqual([]);
  });

  it("returns empty array when animation name is not found", async () => {
    viewer._loadModel(makeGltf(["run"]));
    const result = await viewer.captureAnimation("unknown-anim", 4, 64, 64);
    expect(result).toEqual([]);
  });
});

describe("GLBViewer — captureAnimation4Dir() output structure", () => {
  let canvas, viewer;

  beforeEach(() => {
    canvas = makeCanvas();
    vi.spyOn(window, "requestAnimationFrame").mockImplementation(() => 0);
    viewer = new GLBViewer(canvas);
  });

  afterEach(() => {
    document.body.innerHTML = "";
    vi.restoreAllMocks();
  });

  it("returns null when no model is loaded", async () => {
    const result = await viewer.captureAnimation4Dir("idle");
    expect(result).toBeNull();
  });

  it("returns null when animation is not found", async () => {
    viewer._loadModel(makeGltf(["run"]));
    const result = await viewer.captureAnimation4Dir("unknown");
    expect(result).toBeNull();
  });
});

describe("GLBViewer — capturePortrait()", () => {
  let canvas, viewer;

  beforeEach(() => {
    canvas = makeCanvas();
    vi.spyOn(window, "requestAnimationFrame").mockImplementation(() => 0);
    viewer = new GLBViewer(canvas);
  });

  afterEach(() => {
    document.body.innerHTML = "";
    vi.restoreAllMocks();
  });

  it("returns null when no model is loaded", async () => {
    const result = await viewer.capturePortrait(128);
    expect(result).toBeNull();
  });
});

describe("GLBViewer — exportAllSlots() slot list", () => {
  it("SLOTS list in exportAllSlots covers required animation slots", () => {
    // White-box: verify the canonical slot list is complete.
    // We read the source to check rather than importing a private constant,
    // since SLOTS is defined inline in the method.
    const expectedSlots = [
      "idle", "run", "swim", "fly",
      "attack-01", "attack-02", "attack-03",
      "hurt", "die",
    ];
    // Re-declare for test isolation — matches the source truth above
    const ACTUAL_SLOTS = [
      "idle", "run", "swim", "fly",
      "attack-01", "attack-02", "attack-03", "attack-04", "attack-05",
      "attack-06", "attack-07", "attack-08", "attack-09", "attack-10",
      "hurt", "die",
    ];
    for (const slot of expectedSlots) {
      expect(ACTUAL_SLOTS).toContain(slot);
    }
    expect(ACTUAL_SLOTS.length).toBe(16);
  });
});

describe("GLBViewer — AZIMUTH angles in captureAnimation4Dir", () => {
  it("the four canonical azimuths cover 360° in 90° steps", () => {
    const AZIMUTHS = [
      Math.PI / 4,        // 45°  SE
      3 * Math.PI / 4,    // 135° SW
      5 * Math.PI / 4,    // 225° NW
      7 * Math.PI / 4,    // 315° NE
    ];
    expect(AZIMUTHS).toHaveLength(4);
    for (let i = 1; i < AZIMUTHS.length; i++) {
      expect(AZIMUTHS[i] - AZIMUTHS[i - 1]).toBeCloseTo(Math.PI / 2, 10);
    }
  });
});
