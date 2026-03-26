document.addEventListener("DOMContentLoaded",()=>{
  // Reveal
  const obs=new IntersectionObserver(e=>{e.forEach(x=>{if(x.isIntersecting){x.target.classList.add("is-v");obs.unobserve(x.target);}});},{threshold:.1,rootMargin:"0px 0px -30px 0px"});
  document.querySelectorAll(".rv").forEach(el=>obs.observe(el));

  // Mobile nav
  const btn=document.querySelector(".nav-btn"),mob=document.querySelector(".nav-m");
  if(btn&&mob){btn.addEventListener("click",()=>{btn.classList.toggle("open");mob.classList.toggle("open");document.body.style.overflow=mob.classList.contains("open")?"hidden":"";});
  mob.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{btn.classList.remove("open");mob.classList.remove("open");document.body.style.overflow="";}));}

  // Scroll top
  const st=document.querySelector(".scroll-top");
  if(st){window.addEventListener("scroll",()=>st.classList.toggle("is-v",scrollY>500),{passive:true});
  st.addEventListener("click",()=>scrollTo({top:0,behavior:"smooth"}));}
});
