import type Game from '../game';
import type { CombatManager } from './combat-manager';
import type { CombatUnit } from './combat-unit';

type OverlayType = 'move' | 'spell' | 'enemy';

const FILL: Record<OverlayType, { color: number; alpha: number; stroke: number }> = {
  move:  { color: 0x00CCFF, alpha: 0.38, stroke: 0x00EEFF },
  spell: { color: 0x8833FF, alpha: 0.38, stroke: 0xBB66FF },
  enemy: { color: 0xFF2200, alpha: 0.45, stroke: 0xFF6644 },
};

interface TileHighlight {
  gfx: Phaser.GameObjects.Graphics;
  type: OverlayType;
  gridX: number;
  gridY: number;
}

export class RangeOverlay {
  private scene: Game;
  private highlights: TileHighlight[] = [];
  private areaGfx: Phaser.GameObjects.Graphics | null = null;

  constructor(scene: Game) {
    this.scene = scene;
  }

  showMoveRange(caster: CombatUnit, moveRange: number, manager: CombatManager) {
    this.clear();
    for (let x = 0; x < 10; x++) {
      for (let y = 0; y < 10; y++) {
        const dist = Math.abs(x - caster.x) + Math.abs(y - caster.y);
        if (dist === 0 || dist > moveRange) continue;
        if (manager.getUnitAt(x, y)) continue;
        const tile = this.scene.grid.getTopTile(x, y);
        if (!tile) continue;
        this.addHighlight(x, y, tile.worldX, tile.worldY, tile.depth, 'move');
      }
    }
  }

  showSpellRange(caster: CombatUnit, portee: number, manager: CombatManager) {
    this.clear();
    for (let x = 0; x < 10; x++) {
      for (let y = 0; y < 10; y++) {
        const dist = Math.abs(x - caster.x) + Math.abs(y - caster.y);
        if (dist === 0 || dist > portee) continue;
        const tile = this.scene.grid.getTopTile(x, y);
        if (!tile) continue;
        const unit = manager.getUnitAt(x, y);
        const type: OverlayType = (unit && unit.team !== caster.team) ? 'enemy' : 'spell';
        this.addHighlight(x, y, tile.worldX, tile.worldY, tile.depth, type);
      }
    }
  }

  refresh() {
    for (const h of this.highlights) {
      const tile = this.scene.grid.getTopTile(h.gridX, h.gridY);
      if (!tile) continue;
      h.gfx.setDepth(tile.depth + 1);
      this.drawDiamond(h.gfx, tile.worldX, tile.worldY, FILL[h.type]);
    }
  }

  showSpellArea(tiles: Array<{ x: number; y: number }>) {
    if (!this.areaGfx) {
      this.areaGfx = this.scene.add.graphics().setScrollFactor(1).setDepth(99990);
    }
    this.areaGfx.clear();
    const s = { color: 0xFF8800, alpha: 0.48, stroke: 0xFFAA44 };
    for (const { x, y } of tiles) {
      const tile = this.scene.grid.getTopTile(x, y);
      if (!tile) continue;
      this.drawDiamond(this.areaGfx, tile.worldX, tile.worldY, s);
    }
  }

  clearArea() {
    this.areaGfx?.clear();
  }

  clear() {
    for (const h of this.highlights) h.gfx.destroy();
    this.highlights = [];
  }

  private addHighlight(gx: number, gy: number, wx: number, wy: number, tileDepth: number, type: OverlayType) {
    const gfx = this.scene.add.graphics().setScrollFactor(1).setDepth(tileDepth + 1);
    this.drawDiamond(gfx, wx, wy, FILL[type]);
    this.highlights.push({ gfx, type, gridX: gx, gridY: gy });
  }

  private drawDiamond(
    gfx: Phaser.GameObjects.Graphics,
    wx: number, wy: number,
    s: { color: number; alpha: number; stroke: number },
  ) {
    gfx.clear();
    // fill
    gfx.fillStyle(s.color, s.alpha);
    gfx.beginPath();
    gfx.moveTo(wx,      wy - 16);
    gfx.lineTo(wx + 32, wy);
    gfx.lineTo(wx,      wy + 16);
    gfx.lineTo(wx - 32, wy);
    gfx.closePath();
    gfx.fillPath();
    // outline
    gfx.lineStyle(1.5, s.stroke, 0.85);
    gfx.beginPath();
    gfx.moveTo(wx,      wy - 16);
    gfx.lineTo(wx + 32, wy);
    gfx.lineTo(wx,      wy + 16);
    gfx.lineTo(wx - 32, wy);
    gfx.closePath();
    gfx.strokePath();
  }
}
