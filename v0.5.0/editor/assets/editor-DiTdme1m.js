var zu=Object.defineProperty;var Hu=(i,e,t)=>e in i?zu(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var Ue=(i,e,t)=>Hu(i,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const Gu=`############################################################
#..........#...........#...........#...........#...........#
#.......Z..#...........#.......S...#....R......#........S..#
#..S.......#...Z.......#....T......#...........#...........#
#..........#...........#..Z.T......#...........#..Z........#
#..Z.......#........R..#....T....Z.#........Z..#.......Z...#
#..........#.A.........#...........#.........H.#...........#
#####D###########D###########D###########D###########D######
#...............T...Z.........A...........T................#
#.....................................R...........Z........#
####T..#######T...T##########################D##############
####...#.......................#........OO.................#
####...#....Z.......OO......R..#....Z......................#
####...#........##....##.......#........###.....###........#
####.Z.#......T.##....##.......#...........................#
####...D................OO.....D........................R..#
####...#........##....##.......#................O..........#
####...#........##....##.Z.....#........###................#
####...#........OOO............#..................Z........#
####...#.A.....................#.H.......................A.#
#####D################################D#############D#######
#.............#...........#...##.............#.............#
#.............#...........X.HA##...R.........#.............#
#.A........Z..#...Z.......#.A.##...........S.#.............#
#.............#...........######.A...........#.............#
#.............######D###################D#####.............#
#.............D..............................D.............E
#.............#...............H..............#.............#
#....OO.......########D##############D########.............#
#.............#.....TT.........#............##.............#
#..P..........#.....R......Z...#............##......T......#
#...........H.#..S.............#............##......TT.....#
#.............#..............A.#............##.............#
############################################################
`,Vu=`##########################
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
`,Wu=["hospital.txt","level1.txt"],Xu={levels:Wu},Do="../content/levels/",Io=Object.assign({"../content/levels/hospital.txt":Gu,"../content/levels/level1.txt":Vu});function qu(i){const e=Io[Do+i];if(e===void 0){const t=Object.keys(Io).map(n=>n.slice(Do.length));throw new Error(`content/game.json: there is no level file "content/levels/${i}". Level files: ${t.join(", ")}`)}return e}function Yu(i){const e=i==null?void 0:i.levels;if(!Array.isArray(e)||e.length===0||e.some(t=>typeof t!="string"||t===""))throw new Error('content/game.json: "levels" must be a list of file names in content/levels, e.g. ["hospital.txt"]');return e}function Ku(){return Yu(Xu)}function Zu(i){return i.replace(/\.txt$/,"")}const Ju=7,Qu=.5,$u=.3,ju=100,eh=2,th=.0025,nh=.15,ih=200,sh=20,rh=8,ah=50,oh=.3,lh=7,ch=10,uh=16,hh=10,dh=.9,fh=25,ph=1,mh=60,gh=.5,_h=10,vh=75,xh=.3,Sh=100,Mh=40,Eh=2,Ah=8,yh=.4,bh=1.2,Th=6,wh=5,Rh=.4,Ch=.7,Ph=8,Lh=2,Dh=5,Ih=.8,Uh=4.5,Nh=10,Fh=2,Oh=2,Bh=5,kh=10,zh=.4,Hh=1,Gh=2,Vh=20,Wh=4,Xh=10,qh=12,Yh={playerSpeed:Ju,crouchSpeedFactor:Qu,playerRadius:$u,playerHealth:ju,healDuration:eh,mouseSensitivity:th,gamepadDeadzone:nh,gamepadTurnSpeed:ih,startingShells:sh,shellsPerPickup:rh,shellCap:ah,pickupRadius:oh,shotgunPellets:lh,shotgunDamage:ch,shotgunRange:uh,shotgunSpread:hh,shotgunCooldown:dh,crowbarDamage:fh,crowbarRange:ph,crowbarArc:mh,crowbarCooldown:gh,holeDamage:_h,furnitureHealth:vh,zombieRadius:xh,shamblerHealth:Sh,sprinterHealth:Mh,shamblerSpeed:Eh,shamblerDamage:Ah,shamblerReach:yh,shamblerAttackCooldown:bh,sprinterSpeed:Th,sprinterDamage:wh,sprinterReach:Rh,sprinterAttackCooldown:Ch,earshotRadius:Ph,loseInterestDelay:Lh,lastZombiesThreshold:Dh,useReach:Ih,survivorSpeed:Uh,survivorHealth:Nh,zombieDamageToSurvivor:Fh,turnDuration:Oh,survivorFightBackHealth:Bh,survivorDamage:kh,survivorReach:zh,survivorAttackCooldown:Hh,survivorHealAmount:Gh,survivorHealInterval:Vh,groanIntervalMin:Wh,groanIntervalMax:Xh,hearingDistance:qh},Kh={playerSpeed:Number,crouchSpeedFactor:Number,playerRadius:Number,playerHealth:Number,healDuration:Number,mouseSensitivity:Number,gamepadDeadzone:Number,gamepadTurnSpeed:Number,startingShells:Number,shellsPerPickup:Number,shellCap:Number,pickupRadius:Number,shotgunPellets:Number,shotgunDamage:Number,shotgunRange:Number,shotgunSpread:Number,shotgunCooldown:Number,crowbarDamage:Number,crowbarRange:Number,crowbarArc:Number,crowbarCooldown:Number,holeDamage:Number,furnitureHealth:Number,zombieRadius:Number,shamblerHealth:Number,sprinterHealth:Number,shamblerSpeed:Number,shamblerDamage:Number,shamblerReach:Number,shamblerAttackCooldown:Number,sprinterSpeed:Number,sprinterDamage:Number,sprinterReach:Number,sprinterAttackCooldown:Number,loseInterestDelay:Number,earshotRadius:Number,lastZombiesThreshold:Number,useReach:Number,survivorSpeed:Number,survivorHealth:Number,zombieDamageToSurvivor:Number,turnDuration:Number,survivorFightBackHealth:Number,survivorDamage:Number,survivorReach:Number,survivorAttackCooldown:Number,survivorHealAmount:Number,survivorHealInterval:Number,groanIntervalMin:Number,groanIntervalMax:Number,hearingDistance:Number},Uo=Object.keys(Kh);function Zh(i){const e=typeof i=="object"&&i!==null?i:{},t=[];for(const n of Uo){const s=e[n];s===void 0?t.push(`"${n}" is missing`):(typeof s!="number"||!Number.isFinite(s))&&t.push(`"${n}" must be a number`)}for(const n of Object.keys(e))Uo.includes(n)||t.push(`"${n}" is not a known tuning value`);if(t.length===0&&(Number(e.groanIntervalMin)>Number(e.groanIntervalMax)&&t.push('"groanIntervalMin" must not be more than "groanIntervalMax"'),Number(e.hearingDistance)<=0&&t.push('"hearingDistance" must be more than 0')),t.length>0)throw new Error(`content/tuning.json: ${t.join("; ")}`);return e}function Jh(){return Zh(Yh)}const tr={"#":{cell:"wall"},".":{cell:"floor"},P:{cell:"floor",thing:"player"},Z:{cell:"floor",zombie:"shambler"},R:{cell:"floor",zombie:"sprinter"},S:{cell:"floor",thing:"survivor"},H:{cell:"floor",pickup:"health"},A:{cell:"floor",pickup:"shells"},D:{cell:"door"},X:{cell:"secret"},E:{cell:"exit"},O:{cell:"hole"},T:{cell:"furniture"}};class Za extends Error{constructor(e){super(`Invalid level:
`+e.map(t=>`  line ${t.line}, column ${t.column}: ${t.message}`).join(`
`)),this.problems=e,this.name="LevelError"}}function Ja(i){const e=i.replace(/\r/g,"").split(`
`);for(;e.length>0&&e[e.length-1].trim()==="";)e.pop();const t=Math.max(0,...e.map(o=>o.length)),n={width:t,height:e.length,cells:[],playerStart:{col:-1,row:-1},exits:[],zombies:[],survivors:[],pickups:[],doors:[],secretWalls:[],furniture:[]},s=[];let r=!1;e.forEach((o,l)=>{const c=[];for(let h=0;h<t;h++){const d=o[h];if(d===void 0){c.push("wall");continue}const u=tr[d];if(!u){s.push({message:`unknown character '${d}'. Allowed: ${Object.keys(tr).join(" ")}`,line:l+1,column:h+1}),c.push("wall");continue}c.push(u.cell);const f={col:h,row:l};"thing"in u&&u.thing==="player"?r?s.push({message:`second player start 'P' (the first is at line ${n.playerStart.row+1}, column ${n.playerStart.col+1}); a level needs exactly one`,line:l+1,column:h+1}):(r=!0,n.playerStart=f):"thing"in u&&u.thing==="survivor"?n.survivors.push(f):"zombie"in u?n.zombies.push({...f,kind:u.zombie}):"pickup"in u?n.pickups.push({...f,kind:u.pickup}):u.cell==="door"?n.doors.push(f):u.cell==="secret"?n.secretWalls.push(f):u.cell==="exit"?n.exits.push(f):u.cell==="furniture"&&n.furniture.push(f)}n.cells.push(c)});const a={line:e.length+1,column:1};r||s.push({message:"no player start 'P' anywhere in the level",...a}),n.exits.length===0&&s.push({message:"no exit 'E' anywhere in the level",...a});for(const o of n.exits)jh(n,o)||s.push({message:"exit 'E' is not in a wall line: it needs wall on both sides, left and right or above and below (the outer border counts as wall)",line:o.row+1,column:o.col+1});if(r&&Qh(n)&&s.push(...$h(n)),s.length>0)throw new Za(s);return n}function Qh(i){return i.cells.some(e=>e.some(t=>t==="hole"||t==="furniture"))}function $h(i){var o;const e=new Set,t=({col:l,row:c})=>c*i.width+l,n=[i.playerStart];e.add(t(i.playerStart));for(let l=n.shift();l;l=n.shift())if(i.cells[l.row][l.col]!=="exit")for(const[c,h]of[[1,0],[-1,0],[0,1],[0,-1]]){const d={col:l.col+c,row:l.row+h},u=(o=i.cells[d.row])==null?void 0:o[d.col];u===void 0||u==="wall"||u==="hole"||e.has(t(d))||(e.add(t(d)),n.push(d))}const s=[],r=i.survivors.find(l=>!e.has(t(l)));r&&s.push({message:"survivor 'S' cannot be reached from the player start 'P' without crossing a Hole 'O'",line:r.row+1,column:r.col+1});const a=i.exits[0];return a&&!i.exits.some(l=>e.has(t(l)))&&s.push({message:"exit 'E' cannot be reached from the player start 'P' without crossing a Hole 'O'",line:a.row+1,column:a.col+1}),s}function jh(i,{col:e,row:t}){const n=(s,r)=>{var o;const a=((o=i.cells[r])==null?void 0:o[s])??"wall";return a==="wall"||a==="secret"};return n(e-1,t)&&n(e+1,t)||n(e,t-1)&&n(e,t+1)}function ed(i,{col:e,row:t}){const n=(s,r)=>{var o;const a=((o=i.cells[r])==null?void 0:o[s])??"wall";return a==="wall"||a==="secret"};return n(e-1,t)&&n(e+1,t)||n(e,t-1)&&n(e,t+1)}function td(i){var a;const e=[];for(const o of i.doors)ed(i,o)||e.push({message:"door 'D' is not in a wall line: it needs wall on both sides, left and right or above and below",line:o.row+1,column:o.col+1});const t=new Set,n=({col:o,row:l})=>l*i.width+o,s=[i.playerStart];t.add(n(i.playerStart));let r=null;for(let o=s.shift();o;o=s.shift()){if(i.cells[o.row][o.col]==="exit")continue;(o.col===0||o.row===0||o.col===i.width-1||o.row===i.height-1)&&(!r||o.row<r.row||o.row===r.row&&o.col<r.col)&&(r=o);for(const[h,d]of[[1,0],[-1,0],[0,1],[0,-1]]){const u={col:o.col+h,row:o.row+d},f=(a=i.cells[u.row])==null?void 0:a[u.col];f===void 0||f==="wall"||t.has(n(u))||(t.add(n(u)),s.push(u))}}return r&&e.push({message:"not enclosed: the player can walk here, to the edge of the level; wall it off",line:r.row+1,column:r.col+1}),e}const Ce=100,nd=5,Gt=9,Ut=[{item:"wall",char:"#",name:"Wall"},{item:"floor",char:".",name:"Floor (erase)"},{item:"player",char:"P",name:"Player start"},{item:"shambler",char:"Z",name:"Shambler"},{item:"sprinter",char:"R",name:"Sprinter"},{item:"survivor",char:"S",name:"Survivor"},{item:"health",char:"H",name:"Health"},{item:"shells",char:"A",name:"Shells"},{item:"door",char:"D",name:"Door"},{item:"secret",char:"X",name:"Secret wall"},{item:"hole",char:"O",name:"Hole"},{item:"furniture",char:"T",name:"Furniture"},{item:"exit",char:"E",name:"Exit door"}],yi=Object.fromEntries(Ut.map(i=>[i.item,i.char])),id=new Set(["wall","secret","door","exit","hole","furniture"]);function sd(i){return Ut.find(e=>e.item===i).name}function rd(i){var e;return((e=Ut.find(t=>t.char===i))==null?void 0:e.item)??"floor"}function ad(){const i=Ce-1,e=Array.from({length:Ce},(n,s)=>Array.from({length:Ce},(r,a)=>s===0||s===i||a===0||a===i?yi.wall:".")),t=Ce/2;return e[t][t]=yi.player,e[t][t+2]=yi.exit,{rows:e}}function od(i){return{rows:i.rows.map(e=>[...e])}}function Di({col:i,row:e}){return i>=0&&e>=0&&i<Ce&&e<Ce}function Jn(i,e){return Di(e)?rd(i.rows[e.row][e.col]):"wall"}function ld(i,e,t,n=[]){if(!Di(t))return{ok:!1,message:"OUT OF BOUNDS"};if(id.has(e)&&n.some(s=>s.col===t.col&&s.row===t.row))return{ok:!1,message:"CAN'T BUILD WHERE YOU STAND"};if(e==="player")for(const s of i.rows)for(let r=0;r<s.length;r++)s[r]===yi.player&&(s[r]=".");return i.rows[t.row][t.col]=yi[e],{ok:!0}}function cd(i,e){return!Di(e)||Jn(i,e)==="floor"?!1:(i.rows[e.row][e.col]=".",!0)}function No(i,e,t){const n=[];for(let s=Math.floor(e-t);s<=Math.floor(e+t-1e-9);s++)for(let r=Math.floor(i-t);r<=Math.floor(i+t-1e-9);r++)n.push({col:r,row:s});return n}const ud=new Set(["wall","secret","door","exit"]);function hd(i,e,t,n,s=nd){const r=Math.cos(n),a=Math.sin(n);let o=Math.floor(e),l=Math.floor(t);const c=r>0?1:-1,h=a>0?1:-1,d=r===0?1/0:Math.abs(1/r),u=a===0?1/0:Math.abs(1/a);let f=r===0?1/0:(r>0?o+1-e:e-o)*d,g=a===0?1/0:(a>0?l+1-t:t-l)*u,S=null,m=null;for(;;){const p={col:o,row:l};if(!Di(p))break;m=p;const M=Jn(i,p);if(S!==null&&M!=="floor")return{remove:p,place:ud.has(M)?S:p};if(S=p,Math.min(f,g)>s)break;f<g?(o+=c,f+=d):(l+=h,g+=u)}return{remove:null,place:m}}function Qa(){return{slots:Ut.slice(0,Gt).map(i=>i.item),selected:0}}function dd(i,e){return Number.isInteger(e)&&e>=0&&e<Gt?{...i,selected:e}:i}function fd(i,e){return{...i,selected:((i.selected+e)%Gt+Gt)%Gt}}function oc(i,e,t){if(!Number.isInteger(e)||e<0||e>=Gt)return i;const n=[...i.slots],s=n.indexOf(t);return s>=0&&(n[s]=n[e]??null),n[e]=t,{...i,slots:n}}function Fo(i){return i.slots[i.selected]??null}function lc(i){const e=()=>i.rows.map(d=>d.join("")).join(`
`)+`
`,t=cc(i);if(!t)return{text:e(),warnings:["no Player start 'P' anywhere in the level"]};const n=new Set,s=({col:d,row:u})=>u*Ce+d,r=[t];n.add(s(t));for(let d=r.shift();d;d=r.shift())if(Jn(i,d)!=="exit")for(const[f,g]of[[1,0],[-1,0],[0,1],[0,-1]]){const S={col:d.col+f,row:d.row+g};!Di(S)||n.has(s(S))||Jn(i,S)==="wall"||(n.add(s(S)),r.push(S))}let a={col:Ce,row:Ce},o={col:-1,row:-1},l=null;for(let d=0;d<Ce;d++)for(let u=0;u<Ce;u++)n.has(s({col:u,row:d}))&&(!l&&(u===0||d===0||u===Ce-1||d===Ce-1)&&(l={col:u,row:d}),a={col:Math.min(a.col,u),row:Math.min(a.row,d)},o={col:Math.max(o.col,u),row:Math.max(o.row,d)});if(l){const d=e(),u=ra(d).filter(f=>!f.includes("not enclosed:"));return{text:d,warnings:[`not enclosed at column ${l.col+1}, row ${l.row+1}: walk there and wall it off`,...u]}}const c=[];for(let d=a.row-1;d<=o.row+1;d++){let u="";for(let f=a.col-1;f<=o.col+1;f++)u+=n.has(s({col:f,row:d}))?i.rows[d][f]:"#";c.push(u)}const h=c.join(`
`)+`
`;return{text:h,warnings:ra(h)}}function ra(i){try{return td(Ja(i)).map(t=>`line ${t.line}, column ${t.column}: ${t.message}`)}catch(e){if(e instanceof Za)return e.problems.map(t=>`line ${t.line}, column ${t.column}: ${t.message}`);throw e}}function cc(i){for(let e=0;e<Ce;e++){const t=i.rows[e].indexOf(yi.player);if(t>=0)return{col:t,row:e}}return null}function pd(i){const e=ra(i);if(e.length>0)return{ok:!1,errors:e};const t=Ja(i);if(t.width>Ce-2||t.height>Ce-2)return{ok:!1,errors:[`the level is ${t.width} x ${t.height}; the canvas holds at most ${Ce-2} x ${Ce-2}`]};const n=i.replace(/\r/g,"").split(`
`).slice(0,t.height),s=Array.from({length:Ce},()=>Array(Ce).fill(".")),r=Math.floor((Ce-t.width)/2),a=Math.floor((Ce-t.height)/2);return n.forEach((o,l)=>{for(let c=0;c<t.width;c++)s[a+l][r+c]=o[c]??"#"}),{ok:!0,level:{rows:s}}}function uc(i){return cc(i)}const md="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAwCAYAAAChS3wfAAAAtklEQVR4nO3QIQ7CQBBG4b1Lb7A3wFRXIElqqqsx1TVoDoFB93RDVpRsSJYlpMOQznvJb1btfCEQERFt3u2+yFazvuWr3AGcp1m01h1Pz1nfWQwAAJwD5J9Mcw+gNes7P87l0XnuAWpd+ijrhkOzzyPfBQAAAAAAAAAAAAAAAAAAAAAAAABg/Z+fBwAAAAAAgEeA69BK2ivA+p5m/UfV8kNLs/6jagB4BxjbKLVZ/1E1AAD4L4AHprKEbXrRnycAAAAASUVORK5CYII=",gd=Object.assign({"../../content/assets/editor/hammer.png":md});function _d(){return Object.values(gd)[0]??"./editor/hammer.png"}const vd=250,xd=12e3;function Sd(i){i.innerHTML=`
    <div class="message"></div>
    <img class="weapon" alt="" src="${_d()}" />
    <div class="problems" hidden></div>
    <div class="noclip" hidden>NO CLIP</div>
    <div class="selected"></div>
    <div class="hotbar">${Array.from({length:Gt},(h,d)=>`<div class="slot"><span class="number">${d+1}</span><span class="char"></span></div>`).join("")}</div>`;const e=i.querySelector(".weapon"),t=i.querySelector(".message"),n=i.querySelector(".problems"),s=i.querySelector(".noclip"),r=i.querySelector(".selected"),a=[...i.querySelectorAll(".slot")];let o="",l=null,c=0;return{render(h,d){const u=`${h.slots.join(",")}|${h.selected}`;u!==o&&(o=u,a.forEach((f,g)=>{const S=h.slots[g],m=Ut.find(p=>p.item===S);f.querySelector(".char").textContent=(m==null?void 0:m.char)??"",f.title=(m==null?void 0:m.name)??"Empty",f.classList.toggle("on",g===h.selected)}),r.textContent=d??"EMPTY")},setNoClip(h){s.hidden=!h},swing(){e.animate([{translate:"0 0",rotate:"0deg"},{translate:"-25% 20%",rotate:"-35deg"},{translate:"0 0",rotate:"0deg"}],{duration:vd,easing:"ease-out"})},say(h,d){l={text:h,until:d+2e3}},problems(h,d){n.hidden=h.length===0,n.textContent=h.join(`
`),c=d+xd},tick(h,d){!n.hidden&&h>c&&(n.hidden=!0),l&&h>l.until&&(l=null),t.textContent=(l==null?void 0:l.text)??d}}}const $i=5;function Oo(i){return{focus:"items",item:0,slot:i.selected}}function Md(i,e,t){const n={inventory:i,hotbar:t,close:!1};if(i.focus==="items")switch(e){case"left":return{...n,inventory:{...i,item:(i.item+Ut.length-1)%Ut.length}};case"right":return{...n,inventory:{...i,item:(i.item+1)%Ut.length}};case"up":return i.item-$i>=0?{...n,inventory:{...i,item:i.item-$i}}:n;case"down":return i.item+$i<Ut.length?{...n,inventory:{...i,item:i.item+$i}}:n;case"confirm":return{...n,inventory:{...i,focus:"hotbar"}};case"cancel":return{...n,close:!0}}switch(e){case"left":return{...n,inventory:{...i,slot:(i.slot+Gt-1)%Gt}};case"right":return{...n,inventory:{...i,slot:(i.slot+1)%Gt}};case"confirm":return{inventory:{...i,focus:"items"},hotbar:oc(t,i.slot,Ut[i.item].item),close:!1};case"cancel":return{...n,inventory:{...i,focus:"items"}};default:return n}}function Ed(i,e){let t=null,n=null;const s=()=>{n&&r(n.hotbar,n.inventory)};i.addEventListener("dragstart",a=>{var l;const o=a.target.closest("[data-item]");o&&((l=a.dataTransfer)==null||l.setData("text/plain",o.dataset.item))}),i.addEventListener("dragover",a=>{a.target.closest("[data-slot]")&&a.preventDefault()}),i.addEventListener("drop",a=>{const o=a.target.closest("[data-slot]"),l=Ut.find(c=>{var h;return c.item===((h=a.dataTransfer)==null?void 0:h.getData("text/plain"))});!o||!l||(a.preventDefault(),e(Number(o.dataset.slot),l.item))}),i.addEventListener("click",a=>{const o=a.target,l=o.closest("[data-item]"),c=o.closest("[data-slot]");l?(t=l.dataset.item,s()):c&&t!==null&&(e(Number(c.dataset.slot),t),t=null)});function r(a,o){n={hotbar:a,inventory:o};const l=Ut.map((h,d)=>`<div class="cell${o.focus==="items"&&o.item===d?" focus":""}${t===h.item||o.focus==="hotbar"&&o.item===d?" picked":""}" draggable="true" data-item="${h.item}"><span class="char">${h.char}</span><span class="label">${h.name}</span></div>`).join(""),c=Array.from({length:Gt},(h,d)=>{const u=Ut.find(f=>f.item===a.slots[d]);return`<div class="slot${o.focus==="hotbar"&&o.slot===d?" focus":""}${d===a.selected?" on":""}" data-slot="${d}"><span class="number">${d+1}</span><span class="char">${(u==null?void 0:u.char)??""}</span></div>`}).join("");i.innerHTML=`
      <h2>INVENTORY</h2>
      <div class="items" style="grid-template-columns: repeat(${$i}, 120px)">${l}</div>
      <h2>HOTBAR</h2>
      <div class="slots">${c}</div>
      <p class="hint">Drag an item onto a slot, or click an item then a slot. Gamepad: D-pad and Cross, Circle to go back. I closes.</p>`}return{show(a,o){i.hidden=!1,r(a,o)},hide(){i.hidden=!0,t=null},get visible(){return!i.hidden}}}const Ad={wall:!0,door:!0,secret:!0,floor:!1,exit:!0,hole:!1,furniture:!1},Vn=1e-9,yd=[[1,0],[0,1],[-1,0],[0,-1],[1,1],[-1,1],[-1,-1],[1,-1]];class bd{constructor(){Ue(this,"items",[]);Ue(this,"pushed",0)}push(e,t){const n=this.items;n.push({value:e,priority:t,order:this.pushed++});let s=n.length-1;for(;s>0;){const r=s-1>>1;if(!this.before(s,r))break;[n[s],n[r]]=[n[r],n[s]],s=r}}pop(){const e=this.items;if(e.length===0)return;const t=e[0].value,n=e.pop();if(e.length>0){e[0]=n;let s=0;for(;;){const r=s*2+1,a=r+1;let o=s;if(r<e.length&&this.before(r,o)&&(o=r),a<e.length&&this.before(a,o)&&(o=a),o===s)break;[e[s],e[o]]=[e[o],e[s]],s=o}}return t}before(e,t){const n=this.items[e],s=this.items[t];return n.priority<s.priority||n.priority===s.priority&&n.order<s.order}}class aa{constructor(e){Ue(this,"width");Ue(this,"height");Ue(this,"solid");Ue(this,"kinds");var t;this.width=e.width,this.height=e.height,this.solid=[],this.kinds=[];for(let n=0;n<e.height;n++)for(let s=0;s<e.width;s++){const r=((t=e.cells[n])==null?void 0:t[s])??"wall";this.kinds.push(r),this.solid.push(Ad[r])}}kindAt(e,t){return e<0||t<0||e>=this.width||t>=this.height?"wall":this.kinds[t*this.width+e]}overlapsKind(e,t,n,s){return this.someCellUnder(e,t,n,(r,a)=>this.kindAt(r,a)===s)}blocksWalking(e,t){if(this.isSolid(e,t))return!0;const n=this.kindAt(e,t);return n==="hole"||n==="furniture"}overlapsHole(e,t,n){return this.overlapsKind(e,t,n,"hole")}isSolid(e,t){return e<0||t<0||e>=this.width||t>=this.height?!0:this.solid[t*this.width+e]}isPassableOpeningDoors(e,t){const n=this.kindAt(e,t);return!this.blocksWalking(e,t)||n==="door"||n==="exit"}clear(e,t){e<0||t<0||e>=this.width||t>=this.height||(this.kinds[t*this.width+e]="floor")}open(e,t){e<0||t<0||e>=this.width||t>=this.height||(this.solid[t*this.width+e]=!1)}overlapsSolid(e,t,n){return this.someCellUnder(e,t,n,(s,r)=>this.isSolid(s,r))}overlapsBlocking(e,t,n,s){return this.someCellUnder(e,t,n,(r,a)=>this.blocksWalking(r,a)&&!(s&&this.kindAt(r,a)==="hole"))}cellAt(e,t){return{col:Math.floor(e),row:Math.floor(t)}}rayDistance(e,t,n,s,r,a=(o,l)=>this.isSolid(o,l)){let o=Math.floor(e),l=Math.floor(t);if(a(o,l))return 0;const c=n>0?1:-1,h=s>0?1:-1,d=n===0?1/0:Math.abs(1/n),u=s===0?1/0:Math.abs(1/s);let f=n===0?1/0:(n>0?o+1-e:e-o)*d,g=s===0?1/0:(s>0?l+1-t:t-l)*u;for(;;){let S;if(f<g?(S=f,f+=d,o+=c):(S=g,g+=u,l+=h),S>=r)return r;if(a(o,l))return S}}hasLineOfSight(e,t,n,s,r=(a,o)=>this.isSolid(a,o)){const a=Math.hypot(n-e,s-t);return a===0?!r(Math.floor(e),Math.floor(t)):this.rayDistance(e,t,(n-e)/a,(s-t)/a,a,r)>=a}findPath(e,t,n=(r,a)=>!this.blocksWalking(r,a),s=n){const r=(g,S)=>g>=0&&S>=0&&g<this.width&&S<this.height;if(!r(e.col,e.row)||!r(t.col,t.row)||!n(t.col,t.row))return null;const a=(g,S)=>S*this.width+g,o=a(e.col,e.row),l=a(t.col,t.row),c=g=>{const S=Math.abs(g%this.width-t.col),m=Math.abs(Math.floor(g/this.width)-t.row);return Math.max(S,m)+(Math.SQRT2-1)*Math.min(S,m)},h=new Map([[o,0]]),d=new Map,u=new bd;u.push(o,c(o));const f=new Set;for(let g=u.pop();g!==void 0;g=u.pop()){if(g===l)return this.tracePath(d,l);if(f.has(g))continue;f.add(g);const S=g%this.width,m=Math.floor(g/this.width);for(const[p,M]of yd){const T=S+p,A=m+M;if(!r(T,A)||!n(T,A)||p!==0&&M!==0&&(!s(S+p,m)||!s(S,m+M)))continue;const w=a(T,A),b=h.get(g)+(p!==0&&M!==0?Math.SQRT2:1);b>=(h.get(w)??1/0)-Vn||(h.set(w,b),d.set(w,g),u.push(w,b+c(w)))}}return null}tracePath(e,t){const n=[];for(let s=t;s!==void 0;s=e.get(s))n.push({col:s%this.width,row:Math.floor(s/this.width)});return n.reverse()}someCellUnder(e,t,n,s){const r=Math.floor(e-n+Vn),a=Math.floor(e+n-Vn),o=Math.floor(t-n+Vn),l=Math.floor(t+n-Vn);for(let c=o;c<=l;c++)for(let h=r;h<=a;h++)if(s(h,c))return!0;return!1}move(e,t,n,s,r,a=[],o=!1){const l=Math.max(1,Math.ceil(Math.max(Math.abs(n),Math.abs(s))/Math.max(r,.05)));for(let c=0;c<l;c++)e=this.moveAlongX(e,t,n/l,r,a,o),t=this.moveAlongY(e,t,s/l,r,a,o);return{x:e,y:t}}moveAlongX(e,t,n,s,r,a){let o=this.moveAxis(e,t,n,s,"x",a);for(const l of r){const c=s+l.radius;Math.abs(t-l.y)>=c||Math.abs(e-l.x)<c-Vn||Math.abs(o-l.x)<c&&(o=n>0?l.x-c:l.x+c)}return o}moveAlongY(e,t,n,s,r,a){let o=this.moveAxis(t,e,n,s,"y",a);for(const l of r){const c=s+l.radius;Math.abs(e-l.x)>=c||Math.abs(t-l.y)<c-Vn||Math.abs(o-l.y)<c&&(o=n>0?l.y-c:l.y+c)}return o}moveAxis(e,t,n,s,r,a){if(n===0)return e;const o=e+n;return(r==="x"?this.overlapsBlocking(o,t,s,a):this.overlapsBlocking(t,o,s,a))?n>0?Math.floor(o+s)-s:Math.floor(o-s)+1+s:o}}function Td(i){const e=i.player,t=i.tuning.playerRadius+i.tuning.pickupRadius;for(const n of i.pickups)n.taken||Math.abs(e.x-(n.col+.5))>=t||Math.abs(e.y-(n.row+.5))>=t||wd[n.kind](i)&&(n.taken=!0,i.events.push({type:"pickupTaken",id:n.id,kind:n.kind}))}const wd={health:i=>{const e=i.player;return e.health>=i.tuning.playerHealth?!1:(e.healAmount=i.tuning.playerHealth-e.health,e.healing=i.tuning.healDuration,!0)},shells:i=>{const e=i.player,{shellsPerPickup:t,shellCap:n}=i.tuning;return e.shells>=n?!1:(e.shells=Math.min(n,e.shells+t),!0)}};function Rd(i,e){const t=i.player;if(t.healing<=0||t.health<=0)return;const{playerHealth:n}=i.tuning,s=Math.min(1,e/t.healing),r=s>=1-1e-9?t.healAmount:t.healAmount*s;t.healAmount-=r,t.healing=Math.max(0,t.healing-e),t.healing<1e-9&&(t.healing=0),t.health=Math.min(n,t.health+r),t.healing===0&&n-t.health<1e-9&&(t.health=n)}class Cd{constructor(e){Ue(this,"state");this.state=e>>>0}next(){this.state=this.state+1831565813>>>0;let e=this.state;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}range(e,t){return e+(t-e)*this.next()}}const Ii={shambler:i=>({health:i.shamblerHealth,speed:i.shamblerSpeed,damage:i.shamblerDamage,reach:i.shamblerReach,attackCooldown:i.shamblerAttackCooldown}),sprinter:i=>({health:i.sprinterHealth,speed:i.sprinterSpeed,damage:i.sprinterDamage,reach:i.sprinterReach,attackCooldown:i.sprinterAttackCooldown})};function Pd(i){const e=i.events.filter(s=>s.type==="gunshotFired"),t=i.tuning.earshotRadius,n=i.zombies.filter(s=>s.state!=="dead").length<=i.tuning.lastZombiesThreshold;for(const s of i.zombies){if(s.state==="dead"||s.state==="chasing")continue;const r=e.some(a=>Math.hypot(a.x-s.x,a.y-s.y)<=t);s.awake?(r||Bo(i,s))&&hc(s):(n||r||Bo(i,s))&&Ld(i,s)}}function Ld(i,e){e.state!=="idle"||e.awake||(e.awake=!0,hc(e),i.events.push({type:"zombieWoke",id:e.id}))}function hc(i){i.state="chasing",i.unseenFor=0,i.wanderTarget=null}const Dd=10,Id=1;function Ud(i,e){for(const t of i.zombies)if(t.state==="chasing"){if(!pc(i,t)){t.unseenFor=0;continue}t.unseenFor+=e,!(t.unseenFor<i.tuning.loseInterestDelay-1e-9)&&(t.unseenFor=0,t.wanderTarget=Nd(i,t),t.state=t.wanderTarget?"wandering":"idle")}}function Nd(i,e){const{grid:t}=i,n=t.cellAt(e.x,e.y),s=[];for(let a=0;a<t.height;a++)for(let o=0;o<t.width;o++){if(t.blocksWalking(o,a))continue;const l=Math.hypot(o+.5-e.x,a+.5-e.y);Math.abs(l-Dd)<=Id&&s.push({col:o,row:a})}const r=Math.floor(i.rng.next()*s.length);for(let a=0;a<s.length;a++){const o=s[(r+a)%s.length];if(t.findPath(n,o))return{x:o.col+.5,y:o.row+.5}}return null}function Fd(i,e){const{grid:t,player:n}=i,s=t.cellAt(n.x,n.y);for(const r of i.zombies){if(r.state==="wandering"){Od(i,r,e);continue}if(r.state!=="chasing"||$a(i,r))continue;const a=fc(i,r,s,{x:n.x,y:n.y});a&&dc(i,r,a,e)}}function Od(i,e,t){const n=e.wanderTarget,s=n&&fc(i,e,i.grid.cellAt(n.x,n.y),n);(!(s?dc(i,e,s,t):!1)||Math.hypot(n.x-e.x,n.y-e.y)<1e-6)&&(e.state="idle",e.wanderTarget=null)}function dc(i,e,t,n){const{grid:s,player:r,tuning:a}=i,o=t.x-e.x,l=t.y-e.y,c=Math.hypot(o,l);if(c===0)return!1;const h=Math.min(c,Ii[e.kind](a).speed*n),d=s.move(e.x,e.y,o/c*h,l/c*h,a.zombieRadius,[{x:r.x,y:r.y,radius:a.playerRadius},...Hd(i,e)]),u=d.x!==e.x||d.y!==e.y;return e.x=d.x,e.y=d.y,u}function Bd(i,e){const t=i.player;for(const n of i.zombies){if(n.cooldown=Math.max(0,n.cooldown-e),n.state!=="chasing"||n.cooldown>1e-9||!$a(i,n))continue;const s=Ii[n.kind](i.tuning);if(n.cooldown=s.attackCooldown,t.health=Math.max(0,t.health-s.damage),i.events.push({type:"playerHurt",id:n.id,damage:s.damage}),t.health===0)return}}function kd(i){const e=i.tuning.playerRadius;for(const t of i.zombies){if(t.state!=="chasing"||t.cooldown>1e-9)continue;const n=i.survivors.find(s=>s.state==="fleeing"&&$a(i,t,{x:s.x,y:s.y,radius:e}));n&&(t.cooldown=Ii[t.kind](i.tuning).attackCooldown,n.health=Math.max(0,n.health-i.tuning.zombieDamageToSurvivor),i.events.push({type:"survivorHurt",id:n.id,health:n.health,by:t.id}),!(n.health>0)&&(n.state="turning",n.turnTimer=i.tuning.turnDuration,i.events.push({type:"survivorKilled",id:n.id,by:t.id}),i.events.push({type:"survivorTurning",id:n.id})))}}function $a(i,e,t=zd(i)){const{tuning:n}=i;return Math.hypot(t.x-e.x,t.y-e.y)-n.zombieRadius-t.radius<=Ii[e.kind](n).reach+1e-9}function zd(i){return{x:i.player.x,y:i.player.y,radius:i.tuning.playerRadius}}function fc(i,e,t,n){const s=i.grid.findPath(i.grid.cellAt(e.x,e.y),t);if(!s)return null;if(s.length<=2)return n;const r=s[1];return{x:r.col+.5,y:r.row+.5}}function Hd(i,e){const t=i.tuning.zombieRadius;return i.zombies.filter(n=>n!==e&&n.state!=="dead").map(n=>({x:n.x,y:n.y,radius:t}))}function pc(i,e){const t=i.player;if(!t.crouching)return!1;const n=(s,r)=>i.grid.kindAt(s,r)==="furniture";return!i.grid.hasLineOfSight(e.x,e.y,t.x,t.y,n)}function Bo(i,e){const t=i.player,n=i.grid,s=t.crouching?(r,a)=>n.isSolid(r,a)||n.kindAt(r,a)==="furniture":(r,a)=>n.isSolid(r,a);return n.hasLineOfSight(e.x,e.y,t.x,t.y,s)}function Gd(i,e){for(const t of i.survivors)t.state==="turning"&&(t.turnTimer=Math.max(0,t.turnTimer-e),!(t.turnTimer>1e-9)&&Vd(i,t))}function Vd(i,e){e.state="dead",e.turnTimer=0;const t=i.rng.next()<.5?"shambler":"sprinter",n=i.zombies.length;e.risenAs=n,i.survivorsTurned++,i.zombies.push({id:n,kind:t,risen:!0,x:e.x,y:e.y,state:"idle",health:Ii[t](i.tuning).health,cooldown:0,awake:!1,unseenFor:0,wanderTarget:null}),i.events.push({type:"survivorRose",id:e.id,zombieId:n,kind:t})}function Wd(i,e){e.state="dead",e.turnTimer=0,i.events.push({type:"turnStopped",id:e.id})}const Xd={1:"crowbar",2:"shotgun"},ko=Math.PI/180,qd={crowbar:i=>({hits:{kind:"arc",width:i.crowbarArc*ko},damage:i.crowbarDamage,range:i.crowbarRange,cooldown:i.crowbarCooldown,shellsPerAttack:0,sound:"crowbarSwung"}),shotgun:i=>({hits:{kind:"pellets",count:i.shotgunPellets,spread:i.shotgunSpread*ko},damage:i.shotgunDamage,range:i.shotgunRange,cooldown:i.shotgunCooldown,shellsPerAttack:1,sound:"gunshotFired"})};function Yd(i,e){if(e===null)return;const t=i.player;t.weapon=e==="switch"?t.weapon==="crowbar"?"shotgun":"crowbar":Xd[e]}function Kd(i,e,t){const n=i.player;if(n.cooldown=Math.max(0,n.cooldown-t),!e||n.cooldown>1e-9)return;const s=qd[n.weapon](i.tuning);if(n.shells<s.shellsPerAttack)return;n.shells-=s.shellsPerAttack,n.cooldown=s.cooldown,i.events.push({type:s.sound,x:n.x,y:n.y});const{hits:r}=s;if(r.kind==="arc"){const a=Zd(i,r.width,s.range);if(a)zo(i,a,s.damage);else{const o=Jd(i,r.width,s.range);o&&Qd(i,o,s.damage)}return}for(let a=0;a<r.count;a++){const o=n.facing+i.rng.range(-r.spread/2,r.spread/2),l=$d(i,Math.cos(o),Math.sin(o),s.range);l&&zo(i,l,s.damage)}}function mc(i){const{zombieRadius:e,playerRadius:t}=i.tuning,n=[];for(const s of i.zombies)s.state!=="dead"&&n.push({target:{zombie:s},x:s.x,y:s.y,radius:e});for(const s of i.survivors)s.state==="turning"&&n.push({target:{body:s},x:s.x,y:s.y,radius:t});return n}function zo(i,e,t){"zombie"in e?_c(i,e.zombie,t):Wd(i,e.body)}function Zd(i,e,t){const{x:n,y:s,facing:r}=i.player;let a=null,o=1/0;for(const l of mc(i)){const c=Math.hypot(l.x-n,l.y-s);c-l.radius>t||c>=o||Math.abs(gc(r,Math.atan2(l.y-s,l.x-n)))>e/2+1e-9||i.grid.hasLineOfSight(n,s,l.x,l.y)&&(a=l.target,o=c)}return a}function Jd(i,e,t){const{x:n,y:s,facing:r}=i.player;let a=null,o=1/0;for(const l of i.furniture){const c=l.col+.5,h=l.row+.5,d=Math.hypot(c-n,h-s);d-.5>t||d>=o||Math.abs(gc(r,Math.atan2(h-s,c-n)))>e/2+1e-9||i.grid.hasLineOfSight(n,s,c,h)&&(a=l,o=d)}return a}function Qd(i,e,t){e.health=Math.max(0,e.health-t);const{col:n,row:s,health:r}=e;i.events.push({type:"furnitureHit",col:n,row:s,damage:t,health:r}),!(r>0)&&(i.furniture=i.furniture.filter(a=>a!==e),i.grid.clear(n,s),i.events.push({type:"furnitureSmashed",col:n,row:s}))}function gc(i,e){const t=(e-i)%(2*Math.PI);return t>Math.PI?t-2*Math.PI:t<-Math.PI?t+2*Math.PI:t}function $d(i,e,t,n){const{x:s,y:r}=i.player;let a=null,o=i.grid.rayDistance(s,r,e,t,n);for(const l of mc(i)){const c=jd(s,r,e,t,l.x,l.y,l.radius);c!==null&&c<=o&&(a=l.target,o=c)}return a}function _c(i,e,t){e.health=Math.max(0,e.health-t),i.events.push({type:"zombieHit",id:e.id,damage:t}),!(e.health>0)&&(e.state="dead",e.risen?i.risenKilled++:i.zombiesKilled++,i.events.push({type:"zombieKilled",id:e.id}))}function jd(i,e,t,n,s,r,a){let o=0,l=1/0;for(const[c,h,d]of[[i,t,s],[e,n,r]]){if(h===0){if(Math.abs(c-d)>a)return null;continue}const u=(d-a-c)/h,f=(d+a-c)/h;o=Math.max(o,Math.min(u,f)),l=Math.min(l,Math.max(u,f))}return o<=l?o:null}const Ho=1e-6,ef=1e-6;function tf(i,e){if(!e)return;const t=i.player,n=Math.cos(t.facing),s=Math.sin(t.facing),r=i.tuning.playerRadius+i.tuning.useReach,a=i.grid.rayDistance(t.x,t.y,n,s,r);if(a>=r)return;const o=i.grid.cellAt(t.x+n*(a+Ho),t.y+s*(a+Ho));vc(i,o.col,o.row)}function vc(i,e,t){const n=i.doors.find(a=>a.kind==="door"&&a.col===e&&a.row===t&&a.state==="closed"),s=i.secretWalls.find(a=>a.col===e&&a.row===t&&a.state==="closed"),r=n??s;return r?(Sc(i,r),!0):!1}function xc(i,e,t,n){const s=n+ef;for(const r of i.doors){if(r.kind!=="exit"||r.state!=="closed")continue;e+s>r.col&&e-s<r.col+1&&t+s>r.row&&t-s<r.row+1&&Sc(i,r)}}function Sc(i,e){e.state="open",i.grid.open(e.col,e.row),e.kind==="secret"?(i.secretsFound++,i.events.push({type:"secretFound",id:e.id})):i.events.push({type:"doorOpened",id:e.id})}const nf=2;function sf(i,e){i.message={text:e,timeLeft:nf}}function rf(i,e){i.message&&(i.message.timeLeft-=e,i.message.timeLeft<=1e-9&&(i.message=null))}function af(i,e){if(!e)return;const{player:t,tuning:n,grid:s}=i;for(const r of i.survivors)r.state!=="waiting"||Math.hypot(r.x-t.x,r.y-t.y)-2*n.playerRadius>n.useReach||s.hasLineOfSight(t.x,t.y,r.x,r.y)&&(r.state="fleeing",i.events.push({type:"survivorFleeing",id:r.id}))}function of(i,e){const{grid:t,tuning:n}=i;for(const s of i.survivors){if(s.state!=="fleeing")continue;const r=hf(i,s);if(!r)continue;const a=r[1];if(!a)continue;vc(i,a.col,a.row);const o=a.col+.5-s.x,l=a.row+.5-s.y,c=Math.hypot(o,l);if(c===0)continue;const h=Math.min(c,n.survivorSpeed*e),d=t.move(s.x,s.y,o/c*h,l/c*h,n.playerRadius);s.x=d.x,s.y=d.y,xc(i,s.x,s.y,n.playerRadius),t.overlapsKind(s.x,s.y,n.playerRadius,"exit")&&uf(i,s)}}function lf(i,e){const{tuning:t}=i;for(const n of i.survivors){if(n.cooldown=Math.max(0,n.cooldown-e),n.state!=="fleeing"||n.health>t.survivorFightBackHealth||n.cooldown>1e-9)continue;const s=cf(i,n);s&&(n.cooldown=t.survivorAttackCooldown,_c(i,s,t.survivorDamage))}}function cf(i,e){const{tuning:t}=i;let n=null,s=1/0;for(const r of i.zombies){if(r.state!=="chasing")continue;const a=Math.hypot(r.x-e.x,r.y-e.y);a-t.playerRadius-t.zombieRadius>t.survivorReach+1e-9||a>=s||(n=r,s=a)}return n}function uf(i,e){e.state="safe",i.survivorsRescued++,i.events.push({type:"survivorSafe",id:e.id}),sf(i,"SURVIVOR SAFE")}function hf(i,e){const{grid:t}=i,n=t.cellAt(e.x,e.y),s=(o,l)=>!t.blocksWalking(o,l),r=(o,l)=>t.isPassableOpeningDoors(o,l);let a=null;for(const o of i.level.exits){const l=t.findPath(n,o,r,s);l&&(!a||l.length<a.length)&&(a=l)}return a}function df(i,e){const{survivorHealth:t,survivorHealAmount:n,survivorHealInterval:s}=i.tuning;for(const r of i.survivors)if(!(r.state!=="waiting"&&r.state!=="fleeing")){if(r.health>=t){r.healTimer=0;continue}r.healTimer+=e,!(r.healTimer<s-1e-9)&&(r.healTimer-=s,r.health=Math.min(t,r.health+n))}}const ja=60,Kt=1/ja;function ff(i){let e=Go(i,i.startScreen??"title");return{step(t){return e.screen==="dead"&&t.confirm?(e=Go(i,"playing"),[]):(e.events=[],mf(e,t),e.screen==="playing"&&pf(e,t),e.tick++,e.events)},snapshot:()=>xf(e)}}function pf(i,e){if(rf(i,Kt),gf(i,e),_f(i),xc(i,i.player.x,i.player.y,i.tuning.playerRadius),Td(i),tf(i,e.use),af(i,e.use),Yd(i,e.weapon),Kd(i,e.attack,Kt),Gd(i,Kt),Pd(i),Ud(i,Kt),Fd(i,Kt),of(i,Kt),Bd(i,Kt),kd(i),lf(i,Kt),df(i,Kt),Rd(i,Kt),i.time+=Kt,i.player.health<=0){i.screen="dead",i.events.push({type:"playerDied"});return}vf(i)}function Go(i,e){const{level:t,tuning:n,seed:s}=i;return{level:t,tuning:n,grid:new aa(t),rng:new Cd(s),tick:0,time:0,screen:e,player:{x:t.playerStart.col+.5,y:t.playerStart.row+.5,facing:-Math.PI/2,lastCell:{...t.playerStart},crouching:!1,health:n.playerHealth,healing:0,healAmount:0,weapon:"shotgun",shells:n.startingShells,cooldown:0},zombies:t.zombies.map((r,a)=>({id:a,kind:r.kind,x:r.col+.5,y:r.row+.5,state:"idle",health:Ii[r.kind](n).health,cooldown:0,risen:!1,awake:!1,unseenFor:0,wanderTarget:null})),survivors:t.survivors.map((r,a)=>({id:a,x:r.col+.5,y:r.row+.5,state:"waiting",health:n.survivorHealth,cooldown:0,healTimer:0,turnTimer:0,risenAs:null})),pickups:t.pickups.map((r,a)=>({id:a,kind:r.kind,col:r.col,row:r.row,taken:!1})),doors:[...t.doors.map(r=>({kind:"door",col:r.col,row:r.row})),...t.exits.map(r=>({kind:"exit",col:r.col,row:r.row}))].map((r,a)=>({id:a,...r,state:"closed"})),furniture:t.furniture.map(r=>({col:r.col,row:r.row,health:n.furnitureHealth})),secretWalls:t.secretWalls.map((r,a)=>({id:a,kind:"secret",col:r.col,row:r.row,state:"closed"})),survivorsRescued:0,zombiesKilled:0,risenKilled:0,survivorsTurned:0,secretsFound:0,message:null,events:[]}}function mf(i,e){switch(i.screen){case"title":e.confirm&&(i.screen="playing");break;case"playing":e.pause&&(i.screen="paused");break;case"paused":(e.confirm||e.pause)&&(i.screen="playing");break}}function gf(i,e){const t=i.player;t.facing=Sf(t.facing+(Number.isFinite(e.turn)?e.turn:0)),t.crouching=e.crouch===!0;const n=Vo(e.forward,-1,1),s=Vo(e.strafe,-1,1),r=Math.cos(t.facing),a=Math.sin(t.facing);let o=n*r-s*a,l=n*a+s*r;const c=Math.hypot(o,l);if(c===0)return;const d=i.tuning.playerSpeed*(t.crouching?i.tuning.crouchSpeedFactor:1)*Kt/Math.max(1,c);o*=d,l*=d;const u=i.tuning.zombieRadius,f=i.zombies.filter(S=>S.state!=="dead").map(S=>({x:S.x,y:S.y,radius:u})),g=i.grid.move(t.x,t.y,o,l,i.tuning.playerRadius,f,!0);t.x=g.x,t.y=g.y}function _f(i){const e=i.player;if(i.grid.overlapsHole(e.x,e.y,i.tuning.playerRadius)){const t=i.tuning.holeDamage;e.x=e.lastCell.col+.5,e.y=e.lastCell.row+.5,e.health=Math.max(0,e.health-t),i.events.push({type:"playerFell",damage:t});return}e.lastCell=i.grid.cellAt(e.x,e.y)}function vf(i){const e=i.player;i.grid.overlapsKind(e.x,e.y,i.tuning.playerRadius,"exit")&&(i.screen="stats",i.events.push({type:"levelCompleted"}))}function xf(i){var t;const e=i.player;return{tick:i.tick,time:i.time,screen:i.screen,player:{x:e.x,y:e.y,facing:e.facing,crouching:e.crouching,health:e.health,healing:e.healing,weapon:e.weapon,shells:e.shells},zombies:i.zombies.map(n=>({id:n.id,kind:n.kind,x:n.x,y:n.y,state:n.state,health:n.health,risen:n.risen,hidden:pc(i,n)})),survivors:i.survivors.map(n=>({id:n.id,x:n.x,y:n.y,state:n.state,health:n.health,risenAs:n.risenAs})),pickups:i.pickups.filter(n=>!n.taken).map(n=>({id:n.id,kind:n.kind,col:n.col,row:n.row})),doors:i.doors.map(n=>({id:n.id,kind:n.kind,col:n.col,row:n.row,state:n.state})),secretWalls:i.secretWalls.map(n=>({id:n.id,kind:n.kind,col:n.col,row:n.row,state:n.state})),furniture:i.furniture.map(n=>({col:n.col,row:n.row,health:n.health})),stats:{survivorsRescued:i.survivorsRescued,survivorsTotal:i.level.survivors.length,zombiesKilled:i.zombiesKilled,zombiesTotal:i.level.zombies.length,risen:{killed:i.risenKilled,turned:i.survivorsTurned},secretsFound:i.secretsFound,secretsTotal:i.level.secretWalls.length,time:i.time},message:((t=i.message)==null?void 0:t.text)??null}}function Vo(i,e,t){return Number.isFinite(i)?Math.min(t,Math.max(e,i)):0}function Sf(i){const e=Math.PI*2;let t=i%e;return t<=-Math.PI&&(t+=e),t>Math.PI&&(t-=e),t}const Rn={cross:0,square:2,triangle:3,r2:7,options:9,r3:11,dpadLeft:14,dpadRight:15},br={leftX:0,leftY:1,rightX:2},Mf=.5,Ef=Math.PI/180;class Mc{constructor(e,t){Ue(this,"down",new Set);this.deadzone=e,this.turnSpeed=t}read(){var l,c,h;const e=(l=navigator.getGamepads)==null?void 0:l.call(navigator).find(d=>(d==null?void 0:d.connected)&&d.mapping==="standard");if(!e)return this.down.clear(),null;const t=this.down;this.down=new Set(e.buttons.flatMap((d,u)=>d.pressed?[u]:[]));const n=d=>this.down.has(d)&&!t.has(d),[s,r]=this.stick(e.axes[br.leftX]??0,e.axes[br.leftY]??0),[a]=this.stick(e.axes[br.rightX]??0,0),o=Math.sign(a)*a*a*this.turnSpeed*Ef/ja;return{forward:-r,strafe:s,turn:o,attack:(((c=e.buttons[Rn.r2])==null?void 0:c.value)??0)>=Mf,weapon:n(Rn.triangle)?"switch":n(Rn.dpadLeft)?1:n(Rn.dpadRight)?2:null,use:n(Rn.square),crouch:((h=e.buttons[Rn.r3])==null?void 0:h.pressed)??!1,pause:n(Rn.options),confirm:n(Rn.cross)}}stick(e,t){const n=Math.hypot(e,t);if(n<=this.deadzone)return[0,0];const s=Math.min(1,(n-this.deadzone)/(1-this.deadzone))/n;return[e*s,t*s]}}const Ct={cross:0,circle:1,triangle:3,dpadUp:12,dpadDown:13,l2:6,r2:7,options:9,l3:10,dpadLeft:14,dpadRight:15},Af=.5;class yf{constructor(e,t){Ue(this,"held",new Set);Ue(this,"mouseDx",0);Ue(this,"use",!1);Ue(this,"place",!1);Ue(this,"remove",!1);Ue(this,"play",!1);Ue(this,"inventory",!1);Ue(this,"menu",!1);Ue(this,"noClip",!1);Ue(this,"slot",null);Ue(this,"scroll",0);Ue(this,"padDown",new Set);Ue(this,"gamepad");Ue(this,"mouseSensitivity");this.canvas=e,this.mouseSensitivity=t.mouseSensitivity,this.gamepad=new Mc(t.gamepadDeadzone,t.gamepadTurnSpeed),e.addEventListener("click",()=>{this.locked||Promise.resolve(e.requestPointerLock()).catch(()=>{})}),e.addEventListener("contextmenu",n=>n.preventDefault()),document.addEventListener("pointerlockchange",()=>{this.locked||this.held.clear()}),document.addEventListener("mousemove",n=>{this.locked&&(this.mouseDx+=n.movementX)}),document.addEventListener("mousedown",n=>{this.locked&&(n.button===0&&(this.place=!0),n.button===2&&(this.remove=!0))}),document.addEventListener("wheel",n=>{this.locked&&n.deltaY!==0&&(this.scroll+=Math.sign(n.deltaY))},{passive:!0}),window.addEventListener("keydown",n=>{if(n.code==="Tab"&&n.shiftKey&&n.preventDefault(),n.repeat)return;this.held.add(n.code),n.code==="Tab"&&n.shiftKey&&(this.play=!0),n.code==="KeyE"&&(this.use=!0),n.code==="KeyN"&&(this.noClip=!0),n.code==="KeyL"&&(this.menu=!0),n.code==="KeyI"&&(this.inventory=!0);const s=/^Digit([1-9])$/.exec(n.code);s&&(this.slot=Number(s[1])-1)}),window.addEventListener("keyup",n=>this.held.delete(n.code)),window.addEventListener("blur",()=>this.held.clear())}get locked(){return document.pointerLockElement===this.canvas}read(e){const t=a=>this.held.has(a)?1:0,n=this.gamepad.read(),s=this.readPadButtons(),r={forward:t("KeyW")-t("KeyS")+((n==null?void 0:n.forward)??0),strafe:t("KeyD")-t("KeyA")+((n==null?void 0:n.strafe)??0),turn:this.mouseDx*this.mouseSensitivity+(n?n.turn*e*60:0),use:this.use||((n==null?void 0:n.use)??!1),place:this.place||s.has(Ct.r2),remove:this.remove||s.has(Ct.l2),play:this.play,inventory:this.inventory||s.has(Ct.triangle),pad:[[Ct.dpadLeft,"left"],[Ct.dpadRight,"right"],[Ct.dpadUp,"up"],[Ct.dpadDown,"down"],[Ct.cross,"confirm"],[Ct.circle,"cancel"]].flatMap(([a,o])=>s.has(a)?[o]:[]),menu:this.menu||s.has(Ct.options),noClip:this.noClip||s.has(Ct.l3),slot:this.slot,scroll:this.scroll+(s.has(Ct.dpadRight)?1:0)-(s.has(Ct.dpadLeft)?1:0)};return this.mouseDx=0,this.use=!1,this.place=!1,this.remove=!1,this.play=!1,this.inventory=!1,this.menu=!1,this.noClip=!1,this.slot=null,this.scroll=0,r}readPadButtons(){var n;const e=(n=navigator.getGamepads)==null?void 0:n.call(navigator).find(s=>(s==null?void 0:s.connected)&&s.mapping==="standard"),t=this.padDown;return this.padDown=new Set(e?e.buttons.flatMap((s,r)=>s.pressed||(r===Ct.l2||r===Ct.r2)&&s.value>=Af?[r]:[]):[]),new Set([...this.padDown].filter(s=>!t.has(s)))}}function bf(i,e){const t=i.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")||"level";for(let n=1;;n++){const s=`${n===1?t:`${t}-${n}`}.txt`;if(!e.includes(s))return s}}function fs(i,e,t){const n=e.map(l=>({key:`shipped:${l}`,name:l.replace(/\.txt$/,""),file:l,shipped:!0})),s=[...e];for(const l of t){const c=bf(l.name,s);s.push(c),n.push({key:`editor:${l.id}`,name:l.name,file:c,shipped:!1})}const r=new Map(n.map(l=>[l.key,l])),a=i.flatMap(l=>r.has(l)?[r.get(l)]:[]),o=new Set(a.map(l=>l.key));return[...a,...n.filter(l=>!o.has(l.key))]}function Tf(i,e,t){const n=i.map(a=>a.key),s=n.indexOf(e);if(s<0)return n;const r=Math.min(n.length-1,Math.max(0,s+t));return n.splice(r,0,n.splice(s,1)[0]),n}function wf(i){return`{
  "levels": [${i.map(e=>JSON.stringify(e)).join(", ")}]
}
`}function Rf(i){return wf(i.map(e=>e.file))}function Cf(i){return i.dataset.key??""}function Pf(i,e){return i.addEventListener("click",t=>{var o;const n=t.target.closest("button[data-action]");if(!n)return;const{action:s,id:r="",name:a=""}=n.dataset;if(s==="open")e.open(r);else if(s==="create")e.create();else if(s==="duplicate")e.duplicate(r);else if(s==="copy")e.copyShipped(a);else if(s==="export")e.exportTxt(r);else if(s==="import")(o=i.querySelector("input[type=file]"))==null||o.click();else if(s==="up"||s==="down")e.move(Cf(n),s==="up"?-1:1);else if(s==="game-json")e.exportGameJson();else if(s==="rename"){const l=window.prompt("Rename level",a);l!==null&&e.rename(r,l)}else s==="remove"&&window.confirm(`Delete "${a}"? This cannot be undone.`)&&e.remove(r)}),i.addEventListener("change",t=>{const n=t.target;if(n.type==="file"){for(const s of n.files??[])e.importFile(s);n.value=""}}),{show(t,n,s,r){i.hidden=!1,i.replaceChildren();const a=(u,f,g="",S=i)=>{const m=document.createElement(u);return m.textContent=f,g&&(m.className=g),S.append(m),m},o=(u,f,g)=>{const S=a("button",f,"",u);Object.assign(S.dataset,g)};a("h1","LEVEL EDITOR"),r&&a("p",r,"notice"),a("h2","Your levels"),t.length===0&&a("p","None yet: make a new level, or copy a shipped one.","hint");for(const u of t){const f=a("div","","row");a("span",u.name,"name",f),o(f,"Open",{action:"open",id:u.id}),o(f,"Rename",{action:"rename",id:u.id,name:u.name}),o(f,"Duplicate",{action:"duplicate",id:u.id}),o(f,"Export .txt",{action:"export",id:u.id}),o(f,"Delete",{action:"remove",id:u.id,name:u.name})}const l=a("div","","row");o(l,"New level",{action:"create"});const c=document.createElement("input");c.type="file",c.accept=".txt,text/plain",c.multiple=!0,c.hidden=!0,l.append(c),o(l,"Import .txt",{action:"import"}),a("h2","Copy a shipped level");const h=a("div","","row");for(const u of n)o(h,u,{action:"copy",name:u});a("h2","Play order"),a("p","The order the game plays levels in. Export game.json, and put each level's .txt in content/levels.","hint"),s.forEach((u,f)=>{const g=a("div","","row");a("span",`${f+1}. ${u.name}`,"name",g),a("span",u.file,"file",g),o(g,"Up",{action:"up",key:u.key}),o(g,"Down",{action:"down",key:u.key})});const d=a("div","","row");o(d,"Export game.json",{action:"game-json"}),a("p","L (or Options) brings you back here. Levels save as you build.","hint")},hide(){i.hidden=!0},get visible(){return!i.hidden}}}function Lf(i){return i.startsWith("v")?i:`v${i}`}const Ec=Lf("0.5.0"),Df="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAELUlEQVR4nE2Wac6rMAxF2ctXMnVLjJkhge7/3xM6lV+lqmJIYvsONoO1WutR69E5M45/xih5Yq02RvHEOcO/Uq/323Kr1Mtaba1mo1Ivrcdx/OPHIcP7bYOfgp9q2UveUlximK+eU1zOIxzV31dJcclpbWf83NVandN6XyWGubdU8hb8dB6BvcFPV88lb7Xs91VyWgetx1p2Dip5u69y9cz+z13vqxCGhyku1urzCFfPV8/tjDmtOa1Xz0f17YwxzDHMJW9H9bXswU+DtfqovrdE5BSXq+fzCO2MpNZbuq/Chqtn50xOK4nHMJ9HIFPeSoyc1t7SE8A5w9KSN95dPYPYfRUqaGcEjVp2pV4xzLXsYBj8RO617L2l3lI7Y4oLSR/VD+P4R2QQ5AVY3VcJfgKHGGYgMkb1ls4jfO4qtbIArICa09oZBzClUng+qocSyYKQJW85rZDcW+I/hrmdUThPceF0qfgbIMWFXwwzmiERoKMagmk9wnk7Y8kbB7G3nfGoHmIoLob5kenVcy0797CX04p4yJpkr557S++3BQpqOqoHLmr63JX0oe1bASmTBTs/d2WzCI6L4CdjFBWgCOglM86tZc9pRThPBZDMU04EStKBD245yFrNAhQZ/JTiguSBi/rA4DzCoNSLG4SP5nAmoKM5nJziIutxO88RGIWWvBGAvAdj1HkEIIIJ6RBiHK7ZqdQLG1McVIvzUTBAEfUxWgzzr1k4FGLZQGr3VT53VepFHiQLLFCKSYVhBPn0os9dhUY217ITDFZIDRON4x+wwCRVspgkUApoP83OOUOm/IiBudAGLvncFei1HgkJsNJ8aB7URH4sG2jcNHdjFFOBvs88cM4wLZgHzhmGxDj+KfVS6sUWDuGCXZzwkCyESF4UDpMUjrR6S9ZqIBZPwZY4HyYE9kemvECm4EOfgj3IxARH9c4ZOgpUSQyuxV9g+9/JiPpzV3bSVaTF1rK3M3LrnKE1cTR6QyBUKd5G34+KQINECED/oSyyY56UvDlnqIyGiOrEiYiN075OtlbDAW1OGh8BmEoUgZWs1XAj1sVxwU/iOBxA3QPdEZawPjHIUaxAUuJkiAEQOjlul2kos+trNLErXY9Oh7rFIpRMQuCDnyGMzBhchISMR6YcxCL6gfSl328FhjAqwnfSG6QN40rx+WO03wnFBab//TABAaqkm6IIKoY8wYq5AnmPipwzHIpm6LSso2TegmkM8/ttAZfjWI/SWCA2ItKA7HiB7KTt8JAZglKpQEzD0TL4ZNYjFn6PkyEEBNAZKYA+z8m6nZGvCihlsv5+mUkPpo7vRKPVsA79cIsMmOkAelTPdxFgchweFJOKh+HpazRp4pI7UaUD4sSSNyCSz0UxszQVAvBd+5BML6JY4IYMGtbvZzaksR7xoDF0SST5dpYPzn9cFW9tyEQ7zAAAAABJRU5ErkJggg==",If="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAGWklEQVR4nEVW19Kq3BLcL/EllZxhkfRSxAAmVNRnECNGVNS3/w/VlqeKCyWsmenp7pl/llhy5IrOfuvstyn8WWLJlsoa80X4X9yxpTLhf22pjDctsYSnBvejs9+4j9dsqezIFcL/WmJJZ7/xwj+D+9m0+F1HvI7MTYvPIrJp8esmdxtb6ya3bnK7jnjoKsee+pi6x566bQv3iX3sqZsW/5i6izqVePRlaKx8dtPi7xP70FX2oXwbW5sWrzFf/wj/u25y+1DedcTL0EgD6Toyt20h8ejb2LpPbMRIA+k1r62bXOLR15F5HuifqIeu8pxVH1M3j53Eo5Huok49pi7hf4sA+1A+9bVlg7kMjTx2lg3m1Nc2Lf4yNHYdMY+dPHY2LX7ZYBKPTjz6PrFvYwvVbNtCGkhZRJ6zahpIx56axw7un/qaKfwVAU59LQ2k+8ROPPrYUxEJuV9HZhaRdZPbtoXryEwD6Ta28tjJIpIG0qJOAatDV9m0+PNAvwyNdZNb+WweO5ehUUBkiSXAfepr27aQRSSLCE45D/RTXwMsp762D+WVz16GxrYtnAf6fWJnETn21HWTSwMJhy4bDErPIvKGyJEr94m9afHPWRVHb1p8GkiJRy8bDK2aZUkvS3pJ1GjVpBTC6jalEJ64ZUmvyEZZ0lHBusllEVnUqX0o70M5i8jKZ22pXFTwafI+lBOPRvDnrLryWVo1K7LBaBZPXJ64JVErSzqr2xXZ4AyHMxxKIYeugnLTQDr1tde8tvLZbVu4ja0igMZ8bdtCHjuA+0OM29hKPBqnsLr9SZnVbUazKIWUJZ3RrIpsoPrnrLqoU+eBfhtboOl5oBcQmcLfbWztOuKywTxnVZDk0FXQ54psUApBDJRCKQQXq9u4uQ/lY09d+ex5oC8bzD6UD10lDaTnrOoqVBEA5EHk17wG1eAvUqZVkzMc5Is6cDGaxeo28EHKp752HZmveS3x6DSQLLFUNDmLyLLBHLoKuHjqa9DBdWTyxEUAWjUBDrJGJ3CdB3ri0du2AAGB6GkgpYH0bjKkiK4mHn0e6HnsHHvqoasgcZ64nwDoCu4wmsVo1nVk3if2ZWh8vs1j5zmrHrrK/2kKe7iOzHWTgyUAosSjD10liwh+7DpiFpH7xF757LGnQrr3iZ0GEnwii8i2LVyGxrGnnvpaEQA0zWPnNa89pu55oMM54D8rn92HMpR1HujPWfU+sZ+zKkQOpwO8z1l11xEhWHDkOjIduVI0+dBV8N66yaFd8AaIPvHoRZ2CniFayPs6MncdcdcRNy0evvSYusDqNrYuQ+MxdYsABvcDJV9HJmSM8vE9Hi0bDNJcNzngA4v+KCaLCrldRyYYlUVk1xFXPvt2U+C1bQsQ+qbFb1o8YIHBPWdVGOq6yT2mLpwuDSS8DOguQ+M5qx57KqQKvhYDBz3YdUQYOrDGY3ycx04aSKjmMXVBx9vYwg+YCigEud0n9qJOnfpaHjuFDiC056yK5sDyjj01iwj8A/isfPbQVR5TF0DDr2DpiUc/pi4sAAo99TUUXehAZ79B0OvIxNCAtwAi0C6LyD6UwWBIFLYMbPEOZhGEhtm5bnLvCnAuZiF4fegqOOvTWCgRXIRNYeBAGa95DTMO8VBBGkhFD2ypjM6gQIwzcPwyNBZ1CkDBk8HdPHYeU/c6MsHI80Bf+SzQR/P2oYw+FRUY3M8+lHFEGkj48jmr4g1kBKmfB8VsyWMHUUEH2OeywbzmNTQWBIObGdzPW2ggAxiJubhucjgO7cGGsg9l4AP+YHMBlcGxRZ0C+pg577UFiR97KvR8GRqoCTMEzrHyWTRw5bMg2GPqrnwWawCIDqYiGNaR91bxmtdguWga1AvEb2Nr5bOPqYviABSMdh/Kz1kVf9NAQm+AFWxjH8rvHmAS3MbWssHAC7GPbNvCriNi1Uk8Gi4LjuWxA0NEKRAQNgwkhPFZVKAxX/eJjXTgMOgbtIZZhBmHwJiv8FHA/dEmsj72VEzG98Axhb/zQH/Na2ARUIbnwAFh4DAiVAPH/VQMQ4VXbtsC2os96j2TP5zBboMZAD/BBMVmCDvBO7jQ5ENXwQXBw1ZhIUUA7NmWWMK2bXA/GvPlyBX8IPzvZ5XH+u4qlKtQOvvtKpQjVxy5ojFfnxVfZ78J/+sqFD75n13/B4PLFYspv8PIAAAAAElFTkSuQmCC",Uf="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAwCAIAAADsGa/MAAAFQ0lEQVR42r2YN29UQRRGX4lcr5BoqN0gIYSIxtgmh4KCyjW1RcVfQARjknHOOZPjH6Bxg5BMQe2GmhrO6KyGYXbXMsh+0vXb2dl773fzzHNxrv1kR+ux8x0tl8+3tbUcaT919OLZVp7sXzp3mh2+njl93J9gg1iwIydf+QlON1ECKcgTkkEN8IN1tu0EmwUrkZr37CmBrl7s0OgCozABbHZ/tBzaVQICrAtnTl250F4QGfCJA7ufKxXo18/NjNL9RutG/CkJbGYLfOULJpQDjLtEG28LPqyRDNh1So2Aty8FBJmlbIEviDPEqhxgiwtXQ6h1um6ot1b0H8CxFQs+cJdnOR5TWVJBPfNB6MsBtnWrAwTs3ajqusBWNVQ4+XajjxuF2qFb8IEVlDi795uadpWAAI56Aq7gD3xDXQIRXeop9DGQYpN2Ak702YkBcdOxyk98ZYGkLeFXtMCDEquGTRgsHXbQJrPnkrXMTsEX9B44eLg0AjUAYykfZQIThpBjj2i31r982z5V9u6D/klEFIIf2slLgluf178+eDr8qG+sb2QGGp1eHhibG59dHZlamphbm1p4MbP0Cppdfn3teqfAiDzuH+8fnYVzaGJhcHyeNc/hyUXEkUVq8fl7CBFRTHM4j3E8AqNlc/PHk4GJZ8PTYKMLeVHBg/h16cWHFLh3aIpNmMHGxLGZFVFZYOX04kt+XXn1KQLjcTgWqUko9RhFaEEYLTwxf3L+OYpAxXB0ZcDYigiG4itPpBCBHylE4Edq+eXHCOwNIAdGBYqg/c2HOm908UwXum7cIvDTwUkiRIIyZhcmaGHtXQQGLsxqIx6B0YIKbK9FZTG/+rZujonQFraCmnoMYvDYC1fq8cNno0SsrvmmWfMjcPeTIaQa2Qrz3MqbNMfVY1HHU2DMJ3R1zQeVBKMoKy7cJVR1bYU5iojiFCscdRGYOOMx2FuEmmcKjJUxx7VSVDU1wTMC+/KQe2wf40Rd80kYKsBOgXt6R+AHu66ttDLuph4zPYLHTC5mSAqMx8atVhElirtZO5FjpRrZqlTaTmFWU1mpx2YL851BNCVPuhnD8ZWnfZkBU4wQggwcpZwk8EOxHkWhpMPI9KxIPSZ0mO8UBN5BiOGiYn5WXPceDYCNrfJb4Ug5axkj0VZRPJbCnSsei3pse6CFJ4ooNGx3eDkFs1BjJVIAw4nTji04QSVICGIrlA6Q6rGYzmpHJvLoQoXzz1mvIoKWVTUeEyTnHb56uhgkRJCFP83xn9OJjyzUeqz5KDJhDj+LJZtcSFkZAItNqA0y/DZh2k4B2ItIBF6sVKCNje87SOpMiyuMTK9IGXBLa8cOUi1wyHE2q2UyxzHatoeZpqSzWU2OTbAdpYjkKZ4BVyeX/wOJwCSYhKnFg9Z2ImFky0tFNrnuPuzXUI8pmJGFU1shZLORiauFLxQRmF66/3jQKnWMQLjODAHYYkFR5jG2OrysLOHj7UWj01CHkel/YiIwqEB6TthRmE9Js7Cw7ctsVoNtE3phwkrnj7Ndi9ORGYBxPO1jTgi0qCIOTgzHfFsZLdlFAF9t5XiJgE1fvXyBnYbaO0/1/TgNtdnyYEaXHniJjMMoBb7T02dleO2CDVnC4wBxairy1+nkf84icNfNW9uhFHj7InFWh+LC4zTH5QBX34/TUJcA7D9+Ct/4SgYOA8S31TKBdfWv19RYok5BFt44qWqq1DHiGZXdQOh7rwOebB5ojhEE6aj0zlV9k8iAb3f3IowKGikejo5AX2qg2pEZO8qXLt9oAKajBLb1Y6ih38frv8AEQnKZAAAAAElFTkSuQmCC",Nf="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAG+0lEQVR4nD1WV3OyWhT1F9lClXLo2M1z/KLRKEgRlCZgzy+/cdadzDgODxzO3nu13bAJP7UUrUdZMjezVV2gDZEZqMLR+7wV/rPa3wq/TpxT/J0Gy0cZErYjM+2xIStct6/0bMKPDVmiW1n4lYVfRbTO96vquI2cj/spqBOnoXBdQ2TGhjzUxL7Sm1qKJXMK1y0Pm+q4zcKv2J3XiZP4i0u2u2Q7rUf1ld7EJH2lpws0YTtTS5layiXb5fvV/RSkwfKae5dsd07d1wVTSyFsxxAZS+YI27FkTqJbfaX3KMNHGd4K/+h9PsowDZaJvyiitSVzKEXl3/pKb6RLQ02UmfYp/k78Rb5fRc4HWj/F378faQxUATPRepQpsTNbndmqSDUTf1EeNqf4uzpu68SJ3fmjDC/ZbmzI6BLz1AV6ZqsTk1TH7dH7rI7bW+Ffc++ae3Xi3E9BQ6JbhO0oXFcXaJlpGyLTV3oDVbifgsj5+Cu/PGyKaF1E64lJJLo1s9X3vmZK7FAT8UPJKAiAnVP393hjbMgjXZqYROXfgIQpsTLTPuz+pcGyOm5xMnI+quP2sPtH2M5AFUa6JFLN976mC7RN+IEq5PvVJdvF7vxZ7c+pe8l2deL88uLVgSmxhO3oAq31qJmtjg15YhJw5lb459QFQwB1X+n1lZ7CdScmsQk/s9Wppbz3tfKwSfxF4i/+Somcj8j5aNiEn5gEw9EFeqAKqKs6bh9leE7dRxkm/uKaezg2tRSb8ITtvPc1m/CGyMxsdaAKwODofSb+AoO9ZLvysGlccy9yPjCvRxnm+9U1947epyEyQ020ZA71gs19pQcM68SpjtufOgLlf+pIZto24W3Ci1RTZtqWzOkC/cvGxiXbZeHXowyvuVdE61/cUTiwkZn2UBNtwstMW+XfJiYponV13N5PQXnY4Oyz2mfh18xW8RpYoPJvM1s1JbaR71flYRM5H0W0xpQTf/Gs9mNDhohU/g3iAveP3medOPl+9VNH+X5VJw5uGunS2JAHqtBXehLdGumSwnVFqtm4Ff5PHaEuEAB9iFQTeKAoCFCkmrE7z/erc+piVuD+OXUtmZOZNigDoaCyxrPaJ/4CB37qCIw87P7hbeBvSuxIl8BOSPpRhnCF8rABf4aaONIlYCZSTXxdoluN+ylAUYm/uBV+7M6heF2gh5oIH5xaClxBF+hntU+D5U8dgemYZxosVf5taimGyBC2Q9gOLrBkrgGHit35Kf4GeQ+7f7fCh7ZFqqlwXSAG+8zCLxhZEa3xPgRsiMx7X/ujhkS3tB6l8m8NNFgeNuDDowyf1T5yPhSuC1uVmfbMVgnbmdmq1qNgaqf4u06cW+En/gJDgzJABygXDw1Apwv0xCQTk+BBolvoqU6cS7bDTIpo/az2sE+Vf1O4rtaj4JIAH4JPg2URraGya+69vAgyRqUq/wY+lIcNCozd+a3w4Ryn+BuWPtIliW7JTPvP4WHRUN+z2sfu/Jp7t8JvyExbpJoY3EAVBqoAAyii9TX34I54yPerw+7fxCQzW5XoFnweXm3JHGTxZ0dpsIRWXok21ERDZP4UqHDdma3+1FEWfsFYkIVFtD6nLqC2ZM6SOUAKhBAY8BsgmgbLVx5AeJi+wnXHhgzC3U/Bs9pfcy9255g+Jgut4oKBKiBzxoac+Is6cZDe1XGLdl9mN1CFoSb+Zc7MVlEaMjZ253CnnzqCrICTzLThZYTtjHSJsJ1r7sEzADLo+0vLhimx730N4jZERqSa+M/CL0wfosUd5WGDYb73NZV/Q9aCFLfCvxX+/RT81NHR+7xku586eoU+hm5KLCoCDCNdumS7IlpD1Vn49WcJIJspsVqPGmoinNwm/DX3Drt/deJgYcE68pv7jVP8XURrRChi65y6abAkbEeiW8gWZBYiDN3E7rw8bNJgeYq/sThJdGuoiSLVBAnBxpmtNgAFxIxFCI6Ezv6SYKRLKv+mCzR8Ao5yPwVH7xP7D3YGwnYQOxjJy4uO3uc195Ds4CUqmloK8JxaCqg5NmRDZLLw65y659SN3Tkug7tgF5HoFkiFgzbhG7E7j9051rFHGR52/3AGCocmBqowNmSb8FqPwmuxO0fh2DCLaA3ngF/pAj21lJEuvbwIHWD6WCOuuZcGS/izwnXx9YEqKFx3aikQR75fATlsAtVxixcUrvve16AVm/AjXXoFDoL+fgrg248yjJwPiW5NLQVrEjT13tcI27mfAqQsFjdc8Kz2psQOVAHphNj5v4NLtsOGgvA77P7B1CBXGI7Wo8aGrAv0r79DFui7iNan+BtqtwlvyZxNeKyK733NEJkXBnAxqBQnYXNaj5qYZKAK8Feb8JgsOHYrfCgxdueADRs0xjIxCcj9e8F/l30PlasOp04AAAAASUVORK5CYII=",Ff="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAGuUlEQVR4nF2WiW7iSheEeamAl3bbhuRl7mSSkIQ9yWQGAzbgtW28ts2+vOX9UY3Q1S9FCBz3dk59VV0TSL0h3zXkO/1B1R9URZcFUldbikDqtEkEUhdIXaKCdk8lKugPqkSFhnyHdyQq0CahTUI0SVQaii5r95Q2iayKGEibpCaQelCY1SXysmmyddKdm+5cfmKyKvr5zE0nXjZ1EmO1XlaXqDgGtEn8fJYf/NV6mR98L5tiiKLLQWFmey8s51G1SHdufvDzg1+jTVKeQ8at8hz6+ay6RFG1CMs50aRk66zWSz+flecwLOfFMYiqhUDqUbXID76bTtx0ElULJzHCcq7d06AwncRIto6TGH4+4yeWbJ1aQ75Ltk5YzlfrZbb38D3be9o9Dct5snXwxM9nQWF62VSiAk6Mn7dDa/fUz2fpzi3PYbb3imOQ7tzrArIqetk0P/hOYuQH389nq/Uy2ToSFVbrJeMWTh0UpptO/rtweQ7jje2mEz+fxRubNokdj/mJ8RPz81m29/iJuemkprYUfmJBYWLMar3kJ2bHYyyQH/x050bVAiOdxBBInZ9YdYnseFwcg9V6WZ7DoDCJJnnZtDgG2d5brZfFMXASI9t7NYkK+cFPtk51ieKNXRwD1E5WxeIYoDf4zA9+WM4lKsQbOyjM8hx62RS98bIpbRKUASfD9otjUMNE6c71smm29/KDb8fjZOs05DuoKN258cbG8l421e4pduqmExSTn1hxDARSD8t5vLHjjY1qh+WccesqU0WXiSYpugwhqy1Fu6dEk2RVhPChcbWlgAx8l6gAsWOgrIr4I5oEbsDKVaZuOoG8VuslVJ/uXP1BteMxtL9aL+ONzbiVbB21pWR7D1KpLlF5DvmJpTtXVkUIHcWAjq8cCKSe7T0UZ7VeonDQNYhDWdOdC7GCg2zvYUk7HkfVIqoWotK4bQW6yvZeVC1qii6jOegzihtVC0WX8ZKbTm4cYKd2PEY/omoBBr1sqj+oxTHAVChDUJir9fIK2m37fj5j3II9qC3Fz2cA0kkMSD7be6LS4CcWlnPoB80H+dUlYtyCF6DOVxURTfLzGRiBorHB/1NXcQygV9okYTnHJlBM6PV2AhAAgMpzeAUNvUWvMGy1XkpUSHfuDc6b+NSWAo9Ltg6qjH+pLSXduUFhYlU7HqPV1xOglIxbXjZFiYLClFURQEbVAjQEhennM0WX7XjsJAbjFuMWdppsHYHUUcPVeomt/DU7RZdFpQFdw9ZvAieapLYUfAIOqFt/UAVSl1Xxpnf9QW3Id0gRvIwwuHKgthS4Y7yx84MPy2XcUnR5tV5CkfzEYHnlOdTuqR2PYUH8xBi3nMS45QTMhnELDYg39nWB8hxiIkg+P/jxxpaogDDBvAiJqFrIqoieM26hW7B0iQpOYtza62VTOE1Nu6fJ1sEA9A0jiSbhNEFhQnaYTlQa6BmMHVQXx0CiAnqDtuH5FTRRaYTlHBzcLBARiFcxL5rGuAUO4o0N7MEH45baUnBibAs69vPZ9QROYnR+DRAJUN6PzjOs4nnwBo987L6ATIHUV+tle9SBrJ8Hb9iH/qDGG9uOxxDVU/8Vz/8m2o2RH51nxi1+YihdunP7fz6CwoQ35AcfGwoK82evvVovw3L+2H0BNzDwwfgT5/jReXYSo4Zwj6pFe9QBxv0/H8je9qiT7lxYYVCY/7w/edlUIPWP6Te60h51oCU3nciq+P7VR5Mfuy+MW/HGfuq/Xu1aogI4QAD89wltEnj9zeVBBiIBlyhFl28MIUjAEO5LNajiR+cZQnz77MGl4bKD8Sdy4kfnGYTrDyo0jqB+6r/CBUB+dYnaow6uCnCUGppWXaLu9zAs5/zEsJLaUhi3omrx2H1BaL8M39100pDvoMWh8YWby2P3xU0nRJOe+q9BYSJB8UK6c68q6v/5yPYemAoKc2h8edkUNYWz/uy1kbHFMVBbSvd7iOx9++zBkXq/RxIVcNVw08nrRxc+Pxh/1nANwU2m93sEt+j/+QAHP3ttyBc28M/7Ey5Yo8kv2PJg/HkD00mMx+5LVC2Cwnz/6pfn8Gp2otKA5gAnhF+eQ0WXEUxQ0WD8GZbzdOc25DtUrPNr4Ocz3FyqS0SbBMLvfg+9bBoUZvd7eL0XiUoDcP3stZGXz4M3RCbMvfs9BOftUac4BrIq9n6P+IkB1PIcvn50+YmJSmNofDFuheW8PergwvnXKobGF8IP/YRx0iYBKUFhvn32kMnvX30Qm2ydoDCfB2+Iisfui0DqjFtP/VcnMQB5tvf+x8G/g4/zjy7/xc4AAAAASUVORK5CYII=",Of="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAwCAYAAAChS3wfAAACv0lEQVR4nO2ZZ04cQRCF+wCWnMgs0cB5bIwDwTbBJjphA76EWeKSw034w8EKfa2t1fwwy/6Y6bK650mtmZ0doXqvXlVXL86VKFGiRIkShWG367mcDPbKXnebcM/VOqag2G5/Iucv+uXm5raxrGMKgquxIWGR9YPeDql2PJXToYpcjg7K1ONHstP5TBCHz9axFgLIX4wM+Oz/63tEqPV1eVEOK53xiUB2m5FDAHoDTsAh4SMsGGfDfd72zcghAk456u/2pRI2woIBORYiNHsH8ojFNWyEBUMFaOU9sk+5UA5hovuPoGVAQ6QnWMdjAkRgQMIByQ1Kri7Afk+7X0kK4OoiMDccD/TcOztED0RAAGaHJJ2gIzIr2hH5IagL2BmiHJEfAgJAHAGiHJFbASIwGDEbJFkKCMBhSn9LsI7HBNoQmQ4Rwjqe4NCDEgJQDtbxmAAR6AE4IMlzgm6JNMMky8BlSoEjc5LHZZc5LHFWSHZbxAFsiUlOhy7jAsoBJ1jHExz6o0myc4HLuIBdgat1PMGhvx9CPslm6DLbIifF6P6X0Aznvz/J9pdXUvs26dfJzxk5Xf8gu8sTUl0cl4uNWTn79dG/s7P0Wo5/TMclDoQP1t55Ypebc548hPXz0fcp+fv5pRcCQRDJOuZcAXlIQhjiEOQZCwGu/yzI1dZ8ww37q2/jEkAzC/nDr++99VUQxCD7PKNUEIN765hzBSSxPSKQaV1qe0RBEO55j2Udc66AIA0Oy3OvGeceIXAC5LnXxmgdc66AsDpgb+VNgzjPtPape77T0rCOOVdQ2xCEKE2PXqB9gW2PutdtEvLRNUEIaZNTggihpBEgm33es445V6jVuUKeXgBpnEB56IDEQijEsI45V5BZhqFsphEC8mQccXAE97pdWsecK8gsNQ95bK9lwHPtA7gDQbRhtvJ37wBitGj2l6QCewAAAABJRU5ErkJggg==",Bf="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABHUlEQVR4nN2SRw7CUAwFcwjuTN3QciZ6Sa9AApzDaCw58BdIrEGyHDl+42cHz/vP32Ixkum0L5bn86HmnwGz2UBFACwTXwVpupe6DjXy/Kgi359oXi7HKiZfr7E8HoUEwUqy7PAG3u+5tG0mt1uiL8ryrM9VFSiwaVKtF8VJns9Sa1G0eQMgU0BAkzWsej0NnDEAp8DoSZKd64CJYbjWoAmBAQDTw6DLJdJnVukANGCNoom+Be4YRn8HsN3JvwAYhEPnBnG81eNBZsfPFeyg2Gc91uRLOCtwFMQcj2Ph6POIiMjAcMCQDsA0o2KRzCQD8J7DMYQ6ThnaAbBGgYBua9gfBzgiANSBOQAaEGGRl6yBkDVotCOzGg65Fxq0LwWaElrqQ0DJAAAAAElFTkSuQmCC",kf="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAwCAYAAABwrHhvAAAEwklEQVR4nO3Xx45dRRAG4LOeNWuS0+TgnO1Jnpyzc7bJwXk8YMNggsGEpffwALwFb9Xoa9268jjIBvVFQvKRWt23+5z6//qrqrtvVb1+Xj//1+f2TxfT59+ezu39LxfTJ+sn0n8CfOOHc+ni7en03hcL6erafB5/eH85ffrNyXTl7lweNwz846+PZ6AP7i2l69+fzeBnro0l8+Y++molnb0+nltDCPAOCPk/e3AqXbg1lX/f/eVK7qmDyK0fL5QnsPrz5XTtuzPZuP7mw/PJHG8RoILfyBl7pygByXbuxkSO+19vNOV2/uZknuN5zF1enc3g+qIEAEW8A0xI1n69mqsg5u48upTB5UpRAmTmmUy/dGcml18AyQXkhAMBpIonopgzDJznABFQjvYAKiAoOSNJixLwKDueK8HmpqZnGjLWEC0O7uE1Bcj8PALyI0LTEAJVbTMKmYVFBSCmOsz53TDwJx/JR3LJyWt9w8D6hydS77GxNLt0Mk0vHE+jU/PpYO+xNDg6leaWT6WBkck0Nb+ShsZn0uTcchqfWUzHxqb/OaGRyblsZM/B3nS4fzjtPzKQhidmk/mJ2aW073B/XmPc+vzK6XTg6GA6MjCSjg6OZpJ7D/VlG95FeGbxRLbh+7HphUzwGWCbjMQRQ+XkY14wxEM9A+HtelVlIGT6hsZzHwQfV1VWg1KIIqf3jtyRK3JHItcJANUs6A/1DWW2PmTIb8xJbk4I9BovKSFMvkHyXlXld4EiRUnEHViAnRlw6gTsZHGIeIE3AH2kIQCAnCEvUNIiCACwMDyoqvy9sTD5Tr5Yd5AhQQXnSJ0ARiZsIsa8EgKehiHxZQi4OSF4XAuF9fA08sEc8mzorXGQs6rGsb0hBAGOHSDy+oj3wDVj83oSP6yqbJwacoEa8S4HELGuF564SQHfcFiRxeSLzvGQkTGGKCT7NcaBGf9RVfVqQOhpO3Bi89pwaTERO9nzjlEE7ldVzoEoVSSiZBETY0qoAGuIPG3HoeUgo8SGHHjZI46AecozAJSIfcCaOXkgea1R7JUBXvYw9mdN3pCY5+ZVQiSdBEQq9o5iBCK5gEg8xldrGw6PAeqDnCSlTDECDAIVApWh5y3Q36oqE3tU23y8JyfkTTECjIlzbE6xDyCBEAISNA6k36sq138xAhKMtKQOzyVabDzkRkKoqGP9X52GL3psrUAknMQDxGMNAWSoQoE4KyRjMQJKT3x5uVZV9R0POMnXaxUSdwHKaMUI8FDsqSC+cRlBDKlIUGO5EpeWYgQAxEUDODCk4thGLC4pwkQZ7xQjEJ4BiV0OCDBSIxYkvWPbFqJiBICTFIBx3ITEndwIIQA0blHFq4DhuJTwHijprcXhE+FBQEUUIwA07oQR97iGxYWVIrFJUUWSFiPg2d3Tntq3vZt2drWmvTs6U1frljpAy+a30p7tHXlef2B3T/n/CLu629L+Xd2pedObqbNlc9q3s6sOsr2jOf/2DoJPrhV7eEcF4D3t2/I41hBDgufGVChOAADZGUeiu21rHaRt6zuZEHDkdnS2lCfAOwRat7ydpdbHGtkRsK5vSA5QgNdBQi7EWoRGLyEpUZwAWTW50NG8aUOcKaBFNaiWV7X7N7Aky79gpWLcAAAAAElFTkSuQmCC",zf="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABS0lEQVR4nO2QxU4DQBCGeyZoKFWK0+IEt8IJl0BxO+ES3HkkzgQNbndeaMg3yW5o2iY8AJts9t+df76ZWYfjf9n1FQrIe5FP0C/5brl2p6j+KPbLnS9d9WuBR65cyRIX8BnMtkaSjb71pslDINMCuMcFUPU5z6VBkg3gMccpbPRbodd6Yhb0e3+GBjkvnUmqGYtE9I0nVZ5ysxKPQBdmBGPk3QAYJSHg+yIs7L/qqLU+UCkLnUFZ66+Qpe4SWe0rl5OZNjmaapGdSJ0cTDTJ3liDnM6GBe/ZXLt6LeBwsln2xxs1mcByT6lCjqdbNRnQ9kit4CMGlNMCMFKRDQAYlXgnkfv5fIdsDlXL1nCNeha7QtGAjcEqDUA3ACrTAZ2xeQdg7haw0lumASrQupkbvTtar53wB7zzVzEjYIZOAidBWjcAOvsNNGOR+wOjoAT/eAdWpgAAAABJRU5ErkJggg==",Hf="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAwCAYAAAChS3wfAAAFaUlEQVR4nO3Y145eNRQF4LmeBwAGQg+93STTe0kFiV7Te++Bl6D3zqMafdas0UEgBpL5f5NDLFm292lea6+9bZ+Rkbtl+GV0dLSom9l6WcbGtpXNaus5DrT87wmYmVspO8Zny8TUQhmfnK9gV9b2l8XlPWVpZW+ZX9zVbwImpxcrSAQAzTY9u1ymZpaqbWFpd78JmJ1frQSoAcsG/M6JubK8uq/fBPB0PA4wG9Bde+s5DrTMLaxtSF3Lpg+4XCA/tJ7jQEuSn2QYb8sL1CAUep8DJD5SRwTAI+sKMBYKvV8FLHVJegkBCqAKRCCn9RwHWhAAsFyQeOd1YyT0ngAgxT7AiXfSV+UBuaH1HAdakum7uz59hLimtp7jQIskyMvJ+iPr22NhgYjeh0C8D6h2ZJ2UJMBsjnpbAJQHgM5ZgAKSAHsfAryeE2E2QkBnb9D7swCgKu9H7giRD4BPXuhtSRLsrvlskqDa+2Uw4Hk68Z7NUXaIrec4kHJ+5YlydOqBcm3f8+Xs0uPF+ND4fdV2YvahcnXvc7VeWH2ynFve3j8SLu9+phyfebBoD0+M1f6p+UfKybmHKwEIAf7KnmcrMa3nu6XlzOJj1evHpreVAzvuKZd2PV2JuLj2VAXrGjIQY3xw571VKa3nvWXlyOT91dMI0AJJ5lSABHYEaLu19by3pAALKJlrI3EeRszphUer51XkUAbF6COn9fxvu/AsSYvv6/tfqJ4neQkvYBP/SHEPW+5vPf/bKsCrSYBUwPtRAxL0efrGyy/WPtAI65LSGsctF/IGAgn6PA+QsVYFVk0esCxKlCHkjiWAd2X7gEQEEngbUACBzrpPJbzvfvGvda/2jkyIPBmQ+kjoJrdshG6+8lLJJklSBBgp7keMpOlaazz/qnSXOBUIigBUGAAKYHf9d80zAe05hAGPNM+0xvWPCqA8G3kDQtqAaoFzjTpCTvYHSMnGSBuiEJFk2hrfpkWcA8dzPAoEgOz6QEtyWSGM2eULhGVvIAFmCQ2J3tsa398Wkydh4LO0iXGAyTzephKxDiTv6gsBgD3vGe/KxklFhPF/elXgRcBJOBsass3ens0YMQhBhnHARyEITJioCHQPIqijNc6/LAESrxpn4wMEEgDILk8/MqeIZPvsG1yTF3Jwyr3IRV5rvH8qWdZMMstd4jZJLcS4h8wT88DnMOR6FJSDUv4b6CPCc63x/qFkw4MEAMSxyg5oiGHLBoeNnPOPAOjkD88hTsuGOCQlDLJnaAr6u8sflB+uHixfnH2rtl9feLd8dvqN8ttHx8vHJ14tX557e+PYGwVQRU58SEBAVJIlD0gkAe26vnf8cvNo+fXDY+XHa4fq9366frh8f+VA/eanp14vP984MlxCPjn5Wvn8zJvlm4vvlW8vvb9BBruKIGCyo0vmBxiwhAiP8jQlaHk3q0DCxTu8D3hEA4wANnNgc22oBADt4ybCCwhg46Wvzr9TVZA1HDhxG5nnkJR/hAB3l0L3JQlKeGyI9t6ogNIQHSJ8f6gEmATApGdykb4+QtgTv8DyJhUAhwAhkd1eDkNZ+xEDOAItgcbe55vxupDwPS2bOlQCeEIFXLyLR5PUTw4gcTWbn2T5JDIgEUT6PJ6NUshBlPs8S/YUwOu+iXzg2dShE0ByJkKC3TzQDYMcirL1zb++HHoAJ3NJEEhgExZCJ0kTEbyuer+YD/kJC6obGniT5xGAAx4RbDxEDeRK7kACneye3+C8bYwMSqAM9+lnZcix2Hu8MyTwvPerwFMcUoZGgAn5qEklDk0GGfpWAx4BJkuZmmNu+mKe1PMbjApCBpKjDCQiW4ghGWhEJCFSwa0ug78DUXMQtz/DbM4AAAAASUVORK5CYII=",Gf="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAwCAYAAABwrHhvAAAEeElEQVR4nO3WV3McRRQF4H7WswlOyrJWWXICipx+AjlnnLMtZzlJcpATGBNtUvEE/4N/1fB1cbfW3gWXzQxVVLmruqand7bPuefce2dSuj/uj//r+PbY5vzd8S35wvbX8+f73y/r/wT4i9kPM/Dz217LP8/vLsA/nt6Zr+59N1/c+Wa+duCD+ojcPLEt35jbms9tfTVbA/3m6Kb89ZFPyx4l7C1ufrkeEiI3vz+5vRAAdGnXW7esEUSkcnDSkvvsllcKEO9Z8NXhT/Jn+97LP53ZVaJnjb3KVQBKagf/vqyrTPmABFVi7/Lut/PCppcKiUoJABelhAswe+YPp3Y0967seadYQqlKCYiKv+SmgjywXtrxRklEkfOeNaxAtlICAByOCHDAASQ3XNlEAYrUUgk8D3kbXV1t8/rBj4pFlUcfQ8RsEGEnArUlYOtAAACwaEQ6oHsWUKA28NbBa+VHjS8PfVy8rxVwbk1fvrxxJl/aMJ2tz8+M56V1k/lI/+p8sjGQT40M5gOrH857VzyQ96188N7JONBcmGjk/aseKmvAcT3Uu7KAX1w/lWe7l+cTw/0FELj9s1OjhaA9BM09y5eVe+T/FpifMjway+nRoXKgPyMyPz5cDjvYs6LsXUmpRG7Ps35HwrTnivCZsTXlyi59Qw51zBMeSqQggPHRge4Soegd5N5hZF6cHClEXO2dmx4r98D9HuD+SxFvS+BKuWOViN6PCGgsES2Aw32rymFLKZVpzQoKRMTHBnuK/Ky7mVJRxO/AXVUIFfQKDa2NAHmQkNHsEA2fReZwkQBAyOEX1k4080ICIsEye563F747w7nK1dm6aBsB3Q07RDxEbpFSwUFUMH9JqYCyBiAAV1HeSKmsEUT++FBvUYRK1I1+0bFk9XcvE/50+qBwGFDErBETNVWoAZT0gH9Lqe3/0TfkAjXaCNiMz6xOEpERyHxKRVKRAzMRIDvbrNl0+//jgyYqoY3AnQYg5UhOViDhPqrEnmcWUir94a4B7jREGOXHb4Ay3FWOyBfTWo5UTsChiy3lJXIE5EF0Q/LLEc9UToC8V/9MLqAkB/brXz2BFZGcsyn9c8u910F+NogUAQmnElSB/espNfOBKpUTEGV4H40GKROJ6BPROWshQHZWiJ7PwEQLUANSGZ6pxQKHhgKkt1ZulOD/XErliqg8qZwAMD0gGo8p6uiO0bJVSy1VQG6grd6LVBUAjG8GBKwrJxCfYqIFzm+vZAlIhXhFU6qWHIh3OwCRKrdoRuo/vnwkKJWudXgh/WsCIvN6ZYVkBCQPTBYhQn6qVApuSDL1LwmRETErqGCGFX6jQuUEjN7e9Xlk5Mk8PPx47u5e2wQZGHgkNxpP5JmZF2/Zr3z09W3IU1PPF5CennVNIPcTE8+W6ZnaCAwNPZanp18oKgwOPtoEQooq/f0bMzVqIzA29nSenHyuRNlKwD5y9hCplYA5OvpUlg+xL2r+s2V8/Jn6CJCYzyxozYHIC/bUagECIr+9ChCgjOg9czdn/gHGWGes3crpiQAAAABJRU5ErkJggg==",Vf="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAwCAYAAABwrHhvAAAB3ElEQVR4nO2SWU9TURSFNySEMcDvUyNRkZaxhdIWkJbRidlZ5rbMM+gPXObbaQ1JDb754l7Jybn3DGt9e99rFgqFQqFQKBQKhUKhUCgUCoX+B52+HtLRfL9OFgf1z8OPFwZ08S6lnxt5Hcwm9GM993eI7KeKCtvnPvJfDjW0tKnJb8ea3jrz9/nSjcY29jW3f63R9T2fU6s7PkZWtpVe29XM7qXO3gzramnUg+nA+dsRlQq9/vwgAKZAvNo8dcNaAMEL5Vs3BwYo9gDkPMGze1e+z3mqv14e82BAeL98n9bNSuZhgOHlLRV3LtwECMwXK3c+Ezb1/UScAZSw3OcDP88eAIAwDueSul0dV2WmT3drWa+ecGDqQl+Y6ZGZ0o2NGv9YdiNMaTUBmQ8lr7b2WQCgI6zxTKeArYEzgCaYT0AwPyPdKHZ31wP0mGmirU2Fri43BIAg2kxlVIT5xNej36FAAccZwIAAik5xhj18ysWX3g1GrqVFT83+3AHCpzs7Ndnerl4zn6EdNPNLz6sz68CyR9cem4kC8GCtdifV0ODrnOE9aaapjg6/XwfABheyzc1u/sxMmaYmJcz8GfN+Mw1UjZ5UjfOtrb6erO7XCqGAxD2wnqoPo+9eB34BHQO4bmiusnQAAAAASUVORK5CYII=",Wf="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAwCAYAAABwrHhvAAAEL0lEQVR4nO3YeWuVRxQGcL9GLQS0scQqbVFB0NhSBT+Ef2tbt7gkUVvrEvfduO+7MXHt9gFHfgNPuFyQMva+4B8ODDNn5r3nec4y5533LljwuX1uDW3t8sVlxVdfFOOqJV+W9SuXlpXDC2snrx4ZKj98t6T8tGKkdEIAALANq76pIyJrli0qP37/dSVAtk7uhADr1n07XC0NGR6JN+Ih650QmDm2tfw7vb+8Oj1W3p3fW54e+bn8c3lflfXHhzbX/vrMrm4I/HlhvLw4vq08O/pLmTu5o7w8tbPOkTEi55m/Lk4MngCwAABjJRIstm5uDbg5zwyUABdTisDQ0EjtIWIvayH25PCWwRJgKff3Enhzdnd5PvVrHbPGA0LCYwMn8PelyWq15AsZYAjYk6Qst2Z/oARiLYAAI8VSoUHMXvKCPFACGgLJcvOxjaPznVeAI2YcOLj29tyeajECrGQxzxjtOQ26UHRCQJs9sb1aK+YBNvIIYgOP/YdaCpAjiAzLOwMbv/K47Lp4v+y5/LAcuveq/H57thy8M1d2X3pQ9l1/VuW904/q/tSjd1WeuPqk7L/x/ONJUagDBnT4/uvyx92XFRihkBq7cK8+B/DAzZm6D/i3Wy/qmn2yeRMBlgKZvPa0EjBuGj9Wjj58O28tGSlEgJAR9VuyPR7Sm70BgDVGLgWMBGUUI8diawiw2JylAbaPjLm9JgJhzlrKddZRag4UMWDWAeQZJPIsI4SBriYCRx68qVYCMQICwCJg8YbngJDtASbrCPidzoPNIfBDABnFOEmZnJD1SU6ykYxM9oD7TROBHCfWszwxpdA6QsKTMLHcHLA9I1B7yZNmAsBZ5MfmlCEQy6zbTwIihoRnZX2Op2cQaiJACQty5mON0KTg5IQgkpqQHOEtPV5qJoB5EpEFlOScA6A4crKenLqRE4Ikb9DVRCAxTD2IN5JkCEiuJFlqgt/5TZLVc/YQaiIQQJZzNyuimNLICJgn5n6XGiE3hEXnoSYCWKesImCMVYB7C1TWzBPzVMe8uOhoIkBh79GiTIyBJdnIsRThvCvIYm6eN2VzCLgWWM5+3gGAKUYwyZh8Sc+JEEIJCpyeJgJAUgXzUgkw2TwVTvx5K2/A5ILnPE9P89vQXc/dzhWLNamMeoqOtd5ilKSMt/wuV7Xmi6q7nxuwS2gsEmMuJaf2mwNKDiRMqX4McX2jr4kA6xEwxoWp67EWiDWeEI4c2RxDa3QAbybQ23I7yl2PnEJkzCs5CcgbeVl9NGhvSzIl3ryRNcknBLk9WU/pbb4F/VfzCeY7IF/AvXvWrUm4zv+gQKQ/prLdd0K+DzshICF9iLCw//PLWpLNh0onBLgXsGPVTyCfaLzT2bchxSwFxuW9e6zmemNnHhBjXS70x1nBScX7X2f+Q210dLT095b9T5bAe0ueqEl4aaxOAAAAAElFTkSuQmCC",Xf="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAwCAYAAABwrHhvAAAB7klEQVR4nO2RaUtbYRCFRxQ3REV/jFv2fV+uN4kmGjWJ+1Krkqi4lGqraPubj5zhBgqB+q1fOgde7rvcmfPMjIjJZDKZTCaTyWQymUwmk8lk+h/05amB48caDu8r+Ofm1786arx36+DqdRtHD9XPIeKZOFL5FFZCKwjGgrr8ET+SuSQiyQhKlRJy5RzyTh7hRBhFt6j3S4EllKtlMH7Bt6DGN793QQiac3/+vIHuW+vvEIv+RTUMRAOaMFPM6EpkE+CbL+xT82gqqqa8d9ddjeEbQXm++NlU47Pvde1A770NjuPTLjBBLB3T5E7N0WpYabaURSge0g4QgDBchGMH2CkCsCPLwWW0ugW0e0VcvmxpN77+2MTBnasgA6bduTmcTkzAFdGkHAFN+mPgmRXzjUCF1QLShbQughGAX/5D6H4MjU++raFzXVJzjmNLZBBgUwQdEfDL5KyAZmwlE3JPIHaAY6ERO8UzIQjK6hnLGH7ZCS52gbPnKHaHhnA+NTUIUBfBwcgIWiKoiGBHBKsiGnA8Nobe/DwaIlgXwdXsLPaHh/VcFUFZBGeTk2iLoCkC5tr2CrqcmUHNy8k7xytyAIAJTsbH9ceOZ7whgqPRUd3zniBMQMiGtxhHGN5fTE8rDMEJ3PJgmh50/63+B8AHvvpY9TTTKIYAAAAASUVORK5CYII=",qf=""+new URL("ambient-BmVcpfr-.ogg",import.meta.url).href,Yf=""+new URL("crowbar-DvI7xadx.ogg",import.meta.url).href,Kf=""+new URL("door-Cig6Zqv_.ogg",import.meta.url).href,Zf=""+new URL("pickup-health-CV9zoZoe.ogg",import.meta.url).href,Jf=""+new URL("pickup-shells-CsqBNCSO.ogg",import.meta.url).href,Qf=""+new URL("player-death-B62x2WGw.ogg",import.meta.url).href,$f=""+new URL("secret-7yNfYxBN.ogg",import.meta.url).href,jf=""+new URL("shambler-attack-1-CxuWj2US.ogg",import.meta.url).href,ep=""+new URL("shambler-attack-2-BHlKCIZl.ogg",import.meta.url).href,tp=""+new URL("shambler-death-1-DeuuWYel.ogg",import.meta.url).href,np=""+new URL("shambler-death-2-BEH2d2r5.ogg",import.meta.url).href,ip=""+new URL("shambler-groan-1-L9RtauxC.ogg",import.meta.url).href,sp=""+new URL("shambler-groan-2-R1Gh36hJ.ogg",import.meta.url).href,rp=""+new URL("shambler-hurt-1-WPk6lPlm.ogg",import.meta.url).href,ap=""+new URL("shambler-hurt-2-DMdB_SVT.ogg",import.meta.url).href,op=""+new URL("shambler-wake-1-B5QcvAio.ogg",import.meta.url).href,lp=""+new URL("shambler-wake-2-r75B2Vie.ogg",import.meta.url).href,cp=""+new URL("shotgun-DXkvz00X.ogg",import.meta.url).href,up=""+new URL("sprinter-attack-1-DqXvdDBA.ogg",import.meta.url).href,hp=""+new URL("sprinter-attack-2-D-eaFh4N.ogg",import.meta.url).href,dp=""+new URL("sprinter-death-1-w4YHsjmg.ogg",import.meta.url).href,fp=""+new URL("sprinter-death-2-BMPxo9Zc.ogg",import.meta.url).href,pp=""+new URL("sprinter-groan-1-hemcVyX_.ogg",import.meta.url).href,mp=""+new URL("sprinter-groan-2-C4r7RLSo.ogg",import.meta.url).href,gp=""+new URL("sprinter-hurt-1-CGbjmJVB.ogg",import.meta.url).href,_p=""+new URL("sprinter-hurt-2-BOm18Tnu.ogg",import.meta.url).href,vp=""+new URL("sprinter-wake-1-EqlaSIlq.ogg",import.meta.url).href,xp=""+new URL("sprinter-wake-2-QgTMzOK3.ogg",import.meta.url).href,Sp=""+new URL("survivor-hurt-1-C0cAM1mJ.ogg",import.meta.url).href,Mp=""+new URL("survivor-hurt-2-Chg-bsFx.ogg",import.meta.url).href,Ep=""+new URL("survivor-safe-CYZjLa1O.ogg",import.meta.url).href,Ap=""+new URL("turning-sting-1-DbDw_WYv.ogg",import.meta.url).href,yp=""+new URL("turning-sting-2-HXSsz2-i.ogg",import.meta.url).href,eo=i=>new Map(Object.entries(i).map(([e,t])=>[e.slice(e.lastIndexOf("/")+1),t])),bp=eo(Object.assign({"../../content/assets/textures/ceiling.png":Df,"../../content/assets/textures/door.png":If,"../../content/assets/textures/exit-door.png":Uf,"../../content/assets/textures/floor.png":Nf,"../../content/assets/textures/wall.png":Ff})),Tp=eo(Object.assign({"../../content/assets/sprites/crowbar.png":Of,"../../content/assets/sprites/health.png":Bf,"../../content/assets/sprites/shambler.png":kf,"../../content/assets/sprites/shells.png":zf,"../../content/assets/sprites/shotgun.png":Hf,"../../content/assets/sprites/sprinter.png":Gf,"../../content/assets/sprites/survivor-dead.png":Vf,"../../content/assets/sprites/survivor.png":Wf,"../../content/assets/sprites/zombie-dead.png":Xf})),wp=eo(Object.assign({"../../content/assets/sounds/ambient.ogg":qf,"../../content/assets/sounds/crowbar.ogg":Yf,"../../content/assets/sounds/door.ogg":Kf,"../../content/assets/sounds/pickup-health.ogg":Zf,"../../content/assets/sounds/pickup-shells.ogg":Jf,"../../content/assets/sounds/player-death.ogg":Qf,"../../content/assets/sounds/secret.ogg":$f,"../../content/assets/sounds/shambler-attack-1.ogg":jf,"../../content/assets/sounds/shambler-attack-2.ogg":ep,"../../content/assets/sounds/shambler-death-1.ogg":tp,"../../content/assets/sounds/shambler-death-2.ogg":np,"../../content/assets/sounds/shambler-groan-1.ogg":ip,"../../content/assets/sounds/shambler-groan-2.ogg":sp,"../../content/assets/sounds/shambler-hurt-1.ogg":rp,"../../content/assets/sounds/shambler-hurt-2.ogg":ap,"../../content/assets/sounds/shambler-wake-1.ogg":op,"../../content/assets/sounds/shambler-wake-2.ogg":lp,"../../content/assets/sounds/shotgun.ogg":cp,"../../content/assets/sounds/sprinter-attack-1.ogg":up,"../../content/assets/sounds/sprinter-attack-2.ogg":hp,"../../content/assets/sounds/sprinter-death-1.ogg":dp,"../../content/assets/sounds/sprinter-death-2.ogg":fp,"../../content/assets/sounds/sprinter-groan-1.ogg":pp,"../../content/assets/sounds/sprinter-groan-2.ogg":mp,"../../content/assets/sounds/sprinter-hurt-1.ogg":gp,"../../content/assets/sounds/sprinter-hurt-2.ogg":_p,"../../content/assets/sounds/sprinter-wake-1.ogg":vp,"../../content/assets/sounds/sprinter-wake-2.ogg":xp,"../../content/assets/sounds/survivor-hurt-1.ogg":Sp,"../../content/assets/sounds/survivor-hurt-2.ogg":Mp,"../../content/assets/sounds/survivor-safe.ogg":Ep,"../../content/assets/sounds/turning-sting-1.ogg":Ap,"../../content/assets/sounds/turning-sting-2.ogg":yp}));function to(i,e,t){return i.get(t)??`./${e}/${t}`}const Rp=["wall","floor","ceiling","door","exit-door"];function Cp(i){return to(bp,"textures",`${i}.png`)}const Pp=["shambler","sprinter","zombie-dead","survivor","survivor-dead","crowbar","shotgun","health","shells"];function Ac(i){return to(Tp,"sprites",`${i}.png`)}function Wo(i){return to(wp,"sounds",`${i}.ogg`)}function Lp(i,e,t,n,s){const r=()=>n.min+s()*(n.max-n.min),a=new Map,o=[];for(const l of e){const c=i.get(l);c===void 0?a.set(l,r()):c-t<=0?(o.push(l),a.set(l,r())):a.set(l,c-t)}return{timers:a,due:o}}function Dp(i,e,t){const n=e.x-i.x,s=e.y-i.y,r=Math.hypot(n,s);if(r===0)return{gain:1,pan:0};const a=Math.max(0,1-r/t),o=Math.sin(Math.atan2(s,n)-i.facing);return{gain:a*a,pan:o}}const yc="ambient",Ip={shambler:{wake:["shambler-wake-1","shambler-wake-2"],attack:["shambler-attack-1","shambler-attack-2"],death:["shambler-death-1","shambler-death-2"],hurt:["shambler-hurt-1","shambler-hurt-2"],groan:["shambler-groan-1","shambler-groan-2"]},sprinter:{wake:["sprinter-wake-1","sprinter-wake-2"],attack:["sprinter-attack-1","sprinter-attack-2"],death:["sprinter-death-1","sprinter-death-2"],hurt:["sprinter-hurt-1","sprinter-hurt-2"],groan:["sprinter-groan-1","sprinter-groan-2"]}},Up={"survivor-hurt":["survivor-hurt-1","survivor-hurt-2"],"turning-sting":["turning-sting-1","turning-sting-2"],shotgun:["shotgun"],crowbar:["crowbar"],"player-death":["player-death"],"pickup-health":["pickup-health"],"pickup-shells":["pickup-shells"],door:["door"],secret:["secret"],"survivor-safe":["survivor-safe"]},bc={...Up,...Object.fromEntries(Object.entries(Ip).flatMap(([i,e])=>Object.entries(e).map(([t,n])=>[`${i}-${t}`,n])))},ki=(i,e)=>(t,n)=>{const s=n(e(t));return s?`${s}-${i}`:null},Np={gunshotFired:"shotgun",crowbarSwung:"crowbar",zombieWoke:ki("wake",i=>i.id),playerHurt:ki("attack",i=>i.id),survivorHurt:ki("attack",i=>i.by),survivorKilled:null,survivorTurning:null,survivorRose:null,turnStopped:null,zombieHit:ki("hurt",i=>i.id),zombieKilled:ki("death",i=>i.id),playerFell:null,furnitureHit:null,furnitureSmashed:null,playerDied:"player-death",pickupTaken:i=>i.kind==="health"?"pickup-health":"pickup-shells",doorOpened:"door",secretFound:"secret",survivorSafe:"survivor-safe",survivorFleeing:null,levelCompleted:null},Fp=[...new Set([yc,...Object.values(bc).flat()])];function Op(i,e){const t=Np[i.type];return typeof t=="function"?t(i,e):t}function nr(i,e){const t=bc[i];return t[Math.min(t.length-1,Math.floor(e()*t.length))]}function Bp(i,e,t){const n=new Set,s=[];for(const r of i){const a=Op(r,e);!a||n.has(a)||(n.add(a),s.push(nr(a,t)))}return s}function kp(i,e){return i.flatMap(t=>t.type==="survivorHurt"?[{name:nr("survivor-hurt",e),survivor:t.id}]:[])}function zp(i,e){return i!=="playing"&&i!=="paused"?[]:e.filter(t=>t.state==="turning").map(t=>t.id)}function Hp(i){switch(i){case"playing":case"paused":return 1;case"title":return 0;case"dead":case"stats":return .25}}const Gp=.8,Vp=.5,Wp=.5,Xo=.05,qo=["pointerdown","mousedown","pointerup","mouseup","click","touchend","keydown"],Yo={moveTo(){},stop(){}};function Xp(i){const e=new AudioContext,t=e.createGain();t.gain.value=Gp,t.connect(e.destination);const n=e.createGain();n.gain.value=0,n.connect(e.destination);let s=!1;const r=new Map;for(const w of Fp)qp(e,w).then(b=>{!b||s||(r.set(w,b),w===yc&&Yp(e,b,n))});let a=!1,o="title",l=-1,c={x:0,y:0,facing:0};const h=new Set;let d=new Map;const u=new Map,f=new Map,g={min:i.groanIntervalMin,max:i.groanIntervalMax},S=()=>{if(a=!0,o!=="paused"&&e.state!=="running"){e.resume();const w=e.createBufferSource();w.buffer=e.createBuffer(1,1,e.sampleRate),w.connect(e.destination),w.start()}m()};for(const w of qo)window.addEventListener(w,S,{capture:!0});function m(){a&&(o==="paused"?e.state==="running"&&e.suspend():e.state!=="running"&&e.state!=="closed"&&e.resume())}function p(w){return Dp(c,w,i.hearingDistance)}function M(w,b,_){const E=r.get(w);if(!E||e.state!=="running")return Yo;const P=e.createBufferSource();P.buffer=E,P.loop=_;const R=e.createGain(),I=e.createStereoPanner(),O={source:P,gain:R,panner:I,place:{...b}},W=p(O.place);return R.gain.value=W.gain,I.pan.value=W.pan,P.connect(R).connect(I).connect(t),P.addEventListener("ended",()=>{h.delete(O),I.disconnect()}),h.add(O),P.start(),{moveTo(L){O.place={...L}},stop(){h.has(O)&&P.stop()}}}function T(w,b){const _=w.filter(P=>P.state!=="dead"),E=Lp(d,_.map(P=>P.id),b,g,Math.random);d=E.timers;for(const P of E.due){const R=_.find(I=>I.id===P);u.set(P,M(nr(`${R.kind}-groan`,Math.random),R,!1))}for(const[P,R]of u){const I=_.find(O=>O.id===P);I?R.moveTo(I):u.delete(P)}}function A(w){const b=zp(w.screen,w.survivors);for(const[_,E]of f)b.includes(_)||(E.stop(),f.delete(_));for(const _ of b){if(f.has(_))continue;const E=w.survivors.find(R=>R.id===_),P=M(nr("turning-sting",Math.random),E,!0);P!==Yo&&f.set(_,P)}}return{dispose(){s=!0;for(const w of qo)window.removeEventListener(w,S,{capture:!0});e.close()},react(w,b){if(s||e.state!=="running")return;const _=E=>{var P;return(P=b.zombies.find(R=>R.id===E))==null?void 0:P.kind};for(const E of Bp(w,_,Math.random)){const P=r.get(E);if(!P)continue;const R=e.createBufferSource();R.buffer=P,R.connect(t),R.start()}for(const E of kp(w,Math.random)){const P=b.survivors.find(R=>R.id===E.survivor);P&&M(E.name,P,!1)}},render(w,b){if(s)return;o=w.screen,c=w.player;const _=Hp(o)*Vp;if(_!==l){l=_;const P=e.currentTime;n.gain.cancelScheduledValues(P),n.gain.setValueAtTime(n.gain.value,P),n.gain.linearRampToValueAtTime(_,P+Wp)}m(),o==="playing"&&T(w.zombies,b),A(w);const E=e.currentTime;for(const P of h){const R=p(P.place);P.gain.gain.setTargetAtTime(R.gain,E,Xo),P.panner.pan.setTargetAtTime(R.pan,E,Xo)}}}}async function qp(i,e){try{const t=await fetch(Wo(e));if(!t.ok)throw new Error(`HTTP ${t.status}`);return await i.decodeAudioData(await t.arrayBuffer())}catch(t){return console.warn(`Sound '${e}' (${Wo(e)}) could not be loaded:`,t),null}}function Yp(i,e,t){const n=i.createBufferSource();n.buffer=e,n.loop=!0,n.connect(t),n.start()}function Kp(i){return i==="playing"||i==="paused"}const Zp=350,Jp=250,Qp={crowbar:"CROWBAR",shotgun:"SHOTGUN"};function $p(i){i.innerHTML=`
    <div class="flash"></div>
    <div class="crosshair"></div>
    <div class="message"></div>
    <img class="weapon" alt="" />
    <div class="bar">
      <div><span class="label">HEALTH</span> <span class="health"></span></div>
      <div><span class="label">AMMO</span> <span class="ammo"></span></div>
      <div><span class="label">WEAPON</span> <span class="name"></span></div>
    </div>`;const e=i.querySelector(".weapon"),t=i.querySelector(".health"),n=i.querySelector(".ammo"),s=i.querySelector(".name"),r=i.querySelector(".flash"),a=i.querySelector(".message");let o="";return{render(l){if(i.hidden=!Kp(l.screen),i.hidden)return;const c=l.player,h=`${Math.ceil(c.health)}|${c.shells}|${c.weapon}|${l.message??""}`;h!==o&&(o=h,t.textContent=String(Math.max(0,Math.ceil(c.health))),n.textContent=String(c.shells),s.textContent=Qp[c.weapon],e.src=Ac(c.weapon),a.textContent=l.message??"")},react(l){l.some(c=>c.type==="crowbarSwung")&&e.animate([{translate:"0 0",rotate:"0deg"},{translate:"-25% 20%",rotate:"-35deg"},{translate:"0 0",rotate:"0deg"}],{duration:Jp,easing:"ease-out"}),l.some(c=>c.type==="playerHurt"||c.type==="playerFell")&&r.animate([{opacity:.55},{opacity:0}],{duration:Zp,easing:"ease-out"})}}}class jp{constructor(e,t){Ue(this,"held",new Set);Ue(this,"mouseDx",0);Ue(this,"attack",!1);Ue(this,"weapon",null);Ue(this,"use",!1);Ue(this,"pause",!1);Ue(this,"confirm",!1);Ue(this,"lockWanted",!0);Ue(this,"screen","title");Ue(this,"mouseSensitivity");Ue(this,"gamepad");Ue(this,"listening",new AbortController);this.canvas=e,this.mouseSensitivity=t.mouseSensitivity,this.gamepad=new Mc(t.gamepadDeadzone,t.gamepadTurnSpeed);const{signal:n}=this.listening;e.addEventListener("click",()=>{this.locked||(this.confirm=!0,this.lockWanted&&Promise.resolve(e.requestPointerLock()).catch(()=>{}))},{signal:n}),document.addEventListener("pointerlockchange",()=>{this.locked||(this.held.clear(),this.screen==="playing"&&(this.pause=!0))},{signal:n}),document.addEventListener("pointerlockerror",()=>{this.pause=!0},{signal:n}),document.addEventListener("mousemove",s=>{this.locked&&(this.mouseDx+=s.movementX)},{signal:n}),document.addEventListener("mousedown",s=>{this.locked&&s.button===0&&(this.attack=!0)},{signal:n}),window.addEventListener("keydown",s=>{s.repeat||(this.held.add(s.code),s.code==="Digit1"&&(this.weapon=1),s.code==="Digit2"&&(this.weapon=2),s.code==="KeyE"&&(this.use=!0))},{signal:n}),window.addEventListener("keyup",s=>this.held.delete(s.code),{signal:n}),window.addEventListener("blur",()=>this.held.clear(),{signal:n})}dispose(){this.listening.abort()}get locked(){return document.pointerLockElement===this.canvas}nextTick(){const e=s=>this.held.has(s)?1:0,t=this.gamepad.read(),n={forward:e("KeyW")-e("KeyS")+((t==null?void 0:t.forward)??0),strafe:e("KeyD")-e("KeyA")+((t==null?void 0:t.strafe)??0),turn:this.mouseDx*this.mouseSensitivity+((t==null?void 0:t.turn)??0),attack:this.attack||((t==null?void 0:t.attack)??!1),weapon:this.weapon??(t==null?void 0:t.weapon)??null,use:this.use||((t==null?void 0:t.use)??!1),crouch:e("ShiftLeft")+e("ShiftRight")>0||((t==null?void 0:t.crouch)??!1),pause:this.pause||((t==null?void 0:t.pause)??!1),confirm:this.confirm||((t==null?void 0:t.confirm)??!1)};return this.mouseDx=0,this.attack=!1,this.weapon=null,this.use=!1,this.pause=!1,this.confirm=!1,n}}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const no="187",em=0,Ko=1,tm=2,qs=1,nm=2,ji=3,Qn=0,Ft=1,Sn=2,bi=0,ts=1,Zo=2,Jo=3,Qo=4,im=5,Ei=100,sm=101,rm=102,am=103,om=104,lm=200,cm=201,um=202,hm=203,Tc=204,wc=205,dm=206,fm=207,pm=208,mm=209,gm=210,_m=211,vm=212,xm=213,Sm=214,oa=0,la=1,ca=2,is=3,ua=4,ha=5,da=6,fa=7,io=0,Mm=1,Em=2,En=0,Rc=1,Cc=2,Pc=3,Lc=4,Dc=5,Ic=6,Uc=7,Nc=300,wi=301,ss=302,Tr=303,wr=304,rs=1e3,Mn=1001,pa=1002,ot=1003,Am=1004,ps=1005,Nt=1006,Rr=1007,Fn=1008,zt=1009,Fc=1010,Oc=1011,as=1012,so=1013,un=1014,en=1015,hn=1016,ro=1017,ao=1018,Ri=1020,Bc=35902,kc=35899,zc=1021,Hc=1022,ln=1023,Bn=1026,On=1027,oo=1028,lo=1029,$n=1030,co=1031,uo=1033,Ys=33776,Ks=33777,Zs=33778,Js=33779,ma=35840,ga=35841,_a=35842,va=35843,xa=36196,Sa=37492,Ma=37496,Ea=37488,Aa=37489,ir=37490,ya=37491,ba=37808,Ta=37809,wa=37810,Ra=37811,Ca=37812,Pa=37813,La=37814,Da=37815,Ia=37816,Ua=37817,Na=37818,Fa=37819,Oa=37820,Ba=37821,ka=36492,za=36494,Ha=36495,Ga=36283,Va=36284,sr=36285,Wa=36286,ym=3200,Xa=0,bm=1,Nn="",It="srgb",rr="srgb-linear",ar="linear",$e="srgb",Cr=7680,Tm=519,wm=512,Rm=513,Cm=514,Gc=515,Pm=516,Lm=517,Vc=518,Wc=519,Xc=35044,$o="300 es",tn=2e3,os=2001;function Dm(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ls(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Im(){const i=ls("canvas");return i.style.display="block",i}const jo={};function or(...i){const e="THREE."+i.shift();console.log(e,...i)}function qc(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Re(...i){i=qc(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ye(...i){i=qc(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Qs(...i){const e=i.join(" ");e in jo||(jo[e]=!0,Re(...i))}function Um(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Nm={[oa]:oa,[ca]:da,[ua]:ua,[is]:ha,[la]:la,[da]:ca,[fa]:fa,[ha]:is};class ei{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const At=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],$s=Math.PI/180,qa=180/Math.PI;function ti(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(At[i&255]+At[i>>8&255]+At[i>>16&255]+At[i>>24&255]+"-"+At[e&255]+At[e>>8&255]+"-"+At[e>>16&15|64]+At[e>>24&255]+"-"+At[t&63|128]+At[t>>8&255]+"-"+At[t>>16&255]+At[t>>24&255]+At[n&255]+At[n>>8&255]+At[n>>16&255]+At[n>>24&255]).toLowerCase()}function Xe(i,e,t){return Math.max(e,Math.min(t,i))}function Fm(i,e){return(i%e+e)%e}function Pr(i,e,t){return(1-t)*i+t*e}function Om(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function vr(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Yc(i,e){if(e.constructor===Float32Array)return i;const t=vr(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function Kc(i,e){if(e.constructor===Float32Array)return i;const t=vr(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}const _o=class _o{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Xe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};_o.prototype.isVector2=!0;let Oe=_o;class Ui{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[a+0],f=r[a+1],g=r[a+2],S=r[a+3];if(d!==S||l!==u||c!==f||h!==g){let m=l*u+c*f+h*g+d*S;m<0&&(u=-u,f=-f,g=-g,S=-S,m=-m);let p=1-o;if(m<.9995){const M=Math.acos(m),T=Math.sin(M);p=Math.sin(p*M)/T,o=Math.sin(o*M)/T,l=l*p+u*o,c=c*p+f*o,h=h*p+g*o,d=d*p+S*o}else{l=l*p+u*o,c=c*p+f*o,h=h*p+g*o,d=d*p+S*o;const M=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=M,c*=M,h*=M,d*=M}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[a],u=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*d+l*f-c*u,e[t+1]=l*g+h*u+c*d-o*f,e[t+2]=c*g+h*f+o*u-l*d,e[t+3]=h*g-o*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),d=o(r/2),u=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:Re("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=n+o+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>d){const f=2*Math.sqrt(1+n-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){const f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xe(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const vo=class vo{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(el.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(el.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),d=2*(r*n-a*t);return this.x=t+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Lr.copy(this).projectOnVector(e),this.sub(Lr)}reflect(e){return this.sub(Lr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Xe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};vo.prototype.isVector3=!0;let k=vo;const Lr=new k,el=new Ui,xo=class xo{constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],S=s[0],m=s[3],p=s[6],M=s[1],T=s[4],A=s[7],w=s[2],b=s[5],_=s[8];return r[0]=a*S+o*M+l*w,r[3]=a*m+o*T+l*b,r[6]=a*p+o*A+l*_,r[1]=c*S+h*M+d*w,r[4]=c*m+h*T+d*b,r[7]=c*p+h*A+d*_,r[2]=u*S+f*M+g*w,r[5]=u*m+f*T+g*b,r[8]=u*p+f*A+g*_,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,g=t*d+n*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/g;return e[0]=d*S,e[1]=(s*c-h*n)*S,e[2]=(o*n-s*a)*S,e[3]=u*S,e[4]=(h*t-s*l)*S,e[5]=(s*r-o*t)*S,e[6]=f*S,e[7]=(n*l-c*t)*S,e[8]=(a*t-n*r)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Qs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Dr.makeScale(e,t)),this}rotate(e){return Qs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Dr.makeRotation(-e)),this}translate(e,t){return Qs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Dr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};xo.prototype.isMatrix3=!0;let Le=xo;const Dr=new Le,tl=new Le().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),nl=new Le().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Bm(){const i={enabled:!0,workingColorSpace:rr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===$e&&(s.r=An(s.r),s.g=An(s.g),s.b=An(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===$e&&(s.r=Ti(s.r),s.g=Ti(s.g),s.b=Ti(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Nn?ar:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[rr]:{primaries:e,whitePoint:n,transfer:ar,toXYZ:tl,fromXYZ:nl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:It},outputColorSpaceConfig:{drawingBufferColorSpace:It}},[It]:{primaries:e,whitePoint:n,transfer:$e,toXYZ:tl,fromXYZ:nl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:It}}}),i}const We=Bm();function An(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ti(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let si;class km{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{si===void 0&&(si=ls("canvas")),si.width=e.width,si.height=e.height;const s=si.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=si}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ls("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=An(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(An(t[n]/255)*255):t[n]=An(t[n]);return{data:t,width:e.width,height:e.height}}else return Re("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let zm=0;class ho{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:zm++}),this.uuid=ti(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ir(s[a].image)):r.push(Ir(s[a]))}else r=Ir(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Ir(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?km.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Re("Texture: Unable to serialize Texture."),{})}let Hm=0;const Ur=new k;class bt extends ei{constructor(e=bt.DEFAULT_IMAGE,t=bt.DEFAULT_MAPPING,n=Mn,s=Mn,r=Nt,a=Fn,o=ln,l=zt,c=bt.DEFAULT_ANISOTROPY,h=Nn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hm++}),this.uuid=ti(),this.name="",this.source=new ho(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Le,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Ur).x}get height(){return this.source.getSize(Ur).y}get depth(){return this.source.getSize(Ur).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Re(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Re(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Nc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case rs:e.x=e.x-Math.floor(e.x);break;case Mn:e.x=e.x<0?0:1;break;case pa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case rs:e.y=e.y-Math.floor(e.y);break;case Mn:e.y=e.y<0?0:1;break;case pa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}bt.DEFAULT_IMAGE=null;bt.DEFAULT_MAPPING=Nc;bt.DEFAULT_ANISOTROPY=1;const So=class So{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],S=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-S)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+S)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(c+1)/2,A=(f+1)/2,w=(p+1)/2,b=(h+u)/4,_=(d+S)/4,E=(g+m)/4;return T>A&&T>w?T<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(T),s=b/n,r=_/n):A>w?A<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(A),n=b/s,r=E/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=_/r,s=E/r),this.set(n,s,r,t),this}let M=Math.sqrt((m-g)*(m-g)+(d-S)*(d-S)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(d-S)/M,this.z=(u-h)/M,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this.w=Xe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this.w=Xe(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};So.prototype.isVector4=!0;let at=So;class Gm extends ei{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new at(0,0,e,t),this.scissorTest=!1,this.viewport=new at(0,0,e,t),this.textures=[];const s=n.count;for(let r=0;r<s;r++)this.textures[r]=new bt({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Nt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new ho(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class cn extends Gm{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Zc extends bt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=ot,this.minFilter=ot,this.wrapR=Mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Vm extends bt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=ot,this.minFilter=ot,this.wrapR=Mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const _r=class _r{constructor(e,t,n,s,r,a,o,l,c,h,d,u,f,g,S,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,d,u,f,g,S,m)}set(e,t,n,s,r,a,o,l,c,h,d,u,f,g,S,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=S,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _r().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,s=1/ri.setFromMatrixColumn(e,0).length(),r=1/ri.setFromMatrixColumn(e,1).length(),a=1/ri.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const u=a*h,f=a*d,g=o*h,S=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=u-S*c,t[9]=-o*l,t[2]=S-u*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){const u=l*h,f=l*d,g=c*h,S=c*d;t[0]=u+S*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=S+u*o,t[10]=a*l}else if(e.order==="ZXY"){const u=l*h,f=l*d,g=c*h,S=c*d;t[0]=u-S*o,t[4]=-a*d,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=S-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const u=a*h,f=a*d,g=o*h,S=o*d;t[0]=l*h,t[4]=g*c-f,t[8]=u*c+S,t[1]=l*d,t[5]=S*c+u,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const u=a*l,f=a*c,g=o*l,S=o*c;t[0]=l*h,t[4]=S-u*d,t[8]=g*d+f,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*d+g,t[10]=u-S*d}else if(e.order==="XZY"){const u=a*l,f=a*c,g=o*l,S=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+S,t[5]=a*h,t[9]=f*d-g,t[2]=g*d-f,t[6]=o*h,t[10]=S*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Wm,e,Xm)}lookAt(e,t,n){const s=this.elements;return Ot.subVectors(e,t),Ot.lengthSq()===0&&(Ot.z=1),Ot.normalize(),Cn.crossVectors(n,Ot),Cn.lengthSq()===0&&(Math.abs(n.z)===1?Ot.x+=1e-4:Ot.z+=1e-4,Ot.normalize(),Cn.crossVectors(n,Ot)),Cn.normalize(),ms.crossVectors(Ot,Cn),s[0]=Cn.x,s[4]=ms.x,s[8]=Ot.x,s[1]=Cn.y,s[5]=ms.y,s[9]=Ot.y,s[2]=Cn.z,s[6]=ms.z,s[10]=Ot.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],S=n[6],m=n[10],p=n[14],M=n[3],T=n[7],A=n[11],w=n[15],b=s[0],_=s[4],E=s[8],P=s[12],R=s[1],I=s[5],O=s[9],W=s[13],L=s[2],G=s[6],Y=s[10],H=s[14],j=s[3],V=s[7],Z=s[11],ee=s[15];return r[0]=a*b+o*R+l*L+c*j,r[4]=a*_+o*I+l*G+c*V,r[8]=a*E+o*O+l*Y+c*Z,r[12]=a*P+o*W+l*H+c*ee,r[1]=h*b+d*R+u*L+f*j,r[5]=h*_+d*I+u*G+f*V,r[9]=h*E+d*O+u*Y+f*Z,r[13]=h*P+d*W+u*H+f*ee,r[2]=g*b+S*R+m*L+p*j,r[6]=g*_+S*I+m*G+p*V,r[10]=g*E+S*O+m*Y+p*Z,r[14]=g*P+S*W+m*H+p*ee,r[3]=M*b+T*R+A*L+w*j,r[7]=M*_+T*I+A*G+w*V,r[11]=M*E+T*O+A*Y+w*Z,r[15]=M*P+T*W+A*H+w*ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],g=e[3],S=e[7],m=e[11],p=e[15],M=l*f-c*u,T=o*f-c*d,A=o*u-l*d,w=a*f-c*h,b=a*u-l*h,_=a*d-o*h;return t*(S*M-m*T+p*A)-n*(g*M-m*w+p*b)+s*(g*T-S*w+p*_)-r*(g*A-S*b+m*_)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],g=e[12],S=e[13],m=e[14],p=e[15],M=t*o-n*a,T=t*l-s*a,A=t*c-r*a,w=n*l-s*o,b=n*c-r*o,_=s*c-r*l,E=h*S-d*g,P=h*m-u*g,R=h*p-f*g,I=d*m-u*S,O=d*p-f*S,W=u*p-f*m,L=M*W-T*O+A*I+w*R-b*P+_*E;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const G=1/L;return e[0]=(o*W-l*O+c*I)*G,e[1]=(s*O-n*W-r*I)*G,e[2]=(S*_-m*b+p*w)*G,e[3]=(u*b-d*_-f*w)*G,e[4]=(l*R-a*W-c*P)*G,e[5]=(t*W-s*R+r*P)*G,e[6]=(m*A-g*_-p*T)*G,e[7]=(h*_-u*A+f*T)*G,e[8]=(a*O-o*R+c*E)*G,e[9]=(n*R-t*O-r*E)*G,e[10]=(g*b-S*A+p*M)*G,e[11]=(d*A-h*b-f*M)*G,e[12]=(o*P-a*I-l*E)*G,e[13]=(t*I-n*P+s*E)*G,e[14]=(S*T-g*w-m*M)*G,e[15]=(h*w-d*T+u*M)*G,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,g=r*d,S=a*h,m=a*d,p=o*d,M=l*c,T=l*h,A=l*d,w=n.x,b=n.y,_=n.z;return s[0]=(1-(S+p))*w,s[1]=(f+A)*w,s[2]=(g-T)*w,s[3]=0,s[4]=(f-A)*b,s[5]=(1-(u+p))*b,s[6]=(m+M)*b,s[7]=0,s[8]=(g+T)*_,s[9]=(m-M)*_,s[10]=(1-(u+S))*_,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=ri.set(s[0],s[1],s[2]).length();const o=ri.set(s[4],s[5],s[6]).length(),l=ri.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Qt.copy(this);const c=1/a,h=1/o,d=1/l;return Qt.elements[0]*=c,Qt.elements[1]*=c,Qt.elements[2]*=c,Qt.elements[4]*=h,Qt.elements[5]*=h,Qt.elements[6]*=h,Qt.elements[8]*=d,Qt.elements[9]*=d,Qt.elements[10]*=d,t.setFromRotationMatrix(Qt),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=tn,l=!1){const c=this.elements,h=2*r/(t-e),d=2*r/(n-s),u=(t+e)/(t-e),f=(n+s)/(n-s);let g,S;if(l)g=r/(a-r),S=a*r/(a-r);else if(o===tn)g=-(a+r)/(a-r),S=-2*a*r/(a-r);else if(o===os)g=-a/(a-r),S=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=tn,l=!1){const c=this.elements,h=2/(t-e),d=2/(n-s),u=-(t+e)/(t-e),f=-(n+s)/(n-s);let g,S;if(l)g=1/(a-r),S=a/(a-r);else if(o===tn)g=-2/(a-r),S=-(a+r)/(a-r);else if(o===os)g=-1/(a-r),S=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};_r.prototype.isMatrix4=!0;let Ze=_r;const ri=new k,Qt=new Ze,Wm=new k(0,0,0),Xm=new k(1,1,1),Cn=new k,ms=new k,Ot=new k,il=new Ze,sl=new Ui;class kn{constructor(e=0,t=0,n=0,s=kn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Xe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Xe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Xe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Xe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Re("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return il.makeRotationFromQuaternion(e),this.setFromRotationMatrix(il,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return sl.setFromEuler(this),this.setFromQuaternion(sl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}kn.DEFAULT_ORDER="XYZ";class Jc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let qm=0;const rl=new k,ai=new Ui,mn=new Ze,gs=new k,zi=new k,Ym=new k,Km=new Ui,al=new k(1,0,0),ol=new k(0,1,0),ll=new k(0,0,1),cl={type:"added"},Zm={type:"removed"},oi={type:"childadded",child:null},Nr={type:"childremoved",child:null};class Tt extends ei{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qm++}),this.uuid=ti(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tt.DEFAULT_UP.clone();const e=new k,t=new kn,n=new Ui,s=new k(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ze},normalMatrix:{value:new Le}}),this.matrix=new Ze,this.matrixWorld=new Ze,this.matrixAutoUpdate=Tt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Jc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ai.setFromAxisAngle(e,t),this.quaternion.multiply(ai),this}rotateOnWorldAxis(e,t){return ai.setFromAxisAngle(e,t),this.quaternion.premultiply(ai),this}rotateX(e){return this.rotateOnAxis(al,e)}rotateY(e){return this.rotateOnAxis(ol,e)}rotateZ(e){return this.rotateOnAxis(ll,e)}translateOnAxis(e,t){return rl.copy(e).applyQuaternion(this.quaternion),this.position.add(rl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(al,e)}translateY(e){return this.translateOnAxis(ol,e)}translateZ(e){return this.translateOnAxis(ll,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?gs.copy(e):gs.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),zi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mn.lookAt(zi,gs,this.up):mn.lookAt(gs,zi,this.up),this.quaternion.setFromRotationMatrix(mn),s&&(mn.extractRotation(s.matrixWorld),ai.setFromRotationMatrix(mn),this.quaternion.premultiply(ai.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ye("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(cl),oi.child=e,this.dispatchEvent(oi),oi.child=null):Ye("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Zm),Nr.child=e,this.dispatchEvent(Nr),Nr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),mn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mn.multiply(e.parent.matrixWorld)),e.applyMatrix4(mn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(cl),oi.child=e,this.dispatchEvent(oi),oi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zi,e,Ym),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zi,Km,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Tt.DEFAULT_UP=new k(0,1,0);Tt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ai extends Tt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Jm={type:"move"};class Fr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ai,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ai,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ai,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const S of e.hand.values()){const m=t.getJointPose(S,n),p=this._getHandJoint(c,S);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Jm)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ai;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Qc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pn={h:0,s:0,l:0},_s={h:0,s:0,l:0};function Or(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class ze{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=It){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,We.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=We.workingColorSpace){return this.r=e,this.g=t,this.b=n,We.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=We.workingColorSpace){if(e=Fm(e,1),t=Xe(t,0,1),n=Xe(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Or(a,r,e+1/3),this.g=Or(a,r,e),this.b=Or(a,r,e-1/3)}return We.colorSpaceToWorking(this,s),this}setStyle(e,t=It){function n(r){r!==void 0&&parseFloat(r)<1&&Re("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Re("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Re("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=It){const n=Qc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Re("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=An(e.r),this.g=An(e.g),this.b=An(e.b),this}copyLinearToSRGB(e){return this.r=Ti(e.r),this.g=Ti(e.g),this.b=Ti(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=It){return We.workingToColorSpace(yt.copy(this),e),Math.round(Xe(yt.r*255,0,255))*65536+Math.round(Xe(yt.g*255,0,255))*256+Math.round(Xe(yt.b*255,0,255))}getHexString(e=It){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=We.workingColorSpace){We.workingToColorSpace(yt.copy(this),t);const n=yt.r,s=yt.g,r=yt.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=We.workingColorSpace){return We.workingToColorSpace(yt.copy(this),t),e.r=yt.r,e.g=yt.g,e.b=yt.b,e}getStyle(e=It){We.workingToColorSpace(yt.copy(this),e);const t=yt.r,n=yt.g,s=yt.b;return e!==It?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Pn),this.setHSL(Pn.h+e,Pn.s+t,Pn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Pn),e.getHSL(_s);const n=Pr(Pn.h,_s.h,t),s=Pr(Pn.s,_s.s,t),r=Pr(Pn.l,_s.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const yt=new ze;ze.NAMES=Qc;class xr{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new ze(e),this.near=t,this.far=n}clone(){return new xr(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class $c extends Tt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new kn,this.environmentIntensity=1,this.environmentRotation=new kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const $t=new k,gn=new k,Br=new k,_n=new k,li=new k,ci=new k,ul=new k,kr=new k,zr=new k,Hr=new k,Gr=new at,Vr=new at,Wr=new at;class Ht{constructor(e=new k,t=new k,n=new k){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),$t.subVectors(e,t),s.cross($t);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){$t.subVectors(s,t),gn.subVectors(n,t),Br.subVectors(e,t);const a=$t.dot($t),o=$t.dot(gn),l=$t.dot(Br),c=gn.dot(gn),h=gn.dot(Br),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const u=1/d,f=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,_n)===null?!1:_n.x>=0&&_n.y>=0&&_n.x+_n.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,_n)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,_n.x),l.addScaledVector(a,_n.y),l.addScaledVector(o,_n.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Gr.setScalar(0),Vr.setScalar(0),Wr.setScalar(0),Gr.fromBufferAttribute(e,t),Vr.fromBufferAttribute(e,n),Wr.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Gr,r.x),a.addScaledVector(Vr,r.y),a.addScaledVector(Wr,r.z),a}static isFrontFacing(e,t,n,s){return $t.subVectors(n,t),gn.subVectors(e,t),$t.cross(gn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $t.subVectors(this.c,this.b),gn.subVectors(this.a,this.b),$t.cross(gn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ht.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ht.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Ht.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Ht.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ht.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;li.subVectors(s,n),ci.subVectors(r,n),kr.subVectors(e,n);const l=li.dot(kr),c=ci.dot(kr);if(l<=0&&c<=0)return t.copy(n);zr.subVectors(e,s);const h=li.dot(zr),d=ci.dot(zr);if(h>=0&&d<=h)return t.copy(s);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),t.copy(n).addScaledVector(li,a);Hr.subVectors(e,r);const f=li.dot(Hr),g=ci.dot(Hr);if(g>=0&&f<=g)return t.copy(r);const S=f*c-l*g;if(S<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(ci,o);const m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return ul.subVectors(r,s),o=(d-h)/(d-h+(f-g)),t.copy(s).addScaledVector(ul,o);const p=1/(m+S+u);return a=S*p,o=u*p,t.copy(n).addScaledVector(li,a).addScaledVector(ci,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ni{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(jt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(jt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=jt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,jt):jt.fromBufferAttribute(r,a),jt.applyMatrix4(e.matrixWorld),this.expandByPoint(jt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),vs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),vs.copy(n.boundingBox)),vs.applyMatrix4(e.matrixWorld),this.union(vs)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,jt),jt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Hi),xs.subVectors(this.max,Hi),ui.subVectors(e.a,Hi),hi.subVectors(e.b,Hi),di.subVectors(e.c,Hi),Ln.subVectors(hi,ui),Dn.subVectors(di,hi),Wn.subVectors(ui,di);let t=[0,-Ln.z,Ln.y,0,-Dn.z,Dn.y,0,-Wn.z,Wn.y,Ln.z,0,-Ln.x,Dn.z,0,-Dn.x,Wn.z,0,-Wn.x,-Ln.y,Ln.x,0,-Dn.y,Dn.x,0,-Wn.y,Wn.x,0];return!Xr(t,ui,hi,di,xs)||(t=[1,0,0,0,1,0,0,0,1],!Xr(t,ui,hi,di,xs))?!1:(Ss.crossVectors(Ln,Dn),t=[Ss.x,Ss.y,Ss.z],Xr(t,ui,hi,di,xs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,jt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(jt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(vn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const vn=[new k,new k,new k,new k,new k,new k,new k,new k],jt=new k,vs=new ni,ui=new k,hi=new k,di=new k,Ln=new k,Dn=new k,Wn=new k,Hi=new k,xs=new k,Ss=new k,Xn=new k;function Xr(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Xn.fromArray(i,r);const o=s.x*Math.abs(Xn.x)+s.y*Math.abs(Xn.y)+s.z*Math.abs(Xn.z),l=e.dot(Xn),c=t.dot(Xn),h=n.dot(Xn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const ut=new k,Ms=new Oe;let Qm=0;class yn extends ei{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Qm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Xc,this.updateRanges=[],this.gpuType=en,this.version=0,this._normalizationScale=e!==void 0?vr(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ms.fromBufferAttribute(this,t),Ms.applyMatrix3(e),this.setXY(t,Ms.x,Ms.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix3(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix4(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyNormalMatrix(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.transformDirection(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Yc(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):Kc(e,this.array)}}class jc extends yn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class eu extends yn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Zt extends yn{constructor(e,t,n){super(new Float32Array(e),t,n)}}const $m=new ni,Gi=new k,qr=new k;class Ni{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):$m.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Gi.subVectors(e,this.center);const t=Gi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Gi,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(qr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Gi.copy(e.center).add(qr)),this.expandByPoint(Gi.copy(e.center).sub(qr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let jm=0;const Yt=new Ze,Yr=new Tt,fi=new k,Bt=new ni,Vi=new ni,vt=new k;class fn extends ei{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jm++}),this.uuid=ti(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Dm(e)?eu:jc)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Le().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Yt.makeRotationFromQuaternion(e),this.applyMatrix4(Yt),this}rotateX(e){return Yt.makeRotationX(e),this.applyMatrix4(Yt),this}rotateY(e){return Yt.makeRotationY(e),this.applyMatrix4(Yt),this}rotateZ(e){return Yt.makeRotationZ(e),this.applyMatrix4(Yt),this}translate(e,t,n){return Yt.makeTranslation(e,t,n),this.applyMatrix4(Yt),this}scale(e,t,n){return Yt.makeScale(e,t,n),this.applyMatrix4(Yt),this}lookAt(e){return Yr.lookAt(e),Yr.updateMatrix(),this.applyMatrix4(Yr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fi).negate(),this.translate(fi.x,fi.y,fi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Zt(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Re("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ni);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ye("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Bt.setFromBufferAttribute(r),this.morphTargetsRelative?(vt.addVectors(this.boundingBox.min,Bt.min),this.boundingBox.expandByPoint(vt),vt.addVectors(this.boundingBox.max,Bt.max),this.boundingBox.expandByPoint(vt)):(this.boundingBox.expandByPoint(Bt.min),this.boundingBox.expandByPoint(Bt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ye('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ni);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ye("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const n=this.boundingSphere.center;if(Bt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Vi.setFromBufferAttribute(o),this.morphTargetsRelative?(vt.addVectors(Bt.min,Vi.min),Bt.expandByPoint(vt),vt.addVectors(Bt.max,Vi.max),Bt.expandByPoint(vt)):(Bt.expandByPoint(Vi.min),Bt.expandByPoint(Vi.max))}Bt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)vt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(vt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)vt.fromBufferAttribute(o,c),l&&(fi.fromBufferAttribute(e,c),vt.add(fi)),s=Math.max(s,n.distanceToSquared(vt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ye('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ye("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new yn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[],c=new Uint8Array(n.count);for(let P=0;P<n.count;P++)o[P]=new k,l[P]=new k;const h=new k,d=new k,u=new k,f=new Oe,g=new Oe,S=new Oe,m=new k,p=new k;function M(P,R,I){c[P]=c[R]=c[I]=1,h.fromBufferAttribute(n,P),d.fromBufferAttribute(n,R),u.fromBufferAttribute(n,I),f.fromBufferAttribute(r,P),g.fromBufferAttribute(r,R),S.fromBufferAttribute(r,I),d.sub(h),u.sub(h),g.sub(f),S.sub(f);const O=1/(g.x*S.y-S.x*g.y);isFinite(O)&&(m.copy(d).multiplyScalar(S.y).addScaledVector(u,-g.y).multiplyScalar(O),p.copy(u).multiplyScalar(g.x).addScaledVector(d,-S.x).multiplyScalar(O),o[P].add(m),o[R].add(m),o[I].add(m),l[P].add(p),l[R].add(p),l[I].add(p))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let P=0,R=T.length;P<R;++P){const I=T[P],O=I.start,W=I.count;for(let L=O,G=O+W;L<G;L+=3)M(e.getX(L+0),e.getX(L+1),e.getX(L+2))}const A=new k,w=new k,b=new k,_=new k;function E(P){b.fromBufferAttribute(s,P),_.copy(b);const R=o[P];A.copy(R),A.sub(b.multiplyScalar(b.dot(R))).normalize(),w.crossVectors(_,R);const O=w.dot(l[P])<0?-1:1;a.setXYZW(P,A.x,A.y,A.z,O)}for(let P=0,R=n.count;P<R;++P)c[P]&&E(P);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new yn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const s=new k,r=new k,a=new k,o=new k,l=new k,c=new k,h=new k,d=new k;if(e)for(let u=0,f=e.count;u<f;u+=3){const g=e.getX(u+0),S=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,S),a.fromBufferAttribute(t,m),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,S),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(S,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)vt.fromBufferAttribute(e,t),vt.normalize(),e.setXYZ(t,vt.x,vt.y,vt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h);let f=0,g=0;for(let S=0,m=l.length;S<m;S++){o.isInterleavedBufferAttribute?f=l[S]*o.data.stride+o.offset:f=l[S]*h;for(let p=0;p<h;p++)u[g++]=c[f++]}return new yn(u,h,d)}if(this.index===null)return Re("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new fn,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){const u=c[h],f=e(u,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class eg{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Xc,this.updateRanges=[],this.version=0,this.uuid=ti()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});const t=hl(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});const t=hl(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));const n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}}function hl(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=ti()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}const Pt=new k;class lr{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s,this._normalizationScale=e!==void 0?vr(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix4(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyNormalMatrix(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.transformDirection(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){or("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new yn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new lr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){or("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Yc(e,this.data.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):Kc(e,this.data.array)}}const Kr=new k,tg=new k,ng=new Le;class Un{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Kr.subVectors(n,t).cross(tg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const s=e.delta(Kr),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||ng.getNormalMatrix(e),s=this.coplanarPoint(Kr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let ig=0;class ii extends ei{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ig++}),this.uuid=ti(),this.name="",this.type="Material",this.blending=ts,this.side=Qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Tc,this.blendDst=wc,this.blendEquation=Ei,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Tm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Cr,this.stencilZFail=Cr,this.stencilZPass=Cr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Re(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Re(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ze().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Un().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Oe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Oe().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ci extends ii{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let pi;const Wi=new k,mi=new k,gi=new k,_i=new Oe,Xi=new Oe,tu=new Ze,Es=new k,qi=new k,As=new k,dl=new Oe,Zr=new Oe,fl=new Oe;class Sr extends Tt{constructor(e=new Ci){if(super(),this.isSprite=!0,this.type="Sprite",pi===void 0){pi=new fn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new eg(t,5);pi.setIndex([0,1,2,0,2,3]),pi.setAttribute("position",new lr(n,3,0,!1)),pi.setAttribute("uv",new lr(n,2,3,!1))}this.geometry=pi,this.material=e,this.center=new Oe(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Ye('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),mi.setFromMatrixScale(this.matrixWorld),tu.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),gi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&mi.multiplyScalar(-gi.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;ys(Es.set(-.5,-.5,0),gi,a,mi,s,r),ys(qi.set(.5,-.5,0),gi,a,mi,s,r),ys(As.set(.5,.5,0),gi,a,mi,s,r),dl.set(0,0),Zr.set(1,0),fl.set(1,1);let o=e.ray.intersectTriangle(Es,qi,As,!1,Wi);if(o===null&&(ys(qi.set(-.5,.5,0),gi,a,mi,s,r),Zr.set(0,1),o=e.ray.intersectTriangle(Es,As,qi,!1,Wi),o===null))return;const l=e.ray.origin.distanceTo(Wi);l<e.near||l>e.far||t.push({distance:l,point:Wi.clone(),uv:Ht.getInterpolation(Wi,Es,qi,As,dl,Zr,fl,new Oe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){const t=super.toJSON(e);return t.object.center=this.center.toArray(),t}}function ys(i,e,t,n,s,r){_i.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Xi.x=r*_i.x-s*_i.y,Xi.y=s*_i.x+r*_i.y):Xi.copy(_i),i.copy(e),i.x+=Xi.x,i.y+=Xi.y,i.applyMatrix4(tu)}const xn=new k,Jr=new k,bs=new k,Ts=new k;class nu{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=xn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(xn.copy(this.origin).addScaledVector(this.direction,t),xn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Jr.copy(e).add(t).multiplyScalar(.5),bs.copy(t).sub(e).normalize(),Ts.copy(this.origin).sub(Jr);const r=e.distanceTo(t)*.5,a=-this.direction.dot(bs),o=Ts.dot(this.direction),l=-Ts.dot(bs),c=Ts.lengthSq(),h=Math.abs(1-a*a);let d,u,f,g;if(h>0)if(d=a*l-o,u=a*o-l,g=r*h,d>=0)if(u>=-g)if(u<=g){const S=1/h;d*=S,u*=S,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Jr).addScaledVector(bs,u),f}intersectSphere(e,t){if(e.radius<0)return null;xn.subVectors(e.center,this.origin);const n=xn.dot(this.direction),s=xn.dot(xn)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,xn)!==null}intersectTriangle(e,t,n,s,r){const a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=e.x-a.x,u=e.y-a.y,f=e.z-a.z,g=t.x-a.x,S=t.y-a.y,m=t.z-a.z,p=n.x-a.x,M=n.y-a.y,T=n.z-a.z,A=Math.abs(l),w=Math.abs(c),b=Math.abs(h);let _,E,P,R,I,O,W,L,G,Y,H,j;if(A>=w&&A>=b?(P=l,O=d,G=g,j=p,l>=0?(_=c,E=h,R=u,I=f,W=S,L=m,Y=M,H=T):(_=h,E=c,R=f,I=u,W=m,L=S,Y=T,H=M)):w>=b?(P=c,O=u,G=S,j=M,c>=0?(_=h,E=l,R=f,I=d,W=m,L=g,Y=T,H=p):(_=l,E=h,R=d,I=f,W=g,L=m,Y=p,H=T)):(P=h,O=f,G=m,j=T,h>=0?(_=l,E=c,R=d,I=u,W=g,L=S,Y=p,H=M):(_=c,E=l,R=u,I=d,W=S,L=g,Y=M,H=p)),P===0)return null;const V=_/P,Z=E/P,ee=1/P,Me=R-V*O,De=I-Z*O,J=W-V*G,pe=L-Z*G,ve=Y-V*j,be=H-Z*j,me=ve*pe-be*J,Ne=Me*be-De*ve,lt=J*De-pe*Me;if(s){if(me<0||Ne<0||lt<0)return null}else if((me<0||Ne<0||lt<0)&&(me>0||Ne>0||lt>0))return null;const we=me+Ne+lt;if(we===0)return null;const Je=ee*(me*O+Ne*G+lt*j);return(we>0?Je<0:Je>0)?null:this.at(Je/we,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class cr extends ii{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.combine=io,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const pl=new Ze,qn=new nu,ws=new Ni,ml=new k,Rs=new k,Cs=new k,Ps=new k,Qr=new k,Ls=new k,gl=new k,Ds=new k;class wt extends Tt{constructor(e=new fn,t=new cr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Ls.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],d=r[l];h!==0&&(Qr.fromBufferAttribute(d,e),a?Ls.addScaledVector(Qr,h):Ls.addScaledVector(Qr.sub(t),h))}t.add(Ls)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ws.copy(n.boundingSphere),ws.applyMatrix4(r),qn.copy(e.ray).recast(e.near),!(ws.containsPoint(qn.origin)===!1&&(qn.intersectSphere(ws,ml)===null||qn.origin.distanceToSquared(ml)>(e.far-e.near)**2))&&(pl.copy(r).invert(),qn.copy(e.ray).applyMatrix4(pl),!(n.boundingBox!==null&&qn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,qn)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,S=u.length;g<S;g++){const m=u[g],p=a[m.materialIndex],M=Math.max(m.start,f.start),T=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let A=M,w=T;A<w;A+=3){const b=o.getX(A),_=o.getX(A+1),E=o.getX(A+2);s=Is(this,p,e,n,c,h,d,b,_,E),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),S=Math.min(o.count,f.start+f.count);for(let m=g,p=S;m<p;m+=3){const M=o.getX(m),T=o.getX(m+1),A=o.getX(m+2);s=Is(this,a,e,n,c,h,d,M,T,A),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,S=u.length;g<S;g++){const m=u[g],p=a[m.materialIndex],M=Math.max(m.start,f.start),T=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let A=M,w=T;A<w;A+=3){const b=A,_=A+1,E=A+2;s=Is(this,p,e,n,c,h,d,b,_,E),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),S=Math.min(l.count,f.start+f.count);for(let m=g,p=S;m<p;m+=3){const M=m,T=m+1,A=m+2;s=Is(this,a,e,n,c,h,d,M,T,A),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function sg(i,e,t,n,s,r,a,o){let l;if(e.side===Ft?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Qn,o),l===null)return null;Ds.copy(o),Ds.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Ds);return c<t.near||c>t.far?null:{distance:c,point:Ds.clone(),object:i}}function Is(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Rs),i.getVertexPosition(l,Cs),i.getVertexPosition(c,Ps);const h=sg(i,e,t,n,Rs,Cs,Ps,gl);if(h){const d=new k;Ht.getBarycoord(gl,Rs,Cs,Ps,d),s&&(h.uv=Ht.getInterpolatedAttribute(s,o,l,c,d,new Oe)),r&&(h.uv1=Ht.getInterpolatedAttribute(r,o,l,c,d,new Oe)),a&&(h.normal=Ht.getInterpolatedAttribute(a,o,l,c,d,new k),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new k,materialIndex:0};Ht.getNormal(Rs,Cs,Ps,u.normal),h.face=u,h.barycoord=d}return h}class iu extends bt{constructor(e=null,t=1,n=1,s,r,a,o,l,c=ot,h=ot,d,u){super(null,a,o,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _l extends yn{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const vi=new Ze,vl=new Ze,Us=[],xl=new ni,rg=new Ze,Yi=new wt,Ki=new Ni;class su extends wt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new _l(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,rg)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ni),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,vi),xl.copy(e.boundingBox).applyMatrix4(vi),this.boundingBox.union(xl)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ni),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,vi),Ki.copy(e.boundingSphere).applyMatrix4(vi),this.boundingSphere.union(Ki)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(Yi.geometry=this.geometry,Yi.material=this.material,Yi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ki.copy(this.boundingSphere),Ki.applyMatrix4(n),e.ray.intersectsSphere(Ki)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,vi),vl.multiplyMatrices(n,vi),Yi.matrixWorld=vl,Yi.raycast(e,Us);for(let a=0,o=Us.length;a<o;a++){const l=Us[a];l.instanceId=r,l.object=this,t.push(l)}Us.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new _l(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new iu(new Float32Array(s*this.count),s,this.count,oo,en));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Yn=new Ni,ag=new Oe(.5,.5),Ns=new k;class cs{constructor(e=new Un,t=new Un,n=new Un,s=new Un,r=new Un,a=new Un){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=tn,n=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],g=r[8],S=r[9],m=r[10],p=r[11],M=r[12],T=r[13],A=r[14],w=r[15];if(s[0].setComponents(c-a,f-h,p-g,w-M).normalize(),s[1].setComponents(c+a,f+h,p+g,w+M).normalize(),s[2].setComponents(c+o,f+d,p+S,w+T).normalize(),s[3].setComponents(c-o,f-d,p-S,w-T).normalize(),n)s[4].setComponents(l,u,m,A).normalize(),s[5].setComponents(c-l,f-u,p-m,w-A).normalize();else if(s[4].setComponents(c-l,f-u,p-m,w-A).normalize(),t===tn)s[5].setComponents(c+l,f+u,p+m,w+A).normalize();else if(t===os)s[5].setComponents(l,u,m,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Yn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Yn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Yn)}intersectsSprite(e){Yn.center.set(0,0,0);const t=ag.distanceTo(e.center);return Yn.radius=.7071067811865476+t,Yn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Yn)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Ns.x=s.normal.x>0?e.max.x:e.min.x,Ns.y=s.normal.y>0?e.max.y:e.min.y,Ns.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ns)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Sl=new Ze;class fo{constructor(){this.coordinateSystem=tn,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){const r=t[s];Sl.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new cs),n[s].setFromProjectionMatrix(Sl,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new cs),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new fo().copy(this)}}class ru extends ii{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ur=new k,hr=new k,Ml=new Ze,Zi=new nu,Fs=new Ni,$r=new k,El=new k;class og extends Tt{constructor(e=new fn,t=new ru){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)ur.fromBufferAttribute(t,s-1),hr.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=ur.distanceTo(hr);e.setAttribute("lineDistance",new Zt(n,1))}else Re("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fs.copy(n.boundingSphere),Fs.applyMatrix4(s),Fs.radius+=r,e.ray.intersectsSphere(Fs)===!1)return;Ml.copy(s).invert(),Zi.copy(e.ray).applyMatrix4(Ml);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){const f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let S=f,m=g-1;S<m;S+=c){const p=h.getX(S),M=h.getX(S+1),T=Os(this,e,Zi,l,p,M,S);T&&t.push(T)}if(this.isLineLoop){const S=h.getX(g-1),m=h.getX(f),p=Os(this,e,Zi,l,S,m,g-1);p&&t.push(p)}}else{const f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let S=f,m=g-1;S<m;S+=c){const p=Os(this,e,Zi,l,S,S+1,S);p&&t.push(p)}if(this.isLineLoop){const S=Os(this,e,Zi,l,g-1,f,g-1);S&&t.push(S)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Os(i,e,t,n,s,r,a){const o=i.geometry.attributes.position;if(ur.fromBufferAttribute(o,s),hr.fromBufferAttribute(o,r),t.distanceSqToSegment(ur,hr,$r,El)>n)return;$r.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo($r);if(!(c<e.near||c>e.far))return{distance:c,point:El.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const Al=new k,yl=new k;class lg extends og{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Al.fromBufferAttribute(t,s),yl.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Al.distanceTo(yl);e.setAttribute("lineDistance",new Zt(n,1))}else Re("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class au extends bt{constructor(e=[],t=wi,n,s,r,a,o,l,c,h){super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Pi extends bt{constructor(e,t,n=un,s,r,a,o=ot,l=ot,c,h=Bn,d=1){if(h!==Bn&&h!==On)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:d};super(u,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ho(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class ou extends Pi{constructor(e,t=un,n=wi,s,r,a=ot,o=ot,l,c=Bn){const h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class lu extends bt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class dn extends fn{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],d=[];let u=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Zt(c,3)),this.setAttribute("normal",new Zt(h,3)),this.setAttribute("uv",new Zt(d,2));function g(S,m,p,M,T,A,w,b,_,E,P){const R=A/_,I=w/E,O=A/2,W=w/2,L=b/2,G=_+1,Y=E+1;let H=0,j=0;const V=new k;for(let Z=0;Z<Y;Z++){const ee=Z*I-W;for(let Me=0;Me<G;Me++){const De=Me*R-O;V[S]=De*M,V[m]=ee*T,V[p]=L,c.push(V.x,V.y,V.z),V[S]=0,V[m]=0,V[p]=b>0?1:-1,h.push(V.x,V.y,V.z),d.push(Me/_),d.push(1-Z/E),H+=1}}for(let Z=0;Z<E;Z++)for(let ee=0;ee<_;ee++){const Me=u+ee+G*Z,De=u+ee+G*(Z+1),J=u+(ee+1)+G*(Z+1),pe=u+(ee+1)+G*Z;l.push(Me,De,pe),l.push(De,J,pe),j+=6}o.addGroup(f,j,P),f+=j,u+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}const Bs=new k,ks=new k,jr=new k,zs=new Ht;class bl extends fn{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const s=Math.pow(10,4),r=Math.cos($s*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],d=new Array(3),u=new Map,f=[];for(let g=0;g<l;g+=3){a?(c[0]=a.getX(g),c[1]=a.getX(g+1),c[2]=a.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:S,b:m,c:p}=zs;if(S.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),p.fromBufferAttribute(o,c[2]),zs.getNormal(jr),d[0]=`${Math.round(S.x*s)},${Math.round(S.y*s)},${Math.round(S.z*s)}`,d[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,d[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let M=0;M<3;M++){const T=(M+1)%3,A=d[M],w=d[T],b=zs[h[M]],_=zs[h[T]],E=`${A}_${w}`,P=`${w}_${A}`,R=u.get(P);R?(jr.dot(R.normal)<=r&&(f.push(b.x,b.y,b.z),f.push(_.x,_.y,_.z)),u.set(P,null)):u.has(E)||u.set(E,{index0:c[M],index1:c[T],normal:jr.clone()})}}for(const g of u.values())if(g){const{index0:S,index1:m}=g;Bs.fromBufferAttribute(o,S),ks.fromBufferAttribute(o,m),f.push(Bs.x,Bs.y,Bs.z),f.push(ks.x,ks.y,ks.z)}this.setAttribute("position",new Zt(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class bn extends fn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,d=e/o,u=t/l,f=[],g=[],S=[],m=[];for(let p=0;p<h;p++){const M=p*u-a;for(let T=0;T<c;T++){const A=T*d-r;g.push(A,-M,0),S.push(0,0,1),m.push(T/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<o;M++){const T=M+c*p,A=M+c*(p+1),w=M+1+c*(p+1),b=M+1+c*p;f.push(T,A,b),f.push(A,w,b)}this.setIndex(f),this.setAttribute("position",new Zt(g,3)),this.setAttribute("normal",new Zt(S,3)),this.setAttribute("uv",new Zt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bn(e.width,e.height,e.widthSegments,e.heightSegments)}}function Li(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];if(Tl(s))s.isRenderTargetTexture?(Re("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Tl(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Lt(i){const e={};for(let t=0;t<i.length;t++){const n=Li(i[t]);for(const s in n)e[s]=n[s]}return e}function Tl(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function cg(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function cu(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:We.workingColorSpace}const ug={clone:Li,merge:Lt};var hg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class jn extends ii{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hg,this.fragmentShader=dg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Li(e.uniforms),this.uniformsGroups=cg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new ze().setHex(s.value);break;case"v2":this.uniforms[n].value=new Oe().fromArray(s.value);break;case"v3":this.uniforms[n].value=new k().fromArray(s.value);break;case"v4":this.uniforms[n].value=new at().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Le().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Ze().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class fg extends jn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Fi extends ii{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xa,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.combine=io,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class pg extends ii{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ym,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class mg extends ii{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ea={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(wl(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!wl(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function wl(i){try{const e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class gg{constructor(e,t,n){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){const f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const _g=new gg;class po{constructor(e){this.manager=e!==void 0?e:_g,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}}po.DEFAULT_MATERIAL_NAME="__DEFAULT";const xi=new WeakMap;class vg extends po{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=ea.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let d=xi.get(a);d===void 0&&(d=[],xi.set(a,d)),d.push({onLoad:t,onError:s})}return a}const o=ls("img");function l(){h(),t&&t(this);const d=xi.get(this)||[];for(let u=0;u<d.length;u++){const f=d[u];f.onLoad&&f.onLoad(this)}xi.delete(this),r.manager.itemEnd(e)}function c(d){h(),s&&s(d),ea.remove(`image:${e}`);const u=xi.get(this)||[];for(let f=0;f<u.length;f++){const g=u[f];g.onError&&g.onError(d)}xi.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),ea.add(`image:${e}`,o),r.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}}class uu extends po{constructor(e){super(e)}load(e,t,n,s){const r=new bt,a=new vg(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class hu extends Tt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const ta=new Ze,Rl=new k,Cl=new k;class xg{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Oe(512,512),this.mapType=zt,this.map=null,this.mapPass=null,this.matrix=new Ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new cs,this._frameExtents=new Oe(1,1),this._viewportCount=1,this._viewports=[new at(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Rl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Rl),Cl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Cl),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){ta.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(ta,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===os||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(ta)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Hs=new k,Gs=new Ui,rn=new k;class du extends Tt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ze,this.projectionMatrix=new Ze,this.projectionMatrixInverse=new Ze,this.coordinateSystem=tn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Hs,Gs,rn),rn.x===1&&rn.y===1&&rn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hs,Gs,rn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Hs,Gs,rn),rn.x===1&&rn.y===1&&rn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hs,Gs,rn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const In=new k,Pl=new Oe,Ll=new Oe;class kt extends du{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=qa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan($s*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qa*2*Math.atan(Math.tan($s*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){In.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(In.x,In.y).multiplyScalar(-e/In.z),In.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(In.x,In.y).multiplyScalar(-e/In.z)}getViewSize(e,t){return this.getViewBounds(e,Pl,Ll),t.subVectors(Ll,Pl)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan($s*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Sg extends xg{constructor(){super(new kt(90,1,.5,500)),this.isPointLightShadow=!0}}class fu extends hu{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Sg}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Mg extends du{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class pu extends hu{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Si=-90,Mi=1;class Ya extends Tt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new kt(Si,Mi,e,t);s.layers=this.layers,this.add(s);const r=new kt(Si,Mi,e,t);r.layers=this.layers,this.add(r);const a=new kt(Si,Mi,e,t);a.layers=this.layers,this.add(a);const o=new kt(Si,Mi,e,t);o.layers=this.layers,this.add(o);const l=new kt(Si,Mi,e,t);l.layers=this.layers,this.add(l);const c=new kt(Si,Mi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===tn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===os)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const S=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=S,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Eg extends kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}function Dl(i,e,t,n){const s=Ag(n);switch(t){case zc:return i*e;case oo:return i*e/s.components*s.byteLength;case lo:return i*e/s.components*s.byteLength;case $n:return i*e*2/s.components*s.byteLength;case co:return i*e*2/s.components*s.byteLength;case Hc:return i*e*3/s.components*s.byteLength;case ln:return i*e*4/s.components*s.byteLength;case uo:return i*e*4/s.components*s.byteLength;case Ys:case Ks:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Zs:case Js:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ga:case va:return Math.max(i,16)*Math.max(e,8)/4;case ma:case _a:return Math.max(i,8)*Math.max(e,8)/2;case xa:case Sa:case Ea:case Aa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ma:case ir:case ya:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ba:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ta:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case wa:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ra:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ca:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Pa:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case La:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Da:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ia:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ua:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Na:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Fa:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Oa:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ba:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ka:case za:case Ha:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Ga:case Va:return Math.ceil(i/4)*Math.ceil(e/4)*8;case sr:case Wa:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ag(i){switch(i){case zt:case Fc:return{byteLength:1,components:1};case as:case Oc:case hn:return{byteLength:2,components:1};case ro:case ao:return{byteLength:2,components:4};case un:case so:case en:return{byteLength:4,components:1};case Bc:case kc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:no}}));typeof window<"u"&&(window.__THREE__?Re("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=no);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function mu(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function yg(i){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const h=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){const g=d[u],S=d[f];S.start<=g.start+g.count+1?g.count=Math.max(g.count,S.start+S.count-g.start):(++u,d[u]=S)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){const S=d[f];i.bufferSubData(c,S.start*h.BYTES_PER_ELEMENT,h,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var bg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Tg=`#ifdef USE_ALPHAHASH
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
#endif`,wg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Rg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Pg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Lg=`#ifdef USE_AOMAP
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
#endif`,Dg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ig=`#ifdef USE_BATCHING
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
#endif`,Ug=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ng=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Fg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Og=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Bg=`#ifdef USE_IRIDESCENCE
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
#endif`,kg=`#ifdef USE_BUMPMAP
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
#endif`,zg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Hg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Vg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Xg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,qg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Yg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Kg=`#define PI 3.141592653589793
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
} // validated`,Zg=`vec3 transformedNormal = objectNormal;
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
#endif`,Jg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$g=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,e_="gl_FragColor = linearToOutputTexel( gl_FragColor );",t_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,n_=`#ifdef USE_ENVMAP
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
#endif`,i_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,s_=`#ifdef USE_ENVMAP
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
#endif`,r_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,a_=`#ifdef USE_ENVMAP
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
#endif`,o_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,l_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,c_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,u_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,h_=`#ifdef USE_GRADIENTMAP
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
}`,d_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,f_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,p_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,m_=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,g_=`#ifdef USE_ENVMAP
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
#endif`,__=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,v_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,x_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,S_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,M_=`PhysicalMaterial material;
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
#endif`,E_=`uniform sampler2D dfgLUT;
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
}`,A_=`
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
#endif`,y_=`#if defined( RE_IndirectDiffuse )
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
#endif`,b_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,T_=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,w_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,R_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,C_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,P_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,L_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,D_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,I_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,U_=`#if defined( USE_POINTS_UV )
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
#endif`,N_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,F_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,O_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,B_=`#if defined( USE_MORPHCOLORS )
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
#endif`,k_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,z_=`#ifdef USE_MORPHTARGETS
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
#endif`,H_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,G_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,V_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,W_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,X_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,q_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Y_=`#ifdef USE_NORMALMAP
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
#endif`,K_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Z_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,J_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Q_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,j_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,e0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,t0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,n0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,i0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,s0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,r0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,a0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,o0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,l0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,c0=`float getShadowMask() {
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
}`,u0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,h0=`#ifdef USE_SKINNING
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
#endif`,d0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,f0=`#ifdef USE_SKINNING
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
#endif`,p0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,m0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,g0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,v0=`#ifdef USE_TRANSMISSION
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
#endif`,x0=`#ifdef USE_TRANSMISSION
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
#endif`,S0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,M0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,E0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,A0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const y0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,b0=`uniform sampler2D t2D;
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
}`,T0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,w0=`uniform float backgroundBlurriness;
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
}`,R0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,C0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,P0=`#include <common>
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
}`,L0=`#if DEPTH_PACKING == 3200
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
}`,D0=`#define DISTANCE
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
}`,I0=`#define DISTANCE
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
}`,U0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,N0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,F0=`uniform float scale;
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
}`,O0=`uniform vec3 diffuse;
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
}`,B0=`#include <common>
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
}`,k0=`uniform vec3 diffuse;
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
}`,z0=`#define LAMBERT
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
}`,H0=`#define LAMBERT
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
}`,G0=`#define MATCAP
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
}`,V0=`#define MATCAP
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
}`,W0=`#define NORMAL
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
}`,X0=`#define NORMAL
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
}`,q0=`#define PHONG
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
}`,Y0=`#define PHONG
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
}`,K0=`#define STANDARD
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
}`,Z0=`#define STANDARD
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
}`,J0=`#define TOON
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
}`,Q0=`#define TOON
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
}`,$0=`uniform float size;
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
}`,j0=`uniform vec3 diffuse;
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
}`,ev=`#include <common>
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
}`,tv=`uniform vec3 color;
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
}`,nv=`uniform float rotation;
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
}`,iv=`uniform vec3 diffuse;
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
}`,ke={alphahash_fragment:bg,alphahash_pars_fragment:Tg,alphamap_fragment:wg,alphamap_pars_fragment:Rg,alphatest_fragment:Cg,alphatest_pars_fragment:Pg,aomap_fragment:Lg,aomap_pars_fragment:Dg,batching_pars_vertex:Ig,batching_vertex:Ug,begin_vertex:Ng,beginnormal_vertex:Fg,bsdfs:Og,iridescence_fragment:Bg,bumpmap_pars_fragment:kg,clipping_planes_fragment:zg,clipping_planes_pars_fragment:Hg,clipping_planes_pars_vertex:Gg,clipping_planes_vertex:Vg,color_fragment:Wg,color_pars_fragment:Xg,color_pars_vertex:qg,color_vertex:Yg,common:Kg,defaultnormal_vertex:Zg,displacementmap_pars_vertex:Jg,displacementmap_vertex:Qg,emissivemap_fragment:$g,emissivemap_pars_fragment:jg,colorspace_fragment:e_,colorspace_pars_fragment:t_,envmap_fragment:n_,envmap_common_pars_fragment:i_,envmap_pars_fragment:s_,envmap_pars_vertex:r_,envmap_physical_pars_fragment:g_,envmap_vertex:a_,fog_vertex:o_,fog_pars_vertex:l_,fog_fragment:c_,fog_pars_fragment:u_,gradientmap_pars_fragment:h_,lightmap_pars_fragment:d_,lights_lambert_fragment:f_,lights_lambert_pars_fragment:p_,lights_pars_begin:m_,lights_toon_fragment:__,lights_toon_pars_fragment:v_,lights_phong_fragment:x_,lights_phong_pars_fragment:S_,lights_physical_fragment:M_,lights_physical_pars_fragment:E_,lights_fragment_begin:A_,lights_fragment_maps:y_,lights_fragment_end:b_,lightprobes_pars_fragment:T_,logdepthbuf_fragment:w_,logdepthbuf_pars_fragment:R_,logdepthbuf_pars_vertex:C_,logdepthbuf_vertex:P_,map_fragment:L_,map_pars_fragment:D_,map_particle_fragment:I_,map_particle_pars_fragment:U_,metalnessmap_fragment:N_,metalnessmap_pars_fragment:F_,morphinstance_vertex:O_,morphcolor_vertex:B_,morphnormal_vertex:k_,morphtarget_pars_vertex:z_,morphtarget_vertex:H_,normal_fragment_begin:G_,normal_fragment_maps:V_,normal_pars_fragment:W_,normal_pars_vertex:X_,normal_vertex:q_,normalmap_pars_fragment:Y_,clearcoat_normal_fragment_begin:K_,clearcoat_normal_fragment_maps:Z_,clearcoat_pars_fragment:J_,iridescence_pars_fragment:Q_,opaque_fragment:$_,packing:j_,premultiplied_alpha_fragment:e0,project_vertex:t0,dithering_fragment:n0,dithering_pars_fragment:i0,roughnessmap_fragment:s0,roughnessmap_pars_fragment:r0,shadowmap_pars_fragment:a0,shadowmap_pars_vertex:o0,shadowmap_vertex:l0,shadowmask_pars_fragment:c0,skinbase_vertex:u0,skinning_pars_vertex:h0,skinning_vertex:d0,skinnormal_vertex:f0,specularmap_fragment:p0,specularmap_pars_fragment:m0,tonemapping_fragment:g0,tonemapping_pars_fragment:_0,transmission_fragment:v0,transmission_pars_fragment:x0,uv_pars_fragment:S0,uv_pars_vertex:M0,uv_vertex:E0,worldpos_vertex:A0,background_vert:y0,background_frag:b0,backgroundCube_vert:T0,backgroundCube_frag:w0,cube_vert:R0,cube_frag:C0,depth_vert:P0,depth_frag:L0,distance_vert:D0,distance_frag:I0,equirect_vert:U0,equirect_frag:N0,linedashed_vert:F0,linedashed_frag:O0,meshbasic_vert:B0,meshbasic_frag:k0,meshlambert_vert:z0,meshlambert_frag:H0,meshmatcap_vert:G0,meshmatcap_frag:V0,meshnormal_vert:W0,meshnormal_frag:X0,meshphong_vert:q0,meshphong_frag:Y0,meshphysical_vert:K0,meshphysical_frag:Z0,meshtoon_vert:J0,meshtoon_frag:Q0,points_vert:$0,points_frag:j0,shadow_vert:ev,shadow_frag:tv,sprite_vert:nv,sprite_frag:iv},fe={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Le}},envmap:{envMap:{value:null},envMapRotation:{value:new Le},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Le},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0},uvTransform:{value:new Le}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}}},on={basic:{uniforms:Lt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:Lt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new ze(0)},envMapIntensity:{value:1}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:Lt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:Lt([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:Lt([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new ze(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:Lt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:Lt([fe.points,fe.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:Lt([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:Lt([fe.common,fe.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:Lt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:Lt([fe.sprite,fe.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Le}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distance:{uniforms:Lt([fe.common,fe.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distance_vert,fragmentShader:ke.distance_frag},shadow:{uniforms:Lt([fe.lights,fe.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};on.physical={uniforms:Lt([on.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Le},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Le},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Le},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Le},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Le},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Le},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Le},anisotropyVector:{value:new Oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Le}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const Vs={r:0,b:0,g:0},sv=new Ze,gu=new Le;gu.set(-1,0,0,0,1,0,0,0,1);function rv(i,e,t,n,s,r){const a=new ze(0);let o=s===!0?0:1,l,c,h=null,d=0,u=null;function f(M){let T=M.isScene===!0?M.background:null;if(T&&T.isTexture){const A=M.backgroundBlurriness>0;T=e.get(T,A)}return T}function g(M){let T=!1;const A=f(M);A===null?m(a,o):A&&A.isColor&&(m(A,1),T=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function S(M,T){const A=f(T);A&&A.isCubeTexture?(c===void 0&&(c=new wt(new dn(1,1,1),new jn({name:"BackgroundCubeMaterial",uniforms:Li(on.backgroundCube.uniforms),vertexShader:on.backgroundCube.vertexShader,fragmentShader:on.backgroundCube.fragmentShader,side:Ft,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,b,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=A,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(sv.makeRotationFromEuler(T.backgroundRotation)).transpose(),A.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(gu),c.material.toneMapped=We.getTransfer(A.colorSpace)!==$e,(h!==A||d!==A.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=A,d=A.version,u=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):A&&A.isTexture&&(l===void 0&&(l=new wt(new bn(2,2),new jn({name:"BackgroundMaterial",uniforms:Li(on.background.uniforms),vertexShader:on.background.vertexShader,fragmentShader:on.background.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=A,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=We.getTransfer(A.colorSpace)!==$e,A.matrixAutoUpdate===!0&&A.updateMatrix(),l.material.uniforms.uvTransform.value.copy(A.matrix),(h!==A||d!==A.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=A,d=A.version,u=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function m(M,T){M.getRGB(Vs,cu(i)),t.buffers.color.setClear(Vs.r,Vs.g,Vs.b,T,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,T=1){a.set(M),o=T,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,m(a,o)},render:g,addToRenderList:S,dispose:p}}function av(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let r=s,a=!1;function o(I,O,W,L,G){let Y=!1;const H=d(I,L,W,O);r!==H&&(r=H,c(r.object)),Y=f(I,L,W,G),Y&&g(I,L,W,G),G!==null&&e.update(G,i.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,A(I,O,W,L),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return i.createVertexArray()}function c(I){return i.bindVertexArray(I)}function h(I){return i.deleteVertexArray(I)}function d(I,O,W,L){const G=L.wireframe===!0;let Y=n[O.id];Y===void 0&&(Y={},n[O.id]=Y);const H=I.isInstancedMesh===!0?I.id:0;let j=Y[H];j===void 0&&(j={},Y[H]=j);let V=j[W.id];V===void 0&&(V={},j[W.id]=V);let Z=V[G];return Z===void 0&&(Z=u(l()),V[G]=Z),Z}function u(I){const O=[],W=[],L=[];for(let G=0;G<t;G++)O[G]=0,W[G]=0,L[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:W,attributeDivisors:L,object:I,attributes:{},index:null}}function f(I,O,W,L){const G=r.attributes,Y=O.attributes;let H=0;const j=W.getAttributes();for(const V in j)if(j[V].location>=0){const ee=G[V];let Me=Y[V];if(Me===void 0&&(V==="instanceMatrix"&&I.instanceMatrix&&(Me=I.instanceMatrix),V==="instanceColor"&&I.instanceColor&&(Me=I.instanceColor)),ee===void 0||ee.attribute!==Me||Me&&ee.data!==Me.data)return!0;H++}return r.attributesNum!==H||r.index!==L}function g(I,O,W,L){const G={},Y=O.attributes;let H=0;const j=W.getAttributes();for(const V in j)if(j[V].location>=0){let ee=Y[V];ee===void 0&&(V==="instanceMatrix"&&I.instanceMatrix&&(ee=I.instanceMatrix),V==="instanceColor"&&I.instanceColor&&(ee=I.instanceColor));const Me={};Me.attribute=ee,ee&&ee.data&&(Me.data=ee.data),G[V]=Me,H++}r.attributes=G,r.attributesNum=H,r.index=L}function S(){const I=r.newAttributes;for(let O=0,W=I.length;O<W;O++)I[O]=0}function m(I){p(I,0)}function p(I,O){const W=r.newAttributes,L=r.enabledAttributes,G=r.attributeDivisors;W[I]=1,L[I]===0&&(i.enableVertexAttribArray(I),L[I]=1),G[I]!==O&&(i.vertexAttribDivisor(I,O),G[I]=O)}function M(){const I=r.newAttributes,O=r.enabledAttributes;for(let W=0,L=O.length;W<L;W++)O[W]!==I[W]&&(i.disableVertexAttribArray(W),O[W]=0)}function T(I,O,W,L,G,Y,H){H===!0?i.vertexAttribIPointer(I,O,W,G,Y):i.vertexAttribPointer(I,O,W,L,G,Y)}function A(I,O,W,L){S();const G=L.attributes,Y=W.getAttributes(),H=O.defaultAttributeValues;for(const j in Y){const V=Y[j];if(V.location>=0){let Z=G[j];if(Z===void 0&&(j==="instanceMatrix"&&I.instanceMatrix&&(Z=I.instanceMatrix),j==="instanceColor"&&I.instanceColor&&(Z=I.instanceColor)),Z!==void 0){const ee=Z.normalized,Me=Z.itemSize,De=e.get(Z);if(De===void 0)continue;const J=De.buffer,pe=De.type,ve=De.bytesPerElement,be=pe===i.INT||pe===i.UNSIGNED_INT||Z.gpuType===so;if(Z.isInterleavedBufferAttribute){const me=Z.data,Ne=me.isInterleavedBuffer===!0?me.stride:me.itemSize,lt=Z.offset;if(me.isInstancedInterleavedBuffer||me.isInstancedBufferAttribute){for(let we=0;we<V.locationSize;we++)p(V.location+we,me.meshPerAttribute);I.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let we=0;we<V.locationSize;we++)m(V.location+we);i.bindBuffer(i.ARRAY_BUFFER,J);for(let we=0;we<V.locationSize;we++)T(V.location+we,Me/V.locationSize,pe,ee,Ne*ve,(lt+Me/V.locationSize*we)*ve,be)}else{if(Z.isInstancedBufferAttribute){for(let me=0;me<V.locationSize;me++)p(V.location+me,Z.meshPerAttribute);I.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let me=0;me<V.locationSize;me++)m(V.location+me);i.bindBuffer(i.ARRAY_BUFFER,J);for(let me=0;me<V.locationSize;me++)T(V.location+me,Me/V.locationSize,pe,ee,Me*ve,Me/V.locationSize*me*ve,be)}}else if(H!==void 0){const ee=H[j];if(ee!==void 0)switch(ee.length){case 2:i.vertexAttrib2fv(V.location,ee);break;case 3:i.vertexAttrib3fv(V.location,ee);break;case 4:i.vertexAttrib4fv(V.location,ee);break;default:i.vertexAttrib1fv(V.location,ee)}}}}M()}function w(){P();for(const I in n){const O=n[I];for(const W in O){const L=O[W];for(const G in L){const Y=L[G];for(const H in Y)h(Y[H].object),delete Y[H];delete L[G]}}delete n[I]}}function b(I){if(n[I.id]===void 0)return;const O=n[I.id];for(const W in O){const L=O[W];for(const G in L){const Y=L[G];for(const H in Y)h(Y[H].object),delete Y[H];delete L[G]}}delete n[I.id]}function _(I){for(const O in n){const W=n[O];for(const L in W){const G=W[L];if(G[I.id]===void 0)continue;const Y=G[I.id];for(const H in Y)h(Y[H].object),delete Y[H];delete G[I.id]}}}function E(I){for(const O in n){const W=n[O],L=I.isInstancedMesh===!0?I.id:0,G=W[L];if(G!==void 0){for(const Y in G){const H=G[Y];for(const j in H)h(H[j].object),delete H[j];delete G[Y]}delete W[L],Object.keys(W).length===0&&delete n[O]}}}function P(){R(),a=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:P,resetDefaultState:R,dispose:w,releaseStatesOfGeometry:b,releaseStatesOfObject:E,releaseStatesOfProgram:_,initAttributes:S,enableAttribute:m,disableUnusedAttributes:M}}function ov(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];t.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function lv(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const _=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(_){return!(_!==ln&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){const E=_===hn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==zt&&_!==en&&!E&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(Re("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=t.logarithmicDepthBuffer===!0&&d===!1;t.reversedDepthBuffer===!0&&d===!1&&Re("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&d===!0&&Re("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),A=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:S,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:T,maxFragmentUniforms:A,maxSamples:w,samples:b}}function cv(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new Un,o=new Le,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){const g=d.clippingPlanes,S=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const M=r?0:n,T=M*4;let A=p.clippingState||null;l.value=A,A=h(g,u,T,f);for(let w=0;w!==T;++w)A[w]=t[w];p.clippingState=A,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,f,g){const S=d!==null?d.length:0;let m=null;if(S!==0){if(m=l.value,g!==!0||m===null){const p=f+S*4,M=u.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let T=0,A=f;T!==S;++T,A+=4)a.copy(d[T]).applyMatrix4(M,o),a.normal.toArray(m,A),m[A+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,m}}class mo extends cn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new au(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new dn(5,5,5),r=new jn({name:"CubemapFromEquirect",uniforms:Li(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ft,blending:bi});r.uniforms.tEquirect.value=t;const a=new wt(s,r),o=t.minFilter;return t.minFilter===Fn&&(t.minFilter=Nt),new Ya(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}const Il=256,uv=3,hv=20,_u=256,vu=16,dv=3,fv=new k,pv=new ze;class dr{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Ya(1,10,null),this._boxMesh=new wt(new dn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=fv}=r,l=this._renderer;this._setSize(a);const c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);const d=l.autoClear,u=l.autoClearColor,f=l.autoClearDepth,g=l.autoClearStencil,S=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,S===null&&(e.background=l.getClearColor(pv));const m=new Ya(n,s,h);return m.position.copy(o),m.update(l,e),l.autoClear=d,l.autoClearColor=u,l.autoClearDepth=f,l.autoClearStencil=g,e.background=S,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Il,Om(e))}_fromTexture(e,t){e.mapping===wi||e.mapping===ss?this._setSize(e.image.length===0?Il:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){const e=this._cubeSize,t=Ul(e,!1,!1),n=Math.log2(e)-uv;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Ul(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){const s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;const a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===wi||e.mapping===ss?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fl()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Nl()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=mv(),this._integrationMaterial=gv());const t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/vu);for(let a=0;a<=n;a++){const o=dr.lodToRoughness(a,n);if(a>n-dv)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{const l=o>0?Math.log2(t)+.5*Math.log2(6/(_u*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=_v());const n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}}function Ul(i,e,t){return new mo(i,{minFilter:Fn,generateMipmaps:e,type:hn,colorSpace:rr,depthBuffer:t})}function us(i,e,t){return new jn({name:i,uniforms:e,vertexShader:ke.cube_vert,fragmentShader:t,side:Ft,blending:bi,depthTest:!1,depthWrite:!1})}function mv(){return us("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${_u}u

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
	`)}function gv(){return us("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:vu}},`

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
	`)}function _v(){return us("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${hv}
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
	`)}function Nl(){return us("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Fl(){return us("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function vv(i){let e=new WeakMap,t=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){const f=u.mapping;if(f===Tr||f===wr)if(e.has(u)){const g=e.get(u).texture;return o(g,u.mapping)}else{const g=u.image;if(g&&g.height>0){const S=new mo(g.height);return S.fromEquirectangularTexture(i,u),e.set(u,S),u.addEventListener("dispose",c),o(S.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){const f=u.mapping,g=f===Tr||f===wr,S=f===wi||f===ss;if(g||S){let m=t.get(u);const p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new dr(i)),m=g?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{const M=u.image;return g&&M&&M.height>0||S&&M&&l(M)?(n===null&&(n=new dr(i)),m=g?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,f){return f===Tr?u.mapping=wi:f===wr&&(u.mapping=ss),u}function l(u){let f=0;const g=6;for(let S=0;S<g;S++)u[S]!==void 0&&f++;return f===g}function c(u){const f=u.target;f.removeEventListener("dispose",c);const g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function h(u){const f=u.target;f.removeEventListener("dispose",h);const g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function xv(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Qs("WebGLRenderer: "+n+" extension not supported."),s}}}function Sv(i,e,t,n){const s={},r=new WeakMap,a=new FinalizationRegistry(g=>delete s[g]);function o(g){l(g.target)}function l(g){g.index!==null&&e.remove(g.index);for(const m in g.attributes)e.remove(g.attributes[m]);g.removeEventListener("dispose",o),delete s[g.id],a.unregister(g);const S=r.get(g);S&&(e.remove(S),r.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function c(g,S){return s[S.id]!==void 0||(S.addEventListener("dispose",o),s[S.id]=new WeakRef(S),a.register(S,S.id,S),t.memory.geometries++),S}function h(g){const S=g.attributes;for(const m in S)e.update(S[m],i.ARRAY_BUFFER)}function d(g){const S=g.index,m=g.attributes.position;let p=0;if(m===void 0)return;const M=S!==null?S.array.length:m.array.length/3-1,T=m.count>=65535?eu:jc,A=new T(Math.ceil(M/3)*6,1),w=A.array;if(S!==null){const _=S.array;p=S.version;for(let E=0,P=0;E<M;E+=3){const R=_[E+0],I=_[E+1],O=_[E+2];w[P++]=R,w[P++]=I,w[P++]=I,w[P++]=O,w[P++]=O,w[P++]=R}}else{p=m.version;for(let _=0,E=0;_<M;_+=3){const P=_+0,R=_+1,I=_+2;w[E++]=P,w[E++]=R,w[E++]=R,w[E++]=I,w[E++]=I,w[E++]=P}}A.version=p;const b=r.get(g);b&&e.remove(b),r.set(g,A)}function u(g){const S=r.get(g);if(S){const m=g.index;m!==null&&S.version<m.version&&d(g)}else d(g);return r.get(g)}function f(){for(const g in s){const S=s[g].deref();S!==void 0&&l(S)}}return{get:c,update:h,getWireframeAttribute:u,dispose:f}}function Mv(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,u){i.drawElements(n,u,r,d*a),t.update(u,n,1)}function c(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,d*a,f),t.update(u,n,f))}function h(d,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let S=0;for(let m=0;m<f;m++)S+=u[m];t.update(S,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Ev(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Ye("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Av(i,e,t){const n=new WeakMap,s=new at;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==d){let P=function(){_.dispose(),n.delete(o),o.removeEventListener("dispose",P)};u!==void 0&&u.texture.dispose();const f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,S=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let T=0;f===!0&&(T=1),g===!0&&(T=2),S===!0&&(T=3);let A=o.attributes.position.count*T,w=1;A>e.maxTextureSize&&(w=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const b=new Float32Array(A*w*4*d),_=new Zc(b,A,w,d);_.type=en,_.needsUpdate=!0;const E=T*4;for(let R=0;R<d;R++){const I=m[R],O=p[R],W=M[R],L=A*w*4*R;for(let G=0;G<I.count;G++){const Y=G*E;f===!0&&(s.fromBufferAttribute(I,G),b[L+Y+0]=s.x,b[L+Y+1]=s.y,b[L+Y+2]=s.z,b[L+Y+3]=0),g===!0&&(s.fromBufferAttribute(O,G),b[L+Y+4]=s.x,b[L+Y+5]=s.y,b[L+Y+6]=s.z,b[L+Y+7]=0),S===!0&&(s.fromBufferAttribute(W,G),b[L+Y+8]=s.x,b[L+Y+9]=s.y,b[L+Y+10]=s.z,b[L+Y+11]=W.itemSize===4?s.w:1)}}u={count:d,texture:_,size:new Oe(A,w)},n.set(o,u),o.addEventListener("dispose",P)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let S=0;S<c.length;S++)f+=c[S];const g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function yv(i,e,t,n,s){let r=new WeakMap;function a(c){const h=s.render.frame,d=c.geometry,u=e.get(c,d);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}const bv={[Rc]:"LINEAR_TONE_MAPPING",[Cc]:"REINHARD_TONE_MAPPING",[Pc]:"CINEON_TONE_MAPPING",[Lc]:"ACES_FILMIC_TONE_MAPPING",[Ic]:"AGX_TONE_MAPPING",[Uc]:"NEUTRAL_TONE_MAPPING",[Dc]:"CUSTOM_TONE_MAPPING"};function Tv(i,e,t,n,s,r){const a=new cn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null,c=null;const h=new fn;h.setAttribute("position",new Zt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Zt([0,2,0,0,2,0],2));const d=new fg({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new wt(h,d),f=new Mg(-1,1,1,-1,0,1);let g=null,S=null,m=!1,p,M=null,T=[],A=!1;this.setSize=function(w,b){a.setSize(w,b),o!==null&&o.setSize(w,b),l!==null&&l.setSize(w,b);for(let _=0;_<T.length;_++){const E=T[_];E.setSize&&E.setSize(w,b)}},this.setEffects=function(w){T=w,A=T.length>0&&T[0].isRenderPass===!0;const b=a.width,_=a.height;T.length>0&&o===null&&(o=new cn(b,_,{type:hn,depthBuffer:!1,stencilBuffer:!1}),l=new cn(b,_,{type:hn,depthBuffer:!1,stencilBuffer:!1}));const E=s===!0&&T.some(P=>P.needsDepthTexture===!0);E!==(a.depthTexture!==null)&&(E===!0&&c===null&&(c=new Pi(b,_),r===!0&&(c.format=On,c.type=Ri)),a.dispose(),a.depthTexture=E?c:null,a.resolveDepthBuffer=E,a.storeMultisampledDepthBuffer=E);for(let P=0;P<T.length;P++){const R=T[P];R.setSize&&R.setSize(b,_),E&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(c)}},this.begin=function(w,b){if(m||w.toneMapping===En&&T.length===0)return!1;if(M=b,b!==null){const _=b.width,E=b.height;(a.width!==_||a.height!==E)&&this.setSize(_,E)}return A===!1&&w.setRenderTarget(a),p=w.toneMapping,w.toneMapping=En,!0},this.hasRenderPass=function(){return A},this.end=function(w,b){w.toneMapping=p,m=!0;let _=a,E=o;for(let P=0;P<T.length;P++){const R=T[P];R.enabled!==!1&&(R.render(w,E,_,b),R.needsSwap!==!1&&(_=E,E=E===o?l:o))}if(g!==w.outputColorSpace||S!==w.toneMapping){g=w.outputColorSpace,S=w.toneMapping,d.defines={},We.getTransfer(g)===$e&&(d.defines.SRGB_TRANSFER="");const P=bv[S];P&&(d.defines[P]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=_.texture,w.setRenderTarget(M),w.render(u,f),M=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}const xu=new bt,Su=new Pi(1,1),Mu=new ou(1),Eu=new Zc,Au=new Vm,yu=new au,Ol=[],Bl=[],kl=new Float32Array(16),zl=new Float32Array(9),Hl=new Float32Array(4);function Oi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Ol[s];if(r===void 0&&(r=new Float32Array(s),Ol[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function ft(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function pt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Mr(i,e){let t=Bl[e];t===void 0&&(t=new Int32Array(e),Bl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function wv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Rv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;i.uniform2fv(this.addr,e),pt(t,e)}}function Cv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ft(t,e))return;i.uniform3fv(this.addr,e),pt(t,e)}}function Pv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;i.uniform4fv(this.addr,e),pt(t,e)}}function Lv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ft(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),pt(t,e)}else{if(ft(t,n))return;Hl.set(n),i.uniformMatrix2fv(this.addr,!1,Hl),pt(t,n)}}function Dv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ft(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),pt(t,e)}else{if(ft(t,n))return;zl.set(n),i.uniformMatrix3fv(this.addr,!1,zl),pt(t,n)}}function Iv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ft(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),pt(t,e)}else{if(ft(t,n))return;kl.set(n),i.uniformMatrix4fv(this.addr,!1,kl),pt(t,n)}}function Uv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Nv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;i.uniform2iv(this.addr,e),pt(t,e)}}function Fv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ft(t,e))return;i.uniform3iv(this.addr,e),pt(t,e)}}function Ov(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;i.uniform4iv(this.addr,e),pt(t,e)}}function Bv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function kv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;i.uniform2uiv(this.addr,e),pt(t,e)}}function zv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ft(t,e))return;i.uniform3uiv(this.addr,e),pt(t,e)}}function Hv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;i.uniform4uiv(this.addr,e),pt(t,e)}}function Er(i){return i.version===0&&(i.compareFunction=Wc,i.needsUpdate=!0),i}function Gv(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Er(Su):r=xu,t.setTexture2D(e||r,s)}function Vv(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Au,s)}function Wv(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Er(Mu):r=yu,t.setTextureCube(e||r,s)}function Xv(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Eu,s)}function qv(i){switch(i){case 5126:return wv;case 35664:return Rv;case 35665:return Cv;case 35666:return Pv;case 35674:return Lv;case 35675:return Dv;case 35676:return Iv;case 5124:case 35670:return Uv;case 35667:case 35671:return Nv;case 35668:case 35672:return Fv;case 35669:case 35673:return Ov;case 5125:return Bv;case 36294:return kv;case 36295:return zv;case 36296:return Hv;case 35678:case 36198:case 36298:case 36306:case 35682:return Gv;case 35679:case 36299:case 36307:return Vv;case 35680:case 36300:case 36308:case 36293:return Wv;case 36289:case 36303:case 36311:case 36292:return Xv}}function Yv(i,e){i.uniform1fv(this.addr,e)}function Kv(i,e){const t=Oi(e,this.size,2);i.uniform2fv(this.addr,t)}function Zv(i,e){const t=Oi(e,this.size,3);i.uniform3fv(this.addr,t)}function Jv(i,e){const t=Oi(e,this.size,4);i.uniform4fv(this.addr,t)}function Qv(i,e){const t=Oi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function $v(i,e){const t=Oi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function jv(i,e){const t=Oi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function ex(i,e){i.uniform1iv(this.addr,e)}function tx(i,e){i.uniform2iv(this.addr,e)}function nx(i,e){i.uniform3iv(this.addr,e)}function ix(i,e){i.uniform4iv(this.addr,e)}function sx(i,e){i.uniform1uiv(this.addr,e)}function rx(i,e){i.uniform2uiv(this.addr,e)}function ax(i,e){i.uniform3uiv(this.addr,e)}function ox(i,e){i.uniform4uiv(this.addr,e)}function lx(i,e,t){const n=this.cache,s=e.length,r=Mr(t,s);ft(n,r)||(i.uniform1iv(this.addr,r),pt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Er(Su):a=xu;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function cx(i,e,t){const n=this.cache,s=e.length,r=Mr(t,s);ft(n,r)||(i.uniform1iv(this.addr,r),pt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Au,r[a])}function ux(i,e,t){const n=this.cache,s=e.length,r=Mr(t,s);ft(n,r)||(i.uniform1iv(this.addr,r),pt(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=Er(Mu):a=yu;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function hx(i,e,t){const n=this.cache,s=e.length,r=Mr(t,s);ft(n,r)||(i.uniform1iv(this.addr,r),pt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Eu,r[a])}function dx(i){switch(i){case 5126:return Yv;case 35664:return Kv;case 35665:return Zv;case 35666:return Jv;case 35674:return Qv;case 35675:return $v;case 35676:return jv;case 5124:case 35670:return ex;case 35667:case 35671:return tx;case 35668:case 35672:return nx;case 35669:case 35673:return ix;case 5125:return sx;case 36294:return rx;case 36295:return ax;case 36296:return ox;case 35678:case 36198:case 36298:case 36306:case 35682:return lx;case 35679:case 36299:case 36307:return cx;case 35680:case 36300:case 36308:case 36293:return ux;case 36289:case 36303:case 36311:case 36292:return hx}}class fx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=qv(t.type)}}class px{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=dx(t.type)}}class mx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const na=/(\w+)(\])?(\[|\.)?/g;function Gl(i,e){i.seq.push(e),i.map[e.id]=e}function gx(i,e,t){const n=i.name,s=n.length;for(na.lastIndex=0;;){const r=na.exec(n),a=na.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Gl(t,c===void 0?new fx(o,i,e):new px(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new mx(o),Gl(t,d)),t=d}}}class js{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);gx(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function Vl(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const _x=37297;let vx=0;function xx(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Wl=new Le;function Sx(i){We._getMatrix(Wl,We.workingColorSpace,i);const e=`mat3( ${Wl.elements.map(t=>t.toFixed(4))} )`;switch(We.getTransfer(i)){case ar:return[e,"LinearTransferOETF"];case $e:return[e,"sRGBTransferOETF"];default:return Re("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Xl(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+xx(i.getShaderSource(e),o)}else return r}function Mx(i,e){const t=Sx(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const Ex={[Rc]:"Linear",[Cc]:"Reinhard",[Pc]:"Cineon",[Lc]:"ACESFilmic",[Ic]:"AgX",[Uc]:"Neutral",[Dc]:"Custom"};function Ax(i,e){const t=Ex[e];return t===void 0?(Re("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ws=new k;function yx(){We.getLuminanceCoefficients(Ws);const i=Ws.x.toFixed(4),e=Ws.y.toFixed(4),t=Ws.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function bx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(es).join(`
`)}function Tx(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function wx(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function es(i){return i!==""}function ql(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Yl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Rx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ka(i){return i.replace(Rx,Cx)}function Cx(i,e){const t=ke[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Ka(t)}const Px=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kl(i){return i.replace(Px,Lx)}function Lx(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Zl(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}const Dx={[qs]:"SHADOWMAP_TYPE_PCF",[ji]:"SHADOWMAP_TYPE_VSM"};function Ix(i){return Dx[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Ux={[ss]:"ENVMAP_MODE_REFRACTION"};function Nx(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Ux[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Fx={[io]:"ENVMAP_BLENDING_MULTIPLY",[Mm]:"ENVMAP_BLENDING_MIX",[Em]:"ENVMAP_BLENDING_ADD"};function Ox(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Fx[i.combine]||"ENVMAP_BLENDING_NONE"}function Bx(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Ix(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Nx(t),d=Ox(t),u=bx(t),f=Tx(r),g=s.createProgram();let S,m,p=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(es).join(`
`),S.length>0&&(S+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(es).join(`
`),m.length>0&&(m+=`
`)):(S=[Zl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(es).join(`
`),m=[Zl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==En?"#define TONE_MAPPING":"",t.toneMapping!==En?ke.tonemapping_pars_fragment:"",t.toneMapping!==En?Ax("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,Mx("linearToOutputTexel",t.outputColorSpace),yx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(es).join(`
`)),a=Ka(a),a=ql(a,t),a=Yl(a,t),o=Ka(o),o=ql(o,t),o=Yl(o,t),a=Kl(a),o=Kl(o),t.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,S=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,m=["#define varying in",t.glslVersion===$o?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===$o?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const M=p+S+a,T=p+m+o,A=Vl(s,s.VERTEX_SHADER,M),w=Vl(s,s.FRAGMENT_SHADER,T);s.attachShader(g,A),s.attachShader(g,w),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function b(R){if(i.debug.checkShaderErrors){const I=s.getProgramInfoLog(g)||"",O=s.getShaderInfoLog(A)||"",W=s.getShaderInfoLog(w)||"",L=I.trim(),G=O.trim(),Y=W.trim();let H=!0,j=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,A,w);else{const V=Xl(s,A,"vertex"),Z=Xl(s,w,"fragment");Ye("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+L+`
`+V+`
`+Z)}else L!==""?Re("WebGLProgram: Program Info Log:",L):(G===""||Y==="")&&(j=!1);j&&(R.diagnostics={runnable:H,programLog:L,vertexShader:{log:G,prefix:S},fragmentShader:{log:Y,prefix:m}})}s.deleteShader(A),s.deleteShader(w),_=new js(s,g),E=wx(s,g)}let _;this.getUniforms=function(){return _===void 0&&b(this),_};let E;this.getAttributes=function(){return E===void 0&&b(this),E};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(g,_x)),P},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=vx++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=A,this.fragmentShader=w,this}let kx=0;class zx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Hx(e),t.set(e,n)),n}}class Hx{constructor(e){this.id=kx++,this.code=e,this.usedTimes=0}}function Gx(i){return i===$n||i===ir||i===sr}function Vx(i,e,t,n,s,r){const a=new Jc,o=new zx,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(_){return l.add(_),_===0?"uv":`uv${_}`}function g(_,E,P,R,I,O){const W=R.fog,L=I.geometry,G=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?R.environment:null,Y=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,H=e.get(_.envMap||G,Y),j=u[_.type];let V=n.precision;_.precision!==null&&(V=n.getMaxPrecision(_.precision),V!==_.precision&&Re("WebGLProgram.getParameters:",_.precision,"not supported, using",V,"instead."));const Z=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,ee=Z!==void 0?Z.length:0;let Me=0;L.morphAttributes.position!==void 0&&(Me=1),L.morphAttributes.normal!==void 0&&(Me=2),L.morphAttributes.color!==void 0&&(Me=3);let De,J,pe,ve;if(j){const de=on[j];De=de.vertexShader,J=de.fragmentShader}else{De=_.vertexShader,J=_.fragmentShader;const de=o.getVertexShaderStage(_),Qe=o.getFragmentShaderStage(_);o.update(_,de,Qe),pe=de.id,ve=Qe.id}const be=i.getRenderTarget(),me=i.state.buffers.depth.getReversed(),Ne=I.isInstancedMesh===!0,lt=I.isBatchedMesh===!0,we=!!_.map,Je=!!_.matcap,je=!!H,He=je&&H.isPMREMTexture===!0,xt=!!_.aoMap,ht=!!_.lightMap,Dt=!!_.bumpMap&&_.wireframe===!1,st=!!_.normalMap,sn=!!_.displacementMap,mt=!!_.emissiveMap,Vt=!!_.metalnessMap,Wt=!!_.roughnessMap,Xt=_.anisotropy>0,U=_.clearcoat>0,qt=_.diffuseRoughness>0,nt=_.dispersion>0,it=_.retroreflectivity>0,he=_.iridescence>0,dt=_.sheen>0,Te=_.transmission>0,Pe=Xt&&!!_.anisotropyMap,y=U&&!!_.clearcoatMap,v=U&&!!_.clearcoatNormalMap,F=U&&!!_.clearcoatRoughnessMap,te=qt&&!!_.diffuseRoughnessMap,$=he&&!!_.iridescenceMap,se=he&&!!_.iridescenceThicknessMap,ce=dt&&!!_.sheenColorMap,q=dt&&!!_.sheenRoughnessMap,K=!!_.specularMap,ae=!!_.specularColorMap,C=!!_.specularIntensityMap,Q=Te&&!!_.transmissionMap,X=Te&&!!_.thicknessMap,oe=!!_.gradientMap,ie=!!_.alphaMap,re=_.alphaTest>0,Ae=!!_.alphaHash,Be=!!_.extensions;let ne=En;_.toneMapped&&(be===null||be.isXRRenderTarget===!0)&&(ne=i.toneMapping);const ye=He?H.isCompressedCubeTexture?H.image[0].mipmaps:H.mipmaps:null,Fe={shaderID:j,shaderType:_.type,shaderName:_.name,vertexShader:De,fragmentShader:J,defines:_.defines,customVertexShaderID:pe,customFragmentShaderID:ve,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:V,batching:lt,batchingColor:lt&&I._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&I.instanceColor!==null,instancingMorph:Ne&&I.morphTexture!==null,outputColorSpace:be===null?i.outputColorSpace:be.isXRRenderTarget===!0?be.texture.colorSpace:We.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:we,matcap:Je,envMap:je,envMapMode:je&&H.mapping,envMapPMREM:He,envMapMaxLod:He?ye.length-1:null,envMapSize:He?ye[0].width:null,aoMap:xt,lightMap:ht,bumpMap:Dt,normalMap:st,displacementMap:sn,emissiveMap:mt,normalMapObjectSpace:st&&_.normalMapType===bm,normalMapTangentSpace:st&&_.normalMapType===Xa,packedNormalMap:st&&_.normalMapType===Xa&&Gx(_.normalMap.format),metalnessMap:Vt,roughnessMap:Wt,anisotropy:Xt,anisotropyMap:Pe,clearcoat:U,clearcoatMap:y,clearcoatNormalMap:v,clearcoatRoughnessMap:F,diffuseRoughness:qt,diffuseRoughnessMap:te,dispersion:nt,retroreflection:it,iridescence:he,iridescenceMap:$,iridescenceThicknessMap:se,sheen:dt,sheenColorMap:ce,sheenRoughnessMap:q,specularMap:K,specularColorMap:ae,specularIntensityMap:C,transmission:Te,transmissionMap:Q,thicknessMap:X,gradientMap:oe,opaque:_.transparent===!1&&_.blending===ts&&_.alphaToCoverage===!1,alphaMap:ie,alphaTest:re,alphaHash:Ae,combine:_.combine,mapUv:we&&f(_.map.channel),aoMapUv:xt&&f(_.aoMap.channel),lightMapUv:ht&&f(_.lightMap.channel),bumpMapUv:Dt&&f(_.bumpMap.channel),normalMapUv:st&&f(_.normalMap.channel),displacementMapUv:sn&&f(_.displacementMap.channel),emissiveMapUv:mt&&f(_.emissiveMap.channel),metalnessMapUv:Vt&&f(_.metalnessMap.channel),roughnessMapUv:Wt&&f(_.roughnessMap.channel),anisotropyMapUv:Pe&&f(_.anisotropyMap.channel),clearcoatMapUv:y&&f(_.clearcoatMap.channel),clearcoatNormalMapUv:v&&f(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:F&&f(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:te&&f(_.diffuseRoughnessMap.channel),iridescenceMapUv:$&&f(_.iridescenceMap.channel),iridescenceThicknessMapUv:se&&f(_.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&f(_.sheenColorMap.channel),sheenRoughnessMapUv:q&&f(_.sheenRoughnessMap.channel),specularMapUv:K&&f(_.specularMap.channel),specularColorMapUv:ae&&f(_.specularColorMap.channel),specularIntensityMapUv:C&&f(_.specularIntensityMap.channel),transmissionMapUv:Q&&f(_.transmissionMap.channel),thicknessMapUv:X&&f(_.thicknessMap.channel),alphaMapUv:ie&&f(_.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(st||Xt),vertexNormals:!!L.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!L.attributes.uv&&(we||ie),fog:!!W,useFog:_.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||L.attributes.normal===void 0&&st===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:me,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:Me,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:O.filter(de=>de.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:ne,decodeVideoTexture:we&&_.map.isVideoTexture===!0&&We.getTransfer(_.map.colorSpace)===$e,decodeVideoTextureEmissive:mt&&_.emissiveMap.isVideoTexture===!0&&We.getTransfer(_.emissiveMap.colorSpace)===$e,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Sn,flipSided:_.side===Ft,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Be&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Be&&_.extensions.multiDraw===!0||lt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Fe.vertexUv1s=l.has(1),Fe.vertexUv2s=l.has(2),Fe.vertexUv3s=l.has(3),l.clear(),Fe}function S(_){const E=[];if(_.shaderID?E.push(_.shaderID):(E.push(_.customVertexShaderID),E.push(_.customFragmentShaderID)),_.defines!==void 0)for(const P in _.defines)E.push(P),E.push(_.defines[P]);return _.isRawShaderMaterial===!1&&(m(E,_),p(E,_),E.push(i.outputColorSpace)),E.push(_.customProgramCacheKey),E.join()}function m(_,E){_.push(E.precision),_.push(E.outputColorSpace),_.push(E.envMapMode),_.push(E.envMapPMREM),_.push(E.envMapMaxLod),_.push(E.envMapSize),_.push(E.mapUv),_.push(E.alphaMapUv),_.push(E.lightMapUv),_.push(E.aoMapUv),_.push(E.bumpMapUv),_.push(E.normalMapUv),_.push(E.displacementMapUv),_.push(E.emissiveMapUv),_.push(E.metalnessMapUv),_.push(E.roughnessMapUv),_.push(E.anisotropyMapUv),_.push(E.clearcoatMapUv),_.push(E.clearcoatNormalMapUv),_.push(E.clearcoatRoughnessMapUv),_.push(E.diffuseRoughnessMapUv),_.push(E.iridescenceMapUv),_.push(E.iridescenceThicknessMapUv),_.push(E.sheenColorMapUv),_.push(E.sheenRoughnessMapUv),_.push(E.specularMapUv),_.push(E.specularColorMapUv),_.push(E.specularIntensityMapUv),_.push(E.transmissionMapUv),_.push(E.thicknessMapUv),_.push(E.combine),_.push(E.fogExp2),_.push(E.sizeAttenuation),_.push(E.morphTargetsCount),_.push(E.numSunLights),_.push(E.numDirLights),_.push(E.numPointLights),_.push(E.numSpotLights),_.push(E.numSpotLightMaps),_.push(E.numHemiLights),_.push(E.numRectAreaLights),_.push(E.numSunLightShadows),_.push(E.numDirLightShadows),_.push(E.numPointLightShadows),_.push(E.numSpotLightShadows),_.push(E.numSpotLightShadowsWithMaps),_.push(E.numLightProbes),_.push(E.numLightProbeGrids),_.push(E.shadowMapType),_.push(E.toneMapping),_.push(E.numClippingPlanes),_.push(E.numClipIntersection),_.push(E.depthPacking)}function p(_,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.diffuseRoughness&&a.enable(25),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function M(_){const E=u[_.type];let P;if(E){const R=on[E];P=ug.clone(R.uniforms)}else P=_.uniforms;return P}function T(_,E){let P=h.get(E);return P!==void 0?++P.usedTimes:(P=new Bx(i,E,_,s),c.push(P),h.set(E,P)),P}function A(_){if(--_.usedTimes===0){const E=c.indexOf(_);c[E]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function w(_){o.remove(_)}function b(){o.dispose()}return{getParameters:g,getProgramCacheKey:S,getUniforms:M,acquireProgram:T,releaseProgram:A,releaseShaderCache:w,programs:c,dispose:b}}function Wx(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Xx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Jl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ql(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,g,S,m,p){let M=i[e];return M===void 0?(M={id:u.id,object:u,geometry:f,material:g,materialVariant:a(u),groupOrder:S,renderOrder:u.renderOrder,z:m,group:p},i[e]=M):(M.id=u.id,M.object=u,M.geometry=f,M.material=g,M.materialVariant=a(u),M.groupOrder=S,M.renderOrder=u.renderOrder,M.z=m,M.group=p),e++,M}function l(u,f,g,S,m,p,M){M.reversedDepth===!0&&(m=-m);const T=o(u,f,g,S,m,p);g.transmission>0?n.push(T):g.transparent===!0?s.push(T):t.push(T)}function c(u,f,g,S,m,p){const M=o(u,f,g,S,m,p);g.transmission>0?n.unshift(M):g.transparent===!0?s.unshift(M):t.unshift(M)}function h(u,f){t.length>1&&t.sort(u||Xx),n.length>1&&n.sort(f||Jl),s.length>1&&s.sort(f||Jl)}function d(){for(let u=e,f=i.length;u<f;u++){const g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function qx(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new Ql,i.set(n,[a])):s>=r.length?(a=new Ql,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Yx(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new k,color:new ze};break;case"SpotLight":t={position:new k,direction:new k,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":t={color:new ze,position:new k,halfWidth:new k,halfHeight:new k};break}return i[e.id]=t,t}}}function Kx(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Zx=0;function Jx(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Qx(i){const e=new Yx,t=Kx(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new k);const s=new k,r=new Ze,a=new Ze;function o(c){let h=0,d=0,u=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let f=0,g=0,S=0,m=0,p=0,M=0,T=0,A=0,w=0,b=0,_=0,E=0,P=0,R=0;c.sort(Jx);for(let O=0,W=c.length;O<W;O++){const L=c[O],G=L.color,Y=L.intensity,H=L.distance;let j=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===$n?j=L.shadow.map.texture:j=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=G.r*Y,d+=G.g*Y,u+=G.b*Y;else if(L.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(L.sh.coefficients[V],Y);R++}else if(L.isSunLight){const V=e.get(L);if(V.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const Z=L.shadow,ee=t.get(L);ee.shadowIntensity=Z.intensity,ee.shadowBias=Z.bias,ee.shadowNormalBias=Z.normalBias,ee.shadowRadius=Z.radius,ee.shadowMapSize.copy(Z.mapSize).multiply(Z.getFrameExtents()),n.sunShadow[g]=ee,n.sunShadowMap[g]=j;const Me=Z.getViewportCount();for(let De=0;De<Me;De++)n.sunShadowMatrix[S+De]=Z.getMatrix(De),n.sunShadowCascade[S+De]=Z._cascadeData[De];S+=Me,g++}n.sun[f]=V,f++}else if(L.isDirectionalLight){const V=e.get(L);if(V.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const Z=L.shadow,ee=t.get(L);ee.shadowIntensity=Z.intensity,ee.shadowBias=Z.bias,ee.shadowNormalBias=Z.normalBias,ee.shadowRadius=Z.radius,ee.shadowMapSize=Z.mapSize,n.directionalShadow[m]=ee,n.directionalShadowMap[m]=j,n.directionalShadowMatrix[m]=L.shadow.matrix,w++}n.directional[m]=V,m++}else if(L.isSpotLight){const V=e.get(L);V.position.setFromMatrixPosition(L.matrixWorld),V.color.copy(G).multiplyScalar(Y),V.distance=H,V.coneCos=Math.cos(L.angle),V.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),V.decay=L.decay,n.spot[M]=V;const Z=L.shadow;if(L.map&&(n.spotLightMap[E]=L.map,E++,Z.updateMatrices(L),L.castShadow&&P++),n.spotLightMatrix[M]=Z.matrix,L.castShadow){const ee=t.get(L);ee.shadowIntensity=Z.intensity,ee.shadowBias=Z.bias,ee.shadowNormalBias=Z.normalBias,ee.shadowRadius=Z.radius,ee.shadowMapSize=Z.mapSize,n.spotShadow[M]=ee,n.spotShadowMap[M]=j,_++}M++}else if(L.isRectAreaLight){const V=e.get(L);V.color.copy(G).multiplyScalar(Y),V.halfWidth.set(L.width*.5,0,0),V.halfHeight.set(0,L.height*.5,0),n.rectArea[T]=V,T++}else if(L.isPointLight){const V=e.get(L);if(V.color.copy(L.color).multiplyScalar(L.intensity),V.distance=L.distance,V.decay=L.decay,L.castShadow){const Z=L.shadow,ee=t.get(L);ee.shadowIntensity=Z.intensity,ee.shadowBias=Z.bias,ee.shadowNormalBias=Z.normalBias,ee.shadowRadius=Z.radius,ee.shadowMapSize=Z.mapSize,ee.shadowCameraNear=Z.camera.near,ee.shadowCameraFar=Z.camera.far,n.pointShadow[p]=ee,n.pointShadowMap[p]=j,n.pointShadowMatrix[p]=L.shadow.matrix,b++}n.point[p]=V,p++}else if(L.isHemisphereLight){const V=e.get(L);V.skyColor.copy(L.color).multiplyScalar(Y),V.groundColor.copy(L.groundColor).multiplyScalar(Y),n.hemi[A]=V,A++}}T>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=fe.LTC_FLOAT_1,n.rectAreaLTC2=fe.LTC_FLOAT_2):(n.rectAreaLTC1=fe.LTC_HALF_1,n.rectAreaLTC2=fe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const I=n.hash;(I.sunLength!==f||I.directionalLength!==m||I.pointLength!==p||I.spotLength!==M||I.rectAreaLength!==T||I.hemiLength!==A||I.numSunShadows!==g||I.numDirectionalShadows!==w||I.numPointShadows!==b||I.numSpotShadows!==_||I.numSpotMaps!==E||I.numLightProbes!==R)&&(n.sun.length=f,n.directional.length=m,n.spot.length=M,n.rectArea.length=T,n.point.length=p,n.hemi.length=A,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=S,n.sunShadowCascade.length=S,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+E-P,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=R,I.sunLength=f,I.directionalLength=m,I.pointLength=p,I.spotLength=M,I.rectAreaLength=T,I.hemiLength=A,I.numSunShadows=g,I.numDirectionalShadows=w,I.numPointShadows=b,I.numSpotShadows=_,I.numSpotMaps=E,I.numLightProbes=R,n.version=Zx++)}function l(c,h){let d=0,u=0,f=0,g=0,S=0,m=0;const p=h.matrixWorldInverse;for(let M=0,T=c.length;M<T;M++){const A=c[M];if(A.isSunLight){const w=n.sun[d];w.direction.setFromMatrixPosition(A.matrixWorld),w.direction.transformDirection(p),d++}else if(A.isDirectionalLight){const w=n.directional[u];w.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),u++}else if(A.isSpotLight){const w=n.spot[g];w.position.setFromMatrixPosition(A.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),g++}else if(A.isRectAreaLight){const w=n.rectArea[S];w.position.setFromMatrixPosition(A.matrixWorld),w.position.applyMatrix4(p),a.identity(),r.copy(A.matrixWorld),r.premultiply(p),a.extractRotation(r),w.halfWidth.set(A.width*.5,0,0),w.halfHeight.set(0,A.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),S++}else if(A.isPointLight){const w=n.point[f];w.position.setFromMatrixPosition(A.matrixWorld),w.position.applyMatrix4(p),f++}else if(A.isHemisphereLight){const w=n.hemi[m];w.direction.setFromMatrixPosition(A.matrixWorld),w.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:n}}function $l(i){const e=new Qx(i),t=[],n=[],s=[];function r(d){h.camera=d,t.length=0,n.length=0,s.length=0}function a(d){d.isLightProbeGrid?s.push(d):t.push(d)}function o(d){n.push(d)}function l(){e.setup(t),s.sort((d,u)=>d.priority-u.priority||d.id-u.id)}function c(d){e.setupView(t,d)}const h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function $x(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new $l(i),e.set(s,[o])):r>=a.length?(o=new $l(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const jx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,eS=`uniform sampler2D shadow_pass;
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
}`,tS=[new k(1,0,0),new k(-1,0,0),new k(0,1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1)],nS=[new k(0,-1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1),new k(0,-1,0),new k(0,-1,0)],jl=new Ze,Ji=new k,ia=new k;function iS(i,e,t){let n=new cs;const s=new Oe,r=new Oe,a=new at,o=new pg,l=new mg,c={},h=t.maxTextureSize,d={[Qn]:Ft,[Ft]:Qn,[Sn]:Sn},u=new jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:jx,fragmentShader:eS}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new fn;g.setAttribute("position",new yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new wt(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qs;let p=this.type;this.render=function(b,_,E){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===nm&&(Re("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=qs);const P=i.getRenderTarget(),R=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),O=i.state;O.setBlending(bi),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const W=p!==this.type;W&&_.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(G=>G.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,G=b.length;L<G;L++){const Y=b[L],H=Y.shadow;if(H===void 0){Re("WebGLShadowMap:",Y,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const j=H.getFrameExtents();s.multiply(j),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/j.x),s.x=r.x*j.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/j.y),s.y=r.y*j.y,H.mapSize.y=r.y));const V=i.state.buffers.depth.getReversed();if(H.camera._reversedDepth=V,H.map===null||W===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===ji){if(Y.isPointLight){Re("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new cn(s.x,s.y,{format:$n,type:hn,minFilter:Nt,magFilter:Nt,generateMipmaps:!1}),H.map.texture.name=Y.name+".shadowMap",H.map.depthTexture=new Pi(s.x,s.y,en),H.map.depthTexture.name=Y.name+".shadowMapDepth",H.map.depthTexture.format=Bn,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=ot,H.map.depthTexture.magFilter=ot}else Y.isPointLight?(H.map=new mo(s.x),H.map.depthTexture=new ou(s.x,un)):(H.map=new cn(s.x,s.y),H.map.depthTexture=new Pi(s.x,s.y,un)),H.map.depthTexture.name=Y.name+".shadowMap",H.map.depthTexture.format=Bn,this.type===qs?(H.map.depthTexture.compareFunction=V?Vc:Gc,H.map.depthTexture.minFilter=Nt,H.map.depthTexture.magFilter=Nt):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=ot,H.map.depthTexture.magFilter=ot);H.camera.updateProjectionMatrix()}H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==s.x||H.map.height!==s.y)&&H.map.setSize(s.x,s.y);const Z=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();Y.isPointLight!==!0&&H.updateMatrices(Y,E);const ee=(H.camera.layers.mask&4294967294)!==0?H.camera.layers:E.layers;for(let Me=0;Me<Z;Me++){const De=H.getCamera(Me);if(Y.isPointLight){const J=H.camera,pe=H.matrix,ve=Y.distance||J.far;ve!==J.far&&(J.far=ve,J.updateProjectionMatrix()),Ji.setFromMatrixPosition(Y.matrixWorld),J.position.copy(Ji),ia.copy(J.position),ia.add(tS[Me]),J.up.copy(nS[Me]),J.lookAt(ia),J.updateMatrixWorld(),pe.makeTranslation(-Ji.x,-Ji.y,-Ji.z),jl.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),H._frustum.setFromProjectionMatrix(jl,J.coordinateSystem,J.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)i.setRenderTarget(H.map,Me),i.clear();else{Me===0&&(i.setRenderTarget(H.map),i.clear());const J=H.getViewport(Me);a.set(r.x*J.x,r.y*J.y,r.x*J.z,r.y*J.w),O.viewport(a)}n=H.getFrustum(Me),A(_,E,De,Y,ee,this.type)}H.isPointLightShadow!==!0&&this.type===ji&&M(H,E),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(P,R,I)};function M(b,_){const E=e.update(S);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null?b.mapPass=new cn(s.x,s.y,{format:$n,type:hn}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),u.uniforms.shadow_pass.value=b.map.depthTexture,u.uniforms.resolution.value.set(b.map.width,b.map.height),u.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(_,null,E,u,S,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(_,null,E,f,S,null)}function T(b,_,E,P){let R=null;const I=E.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(I!==void 0)R=I;else if(R=E.isPointLight===!0?l:o,i.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){const O=R.uuid,W=_.uuid;let L=c[O];L===void 0&&(L={},c[O]=L);let G=L[W];G===void 0&&(G=R.clone(),L[W]=G,_.addEventListener("dispose",w)),R=G}if(R.visible=_.visible,R.wireframe=_.wireframe,P===ji?R.side=_.shadowSide!==null?_.shadowSide:_.side:R.side=_.shadowSide!==null?_.shadowSide:d[_.side],R.alphaMap=_.alphaMap,R.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,R.map=_.map,R.clipShadows=_.clipShadows,R.clippingPlanes=_.clippingPlanes,R.clipIntersection=_.clipIntersection,R.displacementMap=_.displacementMap,R.displacementScale=_.displacementScale,R.displacementBias=_.displacementBias,R.wireframeLinewidth=_.wireframeLinewidth,R.linewidth=_.linewidth,E.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const O=i.properties.get(R);O.light=E}return R}function A(b,_,E,P,R,I){if(b.visible===!1)return;if(b.layers.test(R)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&I===ji)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,b.matrixWorld);const L=e.update(b),G=b.material;if(Array.isArray(G)){const Y=L.groups;for(let H=0,j=Y.length;H<j;H++){const V=Y[H],Z=G[V.materialIndex];if(Z&&Z.visible){const ee=T(b,Z,P,I);b.onBeforeShadow(i,b,_,E,L,ee,V),i.renderBufferDirect(E,null,L,ee,b,V),b.onAfterShadow(i,b,_,E,L,ee,V)}}}else if(G.visible){const Y=T(b,G,P,I);b.onBeforeShadow(i,b,_,E,L,Y,null),i.renderBufferDirect(E,null,L,Y,b,null),b.onAfterShadow(i,b,_,E,L,Y,null)}}const W=b.children;for(let L=0,G=W.length;L<G;L++)A(W[L],_,E,P,R,I)}function w(b){b.target.removeEventListener("dispose",w);for(const E in c){const P=c[E],R=b.target.uuid;R in P&&(P[R].dispose(),delete P[R])}}}function sS(i,e){function t(){let C=!1;const Q=new at;let X=null;const oe=new at(0,0,0,0);return{setMask:function(ie){X!==ie&&!C&&(i.colorMask(ie,ie,ie,ie),X=ie)},setLocked:function(ie){C=ie},setClear:function(ie,re,Ae,Be,ne){ne===!0&&(ie*=Be,re*=Be,Ae*=Be),Q.set(ie,re,Ae,Be),oe.equals(Q)===!1&&(i.clearColor(ie,re,Ae,Be),oe.copy(Q))},reset:function(){C=!1,X=null,oe.set(-1,0,0,0)}}}function n(){let C=!1,Q=!1,X=null,oe=null,ie=null;return{setReversed:function(re){if(Q!==re){const Ae=e.get("EXT_clip_control");re?Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.ZERO_TO_ONE_EXT):Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.NEGATIVE_ONE_TO_ONE_EXT),Q=re;const Be=ie;ie=null,this.setClear(Be)}},getReversed:function(){return Q},setTest:function(re){re?me(i.DEPTH_TEST):Ne(i.DEPTH_TEST)},setMask:function(re){X!==re&&!C&&(i.depthMask(re),X=re)},setFunc:function(re){if(Q&&(re=Nm[re]),oe!==re){switch(re){case oa:i.depthFunc(i.NEVER);break;case la:i.depthFunc(i.ALWAYS);break;case ca:i.depthFunc(i.LESS);break;case is:i.depthFunc(i.LEQUAL);break;case ua:i.depthFunc(i.EQUAL);break;case ha:i.depthFunc(i.GEQUAL);break;case da:i.depthFunc(i.GREATER);break;case fa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}oe=re}},setLocked:function(re){C=re},setClear:function(re){ie!==re&&(ie=re,Q&&(re=1-re),i.clearDepth(re))},reset:function(){C=!1,X=null,oe=null,ie=null,Q=!1}}}function s(){let C=!1,Q=null,X=null,oe=null,ie=null,re=null,Ae=null,Be=null,ne=null;return{setTest:function(ye){C||(ye?me(i.STENCIL_TEST):Ne(i.STENCIL_TEST))},setMask:function(ye){Q!==ye&&!C&&(i.stencilMask(ye),Q=ye)},setFunc:function(ye,Fe,de){(X!==ye||oe!==Fe||ie!==de)&&(i.stencilFunc(ye,Fe,de),X=ye,oe=Fe,ie=de)},setOp:function(ye,Fe,de){(re!==ye||Ae!==Fe||Be!==de)&&(i.stencilOp(ye,Fe,de),re=ye,Ae=Fe,Be=de)},setLocked:function(ye){C=ye},setClear:function(ye){ne!==ye&&(i.clearStencil(ye),ne=ye)},reset:function(){C=!1,Q=null,X=null,oe=null,ie=null,re=null,Ae=null,Be=null,ne=null}}}const r=new t,a=new n,o=new s;let l={};const c=new WeakMap;let h={},d={},u={},f=new WeakMap,g=[],S=null,m=!1,p=null,M=null,T=null,A=null,w=null,b=null,_=null,E=new ze(0,0,0),P=0,R=!1,I=null,O=null,W=null,L=null,G=null;const Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,j=0;const V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(V)[1]),H=j>=1):V.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),H=j>=2);let Z=null,ee={};const Me=i.getParameter(i.SCISSOR_BOX),De=i.getParameter(i.VIEWPORT),J=new at().fromArray(Me),pe=new at().fromArray(De);function ve(C,Q,X,oe){const ie=new Uint8Array(4),re=i.createTexture();i.bindTexture(C,re),i.texParameteri(C,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(C,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ae=0;Ae<X;Ae++)C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY?i.texImage3D(Q,0,i.RGBA,1,1,oe,0,i.RGBA,i.UNSIGNED_BYTE,ie):i.texImage2D(Q+Ae,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ie);return re}const be={};be[i.TEXTURE_2D]=ve(i.TEXTURE_2D,i.TEXTURE_2D,1),be[i.TEXTURE_CUBE_MAP]=ve(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),be[i.TEXTURE_2D_ARRAY]=ve(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),be[i.TEXTURE_3D]=ve(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),me(i.DEPTH_TEST),a.setFunc(is),Dt(!1),st(Ko),me(i.CULL_FACE),xt(bi);function me(C){h[C]!==!0&&(i.enable(C),h[C]=!0)}function Ne(C){h[C]!==!1&&(i.disable(C),h[C]=!1)}function lt(C,Q){return u[C]!==Q?(i.bindFramebuffer(C,Q),u[C]=Q,C===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Q),C===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Q),!0):!1}function we(C,Q){let X=g,oe=!1;if(C){X=f.get(Q),X===void 0&&(X=[],f.set(Q,X));const ie=C.textures;if(X.length!==ie.length||X[0]!==i.COLOR_ATTACHMENT0){for(let re=0,Ae=ie.length;re<Ae;re++)X[re]=i.COLOR_ATTACHMENT0+re;X.length=ie.length,oe=!0}}else X[0]!==i.BACK&&(X[0]=i.BACK,oe=!0);oe&&i.drawBuffers(X)}function Je(C){return S!==C?(i.useProgram(C),S=C,!0):!1}const je={[Ei]:i.FUNC_ADD,[sm]:i.FUNC_SUBTRACT,[rm]:i.FUNC_REVERSE_SUBTRACT};je[am]=i.MIN,je[om]=i.MAX;const He={[lm]:i.ZERO,[cm]:i.ONE,[um]:i.SRC_COLOR,[Tc]:i.SRC_ALPHA,[gm]:i.SRC_ALPHA_SATURATE,[pm]:i.DST_COLOR,[dm]:i.DST_ALPHA,[hm]:i.ONE_MINUS_SRC_COLOR,[wc]:i.ONE_MINUS_SRC_ALPHA,[mm]:i.ONE_MINUS_DST_COLOR,[fm]:i.ONE_MINUS_DST_ALPHA,[_m]:i.CONSTANT_COLOR,[vm]:i.ONE_MINUS_CONSTANT_COLOR,[xm]:i.CONSTANT_ALPHA,[Sm]:i.ONE_MINUS_CONSTANT_ALPHA};function xt(C,Q,X,oe,ie,re,Ae,Be,ne,ye){if(C===bi){m===!0&&(Ne(i.BLEND),m=!1);return}if(m===!1&&(me(i.BLEND),m=!0),C!==im){if(C!==p||ye!==R){if((M!==Ei||w!==Ei)&&(i.blendEquation(i.FUNC_ADD),M=Ei,w=Ei),ye)switch(C){case ts:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Zo:i.blendFunc(i.ONE,i.ONE);break;case Jo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Qo:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ye("WebGLState: Invalid blending: ",C);break}else switch(C){case ts:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Zo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Jo:Ye("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Qo:Ye("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ye("WebGLState: Invalid blending: ",C);break}T=null,A=null,b=null,_=null,E.set(0,0,0),P=0,p=C,R=ye}return}ie=ie||Q,re=re||X,Ae=Ae||oe,(Q!==M||ie!==w)&&(i.blendEquationSeparate(je[Q],je[ie]),M=Q,w=ie),(X!==T||oe!==A||re!==b||Ae!==_)&&(i.blendFuncSeparate(He[X],He[oe],He[re],He[Ae]),T=X,A=oe,b=re,_=Ae),(Be.equals(E)===!1||ne!==P)&&(i.blendColor(Be.r,Be.g,Be.b,ne),E.copy(Be),P=ne),p=C,R=!1}function ht(C,Q){C.side===Sn?Ne(i.CULL_FACE):me(i.CULL_FACE);let X=C.side===Ft;Q&&(X=!X),Dt(X),C.blending===ts&&C.transparent===!1?xt(bi):xt(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),a.setFunc(C.depthFunc),a.setTest(C.depthTest),a.setMask(C.depthWrite),r.setMask(C.colorWrite);const oe=C.stencilWrite;o.setTest(oe),oe&&(o.setMask(C.stencilWriteMask),o.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),o.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),mt(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?me(i.SAMPLE_ALPHA_TO_COVERAGE):Ne(i.SAMPLE_ALPHA_TO_COVERAGE)}function Dt(C){I!==C&&(C?i.frontFace(i.CW):i.frontFace(i.CCW),I=C)}function st(C){C!==em?(me(i.CULL_FACE),C!==O&&(C===Ko?i.cullFace(i.BACK):C===tm?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ne(i.CULL_FACE),O=C}function sn(C){C!==W&&(H&&i.lineWidth(C),W=C)}function mt(C,Q,X){C?(me(i.POLYGON_OFFSET_FILL),(L!==Q||G!==X)&&(L=Q,G=X,a.getReversed()&&(Q=-Q,X=-X),i.polygonOffset(Q,X))):Ne(i.POLYGON_OFFSET_FILL)}function Vt(C){C?me(i.SCISSOR_TEST):Ne(i.SCISSOR_TEST)}function Wt(C){C===void 0&&(C=i.TEXTURE0+Y-1),Z!==C&&(i.activeTexture(C),Z=C)}function Xt(C,Q,X){X===void 0&&(Z===null?X=i.TEXTURE0+Y-1:X=Z);let oe=ee[X];oe===void 0&&(oe={type:void 0,texture:void 0},ee[X]=oe),(oe.type!==C||oe.texture!==Q)&&(Z!==X&&(i.activeTexture(X),Z=X),i.bindTexture(C,Q||be[C]),oe.type=C,oe.texture=Q)}function U(){const C=ee[Z];C!==void 0&&C.type!==void 0&&(i.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function qt(){try{i.compressedTexImage2D(...arguments)}catch(C){Ye("WebGLState:",C)}}function nt(){try{i.compressedTexImage3D(...arguments)}catch(C){Ye("WebGLState:",C)}}function it(){try{i.texSubImage2D(...arguments)}catch(C){Ye("WebGLState:",C)}}function he(){try{i.texSubImage3D(...arguments)}catch(C){Ye("WebGLState:",C)}}function dt(){try{i.compressedTexSubImage2D(...arguments)}catch(C){Ye("WebGLState:",C)}}function Te(){try{i.compressedTexSubImage3D(...arguments)}catch(C){Ye("WebGLState:",C)}}function Pe(){try{i.texStorage2D(...arguments)}catch(C){Ye("WebGLState:",C)}}function y(){try{i.texStorage3D(...arguments)}catch(C){Ye("WebGLState:",C)}}function v(){try{i.texImage2D(...arguments)}catch(C){Ye("WebGLState:",C)}}function F(){try{i.texImage3D(...arguments)}catch(C){Ye("WebGLState:",C)}}function te(C){return d[C]!==void 0?d[C]:i.getParameter(C)}function $(C,Q){d[C]!==Q&&(i.pixelStorei(C,Q),d[C]=Q)}function se(C){J.equals(C)===!1&&(i.scissor(C.x,C.y,C.z,C.w),J.copy(C))}function ce(C){pe.equals(C)===!1&&(i.viewport(C.x,C.y,C.z,C.w),pe.copy(C))}function q(C,Q){let X=c.get(Q);X===void 0&&(X=new WeakMap,c.set(Q,X));let oe=X.get(C);oe===void 0&&(oe=i.getUniformBlockIndex(Q,C.name),i.uniformBlockBinding(Q,oe,oe),X.set(C,oe))}function K(C,Q,X){const ie=c.get(Q).get(C);l[ie]!==X&&(i.bindBufferBase(i.UNIFORM_BUFFER,ie,X),l[ie]=X)}function ae(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},Z=null,ee={},u={},l={},f=new WeakMap,g=[],S=null,m=!1,p=null,M=null,T=null,A=null,w=null,b=null,_=null,E=new ze(0,0,0),P=0,R=!1,I=null,O=null,W=null,L=null,G=null,J.set(0,0,i.canvas.width,i.canvas.height),pe.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:me,disable:Ne,bindFramebuffer:lt,drawBuffers:we,useProgram:Je,setBlending:xt,setMaterial:ht,setFlipSided:Dt,setCullFace:st,setLineWidth:sn,setPolygonOffset:mt,setScissorTest:Vt,activeTexture:Wt,bindTexture:Xt,unbindTexture:U,compressedTexImage2D:qt,compressedTexImage3D:nt,texImage2D:v,texImage3D:F,pixelStorei:$,getParameter:te,updateUBOMapping:q,uniformBlockBinding:K,texStorage2D:Pe,texStorage3D:y,texSubImage2D:it,texSubImage3D:he,compressedTexSubImage2D:dt,compressedTexSubImage3D:Te,scissor:se,viewport:ce,reset:ae}}function rS(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Oe,h=new WeakMap,d=new Set;let u;const f=new WeakMap,g=new Set,S=new FinalizationRegistry(y=>g.delete(y));let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(y,v){return m?new OffscreenCanvas(y,v):ls("canvas")}function M(y,v,F){let te=1;const $=Pe(y);if(($.width>F||$.height>F)&&(te=F/Math.max($.width,$.height)),te<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const se=Math.floor(te*$.width),ce=Math.floor(te*$.height);u===void 0&&(u=p(se,ce));const q=v?p(se,ce):u;return q.width=se,q.height=ce,q.getContext("2d").drawImage(y,0,0,se,ce),Re("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+se+"x"+ce+")."),q}else return"data"in y&&Re("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),y;return y}function T(y){return y.generateMipmaps}function A(y){i.generateMipmap(y)}function w(y){return y.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:y.isWebGL3DRenderTarget?i.TEXTURE_3D:y.isWebGLArrayRenderTarget||y.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(y,v,F,te,$,se=!1){if(y!==null){if(i[y]!==void 0)return i[y];Re("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let ce;te&&(ce=e.get("EXT_texture_norm16"),ce||Re("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let q=v;if(v===i.RED&&(F===i.FLOAT&&(q=i.R32F),F===i.HALF_FLOAT&&(q=i.R16F),F===i.UNSIGNED_BYTE&&(q=i.R8),F===i.UNSIGNED_SHORT&&ce&&(q=ce.R16_EXT),F===i.SHORT&&ce&&(q=ce.R16_SNORM_EXT)),v===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(q=i.R8UI),F===i.UNSIGNED_SHORT&&(q=i.R16UI),F===i.UNSIGNED_INT&&(q=i.R32UI),F===i.BYTE&&(q=i.R8I),F===i.SHORT&&(q=i.R16I),F===i.INT&&(q=i.R32I)),v===i.RG&&(F===i.FLOAT&&(q=i.RG32F),F===i.HALF_FLOAT&&(q=i.RG16F),F===i.UNSIGNED_BYTE&&(q=i.RG8),F===i.UNSIGNED_SHORT&&ce&&(q=ce.RG16_EXT),F===i.SHORT&&ce&&(q=ce.RG16_SNORM_EXT)),v===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(q=i.RG8UI),F===i.UNSIGNED_SHORT&&(q=i.RG16UI),F===i.UNSIGNED_INT&&(q=i.RG32UI),F===i.BYTE&&(q=i.RG8I),F===i.SHORT&&(q=i.RG16I),F===i.INT&&(q=i.RG32I)),v===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(q=i.RGB8UI),F===i.UNSIGNED_SHORT&&(q=i.RGB16UI),F===i.UNSIGNED_INT&&(q=i.RGB32UI),F===i.BYTE&&(q=i.RGB8I),F===i.SHORT&&(q=i.RGB16I),F===i.INT&&(q=i.RGB32I)),v===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),F===i.UNSIGNED_INT&&(q=i.RGBA32UI),F===i.BYTE&&(q=i.RGBA8I),F===i.SHORT&&(q=i.RGBA16I),F===i.INT&&(q=i.RGBA32I)),v===i.RGB&&(F===i.UNSIGNED_SHORT&&ce&&(q=ce.RGB16_EXT),F===i.SHORT&&ce&&(q=ce.RGB16_SNORM_EXT),F===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),F===i.UNSIGNED_INT_10F_11F_11F_REV&&(q=i.R11F_G11F_B10F)),v===i.RGBA){const K=se?ar:We.getTransfer($);F===i.FLOAT&&(q=i.RGBA32F),F===i.HALF_FLOAT&&(q=i.RGBA16F),F===i.UNSIGNED_BYTE&&(q=K===$e?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT&&ce&&(q=ce.RGBA16_EXT),F===i.SHORT&&ce&&(q=ce.RGBA16_SNORM_EXT),F===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function _(y,v){let F;return y?v===null||v===un||v===Ri?F=i.DEPTH24_STENCIL8:v===en?F=i.DEPTH32F_STENCIL8:v===as&&(F=i.DEPTH24_STENCIL8,Re("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===un||v===Ri?F=i.DEPTH_COMPONENT24:v===en?F=i.DEPTH_COMPONENT32F:v===as&&(F=i.DEPTH_COMPONENT16),F}function E(y,v){return T(y)===!0||y.isFramebufferTexture&&y.minFilter!==ot&&y.minFilter!==Nt?Math.log2(Math.max(v.width,v.height))+1:y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?v.mipmaps.length:1}function P(y){const v=new WeakRef(y);n.get(y).__ref=v,g.add(v),S.register(y,v,v)}function R(y){const v=n.get(y).__ref;v!==void 0&&(g.delete(v),S.unregister(v))}function I(y){W(y.target)}function O(y){L(y.target)}function W(y){y.removeEventListener("dispose",I),R(y),Y(y),y.isVideoTexture&&h.delete(y),y.isHTMLTexture&&d.delete(y)}function L(y){y.removeEventListener("dispose",O),R(y),j(y)}function G(){for(const y of g){const v=y.deref();v!==void 0&&(v.isRenderTarget===!0?L(v):W(v))}g.clear(),d.clear()}function Y(y){const v=n.get(y);if(v.__webglInit===void 0)return;const F=y.source,te=f.get(F);if(te){const $=te[v.__cacheKey];$.usedTimes--,$.usedTimes===0&&H(y),Object.keys(te).length===0&&f.delete(F)}n.remove(y)}function H(y){const v=n.get(y);i.deleteTexture(v.__webglTexture);const F=y.source,te=f.get(F);delete te[v.__cacheKey],a.memory.textures--}function j(y){const v=n.get(y);v.__depthDisposeCallback&&v.__depthDisposeCallback();const F=y.depthTexture;if(F&&F.renderTarget===y&&W(F),y.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(v.__webglFramebuffer[$]))for(let se=0;se<v.__webglFramebuffer[$].length;se++)i.deleteFramebuffer(v.__webglFramebuffer[$][se]);else i.deleteFramebuffer(v.__webglFramebuffer[$]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[$])}else{if(Array.isArray(v.__webglFramebuffer))for(let $=0;$<v.__webglFramebuffer.length;$++)i.deleteFramebuffer(v.__webglFramebuffer[$]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let $=0;$<v.__webglColorRenderbuffer.length;$++)v.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[$]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const te=y.textures;for(let $=0,se=te.length;$<se;$++){const ce=n.get(te[$]);ce.__webglTexture&&(i.deleteTexture(ce.__webglTexture),a.memory.textures--),n.remove(te[$])}n.remove(y)}let V=0;function Z(){V=0}function ee(){return V}function Me(y){V=y}function De(){const y=V;return y>=s.maxTextures&&Re("WebGLTextures: Trying to use "+(y+1)+" texture units while this GPU supports only "+s.maxTextures),V+=1,y}function J(y){const v=[];return v.push(y.wrapS),v.push(y.wrapT),v.push(y.wrapR||0),v.push(y.magFilter),v.push(y.minFilter),v.push(y.anisotropy),v.push(y.internalFormat),v.push(y.format),v.push(y.type),v.push(y.generateMipmaps),v.push(y.mipmapsAutoUpdate),v.push(y.premultiplyAlpha),v.push(y.flipY),v.push(y.unpackAlignment),v.push(y.colorSpace),v.join()}function pe(y,v){const F=n.get(y);if(y.isVideoTexture&&dt(y),y.isRenderTargetTexture===!1&&y.isExternalTexture!==!0&&y.version>0&&F.__version!==y.version){const te=y.image;if(te===null)Re("WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)Re("WebGLRenderer: Texture marked for update but image is incomplete");else{ht(F,y,v);return}}else y.isExternalTexture&&(F.__webglTexture=y.sourceTexture?y.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+v)}function ve(y,v){const F=n.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&F.__version!==y.version){ht(F,y,v);return}else y.isExternalTexture&&(F.__webglTexture=y.sourceTexture?y.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+v)}function be(y,v){const F=n.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&F.__version!==y.version){ht(F,y,v);return}t.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+v)}function me(y,v){const F=n.get(y);if(y.version>0&&F.__version!==y.version){Dt(F,y,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+v)}const Ne={[rs]:i.REPEAT,[Mn]:i.CLAMP_TO_EDGE,[pa]:i.MIRRORED_REPEAT},lt={[ot]:i.NEAREST,[Am]:i.NEAREST_MIPMAP_NEAREST,[ps]:i.NEAREST_MIPMAP_LINEAR,[Nt]:i.LINEAR,[Rr]:i.LINEAR_MIPMAP_NEAREST,[Fn]:i.LINEAR_MIPMAP_LINEAR},we={[wm]:i.NEVER,[Wc]:i.ALWAYS,[Rm]:i.LESS,[Gc]:i.LEQUAL,[Cm]:i.EQUAL,[Vc]:i.GEQUAL,[Pm]:i.GREATER,[Lm]:i.NOTEQUAL};function Je(y,v){if(v.type===en&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Nt||v.magFilter===Rr||v.magFilter===ps||v.magFilter===Fn||v.minFilter===Nt||v.minFilter===Rr||v.minFilter===ps||v.minFilter===Fn)&&Re("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(y,i.TEXTURE_WRAP_S,Ne[v.wrapS]),i.texParameteri(y,i.TEXTURE_WRAP_T,Ne[v.wrapT]),(y===i.TEXTURE_3D||y===i.TEXTURE_2D_ARRAY)&&i.texParameteri(y,i.TEXTURE_WRAP_R,Ne[v.wrapR]),i.texParameteri(y,i.TEXTURE_MAG_FILTER,lt[v.magFilter]),i.texParameteri(y,i.TEXTURE_MIN_FILTER,lt[v.minFilter]),v.compareFunction&&(i.texParameteri(y,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(y,i.TEXTURE_COMPARE_FUNC,we[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===ot||v.minFilter!==ps&&v.minFilter!==Fn||v.type===en&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");i.texParameterf(y,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function je(y,v){let F=!1;y.__webglInit===void 0&&(y.__webglInit=!0,v.addEventListener("dispose",I),P(v));const te=v.source;let $=f.get(te);$===void 0&&($={},f.set(te,$));const se=J(v);if(se!==y.__cacheKey){$[se]===void 0&&($[se]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),$[se].usedTimes++;const ce=$[y.__cacheKey];ce!==void 0&&($[y.__cacheKey].usedTimes--,ce.usedTimes===0&&H(v)),y.__cacheKey=se,y.__webglTexture=$[se].texture}return F}function He(y,v,F){return Math.floor(Math.floor(y/F)/v)}function xt(y,v,F,te){const se=y.updateRanges;if(se.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,F,te,v.data);else{se.sort((C,Q)=>C.start-Q.start);let ce=0;for(let C=1;C<se.length;C++){const Q=se[ce],X=se[C],oe=Q.start+Q.count,ie=He(X.start,v.width,4),re=He(Q.start,v.width,4);X.start<=oe+1&&ie===re&&He(X.start+X.count-1,v.width,4)===ie?Q.count=Math.max(Q.count,X.start+X.count-Q.start):(++ce,se[ce]=X)}se.length=ce+1;const q=t.getParameter(i.UNPACK_ROW_LENGTH),K=t.getParameter(i.UNPACK_SKIP_PIXELS),ae=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let C=0,Q=se.length;C<Q;C++){const X=se[C],oe=Math.floor(X.start/4),ie=Math.ceil(X.count/4),re=oe%v.width,Ae=Math.floor(oe/v.width),Be=ie,ne=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,re),t.pixelStorei(i.UNPACK_SKIP_ROWS,Ae),t.texSubImage2D(i.TEXTURE_2D,0,re,Ae,Be,ne,F,te,v.data)}y.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,q),t.pixelStorei(i.UNPACK_SKIP_PIXELS,K),t.pixelStorei(i.UNPACK_SKIP_ROWS,ae)}}function ht(y,v,F){let te=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(te=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(te=i.TEXTURE_3D);const $=je(y,v),se=v.source;t.bindTexture(te,y.__webglTexture,i.TEXTURE0+F);const ce=n.get(se);if(se.version!==ce.__version||$===!0){if(t.activeTexture(i.TEXTURE0+F),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){const ne=We.getPrimaries(We.workingColorSpace),ye=v.colorSpace===Nn?null:We.getPrimaries(v.colorSpace),Fe=v.colorSpace===Nn||ne===ye?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe)}t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment);let K=M(v.image,!1,s.maxTextureSize);K=Te(v,K);const ae=r.convert(v.format,v.colorSpace),C=r.convert(v.type);let Q=b(v.internalFormat,ae,C,v.normalized,v.colorSpace,v.isVideoTexture);Je(te,v);let X;const oe=v.mipmaps,ie=v.isVideoTexture!==!0,re=ce.__version===void 0||$===!0,Ae=se.dataReady,Be=E(v,K);if(v.isDepthTexture)Q=_(v.format===On,v.type),re&&(ie?t.texStorage2D(i.TEXTURE_2D,1,Q,K.width,K.height):t.texImage2D(i.TEXTURE_2D,0,Q,K.width,K.height,0,ae,C,null));else if(v.isDataTexture)if(oe.length>0){ie&&re&&t.texStorage2D(i.TEXTURE_2D,Be,Q,oe[0].width,oe[0].height);for(let ne=0,ye=oe.length;ne<ye;ne++)X=oe[ne],ie?Ae&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,X.width,X.height,ae,C,X.data):t.texImage2D(i.TEXTURE_2D,ne,Q,X.width,X.height,0,ae,C,X.data);v.generateMipmaps=!1}else ie?(re&&t.texStorage2D(i.TEXTURE_2D,Be,Q,K.width,K.height),Ae&&xt(v,K,ae,C)):t.texImage2D(i.TEXTURE_2D,0,Q,K.width,K.height,0,ae,C,K.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){ie&&re&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Be,Q,oe[0].width,oe[0].height,K.depth);for(let ne=0,ye=oe.length;ne<ye;ne++)if(X=oe[ne],v.format!==ln)if(ae!==null)if(ie){if(Ae)if(v.layerUpdates.size>0){const Fe=Dl(X.width,X.height,v.format,v.type);for(const de of v.layerUpdates){const Qe=X.data.subarray(de*Fe/X.data.BYTES_PER_ELEMENT,(de+1)*Fe/X.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,de,X.width,X.height,1,ae,Qe)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,X.width,X.height,K.depth,ae,X.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ne,Q,X.width,X.height,K.depth,0,X.data,0,0);else Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ie?Ae&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,X.width,X.height,K.depth,ae,C,X.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ne,Q,X.width,X.height,K.depth,0,ae,C,X.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{ie&&re&&t.texStorage2D(i.TEXTURE_2D,Be,Q,oe[0].width,oe[0].height);for(let ne=0,ye=oe.length;ne<ye;ne++)X=oe[ne],v.format!==ln?ae!==null?ie?Ae&&t.compressedTexSubImage2D(i.TEXTURE_2D,ne,0,0,X.width,X.height,ae,X.data):t.compressedTexImage2D(i.TEXTURE_2D,ne,Q,X.width,X.height,0,X.data):Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ie?Ae&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,X.width,X.height,ae,C,X.data):t.texImage2D(i.TEXTURE_2D,ne,Q,X.width,X.height,0,ae,C,X.data)}else if(v.isDataArrayTexture)if(ie){if(re&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Be,Q,K.width,K.height,K.depth),Ae)if(v.layerUpdates.size>0){const ne=Dl(K.width,K.height,v.format,v.type);for(const ye of v.layerUpdates){const Fe=K.data.subarray(ye*ne/K.data.BYTES_PER_ELEMENT,(ye+1)*ne/K.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ye,K.width,K.height,1,ae,C,Fe)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,ae,C,K.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Q,K.width,K.height,K.depth,0,ae,C,K.data);else if(v.isData3DTexture)ie?(re&&t.texStorage3D(i.TEXTURE_3D,Be,Q,K.width,K.height,K.depth),Ae&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,ae,C,K.data)):t.texImage3D(i.TEXTURE_3D,0,Q,K.width,K.height,K.depth,0,ae,C,K.data);else if(v.isFramebufferTexture){if(re)if(ie)t.texStorage2D(i.TEXTURE_2D,Be,Q,K.width,K.height);else{let ne=K.width,ye=K.height;for(let Fe=0;Fe<Be;Fe++)t.texImage2D(i.TEXTURE_2D,Fe,Q,ne,ye,0,ae,C,null),ne>>=1,ye>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in i){const ne=i.canvas;if(ne.hasAttribute("layoutsubtree")||ne.setAttribute("layoutsubtree","true"),K.parentNode!==ne){ne.appendChild(K),d.add(v),ne.onpaint=ye=>{const Fe=ye.changedElements;for(const de of d)Fe.includes(de.image)&&(de.needsUpdate=!0)},ne.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,K);else{const Fe=i.RGBA,de=i.RGBA,Qe=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Fe,de,Qe,K)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(oe.length>0){if(ie&&re){const ne=Pe(oe[0]);t.texStorage2D(i.TEXTURE_2D,Be,Q,ne.width,ne.height)}for(let ne=0,ye=oe.length;ne<ye;ne++)X=oe[ne],ie?Ae&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,ae,C,X):t.texImage2D(i.TEXTURE_2D,ne,Q,ae,C,X);v.generateMipmaps=!1}else if(ie){if(re){const ne=Pe(K);t.texStorage2D(i.TEXTURE_2D,Be,Q,ne.width,ne.height)}Ae&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ae,C,K)}else t.texImage2D(i.TEXTURE_2D,0,Q,ae,C,K);T(v)&&v.mipmapsAutoUpdate===!0&&A(te),ce.__version=se.version,v.onUpdate&&v.onUpdate(v)}y.__version=v.version}function Dt(y,v,F){if(v.image.length!==6)return;const te=je(y,v),$=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,y.__webglTexture,i.TEXTURE0+F);const se=n.get($);if($.version!==se.__version||te===!0){t.activeTexture(i.TEXTURE0+F);const ce=We.getPrimaries(We.workingColorSpace),q=v.colorSpace===Nn?null:We.getPrimaries(v.colorSpace),K=v.colorSpace===Nn||ce===q?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);const ae=v.isCompressedTexture||v.image[0].isCompressedTexture,C=v.image[0]&&v.image[0].isDataTexture,Q=[];for(let de=0;de<6;de++)!ae&&!C?Q[de]=M(v.image[de],!0,s.maxCubemapSize):Q[de]=C?v.image[de].image:v.image[de],Q[de]=Te(v,Q[de]);const X=Q[0],oe=r.convert(v.format,v.colorSpace),ie=r.convert(v.type);let re=b(v.internalFormat,oe,ie,v.normalized,v.colorSpace);const Ae=v.isVideoTexture!==!0,Be=se.__version===void 0||te===!0,ne=$.dataReady;let ye=E(v,X);Je(i.TEXTURE_CUBE_MAP,v);let Fe;if(v.isDepthTexture){if(re=_(v.format===On,v.type),Be)if(Ae)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,re,X.width,X.height);else for(let de=0;de<6;de++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,re,X.width,X.height,0,oe,ie,null)}else if(ae){Ae&&Be&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ye,re,X.width,X.height);for(let de=0;de<6;de++){Fe=Q[de].mipmaps;for(let Qe=0;Qe<Fe.length;Qe++){const gt=Fe[Qe];v.format!==ln?oe!==null?Ae?ne&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Qe,0,0,gt.width,gt.height,oe,gt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Qe,re,gt.width,gt.height,0,gt.data):Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ae?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Qe,0,0,gt.width,gt.height,oe,ie,gt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Qe,re,gt.width,gt.height,0,oe,ie,gt.data)}}}else{if(Fe=v.mipmaps,Ae&&Be){Fe.length>0&&ye++;const de=Pe(Q[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ye,re,de.width,de.height)}for(let de=0;de<6;de++)if(C){Ae?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Q[de].width,Q[de].height,oe,ie,Q[de].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,re,Q[de].width,Q[de].height,0,oe,ie,Q[de].data);for(let Qe=0;Qe<Fe.length;Qe++){const Tn=Fe[Qe].image[de].image;Ae?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Qe+1,0,0,Tn.width,Tn.height,oe,ie,Tn.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Qe+1,re,Tn.width,Tn.height,0,oe,ie,Tn.data)}}else{Ae?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,oe,ie,Q[de]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,re,oe,ie,Q[de]);for(let Qe=0;Qe<Fe.length;Qe++){const gt=Fe[Qe];Ae?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Qe+1,0,0,oe,ie,gt.image[de]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Qe+1,re,oe,ie,gt.image[de])}}}T(v)&&v.mipmapsAutoUpdate===!0&&A(i.TEXTURE_CUBE_MAP),se.__version=$.version,v.onUpdate&&v.onUpdate(v)}y.__version=v.version}function st(y,v,F,te,$,se){const ce=r.convert(F.format,F.colorSpace),q=r.convert(F.type),K=b(F.internalFormat,ce,q,F.normalized,F.colorSpace),ae=n.get(v),C=n.get(F);if(C.__renderTarget=v,!ae.__hasExternalTextures){const Q=Math.max(1,v.width>>se),X=Math.max(1,v.height>>se);$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?t.texImage3D($,se,K,Q,X,v.depth,0,ce,q,null):t.texImage2D($,se,K,Q,X,0,ce,q,null)}t.bindFramebuffer(i.FRAMEBUFFER,y),he(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,$,C.__webglTexture,0,it(v)):($===i.TEXTURE_2D||$>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,te,$,C.__webglTexture,se),t.bindFramebuffer(i.FRAMEBUFFER,null)}function sn(y,v,F){if(i.bindRenderbuffer(i.RENDERBUFFER,y),v.depthBuffer){const te=v.depthTexture,$=te&&te.isDepthTexture?te.type:null,se=_(v.stencilBuffer,$),ce=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;he(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,it(v),se,v.width,v.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,it(v),se,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,se,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ce,i.RENDERBUFFER,y)}else{const te=v.textures;for(let $=0;$<te.length;$++){const se=te[$],ce=r.convert(se.format,se.colorSpace),q=r.convert(se.type),K=b(se.internalFormat,ce,q,se.normalized,se.colorSpace);he(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,it(v),K,v.width,v.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,it(v),K,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,K,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function mt(y,v,F){const te=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,y),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const $=n.get(v.depthTexture);$.__renderTarget=v;const se=te?v.depthTexture.image[0]:v.depthTexture.image;(!$.__webglTexture||se.width!==v.width||se.height!==v.height)&&(se.width=v.width,se.height=v.height,v.depthTexture.needsUpdate=!0),te?me(v.depthTexture,0):pe(v.depthTexture,0);const ce=$.__webglTexture,q=it(v),K=te?i.TEXTURE_CUBE_MAP_POSITIVE_X+F:i.TEXTURE_2D,ae=v.depthTexture.format===On?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===Bn)he(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ae,K,ce,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,ae,K,ce,0);else if(v.depthTexture.format===On)he(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ae,K,ce,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,ae,K,ce,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Vt(y){const v=n.get(y),F=y.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==y.depthTexture){const te=y.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),te){const $=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,te.removeEventListener("dispose",$)};te.addEventListener("dispose",$),v.__depthDisposeCallback=$}v.__boundDepthTexture=te}if(y.depthTexture&&!v.__autoAllocateDepthBuffer)if(F)for(let te=0;te<6;te++)mt(v.__webglFramebuffer[te],y,te);else y.texture.mipmaps.length>0?mt(v.__webglFramebuffer[0],y,0):mt(v.__webglFramebuffer,y,0);else if(F){v.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[te]),v.__webglDepthbuffer[te]===void 0)v.__webglDepthbuffer[te]=i.createRenderbuffer(),sn(v.__webglDepthbuffer[te],y,!1);else{const $=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=v.__webglDepthbuffer[te];i.bindRenderbuffer(i.RENDERBUFFER,se),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,se)}}else if(y.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),sn(v.__webglDepthbuffer,y,!1);else{const $=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,se),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,se)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Wt(y,v,F){const te=n.get(y);v!==void 0&&st(te.__webglFramebuffer,y,y.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&Vt(y)}function Xt(y){const v=y.texture,F=n.get(y),te=n.get(v);y.addEventListener("dispose",O),P(y);const $=y.textures,se=y.isWebGLCubeRenderTarget===!0,ce=$.length>1;if(ce||(te.__webglTexture===void 0&&(te.__webglTexture=i.createTexture()),te.__version=v.version,a.memory.textures++),se){F.__webglFramebuffer=[];for(let q=0;q<6;q++)if(v.mipmaps.length>0){F.__webglFramebuffer[q]=[];for(let K=0;K<v.mipmaps.length;K++)F.__webglFramebuffer[q][K]=i.createFramebuffer()}else F.__webglFramebuffer[q]=i.createFramebuffer()}else{if(v.mipmaps.length>0){F.__webglFramebuffer=[];for(let q=0;q<v.mipmaps.length;q++)F.__webglFramebuffer[q]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(ce)for(let q=0,K=$.length;q<K;q++){const ae=n.get($[q]);ae.__webglTexture===void 0&&(ae.__webglTexture=i.createTexture(),a.memory.textures++)}if(y.samples>0&&he(y)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let q=0;q<$.length;q++){const K=$[q];F.__webglColorRenderbuffer[q]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[q]);const ae=r.convert(K.format,K.colorSpace),C=r.convert(K.type),Q=b(K.internalFormat,ae,C,K.normalized,K.colorSpace,y.isXRRenderTarget===!0),X=it(y);i.renderbufferStorageMultisample(i.RENDERBUFFER,X,Q,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+q,i.RENDERBUFFER,F.__webglColorRenderbuffer[q])}i.bindRenderbuffer(i.RENDERBUFFER,null),y.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),sn(F.__webglDepthRenderbuffer,y,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(se){t.bindTexture(i.TEXTURE_CUBE_MAP,te.__webglTexture),Je(i.TEXTURE_CUBE_MAP,v);for(let q=0;q<6;q++)if(v.mipmaps.length>0)for(let K=0;K<v.mipmaps.length;K++)st(F.__webglFramebuffer[q][K],y,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+q,K);else st(F.__webglFramebuffer[q],y,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0);T(v)?A(i.TEXTURE_CUBE_MAP):v.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),t.unbindTexture()}else if(ce){for(let q=0,K=$.length;q<K;q++){const ae=$[q],C=n.get(ae);let Q=i.TEXTURE_2D;(y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(Q=y.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Q,C.__webglTexture),Je(Q,ae),st(F.__webglFramebuffer,y,ae,i.COLOR_ATTACHMENT0+q,Q,0),T(ae)&&A(Q)}t.unbindTexture()}else{let q=i.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(q=y.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(q,te.__webglTexture),Je(q,v),v.mipmaps.length>0)for(let K=0;K<v.mipmaps.length;K++)st(F.__webglFramebuffer[K],y,v,i.COLOR_ATTACHMENT0,q,K);else st(F.__webglFramebuffer,y,v,i.COLOR_ATTACHMENT0,q,0);T(v)?A(q):v.mipmaps.length>0&&i.texParameteri(q,i.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),t.unbindTexture()}y.depthBuffer&&Vt(y)}function U(y){const v=y.textures;for(let F=0,te=v.length;F<te;F++){const $=v[F];if(T($)&&$.mipmapsAutoUpdate===!0){const se=w(y),ce=n.get($).__webglTexture;t.bindTexture(se,ce),A(se),t.unbindTexture()}}}const qt=[];function nt(y){if(y.samples>0){if(he(y)===!1){const v=y.textures,F=y.width,te=y.height;let $=i.COLOR_BUFFER_BIT;const se=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=n.get(y),q=v.length>1;if(q)for(let ae=0;ae<v.length;ae++)t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer),y.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let ae=0;ae<v.length;ae++){if(y.resolveDepthBuffer&&(y.depthBuffer&&($|=i.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&($|=i.STENCIL_BUFFER_BIT)),q){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ce.__webglColorRenderbuffer[ae]);const C=n.get(v[ae]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,C,0)}i.blitFramebuffer(0,0,F,te,0,0,F,te,$,i.NEAREST),l===!0&&(qt.length=0,qt.push(i.COLOR_ATTACHMENT0+ae),y.depthBuffer&&y.storeMultisampledDepthBuffer===!1&&qt.push(se),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,qt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),q)for(let ae=0;ae<v.length;ae++){t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.RENDERBUFFER,ce.__webglColorRenderbuffer[ae]);const C=n.get(v[ae]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.TEXTURE_2D,C,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.storeMultisampledDepthBuffer===!1&&l){const v=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function it(y){return Math.min(s.maxSamples,y.samples)}function he(y){const v=n.get(y);return y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function dt(y){const v=a.render.frame;h.get(y)!==v&&(h.set(y,v),y.update())}function Te(y,v){const F=y.colorSpace,te=y.format,$=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||F!==rr&&F!==Nn&&(We.getTransfer(F)===$e?(te!==ln||$!==zt)&&Re("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ye("WebGLTextures: Unsupported texture color space:",F)),v}function Pe(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(c.width=y.naturalWidth||y.width,c.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(c.width=y.displayWidth,c.height=y.displayHeight):(c.width=y.width,c.height=y.height),c}this.allocateTextureUnit=De,this.resetTextureUnits=Z,this.getTextureUnits=ee,this.setTextureUnits=Me,this.setTexture2D=pe,this.setTexture2DArray=ve,this.setTexture3D=be,this.setTextureCube=me,this.rebindTextures=Wt,this.setupRenderTarget=Xt,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=nt,this.setupDepthRenderbuffer=Vt,this.setupFrameBufferTexture=st,this.useMultisampledRTT=he,this.dispose=G}function aS(i,e){function t(n,s=Nn){let r;const a=We.getTransfer(s);if(n===zt)return i.UNSIGNED_BYTE;if(n===ro)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ao)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Bc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===kc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Fc)return i.BYTE;if(n===Oc)return i.SHORT;if(n===as)return i.UNSIGNED_SHORT;if(n===so)return i.INT;if(n===un)return i.UNSIGNED_INT;if(n===en)return i.FLOAT;if(n===hn)return i.HALF_FLOAT;if(n===zc)return i.ALPHA;if(n===Hc)return i.RGB;if(n===ln)return i.RGBA;if(n===Bn)return i.DEPTH_COMPONENT;if(n===On)return i.DEPTH_STENCIL;if(n===oo)return i.RED;if(n===lo)return i.RED_INTEGER;if(n===$n)return i.RG;if(n===co)return i.RG_INTEGER;if(n===uo)return i.RGBA_INTEGER;if(n===Ys||n===Ks||n===Zs||n===Js)if(a===$e)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ys)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ks)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Zs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Js)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ys)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ks)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Zs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Js)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ma||n===ga||n===_a||n===va)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ma)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ga)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===_a)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===va)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===xa||n===Sa||n===Ma||n===Ea||n===Aa||n===ir||n===ya)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===xa||n===Sa)return a===$e?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ma)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ea)return r.COMPRESSED_R11_EAC;if(n===Aa)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ir)return r.COMPRESSED_RG11_EAC;if(n===ya)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ba||n===Ta||n===wa||n===Ra||n===Ca||n===Pa||n===La||n===Da||n===Ia||n===Ua||n===Na||n===Fa||n===Oa||n===Ba)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ba)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ta)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===wa)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ra)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ca)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Pa)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===La)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Da)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ia)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ua)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Na)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Fa)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Oa)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ba)return a===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ka||n===za||n===Ha)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ka)return a===$e?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===za)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ha)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ga||n===Va||n===sr||n===Wa)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ga)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Va)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===sr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Wa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ri?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const oS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,lS=`
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

}`;class cS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new lu(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new jn({vertexShader:oS,fragmentShader:lS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new wt(new bn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class uS extends ei{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null;const S=typeof XRWebGLBinding<"u",m=new cS,p={},M=t.getContextAttributes();let T=null,A=null;const w=[],b=[],_=new Oe;let E=null,P=null;const R=new kt;R.viewport=new at;const I=new kt;I.viewport=new at;const O=[R,I],W=new Eg;let L=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let pe=w[J];return pe===void 0&&(pe=new Fr,w[J]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(J){let pe=w[J];return pe===void 0&&(pe=new Fr,w[J]=pe),pe.getGripSpace()},this.getHand=function(J){let pe=w[J];return pe===void 0&&(pe=new Fr,w[J]=pe),pe.getHandSpace()};function Y(J){const pe=b.indexOf(J.inputSource);if(pe===-1)return;const ve=w[pe];ve!==void 0&&(ve.update(J.inputSource,J.frame,c||a),ve.dispatchEvent({type:J.type,data:J.inputSource}))}function H(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",j);for(let J=0;J<w.length;J++){const pe=b[J];pe!==null&&(b[J]=null,w[J].disconnect(pe))}L=null,G=null,m.reset();for(const J in p)delete p[J];if(e.setRenderTarget(T),f=null,u=null,d=null,s=null,A=null,De.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(_.width,_.height,!1),P!==null){const J=P.camera;J.fov=P.fov,J.zoom=P.zoom,J.updateProjectionMatrix(),P=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&Re("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&Re("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&S&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(T=e.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",H),s.addEventListener("inputsourceschange",j),M.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(_),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,be=null,me=null;M.depth&&(me=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=M.stencil?On:Bn,be=M.stencil?Ri:un);const Ne={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Ne),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),A=new cn(u.textureWidth,u.textureHeight,{format:ln,type:zt,depthTexture:new Pi(u.textureWidth,u.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const ve={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ve),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),A=new cn(f.framebufferWidth,f.framebufferHeight,{format:ln,type:zt,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),De.setContext(s),De.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function j(J){for(let pe=0;pe<J.removed.length;pe++){const ve=J.removed[pe],be=b.indexOf(ve);be>=0&&(b[be]=null,w[be].disconnect(ve))}for(let pe=0;pe<J.added.length;pe++){const ve=J.added[pe];let be=b.indexOf(ve);if(be===-1){for(let Ne=0;Ne<w.length;Ne++)if(Ne>=b.length){b.push(ve),be=Ne;break}else if(b[Ne]===null){b[Ne]=ve,be=Ne;break}if(be===-1)break}const me=w[be];me&&me.connect(ve)}}function V(J,pe){pe===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(pe.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let pe=J.near,ve=J.far;m.texture!==null&&(m.depthNear>0&&(pe=m.depthNear),m.depthFar>0&&(ve=m.depthFar)),W.near=I.near=R.near=pe,W.far=I.far=R.far=ve,(L!==W.near||G!==W.far)&&(s.updateRenderState({depthNear:W.near,depthFar:W.far}),L=W.near,G=W.far),W.layers.mask=J.layers.mask|6,R.layers.mask=W.layers.mask&-5,I.layers.mask=W.layers.mask&-3;const be=J.parent,me=W.cameras;V(W,be);for(let Ne=0;Ne<me.length;Ne++)V(me[Ne],be);W.projectionMatrix.copy(R.projectionMatrix),W.projectionMatrixInverse.copy(R.projectionMatrixInverse),P===null&&J.isPerspectiveCamera&&(P={camera:J,fov:J.fov,zoom:J.zoom}),Z(J,W,be)};function Z(J,pe,ve){ve===null?J.matrix.copy(pe.matrixWorld):(J.matrix.copy(ve.matrixWorld),J.matrix.invert(),J.matrix.multiply(pe.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(pe.projectionMatrix),J.projectionMatrixInverse.copy(pe.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=qa*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(J){l=J,u!==null&&(u.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(W)},this.getCameraTexture=function(J){return p[J]};let ee=null;function Me(J,pe){if(h=pe.getViewerPose(c||a),g=pe,h!==null){const ve=h.views;f!==null&&(e.setRenderTargetFramebuffer(A,f.framebuffer),e.setRenderTarget(A));let be=!1;ve.length!==W.cameras.length&&(W.cameras.length=0,be=!0);for(let we=0;we<ve.length;we++){const Je=ve[we];let je=null;if(f!==null)je=f.getViewport(Je);else{const xt=d.getViewSubImage(u,Je);je=xt.viewport,we===0&&(e.setRenderTargetTextures(A,xt.colorTexture,xt.depthStencilTexture),e.setRenderTarget(A))}let He=O[we];He===void 0&&(He=new kt,He.layers.enable(we),He.viewport=new at,O[we]=He),He.matrix.fromArray(Je.transform.matrix),He.matrix.decompose(He.position,He.quaternion,He.scale),He.projectionMatrix.fromArray(Je.projectionMatrix),He.projectionMatrixInverse.copy(He.projectionMatrix).invert(),He.viewport.set(je.x,je.y,je.width,je.height),we===0&&(W.matrix.copy(He.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),be===!0&&W.cameras.push(He)}const me=s.enabledFeatures;if(me&&me.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&S){d=n.getBinding();const we=d.getDepthInformation(ve[0]);we&&we.isValid&&we.texture&&m.init(we,s.renderState)}if(me&&me.includes("camera-access")&&S){e.state.unbindTexture(),d=n.getBinding();for(let we=0;we<ve.length;we++){const Je=ve[we].camera;if(Je){let je=p[Je];je||(je=new lu,p[Je]=je);const He=d.getCameraImage(Je);je.sourceTexture=He}}}}for(let ve=0;ve<w.length;ve++){const be=b[ve],me=w[ve];be!==null&&me!==void 0&&me.update(be,pe,c||a)}ee&&ee(J,pe),pe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:pe}),g=null}const De=new mu;De.setAnimationLoop(Me),this.setAnimationLoop=function(J){ee=J},this.dispose=function(){}}}const hS=new Ze,bu=new Le;bu.set(-1,0,0,0,1,0,0,0,1);function dS(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,cu(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,M,T,A){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,A)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),S(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,M,T):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ft&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ft&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=e.get(p),T=M.envMap,A=M.envMapRotation;T&&(m.envMap.value=T,m.envMapRotation.value.setFromMatrix4(hS.makeRotationFromEuler(A)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(bu),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,T){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=T*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.diffuseRoughness>0&&(m.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=p.diffuseRoughnessMap,t(p.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ft&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function S(m,p){const M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function fS(i,e,t,n){let s={},r={};function a(M,T){const A=T.program;n.uniformBlockBinding(M,A,s[M.id])}function o(M,T){let A=s[M.id];A===void 0&&(g(M),A=l(M),s[M.id]=A,M.addEventListener("dispose",m));const w=T.program;n.updateUBOMapping(M,w);const b=e.render.frame;r[M.id]!==b&&(c(M),r[M.id]=b)}function l(M){const T=i.createBuffer(),A=M.__size,w=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,A,w),i.bindBuffer(i.UNIFORM_BUFFER,null),T}function c(M){const T=s[M.id],A=M.uniforms,w=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let b=0,_=A.length;b<_;b++){const E=A[b];if(Array.isArray(E))for(let P=0,R=E.length;P<R;P++)h(E[P],b,P,w);else h(E,b,0,w)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(M,T,A,w){if(u(M,T,A,w)===!0){const b=M.__offset,_=M.value;if(Array.isArray(_)){let E=0;for(let P=0;P<_.length;P++){const R=_[P],I=S(R,!0);d(R,M.__data,E),E+=I.storage/Float32Array.BYTES_PER_ELEMENT}}else d(_,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,b,M.__data)}}function d(M,T,A){typeof M=="number"||typeof M=="boolean"?T[A]=M:M.isMatrix3?(T[A]=M.elements[0],T[A+1]=M.elements[1],T[A+2]=M.elements[2],T[A+3]=0,T[A+4]=M.elements[3],T[A+5]=M.elements[4],T[A+6]=M.elements[5],T[A+7]=0,T[A+8]=M.elements[6],T[A+9]=M.elements[7],T[A+10]=M.elements[8],T[A+11]=0):ArrayBuffer.isView(M)?T.set(M.subarray(0,T.length-A),A):M.toArray(T,A)}function u(M,T,A,w){const b=M.value,_=T+"_"+A;if(Array.isArray(b)){w[_]===void 0&&(w[_]=[]);const E=w[_];let P=!1;for(let R=0;R<b.length;R++)f(b[R],E,R)===!0&&(P=!0);return P}return f(b,w,_)}function f(M,T,A){if(T[A]===void 0)return typeof M=="number"||typeof M=="boolean"?T[A]=M:ArrayBuffer.isView(M)?T[A]=M.slice():T[A]=M.clone(),!0;{const w=T[A];if(typeof M=="number"||typeof M=="boolean"){if(w!==M)return T[A]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(w.equals(M)===!1)return w.copy(M),!0}}return!1}function g(M){const T=M.uniforms;let A=0;const w=16;for(let _=0,E=T.length;_<E;_++){const P=Array.isArray(T[_])?T[_]:[T[_]];for(let R=0,I=P.length;R<I;R++){const O=P[R],W=Array.isArray(O.value)?O.value:[O.value],L=Array.isArray(T[_])||Array.isArray(O.value);let G=A;for(let H=0,j=W.length;H<j;H++){const V=W[H],Z=S(V,L),ee=A%w,Me=ee%Z.boundary,De=ee+Me;A+=Me,De!==0&&w-De<Z.storage&&(A+=w-De),H===0&&(G=A),A+=Z.storage}const Y=O.type==="int"?Int32Array:O.type==="uint"?Uint32Array:Float32Array;O.__data=new Y((A-G)/Float32Array.BYTES_PER_ELEMENT),O.__offset=G}}const b=A%w;return b>0&&(A+=w-b),M.__size=A,M.__cache={},this}function S(M,T){const A={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(A.boundary=4,A.storage=4):M.isVector2?(A.boundary=8,A.storage=8):M.isVector3||M.isColor?(A.boundary=16,A.storage=12):M.isVector4?(A.boundary=16,A.storage=16):M.isMatrix3?(A.boundary=16,A.storage=48):M.isMatrix4?(A.boundary=16,A.storage=64):M.isTexture?Re("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(A.boundary=16,A.storage=M.byteLength):Re("WebGLRenderer: Unsupported uniform value type.",M),T===!0&&(A.boundary=16,A.storage=Math.ceil(A.storage/16)*16),A}function m(M){const T=M.target;T.removeEventListener("dispose",m),i.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function p(){for(const M in s)i.deleteBuffer(s[M]);s={},r={}}return{bind:a,update:o,dispose:p}}const pS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let an=null;function mS(){return an===null&&(an=new iu(pS,16,16,$n,hn),an.name="DFG_LUT",an.minFilter=Nt,an.magFilter=Nt,an.wrapS=Mn,an.wrapT=Mn,an.generateMipmaps=!1,an.needsUpdate=!0),an}class Tu{constructor(e={}){const{canvas:t=Im(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=zt}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;const S=f,m=new Set([uo,co,lo]),p=new Set([zt,un,as,Ri,ro,ao]),M=new Uint32Array(4),T=new Int32Array(4),A={textures:[],min:[],max:[],resolution:[]};let w=null,b=null;const _=[],E=[];let P=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=En,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let I=!1,O=null,W=null,L=null,G=null;this._outputColorSpace=It;let Y=0,H=0,j=null,V=-1,Z=null;const ee=new at,Me=new at;let De=null;const J=new ze(0);let pe=0,ve=t.width,be=t.height,me=1,Ne=null,lt=null;const we=new at(0,0,ve,be),Je=new at(0,0,ve,be);let je=!1;const He=new cs,xt=new fo;let ht=!1,Dt=!1;const st=new Ze,sn=new k,mt=new at,Vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Wt=!1;function Xt(){return j===null?me:1}let U=n;function qt(x,D){return t.getContext(x,D)}let nt,it,he,dt,Te,Pe,y,v,F,te,$,se,ce,q,K,ae,C,Q,X,oe,ie,re,Ae;try{const x={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${no}`),t.addEventListener("webglcontextlost",ye,!1),t.addEventListener("webglcontextrestored",Fe,!1),t.addEventListener("webglcontextcreationerror",de,!1),U===null){const D="webgl2";if(U=qt(D,x),U===null)throw qt(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Be()}catch(x){throw t.removeEventListener("webglcontextlost",ye,!1),t.removeEventListener("webglcontextrestored",Fe,!1),t.removeEventListener("webglcontextcreationerror",de,!1),Ye("WebGLRenderer: "+x.message),x}function Be(){nt=new xv(U),nt.init(),ie=new aS(U,nt),it=new lv(U,nt,e,ie),he=new sS(U,nt),it.reversedDepthBuffer&&u&&he.buffers.depth.setReversed(!0),W=U.createFramebuffer(),L=U.createFramebuffer(),G=U.createFramebuffer(),dt=new Ev(U),Te=new Wx,Pe=new rS(U,nt,he,Te,it,ie,dt),y=new vv(R),v=new yg(U),re=new av(U,v),F=new Sv(U,v,dt,re),te=new yv(U,F,v,re,dt),Q=new Av(U,it,Pe),K=new cv(Te),$=new Vx(R,y,nt,it,re,K),se=new dS(R,Te),ce=new qx,q=new $x(nt),C=new rv(R,y,he,te,g,l),ae=new iS(R,te,it),Ae=new fS(U,dt,it,he),X=new ov(U,nt,dt),oe=new Mv(U,nt,dt),dt.programs=$.programs,R.capabilities=it,R.extensions=nt,R.properties=Te,R.renderLists=ce,R.shadowMap=ae,R.state=he,R.info=dt}S!==zt&&(P=new Tv(S,t.width,t.height,o,s,r));const ne=new uS(R,U);this.xr=ne,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const x=nt.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=nt.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return me},this.setPixelRatio=function(x){x!==void 0&&(me=x,this.setSize(ve,be,!1))},this.getSize=function(x){return x.set(ve,be)},this.setSize=function(x,D,z=!0){if(ne.isPresenting){Re("WebGLRenderer: Can't change size while VR device is presenting.");return}ve=x,be=D,t.width=Math.floor(x*me),t.height=Math.floor(D*me),z===!0&&(t.style.width=x+"px",t.style.height=D+"px"),P!==null&&P.setSize(t.width,t.height),this.setViewport(0,0,x,D)},this.getDrawingBufferSize=function(x){return x.set(ve*me,be*me).floor()},this.setDrawingBufferSize=function(x,D,z){ve=x,be=D,me=z,t.width=Math.floor(x*z),t.height=Math.floor(D*z),this.setViewport(0,0,x,D)},this.setEffects=function(x){if(S===zt){Ye("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(x){for(let D=0;D<x.length;D++)if(x[D].isOutputPass===!0){Re("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(x||[])},this.getCurrentViewport=function(x){return x.copy(ee)},this.getViewport=function(x){return x.copy(we)},this.setViewport=function(x,D,z,N){x.isVector4?we.set(x.x,x.y,x.z,x.w):we.set(x,D,z,N),he.viewport(ee.copy(we).multiplyScalar(Xt()).round())},this.getScissor=function(x){return x.copy(Je)},this.setScissor=function(x,D,z,N){x.isVector4?Je.set(x.x,x.y,x.z,x.w):Je.set(x,D,z,N),he.scissor(Me.copy(Je).multiplyScalar(Xt()).round())},this.getScissorTest=function(){return je},this.setScissorTest=function(x){he.setScissorTest(je=x)},this.setOpaqueSort=function(x){Ne=x},this.setTransparentSort=function(x){lt=x},this.getClearColor=function(x){return x.copy(C.getClearColor())},this.setClearColor=function(){C.setClearColor(...arguments)},this.getClearAlpha=function(){return C.getClearAlpha()},this.setClearAlpha=function(){C.setClearAlpha(...arguments)},this.clear=function(x=!0,D=!0,z=!0){let N=0;if(x){let B=!1;if(j!==null){const ue=j.texture.format;B=m.has(ue)}if(B){const ue=j.texture.type,_e=p.has(ue),le=C.getClearColor(),ge=C.getClearAlpha(),Ee=le.r,Ie=le.g,Ge=le.b;_e?(M[0]=Ee,M[1]=Ie,M[2]=Ge,M[3]=ge,U.clearBufferuiv(U.COLOR,0,M)):(T[0]=Ee,T[1]=Ie,T[2]=Ge,T[3]=ge,U.clearBufferiv(U.COLOR,0,T))}else N|=U.COLOR_BUFFER_BIT}D&&(N|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),z&&(N|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N!==0&&U.clear(N)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(x){x.setRenderer(this),O=x},this.dispose=function(){t.removeEventListener("webglcontextlost",ye,!1),t.removeEventListener("webglcontextrestored",Fe,!1),t.removeEventListener("webglcontextcreationerror",de,!1),C.dispose(),ce.dispose(),q.dispose(),Pe.dispose(),Te.dispose(),y.dispose(),te.dispose(),F.dispose(),re.dispose(),Ae.dispose(),$.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",Eo),ne.removeEventListener("sessionend",Ao),zn.stop()};function ye(x){x.preventDefault(),or("WebGLRenderer: Context Lost."),I=!0}function Fe(){or("WebGLRenderer: Context Restored."),I=!1;const x=dt.autoReset,D=ae.enabled,z=ae.autoUpdate,N=ae.needsUpdate,B=ae.type;Be(),dt.autoReset=x,ae.enabled=D,ae.autoUpdate=z,ae.needsUpdate=N,ae.type=B}function de(x){Ye("WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function Qe(x){const D=x.target;D.removeEventListener("dispose",Qe),gt(D)}function gt(x){Tn(x),Te.remove(x)}function Tn(x){const D=Te.get(x).programs;D!==void 0&&(D.forEach(function(z){$.releaseProgram(z)}),x.isShaderMaterial&&$.releaseShaderCache(x))}this.renderBufferDirect=function(x,D,z,N,B,ue){D===null&&(D=Vt);const _e=B.isMesh&&B.matrixWorld.determinantAffine()<0,le=Ou(x,D,z,N,B);he.setMaterial(N,_e);let ge=z.index,Ee=1;if(N.wireframe===!0){if(ge=F.getWireframeAttribute(z),ge===void 0)return;Ee=2}const Ie=z.drawRange,Ge=z.attributes.position;let xe=Ie.start*Ee,Ve=(Ie.start+Ie.count)*Ee;ue!==null&&(xe=Math.max(xe,ue.start*Ee),Ve=Math.min(Ve,(ue.start+ue.count)*Ee)),ge!==null?(xe=Math.max(xe,0),Ve=Math.min(Ve,ge.count)):Ge!=null&&(xe=Math.max(xe,0),Ve=Math.min(Ve,Ge.count));const ct=Ve-xe;if(ct<0||ct===1/0)return;re.setup(B,N,le,z,ge);let tt,et=X;if(ge!==null&&(tt=v.get(ge),et=oe,et.setIndex(tt)),B.isMesh)N.wireframe===!0?(he.setLineWidth(N.wireframeLinewidth*Xt()),et.setMode(U.LINES)):et.setMode(U.TRIANGLES);else if(B.isLine){let Mt=N.linewidth;Mt===void 0&&(Mt=1),he.setLineWidth(Mt*Xt()),B.isLineSegments?et.setMode(U.LINES):B.isLineLoop?et.setMode(U.LINE_LOOP):et.setMode(U.LINE_STRIP)}else B.isPoints?et.setMode(U.POINTS):B.isSprite&&et.setMode(U.TRIANGLES);if(B.isBatchedMesh)if(nt.get("WEBGL_multi_draw"))et.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Mt=B._multiDrawStarts,Se=B._multiDrawCounts,Rt=B._multiDrawCount,Ke=ge?v.get(ge).bytesPerElement:1,Hn=Te.get(N).currentProgram.getUniforms();for(let Et=0;Et<Rt;Et++)Hn.setValue(U,"_gl_DrawID",Et),et.render(Mt[Et]/Ke,Se[Et])}else if(B.isInstancedMesh)et.renderInstances(xe,ct,B.count);else if(z.isInstancedBufferGeometry){const Mt=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Se=Math.min(z.instanceCount,Mt);et.renderInstances(xe,ct,Se)}else et.render(xe,ct)};function Mo(x,D,z,N){O!==null&&x.isNodeMaterial&&O.setObject(N,x),ht===!0&&K.setState(x,z,!1),x.transparent===!0&&x.side===Sn&&x.forceSinglePass===!1?(x.side=Ft,x.needsUpdate=!0,Bi(x,D,N),x.side=Qn,x.needsUpdate=!0,Bi(x,D,N),x.side=Sn):Bi(x,D,N)}this.compile=function(x,D,z=null){z===null&&(z=x),O!==null&&O.renderStart(x,D,z),b=q.get(z),b.init(D),E.push(b),z.traverseVisible(function(B){B.isLight&&B.layers.test(D.layers)&&(b.pushLight(B),B.castShadow&&b.pushShadow(B))}),x!==z&&x.traverseVisible(function(B){B.isLight&&B.layers.test(D.layers)&&(b.pushLight(B),B.castShadow&&b.pushShadow(B))}),b.setupLights(),O!==null&&O.updateLights(b.state.lightsArray),Dt=this.localClippingEnabled,ht=K.init(this.clippingPlanes,Dt),ht===!0&&K.setGlobalState(this.clippingPlanes,D),O!==null&&ae.render(b.state.shadowsArray,z,D);const N=new Set;return x.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const ue=B.material;if(ue)if(Array.isArray(ue))for(let _e=0;_e<ue.length;_e++){const le=ue[_e];Mo(le,z,D,B),N.add(le)}else Mo(ue,z,D,B),N.add(ue)}),b=E.pop(),O!==null&&O.renderEnd(),N},this.compileAsync=function(x,D,z=null){const N=this.compile(x,D,z);return new Promise(B=>{function ue(){if(N.forEach(function(_e){const ge=Te.get(_e).currentProgram;(ge===void 0||ge.isReady())&&N.delete(_e)}),N.size===0){B(x);return}setTimeout(ue,10)}nt.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let Ar=null;function Nu(x){Ar&&Ar(x)}function Eo(){zn.stop()}function Ao(){zn.start()}const zn=new mu;zn.setAnimationLoop(Nu),typeof self<"u"&&zn.setContext(self),this.setAnimationLoop=function(x){Ar=x,ne.setAnimationLoop(x),x===null?zn.stop():zn.start()},ne.addEventListener("sessionstart",Eo),ne.addEventListener("sessionend",Ao),this.render=function(x,D){if(D!==void 0&&D.isCamera!==!0){Ye("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;O!==null&&O.renderStart(x,D);const z=ne.enabled===!0&&ne.isPresenting===!0,N=P!==null&&(j===null||z)&&P.begin(R,j);if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(D),D=ne.getCamera()),x.isScene===!0&&x.onBeforeRender(R,x,D,j),b=q.get(x,E.length),b.init(D),b.state.textureUnits=Pe.getTextureUnits(),E.push(b),st.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),D.isArrayCamera?xt.setFromArrayCamera(D):He.setFromProjectionMatrix(st,tn,D.reversedDepth),Dt=this.localClippingEnabled,ht=K.init(this.clippingPlanes,Dt),w=ce.get(x,_.length),w.init(),_.push(w),this.info.render.frame++,ne.enabled===!0&&ne.isPresenting===!0){const _e=R.xr.getDepthSensingMesh();_e!==null&&yr(_e,D,-1/0,R.sortObjects)}yr(x,D,0,R.sortObjects),w.finish(),O!==null&&O.updateLights(b.state.lightsArray),R.sortObjects===!0&&w.sort(Ne,lt),Wt=ne.enabled===!1||ne.isPresenting===!1||ne.hasDepthSensing()===!1,Wt&&C.addToRenderList(w,x),this.info.autoReset===!0&&this.info.reset(),ht===!0&&K.beginShadows();const B=b.state.shadowsArray;if(ae.render(B,x,D),ht===!0&&K.endShadows(),(N&&P.hasRenderPass())===!1){const _e=w.opaque,le=w.transmissive;if(b.setupLights(),D.isArrayCamera){const ge=D.cameras;if(le.length>0)for(let Ee=0,Ie=ge.length;Ee<Ie;Ee++){const Ge=ge[Ee];bo(_e,le,x,Ge)}Wt&&C.render(x);for(let Ee=0,Ie=ge.length;Ee<Ie;Ee++){const Ge=ge[Ee];yo(w,x,Ge,Ge.viewport)}}else le.length>0&&bo(_e,le,x,D),Wt&&C.render(x),yo(w,x,D)}j!==null&&H===0&&(Pe.updateMultisampleRenderTarget(j),Pe.updateRenderTargetMipmap(j)),N&&P.end(R),x.isScene===!0&&x.onAfterRender(R,x,D),re.resetDefaultState(),V=-1,Z=null,E.pop(),E.length>0?(b=E[E.length-1],Pe.setTextureUnits(b.state.textureUnits),ht===!0&&K.setGlobalState(R.clippingPlanes,b.state.camera)):b=null,_.pop(),_.length>0?w=_[_.length-1]:w=null,O!==null&&O.renderEnd()};function yr(x,D,z,N){if(x.visible===!1)return;if(x.layers.test(D.layers)){if(x.isGroup)z=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(D);else if(x.isLight)b.pushLight(x),x.castShadow&&b.pushShadow(x);else if(x.isSprite){const _e=D.isArrayCamera?xt:He;if(!x.frustumCulled||x.intersectsFrustum(_e)){N&&mt.setFromMatrixPosition(x.matrixWorld).applyMatrix4(st);const le=te.update(x),ge=x.material;ge.visible&&w.push(x,le,ge,z,mt.z,null,D)}}else if(x.isMesh||x.isLine||x.isPoints){const _e=D.isArrayCamera?xt:He;if(!x.frustumCulled||x.intersectsFrustum(_e)){const le=te.update(x),ge=x.material;if(N&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),mt.copy(x.boundingSphere.center)):(le.boundingSphere===null&&le.computeBoundingSphere(),mt.copy(le.boundingSphere.center)),mt.applyMatrix4(x.matrixWorld).applyMatrix4(st)),Array.isArray(ge)){const Ee=le.groups;for(let Ie=0,Ge=Ee.length;Ie<Ge;Ie++){const xe=Ee[Ie],Ve=ge[xe.materialIndex];Ve&&Ve.visible&&w.push(x,le,Ve,z,mt.z,xe,D)}}else ge.visible&&w.push(x,le,ge,z,mt.z,null,D)}}}const ue=x.children;for(let _e=0,le=ue.length;_e<le;_e++)yr(ue[_e],D,z,N)}function yo(x,D,z,N){const{opaque:B,transmissive:ue,transparent:_e}=x;b.setupLightsView(z),ht===!0&&K.setGlobalState(R.clippingPlanes,z),N&&he.viewport(ee.copy(N)),B.length>0&&hs(B,D,z),ue.length>0&&hs(ue,D,z),_e.length>0&&hs(_e,D,z),he.buffers.depth.setTest(!0),he.buffers.depth.setMask(!0),he.buffers.color.setMask(!0),he.setPolygonOffset(!1)}function bo(x,D,z,N){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[N.id]===void 0){const xe=nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[N.id]=new cn(1,1,{generateMipmaps:!0,type:xe?hn:zt,minFilter:Fn,samples:Math.max(4,it.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:We.workingColorSpace})}const ue=b.state.transmissionRenderTarget[N.id],_e=N.viewport||ee;ue.setSize(_e.z*R.transmissionResolutionScale,_e.w*R.transmissionResolutionScale);const le=R.getRenderTarget(),ge=R.getActiveCubeFace(),Ee=R.getActiveMipmapLevel();R.setRenderTarget(ue),R.getClearColor(J),pe=R.getClearAlpha(),pe<1&&R.setClearColor(16777215,.5),R.clear(),Wt&&C.render(z);const Ie=R.toneMapping;R.toneMapping=En;const Ge=N.viewport;if(N.viewport!==void 0&&(N.viewport=void 0),b.setupLightsView(N),ht===!0&&K.setGlobalState(R.clippingPlanes,N),hs(x,z,N),Pe.updateMultisampleRenderTarget(ue),Pe.updateRenderTargetMipmap(ue),nt.has("WEBGL_multisampled_render_to_texture")===!1){let xe=!1;for(let Ve=0,ct=D.length;Ve<ct;Ve++){const tt=D[Ve],{object:et,geometry:Mt,material:Se,group:Rt}=tt;if(Se.side===Sn&&et.layers.test(N.layers)){const Ke=Se.side;Se.side=Ft,Se.needsUpdate=!0,To(et,z,N,Mt,Se,Rt),Se.side=Ke,Se.needsUpdate=!0,xe=!0}}xe===!0&&(Pe.updateMultisampleRenderTarget(ue),Pe.updateRenderTargetMipmap(ue))}R.setRenderTarget(le,ge,Ee),R.setClearColor(J,pe),Ge!==void 0&&(N.viewport=Ge),R.toneMapping=Ie}function hs(x,D,z){const N=D.isScene===!0?D.overrideMaterial:null;for(let B=0,ue=x.length;B<ue;B++){const _e=x[B],{object:le,geometry:ge,group:Ee}=_e;let Ie=_e.material;Ie.allowOverride===!0&&N!==null&&(Ie=N),le.layers.test(z.layers)&&To(le,D,z,ge,Ie,Ee)}}function To(x,D,z,N,B,ue){O!==null&&B.isNodeMaterial&&O.setObject(x,B),x.onBeforeRender(R,D,z,N,B,ue),x.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),B.onBeforeRender(R,D,z,N,x,ue),B.transparent===!0&&B.side===Sn&&B.forceSinglePass===!1?(B.side=Ft,B.needsUpdate=!0,R.renderBufferDirect(z,D,N,B,x,ue),B.side=Qn,B.needsUpdate=!0,R.renderBufferDirect(z,D,N,B,x,ue),B.side=Sn):R.renderBufferDirect(z,D,N,B,x,ue),x.onAfterRender(R,D,z,N,B,ue)}function wo(x){let D=0;for(const z of x)z.texture!==null&&D++;return D}function Bi(x,D,z){D.isScene!==!0&&(D=Vt);const N=Te.get(x),B=b.state.lights,ue=b.state.shadowsArray,_e=B.state.version,le=$.getParameters(x,B.state,ue,D,z,b.state.lightProbeGridArray),ge=$.getProgramCacheKey(le);let Ee=N.programs;N.environment=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?D.environment:null,N.fog=D.fog;const Ie=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap;N.envMap=y.get(x.envMap||N.environment,Ie),N.envMapRotation=N.environment!==null&&x.envMap===null?D.environmentRotation:x.envMapRotation,Ee===void 0&&(x.addEventListener("dispose",Qe),Ee=new Map,N.programs=Ee,N.programVariants=new Map);let Ge=Ee.get(ge);if(Ge!==void 0){if(N.currentProgram===Ge&&N.lightsStateVersion===_e)return Co(x,le),Ge}else le.uniforms=$.getUniforms(x),O!==null&&x.isNodeMaterial&&O.build(x,z,le),x.onBeforeCompile(le,R),Ge=$.acquireProgram(le,ge),Ee.set(ge,Ge),N.uniforms=le.uniforms;const xe=N.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(xe.clippingPlanes=K.uniform),Co(x,le),N.needsLights=ku(x),N.lightsStateVersion=_e,N.needsLights&&(xe.ambientLightColor.value=B.state.ambient,xe.lightProbe.value=B.state.probe,xe.sunLights.value=B.state.sun,xe.sunLightShadows.value=B.state.sunShadow,xe.directionalLights.value=B.state.directional,xe.directionalLightShadows.value=B.state.directionalShadow,xe.spotLights.value=B.state.spot,xe.spotLightShadows.value=B.state.spotShadow,xe.rectAreaLights.value=B.state.rectArea,xe.ltc_1.value=B.state.rectAreaLTC1,xe.ltc_2.value=B.state.rectAreaLTC2,xe.pointLights.value=B.state.point,xe.pointLightShadows.value=B.state.pointShadow,xe.hemisphereLights.value=B.state.hemi,xe.sunShadowMatrix.value=B.state.sunShadowMatrix,xe.sunShadowCascade.value=B.state.sunShadowCascade,xe.directionalShadowMatrix.value=B.state.directionalShadowMatrix,xe.spotLightMatrix.value=B.state.spotLightMatrix,xe.spotLightMap.value=B.state.spotLightMap,xe.pointShadowMatrix.value=B.state.pointShadowMatrix),N.numLightProbeGrids=wo(b.state.lightProbeGridArray),N.currentProgram=Ge,N.uniformsList=null,Ge}function Fu(x,D,z,N,B){const ue=Te.get(x),_e=ue.currentProgram.id+","+N+","+B;let le=ue.programVariants.get(_e);return le===void 0?(le=Bi(x,D,z),ue.programVariants.set(_e,le)):(ue.currentProgram=le,ue.uniformsList=null,ue.outputColorSpace=N,ue.toneMapping=B),le}function Ro(x){if(x.uniformsList===null){const D=x.currentProgram.getUniforms();x.uniformsList=js.seqWithValue(D.seq,x.uniforms)}return x.uniformsList}function Co(x,D){const z=Te.get(x);z.outputColorSpace=D.outputColorSpace,z.batching=D.batching,z.batchingColor=D.batchingColor,z.instancing=D.instancing,z.instancingColor=D.instancingColor,z.instancingMorph=D.instancingMorph,z.skinning=D.skinning,z.morphTargets=D.morphTargets,z.morphNormals=D.morphNormals,z.morphColors=D.morphColors,z.morphTargetsCount=D.morphTargetsCount,z.numClippingPlanes=D.numClippingPlanes,z.numIntersection=D.numClipIntersection,z.vertexAlphas=D.vertexAlphas,z.vertexTangents=D.vertexTangents,z.toneMapping=D.toneMapping}function Ou(x,D,z,N,B){D.isScene!==!0&&(D=Vt),Pe.resetTextureUnits();const ue=D.fog,_e=N.isMeshStandardMaterial||N.isMeshLambertMaterial||N.isMeshPhongMaterial?D.environment:null,le=j===null?R.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:We.workingColorSpace,ge=N.isMeshStandardMaterial||N.isMeshLambertMaterial&&!N.envMap||N.isMeshPhongMaterial&&!N.envMap,Ee=y.get(N.envMap||_e,ge),Ie=N.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Ge=!!z.attributes.tangent&&(!!N.normalMap||N.anisotropy>0),xe=!!z.morphAttributes.position,Ve=!!z.morphAttributes.normal,ct=!!z.morphAttributes.color;let tt=En;N.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(tt=R.toneMapping);const et=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Mt=et!==void 0?et.length:0,Se=Te.get(N),Rt=b.state.lights;if(ht===!0&&(Dt===!0||x!==Z)){const rt=x===Z&&N.id===V;K.setState(N,x,rt)}let Ke=!1,Hn=!1;N.version===Se.__version?Se.needsLights&&Se.lightsStateVersion!==Rt.state.version||B.isBatchedMesh&&Se.batching===!1||!B.isBatchedMesh&&Se.batching===!0||B.isBatchedMesh&&Se.batchingColor===!0&&B._colorsTexture===null||B.isBatchedMesh&&Se.batchingColor===!1&&B._colorsTexture!==null||B.isInstancedMesh&&Se.instancing===!1||!B.isInstancedMesh&&Se.instancing===!0||B.isSkinnedMesh&&Se.skinning===!1||!B.isSkinnedMesh&&Se.skinning===!0||B.isInstancedMesh&&Se.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Se.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Se.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Se.instancingMorph===!1&&B.morphTexture!==null||Se.envMap!==Ee||N.fog===!0&&Se.fog!==ue||Se.numClippingPlanes!==void 0&&(Se.numClippingPlanes!==K.numPlanes||Se.numIntersection!==K.numIntersection)||Se.vertexAlphas!==Ie||Se.vertexTangents!==Ge||Se.morphTargets!==xe||Se.morphNormals!==Ve||Se.morphColors!==ct||Se.morphTargetsCount!==Mt||Se.numLightProbeGrids!==wo(b.state.lightProbeGridArray)?Ke=!0:(Se.outputColorSpace!==le||Se.toneMapping!==tt)&&(Hn=!0):(Ke=!0,Se.__version=N.version);let Et=Se.currentProgram;(Ke===!0||Hn===!0)&&(Et=Hn===!0?Fu(N,D,B,le,tt):Bi(N,D,B),O&&N.isNodeMaterial&&O.onUpdateProgram(N,Et,Se));let ds=!1,wn=!1,Gn=!1;const qe=Et.getUniforms(),St=Se.uniforms;if(he.useProgram(Et.program)&&(ds=!0,wn=!0,Gn=!0),N.id!==V&&(V=N.id,wn=!0),ds||Z!==x){he.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),qe.setValue(U,"projectionMatrix",x.projectionMatrix),qe.setValue(U,"viewMatrix",x.matrixWorldInverse);const _t=qe.map.cameraPosition;_t!==void 0&&_t.setValue(U,sn.setFromMatrixPosition(x.matrixWorld)),it.logarithmicDepthBuffer&&qe.setValue(U,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&qe.setValue(U,"isOrthographic",x.isOrthographicCamera===!0),Z!==x&&(Z=x,wn=!0,Gn=!0)}if(Se.needsLights&&(Rt.state.sunShadowMap.length>0&&qe.setValue(U,"sunShadowMap",Rt.state.sunShadowMap,Pe),Rt.state.directionalShadowMap.length>0&&qe.setValue(U,"directionalShadowMap",Rt.state.directionalShadowMap,Pe),Rt.state.spotShadowMap.length>0&&qe.setValue(U,"spotShadowMap",Rt.state.spotShadowMap,Pe),Rt.state.pointShadowMap.length>0&&qe.setValue(U,"pointShadowMap",Rt.state.pointShadowMap,Pe)),B.isSkinnedMesh){qe.setOptional(U,B,"bindMatrix"),qe.setOptional(U,B,"bindMatrixInverse");const rt=B.skeleton;rt&&(rt.boneTexture===null&&rt.computeBoneTexture(),qe.setValue(U,"boneTexture",rt.boneTexture,Pe))}B.isBatchedMesh&&(qe.setOptional(U,B,"batchingTexture"),qe.setValue(U,"batchingTexture",B._matricesTexture,Pe),qe.setOptional(U,B,"batchingIdTexture"),qe.setValue(U,"batchingIdTexture",B._indirectTexture,Pe),qe.setOptional(U,B,"batchingColorTexture"),B._colorsTexture!==null&&qe.setValue(U,"batchingColorTexture",B._colorsTexture,Pe));const Jt=z.morphAttributes;if((Jt.position!==void 0||Jt.normal!==void 0||Jt.color!==void 0)&&Q.update(B,z,Et),(wn||Se.receiveShadow!==B.receiveShadow)&&(Se.receiveShadow=B.receiveShadow,qe.setValue(U,"receiveShadow",B.receiveShadow)),(N.isMeshStandardMaterial||N.isMeshLambertMaterial||N.isMeshPhongMaterial)&&N.envMap===null&&D.environment!==null&&(St.envMapIntensity.value=D.environmentIntensity),St.dfgLUT!==void 0&&(St.dfgLUT.value=mS()),wn){if(qe.setValue(U,"toneMappingExposure",R.toneMappingExposure),Se.needsLights&&Bu(St,Gn),ue&&N.fog===!0&&se.refreshFogUniforms(St,ue),se.refreshMaterialUniforms(St,N,me,be,b.state.transmissionRenderTarget[x.id]),Se.needsLights&&Se.numLightProbeGrids>0){const rt=A;let _t=0;for(const pn of b.state.lightProbeGridArray)pn.texture!==null&&(rt.textures[_t]=pn.texture,rt.min[_t]=pn.boundingBox.min,rt.max[_t]=pn.boundingBox.max,rt.resolution[_t]=pn.resolution,_t++);for(const pn in rt)rt[pn].length=_t;St.probesSH.value=rt.textures,St.probesMin.value=rt.min,St.probesMax.value=rt.max,St.probesResolution.value=rt.resolution}js.upload(U,Ro(Se),St,Pe)}if(N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(js.upload(U,Ro(Se),St,Pe),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&qe.setValue(U,"center",B.center),qe.setValue(U,"modelViewMatrix",B.modelViewMatrix),qe.setValue(U,"normalMatrix",B.normalMatrix),qe.setValue(U,"modelMatrix",B.matrixWorld),N.uniformsGroups!==void 0){const rt=N.uniformsGroups;for(let _t=0,pn=rt.length;_t<pn;_t++){const Lo=rt[_t];Ae.update(Lo,Et),Ae.bind(Lo,Et)}}return Et}function Bu(x,D){x.ambientLightColor.needsUpdate=D,x.lightProbe.needsUpdate=D,x.sunLights.needsUpdate=D,x.sunLightShadows.needsUpdate=D,x.directionalLights.needsUpdate=D,x.directionalLightShadows.needsUpdate=D,x.pointLights.needsUpdate=D,x.pointLightShadows.needsUpdate=D,x.spotLights.needsUpdate=D,x.spotLightShadows.needsUpdate=D,x.rectAreaLights.needsUpdate=D,x.hemisphereLights.needsUpdate=D}function ku(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(x,D,z){const N=Te.get(x);N.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,N.__autoAllocateDepthBuffer===!1&&(N.__useRenderToTexture=!1),Te.get(x.texture).__webglTexture=D,Te.get(x.depthTexture).__webglTexture=N.__autoAllocateDepthBuffer?void 0:z,N.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,D){const z=Te.get(x);z.__webglFramebuffer=D,z.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(x,D=0,z=0){j=x,Y=D,H=z;let N=null,B=!1,ue=!1;if(x){const le=Te.get(x);if(le.__useDefaultFramebuffer!==void 0){he.bindFramebuffer(U.FRAMEBUFFER,le.__webglFramebuffer),ee.copy(x.viewport),Me.copy(x.scissor),De=x.scissorTest,he.viewport(ee),he.scissor(Me),he.setScissorTest(De),V=-1;return}else if(le.__webglFramebuffer===void 0)Pe.setupRenderTarget(x);else if(le.__hasExternalTextures)Pe.rebindTextures(x,Te.get(x.texture).__webglTexture,Te.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const Ie=x.depthTexture;if(le.__boundDepthTexture!==Ie){if(Ie!==null&&Te.has(Ie)&&(x.width!==Ie.image.width||x.height!==Ie.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Pe.setupDepthRenderbuffer(x)}}const ge=x.texture;(ge.isData3DTexture||ge.isDataArrayTexture||ge.isCompressedArrayTexture)&&(ue=!0);const Ee=Te.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Ee[D])?N=Ee[D][z]:N=Ee[D],B=!0):x.samples>0&&Pe.useMultisampledRTT(x)===!1?N=Te.get(x).__webglMultisampledFramebuffer:Array.isArray(Ee)?N=Ee[z]:N=Ee,ee.copy(x.viewport),Me.copy(x.scissor),De=x.scissorTest}else ee.copy(we).multiplyScalar(me).floor(),Me.copy(Je).multiplyScalar(me).floor(),De=je;if(z!==0&&(N=W),he.bindFramebuffer(U.FRAMEBUFFER,N)&&he.drawBuffers(x,N),he.viewport(ee),he.scissor(Me),he.setScissorTest(De),B){const le=Te.get(x.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+D,le.__webglTexture,z)}else if(ue){const le=D;for(let ge=0;ge<x.textures.length;ge++){const Ee=Te.get(x.textures[ge]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+ge,Ee.__webglTexture,z,le)}}else if(x!==null&&z!==0){const le=Te.get(x.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,le.__webglTexture,z)}V=-1};function Po(x){const D=Te.get(x);return(D.__readFormat!==x.format||D.__readType!==x.type)&&(D.__readFormat=x.format,D.__readType=x.type,D.__formatReadable=it.textureFormatReadable(x.format),D.__typeReadable=it.textureTypeReadable(x.type)),D}this.readRenderTargetPixels=function(x,D,z,N,B,ue,_e,le=0){if(!(x&&x.isWebGLRenderTarget)){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ge=Te.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&_e!==void 0&&(ge=ge[_e],Array.isArray(ge)&&(ge=ge[0])),ge){he.bindFramebuffer(U.FRAMEBUFFER,ge);try{const Ee=x.textures[le],Ie=Ee.format,Ge=Ee.type;x.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+le);const xe=Po(Ee);if(xe.__formatReadable===!1){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(xe.__typeReadable===!1){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=x.width-N&&z>=0&&z<=x.height-B&&U.readPixels(D,z,N,B,ie.convert(Ie),ie.convert(Ge),ue)}finally{const Ee=j!==null?Te.get(j).__webglFramebuffer:null;he.bindFramebuffer(U.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(x,D,z,N,B,ue,_e,le=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ge=Te.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&_e!==void 0&&(ge=ge[_e],Array.isArray(ge)&&(ge=ge[0])),ge)if(D>=0&&D<=x.width-N&&z>=0&&z<=x.height-B){he.bindFramebuffer(U.FRAMEBUFFER,ge);const Ee=x.textures[le],Ie=Ee.format,Ge=Ee.type;x.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+le);const xe=Po(Ee);if(xe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(xe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ve=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Ve),U.bufferData(U.PIXEL_PACK_BUFFER,ue.byteLength,U.STREAM_READ),U.readPixels(D,z,N,B,ie.convert(Ie),ie.convert(Ge),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);const ct=j!==null?Te.get(j).__webglFramebuffer:null;he.bindFramebuffer(U.FRAMEBUFFER,ct);const tt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Um(U,tt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Ve),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,ue),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(Ve),U.deleteSync(tt),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,D=null,z=0){const N=Math.pow(2,-z),B=Math.floor(x.image.width*N),ue=Math.floor(x.image.height*N),_e=D!==null?D.x:0,le=D!==null?D.y:0;Pe.setTexture2D(x,0),U.copyTexSubImage2D(U.TEXTURE_2D,z,0,0,_e,le,B,ue),he.unbindTexture()},this.copyTextureToTexture=function(x,D,z=null,N=null,B=0,ue=0){let _e,le,ge,Ee,Ie,Ge,xe,Ve,ct;const tt=x.isCompressedTexture?x.mipmaps[ue]:x.image;if(z!==null)_e=z.max.x-z.min.x,le=z.max.y-z.min.y,ge=z.isBox3?z.max.z-z.min.z:1,Ee=z.min.x,Ie=z.min.y,Ge=z.isBox3?z.min.z:0;else{const qe=Math.pow(2,-B);_e=Math.floor(tt.width*qe),le=Math.floor(tt.height*qe),x.isDataArrayTexture?ge=tt.depth:x.isData3DTexture?ge=Math.floor(tt.depth*qe):ge=1,Ee=0,Ie=0,Ge=0}N!==null?(xe=N.x,Ve=N.y,ct=N.z):(xe=0,Ve=0,ct=0);const et=ie.convert(D.format),Mt=ie.convert(D.type);let Se;D.isData3DTexture?(Pe.setTexture3D(D,0),Se=U.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(Pe.setTexture2DArray(D,0),Se=U.TEXTURE_2D_ARRAY):(Pe.setTexture2D(D,0),Se=U.TEXTURE_2D),he.activeTexture(U.TEXTURE0),he.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,D.flipY),he.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),he.pixelStorei(U.UNPACK_ALIGNMENT,D.unpackAlignment);const Rt=he.getParameter(U.UNPACK_ROW_LENGTH),Ke=he.getParameter(U.UNPACK_IMAGE_HEIGHT),Hn=he.getParameter(U.UNPACK_SKIP_PIXELS),Et=he.getParameter(U.UNPACK_SKIP_ROWS),ds=he.getParameter(U.UNPACK_SKIP_IMAGES);he.pixelStorei(U.UNPACK_ROW_LENGTH,tt.width),he.pixelStorei(U.UNPACK_IMAGE_HEIGHT,tt.height),he.pixelStorei(U.UNPACK_SKIP_PIXELS,Ee),he.pixelStorei(U.UNPACK_SKIP_ROWS,Ie),he.pixelStorei(U.UNPACK_SKIP_IMAGES,Ge);const wn=x.isDataArrayTexture||x.isData3DTexture,Gn=D.isDataArrayTexture||D.isData3DTexture;if(x.isDepthTexture){const qe=Te.get(x),St=Te.get(D),Jt=Te.get(qe.__renderTarget),rt=Te.get(St.__renderTarget);he.bindFramebuffer(U.READ_FRAMEBUFFER,Jt.__webglFramebuffer),he.bindFramebuffer(U.DRAW_FRAMEBUFFER,rt.__webglFramebuffer);for(let _t=0;_t<ge;_t++)wn&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Te.get(x).__webglTexture,B,Ge+_t),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Te.get(D).__webglTexture,ue,ct+_t)),U.blitFramebuffer(Ee,Ie,Ee+_e,Ie+le,xe,Ve,xe+_e,Ve+le,U.DEPTH_BUFFER_BIT,U.NEAREST);he.bindFramebuffer(U.READ_FRAMEBUFFER,null),he.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(B!==0||x.isRenderTargetTexture||Te.has(x)){const qe=Te.get(x),St=Te.get(D);he.bindFramebuffer(U.READ_FRAMEBUFFER,L),he.bindFramebuffer(U.DRAW_FRAMEBUFFER,G);for(let Jt=0;Jt<ge;Jt++)wn?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,qe.__webglTexture,B,Ge+Jt):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,qe.__webglTexture,B),Gn?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,St.__webglTexture,ue,ct+Jt):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,St.__webglTexture,ue),B!==0?U.blitFramebuffer(Ee,Ie,Ee+_e,Ie+le,xe,Ve,xe+_e,Ve+le,U.COLOR_BUFFER_BIT,U.NEAREST):Gn?U.copyTexSubImage3D(Se,ue,xe,Ve,ct+Jt,Ee,Ie,_e,le):U.copyTexSubImage2D(Se,ue,xe,Ve,Ee,Ie,_e,le);he.bindFramebuffer(U.READ_FRAMEBUFFER,null),he.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Gn?x.isDataTexture||x.isData3DTexture?U.texSubImage3D(Se,ue,xe,Ve,ct,_e,le,ge,et,Mt,tt.data):D.isCompressedArrayTexture?U.compressedTexSubImage3D(Se,ue,xe,Ve,ct,_e,le,ge,et,tt.data):U.texSubImage3D(Se,ue,xe,Ve,ct,_e,le,ge,et,Mt,tt):x.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,ue,xe,Ve,_e,le,et,Mt,tt.data):x.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,ue,xe,Ve,tt.width,tt.height,et,tt.data):U.texSubImage2D(U.TEXTURE_2D,ue,xe,Ve,_e,le,et,Mt,tt);he.pixelStorei(U.UNPACK_ROW_LENGTH,Rt),he.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ke),he.pixelStorei(U.UNPACK_SKIP_PIXELS,Hn),he.pixelStorei(U.UNPACK_SKIP_ROWS,Et),he.pixelStorei(U.UNPACK_SKIP_IMAGES,ds),ue===0&&D.generateMipmaps===!0&&D.mipmapsAutoUpdate===!0&&U.generateMipmap(Se),he.unbindTexture()},this.initRenderTarget=function(x){Te.get(x).__webglFramebuffer===void 0&&Pe.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?Pe.setTextureCube(x,0):x.isData3DTexture?Pe.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?Pe.setTexture2DArray(x,0):Pe.setTexture2D(x,0),he.unbindTexture()},this.resetState=function(){Y=0,H=0,j=null,he.reset(),re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return tn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=We._getDrawingBufferColorSpace(e),t.unpackColorSpace=We._getUnpackColorSpace()}}const ec=.25,gS={health:null,until:-1/0};function _S(i,e,t){let n=i.health!==null&&e<i.health?t+ec:i.until;return n-t>ec&&(n=-1/0),{health:e,until:n}}function vS(i,e){return e<i.until}const fr=240,nn=1.2,wu=.6,xS=.35,pr=328708,Ru=1,Cu=11,ns=.7,Zn=1.05,Kn=.4,er=9079434,SS=16719904,tc=.04,MS=37,Pu=131586,Lu=5913120,mr=.8,gr=.45,ES=.35,go={wall:"wall",secret:"wall",door:"door",exit:"exit-door"},Du=new Set(["exit-door"]);function AS(i,e){const t=new Tu({canvas:i,antialias:!1});t.setPixelRatio(1);const n=new $c;n.background=new ze(pr),n.fog=new xr(pr,Ru,Cu);const s=new kt(75,4/3,.05,60);s.rotation.order="YXZ",n.add(s),n.add(new pu(16777215,.25));const r=new fu(16769712,2.2,9,1);s.add(r);const a=Iu();RS(n,e,a);const o=PS(n,e,a),l=CS(n,e),c=Uu(),h=yS(n,c),d=TS(n,e,c),u=wS(n,e,c),f=()=>{const g=window.innerWidth/Math.max(1,window.innerHeight);t.setSize(Math.round(fr*g),fr,!1),s.aspect=g,s.updateProjectionMatrix()};return window.addEventListener("resize",f),f(),{render(g){const{player:S}=g;s.position.set(S.x,S.crouching?xS:wu,S.y),s.rotation.y=-S.facing-Math.PI/2,o(g),l(g),h(g),d(g),u(g),t.render(n,s)}}}function Iu(){const i=new uu,e={};for(const t of Rp){const n=i.load(Cp(t));n.magFilter=ot,n.minFilter=ot,n.generateMipmaps=!1,n.colorSpace=It,n.wrapS=rs,n.wrapT=rs,e[t]=n}return e}function Uu(){const i=new uu,e={};for(const t of Pp){const n=i.load(Ac(t));n.magFilter=ot,n.minFilter=ot,n.generateMipmaps=!1,n.colorSpace=It,e[t]=n}return e}function yS(i,e){const t=a=>new Ci({map:e[a],alphaTest:.5,fog:!0,color:9079434}),n={shambler:t("shambler"),sprinter:t("sprinter")},s=t("zombie-dead"),r=new Map;return a=>{for(const o of r.values())o.visible=!1;for(const o of a.zombies){let l=r.get(o.id);l||(l=new Sr(n[o.kind]),l.scale.set(ns,Zn,1),i.add(l),r.set(o.id,l)),l.visible=!0,l.material=o.state==="dead"?s:n[o.kind],l.position.set(o.x,Zn/2,o.y)}}}function bS(i,e){const t=i*MS+e*2.1;return[tc*Math.sign(Math.sin(t))*Math.abs(Math.sin(t*1.7)),tc*Math.sin(t*2.3)]}function TS(i,e,t){const n=new Ci({map:t["survivor-dead"],alphaTest:.5,fog:!0,color:er}),s=e.survivors.map(()=>{const r=new Ci({map:t.survivor,alphaTest:.5,fog:!0,color:er}),a=new Sr(r);return a.scale.set(ns,Zn,1),i.add(a),{sprite:a,alive:r,flash:gS}});return r=>{for(const a of r.survivors){const o=s[a.id];if(!o)continue;o.flash=_S(o.flash,a.health,r.time),o.alive.color.setHex(vS(o.flash,r.time)?SS:er),o.sprite.visible=a.state!=="safe"&&a.risenAs===null;const l=a.state==="dead"||a.state==="turning";o.sprite.material=l?n:o.alive;const[c,h]=a.state==="turning"?bS(r.time,a.id):[0,0];o.sprite.position.set(a.x+c,Zn/2,a.y+h)}}}function wS(i,e,t){const n=e.pickups.map(({kind:s,col:r,row:a})=>{const o=new Ci({map:t[s],alphaTest:.5,fog:!0,color:9079434}),l=new Sr(o);return l.scale.set(Kn,Kn,1),l.position.set(r+.5,Kn/2,a+.5),i.add(l),l});return s=>{for(const r of n)r.visible=!1;for(const r of s.pickups){const a=n[r.id];a&&(a.visible=!0)}}}function RS(i,e,t){const{width:n,height:s}=e;for(const[r,a,o]of[["floor",0,-Math.PI/2],["ceiling",nn,Math.PI/2]]){const l=t[r].clone();l.repeat.set(n,s);const c=new wt(new bn(n,s),new Fi({map:l}));c.rotation.x=o,c.position.set(n/2,a,s/2),i.add(c)}}function CS(i,e){const t=new bn(1,1);t.rotateX(-Math.PI/2);const n=new cr({color:Pu}),s=new dn(mr,gr,mr),r=new Fi({color:Lu,opacity:ES});r.transparent=!1;const a=new Map;return e.cells.forEach((o,l)=>o.forEach((c,h)=>{if(c==="hole"){const d=new wt(t,n);d.position.set(h+.5,.01,l+.5),i.add(d)}else if(c==="furniture"){const d=new wt(s,r);d.position.set(h+.5,gr/2,l+.5),i.add(d),a.set(`${h},${l}`,d)}})),o=>{r.transparent!==o.player.crouching&&(r.transparent=o.player.crouching,r.needsUpdate=!0);for(const l of a.values())l.visible=!1;for(const{col:l,row:c}of o.furniture){const h=a.get(`${l},${c}`);h&&(h.visible=!0)}}}function PS(i,e,t){const n=new Map;e.cells.forEach((c,h)=>c.forEach((d,u)=>{const f=go[d];f&&(n.has(f)||n.set(f,[]),n.get(f).push({col:u,row:h}))}));const s=new dn(1,nn,1),r=new Ze,a=new Map;for(const[c,h]of n){const d=t[c].clone();d.repeat.set(1,Du.has(c)?1:nn);const u=new su(s,new Fi({map:d}),h.length);h.forEach(({col:f,row:g},S)=>{r.makeTranslation(f+.5,nn/2,g+.5),u.setMatrixAt(S,r),a.set(`${f},${g}`,{mesh:u,index:S})}),i.add(u)}const o=new Set,l=new Ze().makeScale(0,0,0);return c=>{for(const{col:h,row:d,state:u}of[...c.doors,...c.secretWalls]){const f=`${h},${d}`,g=a.get(f);!g||u==="open"===o.has(f)||(u==="open"?(g.mesh.setMatrixAt(g.index,l),o.add(f)):(g.mesh.setMatrixAt(g.index,r.makeTranslation(h+.5,nn/2,d+.5)),o.delete(f)),g.mesh.instanceMatrix.needsUpdate=!0)}}}const LS=[["WASD","Left stick","Move"],["Mouse","Right stick","Turn"],["Left click","R2","Attack"],["1 / 2","D-pad left / right","Crowbar / shotgun"],["","Triangle","Switch weapon"],["E","Square","Use"],["Shift (hold)","R3 (hold)","Crouch"],["Esc","Options","Pause"]];function DS(i,e,t){let n="",s=!1;return i.addEventListener("click",r=>{const a=r.target.closest("[data-action]");a&&(a.dataset.action==="select-level"?s=!0:a.dataset.action==="back"?s=!1:a.dataset.action==="level"&&t(a.dataset.level),n="")}),{render(r){const a=IS(r,e,s);a!==n&&(n=a,i.hidden=a==="",i.innerHTML=a)}}}function IS(i,e=[],t=!1){switch(i.screen){case"title":return t?`
        <div class="screen">
          <h1>SELECT LEVEL</h1>
          <div class="menu">
            ${e.map(n=>`<button data-action="level" data-level="${n}">${Zu(n)}</button>`).join("")}
            <button data-action="back">Back</button>
          </div>
        </div>`:`
        <div class="screen">
          <h1>WORLD END ZOMBIE</h1>
          <p class="prompt">CLICK OR PRESS CROSS TO START</p>
          ${e.length>1?'<div class="menu"><button data-action="select-level">Select level</button></div>':""}
          <table class="controls">
            ${LS.map(([n,s,r])=>`<tr><th>${n}</th><th>${s}</th><td>${r}</td></tr>`).join("")}
          </table>
          <div class="version">${Ec}</div>
        </div>`;case"paused":return`
        <div class="screen">
          <h1>PAUSED</h1>
          <p class="prompt">CLICK OR PRESS CROSS TO RESUME</p>
        </div>`;case"stats":{const n=i.stats;return`
        <div class="screen">
          <h1>LEVEL COMPLETE</h1>
          <table class="stats">
            ${[["SURVIVORS",`${n.survivorsRescued}/${n.survivorsTotal}`],["ZOMBIES",`${n.zombiesKilled}/${n.zombiesTotal}`],["SECRETS",`${n.secretsFound}/${n.secretsTotal}`],["RISEN",`${n.risen.killed}/${n.risen.turned}`],["TIME",US(n.time)]].map(([r,a])=>`<tr><th>${r}</th><td>${a}</td></tr>`).join("")}
          </table>
        </div>`}case"dead":return`
        <div class="screen">
          <h1>YOU DIED</h1>
          <p class="prompt">CLICK OR PRESS CROSS TO TRY AGAIN</p>
        </div>`;case"playing":return""}}function US(i){const e=Math.floor(i),t=Math.floor(e/60),n=e%60;return`${t}:${String(n).padStart(2,"0")}`}const NS={forward:0,strafe:0,turn:0,attack:!1,weapon:null,use:!1,crouch:!1,pause:!1,confirm:!0};function FS({canvas:i,overlay:e,hudRoot:t,level:n,tuning:s,levels:r,onSelectLevel:a,skipTitle:o=!1}){const l=ff({level:n,tuning:s,seed:Date.now()>>>0}),c=new jp(i,s),h=AS(i,n),d=DS(e,r,a),u=$p(t),f=Xp(s);o&&l.step(NS);const g=1/ja;let S=performance.now(),m=0;return{frame(p){m=Math.min(m+(p-S)/1e3,.25),S=p;const M=[];let T=0;for(;m>=g;)M.push(...l.step(c.nextTick())),m-=g,T+=g;const A=l.snapshot();c.screen=A.screen,c.lockWanted=A.screen!=="stats",A.screen!=="playing"&&c.locked&&document.exitPointerLock(),h.render(A),u.react(M),f.react(M,A),f.render(A,T),u.render(A),d.render(A)},dispose(){c.dispose(),f.dispose()}}}function OS(i){const{text:e}=lc(i);try{return{ok:!0,level:Ja(e)}}catch(t){if(t instanceof Za)return{ok:!1,errors:t.problems.map(n=>`line ${n.line}, column ${n.column}: ${n.message}`)};throw t}}function BS(i,e,t){i.replaceChildren();const n=document.createElement("canvas"),s=document.createElement("div");s.className="hud";const r=document.createElement("div");r.className="overlay",i.append(n,s,r),i.hidden=!1,Promise.resolve(n.requestPointerLock()).catch(()=>{});const a=FS({canvas:n,overlay:r,hudRoot:s,level:e,tuning:t,levels:[],onSelectLevel:()=>{},skipTitle:!0});return{frame:o=>a.frame(o),stop(){a.dispose(),i.replaceChildren(),i.hidden=!0}}}const Xs=(i,e,t)=>Math.min(t,Math.max(e,i));function kS(i){const e=Math.PI*2;return i-Math.round(i/e)*e}function nc(i){return{width:Ce,height:Ce,cells:i.rows.map(e=>e.map(t=>{var n;return((n=tr[t])==null?void 0:n.cell)??"floor"})),playerStart:uc(i)??{col:Ce/2,row:Ce/2},exits:[],zombies:[],survivors:[],pickups:[],doors:[],secretWalls:[],furniture:[]}}class zS{constructor(e,t){Ue(this,"x");Ue(this,"y");Ue(this,"facing",-Math.PI/2);Ue(this,"version",0);Ue(this,"noClip",!1);Ue(this,"onEdit",null);Ue(this,"hotbar",Qa());Ue(this,"opened",new Set);Ue(this,"grid");this.level=e,this.tuning=t;const n=uc(e)??{col:Ce/2,row:Ce/2};this.x=n.col+.5,this.y=n.row+.5,this.grid=new aa(nc(e))}isOpen(e){return this.opened.has(ic(e))}walk(e,t){this.facing=kS(this.facing+(Number.isFinite(e.turn)?e.turn:0));const n=Xs(e.forward,-1,1),s=Xs(e.strafe,-1,1),r=Math.cos(this.facing),a=Math.sin(this.facing);let o=n*r-s*a,l=n*a+s*r;const c=Math.hypot(o,l);if(c===0)return;const h=this.tuning.playerSpeed*t/Math.max(1,c);if(o*=h,l*=h,this.noClip){const u=this.tuning.playerRadius;this.x=Xs(this.x+o,u,Ce-u),this.y=Xs(this.y+l,u,Ce-u);return}const d=this.grid.move(this.x,this.y,o,l,this.tuning.playerRadius,[],!0);this.x=d.x,this.y=d.y}toggleNoClip(){if(this.noClip=!this.noClip,this.noClip)return;const e=this.tuning.playerRadius;if(!No(this.x,this.y,e).some(s=>this.isSolidCell(s)))return;let n=null;for(let s=0;s<Ce&&!(n&&s-1>n.distance);s++){const r=this.grid.cellAt(this.x,this.y);for(let a=r.row-s;a<=r.row+s;a++)for(let o=r.col-s;o<=r.col+s;o++){if(Math.max(Math.abs(o-r.col),Math.abs(a-r.row))!==s)continue;const l={col:o,row:a};if(!Di(l)||this.isSolidCell(l))continue;const c=Math.hypot(o+.5-this.x,a+.5-this.y);(!n||c<n.distance-1e-9||Math.abs(c-n.distance)<=1e-9&&(a<n.cell.row||a===n.cell.row&&o<n.cell.col))&&(n={cell:l,distance:c})}}n&&(this.x=n.cell.col+.5,this.y=n.cell.row+.5)}isSolidCell(e){return this.grid.blocksWalking(e.col,e.row)&&this.grid.kindAt(e.col,e.row)!=="hole"}use(){const e=Math.cos(this.facing),t=Math.sin(this.facing),n=this.tuning.playerRadius+this.tuning.useReach,s=this.grid.rayDistance(this.x,this.y,e,t,n);if(s>=n)return!1;const r=this.grid.cellAt(this.x+e*(s+1e-6),this.y+t*(s+1e-6)),a=Jn(this.level,r);return a!=="door"&&a!=="secret"||this.isOpen(r)?!1:(this.opened.add(ic(r)),this.grid.open(r.col,r.row),this.version++,!0)}select(e){this.hotbar=dd(this.hotbar,e)}scroll(e){this.hotbar=fd(this.hotbar,e)}selectedName(){const e=Fo(this.hotbar);return e===null?null:sd(e)}targets(){return hd(this.level,this.x,this.y,this.facing)}build(){const e=Fo(this.hotbar);return e===null?{ok:!1,message:"EMPTY SLOT"}:this.place(e)}place(e){const{place:t}=this.targets();return t?this.placeAt(e,t):{ok:!1,message:"NOWHERE TO BUILD"}}placeAt(e,t){const n=this.noClip?[]:No(this.x,this.y,this.tuning.playerRadius),s=ld(this.level,e,t,n);return s.ok&&this.changed(),s}remove(){const{remove:e}=this.targets();return!e||!cd(this.level,e)?!1:(this.changed(),!0)}changed(){var e;for(const t of[...this.opened]){const n=Jn(this.level,{col:t%Ce,row:Math.floor(t/Ce)});n!=="door"&&n!=="secret"&&this.opened.delete(t)}this.grid=new aa(nc(this.level));for(const t of this.opened)this.grid.open(t%Ce,Math.floor(t/Ce));this.version++,(e=this.onEdit)==null||e.call(this)}}function ic({col:i,row:e}){return e*Ce+i}const sc="world-end-zombie-editor";class HS{constructor(e){this.storage=e}list(){return this.read().levels.map(({id:e,name:t})=>({id:e,name:t}))}load(e){const t=this.read().levels.find(n=>n.id===e);return t?{rows:t.rows.map(n=>[...n])}:null}loadHotbar(){const e=this.read().hotbar,t=new Set(Ut.map(s=>s.item)),n=e==null?void 0:e.slots;return!Array.isArray(n)||n.length!==Gt||!n.every(s=>s===null||typeof s=="string"&&t.has(s))||!Number.isInteger(e==null?void 0:e.selected)||e.selected<0||e.selected>=Gt?Qa():{slots:n,selected:e.selected}}saveHotbar(e){const t=this.read();return t.hotbar={slots:[...e.slots],selected:e.selected},this.write(t)}loadOrder(){const e=this.read().order;return Array.isArray(e)&&e.every(t=>typeof t=="string")?e:[]}saveOrder(e){const t=this.read();return t.order=[...e],this.write(t)}create(){return this.add(this.freeName("Level"),ad())}save(e,t){const n=this.read(),s=n.levels.find(r=>r.id===e);return s?(s.rows=t.rows.map(r=>r.join("")),this.write(n)):!1}rename(e,t){const n=this.read(),s=n.levels.find(a=>a.id===e),r=t.trim();return!s||r===""||n.levels.some(a=>a.id!==e&&a.name===r)?!1:(s.name=r,this.write(n))}duplicate(e){const t=this.read().levels.find(n=>n.id===e);return t?this.add(this.freeName(`${t.name} copy`,!1),this.load(e)):null}remove(e){const t=this.read();t.levels=t.levels.filter(n=>n.id!==e),this.write(t)}move(e,t){const n=this.read(),s=n.levels.findIndex(a=>a.id===e),r=Math.min(n.levels.length-1,Math.max(0,s+t));s<0||s===r||(n.levels.splice(r,0,n.levels.splice(s,1)[0]),this.write(n))}addFromText(e,t){const n=pd(t);return n.ok?{ok:!0,id:this.add(this.freeName(e.trim()||"Level",!1),n.level)}:n}add(e,t){const n=this.read(),s=`level-${n.nextId++}`;return n.levels.push({id:s,name:e,rows:od(t).rows.map(r=>r.join(""))}),this.write(n),s}freeName(e,t=!0){const n=new Set(this.read().levels.map(s=>s.name));for(let s=1;;s++){const r=t||s>1?`${e} ${s}`:e;if(!n.has(r))return r}}read(){try{const e=JSON.parse(this.storage.getItem(sc)??"null");if(!e||typeof e.nextId!="number"||!Array.isArray(e.levels))return{nextId:1,levels:[]};const t=n=>typeof n.id=="string"&&typeof n.name=="string"&&Array.isArray(n.rows)&&n.rows.length===Ce&&n.rows.every(s=>typeof s=="string"&&s.length===Ce);return{nextId:e.nextId,levels:e.levels.filter(t),hotbar:e.hotbar,order:e.order}}catch{return{nextId:1,levels:[]}}}write(e){try{return this.storage.setItem(sc,JSON.stringify(e)),!0}catch{return!1}}}const GS={Z:{sprite:"shambler",width:ns,height:Zn},R:{sprite:"sprinter",width:ns,height:Zn},S:{sprite:"survivor",width:ns,height:Zn},H:{sprite:"health",width:Kn,height:Kn},A:{sprite:"shells",width:Kn,height:Kn}},VS=16770560,WS=2146368;function XS(i,e){let t=e;const n=new Tu({canvas:i,antialias:!1});n.setPixelRatio(1);const s=new $c;s.background=new ze(pr),s.fog=new xr(pr,Ru,Cu);const r=new kt(75,4/3,.05,60);r.rotation.order="YXZ",s.add(r),s.add(new pu(16777215,.5)),r.add(new fu(16769712,2.2,12,1));const a=Iu(),o=Uu();qS(s,a);const l=YS(s,a),c=new Ai;s.add(c);const h=new bn(1,1).rotateX(-Math.PI/2),d=new cr({color:Pu}),u=new cr({color:WS,transparent:!0,opacity:.6}),f=new dn(mr,gr,mr),g=new Fi({color:Lu}),S=new Map,m=P=>{let R=S.get(P);return R||(R=new Ci({map:o[P],alphaTest:.5,fog:!0,color:er}),S.set(P,R)),R},p=new bl(new dn(1.02,nn+.02,1.02)),M=new bl(new bn(.96,.96).rotateX(-Math.PI/2)),T=new ru({color:VS,fog:!1}),A=new Ai;s.add(A);const w=P=>{A.clear();for(const R of P){const I=Jn(t.level,R)!=="floor",O=new lg(I?p:M,T);O.position.set(R.col+.5,I?nn/2:.03,R.row+.5),A.add(O)}},b=()=>{c.clear();const P=new Map;t.level.rows.forEach((R,I)=>R.forEach((O,W)=>{var V;const L=((V=tr[O])==null?void 0:V.cell)??"floor",G=go[L];G&&!t.isOpen({col:W,row:I})&&(P.has(G)||P.set(G,[]),P.get(G).push({col:W,row:I}));const Y=W+.5,H=I+.5;if(L==="hole"){const Z=new wt(h,d);Z.position.set(Y,.01,H),c.add(Z)}else if(L==="furniture"){const Z=new wt(f,g);Z.position.set(Y,gr/2,H),c.add(Z)}else if(O==="P"){const Z=new wt(h,u);Z.position.set(Y,.02,H),c.add(Z)}const j=GS[O];if(j){const Z=new Sr(m(j.sprite));Z.scale.set(j.width,j.height,1),Z.position.set(Y,j.height/2,H),c.add(Z)}})),l.set(P)},_=()=>{const P=window.innerWidth/Math.max(1,window.innerHeight);n.setSize(Math.round(fr*P),fr,!1),r.aspect=P,r.updateProjectionMatrix()};window.addEventListener("resize",_),_();let E=-1;return{use(P){t=P,E=-1},render(P=!0){const{remove:R,place:I}=t.targets(),O=R&&I&&R.col===I.col&&R.row===I.row;w(P?[R,O?null:I].filter(W=>W!==null):[]),E!==t.version&&(b(),E=t.version),r.position.set(t.x,wu,t.y),r.rotation.y=-t.facing-Math.PI/2,n.render(s,r)}}}function qS(i,e){for(const[t,n,s]of[["floor",0,-Math.PI/2],["ceiling",nn,Math.PI/2]]){const r=e[t].clone();r.repeat.set(Ce,Ce);const a=new wt(new bn(Ce,Ce),new Fi({map:r}));a.rotation.x=s,a.position.set(Ce/2,n,Ce/2),i.add(a)}}function YS(i,e){const t=new dn(1,nn,1),n=new Map;for(const r of new Set(Object.values(go))){const a=e[r].clone();a.repeat.set(1,Du.has(r)?1:nn);const o=new su(t,new Fi({map:a}),Ce*Ce);o.frustumCulled=!1,o.count=0,i.add(o),n.set(r,o)}const s=new Ze;return{set(r){for(const[a,o]of n){const l=r.get(a)??[];l.forEach(({col:c,row:h},d)=>o.setMatrixAt(d,s.makeTranslation(c+.5,nn/2,h+.5))),o.count=l.length,o.instanceMatrix.needsUpdate=!0}}}}const sa=document.querySelector("#editor"),rc=document.querySelector("#overlay"),Qi=document.querySelector("#hud"),KS=document.querySelector("#inventory"),ZS=document.querySelector("#play"),JS=document.querySelector("#picker");document.querySelector("#version").textContent=Ec;try{QS()}catch(i){throw rc.classList.add("error"),rc.textContent=i instanceof Error?i.message:String(i),i}function QS(){const i=Jh(),e=new HS(localStorage),t=Ku(),n=new yf(sa,i),s=Sd(Qi);let r=null,a=null,o=null,l=Oo(Qa()),c="";const h=Ed(KS,(p,M)=>{r&&(r.hotbar=oc(r.hotbar,p,M),h.show(r.hotbar,l))}),d=Pf(JS,{open:p=>f(p),create:()=>f(e.create()),rename:(p,M)=>u(e.rename(p,M)?void 0:"That name is blank or already taken."),duplicate:p=>{e.duplicate(p),u()},remove:p=>{e.remove(p),u()},exportTxt:p=>{var b,_;const M=e.load(p),T=((b=e.list().find(E=>E.id===p))==null?void 0:b.name)??"level";if(!M)return u("That level is gone.");const A=lc(M),w=((_=fs(e.loadOrder(),t,e.list()).find(E=>E.key===`editor:${p}`))==null?void 0:_.file)??"level.txt";ac(w,A.text),u(A.warnings.length>0?`Exported ${w}, but "${T}" has problems to fix before you submit it:
${A.warnings.join(`
`)}`:`Exported ${w}. Put it in content/levels, or attach it to a level issue.`)},importFile:p=>{p.text().then(M=>{const T=e.addFromText(p.name.replace(/\.txt$/i,""),M);u(T.ok?`Imported ${p.name}.`:`Could not import ${p.name}:
${T.errors.join(`
`)}`)})},move:(p,M)=>{e.saveOrder(Tf(fs(e.loadOrder(),t,e.list()),p,M)),u()},exportGameJson:()=>{ac("game.json",Rf(fs(e.loadOrder(),t,e.list()))),u("Exported game.json. Put it in content/ with every level in it in content/levels.")},copyShipped:p=>{const M=e.addFromText(p.replace(/\.txt$/,""),qu(p));M.ok?f(M.id):u(`Could not copy ${p}: ${M.errors.join("; ")}`)}});function u(p){document.pointerLockElement&&document.exitPointerLock(),h.hide(),o==null||o.stop(),o=null,Qi.hidden=!0,d.show(e.list(),t,fs(e.loadOrder(),t,e.list()),p)}function f(p){const M=e.load(p);if(!M)return u("That level is gone.");const T=new zS(M,i);T.onEdit=()=>{e.save(p,T.level)||s.say("COULD NOT SAVE: BROWSER STORAGE IS FULL OR OFF",performance.now())},T.hotbar=e.loadHotbar(),c=JSON.stringify(T.hotbar),r=T,a??(a=XS(sa,T)),a.use(T),d.hide(),Qi.hidden=!1}function g(){if(!r)return;const p=JSON.stringify(r.hotbar);p!==c&&(c=p,e.saveHotbar(r.hotbar))}u();let S=performance.now();const m=p=>{const M=Math.min((p-S)/1e3,.1);S=p;const T=n.read(M);if(requestAnimationFrame(m),!(!r||!a||d.visible)){if(T.play){if(o)o.stop(),o=null,Qi.hidden=!1,Promise.resolve(sa.requestPointerLock()).catch(()=>{});else if(!h.visible){const A=OS(r.level);A.ok?(s.problems([],p),Qi.hidden=!0,o=BS(ZS,A.level,i)):s.problems(["CAN'T PLAY YET:",...A.errors],p)}return}if(o)return o.frame(p);if(T.menu)return u();if(T.inventory&&(h.visible?h.hide():(document.pointerLockElement&&document.exitPointerLock(),l=Oo(r.hotbar),h.show(r.hotbar,l))),h.visible){for(const A of T.pad){const w=Md(l,A,r.hotbar);l=w.inventory,r.hotbar=w.hotbar,w.close&&h.hide()}h.visible&&T.pad.length>0&&h.show(r.hotbar,l),a.render(!1),g();return}if(T.slot!==null&&r.select(T.slot),T.scroll!==0&&r.scroll(T.scroll),T.noClip&&r.toggleNoClip(),r.walk(T,M),T.use&&r.use(),T.place){const A=r.build();A.ok||s.say(A.message,p),s.swing()}T.remove&&(r.remove(),s.swing()),s.setNoClip(r.noClip),a.render(),s.render(r.hotbar,r.selectedName()),g(),s.tick(p,n.locked?"":"CLICK TO LOOK AROUND   L: LEVELS")}};requestAnimationFrame(m)}function ac(i,e){const t=document.createElement("a");t.href=URL.createObjectURL(new Blob([e],{type:"text/plain"})),t.download=i,t.click(),URL.revokeObjectURL(t.href)}
