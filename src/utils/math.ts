export const clamp = (val: number, min: number, max: number) => Math.min(Math.max(val, min), max);

export const cart2iso = (x: number, y: number) => [
  x - y,
  (x + y) / 2
];

export const iso2cart = (x: number, y: number) => [
  (2 * y + x) / 2, 
  (2 * y - x) / 2
];

/**
 * Calculate isometric screen position from grid coordinates.
 * This function centralizes the coordinate transformation logic
 * that was duplicated across multiple files.
 * 
 * @param cartX - Cartesian X coordinate (from getRenderCartCoords)
 * @param cartY - Cartesian Y coordinate (from getRenderCartCoords)
 * @param z - Z level (height)
 * @param offsetX - Screen X offset (default: Grid.OFFSET_X)
 * @param offsetY - Screen Y offset (default: Grid.OFFSET_Y)
 * @param offsetZ - Z level vertical step (default: Grid.OFFSET_Z)
 * @returns [screenX, screenY] - Final screen coordinates
 */
export const calculateIsoScreenPosition = (
  cartX: number,
  cartY: number,
  z: number = 0,
  offsetX: number = 512,
  offsetY: number = 288,
  offsetZ: number = 32
): [number, number] => {
  const [isoX, isoY] = cart2iso(cartX, cartY);
  const screenX = (isoX / 2) + offsetX;
  const screenY = (isoY / 2) + offsetY - offsetZ * z;
  return [screenX, screenY];
};
