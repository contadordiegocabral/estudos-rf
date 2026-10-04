/* Meus Estudos — trilha, motor de exercícios, gamificação e painel */
(function(){
"use strict";
var D=window.DATA;
var EDITAL=D.EDITAL;
var REG=window.MOD||{};
var DISC=window.DISC||{}, DISC_ORDER=(window.DISC_ORDER||["afo"]).filter(function(k){return DISC[k];});
var MAT=window.MAT||{};
var CONC=window.CONCURSOS||{}, CONC_ORDER=(window.CONC_ORDER||[]).filter(function(k){return CONC[k];});
var DC=null;                 /* matéria corrente */
var PESOS=D.PESOS;           /* pesos da matéria corrente */
var ORDER=[];                /* módulos da matéria corrente, só os prontos */
var M=null, CARDS,QS,FEY,TEORIA,EX,KIT,UNITS,ALL,EXUNIT;
var COMX={};   /* comentários longos do módulo corrente, por índice de QS */

/* todos os módulos registrados, de todas as matérias */
function allMods(){
  var out=[];
  DISC_ORDER.forEach(function(d){
    DISC[d].mods.forEach(function(k){ if(REG[k]&&out.indexOf(k)<0) out.push(k); });
  });
  Object.keys(REG).forEach(function(k){ if(out.indexOf(k)<0) out.push(k); });
  return out;
}
function discOf(mod){
  for(var i=0;i<DISC_ORDER.length;i++){
    if(DISC[DISC_ORDER[i]].mods.indexOf(mod)>=0) return DISC_ORDER[i];
  }
  return DISC_ORDER[0];
}
function loadDisc(id){
  if(!DISC[id]) id=DISC_ORDER[0];
  S.disc=id; DC=DISC[id];
  PESOS=DC.pesos||[];
  ORDER=DC.mods.filter(function(k){return REG[k];});
  return ORDER;
}

/* =======================================================
   PROVAS, COBERTURA E PRIORIDADE
   ======================================================= */
function provaLabel(c){
  if(!c.data) return c.dataNota||"sem data";
  var d=daysBetween(today(),c.data);
  if(d>1) return "faltam "+d+" dias";
  if(d===1) return "amanhã";
  if(d===0) return "é hoje";
  return "prova realizada";
}
/* em quais provas a matéria cai, em ordem de prioridade */
function concursosDe(matId){
  if(!matId) return [];
  return CONC_ORDER.filter(function(c){
    return Object.prototype.hasOwnProperty.call(CONC[c].materias,matId);
  });
}
function concursosDoMod(mod){
  return REG[mod] ? concursosDe(DISC[discOf(mod)]?DISC[discOf(mod)].mat:null) : [];
}
/* participação da matéria dentro de uma prova (0..1) */
function shareEm(c,matId){
  var cc=CONC[c]; if(!cc) return 0;
  var ms=Object.keys(cc.materias);
  if(ms.indexOf(matId)<0) return 0;
  var soma=0, temQ=false;
  ms.forEach(function(m){ if(cc.materias[m]!=null){soma+=cc.materias[m];temQ=true;} });
  if(temQ && cc.materias[matId]!=null && soma>0) return cc.materias[matId]/soma;
  return 1/ms.length;                 /* edital sem quadro: peso uniforme */
}
/* score de prioridade 0..100, ponderado pela espinha dorsal */
var _priCache=null;
function prioridadeDe(matId){
  if(!_priCache){
    _priCache={};
    var bruto={}, max=0;
    Object.keys(MAT).forEach(function(m){
      var v=0;
      CONC_ORDER.forEach(function(c){ v+=shareEm(c,m)*(CONC[c].fator||0); });
      if(MAT[m].nucleo) v*=1.15;      /* núcleo duro da área fiscal */
      bruto[m]=v; if(v>max)max=v;
    });
    Object.keys(bruto).forEach(function(m){
      _priCache[m]= max? Math.round(bruto[m]/max*100) : 0;
    });
  }
  return _priCache[matId]||0;
}
function prioridadeDoMod(mod){
  var d=REG[mod]?discOf(mod):null;
  return d&&DISC[d] ? prioridadeDe(DISC[d].mat) : 0;
}

/* =======================================================
   O CURSO — uma trilha só, do começo ao fim
   Cada matéria mantém a ordem pedagógica do próprio material, e as matérias
   se intercalam em partes iguais — nenhuma prova manda na ordem. Resultado:
   existe sempre UMA próxima lição, e ela nunca deixa uma matéria parada por
   semanas.
   ======================================================= */
var _curso=null;
function cursoOrdem(){
  if(_curso) return _curso;
  var itens=[];
  DISC_ORDER.forEach(function(d){
    var prontos=DISC[d].mods.filter(function(k){return REG[k];});
    if(!prontos.length) return;
    var w=Math.max(1,prioridadeDe(DISC[d].mat));
    /* posição fracionária: quanto maior o peso, mais cedo e mais vezes a
       matéria reaparece na fila (mesma ideia de um round-robin ponderado) */
    prontos.forEach(function(k,i){ itens.push({k:k, i:i, pos:(i+0.5)/w}); });
  });
  itens.sort(function(a,b){ return a.pos-b.pos || b.i-a.i; });
  _curso=itens.map(function(x){ return x.k; });
  return _curso;
}
function licoesDoMod(mod){
  var m=REG[mod]; if(!m||!m.UNITS) return [];
  var out=[];
  m.UNITS.forEach(function(u){ (u.lessons||[]).forEach(function(l){ out.push({l:l,u:u}); }); });
  return out;
}
function feitasNoMod(mod){
  var pm=S.mods&&S.mods[mod]; if(!pm||!pm.done) return 0;
  var n=0; licoesDoMod(mod).forEach(function(x){ if(pm.done[x.l.id]) n++; });
  return n;
}
function modFeito(mod){
  var ls=licoesDoMod(mod);
  return ls.length>0 && feitasNoMod(mod)===ls.length;
}
function cursoTotais(){
  var feitas=0, total=0, modsFeitos=0;
  cursoOrdem().forEach(function(k){
    var n=licoesDoMod(k).length;
    total+=n; feitas+=feitasNoMod(k);
    if(modFeito(k)) modsFeitos++;
  });
  return {feitas:feitas, total:total, mods:cursoOrdem().length, modsFeitos:modsFeitos,
          pct: total?Math.round(feitas/total*100):0};
}
/* a próxima lição do curso inteiro — o "continuar" do app */
function cursoProxima(){
  var ord=cursoOrdem();
  for(var i=0;i<ord.length;i++){
    var k=ord[i], pm=S.mods&&S.mods[k], ls=licoesDoMod(k);
    for(var j=0;j<ls.length;j++){
      if(!pm || !pm.done || !pm.done[ls[j].l.id]){
        return {mod:k, disc:discOf(k), idx:i, li:j, lesson:ls[j].l, unit:ls[j].u,
                feitasMod:j, totalMod:ls.length};
      }
    }
  }
  return null;
}
function cursoDepois(n){
  var p=cursoProxima(); if(!p) return [];
  return cursoOrdem().slice(p.idx+1, p.idx+1+(n||3));
}
function irParaCurso(){
  var p=cursoProxima(); if(!p) return false;
  if(p.lesson && !p.lesson.unit) p.lesson.unit=p.unit;
  if(p.mod!==S.cur){ loadModule(p.mod); persist(); }
  startLesson(p.lesson);
  return true;
}

/* selo "cai em" — só aparece se houver provas cadastradas. Sem elas, o app
   não direciona para prova nenhuma: o objetivo é dominar a matéria.        */
function cobHtml(matId,compacto){
  var cs=concursosDe(matId);
  if(!cs.length) return '';
  return '<span class="cob">'+(compacto?'':'<span class="cl">cai em</span>')+
    cs.map(function(c){
      var cc=CONC[c];
      return '<b class="ct" style="--ct:var(--'+(cc.cor||'u1')+')" title="'+cc.nomeLongo+'">'+cc.curto+'</b>';
    }).join('')+'</span>';
}
function cobDoMod(mod,compacto){
  var d=REG[mod]?discOf(mod):null;
  return cobHtml(d&&DISC[d]?DISC[d].mat:null,compacto);
}

function loadModule(id){
  if(!REG[id]) id=ORDER[0];
  var d=discOf(id);
  if(d!==S.disc) loadDisc(d);
  S.cur=id; M=REG[id];
  CARDS=M.CARDS; QS=M.QS; FEY=M.FEY; TEORIA=M.TEORIA; EX=M.EX; KIT=M.KIT; UNITS=M.UNITS;
  COMX=M.COM||{};
  ALL=[];
  UNITS.forEach(function(u){u.lessons.forEach(function(l){l.unit=u;ALL.push(l);});});
  EXUNIT={};
  UNITS.forEach(function(u){u.lessons.forEach(function(l){
    if((l.type==="drill"||l.type==="check")&&Array.isArray(l.data))
      l.data.forEach(function(x){if(EXUNIT[x]==null)EXUNIT[x]=u.n;});
  });});
  var sub=document.querySelector(".brandmark .bs");
  if(sub) sub.textContent=(DC?DC.nome+" · ":"")+"Módulo "+M.n+" · "+M.nome;
}

/* progresso por módulo */
function PM(mod){
  if(!S.mods) S.mods={};
  if(!S.mods[mod]) S.mods[mod]={done:{},misses:{},stats:{},ensaios:{},provaBest:0,provaTries:0};
  return S.mods[mod];
}
function P(){ return PM(S.cur); }

/* ---------- identificadores qualificados (módulo:exercício) ---------- */
function qsplit(id){
  var i=String(id).indexOf(":");
  return i<0 ? {m:S.cur, e:id} : {m:id.slice(0,i), e:id.slice(i+1)};
}
function qjoin(mod,e){ return mod+":"+e; }
function exGet(id){
  var p=qsplit(id), mod=REG[p.m];
  return mod ? mod.EX[p.e] : null;
}
function qsGet(id){
  var p=qsplit(id), mod=REG[p.m];
  return mod ? mod.QS : QS;
}
function modNome(mod){
  if(!REG[mod]) return mod;
  var d=DISC[discOf(mod)];
  return (d?d.nome+" ":"Mód. ")+REG[mod].n;
}
function pesoOf(mod){
  if(!REG[mod]) return 0;
  var d=DISC[discOf(mod)], n=String(REG[mod].n);
  if(!d||!d.pesos) return 0;
  for(var i=0;i<d.pesos.length;i++){
    if(String(d.pesos[i].mod)===n || ("0"+d.pesos[i].mod).slice(-2)===n) return d.pesos[i].q||0;
  }
  return 0;
}

var RANKS=[[0,"Estagiário"],[150,"Auxiliar"],[400,"Assistente"],[800,"Técnico"],
           [1400,"Analista"],[2200,"Contador"],[3200,"Auditor"],[4500,"Auditor-Fiscal"],
           [6000,"Controlador"],[8000,"Procurador de Contas"],[10000,"Conselheiro"]];
var ICON={teoria:"i-book", flash:"i-cards", drill:"i-target", check:"i-trophy",
          feynman:"i-mic", leitura:"i-scroll", missao:"i-link", prova:"i-crown", review:"i-repeat", video:"i-mic"};

function exLabel(id){
  var ex=exGet(id); if(!ex) return id;
  var s;
  if(ex.t==="ce") s=qsGet(id)[ex.qi][0];
  else if(ex.t==="gap") s=ex.before+"____"+ex.after;
  else if(ex.t==="wordbank") s="Montar: “"+ex.target.join(" ")+"”";
  else if(ex.t==="order") s="Ordenar: "+ex.items.join(" → ");
  else if(ex.t==="match") s=ex.instr+" ("+ex.pairs.length+" pares)";
  else if(ex.t==="sort") s=ex.instr+" ("+ex.buckets.join(" / ")+")";
  else s=ex.instr||id;
  s=String(s).replace(/<[^>]+>/g,"").replace(/\s+/g," ").trim();
  return s.length>96 ? s.slice(0,96)+"…" : s;
}

/* ---------- de qualquer item de volta à teoria que o explica ----------
   Todo exercício e todo flashcard mora dentro de uma unidade, e toda unidade
   abre com uma lição de teoria. Então, dado o id do item, dá para subir até a
   unidade e devolver as telas de teoria daquele ponto — sem sair do drill.   */
var TEO_CACHE={};
function teoriaIndex(modId){
  if(TEO_CACHE[modId]) return TEO_CACHE[modId];
  var mod=REG[modId], idx={};
  if(!mod||!mod.UNITS){ TEO_CACHE[modId]={}; return {}; }
  var herda=null;                       /* unidade sem teoria própria herda a anterior */
  mod.UNITS.forEach(function(u){
    var chaves=[], itens=[];
    (u.lessons||[]).forEach(function(l){
      if(l.type==="teoria" && l.data) chaves.push(l.data);
      if(l.type==="flash" && Array.isArray(l.data))
        l.data.forEach(function(n){ itens.push("c"+n); });
      else if(Array.isArray(l.data) && (l.type==="drill"||l.type==="check"))
        l.data.forEach(function(e){ itens.push(e); });
    });
    if(chaves.length) herda=chaves;
    var usa=chaves.length?chaves:herda;
    if(!usa) return;
    var ref={u:u.title, n:u.n, chaves:usa, propria:!!chaves.length};
    itens.forEach(function(e){ if(!idx[e]) idx[e]=ref; });
  });
  TEO_CACHE[modId]=idx;
  return idx;
}
function teoriaDoItem(fid){
  var p=qsplit(fid), mod=REG[p.m];
  if(!mod||!mod.TEORIA) return null;
  var ref=teoriaIndex(p.m)[p.e];
  if(!ref){                              /* item fora de unidade: teoria inteira do módulo */
    var ks=Object.keys(mod.TEORIA);
    if(!ks.length) return null;
    ref={u:mod.nome, n:null, chaves:ks};
  }
  var telas=[];
  ref.chaves.forEach(function(k){
    (mod.TEORIA[k]||[]).forEach(function(s){ telas.push(s); });
  });
  if(!telas.length) return null;
  return {mod:p.m, modNome:modNome(p.m), unidade:ref.u, n:ref.n, telas:telas};
}

/* ---------- estado ---------- */
var S={xp:0, streak:0, bestStreak:0, lastDay:null, hist:{}, goal:50, sound:true, vibe:true,
       cur:"m01", disc:"afo", mods:{}, srs:{}, dailyN:20, daily:{d:null,n:0}};
var dbRef=null, saveTimer=null, sampleFn=null;

function today(){var d=new Date();return d.getFullYear()+"-"+("0"+(d.getMonth()+1)).slice(-2)+"-"+("0"+d.getDate()).slice(-2);}
function dayKey(offset){var d=new Date();d.setDate(d.getDate()+offset);return d.getFullYear()+"-"+("0"+(d.getMonth()+1)).slice(-2)+"-"+("0"+d.getDate()).slice(-2);}
function dayShort(offset){var d=new Date();d.setDate(d.getDate()+offset);return ["dom","seg","ter","qua","qui","sex","sáb"][d.getDay()];}
function daysBetween(a,b){return Math.round((new Date(b+"T00:00:00")-new Date(a+"T00:00:00"))/86400000);}
function loadLocal(){
  try{
    var r=localStorage.getItem("afo01_trail");
    if(r){
      var o=JSON.parse(r);
      if(o.done && !o.mods){ /* formato antigo: tudo era módulo 01 */
        o.mods={m01:{done:o.done||{},misses:o.misses||{},stats:o.stats||{},
                     ensaios:o.ensaios||{},provaBest:o.provaBest||0,provaTries:o.provaTries||0}};
        delete o.done;delete o.misses;delete o.stats;delete o.ensaios;
        delete o.provaBest;delete o.provaTries;
      }
      S=Object.assign(S,o);
    }
  }catch(e){}
  if(!S.mods)S.mods={};
}
function saveLocal(){try{localStorage.setItem("afo01_trail",JSON.stringify(S));}catch(e){}}
function persist(){
  saveLocal();
  if(saveTimer)clearTimeout(saveTimer);
  saveTimer=setTimeout(function(){
    if(!dbRef)return;
    dbRef.set({xp:S.xp,streak:S.streak,bestStreak:S.bestStreak,lastDay:S.lastDay,
      hist:S.hist,goal:S.goal,cur:S.cur,disc:S.disc,mods:S.mods,
      srs:S.srs||{},dailyN:dailyTarget(),daily:S.daily||{d:null,n:0},tempo:S.tempo||{},dstat:S.dstat||{},metaMin:S.metaMin||120,metaQ:S.metaQ||40,
      sim:S.sim||[],yt:S.yt||{},duv:S.duv||{},nota:S.nota||{},dsc:S.dsc||[],plano:S.plano||null,vid:S.vid||{},theme:S.theme||"auto",
      at:Date.now()})["catch"](function(){});
  },1200);
}
function touchStreak(){
  var t=today();
  if(S.lastDay===t)return;
  if(!S.lastDay)S.streak=1;
  else{var d=daysBetween(S.lastDay,t);S.streak=(d===1)?(S.streak||0)+1:1;}
  S.lastDay=t;
  if(S.streak>(S.bestStreak||0))S.bestStreak=S.streak;
}
function addXp(n){
  S.xp=(S.xp||0)+n;
  var t=today();
  S.hist[t]=(S.hist[t]||0)+n;
  var keep={}; for(var i=0;i>-30;i--){var k=dayKey(i); if(S.hist[k]!=null)keep[k]=S.hist[k];}
  S.hist=keep;
}
function todayXp(){return S.hist[today()]||0;}
function rankOf(xp){
  var r=RANKS[0],nx=null;
  for(var i=0;i<RANKS.length;i++){if(xp>=RANKS[i][0])r=RANKS[i];else{nx=RANKS[i];break;}}
  return {name:r[1],floor:r[0],next:nx};
}
function unlockedIndex(){for(var i=0;i<ALL.length;i++){if(!P().done[ALL[i].id])return i;}return ALL.length;}
function missIds(){return Object.keys(P().misses).filter(function(k){
  return P().misses[k]>0 && (EX[k] || (isCardE(k) && CARDS && CARDS[parseInt(k.slice(1),10)]));});}

/* ---------- som e vibração ---------- */
var AC=null;
function ac(){if(!AC){try{AC=new (window.AudioContext||window.webkitAudioContext)();}catch(e){}}return AC;}
function beep(seq){
  if(!S.sound)return;
  var c=ac(); if(!c)return;
  if(c.state==="suspended"){try{c.resume();}catch(e){}}
  var t0=c.currentTime;
  seq.forEach(function(n){
    try{
      var o=c.createOscillator(), g=c.createGain();
      o.type=n.type||"sine"; o.frequency.value=n.f;
      g.gain.setValueAtTime(0.0001,t0+n.t);
      g.gain.exponentialRampToValueAtTime(n.v||0.16,t0+n.t+0.012);
      g.gain.exponentialRampToValueAtTime(0.0001,t0+n.t+n.d);
      o.connect(g); g.connect(c.destination);
      o.start(t0+n.t); o.stop(t0+n.t+n.d+0.03);
    }catch(e){}
  });
}
function sRight(){beep([{f:659,t:0,d:.09},{f:988,t:.075,d:.17}]);vib(25);}
function sWrong(){beep([{f:200,t:0,d:.16,type:"sawtooth",v:.1},{f:150,t:.085,d:.2,type:"sawtooth",v:.09}]);vib([55,45,55]);}
function sDone(){beep([{f:523,t:0,d:.1},{f:659,t:.085,d:.1},{f:784,t:.17,d:.1},{f:1047,t:.26,d:.3}]);vib([30,40,30,40,70]);}
function vib(p){if(S.vibe&&navigator.vibrate){try{navigator.vibrate(p);}catch(e){}}}

/* ---------- utilidades ---------- */
function el(tag,cls,html){var e=document.createElement(tag);if(cls)e.className=cls;if(html!=null)e.innerHTML=html;return e;}
function svg(id){return '<svg><use href="#'+id+'"/></svg>';}
function esc(s){return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");}
function shuffle(a){a=a.slice();for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1)),t=a[i];a[i]=a[j];a[j]=t;}return a;}
function sameSet(a,b){if(a.length!==b.length)return false;var x=a.slice().sort(),y=b.slice().sort();for(var i=0;i<x.length;i++)if(x[i]!==y[i])return false;return true;}
var DESKTOP = window.matchMedia && window.matchMedia("(hover:hover) and (pointer:fine)").matches;
function kbd(n){return DESKTOP?'<span class="kbd">'+n+'</span>':"";}
function countUp(node,to,ms){
  var t0=performance.now();
  (function f(now){
    var p=Math.min(1,(now-t0)/ms);
    node.textContent="+"+Math.round(to*(1-Math.pow(1-p,3)))+" XP";
    if(p<1)requestAnimationFrame(f);
  })(t0);
}

/* ---------- HUD ---------- */
function renderHud(){
  document.getElementById("hStreak").textContent=S.streak||0;
  document.getElementById("hXp").textContent=S.xp||0;
  var r=rankOf(S.xp||0), lvl=1;
  for(var i=0;i<RANKS.length;i++) if(RANKS[i][1]===r.name) lvl=i+1;
  document.getElementById("hRank").textContent="Nível "+lvl+" · "+r.name;
  var nxt=document.getElementById("hNext"), fill=document.getElementById("hFill");
  if(r.next){
    var span=r.next[0]-r.floor, got=(S.xp||0)-r.floor;
    fill.style.width=Math.max(3,Math.round(got/span*100))+"%";
    nxt.textContent=(r.next[0]-(S.xp||0))+" XP para "+r.next[1];
  }else{fill.style.width="100%";nxt.textContent="Patente máxima";}
  var tx=todayXp(), p=Math.min(1,tx/(S.goal||50));
  var arc=document.getElementById("goalArc"), ring=document.getElementById("goalRing");
  arc.style.strokeDashoffset=(94.2*(1-p)).toFixed(1);
  ring.classList.toggle("hit",tx>=(S.goal||50));
  document.getElementById("goalTxt").textContent=tx;
  ring.title="Meta diária: "+tx+" de "+(S.goal||50)+" XP hoje";
}

/* ---------- trilha ---------- */
var DX=[0,1.2,2,1.2,0,-1.2,-2,-1.2];
function renderTrail(){
  var root=document.getElementById("trail");
  root.innerHTML="";

  /* ---- A TRILHA: uma fila só, com a próxima lição sempre à vista ---- */
  (function(){
    var t=cursoTotais(); if(!t.total) return;
    var p=cursoProxima();
    var dd=p?DISC[p.disc]:null;
    var md=p?REG[p.mod]:null;
    var depois=cursoDepois(3);

    var corpo;
    if(p){
      corpo=
        '<div class="cu-next">'+
          '<span class="cu-ic">'+svg(ICON[p.lesson.type]||"i-target")+'</span>'+
          '<div class="cu-nx">'+
            '<span class="cu-lab">Próxima lição · '+(dd?dd.nome:"")+' · módulo '+md.n+'</span>'+
            '<span class="cu-tit">'+p.lesson.title+'</span>'+
            '<span class="cu-sub">'+md.nome+' · unidade '+p.unit.n+' · '+p.lesson.xp+' XP · '+
              (p.feitasMod?p.feitasMod+' de '+p.totalMod+' lições feitas neste módulo':'módulo novo, '+p.totalMod+' lições')+
            '</span>'+
          '</div>'+
        '</div>'+
        '<button class="big" id="cuGo">Continuar a trilha</button>'+
        (depois.length
          ? '<div class="cu-then"><span class="cu-thl">Depois vem</span>'+
              depois.map(function(k){
                var d2=DISC[discOf(k)];
                return '<span class="cu-chip">'+(d2?d2.curto||d2.nome:"")+' '+REG[k].n+'</span>';
              }).join("")+
            '</div>'
          : '');
    }else{
      corpo='<div class="cu-next"><span class="cu-ic">'+svg("i-trophy")+'</span>'+
        '<div class="cu-nx"><span class="cu-lab">Trilha completa</span>'+
        '<span class="cu-tit">Você percorreu as '+t.total.toLocaleString("pt-BR")+' lições</span>'+
        '<span class="cu-sub">Daqui para a frente o que mantém tudo vivo é o Sprint e a revisão diária.</span>'+
        '</div></div>';
    }

    var card=el("div","cursocard",
      '<div class="cu-h">'+
        '<div class="cu-ht">Sua trilha</div>'+
        '<div class="cu-hn">'+t.feitas.toLocaleString("pt-BR")+' / '+t.total.toLocaleString("pt-BR")+' lições · '+t.pct+'%</div>'+
      '</div>'+
      '<div class="cu-bar"><div class="cu-bf" style="width:'+Math.max(1.5,t.pct)+'%"></div></div>'+
      corpo+
      '<div class="cu-meta">'+t.modsFeitos+' de '+t.mods+' módulos concluídos · '+
        'as oito matérias se intercalam para nenhuma ficar parada</div>');
    root.appendChild(card);
    var go=document.getElementById("cuGo");
    if(go) go.onclick=function(){ irParaCurso(); };

    /* mapa do curso inteiro, para quem quiser ver a estrada toda */
    var det=el("details","cursomapa",
      '<summary><span>Ver a trilha inteira</span><span class="cm-q">'+t.mods+' módulos em ordem</span></summary>');
    var lista=el("div","cm-list");
    var atual=p?p.mod:null;
    cursoOrdem().forEach(function(k,i){
      var d2=DISC[discOf(k)], nls=licoesDoMod(k).length, f=feitasNoMod(k);
      var st=modFeito(k)?"ok":(k===atual?"now":(f?"part":""));
      var r=el("button","cm-row "+st,
        '<span class="cm-n">'+(i+1)+'</span>'+
        '<span class="cm-t"><b>'+(d2?d2.curto||d2.nome:"")+' '+REG[k].n+'</b> '+REG[k].nome+'</span>'+
        '<span class="cm-p">'+(modFeito(k)?"feito":f+"/"+nls)+'</span>');
      r.type="button";
      r.style.setProperty("--cmc","var(--"+((d2&&d2.cor)||"u1")+")");
      r.onclick=function(){
        if(k!==S.cur){ loadModule(k); persist(); }
        renderTrail(); buildPanel();
        window.scrollTo({top:0,behavior:"smooth"});
      };
      lista.appendChild(r);
    });
    det.appendChild(lista);
    root.appendChild(det);
  })();

  root.appendChild(ytCard());
  root.appendChild(metasCard());
  root.appendChild(superCard());
  root.appendChild(prepCard());

  /* ---- SPRINT: o caminho mais curto até a memorização ---- */
  (function(){
    var tot=sprintPool().length; if(!tot) return;
    var st=srsStats();
    var n=sprintN();
    var sc=el("div","sprintcard",
      '<div class="sp-h"><span class="sp-ic">'+svg("i-dumbbell")+'</span>'+
        '<div><div class="sp-t">Sprint de memorização</div>'+
        '<div class="sp-s">Recall direto do banco inteiro — <b>'+tot.toLocaleString("pt-BR")+'</b> itens, '+
        '<b>sem teoria e sem trilha</b>. Vem primeiro o que você erra sempre, depois o que está vencido, '+
        'depois o inédito.</div></div></div>'+
      '<div class="setrow"><span>Itens por rodada</span>'+
        '<div class="seg" id="spSeg">'+
          [20,30,50,100].map(function(v){
            return '<button type="button" data-n="'+v+'" aria-pressed="'+(n===v)+'">'+v+'</button>';
          }).join("")+
        '</div></div>'+
      '<button class="big" id="spGo">Começar agora · ~'+Math.max(1,Math.round(n*0.75))+' min</button>'+
      '<div class="sp-meta">'+
        (st.teimosos?'<b class="leech">'+st.teimosos+' teimoso'+(st.teimosos===1?'':'s')+'</b> entram primeiro · ':'')+
        (st.due?st.due+' vencido'+(st.due===1?'':'s')+' · ':'')+
        (st.total?st.total+' no ciclo':'ciclo ainda vazio — o sprint começa a preenchê-lo')+
        (st.ret!=null?' · retenção '+st.ret+'%':'')+'</div>');
    root.appendChild(sc);
    document.getElementById("spGo").onclick=function(){ startSprint(sprintN()); };
    var seg=document.getElementById("spSeg");
    seg.querySelectorAll("button").forEach(function(b){
      b.onclick=function(){
        S.sprintN=parseInt(b.dataset.n,10); persist(); renderTrail();
      };
    });
  })();

  /* ---- as provas, em ordem de prioridade ---- */
  if(CONC_ORDER.length){
    var pb=el("div","provabar");
    CONC_ORDER.forEach(function(c){
      var cc=CONC[c];
      var w=el("div","provachip"+(cc.confirmado?"":" nv"),
        '<span class="pn">'+cc.nome+'</span>'+
        '<span class="pd">'+provaLabel(cc)+'</span>');
      w.style.setProperty("--pc","var(--"+(cc.cor||"u1")+")");
      w.title=cc.nomeLongo+" · "+cc.orgao+" · banca "+cc.banca+
              (cc.confirmado?"":" · quadro de provas não confirmado");
      if(cc.prioridade===1) w.classList.add("espinha");
      pb.appendChild(w);
    });
    root.appendChild(pb);
  }

  /* ---- revisão diária entre módulos ---- */
  var sst=srsStats();
  if(sst.total || srsFresh().length){
    var metaDia=dailyTarget(), feitasHoje=dailyDoneToday();
    var novosN=srsFresh().length;
    var pend=Math.min(metaDia,Math.max(0,sst.due+novosN));
    var pct=Math.min(100,Math.round(feitasHoje/metaDia*100));
    var emDia=sst.due===0 && novosN===0;
    var dc=el("div","dailycard"+(emDia?" ok":""),
      '<div class="ri">'+svg(emDia?"i-check":"i-repeat")+'</div>'+
      '<div class="rl">'+
        '<div class="rt">Revisão diária'+(emDia?' · em dia':'')+'</div>'+
        '<div class="rs">'+
          (emDia
            ? (sst.total+' carta'+(sst.total===1?"":"s")+' no ciclo · nada vencido hoje')
            : (sst.due===0
              ? ('<b>'+Math.min(metaDia,novosN)+'</b> '+(novosN===1?'item novo':'itens novos')+
                 ' '+(novosN===1?'pronto':'prontos')+' para entrar no ciclo · ~'+Math.max(1,Math.round(pend*0.75))+' min')
              : (function(){
                var mm=modsNaMistura(srsDue());
                var dd=[]; mm.forEach(function(m){var d=discOf(m); if(dd.indexOf(d)<0)dd.push(d);});
                return '<b>'+sst.due+'</b> vencida'+(sst.due===1?"":"s")+' em '+mm.length+' módulo'+(mm.length===1?"":"s")+
                       (dd.length>1?' de '+dd.length+' matérias':'')+' · ~'+Math.max(1,Math.round(pend*0.75))+' min';
              })()))+
        '</div>'+
        '<div class="dbar"><div class="dbf" style="width:'+pct+'%"></div></div>'+
        '<div class="dmeta"><span>'+feitasHoje+'/'+metaDia+' hoje</span>'+
          (sst.ret!=null?'<span>retenção '+sst.ret+'%</span>':'')+
          (sst.cards?'<span>'+sst.cards+' flashcards</span>':'')+
          (sst.maduras?'<span>'+sst.maduras+' maduras</span>':'')+'</div>'+
      '</div>'+
      '<button class="ghost" id="doDaily">'+(emDia?"Ver":"Revisar")+'</button>');
    root.appendChild(dc);
    document.getElementById("doDaily").onclick=function(){ openDaily(); };
    if(sst.teimosos){
      var tr=el("div","teimrow",
        svg("i-x")+'<span style="flex:1">'+sst.teimosos+' item'+(sst.teimosos===1?"":"s")+
        ' que você erra sempre</span>'+
        '<button class="ghost" id="doTeim" style="padding:7px 12px;font-size:.76rem">Atacar</button>');
      root.appendChild(tr);
      document.getElementById("doTeim").onclick=function(){ startTeimosos(); };
    }
  }

  /* ---- barra de matérias ---- */
  root.appendChild(el("div","livrelab","Ou escolha livremente — a trilha acima continua guardada de onde você parou"));
  if(DISC_ORDER.length>1){
    var db=el("div","discbar");
    /* sem direcionamento por prova: as matérias aparecem na ordem do curso */
    var ordD=DISC_ORDER.slice();
    ordD.forEach(function(d){
      var dd=DISC[d];
      var prontos=dd.mods.filter(function(k){return REG[k];});
      var feitas=0,total=0;
      prontos.forEach(function(k){
        total+=REG[k].UNITS.reduce(function(a,u){return a+u.lessons.length;},0);
        if(S.mods&&S.mods[k]) feitas+=Object.keys(S.mods[k].done||{}).length;
      });
      var b=el("button","discchip",
        '<span class="dn">'+dd.nome+'</span>'+
        '<span class="dq">'+(total?feitas+"/"+total+" lições":"em breve")+
        (total&&feitas===total?' · concluída':'')+'</span>'+
        cobHtml(dd.mat,true));
      b.type="button";
      b.style.setProperty("--dc","var(--"+(dd.cor||"u1")+")");
      if(prontos.length){
        b.setAttribute("aria-current", d===S.disc?"true":"false");
        b.onclick=function(){ if(d===S.disc)return; loadDisc(d); loadModule(ORDER[0]); persist(); renderTrail(); buildPanel(); window.scrollTo({top:0,behavior:"smooth"}); };
      }else{ b.disabled=true; b.title="Em construção"; }
      db.appendChild(b);
    });
    root.appendChild(db);
  }

  /* ---- barra de módulos da matéria corrente ---- */
  var mb=el("div","modbar");
  (DC?DC.pesos:PESOS).forEach(function(p){
    var key=(DC&&DC.id!=="afo"?DC.id:"m")+p.mod, mod=REG[key];
    var nome=mod?mod.nome:p.tema;
    var feitas=mod&&S.mods[key]?Object.keys(S.mods[key].done||{}).length:0;
    var total=mod?mod.UNITS.reduce(function(a,u){return a+u.lessons.length;},0):0;
    var b=el("button","modchip",
      '<span class="mn2">Módulo '+p.mod+(mod?" · "+feitas+"/"+total:" · em breve")+'</span><span>'+nome+'</span>'+
      (mod?cobDoMod(key,true):''));
    b.type="button";
    if(mod){
      b.setAttribute("aria-current", key===S.cur?"true":"false");
      b.onclick=function(){ if(key===S.cur)return; loadModule(key); persist(); renderTrail(); buildPanel(); window.scrollTo({top:0,behavior:"smooth"}); };
    }else{ b.disabled=true; b.title="Em construção"; }
    mb.appendChild(b);
  });
  root.appendChild(mb);
  var act=mb.querySelector('[aria-current="true"]');
  if(act) mb.scrollLeft=Math.max(0, act.offsetLeft-mb.clientWidth/2+act.offsetWidth/2);

  var pool=reviewPool();
  if(pool.length>=4){
    var rc=el("div","revcard",
      '<div class="ri">'+svg("i-repeat")+'</div>'+
      '<div class="rl"><div class="rt">Revisão geral</div>'+
      '<div class="rs">'+studiedUnits().length+' unidade'+(studiedUnits().length===1?"":"s")+' no sorteio · '+pool.length+' exercícios disponíveis</div></div>'+
      '<button class="ghost" id="doReview">Revisar</button>');
    root.appendChild(rc);
    document.getElementById("doReview").onclick=function(){
      var l={id:"revquick",type:"review",title:"Revisão geral",xp:30,unit:UNITS[0],reforco:true};
      L={lesson:l,finished:false,correct:0,total:0};
      openOv();startReviewDrill(l,shuffle(pool).slice(0,Math.min(15,pool.length)));
    };
  }

  var miss=missIds();
  if(miss.length){
    var card=el("div","reforco",
      '<div class="ri">'+svg("i-dumbbell")+'</div>'+
      '<div class="rl"><div class="rt">'+miss.length+(miss.length===1?" exercício a reforçar":" exercícios a reforçar")+'</div>'+
      '<div class="rs">Só o que você errou. Acertou, sai da lista.</div></div>'+
      '<button class="ghost" id="doReforco">Praticar</button>');
    root.appendChild(card);
    document.getElementById("doReforco").onclick=function(){startReforco();};
  }
  var cur=unlockedIndex(), gi=0;
  UNITS.forEach(function(u){
    var doneCount=u.lessons.filter(function(l){return !!P().done[l.id];}).length;
    var firstIdx=ALL.indexOf(u.lessons[0]);
    var uw=el("section","unit"+(cur<firstIdx?" locked":""));
    uw.style.setProperty("--uc","var(--"+u.cvar+")");
    uw.style.setProperty("--ucd","var(--"+u.cvar+"-d)");
    uw.appendChild(el("div","unit-head",
      '<div class="uh-l"><div class="uh-n">Unidade '+u.n+'</div><div class="uh-t">'+u.title+'</div></div>'+
      '<div class="uh-c">'+doneCount+'/'+u.lessons.length+'</div>'));
    var nodes=el("div","nodes");
    u.lessons.forEach(function(l){
      var idx=gi++, done=!!P().done[l.id], locked=idx>cur, isCur=idx===cur;
      var w=el("div","nodewrap"+(isCur?" current":""));
      w.style.setProperty("--dx",DX[idx%DX.length]);
      if(isCur) w.appendChild(el("div","startbub",done?"REVISAR":"COMEÇAR"));
      var b=el("button","node"+(done?" done":""));
      b.style.setProperty("--nc","var(--"+u.cvar+")");
      b.style.setProperty("--ncd","var(--"+u.cvar+"-d)");
      b.innerHTML=locked?svg("i-lock"):(done?svg("i-check"):svg(ICON[l.type]));
      b.disabled=locked;
      b.setAttribute("aria-label",(locked?"Bloqueado: ":"")+l.title+" — "+l.xp+" XP");
      if(!locked) b.addEventListener("click",function(){startLesson(l);});
      w.appendChild(b);
      w.appendChild(el("div","node-label",l.title));
      nodes.appendChild(w);
    });
    uw.appendChild(nodes);
    root.appendChild(uw);
  });
  if(cur>=ALL.length){
    var pfim=cursoProxima();
    var td=el("div","trail-done",
      '<h3>Módulo '+M.n+' concluído</h3><p>Você percorreu a trilha inteira'+(DC?" de "+DC.nome:"")+'.'+
      (pfim?' Na fila do curso vem <b>'+(DISC[pfim.disc]?DISC[pfim.disc].nome:"")+' '+REG[pfim.mod].n+'</b> — '+REG[pfim.mod].nome+'.'
           :' Não sobrou nenhuma lição inédita no curso inteiro.')+'</p>'+
      (pfim?'<button class="big" id="fimGo">Continuar a trilha</button>':''));
    root.appendChild(td);
    var fg=document.getElementById("fimGo");
    if(fg) fg.onclick=function(){ irParaCurso(); };
  }
  renderHud();
}

/* ---------- overlay ---------- */
var ov=document.getElementById("ov"), ovInner=document.getElementById("ovInner"),
    ovFill=document.getElementById("ovFill"), ovFoot=document.getElementById("ovFoot"),
    ovFootIn=document.getElementById("ovFootIn"), ovBody=document.getElementById("ovBody"),
    ovHearts=document.getElementById("ovHearts"), ovHeartN=document.getElementById("ovHeartN");
var L=null;
function openOv(){
  CUR_FID=null;
  ov.classList.add("on");document.body.style.overflow="hidden";ac();
  var cb=document.getElementById("ovCob");
  if(cb && M){
    var d=DISC[discOf(S.cur)];
    cb.innerHTML='<span class="ocm">'+(d?d.nome:"")+' · Mód. '+M.n+'</span>'+cobDoMod(S.cur,false);
    cb.hidden=false;
  }
}
function closeOv(){stopTimer();if(typeof pvVidLimpa==="function")pvVidLimpa();fecharTeoria();ov.classList.remove("on");document.body.style.overflow="";L=null;CUR_FID=null;renderTrail();buildPanel();}
function quitLesson(){
  if(L&&L.finished){closeOv();return;}
  if(confirm("Sair da lição? O progresso desta lição será perdido."))closeOv();
}
document.getElementById("ovX").addEventListener("click",quitLesson);
function setFoot(cls,html){ovFoot.className="ov-foot"+(cls?" "+cls:"");ovFootIn.innerHTML=html;}
function setProg(p){ovFill.style.width=Math.max(0,Math.min(100,p))+"%";}
function setHearts(n,lost){
  if(n==null){ovHearts.hidden=true;return;}
  ovHearts.hidden=false;ovHeartN.textContent=n;
  if(lost){ovHearts.classList.remove("lost");void ovHearts.offsetWidth;ovHearts.classList.add("lost");}
}
function scrollTop(){ovBody.scrollTop=0;}

/* ---------- folha de teoria sobre a lição ----------
   Abre por cima de qualquer tela, inclusive do sprint, e fecha sem perder
   o lugar na rodada. É o caminho de volta quando o erro veio de não saber. */
var teoSheet=document.getElementById("teoSheet");
var teoBody=document.getElementById("teoBody");
var teoTit=document.getElementById("teoTit");
var teoSub=document.getElementById("teoSub");
function abrirTeoria(fid){
  var t=teoriaDoItem(fid);
  if(!t){ return; }
  teoTit.textContent=t.unidade||"Teoria";
  teoSub.textContent=t.modNome+(t.n?" · unidade "+t.n:"")+" · "+t.telas.length+
                     (t.telas.length===1?" tela":" telas");
  teoBody.innerHTML=t.telas.map(function(s){
    return '<section class="teotela"><h4>'+s.h+'</h4>'+s.b+'</section>';
  }).join("");
  teoSheet.classList.add("on");
  teoBody.scrollTop=0;
  teoSheet.setAttribute("aria-hidden","false");
}
function fecharTeoria(){
  teoSheet.classList.remove("on");
  teoSheet.setAttribute("aria-hidden","true");
}
document.getElementById("teoX").onclick=fecharTeoria;
teoSheet.addEventListener("click",function(e){ if(e.target===teoSheet) fecharTeoria(); });
document.addEventListener("keydown",function(e){
  if(e.key==="Escape" && teoSheet.classList.contains("on")){ e.stopPropagation(); fecharTeoria(); }
},true);

/* ---------- cronômetro ---------- */
var ovTime=document.getElementById("ovTime");
var timer={id:null, t0:0, limit:0, onEnd:null};
function fmt(s){
  s=Math.max(0,Math.round(s));
  var h=Math.floor(s/3600), m=Math.floor((s%3600)/60), x=s%60;
  var p=function(n){return (n<10?"0":"")+n;};
  return h?h+":"+p(m)+":"+p(x):p(m)+":"+p(x);
}
function stopTimer(){
  if(timer.id)clearInterval(timer.id);
  timer.id=null;ovTime.hidden=true;ovTime.className="ov-time";
}
function startTimer(limitSeconds,onEnd){
  stopTimer();
  timer.t0=Date.now(); timer.limit=limitSeconds||0; timer.onEnd=onEnd||null;
  ovTime.hidden=false;
  tick();
  timer.id=setInterval(tick,1000);
}
function elapsed(){return (Date.now()-timer.t0)/1000;}
function tick(){
  var e=elapsed();
  if(timer.limit){
    var rest=timer.limit-e;
    ovTime.textContent=fmt(rest);
    ovTime.className="ov-time"+(rest<=60?" crit":(rest<=300?" warn":""));
    if(rest<=0){var f=timer.onEnd;stopTimer();if(f)f();}
  }else{
    ovTime.textContent=fmt(e);
  }
}

/* =======================================================
   MOTOR DE EXERCÍCIOS
   ======================================================= */
var onSync=function(){};
function sync(){onSync();}

function exCE(ex){
  /* q E o comentário longo são capturados AGORA: o check() roda depois, quando
     COMX já voltou para o módulo corrente. */
  var q=QS[ex.qi], mais=(COMX&&COMX[ex.qi])||null, pick=null;
  ovInner.innerHTML=
    '<span class="q-kicker">Certo ou errado · estilo '+q[2]+'</span>'+
    '<p class="q-stem">'+q[0]+'</p>'+
    '<div class="ce two">'+
      '<button type="button" data-p="C" aria-pressed="false">'+kbd(1)+'Certo</button>'+
      '<button type="button" data-p="E" aria-pressed="false">'+kbd(2)+'Errado</button>'+
    '</div>';
  var btns=[].slice.call(ovInner.querySelectorAll(".ce button"));
  btns.forEach(function(b){b.onclick=function(){
    pick=b.dataset.p;
    btns.forEach(function(x){x.setAttribute("aria-pressed",x===b?"true":"false");});
    sync();
  };});
  return {can:function(){return pick!=null;},
    check:function(silent){
      var ok=pick===q[1];
      if(!silent){btns.forEach(function(b){b.disabled=true;
        if(b.dataset.p===q[1])b.classList.add("isright");
        else if(b.dataset.p===pick)b.classList.add("iswrong");});}
      return {ok:ok,why:q[3],more:q[4]||mais,src:q[2],sol:"Gabarito: "+(q[1]==="C"?"CERTO":"ERRADO")};
    }};
}

function exMC(ex){
  var pick=null;
  ovInner.innerHTML=
    '<span class="q-kicker">Escolha a alternativa correta</span>'+
    '<p class="q-instr">'+ex.instr+'</p>'+
    '<div class="ce">'+ex.options.map(function(o,i){
      return '<button type="button" data-i="'+i+'" aria-pressed="false">'+kbd(i+1)+'<span>'+o+'</span></button>';}).join("")+'</div>';
  var btns=[].slice.call(ovInner.querySelectorAll(".ce button"));
  btns.forEach(function(b){b.onclick=function(){
    pick=+b.dataset.i;
    btns.forEach(function(x){x.setAttribute("aria-pressed",x===b?"true":"false");});
    sync();
  };});
  return {can:function(){return pick!=null;},
    check:function(silent){
      var ok=pick===ex.answer;
      if(!silent){btns.forEach(function(b){b.disabled=true;
        if(+b.dataset.i===ex.answer)b.classList.add("isright");
        else if(+b.dataset.i===pick)b.classList.add("iswrong");});}
      return {ok:ok,why:ex.why,more:ex.more,src:ex.src,sol:"Correta: "+ex.options[ex.answer]};
    }};
}

function exMulti(ex){
  var sel=[];
  ovInner.innerHTML=
    '<span class="q-kicker">Marque todas as corretas</span>'+
    '<p class="q-instr">'+ex.instr+'</p>'+
    '<div class="ce">'+ex.options.map(function(o,i){
      return '<button type="button" data-i="'+i+'" aria-pressed="false">'+kbd(i+1)+'<span>'+o+'</span></button>';}).join("")+'</div>';
  var btns=[].slice.call(ovInner.querySelectorAll(".ce button"));
  btns.forEach(function(b){b.onclick=function(){
    var i=+b.dataset.i,k=sel.indexOf(i);
    if(k<0)sel.push(i);else sel.splice(k,1);
    b.setAttribute("aria-pressed",k<0?"true":"false");
    sync();
  };});
  return {can:function(){return sel.length>0;},
    check:function(silent){
      var ok=sameSet(sel,ex.answers);
      if(!silent){btns.forEach(function(b){b.disabled=true;
        var i=+b.dataset.i;
        if(ex.answers.indexOf(i)>=0)b.classList.add("isright");
        else if(sel.indexOf(i)>=0)b.classList.add("iswrong");});}
      return {ok:ok,why:ex.why,more:ex.more,src:ex.src,sol:"Corretas: "+ex.answers.map(function(i){return ex.options[i];}).join(" · ")};
    }};
}

function exGap(ex){
  var chosen=null, opts=shuffle(ex.options.map(function(o,i){return {o:o,i:i};}));
  ovInner.innerHTML=
    '<span class="q-kicker">Complete a lacuna</span>'+
    '<p class="q-instr">'+ex.instr+'</p>'+
    '<p class="gapline">'+ex.before+'<span class="slot empty" id="slot"></span>'+ex.after+'</p>'+
    '<div class="bank" id="bank">'+opts.map(function(x,n){
      return '<button class="tile" type="button" data-i="'+x.i+'">'+(DESKTOP?'<span class="kbd">'+(n+1)+'</span> ':'')+x.o+'</button>';}).join("")+'</div>';
  var slot=document.getElementById("slot");
  var tiles=[].slice.call(ovInner.querySelectorAll("#bank .tile"));
  function paint(){
    tiles.forEach(function(t){
      var on=chosen!=null&&+t.dataset.i===chosen;
      t.classList.toggle("ghosted",on);
    });
    if(chosen==null){slot.className="slot empty";slot.textContent="";}
    else{slot.className="slot filled";slot.textContent=ex.options[chosen];}
    sync();
  }
  tiles.forEach(function(t){t.onclick=function(){chosen=+t.dataset.i;paint();};});
  slot.onclick=function(){chosen=null;paint();};
  return {can:function(){return chosen!=null;},
    check:function(silent){
      var ok=chosen===ex.answer;
      if(!silent){
        slot.style.borderBottomColor=ok?"var(--certo)":"var(--errado)";
        slot.style.color=ok?"var(--certo)":"var(--errado)";
        tiles.forEach(function(t){t.disabled=true;});
      }
      return {ok:ok,why:ex.why,more:ex.more,src:ex.src,sol:"Resposta: "+ex.options[ex.answer]};
    }};
}

function exWordbank(ex,vertical){
  var target=ex.target||ex.items;
  var pool=target.concat(ex.extra||[]).map(function(w,i){return {w:w,i:i};});
  var bankOrder=shuffle(pool), ans=[];
  ovInner.innerHTML=
    '<span class="q-kicker">'+(vertical?"Toque na ordem certa":"Toque nas palavras na ordem certa")+'</span>'+
    '<p class="q-instr">'+ex.instr+'</p>'+
    '<div class="ansline" id="ans"'+(vertical?' style="flex-direction:column;align-items:stretch"':'')+'></div>'+
    '<div class="bank" id="bank"'+(vertical?' style="flex-direction:column"':'')+'></div>';
  var ansEl=document.getElementById("ans"), bankEl=document.getElementById("bank");
  function paint(){
    ansEl.innerHTML="";
    if(!ans.length) ansEl.appendChild(el("span","ph","toque abaixo para montar"));
    ans.forEach(function(p,pos){
      var b=el("button","tile",p.w);b.type="button";
      b.onclick=function(){ans.splice(pos,1);paint();};
      ansEl.appendChild(b);
    });
    bankEl.innerHTML="";
    var n=0;
    bankOrder.forEach(function(p){
      var used=ans.indexOf(p)>=0;
      if(!used)n++;
      var b=el("button","tile"+(used?" ghosted":""),(DESKTOP&&!used?'<span class="kbd">'+n+'</span> ':'')+p.w);
      b.type="button";
      b.onclick=function(){if(!used){ans.push(p);paint();}};
      bankEl.appendChild(b);
    });
    sync();
  }
  paint();
  return {can:function(){return ans.length>0;},
    check:function(silent){
      var got=ans.map(function(p){return p.w;});
      var ok=got.length===target.length&&got.every(function(w,i){return w===target[i];});
      if(!silent){
        [].slice.call(ansEl.querySelectorAll(".tile")).forEach(function(t){
          t.disabled=true;
          t.style.borderColor=ok?"var(--certo)":"var(--errado)";
          t.style.color=ok?"var(--certo)":"var(--errado)";
          t.style.background=ok?"var(--certo-soft)":"var(--errado-soft)";
        });
        [].slice.call(bankEl.querySelectorAll(".tile")).forEach(function(t){t.disabled=true;});
      }
      return {ok:ok,why:ex.why,more:ex.more,src:ex.src,sol:(vertical?target.join("  →  "):target.join(" "))};
    }};
}

function exMatch(ex,onAuto){
  var left=ex.pairs.map(function(p,i){return {t:p[0],i:i};});
  var right=shuffle(ex.pairs.map(function(p,i){return {t:p[1],i:i};}));
  var selL=null, matched=0, misses=0;
  ovInner.innerHTML=
    '<span class="q-kicker">Correlacionar</span>'+
    '<p class="q-instr">'+ex.instr+'</p>'+
    '<span class="hint">Toque à esquerda, depois o par à direita</span>'+
    '<div class="matchgrid"><div class="matchcol" id="mL"></div><div class="matchcol" id="mR"></div></div>';
  var cL=document.getElementById("mL"), cR=document.getElementById("mR");
  left.forEach(function(p){
    var b=el("button","tile",p.t);b.type="button";b.dataset.i=p.i;
    b.onclick=function(){
      if(b.classList.contains("okm"))return;
      [].slice.call(cL.children).forEach(function(x){x.classList.remove("sel");});
      b.classList.add("sel");selL=p.i;
    };
    cL.appendChild(b);
  });
  right.forEach(function(p){
    var b=el("button","tile",p.t);b.type="button";b.dataset.i=p.i;
    b.onclick=function(){
      if(b.classList.contains("okm")||selL==null)return;
      var lb=cL.querySelector('[data-i="'+selL+'"]');
      if(p.i===selL){
        b.classList.add("okm");lb.classList.remove("sel");lb.classList.add("okm");
        selL=null;matched++;beep([{f:880,t:0,d:.07,v:.1}]);
        if(matched===ex.pairs.length){
          onAuto({ok:true,
            why: misses===0?"Todos os pares na primeira tentativa.":"Você fechou todos os pares com "+misses+(misses===1?" tentativa errada.":" tentativas erradas."),
            more: ex.more, src: ex.src,
            sol: ex.pairs.map(function(pr){return pr[0]+" → "+pr[1];}).join(" · ")});
        }
      }else{
        misses++;vib(40);
        b.classList.add("badm");lb.classList.add("badm");
        setTimeout(function(){b.classList.remove("badm");lb.classList.remove("badm","sel");},360);
        selL=null;
      }
    };
    cR.appendChild(b);
  });
  return {auto:true,can:function(){return false;},check:function(){return {ok:true};}};
}

function exSort(ex){
  var items=shuffle(ex.items.map(function(it,i){return {t:it[0],b:it[1],i:i};}));
  var place={}, armed=null;
  ovInner.innerHTML=
    '<span class="q-kicker">Classificar</span>'+
    '<p class="q-instr">'+ex.instr+'</p>'+
    '<span class="hint">Toque no item, depois na categoria</span>'+
    '<div class="bank" id="pool"></div>'+
    '<div class="buckets" id="bks"></div>';
  var pool=document.getElementById("pool"), bks=document.getElementById("bks");
  function paint(){
    pool.innerHTML="";
    var n=0;
    items.forEach(function(it){
      if(place[it.i]!=null)return;
      n++;
      var b=el("button","tile"+(armed===it.i?" sel":""),(DESKTOP?'<span class="kbd">'+n+'</span> ':'')+it.t);
      b.type="button";
      b.onclick=function(){armed=(armed===it.i)?null:it.i;paint();};
      pool.appendChild(b);
    });
    if(!pool.children.length)pool.appendChild(el("span","ph","todos classificados"));
    bks.innerHTML="";
    ex.buckets.forEach(function(name,bi){
      var box=el("div","bucket"+(armed!=null?" armed":""));
      box.appendChild(el("div","bucket-h",(DESKTOP&&armed!=null?'<span class="kbd">'+(bi+1)+'</span> ':'')+name));
      items.forEach(function(it){
        if(place[it.i]!==bi)return;
        var b=el("button","tile",it.t);b.type="button";b.dataset.it=it.i;
        b.onclick=function(ev){ev.stopPropagation();delete place[it.i];armed=null;paint();};
        box.appendChild(b);
      });
      box.onclick=function(){if(armed!=null){place[armed]=bi;armed=null;beep([{f:740,t:0,d:.05,v:.07}]);paint();}};
      bks.appendChild(box);
    });
    sync();
  }
  paint();
  return {can:function(){return Object.keys(place).length===items.length;},
    check:function(silent){
      var wrong=[];
      items.forEach(function(it){if(place[it.i]!==it.b)wrong.push(it);});
      var ok=wrong.length===0;
      if(!silent){
        armed=null;paint();
        items.forEach(function(it){
          var b=bks.querySelector('[data-it="'+it.i+'"]');
          if(b){b.classList.add(place[it.i]===it.b?"isright":"iswrong");b.disabled=true;}
        });
        [].slice.call(bks.querySelectorAll(".bucket")).forEach(function(x){x.onclick=null;x.classList.remove("armed");});
        pool.innerHTML="";
      }
      return {ok:ok,why:ex.why,more:ex.more,src:ex.src,
        sol: ok?"":wrong.map(function(it){return it.t+" → "+ex.buckets[it.b];}).join(" · ")};
    }};
}

function renderEx(exId,onAuto){
  CUR_FID=exId;
  var p=qsplit(exId), mod=REG[p.m];
  var ex=mod?mod.EX[p.e]:null;
  if(!ex) return exCE({t:"ce",qi:0});
  var _QS=QS, _COM=COMX;
  if(mod){ QS=mod.QS; COMX=mod.COM||{}; }   /* exCE captura q na chamada */
  var ctl;
  try{
    if(ex.t==="ce")ctl=exCE(ex);
    else if(ex.t==="mc")ctl=exMC(ex);
    else if(ex.t==="multi")ctl=exMulti(ex);
    else if(ex.t==="gap")ctl=exGap(ex);
    else if(ex.t==="wordbank")ctl=exWordbank(ex,false);
    else if(ex.t==="order")ctl=exWordbank(ex,true);
    else if(ex.t==="match")ctl=exMatch(ex,onAuto);
    else if(ex.t==="sort")ctl=exSort(ex);
    else ctl=exCE(ex);
  } finally { QS=_QS; COMX=_COM; }
  if(p.m!==S.cur){
    var k=ovInner.querySelector(".q-kicker");
    if(k) k.innerHTML='<b class="qmod">'+modNome(p.m)+'</b> · '+k.innerHTML;
  }
  return ctl;
}

function recordAttempt(id,ok){
  var p=qsplit(id), pm=PM(p.m), e=p.e;
  var st=pm.stats[e]||{s:0,r:0};
  st.s++; if(ok)st.r++;
  pm.stats[e]=st;
  if(ok){ if(pm.misses[e]){pm.misses[e]--; if(pm.misses[e]<=0)delete pm.misses[e];} }
  else { pm.misses[e]=Math.min(3,(pm.misses[e]||0)+1); }
  srsTouch(qjoin(p.m,e),ok);
  dstatBump(ok);
}

/* =======================================================
   REPETIÇÃO ESPAÇADA ENTRE MÓDULOS
   ======================================================= */
var SRS_IV=[0,1,2,4,8,15,30,60];
var LEECH=3;                       /* erros repetidos que marcam um item como teimoso */
function srs(){ if(!S.srs) S.srs={}; return S.srs; }
/* flashcards entram no ciclo com id "modulo:cN" */
function isCardE(e){ return /^c\d+$/.test(String(e)); }
function cardOf(fid){
  var p=qsplit(fid); if(!isCardE(p.e)) return null;
  var mod=REG[p.m]; if(!mod||!mod.CARDS) return null;
  return mod.CARDS[parseInt(p.e.slice(1),10)]||null;
}
function isLeech(fid){ var st=srs()[fid]; return !!(st&&(st.lap||0)>=LEECH); }
function leechIds(){ return srsAll().filter(isLeech); }
function srsTouch(fid,ok){
  var st=srs()[fid]||{b:0,s:0,r:0,lap:0,due:today()};
  st.s++;
  if(ok){ st.r++; st.b=Math.min(SRS_IV.length-1,(st.b||0)+1); }
  else  { st.lap=(st.lap||0)+1; st.b=0; }
  st.last=today();
  st.due=dayKey(SRS_IV[st.b]);
  srs()[fid]=st;
}
function srsValid(fid){
  var p=qsplit(fid);
  if(!REG[p.m]) return false;
  if(isCardE(p.e)) return !!cardOf(fid);
  return !!REG[p.m].EX[p.e];
}
function srsAll(){ return Object.keys(srs()).filter(srsValid); }
function srsDue(){
  var t=today();
  return srsAll().filter(function(k){ return daysBetween(srs()[k].due,t)>=0; });
}
function srsOverdue(fid){ return Math.max(0,daysBetween(srs()[fid].due,today())); }
function dailyTarget(){ return S.dailyN||20; }
function dailyDoneToday(){
  if(!S.daily||S.daily.d!==today()) return 0;
  return S.daily.n||0;
}
function dailyBump(n){
  if(!S.daily||S.daily.d!==today()) S.daily={d:today(),n:0};
  S.daily.n=(S.daily.n||0)+n;
}
/* candidatos novos: exercícios de lições de prática já concluídas, ainda sem histórico */
function srsFresh(){
  var out=[];
  allMods().forEach(function(k){
    var mod=REG[k]; if(!mod) return;
    var pm=S.mods&&S.mods[k]; if(!pm||!pm.done) return;
    mod.UNITS.forEach(function(u){ u.lessons.forEach(function(l){
      if((l.type==="drill"||l.type==="check")&&Array.isArray(l.data)&&pm.done[l.id]){
        l.data.forEach(function(x){
          var fid=qjoin(k,x);
          /* “match” se resolve sozinho ao completar os pares — fora do ciclo, como no simulado */
          if(!srs()[fid] && mod.EX[x] && mod.EX[x].t!=="match" && out.indexOf(fid)<0) out.push(fid);
        });
      }
      /* flashcards de lições já concluídas também entram no ciclo */
      if(l.type==="flash"&&Array.isArray(l.data)&&pm.done[l.id]){
        l.data.forEach(function(ci){
          var fid=qjoin(k,"c"+ci);
          if(!srs()[fid] && mod.CARDS && mod.CARDS[ci] && out.indexOf(fid)<0) out.push(fid);
        });
      }
    });});
  });
  return out;
}
function dailyPlan(n){
  n=n||dailyTarget();
  var due=srsDue().sort(function(a,b){
    var v=prioridadeDoMod(qsplit(b).m)-prioridadeDoMod(qsplit(a).m); if(v) return v;
    var d=srsOverdue(b)-srsOverdue(a); if(d) return d;
    var l=(srs()[b].lap||0)-(srs()[a].lap||0); if(l) return l;
    return pesoOf(qsplit(b).m)-pesoOf(qsplit(a).m);
  });
  var out=due.slice(0,n);
  if(out.length<n){
    var fresh=shuffle(srsFresh());
    fresh.sort(function(a,b){
      var v=prioridadeDoMod(qsplit(b).m)-prioridadeDoMod(qsplit(a).m); if(v) return v;
      return pesoOf(qsplit(b).m)-pesoOf(qsplit(a).m);
    });
    out=out.concat(fresh.slice(0,n-out.length));
  }
  return intercalar(out);
}
/* intercala matérias em vez de agrupar: a troca de contexto é o que fixa */
function intercalar(ids){
  var buckets={}, ordem=[];
  shuffle(ids).forEach(function(f){
    var d=discOf(qsplit(f).m)||"_";
    if(!buckets[d]){buckets[d]=[];ordem.push(d);}
    buckets[d].push(f);
  });
  var out=[], vivo=true;
  while(vivo){
    vivo=false;
    ordem.forEach(function(d){ if(buckets[d].length){ out.push(buckets[d].shift()); vivo=true; } });
  }
  return out;
}
function srsStats(){
  var all=srsAll(), s=0,r=0,mad=0,teim=0,cart=0;
  all.forEach(function(k){ var st=srs()[k]; s+=st.s||0; r+=st.r||0;
    if((st.b||0)>=5)mad++; if((st.lap||0)>=LEECH)teim++; if(isCardE(qsplit(k).e))cart++; });
  return {total:all.length, due:srsDue().length, ret:s?Math.round(r/s*100):null,
          maduras:mad, teimosos:teim, cards:cart};
}
function srsForecast(dias){
  var out=[];
  for(var i=0;i<dias;i++){
    var k=dayKey(i), n=0;
    srsAll().forEach(function(f){
      var due=srs()[f].due;
      if(i===0 ? daysBetween(due,k)>=0 : due===k) n++;
    });
    out.push({k:k,d:dayShort(i),n:n,hoje:i===0});
  }
  return out;
}
function modsNaMistura(ids){
  var seen=[];
  ids.forEach(function(f){ var m=qsplit(f).m; if(seen.indexOf(m)<0)seen.push(m); });
  return seen.sort();
}

/* =======================================================
   LIÇÕES
   ======================================================= */
function startLesson(l){
  L={lesson:l,finished:false,correct:0,total:0};
  openOv();setHearts(null);setProg(0);stopTimer();
  if(l.type==="teoria")runTeoria(l);
  else if(l.type==="flash")runFlash(l);
  else if(l.type==="drill"||l.type==="check"){startTimer(0);runDrill(l,shuffle(l.data),5);}
  else if(l.type==="feynman")runFeynman(l);
  else if(l.type==="leitura")runLeitura(l);
  else if(l.type==="missao")runMissao(l);
  else if(l.type==="review")runReview(l);
  else if(l.type==="prova")runProva(l);
  else if(l.type==="video")runVideo(l);
}

function startReforco(){
  var ids=shuffle(missIds()).slice(0,12);
  if(!ids.length)return;
  var l={id:"reforco",type:"drill",title:"Reforço dos erros",xp:5+ids.length*2,data:ids,unit:UNITS[0],reforco:true};
  L={lesson:l,finished:false,correct:0,total:0};
  openOv();setProg(0);startTimer(0);
  runDrill(l,ids,5);
}

function startTeimosos(){
  var ids=intercalar(leechIds()).slice(0,12);
  if(!ids.length)return;
  var l={id:"teimosos",type:"drill",title:"Erros teimosos",xp:8+ids.length*3,
         data:ids,unit:UNITS[0],reforco:true,daily:true,ids:ids};
  L={lesson:l,finished:false,correct:0,total:0};
  openOv();setProg(0);startTimer(0);
  runDrill(l,ids,null);
}

/* ---------- SPRINT: memorização direta, sem passar pela trilha ----------
   Puxa do banco INTEIRO — todo flashcard e toda questão de todo módulo,
   tenha ou não a lição sido aberta. Ordem: erro teimoso → vencido → inédito,
   sempre pesado pela prioridade da prova e intercalado entre matérias.      */
function sprintPool(){
  var out=[];
  allMods().forEach(function(k){
    var mod=REG[k]; if(!mod) return;
    if(mod.CARDS) for(var i=0;i<mod.CARDS.length;i++) out.push(qjoin(k,"c"+i));
    for(var e in mod.EX){ if(mod.EX[e] && mod.EX[e].t!=="match") out.push(qjoin(k,e)); }
  });
  return out;
}
function sprintN(){ return S.sprintN||30; }
function sprintPlan(n){
  n=n||sprintN();
  var s=srs(), t=today();
  /* separa por matéria e, dentro dela, por urgência */
  var porDisc={}, ordem=[];
  sprintPool().forEach(function(f){
    var d=discOf(qsplit(f).m)||"_";
    if(!porDisc[d]){ porDisc[d]={leech:[],due:[],novo:[]}; ordem.push(d); }
    var st=s[f];
    if(!st) porDisc[d].novo.push(f);
    else if((st.lap||0)>=LEECH) porDisc[d].leech.push(f);
    else if(daysBetween(st.due,t)>=0) porDisc[d].due.push(f);
  });
  /* cota de cada matéria proporcional à prioridade da prova — assim a rodada
     mistura as matérias que pontuam, em vez de esgotar a primeira da fila */
  var pesos={}, soma=0;
  ordem.forEach(function(d){
    var g=porDisc[d], tem=g.leech.length+g.due.length+g.novo.length;
    var w=(!tem)?0:(DISC[d]?Math.max(1,prioridadeDe(DISC[d].mat)):1);
    pesos[d]=w; soma+=w;
  });
  if(!soma) return [];
  var vivas=ordem.filter(function(d){return pesos[d]>0;})
                 .sort(function(a,b){return pesos[b]-pesos[a];});
  var cotas={}, usado=0;
  vivas.forEach(function(d){ cotas[d]=Math.floor(n*pesos[d]/soma); usado+=cotas[d]; });
  var guarda=0;
  while(usado<n && guarda++<n*4){
    for(var i=0;i<vivas.length && usado<n;i++){ cotas[vivas[i]]++; usado++; }
  }
  function porPeso(a,b){
    var v=prioridadeDoMod(qsplit(b).m)-prioridadeDoMod(qsplit(a).m); if(v) return v;
    return pesoOf(qsplit(b).m)-pesoOf(qsplit(a).m);
  }
  var out=[];
  vivas.forEach(function(d){
    var q=cotas[d]; if(!q) return;
    var g=porDisc[d];
    g.leech.sort(porPeso);
    g.due.sort(function(a,b){ var v=porPeso(a,b); return v||srsOverdue(b)-srsOverdue(a); });
    var novo=shuffle(g.novo); novo.sort(porPeso);
    /* no máximo um terço da cota de teimosos, para a rodada não virar só castigo */
    var pick=g.leech.slice(0,Math.ceil(q/3));
    if(pick.length<q) pick=pick.concat(g.due.slice(0,q-pick.length));
    if(pick.length<q) pick=pick.concat(novo.slice(0,q-pick.length));
    out=out.concat(pick);
  });
  return intercalar(out).slice(0,n);
}
function startSprint(n,forcados,titulo){
  var ids=forcados&&forcados.length?forcados:sprintPlan(n);
  if(!ids.length) return;
  var l={id:"sprint",type:"drill",title:titulo||"Sprint",xp:10+ids.length*2,
         data:ids,unit:UNITS[0],reforco:true,daily:true,ids:ids};
  L={lesson:l,finished:false,correct:0,total:0};
  openOv();setProg(0);startTimer(0);
  runDrill(l,ids,null);
}

/* ---------- revisão diária entre módulos ---------- */
function startDaily(){
  var ids=dailyPlan();
  if(!ids.length) return;
  var l={id:"diaria",type:"drill",title:"Revisão diária",xp:10+ids.length*2,
         data:ids,unit:UNITS[0],reforco:true,daily:true,ids:ids};
  L={lesson:l,finished:false,correct:0,total:0};
  openOv();setProg(0);startTimer(0);
  runDrill(l,ids,null);
}
function openDaily(){
  var ids=dailyPlan();
  var st=srsStats();
  var l={id:"diaria",type:"drill",title:"Revisão diária",xp:10+ids.length*2,
         data:ids,unit:UNITS[0],reforco:true,daily:true,ids:ids};
  L={lesson:l,finished:false,correct:0,total:0};
  openOv();setHearts(null);setProg(0);stopTimer();
  if(!ids.length){
    ovInner.innerHTML='<div class="cele"><div class="medal sad">'+svg("i-repeat")+'</div>'+
      '<h2>Nada vencido por hoje</h2>'+
      '<p>Sua revisão espaçada está em dia. Avance na trilha de algum módulo — os exercícios que você fizer hoje entram automaticamente no ciclo e voltam quando for a hora.</p>'+
      (st.total?'<div class="statgrid"><div class="statbox"><span class="sl">Cartas no ciclo</span><span class="sv">'+st.total+'</span></div>'+
        '<div class="statbox"><span class="sl">Maduras</span><span class="sv">'+st.maduras+'</span></div></div>':'')+
      '</div>';
    setFoot("", '<button class="big" id="db">Voltar à trilha</button>');
    document.getElementById("db").onclick=function(){L.finished=true;closeOv();};
    scrollTop();return;
  }
  var mods=modsNaMistura(ids);
  var novas=ids.filter(function(f){return !srs()[f];}).length;
  var feitas=dailyDoneToday();
  ovInner.innerHTML=
    '<div class="cele"><div class="medal">'+svg("i-repeat")+'</div>'+
    '<h2>Revisão diária</h2>'+
    '<p>Uma rodada curta com o que está vencido em <b>qualquer</b> módulo. Errou, a carta volta amanhã; acertou, ela some por mais tempo. <b>Sem vidas</b> — aqui o objetivo é ver todas.</p>'+
    '<div class="statgrid">'+
      '<div class="statbox"><span class="sl">Nesta rodada</span><span class="sv">'+ids.length+'</span></div>'+
      '<div class="statbox"><span class="sl">Vencidas hoje</span><span class="sv">'+st.due+'</span></div>'+
      '<div class="statbox"><span class="sl">Inéditas</span><span class="sv">'+novas+'</span></div>'+
      '<div class="statbox"><span class="sl">Tempo estimado</span><span class="sv">~'+Math.max(1,Math.round(ids.length*0.75))+' min</span></div>'+
    '</div>'+
    (feitas?'<p style="font-size:.9rem">Você já revisou <b>'+feitas+'</b> carta'+(feitas===1?"":"s")+' hoje.</p>':'')+
    '<p style="font-size:.9rem">Na mistura: '+mods.map(function(m){return modNome(m);}).join(" · ")+'</p></div>';
  setFoot("", '<button class="big" id="dgo">Começar revisão</button>');
  document.getElementById("dgo").onclick=function(){ startDaily(); };
  scrollTop();
}

/* ---------- revisão geral das unidades já estudadas ---------- */
function studiedUnits(){
  return UNITS.filter(function(u){
    return u.lessons.some(function(l){return !!P().done[l.id];});
  });
}
function reviewPool(){
  var pool=[];
  studiedUnits().forEach(function(u){
    u.lessons.forEach(function(l){
      if((l.type==="drill"||l.type==="check")&&Array.isArray(l.data)&&P().done[l.id])
        l.data.forEach(function(id){if(pool.indexOf(id)<0)pool.push(id);});
    });
  });
  return pool;
}
function startReviewDrill(l,ids){
  L={lesson:l,finished:false,correct:0,total:0};
  openOv();setProg(0);startTimer(0);
  runDrill(l,ids,5);
}
function runReview(l){
  var pool=reviewPool();
  var us=studiedUnits();
  if(pool.length<4){
    ovInner.innerHTML='<div class="cele"><div class="medal sad">'+svg("i-repeat")+'</div>'+
      '<h2>Ainda não há o que revisar</h2><p>Conclua as lições de prática de pelo menos uma unidade e volte aqui.</p></div>';
    setFoot("", '<button class="big" id="rb">Voltar à trilha</button>');
    document.getElementById("rb").onclick=function(){L.finished=true;closeOv();};
    return;
  }
  var n=Math.min(18,pool.length);
  setProg(0);
  ovInner.innerHTML=
    '<div class="cele"><div class="medal">'+svg("i-repeat")+'</div>'+
    '<h2>Revisão geral</h2>'+
    '<p>Uma rodada misturando tudo o que você já estudou, sem separar por unidade — é assim que a prova cobra.</p>'+
    '<div class="statgrid">'+
      '<div class="statbox"><span class="sl">Unidades</span><span class="sv">'+us.length+'</span></div>'+
      '<div class="statbox"><span class="sl">Exercícios</span><span class="sv">'+n+'</span></div>'+
      '<div class="statbox"><span class="sl">Vidas</span><span class="sv">5</span></div>'+
    '</div>'+
    '<p style="font-size:.9rem">Unidades no sorteio: '+us.map(function(u){return u.n+". "+u.title;}).join(" · ")+'</p></div>';
  setFoot("", '<button class="big" id="rgo">Começar revisão</button>');
  document.getElementById("rgo").onclick=function(){
    startReviewDrill(l,shuffle(pool).slice(0,n));
  };
  scrollTop();
}

function runTeoria(l){
  var slides=TEORIA[l.data],i=0;
  function draw(){
    setProg(i/slides.length*100);
    ovInner.innerHTML='<div class="slide"><span class="q-kicker">Teoria · '+(i+1)+' de '+slides.length+'</span><h3>'+slides[i].h+'</h3>'+slides[i].b+'</div>';
    setFoot("",'<button class="big" id="go">'+(i===slides.length-1?"Concluir":"Continuar")+'</button>');
    document.getElementById("go").onclick=function(){
      i++;
      if(i>=slides.length){setProg(100);finish(l,null);}
      else{draw();scrollTop();}
    };
  }
  draw();
}

function runFlash(l){
  var queue=shuffle(l.data),total=queue.length,seen=0,revealed=false;
  function draw(){
    var c=CARDS[queue[0]]; CUR_FID=qjoin(S.cur,"c"+queue[0]);
    setProg(Math.min(99,seen/total*100));
    ovInner.innerHTML=
      '<span class="q-kicker">Flashcard · restam '+queue.length+'</span>'+
      '<div class="fcard"><span class="fc-side">Pergunta</span><span class="fc-q">'+c[0]+'</span>'+
      (revealed?'<span class="fc-a">'+c[1]+'</span>':'')+'</div>'+
      (revealed&&temTeoria(qjoin(S.cur,"c"+queue[0]))
        ?'<div class="fb-foot solo"><button type="button" class="fb-teo" id="fbTeo">'+
         svg("i-book")+'<span>Ver a teoria deste ponto</span></button></div>':'');
    if(revealed) ligarTeoBtn(qjoin(S.cur,"c"+queue[0]));
    if(!revealed){
      setFoot("",'<button class="big" id="rev">Ver resposta</button>');
      document.getElementById("rev").onclick=function(){revealed=true;draw();};
    }else{
      setFoot("",'<button class="ghost" id="bad" style="flex:1">Errei</button><button class="big green" id="ok">Acertei</button>');
      document.getElementById("ok").onclick=function(){queue.shift();seen++;beep([{f:784,t:0,d:.08,v:.1}]);next();};
      document.getElementById("bad").onclick=function(){var x=queue.shift();queue.push(x);vib(30);next();};
    }
  }
  function next(){
    revealed=false;
    if(!queue.length){setProg(100);finish(l,null);return;}
    draw();scrollTop();
  }
  draw();
}

/* ---------- o comentário da questão ----------
   Três camadas: o veredito, a razão curta e — quando o item traz — a explicação
   inteira. Embaixo, de onde saiu (artigo, súmula, banca) e o atalho para a
   teoria daquele ponto, que é o que falta quando o erro não foi desatenção. */
function temTeoria(fid){ return !!(fid && teoriaDoItem(fid)); }
function comentario(res,fid){
  var tem=temTeoria(fid);
  return '<div class="fb '+(res.ok?"good":"bad")+'" role="status">'+
    '<div class="fb-h">'+svg(res.ok?"i-check":"i-x")+
      '<span>'+(res.ok?"Isso mesmo":"Não foi dessa vez")+'</span></div>'+
    (!res.ok&&res.sol?'<div class="sol">'+res.sol+'</div>':'')+
    (res.why?'<p class="fb-why">'+res.why+'</p>':'')+
    (res.more?'<div class="fb-more">'+res.more+'</div>':'')+
    ((res.src||tem)?'<div class="fb-foot">'+
      (res.src?'<span class="fb-src">'+res.src+'</span>':'')+
      (tem?'<button type="button" class="fb-teo" id="fbTeo">'+svg("i-book")+
           '<span>Ver a teoria deste ponto</span></button>':'')+
    '</div>':'')+
  '</div>';
}
function ligarTeoBtn(fid){
  var b=document.getElementById("fbTeo");
  if(b) b.onclick=function(){ abrirTeoria(fid); };
}

function runDrill(l,ids,maxHearts){
  var semVidas = (maxHearts==null);
  var i=0, hearts = semVidas ? Infinity : maxHearts;
  L.total=ids.length;
  function draw(){
    if(isCardE(qsplit(ids[i]).e)) return drawCard();
    setHearts(semVidas?null:hearts);setProg(i/ids.length*100);
    var ctl=renderEx(ids[i],function(res){reveal(ctl,res,ids[i]);});
    onSync=function(){var b=document.getElementById("chk");if(b)b.disabled=!ctl.can();};
    if(ctl.auto) setFoot("",'<button class="big" id="chk" disabled>Complete os pares</button>');
    else{
      setFoot("",'<button class="big" id="chk" disabled>Verificar</button>');
      document.getElementById("chk").onclick=function(){reveal(ctl,ctl.check(false),ids[i]);};
    }
    onSync();scrollTop();
  }
  /* ---- recall ativo de flashcard dentro do ciclo espaçado ---- */
  function drawCard(){
    var fid=ids[i], c=cardOf(fid); CUR_FID=fid;
    if(!c){ return avanca(); }
    var p=qsplit(fid);
    onSync=function(){};
    setHearts(semVidas?null:hearts);setProg(i/ids.length*100);
    var kick='<span class="q-kicker">'+
      (p.m!==S.cur?'<b class="qmod">'+modNome(p.m)+'</b> · ':'')+
      'Recordar de memória'+(isLeech(fid)?' · <b class="leech">erro teimoso</b>':'')+'</span>';
    function pinta(aberto){
      ovInner.innerHTML=kick+
        '<div class="fcard"><span class="fc-side">Pergunta</span><span class="fc-q">'+c[0]+'</span>'+
        (aberto?'<span class="fc-a">'+c[1]+'</span>':'')+'</div>'+
        (aberto?(temTeoria(fid)?'<div class="fb-foot solo"><button type="button" class="fb-teo" id="fbTeo">'+
                  svg("i-book")+'<span>Ver a teoria deste ponto</span></button></div>':'')
               :'<p class="recall-dica">Responda em voz alta ou por escrito <b>antes</b> de virar. O esforço de puxar da memória é o que fixa.</p>');
      if(aberto) ligarTeoBtn(fid);
      if(!aberto){
        setFoot("",'<button class="big" id="rev">Ver resposta</button>');
        document.getElementById("rev").onclick=function(){pinta(true);};
      }else{
        setFoot("",'<button class="ghost" id="bad" style="flex:1">Errei</button>'+
                   '<button class="big green" id="ok">Acertei</button>');
        document.getElementById("ok").onclick=function(){grade(fid,true);};
        document.getElementById("bad").onclick=function(){grade(fid,false);};
      }
      scrollTop();
    }
    pinta(false);
  }
  function grade(fid,ok){
    onSync=function(){};
    recordAttempt(fid,ok);
    if(l.daily) dailyBump(1);
    if(ok){L.correct++;sRight();} else {sWrong();}
    persist();
    avanca();
  }
  function avanca(){
    i++;
    if(i>=ids.length){setProg(100);finish(l,{correct:L.correct,total:ids.length});}
    else draw();
  }

  function reveal(ctl,res,exId){
    onSync=function(){};
    if(!ctl.auto){ recordAttempt(exId,res.ok); if(l.daily) dailyBump(1); }
    if(res.ok){L.correct++;sRight();}
    else{ if(!semVidas){hearts--;setHearts(hearts,true);} sWrong(); }
    persist();
    if(!semVidas&&hearts<=0&&!res.ok){outOfHearts();return;}
    ovFoot.className="ov-foot "+(res.ok?"good":"bad");
    ovFootIn.innerHTML='<div style="flex:1;display:grid;gap:10px">'+comentario(res,exId)+
      '<button class="big '+(res.ok?"green":"red")+'" id="nx">Continuar</button>'+
      (DESKTOP?'<div class="kbhint">Enter para continuar</div>':'')+'</div>';
    ligarTeoBtn(exId);
    document.getElementById("nx").onclick=function(){
      i++;
      if(i>=ids.length){setProg(100);finish(l,{correct:L.correct,total:ids.length});}
      else draw();
    };
  }
  function outOfHearts(){
    onSync=function(){};setProg(100);
    ovInner.innerHTML=
      '<div class="cele"><div class="medal sad">'+svg("i-heart")+'</div>'+
      '<h2>Você ficou sem vidas</h2>'+
      '<p>Acontece. Refaça a lição — os exercícios vêm embaralhados, então dessa vez você vai pelo raciocínio, não pela memória da ordem.</p>'+
      '<div class="statgrid"><div class="statbox"><span class="sl">Acertos antes de zerar</span><span class="sv">'+L.correct+'</span></div></div></div>';
    setFoot("",'<button class="ghost" id="quit" style="flex:1">Voltar</button><button class="big" id="again">Tentar de novo</button>');
    document.getElementById("again").onclick=function(){ l.reforco?startReforco():startLesson(l); };
    document.getElementById("quit").onclick=function(){L.finished=true;closeOv();};
    scrollTop();
  }
  draw();
}

function runFeynman(l){
  var f=FEY[l.data];
  setProg(20);
  ovInner.innerHTML=
    '<span class="q-kicker">Etapa Feynman · explique sem olhar</span>'+
    '<h3 style="font-size:1.26rem">'+f.ask+'</h3>'+
    '<p style="color:var(--ink-3);font-size:.93rem">'+f.hint+'</p>'+
    '<textarea id="fta" placeholder="Escreva aqui, com suas palavras…"></textarea>'+
    '<div style="display:flex;gap:10px;align-items:center;flex-wrap:wrap">'+
      '<button class="ghost" id="fask" hidden>Pedir avaliação ao Claude</button>'+
      '<span class="wc" id="fwc">0 palavras · mínimo 25</span></div>'+
    '<div id="fverd"></div>';
  var ta=document.getElementById("fta"),wc=document.getElementById("fwc"),
      askBtn=document.getElementById("fask"),verd=document.getElementById("fverd");
  if(P().ensaios[l.data])ta.value=P().ensaios[l.data];
  if(sampleFn)askBtn.hidden=false;
  function words(){var t=ta.value.trim();return t?t.split(/\s+/).length:0;}
  function syncF(){
    var n=words();
    wc.textContent=n+(n===1?" palavra":" palavras")+" · mínimo 25";
    var ok=n>=25;
    setProg(20+Math.min(60,n/25*60));
    var d=document.getElementById("fdone");if(d)d.disabled=!ok;
    askBtn.disabled=!ok;
  }
  ta.addEventListener("input",function(){P().ensaios[l.data]=ta.value;syncF();persist();});
  setFoot("",'<button class="big" id="fdone" disabled>Concluir e ver o gabarito</button>');
  document.getElementById("fdone").onclick=function(){
    setProg(100);
    ovInner.innerHTML=
      '<span class="q-kicker">Sua explicação</span>'+
      '<div class="box"><p style="white-space:pre-wrap;color:var(--ink)">'+esc(ta.value.trim())+'</p></div>'+
      (verd.innerHTML||'')+
      '<span class="q-kicker">Resposta de referência</span>'+
      '<div class="box tip"><p>'+f.ref+'</p></div>'+
      kitHtml(l.data)+
      '<div class="box trap"><span class="bl">O teste de Feynman</span><p>Compare as duas. Todo termo da referência que não apareceu no seu texto é uma lacuna — volte à lição de teoria correspondente antes de seguir.</p></div>';
    setFoot("good",'<button class="big green" id="fgo">Continuar</button>');
    document.getElementById("fgo").onclick=function(){finish(l,null);};
    scrollTop();
  };
  askBtn.onclick=function(){
    if(!sampleFn)return;
    askBtn.disabled=true;
    verd.innerHTML='<div class="verdict"><span class="vlab">Analisando sua explicação…</span></div>';
    var prompt=
      "Você é um professor de Administração Financeira e Orçamentária corrigindo a explicação de um candidato a concurso público brasileiro, pelo método Feynman.\n\n"+
      "PERGUNTA: "+f.ask+"\n\nGABARITO DE REFERÊNCIA: "+f.ref+"\n\nEXPLICAÇÃO DO CANDIDATO: "+ta.value.trim()+"\n\n"+
      "Avalie apenas em relação ao gabarito. Responda somente com um objeto JSON com estas chaves: "+
      '{"veredito": "solido" | "parcial" | "fragil", "acertos": [até 3 frases curtas], "lacunas": [até 4 frases curtas citando o termo exato do gabarito que ficou de fora], "pergunta": "uma única pergunta de aprofundamento em português"}. '+
      "Seja direto e específico, em português do Brasil. Não elogie sem conteúdo.";
    sampleFn.json(prompt,{modelTier:"default",cache:false}).then(function(r){
      var v=String(r&&r.veredito||"parcial").toLowerCase();
      if(["solido","parcial","fragil"].indexOf(v)<0)v="parcial";
      var lab=v==="solido"?"Explicação sólida":(v==="parcial"?"Parcialmente correta":"Ainda frágil");
      var h='<div class="verdict"><div><span class="badge '+v+'">'+lab+'</span></div>';
      var acs=(r&&r.acertos)||[],la=(r&&r.lacunas)||[];
      if(acs.length)h+='<span class="vlab">Você acertou</span><ul>'+acs.map(function(s){return "<li>"+esc(s)+"</li>";}).join("")+"</ul>";
      if(la.length)h+='<span class="vlab">Lacunas — volte à teoria nestes pontos</span><ul>'+la.map(function(s){return "<li>"+esc(s)+"</li>";}).join("")+"</ul>";
      if(r&&r.pergunta)h+='<span class="vlab">Pergunta de aprofundamento</span><p class="vask">'+esc(r.pergunta)+'</p>';
      verd.innerHTML=h+"</div>";
      askBtn.disabled=false;
    })["catch"](function(e){
      var c=e&&e.code;
      if(c==="not_granted"||c==="sampling_disabled"||c==="not_declared"||c==="capability_disabled"){verd.innerHTML="";askBtn.hidden=true;return;}
      verd.innerHTML='<div class="verdict"><span class="vlab">'+
        (c==="rate_limited"?"Muitos pedidos seguidos. Tente daqui a pouco.":
         c==="invalid_json"?"A resposta veio fora do formato. Clique de novo.":
         "Não consegui avaliar agora. Tente novamente.")+'</span></div>';
      askBtn.disabled=false;
    });
  };
  syncF();
}

function kitHtml(fid){
  var k=KIT[fid]; if(!k)return "";
  return '<div class="kit">'+
    '<div class="kh">'+svg("i-pen")+'<span>Kit da discursiva — '+k.tema+'</span></div>'+
    '<span class="kl">Bases legais para citar</span>'+
    '<ul class="bases">'+k.bases.map(function(b){return "<li>"+b+"</li>";}).join("")+'</ul>'+
    '<span class="kl">Palavras de ouro — cada uma vale ponto no espelho</span>'+
    '<div class="words">'+k.ouro.map(function(w){return '<span class="word">'+w+'</span>';}).join("")+'</div>'+
    '<span class="kl">Período de abertura que você pode reaproveitar</span>'+
    '<p class="op">'+k.abertura+'</p>'+
    '<span class="kl">O que derruba o item</span>'+
    '<p style="font-size:.92rem;color:var(--ink-2);font-weight:600">'+k.evite+'</p>'+
  '</div>';
}

function runLeitura(l){
  var html=l.data==="disc"?M.DISCURSIVA:M.CASO;
  var titulo=l.data==="disc"?"Questão discursiva resolvida":"Estudo de caso resolvido";
  setProg(5);
  ovInner.innerHTML='<span class="q-kicker">Leitura comentada</span><div class="read"><h4>'+titulo+'</h4>'+html+'<div class="scrollhint">fim da resolução</div></div>';
  setFoot("",'<button class="big" id="rdone" disabled>Role até o fim para concluir</button>');
  var btn=document.getElementById("rdone");
  function onScroll(){
    var p=(ovBody.scrollTop+ovBody.clientHeight)/ovBody.scrollHeight;
    setProg(Math.max(5,p*100));
    if(p>0.94&&btn.disabled){btn.disabled=false;btn.textContent="Concluir leitura";}
  }
  ovBody.addEventListener("scroll",onScroll);
  onScroll();
  btn.onclick=function(){ovBody.removeEventListener("scroll",onScroll);finish(l,null);};
  scrollTop();
}

/* ---------- cadernos do TEC, por matéria/módulo/banca ---------- */
var CAD=window.TEC_CAD||{}, CAD_ORDER=(window.TEC_ORDER||[]).filter(function(k){return CAD[k];});
function cadernosDe(discId, modNum){
  var d=null;
  for(var k in CAD){ if(CAD[k].trilha===discId){ d=CAD[k]; break; } }
  if(!d) return null;
  for(var i=0;i<d.mods.length;i++){ if(d.mods[i].n===modNum) return d.mods[i]; }
  return null;
}
function cadernoHtml(links){
  return links.map(function(l){
    var code=l.u.split("/s/")[1]||"";
    return '<a href="'+l.u+'" target="_blank" rel="noopener">'+
           '<span class="bn">'+(l.b==="?"?"Caderno":l.b)+'</span><span class="bu">'+code+'</span></a>';
  }).join("");
}

function runMissao(l){
  setProg(30);
  ovInner.innerHTML=
    '<span class="q-kicker">Missão externa</span>'+
    '<h3 style="font-size:1.26rem">Resolva ~15 questões no TEC</h3>'+
    '<p style="color:var(--ink-2)">'+(M.TECNOTA||"Cadernos indicados pelo próprio resumo para este assunto.")+
    ' Favorite no TEC toda questão que errar ou que deixar dúvida — é ela que volta na sua revisão.</p>'+
    '<div class="teclist">'+ (function(){
      var cad=cadernosDe(S.disc, M.n);
      if(cad && cad.links.length) return cadernoHtml(cad.links);
      return M.TEC.map(function(t){
        var url = /^https?:/.test(t[1]) ? t[1] : ("https://www.tecconcursos.com.br/s/"+t[1]);
        return '<a href="'+url+'" target="_blank" rel="noopener">'+
               '<span class="bn">'+t[0]+'</span><span class="bu">'+(t[2]||t[1])+'</span></a>';
      }).join("");
    })() +'</div>'+
    '<label class="checkrow"><input type="checkbox" id="mchk"><span>Já resolvi pelo menos 15 questões e favoritei as que errei.</span></label>';
  setFoot("",'<button class="big" id="mdone" disabled>Concluir missão</button>');
  var chk=document.getElementById("mchk"),btn=document.getElementById("mdone");
  chk.onchange=function(){btn.disabled=!chk.checked;setProg(chk.checked?100:30);};
  btn.onclick=function(){finish(l,null);};
}

function runProva(l){
  var N=14, PACE=150; /* 2min30 por questão, ritmo da teórico-objetiva */
  setProg(0);
  ovInner.innerHTML=
    '<div class="cele"><div class="medal">'+svg("i-clock")+'</div>'+
    '<h2>Simulado cronometrado</h2>'+
    '<p>'+N+' exercícios sorteados de toda a trilha, sem gabarito na hora. Nota de corte: 70%.</p>'+
    '<div class="box" style="text-align:left;width:100%">'+
      '<span class="bl">Como é na prova do TJPR</span>'+
      '<p>Teórico-objetiva e discursiva têm <b>'+EDITAL.objetiva.tempo+'</b> cada, no mesmo dia, em turnos distintos. '+EDITAL.objetiva.corte+'</p></div>'+
    '<div class="statgrid">'+
      '<div class="statbox"><span class="sl">Questões</span><span class="sv">'+N+'</span></div>'+
      '<div class="statbox"><span class="sl">Ritmo de prova</span><span class="sv">'+fmt(N*PACE)+'</span></div>'+
      '<div class="statbox"><span class="sl">Melhor nota</span><span class="sv">'+(P().provaTries?P().provaBest+"%":"—")+'</span></div>'+
    '</div></div>';
  setFoot("", '<button class="ghost" id="pvLivre" style="flex:1">Sem tempo</button>'+
               '<button class="big" id="pvCrono">Com cronômetro</button>');
  document.getElementById("pvLivre").onclick=function(){go(0);};
  document.getElementById("pvCrono").onclick=function(){go(N*PACE);};
  scrollTop();

  function go(limit){ runProvaItens(l,N,limit); }
}

function runProvaItens(l,N,limit){
  var ids=shuffle(M.PROVA_POOL).slice(0,N),i=0,log=[];
  L.total=ids.length;
  if(limit) startTimer(limit,function(){ acabou(); }); else startTimer(0);
  function acabou(){
    while(log.length<ids.length) log.push({id:ids[log.length],ok:false,why:"Você não chegou a responder este item dentro do tempo.",sol:""});
    result(true);
  }
  function draw(){
    setHearts(null);setProg(i/ids.length*100);
    var ctl=renderEx(ids[i],function(){});
    onSync=function(){var b=document.getElementById("nx");if(b)b.disabled=!ctl.can();};
    setFoot("",'<button class="big" id="nx" disabled>'+(i===ids.length-1?"Finalizar prova":"Próxima")+'</button>');
    document.getElementById("nx").onclick=function(){
      var r=ctl.check(true);
      recordAttempt(ids[i],r.ok);
      log.push({id:ids[i],ok:r.ok,why:r.why,sol:r.sol,more:r.more,src:r.src});
      i++;
      if(i>=ids.length)result();else draw();
    };
    onSync();scrollTop();
  }
  function result(porTempo){
    onSync=function(){};setProg(100);
    var gasto=elapsed(); stopTimer();
    var right=log.filter(function(a){return a.ok;}).length;
    var pc=Math.round(right/log.length*100),pass=pc>=70;
    P().provaTries=(P().provaTries||0)+1;
    if(pc>(P().provaBest||0))P().provaBest=pc;
    persist();
    var errs=log.filter(function(a){return !a.ok;});
    var h='<div class="cele"><div class="medal'+(pass?"":" sad")+'">'+svg(pass?"i-crown":"i-x")+'</div>'+
      '<h2>'+(pass?"Aprovado no módulo 01":(porTempo?"Tempo esgotado":"Ainda não"))+'</h2>'+
      '<p>'+(pass?"Você atingiu a nota de corte desta trilha (70%).":
        (porTempo?"O relógio fechou antes do fim. Os itens não respondidos contam como erro — é assim na prova.":
                  "A nota de corte desta trilha é 70%. Revise os itens abaixo e refaça — os exercícios vêm sorteados."))+'</p>'+
      '<div class="statgrid">'+
        '<div class="statbox"><span class="sl">Aproveitamento</span><span class="sv">'+pc+'%</span></div>'+
        '<div class="statbox"><span class="sl">Acertos</span><span class="sv">'+right+'/'+log.length+'</span></div>'+
        '<div class="statbox"><span class="sl">Tempo</span><span class="sv">'+fmt(gasto)+'</span></div>'+
        '<div class="statbox"><span class="sl">Por questão</span><span class="sv">'+fmt(gasto/log.length)+'</span></div>'+
        '<div class="statbox"><span class="sl">Melhor nota</span><span class="sv">'+(P().provaBest||pc)+'%</span></div>'+
      '</div>';
    if(errs.length){
      h+='<span class="vlab" style="justify-self:start">O que você errou</span><div class="errlist">'+
        errs.map(function(a,k){
          return '<div class="e">'+(a.sol?'<b>'+a.sol+'.</b> ':'')+(a.why||"")+
            (a.more?'<div class="fb-more">'+a.more+'</div>':'')+
            ((a.src||temTeoria(a.id))?'<div class="fb-foot">'+
              (a.src?'<span class="fb-src">'+a.src+'</span>':'')+
              (temTeoria(a.id)?'<button type="button" class="fb-teo" data-teo="'+a.id+'">'+
                 svg("i-book")+'<span>Ver a teoria</span></button>':'')+'</div>':'')+
          '</div>';
        }).join("")+'</div>';
    }
    h+='</div>';
    ovInner.innerHTML=h;
    ovInner.querySelectorAll("[data-teo]").forEach(function(b){
      b.onclick=function(){ abrirTeoria(b.dataset.teo); };
    });
    if(pass){sDone();setFoot("good",'<button class="big green" id="pdone">Receber '+l.xp+' XP</button>');
      document.getElementById("pdone").onclick=function(){finish(l,{correct:right,total:log.length});};}
    else{sWrong();setFoot("bad",'<button class="ghost" id="pq" style="flex:1">Voltar</button><button class="big red" id="pa">Refazer prova</button>');
      document.getElementById("pa").onclick=function(){startLesson(l);};
      document.getElementById("pq").onclick=function(){L.finished=true;closeOv();};}
    scrollTop();
  }
  draw();
}

/* ---------- conclusão ---------- */
function finish(l,stats){
  onSync=function(){};
  L.finished=true;
  var tempo = timer.id ? elapsed() : 0;
  stopTimer();
  var goalBefore=todayXp()>=(S.goal||50);
  var first=!P().done[l.id]&&!l.reforco;
  var gain=l.reforco?l.xp:(first?l.xp:Math.round(l.xp*0.3));
  addXp(gain);
  if(!l.reforco) P().done[l.id]={ts:Date.now(),acc:stats?Math.round(stats.correct/stats.total*100):null};
  touchStreak();persist();renderHud();
  var goalNow=todayXp()>=(S.goal||50);
  var hitGoal=!goalBefore&&goalNow;

  var unit=l.unit;
  var unitDone=!l.reforco&&unit.lessons.every(function(x){return !!P().done[x.id];});
  var nextIdx=ALL.indexOf(l)+1, hasNext=!l.reforco&&nextIdx>0&&nextIdx<ALL.length;
  /* a trilha é uma só: o "continuar" atravessa o fim do módulo sozinho */
  var modAcabou=!l.reforco&&!l.daily&&modFeito(S.cur);
  var pc=(!l.reforco&&!l.daily)?cursoProxima():null;
  var pulaMod=!!(pc&&pc.mod!==S.cur);
  var r=rankOf(S.xp);
  var left=missIds().length;

  var sst=l.daily?srsStats():null;
  var prox=null;
  if(l.daily){
    var fc=srsForecast(8);
    for(var fi=1;fi<fc.length;fi++){ if(fc[fi].n){prox=fc[fi];break;} }
  }

  ovInner.innerHTML='<div class="cele">'+
    '<div class="medal">'+svg(unitDone?"i-trophy":(l.daily?"i-repeat":(l.reforco?"i-dumbbell":"i-check")))+'</div>'+
    '<h2>'+(modAcabou?("Módulo "+M.n+" concluído")
           :(unitDone?("Unidade "+unit.n+" concluída")
           :(l.daily?"Revisão diária concluída":(l.reforco?"Reforço concluído":"Lição concluída"))))+'</h2>'+
    '<div class="xpbig" id="xpBig">+0 XP</div>'+
    (hitGoal?'<div class="goalhit">'+svg("i-check")+'Meta diária de '+(S.goal||50)+' XP batida</div>':'')+
    (l.daily?'<p>'+(sst.due?('Ainda há <b>'+sst.due+'</b> carta'+(sst.due===1?"":"s")+' vencida'+(sst.due===1?"":"s")+' — dá para emendar outra rodada.')
                           :('Tudo em dia. '+(prox?('A próxima leva volta <b>'+prox.d+'</b>, com '+prox.n+' carta'+(prox.n===1?"":"s")+'.'):'Avance na trilha para alimentar o ciclo.')))+'</p>'
       :(l.reforco?'<p>'+(left?left+" exercício"+(left===1?"":"s")+" ainda na sua lista de reforço.":"Sua lista de reforço está limpa.")+'</p>'
              :(first?'':'<p>Revisão vale 30% do XP original. A ofensiva continua contando.</p>')))+
    '<div class="statgrid">'+
      '<div class="statbox"><span class="sl">XP hoje</span><span class="sv">'+todayXp()+'/'+(S.goal||50)+'</span></div>'+
      '<div class="statbox"><span class="sl">Ofensiva</span><span class="sv">'+S.streak+(S.streak===1?" dia":" dias")+'</span></div>'+
      (stats?'<div class="statbox"><span class="sl">Aproveitamento</span><span class="sv">'+Math.round(stats.correct/stats.total*100)+'%</span></div>':'')+
      (tempo>5?'<div class="statbox"><span class="sl">Tempo</span><span class="sv">'+fmt(tempo)+'</span></div>':'')+
      (l.daily?'<div class="statbox"><span class="sl">Cartas hoje</span><span class="sv">'+dailyDoneToday()+'</span></div>'+
               '<div class="statbox"><span class="sl">Retenção</span><span class="sv">'+(sst.ret!=null?sst.ret+"%":"—")+'</span></div>':'')+
    '</div>'+
    '<p><b>'+r.name+'</b>'+(r.next?(" · faltam "+(r.next[0]-S.xp)+" XP para "+r.next[1]):" · patente máxima")+'</p></div>';
  countUp(document.getElementById("xpBig"),gain,700);
  setFoot("good",
    (l.daily&&sst.due)?'<button class="ghost" id="cq" style="flex:1">Trilha</button><button class="big green" id="cd">Outra rodada</button>'
    :pc?'<button class="ghost" id="cq" style="flex:1">Trilha</button><button class="big green" id="cn">'+
        (pulaMod?"Seguir para "+(DISC[pc.disc]?(DISC[pc.disc].curto||DISC[pc.disc].nome):"")+" "+REG[pc.mod].n:"Próxima lição")+'</button>'
    :hasNext?'<button class="ghost" id="cq" style="flex:1">Trilha</button><button class="big green" id="cn">Próxima lição</button>'
           :'<button class="big green" id="cq">Voltar à trilha</button>');
  var cq=document.getElementById("cq");if(cq)cq.onclick=function(){closeOv();};
  var cn=document.getElementById("cn");if(cn)cn.onclick=function(){
    if(pc) irParaCurso(); else startLesson(ALL[nextIdx]);
  };
  var cd=document.getElementById("cd");if(cd)cd.onclick=function(){startDaily();};
  scrollTop();
  sDone();
  if(unitDone||hitGoal)confetti();
}

function confetti(){
  if(window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;
  var cv=document.getElementById("confetti"),ctx=cv.getContext("2d");
  cv.style.display="block";
  var W=cv.width=window.innerWidth,H=cv.height=window.innerHeight;
  var cs=["#2D8A4E","#C08A2A","#2A6F97","#63508C","#B26B2B"],P=[];
  for(var i=0;i<90;i++)P.push({x:W/2+(Math.random()-.5)*W*.5,y:H*.35+(Math.random()-.5)*60,
    vx:(Math.random()-.5)*9,vy:-Math.random()*11-3,s:5+Math.random()*6,c:cs[i%cs.length],
    r:Math.random()*6,vr:(Math.random()-.5)*.3});
  var t=0;
  (function loop(){
    t++;ctx.clearRect(0,0,W,H);
    P.forEach(function(p){p.vy+=0.32;p.x+=p.vx;p.y+=p.vy;p.r+=p.vr;
      ctx.save();ctx.translate(p.x,p.y);ctx.rotate(p.r);
      ctx.fillStyle=p.c;ctx.fillRect(-p.s/2,-p.s/2,p.s,p.s*.62);ctx.restore();});
    if(t<120)requestAnimationFrame(loop);
    else{ctx.clearRect(0,0,W,H);cv.style.display="none";}
  })();
}

/* =======================================================
   PAINEL DE DESEMPENHO
   ======================================================= */
function buildPanel(){
  var pane=document.getElementById("pane0");
  var doneCount=Object.keys(P().done).length;
  var goal=S.goal||50;

  /* aproveitamento por unidade */
  var perUnit=UNITS.map(function(u){
    var s=0,r=0;
    Object.keys(P().stats).forEach(function(id){
      if(EXUNIT[id]===u.n){s+=P().stats[id].s;r+=P().stats[id].r;}
    });
    return {n:u.n,title:u.title,s:s,r:r,pc:s?Math.round(r/s*100):null};
  });

  /* xp dos últimos 7 dias */
  var days=[];
  for(var i=-6;i<=0;i++) days.push({k:dayKey(i),d:dayShort(i),v:S.hist[dayKey(i)]||0,hoje:i===0});
  var maxV=Math.max(goal,Math.max.apply(null,days.map(function(d){return d.v;})))||goal;

  /* mais errados */
  var worst=Object.keys(P().stats).map(function(id){
    var st=P().stats[id];
    return {id:id,miss:st.s-st.r,s:st.s};
  }).filter(function(x){return x.miss>0;})
    .sort(function(a,b){return b.miss-a.miss;}).slice(0,5);

  var h="";

  h+='<div class="statgrid" style="max-width:none">'+
      '<div class="statbox"><span class="sl">Lições</span><span class="sv">'+doneCount+'/'+ALL.length+'</span></div>'+
      '<div class="statbox"><span class="sl">XP total</span><span class="sv">'+(S.xp||0)+'</span></div>'+
      '<div class="statbox"><span class="sl">Maior ofensiva</span><span class="sv">'+(S.bestStreak||S.streak||0)+'d</span></div>'+
      '<div class="statbox"><span class="sl">Melhor prova</span><span class="sv">'+(P().provaTries?P().provaBest+"%":"—")+'</span></div>'+
    '</div>';

  h+=chartHtml();

  h+='<div class="fig"><div class="fig-t">XP nos últimos 7 dias</div>'+
     '<div class="fig-s">meta diária: '+goal+' XP</div>'+
     '<div class="vbars">'+
       '<div class="goalline" style="bottom:'+(goal/maxV*98).toFixed(1)+'px"><span>'+goal+'</span></div>'+
       days.map(function(d){
         var hgt=Math.max(3,Math.round(d.v/maxV*98));
         return '<div class="vcol'+(d.v?"":" zero")+'" title="'+d.d+': '+d.v+' XP">'+
           (d.hoje?'<span class="vn">'+d.v+'</span>':'')+
           '<div class="vv" style="height:'+hgt+'px"></div>'+
           '<span class="vd">'+d.d+'</span></div>';
       }).join("")+
     '</div></div>';

  /* ---- repetição espaçada ---- */
  var sst=srsStats();
  if(sst.total){
    var fc=srsForecast(8);
    var maxF=Math.max(1,Math.max.apply(null,fc.map(function(d){return d.n;})));
    var porMod=[];
    allMods().forEach(function(k){
      if(!REG[k])return;
      var n=0,d=0;
      srsAll().forEach(function(f){ if(qsplit(f).m===k){n++; if(daysBetween(srs()[f].due,today())>=0)d++;} });
      if(n) porMod.push({m:k,n:n,d:d});
    });
    porMod.sort(function(a,b){return b.d-a.d||b.n-a.n;});

    h+='<div class="fig"><div class="fig-t">Repetição espaçada</div>'+
       '<div class="fig-s">cada exercício volta em 1, 2, 4, 8, 15, 30 e 60 dias enquanto você acerta</div>'+
       '<div class="statgrid" style="max-width:none;margin-bottom:12px">'+
         '<div class="statbox"><span class="sl">Cartas no ciclo</span><span class="sv">'+sst.total+'</span></div>'+
         '<div class="statbox"><span class="sl">Vencidas hoje</span><span class="sv">'+sst.due+'</span></div>'+
         '<div class="statbox"><span class="sl">Retenção</span><span class="sv">'+(sst.ret!=null?sst.ret+"%":"—")+'</span></div>'+
         '<div class="statbox"><span class="sl">Maduras</span><span class="sv">'+sst.maduras+'</span></div>'+
       '</div>'+
       '<div class="fig-s">próximos 7 dias</div>'+
       '<div class="vbars">'+
         fc.map(function(d){
           var hgt=Math.max(3,Math.round(d.n/maxF*80));
           return '<div class="vcol'+(d.n?"":" zero")+(d.hoje?" due":"")+'" title="'+d.d+': '+d.n+' cartas">'+
             (d.n?'<span class="vn">'+d.n+'</span>':'')+
             '<div class="vv" style="height:'+hgt+'px"></div>'+
             '<span class="vd">'+(d.hoje?"hoje":d.d)+'</span></div>';
         }).join("")+
       '</div>'+
       (porMod.length>1?'<div class="fig-s" style="margin-top:12px">distribuição por módulo</div><div class="hbars">'+
         porMod.map(function(p){
           return '<div class="hbar'+(p.d?"":" none")+'">'+
             '<div class="hl"><span>'+modNome(p.m)+' · '+REG[p.m].nome+'</span>'+
             '<span class="hv">'+(p.d?p.d+" vencidas · ":"")+p.n+' no ciclo</span></div>'+
             '<div class="ht"><div class="hf" style="width:'+Math.round(p.d/p.n*100)+'%"></div></div></div>';
         }).join("")+'</div>':'')+
       '</div>';
  }

  h+='<div class="fig"><div class="fig-t">Aproveitamento por unidade</div>'+
     '<div class="fig-s">acertos ÷ tentativas nos exercícios</div><div class="hbars">'+
     perUnit.map(function(u){
       var pc=u.pc==null?0:u.pc;
       return '<div class="hbar'+(u.pc==null?" none":"")+'">'+
         '<div class="hl"><span>'+u.n+'. '+u.title+'</span><span class="hv">'+(u.pc==null?"—":pc+"% · "+u.r+"/"+u.s)+'</span></div>'+
         '<div class="ht"><div class="hf" style="width:'+(u.pc==null?0:pc)+'%"></div></div></div>';
     }).join("")+'</div></div>';

  if(worst.length){
    h+='<div class="fig"><div class="fig-t">O que mais te derruba</div>'+
       '<div class="fig-s">os cinco exercícios com mais erros</div><div class="misslist">'+
       worst.map(function(w){
         return '<div class="missrow"><span class="mc">'+w.miss+'×</span><span class="mt">'+esc(exLabel(w.id))+'</span></div>';
       }).join("")+'</div></div>';
  }else{
    h+='<div class="fig"><div class="fig-t">O que mais te derruba</div>'+
       '<div class="empty">Ainda sem erros registrados. Faça algumas lições de prática e a lista aparece aqui.</div></div>';
  }

  var pfx=(DC&&DC.id!=="afo"?DC.id:"m");
  var maxQ=Math.max.apply(null,PESOS.map(function(p){return p.q||0;}));
  var temQ=PESOS.some(function(p){return !!p.q;});
  var pesoSub=temQ?"questões catalogadas no caderno do TJPR 2026 · TEC Concursos"
                  :((DC&&DC.pesoNota)||"ordem do sumário — sem contagem por assunto ainda");
  h+='<div class="fig"><div class="fig-t">Peso de cada assunto · '+(DC?DC.nome:"AFO")+'</div>'+
     '<div class="fig-s">'+pesoSub+'</div>'+
     '<div class="misslist">'+
     PESOS.slice().sort(function(a,b){return (b.q||0)-(a.q||0);}).map(function(p){
       var pronto=!!REG[pfx+p.mod];
       return '<div class="pesorow'+(pronto?"":" soon")+'" title="'+(p.nota||"")+'">'+
         '<span class="pm">'+p.mod+'</span>'+
         '<span class="pt">'+p.tema+'</span>'+
         (p.q?'<span class="pb"><span class="pbf" style="width:'+Math.round(p.q/maxQ*100)+'%"></span></span><span class="pq">'+p.q+'</span>'
             :'<span class="pq" style="color:var(--ink-3)">—</span>')+
       '</div>';
     }).join("")+'</div></div>';

  /* ---- domínio por matéria ---- */
  var mats=DISC_ORDER.map(function(d){
    var dd=DISC[d];
    var prontos=dd.mods.filter(function(k){return REG[k];});
    var feitas=0,total=0,mods=0;
    prontos.forEach(function(k){
      total+=REG[k].UNITS.reduce(function(a,u){return a+u.lessons.length;},0);
      if(S.mods&&S.mods[k]) feitas+=Object.keys(S.mods[k].done||{}).length;
      if(modFeito(k)) mods++;
    });
    return {d:d, nome:dd.nomeLongo||dd.nome, feitas:feitas, total:total,
            mods:mods, nmods:prontos.length,
            p: total? Math.round(feitas/total*100) : 0};
  }).filter(function(x){return x.total;});
  var feitasG=0, totalG=0;
  mats.forEach(function(x){ feitasG+=x.feitas; totalG+=x.total; });
  mats.sort(function(x,y){return y.p-x.p;});
  h+='<div class="fig"><div class="fig-t">Domínio por matéria</div>'+
     '<div class="fig-s">quanto de cada matéria você já percorreu — '+
       feitasG.toLocaleString("pt-BR")+' de '+totalG.toLocaleString("pt-BR")+' lições</div>'+
     '<div class="misslist">'+
     mats.map(function(x){
       return '<div class="prirow'+(x.p?"":" soon")+'">'+
         '<span class="pp">'+x.p+'<span style="font-size:.66em">%</span></span>'+
         '<span class="pt"><span class="ptn">'+x.nome+'</span>'+
           '<span class="pcs">'+x.feitas+' de '+x.total+' lições · '+
             x.mods+' de '+x.nmods+' módulos concluídos</span></span>'+
         '<span class="pb"><span class="pbf" style="width:'+x.p+'%"></span></span>'+
       '</div>';
     }).join("")+'</div>'+
     '<p style="font-size:.82rem;color:var(--ink-3);font-weight:600">'+
     'Percorrer a lição é o primeiro passo; o que fixa é a revisão diária e o sprint. '+
     'Olhe a retenção logo acima para saber se o conteúdo está realmente parando em pé.</p></div>';

  /* ---- as cinco provas ---- */
  if(CONC_ORDER.length){
    h+='<div class="fig"><div class="fig-t">As cinco provas</div>'+
       '<div class="fig-s">quadro do último edital de cada uma</div>'+
       CONC_ORDER.map(function(c){
         var cc=CONC[c];
         var ms=Object.keys(cc.materias);
         var temQ=ms.some(function(m){return cc.materias[m]!=null;});
         ms.sort(function(x,y){return (cc.materias[y]||0)-(cc.materias[x]||0)||prioridadeDe(y)-prioridadeDe(x);});
         return '<div class="provacard'+(cc.prioridade===1?" espinha":"")+'" style="--pc:var(--'+(cc.cor||'u1')+')">'+
           '<div class="pch"><b>'+cc.nomeLongo+'</b><span>'+provaLabel(cc)+'</span></div>'+
           '<div class="pcm">'+cc.orgao+' · banca '+cc.banca+' · '+cc.vagas+' vaga(s) · '+cc.salario+
             (cc.total?' · '+cc.total+' questões':'')+'</div>'+
           '<div class="pcl">'+ms.map(function(m){
              return '<span class="pcx">'+(MAT[m]?MAT[m].curto:m)+
                     (temQ&&cc.materias[m]!=null?'<b>'+cc.materias[m]+'</b>':'')+'</span>';
           }).join("")+'</div>'+
           '<div class="pcf">'+cc.fonte+(cc.nota?' — '+cc.nota:'')+'</div>'+
         '</div>';
       }).join("")+'</div>';
  }

  var miss=missIds();
  if(sst.due){
    h+='<button class="big" id="panelDaily" style="margin-bottom:10px">'+
       (sst.due===1?'Revisar a carta vencida':'Revisar as '+sst.due+' cartas vencidas')+'</button>';
  }
  if(miss.length){
    h+='<button class="big" id="panelReforco">'+
       (miss.length===1?'Praticar o erro deste módulo':'Praticar os '+miss.length+' erros deste módulo')+'</button>';
  }
  pane.innerHTML=h;
  var cs=document.getElementById("chSeg");
  if(cs) cs.querySelectorAll("button").forEach(function(b){ b.onclick=function(){ S.chartDias=parseInt(b.dataset.n,10); persist(); buildPanel(); }; });
  var pd=document.getElementById("panelDaily");
  if(pd)pd.onclick=function(){drawer.classList.remove("on");openDaily();};
  var pr=document.getElementById("panelReforco");
  if(pr)pr.onclick=function(){drawer.classList.remove("on");startReforco();};
}

function buildConsulta(){
  var e=document.getElementById("paneEdital");
  if(e) e.innerHTML=
    '<div class="box"><span class="bl">Sua prova — '+EDITAL.cargo+' · '+EDITAL.banca+'</span>'+
    '<p><b>Teórico-objetiva:</b> '+EDITAL.objetiva.tempo+'. '+EDITAL.objetiva.corte+'</p>'+
    '<p><b>Discursiva:</b> '+EDITAL.discursiva.tempo+'. '+EDITAL.discursiva.mesmodia+' '+
      EDITAL.discursiva.pecas.map(function(p){return p.nome+" (máx. "+p.linhas+" linhas)";}).join(" e ")+'.</p>'+
    '<p style="font-size:.88rem">'+EDITAL.discursiva.corrigidas+'</p></div>'+
    '<div class="box"><span class="bl">O que a banca avalia na discursiva</span>'+
    '<ul>'+EDITAL.discursiva.criterios.map(function(c){return "<li>"+c+"</li>";}).join("")+'</ul></div>'+
    '<div class="box trap"><span class="bl">Zera a prova</span>'+
    '<ul>'+EDITAL.discursiva.zero.map(function(c){return "<li>"+c+"</li>";}).join("")+'</ul></div>';
  var k=document.getElementById("paneKits");
  if(k) k.innerHTML=Object.keys(KIT).map(function(id){return kitHtml(id);}).join("");
  var cd=document.getElementById("paneCadernos");
  if(cd) cd.innerHTML=cadernosDiretorio();
}

/* diretório de todos os cadernos do TEC, matéria por matéria */
function cadernosDiretorio(){
  if(!CAD_ORDER.length) return "";
  var nmod=0, nlink=0, bancas={};
  CAD_ORDER.forEach(function(k){ CAD[k].mods.forEach(function(m){
    nmod++; m.links.forEach(function(l){ nlink++; if(l.b!=="?") bancas[l.b]=1; }); }); });
  var listaB=Object.keys(bancas).sort();
  var h='<div class="fig"><div class="fig-t">Cadernos do TEC — todas as bancas</div>'+
        '<div class="fig-s">'+nlink+' cadernos · '+nmod+' módulos · '+listaB.length+' bancas</div>'+
        '<p style="font-size:.86rem">'+(window.TEC_NOTA||"")+'</p>'+
        '<div class="bancasrow">'+listaB.map(function(b){return '<span class="bchip">'+b+'</span>';}).join("")+'</div></div>';
  h+=CAD_ORDER.map(function(k){
    var d=CAD[k], pronta=!!d.trilha && !!DISC[d.trilha];
    return '<details class="cadmat"'+(pronta?" open":"")+'>'+
      '<summary><span class="cm-n">'+d.nome+'</span>'+
      '<span class="cm-q">'+d.mods.length+' mód.'+(pronta?" · trilha no app":"")+'</span></summary>'+
      d.mods.map(function(m){
        return '<div class="cadmod"><div class="cd-h"><span class="cd-n">'+m.n+'</span>'+
               '<span class="cd-t">'+(m.tema||"—")+'</span></div>'+
               (m.links.length?'<div class="teclist mini">'+cadernoHtml(m.links)+'</div>'
                              :'<p class="empty" style="text-align:left;padding:2px 0">Sem caderno próprio no PDF — use o do módulo anterior.</p>')+'</div>';
      }).join("")+'</details>';
  }).join("");
  return h;
}

/* ---------- drawer / ajustes ---------- */
var drawer=document.getElementById("drawer");
document.getElementById("openDrawer").onclick=function(){buildPanel();buildConsulta();drawer.classList.add("on");};
document.getElementById("drawerX").onclick=function(){drawer.classList.remove("on");};
document.getElementById("drawerBg").onclick=function(){drawer.classList.remove("on");};
[].slice.call(document.querySelectorAll(".tabs button")).forEach(function(t){
  t.onclick=function(){
    var n=+t.dataset.tab;
    [].slice.call(document.querySelectorAll(".tabs button")).forEach(function(x,i){x.setAttribute("aria-selected",i===n?"true":"false");});
    [0,1,2].forEach(function(i){document.getElementById("pane"+i).classList.toggle("on",i===n);});
    document.getElementById("drawerTitle").textContent=["Seu painel","Consulta rápida","Ajustes"][n];
  };
});
function paintSettings(){
  [].slice.call(document.querySelectorAll("#goalSeg button")).forEach(function(b){
    b.setAttribute("aria-pressed", (+b.dataset.g===(S.goal||50))?"true":"false");
  });
  [].slice.call(document.querySelectorAll("#dailySeg button")).forEach(function(b){
    b.setAttribute("aria-pressed", (+b.dataset.n===dailyTarget())?"true":"false");
  });
  document.getElementById("swSound").setAttribute("aria-checked",S.sound?"true":"false");
  document.getElementById("swVibe").setAttribute("aria-checked",S.vibe?"true":"false");
  if(typeof pvPaintTheme==="function") pvPaintTheme();
}
[].slice.call(document.querySelectorAll("#dailySeg button")).forEach(function(b){
  b.onclick=function(){S.dailyN=+b.dataset.n;paintSettings();renderTrail();buildPanel();persist();};
});
[].slice.call(document.querySelectorAll("#goalSeg button")).forEach(function(b){
  b.onclick=function(){S.goal=+b.dataset.g;paintSettings();renderHud();buildPanel();persist();};
});
document.getElementById("swSound").onclick=function(){S.sound=!S.sound;paintSettings();persist();if(S.sound)sRight();};
document.getElementById("swVibe").onclick=function(){S.vibe=!S.vibe;paintSettings();persist();if(S.vibe)vib(40);};
document.getElementById("resetAll").onclick=function(){
  if(!confirm("Zerar XP, ofensiva, lições concluídas, estatísticas e seus ensaios de TODOS os módulos? Isso não pode ser desfeito."))return;
  var g=S.goal,so=S.sound,vi=S.vibe,cur=S.cur,dn=dailyTarget(),dsc=S.disc;
  S={xp:0,streak:0,bestStreak:0,lastDay:null,hist:{},goal:g,sound:so,vibe:vi,cur:cur,disc:dsc,mods:{},
     srs:{},dailyN:dn,daily:{d:null,n:0},tempo:{},dstat:{},theme:S.theme,plano:S.plano,vid:S.vid};
  persist();drawer.classList.remove("on");renderTrail();buildPanel();
  window.scrollTo({top:0,behavior:"smooth"});
};

/* ---------- teclado ---------- */
document.addEventListener("keydown",function(e){
  if(!ov.classList.contains("on"))return;
  if(teoSheet.classList.contains("on"))return;   /* a folha de teoria tem as teclas dela */
  var tag=(e.target.tagName||"").toLowerCase();
  var typing = tag==="textarea"||tag==="input";
  if(e.key==="Escape"&&!typing){e.preventDefault();quitLesson();return;}
  if(e.key==="Enter"&&!e.shiftKey){
    var p=ovFootIn.querySelector(".big:not(:disabled)");
    if(p){e.preventDefault();p.click();}
    return;
  }
  if(typing)return;
  if(!/^[1-9]$/.test(e.key))return;
  var n=+e.key-1, list=null;
  var poolSel=ovInner.querySelector("#pool .tile.sel");
  var leftSel=ovInner.querySelector("#mL .tile.sel");
  if(ovInner.querySelector(".ce button")) list=ovInner.querySelectorAll(".ce button:not(:disabled)");
  else if(poolSel) list=ovInner.querySelectorAll(".bucket");
  else if(ovInner.querySelector("#pool .tile")) list=ovInner.querySelectorAll("#pool .tile");
  else if(leftSel) list=ovInner.querySelectorAll("#mR .tile:not(.okm)");
  else if(ovInner.querySelector("#mL .tile")) list=ovInner.querySelectorAll("#mL .tile:not(.okm)");
  else if(ovInner.querySelector("#bank .tile")) list=ovInner.querySelectorAll("#bank .tile:not(.ghosted)");
  if(list&&list[n]){e.preventDefault();list[n].click();}
});

/* =======================================================
   EXTRAS: cronômetro de estudo, metas do dia, acertos x erros, Super revisão
   ======================================================= */
function tempoMap(){ if(!S.tempo)S.tempo={}; return S.tempo; }
function tempoHoje(){ return tempoMap()[today()]||0; }
function dstat(){ if(!S.dstat)S.dstat={}; return S.dstat; }
function dstatBump(ok){
  var d=dstat(), t=today(), x=d[t]||(d[t]={ok:0,err:0});
  if(ok)x.ok++; else x.err++;
  var ks=Object.keys(d).sort(); while(ks.length>120){ delete d[ks.shift()]; }
}
function metaMin(){ return S.metaMin||120; }
function metaQ(){ return S.metaQ||40; }
function questoesHoje(){ var x=dstat()[today()]; return x?x.ok+x.err:0; }
function fmtHM(s){ s=Math.round(s); var h=Math.floor(s/3600), m=Math.floor((s%3600)/60); return h?h+"h"+(m<10?"0":"")+m:m+" min"; }

/* cronômetro: conta enquanto o app está aberto, visível e você interage */
var est={on:true,last:Date.now()};
function estAct(){ est.last=Date.now(); }
["pointerdown","keydown","touchstart","scroll","click"].forEach(function(ev){
  document.addEventListener(ev,estAct,{passive:true,capture:true});
});
function paintTimer(){
  var b=document.getElementById("hTimer"), t=document.getElementById("hTime"); if(!b||!t) return;
  t.textContent=fmt(tempoHoje());
  b.classList.toggle("paused",!est.on);
  b.classList.toggle("hit",tempoHoje()>=metaMin()*60);
  b.title=est.on?"Tempo de estudo hoje — toque para pausar":"Cronômetro pausado — toque para retomar";
}
setInterval(function(){
  if(!est.on||document.hidden) return;
  var lim=ov.classList.contains("on")?300000:120000;
  if(Date.now()-est.last>lim) return;
  var m=tempoMap(), t=today(); m[t]=(m[t]||0)+1;
  if(m[t]%15===0){
    var ks=Object.keys(m).sort(); while(ks.length>90){ delete m[ks.shift()]; }
    saveLocal();
    if(m[t]%60===0) persist();
    var mc=document.getElementById("metasCard"); if(mc&&!ov.classList.contains("on")) renderMetasInto(mc);
  }
  paintTimer();
},1000);
document.addEventListener("visibilitychange",function(){ if(document.hidden){ saveLocal(); persist(); } });
(function(){
  var b=document.getElementById("hTimer"); if(!b) return;
  b.onclick=function(){ est.on=!est.on; est.last=Date.now(); paintTimer(); };
  var s=document.getElementById("hSuper"); if(s) s.onclick=function(){ runSuperRevisao(); };
})();

/* ---- metas de hoje ---- */
function metaRow(rot,feito,meta,fmtF,fmtM,cor){
  var p=Math.min(100,Math.round(feito/Math.max(1,meta)*100));
  return '<div class="metarow'+(feito>=meta?" ok":"")+'">'+
    '<div class="mr-h"><span>'+rot+'</span><span class="mr-v">'+fmtF+' / '+fmtM+(feito>=meta?' ✓':'')+'</span></div>'+
    '<div class="ht"><div class="hf" style="width:'+p+'%;background:'+cor+'"></div></div></div>';
}
function renderMetasInto(box){
  var st=srsStats(), q=questoesHoje(), x=dstat()[today()]||{ok:0,err:0};
  var feitas=(tempoHoje()>=metaMin()*60?1:0)+(q>=metaQ()?1:0)+(todayXp()>=(S.goal||50)?1:0);
  box.innerHTML=
    '<div class="sp-h"><span class="sp-ic mt-ic">'+svg("i-clock")+'</span>'+
    '<div><div class="sp-t">Metas de hoje</div>'+
    '<div class="sp-s">'+feitas+' de 3 metas batidas · '+(x.ok+x.err?('hoje: <b>'+x.ok+'</b> acerto'+(x.ok===1?"":"s")+' e <b>'+x.err+'</b> erro'+(x.err===1?"":"s")):'ainda sem questões hoje')+'</div></div></div>'+
    metaRow("Tempo de estudo",tempoHoje(),metaMin()*60,fmtHM(tempoHoje()),metaMin()+" min","var(--u2)")+
    metaRow("Questões resolvidas",q,metaQ(),q,metaQ(),"var(--brand)")+
    metaRow("XP do dia",todayXp(),S.goal||50,todayXp(),(S.goal||50),"var(--gold)")+
    '<div class="metasub">'+(st.due?'<b>'+st.due+'</b> revisão'+(st.due===1?"":"ões")+' vencida'+(st.due===1?"":"s")+' esperando · ':'revisões em dia · ')+
    (S.streak?S.streak+(S.streak===1?" dia":" dias")+' de ofensiva':'comece hoje a sua ofensiva')+'</div>'+
    '<div class="setrow"><span>Meta de tempo</span><div class="stepper"><button type="button" data-k="min" data-d="-15" aria-label="menos 15 minutos">−</button><b>'+metaMin()+' min</b><button type="button" data-k="min" data-d="15" aria-label="mais 15 minutos">+</button></div></div>'+
    '<div class="setrow"><span>Meta de questões</span><div class="stepper"><button type="button" data-k="q" data-d="-10" aria-label="menos 10 questões">−</button><b>'+metaQ()+'</b><button type="button" data-k="q" data-d="10" aria-label="mais 10 questões">+</button></div></div>';
  box.querySelectorAll(".stepper button").forEach(function(b){
    b.onclick=function(){
      var d=parseInt(b.dataset.d,10);
      if(b.dataset.k==="min") S.metaMin=Math.max(15,Math.min(600,metaMin()+d));
      else S.metaQ=Math.max(10,Math.min(500,metaQ()+d));
      persist(); renderMetasInto(box); paintTimer();
    };
  });
}
function metasCard(){
  var c=el("div","sprintcard metascard"); c.id="metasCard"; renderMetasInto(c); return c;
}

/* ---- acertos x erros ---- */
function discTotals(){
  var out={};
  Object.keys(S.mods||{}).forEach(function(k){
    var pm=S.mods[k]; if(!pm||!pm.stats||!REG[k]) return;
    var d=discOf(k), o=out[d]||(out[d]={s:0,r:0});
    Object.keys(pm.stats).forEach(function(e){ o.s+=pm.stats[e].s||0; o.r+=pm.stats[e].r||0; });
  });
  return out;
}
function chartHtml(){
  var N=S.chartDias||14, d=dstat(), days=[], i;
  for(i=N-1;i>=0;i--){ var k=dayKey(-i), v=d[k]||{ok:0,err:0}; days.push({k:k,s:dayShort(-i),ok:v.ok,err:v.err}); }
  var ok=0,er=0,mx=1; days.forEach(function(x){ ok+=x.ok; er+=x.err; mx=Math.max(mx,x.ok+x.err); });
  var tot=discTotals(), gs=0,gr=0; Object.keys(tot).forEach(function(k){ gs+=tot[k].s; gr+=tot[k].r; });
  var pc=ok+er?Math.round(ok/(ok+er)*100):null, gpc=gs?Math.round(gr/gs*100):null;
  var W=300,H=130,bw=W/N, bars="";
  days.forEach(function(x,j){
    var ho=x.ok/mx*(H-18), he=x.err/mx*(H-18), bx=j*bw+bw*0.15, w=bw*0.7;
    bars+='<g><title>'+x.k.slice(8)+'/'+x.k.slice(5,7)+': '+x.ok+' acertos, '+x.err+' erros</title>'+
      (x.ok?'<rect x="'+bx.toFixed(1)+'" y="'+(H-12-ho).toFixed(1)+'" width="'+w.toFixed(1)+'" height="'+ho.toFixed(1)+'" rx="2" fill="var(--certo)"/>':'')+
      (x.err?'<rect x="'+bx.toFixed(1)+'" y="'+(H-12-ho-he).toFixed(1)+'" width="'+w.toFixed(1)+'" height="'+he.toFixed(1)+'" rx="2" fill="var(--errado)"/>':'')+
      ((N<=14||j%3===0)?'<text x="'+(bx+w/2).toFixed(1)+'" y="'+(H-1)+'" text-anchor="middle" font-size="7.5" fill="var(--ink-3)">'+(N<=7?x.s:x.k.slice(8))+'</text>':'')+'</g>';
  });
  var C=2*Math.PI*30, ar=gs?gr/gs:0;
  var donut='<svg viewBox="0 0 80 80" class="donut" role="img" aria-label="Aproveitamento geral '+(gpc==null?"sem dados":gpc+"%")+'">'+
    '<circle cx="40" cy="40" r="30" fill="none" stroke="'+(gs?"var(--errado)":"var(--line)")+'" stroke-width="11"/>'+
    '<circle cx="40" cy="40" r="30" fill="none" stroke="var(--certo)" stroke-width="11" stroke-dasharray="'+(C*ar).toFixed(1)+' '+C.toFixed(1)+'" transform="rotate(-90 40 40)"/>'+
    '<text x="40" y="45" text-anchor="middle" font-size="15" font-weight="800" fill="var(--ink)">'+(gpc==null?"—":gpc+"%")+'</text></svg>';
  var discs=Object.keys(tot).filter(function(k){return tot[k].s>0&&DISC[k];}).sort(function(a,b){return tot[b].s-tot[a].s;});
  var h='<div class="fig"><div class="fig-t">Acertos e erros</div>'+
    '<div class="fig-s">exercícios resolvidos no app</div>'+
    '<div class="seg chseg" id="chSeg">'+[7,14,30].map(function(v){return '<button type="button" data-n="'+v+'" aria-pressed="'+(N===v)+'">'+v+' dias</button>';}).join("")+'</div>'+
    '<div class="statgrid" style="max-width:none">'+
      '<div class="statbox"><span class="sl">Acertos</span><span class="sv" style="color:var(--certo)">'+ok+'</span></div>'+
      '<div class="statbox"><span class="sl">Erros</span><span class="sv" style="color:var(--errado)">'+er+'</span></div>'+
      '<div class="statbox"><span class="sl">Aproveitamento</span><span class="sv">'+(pc==null?"—":pc+"%")+'</span></div></div>'+
    '<svg viewBox="0 0 '+W+' '+H+'" class="chbars" role="img" aria-label="Acertos e erros por dia">'+bars+'</svg>'+
    '<div class="chleg"><span><i style="background:var(--certo)"></i>acertos</span><span><i style="background:var(--errado)"></i>erros</span></div>'+
    '<div class="dnrow">'+donut+'<div class="dntx"><b>Geral desde o início</b><br>'+gr+' acertos · '+(gs-gr)+' erros<br><span>'+gs+' tentativas</span></div></div>'+
    (discs.length?'<div class="fig-t" style="margin-top:8px">Por matéria</div><div class="hbars">'+discs.map(function(k){
      var t=tot[k], p=Math.round(t.r/t.s*100);
      return '<div class="hbar"><div class="hl"><span>'+DISC[k].nome+'</span><span class="hv">'+p+'% · '+t.r+' acertos / '+(t.s-t.r)+' erros</span></div>'+
        '<div class="ht split"><div class="hf" style="width:'+p+'%;background:var(--certo)"></div><div class="hf" style="width:'+(100-p)+'%;background:var(--errado)"></div></div></div>';
    }).join("")+'</div>':'<div class="empty">Resolva alguns exercícios e o gráfico aparece aqui.</div>')+
    '</div>';
  var tempo=tempoMap(), tdias=[], tmx=1;
  for(i=6;i>=0;i--){ var kk=dayKey(-i), vv=Math.round((tempo[kk]||0)/60); tdias.push({s:dayShort(-i),v:vv}); tmx=Math.max(tmx,vv,metaMin()); }
  h+='<div class="fig"><div class="fig-t">Tempo de estudo · 7 dias</div><div class="fig-s">meta: '+metaMin()+' min por dia · hoje: '+fmtHM(tempoHoje())+'</div><div class="vbars">'+
    '<div class="goalline" style="bottom:'+(metaMin()/tmx*98).toFixed(1)+'px"><span>'+metaMin()+'</span></div>'+
    tdias.map(function(x){ var g=Math.max(3,Math.round(x.v/tmx*98));
      return '<div class="vcol'+(x.v?"":" zero")+'" title="'+x.s+': '+x.v+' min"><div class="vv" style="height:'+g+'px'+(x.v>=metaMin()?';background:var(--certo)':'')+'"></div><span class="vd">'+x.s+'</span></div>'; }).join("")+
    '</div></div>';
  return h;
}

/* ---- Super revisão: todas as matérias, cota igual para cada uma ---- */
function superPlan(n,discs){
  var s=srs(), t=today(), por={};
  discs.forEach(function(d){ por[d]={err:[],due:[],visto:[],novo:[]}; });
  sprintPool().forEach(function(f){
    var p=qsplit(f), d=discOf(p.m); if(!por[d]) return;
    var pm=S.mods&&S.mods[p.m], st=s[f];
    if((pm&&pm.misses&&pm.misses[p.e])||(st&&(st.lap||0)>=LEECH)) por[d].err.push(f);
    else if(st&&daysBetween(st.due,t)>=0) por[d].due.push(f);
    else if(st||(pm&&pm.stats&&pm.stats[p.e])) por[d].visto.push(f);
    else por[d].novo.push(f);
  });
  var fila={}, vivas=[];
  discs.forEach(function(d){
    var g=por[d]; fila[d]=shuffle(g.err).concat(shuffle(g.due),shuffle(g.visto),shuffle(g.novo));
    if(fila[d].length) vivas.push(d);
  });
  var out=[], guard=0;
  while(out.length<n && vivas.length && guard++<n+50){
    var quota=Math.max(1,Math.floor((n-out.length)/vivas.length));
    vivas.forEach(function(d){ var take=fila[d].splice(0,quota); out=out.concat(take); });
    vivas=vivas.filter(function(d){return fila[d].length;});
  }
  return intercalar(out.slice(0,n));
}
function superCard(){
  var tot=sprintPool().length; if(!tot) return document.createElement("div");
  var c=el("div","sprintcard supercard",
    '<div class="sp-h"><span class="sp-ic" style="background:var(--u3)">'+svg("i-repeat")+'</span>'+
    '<div><div class="sp-t">Super revisão</div>'+
    '<div class="sp-s">Uma rodada com <b>todas as matérias</b> ao mesmo tempo, com a mesma fatia para cada uma. Primeiro o que você erra, depois o vencido, depois o que já viu e por fim o inédito.</div></div></div>'+
    '<button class="big" id="supGo">Montar minha Super revisão</button>');
  c.querySelector("#supGo").onclick=function(){ runSuperRevisao(); };
  return c;
}
function runSuperRevisao(){
  L={lesson:{id:"super",type:"super"},finished:true,correct:0,total:0};
  openOv(); setHearts(null); setProg(0); stopTimer();
  var cnt={}; sprintPool().forEach(function(f){ var d=discOf(qsplit(f).m); cnt[d]=(cnt[d]||0)+1; });
  var ds=DISC_ORDER.filter(function(d){return cnt[d];});
  var size=S.superN||60, sel={}; ds.forEach(function(d){ sel[d]=true; });
  ovInner.innerHTML=
    '<div class="cele"><div class="medal" style="background:var(--u3)">'+svg("i-repeat")+'</div>'+
    '<h2>Super revisão</h2>'+
    '<p>Escolha o tamanho da rodada e as matérias. Cada matéria marcada entra com a mesma quantidade de itens, começando pelos seus erros.</p>'+
    '<div class="seg" id="supSeg" style="margin:6px 0">'+[30,60,100,200].map(function(v){return '<button type="button" data-n="'+v+'">'+v+'</button>';}).join("")+'</div>'+
    '<div class="supact"><button type="button" class="ghost" id="supAll">Marcar todas</button><button type="button" class="ghost" id="supNone">Limpar</button></div>'+
    '<div class="suplist" id="supList">'+ds.map(function(d){
      return '<label class="checkrow"><input type="checkbox" data-d="'+d+'" checked><span>'+DISC[d].nomeLongo+' <small>('+cnt[d]+' itens)</small></span></label>';
    }).join("")+'</div></div>';
  function paint(){
    ovInner.querySelectorAll("#supSeg button").forEach(function(b){ b.setAttribute("aria-pressed",String(parseInt(b.dataset.n,10)===size)); });
    var n=ds.filter(function(d){return sel[d];}).length;
    var go=document.getElementById("supStart"); if(go){ go.disabled=!n; go.textContent=n?("Começar · "+size+" itens · ~"+Math.max(1,Math.round(size*0.75))+" min"):"Marque ao menos uma matéria"; }
  }
  setFoot("",'<button class="big" id="supStart">Começar</button>');
  ovInner.querySelectorAll("#supSeg button").forEach(function(b){ b.onclick=function(){ size=parseInt(b.dataset.n,10); S.superN=size; persist(); paint(); }; });
  ovInner.querySelectorAll("#supList input").forEach(function(i){ i.onchange=function(){ sel[i.dataset.d]=i.checked; paint(); }; });
  document.getElementById("supAll").onclick=function(){ ds.forEach(function(d){sel[d]=true;}); ovInner.querySelectorAll("#supList input").forEach(function(i){i.checked=true;}); paint(); };
  document.getElementById("supNone").onclick=function(){ ds.forEach(function(d){sel[d]=false;}); ovInner.querySelectorAll("#supList input").forEach(function(i){i.checked=false;}); paint(); };
  document.getElementById("supStart").onclick=function(){
    var ids=superPlan(size,ds.filter(function(d){return sel[d];}));
    if(!ids.length) return;
    startSprint(null,ids,"Super revisão");
  };
  paint(); scrollTop();
}


/* ---- backup do progresso + armazenamento persistente ---- */
try{ if(navigator.storage&&navigator.storage.persist) navigator.storage.persist(); }catch(e){}
function paintBackup(){
  var l=document.getElementById("bkLast"); if(!l) return;
  var t=null; try{ t=localStorage.getItem("afo01_backup_at"); }catch(e){}
  l.textContent=t?new Date(parseInt(t,10)).toLocaleDateString("pt-BR"):"nunca";
}
(function(){
  var ex=document.getElementById("bkExp"), im=document.getElementById("bkImp"), fi=document.getElementById("bkFile");
  if(!ex||!im||!fi) return;
  ex.onclick=function(){
    saveLocal();
    var data=JSON.stringify({app:"estudo-fiscal",v:1,at:Date.now(),state:S});
    var blob=new Blob([data],{type:"application/json"}), a=document.createElement("a");
    a.href=URL.createObjectURL(blob); a.download="progresso-estudos-"+today()+".json";
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(function(){URL.revokeObjectURL(a.href);},4000);
    try{ localStorage.setItem("afo01_backup_at",String(Date.now())); }catch(e){}
    paintBackup();
  };
  im.onclick=function(){ fi.value=""; fi.click(); };
  fi.onchange=function(){
    var f=fi.files&&fi.files[0]; if(!f) return;
    var r=new FileReader();
    r.onload=function(){
      try{
        var o=JSON.parse(r.result), st=o&&o.state;
        if(!st||typeof st!=="object"||!st.mods) throw new Error("x");
        if(!confirm("Importar este backup vai SUBSTITUIR o progresso atual deste aparelho. Continuar?")) return;
        localStorage.setItem("afo01_trail",JSON.stringify(st));
        location.reload();
      }catch(e){ alert("Arquivo inválido. Use um backup exportado por este app."); }
    };
    r.readAsText(f);
  };
  paintBackup();
})();

/* =====================================================================
   PREPARAÇÃO PARA A PROVA
   simulados por concurso · plano com contagem regressiva (+ .ics) ·
   caderno de erros/dúvidas · mapa de domínio · treino de discursiva ·
   folha de revisão final · voz e tema escuro · aviso de YouTube na trilha
   ===================================================================== */
var CUR_FID=null;
function pvEsc(s){return String(s==null?"":s).replace(/[&<>"]/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c];});}
function pvStrip(s){return String(s==null?"":s).replace(/<[^>]+>/g," ").replace(/\s+/g," ").trim();}
function pvE(){
  if(!S.sim)S.sim=[]; if(!S.yt)S.yt={}; if(!S.duv)S.duv={}; if(!S.nota)S.nota={}; if(!S.dsc)S.dsc=[];
  if(!S.plano)S.plano={conc:"tjpr",hpd:3,ini:19,datas:{}};
  if(!S.plano.datas)S.plano.datas={};
}
var PV_CONC=["tjpr","isscwb","atrfb"].filter(function(k){return CONC[k];});
var PV_MATMAP={tjpr:{contab:["contab","afo","lrf"]},isscwb:{contab:["contab","cavan","afo","lrf"]},atrfb:{contab:["contab","cavan"]}};
var PV_EXTRA={matem:"Matemática",legpr:"Legislação do Paraná",ingles:"Inglês"};
function pvMatNome(k){ return (window.MAT&&MAT[k])?MAT[k].nome:(PV_EXTRA[k]||k); }
function pvDiscs(conc,k){
  var mats=(PV_MATMAP[conc]&&PV_MATMAP[conc][k])||[k];
  return DISC_ORDER.filter(function(d){
    return mats.indexOf(DISC[d].mat)>=0 && DISC[d].mods.some(function(m){return REG[m];});
  });
}
function pvAcc(mod){
  var pm=S.mods&&S.mods[mod], s=0, r=0;
  if(pm&&pm.stats) for(var e in pm.stats){ s+=pm.stats[e].s; r+=pm.stats[e].r; }
  return {s:s,r:r,pc:s?Math.round(r/s*100):null};
}
function pvTela(html,foot){
  CUR_FID=null;
  L={lesson:{id:"prep",type:"prep"},finished:true,correct:0,total:0};
  openOv(); setHearts(null); setProg(0); stopTimer();
  ovInner.innerHTML=html;
  setFoot("",foot||'<button class="big" id="pvClose">Voltar à trilha</button>');
  var c=document.getElementById("pvClose"); if(c) c.onclick=function(){ closeOv(); };
  scrollTop();
}
function pvDownload(nome,tipo,conteudo){
  var blob=new Blob([conteudo],{type:tipo}), a=document.createElement("a");
  a.href=URL.createObjectURL(blob); a.download=nome;
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(function(){URL.revokeObjectURL(a.href);},4000);
}
function pvData(k){ pvE(); return (S.plano.datas&&S.plano.datas[k])||(CONC[k]&&CONC[k].data)||null; }
function pvDias(k){ var d=pvData(k); return d?daysBetween(today(),d):null; }
function pvDataBr(iso){ return iso?iso.slice(8,10)+"/"+iso.slice(5,7)+"/"+iso.slice(0,4):""; }

/* ---------------- 1. SIMULADOS POR CONCURSO ---------------- */
function pvSimPool(conc,k){
  var out=[];
  pvDiscs(conc,k).forEach(function(d){ DISC[d].mods.forEach(function(m){
    var mod=REG[m]; if(!mod||!mod.EX) return;
    for(var e in mod.EX){ var t=mod.EX[e]&&mod.EX[e].t; if(t==="mc"||t==="ce"||t==="multi"||t==="gap") out.push(qjoin(m,e)); }
  });});
  return out;
}
function pvSimPlan(conc,n){
  var cc=CONC[conc], ks=Object.keys(cc.materias), pools={}, soma=0, falta=[];
  ks.forEach(function(k){ var p=pvSimPool(conc,k); if(p.length){ pools[k]=shuffle(p); soma+=cc.materias[k]; } else falta.push(k); });
  var vivos=Object.keys(pools), cota={}, tot=0;
  vivos.forEach(function(k){ cota[k]=Math.min(pools[k].length,Math.floor(n*cc.materias[k]/soma)); tot+=cota[k]; });
  var g=0;
  while(tot<n && g++<n*5){
    var moved=false;
    vivos.slice().sort(function(a,b){return cc.materias[b]-cc.materias[a];}).forEach(function(k){
      if(tot<n && cota[k]<pools[k].length){ cota[k]++; tot++; moved=true; }
    });
    if(!moved) break;
  }
  var ids=[], keys=[];
  ks.forEach(function(k){ if(!pools[k]) return; pools[k].slice(0,cota[k]).forEach(function(f){ ids.push(f); keys.push(k); }); });
  return {ids:ids,keys:keys,cota:cota,falta:falta,pools:pools,soma:soma};
}
var PV_SIM={conc:null,size:40,timed:true};
function pvSimScreen(){
  pvE();
  if(!PV_SIM.conc||PV_CONC.indexOf(PV_SIM.conc)<0) PV_SIM.conc=PV_CONC[0];
  var cc=CONC[PV_SIM.conc], n=PV_SIM.size==="full"?cc.total:PV_SIM.size;
  var pl=pvSimPlan(PV_SIM.conc,n);
  var pesoTot=0, pesoCob=0;
  Object.keys(cc.materias).forEach(function(k){ pesoTot+=cc.materias[k]; if(pl.pools[k]) pesoCob+=cc.materias[k]; });
  var hist=S.sim.filter(function(h){return h.conc===PV_SIM.conc;}).slice(-4).reverse();
  var h='<div class="cele"><div class="medal">'+svg("i-target")+'</div><h2>Simulados por concurso</h2>'+
    '<p>Prova montada com os pesos de cada matéria no concurso, <b>sem feedback durante a prova</b> e com relógio. O resultado sai por matéria, para você ver onde perdeu pontos.</p>'+
    '<div class="seg" id="pvC" style="margin:4px 0">'+PV_CONC.map(function(k){
      return '<button type="button" data-c="'+k+'" aria-pressed="'+(k===PV_SIM.conc)+'">'+CONC[k].curto+'</button>';}).join("")+'</div>'+
    '<p style="font-size:.88rem">'+cc.nome+' · banca <b>'+cc.banca+'</b> · prova real: '+cc.total+' questões</p>'+
    '<div class="seg" id="pvN" style="margin:4px 0">'+[20,40,"full"].map(function(v){
      return '<button type="button" data-n="'+v+'" aria-pressed="'+(String(v)===String(PV_SIM.size))+'">'+(v==="full"?"Prova inteira ("+cc.total+")":v)+'</button>';}).join("")+'</div>'+
    '<label class="checkrow"><input type="checkbox" id="pvT"'+(PV_SIM.timed?" checked":"")+'><span>Com tempo (3 min por questão)</span></label>'+
    '<div class="pvtab">'+Object.keys(cc.materias).map(function(k){
      var q=pl.cota[k]||0, tem=!!pl.pools[k];
      return '<div class="pvrow'+(tem?"":" pvoff")+'"><span>'+pvMatNome(k)+' <small>(peso '+cc.materias[k]+')</small></span><b>'+(tem?q+' questões':'sem conteúdo no app')+'</b></div>';
    }).join("")+'</div>'+
    (pl.falta.length?'<p class="pvaviso">O app ainda não tem conteúdo de <b>'+pl.falta.map(pvMatNome).join(", ")+'</b>. O simulado cobre <b>'+Math.round(pesoCob/pesoTot*100)+'%</b> do peso da prova; o resto você treina fora.</p>':'')+
    (hist.length?'<span class="vlab" style="justify-self:start">Seus últimos simulados</span><div class="pvtab">'+hist.map(function(x){
      var d=new Date(x.ts);
      return '<div class="pvrow"><span>'+d.toLocaleDateString("pt-BR")+' · '+x.n+' questões · '+fmt(x.seg)+'</span><b>'+Math.round(x.ok/x.n*100)+'%</b></div>';}).join("")+'</div>':'')+
    '</div>';
  pvTela(h,'<button class="ghost" id="pvClose" style="flex:1">Voltar</button><button class="big" id="pvGo"'+(pl.ids.length?"":" disabled")+'>Começar · '+pl.ids.length+' questões</button>');
  ovInner.querySelectorAll("#pvC button").forEach(function(b){ b.onclick=function(){ PV_SIM.conc=b.dataset.c; pvSimScreen(); }; });
  ovInner.querySelectorAll("#pvN button").forEach(function(b){ b.onclick=function(){ PV_SIM.size=b.dataset.n==="full"?"full":parseInt(b.dataset.n,10); pvSimScreen(); }; });
  document.getElementById("pvT").onchange=function(){ PV_SIM.timed=this.checked; };
  document.getElementById("pvGo").onclick=function(){ pvSimRun(pl,PV_SIM.conc,PV_SIM.timed?pl.ids.length*180:0); };
}
function pvSimRun(pl,conc,limit){
  var ids=pl.ids, keys=pl.keys, i=0, log=[];
  L={lesson:{id:"sim",type:"sim",xp:0},finished:false,correct:0,total:ids.length};
  openOv(); setHearts(null);
  if(limit) startTimer(limit,function(){ acabou(); }); else startTimer(0);
  function acabou(){
    while(log.length<ids.length) log.push({id:ids[log.length],ok:false,why:"Você não chegou a responder este item dentro do tempo.",sol:""});
    result(true);
  }
  function draw(){
    setHearts(null); setProg(i/ids.length*100);
    var ctl=renderEx(ids[i],function(){});
    var k=ovInner.querySelector(".q-kicker"); if(k) k.innerHTML='Simulado · '+(i+1)+' de '+ids.length+' · '+pvMatNome(keys[i]);
    onSync=function(){ var b=document.getElementById("nx"); if(b) b.disabled=!ctl.can(); };
    setFoot("",'<button class="big" id="nx" disabled>'+(i===ids.length-1?"Finalizar simulado":"Próxima")+'</button>');
    document.getElementById("nx").onclick=function(){
      var r=ctl.check(true);
      recordAttempt(ids[i],r.ok);
      log.push({id:ids[i],ok:r.ok,why:r.why,sol:r.sol,more:r.more,src:r.src});
      i++;
      if(i>=ids.length) result(); else draw();
    };
    onSync(); scrollTop();
  }
  function result(porTempo){
    onSync=function(){}; setProg(100);
    var gasto=elapsed(); stopTimer(); L.finished=true; CUR_FID=null;
    var right=log.filter(function(a){return a.ok;}).length, pc=Math.round(right/log.length*100);
    var por={}; log.forEach(function(a,j){ var k=keys[j]; if(!por[k]) por[k]=[0,0]; por[k][1]++; if(a.ok) por[k][0]++; });
    pvE(); S.sim.push({ts:Date.now(),conc:conc,n:log.length,ok:right,seg:Math.round(gasto),por:por});
    if(S.sim.length>60) S.sim=S.sim.slice(-60);
    addXp(Math.max(5,Math.round(log.length/2))); touchStreak(); persist(); renderHud();
    var errs=log.filter(function(a){return !a.ok;});
    var h='<div class="cele"><div class="medal'+(pc>=70?"":" sad")+'">'+svg(pc>=70?"i-crown":"i-x")+'</div>'+
      '<h2>Simulado '+CONC[conc].curto+': '+pc+'%</h2>'+
      '<p>'+(porTempo?"O relógio fechou antes do fim; o que ficou sem resposta contou como erro. ":"")+
        'Os erros já entraram no seu caderno de erros e voltam na revisão espaçada.</p>'+
      '<div class="statgrid"><div class="statbox"><span class="sl">Acertos</span><span class="sv">'+right+'/'+log.length+'</span></div>'+
        '<div class="statbox"><span class="sl">Tempo</span><span class="sv">'+fmt(gasto)+'</span></div>'+
        '<div class="statbox"><span class="sl">Por questão</span><span class="sv">'+fmt(gasto/log.length)+'</span></div></div>'+
      '<span class="vlab" style="justify-self:start">Por matéria</span><div class="pvtab">'+
      Object.keys(por).map(function(k){ var p=por[k], x=Math.round(p[0]/p[1]*100);
        return '<div class="pvrow"><span>'+pvMatNome(k)+'</span><b>'+p[0]+'/'+p[1]+' · '+x+'%</b><span class="pvbar"><i style="width:'+x+'%"></i></span></div>'; }).join("")+'</div>';
    if(errs.length){
      h+='<span class="vlab" style="justify-self:start">O que você errou</span><div class="errlist">'+errs.map(function(a){
        return '<div class="e">'+(a.sol?'<b>'+a.sol+'.</b> ':'')+(a.why||"")+(a.more?'<div class="fb-more">'+a.more+'</div>':'')+
          ((a.src||temTeoria(a.id))?'<div class="fb-foot">'+(a.src?'<span class="fb-src">'+a.src+'</span>':'')+
            (temTeoria(a.id)?'<button type="button" class="fb-teo" data-teo="'+a.id+'">'+svg("i-book")+'<span>Ver a teoria</span></button>':'')+'</div>':'')+'</div>';
      }).join("")+'</div>';
    }
    h+='</div>';
    ovInner.innerHTML=h;
    ovInner.querySelectorAll("[data-teo]").forEach(function(b){ b.onclick=function(){ abrirTeoria(b.dataset.teo); }; });
    setFoot("",'<button class="ghost" id="pvQ" style="flex:1">Voltar</button><button class="big" id="pvA">Novo simulado</button>');
    document.getElementById("pvQ").onclick=function(){ closeOv(); };
    document.getElementById("pvA").onclick=function(){ pvSimScreen(); };
    scrollTop();
  }
  draw();
}

/* ---------------- 2. PLANO COM CONTAGEM REGRESSIVA ---------------- */
function pvScores(conc){
  var cc=CONC[conc], out=[];
  Object.keys(cc.materias).forEach(function(k){
    var ds=pvDiscs(conc,k), s=0, r=0, tot=0, fe=0;
    ds.forEach(function(d){ DISC[d].mods.forEach(function(m){
      if(!REG[m]) return; var a=pvAcc(m); s+=a.s; r+=a.r; tot+=licoesDoMod(m).length; fe+=feitasNoMod(m);
    });});
    var cob=tot?fe/tot:0, pc=s?r/s:null, fraq=(pc==null?0.6:1-pc);
    var score=cc.materias[k]*(0.35+0.65*Math.max(fraq,(1-cob)*0.85));
    out.push({k:k,peso:cc.materias[k],pc:pc,cob:cob,tem:tot>0,ds:ds,score:score});
  });
  return out.sort(function(a,b){return b.score-a.score;});
}
function pvAgenda(conc,nDias){
  pvE();
  var sc=pvScores(conc), per=(S.plano.hpd||3)*2, total=nDias*per;
  var soma=sc.reduce(function(a,x){return a+x.score;},0)||1, acc={}, seq=[];
  sc.forEach(function(x){ acc[x.k]=0; });
  for(var i=0;i<total;i++){
    var best=null;
    sc.forEach(function(x){ acc[x.k]+=x.score/soma; if(!best||acc[x.k]>acc[best.k]) best=x; });
    acc[best.k]-=1; seq.push(best.k);
  }
  var out=[];
  for(var d=0;d<nDias;d++){
    var cnt={}, ordem=[];
    seq.slice(d*per,(d+1)*per).forEach(function(k){ if(!cnt[k]){ cnt[k]=0; ordem.push(k); } cnt[k]++; });
    out.push({off:d,blocos:ordem.map(function(k){
      var x=sc.filter(function(y){return y.k===k;})[0];
      return {k:k,min:cnt[k]*30,x:x};
    })});
  }
  return out;
}
function pvFoco(x){
  if(!x.tem) return "conteúdo fora do app — estude pelo seu material e resolva provas anteriores";
  for(var a=0;a<x.ds.length;a++){
    var mods=DISC[x.ds[a]].mods;
    for(var b=0;b<mods.length;b++){
      var m=mods[b]; if(!REG[m]||modFeito(m)) continue;
      var ls=licoesDoMod(m), pm=S.mods&&S.mods[m], l=null;
      for(var j=0;j<ls.length;j++){ if(!pm||!pm.done||!pm.done[ls[j].l.id]){ l=ls[j].l; break; } }
      return "módulo "+REG[m].n+" · "+REG[m].nome+(l?" — "+l.title:"");
    }
  }
  return "tudo visto — questões, revisão espaçada e simulados";
}
function pvPlanScreen(){
  pvE();
  var pl=S.plano; if(PV_CONC.indexOf(pl.conc)<0) pl.conc=PV_CONC[0];
  var conc=pl.conc, cc=CONC[conc], data=pvData(conc), dias=pvDias(conc);
  var ag=pvAgenda(conc,7);
  var cont;
  if(dias==null) cont='<p class="pvaviso">Defina a data da prova para ver a contagem regressiva.</p>';
  else if(dias<0) cont='<p class="pvaviso">A data informada já passou. Atualize abaixo se a prova foi remarcada.</p>';
  else cont='<div class="pvbig"><b>'+dias+'</b><span>'+(dias===1?"dia":"dias")+' para a prova</span></div>'+
    (dias<=14?'<p class="pvaviso">Reta final: priorize simulados, caderno de erros e a folha de revisão final.</p>':'');
  var h='<div class="cele"><div class="medal">'+svg("i-clock")+'</div><h2>Plano de estudo</h2>'+
    '<div class="seg" id="plC" style="margin:4px 0">'+PV_CONC.map(function(k){
      return '<button type="button" data-c="'+k+'" aria-pressed="'+(k===conc)+'">'+CONC[k].curto+'</button>';}).join("")+'</div>'+cont+
    '<div class="setrow"><span>Data da prova</span><input type="date" id="plD" value="'+(data||"")+'"></div>'+
    '<div class="setrow"><span>Horas de estudo por dia</span><div class="seg" id="plH">'+[1,2,3,4,5].map(function(v){
      return '<button type="button" data-h="'+v+'" aria-pressed="'+(v===(pl.hpd||3))+'">'+v+'</button>';}).join("")+'</div></div>'+
    '<div class="setrow"><span>Começar a estudar às</span><div class="seg" id="plI">'+[6,12,18,19,20,21].map(function(v){
      return '<button type="button" data-i="'+v+'" aria-pressed="'+(v===(pl.ini||19))+'">'+v+'h</button>';}).join("")+'</div></div>'+
    '<span class="vlab" style="justify-self:start">Próximos 7 dias (peso na prova × o que você ainda erra ou não viu)</span>'+
    '<div class="pvdias">'+ag.map(function(dd){
      var iso=dayKey(dd.off), lab=(dd.off===0?"Hoje":dayShort(dd.off))+" "+iso.slice(8,10)+"/"+iso.slice(5,7);
      return '<div class="pvdia'+(dd.off===0?" hoje":"")+'"><b>'+lab+'</b>'+dd.blocos.map(function(b){
        return '<div class="pvbl"><span><b>'+pvMatNome(b.k)+'</b> · '+b.min+' min</span><small>'+pvFoco(b.x)+'</small></div>';}).join("")+'</div>';
    }).join("")+'</div>'+
    '<p style="font-size:.84rem">O plano se reajusta sozinho: matéria com pouca cobertura ou muito erro ganha mais tempo.</p></div>';
  pvTela(h,'<button class="ghost" id="pvClose" style="flex:1">Voltar</button><button class="big" id="plIcs">Exportar para a agenda (.ics)</button>');
  ovInner.querySelectorAll("#plC button").forEach(function(b){ b.onclick=function(){ pl.conc=b.dataset.c; persist(); pvPlanScreen(); }; });
  ovInner.querySelectorAll("#plH button").forEach(function(b){ b.onclick=function(){ pl.hpd=parseInt(b.dataset.h,10); persist(); pvPlanScreen(); }; });
  ovInner.querySelectorAll("#plI button").forEach(function(b){ b.onclick=function(){ pl.ini=parseInt(b.dataset.i,10); persist(); pvPlanScreen(); }; });
  document.getElementById("plD").onchange=function(){ pl.datas[conc]=this.value||null; persist(); pvPlanScreen(); };
  document.getElementById("plIcs").onclick=function(){ pvIcs(conc); };
}
function pvIcs(conc){
  pvE();
  var dias=pvDias(conc), n=(dias==null||dias<0)?30:Math.min(90,dias+1); if(n<1) n=1;
  var ag=pvAgenda(conc,n), ini=S.plano.ini||19;
  var stamp=new Date().toISOString().replace(/[-:]/g,"").slice(0,15)+"Z";
  var out=["BEGIN:VCALENDAR","VERSION:2.0","PRODID:-//Meus Estudos//PT","CALSCALE:GREGORIAN"];
  function p2(x){ return (x<10?"0":"")+x; }
  function esc(t){ return String(t).replace(/([,;\\])/g,"\\$1").replace(/\n/g,"\\n"); }
  var uid=0;
  ag.forEach(function(dd){
    var base=dayKey(dd.off).replace(/-/g,""), min=ini*60;
    dd.blocos.forEach(function(b){
      var a=min, z=min+b.min; min=z;
      out.push("BEGIN:VEVENT","UID:estudo-"+conc+"-"+base+"-"+(uid++)+"@app-de-estudos","DTSTAMP:"+stamp,
        "DTSTART:"+base+"T"+p2(Math.floor(a/60)%24)+p2(a%60)+"00","DTEND:"+base+"T"+p2(Math.floor(z/60)%24)+p2(z%60)+"00",
        "SUMMARY:"+esc("Estudo · "+pvMatNome(b.k)+" ("+CONC[conc].curto+")"),"DESCRIPTION:"+esc("Foco: "+pvFoco(b.x)),"END:VEVENT");
    });
  });
  var dp=pvData(conc);
  if(dp){
    var d0=dp.replace(/-/g,""), nx=new Date(dp+"T12:00:00"); nx.setDate(nx.getDate()+1);
    var d1=nx.getFullYear()+p2(nx.getMonth()+1)+p2(nx.getDate());
    out.push("BEGIN:VEVENT","UID:prova-"+conc+"@app-de-estudos","DTSTAMP:"+stamp,"DTSTART;VALUE=DATE:"+d0,"DTEND;VALUE=DATE:"+d1,
      "SUMMARY:"+esc("PROVA · "+CONC[conc].nome),"END:VEVENT");
  }
  out.push("END:VCALENDAR");
  pvDownload("plano-estudo-"+conc+".ics","text/calendar",out.join("\r\n"));
}

/* ---------------- 3. CADERNO DE ERROS E DÚVIDAS ---------------- */
function pvTextoItem(f){
  var p=qsplit(f);
  if(/^c\d+$/.test(p.e)){ var m=REG[p.m], c=m&&m.CARDS&&m.CARDS[+p.e.slice(1)]; return c?pvStrip(c[0]):null; }
  if(!exGet(f)) return null;
  return exLabel(f);
}
function pvCadernoItens(){
  pvE();
  var map={};
  allMods().forEach(function(k){
    var pm=S.mods&&S.mods[k]; if(!pm||!pm.misses) return;
    Object.keys(pm.misses).forEach(function(e){ map[qjoin(k,e)]={fid:qjoin(k,e),erro:pm.misses[e],duv:false}; });
  });
  Object.keys(S.duv).forEach(function(f){
    if(!S.duv[f]) return;
    if(map[f]) map[f].duv=true; else map[f]={fid:f,erro:0,duv:true};
  });
  var out=[];
  Object.keys(map).forEach(function(f){
    var t=pvTextoItem(f); if(t==null) return;
    var m=qsplit(f).m, d=DISC[discOf(m)];
    map[f].txt=t; map[f].mod=m; map[f].disc=d?d.id:"";
    out.push(map[f]);
  });
  return out.sort(function(a,b){ return (b.erro+(b.duv?1:0))-(a.erro+(a.duv?1:0)); });
}
var PV_CAD={f:"todos",d:"",q:""};
function pvCadernoScreen(){
  var itens=pvCadernoItens();
  var ds=[]; itens.forEach(function(x){ if(x.disc&&ds.indexOf(x.disc)<0) ds.push(x.disc); });
  ds=DISC_ORDER.filter(function(d){return ds.indexOf(d)>=0;});
  var h='<div class="cele"><div class="medal">'+svg("i-list")+'</div><h2>Caderno de erros e dúvidas</h2>'+
    '<p>Tudo o que você errou ou marcou com <b>?</b> durante os exercícios, de todas as matérias. Treine só isso, filtre e anote.</p>'+
    '<div class="seg" id="cdF" style="margin:4px 0">'+[["todos","Tudo"],["erros","Erros"],["duvidas","Dúvidas"]].map(function(x){
      return '<button type="button" data-f="'+x[0]+'" aria-pressed="'+(PV_CAD.f===x[0])+'">'+x[1]+'</button>';}).join("")+'</div>'+
    '<select id="cdD" class="pvsel"><option value="">Todas as matérias</option>'+ds.map(function(d){
      return '<option value="'+d+'"'+(PV_CAD.d===d?" selected":"")+'>'+DISC[d].nomeLongo+'</option>';}).join("")+'</select>'+
    '<input type="search" id="cdQ" class="pvsel" placeholder="Buscar no texto" value="'+pvEsc(PV_CAD.q)+'">'+
    '<div id="cdL" class="pvlist"></div></div>';
  pvTela(h,'<button class="ghost" id="pvClose" style="flex:1">Voltar</button><button class="big" id="cdGo">Treinar</button>');
  function visiveis(){
    return itens.filter(function(x){
      if(PV_CAD.f==="erros"&&!x.erro) return false;
      if(PV_CAD.f==="duvidas"&&!S.duv[x.fid]) return false;
      if(PV_CAD.d&&x.disc!==PV_CAD.d) return false;
      if(PV_CAD.q&&x.txt.toLowerCase().indexOf(PV_CAD.q.toLowerCase())<0&&String(S.nota[x.fid]||"").toLowerCase().indexOf(PV_CAD.q.toLowerCase())<0) return false;
      return true;
    });
  }
  function pinta(){
    var v=visiveis(), box=document.getElementById("cdL");
    box.innerHTML=v.length?v.slice(0,80).map(function(x){
      var d=DISC[x.disc];
      return '<div class="pvitem" data-f="'+x.fid+'"><div class="pvit-t">'+pvEsc(x.txt)+'</div>'+
        '<div class="pvit-m">'+(d?d.curto||d.nome:"")+' · '+modNome(x.mod)+(x.erro?' · erros: <b>'+x.erro+'</b>':'')+(S.duv[x.fid]?' · <b>dúvida</b>':'')+'</div>'+
        '<div class="pvit-a"><button type="button" class="ghost" data-a="tr">Treinar</button>'+
        '<button type="button" class="ghost" data-a="du">'+(S.duv[x.fid]?"Tirar dúvida":"Marcar dúvida")+'</button></div>'+
        '<textarea class="pvnota" placeholder="Sua anotação sobre este item">'+pvEsc(S.nota[x.fid]||"")+'</textarea></div>';
    }).join("")+(v.length>80?'<p class="pvaviso">Mostrando 80 de '+v.length+'. Use o filtro para refinar.</p>':''):
      '<p class="pvaviso">Nada por aqui'+(itens.length?" com este filtro":" ainda — erros e dúvidas aparecem sozinhos conforme você estuda")+'.</p>';
    var go=document.getElementById("cdGo"); go.disabled=!v.length; go.textContent=v.length?("Treinar "+Math.min(v.length,40)+" itens"):"Nada para treinar";
    box.querySelectorAll(".pvitem").forEach(function(it){
      var f=it.dataset.f;
      it.querySelector('[data-a="tr"]').onclick=function(){ startSprint(null,[f],"Caderno de erros"); };
      it.querySelector('[data-a="du"]').onclick=function(){ if(S.duv[f]) delete S.duv[f]; else S.duv[f]=1; persist(); pinta(); };
      it.querySelector("textarea").onchange=function(){ if(this.value.trim()) S.nota[f]=this.value; else delete S.nota[f]; persist(); };
    });
  }
  ovInner.querySelectorAll("#cdF button").forEach(function(b){ b.onclick=function(){ PV_CAD.f=b.dataset.f; ovInner.querySelectorAll("#cdF button").forEach(function(x){x.setAttribute("aria-pressed",String(x===b));}); pinta(); }; });
  document.getElementById("cdD").onchange=function(){ PV_CAD.d=this.value; pinta(); };
  document.getElementById("cdQ").oninput=function(){ PV_CAD.q=this.value; pinta(); };
  document.getElementById("cdGo").onclick=function(){
    var ids=shuffle(visiveis().map(function(x){return x.fid;})).slice(0,40);
    if(ids.length) startSprint(null,ids,"Caderno de erros");
  };
  pinta();
}
/* botão "?" dentro de qualquer exercício ou flashcard */
(function(){
  var head=document.querySelector(".ov-head"), btn=document.createElement("button");
  if(!head) return;
  btn.type="button"; btn.id="ovDuv"; btn.className="ov-duv"; btn.hidden=true; btn.textContent="?"; btn.setAttribute("aria-label","Marcar como dúvida");
  var ref=document.getElementById("ovTime"); head.insertBefore(btn,ref);
  btn.onclick=function(){
    if(!CUR_FID) return; pvE();
    if(S.duv[CUR_FID]) delete S.duv[CUR_FID]; else S.duv[CUR_FID]=1;
    persist(); upd();
  };
  function upd(){
    var show=!!CUR_FID && ov.classList.contains("on") && !ovInner.querySelector(".cele");
    btn.hidden=!show; btn.classList.toggle("on",!!(CUR_FID&&S.duv&&S.duv[CUR_FID]));
    btn.title=btn.classList.contains("on")?"Tirar a marca de dúvida":"Marcar como dúvida";
    /* voz nos flashcards */
    var fc=ovInner.querySelector(".fcard");
    if(fc && window.speechSynthesis && !fc.querySelector(".fc-say")){
      var s=document.createElement("button"); s.type="button"; s.className="fc-say"; s.textContent="Ouvir";
      s.onclick=function(){
        try{
          speechSynthesis.cancel();
          var q=fc.querySelector(".fc-q"), a=fc.querySelector(".fc-a");
          var u=new SpeechSynthesisUtterance(pvStrip(q?q.innerHTML:"")+(a?". "+pvStrip(a.innerHTML):"")); u.lang="pt-BR"; u.rate=1;
          speechSynthesis.speak(u);
        }catch(e){}
      };
      fc.appendChild(s);
    }
  }
  new MutationObserver(upd).observe(ovInner,{childList:true});
  new MutationObserver(upd).observe(ov,{attributes:true,attributeFilter:["class"]});
})();

/* ---------------- 4. MAPA DE DOMÍNIO ---------------- */
function pvMapaScreen(){
  var h='<div class="cele"><div class="medal">'+svg("i-check")+'</div><h2>Mapa de domínio</h2>'+
    '<p>Cada quadrado é um módulo. A cor mostra o seu aproveitamento nos exercícios; quadrado claro é parcialmente estudado. Toque para ver e estudar.</p>'+
    '<div class="hmleg"><span class="hmc vz">sem dados</span><span class="hmc d1">&lt; 50%</span><span class="hmc d2">50–69%</span><span class="hmc d3">70–84%</span><span class="hmc d4">≥ 85%</span></div>';
  DISC_ORDER.forEach(function(d){
    var mods=DISC[d].mods.filter(function(m){return REG[m];}); if(!mods.length) return;
    var s=0,r=0; mods.forEach(function(m){ var a=pvAcc(m); s+=a.s; r+=a.r; });
    h+='<div class="hmrow"><div class="hmt"><b>'+DISC[d].nomeLongo+'</b><span>'+(s?Math.round(r/s*100)+'% · '+s+' respostas':'sem respostas')+'</span></div><div class="hmcells">'+
      mods.map(function(m){
        var a=pvAcc(m), tot=licoesDoMod(m).length, fe=feitasNoMod(m), cls="vz";
        if(a.s){ cls=a.pc>=85?"d4":a.pc>=70?"d3":a.pc>=50?"d2":"d1"; }
        else if(fe) cls="d2";
        return '<button type="button" class="hmc '+cls+((tot&&fe<tot)?" parc":"")+'" data-d="'+d+'" data-m="'+m+'">'+REG[m].n+'</button>';
      }).join("")+'</div></div>';
  });
  h+='<div class="pvdet" id="hmDet">Toque em um módulo.</div></div>';
  pvTela(h);
  ovInner.querySelectorAll(".hmc[data-m]").forEach(function(b){
    b.onclick=function(){
      var m=b.dataset.m, d=b.dataset.d, a=pvAcc(m), tot=licoesDoMod(m).length, fe=feitasNoMod(m);
      var det=document.getElementById("hmDet");
      det.innerHTML='<b>'+DISC[d].nomeLongo+' · módulo '+REG[m].n+'</b><br>'+REG[m].nome+'<br>Lições: '+fe+'/'+tot+' · '+(a.s?('acerto '+a.pc+'% ('+a.r+'/'+a.s+')'):'sem respostas')+
        '<br><button type="button" class="ghost" id="hmGo">Estudar este módulo</button>';
      document.getElementById("hmGo").onclick=function(){
        loadDisc(d); loadModule(m); saveLocal(); L.finished=true; closeOv();
        window.scrollTo({top:0,behavior:"smooth"});
      };
    };
  });
}

/* ---------------- 5. TREINO DE DISCURSIVA ---------------- */
var PV_DSC={d:"",m:"",u:0,min:30};
function pvDscScreen(){
  var ds=DISC_ORDER.filter(function(d){ return DISC[d].mods.some(function(m){return REG[m]&&REG[m].UNITS&&REG[m].UNITS.length;}); });
  if(!PV_DSC.d||ds.indexOf(PV_DSC.d)<0) PV_DSC.d=ds[0];
  var mods=DISC[PV_DSC.d].mods.filter(function(m){return REG[m]&&REG[m].UNITS;});
  if(!PV_DSC.m||mods.indexOf(PV_DSC.m)<0){ PV_DSC.m=mods[0]; PV_DSC.u=0; }
  var M2=REG[PV_DSC.m], us=M2.UNITS; if(PV_DSC.u>=us.length) PV_DSC.u=0;
  var hist=(S.dsc||[]).slice(-3).reverse();
  var h='<div class="cele"><div class="medal">'+svg("i-pen")+'</div><h2>Treino de discursiva</h2>'+
    '<p>Escolha um tema, escreva com o relógio rodando e depois confira, ponto a ponto, o que você cobriu. Sem nota automática: a conferência é sua, com o gabarito dos conceitos que a banca costuma exigir.</p>'+
    '<select id="dsD" class="pvsel">'+ds.map(function(d){return '<option value="'+d+'"'+(d===PV_DSC.d?" selected":"")+'>'+DISC[d].nomeLongo+'</option>';}).join("")+'</select>'+
    '<select id="dsM" class="pvsel">'+mods.map(function(m){return '<option value="'+m+'"'+(m===PV_DSC.m?" selected":"")+'>Módulo '+REG[m].n+' · '+pvEsc(REG[m].nome)+'</option>';}).join("")+'</select>'+
    '<select id="dsU" class="pvsel">'+us.map(function(u,i){return '<option value="'+i+'"'+(i===PV_DSC.u?" selected":"")+'>Unidade '+u.n+' · '+pvEsc(u.title)+'</option>';}).join("")+'</select>'+
    '<div class="seg" id="dsT" style="margin:4px 0">'+[20,30,45].map(function(v){return '<button type="button" data-t="'+v+'" aria-pressed="'+(v===PV_DSC.min)+'">'+v+' min</button>';}).join("")+'</div>'+
    '<button type="button" class="ghost" id="dsR">Sortear um tema</button>'+
    (hist.length?'<span class="vlab" style="justify-self:start">Últimos treinos</span><div class="pvtab">'+hist.map(function(x){
      return '<div class="pvrow"><span>'+new Date(x.ts).toLocaleDateString("pt-BR")+' · '+pvEsc(x.t)+'</span><b>'+x.cob+'/'+x.tot+'</b></div>';}).join("")+'</div>':'')+
    '</div>';
  pvTela(h,'<button class="ghost" id="pvClose" style="flex:1">Voltar</button><button class="big" id="dsGo">Começar a escrever</button>');
  document.getElementById("dsD").onchange=function(){ PV_DSC.d=this.value; PV_DSC.m=""; pvDscScreen(); };
  document.getElementById("dsM").onchange=function(){ PV_DSC.m=this.value; PV_DSC.u=0; pvDscScreen(); };
  document.getElementById("dsU").onchange=function(){ PV_DSC.u=parseInt(this.value,10); };
  ovInner.querySelectorAll("#dsT button").forEach(function(b){ b.onclick=function(){ PV_DSC.min=parseInt(b.dataset.t,10); pvDscScreen(); }; });
  document.getElementById("dsR").onclick=function(){
    var d=ds[Math.floor(Math.random()*ds.length)], ms=DISC[d].mods.filter(function(m){return REG[m]&&REG[m].UNITS;});
    var m=ms[Math.floor(Math.random()*ms.length)];
    PV_DSC.d=d; PV_DSC.m=m; PV_DSC.u=Math.floor(Math.random()*REG[m].UNITS.length); pvDscScreen();
  };
  document.getElementById("dsGo").onclick=function(){ pvDscEscrever(); };
}
function pvDscEscrever(){
  var m=PV_DSC.m, M2=REG[m], u=M2.UNITS[PV_DSC.u], texto="";
  var extra=(M2.DISCURSIVA&&typeof M2.DISCURSIVA==="string")?'<div class="pvdisc">'+M2.DISCURSIVA+'</div>':'';
  var h='<div class="cele"><span class="q-kicker">Discursiva · '+DISC[PV_DSC.d].nome+' · módulo '+M2.n+'</span>'+
    '<div class="pvprompt"><span class="vlab">Tema</span><p>Disserte sobre <b>'+pvEsc(u.title)+'</b> ('+pvEsc(M2.nome)+'), em até 30 linhas: defina os conceitos, cite a base normativa que você conhecer, aponte exceções e pegadinhas e feche com um exemplo prático.</p></div>'+
    '<textarea id="dsTxt" class="pvtxt" placeholder="Escreva aqui..."></textarea><div class="pvcont"><span id="dsCnt">0 palavras</span></div></div>';
  pvTela(h,'<button class="big" id="dsFim">Terminei · conferir</button>');
  L.finished=false;
  var tx=document.getElementById("dsTxt");
  tx.oninput=function(){ texto=tx.value; var n=(texto.trim().match(/\S+/g)||[]).length; document.getElementById("dsCnt").textContent=n+" palavra"+(n===1?"":"s"); };
  var fim=function(){ texto=tx.value; stopTimer(); pvDscConferir(m,u,texto,extra); };
  startTimer(PV_DSC.min*60,fim);
  document.getElementById("dsFim").onclick=fim;
}
function pvDscConferir(m,u,texto,extra){
  var M2=REG[m], itens=[];
  (u.lessons||[]).forEach(function(l){ if(l.type==="flash"){ (l.data||[]).forEach(function(i){ var c=M2.CARDS[i]; if(c) itens.push({q:pvStrip(c[0]),a:c[1]}); }); } });
  var kit=M2.KIT&&M2.KIT["U"+u.n];
  if(kit&&kit.bases) kit.bases.forEach(function(b){ itens.push({q:"Citou a base: "+pvStrip(b),a:""}); });
  itens=itens.slice(0,16);
  var pal=(texto.trim().match(/\S+/g)||[]).length;
  L.finished=true;
  var h='<div class="cele"><div class="medal">'+svg("i-pen")+'</div><h2>Confira o seu texto</h2>'+
    '<p>Você escreveu <b>'+pal+'</b> palavras. Marque o que o seu texto realmente cobriu — seja rigoroso, a banca é.</p>'+extra+
    '<div class="pvlist">'+itens.map(function(x,i){
      return '<label class="checkrow"><input type="checkbox" data-i="'+i+'"><span>'+pvEsc(x.q)+(x.a?'<br><small>'+x.a+'</small>':'')+'</span></label>';}).join("")+'</div>'+
    (texto.trim()?'<details class="pvdet"><summary>Ver o que escrevi</summary><p style="white-space:pre-wrap;text-align:left">'+pvEsc(texto)+'</p></details>':'')+'</div>';
  pvTela(h,'<button class="big" id="dsSave">Salvar o treino</button>');
  L.finished=true;
  document.getElementById("dsSave").onclick=function(){
    var cob=ovInner.querySelectorAll('input[type=checkbox]:checked').length; pvE();
    S.dsc.push({ts:Date.now(),mod:m,u:u.n,t:u.title,cob:cob,tot:itens.length,pal:pal,min:PV_DSC.min});
    if(S.dsc.length>60) S.dsc=S.dsc.slice(-60);
    addXp(15); touchStreak(); persist(); renderHud();
    pvTela('<div class="cele"><div class="medal">'+svg("i-check")+'</div><h2>'+cob+' de '+itens.length+' pontos cobertos</h2><p>'+
      (cob/Math.max(1,itens.length)>=0.7?"Boa cobertura. Agora treine a clareza e o limite de linhas.":"Releia os pontos que ficaram de fora na teoria da unidade e escreva de novo outro dia.")+'</p></div>',
      '<button class="ghost" id="pvClose" style="flex:1">Voltar</button><button class="big" id="dsAgain">Outro tema</button>');
    document.getElementById("dsAgain").onclick=function(){ pvDscScreen(); };
  };
}

/* ---------------- 6. FOLHA DE REVISÃO FINAL ---------------- */
var PV_FOLHA={d:"",modo:"essencial"};
function pvFolhaHtml(d,modo){
  var h='<h2>'+DISC[d].nomeLongo+' — folha de revisão</h2>', tem=false;
  DISC[d].mods.forEach(function(m){
    var mod=REG[m]; if(!mod||!mod.UNITS) return;
    var bloco='';
    mod.UNITS.forEach(function(u){
      var itens='', cards='';
      (u.lessons||[]).forEach(function(l){
        if(l.type==="teoria"&&mod.TEORIA&&mod.TEORIA[l.data]){
          mod.TEORIA[l.data].forEach(function(t){
            var doc=new DOMParser().parseFromString('<div>'+t.b+'</div>','text/html');
            doc.querySelectorAll(".box.trap, .box.tip").forEach(function(bx){
              var lab=bx.querySelector(".bl"), txt=pvStrip(bx.innerHTML.replace(/<span class="bl">.*?<\/span>/,""));
              itens+='<li class="'+(bx.classList.contains("trap")?"ft":"fd")+'"><b>'+(bx.classList.contains("trap")?"Pegadinha":"Dica")+(lab?" · "+pvEsc(lab.textContent):"")+':</b> '+pvEsc(txt)+'</li>';
            });
          });
        }
        if(modo==="completa"&&l.type==="flash") (l.data||[]).forEach(function(i){ var c=mod.CARDS[i]; if(c) cards+='<li><b>'+pvStrip(c[0])+'</b> '+pvStrip(c[1])+'</li>'; });
      });
      if(itens||cards) bloco+='<h4>Unidade '+u.n+' · '+pvEsc(u.title)+'</h4><ul>'+itens+cards+'</ul>';
    });
    if(bloco){ tem=true; h+='<h3>Módulo '+mod.n+' · '+pvEsc(mod.nome)+'</h3>'+bloco; }
  });
  return tem?h:h+'<p>Esta matéria ainda não tem pegadinhas ou dicas marcadas.</p>';
}
function pvFolhaScreen(){
  var ds=DISC_ORDER.filter(function(d){return DISC[d].mods.some(function(m){return REG[m];});});
  if(!PV_FOLHA.d||ds.indexOf(PV_FOLHA.d)<0) PV_FOLHA.d=ds[0];
  var h='<div class="cele"><div class="medal">'+svg("i-scroll")+'</div><h2>Folha de revisão final</h2>'+
    '<p>Para a véspera: só as <b>pegadinhas e dicas</b> de cada matéria (ou, na versão completa, também todos os flashcards). Dá para imprimir ou salvar em PDF.</p>'+
    '<select id="flD" class="pvsel">'+ds.map(function(d){return '<option value="'+d+'"'+(d===PV_FOLHA.d?" selected":"")+'>'+DISC[d].nomeLongo+'</option>';}).join("")+'</select>'+
    '<div class="seg" id="flM" style="margin:4px 0">'+[["essencial","Essencial"],["completa","Completa"]].map(function(x){
      return '<button type="button" data-m="'+x[0]+'" aria-pressed="'+(PV_FOLHA.modo===x[0])+'">'+x[1]+'</button>';}).join("")+'</div>'+
    '<div class="pvfolha" id="flB"></div></div>';
  pvTela(h,'<button class="ghost" id="pvClose" style="flex:1">Voltar</button><button class="big" id="flP">Imprimir / salvar PDF</button>');
  function pinta(){ document.getElementById("flB").innerHTML=pvFolhaHtml(PV_FOLHA.d,PV_FOLHA.modo); }
  document.getElementById("flD").onchange=function(){ PV_FOLHA.d=this.value; pinta(); };
  ovInner.querySelectorAll("#flM button").forEach(function(b){ b.onclick=function(){ PV_FOLHA.modo=b.dataset.m; ovInner.querySelectorAll("#flM button").forEach(function(x){x.setAttribute("aria-pressed",String(x===b));}); pinta(); }; });
  document.getElementById("flP").onclick=function(){
    var pa=document.getElementById("printArea");
    if(!pa){ pa=document.createElement("div"); pa.id="printArea"; document.body.appendChild(pa); }
    pa.innerHTML=pvFolhaHtml(PV_FOLHA.d,PV_FOLHA.modo);
    window.print();
  };
  pinta();
}

/* ---------------- 7. AVISO DE YOUTUBE NA TRILHA ---------------- */
function pvUnitStat(mod,u){
  var pm=S.mods&&S.mods[mod], s=0, r=0, done=true;
  (u.lessons||[]).forEach(function(l){
    if(!(pm&&pm.done&&pm.done[l.id])) done=false;
    if(l.type==="drill") (l.data||[]).forEach(function(e){ var st=pm&&pm.stats&&pm.stats[e]; if(st){ s+=st.s; r+=st.r; } });
  });
  return {done:done,s:s,r:r,pc:s?Math.round(r/s*100):null};
}
function pvYtPendentes(){
  pvE();
  var out=[], agora=Date.now();
  allMods().forEach(function(m){
    var mod=REG[m]; if(!mod||!mod.UNITS) return;
    mod.UNITS.forEach(function(u){
      var key=m+":"+u.n, y=S.yt[key];
      if(y){ if(y.st==="ok"||y.st==="nao") return; if(y.st==="depois"&&agora<y.ts+3*86400000) return; }
      var t=pvUnitStat(m,u);
      if(t.done&&t.s>=8&&t.pc>=85) out.push({key:key,mod:m,u:u,t:t});
    });
  });
  return out;
}
function ytCard(){
  var p=pvYtPendentes(); if(!p.length) return document.createElement("div");
  var x=p[0], d=DISC[discOf(x.mod)];
  var c=el("div","sprintcard ytcard",
    '<div class="sp-h"><span class="sp-ic" style="background:#C4302B">'+svg("i-mic")+'</span>'+
    '<div><div class="sp-t">Você domina este tema: grave um vídeo</div>'+
    '<div class="sp-s">Você fechou <b>'+pvEsc(x.u.title)+'</b> ('+(d?d.nome:"")+', módulo '+REG[x.mod].n+') com <b>'+x.t.pc+'%</b> de acerto em '+x.t.s+' respostas. '+
    'Grave agora um vídeo para o <b>YouTube</b> com esse tema, enquanto está fresco — ensinar fixa mais ainda. Depois, siga na trilha.'+
    (p.length>1?' <small>(Mais '+(p.length-1)+' tema'+(p.length>2?'s':'')+' dominado'+(p.length>2?'s':'')+' esperando.)</small>':'')+'</div></div></div>'+
    '<div class="supact"><button type="button" class="ghost" id="ytOk">Já gravei</button><button type="button" class="ghost" id="ytLater">Depois</button><button type="button" class="ghost" id="ytNo">Não gravar este</button></div>');
  function set(st){ S.yt[x.key]={st:st,ts:Date.now()}; persist(); renderTrail(); }
  c.querySelector("#ytOk").onclick=function(){ set("ok"); };
  c.querySelector("#ytLater").onclick=function(){ set("depois"); };
  c.querySelector("#ytNo").onclick=function(){ set("nao"); };
  return c;
}

/* ---------------- cartão "Preparação para a prova" ---------------- */
function prepCard(){
  pvE();
  var linhas=PV_CONC.map(function(k){
    var d=pvDias(k);
    return '<span class="pvcd"><b>'+CONC[k].curto+'</b> '+(d==null?"defina a data":(d<0?"já passou":(d===0?"é hoje":d+" dia"+(d===1?"":"s"))))+'</span>';
  }).join("");
  var btn=function(id,ic,t,s){ return '<button type="button" class="prepbtn" id="'+id+'"><span class="pi">'+svg(ic)+'</span><span><b>'+t+'</b><small>'+s+'</small></span></button>'; };
  var c=el("div","sprintcard prepcard",
    '<div class="sp-h"><span class="sp-ic" style="background:var(--u2)">'+svg("i-target")+'</span><div><div class="sp-t">Preparação para a prova</div>'+
    '<div class="sp-s">Simulado, plano, erros e revisão final, tudo no mesmo lugar.</div></div></div>'+
    '<div class="pvcds">'+linhas+'</div>'+
    '<div class="prepgrid">'+
      btn("pgSim","i-target","Simulados","por concurso")+
      btn("pgPlano","i-clock","Plano","contagem regressiva")+
      btn("pgCad","i-list","Erros e dúvidas","caderno")+
      btn("pgMapa","i-check","Mapa de domínio","onde você está")+
      btn("pgDisc","i-pen","Discursiva","treino com relógio")+
      btn("pgFolha","i-scroll","Revisão final","folha para imprimir")+
    '</div>');
  c.querySelector("#pgSim").onclick=pvSimScreen;
  c.querySelector("#pgPlano").onclick=pvPlanScreen;
  c.querySelector("#pgCad").onclick=pvCadernoScreen;
  c.querySelector("#pgMapa").onclick=pvMapaScreen;
  c.querySelector("#pgDisc").onclick=pvDscScreen;
  c.querySelector("#pgFolha").onclick=pvFolhaScreen;
  return c;
}

/* ---------------- tema escuro ---------------- */
function pvApplyTheme(){
  var t=S.theme||"auto", dark=t==="dark"||(t==="auto"&&window.matchMedia&&matchMedia("(prefers-color-scheme: dark)").matches);
  document.documentElement.setAttribute("data-theme",dark?"dark":"light");
}
function pvPaintTheme(){
  [].slice.call(document.querySelectorAll("#themeSeg button")).forEach(function(b){
    b.setAttribute("aria-pressed",String((S.theme||"auto")===b.dataset.t));
    b.onclick=function(){ S.theme=b.dataset.t; pvApplyTheme(); pvPaintTheme(); persist(); };
  });
}
try{ if(window.matchMedia) matchMedia("(prefers-color-scheme: dark)").addEventListener("change",pvApplyTheme); }catch(e){}


/* =====================================================================
   CONSULTORIA: TREINO DE VÍDEO
   Cada unidade termina com uma lição "Gravar vídeo": roteiro montado com o
   conteúdo da unidade, gravação pela câmera, revisão com checklist e arquivo
   pronto para subir ao YouTube.
   ===================================================================== */
function pvInjetaVideo(){
  if(!window.DISC||!DISC.consult) return;
  DISC.consult.mods.forEach(function(m){
    var mod=REG[m]; if(!mod||!mod.UNITS) return;
    mod.UNITS.forEach(function(u){
      if(u.lessons.some(function(l){return l.type==="video"||l.type==="prova";})) return;
      u.lessons.push({id:"VD"+u.n,type:"video",title:"Gravar vídeo · "+u.title,xp:30,data:null});
    });
  });
}
var VID={stream:null,rec:null,chunks:[],url:null,blob:null,ext:"webm"};
function pvVidStop(){
  try{ if(VID.rec&&VID.rec.state!=="inactive") VID.rec.stop(); }catch(e){}
  if(VID.stream){ VID.stream.getTracks().forEach(function(t){t.stop();}); VID.stream=null; }
}
function pvVidLimpa(){ pvVidStop(); if(VID.url){ try{URL.revokeObjectURL(VID.url);}catch(e){} VID.url=null; } VID.blob=null; VID.chunks=[]; }
function pvVideoPlano(mod,u){
  var M2=REG[mod], pontos=[], trap=[], tip=[];
  (u.lessons||[]).forEach(function(l){
    if(l.type==="flash") (l.data||[]).forEach(function(i){ var c=M2.CARDS[i]; if(c) pontos.push({q:pvStrip(c[0]),a:pvStrip(c[1])}); });
    if(l.type==="teoria"&&M2.TEORIA&&M2.TEORIA[l.data]) M2.TEORIA[l.data].forEach(function(t){
      var doc=new DOMParser().parseFromString('<div>'+t.b+'</div>','text/html');
      doc.querySelectorAll(".box.trap, .box.tip").forEach(function(bx){
        var txt=pvStrip(bx.innerHTML.replace(/<span class="bl">.*?<\/span>/,""));
        (bx.classList.contains("trap")?trap:tip).push(txt);
      });
    });
  });
  return {tema:u.title,modulo:M2.nome,pontos:pontos.slice(0,6),trap:trap.slice(0,2),tip:tip.slice(0,1)};
}
function pvVideoBlocos(pl){
  var p=pl.pontos, ganc=pl.trap[0]?("Comece pela pegadinha: “"+pl.trap[0]+"”"):(p[0]?("Comece com a pergunta: “"+p[0].q+"”"):"Comece com uma pergunta que o seu público já se fez.");
  return [
    {t:"Gancho",s:20,d:ganc+" — e prometa o que a pessoa vai saber no fim do vídeo."},
    {t:"Por que importa",s:40,d:"Diga o que é “"+pl.tema+"” e onde isso aparece na prática (prova ou consultoria). Uma ideia central, sem ler."},
    {t:"Pontos-chave",s:120,d:p.length?p.map(function(x,i){return (i+1)+". "+x.q+" → "+x.a;}).join("\n"):"Explique os 3 pontos mais importantes da unidade."},
    {t:"Pegadinha",s:40,d:pl.trap.length?pl.trap.join("\n"):"Aponte o erro mais comum que as pessoas cometem neste tema."},
    {t:"Exemplo prático",s:40,d:"Invente um caso curto (com números, se couber) que mostre a regra funcionando."+(pl.tip[0]?"\nDica do material: "+pl.tip[0]:"")},
    {t:"Fechamento",s:20,d:"Resuma em UMA frase, diga a base legal ou a fonte e faça a chamada: comentar, curtir e se inscrever."}
  ];
}
var PV_VCHK=["Abri com um gancho (pergunta ou pegadinha)","Expliquei todos os pontos-chave sem ler","Citei a base: artigo, lei ou pergunta de origem","Dei um exemplo prático","Alertei sobre a pegadinha","Falei devagar e sem muletas (né, tipo, então)","Fiquei perto do tempo-alvo","Fechei com resumo e chamada para ação"];
function runVideo(l){
  var u=l.unit, mod=S.cur, key=mod+":"+u.n; pvE(); if(!S.vid) S.vid={};
  var reg=S.vid[key]||(S.vid[key]={roteiro:"",hist:[]});
  var pl=pvVideoPlano(mod,u), blocos=pvVideoBlocos(pl);
  var cfg={alvo:5,semCola:false}; pvVidLimpa();
  function tela1(){
    pvVidLimpa(); setProg(10); stopTimer();
    ovInner.innerHTML='<span class="q-kicker">Treino de vídeo · '+pvEsc(pl.modulo)+'</span>'+
      '<h3 style="font-size:1.25rem">Explique “'+pvEsc(pl.tema)+'” em vídeo</h3>'+
      '<p style="color:var(--ink-3);font-size:.92rem">Ensinar é a prova de que você sabe. Siga o roteiro abaixo (montado com o conteúdo desta unidade), grave e depois confira o resultado. O arquivo fica pronto para subir ao YouTube.</p>'+
      '<div class="seg" id="vdT" style="margin:4px 0">'+[3,5,8].map(function(v){return '<button type="button" data-t="'+v+'" aria-pressed="'+(v===cfg.alvo)+'">'+v+' min</button>';}).join("")+'</div>'+
      '<div class="pvlist">'+blocos.map(function(b){return '<div class="pvitem"><div class="pvit-t">'+b.t+' <small>· ~'+b.s+' s</small></div><div class="pvit-m" style="white-space:pre-wrap;font-size:.84rem;color:var(--ink-2)">'+pvEsc(b.d)+'</div></div>';}).join("")+'</div>'+
      '<span class="vlab">Seu roteiro em tópicos (opcional)</span><textarea id="vdR" class="pvnota" placeholder="Escreva seus tópicos com suas palavras">'+pvEsc(reg.roteiro||"")+'</textarea>'+
      '<label class="checkrow"><input type="checkbox" id="vdC"'+(cfg.semCola?" checked":"")+'><span>Modo sem cola: esconder o roteiro durante a gravação</span></label>';
    setFoot("",'<button class="ghost" id="vdSkip" style="flex:1">Pular por agora</button><button class="big" id="vdGo">Gravar</button>');
    ovInner.querySelectorAll("#vdT button").forEach(function(b){ b.onclick=function(){ cfg.alvo=parseInt(b.dataset.t,10); ovInner.querySelectorAll("#vdT button").forEach(function(x){x.setAttribute("aria-pressed",String(x===b));}); }; });
    document.getElementById("vdR").onchange=function(){ reg.roteiro=this.value; persist(); };
    document.getElementById("vdC").onchange=function(){ cfg.semCola=this.checked; };
    document.getElementById("vdSkip").onclick=function(){ if(!P().done[l.id]) P().done[l.id]={ts:Date.now(),acc:null,skip:true}; persist(); L.finished=true; closeOv(); };
    document.getElementById("vdGo").onclick=function(){ reg.roteiro=document.getElementById("vdR").value; persist(); tela2(); };
    scrollTop();
  }
  function tela2(){
    var i=0, gravando=false, t0=0, tick=null, seg=0, temCam=false;
    ovInner.innerHTML='<span class="q-kicker">Gravação · '+pvEsc(pl.tema)+'</span>'+
      '<video id="vdV" class="pvvideo" autoplay muted playsinline></video>'+
      '<div class="pvcont" id="vdMsg">Pedindo acesso à câmera e ao microfone…</div>'+
      '<div class="pvprompt"><span class="vlab" id="vdBt"></span><p id="vdBd" style="white-space:pre-wrap"></p></div>'+
      '<div class="pvbig"><b id="vdTm">00:00</b><span>alvo '+cfg.alvo+' min</span></div>';
    setFoot("",'<button class="ghost" id="vdPrev" style="flex:1">Bloco anterior</button><button class="ghost" id="vdNext" style="flex:1">Próximo bloco</button><button class="big" id="vdRec">Iniciar</button>');
    function bloco(){ var b=blocos[i]; document.getElementById("vdBt").textContent=(i+1)+" de "+blocos.length+" · "+b.t+" (~"+b.s+" s)"; document.getElementById("vdBd").textContent=cfg.semCola?"(sem cola) Fale sobre: "+b.t:b.d; }
    bloco(); setProg(30);
    document.getElementById("vdPrev").onclick=function(){ if(i>0){i--;bloco();} };
    document.getElementById("vdNext").onclick=function(){ if(i<blocos.length-1){i++;bloco();} };
    var msg=document.getElementById("vdMsg"), vv=document.getElementById("vdV");
    function pronto(s,cam){ VID.stream=s; temCam=cam; if(cam){ vv.srcObject=s; } else vv.hidden=true; msg.textContent=cam?"Câmera pronta. Toque em Iniciar quando quiser.":"Só o microfone foi liberado: o treino grava o áudio."; }
    if(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia&&window.MediaRecorder){
      navigator.mediaDevices.getUserMedia({video:{facingMode:"user"},audio:true}).then(function(s){ pronto(s,true); })["catch"](function(){
        navigator.mediaDevices.getUserMedia({audio:true}).then(function(s){ pronto(s,false); })["catch"](function(){ vv.hidden=true; msg.textContent="Sem acesso à câmera/microfone: o treino segue só com o cronômetro. Libere a permissão no navegador para gravar."; });
      });
    } else { vv.hidden=true; msg.textContent="Este navegador não grava vídeo aqui: o treino segue só com o cronômetro."; }
    document.getElementById("vdRec").onclick=function(){
      var btn=this;
      if(!gravando){
        gravando=true; t0=Date.now(); btn.textContent="Parar"; btn.classList.add("red");
        if(VID.stream&&window.MediaRecorder){
          var tipos=["video/webm;codecs=vp8,opus","video/webm","video/mp4","audio/webm","audio/mp4"], mt="";
          for(var k=0;k<tipos.length;k++){ try{ if(MediaRecorder.isTypeSupported(tipos[k])){ mt=tipos[k]; break; } }catch(e){} }
          VID.chunks=[]; try{ VID.rec=mt?new MediaRecorder(VID.stream,{mimeType:mt}):new MediaRecorder(VID.stream); }catch(e){ VID.rec=null; }
          if(VID.rec){ VID.ext=/mp4/.test(VID.rec.mimeType||mt)?"mp4":"webm"; VID.rec.ondataavailable=function(e){ if(e.data&&e.data.size) VID.chunks.push(e.data); }; VID.rec.start(1000); }
        }
        tick=setInterval(function(){ seg=Math.round((Date.now()-t0)/1000); document.getElementById("vdTm").textContent=fmt(seg); setProg(30+Math.min(60,seg/(cfg.alvo*60)*60)); },500);
      } else {
        clearInterval(tick); gravando=false; seg=Math.round((Date.now()-t0)/1000);
        var fim=function(){ if(VID.chunks.length){ VID.blob=new Blob(VID.chunks,{type:(VID.rec&&VID.rec.mimeType)||"video/webm"}); VID.url=URL.createObjectURL(VID.blob); } var cam=temCam; if(VID.stream){ VID.stream.getTracks().forEach(function(t){t.stop();}); VID.stream=null; } tela3(seg,cam); };
        if(VID.rec&&VID.rec.state!=="inactive"){ VID.rec.onstop=fim; try{VID.rec.stop();}catch(e){fim();} } else fim();
      }
    };
    scrollTop();
  }
  function tela3(seg,cam){
    setProg(92); var alvo=cfg.alvo*60, dentro=seg>=alvo*0.6&&seg<=alvo*1.3;
    ovInner.innerHTML='<span class="q-kicker">Revisão do vídeo</span>'+
      (VID.url?(cam?'<video id="vdP" class="pvvideo" controls playsinline src="'+VID.url+'"></video>':'<audio controls src="'+VID.url+'" style="width:100%"></audio>'):'<p class="pvaviso">Esta gravação não foi salva (sem câmera/microfone). Confira com o checklist abaixo.</p>')+
      '<div class="statgrid"><div class="statbox"><span class="sl">Duração</span><span class="sv">'+fmt(seg)+'</span></div><div class="statbox"><span class="sl">Alvo</span><span class="sv">'+cfg.alvo+':00</span></div></div>'+
      (VID.url?'<button type="button" class="ghost" id="vdDl">Baixar o arquivo para o YouTube</button>':'')+
      '<span class="vlab">Assista e marque com honestidade</span><div class="pvlist">'+PV_VCHK.map(function(t,k){ var pre=(k===6&&dentro); return '<label class="checkrow"><input type="checkbox" data-k="'+k+'"'+(pre?" checked":"")+'><span>'+t+'</span></label>'; }).join("")+'</div>'+
      '<span class="vlab">O que melhorar na próxima</span><textarea id="vdN" class="pvnota" placeholder="Ex.: falar mais devagar, citar o artigo"></textarea>'+
      '<label class="checkrow"><input type="checkbox" id="vdY"'+((S.yt[key]&&S.yt[key].st==="ok")?" checked":"")+'><span>Já publiquei este vídeo no YouTube</span></label>';
    setFoot("",'<button class="ghost" id="vdAg" style="flex:1">Gravar de novo</button><button class="big" id="vdOk">Concluir</button>');
    var dl=document.getElementById("vdDl");
    if(dl) dl.onclick=function(){ var a=document.createElement("a"); a.href=VID.url; a.download="video-"+pvStrip(pl.tema).normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]+/g,"-").slice(0,50)+"."+VID.ext; document.body.appendChild(a); a.click(); a.remove(); };
    document.getElementById("vdAg").onclick=function(){ pvVidLimpa(); tela2(); };
    document.getElementById("vdOk").onclick=function(){
      var sc=ovInner.querySelectorAll('.pvlist input:checked').length, n=PV_VCHK.length;
      reg.hist.push({ts:Date.now(),sec:seg,alvo:cfg.alvo,score:sc}); if(reg.hist.length>20) reg.hist=reg.hist.slice(-20);
      reg.nota=document.getElementById("vdN").value;
      if(document.getElementById("vdY").checked) S.yt[key]={st:"ok",ts:Date.now()};
      pvVidLimpa(); persist(); finish(l,{correct:sc,total:n});
    };
    scrollTop();
  }
  tela1();
}

/* ---------- boot ---------- */
pvInjetaVideo();
var _novo = !localStorage.getItem("afo01_trail");
loadLocal();
if(S.lastDay){var dd=daysBetween(S.lastDay,today());if(dd>1)S.streak=0;}
/* quem chega pela primeira vez começa pela matéria de maior prioridade;
   quem já tem progresso volta exatamente onde parou */
if(_novo && DISC_ORDER.length){ S.disc=DISC_ORDER[0]; S.cur=null; }
/* se a matéria salva sumiu, ou o módulo salvo não pertence a ela, corrige */
if(!DISC[S.disc]) S.disc=DISC_ORDER[0];
loadDisc(S.disc);
if(!S.cur || !REG[S.cur] || ORDER.indexOf(S.cur)<0) S.cur=ORDER[0]||"m01";
loadModule(S.cur);
/* se o módulo salvo já foi concluído, a trilha assume e leva ao próximo */
if(modFeito(S.cur)){
  var _pb=cursoProxima();
  if(_pb && _pb.mod!==S.cur){ loadModule(_pb.mod); saveLocal(); }
}
pvApplyTheme();
paintSettings();
renderTrail();
buildPanel();

if(window.claude&&typeof window.claude.use==="function"){
  window.claude.use("db").then(function(db){
    if(!db)return;
    dbRef=db.doc("progresso/afo01-trilha");
    return dbRef.get().then(function(sn){
      if(!sn.exists)return;
      var d=sn.data()||{};
      if((d.xp||0)>(S.xp||0)){
        S.xp=d.xp||0;S.streak=d.streak||0;S.bestStreak=d.bestStreak||0;
        S.lastDay=d.lastDay||null;S.hist=d.hist||{};
        if(d.goal)S.goal=d.goal;
        if(d.mods)S.mods=d.mods;
        else if(d.done)S.mods={m01:{done:d.done,misses:d.misses||{},stats:d.stats||{},
                ensaios:d.ensaios||{},provaBest:d.provaBest||0,provaTries:d.provaTries||0}};
        if(d.srs)S.srs=d.srs;
        if(d.dailyN)S.dailyN=d.dailyN;
        if(d.daily)S.daily=d.daily;
        if(d.tempo)S.tempo=d.tempo;
        if(d.dstat)S.dstat=d.dstat;
        if(d.metaMin)S.metaMin=d.metaMin;
        if(d.metaQ)S.metaQ=d.metaQ;
        if(d.sim)S.sim=d.sim; if(d.yt)S.yt=d.yt; if(d.duv)S.duv=d.duv; if(d.nota)S.nota=d.nota; if(d.dsc)S.dsc=d.dsc; if(d.plano)S.plano=d.plano; if(d.vid)S.vid=d.vid; if(d.theme)S.theme=d.theme;
        saveLocal();loadDisc(d.disc||S.disc||DISC_ORDER[0]);loadModule(d.cur||S.cur||ORDER[0]||"m01");paintSettings();renderTrail();buildPanel();
      }
    });
  })["catch"](function(){});
  window.claude.use("sample").then(function(s){
    if(!s)return;
    sampleFn=s;
    var b=document.getElementById("fask");if(b)b.hidden=false;
  })["catch"](function(){});
}

/* ---- ponte de diagnóstico (usada pelas baterias de teste; inócua em produção) ---- */
try{ window.__dbg={ S:function(){return S;}, REG:function(){return REG;},
  srs:srs, srsFresh:srsFresh, srsDue:srsDue, srsStats:srsStats, dailyPlan:dailyPlan,
  leechIds:leechIds, cardOf:cardOf, startDaily:startDaily, startTeimosos:startTeimosos,
  sprintPool:sprintPool, sprintPlan:sprintPlan, startSprint:startSprint, discOf:discOf,
  prioridadeDoMod:prioridadeDoMod, teoriaDoItem:teoriaDoItem, abrirTeoria:abrirTeoria,
  temTeoria:temTeoria, cursoOrdem:cursoOrdem, cursoProxima:cursoProxima,
  cursoTotais:cursoTotais, irParaCurso:irParaCurso, modFeito:modFeito,
  licoesDoMod:licoesDoMod, pvSimPlan:pvSimPlan, pvSimRun:pvSimRun, pvAgenda:pvAgenda, pvYtPendentes:pvYtPendentes,
  pvCadernoItens:pvCadernoItens, pvFolhaHtml:pvFolhaHtml, pvScores:pvScores, startLesson:startLesson, loadDisc:loadDisc, loadModule:loadModule }; }catch(e){}

})();
