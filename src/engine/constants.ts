/**
 * Constants for the isometric engine.
 * Centralizes all magic numbers and configuration values.
 */

// ------------------------------------------------
// TACTICAL MODE CONSTANTS
// ------------------------------------------------
export const TACTICAL_MODE = {
  // Z-level tint colors (darker = higher)
  TINT_COLORS: [0xffffff, 0xaaccff, 0x6699ff, 0x3366ff, 0x0033ff, 0x0000cc],
  
  // Text label offset above tile
  TEXT_OFFSET_Y: 20,
  
  // Text styling
  TEXT_FONT_SIZE: "10px",
  TEXT_COLOR: "#ffffff",
  TEXT_STROKE: "#000000",
  TEXT_STROKE_THICKNESS: 2,
  
  // Depth offset for text labels (ensures they render above tiles)
  TEXT_DEPTH_OFFSET: 1000,
} as const;

export const TACTICAL_MODE_2 = {
  // Ghost cube styling
  GHOST_ALPHA: 0.2,
  GHOST_TINT: 0x666666,
  GHOST_DEPTH_OFFSET: -0.5, // Slightly behind real cubes
  
  // Alpha calculation for hidden cubes
  MIN_ALPHA: 0.3,
  ALPHA_INCREMENT: 0.15,
  MAX_ALPHA: 0.7,
} as const;

// ------------------------------------------------
// HIGHLIGHT CONSTANTS
// ------------------------------------------------
export const HIGHLIGHT = {
  // Normal mode highlight color
  COLOR: 0xffff00,
  
  // Tactical mode highlight brightness increase
  BRIGHTNESS_INCREASE: 30, // percentage
} as const;

// ------------------------------------------------
// UI CONSTANTS
// ------------------------------------------------
export const UI = {
  // Info panel
  INFO_MARGIN: 10,
  INFO_BG_WIDTH: 220,
  INFO_BG_HEIGHT: 70,
  INFO_TEXT_PADDING: 8,
  INFO_TEXT_FONT_SIZE: "12px",
  INFO_TEXT_COLOR: "#ffffff",
  INFO_BG_COLOR: 0x000000,
  INFO_BG_ALPHA: 0.6,
  
  // Hover selector
  SELECTOR_DEPTH: 9999,
  SELECTOR_ALPHA: 0.5,
} as const;

// ------------------------------------------------
// ANIMATION CONSTANTS
// ------------------------------------------------
export const ANIMATION = {
  DEFAULT_FRAME_RATE: 8,
  DEFAULT_REPEAT: -1, // infinite
  DEFAULT_REPEAT_DELAY: 0,
} as const;

