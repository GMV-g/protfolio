// scroll reveal
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.rv').forEach(el=>io.observe(el));

// samples tabs
const tabs=document.querySelectorAll('.tab');
tabs.forEach(t=>t.addEventListener('click',()=>{
  tabs.forEach(x=>x.setAttribute('aria-selected',x===t));
  const k=t.dataset.k;
  document.querySelectorAll('[data-cat]').forEach(c=>c.hidden=!(k==='all'||c.dataset.cat===k));
}));

// copy buttons
document.querySelectorAll('.copy').forEach(b=>b.addEventListener('click',async()=>{
  try{await navigator.clipboard.writeText(b.dataset.copy);const o=b.textContent;b.textContent='Copied';setTimeout(()=>b.textContent=o,1400)}catch(e){}
}));
