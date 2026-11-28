var ju=Object.defineProperty;var eh=(i,e,t)=>e in i?ju(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var Le=(i,e,t)=>eh(i,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const th=`############################################################
#..........#...........#...........#...........#...........#
#.......Z..#...........#.......S...#....R......#........S..#
#..S.......#...Z.......#....T......#...........#...........#
#..........#...........#..Z.T......#...........#..Z........#
#..Z.......#........R..#....T....Z.#........Z..#.......Z...#
#..........#.A.........#...........#.........H.#...........#
#####D###########D###########D###########D###########D######
#...............T.F.Z.........A...........T................#
#.....................................R.F.........Z........#
####T..#######T...T##########################D##############
####...#.......................#........OO.................#
####...#....Z.......OO......R..#....Z......................#
####...#........##....##.......#........###.....###........#
####.Z.#....F.T.##....##.......#...........................#
####...D................OO.....D........................R..#
####...#........##....##.......#................O..........#
####...#........##....##.Z.....#........###................#
####...#........OOO............#..................Z........#
####...#.A.....................#.H.......................A.#
#####D################################D#############D#######
#....F........#...........#...##.............#.............#
#.............#...........X.HA##...R.........#.............#
#.A........Z..#...Z.......#.A.##...........S.#.............#
#.............#...........######.A...........#.............#
#.............######D###################D#####.............#
#.............D..............................D.............E
#.............#...............H....F.........#.............#
#....OO.......########D##############D########.............#
#.............#.....TT.........#............##.............#
#..P..........#.....R......Z...#............##......T......#
#...........H.#..SF............#............##......TT.....#
#.............#..............A.#............##.............#
############################################################
`,nh=`##########################
#P.......#......#........#
#........#..H...#...Z....#
#...##...D......D........#
#...##...#......#....R...#
#........#####.##........#
#####.####...#.######D####
#........#.A.#.#.........#
#.S......#...X.#....S....#
#........#####.#.........#
#..Z.........#.D...A.....E
#............#.#.........#
##########################
`,ih=["hospital.txt","level1.txt"],sh={levels:ih},ko="../content/levels/",zo=Object.assign({"../content/levels/hospital.txt":th,"../content/levels/level1.txt":nh});function rh(i){const e=zo[ko+i];if(e===void 0){const t=Object.keys(zo).map(n=>n.slice(ko.length));throw new Error(`content/game.json: there is no level file "content/levels/${i}". Level files: ${t.join(", ")}`)}return e}function ah(i){const e=i==null?void 0:i.levels;if(!Array.isArray(e)||e.length===0||e.some(t=>typeof t!="string"||t===""))throw new Error('content/game.json: "levels" must be a list of file names in content/levels, e.g. ["hospital.txt"]');return e}function oh(){return ah(sh)}function lh(i){return i.replace(/\.txt$/,"")}const ch=7,uh=.5,hh=.3,fh=100,dh=2,ph=.0025,mh=.15,gh=200,_h=20,vh=8,xh=50,Sh=20,Mh=20,Ah=60,Eh=4,yh=6,bh=10,Th=12,wh=3,Rh=10,Ch=.5,Ph=4,Lh=.3,Dh=7,Ih=10,Uh=16,Nh=10,Fh=.9,Oh=25,Bh=1,kh=60,zh=.5,Gh=10,Hh=75,Vh=.3,Wh=100,Xh=40,qh=2,Yh=8,Kh=.4,Zh=1.2,Jh=6,Qh=5,$h=.4,jh=.7,ef=8,tf=2,nf=5,sf=.8,rf=4.5,af=10,of=2,lf=2,cf=5,uf=10,hf=.4,ff=1,df=2,pf=20,mf=4,gf=10,_f=12,vf={playerSpeed:ch,crouchSpeedFactor:uh,playerRadius:hh,playerHealth:fh,healDuration:dh,mouseSensitivity:ph,gamepadDeadzone:mh,gamepadTurnSpeed:gh,startingShells:_h,shellsPerPickup:vh,shellCap:xh,startingFuel:Sh,fuelPerPickup:Mh,fuelCap:Ah,fuelPerSecond:Eh,flameRange:yh,flameFireRate:bh,flameSpeed:Th,burnDuration:wh,burnDamage:Rh,burnInterval:Ch,burnMaxStacks:Ph,pickupRadius:Lh,shotgunPellets:Dh,shotgunDamage:Ih,shotgunRange:Uh,shotgunSpread:Nh,shotgunCooldown:Fh,crowbarDamage:Oh,crowbarRange:Bh,crowbarArc:kh,crowbarCooldown:zh,holeDamage:Gh,furnitureHealth:Hh,zombieRadius:Vh,shamblerHealth:Wh,sprinterHealth:Xh,shamblerSpeed:qh,shamblerDamage:Yh,shamblerReach:Kh,shamblerAttackCooldown:Zh,sprinterSpeed:Jh,sprinterDamage:Qh,sprinterReach:$h,sprinterAttackCooldown:jh,earshotRadius:ef,loseInterestDelay:tf,lastZombiesThreshold:nf,useReach:sf,survivorSpeed:rf,survivorHealth:af,zombieDamageToSurvivor:of,turnDuration:lf,survivorFightBackHealth:cf,survivorDamage:uf,survivorReach:hf,survivorAttackCooldown:ff,survivorHealAmount:df,survivorHealInterval:pf,groanIntervalMin:mf,groanIntervalMax:gf,hearingDistance:_f},xf={playerSpeed:Number,crouchSpeedFactor:Number,playerRadius:Number,playerHealth:Number,healDuration:Number,mouseSensitivity:Number,gamepadDeadzone:Number,gamepadTurnSpeed:Number,startingShells:Number,shellsPerPickup:Number,shellCap:Number,startingFuel:Number,fuelPerPickup:Number,fuelCap:Number,fuelPerSecond:Number,flameRange:Number,flameFireRate:Number,flameSpeed:Number,burnDuration:Number,burnDamage:Number,burnInterval:Number,burnMaxStacks:Number,pickupRadius:Number,shotgunPellets:Number,shotgunDamage:Number,shotgunRange:Number,shotgunSpread:Number,shotgunCooldown:Number,crowbarDamage:Number,crowbarRange:Number,crowbarArc:Number,crowbarCooldown:Number,holeDamage:Number,furnitureHealth:Number,zombieRadius:Number,shamblerHealth:Number,sprinterHealth:Number,shamblerSpeed:Number,shamblerDamage:Number,shamblerReach:Number,shamblerAttackCooldown:Number,sprinterSpeed:Number,sprinterDamage:Number,sprinterReach:Number,sprinterAttackCooldown:Number,loseInterestDelay:Number,earshotRadius:Number,lastZombiesThreshold:Number,useReach:Number,survivorSpeed:Number,survivorHealth:Number,zombieDamageToSurvivor:Number,turnDuration:Number,survivorFightBackHealth:Number,survivorDamage:Number,survivorReach:Number,survivorAttackCooldown:Number,survivorHealAmount:Number,survivorHealInterval:Number,groanIntervalMin:Number,groanIntervalMax:Number,hearingDistance:Number},Go=Object.keys(xf);function Sf(i){const e=typeof i=="object"&&i!==null?i:{},t=[];for(const n of Go){const s=e[n];s===void 0?t.push(`"${n}" is missing`):(typeof s!="number"||!Number.isFinite(s))&&t.push(`"${n}" must be a number`)}for(const n of Object.keys(e))Go.includes(n)||t.push(`"${n}" is not a known tuning value`);if(t.length===0&&(Number(e.groanIntervalMin)>Number(e.groanIntervalMax)&&t.push('"groanIntervalMin" must not be more than "groanIntervalMax"'),Number(e.hearingDistance)<=0&&t.push('"hearingDistance" must be more than 0')),t.length>0)throw new Error(`content/tuning.json: ${t.join("; ")}`);return e}function Mf(){return Sf(vf)}const ar={"#":{cell:"wall"},".":{cell:"floor"},P:{cell:"floor",thing:"player"},Z:{cell:"floor",zombie:"shambler"},R:{cell:"floor",zombie:"sprinter"},S:{cell:"floor",thing:"survivor"},H:{cell:"floor",pickup:"health"},A:{cell:"floor",pickup:"shells"},F:{cell:"floor",pickup:"fuel"},D:{cell:"door"},X:{cell:"secret"},E:{cell:"exit"},O:{cell:"hole"},T:{cell:"furniture"}};class to extends Error{constructor(e){super(`Invalid level:
`+e.map(t=>`  line ${t.line}, column ${t.column}: ${t.message}`).join(`
`)),this.problems=e,this.name="LevelError"}}function no(i){const e=i.replace(/\r/g,"").split(`
`);for(;e.length>0&&e[e.length-1].trim()==="";)e.pop();const t=Math.max(0,...e.map(o=>o.length)),n={width:t,height:e.length,cells:[],playerStart:{col:-1,row:-1},exits:[],zombies:[],survivors:[],pickups:[],doors:[],secretWalls:[],furniture:[]},s=[];let r=!1;e.forEach((o,l)=>{const c=[];for(let u=0;u<t;u++){const f=o[u];if(f===void 0){c.push("wall");continue}const h=ar[f];if(!h){s.push({message:`unknown character '${f}'. Allowed: ${Object.keys(ar).join(" ")}`,line:l+1,column:u+1}),c.push("wall");continue}c.push(h.cell);const p={col:u,row:l};"thing"in h&&h.thing==="player"?r?s.push({message:`second player start 'P' (the first is at line ${n.playerStart.row+1}, column ${n.playerStart.col+1}); a level needs exactly one`,line:l+1,column:u+1}):(r=!0,n.playerStart=p):"thing"in h&&h.thing==="survivor"?n.survivors.push(p):"zombie"in h?n.zombies.push({...p,kind:h.zombie}):"pickup"in h?n.pickups.push({...p,kind:h.pickup}):h.cell==="door"?n.doors.push(p):h.cell==="secret"?n.secretWalls.push(p):h.cell==="exit"?n.exits.push(p):h.cell==="furniture"&&n.furniture.push(p)}n.cells.push(c)});const a={line:e.length+1,column:1};r||s.push({message:"no player start 'P' anywhere in the level",...a}),n.exits.length===0&&s.push({message:"no exit 'E' anywhere in the level",...a});for(const o of n.exits)yf(n,o)||s.push({message:"exit 'E' is not in a wall line: it needs wall on both sides, left and right or above and below (the outer border counts as wall)",line:o.row+1,column:o.col+1});if(r&&Af(n)&&s.push(...Ef(n)),s.length>0)throw new to(s);return n}function Af(i){return i.cells.some(e=>e.some(t=>t==="hole"||t==="furniture"))}function Ef(i){var o;const e=new Set,t=({col:l,row:c})=>c*i.width+l,n=[i.playerStart];e.add(t(i.playerStart));for(let l=n.shift();l;l=n.shift())if(i.cells[l.row][l.col]!=="exit")for(const[c,u]of[[1,0],[-1,0],[0,1],[0,-1]]){const f={col:l.col+c,row:l.row+u},h=(o=i.cells[f.row])==null?void 0:o[f.col];h===void 0||h==="wall"||h==="hole"||e.has(t(f))||(e.add(t(f)),n.push(f))}const s=[],r=i.survivors.find(l=>!e.has(t(l)));r&&s.push({message:"survivor 'S' cannot be reached from the player start 'P' without crossing a Hole 'O'",line:r.row+1,column:r.col+1});const a=i.exits[0];return a&&!i.exits.some(l=>e.has(t(l)))&&s.push({message:"exit 'E' cannot be reached from the player start 'P' without crossing a Hole 'O'",line:a.row+1,column:a.col+1}),s}function yf(i,{col:e,row:t}){const n=(s,r)=>{var o;const a=((o=i.cells[r])==null?void 0:o[s])??"wall";return a==="wall"||a==="secret"};return n(e-1,t)&&n(e+1,t)||n(e,t-1)&&n(e,t+1)}function bf(i,{col:e,row:t}){const n=(s,r)=>{var o;const a=((o=i.cells[r])==null?void 0:o[s])??"wall";return a==="wall"||a==="secret"};return n(e-1,t)&&n(e+1,t)||n(e,t-1)&&n(e,t+1)}function Tf(i){var a;const e=[];for(const o of i.doors)bf(i,o)||e.push({message:"door 'D' is not in a wall line: it needs wall on both sides, left and right or above and below",line:o.row+1,column:o.col+1});const t=new Set,n=({col:o,row:l})=>l*i.width+o,s=[i.playerStart];t.add(n(i.playerStart));let r=null;for(let o=s.shift();o;o=s.shift()){if(i.cells[o.row][o.col]==="exit")continue;(o.col===0||o.row===0||o.col===i.width-1||o.row===i.height-1)&&(!r||o.row<r.row||o.row===r.row&&o.col<r.col)&&(r=o);for(const[u,f]of[[1,0],[-1,0],[0,1],[0,-1]]){const h={col:o.col+u,row:o.row+f},p=(a=i.cells[h.row])==null?void 0:a[h.col];p===void 0||p==="wall"||t.has(n(h))||(t.add(n(h)),s.push(h))}}return r&&e.push({message:"not enclosed: the player can walk here, to the edge of the level; wall it off",line:r.row+1,column:r.col+1}),e}const Ce=100,wf=5,Vt=9,Nt=[{item:"wall",char:"#",name:"Wall"},{item:"floor",char:".",name:"Floor (erase)"},{item:"player",char:"P",name:"Player start"},{item:"shambler",char:"Z",name:"Shambler"},{item:"sprinter",char:"R",name:"Sprinter"},{item:"survivor",char:"S",name:"Survivor"},{item:"health",char:"H",name:"Health"},{item:"shells",char:"A",name:"Shells"},{item:"fuel",char:"F",name:"Fuel"},{item:"door",char:"D",name:"Door"},{item:"secret",char:"X",name:"Secret wall"},{item:"hole",char:"O",name:"Hole"},{item:"furniture",char:"T",name:"Furniture"},{item:"exit",char:"E",name:"Exit door"}],Ti=Object.fromEntries(Nt.map(i=>[i.item,i.char])),Rf=new Set(["wall","secret","door","exit","hole","furniture"]);function Cf(i){return Nt.find(e=>e.item===i).name}function Pf(i){var e;return((e=Nt.find(t=>t.char===i))==null?void 0:e.item)??"floor"}function Lf(){const i=Ce-1,e=Array.from({length:Ce},(n,s)=>Array.from({length:Ce},(r,a)=>s===0||s===i||a===0||a===i?Ti.wall:".")),t=Ce/2;return e[t][t]=Ti.player,e[t][t+2]=Ti.exit,{rows:e}}function Df(i){return{rows:i.rows.map(e=>[...e])}}function Ui({col:i,row:e}){return i>=0&&e>=0&&i<Ce&&e<Ce}function Jn(i,e){return Ui(e)?Pf(i.rows[e.row][e.col]):"wall"}function If(i,e,t,n=[]){if(!Ui(t))return{ok:!1,message:"OUT OF BOUNDS"};if(Rf.has(e)&&n.some(s=>s.col===t.col&&s.row===t.row))return{ok:!1,message:"CAN'T BUILD WHERE YOU STAND"};if(e==="player")for(const s of i.rows)for(let r=0;r<s.length;r++)s[r]===Ti.player&&(s[r]=".");return i.rows[t.row][t.col]=Ti[e],{ok:!0}}function Uf(i,e){return!Ui(e)||Jn(i,e)==="floor"?!1:(i.rows[e.row][e.col]=".",!0)}function Ho(i,e,t){const n=[];for(let s=Math.floor(e-t);s<=Math.floor(e+t-1e-9);s++)for(let r=Math.floor(i-t);r<=Math.floor(i+t-1e-9);r++)n.push({col:r,row:s});return n}const Nf=new Set(["wall","secret","door","exit"]);function Ff(i,e,t,n,s=wf){const r=Math.cos(n),a=Math.sin(n);let o=Math.floor(e),l=Math.floor(t);const c=r>0?1:-1,u=a>0?1:-1,f=r===0?1/0:Math.abs(1/r),h=a===0?1/0:Math.abs(1/a);let p=r===0?1/0:(r>0?o+1-e:e-o)*f,g=a===0?1/0:(a>0?l+1-t:t-l)*h,S=null,m=null;for(;;){const d={col:o,row:l};if(!Ui(d))break;m=d;const M=Jn(i,d);if(S!==null&&M!=="floor")return{remove:d,place:Nf.has(M)?S:d};if(S=d,Math.min(p,g)>s)break;p<g?(o+=c,p+=f):(l+=u,g+=h)}return{remove:null,place:m}}function io(){return{slots:Nt.slice(0,Vt).map(i=>i.item),selected:0}}function Of(i,e){return Number.isInteger(e)&&e>=0&&e<Vt?{...i,selected:e}:i}function Bf(i,e){return{...i,selected:((i.selected+e)%Vt+Vt)%Vt}}function Sc(i,e,t){if(!Number.isInteger(e)||e<0||e>=Vt)return i;const n=[...i.slots],s=n.indexOf(t);return s>=0&&(n[s]=n[e]??null),n[e]=t,{...i,slots:n}}function Vo(i){return i.slots[i.selected]??null}function Mc(i){const e=()=>i.rows.map(f=>f.join("")).join(`
`)+`
`,t=Ac(i);if(!t)return{text:e(),warnings:["no Player start 'P' anywhere in the level"]};const n=new Set,s=({col:f,row:h})=>h*Ce+f,r=[t];n.add(s(t));for(let f=r.shift();f;f=r.shift())if(Jn(i,f)!=="exit")for(const[p,g]of[[1,0],[-1,0],[0,1],[0,-1]]){const S={col:f.col+p,row:f.row+g};!Ui(S)||n.has(s(S))||Jn(i,S)==="wall"||(n.add(s(S)),r.push(S))}let a={col:Ce,row:Ce},o={col:-1,row:-1},l=null;for(let f=0;f<Ce;f++)for(let h=0;h<Ce;h++)n.has(s({col:h,row:f}))&&(!l&&(h===0||f===0||h===Ce-1||f===Ce-1)&&(l={col:h,row:f}),a={col:Math.min(a.col,h),row:Math.min(a.row,f)},o={col:Math.max(o.col,h),row:Math.max(o.row,f)});if(l){const f=e(),h=ca(f).filter(p=>!p.includes("not enclosed:"));return{text:f,warnings:[`not enclosed at column ${l.col+1}, row ${l.row+1}: walk there and wall it off`,...h]}}const c=[];for(let f=a.row-1;f<=o.row+1;f++){let h="";for(let p=a.col-1;p<=o.col+1;p++)h+=n.has(s({col:p,row:f}))?i.rows[f][p]:"#";c.push(h)}const u=c.join(`
`)+`
`;return{text:u,warnings:ca(u)}}function ca(i){try{return Tf(no(i)).map(t=>`line ${t.line}, column ${t.column}: ${t.message}`)}catch(e){if(e instanceof to)return e.problems.map(t=>`line ${t.line}, column ${t.column}: ${t.message}`);throw e}}function Ac(i){for(let e=0;e<Ce;e++){const t=i.rows[e].indexOf(Ti.player);if(t>=0)return{col:t,row:e}}return null}function kf(i){const e=ca(i);if(e.length>0)return{ok:!1,errors:e};const t=no(i);if(t.width>Ce-2||t.height>Ce-2)return{ok:!1,errors:[`the level is ${t.width} x ${t.height}; the canvas holds at most ${Ce-2} x ${Ce-2}`]};const n=i.replace(/\r/g,"").split(`
`).slice(0,t.height),s=Array.from({length:Ce},()=>Array(Ce).fill(".")),r=Math.floor((Ce-t.width)/2),a=Math.floor((Ce-t.height)/2);return n.forEach((o,l)=>{for(let c=0;c<t.width;c++)s[a+l][r+c]=o[c]??"#"}),{ok:!0,level:{rows:s}}}function Ec(i){return Ac(i)}const zf="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAwCAYAAAChS3wfAAAAtklEQVR4nO3QIQ7CQBBG4b1Lb7A3wFRXIElqqqsx1TVoDoFB93RDVpRsSJYlpMOQznvJb1btfCEQERFt3u2+yFazvuWr3AGcp1m01h1Pz1nfWQwAAJwD5J9Mcw+gNes7P87l0XnuAWpd+ijrhkOzzyPfBQAAAAAAAAAAAAAAAAAAAAAAAABg/Z+fBwAAAAAAgEeA69BK2ivA+p5m/UfV8kNLs/6jagB4BxjbKLVZ/1E1AAD4L4AHprKEbXrRnycAAAAASUVORK5CYII=",Gf=Object.assign({"../../content/assets/editor/hammer.png":zf});function Hf(){return Object.values(Gf)[0]??"./editor/hammer.png"}const Vf=250,Wf=12e3;function Xf(i){i.innerHTML=`
    <div class="message"></div>
    <img class="weapon" alt="" src="${Hf()}" />
    <div class="problems" hidden></div>
    <div class="noclip" hidden>NO CLIP</div>
    <div class="selected"></div>
    <div class="hotbar">${Array.from({length:Vt},(u,f)=>`<div class="slot"><span class="number">${f+1}</span><span class="char"></span></div>`).join("")}</div>`;const e=i.querySelector(".weapon"),t=i.querySelector(".message"),n=i.querySelector(".problems"),s=i.querySelector(".noclip"),r=i.querySelector(".selected"),a=[...i.querySelectorAll(".slot")];let o="",l=null,c=0;return{render(u,f){const h=`${u.slots.join(",")}|${u.selected}`;h!==o&&(o=h,a.forEach((p,g)=>{const S=u.slots[g],m=Nt.find(d=>d.item===S);p.querySelector(".char").textContent=(m==null?void 0:m.char)??"",p.title=(m==null?void 0:m.name)??"Empty",p.classList.toggle("on",g===u.selected)}),r.textContent=f??"EMPTY")},setNoClip(u){s.hidden=!u},swing(){e.animate([{translate:"0 0",rotate:"0deg"},{translate:"-25% 20%",rotate:"-35deg"},{translate:"0 0",rotate:"0deg"}],{duration:Vf,easing:"ease-out"})},say(u,f){l={text:u,until:f+2e3}},problems(u,f){n.hidden=u.length===0,n.textContent=u.join(`
`),c=f+Wf},tick(u,f){!n.hidden&&u>c&&(n.hidden=!0),l&&u>l.until&&(l=null),t.textContent=(l==null?void 0:l.text)??f}}}const es=5;function Wo(i){return{focus:"items",item:0,slot:i.selected}}function qf(i,e,t){const n={inventory:i,hotbar:t,close:!1};if(i.focus==="items")switch(e){case"left":return{...n,inventory:{...i,item:(i.item+Nt.length-1)%Nt.length}};case"right":return{...n,inventory:{...i,item:(i.item+1)%Nt.length}};case"up":return i.item-es>=0?{...n,inventory:{...i,item:i.item-es}}:n;case"down":return i.item+es<Nt.length?{...n,inventory:{...i,item:i.item+es}}:n;case"confirm":return{...n,inventory:{...i,focus:"hotbar"}};case"cancel":return{...n,close:!0}}switch(e){case"left":return{...n,inventory:{...i,slot:(i.slot+Vt-1)%Vt}};case"right":return{...n,inventory:{...i,slot:(i.slot+1)%Vt}};case"confirm":return{inventory:{...i,focus:"items"},hotbar:Sc(t,i.slot,Nt[i.item].item),close:!1};case"cancel":return{...n,inventory:{...i,focus:"items"}};default:return n}}function Yf(i,e){let t=null,n=null;const s=()=>{n&&r(n.hotbar,n.inventory)};i.addEventListener("dragstart",a=>{var l;const o=a.target.closest("[data-item]");o&&((l=a.dataTransfer)==null||l.setData("text/plain",o.dataset.item))}),i.addEventListener("dragover",a=>{a.target.closest("[data-slot]")&&a.preventDefault()}),i.addEventListener("drop",a=>{const o=a.target.closest("[data-slot]"),l=Nt.find(c=>{var u;return c.item===((u=a.dataTransfer)==null?void 0:u.getData("text/plain"))});!o||!l||(a.preventDefault(),e(Number(o.dataset.slot),l.item))}),i.addEventListener("click",a=>{const o=a.target,l=o.closest("[data-item]"),c=o.closest("[data-slot]");l?(t=l.dataset.item,s()):c&&t!==null&&(e(Number(c.dataset.slot),t),t=null)});function r(a,o){n={hotbar:a,inventory:o};const l=Nt.map((u,f)=>`<div class="cell${o.focus==="items"&&o.item===f?" focus":""}${t===u.item||o.focus==="hotbar"&&o.item===f?" picked":""}" draggable="true" data-item="${u.item}"><span class="char">${u.char}</span><span class="label">${u.name}</span></div>`).join(""),c=Array.from({length:Vt},(u,f)=>{const h=Nt.find(p=>p.item===a.slots[f]);return`<div class="slot${o.focus==="hotbar"&&o.slot===f?" focus":""}${f===a.selected?" on":""}" data-slot="${f}"><span class="number">${f+1}</span><span class="char">${(h==null?void 0:h.char)??""}</span></div>`}).join("");i.innerHTML=`
      <h2>INVENTORY</h2>
      <div class="items" style="grid-template-columns: repeat(${es}, 120px)">${l}</div>
      <h2>HOTBAR</h2>
      <div class="slots">${c}</div>
      <p class="hint">Drag an item onto a slot, or click an item then a slot. Gamepad: D-pad and Cross, Circle to go back. I closes.</p>`}return{show(a,o){i.hidden=!1,r(a,o)},hide(){i.hidden=!0,t=null},get visible(){return!i.hidden}}}const Kf={wall:!0,door:!0,secret:!0,floor:!1,exit:!0,hole:!1,furniture:!1},Xn=1e-9,Zf=[[1,0],[0,1],[-1,0],[0,-1],[1,1],[-1,1],[-1,-1],[1,-1]];class Jf{constructor(){Le(this,"items",[]);Le(this,"pushed",0)}push(e,t){const n=this.items;n.push({value:e,priority:t,order:this.pushed++});let s=n.length-1;for(;s>0;){const r=s-1>>1;if(!this.before(s,r))break;[n[s],n[r]]=[n[r],n[s]],s=r}}pop(){const e=this.items;if(e.length===0)return;const t=e[0].value,n=e.pop();if(e.length>0){e[0]=n;let s=0;for(;;){const r=s*2+1,a=r+1;let o=s;if(r<e.length&&this.before(r,o)&&(o=r),a<e.length&&this.before(a,o)&&(o=a),o===s)break;[e[s],e[o]]=[e[o],e[s]],s=o}}return t}before(e,t){const n=this.items[e],s=this.items[t];return n.priority<s.priority||n.priority===s.priority&&n.order<s.order}}class ua{constructor(e){Le(this,"width");Le(this,"height");Le(this,"solid");Le(this,"kinds");var t;this.width=e.width,this.height=e.height,this.solid=[],this.kinds=[];for(let n=0;n<e.height;n++)for(let s=0;s<e.width;s++){const r=((t=e.cells[n])==null?void 0:t[s])??"wall";this.kinds.push(r),this.solid.push(Kf[r])}}kindAt(e,t){return e<0||t<0||e>=this.width||t>=this.height?"wall":this.kinds[t*this.width+e]}overlapsKind(e,t,n,s){return this.someCellUnder(e,t,n,(r,a)=>this.kindAt(r,a)===s)}blocksWalking(e,t){if(this.isSolid(e,t))return!0;const n=this.kindAt(e,t);return n==="hole"||n==="furniture"}overlapsHole(e,t,n){return this.overlapsKind(e,t,n,"hole")}isSolid(e,t){return e<0||t<0||e>=this.width||t>=this.height?!0:this.solid[t*this.width+e]}isPassableOpeningDoors(e,t){const n=this.kindAt(e,t);return!this.blocksWalking(e,t)||n==="door"||n==="exit"}clear(e,t){e<0||t<0||e>=this.width||t>=this.height||(this.kinds[t*this.width+e]="floor")}open(e,t){e<0||t<0||e>=this.width||t>=this.height||(this.solid[t*this.width+e]=!1)}overlapsSolid(e,t,n){return this.someCellUnder(e,t,n,(s,r)=>this.isSolid(s,r))}overlapsBlocking(e,t,n,s){return this.someCellUnder(e,t,n,(r,a)=>this.blocksWalking(r,a)&&!(s&&this.kindAt(r,a)==="hole"))}cellAt(e,t){return{col:Math.floor(e),row:Math.floor(t)}}rayDistance(e,t,n,s,r,a=(o,l)=>this.isSolid(o,l)){let o=Math.floor(e),l=Math.floor(t);if(a(o,l))return 0;const c=n>0?1:-1,u=s>0?1:-1,f=n===0?1/0:Math.abs(1/n),h=s===0?1/0:Math.abs(1/s);let p=n===0?1/0:(n>0?o+1-e:e-o)*f,g=s===0?1/0:(s>0?l+1-t:t-l)*h;for(;;){let S;if(p<g?(S=p,p+=f,o+=c):(S=g,g+=h,l+=u),S>=r)return r;if(a(o,l))return S}}hasLineOfSight(e,t,n,s,r=(a,o)=>this.isSolid(a,o)){const a=Math.hypot(n-e,s-t);return a===0?!r(Math.floor(e),Math.floor(t)):this.rayDistance(e,t,(n-e)/a,(s-t)/a,a,r)>=a}findPath(e,t,n=(r,a)=>!this.blocksWalking(r,a),s=n){const r=(g,S)=>g>=0&&S>=0&&g<this.width&&S<this.height;if(!r(e.col,e.row)||!r(t.col,t.row)||!n(t.col,t.row))return null;const a=(g,S)=>S*this.width+g,o=a(e.col,e.row),l=a(t.col,t.row),c=g=>{const S=Math.abs(g%this.width-t.col),m=Math.abs(Math.floor(g/this.width)-t.row);return Math.max(S,m)+(Math.SQRT2-1)*Math.min(S,m)},u=new Map([[o,0]]),f=new Map,h=new Jf;h.push(o,c(o));const p=new Set;for(let g=h.pop();g!==void 0;g=h.pop()){if(g===l)return this.tracePath(f,l);if(p.has(g))continue;p.add(g);const S=g%this.width,m=Math.floor(g/this.width);for(const[d,M]of Zf){const b=S+d,A=m+M;if(!r(b,A)||!n(b,A)||d!==0&&M!==0&&(!s(S+d,m)||!s(S,m+M)))continue;const C=a(b,A),T=u.get(g)+(d!==0&&M!==0?Math.SQRT2:1);T>=(u.get(C)??1/0)-Xn||(u.set(C,T),f.set(C,g),h.push(C,T+c(C)))}}return null}tracePath(e,t){const n=[];for(let s=t;s!==void 0;s=e.get(s))n.push({col:s%this.width,row:Math.floor(s/this.width)});return n.reverse()}someCellUnder(e,t,n,s){const r=Math.floor(e-n+Xn),a=Math.floor(e+n-Xn),o=Math.floor(t-n+Xn),l=Math.floor(t+n-Xn);for(let c=o;c<=l;c++)for(let u=r;u<=a;u++)if(s(u,c))return!0;return!1}move(e,t,n,s,r,a=[],o=!1){const l=Math.max(1,Math.ceil(Math.max(Math.abs(n),Math.abs(s))/Math.max(r,.05)));for(let c=0;c<l;c++)e=this.moveAlongX(e,t,n/l,r,a,o),t=this.moveAlongY(e,t,s/l,r,a,o);return{x:e,y:t}}moveAlongX(e,t,n,s,r,a){let o=this.moveAxis(e,t,n,s,"x",a);for(const l of r){const c=s+l.radius;Math.abs(t-l.y)>=c||Math.abs(e-l.x)<c-Xn||Math.abs(o-l.x)<c&&(o=n>0?l.x-c:l.x+c)}return o}moveAlongY(e,t,n,s,r,a){let o=this.moveAxis(t,e,n,s,"y",a);for(const l of r){const c=s+l.radius;Math.abs(e-l.x)>=c||Math.abs(t-l.y)<c-Xn||Math.abs(o-l.y)<c&&(o=n>0?l.y-c:l.y+c)}return o}moveAxis(e,t,n,s,r,a){if(n===0)return e;const o=e+n;return(r==="x"?this.overlapsBlocking(o,t,s,a):this.overlapsBlocking(t,o,s,a))?n>0?Math.floor(o+s)-s:Math.floor(o-s)+1+s:o}}function Qf(i){const e=i.player,t=i.tuning.playerRadius+i.tuning.pickupRadius;for(const n of i.pickups)n.taken||Math.abs(e.x-(n.col+.5))>=t||Math.abs(e.y-(n.row+.5))>=t||$f[n.kind](i)&&(n.taken=!0,i.events.push({type:"pickupTaken",id:n.id,kind:n.kind}))}const $f={health:i=>{const e=i.player;return e.health>=i.tuning.playerHealth?!1:(e.healAmount=i.tuning.playerHealth-e.health,e.healing=i.tuning.healDuration,!0)},shells:i=>{const e=i.player,{shellsPerPickup:t,shellCap:n}=i.tuning;return e.shells>=n?!1:(e.shells=Math.min(n,e.shells+t),!0)},fuel:i=>{const e=i.player,{fuelPerPickup:t,fuelCap:n}=i.tuning;return e.fuel>=n?!1:(e.fuel=Math.min(n,e.fuel+t),!0)}};function jf(i,e){const t=i.player;if(t.healing<=0||t.health<=0)return;const{playerHealth:n}=i.tuning,s=Math.min(1,e/t.healing),r=s>=1-1e-9?t.healAmount:t.healAmount*s;t.healAmount-=r,t.healing=Math.max(0,t.healing-e),t.healing<1e-9&&(t.healing=0),t.health=Math.min(n,t.health+r),t.healing===0&&n-t.health<1e-9&&(t.health=n)}class ed{constructor(e){Le(this,"state");this.state=e>>>0}next(){this.state=this.state+1831565813>>>0;let e=this.state;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}range(e,t){return e+(t-e)*this.next()}}const Ni={shambler:i=>({health:i.shamblerHealth,speed:i.shamblerSpeed,damage:i.shamblerDamage,reach:i.shamblerReach,attackCooldown:i.shamblerAttackCooldown}),sprinter:i=>({health:i.sprinterHealth,speed:i.sprinterSpeed,damage:i.sprinterDamage,reach:i.sprinterReach,attackCooldown:i.sprinterAttackCooldown})};function td(i){const e=i.events.filter(s=>s.type==="gunshotFired"),t=i.tuning.earshotRadius,n=i.zombies.filter(s=>s.state!=="dead").length<=i.tuning.lastZombiesThreshold;for(const s of i.zombies){if(s.state==="dead"||s.state==="chasing")continue;const r=e.some(a=>Math.hypot(a.x-s.x,a.y-s.y)<=t);s.awake?(r||Xo(i,s))&&yc(s):(n||r||Xo(i,s))&&nd(i,s)}}function nd(i,e){e.state!=="idle"||e.awake||(e.awake=!0,yc(e),i.events.push({type:"zombieWoke",id:e.id}))}function yc(i){i.state="chasing",i.unseenFor=0,i.wanderTarget=null}const id=10,sd=1;function rd(i,e){for(const t of i.zombies)if(t.state==="chasing"){if(!wc(i,t)){t.unseenFor=0;continue}t.unseenFor+=e,!(t.unseenFor<i.tuning.loseInterestDelay-1e-9)&&(t.unseenFor=0,t.wanderTarget=ad(i,t),t.state=t.wanderTarget?"wandering":"idle")}}function ad(i,e){const{grid:t}=i,n=t.cellAt(e.x,e.y),s=[];for(let a=0;a<t.height;a++)for(let o=0;o<t.width;o++){if(t.blocksWalking(o,a))continue;const l=Math.hypot(o+.5-e.x,a+.5-e.y);Math.abs(l-id)<=sd&&s.push({col:o,row:a})}const r=Math.floor(i.rng.next()*s.length);for(let a=0;a<s.length;a++){const o=s[(r+a)%s.length];if(t.findPath(n,o))return{x:o.col+.5,y:o.row+.5}}return null}function od(i,e){const{grid:t,player:n}=i,s=t.cellAt(n.x,n.y);for(const r of i.zombies){if(r.state==="wandering"){ld(i,r,e);continue}if(r.state!=="chasing"||so(i,r))continue;const a=Tc(i,r,s,{x:n.x,y:n.y});a&&bc(i,r,a,e)}}function ld(i,e,t){const n=e.wanderTarget,s=n&&Tc(i,e,i.grid.cellAt(n.x,n.y),n);(!(s?bc(i,e,s,t):!1)||Math.hypot(n.x-e.x,n.y-e.y)<1e-6)&&(e.state="idle",e.wanderTarget=null)}function bc(i,e,t,n){const{grid:s,player:r,tuning:a}=i,o=t.x-e.x,l=t.y-e.y,c=Math.hypot(o,l);if(c===0)return!1;const u=Math.min(c,Ni[e.kind](a).speed*n),f=s.move(e.x,e.y,o/c*u,l/c*u,a.zombieRadius,[{x:r.x,y:r.y,radius:a.playerRadius},...fd(i,e)]),h=f.x!==e.x||f.y!==e.y;return e.x=f.x,e.y=f.y,h}function cd(i,e){const t=i.player;for(const n of i.zombies){if(n.cooldown=Math.max(0,n.cooldown-e),n.state!=="chasing"||n.cooldown>1e-9||!so(i,n))continue;const s=Ni[n.kind](i.tuning);if(n.cooldown=s.attackCooldown,t.health=Math.max(0,t.health-s.damage),i.events.push({type:"playerHurt",id:n.id,damage:s.damage}),t.health===0)return}}function ud(i){const e=i.tuning.playerRadius;for(const t of i.zombies){if(t.state!=="chasing"||t.cooldown>1e-9)continue;const n=i.survivors.find(s=>s.state==="fleeing"&&so(i,t,{x:s.x,y:s.y,radius:e}));n&&(t.cooldown=Ni[t.kind](i.tuning).attackCooldown,n.health=Math.max(0,n.health-i.tuning.zombieDamageToSurvivor),i.events.push({type:"survivorHurt",id:n.id,health:n.health,by:t.id}),!(n.health>0)&&(n.state="turning",n.turnTimer=i.tuning.turnDuration,i.events.push({type:"survivorKilled",id:n.id,by:t.id}),i.events.push({type:"survivorTurning",id:n.id})))}}function so(i,e,t=hd(i)){const{tuning:n}=i;return Math.hypot(t.x-e.x,t.y-e.y)-n.zombieRadius-t.radius<=Ni[e.kind](n).reach+1e-9}function hd(i){return{x:i.player.x,y:i.player.y,radius:i.tuning.playerRadius}}function Tc(i,e,t,n){const s=i.grid.findPath(i.grid.cellAt(e.x,e.y),t);if(!s)return null;if(s.length<=2)return n;const r=s[1];return{x:r.col+.5,y:r.row+.5}}function fd(i,e){const t=i.tuning.zombieRadius;return i.zombies.filter(n=>n!==e&&n.state!=="dead").map(n=>({x:n.x,y:n.y,radius:t}))}function wc(i,e){const t=i.player;if(!t.crouching)return!1;const n=(s,r)=>i.grid.kindAt(s,r)==="furniture";return!i.grid.hasLineOfSight(e.x,e.y,t.x,t.y,n)}function Xo(i,e){const t=i.player,n=i.grid,s=t.crouching?(r,a)=>n.isSolid(r,a)||n.kindAt(r,a)==="furniture":(r,a)=>n.isSolid(r,a);return n.hasLineOfSight(e.x,e.y,t.x,t.y,s)}function dd(i,e){for(const t of i.survivors)t.state==="turning"&&(t.turnTimer=Math.max(0,t.turnTimer-e),!(t.turnTimer>1e-9)&&pd(i,t))}function pd(i,e){e.state="dead",e.turnTimer=0;const t=i.rng.next()<.5?"shambler":"sprinter",n=i.zombies.length;e.risenAs=n,i.survivorsTurned++,i.zombies.push({id:n,kind:t,risen:!0,x:e.x,y:e.y,state:"idle",health:Ni[t](i.tuning).health,cooldown:0,awake:!1,unseenFor:0,burn:null,wanderTarget:null}),i.events.push({type:"survivorRose",id:e.id,zombieId:n,kind:t})}function md(i,e){e.state="dead",e.turnTimer=0,i.events.push({type:"turnStopped",id:e.id})}const gd={1:"crowbar",2:"shotgun",3:"flamethrower"},qo=Math.PI/180,_d={crowbar:i=>({hits:{kind:"arc",width:i.crowbarArc*qo},damage:i.crowbarDamage,range:i.crowbarRange,cooldown:i.crowbarCooldown,shellsPerAttack:0,sound:"crowbarSwung"}),shotgun:i=>({hits:{kind:"pellets",count:i.shotgunPellets,spread:i.shotgunSpread*qo},damage:i.shotgunDamage,range:i.shotgunRange,cooldown:i.shotgunCooldown,shellsPerAttack:1,sound:"gunshotFired"})},vd={shotgun:"crowbar",crowbar:"flamethrower",flamethrower:"shotgun"};function xd(i,e){if(e===null)return;const t=i.player;t.weapon=e==="switch"?vd[t.weapon]:gd[e]}function Sd(i,e,t){const n=i.player;if(n.cooldown=Math.max(0,n.cooldown-t),n.weapon==="flamethrower"||!e||n.cooldown>1e-9)return;const s=_d[n.weapon](i.tuning);if(n.shells<s.shellsPerAttack)return;n.shells-=s.shellsPerAttack,n.cooldown=s.cooldown,i.events.push({type:s.sound,x:n.x,y:n.y});const{hits:r}=s;if(r.kind==="arc"){const a=Md(i,r.width,s.range);if(a)Yo(i,a,s.damage);else{const o=Ad(i,r.width,s.range);o&&Cc(i,o,s.damage)}return}for(let a=0;a<r.count;a++){const o=n.facing+i.rng.range(-r.spread/2,r.spread/2),l=Ed(i,Math.cos(o),Math.sin(o),s.range);l&&Yo(i,l,s.damage)}}function Rc(i){const{zombieRadius:e,playerRadius:t}=i.tuning,n=[];for(const s of i.zombies)s.state!=="dead"&&n.push({target:{zombie:s},x:s.x,y:s.y,radius:e});for(const s of i.survivors)s.state==="turning"&&n.push({target:{body:s},x:s.x,y:s.y,radius:t});return n}function Yo(i,e,t){"zombie"in e?ro(i,e.zombie,t):md(i,e.body)}function Md(i,e,t){const{x:n,y:s,facing:r}=i.player;let a=null,o=1/0;for(const l of Rc(i)){const c=Math.hypot(l.x-n,l.y-s);c-l.radius>t||c>=o||Math.abs(Pc(r,Math.atan2(l.y-s,l.x-n)))>e/2+1e-9||i.grid.hasLineOfSight(n,s,l.x,l.y)&&(a=l.target,o=c)}return a}function Ad(i,e,t){const{x:n,y:s,facing:r}=i.player;let a=null,o=1/0;for(const l of i.furniture){const c=l.col+.5,u=l.row+.5,f=Math.hypot(c-n,u-s);f-.5>t||f>=o||Math.abs(Pc(r,Math.atan2(u-s,c-n)))>e/2+1e-9||i.grid.hasLineOfSight(n,s,c,u)&&(a=l,o=f)}return a}function Cc(i,e,t){e.health=Math.max(0,e.health-t);const{col:n,row:s,health:r}=e;i.events.push({type:"furnitureHit",col:n,row:s,damage:t,health:r}),!(r>0)&&(i.furniture=i.furniture.filter(a=>a!==e),i.grid.clear(n,s),i.events.push({type:"furnitureSmashed",col:n,row:s}))}function Pc(i,e){const t=(e-i)%(2*Math.PI);return t>Math.PI?t-2*Math.PI:t<-Math.PI?t+2*Math.PI:t}function Ed(i,e,t,n){const{x:s,y:r}=i.player;let a=null,o=i.grid.rayDistance(s,r,e,t,n);for(const l of Rc(i)){const c=ha(s,r,e,t,l.x,l.y,l.radius);c!==null&&c<=o&&(a=l.target,o=c)}return a}function ro(i,e,t){e.health=Math.max(0,e.health-t),i.events.push({type:"zombieHit",id:e.id,damage:t}),!(e.health>0)&&(e.state="dead",e.risen?i.risenKilled++:i.zombiesKilled++,i.events.push({type:"zombieKilled",id:e.id}))}function ha(i,e,t,n,s,r,a){let o=0,l=1/0;for(const[c,u,f]of[[i,t,s],[e,n,r]]){if(u===0){if(Math.abs(c-f)>a)return null;continue}const h=(f-a-c)/u,p=(f+a-c)/u;o=Math.max(o,Math.min(h,p)),l=Math.min(l,Math.max(h,p))}return o<=l?o:null}function wr(i){return i?{stacks:i.stacks,remaining:i.remaining}:null}const Ci=1e-9;function Ko(i,e,t,n){const s=i.tuning,r=e.burn;if(!r){e.burn={remaining:s.burnDuration,stacks:1,nextTick:0,nextStack:s.burnInterval},i.events.push({type:"ignited",x:t,y:n});return}r.remaining=s.burnDuration,r.stacks<s.burnMaxStacks&&r.nextStack<=Ci&&(r.stacks++,r.nextStack=s.burnInterval)}function Zo(i,e,t,n){const s=i.tuning;e.burn?e.burn.remaining<s.burnDuration&&(e.burn.remaining=s.burnDuration):(e.burn={remaining:s.burnDuration,stacks:1,nextTick:0,nextStack:s.burnInterval},i.events.push({type:"ignited",x:t,y:n}))}const is=.25;function yd(i,e,t,n,s,r){const a=i.grid.rayDistance(e,t,n,s,r);let o=null,l=a;for(const c of i.zombies){if(c.state==="dead")continue;const u=ha(e,t,n,s,c.x,c.y,i.tuning.zombieRadius);u!==null&&u<=l&&(o={zombie:c},l=u)}for(const c of i.furniture){const u=ha(e,t,n,s,c.col+.5,c.row+.5,.5);u!==null&&u<=l&&(o={furniture:c},l=u)}return o||(a<r?{solid:i.grid.cellAt(e+n*(a+1e-6),t+s*(a+1e-6))}:null)}function Jo(i,e,t,n){const s=e.find(r=>r.col===t&&r.row===n);s?s.remaining=i.tuning.burnDuration:e.push({col:t,row:n,remaining:i.tuning.burnDuration})}function bd(i,e){const t=i.player;t.flame!==e&&(t.flame==="on"&&i.events.push({type:"flameStopped"}),e==="on"&&i.events.push({type:"flameStarted"}),e==="empty"&&i.events.push({type:"flameEmpty"}),t.flame=e)}function Td(i,e){const t=i.player;for(;t.flameTimer<=Ci;)i.flames.push({x:t.x+Math.cos(t.facing)*is,y:t.y+Math.sin(t.facing)*is,dx:Math.cos(t.facing),dy:Math.sin(t.facing),travelled:is}),t.flameTimer+=1/i.tuning.flameFireRate;t.flameTimer-=e}function Qo(i,e){"zombie"in e?Ko(i,e.zombie,e.zombie.x,e.zombie.y):"furniture"in e?Ko(i,e.furniture,e.furniture.col+.5,e.furniture.row+.5):"solid"in e?Jo(i,i.wallFlames,e.solid.col,e.solid.row):Jo(i,i.firePatches,e.floor.col,e.floor.row)}function wd(i,e){const{flameSpeed:t,flameRange:n}=i.tuning;i.flames=i.flames.filter(s=>{const r=Math.min(t*e,n-s.travelled),a=yd(i,s.x,s.y,s.dx,s.dy,r);return a?(Qo(i,a),!1):(s.x+=s.dx*r,s.y+=s.dy*r,s.travelled+=r,n-s.travelled>Ci?!0:(Qo(i,{floor:i.grid.cellAt(s.x,s.y)}),!1))})}function Rd(i,e,t){const n=i.player;bd(i,n.weapon!=="flamethrower"||!e?"off":n.fuel>0?"on":"empty"),n.flame==="on"?(n.fuel=Math.max(0,n.fuel-i.tuning.fuelPerSecond*t),Td(i,t)):n.flameTimer=Math.max(0,n.flameTimer-t),wd(i,t)}function fa(i,e,t){let n=0;for(;i.nextTick<=Ci;)n+=e.burnDamage*i.stacks,i.nextTick+=e.burnInterval;return i.nextTick-=t,i.nextStack-=t,i.remaining-=t,{damage:n,ended:i.remaining<=Ci}}function Cd(i){return i.state==="dead"}function $o(i,e){for(const t of i)t.remaining-=e;return i.filter(t=>t.remaining>Ci)}function Pd(i){if(i.firePatches.length===0)return;const e=(n,s)=>{const{col:r,row:a}=i.grid.cellAt(n,s);return i.firePatches.some(o=>o.col===r&&o.row===a)};for(const n of i.zombies)n.state!=="dead"&&e(n.x,n.y)&&Zo(i,n,n.x,n.y);const t=i.player;e(t.x,t.y)&&Zo(i,t,t.x,t.y)}function Ld(i,e){Pd(i),i.firePatches=$o(i.firePatches,e),i.wallFlames=$o(i.wallFlames,e),Dd(i,e);for(const t of i.zombies){if(!t.burn)continue;if(t.state==="dead"){t.burn=null;continue}const{damage:n,ended:s}=fa(t.burn,i.tuning,e);n>0&&ro(i,t,n),Cd(t)?t.burn=null:s&&(t.burn=null,i.events.push({type:"burnedOut",x:t.x,y:t.y}))}for(const t of[...i.furniture]){if(!t.burn)continue;const{damage:n,ended:s}=fa(t.burn,i.tuning,e);n>0&&Cc(i,t,n),s&&i.furniture.includes(t)&&(t.burn=null,i.events.push({type:"burnedOut",x:t.col+.5,y:t.row+.5}))}}function Dd(i,e){const t=i.player;if(!t.burn)return;const{damage:n,ended:s}=fa(t.burn,i.tuning,e);n>0&&(t.health=Math.max(0,t.health-n),i.events.push({type:"playerBurned",damage:n})),s&&(t.burn=null,i.events.push({type:"burnedOut",x:t.x,y:t.y}))}const jo=1e-6,Id=1e-6;function Ud(i,e){if(!e)return;const t=i.player,n=Math.cos(t.facing),s=Math.sin(t.facing),r=i.tuning.playerRadius+i.tuning.useReach,a=i.grid.rayDistance(t.x,t.y,n,s,r);if(a>=r)return;const o=i.grid.cellAt(t.x+n*(a+jo),t.y+s*(a+jo));Lc(i,o.col,o.row)}function Lc(i,e,t){const n=i.doors.find(a=>a.kind==="door"&&a.col===e&&a.row===t&&a.state==="closed"),s=i.secretWalls.find(a=>a.col===e&&a.row===t&&a.state==="closed"),r=n??s;return r?(Ic(i,r),!0):!1}function Dc(i,e,t,n){const s=n+Id;for(const r of i.doors){if(r.kind!=="exit"||r.state!=="closed")continue;e+s>r.col&&e-s<r.col+1&&t+s>r.row&&t-s<r.row+1&&Ic(i,r)}}function Ic(i,e){e.state="open",i.grid.open(e.col,e.row),e.kind==="secret"?(i.secretsFound++,i.events.push({type:"secretFound",id:e.id})):i.events.push({type:"doorOpened",id:e.id})}const Nd=2;function Fd(i,e){i.message={text:e,timeLeft:Nd}}function Od(i,e){i.message&&(i.message.timeLeft-=e,i.message.timeLeft<=1e-9&&(i.message=null))}function Bd(i,e){if(!e)return;const{player:t,tuning:n,grid:s}=i;for(const r of i.survivors)r.state!=="waiting"||Math.hypot(r.x-t.x,r.y-t.y)-2*n.playerRadius>n.useReach||s.hasLineOfSight(t.x,t.y,r.x,r.y)&&(r.state="fleeing",i.events.push({type:"survivorFleeing",id:r.id}))}function kd(i,e){const{grid:t,tuning:n}=i;for(const s of i.survivors){if(s.state!=="fleeing")continue;const r=Vd(i,s);if(!r)continue;const a=r[1];if(!a)continue;Lc(i,a.col,a.row);const o=a.col+.5-s.x,l=a.row+.5-s.y,c=Math.hypot(o,l);if(c===0)continue;const u=Math.min(c,n.survivorSpeed*e),f=t.move(s.x,s.y,o/c*u,l/c*u,n.playerRadius);s.x=f.x,s.y=f.y,Dc(i,s.x,s.y,n.playerRadius),t.overlapsKind(s.x,s.y,n.playerRadius,"exit")&&Hd(i,s)}}function zd(i,e){const{tuning:t}=i;for(const n of i.survivors){if(n.cooldown=Math.max(0,n.cooldown-e),n.state!=="fleeing"||n.health>t.survivorFightBackHealth||n.cooldown>1e-9)continue;const s=Gd(i,n);s&&(n.cooldown=t.survivorAttackCooldown,ro(i,s,t.survivorDamage))}}function Gd(i,e){const{tuning:t}=i;let n=null,s=1/0;for(const r of i.zombies){if(r.state!=="chasing")continue;const a=Math.hypot(r.x-e.x,r.y-e.y);a-t.playerRadius-t.zombieRadius>t.survivorReach+1e-9||a>=s||(n=r,s=a)}return n}function Hd(i,e){e.state="safe",i.survivorsRescued++,i.events.push({type:"survivorSafe",id:e.id}),Fd(i,"SURVIVOR SAFE")}function Vd(i,e){const{grid:t}=i,n=t.cellAt(e.x,e.y),s=(o,l)=>!t.blocksWalking(o,l),r=(o,l)=>t.isPassableOpeningDoors(o,l);let a=null;for(const o of i.level.exits){const l=t.findPath(n,o,r,s);l&&(!a||l.length<a.length)&&(a=l)}return a}function Wd(i,e){const{survivorHealth:t,survivorHealAmount:n,survivorHealInterval:s}=i.tuning;for(const r of i.survivors)if(!(r.state!=="waiting"&&r.state!=="fleeing")){if(r.health>=t){r.healTimer=0;continue}r.healTimer+=e,!(r.healTimer<s-1e-9)&&(r.healTimer-=s,r.health=Math.min(t,r.health+n))}}const ao=60,It=1/ao;function Xd(i){let e=el(i,i.startScreen??"title");return{step(t){return e.screen==="dead"&&t.confirm?(e=el(i,"playing"),[]):(e.events=[],Yd(e,t),e.screen==="playing"&&qd(e,t),e.tick++,e.events)},snapshot:()=>Qd(e)}}function qd(i,e){if(Od(i,It),Kd(i,e),Zd(i),Dc(i,i.player.x,i.player.y,i.tuning.playerRadius),Qf(i),Ud(i,e.use),Bd(i,e.use),xd(i,e.weapon),Sd(i,e.attack,It),Rd(i,e.attack,It),Ld(i,It),dd(i,It),td(i),rd(i,It),od(i,It),kd(i,It),cd(i,It),ud(i),zd(i,It),Wd(i,It),jf(i,It),i.time+=It,i.player.health<=0){i.screen="dead",i.events.push({type:"playerDied"});return}Jd(i)}function el(i,e){const{level:t,tuning:n,seed:s}=i;return{level:t,tuning:n,grid:new ua(t),rng:new ed(s),tick:0,time:0,screen:e,player:{x:t.playerStart.col+.5,y:t.playerStart.row+.5,facing:-Math.PI/2,lastCell:{...t.playerStart},crouching:!1,health:n.playerHealth,healing:0,healAmount:0,weapon:"shotgun",burn:null,shells:n.startingShells,fuel:n.startingFuel,flame:"off",flameTimer:0,cooldown:0},zombies:t.zombies.map((r,a)=>({id:a,kind:r.kind,x:r.col+.5,y:r.row+.5,state:"idle",health:Ni[r.kind](n).health,cooldown:0,risen:!1,awake:!1,unseenFor:0,wanderTarget:null,burn:null})),survivors:t.survivors.map((r,a)=>({id:a,x:r.col+.5,y:r.row+.5,state:"waiting",health:n.survivorHealth,cooldown:0,healTimer:0,turnTimer:0,risenAs:null})),pickups:t.pickups.map((r,a)=>({id:a,kind:r.kind,col:r.col,row:r.row,taken:!1})),doors:[...t.doors.map(r=>({kind:"door",col:r.col,row:r.row})),...t.exits.map(r=>({kind:"exit",col:r.col,row:r.row}))].map((r,a)=>({id:a,...r,state:"closed"})),furniture:t.furniture.map(r=>({col:r.col,row:r.row,health:n.furnitureHealth,burn:null})),secretWalls:t.secretWalls.map((r,a)=>({id:a,kind:"secret",col:r.col,row:r.row,state:"closed"})),flames:[],firePatches:[],wallFlames:[],survivorsRescued:0,zombiesKilled:0,risenKilled:0,survivorsTurned:0,secretsFound:0,message:null,events:[]}}function Yd(i,e){switch(i.screen){case"title":e.confirm&&(i.screen="playing");break;case"playing":e.pause&&(i.screen="paused");break;case"paused":(e.confirm||e.pause)&&(i.screen="playing");break}}function Kd(i,e){const t=i.player;t.facing=$d(t.facing+(Number.isFinite(e.turn)?e.turn:0)),t.crouching=e.crouch===!0;const n=tl(e.forward,-1,1),s=tl(e.strafe,-1,1),r=Math.cos(t.facing),a=Math.sin(t.facing);let o=n*r-s*a,l=n*a+s*r;const c=Math.hypot(o,l);if(c===0)return;const f=i.tuning.playerSpeed*(t.crouching?i.tuning.crouchSpeedFactor:1)*It/Math.max(1,c);o*=f,l*=f;const h=i.tuning.zombieRadius,p=i.zombies.filter(S=>S.state!=="dead").map(S=>({x:S.x,y:S.y,radius:h})),g=i.grid.move(t.x,t.y,o,l,i.tuning.playerRadius,p,!0);t.x=g.x,t.y=g.y}function Zd(i){const e=i.player;if(i.grid.overlapsHole(e.x,e.y,i.tuning.playerRadius)){const t=i.tuning.holeDamage;e.x=e.lastCell.col+.5,e.y=e.lastCell.row+.5,e.health=Math.max(0,e.health-t),i.events.push({type:"playerFell",damage:t});return}e.lastCell=i.grid.cellAt(e.x,e.y)}function Jd(i){const e=i.player;i.grid.overlapsKind(e.x,e.y,i.tuning.playerRadius,"exit")&&(i.screen="stats",i.events.push({type:"levelCompleted"}))}function Qd(i){var t;const e=i.player;return{tick:i.tick,time:i.time,screen:i.screen,player:{x:e.x,y:e.y,facing:e.facing,crouching:e.crouching,health:e.health,healing:e.healing,weapon:e.weapon,burn:wr(e.burn),shells:e.shells,fuel:e.fuel},zombies:i.zombies.map(n=>({id:n.id,kind:n.kind,x:n.x,y:n.y,state:n.state,health:n.health,risen:n.risen,hidden:wc(i,n),burn:wr(n.burn)})),survivors:i.survivors.map(n=>({id:n.id,x:n.x,y:n.y,state:n.state,health:n.health,risenAs:n.risenAs})),pickups:i.pickups.filter(n=>!n.taken).map(n=>({id:n.id,kind:n.kind,col:n.col,row:n.row})),doors:i.doors.map(n=>({id:n.id,kind:n.kind,col:n.col,row:n.row,state:n.state})),secretWalls:i.secretWalls.map(n=>({id:n.id,kind:n.kind,col:n.col,row:n.row,state:n.state})),furniture:i.furniture.map(n=>({col:n.col,row:n.row,health:n.health,burn:wr(n.burn)})),flames:i.flames.map(n=>({x:n.x,y:n.y,travelled:n.travelled})),firePatches:i.firePatches.map(n=>({col:n.col,row:n.row,remaining:n.remaining})),wallFlames:i.wallFlames.map(n=>({col:n.col,row:n.row,remaining:n.remaining})),stats:{survivorsRescued:i.survivorsRescued,survivorsTotal:i.level.survivors.length,zombiesKilled:i.zombiesKilled,zombiesTotal:i.level.zombies.length,risen:{killed:i.risenKilled,turned:i.survivorsTurned},secretsFound:i.secretsFound,secretsTotal:i.level.secretWalls.length,time:i.time},message:((t=i.message)==null?void 0:t.text)??null}}function tl(i,e,t){return Number.isFinite(i)?Math.min(t,Math.max(e,i)):0}function $d(i){const e=Math.PI*2;let t=i%e;return t<=-Math.PI&&(t+=e),t>Math.PI&&(t-=e),t}const mn={cross:0,square:2,triangle:3,r2:7,options:9,r3:11,dpadUp:12,dpadLeft:14,dpadRight:15},Rr={leftX:0,leftY:1,rightX:2},jd=.5,ep=Math.PI/180;class Uc{constructor(e,t){Le(this,"down",new Set);this.deadzone=e,this.turnSpeed=t}read(){var l,c,u;const e=(l=navigator.getGamepads)==null?void 0:l.call(navigator).find(f=>(f==null?void 0:f.connected)&&f.mapping==="standard");if(!e)return this.down.clear(),null;const t=this.down;this.down=new Set(e.buttons.flatMap((f,h)=>f.pressed?[h]:[]));const n=f=>this.down.has(f)&&!t.has(f),[s,r]=this.stick(e.axes[Rr.leftX]??0,e.axes[Rr.leftY]??0),[a]=this.stick(e.axes[Rr.rightX]??0,0),o=Math.sign(a)*a*a*this.turnSpeed*ep/ao;return{forward:-r,strafe:s,turn:o,attack:(((c=e.buttons[mn.r2])==null?void 0:c.value)??0)>=jd,weapon:n(mn.triangle)?"switch":n(mn.dpadLeft)?1:n(mn.dpadRight)?2:n(mn.dpadUp)?3:null,use:n(mn.square),crouch:((u=e.buttons[mn.r3])==null?void 0:u.pressed)??!1,pause:n(mn.options),confirm:n(mn.cross)}}stick(e,t){const n=Math.hypot(e,t);if(n<=this.deadzone)return[0,0];const s=Math.min(1,(n-this.deadzone)/(1-this.deadzone))/n;return[e*s,t*s]}}const Ct={cross:0,circle:1,triangle:3,dpadUp:12,dpadDown:13,l2:6,r2:7,options:9,l3:10,dpadLeft:14,dpadRight:15},tp=.5;class np{constructor(e,t){Le(this,"held",new Set);Le(this,"mouseDx",0);Le(this,"use",!1);Le(this,"place",!1);Le(this,"remove",!1);Le(this,"play",!1);Le(this,"inventory",!1);Le(this,"menu",!1);Le(this,"noClip",!1);Le(this,"slot",null);Le(this,"scroll",0);Le(this,"padDown",new Set);Le(this,"gamepad");Le(this,"mouseSensitivity");this.canvas=e,this.mouseSensitivity=t.mouseSensitivity,this.gamepad=new Uc(t.gamepadDeadzone,t.gamepadTurnSpeed),e.addEventListener("click",()=>{this.locked||Promise.resolve(e.requestPointerLock()).catch(()=>{})}),e.addEventListener("contextmenu",n=>n.preventDefault()),document.addEventListener("pointerlockchange",()=>{this.locked||this.held.clear()}),document.addEventListener("mousemove",n=>{this.locked&&(this.mouseDx+=n.movementX)}),document.addEventListener("mousedown",n=>{this.locked&&(n.button===0&&(this.place=!0),n.button===2&&(this.remove=!0))}),document.addEventListener("wheel",n=>{this.locked&&n.deltaY!==0&&(this.scroll+=Math.sign(n.deltaY))},{passive:!0}),window.addEventListener("keydown",n=>{if(n.code==="Tab"&&n.shiftKey&&n.preventDefault(),n.repeat)return;this.held.add(n.code),n.code==="Tab"&&n.shiftKey&&(this.play=!0),n.code==="KeyE"&&(this.use=!0),n.code==="KeyN"&&(this.noClip=!0),n.code==="KeyL"&&(this.menu=!0),n.code==="KeyI"&&(this.inventory=!0);const s=/^Digit([1-9])$/.exec(n.code);s&&(this.slot=Number(s[1])-1)}),window.addEventListener("keyup",n=>this.held.delete(n.code)),window.addEventListener("blur",()=>this.held.clear())}get locked(){return document.pointerLockElement===this.canvas}read(e){const t=a=>this.held.has(a)?1:0,n=this.gamepad.read(),s=this.readPadButtons(),r={forward:t("KeyW")-t("KeyS")+((n==null?void 0:n.forward)??0),strafe:t("KeyD")-t("KeyA")+((n==null?void 0:n.strafe)??0),turn:this.mouseDx*this.mouseSensitivity+(n?n.turn*e*60:0),use:this.use||((n==null?void 0:n.use)??!1),place:this.place||s.has(Ct.r2),remove:this.remove||s.has(Ct.l2),play:this.play,inventory:this.inventory||s.has(Ct.triangle),pad:[[Ct.dpadLeft,"left"],[Ct.dpadRight,"right"],[Ct.dpadUp,"up"],[Ct.dpadDown,"down"],[Ct.cross,"confirm"],[Ct.circle,"cancel"]].flatMap(([a,o])=>s.has(a)?[o]:[]),menu:this.menu||s.has(Ct.options),noClip:this.noClip||s.has(Ct.l3),slot:this.slot,scroll:this.scroll+(s.has(Ct.dpadRight)?1:0)-(s.has(Ct.dpadLeft)?1:0)};return this.mouseDx=0,this.use=!1,this.place=!1,this.remove=!1,this.play=!1,this.inventory=!1,this.menu=!1,this.noClip=!1,this.slot=null,this.scroll=0,r}readPadButtons(){var n;const e=(n=navigator.getGamepads)==null?void 0:n.call(navigator).find(s=>(s==null?void 0:s.connected)&&s.mapping==="standard"),t=this.padDown;return this.padDown=new Set(e?e.buttons.flatMap((s,r)=>s.pressed||(r===Ct.l2||r===Ct.r2)&&s.value>=tp?[r]:[]):[]),new Set([...this.padDown].filter(s=>!t.has(s)))}}function ip(i,e){const t=i.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")||"level";for(let n=1;;n++){const s=`${n===1?t:`${t}-${n}`}.txt`;if(!e.includes(s))return s}}function vs(i,e,t){const n=e.map(l=>({key:`shipped:${l}`,name:l.replace(/\.txt$/,""),file:l,shipped:!0})),s=[...e];for(const l of t){const c=ip(l.name,s);s.push(c),n.push({key:`editor:${l.id}`,name:l.name,file:c,shipped:!1})}const r=new Map(n.map(l=>[l.key,l])),a=i.flatMap(l=>r.has(l)?[r.get(l)]:[]),o=new Set(a.map(l=>l.key));return[...a,...n.filter(l=>!o.has(l.key))]}function sp(i,e,t){const n=i.map(a=>a.key),s=n.indexOf(e);if(s<0)return n;const r=Math.min(n.length-1,Math.max(0,s+t));return n.splice(r,0,n.splice(s,1)[0]),n}function rp(i){return`{
  "levels": [${i.map(e=>JSON.stringify(e)).join(", ")}]
}
`}function ap(i){return rp(i.map(e=>e.file))}function op(i){return i.dataset.key??""}function lp(i,e){return i.addEventListener("click",t=>{var o;const n=t.target.closest("button[data-action]");if(!n)return;const{action:s,id:r="",name:a=""}=n.dataset;if(s==="open")e.open(r);else if(s==="create")e.create();else if(s==="duplicate")e.duplicate(r);else if(s==="copy")e.copyShipped(a);else if(s==="export")e.exportTxt(r);else if(s==="import")(o=i.querySelector("input[type=file]"))==null||o.click();else if(s==="up"||s==="down")e.move(op(n),s==="up"?-1:1);else if(s==="game-json")e.exportGameJson();else if(s==="rename"){const l=window.prompt("Rename level",a);l!==null&&e.rename(r,l)}else s==="remove"&&window.confirm(`Delete "${a}"? This cannot be undone.`)&&e.remove(r)}),i.addEventListener("change",t=>{const n=t.target;if(n.type==="file"){for(const s of n.files??[])e.importFile(s);n.value=""}}),{show(t,n,s,r){i.hidden=!1,i.replaceChildren();const a=(h,p,g="",S=i)=>{const m=document.createElement(h);return m.textContent=p,g&&(m.className=g),S.append(m),m},o=(h,p,g)=>{const S=a("button",p,"",h);Object.assign(S.dataset,g)};a("h1","LEVEL EDITOR"),r&&a("p",r,"notice"),a("h2","Your levels"),t.length===0&&a("p","None yet: make a new level, or copy a shipped one.","hint");for(const h of t){const p=a("div","","row");a("span",h.name,"name",p),o(p,"Open",{action:"open",id:h.id}),o(p,"Rename",{action:"rename",id:h.id,name:h.name}),o(p,"Duplicate",{action:"duplicate",id:h.id}),o(p,"Export .txt",{action:"export",id:h.id}),o(p,"Delete",{action:"remove",id:h.id,name:h.name})}const l=a("div","","row");o(l,"New level",{action:"create"});const c=document.createElement("input");c.type="file",c.accept=".txt,text/plain",c.multiple=!0,c.hidden=!0,l.append(c),o(l,"Import .txt",{action:"import"}),a("h2","Copy a shipped level");const u=a("div","","row");for(const h of n)o(u,h,{action:"copy",name:h});a("h2","Play order"),a("p","The order the game plays levels in. Export game.json, and put each level's .txt in content/levels.","hint"),s.forEach((h,p)=>{const g=a("div","","row");a("span",`${p+1}. ${h.name}`,"name",g),a("span",h.file,"file",g),o(g,"Up",{action:"up",key:h.key}),o(g,"Down",{action:"down",key:h.key})});const f=a("div","","row");o(f,"Export game.json",{action:"game-json"}),a("p","L (or Options) brings you back here. Levels save as you build.","hint")},hide(){i.hidden=!0},get visible(){return!i.hidden}}}function cp(i){return i.startsWith("v")?i:`v${i}`}const Nc=cp("0.7.0"),up="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAELUlEQVR4nE2Wac6rMAxF2ctXMnVLjJkhge7/3xM6lV+lqmJIYvsONoO1WutR69E5M45/xih5Yq02RvHEOcO/Uq/323Kr1Mtaba1mo1Ivrcdx/OPHIcP7bYOfgp9q2UveUlximK+eU1zOIxzV31dJcclpbWf83NVandN6XyWGubdU8hb8dB6BvcFPV88lb7Xs91VyWgetx1p2Dip5u69y9cz+z13vqxCGhyku1urzCFfPV8/tjDmtOa1Xz0f17YwxzDHMJW9H9bXswU+DtfqovrdE5BSXq+fzCO2MpNZbuq/Chqtn50xOK4nHMJ9HIFPeSoyc1t7SE8A5w9KSN95dPYPYfRUqaGcEjVp2pV4xzLXsYBj8RO617L2l3lI7Y4oLSR/VD+P4R2QQ5AVY3VcJfgKHGGYgMkb1ls4jfO4qtbIArICa09oZBzClUng+qocSyYKQJW85rZDcW+I/hrmdUThPceF0qfgbIMWFXwwzmiERoKMagmk9wnk7Y8kbB7G3nfGoHmIoLob5kenVcy0797CX04p4yJpkr557S++3BQpqOqoHLmr63JX0oe1bASmTBTs/d2WzCI6L4CdjFBWgCOglM86tZc9pRThPBZDMU04EStKBD245yFrNAhQZ/JTiguSBi/rA4DzCoNSLG4SP5nAmoKM5nJziIutxO88RGIWWvBGAvAdj1HkEIIIJ6RBiHK7ZqdQLG1McVIvzUTBAEfUxWgzzr1k4FGLZQGr3VT53VepFHiQLLFCKSYVhBPn0os9dhUY217ITDFZIDRON4x+wwCRVspgkUApoP83OOUOm/IiBudAGLvncFei1HgkJsNJ8aB7URH4sG2jcNHdjFFOBvs88cM4wLZgHzhmGxDj+KfVS6sUWDuGCXZzwkCyESF4UDpMUjrR6S9ZqIBZPwZY4HyYE9kemvECm4EOfgj3IxARH9c4ZOgpUSQyuxV9g+9/JiPpzV3bSVaTF1rK3M3LrnKE1cTR6QyBUKd5G34+KQINECED/oSyyY56UvDlnqIyGiOrEiYiN075OtlbDAW1OGh8BmEoUgZWs1XAj1sVxwU/iOBxA3QPdEZawPjHIUaxAUuJkiAEQOjlul2kos+trNLErXY9Oh7rFIpRMQuCDnyGMzBhchISMR6YcxCL6gfSl328FhjAqwnfSG6QN40rx+WO03wnFBab//TABAaqkm6IIKoY8wYq5AnmPipwzHIpm6LSso2TegmkM8/ttAZfjWI/SWCA2ItKA7HiB7KTt8JAZglKpQEzD0TL4ZNYjFn6PkyEEBNAZKYA+z8m6nZGvCihlsv5+mUkPpo7vRKPVsA79cIsMmOkAelTPdxFgchweFJOKh+HpazRp4pI7UaUD4sSSNyCSz0UxszQVAvBd+5BML6JY4IYMGtbvZzaksR7xoDF0SST5dpYPzn9cFW9tyEQ7zAAAAABJRU5ErkJggg==",hp="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAGWklEQVR4nEVW19Kq3BLcL/EllZxhkfRSxAAmVNRnECNGVNS3/w/VlqeKCyWsmenp7pl/llhy5IrOfuvstyn8WWLJlsoa80X4X9yxpTLhf22pjDctsYSnBvejs9+4j9dsqezIFcL/WmJJZ7/xwj+D+9m0+F1HvI7MTYvPIrJp8esmdxtb6ya3bnK7jnjoKsee+pi6x566bQv3iX3sqZsW/5i6izqVePRlaKx8dtPi7xP70FX2oXwbW5sWrzFf/wj/u25y+1DedcTL0EgD6Toyt20h8ejb2LpPbMRIA+k1r62bXOLR15F5HuifqIeu8pxVH1M3j53Eo5Huok49pi7hf4sA+1A+9bVlg7kMjTx2lg3m1Nc2Lf4yNHYdMY+dPHY2LX7ZYBKPTjz6PrFvYwvVbNtCGkhZRJ6zahpIx56axw7un/qaKfwVAU59LQ2k+8ROPPrYUxEJuV9HZhaRdZPbtoXryEwD6Ta28tjJIpIG0qJOAatDV9m0+PNAvwyNdZNb+WweO5ehUUBkiSXAfepr27aQRSSLCE45D/RTXwMsp762D+WVz16GxrYtnAf6fWJnETn21HWTSwMJhy4bDErPIvKGyJEr94m9afHPWRVHb1p8GkiJRy8bDK2aZUkvS3pJ1GjVpBTC6jalEJ64ZUmvyEZZ0lHBusllEVnUqX0o70M5i8jKZ22pXFTwafI+lBOPRvDnrLryWVo1K7LBaBZPXJ64JVErSzqr2xXZ4AyHMxxKIYeugnLTQDr1tde8tvLZbVu4ja0igMZ8bdtCHjuA+0OM29hKPBqnsLr9SZnVbUazKIWUJZ3RrIpsoPrnrLqoU+eBfhtboOl5oBcQmcLfbWztOuKywTxnVZDk0FXQ54psUApBDJRCKQQXq9u4uQ/lY09d+ex5oC8bzD6UD10lDaTnrOoqVBEA5EHk17wG1eAvUqZVkzMc5Is6cDGaxeo28EHKp752HZmveS3x6DSQLLFUNDmLyLLBHLoKuHjqa9DBdWTyxEUAWjUBDrJGJ3CdB3ri0du2AAGB6GkgpYH0bjKkiK4mHn0e6HnsHHvqoasgcZ64nwDoCu4wmsVo1nVk3if2ZWh8vs1j5zmrHrrK/2kKe7iOzHWTgyUAosSjD10liwh+7DpiFpH7xF757LGnQrr3iZ0GEnwii8i2LVyGxrGnnvpaEQA0zWPnNa89pu55oMM54D8rn92HMpR1HujPWfU+sZ+zKkQOpwO8z1l11xEhWHDkOjIduVI0+dBV8N66yaFd8AaIPvHoRZ2CniFayPs6MncdcdcRNy0evvSYusDqNrYuQ+MxdYsABvcDJV9HJmSM8vE9Hi0bDNJcNzngA4v+KCaLCrldRyYYlUVk1xFXPvt2U+C1bQsQ+qbFb1o8YIHBPWdVGOq6yT2mLpwuDSS8DOguQ+M5qx57KqQKvhYDBz3YdUQYOrDGY3ycx04aSKjmMXVBx9vYwg+YCigEud0n9qJOnfpaHjuFDiC056yK5sDyjj01iwj8A/isfPbQVR5TF0DDr2DpiUc/pi4sAAo99TUUXehAZ79B0OvIxNCAtwAi0C6LyD6UwWBIFLYMbPEOZhGEhtm5bnLvCnAuZiF4fegqOOvTWCgRXIRNYeBAGa95DTMO8VBBGkhFD2ypjM6gQIwzcPwyNBZ1CkDBk8HdPHYeU/c6MsHI80Bf+SzQR/P2oYw+FRUY3M8+lHFEGkj48jmr4g1kBKmfB8VsyWMHUUEH2OeywbzmNTQWBIObGdzPW2ggAxiJubhucjgO7cGGsg9l4AP+YHMBlcGxRZ0C+pg577UFiR97KvR8GRqoCTMEzrHyWTRw5bMg2GPqrnwWawCIDqYiGNaR91bxmtdguWga1AvEb2Nr5bOPqYviABSMdh/Kz1kVf9NAQm+AFWxjH8rvHmAS3MbWssHAC7GPbNvCriNi1Uk8Gi4LjuWxA0NEKRAQNgwkhPFZVKAxX/eJjXTgMOgbtIZZhBmHwJiv8FHA/dEmsj72VEzG98Axhb/zQH/Na2ARUIbnwAFh4DAiVAPH/VQMQ4VXbtsC2os96j2TP5zBboMZAD/BBMVmCDvBO7jQ5ENXwQXBw1ZhIUUA7NmWWMK2bXA/GvPlyBX8IPzvZ5XH+u4qlKtQOvvtKpQjVxy5ojFfnxVfZ78J/+sqFD75n13/B4PLFYspv8PIAAAAAElFTkSuQmCC",fp="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAwCAIAAADsGa/MAAAFQ0lEQVR42r2YN29UQRRGX4lcr5BoqN0gIYSIxtgmh4KCyjW1RcVfQARjknHOOZPjH6Bxg5BMQe2GmhrO6KyGYXbXMsh+0vXb2dl773fzzHNxrv1kR+ux8x0tl8+3tbUcaT919OLZVp7sXzp3mh2+njl93J9gg1iwIydf+QlON1ECKcgTkkEN8IN1tu0EmwUrkZr37CmBrl7s0OgCozABbHZ/tBzaVQICrAtnTl250F4QGfCJA7ufKxXo18/NjNL9RutG/CkJbGYLfOULJpQDjLtEG28LPqyRDNh1So2Aty8FBJmlbIEviDPEqhxgiwtXQ6h1um6ot1b0H8CxFQs+cJdnOR5TWVJBPfNB6MsBtnWrAwTs3ajqusBWNVQ4+XajjxuF2qFb8IEVlDi795uadpWAAI56Aq7gD3xDXQIRXeop9DGQYpN2Ak702YkBcdOxyk98ZYGkLeFXtMCDEquGTRgsHXbQJrPnkrXMTsEX9B44eLg0AjUAYykfZQIThpBjj2i31r982z5V9u6D/klEFIIf2slLgluf178+eDr8qG+sb2QGGp1eHhibG59dHZlamphbm1p4MbP0Cppdfn3teqfAiDzuH+8fnYVzaGJhcHyeNc/hyUXEkUVq8fl7CBFRTHM4j3E8AqNlc/PHk4GJZ8PTYKMLeVHBg/h16cWHFLh3aIpNmMHGxLGZFVFZYOX04kt+XXn1KQLjcTgWqUko9RhFaEEYLTwxf3L+OYpAxXB0ZcDYigiG4itPpBCBHylE4Edq+eXHCOwNIAdGBYqg/c2HOm908UwXum7cIvDTwUkiRIIyZhcmaGHtXQQGLsxqIx6B0YIKbK9FZTG/+rZujonQFraCmnoMYvDYC1fq8cNno0SsrvmmWfMjcPeTIaQa2Qrz3MqbNMfVY1HHU2DMJ3R1zQeVBKMoKy7cJVR1bYU5iojiFCscdRGYOOMx2FuEmmcKjJUxx7VSVDU1wTMC+/KQe2wf40Rd80kYKsBOgXt6R+AHu66ttDLuph4zPYLHTC5mSAqMx8atVhElirtZO5FjpRrZqlTaTmFWU1mpx2YL851BNCVPuhnD8ZWnfZkBU4wQggwcpZwk8EOxHkWhpMPI9KxIPSZ0mO8UBN5BiOGiYn5WXPceDYCNrfJb4Ug5axkj0VZRPJbCnSsei3pse6CFJ4ooNGx3eDkFs1BjJVIAw4nTji04QSVICGIrlA6Q6rGYzmpHJvLoQoXzz1mvIoKWVTUeEyTnHb56uhgkRJCFP83xn9OJjyzUeqz5KDJhDj+LJZtcSFkZAItNqA0y/DZh2k4B2ItIBF6sVKCNje87SOpMiyuMTK9IGXBLa8cOUi1wyHE2q2UyxzHatoeZpqSzWU2OTbAdpYjkKZ4BVyeX/wOJwCSYhKnFg9Z2ImFky0tFNrnuPuzXUI8pmJGFU1shZLORiauFLxQRmF66/3jQKnWMQLjODAHYYkFR5jG2OrysLOHj7UWj01CHkel/YiIwqEB6TthRmE9Js7Cw7ctsVoNtE3phwkrnj7Ndi9ORGYBxPO1jTgi0qCIOTgzHfFsZLdlFAF9t5XiJgE1fvXyBnYbaO0/1/TgNtdnyYEaXHniJjMMoBb7T02dleO2CDVnC4wBxairy1+nkf84icNfNW9uhFHj7InFWh+LC4zTH5QBX34/TUJcA7D9+Ct/4SgYOA8S31TKBdfWv19RYok5BFt44qWqq1DHiGZXdQOh7rwOebB5ojhEE6aj0zlV9k8iAb3f3IowKGikejo5AX2qg2pEZO8qXLt9oAKajBLb1Y6ih38frv8AEQnKZAAAAAElFTkSuQmCC",dp="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAG+0lEQVR4nD1WV3OyWhT1F9lClXLo2M1z/KLRKEgRlCZgzy+/cdadzDgODxzO3nu13bAJP7UUrUdZMjezVV2gDZEZqMLR+7wV/rPa3wq/TpxT/J0Gy0cZErYjM+2xIStct6/0bMKPDVmiW1n4lYVfRbTO96vquI2cj/spqBOnoXBdQ2TGhjzUxL7Sm1qKJXMK1y0Pm+q4zcKv2J3XiZP4i0u2u2Q7rUf1ld7EJH2lpws0YTtTS5layiXb5fvV/RSkwfKae5dsd07d1wVTSyFsxxAZS+YI27FkTqJbfaX3KMNHGd4K/+h9PsowDZaJvyiitSVzKEXl3/pKb6RLQ02UmfYp/k78Rb5fRc4HWj/F378faQxUATPRepQpsTNbndmqSDUTf1EeNqf4uzpu68SJ3fmjDC/ZbmzI6BLz1AV6ZqsTk1TH7dH7rI7bW+Ffc++ae3Xi3E9BQ6JbhO0oXFcXaJlpGyLTV3oDVbifgsj5+Cu/PGyKaF1E64lJJLo1s9X3vmZK7FAT8UPJKAiAnVP393hjbMgjXZqYROXfgIQpsTLTPuz+pcGyOm5xMnI+quP2sPtH2M5AFUa6JFLN976mC7RN+IEq5PvVJdvF7vxZ7c+pe8l2deL88uLVgSmxhO3oAq31qJmtjg15YhJw5lb459QFQwB1X+n1lZ7CdScmsQk/s9Wppbz3tfKwSfxF4i/+Somcj8j5aNiEn5gEw9EFeqAKqKs6bh9leE7dRxkm/uKaezg2tRSb8ITtvPc1m/CGyMxsdaAKwODofSb+AoO9ZLvysGlccy9yPjCvRxnm+9U1947epyEyQ020ZA71gs19pQcM68SpjtufOgLlf+pIZto24W3Ci1RTZtqWzOkC/cvGxiXbZeHXowyvuVdE61/cUTiwkZn2UBNtwstMW+XfJiYponV13N5PQXnY4Oyz2mfh18xW8RpYoPJvM1s1JbaR71flYRM5H0W0xpQTf/Gs9mNDhohU/g3iAveP3medOPl+9VNH+X5VJw5uGunS2JAHqtBXehLdGumSwnVFqtm4Ff5PHaEuEAB9iFQTeKAoCFCkmrE7z/erc+piVuD+OXUtmZOZNigDoaCyxrPaJ/4CB37qCIw87P7hbeBvSuxIl8BOSPpRhnCF8rABf4aaONIlYCZSTXxdoluN+ylAUYm/uBV+7M6heF2gh5oIH5xaClxBF+hntU+D5U8dgemYZxosVf5taimGyBC2Q9gOLrBkrgGHit35Kf4GeQ+7f7fCh7ZFqqlwXSAG+8zCLxhZEa3xPgRsiMx7X/ujhkS3tB6l8m8NNFgeNuDDowyf1T5yPhSuC1uVmfbMVgnbmdmq1qNgaqf4u06cW+En/gJDgzJABygXDw1Apwv0xCQTk+BBolvoqU6cS7bDTIpo/az2sE+Vf1O4rtaj4JIAH4JPg2URraGya+69vAgyRqUq/wY+lIcNCozd+a3w4Ryn+BuWPtIliW7JTPvP4WHRUN+z2sfu/Jp7t8JvyExbpJoY3EAVBqoAAyii9TX34I54yPerw+7fxCQzW5XoFnweXm3JHGTxZ0dpsIRWXok21ERDZP4UqHDdma3+1FEWfsFYkIVFtD6nLqC2ZM6SOUAKhBAY8BsgmgbLVx5AeJi+wnXHhgzC3U/Bs9pfcy9255g+Jgut4oKBKiBzxoac+Is6cZDe1XGLdl9mN1CFoSb+Zc7MVlEaMjZ253CnnzqCrICTzLThZYTtjHSJsJ1r7sEzADLo+0vLhimx730N4jZERqSa+M/CL0wfosUd5WGDYb73NZV/Q9aCFLfCvxX+/RT81NHR+7xku586eoU+hm5KLCoCDCNdumS7IlpD1Vn49WcJIJspsVqPGmoinNwm/DX3Drt/deJgYcE68pv7jVP8XURrRChi65y6abAkbEeiW8gWZBYiDN3E7rw8bNJgeYq/sThJdGuoiSLVBAnBxpmtNgAFxIxFCI6Ezv6SYKRLKv+mCzR8Ao5yPwVH7xP7D3YGwnYQOxjJy4uO3uc195Ds4CUqmloK8JxaCqg5NmRDZLLw65y659SN3Tkug7tgF5HoFkiFgzbhG7E7j9051rFHGR52/3AGCocmBqowNmSb8FqPwmuxO0fh2DCLaA3ngF/pAj21lJEuvbwIHWD6WCOuuZcGS/izwnXx9YEqKFx3aikQR75fATlsAtVxixcUrvve16AVm/AjXXoFDoL+fgrg248yjJwPiW5NLQVrEjT13tcI27mfAqQsFjdc8Kz2psQOVAHphNj5v4NLtsOGgvA77P7B1CBXGI7Wo8aGrAv0r79DFui7iNan+BtqtwlvyZxNeKyK733NEJkXBnAxqBQnYXNaj5qYZKAK8Feb8JgsOHYrfCgxdueADRs0xjIxCcj9e8F/l30PlasOp04AAAAASUVORK5CYII=",pp="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAGuUlEQVR4nF2WiW7iSheEeamAl3bbhuRl7mSSkIQ9yWQGAzbgtW28ts2+vOX9UY3Q1S9FCBz3dk59VV0TSL0h3zXkO/1B1R9URZcFUldbikDqtEkEUhdIXaKCdk8lKugPqkSFhnyHdyQq0CahTUI0SVQaii5r95Q2iayKGEibpCaQelCY1SXysmmyddKdm+5cfmKyKvr5zE0nXjZ1EmO1XlaXqDgGtEn8fJYf/NV6mR98L5tiiKLLQWFmey8s51G1SHdufvDzg1+jTVKeQ8at8hz6+ay6RFG1CMs50aRk66zWSz+flecwLOfFMYiqhUDqUbXID76bTtx0ElULJzHCcq7d06AwncRIto6TGH4+4yeWbJ1aQ75Ltk5YzlfrZbb38D3be9o9Dct5snXwxM9nQWF62VSiAk6Mn7dDa/fUz2fpzi3PYbb3imOQ7tzrArIqetk0P/hOYuQH389nq/Uy2ToSFVbrJeMWTh0UpptO/rtweQ7jje2mEz+fxRubNokdj/mJ8RPz81m29/iJuemkprYUfmJBYWLMar3kJ2bHYyyQH/x050bVAiOdxBBInZ9YdYnseFwcg9V6WZ7DoDCJJnnZtDgG2d5brZfFMXASI9t7NYkK+cFPtk51ieKNXRwD1E5WxeIYoDf4zA9+WM4lKsQbOyjM8hx62RS98bIpbRKUASfD9otjUMNE6c71smm29/KDb8fjZOs05DuoKN258cbG8l421e4pduqmExSTn1hxDARSD8t5vLHjjY1qh+WccesqU0WXiSYpugwhqy1Fu6dEk2RVhPChcbWlgAx8l6gAsWOgrIr4I5oEbsDKVaZuOoG8VuslVJ/uXP1BteMxtL9aL+ONzbiVbB21pWR7D1KpLlF5DvmJpTtXVkUIHcWAjq8cCKSe7T0UZ7VeonDQNYhDWdOdC7GCg2zvYUk7HkfVIqoWotK4bQW6yvZeVC1qii6jOegzihtVC0WX8ZKbTm4cYKd2PEY/omoBBr1sqj+oxTHAVChDUJir9fIK2m37fj5j3II9qC3Fz2cA0kkMSD7be6LS4CcWlnPoB80H+dUlYtyCF6DOVxURTfLzGRiBorHB/1NXcQygV9okYTnHJlBM6PV2AhAAgMpzeAUNvUWvMGy1XkpUSHfuDc6b+NSWAo9Ltg6qjH+pLSXduUFhYlU7HqPV1xOglIxbXjZFiYLClFURQEbVAjQEhennM0WX7XjsJAbjFuMWdppsHYHUUcPVeomt/DU7RZdFpQFdw9ZvAieapLYUfAIOqFt/UAVSl1Xxpnf9QW3Id0gRvIwwuHKgthS4Y7yx84MPy2XcUnR5tV5CkfzEYHnlOdTuqR2PYUH8xBi3nMS45QTMhnELDYg39nWB8hxiIkg+P/jxxpaogDDBvAiJqFrIqoieM26hW7B0iQpOYtza62VTOE1Nu6fJ1sEA9A0jiSbhNEFhQnaYTlQa6BmMHVQXx0CiAnqDtuH5FTRRaYTlHBzcLBARiFcxL5rGuAUO4o0N7MEH45baUnBibAs69vPZ9QROYnR+DRAJUN6PzjOs4nnwBo987L6ATIHUV+tle9SBrJ8Hb9iH/qDGG9uOxxDVU/8Vz/8m2o2RH51nxi1+YihdunP7fz6CwoQ35AcfGwoK82evvVovw3L+2H0BNzDwwfgT5/jReXYSo4Zwj6pFe9QBxv0/H8je9qiT7lxYYVCY/7w/edlUIPWP6Te60h51oCU3nciq+P7VR5Mfuy+MW/HGfuq/Xu1aogI4QAD89wltEnj9zeVBBiIBlyhFl28MIUjAEO5LNajiR+cZQnz77MGl4bKD8Sdy4kfnGYTrDyo0jqB+6r/CBUB+dYnaow6uCnCUGppWXaLu9zAs5/zEsJLaUhi3omrx2H1BaL8M39100pDvoMWh8YWby2P3xU0nRJOe+q9BYSJB8UK6c68q6v/5yPYemAoKc2h8edkUNYWz/uy1kbHFMVBbSvd7iOx9++zBkXq/RxIVcNVw08nrRxc+Pxh/1nANwU2m93sEt+j/+QAHP3ttyBc28M/7Ey5Yo8kv2PJg/HkD00mMx+5LVC2Cwnz/6pfn8Gp2otKA5gAnhF+eQ0WXEUxQ0WD8GZbzdOc25DtUrPNr4Ocz3FyqS0SbBMLvfg+9bBoUZvd7eL0XiUoDcP3stZGXz4M3RCbMvfs9BOftUac4BrIq9n6P+IkB1PIcvn50+YmJSmNofDFuheW8PergwvnXKobGF8IP/YRx0iYBKUFhvn32kMnvX30Qm2ydoDCfB2+Iisfui0DqjFtP/VcnMQB5tvf+x8G/g4/zjy7/xc4AAAAASUVORK5CYII=",mp="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAwCAYAAAChS3wfAAACv0lEQVR4nO2ZZ04cQRCF+wCWnMgs0cB5bIwDwTbBJjphA76EWeKSw034w8EKfa2t1fwwy/6Y6bK650mtmZ0doXqvXlVXL86VKFGiRIkShWG367mcDPbKXnebcM/VOqag2G5/Iucv+uXm5raxrGMKgquxIWGR9YPeDql2PJXToYpcjg7K1ONHstP5TBCHz9axFgLIX4wM+Oz/63tEqPV1eVEOK53xiUB2m5FDAHoDTsAh4SMsGGfDfd72zcghAk456u/2pRI2woIBORYiNHsH8ojFNWyEBUMFaOU9sk+5UA5hovuPoGVAQ6QnWMdjAkRgQMIByQ1Kri7Afk+7X0kK4OoiMDccD/TcOztED0RAAGaHJJ2gIzIr2hH5IagL2BmiHJEfAgJAHAGiHJFbASIwGDEbJFkKCMBhSn9LsI7HBNoQmQ4Rwjqe4NCDEgJQDtbxmAAR6AE4IMlzgm6JNMMky8BlSoEjc5LHZZc5LHFWSHZbxAFsiUlOhy7jAsoBJ1jHExz6o0myc4HLuIBdgat1PMGhvx9CPslm6DLbIifF6P6X0Aznvz/J9pdXUvs26dfJzxk5Xf8gu8sTUl0cl4uNWTn79dG/s7P0Wo5/TMclDoQP1t55Ypebc548hPXz0fcp+fv5pRcCQRDJOuZcAXlIQhjiEOQZCwGu/yzI1dZ8ww37q2/jEkAzC/nDr++99VUQxCD7PKNUEIN765hzBSSxPSKQaV1qe0RBEO55j2Udc66AIA0Oy3OvGeceIXAC5LnXxmgdc66AsDpgb+VNgzjPtPape77T0rCOOVdQ2xCEKE2PXqB9gW2PutdtEvLRNUEIaZNTggihpBEgm33es445V6jVuUKeXgBpnEB56IDEQijEsI45V5BZhqFsphEC8mQccXAE97pdWsecK8gsNQ95bK9lwHPtA7gDQbRhtvJ37wBitGj2l6QCewAAAABJRU5ErkJggg==",gp="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAV0lEQVR4nGNgwAGeGsj9R8e41BKlmWhD8GkmyhBiDMBrCEjy/ywpvBivITBJsg2hvgEfFqBiYgwgWzNeA5A0E4xGsjXjM4DkpAw3hFTNKIZADSBZM10BAGvcOYb785skAAAAAElFTkSuQmCC",_p="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAYElEQVR4nGNgwAKeGsj9R8fY1BGlkWhDCGnGawAxmnEaAJP8P0sKL8ZpCN0MgBlCnDc+LEDFhFxBqiEEYwOrIcQYgGEImgFEp0p8BhDUDAMoBsySIl4jiis+LCDN1gEBAJe/QPjdnEGYAAAAAElFTkSuQmCC",vp="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAVElEQVR4nGNgwAKeGsj9x4axqSVaM1GGENJM0BCKDIBJ/p8lhRfjNGQQGvBhASqmuQEYhmAxgOi0gOEKJNvxasYwBM12ojTDALoBJGlGMYRczXQDAFz7PsCVmV4KAAAAAElFTkSuQmCC",xp="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAwCAYAAAChS3wfAAAA4UlEQVR4nO3YvQ2DMBCGYY9AQZUiZQrPQEGVIVJRMksaWvZgQBAFkrH4M4Y4Z78nfRWN75HwzylFUUHqkWe9mdDr+WmNDRfle5akEAAAIEEAe9NbAoh2Uxwb+lT1LDaA/T0qhCWAvQAAAAAAhF73ZQVA6gDKuAh9m3YzUV6EpjoKEHqdtxUAAAAAAAAAAAAAABcAiITyBTCHpt3rKW+I6gMwNb0WEQhnAfaaF4MAwAmAo82LQHAFcG3+7xEAcBiJmcddEgBa680AAEAEvwF7AKcAAAAAwFuA1yAArgDqxonQAJU0Azbm4uaQAAAAAElFTkSuQmCC",Sp="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAbElEQVR4nGNgwAGkRAT+I2Nc6nBqDo1KQMEkGTKwBoAUnvCQwooJGgILMHwG4DQEn0aiXEJVAz49OwHHTw3k4GySDQBphmGyDfh/yYo8A5Bth2GyDIC5gGQDQBikGYZJ8gJZ0ciAJQvjwsh6ANy6R9Zuw1CrAAAAAElFTkSuQmCC",Mp="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABHUlEQVR4nN2SRw7CUAwFcwjuTN3QciZ6Sa9AApzDaCw58BdIrEGyHDl+42cHz/vP32Ixkum0L5bn86HmnwGz2UBFACwTXwVpupe6DjXy/Kgi359oXi7HKiZfr7E8HoUEwUqy7PAG3u+5tG0mt1uiL8ryrM9VFSiwaVKtF8VJns9Sa1G0eQMgU0BAkzWsej0NnDEAp8DoSZKd64CJYbjWoAmBAQDTw6DLJdJnVukANGCNoom+Be4YRn8HsN3JvwAYhEPnBnG81eNBZsfPFeyg2Gc91uRLOCtwFMQcj2Ph6POIiMjAcMCQDsA0o2KRzCQD8J7DMYQ6ThnaAbBGgYBua9gfBzgiANSBOQAaEGGRl6yBkDVotCOzGg65Fxq0LwWaElrqQ0DJAAAAAElFTkSuQmCC",Ap="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAwCAYAAABwrHhvAAAEwklEQVR4nO3Xx45dRRAG4LOeNWuS0+TgnO1Jnpyzc7bJwXk8YMNggsGEpffwALwFb9Xoa9268jjIBvVFQvKRWt23+5z6//qrqrtvVb1+Xj//1+f2TxfT59+ezu39LxfTJ+sn0n8CfOOHc+ni7en03hcL6erafB5/eH85ffrNyXTl7lweNwz846+PZ6AP7i2l69+fzeBnro0l8+Y++molnb0+nltDCPAOCPk/e3AqXbg1lX/f/eVK7qmDyK0fL5QnsPrz5XTtuzPZuP7mw/PJHG8RoILfyBl7pygByXbuxkSO+19vNOV2/uZknuN5zF1enc3g+qIEAEW8A0xI1n69mqsg5u48upTB5UpRAmTmmUy/dGcml18AyQXkhAMBpIonopgzDJznABFQjvYAKiAoOSNJixLwKDueK8HmpqZnGjLWEC0O7uE1Bcj8PALyI0LTEAJVbTMKmYVFBSCmOsz53TDwJx/JR3LJyWt9w8D6hydS77GxNLt0Mk0vHE+jU/PpYO+xNDg6leaWT6WBkck0Nb+ShsZn0uTcchqfWUzHxqb/OaGRyblsZM/B3nS4fzjtPzKQhidmk/mJ2aW073B/XmPc+vzK6XTg6GA6MjCSjg6OZpJ7D/VlG95FeGbxRLbh+7HphUzwGWCbjMQRQ+XkY14wxEM9A+HtelVlIGT6hsZzHwQfV1VWg1KIIqf3jtyRK3JHItcJANUs6A/1DWW2PmTIb8xJbk4I9BovKSFMvkHyXlXld4EiRUnEHViAnRlw6gTsZHGIeIE3AH2kIQCAnCEvUNIiCACwMDyoqvy9sTD5Tr5Yd5AhQQXnSJ0ARiZsIsa8EgKehiHxZQi4OSF4XAuF9fA08sEc8mzorXGQs6rGsb0hBAGOHSDy+oj3wDVj83oSP6yqbJwacoEa8S4HELGuF564SQHfcFiRxeSLzvGQkTGGKCT7NcaBGf9RVfVqQOhpO3Bi89pwaTERO9nzjlEE7ldVzoEoVSSiZBETY0qoAGuIPG3HoeUgo8SGHHjZI46AecozAJSIfcCaOXkgea1R7JUBXvYw9mdN3pCY5+ZVQiSdBEQq9o5iBCK5gEg8xldrGw6PAeqDnCSlTDECDAIVApWh5y3Q36oqE3tU23y8JyfkTTECjIlzbE6xDyCBEAISNA6k36sq138xAhKMtKQOzyVabDzkRkKoqGP9X52GL3psrUAknMQDxGMNAWSoQoE4KyRjMQJKT3x5uVZV9R0POMnXaxUSdwHKaMUI8FDsqSC+cRlBDKlIUGO5EpeWYgQAxEUDODCk4thGLC4pwkQZ7xQjEJ4BiV0OCDBSIxYkvWPbFqJiBICTFIBx3ITEndwIIQA0blHFq4DhuJTwHijprcXhE+FBQEUUIwA07oQR97iGxYWVIrFJUUWSFiPg2d3Tntq3vZt2drWmvTs6U1frljpAy+a30p7tHXlef2B3T/n/CLu629L+Xd2pedObqbNlc9q3s6sOsr2jOf/2DoJPrhV7eEcF4D3t2/I41hBDgufGVChOAADZGUeiu21rHaRt6zuZEHDkdnS2lCfAOwRat7ydpdbHGtkRsK5vSA5QgNdBQi7EWoRGLyEpUZwAWTW50NG8aUOcKaBFNaiWV7X7N7Aky79gpWLcAAAAAElFTkSuQmCC",Ep="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABS0lEQVR4nO2QxU4DQBCGeyZoKFWK0+IEt8IJl0BxO+ES3HkkzgQNbndeaMg3yW5o2iY8AJts9t+df76ZWYfjf9n1FQrIe5FP0C/5brl2p6j+KPbLnS9d9WuBR65cyRIX8BnMtkaSjb71pslDINMCuMcFUPU5z6VBkg3gMccpbPRbodd6Yhb0e3+GBjkvnUmqGYtE9I0nVZ5ysxKPQBdmBGPk3QAYJSHg+yIs7L/qqLU+UCkLnUFZ66+Qpe4SWe0rl5OZNjmaapGdSJ0cTDTJ3liDnM6GBe/ZXLt6LeBwsln2xxs1mcByT6lCjqdbNRnQ9kit4CMGlNMCMFKRDQAYlXgnkfv5fIdsDlXL1nCNeha7QtGAjcEqDUA3ACrTAZ2xeQdg7haw0lumASrQupkbvTtar53wB7zzVzEjYIZOAidBWjcAOvsNNGOR+wOjoAT/eAdWpgAAAABJRU5ErkJggg==",yp="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAwCAYAAAChS3wfAAAFaUlEQVR4nO3Y145eNRQF4LmeBwAGQg+93STTe0kFiV7Te++Bl6D3zqMafdas0UEgBpL5f5NDLFm292lea6+9bZ+Rkbtl+GV0dLSom9l6WcbGtpXNaus5DrT87wmYmVspO8Zny8TUQhmfnK9gV9b2l8XlPWVpZW+ZX9zVbwImpxcrSAQAzTY9u1ymZpaqbWFpd78JmJ1frQSoAcsG/M6JubK8uq/fBPB0PA4wG9Bde+s5DrTMLaxtSF3Lpg+4XCA/tJ7jQEuSn2QYb8sL1CAUep8DJD5SRwTAI+sKMBYKvV8FLHVJegkBCqAKRCCn9RwHWhAAsFyQeOd1YyT0ngAgxT7AiXfSV+UBuaH1HAdakum7uz59hLimtp7jQIskyMvJ+iPr22NhgYjeh0C8D6h2ZJ2UJMBsjnpbAJQHgM5ZgAKSAHsfAryeE2E2QkBnb9D7swCgKu9H7giRD4BPXuhtSRLsrvlskqDa+2Uw4Hk68Z7NUXaIrec4kHJ+5YlydOqBcm3f8+Xs0uPF+ND4fdV2YvahcnXvc7VeWH2ynFve3j8SLu9+phyfebBoD0+M1f6p+UfKybmHKwEIAf7KnmcrMa3nu6XlzOJj1evHpreVAzvuKZd2PV2JuLj2VAXrGjIQY3xw571VKa3nvWXlyOT91dMI0AJJ5lSABHYEaLu19by3pAALKJlrI3EeRszphUer51XkUAbF6COn9fxvu/AsSYvv6/tfqJ4neQkvYBP/SHEPW+5vPf/bKsCrSYBUwPtRAxL0efrGyy/WPtAI65LSGsctF/IGAgn6PA+QsVYFVk0esCxKlCHkjiWAd2X7gEQEEngbUACBzrpPJbzvfvGvda/2jkyIPBmQ+kjoJrdshG6+8lLJJklSBBgp7keMpOlaazz/qnSXOBUIigBUGAAKYHf9d80zAe05hAGPNM+0xvWPCqA8G3kDQtqAaoFzjTpCTvYHSMnGSBuiEJFk2hrfpkWcA8dzPAoEgOz6QEtyWSGM2eULhGVvIAFmCQ2J3tsa398Wkydh4LO0iXGAyTzephKxDiTv6gsBgD3vGe/KxklFhPF/elXgRcBJOBsass3ens0YMQhBhnHARyEITJioCHQPIqijNc6/LAESrxpn4wMEEgDILk8/MqeIZPvsG1yTF3Jwyr3IRV5rvH8qWdZMMstd4jZJLcS4h8wT88DnMOR6FJSDUv4b6CPCc63x/qFkw4MEAMSxyg5oiGHLBoeNnPOPAOjkD88hTsuGOCQlDLJnaAr6u8sflB+uHixfnH2rtl9feLd8dvqN8ttHx8vHJ14tX557e+PYGwVQRU58SEBAVJIlD0gkAe26vnf8cvNo+fXDY+XHa4fq9366frh8f+VA/eanp14vP984MlxCPjn5Wvn8zJvlm4vvlW8vvb9BBruKIGCyo0vmBxiwhAiP8jQlaHk3q0DCxTu8D3hEA4wANnNgc22oBADt4ybCCwhg46Wvzr9TVZA1HDhxG5nnkJR/hAB3l0L3JQlKeGyI9t6ogNIQHSJ8f6gEmATApGdykb4+QtgTv8DyJhUAhwAhkd1eDkNZ+xEDOAItgcbe55vxupDwPS2bOlQCeEIFXLyLR5PUTw4gcTWbn2T5JDIgEUT6PJ6NUshBlPs8S/YUwOu+iXzg2dShE0ByJkKC3TzQDYMcirL1zb++HHoAJ3NJEEhgExZCJ0kTEbyuer+YD/kJC6obGniT5xGAAx4RbDxEDeRK7kACneye3+C8bYwMSqAM9+lnZcix2Hu8MyTwvPerwFMcUoZGgAn5qEklDk0GGfpWAx4BJkuZmmNu+mKe1PMbjApCBpKjDCQiW4ghGWhEJCFSwa0ug78DUXMQtz/DbM4AAAAASUVORK5CYII=",bp="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAwCAYAAABwrHhvAAAEeElEQVR4nO3WV3McRRQF4H7WswlOyrJWWXICipx+AjlnnLMtZzlJcpATGBNtUvEE/4N/1fB1cbfW3gWXzQxVVLmruqand7bPuefce2dSuj/uj//r+PbY5vzd8S35wvbX8+f73y/r/wT4i9kPM/Dz217LP8/vLsA/nt6Zr+59N1/c+Wa+duCD+ojcPLEt35jbms9tfTVbA/3m6Kb89ZFPyx4l7C1ufrkeEiI3vz+5vRAAdGnXW7esEUSkcnDSkvvsllcKEO9Z8NXhT/Jn+97LP53ZVaJnjb3KVQBKagf/vqyrTPmABFVi7/Lut/PCppcKiUoJABelhAswe+YPp3Y0967seadYQqlKCYiKv+SmgjywXtrxRklEkfOeNaxAtlICAByOCHDAASQ3XNlEAYrUUgk8D3kbXV1t8/rBj4pFlUcfQ8RsEGEnArUlYOtAAACwaEQ6oHsWUKA28NbBa+VHjS8PfVy8rxVwbk1fvrxxJl/aMJ2tz8+M56V1k/lI/+p8sjGQT40M5gOrH857VzyQ96188N7JONBcmGjk/aseKmvAcT3Uu7KAX1w/lWe7l+cTw/0FELj9s1OjhaA9BM09y5eVe+T/FpifMjway+nRoXKgPyMyPz5cDjvYs6LsXUmpRG7Ps35HwrTnivCZsTXlyi59Qw51zBMeSqQggPHRge4Soegd5N5hZF6cHClEXO2dmx4r98D9HuD+SxFvS+BKuWOViN6PCGgsES2Aw32rymFLKZVpzQoKRMTHBnuK/Ky7mVJRxO/AXVUIFfQKDa2NAHmQkNHsEA2fReZwkQBAyOEX1k4080ICIsEye563F747w7nK1dm6aBsB3Q07RDxEbpFSwUFUMH9JqYCyBiAAV1HeSKmsEUT++FBvUYRK1I1+0bFk9XcvE/50+qBwGFDErBETNVWoAZT0gH9Lqe3/0TfkAjXaCNiMz6xOEpERyHxKRVKRAzMRIDvbrNl0+//jgyYqoY3AnQYg5UhOViDhPqrEnmcWUir94a4B7jREGOXHb4Ay3FWOyBfTWo5UTsChiy3lJXIE5EF0Q/LLEc9UToC8V/9MLqAkB/brXz2BFZGcsyn9c8u910F+NogUAQmnElSB/espNfOBKpUTEGV4H40GKROJ6BPROWshQHZWiJ7PwEQLUANSGZ6pxQKHhgKkt1ZulOD/XErliqg8qZwAMD0gGo8p6uiO0bJVSy1VQG6grd6LVBUAjG8GBKwrJxCfYqIFzm+vZAlIhXhFU6qWHIh3OwCRKrdoRuo/vnwkKJWudXgh/WsCIvN6ZYVkBCQPTBYhQn6qVApuSDL1LwmRETErqGCGFX6jQuUEjN7e9Xlk5Mk8PPx47u5e2wQZGHgkNxpP5JmZF2/Zr3z09W3IU1PPF5CennVNIPcTE8+W6ZnaCAwNPZanp18oKgwOPtoEQooq/f0bMzVqIzA29nSenHyuRNlKwD5y9hCplYA5OvpUlg+xL2r+s2V8/Jn6CJCYzyxozYHIC/bUagECIr+9ChCgjOg9czdn/gHGWGes3crpiQAAAABJRU5ErkJggg==",Tp="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAwCAYAAABwrHhvAAAB3ElEQVR4nO2SWU9TURSFNySEMcDvUyNRkZaxhdIWkJbRidlZ5rbMM+gPXObbaQ1JDb754l7Jybn3DGt9e99rFgqFQqFQKBQKhUKhUCgUCoX+B52+HtLRfL9OFgf1z8OPFwZ08S6lnxt5Hcwm9GM993eI7KeKCtvnPvJfDjW0tKnJb8ea3jrz9/nSjcY29jW3f63R9T2fU6s7PkZWtpVe29XM7qXO3gzramnUg+nA+dsRlQq9/vwgAKZAvNo8dcNaAMEL5Vs3BwYo9gDkPMGze1e+z3mqv14e82BAeL98n9bNSuZhgOHlLRV3LtwECMwXK3c+Ezb1/UScAZSw3OcDP88eAIAwDueSul0dV2WmT3drWa+ecGDqQl+Y6ZGZ0o2NGv9YdiNMaTUBmQ8lr7b2WQCgI6zxTKeArYEzgCaYT0AwPyPdKHZ31wP0mGmirU2Fri43BIAg2kxlVIT5xNej36FAAccZwIAAik5xhj18ysWX3g1GrqVFT83+3AHCpzs7Ndnerl4zn6EdNPNLz6sz68CyR9cem4kC8GCtdifV0ODrnOE9aaapjg6/XwfABheyzc1u/sxMmaYmJcz8GfN+Mw1UjZ5UjfOtrb6erO7XCqGAxD2wnqoPo+9eB34BHQO4bmiusnQAAAAASUVORK5CYII=",wp="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAwCAYAAABwrHhvAAAEL0lEQVR4nO3YeWuVRxQGcL9GLQS0scQqbVFB0NhSBT+Ef2tbt7gkUVvrEvfduO+7MXHt9gFHfgNPuFyQMva+4B8ODDNn5r3nec4y5533LljwuX1uDW3t8sVlxVdfFOOqJV+W9SuXlpXDC2snrx4ZKj98t6T8tGKkdEIAALANq76pIyJrli0qP37/dSVAtk7uhADr1n07XC0NGR6JN+Ih650QmDm2tfw7vb+8Oj1W3p3fW54e+bn8c3lflfXHhzbX/vrMrm4I/HlhvLw4vq08O/pLmTu5o7w8tbPOkTEi55m/Lk4MngCwAABjJRIstm5uDbg5zwyUABdTisDQ0EjtIWIvayH25PCWwRJgKff3Enhzdnd5PvVrHbPGA0LCYwMn8PelyWq15AsZYAjYk6Qst2Z/oARiLYAAI8VSoUHMXvKCPFACGgLJcvOxjaPznVeAI2YcOLj29tyeajECrGQxzxjtOQ26UHRCQJs9sb1aK+YBNvIIYgOP/YdaCpAjiAzLOwMbv/K47Lp4v+y5/LAcuveq/H57thy8M1d2X3pQ9l1/VuW904/q/tSjd1WeuPqk7L/x/ONJUagDBnT4/uvyx92XFRihkBq7cK8+B/DAzZm6D/i3Wy/qmn2yeRMBlgKZvPa0EjBuGj9Wjj58O28tGSlEgJAR9VuyPR7Sm70BgDVGLgWMBGUUI8diawiw2JylAbaPjLm9JgJhzlrKddZRag4UMWDWAeQZJPIsI4SBriYCRx68qVYCMQICwCJg8YbngJDtASbrCPidzoPNIfBDABnFOEmZnJD1SU6ykYxM9oD7TROBHCfWszwxpdA6QsKTMLHcHLA9I1B7yZNmAsBZ5MfmlCEQy6zbTwIihoRnZX2Op2cQaiJACQty5mON0KTg5IQgkpqQHOEtPV5qJoB5EpEFlOScA6A4crKenLqRE4Ikb9DVRCAxTD2IN5JkCEiuJFlqgt/5TZLVc/YQaiIQQJZzNyuimNLICJgn5n6XGiE3hEXnoSYCWKesImCMVYB7C1TWzBPzVMe8uOhoIkBh79GiTIyBJdnIsRThvCvIYm6eN2VzCLgWWM5+3gGAKUYwyZh8Sc+JEEIJCpyeJgJAUgXzUgkw2TwVTvx5K2/A5ILnPE9P89vQXc/dzhWLNamMeoqOtd5ilKSMt/wuV7Xmi6q7nxuwS2gsEmMuJaf2mwNKDiRMqX4McX2jr4kA6xEwxoWp67EWiDWeEI4c2RxDa3QAbybQ23I7yl2PnEJkzCs5CcgbeVl9NGhvSzIl3ryRNcknBLk9WU/pbb4F/VfzCeY7IF/AvXvWrUm4zv+gQKQ/prLdd0K+DzshICF9iLCw//PLWpLNh0onBLgXsGPVTyCfaLzT2bchxSwFxuW9e6zmemNnHhBjXS70x1nBScX7X2f+Q210dLT095b9T5bAe0ueqEl4aaxOAAAAAElFTkSuQmCC",Rp="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAwCAYAAABwrHhvAAAB7klEQVR4nO2RaUtbYRCFRxQ3REV/jFv2fV+uN4kmGjWJ+1Krkqi4lGqraPubj5zhBgqB+q1fOgde7rvcmfPMjIjJZDKZTCaTyWQymUwmk8lk+h/05amB48caDu8r+Ofm1786arx36+DqdRtHD9XPIeKZOFL5FFZCKwjGgrr8ET+SuSQiyQhKlRJy5RzyTh7hRBhFt6j3S4EllKtlMH7Bt6DGN793QQiac3/+vIHuW+vvEIv+RTUMRAOaMFPM6EpkE+CbL+xT82gqqqa8d9ddjeEbQXm++NlU47Pvde1A770NjuPTLjBBLB3T5E7N0WpYabaURSge0g4QgDBchGMH2CkCsCPLwWW0ugW0e0VcvmxpN77+2MTBnasgA6bduTmcTkzAFdGkHAFN+mPgmRXzjUCF1QLShbQughGAX/5D6H4MjU++raFzXVJzjmNLZBBgUwQdEfDL5KyAZmwlE3JPIHaAY6ERO8UzIQjK6hnLGH7ZCS52gbPnKHaHhnA+NTUIUBfBwcgIWiKoiGBHBKsiGnA8Nobe/DwaIlgXwdXsLPaHh/VcFUFZBGeTk2iLoCkC5tr2CrqcmUHNy8k7xytyAIAJTsbH9ceOZ7whgqPRUd3zniBMQMiGtxhHGN5fTE8rDMEJ3PJgmh50/63+B8AHvvpY9TTTKIYAAAAASUVORK5CYII=",Cp=""+new URL("ambient-BmVcpfr-.ogg",import.meta.url).href,Pp=""+new URL("burn-out-1-3XrAJMr7.ogg",import.meta.url).href,Lp=""+new URL("burn-out-2-5xWWk27M.ogg",import.meta.url).href,Dp=""+new URL("burning-DN9-1Xci.ogg",import.meta.url).href,Ip=""+new URL("crowbar-DvI7xadx.ogg",import.meta.url).href,Up=""+new URL("door-Cig6Zqv_.ogg",import.meta.url).href,Np=""+new URL("empty-1-Dxl2g9iO.ogg",import.meta.url).href,Fp=""+new URL("empty-2-B6ZkHhyA.ogg",import.meta.url).href,Op=""+new URL("flame-loop-nxbrrlA0.ogg",import.meta.url).href,Bp=""+new URL("flame-start-1-DVBXCd9z.ogg",import.meta.url).href,kp=""+new URL("flame-start-2-CJOm9CGj.ogg",import.meta.url).href,zp=""+new URL("ignite-1-4xRmi8NQ.ogg",import.meta.url).href,Gp=""+new URL("ignite-2-CwhnhGIs.ogg",import.meta.url).href,Hp=""+new URL("pickup-fuel-1-BTmAfu5u.ogg",import.meta.url).href,Vp=""+new URL("pickup-fuel-2-BG6n0AaJ.ogg",import.meta.url).href,Wp=""+new URL("pickup-health-CV9zoZoe.ogg",import.meta.url).href,Xp=""+new URL("pickup-shells-CsqBNCSO.ogg",import.meta.url).href,qp=""+new URL("player-death-B62x2WGw.ogg",import.meta.url).href,Yp=""+new URL("secret-7yNfYxBN.ogg",import.meta.url).href,Kp=""+new URL("shambler-attack-1-CxuWj2US.ogg",import.meta.url).href,Zp=""+new URL("shambler-attack-2-BHlKCIZl.ogg",import.meta.url).href,Jp=""+new URL("shambler-death-1-DeuuWYel.ogg",import.meta.url).href,Qp=""+new URL("shambler-death-2-BEH2d2r5.ogg",import.meta.url).href,$p=""+new URL("shambler-groan-1-L9RtauxC.ogg",import.meta.url).href,jp=""+new URL("shambler-groan-2-R1Gh36hJ.ogg",import.meta.url).href,em=""+new URL("shambler-hurt-1-WPk6lPlm.ogg",import.meta.url).href,tm=""+new URL("shambler-hurt-2-DMdB_SVT.ogg",import.meta.url).href,nm=""+new URL("shambler-wake-1-B5QcvAio.ogg",import.meta.url).href,im=""+new URL("shambler-wake-2-r75B2Vie.ogg",import.meta.url).href,sm=""+new URL("shotgun-DXkvz00X.ogg",import.meta.url).href,rm=""+new URL("sprinter-attack-1-DqXvdDBA.ogg",import.meta.url).href,am=""+new URL("sprinter-attack-2-D-eaFh4N.ogg",import.meta.url).href,om=""+new URL("sprinter-death-1-w4YHsjmg.ogg",import.meta.url).href,lm=""+new URL("sprinter-death-2-BMPxo9Zc.ogg",import.meta.url).href,cm=""+new URL("sprinter-groan-1-hemcVyX_.ogg",import.meta.url).href,um=""+new URL("sprinter-groan-2-C4r7RLSo.ogg",import.meta.url).href,hm=""+new URL("sprinter-hurt-1-CGbjmJVB.ogg",import.meta.url).href,fm=""+new URL("sprinter-hurt-2-BOm18Tnu.ogg",import.meta.url).href,dm=""+new URL("sprinter-wake-1-EqlaSIlq.ogg",import.meta.url).href,pm=""+new URL("sprinter-wake-2-QgTMzOK3.ogg",import.meta.url).href,mm=""+new URL("survivor-hurt-1-C0cAM1mJ.ogg",import.meta.url).href,gm=""+new URL("survivor-hurt-2-Chg-bsFx.ogg",import.meta.url).href,_m=""+new URL("survivor-safe-CYZjLa1O.ogg",import.meta.url).href,vm=""+new URL("turning-sting-1-DbDw_WYv.ogg",import.meta.url).href,xm=""+new URL("turning-sting-2-HXSsz2-i.ogg",import.meta.url).href,oo=i=>new Map(Object.entries(i).map(([e,t])=>[e.slice(e.lastIndexOf("/")+1),t])),Sm=oo(Object.assign({"../../content/assets/textures/ceiling.png":up,"../../content/assets/textures/door.png":hp,"../../content/assets/textures/exit-door.png":fp,"../../content/assets/textures/floor.png":dp,"../../content/assets/textures/wall.png":pp})),Mm=oo(Object.assign({"../../content/assets/sprites/crowbar.png":mp,"../../content/assets/sprites/flame-1.png":gp,"../../content/assets/sprites/flame-2.png":_p,"../../content/assets/sprites/flame-3.png":vp,"../../content/assets/sprites/flamethrower.png":xp,"../../content/assets/sprites/fuel.png":Sp,"../../content/assets/sprites/health.png":Mp,"../../content/assets/sprites/shambler.png":Ap,"../../content/assets/sprites/shells.png":Ep,"../../content/assets/sprites/shotgun.png":yp,"../../content/assets/sprites/sprinter.png":bp,"../../content/assets/sprites/survivor-dead.png":Tp,"../../content/assets/sprites/survivor.png":wp,"../../content/assets/sprites/zombie-dead.png":Rp})),Am=oo(Object.assign({"../../content/assets/sounds/ambient.ogg":Cp,"../../content/assets/sounds/burn-out-1.ogg":Pp,"../../content/assets/sounds/burn-out-2.ogg":Lp,"../../content/assets/sounds/burning.ogg":Dp,"../../content/assets/sounds/crowbar.ogg":Ip,"../../content/assets/sounds/door.ogg":Up,"../../content/assets/sounds/empty-1.ogg":Np,"../../content/assets/sounds/empty-2.ogg":Fp,"../../content/assets/sounds/flame-loop.ogg":Op,"../../content/assets/sounds/flame-start-1.ogg":Bp,"../../content/assets/sounds/flame-start-2.ogg":kp,"../../content/assets/sounds/ignite-1.ogg":zp,"../../content/assets/sounds/ignite-2.ogg":Gp,"../../content/assets/sounds/pickup-fuel-1.ogg":Hp,"../../content/assets/sounds/pickup-fuel-2.ogg":Vp,"../../content/assets/sounds/pickup-health.ogg":Wp,"../../content/assets/sounds/pickup-shells.ogg":Xp,"../../content/assets/sounds/player-death.ogg":qp,"../../content/assets/sounds/secret.ogg":Yp,"../../content/assets/sounds/shambler-attack-1.ogg":Kp,"../../content/assets/sounds/shambler-attack-2.ogg":Zp,"../../content/assets/sounds/shambler-death-1.ogg":Jp,"../../content/assets/sounds/shambler-death-2.ogg":Qp,"../../content/assets/sounds/shambler-groan-1.ogg":$p,"../../content/assets/sounds/shambler-groan-2.ogg":jp,"../../content/assets/sounds/shambler-hurt-1.ogg":em,"../../content/assets/sounds/shambler-hurt-2.ogg":tm,"../../content/assets/sounds/shambler-wake-1.ogg":nm,"../../content/assets/sounds/shambler-wake-2.ogg":im,"../../content/assets/sounds/shotgun.ogg":sm,"../../content/assets/sounds/sprinter-attack-1.ogg":rm,"../../content/assets/sounds/sprinter-attack-2.ogg":am,"../../content/assets/sounds/sprinter-death-1.ogg":om,"../../content/assets/sounds/sprinter-death-2.ogg":lm,"../../content/assets/sounds/sprinter-groan-1.ogg":cm,"../../content/assets/sounds/sprinter-groan-2.ogg":um,"../../content/assets/sounds/sprinter-hurt-1.ogg":hm,"../../content/assets/sounds/sprinter-hurt-2.ogg":fm,"../../content/assets/sounds/sprinter-wake-1.ogg":dm,"../../content/assets/sounds/sprinter-wake-2.ogg":pm,"../../content/assets/sounds/survivor-hurt-1.ogg":mm,"../../content/assets/sounds/survivor-hurt-2.ogg":gm,"../../content/assets/sounds/survivor-safe.ogg":_m,"../../content/assets/sounds/turning-sting-1.ogg":vm,"../../content/assets/sounds/turning-sting-2.ogg":xm}));function lo(i,e,t){return i.get(t)??`./${e}/${t}`}const Em=["wall","floor","ceiling","door","exit-door"];function ym(i){return lo(Sm,"textures",`${i}.png`)}const bm=["shambler","sprinter","zombie-dead","survivor","survivor-dead","crowbar","shotgun","health","shells","flamethrower","fuel","flame-1","flame-2","flame-3"];function Fc(i){return lo(Mm,"sprites",`${i}.png`)}function nl(i){return lo(Am,"sounds",`${i}.ogg`)}function Tm(i,e,t,n,s){const r=()=>n.min+s()*(n.max-n.min),a=new Map,o=[];for(const l of e){const c=i.get(l);c===void 0?a.set(l,r()):c-t<=0?(o.push(l),a.set(l,r())):a.set(l,c-t)}return{timers:a,due:o}}function wm(i,e,t){const n=e.x-i.x,s=e.y-i.y,r=Math.hypot(n,s);if(r===0)return{gain:1,pan:0};const a=Math.max(0,1-r/t),o=Math.sin(Math.atan2(s,n)-i.facing);return{gain:a*a,pan:o}}const Oc="ambient",Rm={shambler:{wake:["shambler-wake-1","shambler-wake-2"],attack:["shambler-attack-1","shambler-attack-2"],death:["shambler-death-1","shambler-death-2"],hurt:["shambler-hurt-1","shambler-hurt-2"],groan:["shambler-groan-1","shambler-groan-2"]},sprinter:{wake:["sprinter-wake-1","sprinter-wake-2"],attack:["sprinter-attack-1","sprinter-attack-2"],death:["sprinter-death-1","sprinter-death-2"],hurt:["sprinter-hurt-1","sprinter-hurt-2"],groan:["sprinter-groan-1","sprinter-groan-2"]}},Cm={"survivor-hurt":["survivor-hurt-1","survivor-hurt-2"],"turning-sting":["turning-sting-1","turning-sting-2"],shotgun:["shotgun"],crowbar:["crowbar"],"player-death":["player-death"],"pickup-health":["pickup-health"],"pickup-shells":["pickup-shells"],door:["door"],secret:["secret"],"survivor-safe":["survivor-safe"],"flame-start":["flame-start-1","flame-start-2"],"flame-loop":["flame-loop"],ignite:["ignite-1","ignite-2"],burning:["burning"],"burn-out":["burn-out-1","burn-out-2"],empty:["empty-1","empty-2"],"pickup-fuel":["pickup-fuel-1","pickup-fuel-2"]},Bc={...Cm,...Object.fromEntries(Object.entries(Rm).flatMap(([i,e])=>Object.entries(e).map(([t,n])=>[`${i}-${t}`,n])))},Gi=(i,e)=>(t,n)=>{const s=n(e(t));return s?`${s}-${i}`:null},Pm={gunshotFired:"shotgun",crowbarSwung:"crowbar",zombieWoke:Gi("wake",i=>i.id),playerHurt:Gi("attack",i=>i.id),survivorHurt:Gi("attack",i=>i.by),survivorKilled:null,survivorTurning:null,survivorRose:null,turnStopped:null,zombieHit:Gi("hurt",i=>i.id),zombieKilled:Gi("death",i=>i.id),playerFell:null,furnitureHit:null,furnitureSmashed:null,playerBurned:null,ignited:"ignite",burnedOut:"burn-out",flameStarted:"flame-start",flameStopped:null,flameEmpty:"empty",playerDied:"player-death",pickupTaken:i=>i.kind==="health"?"pickup-health":i.kind==="fuel"?"pickup-fuel":"pickup-shells",doorOpened:"door",secretFound:"secret",survivorSafe:"survivor-safe",survivorFleeing:null,levelCompleted:null},Lm=[...new Set([Oc,...Object.values(Bc).flat()])];function Dm(i,e){const t=Pm[i.type];return typeof t=="function"?t(i,e):t}function yi(i,e){const t=Bc[i];return t[Math.min(t.length-1,Math.floor(e()*t.length))]}function Im(i,e,t){const n=new Set,s=[];for(const r of i){const a=Dm(r,e);!a||n.has(a)||(n.add(a),s.push(yi(a,t)))}return s}function Um(i,e){return i.flatMap(t=>t.type==="survivorHurt"?[{name:yi("survivor-hurt",e),survivor:t.id}]:[])}function Nm(i,e){return i!=="playing"&&i!=="paused"?[]:e.filter(t=>t.state==="turning").map(t=>t.id)}function il(i,e,t){if(t!=="playing"&&t!=="paused")return!1;for(const n of e)n.type==="flameStarted"?i=!0:n.type==="flameStopped"&&(i=!1);return i}function Fm(i){return i.screen!=="playing"&&i.screen!=="paused"?[]:[...i.zombies.filter(e=>e.burn&&e.state!=="dead").map(e=>({key:`z${e.id}`,x:e.x,y:e.y})),...i.furniture.filter(e=>e.burn).map(e=>({key:`f${e.col},${e.row}`,x:e.col+.5,y:e.row+.5}))]}function Om(i){switch(i){case"playing":case"paused":return 1;case"title":return 0;case"dead":case"stats":return .25}}const Bm=.8,km=.5,zm=.5,sl=.05,rl=["pointerdown","mousedown","pointerup","mouseup","click","touchend","keydown"],Cr={moveTo(){},stop(){}};function Gm(i){const e=new AudioContext,t=e.createGain();t.gain.value=Bm,t.connect(e.destination);const n=e.createGain();n.gain.value=0,n.connect(e.destination);let s=!1;const r=new Map;for(const R of Lm)Hm(e,R).then(L=>{!L||s||(r.set(R,L),R===Oc&&Vm(e,L,n))});let a=!1,o="title",l=-1,c={x:0,y:0,facing:0};const u=new Set;let f=new Map;const h=new Map,p=new Map;let g=!1,S=null;const m=new Map,d={min:i.groanIntervalMin,max:i.groanIntervalMax},M=()=>{if(a=!0,o!=="paused"&&e.state!=="running"){e.resume();const R=e.createBufferSource();R.buffer=e.createBuffer(1,1,e.sampleRate),R.connect(e.destination),R.start()}b()};for(const R of rl)window.addEventListener(R,M,{capture:!0});function b(){a&&(o==="paused"?e.state==="running"&&e.suspend():e.state!=="running"&&e.state!=="closed"&&e.resume())}function A(R){return wm(c,R,i.hearingDistance)}function C(R,L,U){const G=r.get(R);if(!G||e.state!=="running")return Cr;const w=e.createBufferSource();w.buffer=G,w.loop=U;const k=e.createGain(),X=e.createStereoPanner(),H={source:w,gain:k,panner:X,place:{...L}},j=A(H.place);return k.gain.value=j.gain,X.pan.value=j.pan,w.connect(k).connect(X).connect(t),w.addEventListener("ended",()=>{u.delete(H),X.disconnect()}),u.add(H),w.start(),{moveTo(W){H.place={...W}},stop(){u.has(H)&&w.stop()}}}function T(R,L){const U=R.filter(w=>w.state!=="dead"),G=Tm(f,U.map(w=>w.id),L,d,Math.random);f=G.timers;for(const w of G.due){const k=U.find(X=>X.id===w);h.set(w,C(yi(`${k.kind}-groan`,Math.random),k,!1))}for(const[w,k]of h){const X=U.find(H=>H.id===w);X?k.moveTo(X):h.delete(w)}}function _(R){const L=Nm(R.screen,R.survivors);for(const[U,G]of p)L.includes(U)||(G.stop(),p.delete(U));for(const U of L){if(p.has(U))continue;const G=R.survivors.find(k=>k.id===U),w=C(yi("turning-sting",Math.random),G,!0);w!==Cr&&p.set(U,w)}}function E(){if(!g){S==null||S.stop(),S=null;return}if(S)return;const R=r.get(yi("flame-loop",Math.random));if(!R||e.state!=="running")return;const L=e.createBufferSource();L.buffer=R,L.loop=!0,L.connect(t),L.start(),S={moveTo(){},stop:()=>L.stop()}}function N(R){const L=Fm(R);for(const[U,G]of m)L.some(w=>w.key===U)||(G.stop(),m.delete(U));for(const U of L){const G=m.get(U.key);if(G){G.moveTo(U);continue}const w=C(yi("burning",Math.random),U,!0);w!==Cr&&m.set(U.key,w)}}return{dispose(){s=!0;for(const R of rl)window.removeEventListener(R,M,{capture:!0});e.close()},react(R,L){if(g=il(g,R,L.screen),s||e.state!=="running")return;const U=G=>{var w;return(w=L.zombies.find(k=>k.id===G))==null?void 0:w.kind};for(const G of Im(R,U,Math.random)){const w=r.get(G);if(!w)continue;const k=e.createBufferSource();k.buffer=w,k.connect(t),k.start()}for(const G of Um(R,Math.random)){const w=L.survivors.find(k=>k.id===G.survivor);w&&C(G.name,w,!1)}},render(R,L){if(s)return;o=R.screen,c=R.player;const U=Om(o)*km;if(U!==l){l=U;const w=e.currentTime;n.gain.cancelScheduledValues(w),n.gain.setValueAtTime(n.gain.value,w),n.gain.linearRampToValueAtTime(U,w+zm)}b(),o==="playing"&&T(R.zombies,L),_(R),g=il(g,[],o),E(),N(R);const G=e.currentTime;for(const w of u){const k=A(w.place);w.gain.gain.setTargetAtTime(k.gain,G,sl),w.panner.pan.setTargetAtTime(k.pan,G,sl)}}}}async function Hm(i,e){try{const t=await fetch(nl(e));if(!t.ok)throw new Error(`HTTP ${t.status}`);return await i.decodeAudioData(await t.arrayBuffer())}catch(t){return console.warn(`Sound '${e}' (${nl(e)}) could not be loaded:`,t),null}}function Vm(i,e,t){const n=i.createBufferSource();n.buffer=e,n.loop=!0,n.connect(t),n.start()}function Wm(i){return i==="playing"||i==="paused"}const Xm=350,qm=250,Ym={crowbar:"CROWBAR",shotgun:"SHOTGUN",flamethrower:"FLAME THROWER"};function Km(i){i.innerHTML=`
    <div class="flash"></div>
    <div class="crosshair"></div>
    <div class="message"></div>
    <img class="weapon" alt="" />
    <div class="bar">
      <div><span class="label">HEALTH</span> <span class="health"></span></div>
      <div><span class="label">AMMO</span> <span class="ammo"></span></div>
      <div><span class="label">FUEL</span> <span class="fuel"></span></div>
      <div><span class="label">WEAPON</span> <span class="name"></span></div>
    </div>`;const e=i.querySelector(".weapon"),t=i.querySelector(".health"),n=i.querySelector(".ammo"),s=i.querySelector(".fuel"),r=i.querySelector(".name"),a=i.querySelector(".flash"),o=i.querySelector(".message");let l="";return{render(c){if(i.hidden=!Wm(c.screen),i.hidden)return;const u=c.player,f=`${Math.ceil(u.health)}|${u.shells}|${Math.ceil(u.fuel)}|${u.weapon}|${c.message??""}`;f!==l&&(l=f,t.textContent=String(Math.max(0,Math.ceil(u.health))),n.textContent=String(u.shells),s.textContent=String(Math.ceil(u.fuel)),r.textContent=Ym[u.weapon],e.src=Fc(u.weapon),o.textContent=c.message??"")},react(c){c.some(u=>u.type==="crowbarSwung")&&e.animate([{translate:"0 0",rotate:"0deg"},{translate:"-25% 20%",rotate:"-35deg"},{translate:"0 0",rotate:"0deg"}],{duration:qm,easing:"ease-out"}),c.some(u=>u.type==="playerHurt"||u.type==="playerFell"||u.type==="playerBurned")&&a.animate([{opacity:.55},{opacity:0}],{duration:Xm,easing:"ease-out"})}}}class Zm{constructor(e,t){Le(this,"held",new Set);Le(this,"mouseDx",0);Le(this,"attack",!1);Le(this,"attackHeld",!1);Le(this,"weapon",null);Le(this,"use",!1);Le(this,"pause",!1);Le(this,"confirm",!1);Le(this,"lockWanted",!0);Le(this,"screen","title");Le(this,"mouseSensitivity");Le(this,"gamepad");Le(this,"listening",new AbortController);this.canvas=e,this.mouseSensitivity=t.mouseSensitivity,this.gamepad=new Uc(t.gamepadDeadzone,t.gamepadTurnSpeed);const{signal:n}=this.listening;e.addEventListener("click",()=>{this.locked||(this.confirm=!0,this.lockWanted&&Promise.resolve(e.requestPointerLock()).catch(()=>{}))},{signal:n}),document.addEventListener("pointerlockchange",()=>{this.locked||(this.held.clear(),this.attackHeld=!1,this.screen==="playing"&&(this.pause=!0))},{signal:n}),document.addEventListener("pointerlockerror",()=>{this.pause=!0},{signal:n}),document.addEventListener("mousemove",s=>{this.locked&&(this.mouseDx+=s.movementX)},{signal:n}),document.addEventListener("mousedown",s=>{this.locked&&s.button===0&&(this.attack=!0,this.attackHeld=!0)},{signal:n}),document.addEventListener("mouseup",s=>{s.button===0&&(this.attackHeld=!1)},{signal:n}),window.addEventListener("keydown",s=>{s.repeat||(this.held.add(s.code),s.code==="Digit1"&&(this.weapon=1),s.code==="Digit2"&&(this.weapon=2),s.code==="Digit3"&&(this.weapon=3),s.code==="KeyE"&&(this.use=!0))},{signal:n}),window.addEventListener("keyup",s=>this.held.delete(s.code),{signal:n}),window.addEventListener("blur",()=>{this.held.clear(),this.attackHeld=!1},{signal:n})}dispose(){this.listening.abort()}get locked(){return document.pointerLockElement===this.canvas}nextTick(){const e=s=>this.held.has(s)?1:0,t=this.gamepad.read(),n={forward:e("KeyW")-e("KeyS")+((t==null?void 0:t.forward)??0),strafe:e("KeyD")-e("KeyA")+((t==null?void 0:t.strafe)??0),turn:this.mouseDx*this.mouseSensitivity+((t==null?void 0:t.turn)??0),attack:this.attack||this.attackHeld||((t==null?void 0:t.attack)??!1),weapon:this.weapon??(t==null?void 0:t.weapon)??null,use:this.use||((t==null?void 0:t.use)??!1),crouch:e("ShiftLeft")+e("ShiftRight")>0||((t==null?void 0:t.crouch)??!1),pause:this.pause||((t==null?void 0:t.pause)??!1),confirm:this.confirm||((t==null?void 0:t.confirm)??!1)};return this.mouseDx=0,this.attack=!1,this.weapon=null,this.use=!1,this.pause=!1,this.confirm=!1,n}}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const co="187",Jm=0,al=1,Qm=2,Qs=1,$m=2,ts=3,Qn=0,Ot=1,An=2,wi=0,ss=1,ol=2,ll=3,cl=4,jm=5,Ei=100,eg=101,tg=102,ng=103,ig=104,sg=200,rg=201,ag=202,og=203,kc=204,zc=205,lg=206,cg=207,ug=208,hg=209,fg=210,dg=211,pg=212,mg=213,gg=214,da=0,pa=1,ma=2,as=3,ga=4,_a=5,va=6,xa=7,uo=0,_g=1,vg=2,yn=0,Gc=1,Hc=2,Vc=3,Wc=4,Xc=5,qc=6,Yc=7,Kc=300,Pi=301,os=302,Pr=303,Lr=304,ls=1e3,En=1001,Sa=1002,ot=1003,xg=1004,xs=1005,Ft=1006,Dr=1007,Bn=1008,Gt=1009,Zc=1010,Jc=1011,cs=1012,ho=1013,un=1014,en=1015,hn=1016,fo=1017,po=1018,Li=1020,Qc=35902,$c=35899,jc=1021,eu=1022,ln=1023,zn=1026,kn=1027,mo=1028,go=1029,$n=1030,_o=1031,vo=1033,$s=33776,js=33777,er=33778,tr=33779,Ma=35840,Aa=35841,Ea=35842,ya=35843,ba=36196,Ta=37492,wa=37496,Ra=37488,Ca=37489,or=37490,Pa=37491,La=37808,Da=37809,Ia=37810,Ua=37811,Na=37812,Fa=37813,Oa=37814,Ba=37815,ka=37816,za=37817,Ga=37818,Ha=37819,Va=37820,Wa=37821,Xa=36492,qa=36494,Ya=36495,Ka=36283,Za=36284,lr=36285,Ja=36286,Sg=3200,Qa=0,Mg=1,On="",Ut="srgb",cr="srgb-linear",ur="linear",$e="srgb",Ir=7680,Ag=519,Eg=512,yg=513,bg=514,tu=515,Tg=516,wg=517,nu=518,iu=519,su=35044,ul="300 es",tn=2e3,us=2001;function Rg(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function hs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Cg(){const i=hs("canvas");return i.style.display="block",i}const hl={};function hr(...i){const e="THREE."+i.shift();console.log(e,...i)}function ru(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Re(...i){i=ru(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ye(...i){i=ru(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function nr(...i){const e=i.join(" ");e in hl||(hl[e]=!0,Re(...i))}function Pg(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Lg={[da]:da,[ma]:va,[ga]:ga,[as]:_a,[pa]:pa,[va]:ma,[xa]:xa,[_a]:as};class ti{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Et=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ir=Math.PI/180,$a=180/Math.PI;function ni(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Et[i&255]+Et[i>>8&255]+Et[i>>16&255]+Et[i>>24&255]+"-"+Et[e&255]+Et[e>>8&255]+"-"+Et[e>>16&15|64]+Et[e>>24&255]+"-"+Et[t&63|128]+Et[t>>8&255]+"-"+Et[t>>16&255]+Et[t>>24&255]+Et[n&255]+Et[n>>8&255]+Et[n>>16&255]+Et[n>>24&255]).toLowerCase()}function Xe(i,e,t){return Math.max(e,Math.min(t,i))}function Dg(i,e){return(i%e+e)%e}function Ur(i,e,t){return(1-t)*i+t*e}function Ig(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Mr(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function au(i,e){if(e.constructor===Float32Array)return i;const t=Mr(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function ou(i,e){if(e.constructor===Float32Array)return i;const t=Mr(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}const yo=class yo{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Xe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};yo.prototype.isVector2=!0;let Oe=yo;class Fi{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],f=n[s+3],h=r[a+0],p=r[a+1],g=r[a+2],S=r[a+3];if(f!==S||l!==h||c!==p||u!==g){let m=l*h+c*p+u*g+f*S;m<0&&(h=-h,p=-p,g=-g,S=-S,m=-m);let d=1-o;if(m<.9995){const M=Math.acos(m),b=Math.sin(M);d=Math.sin(d*M)/b,o=Math.sin(o*M)/b,l=l*d+h*o,c=c*d+p*o,u=u*d+g*o,f=f*d+S*o}else{l=l*d+h*o,c=c*d+p*o,u=u*d+g*o,f=f*d+S*o;const M=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=M,c*=M,u*=M,f*=M}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],f=r[a],h=r[a+1],p=r[a+2],g=r[a+3];return e[t]=o*g+u*f+l*p-c*h,e[t+1]=l*g+u*h+c*f-o*p,e[t+2]=c*g+u*p+o*h-l*f,e[t+3]=u*g-o*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),f=o(r/2),h=l(n/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=h*u*f+c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f-h*p*g;break;case"YXZ":this._x=h*u*f+c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f+h*p*g;break;case"ZXY":this._x=h*u*f-c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f-h*p*g;break;case"ZYX":this._x=h*u*f-c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f+h*p*g;break;case"YZX":this._x=h*u*f+c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f-h*p*g;break;case"XZY":this._x=h*u*f-c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f+h*p*g;break;default:Re("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=n+o+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>f){const p=2*Math.sqrt(1+n-o-f);this._w=(u-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>f){const p=2*Math.sqrt(1+o-n-f);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xe(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const bo=class bo{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(fl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(fl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),u=2*(o*t-r*s),f=2*(r*n-a*t);return this.x=t+l*c+a*f-o*u,this.y=n+l*u+o*c-r*f,this.z=s+l*f+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Nr.copy(this).projectOnVector(e),this.sub(Nr)}reflect(e){return this.sub(Nr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Xe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};bo.prototype.isVector3=!0;let z=bo;const Nr=new z,fl=new Fi,To=class To{constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],p=n[5],g=n[8],S=s[0],m=s[3],d=s[6],M=s[1],b=s[4],A=s[7],C=s[2],T=s[5],_=s[8];return r[0]=a*S+o*M+l*C,r[3]=a*m+o*b+l*T,r[6]=a*d+o*A+l*_,r[1]=c*S+u*M+f*C,r[4]=c*m+u*b+f*T,r[7]=c*d+u*A+f*_,r[2]=h*S+p*M+g*C,r[5]=h*m+p*b+g*T,r[8]=h*d+p*A+g*_,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,h=o*l-u*r,p=c*r-a*l,g=t*f+n*h+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/g;return e[0]=f*S,e[1]=(s*c-u*n)*S,e[2]=(o*n-s*a)*S,e[3]=h*S,e[4]=(u*t-s*l)*S,e[5]=(s*r-o*t)*S,e[6]=p*S,e[7]=(n*l-c*t)*S,e[8]=(a*t-n*r)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return nr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Fr.makeScale(e,t)),this}rotate(e){return nr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Fr.makeRotation(-e)),this}translate(e,t){return nr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Fr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};To.prototype.isMatrix3=!0;let De=To;const Fr=new De,dl=new De().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),pl=new De().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ug(){const i={enabled:!0,workingColorSpace:cr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===$e&&(s.r=bn(s.r),s.g=bn(s.g),s.b=bn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===$e&&(s.r=Ri(s.r),s.g=Ri(s.g),s.b=Ri(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===On?ur:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[cr]:{primaries:e,whitePoint:n,transfer:ur,toXYZ:dl,fromXYZ:pl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ut},outputColorSpaceConfig:{drawingBufferColorSpace:Ut}},[Ut]:{primaries:e,whitePoint:n,transfer:$e,toXYZ:dl,fromXYZ:pl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ut}}}),i}const We=Ug();function bn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ri(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ri;class Ng{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ri===void 0&&(ri=hs("canvas")),ri.width=e.width,ri.height=e.height;const s=ri.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=ri}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=hs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=bn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(bn(t[n]/255)*255):t[n]=bn(t[n]);return{data:t,width:e.width,height:e.height}}else return Re("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Fg=0;class xo{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Fg++}),this.uuid=ni(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Or(s[a].image)):r.push(Or(s[a]))}else r=Or(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Or(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ng.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Re("Texture: Unable to serialize Texture."),{})}let Og=0;const Br=new z;class bt extends ti{constructor(e=bt.DEFAULT_IMAGE,t=bt.DEFAULT_MAPPING,n=En,s=En,r=Ft,a=Bn,o=ln,l=Gt,c=bt.DEFAULT_ANISOTROPY,u=On){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Og++}),this.uuid=ni(),this.name="",this.source=new xo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new De,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Br).x}get height(){return this.source.getSize(Br).y}get depth(){return this.source.getSize(Br).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Re(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Re(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Kc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ls:e.x=e.x-Math.floor(e.x);break;case En:e.x=e.x<0?0:1;break;case Sa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ls:e.y=e.y-Math.floor(e.y);break;case En:e.y=e.y<0?0:1;break;case Sa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}bt.DEFAULT_IMAGE=null;bt.DEFAULT_MAPPING=Kc;bt.DEFAULT_ANISOTROPY=1;const wo=class wo{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],g=l[9],S=l[2],m=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-S)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+S)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,A=(p+1)/2,C=(d+1)/2,T=(u+h)/4,_=(f+S)/4,E=(g+m)/4;return b>A&&b>C?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=T/n,r=_/n):A>C?A<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(A),n=T/s,r=E/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=_/r,s=E/r),this.set(n,s,r,t),this}let M=Math.sqrt((m-g)*(m-g)+(f-S)*(f-S)+(h-u)*(h-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(f-S)/M,this.z=(h-u)/M,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this.w=Xe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this.w=Xe(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};wo.prototype.isVector4=!0;let at=wo;class Bg extends ti{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ft,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new at(0,0,e,t),this.scissorTest=!1,this.viewport=new at(0,0,e,t),this.textures=[];const s=n.count;for(let r=0;r<s;r++)this.textures[r]=new bt({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Ft,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new xo(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class cn extends Bg{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class lu extends bt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=ot,this.minFilter=ot,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class kg extends bt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=ot,this.minFilter=ot,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Sr=class Sr{constructor(e,t,n,s,r,a,o,l,c,u,f,h,p,g,S,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,u,f,h,p,g,S,m)}set(e,t,n,s,r,a,o,l,c,u,f,h,p,g,S,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=p,d[7]=g,d[11]=S,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Sr().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,s=1/ai.setFromMatrixColumn(e,0).length(),r=1/ai.setFromMatrixColumn(e,1).length(),a=1/ai.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const h=a*u,p=a*f,g=o*u,S=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=p+g*c,t[5]=h-S*c,t[9]=-o*l,t[2]=S-h*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,p=l*f,g=c*u,S=c*f;t[0]=h+S*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=p*o-g,t[6]=S+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,p=l*f,g=c*u,S=c*f;t[0]=h-S*o,t[4]=-a*f,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*u,t[9]=S-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,p=a*f,g=o*u,S=o*f;t[0]=l*u,t[4]=g*c-p,t[8]=h*c+S,t[1]=l*f,t[5]=S*c+h,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,p=a*c,g=o*l,S=o*c;t[0]=l*u,t[4]=S-h*f,t[8]=g*f+p,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*f+g,t[10]=h-S*f}else if(e.order==="XZY"){const h=a*l,p=a*c,g=o*l,S=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+S,t[5]=a*u,t[9]=p*f-g,t[2]=g*f-p,t[6]=o*u,t[10]=S*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zg,e,Gg)}lookAt(e,t,n){const s=this.elements;return Bt.subVectors(e,t),Bt.lengthSq()===0&&(Bt.z=1),Bt.normalize(),Ln.crossVectors(n,Bt),Ln.lengthSq()===0&&(Math.abs(n.z)===1?Bt.x+=1e-4:Bt.z+=1e-4,Bt.normalize(),Ln.crossVectors(n,Bt)),Ln.normalize(),Ss.crossVectors(Bt,Ln),s[0]=Ln.x,s[4]=Ss.x,s[8]=Bt.x,s[1]=Ln.y,s[5]=Ss.y,s[9]=Bt.y,s[2]=Ln.z,s[6]=Ss.z,s[10]=Bt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],p=n[13],g=n[2],S=n[6],m=n[10],d=n[14],M=n[3],b=n[7],A=n[11],C=n[15],T=s[0],_=s[4],E=s[8],N=s[12],R=s[1],L=s[5],U=s[9],G=s[13],w=s[2],k=s[6],X=s[10],H=s[14],j=s[3],W=s[7],Z=s[11],ee=s[15];return r[0]=a*T+o*R+l*w+c*j,r[4]=a*_+o*L+l*k+c*W,r[8]=a*E+o*U+l*X+c*Z,r[12]=a*N+o*G+l*H+c*ee,r[1]=u*T+f*R+h*w+p*j,r[5]=u*_+f*L+h*k+p*W,r[9]=u*E+f*U+h*X+p*Z,r[13]=u*N+f*G+h*H+p*ee,r[2]=g*T+S*R+m*w+d*j,r[6]=g*_+S*L+m*k+d*W,r[10]=g*E+S*U+m*X+d*Z,r[14]=g*N+S*G+m*H+d*ee,r[3]=M*T+b*R+A*w+C*j,r[7]=M*_+b*L+A*k+C*W,r[11]=M*E+b*U+A*X+C*Z,r[15]=M*N+b*G+A*H+C*ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],p=e[14],g=e[3],S=e[7],m=e[11],d=e[15],M=l*p-c*h,b=o*p-c*f,A=o*h-l*f,C=a*p-c*u,T=a*h-l*u,_=a*f-o*u;return t*(S*M-m*b+d*A)-n*(g*M-m*C+d*T)+s*(g*b-S*C+d*_)-r*(g*A-S*T+m*_)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-n*(r*u-o*l)+s*(r*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],p=e[11],g=e[12],S=e[13],m=e[14],d=e[15],M=t*o-n*a,b=t*l-s*a,A=t*c-r*a,C=n*l-s*o,T=n*c-r*o,_=s*c-r*l,E=u*S-f*g,N=u*m-h*g,R=u*d-p*g,L=f*m-h*S,U=f*d-p*S,G=h*d-p*m,w=M*G-b*U+A*L+C*R-T*N+_*E;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/w;return e[0]=(o*G-l*U+c*L)*k,e[1]=(s*U-n*G-r*L)*k,e[2]=(S*_-m*T+d*C)*k,e[3]=(h*T-f*_-p*C)*k,e[4]=(l*R-a*G-c*N)*k,e[5]=(t*G-s*R+r*N)*k,e[6]=(m*A-g*_-d*b)*k,e[7]=(u*_-h*A+p*b)*k,e[8]=(a*U-o*R+c*E)*k,e[9]=(n*R-t*U-r*E)*k,e[10]=(g*T-S*A+d*M)*k,e[11]=(f*A-u*T-p*M)*k,e[12]=(o*N-a*L-l*E)*k,e[13]=(t*L-n*N+s*E)*k,e[14]=(S*b-g*C-m*M)*k,e[15]=(u*C-f*b+h*M)*k,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,f=o+o,h=r*c,p=r*u,g=r*f,S=a*u,m=a*f,d=o*f,M=l*c,b=l*u,A=l*f,C=n.x,T=n.y,_=n.z;return s[0]=(1-(S+d))*C,s[1]=(p+A)*C,s[2]=(g-b)*C,s[3]=0,s[4]=(p-A)*T,s[5]=(1-(h+d))*T,s[6]=(m+M)*T,s[7]=0,s[8]=(g+b)*_,s[9]=(m-M)*_,s[10]=(1-(h+S))*_,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=ai.set(s[0],s[1],s[2]).length();const o=ai.set(s[4],s[5],s[6]).length(),l=ai.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Qt.copy(this);const c=1/a,u=1/o,f=1/l;return Qt.elements[0]*=c,Qt.elements[1]*=c,Qt.elements[2]*=c,Qt.elements[4]*=u,Qt.elements[5]*=u,Qt.elements[6]*=u,Qt.elements[8]*=f,Qt.elements[9]*=f,Qt.elements[10]*=f,t.setFromRotationMatrix(Qt),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=tn,l=!1){const c=this.elements,u=2*r/(t-e),f=2*r/(n-s),h=(t+e)/(t-e),p=(n+s)/(n-s);let g,S;if(l)g=r/(a-r),S=a*r/(a-r);else if(o===tn)g=-(a+r)/(a-r),S=-2*a*r/(a-r);else if(o===us)g=-a/(a-r),S=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=tn,l=!1){const c=this.elements,u=2/(t-e),f=2/(n-s),h=-(t+e)/(t-e),p=-(n+s)/(n-s);let g,S;if(l)g=1/(a-r),S=a/(a-r);else if(o===tn)g=-2/(a-r),S=-(a+r)/(a-r);else if(o===us)g=-1/(a-r),S=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Sr.prototype.isMatrix4=!0;let Ze=Sr;const ai=new z,Qt=new Ze,zg=new z(0,0,0),Gg=new z(1,1,1),Ln=new z,Ss=new z,Bt=new z,ml=new Ze,gl=new Fi;class Gn{constructor(e=0,t=0,n=0,s=Gn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],f=s[2],h=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Xe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Xe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Xe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Xe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Re("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ml.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ml,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return gl.setFromEuler(this),this.setFromQuaternion(gl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gn.DEFAULT_ORDER="XYZ";class cu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Hg=0;const _l=new z,oi=new Fi,gn=new Ze,Ms=new z,Hi=new z,Vg=new z,Wg=new Fi,vl=new z(1,0,0),xl=new z(0,1,0),Sl=new z(0,0,1),Ml={type:"added"},Xg={type:"removed"},li={type:"childadded",child:null},kr={type:"childremoved",child:null};class Tt extends ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hg++}),this.uuid=ni(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tt.DEFAULT_UP.clone();const e=new z,t=new Gn,n=new Fi,s=new z(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ze},normalMatrix:{value:new De}}),this.matrix=new Ze,this.matrixWorld=new Ze,this.matrixAutoUpdate=Tt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return oi.setFromAxisAngle(e,t),this.quaternion.multiply(oi),this}rotateOnWorldAxis(e,t){return oi.setFromAxisAngle(e,t),this.quaternion.premultiply(oi),this}rotateX(e){return this.rotateOnAxis(vl,e)}rotateY(e){return this.rotateOnAxis(xl,e)}rotateZ(e){return this.rotateOnAxis(Sl,e)}translateOnAxis(e,t){return _l.copy(e).applyQuaternion(this.quaternion),this.position.add(_l.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(vl,e)}translateY(e){return this.translateOnAxis(xl,e)}translateZ(e){return this.translateOnAxis(Sl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ms.copy(e):Ms.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Hi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gn.lookAt(Hi,Ms,this.up):gn.lookAt(Ms,Hi,this.up),this.quaternion.setFromRotationMatrix(gn),s&&(gn.extractRotation(s.matrixWorld),oi.setFromRotationMatrix(gn),this.quaternion.premultiply(oi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ye("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ml),li.child=e,this.dispatchEvent(li),li.child=null):Ye("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Xg),kr.child=e,this.dispatchEvent(kr),kr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),gn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gn.multiply(e.parent.matrixWorld)),e.applyMatrix4(gn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ml),li.child=e,this.dispatchEvent(li),li.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hi,e,Vg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hi,Wg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Tt.DEFAULT_UP=new z(0,1,0);Tt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class bi extends Tt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const qg={type:"move"};class zr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const S of e.hand.values()){const m=t.getJointPose(S,n),d=this._getHandJoint(c,S);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.quaternion,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&h>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(qg)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new bi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const uu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Dn={h:0,s:0,l:0},As={h:0,s:0,l:0};function Gr(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class ze{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ut){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,We.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=We.workingColorSpace){return this.r=e,this.g=t,this.b=n,We.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=We.workingColorSpace){if(e=Dg(e,1),t=Xe(t,0,1),n=Xe(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Gr(a,r,e+1/3),this.g=Gr(a,r,e),this.b=Gr(a,r,e-1/3)}return We.colorSpaceToWorking(this,s),this}setStyle(e,t=Ut){function n(r){r!==void 0&&parseFloat(r)<1&&Re("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Re("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Re("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ut){const n=uu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Re("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=bn(e.r),this.g=bn(e.g),this.b=bn(e.b),this}copyLinearToSRGB(e){return this.r=Ri(e.r),this.g=Ri(e.g),this.b=Ri(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ut){return We.workingToColorSpace(yt.copy(this),e),Math.round(Xe(yt.r*255,0,255))*65536+Math.round(Xe(yt.g*255,0,255))*256+Math.round(Xe(yt.b*255,0,255))}getHexString(e=Ut){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=We.workingColorSpace){We.workingToColorSpace(yt.copy(this),t);const n=yt.r,s=yt.g,r=yt.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=We.workingColorSpace){return We.workingToColorSpace(yt.copy(this),t),e.r=yt.r,e.g=yt.g,e.b=yt.b,e}getStyle(e=Ut){We.workingToColorSpace(yt.copy(this),e);const t=yt.r,n=yt.g,s=yt.b;return e!==Ut?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Dn),this.setHSL(Dn.h+e,Dn.s+t,Dn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Dn),e.getHSL(As);const n=Ur(Dn.h,As.h,t),s=Ur(Dn.s,As.s,t),r=Ur(Dn.l,As.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const yt=new ze;ze.NAMES=uu;class Ar{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new ze(e),this.near=t,this.far=n}clone(){return new Ar(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class hu extends Tt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gn,this.environmentIntensity=1,this.environmentRotation=new Gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const $t=new z,_n=new z,Hr=new z,vn=new z,ci=new z,ui=new z,Al=new z,Vr=new z,Wr=new z,Xr=new z,qr=new at,Yr=new at,Kr=new at;class Ht{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),$t.subVectors(e,t),s.cross($t);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){$t.subVectors(s,t),_n.subVectors(n,t),Hr.subVectors(e,t);const a=$t.dot($t),o=$t.dot(_n),l=$t.dot(Hr),c=_n.dot(_n),u=_n.dot(Hr),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;const h=1/f,p=(c*l-o*u)*h,g=(a*u-o*l)*h;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,vn)===null?!1:vn.x>=0&&vn.y>=0&&vn.x+vn.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,vn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,vn.x),l.addScaledVector(a,vn.y),l.addScaledVector(o,vn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return qr.setScalar(0),Yr.setScalar(0),Kr.setScalar(0),qr.fromBufferAttribute(e,t),Yr.fromBufferAttribute(e,n),Kr.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(qr,r.x),a.addScaledVector(Yr,r.y),a.addScaledVector(Kr,r.z),a}static isFrontFacing(e,t,n,s){return $t.subVectors(n,t),_n.subVectors(e,t),$t.cross(_n).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $t.subVectors(this.c,this.b),_n.subVectors(this.a,this.b),$t.cross(_n).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ht.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ht.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Ht.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Ht.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ht.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;ci.subVectors(s,n),ui.subVectors(r,n),Vr.subVectors(e,n);const l=ci.dot(Vr),c=ui.dot(Vr);if(l<=0&&c<=0)return t.copy(n);Wr.subVectors(e,s);const u=ci.dot(Wr),f=ui.dot(Wr);if(u>=0&&f<=u)return t.copy(s);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0&&l-u>0)return a=l/(l-u),t.copy(n).addScaledVector(ci,a);Xr.subVectors(e,r);const p=ci.dot(Xr),g=ui.dot(Xr);if(g>=0&&p<=g)return t.copy(r);const S=p*c-l*g;if(S<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(ui,o);const m=u*g-p*f;if(m<=0&&f-u>=0&&p-g>=0)return Al.subVectors(r,s),o=(f-u)/(f-u+(p-g)),t.copy(s).addScaledVector(Al,o);const d=1/(m+S+h);return a=S*d,o=h*d,t.copy(n).addScaledVector(ci,a).addScaledVector(ui,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ii{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(jt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(jt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=jt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,jt):jt.fromBufferAttribute(r,a),jt.applyMatrix4(e.matrixWorld),this.expandByPoint(jt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Es.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Es.copy(n.boundingBox)),Es.applyMatrix4(e.matrixWorld),this.union(Es)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,jt),jt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vi),ys.subVectors(this.max,Vi),hi.subVectors(e.a,Vi),fi.subVectors(e.b,Vi),di.subVectors(e.c,Vi),In.subVectors(fi,hi),Un.subVectors(di,fi),qn.subVectors(hi,di);let t=[0,-In.z,In.y,0,-Un.z,Un.y,0,-qn.z,qn.y,In.z,0,-In.x,Un.z,0,-Un.x,qn.z,0,-qn.x,-In.y,In.x,0,-Un.y,Un.x,0,-qn.y,qn.x,0];return!Zr(t,hi,fi,di,ys)||(t=[1,0,0,0,1,0,0,0,1],!Zr(t,hi,fi,di,ys))?!1:(bs.crossVectors(In,Un),t=[bs.x,bs.y,bs.z],Zr(t,hi,fi,di,ys))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,jt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(jt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const xn=[new z,new z,new z,new z,new z,new z,new z,new z],jt=new z,Es=new ii,hi=new z,fi=new z,di=new z,In=new z,Un=new z,qn=new z,Vi=new z,ys=new z,bs=new z,Yn=new z;function Zr(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Yn.fromArray(i,r);const o=s.x*Math.abs(Yn.x)+s.y*Math.abs(Yn.y)+s.z*Math.abs(Yn.z),l=e.dot(Yn),c=t.dot(Yn),u=n.dot(Yn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const ut=new z,Ts=new Oe;let Yg=0;class Tn extends ti{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Yg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=su,this.updateRanges=[],this.gpuType=en,this.version=0,this._normalizationScale=e!==void 0?Mr(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ts.fromBufferAttribute(this,t),Ts.applyMatrix3(e),this.setXY(t,Ts.x,Ts.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix3(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix4(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyNormalMatrix(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.transformDirection(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):au(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):ou(e,this.array)}}class fu extends Tn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class du extends Tn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Zt extends Tn{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Kg=new ii,Wi=new z,Jr=new z;class Oi{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Kg.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Wi.subVectors(e,this.center);const t=Wi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Wi,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Jr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Wi.copy(e.center).add(Jr)),this.expandByPoint(Wi.copy(e.center).sub(Jr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Zg=0;const Kt=new Ze,Qr=new Tt,pi=new z,kt=new ii,Xi=new ii,vt=new z;class dn extends ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zg++}),this.uuid=ni(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Rg(e)?du:fu)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new De().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Kt.makeRotationFromQuaternion(e),this.applyMatrix4(Kt),this}rotateX(e){return Kt.makeRotationX(e),this.applyMatrix4(Kt),this}rotateY(e){return Kt.makeRotationY(e),this.applyMatrix4(Kt),this}rotateZ(e){return Kt.makeRotationZ(e),this.applyMatrix4(Kt),this}translate(e,t,n){return Kt.makeTranslation(e,t,n),this.applyMatrix4(Kt),this}scale(e,t,n){return Kt.makeScale(e,t,n),this.applyMatrix4(Kt),this}lookAt(e){return Qr.lookAt(e),Qr.updateMatrix(),this.applyMatrix4(Qr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(pi).negate(),this.translate(pi.x,pi.y,pi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Zt(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Re("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ii);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ye("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];kt.setFromBufferAttribute(r),this.morphTargetsRelative?(vt.addVectors(this.boundingBox.min,kt.min),this.boundingBox.expandByPoint(vt),vt.addVectors(this.boundingBox.max,kt.max),this.boundingBox.expandByPoint(vt)):(this.boundingBox.expandByPoint(kt.min),this.boundingBox.expandByPoint(kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ye('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Oi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ye("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const n=this.boundingSphere.center;if(kt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Xi.setFromBufferAttribute(o),this.morphTargetsRelative?(vt.addVectors(kt.min,Xi.min),kt.expandByPoint(vt),vt.addVectors(kt.max,Xi.max),kt.expandByPoint(vt)):(kt.expandByPoint(Xi.min),kt.expandByPoint(Xi.max))}kt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)vt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(vt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)vt.fromBufferAttribute(o,c),l&&(pi.fromBufferAttribute(e,c),vt.add(pi)),s=Math.max(s,n.distanceToSquared(vt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ye('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ye("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Tn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[],c=new Uint8Array(n.count);for(let N=0;N<n.count;N++)o[N]=new z,l[N]=new z;const u=new z,f=new z,h=new z,p=new Oe,g=new Oe,S=new Oe,m=new z,d=new z;function M(N,R,L){c[N]=c[R]=c[L]=1,u.fromBufferAttribute(n,N),f.fromBufferAttribute(n,R),h.fromBufferAttribute(n,L),p.fromBufferAttribute(r,N),g.fromBufferAttribute(r,R),S.fromBufferAttribute(r,L),f.sub(u),h.sub(u),g.sub(p),S.sub(p);const U=1/(g.x*S.y-S.x*g.y);isFinite(U)&&(m.copy(f).multiplyScalar(S.y).addScaledVector(h,-g.y).multiplyScalar(U),d.copy(h).multiplyScalar(g.x).addScaledVector(f,-S.x).multiplyScalar(U),o[N].add(m),o[R].add(m),o[L].add(m),l[N].add(d),l[R].add(d),l[L].add(d))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let N=0,R=b.length;N<R;++N){const L=b[N],U=L.start,G=L.count;for(let w=U,k=U+G;w<k;w+=3)M(e.getX(w+0),e.getX(w+1),e.getX(w+2))}const A=new z,C=new z,T=new z,_=new z;function E(N){T.fromBufferAttribute(s,N),_.copy(T);const R=o[N];A.copy(R),A.sub(T.multiplyScalar(T.dot(R))).normalize(),C.crossVectors(_,R);const U=C.dot(l[N])<0?-1:1;a.setXYZW(N,A.x,A.y,A.z,U)}for(let N=0,R=n.count;N<R;++N)c[N]&&E(N);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Tn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,p=n.count;h<p;h++)n.setXYZ(h,0,0,0);const s=new z,r=new z,a=new z,o=new z,l=new z,c=new z,u=new z,f=new z;if(e)for(let h=0,p=e.count;h<p;h+=3){const g=e.getX(h+0),S=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,S),a.fromBufferAttribute(t,m),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,S),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(S,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)vt.fromBufferAttribute(e,t),vt.normalize(),e.setXYZ(t,vt.x,vt.y,vt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let p=0,g=0;for(let S=0,m=l.length;S<m;S++){o.isInterleavedBufferAttribute?p=l[S]*o.data.stride+o.offset:p=l[S]*u;for(let d=0;d<u;d++)h[g++]=c[p++]}return new Tn(h,u,f)}if(this.index===null)return Re("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new dn,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],p=e(h,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],f=r[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Jg{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=su,this.updateRanges=[],this.version=0,this.uuid=ni()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});const t=El(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});const t=El(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));const n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}}function El(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=ni()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}const Pt=new z;class fr{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s,this._normalizationScale=e!==void 0?Mr(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix4(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyNormalMatrix(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.transformDirection(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){hr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Tn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new fr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){hr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):au(e,this.data.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):ou(e,this.data.array)}}const $r=new z,Qg=new z,$g=new De;class Fn{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=$r.subVectors(n,t).cross(Qg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const s=e.delta($r),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||$g.getNormalMatrix(e),s=this.coplanarPoint($r).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let jg=0;class si extends ti{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jg++}),this.uuid=ni(),this.name="",this.type="Material",this.blending=ss,this.side=Qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=kc,this.blendDst=zc,this.blendEquation=Ei,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=as,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ag,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ir,this.stencilZFail=Ir,this.stencilZPass=Ir,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Re(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Re(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ze().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Fn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Oe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Oe().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class jn extends si{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let mi;const qi=new z,gi=new z,_i=new z,vi=new Oe,Yi=new Oe,pu=new Ze,ws=new z,Ki=new z,Rs=new z,yl=new Oe,jr=new Oe,bl=new Oe;class ps extends Tt{constructor(e=new jn){if(super(),this.isSprite=!0,this.type="Sprite",mi===void 0){mi=new dn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Jg(t,5);mi.setIndex([0,1,2,0,2,3]),mi.setAttribute("position",new fr(n,3,0,!1)),mi.setAttribute("uv",new fr(n,2,3,!1))}this.geometry=mi,this.material=e,this.center=new Oe(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Ye('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),gi.setFromMatrixScale(this.matrixWorld),pu.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),_i.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&gi.multiplyScalar(-_i.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;Cs(ws.set(-.5,-.5,0),_i,a,gi,s,r),Cs(Ki.set(.5,-.5,0),_i,a,gi,s,r),Cs(Rs.set(.5,.5,0),_i,a,gi,s,r),yl.set(0,0),jr.set(1,0),bl.set(1,1);let o=e.ray.intersectTriangle(ws,Ki,Rs,!1,qi);if(o===null&&(Cs(Ki.set(-.5,.5,0),_i,a,gi,s,r),jr.set(0,1),o=e.ray.intersectTriangle(ws,Rs,Ki,!1,qi),o===null))return;const l=e.ray.origin.distanceTo(qi);l<e.near||l>e.far||t.push({distance:l,point:qi.clone(),uv:Ht.getInterpolation(qi,ws,Ki,Rs,yl,jr,bl,new Oe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){const t=super.toJSON(e);return t.object.center=this.center.toArray(),t}}function Cs(i,e,t,n,s,r){vi.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Yi.x=r*vi.x-s*vi.y,Yi.y=s*vi.x+r*vi.y):Yi.copy(vi),i.copy(e),i.x+=Yi.x,i.y+=Yi.y,i.applyMatrix4(pu)}const Sn=new z,ea=new z,Ps=new z,Ls=new z;class mu{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Sn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Sn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Sn.copy(this.origin).addScaledVector(this.direction,t),Sn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){ea.copy(e).add(t).multiplyScalar(.5),Ps.copy(t).sub(e).normalize(),Ls.copy(this.origin).sub(ea);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Ps),o=Ls.dot(this.direction),l=-Ls.dot(Ps),c=Ls.lengthSq(),u=Math.abs(1-a*a);let f,h,p,g;if(u>0)if(f=a*l-o,h=a*o-l,g=r*u,f>=0)if(h>=-g)if(h<=g){const S=1/u;f*=S,h*=S,p=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=r,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-a*r+o)),h=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-r,-l),r),p=h*(h+2*l)+c):(f=Math.max(0,-(a*r+o)),h=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+h*(h+2*l)+c);else h=a>0?-r:r,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(ea).addScaledVector(Ps,h),p}intersectSphere(e,t){if(e.radius<0)return null;Sn.subVectors(e.center,this.origin);const n=Sn.dot(this.direction),s=Sn.dot(Sn)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Sn)!==null}intersectTriangle(e,t,n,s,r){const a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,f=e.x-a.x,h=e.y-a.y,p=e.z-a.z,g=t.x-a.x,S=t.y-a.y,m=t.z-a.z,d=n.x-a.x,M=n.y-a.y,b=n.z-a.z,A=Math.abs(l),C=Math.abs(c),T=Math.abs(u);let _,E,N,R,L,U,G,w,k,X,H,j;if(A>=C&&A>=T?(N=l,U=f,k=g,j=d,l>=0?(_=c,E=u,R=h,L=p,G=S,w=m,X=M,H=b):(_=u,E=c,R=p,L=h,G=m,w=S,X=b,H=M)):C>=T?(N=c,U=h,k=S,j=M,c>=0?(_=u,E=l,R=p,L=f,G=m,w=g,X=b,H=d):(_=l,E=u,R=f,L=p,G=g,w=m,X=d,H=b)):(N=u,U=p,k=m,j=b,u>=0?(_=l,E=c,R=f,L=h,G=g,w=S,X=d,H=M):(_=c,E=l,R=h,L=f,G=S,w=g,X=M,H=d)),N===0)return null;const W=_/N,Z=E/N,ee=1/N,Me=R-W*U,Ie=L-Z*U,J=G-W*k,pe=w-Z*k,ve=X-W*j,be=H-Z*j,me=ve*pe-be*J,Ne=Me*be-Ie*ve,lt=J*Ie-pe*Me;if(s){if(me<0||Ne<0||lt<0)return null}else if((me<0||Ne<0||lt<0)&&(me>0||Ne>0||lt>0))return null;const we=me+Ne+lt;if(we===0)return null;const Je=ee*(me*U+Ne*k+lt*j);return(we>0?Je<0:Je>0)?null:this.at(Je/we,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class dr extends si{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.combine=uo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Tl=new Ze,Kn=new mu,Ds=new Oi,wl=new z,Is=new z,Us=new z,Ns=new z,ta=new z,Fs=new z,Rl=new z,Os=new z;class wt extends Tt{constructor(e=new dn,t=new dr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Fs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],f=r[l];u!==0&&(ta.fromBufferAttribute(f,e),a?Fs.addScaledVector(ta,u):Fs.addScaledVector(ta.sub(t),u))}t.add(Fs)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ds.copy(n.boundingSphere),Ds.applyMatrix4(r),Kn.copy(e.ray).recast(e.near),!(Ds.containsPoint(Kn.origin)===!1&&(Kn.intersectSphere(Ds,wl)===null||Kn.origin.distanceToSquared(wl)>(e.far-e.near)**2))&&(Tl.copy(r).invert(),Kn.copy(e.ray).applyMatrix4(Tl),!(n.boundingBox!==null&&Kn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Kn)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,S=h.length;g<S;g++){const m=h[g],d=a[m.materialIndex],M=Math.max(m.start,p.start),b=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let A=M,C=b;A<C;A+=3){const T=o.getX(A),_=o.getX(A+1),E=o.getX(A+2);s=Bs(this,d,e,n,c,u,f,T,_,E),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),S=Math.min(o.count,p.start+p.count);for(let m=g,d=S;m<d;m+=3){const M=o.getX(m),b=o.getX(m+1),A=o.getX(m+2);s=Bs(this,a,e,n,c,u,f,M,b,A),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,S=h.length;g<S;g++){const m=h[g],d=a[m.materialIndex],M=Math.max(m.start,p.start),b=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let A=M,C=b;A<C;A+=3){const T=A,_=A+1,E=A+2;s=Bs(this,d,e,n,c,u,f,T,_,E),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),S=Math.min(l.count,p.start+p.count);for(let m=g,d=S;m<d;m+=3){const M=m,b=m+1,A=m+2;s=Bs(this,a,e,n,c,u,f,M,b,A),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function e_(i,e,t,n,s,r,a,o){let l;if(e.side===Ot?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Qn,o),l===null)return null;Os.copy(o),Os.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Os);return c<t.near||c>t.far?null:{distance:c,point:Os.clone(),object:i}}function Bs(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Is),i.getVertexPosition(l,Us),i.getVertexPosition(c,Ns);const u=e_(i,e,t,n,Is,Us,Ns,Rl);if(u){const f=new z;Ht.getBarycoord(Rl,Is,Us,Ns,f),s&&(u.uv=Ht.getInterpolatedAttribute(s,o,l,c,f,new Oe)),r&&(u.uv1=Ht.getInterpolatedAttribute(r,o,l,c,f,new Oe)),a&&(u.normal=Ht.getInterpolatedAttribute(a,o,l,c,f,new z),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new z,materialIndex:0};Ht.getNormal(Is,Us,Ns,h.normal),u.face=h,u.barycoord=f}return u}class gu extends bt{constructor(e=null,t=1,n=1,s,r,a,o,l,c=ot,u=ot,f,h){super(null,a,o,l,c,u,s,r,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Cl extends Tn{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const xi=new Ze,Pl=new Ze,ks=[],Ll=new ii,t_=new Ze,Zi=new wt,Ji=new Oi;class _u extends wt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Cl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,t_)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ii),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,xi),Ll.copy(e.boundingBox).applyMatrix4(xi),this.boundingBox.union(Ll)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Oi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,xi),Ji.copy(e.boundingSphere).applyMatrix4(xi),this.boundingSphere.union(Ji)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(Zi.geometry=this.geometry,Zi.material=this.material,Zi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ji.copy(this.boundingSphere),Ji.applyMatrix4(n),e.ray.intersectsSphere(Ji)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,xi),Pl.multiplyMatrices(n,xi),Zi.matrixWorld=Pl,Zi.raycast(e,ks);for(let a=0,o=ks.length;a<o;a++){const l=ks[a];l.instanceId=r,l.object=this,t.push(l)}ks.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Cl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new gu(new Float32Array(s*this.count),s,this.count,mo,en));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Zn=new Oi,n_=new Oe(.5,.5),zs=new z;class fs{constructor(e=new Fn,t=new Fn,n=new Fn,s=new Fn,r=new Fn,a=new Fn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=tn,n=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],f=r[5],h=r[6],p=r[7],g=r[8],S=r[9],m=r[10],d=r[11],M=r[12],b=r[13],A=r[14],C=r[15];if(s[0].setComponents(c-a,p-u,d-g,C-M).normalize(),s[1].setComponents(c+a,p+u,d+g,C+M).normalize(),s[2].setComponents(c+o,p+f,d+S,C+b).normalize(),s[3].setComponents(c-o,p-f,d-S,C-b).normalize(),n)s[4].setComponents(l,h,m,A).normalize(),s[5].setComponents(c-l,p-h,d-m,C-A).normalize();else if(s[4].setComponents(c-l,p-h,d-m,C-A).normalize(),t===tn)s[5].setComponents(c+l,p+h,d+m,C+A).normalize();else if(t===us)s[5].setComponents(l,h,m,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Zn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Zn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Zn)}intersectsSprite(e){Zn.center.set(0,0,0);const t=n_.distanceTo(e.center);return Zn.radius=.7071067811865476+t,Zn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zn)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(zs.x=s.normal.x>0?e.max.x:e.min.x,zs.y=s.normal.y>0?e.max.y:e.min.y,zs.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(zs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Dl=new Ze;class So{constructor(){this.coordinateSystem=tn,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){const r=t[s];Dl.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new fs),n[s].setFromProjectionMatrix(Dl,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new fs),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new So().copy(this)}}class vu extends si{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const pr=new z,mr=new z,Il=new Ze,Qi=new mu,Gs=new Oi,na=new z,Ul=new z;class i_ extends Tt{constructor(e=new dn,t=new vu){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)pr.fromBufferAttribute(t,s-1),mr.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=pr.distanceTo(mr);e.setAttribute("lineDistance",new Zt(n,1))}else Re("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Gs.copy(n.boundingSphere),Gs.applyMatrix4(s),Gs.radius+=r,e.ray.intersectsSphere(Gs)===!1)return;Il.copy(s).invert(),Qi.copy(e.ray).applyMatrix4(Il);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){const p=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let S=p,m=g-1;S<m;S+=c){const d=u.getX(S),M=u.getX(S+1),b=Hs(this,e,Qi,l,d,M,S);b&&t.push(b)}if(this.isLineLoop){const S=u.getX(g-1),m=u.getX(p),d=Hs(this,e,Qi,l,S,m,g-1);d&&t.push(d)}}else{const p=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let S=p,m=g-1;S<m;S+=c){const d=Hs(this,e,Qi,l,S,S+1,S);d&&t.push(d)}if(this.isLineLoop){const S=Hs(this,e,Qi,l,g-1,p,g-1);S&&t.push(S)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Hs(i,e,t,n,s,r,a){const o=i.geometry.attributes.position;if(pr.fromBufferAttribute(o,s),mr.fromBufferAttribute(o,r),t.distanceSqToSegment(pr,mr,na,Ul)>n)return;na.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(na);if(!(c<e.near||c>e.far))return{distance:c,point:Ul.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const Nl=new z,Fl=new z;class s_ extends i_{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Nl.fromBufferAttribute(t,s),Fl.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Nl.distanceTo(Fl);e.setAttribute("lineDistance",new Zt(n,1))}else Re("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class xu extends bt{constructor(e=[],t=Pi,n,s,r,a,o,l,c,u){super(e,t,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Di extends bt{constructor(e,t,n=un,s,r,a,o=ot,l=ot,c,u=zn,f=1){if(u!==zn&&u!==kn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:f};super(h,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new xo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Su extends Di{constructor(e,t=un,n=Pi,s,r,a=ot,o=ot,l,c=zn){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,n,s,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Mu extends bt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class fn extends dn{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],f=[];let h=0,p=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Zt(c,3)),this.setAttribute("normal",new Zt(u,3)),this.setAttribute("uv",new Zt(f,2));function g(S,m,d,M,b,A,C,T,_,E,N){const R=A/_,L=C/E,U=A/2,G=C/2,w=T/2,k=_+1,X=E+1;let H=0,j=0;const W=new z;for(let Z=0;Z<X;Z++){const ee=Z*L-G;for(let Me=0;Me<k;Me++){const Ie=Me*R-U;W[S]=Ie*M,W[m]=ee*b,W[d]=w,c.push(W.x,W.y,W.z),W[S]=0,W[m]=0,W[d]=T>0?1:-1,u.push(W.x,W.y,W.z),f.push(Me/_),f.push(1-Z/E),H+=1}}for(let Z=0;Z<E;Z++)for(let ee=0;ee<_;ee++){const Me=h+ee+k*Z,Ie=h+ee+k*(Z+1),J=h+(ee+1)+k*(Z+1),pe=h+(ee+1)+k*Z;l.push(Me,Ie,pe),l.push(Ie,J,pe),j+=6}o.addGroup(p,j,N),p+=j,h+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}const Vs=new z,Ws=new z,ia=new z,Xs=new Ht;class Ol extends dn{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const s=Math.pow(10,4),r=Math.cos(ir*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],u=["a","b","c"],f=new Array(3),h=new Map,p=[];for(let g=0;g<l;g+=3){a?(c[0]=a.getX(g),c[1]=a.getX(g+1),c[2]=a.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:S,b:m,c:d}=Xs;if(S.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),d.fromBufferAttribute(o,c[2]),Xs.getNormal(ia),f[0]=`${Math.round(S.x*s)},${Math.round(S.y*s)},${Math.round(S.z*s)}`,f[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,f[2]=`${Math.round(d.x*s)},${Math.round(d.y*s)},${Math.round(d.z*s)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let M=0;M<3;M++){const b=(M+1)%3,A=f[M],C=f[b],T=Xs[u[M]],_=Xs[u[b]],E=`${A}_${C}`,N=`${C}_${A}`,R=h.get(N);R?(ia.dot(R.normal)<=r&&(p.push(T.x,T.y,T.z),p.push(_.x,_.y,_.z)),h.set(N,null)):h.has(E)||h.set(E,{index0:c[M],index1:c[b],normal:ia.clone()})}}for(const g of h.values())if(g){const{index0:S,index1:m}=g;Vs.fromBufferAttribute(o,S),Ws.fromBufferAttribute(o,m),p.push(Vs.x,Vs.y,Vs.z),p.push(Ws.x,Ws.y,Ws.z)}this.setAttribute("position",new Zt(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Rn extends dn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,f=e/o,h=t/l,p=[],g=[],S=[],m=[];for(let d=0;d<u;d++){const M=d*h-a;for(let b=0;b<c;b++){const A=b*f-r;g.push(A,-M,0),S.push(0,0,1),m.push(b/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let M=0;M<o;M++){const b=M+c*d,A=M+c*(d+1),C=M+1+c*(d+1),T=M+1+c*d;p.push(b,A,T),p.push(A,C,T)}this.setIndex(p),this.setAttribute("position",new Zt(g,3)),this.setAttribute("normal",new Zt(S,3)),this.setAttribute("uv",new Zt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rn(e.width,e.height,e.widthSegments,e.heightSegments)}}function Ii(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];if(Bl(s))s.isRenderTargetTexture?(Re("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Bl(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Lt(i){const e={};for(let t=0;t<i.length;t++){const n=Ii(i[t]);for(const s in n)e[s]=n[s]}return e}function Bl(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function r_(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Au(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:We.workingColorSpace}const a_={clone:Ii,merge:Lt};var o_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,l_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ei extends si{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=o_,this.fragmentShader=l_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ii(e.uniforms),this.uniformsGroups=r_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new ze().setHex(s.value);break;case"v2":this.uniforms[n].value=new Oe().fromArray(s.value);break;case"v3":this.uniforms[n].value=new z().fromArray(s.value);break;case"v4":this.uniforms[n].value=new at().fromArray(s.value);break;case"m3":this.uniforms[n].value=new De().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Ze().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class c_ extends ei{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Bi extends si{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qa,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.combine=uo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class u_ extends si{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Sg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class h_ extends si{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const sa={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(kl(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!kl(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function kl(i){try{const e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class f_{constructor(e,t,n){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const p=c[f],g=c[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const d_=new f_;class Mo{constructor(e){this.manager=e!==void 0?e:d_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}}Mo.DEFAULT_MATERIAL_NAME="__DEFAULT";const Si=new WeakMap;class p_ extends Mo{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=sa.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let f=Si.get(a);f===void 0&&(f=[],Si.set(a,f)),f.push({onLoad:t,onError:s})}return a}const o=hs("img");function l(){u(),t&&t(this);const f=Si.get(this)||[];for(let h=0;h<f.length;h++){const p=f[h];p.onLoad&&p.onLoad(this)}Si.delete(this),r.manager.itemEnd(e)}function c(f){u(),s&&s(f),sa.remove(`image:${e}`);const h=Si.get(this)||[];for(let p=0;p<h.length;p++){const g=h[p];g.onError&&g.onError(f)}Si.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),sa.add(`image:${e}`,o),r.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}}class Eu extends Mo{constructor(e){super(e)}load(e,t,n,s){const r=new bt,a=new p_(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class yu extends Tt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const ra=new Ze,zl=new z,Gl=new z;class m_{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Oe(512,512),this.mapType=Gt,this.map=null,this.mapPass=null,this.matrix=new Ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fs,this._frameExtents=new Oe(1,1),this._viewportCount=1,this._viewports=[new at(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;zl.setFromMatrixPosition(e.matrixWorld),t.position.copy(zl),Gl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Gl),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){ra.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(ra,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===us||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(ra)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const qs=new z,Ys=new Fi,rn=new z;class bu extends Tt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ze,this.projectionMatrix=new Ze,this.projectionMatrixInverse=new Ze,this.coordinateSystem=tn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(qs,Ys,rn),rn.x===1&&rn.y===1&&rn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(qs,Ys,rn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(qs,Ys,rn),rn.x===1&&rn.y===1&&rn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(qs,Ys,rn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Nn=new z,Hl=new Oe,Vl=new Oe;class zt extends bu{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=$a*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ir*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $a*2*Math.atan(Math.tan(ir*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Nn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Nn.x,Nn.y).multiplyScalar(-e/Nn.z),Nn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Nn.x,Nn.y).multiplyScalar(-e/Nn.z)}getViewSize(e,t){return this.getViewBounds(e,Hl,Vl),t.subVectors(Vl,Hl)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ir*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class g_ extends m_{constructor(){super(new zt(90,1,.5,500)),this.isPointLightShadow=!0}}class Tu extends yu{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new g_}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class __ extends bu{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class wu extends yu{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Mi=-90,Ai=1;class ja extends Tt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new zt(Mi,Ai,e,t);s.layers=this.layers,this.add(s);const r=new zt(Mi,Ai,e,t);r.layers=this.layers,this.add(r);const a=new zt(Mi,Ai,e,t);a.layers=this.layers,this.add(a);const o=new zt(Mi,Ai,e,t);o.layers=this.layers,this.add(o);const l=new zt(Mi,Ai,e,t);l.layers=this.layers,this.add(l);const c=new zt(Mi,Ai,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===tn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===us)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const S=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=S,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(f,h,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class v_ extends zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}function Wl(i,e,t,n){const s=x_(n);switch(t){case jc:return i*e;case mo:return i*e/s.components*s.byteLength;case go:return i*e/s.components*s.byteLength;case $n:return i*e*2/s.components*s.byteLength;case _o:return i*e*2/s.components*s.byteLength;case eu:return i*e*3/s.components*s.byteLength;case ln:return i*e*4/s.components*s.byteLength;case vo:return i*e*4/s.components*s.byteLength;case $s:case js:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case er:case tr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Aa:case ya:return Math.max(i,16)*Math.max(e,8)/4;case Ma:case Ea:return Math.max(i,8)*Math.max(e,8)/2;case ba:case Ta:case Ra:case Ca:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case wa:case or:case Pa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case La:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Da:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ia:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ua:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Na:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Fa:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Oa:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ba:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ka:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case za:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ga:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ha:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Va:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Wa:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Xa:case qa:case Ya:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Ka:case Za:return Math.ceil(i/4)*Math.ceil(e/4)*8;case lr:case Ja:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function x_(i){switch(i){case Gt:case Zc:return{byteLength:1,components:1};case cs:case Jc:case hn:return{byteLength:2,components:1};case fo:case po:return{byteLength:2,components:4};case un:case ho:case en:return{byteLength:4,components:1};case Qc:case $c:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:co}}));typeof window<"u"&&(window.__THREE__?Re("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=co);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ru(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function S_(i){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,f=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){const u=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,u);else{f.sort((p,g)=>p.start-g.start);let h=0;for(let p=1;p<f.length;p++){const g=f[h],S=f[p];S.start<=g.start+g.count+1?g.count=Math.max(g.count,S.start+S.count-g.start):(++h,f[h]=S)}f.length=h+1;for(let p=0,g=f.length;p<g;p++){const S=f[p];i.bufferSubData(c,S.start*u.BYTES_PER_ELEMENT,u,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var M_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,A_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,E_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,y_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,b_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,T_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,w_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,R_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,C_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,P_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,L_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,D_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,I_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,U_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,N_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,F_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,O_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,B_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,k_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,z_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,G_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,H_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,V_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,W_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,X_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,q_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Y_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,K_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Z_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,J_="gl_FragColor = linearToOutputTexel( gl_FragColor );",Q_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,j_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,e0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,t0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,n0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,i0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,s0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,r0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,a0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,o0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,l0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,c0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,u0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,h0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,f0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,d0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,p0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,m0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,g0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,v0=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,x0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,S0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,M0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,A0=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,E0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,y0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,b0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,T0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,w0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,R0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,C0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,P0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,L0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,D0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,I0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,U0=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,N0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,F0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,O0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,B0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,k0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,z0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,G0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,H0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,V0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,W0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,X0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,q0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Y0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,K0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Z0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,J0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Q0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,j0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ev=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,iv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,sv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,rv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,av=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ov=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,lv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,uv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,pv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,mv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,gv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_v=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,xv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Sv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Mv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Av=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ev=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,wv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Rv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Cv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Pv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Lv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Iv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Uv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Nv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ov=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,kv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Gv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Hv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Xv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Zv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Jv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$v=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ke={alphahash_fragment:M_,alphahash_pars_fragment:A_,alphamap_fragment:E_,alphamap_pars_fragment:y_,alphatest_fragment:b_,alphatest_pars_fragment:T_,aomap_fragment:w_,aomap_pars_fragment:R_,batching_pars_vertex:C_,batching_vertex:P_,begin_vertex:L_,beginnormal_vertex:D_,bsdfs:I_,iridescence_fragment:U_,bumpmap_pars_fragment:N_,clipping_planes_fragment:F_,clipping_planes_pars_fragment:O_,clipping_planes_pars_vertex:B_,clipping_planes_vertex:k_,color_fragment:z_,color_pars_fragment:G_,color_pars_vertex:H_,color_vertex:V_,common:W_,defaultnormal_vertex:X_,displacementmap_pars_vertex:q_,displacementmap_vertex:Y_,emissivemap_fragment:K_,emissivemap_pars_fragment:Z_,colorspace_fragment:J_,colorspace_pars_fragment:Q_,envmap_fragment:$_,envmap_common_pars_fragment:j_,envmap_pars_fragment:e0,envmap_pars_vertex:t0,envmap_physical_pars_fragment:f0,envmap_vertex:n0,fog_vertex:i0,fog_pars_vertex:s0,fog_fragment:r0,fog_pars_fragment:a0,gradientmap_pars_fragment:o0,lightmap_pars_fragment:l0,lights_lambert_fragment:c0,lights_lambert_pars_fragment:u0,lights_pars_begin:h0,lights_toon_fragment:d0,lights_toon_pars_fragment:p0,lights_phong_fragment:m0,lights_phong_pars_fragment:g0,lights_physical_fragment:_0,lights_physical_pars_fragment:v0,lights_fragment_begin:x0,lights_fragment_maps:S0,lights_fragment_end:M0,lightprobes_pars_fragment:A0,logdepthbuf_fragment:E0,logdepthbuf_pars_fragment:y0,logdepthbuf_pars_vertex:b0,logdepthbuf_vertex:T0,map_fragment:w0,map_pars_fragment:R0,map_particle_fragment:C0,map_particle_pars_fragment:P0,metalnessmap_fragment:L0,metalnessmap_pars_fragment:D0,morphinstance_vertex:I0,morphcolor_vertex:U0,morphnormal_vertex:N0,morphtarget_pars_vertex:F0,morphtarget_vertex:O0,normal_fragment_begin:B0,normal_fragment_maps:k0,normal_pars_fragment:z0,normal_pars_vertex:G0,normal_vertex:H0,normalmap_pars_fragment:V0,clearcoat_normal_fragment_begin:W0,clearcoat_normal_fragment_maps:X0,clearcoat_pars_fragment:q0,iridescence_pars_fragment:Y0,opaque_fragment:K0,packing:Z0,premultiplied_alpha_fragment:J0,project_vertex:Q0,dithering_fragment:$0,dithering_pars_fragment:j0,roughnessmap_fragment:ev,roughnessmap_pars_fragment:tv,shadowmap_pars_fragment:nv,shadowmap_pars_vertex:iv,shadowmap_vertex:sv,shadowmask_pars_fragment:rv,skinbase_vertex:av,skinning_pars_vertex:ov,skinning_vertex:lv,skinnormal_vertex:cv,specularmap_fragment:uv,specularmap_pars_fragment:hv,tonemapping_fragment:fv,tonemapping_pars_fragment:dv,transmission_fragment:pv,transmission_pars_fragment:mv,uv_pars_fragment:gv,uv_pars_vertex:_v,uv_vertex:vv,worldpos_vertex:xv,background_vert:Sv,background_frag:Mv,backgroundCube_vert:Av,backgroundCube_frag:Ev,cube_vert:yv,cube_frag:bv,depth_vert:Tv,depth_frag:wv,distance_vert:Rv,distance_frag:Cv,equirect_vert:Pv,equirect_frag:Lv,linedashed_vert:Dv,linedashed_frag:Iv,meshbasic_vert:Uv,meshbasic_frag:Nv,meshlambert_vert:Fv,meshlambert_frag:Ov,meshmatcap_vert:Bv,meshmatcap_frag:kv,meshnormal_vert:zv,meshnormal_frag:Gv,meshphong_vert:Hv,meshphong_frag:Vv,meshphysical_vert:Wv,meshphysical_frag:Xv,meshtoon_vert:qv,meshtoon_frag:Yv,points_vert:Kv,points_frag:Zv,shadow_vert:Jv,shadow_frag:Qv,sprite_vert:$v,sprite_frag:jv},de={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new De}},envmap:{envMap:{value:null},envMapRotation:{value:new De},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new De}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new De}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new De},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new De},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new De},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new De}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new De}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new De}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0},uvTransform:{value:new De}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}}},on={basic:{uniforms:Lt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:Lt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new ze(0)},envMapIntensity:{value:1}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:Lt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:Lt([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:Lt([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new ze(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:Lt([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:Lt([de.points,de.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:Lt([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:Lt([de.common,de.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:Lt([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:Lt([de.sprite,de.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new De},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new De}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distance:{uniforms:Lt([de.common,de.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distance_vert,fragmentShader:ke.distance_frag},shadow:{uniforms:Lt([de.lights,de.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};on.physical={uniforms:Lt([on.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new De},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new De},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new De},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new De},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new De},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new De},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new De},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new De},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new De},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new De},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new De},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new De},anisotropyVector:{value:new Oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new De}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const Ks={r:0,b:0,g:0},ex=new Ze,Cu=new De;Cu.set(-1,0,0,0,1,0,0,0,1);function tx(i,e,t,n,s,r){const a=new ze(0);let o=s===!0?0:1,l,c,u=null,f=0,h=null;function p(M){let b=M.isScene===!0?M.background:null;if(b&&b.isTexture){const A=M.backgroundBlurriness>0;b=e.get(b,A)}return b}function g(M){let b=!1;const A=p(M);A===null?m(a,o):A&&A.isColor&&(m(A,1),b=!0);const C=i.xr.getEnvironmentBlendMode();C==="additive"?t.buffers.color.setClear(0,0,0,1,r):C==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function S(M,b){const A=p(b);A&&A.isCubeTexture?(c===void 0&&(c=new wt(new fn(1,1,1),new ei({name:"BackgroundCubeMaterial",uniforms:Ii(on.backgroundCube.uniforms),vertexShader:on.backgroundCube.vertexShader,fragmentShader:on.backgroundCube.fragmentShader,side:Ot,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,T,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=A,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(ex.makeRotationFromEuler(b.backgroundRotation)).transpose(),A.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Cu),c.material.toneMapped=We.getTransfer(A.colorSpace)!==$e,(u!==A||f!==A.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=A,f=A.version,h=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):A&&A.isTexture&&(l===void 0&&(l=new wt(new Rn(2,2),new ei({name:"BackgroundMaterial",uniforms:Ii(on.background.uniforms),vertexShader:on.background.vertexShader,fragmentShader:on.background.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=A,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=We.getTransfer(A.colorSpace)!==$e,A.matrixAutoUpdate===!0&&A.updateMatrix(),l.material.uniforms.uvTransform.value.copy(A.matrix),(u!==A||f!==A.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=A,f=A.version,h=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function m(M,b){M.getRGB(Ks,Au(i)),t.buffers.color.setClear(Ks.r,Ks.g,Ks.b,b,r)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,b=1){a.set(M),o=b,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,m(a,o)},render:g,addToRenderList:S,dispose:d}}function nx(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null);let r=s,a=!1;function o(L,U,G,w,k){let X=!1;const H=f(L,w,G,U);r!==H&&(r=H,c(r.object)),X=p(L,w,G,k),X&&g(L,w,G,k),k!==null&&e.update(k,i.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,A(L,U,G,w),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return i.createVertexArray()}function c(L){return i.bindVertexArray(L)}function u(L){return i.deleteVertexArray(L)}function f(L,U,G,w){const k=w.wireframe===!0;let X=n[U.id];X===void 0&&(X={},n[U.id]=X);const H=L.isInstancedMesh===!0?L.id:0;let j=X[H];j===void 0&&(j={},X[H]=j);let W=j[G.id];W===void 0&&(W={},j[G.id]=W);let Z=W[k];return Z===void 0&&(Z=h(l()),W[k]=Z),Z}function h(L){const U=[],G=[],w=[];for(let k=0;k<t;k++)U[k]=0,G[k]=0,w[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:G,attributeDivisors:w,object:L,attributes:{},index:null}}function p(L,U,G,w){const k=r.attributes,X=U.attributes;let H=0;const j=G.getAttributes();for(const W in j)if(j[W].location>=0){const ee=k[W];let Me=X[W];if(Me===void 0&&(W==="instanceMatrix"&&L.instanceMatrix&&(Me=L.instanceMatrix),W==="instanceColor"&&L.instanceColor&&(Me=L.instanceColor)),ee===void 0||ee.attribute!==Me||Me&&ee.data!==Me.data)return!0;H++}return r.attributesNum!==H||r.index!==w}function g(L,U,G,w){const k={},X=U.attributes;let H=0;const j=G.getAttributes();for(const W in j)if(j[W].location>=0){let ee=X[W];ee===void 0&&(W==="instanceMatrix"&&L.instanceMatrix&&(ee=L.instanceMatrix),W==="instanceColor"&&L.instanceColor&&(ee=L.instanceColor));const Me={};Me.attribute=ee,ee&&ee.data&&(Me.data=ee.data),k[W]=Me,H++}r.attributes=k,r.attributesNum=H,r.index=w}function S(){const L=r.newAttributes;for(let U=0,G=L.length;U<G;U++)L[U]=0}function m(L){d(L,0)}function d(L,U){const G=r.newAttributes,w=r.enabledAttributes,k=r.attributeDivisors;G[L]=1,w[L]===0&&(i.enableVertexAttribArray(L),w[L]=1),k[L]!==U&&(i.vertexAttribDivisor(L,U),k[L]=U)}function M(){const L=r.newAttributes,U=r.enabledAttributes;for(let G=0,w=U.length;G<w;G++)U[G]!==L[G]&&(i.disableVertexAttribArray(G),U[G]=0)}function b(L,U,G,w,k,X,H){H===!0?i.vertexAttribIPointer(L,U,G,k,X):i.vertexAttribPointer(L,U,G,w,k,X)}function A(L,U,G,w){S();const k=w.attributes,X=G.getAttributes(),H=U.defaultAttributeValues;for(const j in X){const W=X[j];if(W.location>=0){let Z=k[j];if(Z===void 0&&(j==="instanceMatrix"&&L.instanceMatrix&&(Z=L.instanceMatrix),j==="instanceColor"&&L.instanceColor&&(Z=L.instanceColor)),Z!==void 0){const ee=Z.normalized,Me=Z.itemSize,Ie=e.get(Z);if(Ie===void 0)continue;const J=Ie.buffer,pe=Ie.type,ve=Ie.bytesPerElement,be=pe===i.INT||pe===i.UNSIGNED_INT||Z.gpuType===ho;if(Z.isInterleavedBufferAttribute){const me=Z.data,Ne=me.isInterleavedBuffer===!0?me.stride:me.itemSize,lt=Z.offset;if(me.isInstancedInterleavedBuffer||me.isInstancedBufferAttribute){for(let we=0;we<W.locationSize;we++)d(W.location+we,me.meshPerAttribute);L.isInstancedMesh!==!0&&w._maxInstanceCount===void 0&&(w._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let we=0;we<W.locationSize;we++)m(W.location+we);i.bindBuffer(i.ARRAY_BUFFER,J);for(let we=0;we<W.locationSize;we++)b(W.location+we,Me/W.locationSize,pe,ee,Ne*ve,(lt+Me/W.locationSize*we)*ve,be)}else{if(Z.isInstancedBufferAttribute){for(let me=0;me<W.locationSize;me++)d(W.location+me,Z.meshPerAttribute);L.isInstancedMesh!==!0&&w._maxInstanceCount===void 0&&(w._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let me=0;me<W.locationSize;me++)m(W.location+me);i.bindBuffer(i.ARRAY_BUFFER,J);for(let me=0;me<W.locationSize;me++)b(W.location+me,Me/W.locationSize,pe,ee,Me*ve,Me/W.locationSize*me*ve,be)}}else if(H!==void 0){const ee=H[j];if(ee!==void 0)switch(ee.length){case 2:i.vertexAttrib2fv(W.location,ee);break;case 3:i.vertexAttrib3fv(W.location,ee);break;case 4:i.vertexAttrib4fv(W.location,ee);break;default:i.vertexAttrib1fv(W.location,ee)}}}}M()}function C(){N();for(const L in n){const U=n[L];for(const G in U){const w=U[G];for(const k in w){const X=w[k];for(const H in X)u(X[H].object),delete X[H];delete w[k]}}delete n[L]}}function T(L){if(n[L.id]===void 0)return;const U=n[L.id];for(const G in U){const w=U[G];for(const k in w){const X=w[k];for(const H in X)u(X[H].object),delete X[H];delete w[k]}}delete n[L.id]}function _(L){for(const U in n){const G=n[U];for(const w in G){const k=G[w];if(k[L.id]===void 0)continue;const X=k[L.id];for(const H in X)u(X[H].object),delete X[H];delete k[L.id]}}}function E(L){for(const U in n){const G=n[U],w=L.isInstancedMesh===!0?L.id:0,k=G[w];if(k!==void 0){for(const X in k){const H=k[X];for(const j in H)u(H[j].object),delete H[j];delete k[X]}delete G[w],Object.keys(G).length===0&&delete n[U]}}}function N(){R(),a=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:N,resetDefaultState:R,dispose:C,releaseStatesOfGeometry:T,releaseStatesOfObject:E,releaseStatesOfProgram:_,initAttributes:S,enableAttribute:m,disableUnusedAttributes:M}}function ix(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let p=0;p<u;p++)h+=c[p];t.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function sx(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const _=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(_){return!(_!==ln&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){const E=_===hn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==Gt&&_!==en&&!E&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(Re("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=t.logarithmicDepthBuffer===!0&&f===!1;t.reversedDepthBuffer===!0&&f===!1&&Re("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&f===!0&&Re("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),A=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:S,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:M,maxVaryings:b,maxFragmentUniforms:A,maxSamples:C,samples:T}}function rx(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new Fn,o=new De,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||n!==0||s;return s=h,n=f.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,p){const g=f.clippingPlanes,S=f.clipIntersection,m=f.clipShadows,d=i.get(f);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const M=r?0:n,b=M*4;let A=d.clippingState||null;l.value=A,A=u(g,h,b,p);for(let C=0;C!==b;++C)A[C]=t[C];d.clippingState=A,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,p,g){const S=f!==null?f.length:0;let m=null;if(S!==0){if(m=l.value,g!==!0||m===null){const d=p+S*4,M=h.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<d)&&(m=new Float32Array(d));for(let b=0,A=p;b!==S;++b,A+=4)a.copy(f[b]).applyMatrix4(M,o),a.normal.toArray(m,A),m[A+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,m}}class Ao extends cn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new xu(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new fn(5,5,5),r=new ei({name:"CubemapFromEquirect",uniforms:Ii(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ot,blending:wi});r.uniforms.tEquirect.value=t;const a=new wt(s,r),o=t.minFilter;return t.minFilter===Bn&&(t.minFilter=Ft),new ja(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}const Xl=256,ax=3,ox=20,Pu=256,Lu=16,lx=3,cx=new z,ux=new ze;class gr{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new ja(1,10,null),this._boxMesh=new wt(new fn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=cx}=r,l=this._renderer;this._setSize(a);const c=this._allocateTarget(),u=this._getSourceTarget(!0);t>0&&(u.texture.mipmapsAutoUpdate=!1);const f=l.autoClear,h=l.autoClearColor,p=l.autoClearDepth,g=l.autoClearStencil,S=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,S===null&&(e.background=l.getClearColor(ux));const m=new ja(n,s,u);return m.position.copy(o),m.update(l,e),l.autoClear=f,l.autoClearColor=h,l.autoClearDepth=p,l.autoClearStencil=g,e.background=S,t>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Xl,Ig(e))}_fromTexture(e,t){e.mapping===Pi||e.mapping===os?this._setSize(e.image.length===0?Xl:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){const e=this._cubeSize,t=ql(e,!1,!1),n=Math.log2(e)-ax;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=ql(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){const s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;const a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Pi||e.mapping===os?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kl()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Yl()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=hx(),this._integrationMaterial=fx());const t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Lu);for(let a=0;a<=n;a++){const o=gr.lodToRoughness(a,n);if(a>n-lx)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{const l=o>0?Math.log2(t)+.5*Math.log2(6/(Pu*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=dx());const n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}}function ql(i,e,t){return new Ao(i,{minFilter:Bn,generateMipmaps:e,type:hn,colorSpace:cr,depthBuffer:t})}function ms(i,e,t){return new ei({name:i,uniforms:e,vertexShader:ke.cube_vert,fragmentShader:t,side:Ot,blending:wi,depthTest:!1,depthWrite:!1})}function hx(){return ms("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Pu}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function fx(){return ms("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Lu}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function dx(){return ms("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${ox}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Yl(){return ms("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Kl(){return ms("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function px(i){let e=new WeakMap,t=new WeakMap,n=null;function s(h,p=!1){return h==null?null:p?a(h):r(h)}function r(h){if(h&&h.isTexture){const p=h.mapping;if(p===Pr||p===Lr)if(e.has(h)){const g=e.get(h).texture;return o(g,h.mapping)}else{const g=h.image;if(g&&g.height>0){const S=new Ao(g.height);return S.fromEquirectangularTexture(i,h),e.set(h,S),h.addEventListener("dispose",c),o(S.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture&&h.isPMREMTexture!==!0){const p=h.mapping,g=p===Pr||p===Lr,S=p===Pi||p===os;if(g||S){let m=t.get(h);const d=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==d)return n===null&&(n=new gr(i)),m=g?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{const M=h.image;return g&&M&&M.height>0||S&&M&&l(M)?(n===null&&(n=new gr(i)),m=g?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function o(h,p){return p===Pr?h.mapping=Pi:p===Lr&&(h.mapping=os),h}function l(h){let p=0;const g=6;for(let S=0;S<g;S++)h[S]!==void 0&&p++;return p===g}function c(h){const p=h.target;p.removeEventListener("dispose",c);const g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function u(h){const p=h.target;p.removeEventListener("dispose",u);const g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function mx(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&nr("WebGLRenderer: "+n+" extension not supported."),s}}}function gx(i,e,t,n){const s={},r=new WeakMap,a=new FinalizationRegistry(g=>delete s[g]);function o(g){l(g.target)}function l(g){g.index!==null&&e.remove(g.index);for(const m in g.attributes)e.remove(g.attributes[m]);g.removeEventListener("dispose",o),delete s[g.id],a.unregister(g);const S=r.get(g);S&&(e.remove(S),r.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function c(g,S){return s[S.id]!==void 0||(S.addEventListener("dispose",o),s[S.id]=new WeakRef(S),a.register(S,S.id,S),t.memory.geometries++),S}function u(g){const S=g.attributes;for(const m in S)e.update(S[m],i.ARRAY_BUFFER)}function f(g){const S=g.index,m=g.attributes.position;let d=0;if(m===void 0)return;const M=S!==null?S.array.length:m.array.length/3-1,b=m.count>=65535?du:fu,A=new b(Math.ceil(M/3)*6,1),C=A.array;if(S!==null){const _=S.array;d=S.version;for(let E=0,N=0;E<M;E+=3){const R=_[E+0],L=_[E+1],U=_[E+2];C[N++]=R,C[N++]=L,C[N++]=L,C[N++]=U,C[N++]=U,C[N++]=R}}else{d=m.version;for(let _=0,E=0;_<M;_+=3){const N=_+0,R=_+1,L=_+2;C[E++]=N,C[E++]=R,C[E++]=R,C[E++]=L,C[E++]=L,C[E++]=N}}A.version=d;const T=r.get(g);T&&e.remove(T),r.set(g,A)}function h(g){const S=r.get(g);if(S){const m=g.index;m!==null&&S.version<m.version&&f(g)}else f(g);return r.get(g)}function p(){for(const g in s){const S=s[g].deref();S!==void 0&&l(S)}}return{get:c,update:u,getWireframeAttribute:h,dispose:p}}function _x(i,e,t){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,h){i.drawElements(n,h,r,f*a),t.update(h,n,1)}function c(f,h,p){p!==0&&(i.drawElementsInstanced(n,h,r,f*a,p),t.update(h,n,p))}function u(f,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,f,0,p);let S=0;for(let m=0;m<p;m++)S+=h[m];t.update(S,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function vx(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Ye("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function xx(i,e,t){const n=new WeakMap,s=new at;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let h=n.get(o);if(h===void 0||h.count!==f){let N=function(){_.dispose(),n.delete(o),o.removeEventListener("dispose",N)};h!==void 0&&h.texture.dispose();const p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,S=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let b=0;p===!0&&(b=1),g===!0&&(b=2),S===!0&&(b=3);let A=o.attributes.position.count*b,C=1;A>e.maxTextureSize&&(C=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const T=new Float32Array(A*C*4*f),_=new lu(T,A,C,f);_.type=en,_.needsUpdate=!0;const E=b*4;for(let R=0;R<f;R++){const L=m[R],U=d[R],G=M[R],w=A*C*4*R;for(let k=0;k<L.count;k++){const X=k*E;p===!0&&(s.fromBufferAttribute(L,k),T[w+X+0]=s.x,T[w+X+1]=s.y,T[w+X+2]=s.z,T[w+X+3]=0),g===!0&&(s.fromBufferAttribute(U,k),T[w+X+4]=s.x,T[w+X+5]=s.y,T[w+X+6]=s.z,T[w+X+7]=0),S===!0&&(s.fromBufferAttribute(G,k),T[w+X+8]=s.x,T[w+X+9]=s.y,T[w+X+10]=s.z,T[w+X+11]=G.itemSize===4?s.w:1)}}h={count:f,texture:_,size:new Oe(A,C)},n.set(o,h),o.addEventListener("dispose",N)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let p=0;for(let S=0;S<c.length;S++)p+=c[S];const g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function Sx(i,e,t,n,s){let r=new WeakMap;function a(c){const u=s.render.frame,f=c.geometry,h=e.get(c,f);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const p=c.skeleton;r.get(p)!==u&&(p.update(),r.set(p,u))}return h}function o(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const Mx={[Gc]:"LINEAR_TONE_MAPPING",[Hc]:"REINHARD_TONE_MAPPING",[Vc]:"CINEON_TONE_MAPPING",[Wc]:"ACES_FILMIC_TONE_MAPPING",[qc]:"AGX_TONE_MAPPING",[Yc]:"NEUTRAL_TONE_MAPPING",[Xc]:"CUSTOM_TONE_MAPPING"};function Ax(i,e,t,n,s,r){const a=new cn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null,c=null;const u=new dn;u.setAttribute("position",new Zt([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new Zt([0,2,0,0,2,0],2));const f=new c_({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new wt(u,f),p=new __(-1,1,1,-1,0,1);let g=null,S=null,m=!1,d,M=null,b=[],A=!1;this.setSize=function(C,T){a.setSize(C,T),o!==null&&o.setSize(C,T),l!==null&&l.setSize(C,T);for(let _=0;_<b.length;_++){const E=b[_];E.setSize&&E.setSize(C,T)}},this.setEffects=function(C){b=C,A=b.length>0&&b[0].isRenderPass===!0;const T=a.width,_=a.height;b.length>0&&o===null&&(o=new cn(T,_,{type:hn,depthBuffer:!1,stencilBuffer:!1}),l=new cn(T,_,{type:hn,depthBuffer:!1,stencilBuffer:!1}));const E=s===!0&&b.some(N=>N.needsDepthTexture===!0);E!==(a.depthTexture!==null)&&(E===!0&&c===null&&(c=new Di(T,_),r===!0&&(c.format=kn,c.type=Li)),a.dispose(),a.depthTexture=E?c:null,a.resolveDepthBuffer=E,a.storeMultisampledDepthBuffer=E);for(let N=0;N<b.length;N++){const R=b[N];R.setSize&&R.setSize(T,_),E&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(c)}},this.begin=function(C,T){if(m||C.toneMapping===yn&&b.length===0)return!1;if(M=T,T!==null){const _=T.width,E=T.height;(a.width!==_||a.height!==E)&&this.setSize(_,E)}return A===!1&&C.setRenderTarget(a),d=C.toneMapping,C.toneMapping=yn,!0},this.hasRenderPass=function(){return A},this.end=function(C,T){C.toneMapping=d,m=!0;let _=a,E=o;for(let N=0;N<b.length;N++){const R=b[N];R.enabled!==!1&&(R.render(C,E,_,T),R.needsSwap!==!1&&(_=E,E=E===o?l:o))}if(g!==C.outputColorSpace||S!==C.toneMapping){g=C.outputColorSpace,S=C.toneMapping,f.defines={},We.getTransfer(g)===$e&&(f.defines.SRGB_TRANSFER="");const N=Mx[S];N&&(f.defines[N]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=_.texture,C.setRenderTarget(M),C.render(h,p),M=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),u.dispose(),f.dispose()}}const Du=new bt,Iu=new Di(1,1),Uu=new Su(1),Nu=new lu,Fu=new kg,Ou=new xu,Zl=[],Jl=[],Ql=new Float32Array(16),$l=new Float32Array(9),jl=new Float32Array(4);function ki(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Zl[s];if(r===void 0&&(r=new Float32Array(s),Zl[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function dt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function pt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Er(i,e){let t=Jl[e];t===void 0&&(t=new Int32Array(e),Jl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Ex(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function yx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;i.uniform2fv(this.addr,e),pt(t,e)}}function bx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dt(t,e))return;i.uniform3fv(this.addr,e),pt(t,e)}}function Tx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;i.uniform4fv(this.addr,e),pt(t,e)}}function wx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),pt(t,e)}else{if(dt(t,n))return;jl.set(n),i.uniformMatrix2fv(this.addr,!1,jl),pt(t,n)}}function Rx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),pt(t,e)}else{if(dt(t,n))return;$l.set(n),i.uniformMatrix3fv(this.addr,!1,$l),pt(t,n)}}function Cx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),pt(t,e)}else{if(dt(t,n))return;Ql.set(n),i.uniformMatrix4fv(this.addr,!1,Ql),pt(t,n)}}function Px(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Lx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;i.uniform2iv(this.addr,e),pt(t,e)}}function Dx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;i.uniform3iv(this.addr,e),pt(t,e)}}function Ix(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;i.uniform4iv(this.addr,e),pt(t,e)}}function Ux(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Nx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;i.uniform2uiv(this.addr,e),pt(t,e)}}function Fx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;i.uniform3uiv(this.addr,e),pt(t,e)}}function Ox(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;i.uniform4uiv(this.addr,e),pt(t,e)}}function yr(i){return i.version===0&&(i.compareFunction=iu,i.needsUpdate=!0),i}function Bx(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=yr(Iu):r=Du,t.setTexture2D(e||r,s)}function kx(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Fu,s)}function zx(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=yr(Uu):r=Ou,t.setTextureCube(e||r,s)}function Gx(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Nu,s)}function Hx(i){switch(i){case 5126:return Ex;case 35664:return yx;case 35665:return bx;case 35666:return Tx;case 35674:return wx;case 35675:return Rx;case 35676:return Cx;case 5124:case 35670:return Px;case 35667:case 35671:return Lx;case 35668:case 35672:return Dx;case 35669:case 35673:return Ix;case 5125:return Ux;case 36294:return Nx;case 36295:return Fx;case 36296:return Ox;case 35678:case 36198:case 36298:case 36306:case 35682:return Bx;case 35679:case 36299:case 36307:return kx;case 35680:case 36300:case 36308:case 36293:return zx;case 36289:case 36303:case 36311:case 36292:return Gx}}function Vx(i,e){i.uniform1fv(this.addr,e)}function Wx(i,e){const t=ki(e,this.size,2);i.uniform2fv(this.addr,t)}function Xx(i,e){const t=ki(e,this.size,3);i.uniform3fv(this.addr,t)}function qx(i,e){const t=ki(e,this.size,4);i.uniform4fv(this.addr,t)}function Yx(i,e){const t=ki(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Kx(i,e){const t=ki(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Zx(i,e){const t=ki(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Jx(i,e){i.uniform1iv(this.addr,e)}function Qx(i,e){i.uniform2iv(this.addr,e)}function $x(i,e){i.uniform3iv(this.addr,e)}function jx(i,e){i.uniform4iv(this.addr,e)}function eS(i,e){i.uniform1uiv(this.addr,e)}function tS(i,e){i.uniform2uiv(this.addr,e)}function nS(i,e){i.uniform3uiv(this.addr,e)}function iS(i,e){i.uniform4uiv(this.addr,e)}function sS(i,e,t){const n=this.cache,s=e.length,r=Er(t,s);dt(n,r)||(i.uniform1iv(this.addr,r),pt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=yr(Iu):a=Du;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function rS(i,e,t){const n=this.cache,s=e.length,r=Er(t,s);dt(n,r)||(i.uniform1iv(this.addr,r),pt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Fu,r[a])}function aS(i,e,t){const n=this.cache,s=e.length,r=Er(t,s);dt(n,r)||(i.uniform1iv(this.addr,r),pt(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=yr(Uu):a=Ou;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function oS(i,e,t){const n=this.cache,s=e.length,r=Er(t,s);dt(n,r)||(i.uniform1iv(this.addr,r),pt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Nu,r[a])}function lS(i){switch(i){case 5126:return Vx;case 35664:return Wx;case 35665:return Xx;case 35666:return qx;case 35674:return Yx;case 35675:return Kx;case 35676:return Zx;case 5124:case 35670:return Jx;case 35667:case 35671:return Qx;case 35668:case 35672:return $x;case 35669:case 35673:return jx;case 5125:return eS;case 36294:return tS;case 36295:return nS;case 36296:return iS;case 35678:case 36198:case 36298:case 36306:case 35682:return sS;case 35679:case 36299:case 36307:return rS;case 35680:case 36300:case 36308:case 36293:return aS;case 36289:case 36303:case 36311:case 36292:return oS}}class cS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Hx(t.type)}}class uS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=lS(t.type)}}class hS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const aa=/(\w+)(\])?(\[|\.)?/g;function ec(i,e){i.seq.push(e),i.map[e.id]=e}function fS(i,e,t){const n=i.name,s=n.length;for(aa.lastIndex=0;;){const r=aa.exec(n),a=aa.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){ec(t,c===void 0?new cS(o,i,e):new uS(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new hS(o),ec(t,f)),t=f}}}class sr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);fS(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function tc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const dS=37297;let pS=0;function mS(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const nc=new De;function gS(i){We._getMatrix(nc,We.workingColorSpace,i);const e=`mat3( ${nc.elements.map(t=>t.toFixed(4))} )`;switch(We.getTransfer(i)){case ur:return[e,"LinearTransferOETF"];case $e:return[e,"sRGBTransferOETF"];default:return Re("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function ic(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+mS(i.getShaderSource(e),o)}else return r}function _S(i,e){const t=gS(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const vS={[Gc]:"Linear",[Hc]:"Reinhard",[Vc]:"Cineon",[Wc]:"ACESFilmic",[qc]:"AgX",[Yc]:"Neutral",[Xc]:"Custom"};function xS(i,e){const t=vS[e];return t===void 0?(Re("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Zs=new z;function SS(){We.getLuminanceCoefficients(Zs);const i=Zs.x.toFixed(4),e=Zs.y.toFixed(4),t=Zs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function MS(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ns).join(`
`)}function AS(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ES(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function ns(i){return i!==""}function sc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function rc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const yS=/^[ \t]*#include +<([\w\d./]+)>/gm;function eo(i){return i.replace(yS,bS)}function bS(i,e){const t=ke[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return eo(t)}const TS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ac(i){return i.replace(TS,wS)}function wS(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function oc(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const RS={[Qs]:"SHADOWMAP_TYPE_PCF",[ts]:"SHADOWMAP_TYPE_VSM"};function CS(i){return RS[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const PS={[os]:"ENVMAP_MODE_REFRACTION"};function LS(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":PS[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const DS={[uo]:"ENVMAP_BLENDING_MULTIPLY",[_g]:"ENVMAP_BLENDING_MIX",[vg]:"ENVMAP_BLENDING_ADD"};function IS(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":DS[i.combine]||"ENVMAP_BLENDING_NONE"}function US(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=CS(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=LS(t),f=IS(t),h=MS(t),p=AS(r),g=s.createProgram();let S,m,d=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(ns).join(`
`),S.length>0&&(S+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(ns).join(`
`),m.length>0&&(m+=`
`)):(S=[oc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ns).join(`
`),m=[oc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==yn?"#define TONE_MAPPING":"",t.toneMapping!==yn?ke.tonemapping_pars_fragment:"",t.toneMapping!==yn?xS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,_S("linearToOutputTexel",t.outputColorSpace),SS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ns).join(`
`)),a=eo(a),a=sc(a,t),a=rc(a,t),o=eo(o),o=sc(o,t),o=rc(o,t),a=ac(a),o=ac(o),t.isRawShaderMaterial!==!0&&(d=`#version 300 es
`,S=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,m=["#define varying in",t.glslVersion===ul?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ul?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const M=d+S+a,b=d+m+o,A=tc(s,s.VERTEX_SHADER,M),C=tc(s,s.FRAGMENT_SHADER,b);s.attachShader(g,A),s.attachShader(g,C),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function T(R){if(i.debug.checkShaderErrors){const L=s.getProgramInfoLog(g)||"",U=s.getShaderInfoLog(A)||"",G=s.getShaderInfoLog(C)||"",w=L.trim(),k=U.trim(),X=G.trim();let H=!0,j=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,A,C);else{const W=ic(s,A,"vertex"),Z=ic(s,C,"fragment");Ye("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+w+`
`+W+`
`+Z)}else w!==""?Re("WebGLProgram: Program Info Log:",w):(k===""||X==="")&&(j=!1);j&&(R.diagnostics={runnable:H,programLog:w,vertexShader:{log:k,prefix:S},fragmentShader:{log:X,prefix:m}})}s.deleteShader(A),s.deleteShader(C),_=new sr(s,g),E=ES(s,g)}let _;this.getUniforms=function(){return _===void 0&&T(this),_};let E;this.getAttributes=function(){return E===void 0&&T(this),E};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(g,dS)),N},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=pS++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=A,this.fragmentShader=C,this}let NS=0;class FS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new OS(e),t.set(e,n)),n}}class OS{constructor(e){this.id=NS++,this.code=e,this.usedTimes=0}}function BS(i){return i===$n||i===or||i===lr}function kS(i,e,t,n,s,r){const a=new cu,o=new FS,l=new Set,c=[],u=new Map,f=n.logarithmicDepthBuffer,h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return l.add(_),_===0?"uv":`uv${_}`}function g(_,E,N,R,L,U){const G=R.fog,w=L.geometry,k=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?R.environment:null,X=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,H=e.get(_.envMap||k,X),j=h[_.type];let W=n.precision;_.precision!==null&&(W=n.getMaxPrecision(_.precision),W!==_.precision&&Re("WebGLProgram.getParameters:",_.precision,"not supported, using",W,"instead."));const Z=w.morphAttributes.position||w.morphAttributes.normal||w.morphAttributes.color,ee=Z!==void 0?Z.length:0;let Me=0;w.morphAttributes.position!==void 0&&(Me=1),w.morphAttributes.normal!==void 0&&(Me=2),w.morphAttributes.color!==void 0&&(Me=3);let Ie,J,pe,ve;if(j){const fe=on[j];Ie=fe.vertexShader,J=fe.fragmentShader}else{Ie=_.vertexShader,J=_.fragmentShader;const fe=o.getVertexShaderStage(_),Qe=o.getFragmentShaderStage(_);o.update(_,fe,Qe),pe=fe.id,ve=Qe.id}const be=i.getRenderTarget(),me=i.state.buffers.depth.getReversed(),Ne=L.isInstancedMesh===!0,lt=L.isBatchedMesh===!0,we=!!_.map,Je=!!_.matcap,je=!!H,Ge=je&&H.isPMREMTexture===!0,xt=!!_.aoMap,ht=!!_.lightMap,Dt=!!_.bumpMap&&_.wireframe===!1,st=!!_.normalMap,sn=!!_.displacementMap,mt=!!_.emissiveMap,Wt=!!_.metalnessMap,Xt=!!_.roughnessMap,qt=_.anisotropy>0,I=_.clearcoat>0,Yt=_.diffuseRoughness>0,nt=_.dispersion>0,it=_.retroreflectivity>0,he=_.iridescence>0,ft=_.sheen>0,Te=_.transmission>0,Pe=qt&&!!_.anisotropyMap,y=I&&!!_.clearcoatMap,v=I&&!!_.clearcoatNormalMap,O=I&&!!_.clearcoatRoughnessMap,te=Yt&&!!_.diffuseRoughnessMap,$=he&&!!_.iridescenceMap,se=he&&!!_.iridescenceThicknessMap,ce=ft&&!!_.sheenColorMap,Y=ft&&!!_.sheenRoughnessMap,K=!!_.specularMap,ae=!!_.specularColorMap,P=!!_.specularIntensityMap,Q=Te&&!!_.transmissionMap,q=Te&&!!_.thicknessMap,oe=!!_.gradientMap,ie=!!_.alphaMap,re=_.alphaTest>0,Ee=!!_.alphaHash,Be=!!_.extensions;let ne=yn;_.toneMapped&&(be===null||be.isXRRenderTarget===!0)&&(ne=i.toneMapping);const ye=Ge?H.isCompressedCubeTexture?H.image[0].mipmaps:H.mipmaps:null,Fe={shaderID:j,shaderType:_.type,shaderName:_.name,vertexShader:Ie,fragmentShader:J,defines:_.defines,customVertexShaderID:pe,customFragmentShaderID:ve,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:W,batching:lt,batchingColor:lt&&L._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&L.instanceColor!==null,instancingMorph:Ne&&L.morphTexture!==null,outputColorSpace:be===null?i.outputColorSpace:be.isXRRenderTarget===!0?be.texture.colorSpace:We.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:we,matcap:Je,envMap:je,envMapMode:je&&H.mapping,envMapPMREM:Ge,envMapMaxLod:Ge?ye.length-1:null,envMapSize:Ge?ye[0].width:null,aoMap:xt,lightMap:ht,bumpMap:Dt,normalMap:st,displacementMap:sn,emissiveMap:mt,normalMapObjectSpace:st&&_.normalMapType===Mg,normalMapTangentSpace:st&&_.normalMapType===Qa,packedNormalMap:st&&_.normalMapType===Qa&&BS(_.normalMap.format),metalnessMap:Wt,roughnessMap:Xt,anisotropy:qt,anisotropyMap:Pe,clearcoat:I,clearcoatMap:y,clearcoatNormalMap:v,clearcoatRoughnessMap:O,diffuseRoughness:Yt,diffuseRoughnessMap:te,dispersion:nt,retroreflection:it,iridescence:he,iridescenceMap:$,iridescenceThicknessMap:se,sheen:ft,sheenColorMap:ce,sheenRoughnessMap:Y,specularMap:K,specularColorMap:ae,specularIntensityMap:P,transmission:Te,transmissionMap:Q,thicknessMap:q,gradientMap:oe,opaque:_.transparent===!1&&_.blending===ss&&_.alphaToCoverage===!1,alphaMap:ie,alphaTest:re,alphaHash:Ee,combine:_.combine,mapUv:we&&p(_.map.channel),aoMapUv:xt&&p(_.aoMap.channel),lightMapUv:ht&&p(_.lightMap.channel),bumpMapUv:Dt&&p(_.bumpMap.channel),normalMapUv:st&&p(_.normalMap.channel),displacementMapUv:sn&&p(_.displacementMap.channel),emissiveMapUv:mt&&p(_.emissiveMap.channel),metalnessMapUv:Wt&&p(_.metalnessMap.channel),roughnessMapUv:Xt&&p(_.roughnessMap.channel),anisotropyMapUv:Pe&&p(_.anisotropyMap.channel),clearcoatMapUv:y&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:v&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:O&&p(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:te&&p(_.diffuseRoughnessMap.channel),iridescenceMapUv:$&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:se&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:Y&&p(_.sheenRoughnessMap.channel),specularMapUv:K&&p(_.specularMap.channel),specularColorMapUv:ae&&p(_.specularColorMap.channel),specularIntensityMapUv:P&&p(_.specularIntensityMap.channel),transmissionMapUv:Q&&p(_.transmissionMap.channel),thicknessMapUv:q&&p(_.thicknessMap.channel),alphaMapUv:ie&&p(_.alphaMap.channel),vertexTangents:!!w.attributes.tangent&&(st||qt),vertexNormals:!!w.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!w.attributes.color&&w.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!w.attributes.uv&&(we||ie),fog:!!G,useFog:_.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||w.attributes.normal===void 0&&st===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:me,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:w.attributes.position!==void 0,morphTargets:w.morphAttributes.position!==void 0,morphNormals:w.morphAttributes.normal!==void 0,morphColors:w.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:Me,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:U.filter(fe=>fe.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:ne,decodeVideoTexture:we&&_.map.isVideoTexture===!0&&We.getTransfer(_.map.colorSpace)===$e,decodeVideoTextureEmissive:mt&&_.emissiveMap.isVideoTexture===!0&&We.getTransfer(_.emissiveMap.colorSpace)===$e,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===An,flipSided:_.side===Ot,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Be&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Be&&_.extensions.multiDraw===!0||lt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Fe.vertexUv1s=l.has(1),Fe.vertexUv2s=l.has(2),Fe.vertexUv3s=l.has(3),l.clear(),Fe}function S(_){const E=[];if(_.shaderID?E.push(_.shaderID):(E.push(_.customVertexShaderID),E.push(_.customFragmentShaderID)),_.defines!==void 0)for(const N in _.defines)E.push(N),E.push(_.defines[N]);return _.isRawShaderMaterial===!1&&(m(E,_),d(E,_),E.push(i.outputColorSpace)),E.push(_.customProgramCacheKey),E.join()}function m(_,E){_.push(E.precision),_.push(E.outputColorSpace),_.push(E.envMapMode),_.push(E.envMapPMREM),_.push(E.envMapMaxLod),_.push(E.envMapSize),_.push(E.mapUv),_.push(E.alphaMapUv),_.push(E.lightMapUv),_.push(E.aoMapUv),_.push(E.bumpMapUv),_.push(E.normalMapUv),_.push(E.displacementMapUv),_.push(E.emissiveMapUv),_.push(E.metalnessMapUv),_.push(E.roughnessMapUv),_.push(E.anisotropyMapUv),_.push(E.clearcoatMapUv),_.push(E.clearcoatNormalMapUv),_.push(E.clearcoatRoughnessMapUv),_.push(E.diffuseRoughnessMapUv),_.push(E.iridescenceMapUv),_.push(E.iridescenceThicknessMapUv),_.push(E.sheenColorMapUv),_.push(E.sheenRoughnessMapUv),_.push(E.specularMapUv),_.push(E.specularColorMapUv),_.push(E.specularIntensityMapUv),_.push(E.transmissionMapUv),_.push(E.thicknessMapUv),_.push(E.combine),_.push(E.fogExp2),_.push(E.sizeAttenuation),_.push(E.morphTargetsCount),_.push(E.numSunLights),_.push(E.numDirLights),_.push(E.numPointLights),_.push(E.numSpotLights),_.push(E.numSpotLightMaps),_.push(E.numHemiLights),_.push(E.numRectAreaLights),_.push(E.numSunLightShadows),_.push(E.numDirLightShadows),_.push(E.numPointLightShadows),_.push(E.numSpotLightShadows),_.push(E.numSpotLightShadowsWithMaps),_.push(E.numLightProbes),_.push(E.numLightProbeGrids),_.push(E.shadowMapType),_.push(E.toneMapping),_.push(E.numClippingPlanes),_.push(E.numClipIntersection),_.push(E.depthPacking)}function d(_,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.diffuseRoughness&&a.enable(25),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function M(_){const E=h[_.type];let N;if(E){const R=on[E];N=a_.clone(R.uniforms)}else N=_.uniforms;return N}function b(_,E){let N=u.get(E);return N!==void 0?++N.usedTimes:(N=new US(i,E,_,s),c.push(N),u.set(E,N)),N}function A(_){if(--_.usedTimes===0){const E=c.indexOf(_);c[E]=c[c.length-1],c.pop(),u.delete(_.cacheKey),_.destroy()}}function C(_){o.remove(_)}function T(){o.dispose()}return{getParameters:g,getProgramCacheKey:S,getUniforms:M,acquireProgram:b,releaseProgram:A,releaseShaderCache:C,programs:c,dispose:T}}function zS(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function GS(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function lc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function cc(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h){let p=0;return h.isInstancedMesh&&(p+=2),h.isSkinnedMesh&&(p+=1),p}function o(h,p,g,S,m,d){let M=i[e];return M===void 0?(M={id:h.id,object:h,geometry:p,material:g,materialVariant:a(h),groupOrder:S,renderOrder:h.renderOrder,z:m,group:d},i[e]=M):(M.id=h.id,M.object=h,M.geometry=p,M.material=g,M.materialVariant=a(h),M.groupOrder=S,M.renderOrder=h.renderOrder,M.z=m,M.group=d),e++,M}function l(h,p,g,S,m,d,M){M.reversedDepth===!0&&(m=-m);const b=o(h,p,g,S,m,d);g.transmission>0?n.push(b):g.transparent===!0?s.push(b):t.push(b)}function c(h,p,g,S,m,d){const M=o(h,p,g,S,m,d);g.transmission>0?n.unshift(M):g.transparent===!0?s.unshift(M):t.unshift(M)}function u(h,p){t.length>1&&t.sort(h||GS),n.length>1&&n.sort(p||lc),s.length>1&&s.sort(p||lc)}function f(){for(let h=e,p=i.length;h<p;h++){const g=i[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:f,sort:u}}function HS(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new cc,i.set(n,[a])):s>=r.length?(a=new cc,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function VS(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new z,color:new ze};break;case"SpotLight":t={position:new z,direction:new z,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":t={color:new ze,position:new z,halfWidth:new z,halfHeight:new z};break}return i[e.id]=t,t}}}function WS(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let XS=0;function qS(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function YS(i){const e=new VS,t=WS(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new z);const s=new z,r=new Ze,a=new Ze;function o(c){let u=0,f=0,h=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let p=0,g=0,S=0,m=0,d=0,M=0,b=0,A=0,C=0,T=0,_=0,E=0,N=0,R=0;c.sort(qS);for(let U=0,G=c.length;U<G;U++){const w=c[U],k=w.color,X=w.intensity,H=w.distance;let j=null;if(w.shadow&&w.shadow.map&&(w.shadow.map.texture.format===$n?j=w.shadow.map.texture:j=w.shadow.map.depthTexture||w.shadow.map.texture),w.isAmbientLight)u+=k.r*X,f+=k.g*X,h+=k.b*X;else if(w.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(w.sh.coefficients[W],X);R++}else if(w.isSunLight){const W=e.get(w);if(W.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const Z=w.shadow,ee=t.get(w);ee.shadowIntensity=Z.intensity,ee.shadowBias=Z.bias,ee.shadowNormalBias=Z.normalBias,ee.shadowRadius=Z.radius,ee.shadowMapSize.copy(Z.mapSize).multiply(Z.getFrameExtents()),n.sunShadow[g]=ee,n.sunShadowMap[g]=j;const Me=Z.getViewportCount();for(let Ie=0;Ie<Me;Ie++)n.sunShadowMatrix[S+Ie]=Z.getMatrix(Ie),n.sunShadowCascade[S+Ie]=Z._cascadeData[Ie];S+=Me,g++}n.sun[p]=W,p++}else if(w.isDirectionalLight){const W=e.get(w);if(W.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const Z=w.shadow,ee=t.get(w);ee.shadowIntensity=Z.intensity,ee.shadowBias=Z.bias,ee.shadowNormalBias=Z.normalBias,ee.shadowRadius=Z.radius,ee.shadowMapSize=Z.mapSize,n.directionalShadow[m]=ee,n.directionalShadowMap[m]=j,n.directionalShadowMatrix[m]=w.shadow.matrix,C++}n.directional[m]=W,m++}else if(w.isSpotLight){const W=e.get(w);W.position.setFromMatrixPosition(w.matrixWorld),W.color.copy(k).multiplyScalar(X),W.distance=H,W.coneCos=Math.cos(w.angle),W.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),W.decay=w.decay,n.spot[M]=W;const Z=w.shadow;if(w.map&&(n.spotLightMap[E]=w.map,E++,Z.updateMatrices(w),w.castShadow&&N++),n.spotLightMatrix[M]=Z.matrix,w.castShadow){const ee=t.get(w);ee.shadowIntensity=Z.intensity,ee.shadowBias=Z.bias,ee.shadowNormalBias=Z.normalBias,ee.shadowRadius=Z.radius,ee.shadowMapSize=Z.mapSize,n.spotShadow[M]=ee,n.spotShadowMap[M]=j,_++}M++}else if(w.isRectAreaLight){const W=e.get(w);W.color.copy(k).multiplyScalar(X),W.halfWidth.set(w.width*.5,0,0),W.halfHeight.set(0,w.height*.5,0),n.rectArea[b]=W,b++}else if(w.isPointLight){const W=e.get(w);if(W.color.copy(w.color).multiplyScalar(w.intensity),W.distance=w.distance,W.decay=w.decay,w.castShadow){const Z=w.shadow,ee=t.get(w);ee.shadowIntensity=Z.intensity,ee.shadowBias=Z.bias,ee.shadowNormalBias=Z.normalBias,ee.shadowRadius=Z.radius,ee.shadowMapSize=Z.mapSize,ee.shadowCameraNear=Z.camera.near,ee.shadowCameraFar=Z.camera.far,n.pointShadow[d]=ee,n.pointShadowMap[d]=j,n.pointShadowMatrix[d]=w.shadow.matrix,T++}n.point[d]=W,d++}else if(w.isHemisphereLight){const W=e.get(w);W.skyColor.copy(w.color).multiplyScalar(X),W.groundColor.copy(w.groundColor).multiplyScalar(X),n.hemi[A]=W,A++}}b>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=de.LTC_FLOAT_1,n.rectAreaLTC2=de.LTC_FLOAT_2):(n.rectAreaLTC1=de.LTC_HALF_1,n.rectAreaLTC2=de.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;const L=n.hash;(L.sunLength!==p||L.directionalLength!==m||L.pointLength!==d||L.spotLength!==M||L.rectAreaLength!==b||L.hemiLength!==A||L.numSunShadows!==g||L.numDirectionalShadows!==C||L.numPointShadows!==T||L.numSpotShadows!==_||L.numSpotMaps!==E||L.numLightProbes!==R)&&(n.sun.length=p,n.directional.length=m,n.spot.length=M,n.rectArea.length=b,n.point.length=d,n.hemi.length=A,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=S,n.sunShadowCascade.length=S,n.directionalShadow.length=C,n.directionalShadowMap.length=C,n.directionalShadowMatrix.length=C,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+E-N,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=N,n.numLightProbes=R,L.sunLength=p,L.directionalLength=m,L.pointLength=d,L.spotLength=M,L.rectAreaLength=b,L.hemiLength=A,L.numSunShadows=g,L.numDirectionalShadows=C,L.numPointShadows=T,L.numSpotShadows=_,L.numSpotMaps=E,L.numLightProbes=R,n.version=XS++)}function l(c,u){let f=0,h=0,p=0,g=0,S=0,m=0;const d=u.matrixWorldInverse;for(let M=0,b=c.length;M<b;M++){const A=c[M];if(A.isSunLight){const C=n.sun[f];C.direction.setFromMatrixPosition(A.matrixWorld),C.direction.transformDirection(d),f++}else if(A.isDirectionalLight){const C=n.directional[h];C.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(d),h++}else if(A.isSpotLight){const C=n.spot[g];C.position.setFromMatrixPosition(A.matrixWorld),C.position.applyMatrix4(d),C.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(d),g++}else if(A.isRectAreaLight){const C=n.rectArea[S];C.position.setFromMatrixPosition(A.matrixWorld),C.position.applyMatrix4(d),a.identity(),r.copy(A.matrixWorld),r.premultiply(d),a.extractRotation(r),C.halfWidth.set(A.width*.5,0,0),C.halfHeight.set(0,A.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),S++}else if(A.isPointLight){const C=n.point[p];C.position.setFromMatrixPosition(A.matrixWorld),C.position.applyMatrix4(d),p++}else if(A.isHemisphereLight){const C=n.hemi[m];C.direction.setFromMatrixPosition(A.matrixWorld),C.direction.transformDirection(d),m++}}}return{setup:o,setupView:l,state:n}}function uc(i){const e=new YS(i),t=[],n=[],s=[];function r(f){u.camera=f,t.length=0,n.length=0,s.length=0}function a(f){f.isLightProbeGrid?s.push(f):t.push(f)}function o(f){n.push(f)}function l(){e.setup(t),s.sort((f,h)=>f.priority-h.priority||f.id-h.id)}function c(f){e.setupView(t,f)}const u={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function KS(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new uc(i),e.set(s,[o])):r>=a.length?(o=new uc(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const ZS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,JS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,QS=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],$S=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],hc=new Ze,$i=new z,oa=new z;function jS(i,e,t){let n=new fs;const s=new Oe,r=new Oe,a=new at,o=new u_,l=new h_,c={},u=t.maxTextureSize,f={[Qn]:Ot,[Ot]:Qn,[An]:An},h=new ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:ZS,fragmentShader:JS}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new dn;g.setAttribute("position",new Tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new wt(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qs;let d=this.type;this.render=function(T,_,E){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===$m&&(Re("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Qs);const N=i.getRenderTarget(),R=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),U=i.state;U.setBlending(wi),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const G=d!==this.type;G&&_.traverse(function(w){w.material&&(Array.isArray(w.material)?w.material.forEach(k=>k.needsUpdate=!0):w.material.needsUpdate=!0)});for(let w=0,k=T.length;w<k;w++){const X=T[w],H=X.shadow;if(H===void 0){Re("WebGLShadowMap:",X,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const j=H.getFrameExtents();s.multiply(j),r.copy(H.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/j.x),s.x=r.x*j.x,H.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/j.y),s.y=r.y*j.y,H.mapSize.y=r.y));const W=i.state.buffers.depth.getReversed();if(H.camera._reversedDepth=W,H.map===null||G===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===ts){if(X.isPointLight){Re("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new cn(s.x,s.y,{format:$n,type:hn,minFilter:Ft,magFilter:Ft,generateMipmaps:!1}),H.map.texture.name=X.name+".shadowMap",H.map.depthTexture=new Di(s.x,s.y,en),H.map.depthTexture.name=X.name+".shadowMapDepth",H.map.depthTexture.format=zn,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=ot,H.map.depthTexture.magFilter=ot}else X.isPointLight?(H.map=new Ao(s.x),H.map.depthTexture=new Su(s.x,un)):(H.map=new cn(s.x,s.y),H.map.depthTexture=new Di(s.x,s.y,un)),H.map.depthTexture.name=X.name+".shadowMap",H.map.depthTexture.format=zn,this.type===Qs?(H.map.depthTexture.compareFunction=W?nu:tu,H.map.depthTexture.minFilter=Ft,H.map.depthTexture.magFilter=Ft):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=ot,H.map.depthTexture.magFilter=ot);H.camera.updateProjectionMatrix()}H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==s.x||H.map.height!==s.y)&&H.map.setSize(s.x,s.y);const Z=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();X.isPointLight!==!0&&H.updateMatrices(X,E);const ee=(H.camera.layers.mask&4294967294)!==0?H.camera.layers:E.layers;for(let Me=0;Me<Z;Me++){const Ie=H.getCamera(Me);if(X.isPointLight){const J=H.camera,pe=H.matrix,ve=X.distance||J.far;ve!==J.far&&(J.far=ve,J.updateProjectionMatrix()),$i.setFromMatrixPosition(X.matrixWorld),J.position.copy($i),oa.copy(J.position),oa.add(QS[Me]),J.up.copy($S[Me]),J.lookAt(oa),J.updateMatrixWorld(),pe.makeTranslation(-$i.x,-$i.y,-$i.z),hc.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),H._frustum.setFromProjectionMatrix(hc,J.coordinateSystem,J.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)i.setRenderTarget(H.map,Me),i.clear();else{Me===0&&(i.setRenderTarget(H.map),i.clear());const J=H.getViewport(Me);a.set(r.x*J.x,r.y*J.y,r.x*J.z,r.y*J.w),U.viewport(a)}n=H.getFrustum(Me),A(_,E,Ie,X,ee,this.type)}H.isPointLightShadow!==!0&&this.type===ts&&M(H,E),H.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(N,R,L)};function M(T,_){const E=e.update(S);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null?T.mapPass=new cn(s.x,s.y,{format:$n,type:hn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),h.uniforms.shadow_pass.value=T.map.depthTexture,h.uniforms.resolution.value.set(T.map.width,T.map.height),h.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(_,null,E,h,S,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value.set(T.map.width,T.map.height),p.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(_,null,E,p,S,null)}function b(T,_,E,N){let R=null;const L=E.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(L!==void 0)R=L;else if(R=E.isPointLight===!0?l:o,i.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){const U=R.uuid,G=_.uuid;let w=c[U];w===void 0&&(w={},c[U]=w);let k=w[G];k===void 0&&(k=R.clone(),w[G]=k,_.addEventListener("dispose",C)),R=k}if(R.visible=_.visible,R.wireframe=_.wireframe,N===ts?R.side=_.shadowSide!==null?_.shadowSide:_.side:R.side=_.shadowSide!==null?_.shadowSide:f[_.side],R.alphaMap=_.alphaMap,R.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,R.map=_.map,R.clipShadows=_.clipShadows,R.clippingPlanes=_.clippingPlanes,R.clipIntersection=_.clipIntersection,R.displacementMap=_.displacementMap,R.displacementScale=_.displacementScale,R.displacementBias=_.displacementBias,R.wireframeLinewidth=_.wireframeLinewidth,R.linewidth=_.linewidth,E.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const U=i.properties.get(R);U.light=E}return R}function A(T,_,E,N,R,L){if(T.visible===!1)return;if(T.layers.test(R)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&L===ts)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,T.matrixWorld);const w=e.update(T),k=T.material;if(Array.isArray(k)){const X=w.groups;for(let H=0,j=X.length;H<j;H++){const W=X[H],Z=k[W.materialIndex];if(Z&&Z.visible){const ee=b(T,Z,N,L);T.onBeforeShadow(i,T,_,E,w,ee,W),i.renderBufferDirect(E,null,w,ee,T,W),T.onAfterShadow(i,T,_,E,w,ee,W)}}}else if(k.visible){const X=b(T,k,N,L);T.onBeforeShadow(i,T,_,E,w,X,null),i.renderBufferDirect(E,null,w,X,T,null),T.onAfterShadow(i,T,_,E,w,X,null)}}const G=T.children;for(let w=0,k=G.length;w<k;w++)A(G[w],_,E,N,R,L)}function C(T){T.target.removeEventListener("dispose",C);for(const E in c){const N=c[E],R=T.target.uuid;R in N&&(N[R].dispose(),delete N[R])}}}function eM(i,e){function t(){let P=!1;const Q=new at;let q=null;const oe=new at(0,0,0,0);return{setMask:function(ie){q!==ie&&!P&&(i.colorMask(ie,ie,ie,ie),q=ie)},setLocked:function(ie){P=ie},setClear:function(ie,re,Ee,Be,ne){ne===!0&&(ie*=Be,re*=Be,Ee*=Be),Q.set(ie,re,Ee,Be),oe.equals(Q)===!1&&(i.clearColor(ie,re,Ee,Be),oe.copy(Q))},reset:function(){P=!1,q=null,oe.set(-1,0,0,0)}}}function n(){let P=!1,Q=!1,q=null,oe=null,ie=null;return{setReversed:function(re){if(Q!==re){const Ee=e.get("EXT_clip_control");re?Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.ZERO_TO_ONE_EXT):Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.NEGATIVE_ONE_TO_ONE_EXT),Q=re;const Be=ie;ie=null,this.setClear(Be)}},getReversed:function(){return Q},setTest:function(re){re?me(i.DEPTH_TEST):Ne(i.DEPTH_TEST)},setMask:function(re){q!==re&&!P&&(i.depthMask(re),q=re)},setFunc:function(re){if(Q&&(re=Lg[re]),oe!==re){switch(re){case da:i.depthFunc(i.NEVER);break;case pa:i.depthFunc(i.ALWAYS);break;case ma:i.depthFunc(i.LESS);break;case as:i.depthFunc(i.LEQUAL);break;case ga:i.depthFunc(i.EQUAL);break;case _a:i.depthFunc(i.GEQUAL);break;case va:i.depthFunc(i.GREATER);break;case xa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}oe=re}},setLocked:function(re){P=re},setClear:function(re){ie!==re&&(ie=re,Q&&(re=1-re),i.clearDepth(re))},reset:function(){P=!1,q=null,oe=null,ie=null,Q=!1}}}function s(){let P=!1,Q=null,q=null,oe=null,ie=null,re=null,Ee=null,Be=null,ne=null;return{setTest:function(ye){P||(ye?me(i.STENCIL_TEST):Ne(i.STENCIL_TEST))},setMask:function(ye){Q!==ye&&!P&&(i.stencilMask(ye),Q=ye)},setFunc:function(ye,Fe,fe){(q!==ye||oe!==Fe||ie!==fe)&&(i.stencilFunc(ye,Fe,fe),q=ye,oe=Fe,ie=fe)},setOp:function(ye,Fe,fe){(re!==ye||Ee!==Fe||Be!==fe)&&(i.stencilOp(ye,Fe,fe),re=ye,Ee=Fe,Be=fe)},setLocked:function(ye){P=ye},setClear:function(ye){ne!==ye&&(i.clearStencil(ye),ne=ye)},reset:function(){P=!1,Q=null,q=null,oe=null,ie=null,re=null,Ee=null,Be=null,ne=null}}}const r=new t,a=new n,o=new s;let l={};const c=new WeakMap;let u={},f={},h={},p=new WeakMap,g=[],S=null,m=!1,d=null,M=null,b=null,A=null,C=null,T=null,_=null,E=new ze(0,0,0),N=0,R=!1,L=null,U=null,G=null,w=null,k=null;const X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,j=0;const W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(W)[1]),H=j>=1):W.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),H=j>=2);let Z=null,ee={};const Me=i.getParameter(i.SCISSOR_BOX),Ie=i.getParameter(i.VIEWPORT),J=new at().fromArray(Me),pe=new at().fromArray(Ie);function ve(P,Q,q,oe){const ie=new Uint8Array(4),re=i.createTexture();i.bindTexture(P,re),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ee=0;Ee<q;Ee++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(Q,0,i.RGBA,1,1,oe,0,i.RGBA,i.UNSIGNED_BYTE,ie):i.texImage2D(Q+Ee,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ie);return re}const be={};be[i.TEXTURE_2D]=ve(i.TEXTURE_2D,i.TEXTURE_2D,1),be[i.TEXTURE_CUBE_MAP]=ve(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),be[i.TEXTURE_2D_ARRAY]=ve(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),be[i.TEXTURE_3D]=ve(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),me(i.DEPTH_TEST),a.setFunc(as),Dt(!1),st(al),me(i.CULL_FACE),xt(wi);function me(P){u[P]!==!0&&(i.enable(P),u[P]=!0)}function Ne(P){u[P]!==!1&&(i.disable(P),u[P]=!1)}function lt(P,Q){return h[P]!==Q?(i.bindFramebuffer(P,Q),h[P]=Q,P===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=Q),P===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=Q),!0):!1}function we(P,Q){let q=g,oe=!1;if(P){q=p.get(Q),q===void 0&&(q=[],p.set(Q,q));const ie=P.textures;if(q.length!==ie.length||q[0]!==i.COLOR_ATTACHMENT0){for(let re=0,Ee=ie.length;re<Ee;re++)q[re]=i.COLOR_ATTACHMENT0+re;q.length=ie.length,oe=!0}}else q[0]!==i.BACK&&(q[0]=i.BACK,oe=!0);oe&&i.drawBuffers(q)}function Je(P){return S!==P?(i.useProgram(P),S=P,!0):!1}const je={[Ei]:i.FUNC_ADD,[eg]:i.FUNC_SUBTRACT,[tg]:i.FUNC_REVERSE_SUBTRACT};je[ng]=i.MIN,je[ig]=i.MAX;const Ge={[sg]:i.ZERO,[rg]:i.ONE,[ag]:i.SRC_COLOR,[kc]:i.SRC_ALPHA,[fg]:i.SRC_ALPHA_SATURATE,[ug]:i.DST_COLOR,[lg]:i.DST_ALPHA,[og]:i.ONE_MINUS_SRC_COLOR,[zc]:i.ONE_MINUS_SRC_ALPHA,[hg]:i.ONE_MINUS_DST_COLOR,[cg]:i.ONE_MINUS_DST_ALPHA,[dg]:i.CONSTANT_COLOR,[pg]:i.ONE_MINUS_CONSTANT_COLOR,[mg]:i.CONSTANT_ALPHA,[gg]:i.ONE_MINUS_CONSTANT_ALPHA};function xt(P,Q,q,oe,ie,re,Ee,Be,ne,ye){if(P===wi){m===!0&&(Ne(i.BLEND),m=!1);return}if(m===!1&&(me(i.BLEND),m=!0),P!==jm){if(P!==d||ye!==R){if((M!==Ei||C!==Ei)&&(i.blendEquation(i.FUNC_ADD),M=Ei,C=Ei),ye)switch(P){case ss:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ol:i.blendFunc(i.ONE,i.ONE);break;case ll:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case cl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ye("WebGLState: Invalid blending: ",P);break}else switch(P){case ss:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ol:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ll:Ye("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case cl:Ye("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ye("WebGLState: Invalid blending: ",P);break}b=null,A=null,T=null,_=null,E.set(0,0,0),N=0,d=P,R=ye}return}ie=ie||Q,re=re||q,Ee=Ee||oe,(Q!==M||ie!==C)&&(i.blendEquationSeparate(je[Q],je[ie]),M=Q,C=ie),(q!==b||oe!==A||re!==T||Ee!==_)&&(i.blendFuncSeparate(Ge[q],Ge[oe],Ge[re],Ge[Ee]),b=q,A=oe,T=re,_=Ee),(Be.equals(E)===!1||ne!==N)&&(i.blendColor(Be.r,Be.g,Be.b,ne),E.copy(Be),N=ne),d=P,R=!1}function ht(P,Q){P.side===An?Ne(i.CULL_FACE):me(i.CULL_FACE);let q=P.side===Ot;Q&&(q=!q),Dt(q),P.blending===ss&&P.transparent===!1?xt(wi):xt(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),r.setMask(P.colorWrite);const oe=P.stencilWrite;o.setTest(oe),oe&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),mt(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?me(i.SAMPLE_ALPHA_TO_COVERAGE):Ne(i.SAMPLE_ALPHA_TO_COVERAGE)}function Dt(P){L!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),L=P)}function st(P){P!==Jm?(me(i.CULL_FACE),P!==U&&(P===al?i.cullFace(i.BACK):P===Qm?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ne(i.CULL_FACE),U=P}function sn(P){P!==G&&(H&&i.lineWidth(P),G=P)}function mt(P,Q,q){P?(me(i.POLYGON_OFFSET_FILL),(w!==Q||k!==q)&&(w=Q,k=q,a.getReversed()&&(Q=-Q,q=-q),i.polygonOffset(Q,q))):Ne(i.POLYGON_OFFSET_FILL)}function Wt(P){P?me(i.SCISSOR_TEST):Ne(i.SCISSOR_TEST)}function Xt(P){P===void 0&&(P=i.TEXTURE0+X-1),Z!==P&&(i.activeTexture(P),Z=P)}function qt(P,Q,q){q===void 0&&(Z===null?q=i.TEXTURE0+X-1:q=Z);let oe=ee[q];oe===void 0&&(oe={type:void 0,texture:void 0},ee[q]=oe),(oe.type!==P||oe.texture!==Q)&&(Z!==q&&(i.activeTexture(q),Z=q),i.bindTexture(P,Q||be[P]),oe.type=P,oe.texture=Q)}function I(){const P=ee[Z];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function Yt(){try{i.compressedTexImage2D(...arguments)}catch(P){Ye("WebGLState:",P)}}function nt(){try{i.compressedTexImage3D(...arguments)}catch(P){Ye("WebGLState:",P)}}function it(){try{i.texSubImage2D(...arguments)}catch(P){Ye("WebGLState:",P)}}function he(){try{i.texSubImage3D(...arguments)}catch(P){Ye("WebGLState:",P)}}function ft(){try{i.compressedTexSubImage2D(...arguments)}catch(P){Ye("WebGLState:",P)}}function Te(){try{i.compressedTexSubImage3D(...arguments)}catch(P){Ye("WebGLState:",P)}}function Pe(){try{i.texStorage2D(...arguments)}catch(P){Ye("WebGLState:",P)}}function y(){try{i.texStorage3D(...arguments)}catch(P){Ye("WebGLState:",P)}}function v(){try{i.texImage2D(...arguments)}catch(P){Ye("WebGLState:",P)}}function O(){try{i.texImage3D(...arguments)}catch(P){Ye("WebGLState:",P)}}function te(P){return f[P]!==void 0?f[P]:i.getParameter(P)}function $(P,Q){f[P]!==Q&&(i.pixelStorei(P,Q),f[P]=Q)}function se(P){J.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),J.copy(P))}function ce(P){pe.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),pe.copy(P))}function Y(P,Q){let q=c.get(Q);q===void 0&&(q=new WeakMap,c.set(Q,q));let oe=q.get(P);oe===void 0&&(oe=i.getUniformBlockIndex(Q,P.name),i.uniformBlockBinding(Q,oe,oe),q.set(P,oe))}function K(P,Q,q){const ie=c.get(Q).get(P);l[ie]!==q&&(i.bindBufferBase(i.UNIFORM_BUFFER,ie,q),l[ie]=q)}function ae(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},f={},Z=null,ee={},h={},l={},p=new WeakMap,g=[],S=null,m=!1,d=null,M=null,b=null,A=null,C=null,T=null,_=null,E=new ze(0,0,0),N=0,R=!1,L=null,U=null,G=null,w=null,k=null,J.set(0,0,i.canvas.width,i.canvas.height),pe.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:me,disable:Ne,bindFramebuffer:lt,drawBuffers:we,useProgram:Je,setBlending:xt,setMaterial:ht,setFlipSided:Dt,setCullFace:st,setLineWidth:sn,setPolygonOffset:mt,setScissorTest:Wt,activeTexture:Xt,bindTexture:qt,unbindTexture:I,compressedTexImage2D:Yt,compressedTexImage3D:nt,texImage2D:v,texImage3D:O,pixelStorei:$,getParameter:te,updateUBOMapping:Y,uniformBlockBinding:K,texStorage2D:Pe,texStorage3D:y,texSubImage2D:it,texSubImage3D:he,compressedTexSubImage2D:ft,compressedTexSubImage3D:Te,scissor:se,viewport:ce,reset:ae}}function tM(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Oe,u=new WeakMap,f=new Set;let h;const p=new WeakMap,g=new Set,S=new FinalizationRegistry(y=>g.delete(y));let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function d(y,v){return m?new OffscreenCanvas(y,v):hs("canvas")}function M(y,v,O){let te=1;const $=Pe(y);if(($.width>O||$.height>O)&&(te=O/Math.max($.width,$.height)),te<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const se=Math.floor(te*$.width),ce=Math.floor(te*$.height);h===void 0&&(h=d(se,ce));const Y=v?d(se,ce):h;return Y.width=se,Y.height=ce,Y.getContext("2d").drawImage(y,0,0,se,ce),Re("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+se+"x"+ce+")."),Y}else return"data"in y&&Re("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),y;return y}function b(y){return y.generateMipmaps}function A(y){i.generateMipmap(y)}function C(y){return y.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:y.isWebGL3DRenderTarget?i.TEXTURE_3D:y.isWebGLArrayRenderTarget||y.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(y,v,O,te,$,se=!1){if(y!==null){if(i[y]!==void 0)return i[y];Re("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let ce;te&&(ce=e.get("EXT_texture_norm16"),ce||Re("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=v;if(v===i.RED&&(O===i.FLOAT&&(Y=i.R32F),O===i.HALF_FLOAT&&(Y=i.R16F),O===i.UNSIGNED_BYTE&&(Y=i.R8),O===i.UNSIGNED_SHORT&&ce&&(Y=ce.R16_EXT),O===i.SHORT&&ce&&(Y=ce.R16_SNORM_EXT)),v===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.R8UI),O===i.UNSIGNED_SHORT&&(Y=i.R16UI),O===i.UNSIGNED_INT&&(Y=i.R32UI),O===i.BYTE&&(Y=i.R8I),O===i.SHORT&&(Y=i.R16I),O===i.INT&&(Y=i.R32I)),v===i.RG&&(O===i.FLOAT&&(Y=i.RG32F),O===i.HALF_FLOAT&&(Y=i.RG16F),O===i.UNSIGNED_BYTE&&(Y=i.RG8),O===i.UNSIGNED_SHORT&&ce&&(Y=ce.RG16_EXT),O===i.SHORT&&ce&&(Y=ce.RG16_SNORM_EXT)),v===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.RG8UI),O===i.UNSIGNED_SHORT&&(Y=i.RG16UI),O===i.UNSIGNED_INT&&(Y=i.RG32UI),O===i.BYTE&&(Y=i.RG8I),O===i.SHORT&&(Y=i.RG16I),O===i.INT&&(Y=i.RG32I)),v===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),O===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),O===i.UNSIGNED_INT&&(Y=i.RGB32UI),O===i.BYTE&&(Y=i.RGB8I),O===i.SHORT&&(Y=i.RGB16I),O===i.INT&&(Y=i.RGB32I)),v===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),O===i.UNSIGNED_INT&&(Y=i.RGBA32UI),O===i.BYTE&&(Y=i.RGBA8I),O===i.SHORT&&(Y=i.RGBA16I),O===i.INT&&(Y=i.RGBA32I)),v===i.RGB&&(O===i.UNSIGNED_SHORT&&ce&&(Y=ce.RGB16_EXT),O===i.SHORT&&ce&&(Y=ce.RGB16_SNORM_EXT),O===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),O===i.UNSIGNED_INT_10F_11F_11F_REV&&(Y=i.R11F_G11F_B10F)),v===i.RGBA){const K=se?ur:We.getTransfer($);O===i.FLOAT&&(Y=i.RGBA32F),O===i.HALF_FLOAT&&(Y=i.RGBA16F),O===i.UNSIGNED_BYTE&&(Y=K===$e?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT&&ce&&(Y=ce.RGBA16_EXT),O===i.SHORT&&ce&&(Y=ce.RGBA16_SNORM_EXT),O===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function _(y,v){let O;return y?v===null||v===un||v===Li?O=i.DEPTH24_STENCIL8:v===en?O=i.DEPTH32F_STENCIL8:v===cs&&(O=i.DEPTH24_STENCIL8,Re("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===un||v===Li?O=i.DEPTH_COMPONENT24:v===en?O=i.DEPTH_COMPONENT32F:v===cs&&(O=i.DEPTH_COMPONENT16),O}function E(y,v){return b(y)===!0||y.isFramebufferTexture&&y.minFilter!==ot&&y.minFilter!==Ft?Math.log2(Math.max(v.width,v.height))+1:y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?v.mipmaps.length:1}function N(y){const v=new WeakRef(y);n.get(y).__ref=v,g.add(v),S.register(y,v,v)}function R(y){const v=n.get(y).__ref;v!==void 0&&(g.delete(v),S.unregister(v))}function L(y){G(y.target)}function U(y){w(y.target)}function G(y){y.removeEventListener("dispose",L),R(y),X(y),y.isVideoTexture&&u.delete(y),y.isHTMLTexture&&f.delete(y)}function w(y){y.removeEventListener("dispose",U),R(y),j(y)}function k(){for(const y of g){const v=y.deref();v!==void 0&&(v.isRenderTarget===!0?w(v):G(v))}g.clear(),f.clear()}function X(y){const v=n.get(y);if(v.__webglInit===void 0)return;const O=y.source,te=p.get(O);if(te){const $=te[v.__cacheKey];$.usedTimes--,$.usedTimes===0&&H(y),Object.keys(te).length===0&&p.delete(O)}n.remove(y)}function H(y){const v=n.get(y);i.deleteTexture(v.__webglTexture);const O=y.source,te=p.get(O);delete te[v.__cacheKey],a.memory.textures--}function j(y){const v=n.get(y);v.__depthDisposeCallback&&v.__depthDisposeCallback();const O=y.depthTexture;if(O&&O.renderTarget===y&&G(O),y.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(v.__webglFramebuffer[$]))for(let se=0;se<v.__webglFramebuffer[$].length;se++)i.deleteFramebuffer(v.__webglFramebuffer[$][se]);else i.deleteFramebuffer(v.__webglFramebuffer[$]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[$])}else{if(Array.isArray(v.__webglFramebuffer))for(let $=0;$<v.__webglFramebuffer.length;$++)i.deleteFramebuffer(v.__webglFramebuffer[$]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let $=0;$<v.__webglColorRenderbuffer.length;$++)v.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[$]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const te=y.textures;for(let $=0,se=te.length;$<se;$++){const ce=n.get(te[$]);ce.__webglTexture&&(i.deleteTexture(ce.__webglTexture),a.memory.textures--),n.remove(te[$])}n.remove(y)}let W=0;function Z(){W=0}function ee(){return W}function Me(y){W=y}function Ie(){const y=W;return y>=s.maxTextures&&Re("WebGLTextures: Trying to use "+(y+1)+" texture units while this GPU supports only "+s.maxTextures),W+=1,y}function J(y){const v=[];return v.push(y.wrapS),v.push(y.wrapT),v.push(y.wrapR||0),v.push(y.magFilter),v.push(y.minFilter),v.push(y.anisotropy),v.push(y.internalFormat),v.push(y.format),v.push(y.type),v.push(y.generateMipmaps),v.push(y.mipmapsAutoUpdate),v.push(y.premultiplyAlpha),v.push(y.flipY),v.push(y.unpackAlignment),v.push(y.colorSpace),v.join()}function pe(y,v){const O=n.get(y);if(y.isVideoTexture&&ft(y),y.isRenderTargetTexture===!1&&y.isExternalTexture!==!0&&y.version>0&&O.__version!==y.version){const te=y.image;if(te===null)Re("WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)Re("WebGLRenderer: Texture marked for update but image is incomplete");else{ht(O,y,v);return}}else y.isExternalTexture&&(O.__webglTexture=y.sourceTexture?y.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+v)}function ve(y,v){const O=n.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&O.__version!==y.version){ht(O,y,v);return}else y.isExternalTexture&&(O.__webglTexture=y.sourceTexture?y.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+v)}function be(y,v){const O=n.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&O.__version!==y.version){ht(O,y,v);return}t.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+v)}function me(y,v){const O=n.get(y);if(y.version>0&&O.__version!==y.version){Dt(O,y,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+v)}const Ne={[ls]:i.REPEAT,[En]:i.CLAMP_TO_EDGE,[Sa]:i.MIRRORED_REPEAT},lt={[ot]:i.NEAREST,[xg]:i.NEAREST_MIPMAP_NEAREST,[xs]:i.NEAREST_MIPMAP_LINEAR,[Ft]:i.LINEAR,[Dr]:i.LINEAR_MIPMAP_NEAREST,[Bn]:i.LINEAR_MIPMAP_LINEAR},we={[Eg]:i.NEVER,[iu]:i.ALWAYS,[yg]:i.LESS,[tu]:i.LEQUAL,[bg]:i.EQUAL,[nu]:i.GEQUAL,[Tg]:i.GREATER,[wg]:i.NOTEQUAL};function Je(y,v){if(v.type===en&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Ft||v.magFilter===Dr||v.magFilter===xs||v.magFilter===Bn||v.minFilter===Ft||v.minFilter===Dr||v.minFilter===xs||v.minFilter===Bn)&&Re("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(y,i.TEXTURE_WRAP_S,Ne[v.wrapS]),i.texParameteri(y,i.TEXTURE_WRAP_T,Ne[v.wrapT]),(y===i.TEXTURE_3D||y===i.TEXTURE_2D_ARRAY)&&i.texParameteri(y,i.TEXTURE_WRAP_R,Ne[v.wrapR]),i.texParameteri(y,i.TEXTURE_MAG_FILTER,lt[v.magFilter]),i.texParameteri(y,i.TEXTURE_MIN_FILTER,lt[v.minFilter]),v.compareFunction&&(i.texParameteri(y,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(y,i.TEXTURE_COMPARE_FUNC,we[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===ot||v.minFilter!==xs&&v.minFilter!==Bn||v.type===en&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");i.texParameterf(y,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function je(y,v){let O=!1;y.__webglInit===void 0&&(y.__webglInit=!0,v.addEventListener("dispose",L),N(v));const te=v.source;let $=p.get(te);$===void 0&&($={},p.set(te,$));const se=J(v);if(se!==y.__cacheKey){$[se]===void 0&&($[se]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),$[se].usedTimes++;const ce=$[y.__cacheKey];ce!==void 0&&($[y.__cacheKey].usedTimes--,ce.usedTimes===0&&H(v)),y.__cacheKey=se,y.__webglTexture=$[se].texture}return O}function Ge(y,v,O){return Math.floor(Math.floor(y/O)/v)}function xt(y,v,O,te){const se=y.updateRanges;if(se.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,O,te,v.data);else{se.sort((P,Q)=>P.start-Q.start);let ce=0;for(let P=1;P<se.length;P++){const Q=se[ce],q=se[P],oe=Q.start+Q.count,ie=Ge(q.start,v.width,4),re=Ge(Q.start,v.width,4);q.start<=oe+1&&ie===re&&Ge(q.start+q.count-1,v.width,4)===ie?Q.count=Math.max(Q.count,q.start+q.count-Q.start):(++ce,se[ce]=q)}se.length=ce+1;const Y=t.getParameter(i.UNPACK_ROW_LENGTH),K=t.getParameter(i.UNPACK_SKIP_PIXELS),ae=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let P=0,Q=se.length;P<Q;P++){const q=se[P],oe=Math.floor(q.start/4),ie=Math.ceil(q.count/4),re=oe%v.width,Ee=Math.floor(oe/v.width),Be=ie,ne=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,re),t.pixelStorei(i.UNPACK_SKIP_ROWS,Ee),t.texSubImage2D(i.TEXTURE_2D,0,re,Ee,Be,ne,O,te,v.data)}y.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,Y),t.pixelStorei(i.UNPACK_SKIP_PIXELS,K),t.pixelStorei(i.UNPACK_SKIP_ROWS,ae)}}function ht(y,v,O){let te=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(te=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(te=i.TEXTURE_3D);const $=je(y,v),se=v.source;t.bindTexture(te,y.__webglTexture,i.TEXTURE0+O);const ce=n.get(se);if(se.version!==ce.__version||$===!0){if(t.activeTexture(i.TEXTURE0+O),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){const ne=We.getPrimaries(We.workingColorSpace),ye=v.colorSpace===On?null:We.getPrimaries(v.colorSpace),Fe=v.colorSpace===On||ne===ye?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe)}t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment);let K=M(v.image,!1,s.maxTextureSize);K=Te(v,K);const ae=r.convert(v.format,v.colorSpace),P=r.convert(v.type);let Q=T(v.internalFormat,ae,P,v.normalized,v.colorSpace,v.isVideoTexture);Je(te,v);let q;const oe=v.mipmaps,ie=v.isVideoTexture!==!0,re=ce.__version===void 0||$===!0,Ee=se.dataReady,Be=E(v,K);if(v.isDepthTexture)Q=_(v.format===kn,v.type),re&&(ie?t.texStorage2D(i.TEXTURE_2D,1,Q,K.width,K.height):t.texImage2D(i.TEXTURE_2D,0,Q,K.width,K.height,0,ae,P,null));else if(v.isDataTexture)if(oe.length>0){ie&&re&&t.texStorage2D(i.TEXTURE_2D,Be,Q,oe[0].width,oe[0].height);for(let ne=0,ye=oe.length;ne<ye;ne++)q=oe[ne],ie?Ee&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,q.width,q.height,ae,P,q.data):t.texImage2D(i.TEXTURE_2D,ne,Q,q.width,q.height,0,ae,P,q.data);v.generateMipmaps=!1}else ie?(re&&t.texStorage2D(i.TEXTURE_2D,Be,Q,K.width,K.height),Ee&&xt(v,K,ae,P)):t.texImage2D(i.TEXTURE_2D,0,Q,K.width,K.height,0,ae,P,K.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){ie&&re&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Be,Q,oe[0].width,oe[0].height,K.depth);for(let ne=0,ye=oe.length;ne<ye;ne++)if(q=oe[ne],v.format!==ln)if(ae!==null)if(ie){if(Ee)if(v.layerUpdates.size>0){const Fe=Wl(q.width,q.height,v.format,v.type);for(const fe of v.layerUpdates){const Qe=q.data.subarray(fe*Fe/q.data.BYTES_PER_ELEMENT,(fe+1)*Fe/q.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,fe,q.width,q.height,1,ae,Qe)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,q.width,q.height,K.depth,ae,q.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ne,Q,q.width,q.height,K.depth,0,q.data,0,0);else Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ie?Ee&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,q.width,q.height,K.depth,ae,P,q.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ne,Q,q.width,q.height,K.depth,0,ae,P,q.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{ie&&re&&t.texStorage2D(i.TEXTURE_2D,Be,Q,oe[0].width,oe[0].height);for(let ne=0,ye=oe.length;ne<ye;ne++)q=oe[ne],v.format!==ln?ae!==null?ie?Ee&&t.compressedTexSubImage2D(i.TEXTURE_2D,ne,0,0,q.width,q.height,ae,q.data):t.compressedTexImage2D(i.TEXTURE_2D,ne,Q,q.width,q.height,0,q.data):Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ie?Ee&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,q.width,q.height,ae,P,q.data):t.texImage2D(i.TEXTURE_2D,ne,Q,q.width,q.height,0,ae,P,q.data)}else if(v.isDataArrayTexture)if(ie){if(re&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Be,Q,K.width,K.height,K.depth),Ee)if(v.layerUpdates.size>0){const ne=Wl(K.width,K.height,v.format,v.type);for(const ye of v.layerUpdates){const Fe=K.data.subarray(ye*ne/K.data.BYTES_PER_ELEMENT,(ye+1)*ne/K.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ye,K.width,K.height,1,ae,P,Fe)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,ae,P,K.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Q,K.width,K.height,K.depth,0,ae,P,K.data);else if(v.isData3DTexture)ie?(re&&t.texStorage3D(i.TEXTURE_3D,Be,Q,K.width,K.height,K.depth),Ee&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,ae,P,K.data)):t.texImage3D(i.TEXTURE_3D,0,Q,K.width,K.height,K.depth,0,ae,P,K.data);else if(v.isFramebufferTexture){if(re)if(ie)t.texStorage2D(i.TEXTURE_2D,Be,Q,K.width,K.height);else{let ne=K.width,ye=K.height;for(let Fe=0;Fe<Be;Fe++)t.texImage2D(i.TEXTURE_2D,Fe,Q,ne,ye,0,ae,P,null),ne>>=1,ye>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in i){const ne=i.canvas;if(ne.hasAttribute("layoutsubtree")||ne.setAttribute("layoutsubtree","true"),K.parentNode!==ne){ne.appendChild(K),f.add(v),ne.onpaint=ye=>{const Fe=ye.changedElements;for(const fe of f)Fe.includes(fe.image)&&(fe.needsUpdate=!0)},ne.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,K);else{const Fe=i.RGBA,fe=i.RGBA,Qe=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Fe,fe,Qe,K)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(oe.length>0){if(ie&&re){const ne=Pe(oe[0]);t.texStorage2D(i.TEXTURE_2D,Be,Q,ne.width,ne.height)}for(let ne=0,ye=oe.length;ne<ye;ne++)q=oe[ne],ie?Ee&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,ae,P,q):t.texImage2D(i.TEXTURE_2D,ne,Q,ae,P,q);v.generateMipmaps=!1}else if(ie){if(re){const ne=Pe(K);t.texStorage2D(i.TEXTURE_2D,Be,Q,ne.width,ne.height)}Ee&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ae,P,K)}else t.texImage2D(i.TEXTURE_2D,0,Q,ae,P,K);b(v)&&v.mipmapsAutoUpdate===!0&&A(te),ce.__version=se.version,v.onUpdate&&v.onUpdate(v)}y.__version=v.version}function Dt(y,v,O){if(v.image.length!==6)return;const te=je(y,v),$=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,y.__webglTexture,i.TEXTURE0+O);const se=n.get($);if($.version!==se.__version||te===!0){t.activeTexture(i.TEXTURE0+O);const ce=We.getPrimaries(We.workingColorSpace),Y=v.colorSpace===On?null:We.getPrimaries(v.colorSpace),K=v.colorSpace===On||ce===Y?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);const ae=v.isCompressedTexture||v.image[0].isCompressedTexture,P=v.image[0]&&v.image[0].isDataTexture,Q=[];for(let fe=0;fe<6;fe++)!ae&&!P?Q[fe]=M(v.image[fe],!0,s.maxCubemapSize):Q[fe]=P?v.image[fe].image:v.image[fe],Q[fe]=Te(v,Q[fe]);const q=Q[0],oe=r.convert(v.format,v.colorSpace),ie=r.convert(v.type);let re=T(v.internalFormat,oe,ie,v.normalized,v.colorSpace);const Ee=v.isVideoTexture!==!0,Be=se.__version===void 0||te===!0,ne=$.dataReady;let ye=E(v,q);Je(i.TEXTURE_CUBE_MAP,v);let Fe;if(v.isDepthTexture){if(re=_(v.format===kn,v.type),Be)if(Ee)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,re,q.width,q.height);else for(let fe=0;fe<6;fe++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,re,q.width,q.height,0,oe,ie,null)}else if(ae){Ee&&Be&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ye,re,q.width,q.height);for(let fe=0;fe<6;fe++){Fe=Q[fe].mipmaps;for(let Qe=0;Qe<Fe.length;Qe++){const gt=Fe[Qe];v.format!==ln?oe!==null?Ee?ne&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Qe,0,0,gt.width,gt.height,oe,gt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Qe,re,gt.width,gt.height,0,gt.data):Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ee?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Qe,0,0,gt.width,gt.height,oe,ie,gt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Qe,re,gt.width,gt.height,0,oe,ie,gt.data)}}}else{if(Fe=v.mipmaps,Ee&&Be){Fe.length>0&&ye++;const fe=Pe(Q[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ye,re,fe.width,fe.height)}for(let fe=0;fe<6;fe++)if(P){Ee?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Q[fe].width,Q[fe].height,oe,ie,Q[fe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,re,Q[fe].width,Q[fe].height,0,oe,ie,Q[fe].data);for(let Qe=0;Qe<Fe.length;Qe++){const Cn=Fe[Qe].image[fe].image;Ee?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Qe+1,0,0,Cn.width,Cn.height,oe,ie,Cn.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Qe+1,re,Cn.width,Cn.height,0,oe,ie,Cn.data)}}else{Ee?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,oe,ie,Q[fe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,re,oe,ie,Q[fe]);for(let Qe=0;Qe<Fe.length;Qe++){const gt=Fe[Qe];Ee?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Qe+1,0,0,oe,ie,gt.image[fe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Qe+1,re,oe,ie,gt.image[fe])}}}b(v)&&v.mipmapsAutoUpdate===!0&&A(i.TEXTURE_CUBE_MAP),se.__version=$.version,v.onUpdate&&v.onUpdate(v)}y.__version=v.version}function st(y,v,O,te,$,se){const ce=r.convert(O.format,O.colorSpace),Y=r.convert(O.type),K=T(O.internalFormat,ce,Y,O.normalized,O.colorSpace),ae=n.get(v),P=n.get(O);if(P.__renderTarget=v,!ae.__hasExternalTextures){const Q=Math.max(1,v.width>>se),q=Math.max(1,v.height>>se);$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?t.texImage3D($,se,K,Q,q,v.depth,0,ce,Y,null):t.texImage2D($,se,K,Q,q,0,ce,Y,null)}t.bindFramebuffer(i.FRAMEBUFFER,y),he(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,$,P.__webglTexture,0,it(v)):($===i.TEXTURE_2D||$>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,te,$,P.__webglTexture,se),t.bindFramebuffer(i.FRAMEBUFFER,null)}function sn(y,v,O){if(i.bindRenderbuffer(i.RENDERBUFFER,y),v.depthBuffer){const te=v.depthTexture,$=te&&te.isDepthTexture?te.type:null,se=_(v.stencilBuffer,$),ce=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;he(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,it(v),se,v.width,v.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,it(v),se,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,se,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ce,i.RENDERBUFFER,y)}else{const te=v.textures;for(let $=0;$<te.length;$++){const se=te[$],ce=r.convert(se.format,se.colorSpace),Y=r.convert(se.type),K=T(se.internalFormat,ce,Y,se.normalized,se.colorSpace);he(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,it(v),K,v.width,v.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,it(v),K,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,K,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function mt(y,v,O){const te=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,y),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const $=n.get(v.depthTexture);$.__renderTarget=v;const se=te?v.depthTexture.image[0]:v.depthTexture.image;(!$.__webglTexture||se.width!==v.width||se.height!==v.height)&&(se.width=v.width,se.height=v.height,v.depthTexture.needsUpdate=!0),te?me(v.depthTexture,0):pe(v.depthTexture,0);const ce=$.__webglTexture,Y=it(v),K=te?i.TEXTURE_CUBE_MAP_POSITIVE_X+O:i.TEXTURE_2D,ae=v.depthTexture.format===kn?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===zn)he(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ae,K,ce,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,ae,K,ce,0);else if(v.depthTexture.format===kn)he(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ae,K,ce,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,ae,K,ce,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Wt(y){const v=n.get(y),O=y.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==y.depthTexture){const te=y.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),te){const $=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,te.removeEventListener("dispose",$)};te.addEventListener("dispose",$),v.__depthDisposeCallback=$}v.__boundDepthTexture=te}if(y.depthTexture&&!v.__autoAllocateDepthBuffer)if(O)for(let te=0;te<6;te++)mt(v.__webglFramebuffer[te],y,te);else y.texture.mipmaps.length>0?mt(v.__webglFramebuffer[0],y,0):mt(v.__webglFramebuffer,y,0);else if(O){v.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[te]),v.__webglDepthbuffer[te]===void 0)v.__webglDepthbuffer[te]=i.createRenderbuffer(),sn(v.__webglDepthbuffer[te],y,!1);else{const $=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=v.__webglDepthbuffer[te];i.bindRenderbuffer(i.RENDERBUFFER,se),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,se)}}else if(y.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),sn(v.__webglDepthbuffer,y,!1);else{const $=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,se),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,se)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Xt(y,v,O){const te=n.get(y);v!==void 0&&st(te.__webglFramebuffer,y,y.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Wt(y)}function qt(y){const v=y.texture,O=n.get(y),te=n.get(v);y.addEventListener("dispose",U),N(y);const $=y.textures,se=y.isWebGLCubeRenderTarget===!0,ce=$.length>1;if(ce||(te.__webglTexture===void 0&&(te.__webglTexture=i.createTexture()),te.__version=v.version,a.memory.textures++),se){O.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(v.mipmaps.length>0){O.__webglFramebuffer[Y]=[];for(let K=0;K<v.mipmaps.length;K++)O.__webglFramebuffer[Y][K]=i.createFramebuffer()}else O.__webglFramebuffer[Y]=i.createFramebuffer()}else{if(v.mipmaps.length>0){O.__webglFramebuffer=[];for(let Y=0;Y<v.mipmaps.length;Y++)O.__webglFramebuffer[Y]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(ce)for(let Y=0,K=$.length;Y<K;Y++){const ae=n.get($[Y]);ae.__webglTexture===void 0&&(ae.__webglTexture=i.createTexture(),a.memory.textures++)}if(y.samples>0&&he(y)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let Y=0;Y<$.length;Y++){const K=$[Y];O.__webglColorRenderbuffer[Y]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[Y]);const ae=r.convert(K.format,K.colorSpace),P=r.convert(K.type),Q=T(K.internalFormat,ae,P,K.normalized,K.colorSpace,y.isXRRenderTarget===!0),q=it(y);i.renderbufferStorageMultisample(i.RENDERBUFFER,q,Q,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Y,i.RENDERBUFFER,O.__webglColorRenderbuffer[Y])}i.bindRenderbuffer(i.RENDERBUFFER,null),y.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),sn(O.__webglDepthRenderbuffer,y,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(se){t.bindTexture(i.TEXTURE_CUBE_MAP,te.__webglTexture),Je(i.TEXTURE_CUBE_MAP,v);for(let Y=0;Y<6;Y++)if(v.mipmaps.length>0)for(let K=0;K<v.mipmaps.length;K++)st(O.__webglFramebuffer[Y][K],y,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,K);else st(O.__webglFramebuffer[Y],y,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);b(v)?A(i.TEXTURE_CUBE_MAP):v.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),t.unbindTexture()}else if(ce){for(let Y=0,K=$.length;Y<K;Y++){const ae=$[Y],P=n.get(ae);let Q=i.TEXTURE_2D;(y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(Q=y.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Q,P.__webglTexture),Je(Q,ae),st(O.__webglFramebuffer,y,ae,i.COLOR_ATTACHMENT0+Y,Q,0),b(ae)&&A(Q)}t.unbindTexture()}else{let Y=i.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(Y=y.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Y,te.__webglTexture),Je(Y,v),v.mipmaps.length>0)for(let K=0;K<v.mipmaps.length;K++)st(O.__webglFramebuffer[K],y,v,i.COLOR_ATTACHMENT0,Y,K);else st(O.__webglFramebuffer,y,v,i.COLOR_ATTACHMENT0,Y,0);b(v)?A(Y):v.mipmaps.length>0&&i.texParameteri(Y,i.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),t.unbindTexture()}y.depthBuffer&&Wt(y)}function I(y){const v=y.textures;for(let O=0,te=v.length;O<te;O++){const $=v[O];if(b($)&&$.mipmapsAutoUpdate===!0){const se=C(y),ce=n.get($).__webglTexture;t.bindTexture(se,ce),A(se),t.unbindTexture()}}}const Yt=[];function nt(y){if(y.samples>0){if(he(y)===!1){const v=y.textures,O=y.width,te=y.height;let $=i.COLOR_BUFFER_BIT;const se=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=n.get(y),Y=v.length>1;if(Y)for(let ae=0;ae<v.length;ae++)t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer),y.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let ae=0;ae<v.length;ae++){if(y.resolveDepthBuffer&&(y.depthBuffer&&($|=i.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&($|=i.STENCIL_BUFFER_BIT)),Y){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ce.__webglColorRenderbuffer[ae]);const P=n.get(v[ae]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,P,0)}i.blitFramebuffer(0,0,O,te,0,0,O,te,$,i.NEAREST),l===!0&&(Yt.length=0,Yt.push(i.COLOR_ATTACHMENT0+ae),y.depthBuffer&&y.storeMultisampledDepthBuffer===!1&&Yt.push(se),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Yt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Y)for(let ae=0;ae<v.length;ae++){t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.RENDERBUFFER,ce.__webglColorRenderbuffer[ae]);const P=n.get(v[ae]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.TEXTURE_2D,P,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.storeMultisampledDepthBuffer===!1&&l){const v=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function it(y){return Math.min(s.maxSamples,y.samples)}function he(y){const v=n.get(y);return y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function ft(y){const v=a.render.frame;u.get(y)!==v&&(u.set(y,v),y.update())}function Te(y,v){const O=y.colorSpace,te=y.format,$=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||O!==cr&&O!==On&&(We.getTransfer(O)===$e?(te!==ln||$!==Gt)&&Re("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ye("WebGLTextures: Unsupported texture color space:",O)),v}function Pe(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(c.width=y.naturalWidth||y.width,c.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(c.width=y.displayWidth,c.height=y.displayHeight):(c.width=y.width,c.height=y.height),c}this.allocateTextureUnit=Ie,this.resetTextureUnits=Z,this.getTextureUnits=ee,this.setTextureUnits=Me,this.setTexture2D=pe,this.setTexture2DArray=ve,this.setTexture3D=be,this.setTextureCube=me,this.rebindTextures=Xt,this.setupRenderTarget=qt,this.updateRenderTargetMipmap=I,this.updateMultisampleRenderTarget=nt,this.setupDepthRenderbuffer=Wt,this.setupFrameBufferTexture=st,this.useMultisampledRTT=he,this.dispose=k}function nM(i,e){function t(n,s=On){let r;const a=We.getTransfer(s);if(n===Gt)return i.UNSIGNED_BYTE;if(n===fo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===po)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Qc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===$c)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Zc)return i.BYTE;if(n===Jc)return i.SHORT;if(n===cs)return i.UNSIGNED_SHORT;if(n===ho)return i.INT;if(n===un)return i.UNSIGNED_INT;if(n===en)return i.FLOAT;if(n===hn)return i.HALF_FLOAT;if(n===jc)return i.ALPHA;if(n===eu)return i.RGB;if(n===ln)return i.RGBA;if(n===zn)return i.DEPTH_COMPONENT;if(n===kn)return i.DEPTH_STENCIL;if(n===mo)return i.RED;if(n===go)return i.RED_INTEGER;if(n===$n)return i.RG;if(n===_o)return i.RG_INTEGER;if(n===vo)return i.RGBA_INTEGER;if(n===$s||n===js||n===er||n===tr)if(a===$e)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===$s)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===js)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===er)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===tr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===$s)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===js)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===er)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===tr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ma||n===Aa||n===Ea||n===ya)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ma)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Aa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ea)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ya)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ba||n===Ta||n===wa||n===Ra||n===Ca||n===or||n===Pa)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ba||n===Ta)return a===$e?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===wa)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ra)return r.COMPRESSED_R11_EAC;if(n===Ca)return r.COMPRESSED_SIGNED_R11_EAC;if(n===or)return r.COMPRESSED_RG11_EAC;if(n===Pa)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===La||n===Da||n===Ia||n===Ua||n===Na||n===Fa||n===Oa||n===Ba||n===ka||n===za||n===Ga||n===Ha||n===Va||n===Wa)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===La)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Da)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ia)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ua)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Na)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Fa)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Oa)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ba)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ka)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===za)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ga)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ha)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Va)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Wa)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Xa||n===qa||n===Ya)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Xa)return a===$e?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===qa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ya)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ka||n===Za||n===lr||n===Ja)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ka)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Za)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===lr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ja)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Li?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const iM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class rM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Mu(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new ei({vertexShader:iM,fragmentShader:sM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new wt(new Rn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class aM extends ti{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,p=null,g=null;const S=typeof XRWebGLBinding<"u",m=new rM,d={},M=t.getContextAttributes();let b=null,A=null;const C=[],T=[],_=new Oe;let E=null,N=null;const R=new zt;R.viewport=new at;const L=new zt;L.viewport=new at;const U=[R,L],G=new v_;let w=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let pe=C[J];return pe===void 0&&(pe=new zr,C[J]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(J){let pe=C[J];return pe===void 0&&(pe=new zr,C[J]=pe),pe.getGripSpace()},this.getHand=function(J){let pe=C[J];return pe===void 0&&(pe=new zr,C[J]=pe),pe.getHandSpace()};function X(J){const pe=T.indexOf(J.inputSource);if(pe===-1)return;const ve=C[pe];ve!==void 0&&(ve.update(J.inputSource,J.frame,c||a),ve.dispatchEvent({type:J.type,data:J.inputSource}))}function H(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",j);for(let J=0;J<C.length;J++){const pe=T[J];pe!==null&&(T[J]=null,C[J].disconnect(pe))}w=null,k=null,m.reset();for(const J in d)delete d[J];if(e.setRenderTarget(b),p=null,h=null,f=null,s=null,A=null,Ie.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(_.width,_.height,!1),N!==null){const J=N.camera;J.fov=N.fov,J.zoom=N.zoom,J.updateProjectionMatrix(),N=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&Re("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&Re("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f===null&&S&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",H),s.addEventListener("inputsourceschange",j),M.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(_),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,be=null,me=null;M.depth&&(me=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=M.stencil?kn:zn,be=M.stencil?Li:un);const Ne={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(Ne),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),A=new cn(h.textureWidth,h.textureHeight,{format:ln,type:Gt,depthTexture:new Di(h.textureWidth,h.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{const ve={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,ve),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),A=new cn(p.framebufferWidth,p.framebufferHeight,{format:ln,type:Gt,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ie.setContext(s),Ie.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function j(J){for(let pe=0;pe<J.removed.length;pe++){const ve=J.removed[pe],be=T.indexOf(ve);be>=0&&(T[be]=null,C[be].disconnect(ve))}for(let pe=0;pe<J.added.length;pe++){const ve=J.added[pe];let be=T.indexOf(ve);if(be===-1){for(let Ne=0;Ne<C.length;Ne++)if(Ne>=T.length){T.push(ve),be=Ne;break}else if(T[Ne]===null){T[Ne]=ve,be=Ne;break}if(be===-1)break}const me=C[be];me&&me.connect(ve)}}function W(J,pe){pe===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(pe.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let pe=J.near,ve=J.far;m.texture!==null&&(m.depthNear>0&&(pe=m.depthNear),m.depthFar>0&&(ve=m.depthFar)),G.near=L.near=R.near=pe,G.far=L.far=R.far=ve,(w!==G.near||k!==G.far)&&(s.updateRenderState({depthNear:G.near,depthFar:G.far}),w=G.near,k=G.far),G.layers.mask=J.layers.mask|6,R.layers.mask=G.layers.mask&-5,L.layers.mask=G.layers.mask&-3;const be=J.parent,me=G.cameras;W(G,be);for(let Ne=0;Ne<me.length;Ne++)W(me[Ne],be);G.projectionMatrix.copy(R.projectionMatrix),G.projectionMatrixInverse.copy(R.projectionMatrixInverse),N===null&&J.isPerspectiveCamera&&(N={camera:J,fov:J.fov,zoom:J.zoom}),Z(J,G,be)};function Z(J,pe,ve){ve===null?J.matrix.copy(pe.matrixWorld):(J.matrix.copy(ve.matrixWorld),J.matrix.invert(),J.matrix.multiply(pe.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(pe.projectionMatrix),J.projectionMatrixInverse.copy(pe.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=$a*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(J){l=J,h!==null&&(h.fixedFoveation=J),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=J)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(G)},this.getCameraTexture=function(J){return d[J]};let ee=null;function Me(J,pe){if(u=pe.getViewerPose(c||a),g=pe,u!==null){const ve=u.views;p!==null&&(e.setRenderTargetFramebuffer(A,p.framebuffer),e.setRenderTarget(A));let be=!1;ve.length!==G.cameras.length&&(G.cameras.length=0,be=!0);for(let we=0;we<ve.length;we++){const Je=ve[we];let je=null;if(p!==null)je=p.getViewport(Je);else{const xt=f.getViewSubImage(h,Je);je=xt.viewport,we===0&&(e.setRenderTargetTextures(A,xt.colorTexture,xt.depthStencilTexture),e.setRenderTarget(A))}let Ge=U[we];Ge===void 0&&(Ge=new zt,Ge.layers.enable(we),Ge.viewport=new at,U[we]=Ge),Ge.matrix.fromArray(Je.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray(Je.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set(je.x,je.y,je.width,je.height),we===0&&(G.matrix.copy(Ge.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),be===!0&&G.cameras.push(Ge)}const me=s.enabledFeatures;if(me&&me.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&S){f=n.getBinding();const we=f.getDepthInformation(ve[0]);we&&we.isValid&&we.texture&&m.init(we,s.renderState)}if(me&&me.includes("camera-access")&&S){e.state.unbindTexture(),f=n.getBinding();for(let we=0;we<ve.length;we++){const Je=ve[we].camera;if(Je){let je=d[Je];je||(je=new Mu,d[Je]=je);const Ge=f.getCameraImage(Je);je.sourceTexture=Ge}}}}for(let ve=0;ve<C.length;ve++){const be=T[ve],me=C[ve];be!==null&&me!==void 0&&me.update(be,pe,c||a)}ee&&ee(J,pe),pe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:pe}),g=null}const Ie=new Ru;Ie.setAnimationLoop(Me),this.setAnimationLoop=function(J){ee=J},this.dispose=function(){}}}const oM=new Ze,Bu=new De;Bu.set(-1,0,0,0,1,0,0,0,1);function lM(i,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Au(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,M,b,A){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?r(m,d):d.isMeshLambertMaterial?(r(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(m,d),f(m,d)):d.isMeshPhongMaterial?(r(m,d),u(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,A)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),S(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,M,b):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Ot&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Ot&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const M=e.get(d),b=M.envMap,A=M.envMapRotation;b&&(m.envMap.value=b,m.envMapRotation.value.setFromMatrix4(oM.makeRotationFromEuler(A)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Bu),m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,M,b){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*M,m.scale.value=b*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,M){m.ior.value=d.ior,d.diffuseRoughness>0&&(m.diffuseRoughness.value=d.diffuseRoughness,d.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=d.diffuseRoughnessMap,t(d.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ot&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.retroreflectivity>0&&(m.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=d.iridescenceThicknessMaximum,d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function S(m,d){const M=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function cM(i,e,t,n){let s={},r={};function a(M,b){const A=b.program;n.uniformBlockBinding(M,A,s[M.id])}function o(M,b){let A=s[M.id];A===void 0&&(g(M),A=l(M),s[M.id]=A,M.addEventListener("dispose",m));const C=b.program;n.updateUBOMapping(M,C);const T=e.render.frame;r[M.id]!==T&&(c(M),r[M.id]=T)}function l(M){const b=i.createBuffer(),A=M.__size,C=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,A,C),i.bindBuffer(i.UNIFORM_BUFFER,null),b}function c(M){const b=s[M.id],A=M.uniforms,C=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let T=0,_=A.length;T<_;T++){const E=A[T];if(Array.isArray(E))for(let N=0,R=E.length;N<R;N++)u(E[N],T,N,C);else u(E,T,0,C)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(M,b,A,C){if(h(M,b,A,C)===!0){const T=M.__offset,_=M.value;if(Array.isArray(_)){let E=0;for(let N=0;N<_.length;N++){const R=_[N],L=S(R,!0);f(R,M.__data,E),E+=L.storage/Float32Array.BYTES_PER_ELEMENT}}else f(_,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,T,M.__data)}}function f(M,b,A){typeof M=="number"||typeof M=="boolean"?b[A]=M:M.isMatrix3?(b[A]=M.elements[0],b[A+1]=M.elements[1],b[A+2]=M.elements[2],b[A+3]=0,b[A+4]=M.elements[3],b[A+5]=M.elements[4],b[A+6]=M.elements[5],b[A+7]=0,b[A+8]=M.elements[6],b[A+9]=M.elements[7],b[A+10]=M.elements[8],b[A+11]=0):ArrayBuffer.isView(M)?b.set(M.subarray(0,b.length-A),A):M.toArray(b,A)}function h(M,b,A,C){const T=M.value,_=b+"_"+A;if(Array.isArray(T)){C[_]===void 0&&(C[_]=[]);const E=C[_];let N=!1;for(let R=0;R<T.length;R++)p(T[R],E,R)===!0&&(N=!0);return N}return p(T,C,_)}function p(M,b,A){if(b[A]===void 0)return typeof M=="number"||typeof M=="boolean"?b[A]=M:ArrayBuffer.isView(M)?b[A]=M.slice():b[A]=M.clone(),!0;{const C=b[A];if(typeof M=="number"||typeof M=="boolean"){if(C!==M)return b[A]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(C.equals(M)===!1)return C.copy(M),!0}}return!1}function g(M){const b=M.uniforms;let A=0;const C=16;for(let _=0,E=b.length;_<E;_++){const N=Array.isArray(b[_])?b[_]:[b[_]];for(let R=0,L=N.length;R<L;R++){const U=N[R],G=Array.isArray(U.value)?U.value:[U.value],w=Array.isArray(b[_])||Array.isArray(U.value);let k=A;for(let H=0,j=G.length;H<j;H++){const W=G[H],Z=S(W,w),ee=A%C,Me=ee%Z.boundary,Ie=ee+Me;A+=Me,Ie!==0&&C-Ie<Z.storage&&(A+=C-Ie),H===0&&(k=A),A+=Z.storage}const X=U.type==="int"?Int32Array:U.type==="uint"?Uint32Array:Float32Array;U.__data=new X((A-k)/Float32Array.BYTES_PER_ELEMENT),U.__offset=k}}const T=A%C;return T>0&&(A+=C-T),M.__size=A,M.__cache={},this}function S(M,b){const A={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(A.boundary=4,A.storage=4):M.isVector2?(A.boundary=8,A.storage=8):M.isVector3||M.isColor?(A.boundary=16,A.storage=12):M.isVector4?(A.boundary=16,A.storage=16):M.isMatrix3?(A.boundary=16,A.storage=48):M.isMatrix4?(A.boundary=16,A.storage=64):M.isTexture?Re("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(A.boundary=16,A.storage=M.byteLength):Re("WebGLRenderer: Unsupported uniform value type.",M),b===!0&&(A.boundary=16,A.storage=Math.ceil(A.storage/16)*16),A}function m(M){const b=M.target;b.removeEventListener("dispose",m),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function d(){for(const M in s)i.deleteBuffer(s[M]);s={},r={}}return{bind:a,update:o,dispose:d}}const uM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let an=null;function hM(){return an===null&&(an=new gu(uM,16,16,$n,hn),an.name="DFG_LUT",an.minFilter=Ft,an.magFilter=Ft,an.wrapS=En,an.wrapT=En,an.generateMipmaps=!1,an.needsUpdate=!0),an}class ku{constructor(e={}){const{canvas:t=Cg(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:p=Gt}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;const S=p,m=new Set([vo,_o,go]),d=new Set([Gt,un,cs,Li,fo,po]),M=new Uint32Array(4),b=new Int32Array(4),A={textures:[],min:[],max:[],resolution:[]};let C=null,T=null;const _=[],E=[];let N=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=yn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let L=!1,U=null,G=null,w=null,k=null;this._outputColorSpace=Ut;let X=0,H=0,j=null,W=-1,Z=null;const ee=new at,Me=new at;let Ie=null;const J=new ze(0);let pe=0,ve=t.width,be=t.height,me=1,Ne=null,lt=null;const we=new at(0,0,ve,be),Je=new at(0,0,ve,be);let je=!1;const Ge=new fs,xt=new So;let ht=!1,Dt=!1;const st=new Ze,sn=new z,mt=new at,Wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xt=!1;function qt(){return j===null?me:1}let I=n;function Yt(x,D){return t.getContext(x,D)}let nt,it,he,ft,Te,Pe,y,v,O,te,$,se,ce,Y,K,ae,P,Q,q,oe,ie,re,Ee;try{const x={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${co}`),t.addEventListener("webglcontextlost",ye,!1),t.addEventListener("webglcontextrestored",Fe,!1),t.addEventListener("webglcontextcreationerror",fe,!1),I===null){const D="webgl2";if(I=Yt(D,x),I===null)throw Yt(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Be()}catch(x){throw t.removeEventListener("webglcontextlost",ye,!1),t.removeEventListener("webglcontextrestored",Fe,!1),t.removeEventListener("webglcontextcreationerror",fe,!1),Ye("WebGLRenderer: "+x.message),x}function Be(){nt=new mx(I),nt.init(),ie=new nM(I,nt),it=new sx(I,nt,e,ie),he=new eM(I,nt),it.reversedDepthBuffer&&h&&he.buffers.depth.setReversed(!0),G=I.createFramebuffer(),w=I.createFramebuffer(),k=I.createFramebuffer(),ft=new vx(I),Te=new zS,Pe=new tM(I,nt,he,Te,it,ie,ft),y=new px(R),v=new S_(I),re=new nx(I,v),O=new gx(I,v,ft,re),te=new Sx(I,O,v,re,ft),Q=new xx(I,it,Pe),K=new rx(Te),$=new kS(R,y,nt,it,re,K),se=new lM(R,Te),ce=new HS,Y=new KS(nt),P=new tx(R,y,he,te,g,l),ae=new jS(R,te,it),Ee=new cM(I,ft,it,he),q=new ix(I,nt,ft),oe=new _x(I,nt,ft),ft.programs=$.programs,R.capabilities=it,R.extensions=nt,R.properties=Te,R.renderLists=ce,R.shadowMap=ae,R.state=he,R.info=ft}S!==Gt&&(N=new Ax(S,t.width,t.height,o,s,r));const ne=new aM(R,I);this.xr=ne,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const x=nt.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=nt.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return me},this.setPixelRatio=function(x){x!==void 0&&(me=x,this.setSize(ve,be,!1))},this.getSize=function(x){return x.set(ve,be)},this.setSize=function(x,D,V=!0){if(ne.isPresenting){Re("WebGLRenderer: Can't change size while VR device is presenting.");return}ve=x,be=D,t.width=Math.floor(x*me),t.height=Math.floor(D*me),V===!0&&(t.style.width=x+"px",t.style.height=D+"px"),N!==null&&N.setSize(t.width,t.height),this.setViewport(0,0,x,D)},this.getDrawingBufferSize=function(x){return x.set(ve*me,be*me).floor()},this.setDrawingBufferSize=function(x,D,V){ve=x,be=D,me=V,t.width=Math.floor(x*V),t.height=Math.floor(D*V),this.setViewport(0,0,x,D)},this.setEffects=function(x){if(S===Gt){Ye("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(x){for(let D=0;D<x.length;D++)if(x[D].isOutputPass===!0){Re("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(x||[])},this.getCurrentViewport=function(x){return x.copy(ee)},this.getViewport=function(x){return x.copy(we)},this.setViewport=function(x,D,V,F){x.isVector4?we.set(x.x,x.y,x.z,x.w):we.set(x,D,V,F),he.viewport(ee.copy(we).multiplyScalar(qt()).round())},this.getScissor=function(x){return x.copy(Je)},this.setScissor=function(x,D,V,F){x.isVector4?Je.set(x.x,x.y,x.z,x.w):Je.set(x,D,V,F),he.scissor(Me.copy(Je).multiplyScalar(qt()).round())},this.getScissorTest=function(){return je},this.setScissorTest=function(x){he.setScissorTest(je=x)},this.setOpaqueSort=function(x){Ne=x},this.setTransparentSort=function(x){lt=x},this.getClearColor=function(x){return x.copy(P.getClearColor())},this.setClearColor=function(){P.setClearColor(...arguments)},this.getClearAlpha=function(){return P.getClearAlpha()},this.setClearAlpha=function(){P.setClearAlpha(...arguments)},this.clear=function(x=!0,D=!0,V=!0){let F=0;if(x){let B=!1;if(j!==null){const ue=j.texture.format;B=m.has(ue)}if(B){const ue=j.texture.type,_e=d.has(ue),le=P.getClearColor(),ge=P.getClearAlpha(),Ae=le.r,Ue=le.g,He=le.b;_e?(M[0]=Ae,M[1]=Ue,M[2]=He,M[3]=ge,I.clearBufferuiv(I.COLOR,0,M)):(b[0]=Ae,b[1]=Ue,b[2]=He,b[3]=ge,I.clearBufferiv(I.COLOR,0,b))}else F|=I.COLOR_BUFFER_BIT}D&&(F|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),V&&(F|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F!==0&&I.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(x){x.setRenderer(this),U=x},this.dispose=function(){t.removeEventListener("webglcontextlost",ye,!1),t.removeEventListener("webglcontextrestored",Fe,!1),t.removeEventListener("webglcontextcreationerror",fe,!1),P.dispose(),ce.dispose(),Y.dispose(),Pe.dispose(),Te.dispose(),y.dispose(),te.dispose(),O.dispose(),re.dispose(),Ee.dispose(),$.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",Co),ne.removeEventListener("sessionend",Po),Hn.stop()};function ye(x){x.preventDefault(),hr("WebGLRenderer: Context Lost."),L=!0}function Fe(){hr("WebGLRenderer: Context Restored."),L=!1;const x=ft.autoReset,D=ae.enabled,V=ae.autoUpdate,F=ae.needsUpdate,B=ae.type;Be(),ft.autoReset=x,ae.enabled=D,ae.autoUpdate=V,ae.needsUpdate=F,ae.type=B}function fe(x){Ye("WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function Qe(x){const D=x.target;D.removeEventListener("dispose",Qe),gt(D)}function gt(x){Cn(x),Te.remove(x)}function Cn(x){const D=Te.get(x).programs;D!==void 0&&(D.forEach(function(V){$.releaseProgram(V)}),x.isShaderMaterial&&$.releaseShaderCache(x))}this.renderBufferDirect=function(x,D,V,F,B,ue){D===null&&(D=Wt);const _e=B.isMesh&&B.matrixWorld.determinantAffine()<0,le=Ju(x,D,V,F,B);he.setMaterial(F,_e);let ge=V.index,Ae=1;if(F.wireframe===!0){if(ge=O.getWireframeAttribute(V),ge===void 0)return;Ae=2}const Ue=V.drawRange,He=V.attributes.position;let xe=Ue.start*Ae,Ve=(Ue.start+Ue.count)*Ae;ue!==null&&(xe=Math.max(xe,ue.start*Ae),Ve=Math.min(Ve,(ue.start+ue.count)*Ae)),ge!==null?(xe=Math.max(xe,0),Ve=Math.min(Ve,ge.count)):He!=null&&(xe=Math.max(xe,0),Ve=Math.min(Ve,He.count));const ct=Ve-xe;if(ct<0||ct===1/0)return;re.setup(B,F,le,V,ge);let tt,et=q;if(ge!==null&&(tt=v.get(ge),et=oe,et.setIndex(tt)),B.isMesh)F.wireframe===!0?(he.setLineWidth(F.wireframeLinewidth*qt()),et.setMode(I.LINES)):et.setMode(I.TRIANGLES);else if(B.isLine){let Mt=F.linewidth;Mt===void 0&&(Mt=1),he.setLineWidth(Mt*qt()),B.isLineSegments?et.setMode(I.LINES):B.isLineLoop?et.setMode(I.LINE_LOOP):et.setMode(I.LINE_STRIP)}else B.isPoints?et.setMode(I.POINTS):B.isSprite&&et.setMode(I.TRIANGLES);if(B.isBatchedMesh)if(nt.get("WEBGL_multi_draw"))et.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Mt=B._multiDrawStarts,Se=B._multiDrawCounts,Rt=B._multiDrawCount,Ke=ge?v.get(ge).bytesPerElement:1,Vn=Te.get(F).currentProgram.getUniforms();for(let At=0;At<Rt;At++)Vn.setValue(I,"_gl_DrawID",At),et.render(Mt[At]/Ke,Se[At])}else if(B.isInstancedMesh)et.renderInstances(xe,ct,B.count);else if(V.isInstancedBufferGeometry){const Mt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Se=Math.min(V.instanceCount,Mt);et.renderInstances(xe,ct,Se)}else et.render(xe,ct)};function Ro(x,D,V,F){U!==null&&x.isNodeMaterial&&U.setObject(F,x),ht===!0&&K.setState(x,V,!1),x.transparent===!0&&x.side===An&&x.forceSinglePass===!1?(x.side=Ot,x.needsUpdate=!0,zi(x,D,F),x.side=Qn,x.needsUpdate=!0,zi(x,D,F),x.side=An):zi(x,D,F)}this.compile=function(x,D,V=null){V===null&&(V=x),U!==null&&U.renderStart(x,D,V),T=Y.get(V),T.init(D),E.push(T),V.traverseVisible(function(B){B.isLight&&B.layers.test(D.layers)&&(T.pushLight(B),B.castShadow&&T.pushShadow(B))}),x!==V&&x.traverseVisible(function(B){B.isLight&&B.layers.test(D.layers)&&(T.pushLight(B),B.castShadow&&T.pushShadow(B))}),T.setupLights(),U!==null&&U.updateLights(T.state.lightsArray),Dt=this.localClippingEnabled,ht=K.init(this.clippingPlanes,Dt),ht===!0&&K.setGlobalState(this.clippingPlanes,D),U!==null&&ae.render(T.state.shadowsArray,V,D);const F=new Set;return x.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const ue=B.material;if(ue)if(Array.isArray(ue))for(let _e=0;_e<ue.length;_e++){const le=ue[_e];Ro(le,V,D,B),F.add(le)}else Ro(ue,V,D,B),F.add(ue)}),T=E.pop(),U!==null&&U.renderEnd(),F},this.compileAsync=function(x,D,V=null){const F=this.compile(x,D,V);return new Promise(B=>{function ue(){if(F.forEach(function(_e){const ge=Te.get(_e).currentProgram;(ge===void 0||ge.isReady())&&F.delete(_e)}),F.size===0){B(x);return}setTimeout(ue,10)}nt.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let br=null;function Ku(x){br&&br(x)}function Co(){Hn.stop()}function Po(){Hn.start()}const Hn=new Ru;Hn.setAnimationLoop(Ku),typeof self<"u"&&Hn.setContext(self),this.setAnimationLoop=function(x){br=x,ne.setAnimationLoop(x),x===null?Hn.stop():Hn.start()},ne.addEventListener("sessionstart",Co),ne.addEventListener("sessionend",Po),this.render=function(x,D){if(D!==void 0&&D.isCamera!==!0){Ye("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;U!==null&&U.renderStart(x,D);const V=ne.enabled===!0&&ne.isPresenting===!0,F=N!==null&&(j===null||V)&&N.begin(R,j);if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(D),D=ne.getCamera()),x.isScene===!0&&x.onBeforeRender(R,x,D,j),T=Y.get(x,E.length),T.init(D),T.state.textureUnits=Pe.getTextureUnits(),E.push(T),st.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),D.isArrayCamera?xt.setFromArrayCamera(D):Ge.setFromProjectionMatrix(st,tn,D.reversedDepth),Dt=this.localClippingEnabled,ht=K.init(this.clippingPlanes,Dt),C=ce.get(x,_.length),C.init(),_.push(C),this.info.render.frame++,ne.enabled===!0&&ne.isPresenting===!0){const _e=R.xr.getDepthSensingMesh();_e!==null&&Tr(_e,D,-1/0,R.sortObjects)}Tr(x,D,0,R.sortObjects),C.finish(),U!==null&&U.updateLights(T.state.lightsArray),R.sortObjects===!0&&C.sort(Ne,lt),Xt=ne.enabled===!1||ne.isPresenting===!1||ne.hasDepthSensing()===!1,Xt&&P.addToRenderList(C,x),this.info.autoReset===!0&&this.info.reset(),ht===!0&&K.beginShadows();const B=T.state.shadowsArray;if(ae.render(B,x,D),ht===!0&&K.endShadows(),(F&&N.hasRenderPass())===!1){const _e=C.opaque,le=C.transmissive;if(T.setupLights(),D.isArrayCamera){const ge=D.cameras;if(le.length>0)for(let Ae=0,Ue=ge.length;Ae<Ue;Ae++){const He=ge[Ae];Do(_e,le,x,He)}Xt&&P.render(x);for(let Ae=0,Ue=ge.length;Ae<Ue;Ae++){const He=ge[Ae];Lo(C,x,He,He.viewport)}}else le.length>0&&Do(_e,le,x,D),Xt&&P.render(x),Lo(C,x,D)}j!==null&&H===0&&(Pe.updateMultisampleRenderTarget(j),Pe.updateRenderTargetMipmap(j)),F&&N.end(R),x.isScene===!0&&x.onAfterRender(R,x,D),re.resetDefaultState(),W=-1,Z=null,E.pop(),E.length>0?(T=E[E.length-1],Pe.setTextureUnits(T.state.textureUnits),ht===!0&&K.setGlobalState(R.clippingPlanes,T.state.camera)):T=null,_.pop(),_.length>0?C=_[_.length-1]:C=null,U!==null&&U.renderEnd()};function Tr(x,D,V,F){if(x.visible===!1)return;if(x.layers.test(D.layers)){if(x.isGroup)V=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(D);else if(x.isLight)T.pushLight(x),x.castShadow&&T.pushShadow(x);else if(x.isSprite){const _e=D.isArrayCamera?xt:Ge;if(!x.frustumCulled||x.intersectsFrustum(_e)){F&&mt.setFromMatrixPosition(x.matrixWorld).applyMatrix4(st);const le=te.update(x),ge=x.material;ge.visible&&C.push(x,le,ge,V,mt.z,null,D)}}else if(x.isMesh||x.isLine||x.isPoints){const _e=D.isArrayCamera?xt:Ge;if(!x.frustumCulled||x.intersectsFrustum(_e)){const le=te.update(x),ge=x.material;if(F&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),mt.copy(x.boundingSphere.center)):(le.boundingSphere===null&&le.computeBoundingSphere(),mt.copy(le.boundingSphere.center)),mt.applyMatrix4(x.matrixWorld).applyMatrix4(st)),Array.isArray(ge)){const Ae=le.groups;for(let Ue=0,He=Ae.length;Ue<He;Ue++){const xe=Ae[Ue],Ve=ge[xe.materialIndex];Ve&&Ve.visible&&C.push(x,le,Ve,V,mt.z,xe,D)}}else ge.visible&&C.push(x,le,ge,V,mt.z,null,D)}}}const ue=x.children;for(let _e=0,le=ue.length;_e<le;_e++)Tr(ue[_e],D,V,F)}function Lo(x,D,V,F){const{opaque:B,transmissive:ue,transparent:_e}=x;T.setupLightsView(V),ht===!0&&K.setGlobalState(R.clippingPlanes,V),F&&he.viewport(ee.copy(F)),B.length>0&&gs(B,D,V),ue.length>0&&gs(ue,D,V),_e.length>0&&gs(_e,D,V),he.buffers.depth.setTest(!0),he.buffers.depth.setMask(!0),he.buffers.color.setMask(!0),he.setPolygonOffset(!1)}function Do(x,D,V,F){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[F.id]===void 0){const xe=nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[F.id]=new cn(1,1,{generateMipmaps:!0,type:xe?hn:Gt,minFilter:Bn,samples:Math.max(4,it.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:We.workingColorSpace})}const ue=T.state.transmissionRenderTarget[F.id],_e=F.viewport||ee;ue.setSize(_e.z*R.transmissionResolutionScale,_e.w*R.transmissionResolutionScale);const le=R.getRenderTarget(),ge=R.getActiveCubeFace(),Ae=R.getActiveMipmapLevel();R.setRenderTarget(ue),R.getClearColor(J),pe=R.getClearAlpha(),pe<1&&R.setClearColor(16777215,.5),R.clear(),Xt&&P.render(V);const Ue=R.toneMapping;R.toneMapping=yn;const He=F.viewport;if(F.viewport!==void 0&&(F.viewport=void 0),T.setupLightsView(F),ht===!0&&K.setGlobalState(R.clippingPlanes,F),gs(x,V,F),Pe.updateMultisampleRenderTarget(ue),Pe.updateRenderTargetMipmap(ue),nt.has("WEBGL_multisampled_render_to_texture")===!1){let xe=!1;for(let Ve=0,ct=D.length;Ve<ct;Ve++){const tt=D[Ve],{object:et,geometry:Mt,material:Se,group:Rt}=tt;if(Se.side===An&&et.layers.test(F.layers)){const Ke=Se.side;Se.side=Ot,Se.needsUpdate=!0,Io(et,V,F,Mt,Se,Rt),Se.side=Ke,Se.needsUpdate=!0,xe=!0}}xe===!0&&(Pe.updateMultisampleRenderTarget(ue),Pe.updateRenderTargetMipmap(ue))}R.setRenderTarget(le,ge,Ae),R.setClearColor(J,pe),He!==void 0&&(F.viewport=He),R.toneMapping=Ue}function gs(x,D,V){const F=D.isScene===!0?D.overrideMaterial:null;for(let B=0,ue=x.length;B<ue;B++){const _e=x[B],{object:le,geometry:ge,group:Ae}=_e;let Ue=_e.material;Ue.allowOverride===!0&&F!==null&&(Ue=F),le.layers.test(V.layers)&&Io(le,D,V,ge,Ue,Ae)}}function Io(x,D,V,F,B,ue){U!==null&&B.isNodeMaterial&&U.setObject(x,B),x.onBeforeRender(R,D,V,F,B,ue),x.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),B.onBeforeRender(R,D,V,F,x,ue),B.transparent===!0&&B.side===An&&B.forceSinglePass===!1?(B.side=Ot,B.needsUpdate=!0,R.renderBufferDirect(V,D,F,B,x,ue),B.side=Qn,B.needsUpdate=!0,R.renderBufferDirect(V,D,F,B,x,ue),B.side=An):R.renderBufferDirect(V,D,F,B,x,ue),x.onAfterRender(R,D,V,F,B,ue)}function Uo(x){let D=0;for(const V of x)V.texture!==null&&D++;return D}function zi(x,D,V){D.isScene!==!0&&(D=Wt);const F=Te.get(x),B=T.state.lights,ue=T.state.shadowsArray,_e=B.state.version,le=$.getParameters(x,B.state,ue,D,V,T.state.lightProbeGridArray),ge=$.getProgramCacheKey(le);let Ae=F.programs;F.environment=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?D.environment:null,F.fog=D.fog;const Ue=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap;F.envMap=y.get(x.envMap||F.environment,Ue),F.envMapRotation=F.environment!==null&&x.envMap===null?D.environmentRotation:x.envMapRotation,Ae===void 0&&(x.addEventListener("dispose",Qe),Ae=new Map,F.programs=Ae,F.programVariants=new Map);let He=Ae.get(ge);if(He!==void 0){if(F.currentProgram===He&&F.lightsStateVersion===_e)return Fo(x,le),He}else le.uniforms=$.getUniforms(x),U!==null&&x.isNodeMaterial&&U.build(x,V,le),x.onBeforeCompile(le,R),He=$.acquireProgram(le,ge),Ae.set(ge,He),F.uniforms=le.uniforms;const xe=F.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(xe.clippingPlanes=K.uniform),Fo(x,le),F.needsLights=$u(x),F.lightsStateVersion=_e,F.needsLights&&(xe.ambientLightColor.value=B.state.ambient,xe.lightProbe.value=B.state.probe,xe.sunLights.value=B.state.sun,xe.sunLightShadows.value=B.state.sunShadow,xe.directionalLights.value=B.state.directional,xe.directionalLightShadows.value=B.state.directionalShadow,xe.spotLights.value=B.state.spot,xe.spotLightShadows.value=B.state.spotShadow,xe.rectAreaLights.value=B.state.rectArea,xe.ltc_1.value=B.state.rectAreaLTC1,xe.ltc_2.value=B.state.rectAreaLTC2,xe.pointLights.value=B.state.point,xe.pointLightShadows.value=B.state.pointShadow,xe.hemisphereLights.value=B.state.hemi,xe.sunShadowMatrix.value=B.state.sunShadowMatrix,xe.sunShadowCascade.value=B.state.sunShadowCascade,xe.directionalShadowMatrix.value=B.state.directionalShadowMatrix,xe.spotLightMatrix.value=B.state.spotLightMatrix,xe.spotLightMap.value=B.state.spotLightMap,xe.pointShadowMatrix.value=B.state.pointShadowMatrix),F.numLightProbeGrids=Uo(T.state.lightProbeGridArray),F.currentProgram=He,F.uniformsList=null,He}function Zu(x,D,V,F,B){const ue=Te.get(x),_e=ue.currentProgram.id+","+F+","+B;let le=ue.programVariants.get(_e);return le===void 0?(le=zi(x,D,V),ue.programVariants.set(_e,le)):(ue.currentProgram=le,ue.uniformsList=null,ue.outputColorSpace=F,ue.toneMapping=B),le}function No(x){if(x.uniformsList===null){const D=x.currentProgram.getUniforms();x.uniformsList=sr.seqWithValue(D.seq,x.uniforms)}return x.uniformsList}function Fo(x,D){const V=Te.get(x);V.outputColorSpace=D.outputColorSpace,V.batching=D.batching,V.batchingColor=D.batchingColor,V.instancing=D.instancing,V.instancingColor=D.instancingColor,V.instancingMorph=D.instancingMorph,V.skinning=D.skinning,V.morphTargets=D.morphTargets,V.morphNormals=D.morphNormals,V.morphColors=D.morphColors,V.morphTargetsCount=D.morphTargetsCount,V.numClippingPlanes=D.numClippingPlanes,V.numIntersection=D.numClipIntersection,V.vertexAlphas=D.vertexAlphas,V.vertexTangents=D.vertexTangents,V.toneMapping=D.toneMapping}function Ju(x,D,V,F,B){D.isScene!==!0&&(D=Wt),Pe.resetTextureUnits();const ue=D.fog,_e=F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial?D.environment:null,le=j===null?R.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:We.workingColorSpace,ge=F.isMeshStandardMaterial||F.isMeshLambertMaterial&&!F.envMap||F.isMeshPhongMaterial&&!F.envMap,Ae=y.get(F.envMap||_e,ge),Ue=F.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,He=!!V.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),xe=!!V.morphAttributes.position,Ve=!!V.morphAttributes.normal,ct=!!V.morphAttributes.color;let tt=yn;F.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(tt=R.toneMapping);const et=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Mt=et!==void 0?et.length:0,Se=Te.get(F),Rt=T.state.lights;if(ht===!0&&(Dt===!0||x!==Z)){const rt=x===Z&&F.id===W;K.setState(F,x,rt)}let Ke=!1,Vn=!1;F.version===Se.__version?Se.needsLights&&Se.lightsStateVersion!==Rt.state.version||B.isBatchedMesh&&Se.batching===!1||!B.isBatchedMesh&&Se.batching===!0||B.isBatchedMesh&&Se.batchingColor===!0&&B._colorsTexture===null||B.isBatchedMesh&&Se.batchingColor===!1&&B._colorsTexture!==null||B.isInstancedMesh&&Se.instancing===!1||!B.isInstancedMesh&&Se.instancing===!0||B.isSkinnedMesh&&Se.skinning===!1||!B.isSkinnedMesh&&Se.skinning===!0||B.isInstancedMesh&&Se.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Se.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Se.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Se.instancingMorph===!1&&B.morphTexture!==null||Se.envMap!==Ae||F.fog===!0&&Se.fog!==ue||Se.numClippingPlanes!==void 0&&(Se.numClippingPlanes!==K.numPlanes||Se.numIntersection!==K.numIntersection)||Se.vertexAlphas!==Ue||Se.vertexTangents!==He||Se.morphTargets!==xe||Se.morphNormals!==Ve||Se.morphColors!==ct||Se.morphTargetsCount!==Mt||Se.numLightProbeGrids!==Uo(T.state.lightProbeGridArray)?Ke=!0:(Se.outputColorSpace!==le||Se.toneMapping!==tt)&&(Vn=!0):(Ke=!0,Se.__version=F.version);let At=Se.currentProgram;(Ke===!0||Vn===!0)&&(At=Vn===!0?Zu(F,D,B,le,tt):zi(F,D,B),U&&F.isNodeMaterial&&U.onUpdateProgram(F,At,Se));let _s=!1,Pn=!1,Wn=!1;const qe=At.getUniforms(),St=Se.uniforms;if(he.useProgram(At.program)&&(_s=!0,Pn=!0,Wn=!0),F.id!==W&&(W=F.id,Pn=!0),_s||Z!==x){he.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),qe.setValue(I,"projectionMatrix",x.projectionMatrix),qe.setValue(I,"viewMatrix",x.matrixWorldInverse);const _t=qe.map.cameraPosition;_t!==void 0&&_t.setValue(I,sn.setFromMatrixPosition(x.matrixWorld)),it.logarithmicDepthBuffer&&qe.setValue(I,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&qe.setValue(I,"isOrthographic",x.isOrthographicCamera===!0),Z!==x&&(Z=x,Pn=!0,Wn=!0)}if(Se.needsLights&&(Rt.state.sunShadowMap.length>0&&qe.setValue(I,"sunShadowMap",Rt.state.sunShadowMap,Pe),Rt.state.directionalShadowMap.length>0&&qe.setValue(I,"directionalShadowMap",Rt.state.directionalShadowMap,Pe),Rt.state.spotShadowMap.length>0&&qe.setValue(I,"spotShadowMap",Rt.state.spotShadowMap,Pe),Rt.state.pointShadowMap.length>0&&qe.setValue(I,"pointShadowMap",Rt.state.pointShadowMap,Pe)),B.isSkinnedMesh){qe.setOptional(I,B,"bindMatrix"),qe.setOptional(I,B,"bindMatrixInverse");const rt=B.skeleton;rt&&(rt.boneTexture===null&&rt.computeBoneTexture(),qe.setValue(I,"boneTexture",rt.boneTexture,Pe))}B.isBatchedMesh&&(qe.setOptional(I,B,"batchingTexture"),qe.setValue(I,"batchingTexture",B._matricesTexture,Pe),qe.setOptional(I,B,"batchingIdTexture"),qe.setValue(I,"batchingIdTexture",B._indirectTexture,Pe),qe.setOptional(I,B,"batchingColorTexture"),B._colorsTexture!==null&&qe.setValue(I,"batchingColorTexture",B._colorsTexture,Pe));const Jt=V.morphAttributes;if((Jt.position!==void 0||Jt.normal!==void 0||Jt.color!==void 0)&&Q.update(B,V,At),(Pn||Se.receiveShadow!==B.receiveShadow)&&(Se.receiveShadow=B.receiveShadow,qe.setValue(I,"receiveShadow",B.receiveShadow)),(F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial)&&F.envMap===null&&D.environment!==null&&(St.envMapIntensity.value=D.environmentIntensity),St.dfgLUT!==void 0&&(St.dfgLUT.value=hM()),Pn){if(qe.setValue(I,"toneMappingExposure",R.toneMappingExposure),Se.needsLights&&Qu(St,Wn),ue&&F.fog===!0&&se.refreshFogUniforms(St,ue),se.refreshMaterialUniforms(St,F,me,be,T.state.transmissionRenderTarget[x.id]),Se.needsLights&&Se.numLightProbeGrids>0){const rt=A;let _t=0;for(const pn of T.state.lightProbeGridArray)pn.texture!==null&&(rt.textures[_t]=pn.texture,rt.min[_t]=pn.boundingBox.min,rt.max[_t]=pn.boundingBox.max,rt.resolution[_t]=pn.resolution,_t++);for(const pn in rt)rt[pn].length=_t;St.probesSH.value=rt.textures,St.probesMin.value=rt.min,St.probesMax.value=rt.max,St.probesResolution.value=rt.resolution}sr.upload(I,No(Se),St,Pe)}if(F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(sr.upload(I,No(Se),St,Pe),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&qe.setValue(I,"center",B.center),qe.setValue(I,"modelViewMatrix",B.modelViewMatrix),qe.setValue(I,"normalMatrix",B.normalMatrix),qe.setValue(I,"modelMatrix",B.matrixWorld),F.uniformsGroups!==void 0){const rt=F.uniformsGroups;for(let _t=0,pn=rt.length;_t<pn;_t++){const Bo=rt[_t];Ee.update(Bo,At),Ee.bind(Bo,At)}}return At}function Qu(x,D){x.ambientLightColor.needsUpdate=D,x.lightProbe.needsUpdate=D,x.sunLights.needsUpdate=D,x.sunLightShadows.needsUpdate=D,x.directionalLights.needsUpdate=D,x.directionalLightShadows.needsUpdate=D,x.pointLights.needsUpdate=D,x.pointLightShadows.needsUpdate=D,x.spotLights.needsUpdate=D,x.spotLightShadows.needsUpdate=D,x.rectAreaLights.needsUpdate=D,x.hemisphereLights.needsUpdate=D}function $u(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(x,D,V){const F=Te.get(x);F.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,F.__autoAllocateDepthBuffer===!1&&(F.__useRenderToTexture=!1),Te.get(x.texture).__webglTexture=D,Te.get(x.depthTexture).__webglTexture=F.__autoAllocateDepthBuffer?void 0:V,F.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,D){const V=Te.get(x);V.__webglFramebuffer=D,V.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(x,D=0,V=0){j=x,X=D,H=V;let F=null,B=!1,ue=!1;if(x){const le=Te.get(x);if(le.__useDefaultFramebuffer!==void 0){he.bindFramebuffer(I.FRAMEBUFFER,le.__webglFramebuffer),ee.copy(x.viewport),Me.copy(x.scissor),Ie=x.scissorTest,he.viewport(ee),he.scissor(Me),he.setScissorTest(Ie),W=-1;return}else if(le.__webglFramebuffer===void 0)Pe.setupRenderTarget(x);else if(le.__hasExternalTextures)Pe.rebindTextures(x,Te.get(x.texture).__webglTexture,Te.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const Ue=x.depthTexture;if(le.__boundDepthTexture!==Ue){if(Ue!==null&&Te.has(Ue)&&(x.width!==Ue.image.width||x.height!==Ue.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Pe.setupDepthRenderbuffer(x)}}const ge=x.texture;(ge.isData3DTexture||ge.isDataArrayTexture||ge.isCompressedArrayTexture)&&(ue=!0);const Ae=Te.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Ae[D])?F=Ae[D][V]:F=Ae[D],B=!0):x.samples>0&&Pe.useMultisampledRTT(x)===!1?F=Te.get(x).__webglMultisampledFramebuffer:Array.isArray(Ae)?F=Ae[V]:F=Ae,ee.copy(x.viewport),Me.copy(x.scissor),Ie=x.scissorTest}else ee.copy(we).multiplyScalar(me).floor(),Me.copy(Je).multiplyScalar(me).floor(),Ie=je;if(V!==0&&(F=G),he.bindFramebuffer(I.FRAMEBUFFER,F)&&he.drawBuffers(x,F),he.viewport(ee),he.scissor(Me),he.setScissorTest(Ie),B){const le=Te.get(x.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+D,le.__webglTexture,V)}else if(ue){const le=D;for(let ge=0;ge<x.textures.length;ge++){const Ae=Te.get(x.textures[ge]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+ge,Ae.__webglTexture,V,le)}}else if(x!==null&&V!==0){const le=Te.get(x.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,le.__webglTexture,V)}W=-1};function Oo(x){const D=Te.get(x);return(D.__readFormat!==x.format||D.__readType!==x.type)&&(D.__readFormat=x.format,D.__readType=x.type,D.__formatReadable=it.textureFormatReadable(x.format),D.__typeReadable=it.textureTypeReadable(x.type)),D}this.readRenderTargetPixels=function(x,D,V,F,B,ue,_e,le=0){if(!(x&&x.isWebGLRenderTarget)){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ge=Te.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&_e!==void 0&&(ge=ge[_e],Array.isArray(ge)&&(ge=ge[0])),ge){he.bindFramebuffer(I.FRAMEBUFFER,ge);try{const Ae=x.textures[le],Ue=Ae.format,He=Ae.type;x.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+le);const xe=Oo(Ae);if(xe.__formatReadable===!1){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(xe.__typeReadable===!1){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=x.width-F&&V>=0&&V<=x.height-B&&I.readPixels(D,V,F,B,ie.convert(Ue),ie.convert(He),ue)}finally{const Ae=j!==null?Te.get(j).__webglFramebuffer:null;he.bindFramebuffer(I.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(x,D,V,F,B,ue,_e,le=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ge=Te.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&_e!==void 0&&(ge=ge[_e],Array.isArray(ge)&&(ge=ge[0])),ge)if(D>=0&&D<=x.width-F&&V>=0&&V<=x.height-B){he.bindFramebuffer(I.FRAMEBUFFER,ge);const Ae=x.textures[le],Ue=Ae.format,He=Ae.type;x.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+le);const xe=Oo(Ae);if(xe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(xe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ve=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Ve),I.bufferData(I.PIXEL_PACK_BUFFER,ue.byteLength,I.STREAM_READ),I.readPixels(D,V,F,B,ie.convert(Ue),ie.convert(He),0),I.bindBuffer(I.PIXEL_PACK_BUFFER,null);const ct=j!==null?Te.get(j).__webglFramebuffer:null;he.bindFramebuffer(I.FRAMEBUFFER,ct);const tt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Pg(I,tt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Ve),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,ue),I.bindBuffer(I.PIXEL_PACK_BUFFER,null),I.deleteBuffer(Ve),I.deleteSync(tt),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,D=null,V=0){const F=Math.pow(2,-V),B=Math.floor(x.image.width*F),ue=Math.floor(x.image.height*F),_e=D!==null?D.x:0,le=D!==null?D.y:0;Pe.setTexture2D(x,0),I.copyTexSubImage2D(I.TEXTURE_2D,V,0,0,_e,le,B,ue),he.unbindTexture()},this.copyTextureToTexture=function(x,D,V=null,F=null,B=0,ue=0){let _e,le,ge,Ae,Ue,He,xe,Ve,ct;const tt=x.isCompressedTexture?x.mipmaps[ue]:x.image;if(V!==null)_e=V.max.x-V.min.x,le=V.max.y-V.min.y,ge=V.isBox3?V.max.z-V.min.z:1,Ae=V.min.x,Ue=V.min.y,He=V.isBox3?V.min.z:0;else{const qe=Math.pow(2,-B);_e=Math.floor(tt.width*qe),le=Math.floor(tt.height*qe),x.isDataArrayTexture?ge=tt.depth:x.isData3DTexture?ge=Math.floor(tt.depth*qe):ge=1,Ae=0,Ue=0,He=0}F!==null?(xe=F.x,Ve=F.y,ct=F.z):(xe=0,Ve=0,ct=0);const et=ie.convert(D.format),Mt=ie.convert(D.type);let Se;D.isData3DTexture?(Pe.setTexture3D(D,0),Se=I.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(Pe.setTexture2DArray(D,0),Se=I.TEXTURE_2D_ARRAY):(Pe.setTexture2D(D,0),Se=I.TEXTURE_2D),he.activeTexture(I.TEXTURE0),he.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,D.flipY),he.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),he.pixelStorei(I.UNPACK_ALIGNMENT,D.unpackAlignment);const Rt=he.getParameter(I.UNPACK_ROW_LENGTH),Ke=he.getParameter(I.UNPACK_IMAGE_HEIGHT),Vn=he.getParameter(I.UNPACK_SKIP_PIXELS),At=he.getParameter(I.UNPACK_SKIP_ROWS),_s=he.getParameter(I.UNPACK_SKIP_IMAGES);he.pixelStorei(I.UNPACK_ROW_LENGTH,tt.width),he.pixelStorei(I.UNPACK_IMAGE_HEIGHT,tt.height),he.pixelStorei(I.UNPACK_SKIP_PIXELS,Ae),he.pixelStorei(I.UNPACK_SKIP_ROWS,Ue),he.pixelStorei(I.UNPACK_SKIP_IMAGES,He);const Pn=x.isDataArrayTexture||x.isData3DTexture,Wn=D.isDataArrayTexture||D.isData3DTexture;if(x.isDepthTexture){const qe=Te.get(x),St=Te.get(D),Jt=Te.get(qe.__renderTarget),rt=Te.get(St.__renderTarget);he.bindFramebuffer(I.READ_FRAMEBUFFER,Jt.__webglFramebuffer),he.bindFramebuffer(I.DRAW_FRAMEBUFFER,rt.__webglFramebuffer);for(let _t=0;_t<ge;_t++)Pn&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Te.get(x).__webglTexture,B,He+_t),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Te.get(D).__webglTexture,ue,ct+_t)),I.blitFramebuffer(Ae,Ue,Ae+_e,Ue+le,xe,Ve,xe+_e,Ve+le,I.DEPTH_BUFFER_BIT,I.NEAREST);he.bindFramebuffer(I.READ_FRAMEBUFFER,null),he.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(B!==0||x.isRenderTargetTexture||Te.has(x)){const qe=Te.get(x),St=Te.get(D);he.bindFramebuffer(I.READ_FRAMEBUFFER,w),he.bindFramebuffer(I.DRAW_FRAMEBUFFER,k);for(let Jt=0;Jt<ge;Jt++)Pn?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,qe.__webglTexture,B,He+Jt):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,qe.__webglTexture,B),Wn?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,St.__webglTexture,ue,ct+Jt):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,St.__webglTexture,ue),B!==0?I.blitFramebuffer(Ae,Ue,Ae+_e,Ue+le,xe,Ve,xe+_e,Ve+le,I.COLOR_BUFFER_BIT,I.NEAREST):Wn?I.copyTexSubImage3D(Se,ue,xe,Ve,ct+Jt,Ae,Ue,_e,le):I.copyTexSubImage2D(Se,ue,xe,Ve,Ae,Ue,_e,le);he.bindFramebuffer(I.READ_FRAMEBUFFER,null),he.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Wn?x.isDataTexture||x.isData3DTexture?I.texSubImage3D(Se,ue,xe,Ve,ct,_e,le,ge,et,Mt,tt.data):D.isCompressedArrayTexture?I.compressedTexSubImage3D(Se,ue,xe,Ve,ct,_e,le,ge,et,tt.data):I.texSubImage3D(Se,ue,xe,Ve,ct,_e,le,ge,et,Mt,tt):x.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,ue,xe,Ve,_e,le,et,Mt,tt.data):x.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,ue,xe,Ve,tt.width,tt.height,et,tt.data):I.texSubImage2D(I.TEXTURE_2D,ue,xe,Ve,_e,le,et,Mt,tt);he.pixelStorei(I.UNPACK_ROW_LENGTH,Rt),he.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ke),he.pixelStorei(I.UNPACK_SKIP_PIXELS,Vn),he.pixelStorei(I.UNPACK_SKIP_ROWS,At),he.pixelStorei(I.UNPACK_SKIP_IMAGES,_s),ue===0&&D.generateMipmaps===!0&&D.mipmapsAutoUpdate===!0&&I.generateMipmap(Se),he.unbindTexture()},this.initRenderTarget=function(x){Te.get(x).__webglFramebuffer===void 0&&Pe.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?Pe.setTextureCube(x,0):x.isData3DTexture?Pe.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?Pe.setTexture2DArray(x,0):Pe.setTexture2D(x,0),he.unbindTexture()},this.resetState=function(){X=0,H=0,j=null,he.reset(),re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return tn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=We._getDrawingBufferColorSpace(e),t.unpackColorSpace=We._getUnpackColorSpace()}}const fM=.9,fc=.2,dM=.45;function pM(i,e){const t=Math.min(1,Math.max(0,(i.travelled-is)/(e-is)));return{x:i.x,y:i.y,height:dM,size:fM*(fc+(1-fc)*t)}}const dc=.25,mM={health:null,until:-1/0};function gM(i,e,t){let n=i.health!==null&&e<i.health?t+dc:i.until;return n-t>dc&&(n=-1/0),{health:e,until:n}}function _M(i,e){return e<i.until}const _r=240,nn=1.2,zu=.6,vM=.35,vr=328708,Gu=1,Hu=11,rs=.7,wn=1.05,Mn=.4,rr=9079434,xM=16719904,pc=.04,SM=37,Vu=131586,Wu=5913120,xr=.8,ds=.45,MM=.35,Eo={wall:"wall",secret:"wall",door:"door",exit:"exit-door"},Xu=new Set(["exit-door"]);function AM(i,e,t){const n=new ku({canvas:i,antialias:!1});n.setPixelRatio(1);const s=new hu;s.background=new ze(vr),s.fog=new Ar(vr,Gu,Hu);const r=new zt(75,4/3,.05,60);r.rotation.order="YXZ",s.add(r),s.add(new wu(16777215,.25));const a=new Tu(16769712,2.2,9,1);r.add(a);const o=qu();LM(s,e,o);const l=IM(s,e,o),c=DM(s,e),u=Yu(),f=EM(s,u),h=CM(s,e,u),p=PM(s,e,u),g=wM(s,u,t),S=()=>{const m=window.innerWidth/Math.max(1,window.innerHeight);n.setSize(Math.round(_r*m),_r,!1),r.aspect=m,r.updateProjectionMatrix()};return window.addEventListener("resize",S),S(),{render(m){const{player:d}=m;r.position.set(d.x,d.crouching?vM:zu,d.y),r.rotation.y=-d.facing-Math.PI/2,l(m),c(m),f(m),h(m),p(m),g(m),n.render(s,r)}}}function qu(){const i=new Eu,e={};for(const t of Em){const n=i.load(ym(t));n.magFilter=ot,n.minFilter=ot,n.generateMipmaps=!1,n.colorSpace=Ut,n.wrapS=ls,n.wrapT=ls,e[t]=n}return e}function Yu(){const i=new Eu,e={};for(const t of bm){const n=i.load(Fc(t));n.magFilter=ot,n.minFilter=ot,n.generateMipmaps=!1,n.colorSpace=Ut,e[t]=n}return e}function EM(i,e){const t=a=>new jn({map:e[a],alphaTest:.5,fog:!0,color:9079434}),n={shambler:t("shambler"),sprinter:t("sprinter")},s=t("zombie-dead"),r=new Map;return a=>{for(const o of r.values())o.visible=!1;for(const o of a.zombies){let l=r.get(o.id);l||(l=new ps(n[o.kind]),l.scale.set(rs,wn,1),i.add(l),r.set(o.id,l)),l.visible=!0,l.material=o.state==="dead"?s:n[o.kind],l.position.set(o.x,wn/2,o.y)}}}const yM=8,bM=["flame-1","flame-2","flame-3"];function TM(i,e){const t=[];for(const n of i.zombies)n.burn&&t.push({x:n.x,y:n.y,height:wn*.45,size:wn*.9});for(const n of i.furniture)n.burn&&t.push({x:n.col+.5,y:n.row+.5,height:ds*.9,size:.9});for(const n of i.flames)t.push(pM(n,e));for(const n of i.firePatches)t.push({x:n.col+.5,y:n.row+.5,height:.4,size:.8});for(const n of i.wallFlames){const{x:s,y:r}=i.player,a=s-(n.col+.5),o=r-(n.row+.5),l=(c,u)=>Math.min(u+1,Math.max(u,c));t.push(Math.abs(a)>Math.abs(o)?{x:n.col+.5+Math.sign(a)*.55,y:l(r,n.row),height:.6,size:.9}:{x:l(s,n.col),y:n.row+.5+Math.sign(o)*.55,height:.6,size:.9})}return t}function wM(i,e,t){const n=bM.map(r=>new jn({map:e[r],alphaTest:.5,fog:!0})),s=[];return r=>{const a=TM(r,t);for(;s.length<a.length;){const o=new ps(n[0]);i.add(o),s.push(o)}s.forEach((o,l)=>{const c=a[l];o.visible=c!==void 0,c&&(o.material=n[(Math.floor(r.time*yM)+l)%n.length],o.scale.set(c.size,c.size,1),o.position.set(c.x,c.height,c.y))})}}function RM(i,e){const t=i*SM+e*2.1;return[pc*Math.sign(Math.sin(t))*Math.abs(Math.sin(t*1.7)),pc*Math.sin(t*2.3)]}function CM(i,e,t){const n=new jn({map:t["survivor-dead"],alphaTest:.5,fog:!0,color:rr}),s=e.survivors.map(()=>{const r=new jn({map:t.survivor,alphaTest:.5,fog:!0,color:rr}),a=new ps(r);return a.scale.set(rs,wn,1),i.add(a),{sprite:a,alive:r,flash:mM}});return r=>{for(const a of r.survivors){const o=s[a.id];if(!o)continue;o.flash=gM(o.flash,a.health,r.time),o.alive.color.setHex(_M(o.flash,r.time)?xM:rr),o.sprite.visible=a.state!=="safe"&&a.risenAs===null;const l=a.state==="dead"||a.state==="turning";o.sprite.material=l?n:o.alive;const[c,u]=a.state==="turning"?RM(r.time,a.id):[0,0];o.sprite.position.set(a.x+c,wn/2,a.y+u)}}}function PM(i,e,t){const n=e.pickups.map(({kind:s,col:r,row:a})=>{const o=new jn({map:t[s],alphaTest:.5,fog:!0,color:9079434}),l=new ps(o);return l.scale.set(Mn,Mn,1),l.position.set(r+.5,Mn/2,a+.5),i.add(l),l});return s=>{for(const r of n)r.visible=!1;for(const r of s.pickups){const a=n[r.id];a&&(a.visible=!0)}}}function LM(i,e,t){const{width:n,height:s}=e;for(const[r,a,o]of[["floor",0,-Math.PI/2],["ceiling",nn,Math.PI/2]]){const l=t[r].clone();l.repeat.set(n,s);const c=new wt(new Rn(n,s),new Bi({map:l}));c.rotation.x=o,c.position.set(n/2,a,s/2),i.add(c)}}function DM(i,e){const t=new Rn(1,1);t.rotateX(-Math.PI/2);const n=new dr({color:Vu}),s=new fn(xr,ds,xr),r=new Bi({color:Wu,opacity:MM});r.transparent=!1;const a=new Map;return e.cells.forEach((o,l)=>o.forEach((c,u)=>{if(c==="hole"){const f=new wt(t,n);f.position.set(u+.5,.01,l+.5),i.add(f)}else if(c==="furniture"){const f=new wt(s,r);f.position.set(u+.5,ds/2,l+.5),i.add(f),a.set(`${u},${l}`,f)}})),o=>{r.transparent!==o.player.crouching&&(r.transparent=o.player.crouching,r.needsUpdate=!0);for(const l of a.values())l.visible=!1;for(const{col:l,row:c}of o.furniture){const u=a.get(`${l},${c}`);u&&(u.visible=!0)}}}function IM(i,e,t){const n=new Map;e.cells.forEach((c,u)=>c.forEach((f,h)=>{const p=Eo[f];p&&(n.has(p)||n.set(p,[]),n.get(p).push({col:h,row:u}))}));const s=new fn(1,nn,1),r=new Ze,a=new Map;for(const[c,u]of n){const f=t[c].clone();f.repeat.set(1,Xu.has(c)?1:nn);const h=new _u(s,new Bi({map:f}),u.length);u.forEach(({col:p,row:g},S)=>{r.makeTranslation(p+.5,nn/2,g+.5),h.setMatrixAt(S,r),a.set(`${p},${g}`,{mesh:h,index:S})}),i.add(h)}const o=new Set,l=new Ze().makeScale(0,0,0);return c=>{for(const{col:u,row:f,state:h}of[...c.doors,...c.secretWalls]){const p=`${u},${f}`,g=a.get(p);!g||h==="open"===o.has(p)||(h==="open"?(g.mesh.setMatrixAt(g.index,l),o.add(p)):(g.mesh.setMatrixAt(g.index,r.makeTranslation(u+.5,nn/2,f+.5)),o.delete(p)),g.mesh.instanceMatrix.needsUpdate=!0)}}}const UM=[["WASD","Left stick","Move"],["Mouse","Right stick","Turn"],["Left click","R2","Attack"],["1 / 2","D-pad left / right","Crowbar / shotgun"],["","Triangle","Switch weapon"],["E","Square","Use"],["Shift (hold)","R3 (hold)","Crouch"],["Esc","Options","Pause"]];function NM(i,e,t){let n="",s=!1;return i.addEventListener("click",r=>{const a=r.target.closest("[data-action]");a&&(a.dataset.action==="select-level"?s=!0:a.dataset.action==="back"?s=!1:a.dataset.action==="level"&&t(a.dataset.level),n="")}),{render(r){const a=FM(r,e,s);a!==n&&(n=a,i.hidden=a==="",i.innerHTML=a)}}}function FM(i,e=[],t=!1){switch(i.screen){case"title":return t?`
        <div class="screen">
          <h1>SELECT LEVEL</h1>
          <div class="menu">
            ${e.map(n=>`<button data-action="level" data-level="${n}">${lh(n)}</button>`).join("")}
            <button data-action="back">Back</button>
          </div>
        </div>`:`
        <div class="screen">
          <h1>WORLD END ZOMBIE</h1>
          <p class="prompt">CLICK OR PRESS CROSS TO START</p>
          ${e.length>1?'<div class="menu"><button data-action="select-level">Select level</button></div>':""}
          <table class="controls">
            ${UM.map(([n,s,r])=>`<tr><th>${n}</th><th>${s}</th><td>${r}</td></tr>`).join("")}
          </table>
          <div class="version">${Nc}</div>
        </div>`;case"paused":return`
        <div class="screen">
          <h1>PAUSED</h1>
          <p class="prompt">CLICK OR PRESS CROSS TO RESUME</p>
        </div>`;case"stats":{const n=i.stats;return`
        <div class="screen">
          <h1>LEVEL COMPLETE</h1>
          <table class="stats">
            ${[["SURVIVORS",`${n.survivorsRescued}/${n.survivorsTotal}`],["ZOMBIES",`${n.zombiesKilled}/${n.zombiesTotal}`],["SECRETS",`${n.secretsFound}/${n.secretsTotal}`],["RISEN",`${n.risen.killed}/${n.risen.turned}`],["TIME",OM(n.time)]].map(([r,a])=>`<tr><th>${r}</th><td>${a}</td></tr>`).join("")}
          </table>
        </div>`}case"dead":return`
        <div class="screen">
          <h1>YOU DIED</h1>
          <p class="prompt">CLICK OR PRESS CROSS TO TRY AGAIN</p>
        </div>`;case"playing":return""}}function OM(i){const e=Math.floor(i),t=Math.floor(e/60),n=e%60;return`${t}:${String(n).padStart(2,"0")}`}const BM={forward:0,strafe:0,turn:0,attack:!1,weapon:null,use:!1,crouch:!1,pause:!1,confirm:!0};function kM({canvas:i,overlay:e,hudRoot:t,level:n,tuning:s,levels:r,onSelectLevel:a,skipTitle:o=!1}){const l=Xd({level:n,tuning:s,seed:Date.now()>>>0}),c=new Zm(i,s),u=AM(i,n,s.flameRange),f=NM(e,r,a),h=Km(t),p=Gm(s);o&&l.step(BM);const g=1/ao;let S=performance.now(),m=0;return{frame(d){m=Math.min(m+(d-S)/1e3,.25),S=d;const M=[];let b=0;for(;m>=g;)M.push(...l.step(c.nextTick())),m-=g,b+=g;const A=l.snapshot();c.screen=A.screen,c.lockWanted=A.screen!=="stats",A.screen!=="playing"&&c.locked&&document.exitPointerLock(),u.render(A),h.react(M),p.react(M,A),p.render(A,b),h.render(A),f.render(A)},dispose(){c.dispose(),p.dispose()}}}function zM(i){const{text:e}=Mc(i);try{return{ok:!0,level:no(e)}}catch(t){if(t instanceof to)return{ok:!1,errors:t.problems.map(n=>`line ${n.line}, column ${n.column}: ${n.message}`)};throw t}}function GM(i,e,t){i.replaceChildren();const n=document.createElement("canvas"),s=document.createElement("div");s.className="hud";const r=document.createElement("div");r.className="overlay",i.append(n,s,r),i.hidden=!1,Promise.resolve(n.requestPointerLock()).catch(()=>{});const a=kM({canvas:n,overlay:r,hudRoot:s,level:e,tuning:t,levels:[],onSelectLevel:()=>{},skipTitle:!0});return{frame:o=>a.frame(o),stop(){a.dispose(),i.replaceChildren(),i.hidden=!0}}}const Js=(i,e,t)=>Math.min(t,Math.max(e,i));function HM(i){const e=Math.PI*2;return i-Math.round(i/e)*e}function mc(i){return{width:Ce,height:Ce,cells:i.rows.map(e=>e.map(t=>{var n;return((n=ar[t])==null?void 0:n.cell)??"floor"})),playerStart:Ec(i)??{col:Ce/2,row:Ce/2},exits:[],zombies:[],survivors:[],pickups:[],doors:[],secretWalls:[],furniture:[]}}class VM{constructor(e,t){Le(this,"x");Le(this,"y");Le(this,"facing",-Math.PI/2);Le(this,"version",0);Le(this,"noClip",!1);Le(this,"onEdit",null);Le(this,"hotbar",io());Le(this,"opened",new Set);Le(this,"grid");this.level=e,this.tuning=t;const n=Ec(e)??{col:Ce/2,row:Ce/2};this.x=n.col+.5,this.y=n.row+.5,this.grid=new ua(mc(e))}isOpen(e){return this.opened.has(gc(e))}walk(e,t){this.facing=HM(this.facing+(Number.isFinite(e.turn)?e.turn:0));const n=Js(e.forward,-1,1),s=Js(e.strafe,-1,1),r=Math.cos(this.facing),a=Math.sin(this.facing);let o=n*r-s*a,l=n*a+s*r;const c=Math.hypot(o,l);if(c===0)return;const u=this.tuning.playerSpeed*t/Math.max(1,c);if(o*=u,l*=u,this.noClip){const h=this.tuning.playerRadius;this.x=Js(this.x+o,h,Ce-h),this.y=Js(this.y+l,h,Ce-h);return}const f=this.grid.move(this.x,this.y,o,l,this.tuning.playerRadius,[],!0);this.x=f.x,this.y=f.y}toggleNoClip(){if(this.noClip=!this.noClip,this.noClip)return;const e=this.tuning.playerRadius;if(!Ho(this.x,this.y,e).some(s=>this.isSolidCell(s)))return;let n=null;for(let s=0;s<Ce&&!(n&&s-1>n.distance);s++){const r=this.grid.cellAt(this.x,this.y);for(let a=r.row-s;a<=r.row+s;a++)for(let o=r.col-s;o<=r.col+s;o++){if(Math.max(Math.abs(o-r.col),Math.abs(a-r.row))!==s)continue;const l={col:o,row:a};if(!Ui(l)||this.isSolidCell(l))continue;const c=Math.hypot(o+.5-this.x,a+.5-this.y);(!n||c<n.distance-1e-9||Math.abs(c-n.distance)<=1e-9&&(a<n.cell.row||a===n.cell.row&&o<n.cell.col))&&(n={cell:l,distance:c})}}n&&(this.x=n.cell.col+.5,this.y=n.cell.row+.5)}isSolidCell(e){return this.grid.blocksWalking(e.col,e.row)&&this.grid.kindAt(e.col,e.row)!=="hole"}use(){const e=Math.cos(this.facing),t=Math.sin(this.facing),n=this.tuning.playerRadius+this.tuning.useReach,s=this.grid.rayDistance(this.x,this.y,e,t,n);if(s>=n)return!1;const r=this.grid.cellAt(this.x+e*(s+1e-6),this.y+t*(s+1e-6)),a=Jn(this.level,r);return a!=="door"&&a!=="secret"||this.isOpen(r)?!1:(this.opened.add(gc(r)),this.grid.open(r.col,r.row),this.version++,!0)}select(e){this.hotbar=Of(this.hotbar,e)}scroll(e){this.hotbar=Bf(this.hotbar,e)}selectedName(){const e=Vo(this.hotbar);return e===null?null:Cf(e)}targets(){return Ff(this.level,this.x,this.y,this.facing)}build(){const e=Vo(this.hotbar);return e===null?{ok:!1,message:"EMPTY SLOT"}:this.place(e)}place(e){const{place:t}=this.targets();return t?this.placeAt(e,t):{ok:!1,message:"NOWHERE TO BUILD"}}placeAt(e,t){const n=this.noClip?[]:Ho(this.x,this.y,this.tuning.playerRadius),s=If(this.level,e,t,n);return s.ok&&this.changed(),s}remove(){const{remove:e}=this.targets();return!e||!Uf(this.level,e)?!1:(this.changed(),!0)}changed(){var e;for(const t of[...this.opened]){const n=Jn(this.level,{col:t%Ce,row:Math.floor(t/Ce)});n!=="door"&&n!=="secret"&&this.opened.delete(t)}this.grid=new ua(mc(this.level));for(const t of this.opened)this.grid.open(t%Ce,Math.floor(t/Ce));this.version++,(e=this.onEdit)==null||e.call(this)}}function gc({col:i,row:e}){return e*Ce+i}const _c="world-end-zombie-editor";class WM{constructor(e){this.storage=e}list(){return this.read().levels.map(({id:e,name:t})=>({id:e,name:t}))}load(e){const t=this.read().levels.find(n=>n.id===e);return t?{rows:t.rows.map(n=>[...n])}:null}loadHotbar(){const e=this.read().hotbar,t=new Set(Nt.map(s=>s.item)),n=e==null?void 0:e.slots;return!Array.isArray(n)||n.length!==Vt||!n.every(s=>s===null||typeof s=="string"&&t.has(s))||!Number.isInteger(e==null?void 0:e.selected)||e.selected<0||e.selected>=Vt?io():{slots:n,selected:e.selected}}saveHotbar(e){const t=this.read();return t.hotbar={slots:[...e.slots],selected:e.selected},this.write(t)}loadOrder(){const e=this.read().order;return Array.isArray(e)&&e.every(t=>typeof t=="string")?e:[]}saveOrder(e){const t=this.read();return t.order=[...e],this.write(t)}create(){return this.add(this.freeName("Level"),Lf())}save(e,t){const n=this.read(),s=n.levels.find(r=>r.id===e);return s?(s.rows=t.rows.map(r=>r.join("")),this.write(n)):!1}rename(e,t){const n=this.read(),s=n.levels.find(a=>a.id===e),r=t.trim();return!s||r===""||n.levels.some(a=>a.id!==e&&a.name===r)?!1:(s.name=r,this.write(n))}duplicate(e){const t=this.read().levels.find(n=>n.id===e);return t?this.add(this.freeName(`${t.name} copy`,!1),this.load(e)):null}remove(e){const t=this.read();t.levels=t.levels.filter(n=>n.id!==e),this.write(t)}move(e,t){const n=this.read(),s=n.levels.findIndex(a=>a.id===e),r=Math.min(n.levels.length-1,Math.max(0,s+t));s<0||s===r||(n.levels.splice(r,0,n.levels.splice(s,1)[0]),this.write(n))}addFromText(e,t){const n=kf(t);return n.ok?{ok:!0,id:this.add(this.freeName(e.trim()||"Level",!1),n.level)}:n}add(e,t){const n=this.read(),s=`level-${n.nextId++}`;return n.levels.push({id:s,name:e,rows:Df(t).rows.map(r=>r.join(""))}),this.write(n),s}freeName(e,t=!0){const n=new Set(this.read().levels.map(s=>s.name));for(let s=1;;s++){const r=t||s>1?`${e} ${s}`:e;if(!n.has(r))return r}}read(){try{const e=JSON.parse(this.storage.getItem(_c)??"null");if(!e||typeof e.nextId!="number"||!Array.isArray(e.levels))return{nextId:1,levels:[]};const t=n=>typeof n.id=="string"&&typeof n.name=="string"&&Array.isArray(n.rows)&&n.rows.length===Ce&&n.rows.every(s=>typeof s=="string"&&s.length===Ce);return{nextId:e.nextId,levels:e.levels.filter(t),hotbar:e.hotbar,order:e.order}}catch{return{nextId:1,levels:[]}}}write(e){try{return this.storage.setItem(_c,JSON.stringify(e)),!0}catch{return!1}}}const XM={Z:{sprite:"shambler",width:rs,height:wn},R:{sprite:"sprinter",width:rs,height:wn},S:{sprite:"survivor",width:rs,height:wn},H:{sprite:"health",width:Mn,height:Mn},A:{sprite:"shells",width:Mn,height:Mn},F:{sprite:"fuel",width:Mn,height:Mn}},qM=16770560,YM=2146368;function KM(i,e){let t=e;const n=new ku({canvas:i,antialias:!1});n.setPixelRatio(1);const s=new hu;s.background=new ze(vr),s.fog=new Ar(vr,Gu,Hu);const r=new zt(75,4/3,.05,60);r.rotation.order="YXZ",s.add(r),s.add(new wu(16777215,.5)),r.add(new Tu(16769712,2.2,12,1));const a=qu(),o=Yu();ZM(s,a);const l=JM(s,a),c=new bi;s.add(c);const u=new Rn(1,1).rotateX(-Math.PI/2),f=new dr({color:Vu}),h=new dr({color:YM,transparent:!0,opacity:.6}),p=new fn(xr,ds,xr),g=new Bi({color:Wu}),S=new Map,m=N=>{let R=S.get(N);return R||(R=new jn({map:o[N],alphaTest:.5,fog:!0,color:rr}),S.set(N,R)),R},d=new Ol(new fn(1.02,nn+.02,1.02)),M=new Ol(new Rn(.96,.96).rotateX(-Math.PI/2)),b=new vu({color:qM,fog:!1}),A=new bi;s.add(A);const C=N=>{A.clear();for(const R of N){const L=Jn(t.level,R)!=="floor",U=new s_(L?d:M,b);U.position.set(R.col+.5,L?nn/2:.03,R.row+.5),A.add(U)}},T=()=>{c.clear();const N=new Map;t.level.rows.forEach((R,L)=>R.forEach((U,G)=>{var W;const w=((W=ar[U])==null?void 0:W.cell)??"floor",k=Eo[w];k&&!t.isOpen({col:G,row:L})&&(N.has(k)||N.set(k,[]),N.get(k).push({col:G,row:L}));const X=G+.5,H=L+.5;if(w==="hole"){const Z=new wt(u,f);Z.position.set(X,.01,H),c.add(Z)}else if(w==="furniture"){const Z=new wt(p,g);Z.position.set(X,ds/2,H),c.add(Z)}else if(U==="P"){const Z=new wt(u,h);Z.position.set(X,.02,H),c.add(Z)}const j=XM[U];if(j){const Z=new ps(m(j.sprite));Z.scale.set(j.width,j.height,1),Z.position.set(X,j.height/2,H),c.add(Z)}})),l.set(N)},_=()=>{const N=window.innerWidth/Math.max(1,window.innerHeight);n.setSize(Math.round(_r*N),_r,!1),r.aspect=N,r.updateProjectionMatrix()};window.addEventListener("resize",_),_();let E=-1;return{use(N){t=N,E=-1},render(N=!0){const{remove:R,place:L}=t.targets(),U=R&&L&&R.col===L.col&&R.row===L.row;C(N?[R,U?null:L].filter(G=>G!==null):[]),E!==t.version&&(T(),E=t.version),r.position.set(t.x,zu,t.y),r.rotation.y=-t.facing-Math.PI/2,n.render(s,r)}}}function ZM(i,e){for(const[t,n,s]of[["floor",0,-Math.PI/2],["ceiling",nn,Math.PI/2]]){const r=e[t].clone();r.repeat.set(Ce,Ce);const a=new wt(new Rn(Ce,Ce),new Bi({map:r}));a.rotation.x=s,a.position.set(Ce/2,n,Ce/2),i.add(a)}}function JM(i,e){const t=new fn(1,nn,1),n=new Map;for(const r of new Set(Object.values(Eo))){const a=e[r].clone();a.repeat.set(1,Xu.has(r)?1:nn);const o=new _u(t,new Bi({map:a}),Ce*Ce);o.frustumCulled=!1,o.count=0,i.add(o),n.set(r,o)}const s=new Ze;return{set(r){for(const[a,o]of n){const l=r.get(a)??[];l.forEach(({col:c,row:u},f)=>o.setMatrixAt(f,s.makeTranslation(c+.5,nn/2,u+.5))),o.count=l.length,o.instanceMatrix.needsUpdate=!0}}}}const la=document.querySelector("#editor"),vc=document.querySelector("#overlay"),ji=document.querySelector("#hud"),QM=document.querySelector("#inventory"),$M=document.querySelector("#play"),jM=document.querySelector("#picker");document.querySelector("#version").textContent=Nc;try{eA()}catch(i){throw vc.classList.add("error"),vc.textContent=i instanceof Error?i.message:String(i),i}function eA(){const i=Mf(),e=new WM(localStorage),t=oh(),n=new np(la,i),s=Xf(ji);let r=null,a=null,o=null,l=Wo(io()),c="";const u=Yf(QM,(d,M)=>{r&&(r.hotbar=Sc(r.hotbar,d,M),u.show(r.hotbar,l))}),f=lp(jM,{open:d=>p(d),create:()=>p(e.create()),rename:(d,M)=>h(e.rename(d,M)?void 0:"That name is blank or already taken."),duplicate:d=>{e.duplicate(d),h()},remove:d=>{e.remove(d),h()},exportTxt:d=>{var T,_;const M=e.load(d),b=((T=e.list().find(E=>E.id===d))==null?void 0:T.name)??"level";if(!M)return h("That level is gone.");const A=Mc(M),C=((_=vs(e.loadOrder(),t,e.list()).find(E=>E.key===`editor:${d}`))==null?void 0:_.file)??"level.txt";xc(C,A.text),h(A.warnings.length>0?`Exported ${C}, but "${b}" has problems to fix before you submit it:
${A.warnings.join(`
`)}`:`Exported ${C}. Put it in content/levels, or attach it to a level issue.`)},importFile:d=>{d.text().then(M=>{const b=e.addFromText(d.name.replace(/\.txt$/i,""),M);h(b.ok?`Imported ${d.name}.`:`Could not import ${d.name}:
${b.errors.join(`
`)}`)})},move:(d,M)=>{e.saveOrder(sp(vs(e.loadOrder(),t,e.list()),d,M)),h()},exportGameJson:()=>{xc("game.json",ap(vs(e.loadOrder(),t,e.list()))),h("Exported game.json. Put it in content/ with every level in it in content/levels.")},copyShipped:d=>{const M=e.addFromText(d.replace(/\.txt$/,""),rh(d));M.ok?p(M.id):h(`Could not copy ${d}: ${M.errors.join("; ")}`)}});function h(d){document.pointerLockElement&&document.exitPointerLock(),u.hide(),o==null||o.stop(),o=null,ji.hidden=!0,f.show(e.list(),t,vs(e.loadOrder(),t,e.list()),d)}function p(d){const M=e.load(d);if(!M)return h("That level is gone.");const b=new VM(M,i);b.onEdit=()=>{e.save(d,b.level)||s.say("COULD NOT SAVE: BROWSER STORAGE IS FULL OR OFF",performance.now())},b.hotbar=e.loadHotbar(),c=JSON.stringify(b.hotbar),r=b,a??(a=KM(la,b)),a.use(b),f.hide(),ji.hidden=!1}function g(){if(!r)return;const d=JSON.stringify(r.hotbar);d!==c&&(c=d,e.saveHotbar(r.hotbar))}h();let S=performance.now();const m=d=>{const M=Math.min((d-S)/1e3,.1);S=d;const b=n.read(M);if(requestAnimationFrame(m),!(!r||!a||f.visible)){if(b.play){if(o)o.stop(),o=null,ji.hidden=!1,Promise.resolve(la.requestPointerLock()).catch(()=>{});else if(!u.visible){const A=zM(r.level);A.ok?(s.problems([],d),ji.hidden=!0,o=GM($M,A.level,i)):s.problems(["CAN'T PLAY YET:",...A.errors],d)}return}if(o)return o.frame(d);if(b.menu)return h();if(b.inventory&&(u.visible?u.hide():(document.pointerLockElement&&document.exitPointerLock(),l=Wo(r.hotbar),u.show(r.hotbar,l))),u.visible){for(const A of b.pad){const C=qf(l,A,r.hotbar);l=C.inventory,r.hotbar=C.hotbar,C.close&&u.hide()}u.visible&&b.pad.length>0&&u.show(r.hotbar,l),a.render(!1),g();return}if(b.slot!==null&&r.select(b.slot),b.scroll!==0&&r.scroll(b.scroll),b.noClip&&r.toggleNoClip(),r.walk(b,M),b.use&&r.use(),b.place){const A=r.build();A.ok||s.say(A.message,d),s.swing()}b.remove&&(r.remove(),s.swing()),s.setNoClip(r.noClip),a.render(),s.render(r.hotbar,r.selectedName()),g(),s.tick(d,n.locked?"":"CLICK TO LOOK AROUND   L: LEVELS")}};requestAnimationFrame(m)}function xc(i,e){const t=document.createElement("a");t.href=URL.createObjectURL(new Blob([e],{type:"text/plain"})),t.download=i,t.click(),URL.revokeObjectURL(t.href)}
