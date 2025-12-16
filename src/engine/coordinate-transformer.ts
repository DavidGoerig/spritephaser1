import { Direction } from "./types";

/**
 * Handles coordinate transformations for the isometric grid.
 * Separated from Grid to improve maintainability and testability.
 */
export class CoordinateTransformer {
  constructor(
    private width: number,
    private height: number,
    private column: number,
    private row: number
  ) {}

  /**
   * Convert logical grid coordinates (x, y) into
   * cartesian coordinates depending on current view
   * direction. These cartesian coordinates are then
   * mapped to isometric space.
   */
  getRenderCartCoords(x: number, y: number, direction: Direction): [number, number] {
    switch (direction) {
      case Direction.North:
        return [x * this.width, y * this.height];
      case Direction.East:
        // Rotate 90° clockwise
        return [y * this.width, (this.column - 1 - x) * this.height];
      case Direction.South:
        // Rotate 180°
        return [(this.column - 1 - x) * this.width, (this.row - 1 - y) * this.height];
      case Direction.West:
        // Rotate 270° clockwise (or 90° CCW)
        return [(this.row - 1 - y) * this.width, x * this.height];
      default:
        return [x * this.width, y * this.height];
    }
  }
}

