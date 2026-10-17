'use client';
import { useEffect } from 'react';

export function useParticles(canvasRef) {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let W, H, raf;
    const particles = [], streaks = [], orbs = [];

    function resize() {
      W = canvas.width  = canvas.offsetWidth  || window.innerWidth;
      H = canvas.height = canvas.offsetHeight || window.innerHeight;
    }
    window.addEventListener('resize', resize);
    resize();

    /* Sparkle */
    function Particle() { this.reset(true); }
    Particle.prototype.reset = function(init) {
      this.x=Math.random()*W; this.y=init?Math.random()*H:H+6;
      this.r=Math.random()*2+0.4; this.vx=(Math.random()-.5)*.22;
      this.vy=-(Math.random()*.42+.08); this.life=0;
      this.max=Math.random()*280+120; this.gold=Math.random()>.4;
      this.twink=Math.random()*Math.PI*2; this.tspd=.03+Math.random()*.04;
    };
    Particle.prototype.draw = function() {
      const t=this.life/this.max;
      const fade=t<.15?t/.15:t>.75?(1-(t-.75)/.25):1;
      const opc=fade*(0.7+.3*Math.sin(this.twink));
      if(this.r>.9){
        const hr=this.r*(this.gold?6:4);
        const g=ctx.createRadialGradient(this.x,this.y,0,this.x,this.y,hr);
        g.addColorStop(0,this.gold?`rgba(220,185,80,${(opc*.32).toFixed(2)})`:`rgba(255,245,200,${(opc*.14).toFixed(2)})`);
        g.addColorStop(1,'rgba(0,0,0,0)');
        ctx.beginPath();ctx.arc(this.x,this.y,hr,0,Math.PI*2);ctx.fillStyle=g;ctx.fill();
      }
      ctx.beginPath();ctx.arc(this.x,this.y,this.r,0,Math.PI*2);
      ctx.fillStyle=this.gold?`rgba(220,185,80,${(opc*.9).toFixed(2)})`:`rgba(255,255,255,${(opc*.6).toFixed(2)})`;
      ctx.fill();
      if(this.r>1.3){ctx.beginPath();ctx.arc(this.x,this.y,this.r*.3,0,Math.PI*2);ctx.fillStyle=`rgba(255,255,255,${(opc*.95).toFixed(2)})`;ctx.fill();}
    };
    Particle.prototype.update = function(){this.x+=this.vx;this.y+=this.vy;this.life++;this.twink+=this.tspd;if(this.life>=this.max)this.reset(false);};

    /* Streak */
    function Streak(){this.init();}
    Streak.prototype.init=function(){
      this.x=Math.random()*W;this.y=Math.random()*H*.8;
      this.len=50+Math.random()*90;this.angle=(-15+Math.random()*30)*Math.PI/180;
      this.spd=.7+Math.random()*1.1;this.life=0;this.max=55+Math.random()*70;
      this.lw=.4+Math.random()*.9;this.gold=Math.random()>.45;
      this.delay=Math.floor(Math.random()*320);this.on=false;
    };
    Streak.prototype.draw=function(){
      const t=this.life/this.max;
      const opc=(t<.2?t/.2:t>.6?(1-(t-.6)/.4):1)*.75;
      const dx=Math.cos(this.angle)*this.len,dy=Math.sin(this.angle)*this.len;
      const g=ctx.createLinearGradient(this.x,this.y,this.x-dx,this.y-dy);
      const c=this.gold?'210,175,70':'255,255,230';
      g.addColorStop(0,`rgba(${c},${opc.toFixed(2)})`);g.addColorStop(1,`rgba(${c},0)`);
      ctx.beginPath();ctx.moveTo(this.x,this.y);ctx.lineTo(this.x-dx,this.y-dy);
      ctx.strokeStyle=g;ctx.lineWidth=this.lw;ctx.stroke();
    };
    Streak.prototype.update=function(){if(!this.on){if(--this.delay<=0)this.on=true;return;}this.x+=Math.cos(this.angle)*this.spd;this.y+=Math.sin(this.angle)*this.spd;if(++this.life>=this.max)this.init();};

    /* Orb */
    function Orb(){this.reset();}
    Orb.prototype.reset=function(){this.x=Math.random()*W;this.y=Math.random()*H;this.r=80+Math.random()*130;this.life=0;this.max=350+Math.random()*250;this.gold=Math.random()>.55;this.vx=(Math.random()-.5)*.12;this.vy=(Math.random()-.5)*.07;};
    Orb.prototype.draw=function(){
      const t=this.life/this.max;
      const opc=(t<.3?t/.3:t>.7?(1-(t-.7)/.3):1)*.06;
      const g=ctx.createRadialGradient(this.x,this.y,0,this.x,this.y,this.r);
      g.addColorStop(0,this.gold?`rgba(201,168,76,${opc.toFixed(3)})`:`rgba(255,230,170,${opc.toFixed(3)})`);
      g.addColorStop(1,'rgba(0,0,0,0)');
      ctx.beginPath();ctx.arc(this.x,this.y,this.r,0,Math.PI*2);ctx.fillStyle=g;ctx.fill();
    };
    Orb.prototype.update=function(){this.x+=this.vx;this.y+=this.vy;this.life++;if(this.life>=this.max)this.reset();};

    for(let i=0;i<115;i++){const p=new Particle();p.life=Math.floor(Math.random()*p.max);particles.push(p);}
    for(let i=0;i<8;i++)streaks.push(new Streak());
    for(let i=0;i<5;i++){const o=new Orb();o.life=Math.floor(Math.random()*o.max);orbs.push(o);}

    function loop(){
      ctx.clearRect(0,0,W,H);
      orbs.forEach(o=>{o.update();o.draw();});
      particles.forEach(p=>{p.update();p.draw();});
      streaks.forEach(s=>{s.update();if(s.on)s.draw();});
      raf=requestAnimationFrame(loop);
    }
    loop();

    const onVis=()=>{if(document.hidden)cancelAnimationFrame(raf);else loop();};
    document.addEventListener('visibilitychange',onVis);
    return()=>{cancelAnimationFrame(raf);window.removeEventListener('resize',resize);document.removeEventListener('visibilitychange',onVis);};
  },[canvasRef]);
}
