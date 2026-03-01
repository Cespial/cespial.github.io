// ══════════════════════════════════════
// Shared — Lang, Theme, Fade-in, css()
// ══════════════════════════════════════
(function(){
  const langBtn=document.getElementById('langToggle'),htmlEl=document.documentElement;
  function setLang(l){htmlEl.setAttribute('lang',l);localStorage.setItem('lang',l);langBtn.textContent=l==='es'?'EN':'ES'}
  const sL=localStorage.getItem('lang');if(sL)setLang(sL);
  langBtn.addEventListener('click',()=>setLang(htmlEl.getAttribute('lang')==='es'?'en':'es'));

  const themeBtn=document.getElementById('themeToggle'),iS=themeBtn.querySelector('.icon-sun'),iM=themeBtn.querySelector('.icon-moon');
  function setTheme(t){htmlEl.setAttribute('data-theme',t);localStorage.setItem('theme',t);iS.style.display=t==='dark'?'none':'block';iM.style.display=t==='dark'?'block':'none'}
  const sT=localStorage.getItem('theme');if(sT)setTheme(sT);else if(window.matchMedia('(prefers-color-scheme:dark)').matches)setTheme('dark');
  themeBtn.addEventListener('click',()=>setTheme(htmlEl.getAttribute('data-theme')==='dark'?'light':'dark'));

  const ro=new IntersectionObserver(e=>{e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('visible');ro.unobserve(x.target)}})},{threshold:0.08,rootMargin:'0px 0px -30px 0px'});
  document.querySelectorAll('.fade-in').forEach(el=>ro.observe(el));
})();

function css(v){return getComputedStyle(document.documentElement).getPropertyValue(v).trim()}
