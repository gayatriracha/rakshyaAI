(function(){
  // Ensure viewport meta
  if(!document.querySelector('meta[name="viewport"]')){
    const m=document.createElement('meta');
    m.name='viewport';
    m.content='width=device-width, initial-scale=1, viewport-fit=cover';
    document.head.appendChild(m);
  }
  function initDrawer(){
    const nav=document.querySelector('.nav-content'); if(!nav) return;
    // Menu button
    let btn=document.querySelector('.mobile-menu-btn');
    if(!btn){
      btn=document.createElement('button');
      btn.className='mobile-menu-btn';
      btn.setAttribute('aria-label','Menu');
      btn.textContent='☰';
      nav.insertBefore(btn, nav.firstChild);
    }
    // Drawer
    let drawer=document.querySelector('.mobile-drawer');
    if(!drawer){
      drawer=document.createElement('nav');
      drawer.className='mobile-drawer';
      const close=document.createElement('button');
      close.className='drawer-close';
      close.textContent='×';
      close.addEventListener('click', ()=>drawer.classList.remove('open'));
      drawer.appendChild(close);
      document.querySelectorAll('.nav-links a').forEach(a=>{
        const c=a.cloneNode(true);
        c.addEventListener('click', ()=>drawer.classList.remove('open'));
        drawer.appendChild(c);
      });
      document.body.appendChild(drawer);
    }
    btn.addEventListener('click', ()=>drawer.classList.add('open'));
  }
  if(document.readyState!=='loading') initDrawer();
  else document.addEventListener('DOMContentLoaded', initDrawer);
})();