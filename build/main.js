var M=document.createElement("img");M.src="./assets/bird.png";var D=6,L={x:80,y:40,speedX:4,speedY:0,image:M,alive:function(){L.speedY+=0.6,L.speedY=L.speedY*(100-D)/100,L.y+=L.speedY,z.drawImage(L.image,L.x,L.y)},contacts:function(h){if(h.image===M)return!1;const q=this.x+this.image.width,J=this.y+this.image.height,$=q>=h.x+K&&q<=h.x+h.image.width-K,A=J>=h.y+K&&J<=h.y+h.image.height-K;return $&&A},jump:function(){L.speedY-=20}},K=5;document.addEventListener("keydown",(h)=>{if(h.key=="ArrowUp")L.jump()});document.getElementById("main").addEventListener("click",(h)=>{L.jump()});function W(){const h=new U,q=new V(h.x,h.y);return{myPipeFloor:h,myPipeCeil:q}}var B=200,Q={gap:150},T=document.createElement("img");T.src="../assets/pipeFloor.png";var N=document.createElement("img");N.src="../assets/pipeCeil.png";class U{constructor(){this.image=T,this.x=w.width,this.y=Math.random()*(w.height-200)+150}alive(){z.drawImage(this.image,this.x,this.y),this.x-=L.speedX}}class V{constructor(h,q){this.image=N,this.x=h,this.y=q-N.height-B}alive(){z.drawImage(this.image,this.x,this.y),this.x-=L.speedX}}function Z(h,q,J){if(!E[h])E[h]=0;if(E[h]>q)return E[h]=0,J();else E[h]+=1}function R(h){if(h.x<=0-h.image.width-20)return!0;if(h.y<=0-h.image.height-20)return!0;if(h.x>=w.width+h.image.width+20)return!0;if(h.y>=w.height+h.image.height+20)return!0}var E={};var _=function(){z.clearRect(0,0,w.width,w.height),Z("putPipes",Q.gap,function(){const{myPipeFloor:h,myPipeCeil:q}=W();H.push(h,q)}),H.forEach((h,q)=>{if(L.contacts(h)||R(L))u();if(R(h))H.splice(q,1)}),H.forEach((h)=>h.alive()),x(),requestAnimationFrame(_)},u=function(){H.splice(0),alert("Game Over!"),location.reload()},x=function(){S++,w.style.backgroundPosition=`${-S}px 0px`;const h=Math.floor(S/Q.gap);O.textContent=h},w=document.getElementById("main"),z=w.getContext("2d"),H=[L],O=document.querySelector("#score"),S=-1;window.requestAnimationFrame(_);export{H as scene,z as ctx,w as canvas};
