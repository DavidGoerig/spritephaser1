/**
 * Unit tests for the engine configuration system.
 * validateConfig and DEFAULT_CONFIG are pure functions with no Phaser dependency.
 */

import { describe, it, expect, vi } from "vitest";
import { DEFAULT_CONFIG, validateConfig } from "./config";

describe("DEFAULT_CONFIG", () => {
  it("has expected default values", () => {
    expect(DEFAULT_CONFIG.width).toBe(64);
    expect(DEFAULT_CONFIG.height).toBe(64);
    expect(DEFAULT_CONFIG.column).toBe(10);
    expect(DEFAULT_CONFIG.row).toBe(10);
    expect(DEFAULT_CONFIG.offsetX).toBe(512);
    expect(DEFAULT_CONFIG.offsetY).toBe(288);
    expect(DEFAULT_CONFIG.offsetZ).toBe(32);
    expect(DEFAULT_CONFIG.maxZ).toBe(8);
  });

  it("all numeric values are positive", () => {
    for (const [key, val] of Object.entries(DEFAULT_CONFIG)) {
      expect(val).toBeGreaterThan(0);
    }
  });
});

describe("validateConfig", () => {
  it("returns DEFAULT_CONFIG values when called with empty object", () => {
    const config = validateConfig({});
    expect(config).toEqual(DEFAULT_CONFIG);
  });

  it("merges partial config over defaults", () => {
    const config = validateConfig({ column: 20, row: 15 });
    expect(config.column).toBe(20);
    expect(config.row).toBe(15);
    expect(config.width).toBe(DEFAULT_CONFIG.width);   // untouched
  });

  it("resets width and height to defaults when width <= 0", () => {
    const consoleSpy = vi.spyOn(console, "warn").mockImplementation(() => {});
    const config = validateConfig({ width: -5, height: 32 });
    expect(config.width).toBe(DEFAULT_CONFIG.width);
    expect(config.height).toBe(DEFAULT_CONFIG.height);
    consoleSpy.mockRestore();
  });

  it("resets width and height to defaults when height <= 0", () => {
    const consoleSpy = vi.spyOn(console, "warn").mockImplementation(() => {});
    const config = validateConfig({ width: 64, height: 0 });
    expect(config.width).toBe(DEFAULT_CONFIG.width);
    expect(config.height).toBe(DEFAULT_CONFIG.height);
    consoleSpy.mockRestore();
  });

  it("resets column and row to defaults when column <= 0", () => {
    const consoleSpy = vi.spyOn(console, "warn").mockImplementation(() => {});
    const config = validateConfig({ column: 0, row: 5 });
    expect(config.column).toBe(DEFAULT_CONFIG.column);
    expect(config.row).toBe(DEFAULT_CONFIG.row);
    consoleSpy.mockRestore();
  });

  it("resets maxZ to default when maxZ < 0", () => {
    const consoleSpy = vi.spyOn(console, "warn").mockImplementation(() => {});
    const config = validateConfig({ maxZ: -1 });
    expect(config.maxZ).toBe(DEFAULT_CONFIG.maxZ);
    consoleSpy.mockRestore();
  });

  it("resets maxZ to default when maxZ > 100", () => {
    const consoleSpy = vi.spyOn(console, "warn").mockImplementation(() => {});
    const config = validateConfig({ maxZ: 200 });
    expect(config.maxZ).toBe(DEFAULT_CONFIG.maxZ);
    consoleSpy.mockRestore();
  });

  it("accepts maxZ at boundary value 100", () => {
    const config = validateConfig({ maxZ: 100 });
    expect(config.maxZ).toBe(100);
  });

  it("accepts maxZ at boundary value 0", () => {
    const config = validateConfig({ maxZ: 0 });
    expect(config.maxZ).toBe(0);
  });

  it("preserves valid offset values unchanged", () => {
    const config = validateConfig({ offsetX: 1024, offsetY: 512, offsetZ: 16 });
    expect(config.offsetX).toBe(1024);
    expect(config.offsetY).toBe(512);
    expect(config.offsetZ).toBe(16);
  });

  it("does not mutate DEFAULT_CONFIG", () => {
    const before = { ...DEFAULT_CONFIG };
    validateConfig({ width: -1, column: -1, maxZ: 999 });
    expect(DEFAULT_CONFIG).toEqual(before);
  });
});
