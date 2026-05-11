/**
 * Unit tests for CoordinateTransformer.
 * Tests coordinate transformation logic for different view directions.
 */

import { describe, it, expect } from "vitest";
import { CoordinateTransformer } from "./coordinate-transformer";
import { Direction } from "./types";

describe("CoordinateTransformer", () => {
  const transformer = new CoordinateTransformer(64, 64, 10, 10);

  describe("getRenderCartCoords", () => {
    it("should return correct coordinates for North direction", () => {
      const [x, y] = transformer.getRenderCartCoords(5, 5, Direction.North);
      expect(x).toBe(320); // 5 * 64
      expect(y).toBe(320); // 5 * 64
    });

    it("should rotate coordinates for East direction", () => {
      const [x, y] = transformer.getRenderCartCoords(5, 5, Direction.East);
      expect(x).toBe(320); // 5 * 64
      expect(y).toBe(256); // (10 - 1 - 5) * 64 = 4 * 64
    });

    it("should rotate coordinates for South direction", () => {
      const [x, y] = transformer.getRenderCartCoords(5, 5, Direction.South);
      expect(x).toBe(256); // (10 - 1 - 5) * 64
      expect(y).toBe(256); // (10 - 1 - 5) * 64
    });

    it("should rotate coordinates for West direction", () => {
      const [x, y] = transformer.getRenderCartCoords(5, 5, Direction.West);
      expect(x).toBe(256); // (10 - 1 - 5) * 64
      expect(y).toBe(320); // 5 * 64
    });

    it("should handle edge coordinates", () => {
      const [x, y] = transformer.getRenderCartCoords(0, 0, Direction.North);
      expect(x).toBe(0);
      expect(y).toBe(0);
    });

    it("should handle maximum coordinates", () => {
      const [x, y] = transformer.getRenderCartCoords(9, 9, Direction.North);
      expect(x).toBe(576); // 9 * 64
      expect(y).toBe(576); // 9 * 64
    });
  });

  // ── Tests manquants critiques ──────────────────────────────────────────────

  describe("rotation symmetry", () => {
    /**
     * Une rotation de 180° appliquée deux fois doit revenir à l'état initial.
     * North → South → North
     */
    it("South should be the inverse of North (180° rotation)", () => {
      const [nX, nY] = transformer.getRenderCartCoords(3, 7, Direction.North);
      const [sX, sY] = transformer.getRenderCartCoords(9 - 3, 9 - 7, Direction.North);
      const [southX, southY] = transformer.getRenderCartCoords(3, 7, Direction.South);
      expect(southX).toBe(sX);
      expect(southY).toBe(sY);
    });

    /**
     * Pour (0,0) en North : (0,0).
     * En South (180°) : (col-1)*w, (row-1)*h = 9*64, 9*64 = 576, 576.
     */
    it("South of (0,0) should map to the far corner", () => {
      const [x, y] = transformer.getRenderCartCoords(0, 0, Direction.South);
      expect(x).toBe(9 * 64); // (10-1-0)*64
      expect(y).toBe(9 * 64); // (10-1-0)*64
    });

    /**
     * East: (x,y) → (y * w, (col-1-x) * h)
     * Coin (0,0) → (0, 9*64)
     */
    it("East of (0,0) should map to (0, max-y)", () => {
      const [x, y] = transformer.getRenderCartCoords(0, 0, Direction.East);
      expect(x).toBe(0);
      expect(y).toBe(9 * 64);
    });

    /**
     * West: (x,y) → ((row-1-y)*w, x*h)
     * Coin (0,0) → (9*64, 0)
     */
    it("West of (0,0) should map to (max-x, 0)", () => {
      const [x, y] = transformer.getRenderCartCoords(0, 0, Direction.West);
      expect(x).toBe(9 * 64);
      expect(y).toBe(0);
    });
  });

  describe("non-square grid", () => {
    /**
     * Vérifie que column et row sont bien distingués sur une grille non carrée.
     * column=8, row=5 — l'inversion de x et y doit respecter les bonnes dimensions.
     */
    it("uses column for x-axis inversion and row for y-axis inversion", () => {
      const rect = new CoordinateTransformer(32, 32, 8, 5); // 8 cols, 5 rows
      // South: x' = (col-1-x)*w, y' = (row-1-y)*h
      const [x, y] = rect.getRenderCartCoords(0, 0, Direction.South);
      expect(x).toBe(7 * 32); // (8-1-0)*32
      expect(y).toBe(4 * 32); // (5-1-0)*32
    });

    it("East uses column for x inversion, not row", () => {
      const rect = new CoordinateTransformer(32, 32, 8, 5);
      // East: x' = y*w, y' = (col-1-x)*h
      const [ex, ey] = rect.getRenderCartCoords(2, 3, Direction.East);
      expect(ex).toBe(3 * 32); // y=3
      expect(ey).toBe((8 - 1 - 2) * 32); // (col-1-x) = 5
    });
  });

  describe("tile size scaling", () => {
    /**
     * Les coordonnées doivent scaler linéairement avec la taille des tuiles.
     */
    it("doubles coordinates when tile size is doubled", () => {
      const small = new CoordinateTransformer(32, 32, 10, 10);
      const large = new CoordinateTransformer(64, 64, 10, 10);
      const [sx, sy] = small.getRenderCartCoords(3, 4, Direction.North);
      const [lx, ly] = large.getRenderCartCoords(3, 4, Direction.North);
      expect(lx).toBe(sx * 2);
      expect(ly).toBe(sy * 2);
    });
  });

  describe("all four directions × all four corners (regression matrix)", () => {
    /**
     * Tableau complet des 16 cas (4 directions × 4 coins) pour une grille 4×4.
     * Sert de filet de sécurité lors de tout refactoring de getRenderCartCoords.
     */
    const t = new CoordinateTransformer(10, 10, 4, 4);
    const W = 10, H = 10, C = 4, R = 4;

    const cases: [number, number, Direction, number, number][] = [
      // North: identity
      [0, 0, Direction.North,  0,        0        ],
      [3, 0, Direction.North,  3*W,      0        ],
      [0, 3, Direction.North,  0,        3*H      ],
      [3, 3, Direction.North,  3*W,      3*H      ],
      // East: (x,y) → (y*W, (C-1-x)*H)
      [0, 0, Direction.East,   0,        (C-1)*H  ],
      [3, 0, Direction.East,   0,        0        ],
      [0, 3, Direction.East,   3*W,      (C-1)*H  ],
      [3, 3, Direction.East,   3*W,      0        ],
      // South: (x,y) → ((C-1-x)*W, (R-1-y)*H)
      [0, 0, Direction.South,  (C-1)*W,  (R-1)*H  ],
      [3, 0, Direction.South,  0,        (R-1)*H  ],
      [0, 3, Direction.South,  (C-1)*W,  0        ],
      [3, 3, Direction.South,  0,        0        ],
      // West: (x,y) → ((R-1-y)*W, x*H)
      [0, 0, Direction.West,   (R-1)*W,  0        ],
      [3, 0, Direction.West,   (R-1)*W,  3*H      ],
      [0, 3, Direction.West,   0,        0        ],
      [3, 3, Direction.West,   0,        3*H      ],
    ];

    cases.forEach(([x, y, dir, expX, expY]) => {
      const dirName = Direction[dir];
      it(`(${x},${y}) ${dirName} → (${expX},${expY})`, () => {
        const [rx, ry] = t.getRenderCartCoords(x, y, dir);
        expect(rx).toBe(expX);
        expect(ry).toBe(expY);
      });
    });
  });
});
