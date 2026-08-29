// Cursor
const cur=document.getElementById('cursor'),ring=document.getElementById('cursor-ring');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;cur.style.left=mx+'px';cur.style.top=my+'px';});
(function animR(){rx+=(mx-rx)*.15;ry+=(my-ry)*.15;ring.style.left=rx+'px';ring.style.top=ry+'px';requestAnimationFrame(animR);})();
document.querySelectorAll('a,button,.proj-card,.skill-block,.cert-card,.clink').forEach(el=>{
  el.addEventListener('mouseenter',()=>{cur.style.width='20px';cur.style.height='20px';cur.style.background='var(--accent2)';ring.style.width='50px';ring.style.height='50px';ring.style.borderColor='rgba(0,255,136,0.5)';});
  el.addEventListener('mouseleave',()=>{cur.style.width='12px';cur.style.height='12px';cur.style.background='var(--accent)';ring.style.width='36px';ring.style.height='36px';ring.style.borderColor='rgba(0,212,255,0.5)';});
});

// Particles
const canvas=document.getElementById('canvas'),ctx=canvas.getContext('2d');
let W,H,pts=[];
function resize(){W=canvas.width=window.innerWidth;H=canvas.height=window.innerHeight;}
resize();window.addEventListener('resize',resize);
class P{
  constructor(){this.reset();}
  reset(){this.x=Math.random()*W;this.y=Math.random()*H;this.vx=(Math.random()-.5)*.35;this.vy=(Math.random()-.5)*.35;this.r=Math.random()*1.4+.3;this.a=Math.random()*.45+.1;this.col=Math.random()>.5?'0,212,255':'0,255,136';}
  u(){this.x+=this.vx;this.y+=this.vy;if(this.x<0||this.x>W||this.y<0||this.y>H)this.reset();}
  d(){ctx.beginPath();ctx.arc(this.x,this.y,this.r,0,Math.PI*2);ctx.fillStyle=`rgba(${this.col},${this.a})`;ctx.fill();}
}
for(let i=0;i<100;i++)pts.push(new P());
(function anim(){
  ctx.clearRect(0,0,W,H);
  for(let i=0;i<pts.length;i++){
    pts[i].u();pts[i].d();
    for(let j=i+1;j<pts.length;j++){
      const dx=pts[i].x-pts[j].x,dy=pts[i].y-pts[j].y,d=Math.sqrt(dx*dx+dy*dy);
      if(d<90){ctx.beginPath();ctx.moveTo(pts[i].x,pts[i].y);ctx.lineTo(pts[j].x,pts[j].y);ctx.strokeStyle=`rgba(0,212,255,${.07*(1-d/90)})`;ctx.lineWidth=.4;ctx.stroke();}
    }
  }
  requestAnimationFrame(anim);
})();

// Typed
const phrases=['Python Full Stack Dev','Data Scientist','ML Engineer','Fresher · Ready to Build'];
let pi=0,ci=0,del=false;
const tEl=document.getElementById('typed');
function typeLoop(){
  const p=phrases[pi];
  if(!del){tEl.textContent=p.slice(0,ci+1);ci++;if(ci===p.length){del=true;setTimeout(typeLoop,2000);return;}setTimeout(typeLoop,70);}
  else{tEl.textContent=p.slice(0,ci-1);ci--;if(ci===0){del=false;pi=(pi+1)%phrases.length;}setTimeout(typeLoop,38);}
}
typeLoop();

// Scroll reveal + skill bars
const obs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.classList.add('visible');
      e.target.querySelectorAll('.sk-fill').forEach(b=>b.style.width=b.dataset.w+'%');
    }
  });
},{threshold:.15});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
document.querySelectorAll('#hero .reveal').forEach(el=>el.classList.add('visible'));

// Nav scroll
window.addEventListener('scroll',()=>{document.getElementById('navbar').style.background=window.scrollY>50?'rgba(5,10,15,0.97)':'rgba(5,10,15,0.85)';});

// Mobile menu
const navToggle=document.querySelector('.nav-toggle');
const navLinks=document.querySelector('.nav-links');
if(navToggle && navLinks){
  navToggle.addEventListener('click',()=>{
    const isOpen=navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach(link=>{
    link.addEventListener('click',()=>{
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded','false');
    });
  });
}

// Project filter
document.querySelectorAll('.filter-btn').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const f=btn.dataset.filter;
    document.querySelectorAll('.proj-card').forEach(card=>{
      const match=f==='all'||card.dataset.cat===f;
      card.style.display=match?'flex':'none';
    });
  });
});

