/**
 * Configuration system for the isometric engine.
 * Allows runtime configuration of grid dimensions, tile sizes, and offsets.
 */

export interface GridConfig {
  // Tile dimensions (before isometric projection)
  width: number;
  height: number;

  // Grid size
  column: number;
  row: number;

  // Screen offsets
  offsetX: number;
  offsetY: number;
  offsetZ: number;

  // Maximum height (number of stacked levels)
  maxZ: number;
}

/**
 * Default configuration values.
 * These match the original hardcoded values for backward compatibility.
 */
export const DEFAULT_CONFIG: GridConfig = {
  width: 64,
  height: 64,
  column: 10,
  row: 10,
  offsetX: 512,
  offsetY: 288,
  offsetZ: 32,
  maxZ: 8,
};

/**
 * Validate configuration values.
 * Ensures all values are positive and within reasonable bounds.
 */
export function validateConfig(config: Partial<GridConfig>): GridConfig {
  const validated: GridConfig = {
    ...DEFAULT_CONFIG,
    ...config,
  };

  // Validate dimensions
  if (validated.width <= 0 || validated.height <= 0) {
    console.warn("Invalid tile dimensions, using defaults");
    validated.width = DEFAULT_CONFIG.width;
    validated.height = DEFAULT_CONFIG.height;
  }

  if (validated.column <= 0 || validated.row <= 0) {
    console.warn("Invalid grid size, using defaults");
    validated.column = DEFAULT_CONFIG.column;
    validated.row = DEFAULT_CONFIG.row;
  }

  if (validated.maxZ < 0 || validated.maxZ > 100) {
    console.warn("Invalid maxZ, using default");
    validated.maxZ = DEFAULT_CONFIG.maxZ;
  }

  return validated;
}

