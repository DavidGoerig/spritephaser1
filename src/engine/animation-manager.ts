import Game from "../game";

/**
 * Manages animations for tiles and objects.
 * Separated from Grid to improve maintainability.
 */
export class AnimationManager {
  anims: Set<string> = new Set();
  offsets: Map<string, number> = new Map();

  constructor(private scene: Game) {}

  /**
   * Create an animation from a loaded texture.
   */
  createAnimation(
    key: string,
    framerate?: number,
    repeat?: number,
    repeatDelay?: number
  ): void {
    try {
      this.scene.anims.create({
        key: key,
        frames: this.scene.anims.generateFrameNumbers(key),
        frameRate: framerate ?? 8,
        repeat: repeat ?? -1,
        repeatDelay: repeatDelay ?? 0,
      });

      this.anims.add(key);
    } catch (error) {
      console.error(`Error creating animation '${key}':`, error);
    }
  }

  /**
   * Check if an animation exists for a given key.
   */
  hasAnimation(key: string): boolean {
    return this.anims.has(key);
  }

  /**
   * Set offset for an object sprite.
   */
  setOffset(key: string, offset: number): void {
    this.offsets.set(key, offset);
  }

  /**
   * Get offset for an object sprite.
   */
  getOffset(key: string): number {
    return this.offsets.get(key) ?? 0;
  }
}

