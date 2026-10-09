/* Service worker — deixa o app abrir sem internet.
   Estratégia: cache-first para os arquivos do app (eles só mudam quando eu
   republico, e aí o CACHE muda de nome e tudo é rebaixado de uma vez).      */

var CACHE = "estudo-fiscal-v80";

var ARQUIVOS = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icon-192.png",
  "./icon-512.png",
  "./icon-180.png",
  "./dados.js",
  "./disciplinas.js",
  "./teclinks.js",
  "./app.js",
  "./cpub01.js","./cpub02.js","./cpub03.js","./cpub04.js","./cpub05.js",
  "./cpub06.js","./cpub07.js","./cpub08.js","./cpub09.js","./cpub10.js",
  "./cpub11.js","./cpub12.js","./cpub13.js",
  "./m02.js","./m03.js","./m04.js","./m05.js","./m06.js",
  "./m07.js","./m08.js","./m09.js","./m10.js","./m11.js",
  "./lrf01.js","./lrf02.js","./lrf03.js","./lrf04.js","./lrf05.js","./lrf06.js",
  "./contab01.js","./contab02.js","./contab03.js",
  "./contab04.js","./contab05.js","./contab06.js",
  "./contab07.js","./contab08.js","./contab09.js",
  "./contab10.js","./contab11.js","./contab12.js","./contab13.js",
  "./cavan01.js","./cavan02.js","./cavan03.js","./cavan04.js","./cavan05.js",
  "./cavan06.js","./cavan07.js","./cavan08.js","./cavan09.js","./cavan10.js",
  "./dadm01.js","./dadm02.js","./dadm03.js","./dadm04.js","./dadm05.js",
  "./dadm06.js","./dadm07.js","./dadm08.js","./dadm09.js","./dadm10.js",
  "./dadm11.js","./dadm12.js","./dadm13.js",
  "./dtrib01.js","./dtrib02.js","./dtrib03.js","./dtrib04.js","./dtrib05.js",
  "./dtrib06.js","./dtrib07.js","./dtrib08.js","./dtrib09.js","./dtrib10.js",
  "./dtrib11.js","./dtrib12.js","./dtrib13.js","./dtrib14.js",
  "./legadu01.js","./legadu02.js","./legadu03.js","./legadu04.js","./legadu05.js","./legadu06.js","./legadu07.js","./legadu08.js","./legadu09.js","./audgov01.js","./audgov02.js","./audgov03.js","./audgov04.js","./audgov05.js","./audgov06.js","./audpriv01.js","./audpriv02.js","./audpriv03.js","./audpriv04.js","./audpriv05.js","./audpriv06.js","./audpriv07.js","./audpriv08.js","./audfis01.js","./audfis02.js","./audfis03.js","./cext01.js","./cext02.js","./cext03.js","./cext04.js","./cext05.js","./cext06.js","./cext07.js","./cext08.js","./adpub01.js","./adpub02.js","./adpub03.js","./adpub04.js","./adpub05.js","./adpub06.js","./adpub07.js","./adpub08.js","./adpub09.js","./adpub10.js","./adger01.js","./adger02.js","./adger03.js","./adger04.js","./adger05.js","./adger06.js","./adger07.js","./adger08.js","./adger09.js","./adger10.js","./adger11.js","./adger12.js","./dconst01.js","./dconst02.js","./dconst03.js","./dconst04.js","./dconst05.js","./dconst06.js","./dconst07.js","./dconst08.js","./dconst09.js","./dconst10.js","./dconst11.js","./dconst12.js","./dconst13.js","./dconst14.js","./dconst15.js","./dconst16.js","./licit01.js","./licit02.js","./licit03.js","./licit04.js","./licit05.js","./licit06.js","./dciv01.js","./dciv02.js","./dciv03.js","./dciv04.js","./dciv05.js","./dciv06.js","./dciv07.js","./dciv08.js","./dciv09.js","./dciv10.js","./dciv11.js","./dciv12.js","./dciv13.js","./demp01.js","./demp02.js","./demp03.js","./demp04.js","./demp05.js","./demp06.js","./demp07.js","./demp08.js","./demp09.js","./demp10.js","./demp11.js","./demp12.js","./demp13.js","./dpen01.js","./dpen02.js","./dpen03.js","./dpen04.js","./dpen05.js","./dpen06.js","./dpen07.js","./dpen08.js","./dpen09.js","./dpen10.js","./dpen11.js","./port01.js","./port02.js","./port03.js","./port04.js","./port05.js","./port06.js","./port07.js","./port08.js","./rlm01.js","./rlm02.js","./rlm03.js","./rlm04.js","./rlm05.js","./rlm06.js","./rlm07.js","./rlm08.js","./ti01.js","./ti02.js","./ti03.js","./ti04.js","./ti05.js","./ti06.js","./ti07.js","./ti08.js","./ti09.js","./ti10.js","./ti11.js","./simples01.js","./simples02.js","./cons01.js","./cons02.js","./cons03.js","./cons04.js","./cons05.js","./cons06.js","./cons07.js","./cons08.js","./cons09.js","./cons10.js","./cons11.js","./cons12.js","./cons13.js","./cons14.js","./cons15.js","./cons16.js","./cons17.js","./cons18.js","./cons19.js","./cons20.js","./cons21.js","./cons22.js","./cons23.js","./cons24.js","./cons25.js","./cons26.js","./cons27.js","./cons28.js","./cons29.js","./cons30.js","./cons31.js","./cons32.js","./cons33.js","./cons34.js","./cons35.js","./cons36.js","./cons37.js","./cons38.js","./cons39.js","./cons40.js","./cons41.js","./cons42.js","./cons43.js","./cons44.js","./cons45.js","./cons46.js","./cons47.js","./cons48.js","./cons49.js","./cons50.js","./cons51.js","./cons52.js","./cons53.js","./cons54.js","./cons55.js","./cons56.js","./cons57.js","./cons58.js","./cons59.js","./cons60.js","./cons61.js","./cons62.js","./fdados01.js"
];

/* Instalar: baixa tudo. Um arquivo que falhe não derruba a instalação —
   melhor um app quase completo do que nenhum.                               */
self.addEventListener("install", function(e){
  e.waitUntil(
    caches.open(CACHE).then(function(c){
      return Promise.all(ARQUIVOS.map(function(u){
        return c.add(new Request(u, {cache:"reload"}))["catch"](function(){ return null; });
      }));
    }).then(function(){ return self.skipWaiting(); })
  );
});

/* Ativar: joga fora as versões antigas do cache. */
self.addEventListener("activate", function(e){
  e.waitUntil(
    caches.keys().then(function(ks){
      return Promise.all(ks.map(function(k){
        return k !== CACHE ? caches["delete"](k) : null;
      }));
    }).then(function(){ return self.clients.claim(); })
  );
});

self.addEventListener("message", function(e){
  if(e.data === "skipWaiting") self.skipWaiting();
});

/* Buscar: só cuida do que é nosso (mesma origem, método GET).
   Acha no cache -> devolve na hora. Não acha -> rede, e guarda.
   Sem rede e sem cache, se for navegação, devolve a página inicial.         */
self.addEventListener("fetch", function(e){
  var req = e.request;
  if(req.method !== "GET") return;

  var url;
  try { url = new URL(req.url); } catch(_){ return; }
  if(url.origin !== self.location.origin) return;

  e.respondWith(
    caches.match(req, {ignoreSearch:true}).then(function(hit){
      if(hit) return hit;
      return fetch(req).then(function(res){
        if(res && res.ok && res.type === "basic"){
          var copia = res.clone();
          caches.open(CACHE).then(function(c){ c.put(req, copia); });
        }
        return res;
      })["catch"](function(){
        if(req.mode === "navigate") return caches.match("./index.html");
        return new Response("", {status:504, statusText:"offline"});
      });
    })
  );
});
