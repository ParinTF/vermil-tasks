// Loaded in <head>, so a stored theme choice is applied before the first paint instead of flashing the other colours.
// "" (nothing stored) follows Windows; "light" or "dark" forces one. renderer.js owns the switch button.
try {
  const stored = localStorage.getItem('theme');
  if (stored) document.documentElement.dataset.theme = stored;
} catch {}
