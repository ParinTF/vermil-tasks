// Loaded in <head> of every window, so the stored look is applied before the first paint instead of flashing the defaults.
// Theme: "" (nothing stored) follows Windows; "light" or "dark" forces one. Look: the accent colour and the font, from Settings.
// The pure colour maths lives here too, so the tests and Settings use the same code.
const DEFAULT_ACCENT = '#ff4a1c';
const PAPER = { light: '#f4f1ea', dark: '#141311' };
const INK = '#12110f';

const rgbOf = (hex) => [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16));
const hexOf = (rgb) => '#' + rgb.map((v) => Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2, '0')).join('');
const isHex = (s) => /^#[0-9a-f]{6}$/i.test(s || '');
const mix = (hex, other, t) => { const a = rgbOf(hex), b = rgbOf(other); return hexOf(a.map((v, i) => v + (b[i] - v) * t)); }; // t = share of `other`
const luminance = (hex) => { const [r, g, b] = rgbOf(hex).map((v) => { v /= 255; return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; }); return 0.2126 * r + 0.7152 * g + 0.0722 * b; };
const contrast = (a, b) => { const [x, y] = [luminance(a), luminance(b)].sort((p, q) => q - p); return (x + 0.05) / (y + 0.05); };

// An accent has to show up on both papers as a bar or a dot (about 3:1), so its lightness is kept in a middle band:
// too pale is darkened and too dark is lightened until it fits. Returns the colour to use.
const LUM_MIN = 0.12, LUM_MAX = 0.27;
function fitAccent(hex) {
  if (!isHex(hex)) return DEFAULT_ACCENT;
  let c = hex.toLowerCase();
  for (let i = 0; i < 40 && luminance(c) > LUM_MAX; i++) c = mix(c, '#000000', 0.04);
  for (let i = 0; i < 40 && luminance(c) < LUM_MIN; i++) c = mix(c, '#ffffff', 0.04);
  return c;
}

// every colour token the accent drives: the colour itself, text on it, and the accent as small text on each paper (4.5:1)
function accentTokens(hex) {
  const accent = fitAccent(hex);
  const onAccent = contrast(accent, INK) >= contrast(accent, '#ffffff') ? INK : '#ffffff';
  let light = accent, dark = accent;
  for (let i = 0; i < 40 && contrast(light, PAPER.light) < 4.5; i++) light = mix(light, '#000000', 0.04);
  for (let i = 0; i < 40 && contrast(dark, PAPER.dark) < 4.5; i++) dark = mix(dark, '#ffffff', 0.04);
  return { accent, onAccent, textLight: light, textDark: dark };
}

const FONT_FALLBACK = 'Anuphan, "Leelawadee UI", "Segoe UI", sans-serif'; // Thai always falls back to the bundled Anuphan
const FONTS = {
  anuphan: { name: 'Anuphan', stack: FONT_FALLBACK },
  system: { name: 'Windows', stack: '"Segoe UI", "Leelawadee UI", Anuphan, sans-serif' },
  serif: { name: 'Serif', stack: 'Georgia, Cambria, "Times New Roman", Anuphan, serif' },
  mono: { name: 'Mono', stack: '"Cascadia Mono", Consolas, "Courier New", Anuphan, monospace' },
};
// a font the user types: letters, digits, spaces and a few marks only, so it can never break out of the CSS
const cleanFontName = (s) => String(s || '').replace(/[^\p{L}\p{M}\p{N} ._-]/gu, '').replace(/\s+/g, ' ').trim().slice(0, 40);
function fontStack(look) {
  const custom = cleanFontName(look.custom);
  if (look.font === 'custom' && custom) return `"${custom}", ${FONT_FALLBACK}`;
  return (FONTS[look.font] || FONTS.anuphan).stack;
}

const normalLook = (raw) => ({ accent: isHex(raw?.accent) ? raw.accent.toLowerCase() : DEFAULT_ACCENT, font: raw?.font === 'custom' || FONTS[raw?.font] ? raw.font : 'anuphan', custom: cleanFontName(raw?.custom) });
const storedLook = () => { try { return normalLook(JSON.parse(localStorage.getItem('look'))); } catch { return normalLook(null); } };

function applyLook(look) {
  const style = document.documentElement.style;
  const set = (name, value) => (value ? style.setProperty(name, value) : style.removeProperty(name));
  const fixed = normalLook(look);
  if (fixed.accent === DEFAULT_ACCENT) { // the stylesheet already holds the designed values
    ['--accent', '--accent-text', '--on-accent'].forEach((n) => set(n, ''));
  } else {
    const t = accentTokens(fixed.accent);
    set('--accent', t.accent);
    set('--accent-text', `light-dark(${t.textLight}, ${t.textDark})`);
    set('--on-accent', t.onAccent);
  }
  set('--font', fixed.font === 'anuphan' ? '' : fontStack(fixed));
}

try {
  const stored = localStorage.getItem('theme');
  if (stored) document.documentElement.dataset.theme = stored;
  applyLook(storedLook());
} catch {}

if (typeof module !== 'undefined') module.exports = { DEFAULT_ACCENT, PAPER, luminance, contrast, fitAccent, accentTokens, cleanFontName, fontStack, normalLook, FONTS };
