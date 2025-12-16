/**
 * Unit tests for CoordinateTransformer.
 * Tests coordinate transformation logic for different view directions.
 */

import { describe, it, expect } from "vitest";
import { CoordinateTransformer } from "./coordinate-transformer";
import { Direction } from "./types";

describe("CoordinateTransformer", () => {
  const transformer = new CoordinateTransformer(64, 64, 10, 10);

  describe("getRenderCartCoords", () => {
    it("should return correct coordinates for North direction", () => {
      const [x, y] = transformer.getRenderCartCoords(5, 5, Direction.North);
      expect(x).toBe(320); // 5 * 64
      expect(y).toBe(320); // 5 * 64
    });

    it("should rotate coordinates for East direction", () => {
      const [x, y] = transformer.getRenderCartCoords(5, 5, Direction.East);
      expect(x).toBe(320); // 5 * 64
      expect(y).toBe(256); // (10 - 1 - 5) * 64 = 4 * 64
    });

    it("should rotate coordinates for South direction", () => {
      const [x, y] = transformer.getRenderCartCoords(5, 5, Direction.South);
      expect(x).toBe(256); // (10 - 1 - 5) * 64
      expect(y).toBe(256); // (10 - 1 - 5) * 64
    });

    it("should rotate coordinates for West direction", () => {
      const [x, y] = transformer.getRenderCartCoords(5, 5, Direction.West);
      expect(x).toBe(256); // (10 - 1 - 5) * 64
      expect(y).toBe(320); // 5 * 64
    });

    it("should handle edge coordinates", () => {
      const [x, y] = transformer.getRenderCartCoords(0, 0, Direction.North);
      expect(x).toBe(0);
      expect(y).toBe(0);
    });

    it("should handle maximum coordinates", () => {
      const [x, y] = transformer.getRenderCartCoords(9, 9, Direction.North);
      expect(x).toBe(576); // 9 * 64
      expect(y).toBe(576); // 9 * 64
    });
  });
});

