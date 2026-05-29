import type Game from '../game';
import type { CombatManager } from '../engine/combat-manager';

const W = 1024;
const H = 576;
const DEPTH = 10000;

interface SpellSlot {
  bg: Phaser.GameObjects.Rectangle;
  keyLabel: Phaser.GameObjects.Text;
  name: Phaser.GameObjects.Text;
  typeLabel: Phaser.GameObjects.Text;
  cost: Phaser.GameObjects.Text;
  cd: Phaser.GameObjects.Text;
}

export class HUD {
  private scene: Game;
  private manager!: CombatManager;

  private turnBg!: Phaser.GameObjects.Rectangle;
  private turnText!: Phaser.GameObjects.Text;

  private statsBg!: Phaser.GameObjects.Rectangle;
  private unitName!: Phaser.GameObjects.Text;
  private unitMeta!: Phaser.GameObjects.Text;
  private pvLabel!: Phaser.GameObjects.Text;
  private pvBarBg!: Phaser.GameObjects.Rectangle;
  private pvBarFill!: Phaser.GameObjects.Rectangle;
  private pmLabel!: Phaser.GameObjects.Text;
  private pmBarBg!: Phaser.GameObjects.Rectangle;
  private pmBarFill!: Phaser.GameObjects.Rectangle;
  private actionState!: Phaser.GameObjects.Text;
  private endTurnBtn!: Phaser.GameObjects.Rectangle;
  private endTurnLabel!: Phaser.GameObjects.Text;

  private spellBg!: Phaser.GameObjects.Rectangle;
  private spellSlots: SpellSlot[] = [];
  private spellTipBg!: Phaser.GameObjects.Rectangle;
  private spellTipTitle!: Phaser.GameObjects.Text;
  private spellTipInfo!: Phaser.GameObjects.Text;
  private spellTipDesc!: Phaser.GameObjects.Text;

  private logBg!: Phaser.GameObjects.Rectangle;
  private logLines: Phaser.GameObjects.Text[] = [];

  private victoryBg!: Phaser.GameObjects.Rectangle;
  private victoryText!: Phaser.GameObjects.Text;
  private victorySubText!: Phaser.GameObjects.Text;
  private victoryHint!: Phaser.GameObjects.Text;
  private victoryShown = false;

  private statusLine!: Phaser.GameObjects.Text;

  // Controls hint bar
  private hintBg!: Phaser.GameObjects.Rectangle;
  private hintText!: Phaser.GameObjects.Text;

  // Hover / target tooltip (top-right)
  private tooltipBg!: Phaser.GameObjects.Rectangle;
  private tooltipName!: Phaser.GameObjects.Text;
  private tooltipMeta!: Phaser.GameObjects.Text;
  private tooltipPV!: Phaser.GameObjects.Text;
  private tooltipPVBar!: Phaser.GameObjects.Rectangle;
  private tooltipPVFill!: Phaser.GameObjects.Rectangle;
  private tooltipStatus!: Phaser.GameObjects.Text;
  private tooltipTileEl!: Phaser.GameObjects.Text;

  // Initiative strip
  private initBg!: Phaser.GameObjects.Rectangle;
  private initUnitTexts: Phaser.GameObjects.Text[] = [];

  // AI thinking indicator in top bar
  private aiText!: Phaser.GameObjects.Text;

  private isVisible = false;

  constructor(scene: Game) {
    this.scene = scene;
    this.build();
    this.setVisible(false);
  }

  setManager(m: CombatManager) {
    this.manager = m;
    this.victoryShown = false;
    this.victoryBg.setVisible(false).setAlpha(0);
    this.victoryText.setVisible(false).setAlpha(0).setScale(1);
    this.victorySubText.setVisible(false).setAlpha(0);
    this.victoryHint.setVisible(false).setAlpha(0);
  }

  setVisible(v: boolean) {
    this.isVisible = v;
    const objs: Phaser.GameObjects.GameObject[] = [
      this.turnBg, this.turnText,
      this.statsBg, this.unitName, this.unitMeta,
      this.pvLabel, this.pvBarBg, this.pvBarFill,
      this.pmLabel, this.pmBarBg, this.pmBarFill,
      this.actionState, this.statusLine, this.endTurnBtn, this.endTurnLabel,
      this.spellBg,
      this.logBg, this.hintBg, this.hintText,
      this.initBg, this.aiText,
      ...this.initUnitTexts,
      ...this.logLines,
    ];
    // Tooltip always hidden when HUD is hidden; shown on demand when visible
    const tooltipObjs = [
      this.tooltipBg, this.tooltipName, this.tooltipMeta, this.tooltipPV, this.tooltipPVBar, this.tooltipPVFill,
      this.spellTipBg, this.spellTipTitle, this.spellTipInfo, this.spellTipDesc,
    ];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    for (const o of tooltipObjs) (o as any).setVisible(false);
    for (const slot of this.spellSlots) {
      objs.push(slot.bg, slot.keyLabel, slot.name, slot.typeLabel, slot.cost, slot.cd);
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    for (const o of objs) (o as any).setVisible(v);
  }

  private sf0(o: Phaser.GameObjects.Components.ScrollFactor & Phaser.GameObjects.Components.Depth) {
    o.setScrollFactor(0).setDepth(DEPTH);
    return o;
  }

  private build() {
    // ── Top bar ──────────────────────────────────────────────────
    this.turnBg = this.sf0(this.scene.add.rectangle(W / 2, 22, 440, 36, 0x000000, 0.72)) as Phaser.GameObjects.Rectangle;
    this.turnText = this.scene.add.text(W / 2, 22, '', { fontSize: '13px', color: '#ffffff' })
      .setOrigin(0.5).setScrollFactor(0).setDepth(DEPTH + 1);

    // ── Stats panel (bottom-left 256×96) ────────────────────────
    const SX = 128, SY = H - 52;
    this.statsBg = this.sf0(this.scene.add.rectangle(SX, SY, 250, 96, 0x000000, 0.75)) as Phaser.GameObjects.Rectangle;

    this.unitName = this.scene.add.text(SX - 118, SY - 42, '', { fontSize: '13px', color: '#ffdd88', fontStyle: 'bold' })
      .setScrollFactor(0).setDepth(DEPTH + 1);
    this.unitMeta = this.scene.add.text(SX - 118, SY - 27, '', { fontSize: '10px', color: '#aaaaaa' })
      .setScrollFactor(0).setDepth(DEPTH + 1);

    this.pvLabel = this.scene.add.text(SX - 118, SY - 10, '', { fontSize: '10px', color: '#55ee77' })
      .setScrollFactor(0).setDepth(DEPTH + 1);
    this.pvBarBg = this.scene.add.rectangle(SX + 30, SY - 5, 148, 10, 0x333333).setScrollFactor(0).setDepth(DEPTH + 1);
    this.pvBarFill = this.scene.add.rectangle(SX - 44, SY - 5, 148, 10, 0x22DD44).setOrigin(0, 0.5).setScrollFactor(0).setDepth(DEPTH + 2);

    this.pmLabel = this.scene.add.text(SX - 118, SY + 9, '', { fontSize: '10px', color: '#4488ff' })
      .setScrollFactor(0).setDepth(DEPTH + 1);
    this.pmBarBg = this.scene.add.rectangle(SX + 30, SY + 14, 148, 10, 0x333333).setScrollFactor(0).setDepth(DEPTH + 1);
    this.pmBarFill = this.scene.add.rectangle(SX - 44, SY + 14, 148, 10, 0x2244ff).setOrigin(0, 0.5).setScrollFactor(0).setDepth(DEPTH + 2);

    this.actionState = this.scene.add.text(SX - 118, SY + 26, '', { fontSize: '9px', color: '#888888' })
      .setScrollFactor(0).setDepth(DEPTH + 1);

    this.statusLine = this.scene.add.text(SX - 118, SY + 37, '', { fontSize: '7px', color: '#997777' })
      .setScrollFactor(0).setDepth(DEPTH + 1);

    this.endTurnBtn = this.scene.add.rectangle(SX + 82, SY + 37, 78, 22, 0x224422, 0.9)
      .setScrollFactor(0).setDepth(DEPTH + 1).setInteractive();
    this.endTurnLabel = this.scene.add.text(SX + 82, SY + 37, 'FIN TOUR [↵]', { fontSize: '10px', color: '#88ff88' })
      .setOrigin(0.5).setScrollFactor(0).setDepth(DEPTH + 2);

    this.endTurnBtn.on('pointerover', () => this.endTurnBtn.setFillStyle(0x448844));
    this.endTurnBtn.on('pointerout', () => this.endTurnBtn.setFillStyle(0x224422));
    this.endTurnBtn.on('pointerup', () => this.manager?.endTurn());

    // ── Spell bar (10 × 62px slots) ─────────────────────────────
    const SBX0 = 268, SBY = H - 46, SLOT_W = 62, SLOT_H = 80;
    this.spellBg = this.sf0(
      this.scene.add.rectangle(SBX0 + 5 * SLOT_W, SBY, 10 * SLOT_W + 8, SLOT_H + 4, 0x000000, 0.75),
    ) as Phaser.GameObjects.Rectangle;

    const KEY_LABELS = ['1','2','3','4','5','6','7','8','9','0'];
    for (let i = 0; i < 10; i++) {
      const sx = SBX0 + i * SLOT_W + SLOT_W / 2;

      const bg = this.scene.add.rectangle(sx, SBY, SLOT_W - 4, SLOT_H - 4, 0x1a1a1a, 0.9)
        .setScrollFactor(0).setDepth(DEPTH + 1).setInteractive();

      const keyLabel = this.scene.add.text(sx - SLOT_W / 2 + 5, SBY - SLOT_H / 2 + 6, KEY_LABELS[i], {
        fontSize: '8px', color: '#666666',
      }).setScrollFactor(0).setDepth(DEPTH + 2);

      const name = this.scene.add.text(sx, SBY - 18, '─', {
        fontSize: '9px', color: '#cccccc', wordWrap: { width: SLOT_W - 8 }, align: 'center',
      }).setOrigin(0.5).setScrollFactor(0).setDepth(DEPTH + 2);

      const typeLabel = this.scene.add.text(sx, SBY, '', {
        fontSize: '7px', color: '#666666',
      }).setOrigin(0.5).setScrollFactor(0).setDepth(DEPTH + 2);

      const cost = this.scene.add.text(sx, SBY + 16, '', {
        fontSize: '9px', color: '#4488ff',
      }).setOrigin(0.5).setScrollFactor(0).setDepth(DEPTH + 2);

      const cd = this.scene.add.text(sx, SBY + 28, '', {
        fontSize: '9px', color: '#FF8833',
      }).setOrigin(0.5).setScrollFactor(0).setDepth(DEPTH + 2);

      const idx = i;
      const slotX = sx;
      bg.on('pointerup', () => this.manager?.selectSpell(idx));
      bg.on('pointerover', () => {
        if (this.manager?.selectedSpellIndex !== idx) bg.setFillStyle(0x333333);
        this._showSpellTip(idx, slotX, SBY - SLOT_H / 2 - 48);
      });
      bg.on('pointerout', () => {
        if (this.manager?.selectedSpellIndex !== idx) bg.setFillStyle(0x1a1a1a);
        this._hideSpellTip();
      });

      this.spellSlots.push({ bg, keyLabel, name, typeLabel, cost, cd });
    }

    // ── Spell tooltip (shown on hover) ───────────────────────────
    this.spellTipBg = this.scene.add.rectangle(0, 0, 224, 82, 0x000000, 0.90)
      .setScrollFactor(0).setDepth(DEPTH + 8).setVisible(false);
    this.spellTipTitle = this.scene.add.text(0, 0, '', { fontSize: '10px', color: '#FFDD88', fontStyle: 'bold' })
      .setScrollFactor(0).setDepth(DEPTH + 9).setVisible(false);
    this.spellTipInfo = this.scene.add.text(0, 0, '', { fontSize: '8px', color: '#8899FF' })
      .setScrollFactor(0).setDepth(DEPTH + 9).setVisible(false);
    this.spellTipDesc = this.scene.add.text(0, 0, '', {
      fontSize: '8px', color: '#CCCCCC', wordWrap: { width: 210 },
    }).setScrollFactor(0).setDepth(DEPTH + 9).setVisible(false);

    // ── Log panel (right) ────────────────────────────────────────
    const LX = W - 95, LY = H - 160;
    this.logBg = this.sf0(this.scene.add.rectangle(LX, LY, 182, 200, 0x000000, 0.68)) as Phaser.GameObjects.Rectangle;
    for (let i = 0; i < 7; i++) {
      const t = this.scene.add.text(LX - 84, LY - 88 + i * 26, '', {
        fontSize: '9px', color: i === 0 ? '#ffffff' : '#777777',
        wordWrap: { width: 172 },
      }).setScrollFactor(0).setDepth(DEPTH + 1);
      this.logLines.push(t);
    }

    // ── Hint bar (very bottom) ───────────────────────────────────
    this.hintBg = this.sf0(this.scene.add.rectangle(W / 2, H - 4, W, 10, 0x000000, 0.55)) as Phaser.GameObjects.Rectangle;
    this.hintText = this.scene.add.text(W / 2, H - 4,
      'Clic gauche: déplacer / attaquer  |  1-0: choisir sort  |  ↵ Entrée: fin de tour  |  Q/E: rotation  |  Esc: quitter combat',
      { fontSize: '8px', color: '#666666' },
    ).setOrigin(0.5).setScrollFactor(0).setDepth(DEPTH + 1);

    // ── Victory overlay ──────────────────────────────────────────
    this.victoryBg = this.scene.add.rectangle(W / 2, H / 2, W, H, 0x000000, 0)
      .setScrollFactor(0).setDepth(20000).setVisible(false);
    this.victoryText = this.scene.add.text(W / 2, H / 2 - 30, '', {
      fontSize: '44px', color: '#FFDD00', fontStyle: 'bold',
    }).setOrigin(0.5).setScrollFactor(0).setDepth(20001).setVisible(false).setAlpha(0);
    this.victorySubText = this.scene.add.text(W / 2, H / 2 + 18, '', {
      fontSize: '16px', color: '#ffffff',
    }).setOrigin(0.5).setScrollFactor(0).setDepth(20001).setVisible(false).setAlpha(0);
    this.victoryHint = this.scene.add.text(W / 2, H / 2 + 46, '[Esc] pour quitter le combat', {
      fontSize: '13px', color: '#888888',
    }).setOrigin(0.5).setScrollFactor(0).setDepth(20001).setVisible(false).setAlpha(0);

    // ── Initiative strip ─────────────────────────────────────────
    const IY = 47;
    this.initBg = this.sf0(this.scene.add.rectangle(W / 2, IY, W, 14, 0x000000, 0.48)) as Phaser.GameObjects.Rectangle;
    for (let i = 0; i < 8; i++) {
      this.initUnitTexts.push(
        this.scene.add.text(0, IY, '', { fontSize: '8px', color: '#888888' })
          .setScrollFactor(0).setDepth(DEPTH + 1).setVisible(false),
      );
    }

    // ── AI indicator ─────────────────────────────────────────────
    this.aiText = this.scene.add.text(W / 2, 60, '⚙ IA réfléchit...', {
      fontSize: '11px', color: '#FF8833',
    }).setOrigin(0.5).setScrollFactor(0).setDepth(DEPTH + 1).setVisible(false);

    // ── Hover tooltip (top-right) ────────────────────────────────
    const TX = W - 72, TY = 62;
    this.tooltipBg = this.sf0(this.scene.add.rectangle(TX, TY, 136, 72, 0x000000, 0.84)) as Phaser.GameObjects.Rectangle;
    this.tooltipName = this.scene.add.text(TX - 60, TY - 32, '', { fontSize: '11px', color: '#ffdd88', fontStyle: 'bold' })
      .setScrollFactor(0).setDepth(DEPTH + 1);
    this.tooltipMeta = this.scene.add.text(TX - 60, TY - 19, '', { fontSize: '9px', color: '#aaaaaa' })
      .setScrollFactor(0).setDepth(DEPTH + 1);
    this.tooltipPV = this.scene.add.text(TX - 60, TY - 5, '', { fontSize: '9px', color: '#55ee77' })
      .setScrollFactor(0).setDepth(DEPTH + 1);
    this.tooltipPVBar = this.scene.add.rectangle(TX + 22, TY + 1, 80, 7, 0x333333)
      .setScrollFactor(0).setDepth(DEPTH + 1);
    this.tooltipPVFill = this.scene.add.rectangle(TX - 18, TY + 1, 80, 7, 0x22DD44)
      .setOrigin(0, 0.5).setScrollFactor(0).setDepth(DEPTH + 2);
    this.tooltipStatus = this.scene.add.text(TX - 60, TY + 13, '', { fontSize: '7px', color: '#CCAAFF' })
      .setScrollFactor(0).setDepth(DEPTH + 1);
    this.tooltipTileEl = this.scene.add.text(TX - 60, TY - 10, '', { fontSize: '10px', color: '#FFDD88' })
      .setScrollFactor(0).setDepth(DEPTH + 1);
    [this.tooltipBg, this.tooltipName, this.tooltipMeta, this.tooltipPV, this.tooltipPVBar, this.tooltipPVFill,
      this.tooltipStatus, this.tooltipTileEl]
      .forEach(o => o.setVisible(false));
  }

  private static readonly STATUS_ABBR: Record<string, string> = {
    burn: 'BRN', poison: 'PSN', freeze: 'FRZ', stun: 'STN', root: 'ROOT',
    slow: 'SLW', wet: 'WET', charged: 'CHG', shield: 'SHD',
    buff_damage: 'ATK+', confuse: 'CFUS', regen: 'REG', weighted: 'WGT',
  };

  setHoverUnit(unit: import('../engine/combat-unit').CombatUnit | null) {
    if (!this.isVisible) return;
    this.tooltipTileEl.setVisible(false);
    const show = unit !== null;
    for (const o of [this.tooltipBg, this.tooltipName, this.tooltipMeta, this.tooltipPV,
                      this.tooltipPVBar, this.tooltipPVFill, this.tooltipStatus]) {
      o.setVisible(show);
    }
    if (!unit) return;
    const pct = unit.currentPV / unit.maxPV;
    this.tooltipName.setText(unit.personnage.nom);
    this.tooltipMeta.setText(`${unit.personnage.classe} · ${unit.personnage.element} [${unit.team === 0 ? 'A' : 'B'}]`);
    this.tooltipPV.setText(`PV ${unit.currentPV}/${unit.maxPV}`);
    this.tooltipPVFill.setDisplaySize(Math.max(1, 80 * pct), 7);
    this.tooltipPVFill.setFillStyle(pct > 0.5 ? 0x22DD44 : pct > 0.25 ? 0xDDDD22 : 0xDD2222);
    const abbr = HUD.STATUS_ABBR;
    this.tooltipStatus.setText(unit.statusEffects.map(e => abbr[e.type] ?? e.type).join(' · '));
  }

  private static readonly TILE_EFFECTS: Record<string, string> = {
    Feu: '−15 PV à l\'activation',       Magma: '−28 PV à l\'activation',
    Electrique: '−20 PV à l\'activation', Poison: '−10 PV à l\'activation',
    Vapeur: '−5 PV à l\'activation',      Ténèbres: '−12 PV à l\'activation',
    Dragon: '−22 PV à l\'activation',     Glace: 'Immobilise 1 tour',
    Plante: '+8 PV instant',              Fée: 'Regen 8 PV/tour × 2',
    Combat: '+20% dégâts pendant 2 tours', Sol: 'Lent 2 tours',
    Roche: 'Enraciné 1 tour',             Psy: 'Confus 1 tour',
    Vent: 'Dissipe lenteur / lourdeur / enracinement',
  };

  setHoverTile(element: string | null) {
    if (!this.isVisible) return;
    this.tooltipTileEl.setVisible(false);
    if (!element) return;
    this.tooltipBg.setVisible(true);
    const effect = HUD.TILE_EFFECTS[element];
    this.tooltipTileEl
      .setText(effect ? `${element}\n${effect}` : `Tuile : ${element}`)
      .setVisible(true);
  }

  update() {
    if (!this.manager || !this.isVisible) return;

    const unit = this.manager.currentUnit;
    const round = this.manager.round;

    // Victory overlay
    if (this.manager.phase === 'victory') {
      if (!this.victoryShown) {
        this.victoryShown = true;
        const isA = this.manager.winner === 0;
        const winColor = isA ? '#44FFCC' : '#FF7744';
        const winners = this.manager.units.filter(u => u.team === this.manager.winner);
        const names = winners.map(u => u.personnage.nom).join(' & ');

        this.victoryBg.setVisible(true);
        this.victoryText.setVisible(true).setText(isA ? 'ÉQUIPE A GAGNE !' : 'ÉQUIPE B GAGNE !').setColor(winColor).setScale(0.1);
        this.victorySubText.setVisible(true).setText(names);
        this.victoryHint.setVisible(true);

        this.scene.tweens.add({ targets: this.victoryBg, alpha: 0.72, duration: 450, ease: 'Linear' });
        this.scene.tweens.add({
          targets: this.victoryText, alpha: 1, scale: 1, duration: 550, ease: 'Back.Out',
          onComplete: () => {
            this.scene.tweens.add({
              targets: this.victoryText, alpha: 0.55, yoyo: true, repeat: -1, duration: 850, ease: 'Sine.InOut',
            });
          },
        });
        this.scene.tweens.add({ targets: this.victorySubText, alpha: 1, duration: 700, delay: 400, ease: 'Linear' });
        this.scene.tweens.add({ targets: this.victoryHint, alpha: 1, duration: 700, delay: 800, ease: 'Linear' });
      }
      return;
    }

    // AI indicator
    this.aiText.setVisible(this.manager.isAITurn);

    // Initiative strip
    {
      const units = this.manager.units;
      const cur = this.manager.currentUnit;
      const ci = cur ? units.indexOf(cur) : 0;
      const count = Math.min(units.length, 8);
      const slotW = count > 0 ? (W - 24) / count : W;
      for (let i = 0; i < 8; i++) {
        const t = this.initUnitTexts[i];
        if (i >= count) { t.setVisible(false); continue; }
        const j = (ci + i) % units.length;
        const u = units[j];
        const label = (i === 0 ? '▶ ' : '') + u.personnage.nom.slice(0, 10) + (u.team === 0 ? ' ·A' : ' ·B');
        const color = i === 0 ? '#FFDD00' : (u.team === 0 ? '#5599FF' : '#FF6655');
        t.setText(label).setColor(color).setPosition(12 + i * slotW, 41).setVisible(true);
      }
    }

    // Top bar
    if (unit) {
      const teamTag = unit.team === 0 ? '[A]' : '[B]';
      const mvTag = unit.hasMoved ? '✓Mv' : '·Mv';
      const actTag = unit.hasActed ? '✓Act' : '·Act';
      const spellTag = this.manager.selectedSpellIndex !== null
        ? `  Sort ${this.manager.selectedSpellIndex + 1} sélectionné`
        : '';
      this.turnText.setText(`Tour ${round} — ${unit.personnage.nom} ${teamTag}  ${mvTag}  ${actTag}${spellTag}`);
    }

    // Stats
    if (unit) {
      this.unitName.setText(unit.personnage.nom);
      this.unitMeta.setText(`${unit.personnage.classe} · ${unit.personnage.element}`);

      const pvP = unit.currentPV / unit.maxPV;
      this.pvLabel.setText(`PV ${unit.currentPV}/${unit.maxPV}`);
      this.pvBarFill.setDisplaySize(Math.max(1, 148 * pvP), 10);
      this.pvBarFill.setFillStyle(pvP > 0.5 ? 0x22DD44 : pvP > 0.25 ? 0xDDDD22 : 0xDD2222);

      const pmP = unit.currentPM / unit.maxPM;
      this.pmLabel.setText(`PM ${unit.currentPM}/${unit.maxPM}`);
      this.pmBarFill.setDisplaySize(Math.max(1, 148 * pmP), 10);

      this.actionState.setText(
        [
          unit.hasMoved ? '' : 'Peut se déplacer',
          unit.hasActed ? '' : 'Peut agir',
        ].filter(Boolean).join('  ·  ') || 'Tour terminé',
      );

      const ABBR: Record<string, string> = {
        burn: 'BRN', poison: 'PSN', freeze: 'FRZ', stun: 'STN', root: 'ROOT',
        slow: 'SLW', wet: 'WET', charged: 'CHG', shield: 'SHD',
        buff_damage: 'ATK+', confuse: 'CFUS', regen: 'REG', weighted: 'WGT',
      };
      this.statusLine.setText(unit.statusEffects.map(e => ABBR[e.type] ?? e.type).join(' · '));
    }

    // Spell slots
    if (unit) {
      for (let i = 0; i < 10; i++) {
        const slot = this.spellSlots[i];
        const sort = unit.getSort(i);
        const cd = unit.cooldowns[i];
        const selected = this.manager.selectedSpellIndex === i;
        const nopm = unit.currentPM < sort.coutPM;
        const onCd = cd > 0;

        const shortName = sort.nom.length > 13 ? sort.nom.slice(0, 13) + '…' : sort.nom;
        slot.name.setText(shortName);
        slot.typeLabel.setText(sort.type.split('/')[0].slice(0, 9));
        slot.cost.setText(`${sort.coutPM}PM`);
        slot.cd.setText(onCd ? `CD:${cd}` : (sort.cooldown > 0 ? `cd${sort.cooldown}` : ''));

        if (onCd) {
          slot.bg.setFillStyle(0x0d0d0d);
          slot.name.setColor('#444444');
          slot.cost.setColor('#333333');
        } else if (selected) {
          slot.bg.setFillStyle(0x554400);
          slot.name.setColor('#FFDD00');
          slot.cost.setColor('#88AAFF');
        } else if (nopm) {
          slot.bg.setFillStyle(0x150505);
          slot.name.setColor('#553333');
          slot.cost.setColor('#333333');
        } else {
          slot.bg.setFillStyle(0x1a1a1a);
          slot.name.setColor('#cccccc');
          slot.cost.setColor('#4488ff');
        }
      }
    }

    // Log
    for (let i = 0; i < 7; i++) {
      const msg = this.manager.log[i] ?? '';
      this.logLines[i].setText(msg);
      if (i > 0) {
        this.logLines[i].setColor('#4a4a4a');
      } else {
        let color = '#ffffff';
        if (/−\d+/.test(msg) || /éliminé/.test(msg))      color = '#FF7766';
        else if (/\+\d+/.test(msg))                         color = '#55FF99';
        else if (/gelé|enraciné|confus|lent|lourd|étourdi|brûle|empoisonné|électrocuté|drainé|brûlé|piégé|troublé|enlise/.test(msg)) color = '#AACCFF';
        else if (/regen|béni|régén|furie|libéré/.test(msg)) color = '#FFCC55';
        else if (/gagne/.test(msg))                          color = '#FFDD00';
        else if (/Tour \d/.test(msg))                        color = '#CCCCCC';
        this.logLines[i].setColor(color);
      }
    }
  }

  private _showSpellTip(idx: number, cx: number, cy: number) {
    const sort = this.manager?.currentUnit?.getSort(idx);
    if (!sort) return;
    const desc = sort.description.length > 130 ? sort.description.slice(0, 127) + '…' : sort.description;
    const tipW = 224, tipH = 82;
    // clamp inside screen
    const tx = Math.min(Math.max(cx, tipW / 2 + 4), 1024 - tipW / 2 - 4);
    const ty = cy;
    this.spellTipBg.setPosition(tx, ty).setSize(tipW, tipH).setVisible(true);
    this.spellTipTitle.setPosition(tx - tipW / 2 + 7, ty - tipH / 2 + 6)
      .setText(sort.nom).setVisible(true);
    this.spellTipInfo.setPosition(tx - tipW / 2 + 7, ty - tipH / 2 + 20)
      .setText(`${sort.type}  ·  Portée ${sort.portee}  ·  ${sort.coutPM} PM  ·  CD ${sort.cooldown}`)
      .setVisible(true);
    this.spellTipDesc.setPosition(tx - tipW / 2 + 7, ty - tipH / 2 + 34)
      .setText(desc).setVisible(true);
  }

  private _hideSpellTip() {
    this.spellTipBg.setVisible(false);
    this.spellTipTitle.setVisible(false);
    this.spellTipInfo.setVisible(false);
    this.spellTipDesc.setVisible(false);
  }
}
