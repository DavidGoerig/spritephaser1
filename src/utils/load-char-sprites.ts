import { charSpriteTexKey, type AnimState } from '../engine/char-sprite';

const DIRECTIONAL_STATES: AnimState[] = [
  'idle', 'run',
  'attack-01', 'attack-02', 'attack-03', 'attack-04', 'attack-05',
  'attack-06', 'attack-07', 'attack-08', 'attack-09', 'attack-10',
];
const NON_DIRECTIONAL_STATES: AnimState[] = ['hurt', 'die'];

const FRAME_W = 128;
const FRAME_H = 192;

/**
 * Queue spritesheet loads for one character in scene.preload().
 * Silently skipped if files don't exist (loader error is caught globally).
 *
 * @param scene  - The Phaser Scene (must be called inside preload())
 * @param charId - Numeric character ID
 * @param folder - Directory name under public/characters/ (e.g. "001-pyrakh")
 */
export function loadCharSprites(
  scene: Phaser.Scene,
  charId: number,
  folder: string,
): void {
  const base = `/characters/${folder}/sprites`;

  for (const state of DIRECTIONAL_STATES) {
    for (const dir of [0, 1, 2, 3] as const) {
      scene.load.spritesheet(
        charSpriteTexKey(charId, state, dir),
        `${base}/${state}-${dir}.png`,
        { frameWidth: FRAME_W, frameHeight: FRAME_H },
      );
    }
  }

  for (const state of NON_DIRECTIONAL_STATES) {
    // Non-directional key has no dir suffix (charSpriteTexKey ignores dir for these)
    scene.load.spritesheet(
      charSpriteTexKey(charId, state, 0),
      `${base}/${state}.png`,
      { frameWidth: FRAME_W, frameHeight: FRAME_H },
    );
  }
}

/**
 * Characters with baked sprites on disk (folder → charId mapping).
 * Update this list after each baking run.
 */
export const BAKED_CHARS: { id: number; folder: string }[] = [
  { id:  1, folder: '001-pyrakh' },
  { id:  2, folder: '002-kaelsa-la-braise' },
  { id:  3, folder: '003-durhn' },
  { id:  4, folder: '004-sira' },
  { id:  5, folder: '005-auren' },
  { id:  6, folder: '006-vaela' },
  { id:  8, folder: '008-velindra' },
  { id:  9, folder: '009-skarith' },
  { id: 12, folder: '012-tarakh' },
  { id: 95, folder: '095-fulgur' },
];
