export type TileSetter = {
  id: number,
  z?: number,
  object?: number,
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

