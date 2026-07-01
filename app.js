// ===== 16 Questions (4 groups × 4 questions) =====
const Q = [
// GROUP 1: 处境 — 外部世界最近一周给了你什么
{d:`处境 · 外部之象`,q:`最近一周，外部世界向你呈现的面貌更接近？`,o:[
  {e:`🌋`,t:`变动与震荡——旧的秩序在松动`,v:0},
  {e:`🏔`,t:`寂静与停滞——万事似乎按下了暂停`,v:1},
  {e:`🌱`,t:`生长与滋养——新的可能在暗中萌发`,v:2},
  {e:`⚡`,t:`张力与对峙——两股力量在拉扯你`,v:3}]},
{d:`处境 · 位置之感`,q:`你当下处在一个什么样的「位置」？`,o:[
  {e:`⛰`,t:`在高处——俯瞰清晰，但风也更大`,v:0},
  {e:`🕳`,t:`在谷底——但每一寸上升都是进步`,v:1},
  {e:`🛤`,t:`在中途——前后皆可，但方向未定`,v:2},
  {e:`🌊`,t:`在边缘——即将跨过某个看不见的界限`,v:3}]},
{d:`处境 · 阻碍之形`,q:`阻碍在你面前以什么形态出现？`,o:[
  {e:`🏔`,t:`如山在前——稳固而明确，需要翻越`,v:0},
  {e:`💧`,t:`如水无形——分散在琐碎日常中`,v:1},
  {e:`🌫`,t:`如雾弥漫——说不清道不明的不安`,v:2},
  {e:`⚡`,t:`如雷突发——一件事打乱了所有`,v:3}]},
{d:`处境 · 根基之感`,q:`你脚下的根基——此刻是什么触感？`,o:[
  {e:`🪨`,t:`磐石——稳固，无可撼动`,v:0},
  {e:`🌍`,t:`大地——根基在，但地面微微震动`,v:1},
  {e:`🕊`,t:`悬空——正在寻找新的立足点`,v:2},
  {e:`🌊`,t:`流水——本就无需稳固，我在流动中`,v:3}]},

// GROUP 2: 感受 — 你的内心状态
{d:`感受 · 内心色调`,q:`最近一周，你内心呈现的主色调是？`,o:[
  {e:`🔥`,t:`炽热的赤——渴望与冲劲在燃烧`,v:0},
  {e:`🌊`,t:`沉静的蓝——思考与等待占主导`,v:1},
  {e:`☁`,t:`混沌的灰——说不清，需要澄明`,v:2},
  {e:`✨`,t:`透亮的白——空明，万物可入`,v:3}]},
{d:`感受 · 入梦之念`,q:`睡前思绪最常停在什么地方？`,o:[
  {e:`📋`,t:`未完成的事——一件件在眼前排开`,v:0},
  {e:`🎞`,t:`过去的画面——某个瞬间反复回放`,v:1},
  {e:`🔮`,t:`未来的可能——各种「如果」在盘旋`,v:2},
  {e:`😴`,t:`空无一物——倒头便睡`,v:3}]},
{d:`感受 · 精力水位`,q:`你的精力此刻在什么水位？`,o:[
  {e:`🌊`,t:`满溢——想做很多事，能量很足`,v:0},
  {e:`🟢`,t:`平稳——不多不少，刚好够用`,v:1},
  {e:`🕯`,t:`低潮——需要刻意补充才能维持`,v:2},
  {e:`⚡`,t:`波动——今天高涨，明天枯竭`,v:3}]},
{d:`感受 · 预感之力`,q:`你对接下来会发生什么——有预感吗？`,o:[
  {e:`🦅`,t:`有，且清晰——直觉知道风向在变`,v:0},
  {e:`🌫`,t:`模糊——隐约感到有事，但看不清`,v:1},
  {e:`🏃`,t:`没有——眼前已够忙，顾不上下一步`,v:2},
  {e:`🌿`,t:`不想预判——放开控制，让它自己发生`,v:3}]},

// GROUP 3: 行动 — 你做了什么选择
{d:`行动 · 应对之姿`,q:`面对这一周外界的变化，你采取了什么姿态？`,o:[
  {e:`⚔`,t:`正面迎击——主动出击，以刚克刚`,v:0},
  {e:`🏹`,t:`迂回绕行——避其锋芒，寻找侧路`,v:1},
  {e:`🧘`,t:`静止不动——以不变应万变`,v:2},
  {e:`⛵`,t:`顺势借力——让变化本身带着我走`,v:3}]},
{d:`行动 · 人际之距`,q:`这一周，你与周围人的距离是怎样的？`,o:[
  {e:`🤝`,t:`被靠近——别人向你伸手的时候多了`,v:0},
  {e:`🙋`,t:`在靠近——你主动寻求支持与连接`,v:1},
  {e:`🚪`,t:`在保持距离——给自己留出空间`,v:2},
  {e:`⚡`,t:`出现了裂痕——某个关系需要面对`,v:3}]},
{d:`行动 · 决断之态`,q:`面对需要做决定的事——你的状态更接近？`,o:[
  {e:`✂`,t:`已经做了——果断利落，一刀切下`,v:0},
  {e:`⚖`,t:`正在斟酌——反复权衡，还在推演`,v:1},
  {e:`⏸`,t:`推迟了——眼下不是做决定的时候`,v:2},
  {e:`🌀`,t:`没决定本身就是一个决定——在悬置中`,v:3}]},
{d:`行动 · 压力之应`,q:`当压力来袭时，你的应对方式更接近？`,o:[
  {e:`🏃`,t:`化为行动——做点什么，哪怕只是小事`,v:0},
  {e:`🧘`,t:`向内收敛——安静下来，理清思路`,v:1},
  {e:`🗣`,t:`向外求助——找人聊聊，借一双耳朵`,v:2},
  {e:`💥`,t:`释放宣泄——让它出来，不憋着`,v:3}]},

// GROUP 4: 走向 — 按现在的轨迹走下去
{d:`走向 · 投影之形`,q:`把这一周的状态投影到未来——你看到什么？`,o:[
  {e:`📈`,t:`上升——曲线在往上走`,v:0},
  {e:`🌳`,t:`扎根——不是在爬升，而是在深入`,v:1},
  {e:`🔄`,t:`转弯——方向正在发生改变`,v:2},
  {e:`🌫`,t:`空白——未来还不能被看见`,v:3}]},
{d:`走向 · 内心召唤`,q:`你内心——有没有什么东西在召唤你？`,o:[
  {e:`🧭`,t:`有且明确——我知道我要去哪里`,v:0},
  {e:`🌅`,t:`有但模糊——只是一个方向感`,v:1},
  {e:`🌿`,t:`没有——活在当下就够了`,v:2},
  {e:`🔇`,t:`曾经有过，但最近听不到了`,v:3}]},
{d:`走向 · 转向之问`,q:`如果有一个声音劝你「该换个方向了」——`,o:[
  {e:`🏃`,t:`已经在换了——无需劝说`,v:0},
  {e:`🤔`,t:`会认真考虑——但需要证据`,v:1},
  {e:`⏳`,t:`听听而已——现在不是转向的时候`,v:2},
  {e:`🚫`,t:`拒绝——这条路我还没走完`,v:3}]},
{d:`走向 · 关键词`,q:`最后——你觉得这一周最接近哪个词？`,o:[
  {e:`💥`,t:`突围——冲破某种限制或旧模式`,v:0},
  {e:`🕯`,t:`沉寂——在安静中重新认识自己`,v:1},
  {e:`🤝`,t:`连接——与他人建立了新的纽带`,v:2},
  {e:`🍂`,t:`释放——放下了某个执念或旧人`,v:3}]},
];

// ===== Core Algorithm =====
function xorFold(answers){
  // 16 answers × 2bits = 32bits → XOR fold → 6 bits (0-63)
  var parts=[];
  for(var g=0;g<5;g++){
    var v=0;
    for(var b=0;b<6;b++){
      var qi=g*6+b;
      if(qi<16) v|=(answers[qi]&3)<<(b*2);
    }
    parts.push(v&0xFFF);
  }
  // remaining: bits 30-31 = answers 15's bits
  var rem=answers[15]>>1;
  var result=rem;
  for(var i=0;i<parts.length;i++) result^=parts[i];
  return result&0x3F;
}

function getChangeMask(answers){
  // Adjacent answer differences → changing lines
  var mask=0;
  for(var i=0;i<6;i++){
    var a=answers[i*2]&1;
    var b=answers[i*2+1]&1;
    if(a!==b) mask|=(1<<i);
  }
  return mask;
}

// ===== State =====
var answers=new Array(16).fill(0),qI=0;
var hexIdx=-1,changeMask=0,unlocked=false;

// ===== Screen =====
function S(id){
  var ss=document.querySelectorAll('.screen');
  for(var i=0;i<ss.length;i++) ss[i].classList.remove('active');
  var e=document.getElementById('s-'+id);
  if(e){e.classList.add('active');e.scrollTop=0;}
  window.scrollTo(0,0);
}

// ===== Quiz =====
function start(){
  answers=new Array(16).fill(0);qI=0;hexIdx=-1;changeMask=0;unlocked=false;
  try{document.getElementById('advice').style.display='none';document.getElementById('locked').style.display='block';document.getElementById('btnUnlock').style.display='block';document.getElementById('sharePrev').innerHTML='';}catch(e){}
  rQ();S('quiz');
}

function rQ(){
  var q=Q[qI],grp=Math.floor(qI/4);
  document.getElementById('qIdx').textContent=qI+1;
  document.getElementById('qGrp').textContent=['处境','感受','行动','走向'][grp];
  document.getElementById('qGrpIcon').textContent=['🌍','🌊','⚡','🔮'][grp];
  document.getElementById('qBar').style.width=((qI+1)/16*100)+'%';
  document.getElementById('qDim').textContent=q.d;
  document.getElementById('qText').textContent=q.q;
  var od=document.getElementById('qOpts');
  od.innerHTML='';
  q.o.forEach(function(opt,i){
    var b=document.createElement('div');
    b.className='quiz-option';
    if(answers[qI]===opt.v) b.classList.add('selected');
    b.innerHTML='<span class="qoe">'+opt.e+'</span>'+opt.t;
    b.addEventListener('click',function(){
      answers[qI]=opt.v;
      var as=document.querySelectorAll('.quiz-option');
      for(var j=0;j<as.length;j++) as[j].classList.remove('selected');
      b.classList.add('selected');
      setTimeout(function(){nQ();},150);
    });
    od.appendChild(b);
  });
}

function nQ(){if(qI<15){qI++;rQ();}else{calc();}}
function prev(){if(qI>0){qI--;rQ();}}

// ===== Calculation =====
function calc(){
  hexIdx=xorFold(answers);
  changeMask=getChangeMask(answers);
  unlocked=false;
  try{document.getElementById('advice').style.display='none';document.getElementById('locked').style.display='block';document.getElementById('btnUnlock').style.display='block';document.getElementById('sharePrev').innerHTML='';}catch(e){}
  render();S('result');
}

// ===== Render =====
function render(){
  try{
  var hd=getHex(hexIdx),changeCount=countBits(changeMask);
  var newIdx=hexIdx;
  for(var i=0;i<6;i++){if(changeMask&(1<<i)) newIdx^=(1<<i);}
  var cd=getHex(newIdx);
  var cl=changeLabels(changeMask);

  // Hexagram display
  var disp=document.getElementById('hexDisp');
  disp.innerHTML=
    '<div class="mini-label">☯ 当下卦象</div>'+
    '<div class="hex-symbol">'+hd.symbol+'</div>'+
    '<div class="hex-name">'+hd.name+'</div>'+
    '<div class="hex-tag">'+hd.tag+'</div>';

  // Full description + FREE weekly event prediction
  var pred=(typeof PRED!=='undefined'&&PRED[hexIdx])?PRED[hexIdx]:['','','','','',''];
  document.getElementById('desc').innerHTML=
    '<p style="font-size:16px;line-height:2.2;text-align:left;padding:0 4px;">'+hd.desc+'</p>'+
    '<div style="margin-top:16px;padding:16px;background:rgba(201,169,110,0.15);border-radius:12px;border-left:4px solid var(--gold);">'+
    '<div style="font-size:13px;color:var(--gold);letter-spacing:2px;margin-bottom:8px;">🗓 未来一周核心事件</div>'+
    '<p style="line-height:2;font-size:15px;font-weight:500;">'+pred[3]+'</p>'+
    (pred[5]?'<p style="margin-top:8px;color:var(--gold);font-size:13px;">🍀 '+pred[5]+'</p>':'')+
    '</div>';

  // Change section
  var chgTitle='';
  if(changeCount===0){chgTitle='此卦六爻皆静——当下是稳态，无需变动';}
  else{chgTitle='第'+cl+'爻在变 → '+cd.name+' · '+cd.tag;}
  document.getElementById('chgTitle').textContent=chgTitle;

  var lockedHTML='';
  if(changeCount===0){
    lockedHTML='<p>六爻皆静，没有变爻。</p><p>你这周的卦象是稳定的——当下即是答案。保持现在的方向，不用急于改变。</p>';
  }else{
    lockedHTML=
      '<p>你的<strong>'+cl+'</strong>正在变动——</p>'+
      '<p>从<strong>'+hd.name+'</strong>向<strong>'+cd.name+'</strong>过渡。</p>'+
      '<p style="margin-top:10px;color:var(--gold);">🔒 观看广告解锁：事业感情健康详解 · 六爻剖析 · 改运指南</p>';
  }
  document.getElementById('locked').innerHTML=lockedHTML;

  // Unlocked advice - career/love/health grid + yao + advice
  var adv=document.getElementById('advice');
  var yaoHTML='';
  for(var i=0;i<6;i++){
    var yn=((hexIdx>>i)&1)?'阳':'阴';
    var chgMark='';
    if(changeMask&(1<<i)) chgMark=' <span style="color:var(--red-light);font-weight:bold;">【变爻】</span>';
    yaoHTML+='<div style="margin-bottom:14px;padding:10px 14px;background:rgba(255,255,255,0.5);border-radius:8px;border-left:3px solid '+(changeMask&(1<<i)?'var(--red-light)':'var(--bd)')+';">'+
      '<strong>'+(['初','二','三','四','五','上'][i])+'爻（'+(i+1)+'）· '+yn+'爻</strong>'+chgMark+
      '<p style="margin-top:4px;line-height:1.7;">'+hd.yao[i]+'</p></div>';
  }
  adv.innerHTML=
    '<h3>📊 详细预测</h3>'+
    '<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:16px;">'+
    '<div style="padding:12px;background:rgba(255,255,255,0.5);border-radius:8px;"><strong>💼 事业</strong><p style="margin-top:6px;line-height:1.7;font-size:14px;">'+pred[0]+'</p></div>'+
    '<div style="padding:12px;background:rgba(255,255,255,0.5);border-radius:8px;"><strong>💛 感情</strong><p style="margin-top:6px;line-height:1.7;font-size:14px;">'+pred[1]+'</p></div>'+
    '<div style="padding:12px;background:rgba(255,255,255,0.5);border-radius:8px;"><strong>🫀 健康</strong><p style="margin-top:6px;line-height:1.7;font-size:14px;">'+pred[2]+'</p></div>'+
    '<div style="padding:12px;background:rgba(255,255,255,0.5);border-radius:8px;"><strong>⚠ 提醒</strong><p style="margin-top:6px;line-height:1.7;font-size:14px;">'+(pred[4]||'保持警觉')+'</p></div>'+
    '</div>'+
    (changeCount>0?
      '<h3>⚡ 变卦预测：'+cd.name+'</h3>'+
      '<p style="line-height:2;font-size:15px;">卦中'+changeCount+'根爻正在变动，从<strong>'+hd.name+'</strong>向<strong>'+cd.name+'</strong>过渡——命运正在改变方向。</p>'
    :'')+
    '<h3>📜 六爻剖析</h3>'+yaoHTML+
    '<h3>💡 改运指南</h3>'+
    '<p style="line-height:2;font-size:15px;">'+hd.advice+'</p>'+
    '<p style="margin-top:18px;padding:14px;background:rgba(201,169,110,0.15);border-radius:10px;text-align:center;color:var(--ink-light);font-size:14px;line-height:1.8;">✨ <strong>卦象不是命定，是你当下的镜子。</strong><br>下周的卦象，由你本周做的每一个选择决定。<br>七天后回来——看看你的卦，变了没有。</p>';
  }catch(e){
    document.getElementById('desc').innerHTML='<p style="color:red;">渲染出错: '+e.message+'。请刷新重试。</p>';
    console.error(e);
  }
}

function countBits(n){var c=0;while(n){c+=n&1;n>>=1;}return c;}
function changeLabels(mask){
  var ls=['初','二','三','四','五','上'],r=[];
  for(var i=0;i<6;i++){if(mask&(1<<i)) r.push(ls[i]);}
  return r.join('、');
}
function hexLines(ix){
  // Render as thick CSS blocks (top=上爻 → bottom=初爻)
  var s='<div class="hl">';
  for(var i=5;i>=0;i--){
    if((ix>>i)&1){
      s+='<div class="hy"><div class="hy-yang"></div></div>';
    }else{
      s+='<div class="hy"><div class="hy-yin"><span></span><span></span></div></div>';
    }
  }
  s+='</div>';
  return s;
}

// ===== Unlock =====
function unlock(){
  if(confirm('模拟广告：观看 15 秒广告以解锁完整解读？\n\n（实际部署时接入 Google AdSense / 微信广告 SDK）\n\n点「确定」模拟观看完成')){
    unlocked=true;
    document.getElementById('locked').style.display='none';
    document.getElementById('advice').style.display='block';
    document.getElementById('btnUnlock').style.display='none';
  }
}

function simPay(){
  alert('模拟支付成功！\n\n实际部署时接入微信支付 / 支付宝。\n\n感谢支持！');
  unlocked=true;
  document.getElementById('locked').style.display='none';
  document.getElementById('advice').style.display='block';
  document.getElementById('btnUnlock').style.display='none';
  document.getElementById('overlayPay').classList.remove('active');
}
function closePay(){document.getElementById('overlayPay').classList.remove('active');}

// ===== Share Card =====
function share(){
  var hd=getHex(hexIdx);
  var cv=document.createElement('canvas');cv.width=600;cv.height=900;
  var c=cv.getContext('2d');
  var bg=c.createLinearGradient(0,0,0,900);bg.addColorStop(0,'#faf6ee');bg.addColorStop(0.5,'#f0e8d5');bg.addColorStop(1,'#e8dcc8');
  c.fillStyle=bg;c.fillRect(0,0,600,900);
  c.strokeStyle='#c9a96e';c.lineWidth=2;c.strokeRect(30,30,540,840);c.strokeRect(40,40,520,820);
  c.fillStyle='#c9a96e';c.fillRect(200,60,200,2);
  c.fillStyle='#2c2416';c.font='bold 36px "Noto Serif SC",serif';c.textAlign='center';c.fillText('当下卦象',300,140);
  c.font='16px "Noto Sans SC",sans-serif';c.fillStyle='#5c4a2e';c.fillText('六十四卦 · 七日一易',300,172);
  c.fillText('— ◆ —',300,210);
  c.fillStyle='#2c2416';c.font='bold 80px "Noto Serif SC",serif';c.fillText(hd.symbol,300,290);
  c.font='bold 32px "Noto Serif SC",serif';c.fillText(hd.name,300,340);
  c.font='18px "Noto Sans SC",sans-serif';c.fillStyle='#c9a96e';c.fillText(hd.tag,300,378);
  c.font='15px "Noto Sans SC",sans-serif';c.fillStyle='#5c4a2e';
  var dw=wrap(c,hd.short,480);
  for(var j=0;j<Math.min(dw.length,4);j++){c.fillText(dw[j],300,450+j*26);}
  c.fillStyle='#c9a96e';c.font='14px "Noto Sans SC",sans-serif';c.fillText('扫码看看你的当下卦象 →',300,760);
  c.fillStyle='#2c2416';c.fillRect(220,775,160,50);
  c.fillStyle='#faf6ee';c.font='11px "Noto Sans SC",sans-serif';c.fillText('当下卦象 · 六十四卦 · 七日一易',300,805);
  c.fillStyle='#c9a96e';c.fillRect(200,830,200,1);
  var pv=document.getElementById('sharePrev');pv.innerHTML='';cv.style.maxWidth='100%';cv.style.borderRadius='12px';cv.style.boxShadow='0 8px 30px rgba(0,0,0,0.12)';pv.appendChild(cv);
  var a=document.createElement('a');a.download='当下卦象-'+hd.name+'.png';a.href=cv.toDataURL('image/png');a.click();
  pv.scrollIntoView({behavior:'smooth'});
}

function wrap(ctx,text,mw){var ls=[],cur='';for(var i=0;i<text.length;i++){var t=cur+text[i];if(ctx.measureText(t).width>mw&&cur.length>0){ls.push(cur);cur=text[i];}else{cur=t;}}if(cur)ls.push(cur);return ls;}

// ===== Events =====
function B(id,fn){var e=document.getElementById(id);if(!e)return;e.addEventListener('click',fn);e.addEventListener('touchend',function(ev){ev.preventDefault();fn();});}
B('btnStart',start);B('btnPrev',prev);B('btnUnlock',unlock);B('btnShare',share);B('btnRestart',start);
document.getElementById('btnPay').addEventListener('click',simPay);
document.getElementById('btnPayClose').addEventListener('click',closePay);
var pt;document.getElementById('btnUnlock').addEventListener('pointerdown',function(){pt=setTimeout(function(){document.getElementById('overlayPay').classList.add('active');},800);});document.getElementById('btnUnlock').addEventListener('pointerup',function(){clearTimeout(pt);});document.getElementById('btnUnlock').addEventListener('pointerleave',function(){clearTimeout(pt);});
S('landing');
