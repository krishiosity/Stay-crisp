/* CRISP Theme Toggle */
(function(){
  const root = document.documentElement;
  const btn = document.getElementById('crispThemeToggle');
  if (!btn) return;
  const icon = btn.querySelector('.crisp-theme-icon');
  const lbl = btn.querySelector('.crisp-theme-lbl');
  btn.addEventListener('click', function(){
    const dark = root.getAttribute('data-crisp-theme') === 'dark';
    root.setAttribute('data-crisp-theme', dark ? 'light' : 'dark');
    if (icon) icon.textContent = dark ? '\u25D0' : '\u25D1';
    if (lbl) lbl.textContent = dark ? 'Dark' : 'Light';
  });
})();
