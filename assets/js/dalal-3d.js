import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.181.1/build/three.module.js';

const COLORS={navy:0x07131b,road:0x171d21,stone:0xc9bfa4,white:0xe8e3d6,glass:0x173643,gold:0xe5b765,green:0x91f3a7,brick:0x56463d,tree:0x214b39};

export function createDalalGame({canvas,onProximity,onReady,onError}){
  let renderer,scene,camera,player,clock,frame=0,running=false,near=false;
  const input=new Set(),velocity=new THREE.Vector3(),entrance=new THREE.Vector3(0,0,-17),obstacles=[];
  const cameraGoal=new THREE.Vector3(),lookGoal=new THREE.Vector3();
  try{
    renderer=new THREE.WebGLRenderer({canvas,antialias:true,alpha:false,powerPreference:'high-performance'});
    renderer.setPixelRatio(Math.min(devicePixelRatio,1.75));renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.05;
    scene=new THREE.Scene();scene.background=new THREE.Color(0x8dafc1);scene.fog=new THREE.FogExp2(0x77909a,.012);
    camera=new THREE.PerspectiveCamera(52,1,.1,260);camera.position.set(0,7,17);
    buildLights();buildDistrict();player=buildPlayer();scene.add(player);clock=new THREE.Clock();resize();window.addEventListener('resize',resize);onReady?.();
  }catch(error){onError?.(error);return null}

  function material(color,roughness=.72,metalness=.06){return new THREE.MeshStandardMaterial({color,roughness,metalness})}
  function mesh(geometry,mat,x=0,y=0,z=0){const m=new THREE.Mesh(geometry,mat);m.position.set(x,y,z);m.castShadow=true;m.receiveShadow=true;return m}
  function box(w,h,d,color,x,y,z,opts={}){const m=mesh(new THREE.BoxGeometry(w,h,d),material(color,opts.roughness,opts.metalness),x,y,z);if(opts.rotation)m.rotation.y=opts.rotation;scene.add(m);return m}
  function buildLights(){scene.add(new THREE.HemisphereLight(0xb8d7e7,0x342b27,2.4));const sun=new THREE.DirectionalLight(0xffd2a0,4.2);sun.position.set(-18,32,22);sun.castShadow=true;sun.shadow.mapSize.set(2048,2048);sun.shadow.camera.left=-55;sun.shadow.camera.right=55;sun.shadow.camera.top=55;sun.shadow.camera.bottom=-55;scene.add(sun);const fill=new THREE.DirectionalLight(0x8ebfff,1.1);fill.position.set(24,12,-18);scene.add(fill)}
  function buildDistrict(){
    const ground=mesh(new THREE.PlaneGeometry(180,180),material(0x464f4e),0,0,0);ground.rotation.x=-Math.PI/2;ground.receiveShadow=true;scene.add(ground);
    const road=mesh(new THREE.PlaneGeometry(21,125),material(COLORS.road,.96),0,.025,10);road.rotation.x=-Math.PI/2;scene.add(road);
    for(let z=-48;z<68;z+=8){const mark=mesh(new THREE.PlaneGeometry(.22,3.4),material(0xd8ad61),0,.04,z);mark.rotation.x=-Math.PI/2;scene.add(mark)}
    for(const x of [-12,12]){const curb=box(1.1,.28,125,COLORS.stone,x,.14,10);curb.receiveShadow=true;for(let z=-48;z<68;z+=6)bollard(x>0?10.8:-10.8,z)}
    buildBSE();
    buildFacade(-22,-24,17,20,0x645750,'DALAL CAPITAL');buildFacade(23,-20,18,17,0x53636a,'BROKER HOUSE');buildFacade(-24,17,17,14,0x705d4f,'FORT CHAMBERS');buildFacade(24,21,18,18,0x4e6068,'MARKET HOUSE');
    for(const [x,z] of [[-14,-7],[14,-4],[-15,10],[15,15],[-15,35],[15,40],[-13,58],[13,61]]){tree(x,z);lamp(x>0?10.7:-10.7,z-2)}
    for(let i=0;i<55;i++){const x=(Math.random()-.5)*150,z=(Math.random()-.5)*150;if(Math.abs(x)<30&&z>-55&&z<75)continue;box(8+Math.random()*10,5+Math.random()*24,8+Math.random()*10,[0x53636a,0x62584f,0x394b52][i%3],x,3+Math.random()*11,z)}
  }
  function buildBSE(){
    const g=new THREE.Group();g.position.set(0,0,-32);scene.add(g);
    const podiumGlass=material(COLORS.glass,.26,.52),slab=material(COLORS.white,.55,.12);
    for(let i=0;i<8;i++){const y=.7+i*1.18,w=11.7-i*.35,d=7.6-i*.17;const glass=mesh(new THREE.CylinderGeometry(1,1,.82,48),podiumGlass,0,y,0);glass.scale.set(w,1,d);g.add(glass);const band=mesh(new THREE.CylinderGeometry(1,1,.25,48),slab,0,y+.52,0);band.scale.set(w+0.25,1,d+.24);g.add(band)}
    const core=mesh(new THREE.BoxGeometry(4.4,28,5.6),material(0x263c46,.25,.6),-1.7,22,-.35);g.add(core);
    for(let i=0;i<16;i++){const y=10.4+i*1.55,shift=Math.sin(i*.22)*.55;const floor=mesh(new THREE.CylinderGeometry(1,1,1.05,48),podiumGlass,shift,y,0);floor.scale.set(6.1-i*.055,1,3.35);g.add(floor);const band=mesh(new THREE.CylinderGeometry(1,1,.19,48),slab,shift,y+.61,0);band.scale.set(6.25-i*.055,1,3.48);g.add(band)}
    const crown=mesh(new THREE.BoxGeometry(7.5,1.2,5.5),material(COLORS.white),-.4,35.5,0);g.add(crown);const mast=mesh(new THREE.BoxGeometry(1.1,6,.9),material(0x748188,.32,.75),-2.6,39,0);g.add(mast);
    const entranceFrame=mesh(new THREE.BoxGeometry(5.6,4.6,.7),material(0x2b3031,.28,.6),0,2.3,7.15);g.add(entranceFrame);const entranceGlass=mesh(new THREE.BoxGeometry(4.1,3.7,.2),material(0x102a34,.1,.75),0,2.05,7.55);g.add(entranceGlass);
    const sign=labelTexture('BSE  •  PHIROZE JEEJEEBHOY TOWERS',1024,128,'#f5ecd8','#08131a');const plane=mesh(new THREE.PlaneGeometry(10.8,1.35),new THREE.MeshBasicMaterial({map:sign,transparent:true}),0,5.4,7.62);g.add(plane);
    obstacles.push({minX:-10,maxX:10,minZ:-39,maxZ:-18});
  }
  function buildFacade(x,z,w,h,color,name){const body=box(w,h,9,color,x,h/2,z);for(let row=0;row<Math.floor(h/2.7);row++)for(let col=0;col<4;col++){const win=box(w/6,1.05,.14,0x19343f,x-w*.33+col*w*.22,1.7+row*2.7,z+4.58);win.material.roughness=.15;win.material.metalness=.5}const sign=mesh(new THREE.PlaneGeometry(w*.7,1.1),new THREE.MeshBasicMaterial({map:labelTexture(name,768,96,'#ffd47a','#101820')}),x,3,z+4.67);scene.add(sign);obstacles.push({minX:x-w/2-1,maxX:x+w/2+1,minZ:z-5,maxZ:z+5})}
  function labelTexture(text,w,h,fg,bg){const c=document.createElement('canvas');c.width=w;c.height=h;const x=c.getContext('2d');x.fillStyle=bg;x.fillRect(0,0,w,h);x.strokeStyle='#c9bfa4';x.lineWidth=8;x.strokeRect(4,4,w-8,h-8);x.fillStyle=fg;x.font=`700 ${Math.floor(h*.34)}px monospace`;x.textAlign='center';x.textBaseline='middle';x.fillText(text,w/2,h/2);const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;return t}
  function tree(x,z){const trunk=mesh(new THREE.CylinderGeometry(.25,.38,2.6,8),material(0x523722),x,1.3,z);scene.add(trunk);for(const p of [[0,3,0],[-.7,2.7,.2],[.65,2.8,.1],[0,2.8,-.7]]){const leaf=mesh(new THREE.IcosahedronGeometry(1.35,1),material(COLORS.tree),x+p[0],p[1]+1.2,z+p[2]);scene.add(leaf)}}
  function lamp(x,z){const pole=mesh(new THREE.CylinderGeometry(.08,.12,4.8,8),material(0x20282b,.4,.75),x,2.4,z);scene.add(pole);const bulb=mesh(new THREE.SphereGeometry(.26,10,8),new THREE.MeshBasicMaterial({color:0xffd47a}),x,4.75,z);scene.add(bulb);const light=new THREE.PointLight(0xffc86a,2.2,8,2);light.position.set(x,4.7,z);scene.add(light)}
  function bollard(x,z){const b=mesh(new THREE.CylinderGeometry(.12,.18,.75,8),material(0x343c3e,.35,.75),x,.38,z);scene.add(b)}
  function buildPlayer(){const g=new THREE.Group();const suit=material(0x102f45,.5,.16),skin=material(0xb97952),dark=material(0x11181d),shirt=material(0xeadfc9);const torso=mesh(new THREE.BoxGeometry(1.15,1.45,.62),suit,0,1.65,0);const head=mesh(new THREE.SphereGeometry(.42,12,8),skin,0,2.75,0);const hair=mesh(new THREE.BoxGeometry(.82,.24,.76),dark,0,3.03,-.02);const tie=mesh(new THREE.BoxGeometry(.14,.75,.05),shirt,0,1.72,.34);const left=mesh(new THREE.BoxGeometry(.38,1,.42),dark,-.33,.55,0),right=mesh(new THREE.BoxGeometry(.38,1,.42),dark,.33,.55,0);const bag=mesh(new THREE.BoxGeometry(.65,.7,.25),material(0x57351f),.8,1.25,0);g.add(torso,head,hair,tie,left,right,bag);g.userData.legs=[left,right];g.position.set(0,0,18);return g}
  function resize(){const r=canvas.getBoundingClientRect();if(!r.width||!r.height)return;renderer.setSize(r.width,r.height,false);camera.aspect=r.width/r.height;camera.updateProjectionMatrix()}
  function collides(x,z){if(Math.abs(x)>38||z>70||z<-46)return true;return obstacles.some(o=>x>o.minX&&x<o.maxX&&z>o.minZ&&z<o.maxZ&&!(o.minZ===-39&&Math.abs(x)<2.6&&z>o.maxZ-2.5))}
  function update(dt,time){let dx=0,dz=0;if(input.has('left'))dx--;if(input.has('right'))dx++;if(input.has('up'))dz--;if(input.has('down'))dz++;const len=Math.hypot(dx,dz);if(len){dx/=len;dz/=len;const accel=24;velocity.x+=dx*accel*dt;velocity.z+=dz*accel*dt;const speed=Math.hypot(velocity.x,velocity.z),max=7.5;if(speed>max){velocity.x=velocity.x/speed*max;velocity.z=velocity.z/speed*max}player.rotation.y=THREE.MathUtils.lerp(player.rotation.y,Math.atan2(velocity.x,velocity.z),.18)}else{const damping=Math.pow(.003,dt);velocity.x*=damping;velocity.z*=damping}const nx=player.position.x+velocity.x*dt,nz=player.position.z+velocity.z*dt;if(!collides(nx,player.position.z))player.position.x=nx;else velocity.x=0;if(!collides(player.position.x,nz))player.position.z=nz;else velocity.z=0;const moving=Math.hypot(velocity.x,velocity.z)>.15;const swing=moving?Math.sin(time*.012)*.42:0;player.userData.legs[0].rotation.x=swing;player.userData.legs[1].rotation.x=-swing;player.position.y=moving?Math.abs(Math.sin(time*.012))*.08:0;cameraGoal.set(player.position.x,7.6,player.position.z+12.5);camera.position.lerp(cameraGoal,1-Math.pow(.0005,dt));lookGoal.set(player.position.x,1.6,player.position.z-2.5);camera.lookAt(lookGoal);const isNear=player.position.distanceTo(entrance)<4.4;if(isNear!==near){near=isNear;onProximity?.(near?'Bombay Stock Exchange':null)}}
  function loop(time){if(!running)return;frame=requestAnimationFrame(loop);update(Math.min(clock.getDelta(),.04),time);renderer.render(scene,camera)}
  return{ready:true,open(){if(running)return;running=true;clock.start();resize();frame=requestAnimationFrame(loop)},close(){running=false;cancelAnimationFrame(frame);input.clear();velocity.set(0,0,0);near=false;onProximity?.(null)},setInput(direction,on){if(on)input.add(direction);else input.delete(direction)},isNear(){return near}};
}
