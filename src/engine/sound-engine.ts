// Procedural sound effects via Web Audio API.
// No audio files required — all sounds are synthesised on the fly.

let _ctx: AudioContext | null = null;

function ctx(): AudioContext | null {
  if (typeof AudioContext === 'undefined') return null;
  if (!_ctx) {
    try { _ctx = new AudioContext(); } catch { return null; }
  }
  if (_ctx.state === 'suspended') void _ctx.resume();
  return _ctx;
}

function tone(
  freq: number, endFreq: number, duration: number,
  type: OscillatorType, gain: number, startDelay = 0,
) {
  const c = ctx(); if (!c) return;
  const t = c.currentTime + startDelay;
  const osc = c.createOscillator();
  const g = c.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, t);
  if (endFreq !== freq) osc.frequency.exponentialRampToValueAtTime(endFreq, t + duration * 0.8);
  g.gain.setValueAtTime(gain, t);
  g.gain.exponentialRampToValueAtTime(0.0001, t + duration);
  osc.connect(g).connect(c.destination);
  osc.start(t);
  osc.stop(t + duration + 0.01);
}

function noise(duration: number, gain: number, startDelay = 0) {
  const c = ctx(); if (!c) return;
  const t = c.currentTime + startDelay;
  const size = Math.ceil(c.sampleRate * (duration + 0.05));
  const buf = c.createBuffer(1, size, c.sampleRate);
  const data = buf.getChannelData(0);
  for (let i = 0; i < size; i++) data[i] = Math.random() * 2 - 1;
  const src = c.createBufferSource();
  src.buffer = buf;
  const g = c.createGain();
  g.gain.setValueAtTime(gain, t);
  g.gain.exponentialRampToValueAtTime(0.0001, t + duration);
  src.connect(g).connect(c.destination);
  src.start(t);
}

// ── Public sound effects ──────────────────────────────────────────────────────

/** Short hit sound — heavier for more damage. */
export function sfxDamage(amount: number) {
  const intensity = Math.min(1, amount / 100);
  noise(0.06 + intensity * 0.08, 0.08 + intensity * 0.08);
  tone(120 - intensity * 60, 60, 0.18, 'sawtooth', 0.06 + intensity * 0.05);
}

/** Blocked by shield — light metallic ring. */
export function sfxBlock() {
  tone(880, 660, 0.25, 'triangle', 0.08);
}

/** Healing chime — ascending minor triad. */
export function sfxHeal() {
  tone(523, 523, 0.25, 'sine', 0.09);
  tone(622, 622, 0.25, 'sine', 0.07, 0.09);
  tone(784, 784, 0.35, 'sine', 0.10, 0.18);
}

/** Spell cast whoosh — element-coloured pitch sweep. */
export function sfxSpell(element: string) {
  const PARS: Record<string, [number, number, OscillatorType]> = {
    'Feu':        [300, 120, 'sawtooth'],
    'Eau':        [400, 600, 'sine'],
    'Glace':      [700, 900, 'triangle'],
    'Electrique': [900, 400, 'sawtooth'],
    'Ténèbres':   [130, 65,  'sawtooth'],
    'Dragon':     [180, 90,  'sawtooth'],
    'Psy':        [550, 800, 'sine'],
    'Fée':        [880, 1100,'sine'],
    'Plante':     [300, 200, 'triangle'],
    'Poison':     [250, 150, 'sawtooth'],
    'Roche':      [120, 80,  'square'],
    'Sol':        [100, 70,  'square'],
    'Vent':       [500, 700, 'triangle'],
    'Gravité':    [200, 100, 'sine'],
    'Insecte':    [600, 400, 'square'],
    'Spectre':    [300, 500, 'sine'],
    'Combat':     [250, 180, 'sawtooth'],
    'Normal':     [330, 220, 'triangle'],
  };
  const [f1, f2, type] = PARS[element] ?? [330, 220, 'triangle'];
  tone(f1, f2, 0.38, type, 0.09);
  noise(0.12, 0.03, 0.04);
}

/** Descending tone when a unit dies. */
export function sfxDeath() {
  tone(220, 55, 0.85, 'sine', 0.14);
  noise(0.15, 0.06);
}

/** Soft click on turn change. */
export function sfxTurnStart() {
  tone(440, 440, 0.07, 'triangle', 0.05);
}

/** Short ascending arpeggio for victory. */
export function sfxVictory() {
  const notes = [523, 659, 784, 1047, 1319];
  notes.forEach((freq, i) => {
    const delay = i * 0.13;
    tone(freq, freq, 0.45, 'sine', 0.12, delay);
  });
  noise(0.08, 0.05, 0.52);
}
