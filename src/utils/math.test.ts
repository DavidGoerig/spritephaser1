/**
 * Unit tests for math utility functions.
 * Tests coordinate transformations and clamping.
 */

import { describe, it, expect } from "vitest";
import { clamp, cart2iso, iso2cart, calculateIsoScreenPosition } from "./math";

describe("Math Utilities", () => {
  describe("clamp", () => {
    it("should clamp value to min when below minimum", () => {
      expect(clamp(5, 10, 20)).toBe(10);
    });

    it("should clamp value to max when above maximum", () => {
      expect(clamp(25, 10, 20)).toBe(20);
    });

    it("should return value when within range", () => {
      expect(clamp(15, 10, 20)).toBe(15);
    });

    it("should handle edge cases", () => {
      expect(clamp(10, 10, 20)).toBe(10);
      expect(clamp(20, 10, 20)).toBe(20);
    });

    // ── Tests manquants ──────────────────────────────────────────────────────

    it("should handle min === max (degenerate range)", () => {
      expect(clamp(5, 7, 7)).toBe(7);
      expect(clamp(7, 7, 7)).toBe(7);
      expect(clamp(9, 7, 7)).toBe(7);
    });

    it("should handle floating-point values", () => {
      expect(clamp(0.3, 0.1, 0.5)).toBeCloseTo(0.3, 10);
      expect(clamp(-0.1, 0.0, 1.0)).toBeCloseTo(0.0, 10);
      expect(clamp(1.1, 0.0, 1.0)).toBeCloseTo(1.0, 10);
    });

    it("should handle negative ranges", () => {
      expect(clamp(-5, -10, -3)).toBe(-5);
      expect(clamp(-15, -10, -3)).toBe(-10);
      expect(clamp(0, -10, -3)).toBe(-3);
    });
  });

  describe("cart2iso", () => {
    it("should convert cartesian to isometric coordinates", () => {
      const [isoX, isoY] = cart2iso(100, 100);
      expect(isoX).toBe(0); // x - y = 100 - 100 = 0
      expect(isoY).toBe(100); // (x + y) / 2 = 200 / 2 = 100
    });

    it("should handle zero coordinates", () => {
      const [isoX, isoY] = cart2iso(0, 0);
      expect(isoX).toBe(0);
      expect(isoY).toBe(0);
    });

    it("should handle negative coordinates", () => {
      const [isoX, isoY] = cart2iso(-50, 50);
      expect(isoX).toBe(-100);
      expect(isoY).toBe(0);
    });

    // ── Tests manquants ──────────────────────────────────────────────────────

    it("should produce isoX = 0 when x === y (diagonal line)", () => {
      for (const v of [0, 64, 128, -32]) {
        const [isoX] = cart2iso(v, v);
        expect(isoX).toBe(0);
      }
    });

    it("isoY should always be (x+y)/2", () => {
      const cases: [number, number][] = [[0, 64], [64, 0], [128, 64], [-64, 64]];
      for (const [x, y] of cases) {
        const [, isoY] = cart2iso(x, y);
        expect(isoY).toBeCloseTo((x + y) / 2, 10);
      }
    });

    it("should handle tile-grid values (multiples of 64)", () => {
      const [isoX, isoY] = cart2iso(64, 0);
      expect(isoX).toBe(64);
      expect(isoY).toBe(32);
    });
  });

  describe("iso2cart", () => {
    it("should convert isometric to cartesian coordinates", () => {
      const [cartX, cartY] = iso2cart(0, 100);
      expect(cartX).toBe(100);
      expect(cartY).toBe(100);
    });

    it("should round-trip with cart2iso", () => {
      const originalX = 100;
      const originalY = 100;
      const [isoX, isoY] = cart2iso(originalX, originalY);
      const [cartX, cartY] = iso2cart(isoX, isoY);
      expect(cartX).toBeCloseTo(originalX, 5);
      expect(cartY).toBeCloseTo(originalY, 5);
    });

    // ── Tests manquants ──────────────────────────────────────────────────────

    it("round-trips over multiple grid positions", () => {
      const positions: [number, number][] = [
        [0, 0], [64, 0], [0, 64], [64, 64],
        [320, 192], [-64, 128], [128, -64],
      ];
      for (const [x, y] of positions) {
        const [isoX, isoY] = cart2iso(x, y);
        const [rx, ry] = iso2cart(isoX, isoY);
        expect(rx).toBeCloseTo(x, 5);
        expect(ry).toBeCloseTo(y, 5);
      }
    });

    it("should correctly invert for asymmetric inputs", () => {
      const [cartX, cartY] = iso2cart(64, 32);
      // iso2cart(64, 32) = ((64+64)/2, (64-64)/2) = (64, 0)
      expect(cartX).toBeCloseTo(64, 5);
      expect(cartY).toBeCloseTo(0, 5);
    });
  });

  describe("calculateIsoScreenPosition", () => {
    it("should calculate screen position with default offsets", () => {
      const [screenX, screenY] = calculateIsoScreenPosition(100, 100, 0);
      expect(screenX).toBeGreaterThan(0);
      expect(screenY).toBeGreaterThan(0);
    });

    it("should apply Z offset correctly", () => {
      const [screenX1, screenY1] = calculateIsoScreenPosition(100, 100, 0, 512, 288, 32);
      const [screenX2, screenY2] = calculateIsoScreenPosition(100, 100, 1, 512, 288, 32);

      expect(screenX1).toBe(screenX2); // X should be the same
      expect(screenY2).toBeLessThan(screenY1); // Y should decrease (move up) with higher Z
    });

    it("should use custom offsets", () => {
      const [screenX, screenY] = calculateIsoScreenPosition(0, 0, 0, 0, 0, 0);
      expect(screenX).toBe(0);
      expect(screenY).toBe(0);
    });

    // ── Tests manquants ──────────────────────────────────────────────────────

    /**
     * Vérifie la formule exacte :
     *   [isoX, isoY] = cart2iso(cartX, cartY)
     *   screenX = isoX/2 + offsetX
     *   screenY = isoY/2 + offsetY - offsetZ * z
     */
    it("matches the explicit formula for known inputs", () => {
      const cartX = 128, cartY = 64, z = 2;
      const offsetX = 512, offsetY = 288, offsetZ = 32;

      const [isoX, isoY] = cart2iso(cartX, cartY);
      const expectedX = isoX / 2 + offsetX;
      const expectedY = isoY / 2 + offsetY - offsetZ * z;

      const [screenX, screenY] = calculateIsoScreenPosition(cartX, cartY, z, offsetX, offsetY, offsetZ);
      expect(screenX).toBeCloseTo(expectedX, 10);
      expect(screenY).toBeCloseTo(expectedY, 10);
    });

    it("screen X is independent of Z", () => {
      for (const z of [0, 1, 3, 5]) {
        const [screenX] = calculateIsoScreenPosition(200, 100, z, 512, 288, 32);
        const [baseX]   = calculateIsoScreenPosition(200, 100, 0, 512, 288, 32);
        expect(screenX).toBeCloseTo(baseX, 10);
      }
    });

    it("each Z level decreases screenY by exactly offsetZ", () => {
      const offsetZ = 32;
      const [, y0] = calculateIsoScreenPosition(64, 64, 0, 512, 288, offsetZ);
      const [, y1] = calculateIsoScreenPosition(64, 64, 1, 512, 288, offsetZ);
      const [, y2] = calculateIsoScreenPosition(64, 64, 2, 512, 288, offsetZ);
      expect(y0 - y1).toBeCloseTo(offsetZ, 10);
      expect(y1 - y2).toBeCloseTo(offsetZ, 10);
    });

    it("zero cartesian inputs with non-zero offsets gives back the offsets", () => {
      const [screenX, screenY] = calculateIsoScreenPosition(0, 0, 0, 256, 144, 32);
      // cart2iso(0,0) = [0, 0] → screenX = 0/2 + 256 = 256, screenY = 0/2 + 144 - 0 = 144
      expect(screenX).toBeCloseTo(256, 10);
      expect(screenY).toBeCloseTo(144, 10);
    });

    it("default offset values match engine DEFAULT_CONFIG", async () => {
      // Validate that the default parameters are consistent with DEFAULT_CONFIG
      const { DEFAULT_CONFIG } = await import("../engine/config");
      const [sx, sy] = calculateIsoScreenPosition(64, 64, 0);
      const [sxExplicit, syExplicit] = calculateIsoScreenPosition(
        64, 64, 0,
        DEFAULT_CONFIG.offsetX,
        DEFAULT_CONFIG.offsetY,
        DEFAULT_CONFIG.offsetZ,
      );
      expect(sx).toBeCloseTo(sxExplicit, 10);
      expect(sy).toBeCloseTo(syExplicit, 10);
    });
  });
});
