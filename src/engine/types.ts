export type TileSetter = {
  id: number,
  z?: number,
  object?: number,
  direction?: Direction | StairDirection,  // For directional tiles: Direction for regular, StairDirection for stairs
} | number;

export type OptionalTileSetter = TileSetter | 0 | null;

// ------------------------------------------------
// VIEW DIRECTION
// ------------------------------------------------
// Direction indices are ordered so they can be used
// directly as frame indices (0..3) in spritesheets:
//   0: North, 1: East, 2: South, 3: West
export enum Direction {
  North = 0,
  East = 1,
  South = 2,
  West = 3,
}

// ------------------------------------------------
// STAIR DIRECTION (diagonal)
// ------------------------------------------------
// Stairs connect diagonal corners. Frame order in spritesheet:
//   0: South East → North West
//   1: South West → North East
//   2: North West → South East
//   3: North East → South West
export enum StairDirection {
  SouthEastToNorthWest = 0,  // SE → NW
  SouthWestToNorthEast = 1,  // SW → NE
  NorthWestToSouthEast = 2,  // NW → SE
  NorthEastToSouthWest = 3,  // NE → SW
}

