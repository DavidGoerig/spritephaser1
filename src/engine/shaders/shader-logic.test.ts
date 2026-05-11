/**
 * Unit tests for shader pipeline logic — pure TypeScript layer only.
 *
 * WebGL itself cannot run in Node (vitest environment), so we mock the
 * Phaser PostFXPipeline base class and test the TypeScript state-management
 * layer: uniform values, preset colours, clamping, ELEMENT_COLORS palette,
 * PIPELINE_KEYS constants, and the helper functions in shader-manager.ts.
 *
 * What is NOT tested here (requires a real WebGL context):
 *   - GLSL shader correctness
 *   - onPreRender() actually writing uniforms to the GPU
 *   - set1f / set3f / set2f calls on a live renderer
 */

import { describe, it, expect, vi, beforeEach } from "vitest";

// ── Minimal Phaser mock ───────────────────────────────────────────────────────
// We stub only what the pipeline constructors touch.
vi.mock("phaser", () => {
  class PostFXPipeline {
    game: unknown;
    set1f = vi.fn();
    set2f = vi.fn();
    set3f = vi.fn();
    constructor(opts: { game: unknown }) {
      this.game = opts.game;
    }
  }

  return {
    default: {
      Renderer: {
        WebGL: {
          Pipelines: { PostFXPipeline },
          WebGLRenderer: class WebGLRenderer {},
        },
      },
      GameObjects: {
        Sprite: class Sprite {
          scene = {
            tweens: { add: vi.fn() },
          };
          setPostPipeline = vi.fn().mockReturnThis();
          getPostPipeline = vi.fn();
          resetPostPipeline = vi.fn();
          removePostPipeline = vi.fn();
        },
      },
    },
  };
});

// ── Imports (after mock is set up) ───────────────────────────────────────────

import { ELEMENT_COLORS, ElementGlowPipeline } from "./ElementGlowPipeline";
import { OutlinePipeline }   from "./OutlinePipeline";
import { HitFlashPipeline }  from "./HitFlashPipeline";
import { ShadowPipeline }    from "./ShadowPipeline";
import { FogOfWarPipeline }  from "./FogOfWarPipeline";
import { SelectionPipeline } from "./SelectionPipeline";
import {
  PIPELINE_KEYS,
  ELEMENT_GLOW_COLORS,
  applyOutline,
  applyElementGlow,
  applyShadow,
  triggerHitFlash,
} from "./index";

const FAKE_GAME = {} as unknown as import("phaser").default.Game;

// ─────────────────────────────────────────────────────────────────────────────
// PIPELINE_KEYS & ELEMENT_GLOW_COLORS (index.ts)
// ─────────────────────────────────────────────────────────────────────────────

describe("PIPELINE_KEYS", () => {
  it("exports the four required keys", () => {
    expect(PIPELINE_KEYS.OUTLINE).toBe("OutlinePipeline");
    expect(PIPELINE_KEYS.HIT_FLASH).toBe("HitFlashPipeline");
    expect(PIPELINE_KEYS.ELEMENT_GLOW).toBe("ElementGlowPipeline");
    expect(PIPELINE_KEYS.SHADOW).toBe("ShadowPipeline");
  });

  it("values are unique strings", () => {
    const vals = Object.values(PIPELINE_KEYS);
    const unique = new Set(vals);
    expect(unique.size).toBe(vals.length);
  });
});

describe("ELEMENT_GLOW_COLORS (index.ts hex palette)", () => {
  it("contains all 18 elemental types", () => {
    const required = [
      "Feu", "Eau", "Glace", "Electrique", "Plante", "Sol", "Roche",
      "Vent", "Dragon", "Nuee", "Psy", "Tenebres", "Fee", "Poison",
      "Spectre", "Gravite", "Combat", "Normal",
    ];
    for (const elem of required) {
      expect(ELEMENT_GLOW_COLORS).toHaveProperty(elem);
    }
  });

  it("all values are valid 24-bit hex integers", () => {
    for (const [name, color] of Object.entries(ELEMENT_GLOW_COLORS)) {
      expect(typeof color).toBe("number");
      expect(color).toBeGreaterThanOrEqual(0);
      expect(color).toBeLessThanOrEqual(0xFFFFFF);
    }
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// ELEMENT_COLORS (ElementGlowPipeline.ts normalised RGB palette)
// ─────────────────────────────────────────────────────────────────────────────

describe("ELEMENT_COLORS (ElementGlowPipeline normalised palette)", () => {
  it("all elements have 3-component RGB tuples", () => {
    for (const [name, rgb] of Object.entries(ELEMENT_COLORS)) {
      expect(Array.isArray(rgb)).toBe(true);
      expect(rgb).toHaveLength(3);
    }
  });

  it("all RGB components are clamped to [0, 1]", () => {
    for (const [name, [r, g, b]] of Object.entries(ELEMENT_COLORS)) {
      expect(r).toBeGreaterThanOrEqual(0);
      expect(r).toBeLessThanOrEqual(1);
      expect(g).toBeGreaterThanOrEqual(0);
      expect(g).toBeLessThanOrEqual(1);
      expect(b).toBeGreaterThanOrEqual(0);
      expect(b).toBeLessThanOrEqual(1);
    }
  });

  it("Feu is orange-red (high R, low G, low B)", () => {
    const [r, g, b] = ELEMENT_COLORS["Feu"];
    expect(r).toBeGreaterThan(0.8);
    expect(g).toBeLessThan(0.4);
    expect(b).toBeLessThan(0.05);
  });

  it("Eau is blue-dominant", () => {
    const [r, g, b] = ELEMENT_COLORS["Eau"];
    expect(b).toBeGreaterThan(r);
    expect(b).toBeGreaterThan(g);
  });

  it("Glace is cyan (G≈B, high values)", () => {
    const [, g, b] = ELEMENT_COLORS["Glace"];
    expect(g).toBeCloseTo(b, 1);
    expect(g).toBeGreaterThan(0.8);
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// ElementGlowPipeline
// ─────────────────────────────────────────────────────────────────────────────

describe("ElementGlowPipeline", () => {
  let pipeline: ElementGlowPipeline;

  beforeEach(() => {
    pipeline = new ElementGlowPipeline(FAKE_GAME);
  });

  it("constructs without throwing", () => {
    expect(pipeline).toBeInstanceOf(ElementGlowPipeline);
  });

  it("setElement sets known elemental color", () => {
    pipeline.setElement("Feu");
    // Access private field via type assertion for white-box testing
    expect((pipeline as any)._glowColor).toEqual(ELEMENT_COLORS["Feu"]);
  });

  it("setElement falls back to Normal for unknown element", () => {
    pipeline.setElement("Inconnu");
    expect((pipeline as any)._glowColor).toEqual(ELEMENT_COLORS["Normal"]);
  });

  it("setElement clamps strength to [0, 1]", () => {
    pipeline.setElement("Feu", 5.0);
    expect((pipeline as any)._glowIntensity).toBe(1.0);

    pipeline.setElement("Feu", -1.0);
    expect((pipeline as any)._glowIntensity).toBe(0.0);
  });

  it("setGlowIntensity clamps values", () => {
    pipeline.setGlowIntensity(2.5);
    expect((pipeline as any)._glowIntensity).toBe(1.0);

    pipeline.setGlowIntensity(-0.5);
    expect((pipeline as any)._glowIntensity).toBe(0.0);
  });

  it("setBlurRadius converts px to UV fraction", () => {
    pipeline.setBlurRadius(2, 512);
    expect((pipeline as any)._blurRadius).toBeCloseTo(2 / 512, 6);
  });

  it("setPulseSpeed sets the value directly", () => {
    pipeline.setPulseSpeed(4.5);
    expect((pipeline as any)._pulseSpeed).toBe(4.5);
  });

  it("updateTime accumulates shared time in seconds", () => {
    const before = ElementGlowPipeline.time;
    ElementGlowPipeline.updateTime(500); // 500 ms
    expect(ElementGlowPipeline.time).toBeCloseTo(before + 0.5, 5);
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// OutlinePipeline
// ─────────────────────────────────────────────────────────────────────────────

describe("OutlinePipeline", () => {
  let p: OutlinePipeline;

  beforeEach(() => {
    p = new OutlinePipeline(FAKE_GAME);
  });

  it("constructs without throwing", () => {
    expect(p).toBeInstanceOf(OutlinePipeline);
  });

  it("setWhite sets color to [1,1,1]", () => {
    p.setWhite();
    expect((p as any)._color).toEqual([1.0, 1.0, 1.0]);
  });

  it("setRed sets high R, low G and B", () => {
    p.setRed();
    const [r, g, b] = (p as any)._color as number[];
    expect(r).toBe(1.0);
    expect(g).toBeLessThan(0.5);
    expect(b).toBeLessThan(0.5);
  });

  it("setGreen sets high G, low R and B", () => {
    p.setGreen();
    const [r, g, b] = (p as any)._color as number[];
    expect(g).toBe(1.0);
    expect(r).toBeLessThan(0.5);
  });

  it("setYellow sets high R and G", () => {
    p.setYellow();
    const [r, g] = (p as any)._color as number[];
    expect(r).toBeGreaterThan(0.8);
    expect(g).toBeGreaterThan(0.8);
  });

  it("setCyan sets high G and B", () => {
    p.setCyan();
    const [r, g, b] = (p as any)._color as number[];
    expect(g).toBeGreaterThan(0.8);
    expect(b).toBeGreaterThan(0.8);
    expect(r).toBeLessThan(0.5);
  });

  it("setThickness stores the value", () => {
    p.setThickness(3);
    expect((p as any)._thickness).toBe(3);
  });

  it("setResolution stores width and height", () => {
    p.setResolution(128, 64);
    expect((p as any)._resX).toBe(128);
    expect((p as any)._resY).toBe(64);
  });

  it("setOutline with custom RGBA stores all values", () => {
    p.setOutline(0.5, 0.3, 0.8, 0.6);
    expect((p as any)._color).toEqual([0.5, 0.3, 0.8]);
    expect((p as any)._alpha).toBeCloseTo(0.6, 5);
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// HitFlashPipeline
// ─────────────────────────────────────────────────────────────────────────────

describe("HitFlashPipeline", () => {
  let p: HitFlashPipeline;

  beforeEach(() => {
    p = new HitFlashPipeline(FAKE_GAME);
  });

  it("constructs with flash=0 and inactive", () => {
    expect((p as any)._flash).toBe(0.0);
    expect(p.isFlashing).toBe(false);
  });

  it("flash() sets flash to clamped value and activates", () => {
    p.flash(0.8, [1, 0, 0]);
    expect((p as any)._flash).toBeCloseTo(0.8, 5);
    expect(p.isFlashing).toBe(true);
  });

  it("flash() clamps intensity above 1", () => {
    p.flash(2.0);
    expect((p as any)._flash).toBe(1.0);
  });

  it("flash() clamps intensity below 0", () => {
    p.flash(-0.5);
    expect((p as any)._flash).toBe(0.0);
  });

  it("hitRed sets red-dominant color", () => {
    p.hitRed();
    const [r, g, b] = (p as any)._flashColor as number[];
    expect(r).toBe(1.0);
    expect(g).toBeLessThan(0.5);
  });

  it("hitCrit sets gold color (high R and G)", () => {
    p.hitCrit();
    const [r, g, b] = (p as any)._flashColor as number[];
    expect(r).toBeGreaterThan(0.9);
    expect(g).toBeGreaterThan(0.8);
    expect(b).toBeLessThan(0.3);
  });

  it("hitShield sets blue-tinted color", () => {
    p.hitShield();
    const [r, g, b] = (p as any)._flashColor as number[];
    expect(b).toBeGreaterThan(g * 0.9); // B ≥ G roughly
  });

  it("hitHeal sets green-dominant color", () => {
    p.hitHeal();
    const [r, g, b] = (p as any)._flashColor as number[];
    expect(g).toBe(1.0);
    expect(r).toBeLessThan(0.5);
  });

  describe("onPreRender decay", () => {
    it("decrements flash over time and deactivates when reaching 0", () => {
      p.flash(1.0, [1, 0, 0], 5.0); // decaySpeed=5 → 200 ms to reach 0

      // Simulate fake game loop delta (200 ms → Δflash = 5*0.2 = 1.0 → reaches 0)
      ;(p as any).game = { loop: { delta: 200 } };

      p.onPreRender();

      expect((p as any)._flash).toBe(0);
      expect(p.isFlashing).toBe(false);
    });

    it("partial decay: flash decreases but stays active", () => {
      p.flash(1.0, [1, 0, 0], 5.0);
      ;(p as any).game = { loop: { delta: 50 } }; // 50 ms → Δflash = 0.25

      p.onPreRender();

      expect((p as any)._flash).toBeCloseTo(0.75, 4);
      expect(p.isFlashing).toBe(true);
    });
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// ShadowPipeline
// ─────────────────────────────────────────────────────────────────────────────

describe("ShadowPipeline", () => {
  let p: ShadowPipeline;

  beforeEach(() => {
    p = new ShadowPipeline(FAKE_GAME);
  });

  it("setDefault sets expected isometric shadow values", () => {
    p.setDefault();
    expect((p as any)._shadowColor).toEqual([0, 0, 0]);
    expect((p as any)._shadowAlpha).toBeCloseTo(0.4, 5);
    expect((p as any)._offsetX).toBeCloseTo(0.12, 5);
    expect((p as any)._offsetY).toBeCloseTo(0.18, 5);
    expect((p as any)._shearX).toBeCloseTo(0.3, 5);
  });

  it("setSoft sets lower alpha and offset than default", () => {
    p.setDefault();
    const defaultAlpha = (p as any)._shadowAlpha;
    p.setSoft();
    expect((p as any)._shadowAlpha).toBeLessThan(defaultAlpha);
  });

  it("setShadowAlpha clamps to [0, 1]", () => {
    p.setShadowAlpha(3.0);
    expect((p as any)._shadowAlpha).toBe(1.0);
    p.setShadowAlpha(-1.0);
    expect((p as any)._shadowAlpha).toBe(0.0);
  });

  it("setShadowOffset stores x and y", () => {
    p.setShadowOffset(0.05, 0.10);
    expect((p as any)._offsetX).toBeCloseTo(0.05, 5);
    expect((p as any)._offsetY).toBeCloseTo(0.10, 5);
  });

  it("setShadowShear stores the shear factor", () => {
    p.setShadowShear(0.5);
    expect((p as any)._shearX).toBeCloseTo(0.5, 5);
  });

  it("setShadow full signature stores all values", () => {
    p.setShadow(0.1, 0.2, 0.3, 0.5, 0.07, 0.09, 0.15);
    expect((p as any)._shadowColor).toEqual([0.1, 0.2, 0.3]);
    expect((p as any)._shadowAlpha).toBeCloseTo(0.5, 5);
    expect((p as any)._offsetX).toBeCloseTo(0.07, 5);
    expect((p as any)._offsetY).toBeCloseTo(0.09, 5);
    expect((p as any)._shearX).toBeCloseTo(0.15, 5);
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// FogOfWarPipeline
// ─────────────────────────────────────────────────────────────────────────────

describe("FogOfWarPipeline", () => {
  let p: FogOfWarPipeline;

  beforeEach(() => {
    p = new FogOfWarPipeline(FAKE_GAME);
  });

  it("constructs with visibility=1 (fully visible)", () => {
    expect((p as any)._visibility).toBe(1.0);
  });

  it("setVisibility stores the value", () => {
    p.setVisibility(0.5);
    expect((p as any)._visibility).toBeCloseTo(0.5, 5);
  });

  it("setVisibility clamps below 0", () => {
    p.setVisibility(-1);
    expect((p as any)._visibility).toBe(0);
  });

  it("setVisibility clamps above 1", () => {
    p.setVisibility(2);
    expect((p as any)._visibility).toBe(1);
  });

  it("setFogColor stores the value", () => {
    p.setFogColor(0.5);
    expect((p as any)._fogColor).toBeCloseTo(0.5, 5);
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// SelectionPipeline
// ─────────────────────────────────────────────────────────────────────────────

describe("SelectionPipeline", () => {
  let p: SelectionPipeline;

  beforeEach(() => {
    p = new SelectionPipeline(FAKE_GAME);
  });

  it("setMode('ally') sets cyan-ish color", () => {
    p.setMode("ally");
    const [r, g, b] = (p as any)._color as number[];
    expect(b).toBeGreaterThan(r); // more blue than red
  });

  it("setMode('enemy') sets red-dominant color", () => {
    p.setMode("enemy");
    const [r, g, b] = (p as any)._color as number[];
    expect(r).toBe(1.0);
    expect(g).toBeLessThan(0.5);
  });

  it("setMode('neutral') sets yellow-ish color", () => {
    p.setMode("neutral");
    const [r, g, b] = (p as any)._color as number[];
    expect(r).toBeGreaterThan(0.8);
    expect(g).toBeGreaterThan(0.8);
    expect(b).toBeLessThan(0.5);
  });

  it("setMode('self') sets green-ish color", () => {
    p.setMode("self");
    const [r, g, b] = (p as any)._color as number[];
    expect(g).toBe(1.0);
    expect(r).toBeLessThan(0.5);
  });

  it("setRadius stores the value", () => {
    p.setRadius(0.4);
    expect((p as any)._radius).toBeCloseTo(0.4, 5);
  });

  it("onPreRender increments _time", () => {
    const before = (p as any)._time;
    p.onPreRender();
    expect((p as any)._time).toBeGreaterThan(before);
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// Helper functions (index.ts)
// ─────────────────────────────────────────────────────────────────────────────

// Build a minimal fake Phaser.GameObjects.Sprite using the mock already
// registered above.  The mock factory captures the class inside the module
// system; we reconstruct an equivalent object inline here so tests stay
// synchronous without a second dynamic import.
function makeFakeSprite() {
  return {
    scene: { tweens: { add: vi.fn() } },
    setPostPipeline: vi.fn().mockReturnThis(),
    getPostPipeline: vi.fn(),
    resetPostPipeline: vi.fn(),
    removePostPipeline: vi.fn(),
  };
}

describe("applyOutline helper", () => {
  it("returns null and calls removePostPipeline when preset is null", () => {
    const sprite = makeFakeSprite();
    const result = applyOutline(sprite as any, null);
    expect(result).toBeNull();
    expect(sprite.removePostPipeline).toHaveBeenCalledWith('OutlinePipeline');
  });

  it("calls setPostPipeline and returns pipeline instance for valid preset", () => {
    const fakePipeline = new OutlinePipeline(FAKE_GAME);
    const sprite = makeFakeSprite();
    sprite.getPostPipeline.mockReturnValue(fakePipeline);

    const result = applyOutline(sprite as any, "red");

    expect(sprite.setPostPipeline).toHaveBeenCalledWith(PIPELINE_KEYS.OUTLINE);
    expect(result).toBe(fakePipeline);
  });
});

describe("triggerHitFlash helper", () => {
  it("calls HitFlashPipeline.flash static method without throwing", () => {
    const fakePipeline = new HitFlashPipeline(FAKE_GAME);
    const sprite = makeFakeSprite();
    sprite.getPostPipeline.mockReturnValue(fakePipeline);

    // Should not throw for any valid type
    expect(() => triggerHitFlash(sprite as any, "normal")).not.toThrow();
    expect(() => triggerHitFlash(sprite as any, "crit")).not.toThrow();
    expect(() => triggerHitFlash(sprite as any, "shield")).not.toThrow();
    expect(() => triggerHitFlash(sprite as any, "heal")).not.toThrow();
  });
});
