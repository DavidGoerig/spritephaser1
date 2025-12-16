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
  });
});

