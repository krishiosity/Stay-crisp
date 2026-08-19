const root=document.documentElement;
  const btn=document.getElementById('themeToggle');
  const icon=document.getElementById('themeIcon');
  const lbl=document.getElementById('themeLbl');
  btn.addEventListener('click',()=>{
    const dark=root.getAttribute('data-theme')==='dark';
    root.setAttribute('data-theme',dark?'light':'dark');
    icon.textContent=dark?'◐':'◑';
    lbl.textContent=dark?'Dark':'Light';
  });
