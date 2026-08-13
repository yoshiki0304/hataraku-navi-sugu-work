(()=>{
  const items=document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){
    const io=new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    },{threshold:.08,rootMargin:'0px 0px -30px'});
    items.forEach(item=>io.observe(item));
  }else{items.forEach(item=>item.classList.add('is-visible'));}
  document.querySelectorAll('.faq details').forEach(detail=>{
    detail.addEventListener('toggle',()=>{
      if(detail.open){
        document.querySelectorAll('.faq details[open]').forEach(other=>{if(other!==detail)other.open=false;});
      }
    });
  });
})();
