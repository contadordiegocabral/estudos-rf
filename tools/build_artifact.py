#!/usr/bin/env python3
"""Gera a versão do app para publicar como Artifact no Claude.
Uso: python3 tools/build_artifact.py SAIDA [mapas_mentais.html]
- junta os módulos em poucos bundles (limite de arquivos do Artifact)
- aplica a paleta azul, a tela inicial (Meus Estudos / Mapas Mentais / Reforma Tributária)
- se o HTML dos mapas for informado, separa as imagens em mm/*.json e embute os ícones
"""
import re, os, sys, json, glob, shutil, base64, subprocess
REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.abspath(sys.argv[1]); MAPAS = sys.argv[2] if len(sys.argv) > 2 else None
os.makedirs(OUT, exist_ok=True); os.chdir(REPO)

# ---------- bundles ----------
t = open('index.html', encoding='utf8').read()
tags = list(re.finditer(r'<script src="([^"]+)"></script>', t))
cur = []; size = 0; bi = 0
def flush():
    global cur, size, bi
    if not cur: return ''
    bi += 1; name = 'b%02d.js' % bi
    open(OUT + '/' + name, 'w', encoding='utf8').write('\n;\n'.join(open(f, encoding='utf8').read() for f in cur))
    cur = []; size = 0
    return '<script src="%s"></script>' % name
new = ''; pos = 0
for m in tags:
    gap = t[pos:m.start()]; pos = m.end(); f = m.group(1)
    if not os.path.exists(f): new += flush() + gap + m.group(0); continue
    s = os.path.getsize(f)
    if size + s > 3_000_000: new += flush()
    new += gap; cur.append(f); size += s
new += flush(); new += t[pos:]
h = new
i = h.index('</head><body>') + len('</head><body>')
h = h[i:].replace('</body></html>', '').lstrip()

def rep(a, b):
    global h
    assert a in h, a[:60]
    h = h.replace(a, b, 1)

# ---------- paleta azul ----------
root = '''  --paper:#F4F8FF; --surface:#FFFFFF; --surface-2:#EFF6FF;
  --ink:#0F1F3D; --ink-2:#4A5B7A; --ink-3:#7587A6;
  --line:#D8E4F8; --line-strong:#BFD3F2;
  --brand:#1D4ED8; --brand-d:#12408A; --brand-ink:#1D4ED8;
  --gold:#C08A2A; --gold-d:#8E6519;
  --certo:#059669; --certo-soft:#E3F6EF; --certo-line:#8FD4BB;
  --errado:#E11D48; --errado-soft:#FDE7EC; --errado-line:#F2A3B4;
  --on-accent:#FFFFFF;
  --u1:#1D4ED8; --u1-d:#12408A;
  --u2:#0891B2; --u2-d:#0E6F87;
  --u3:#4F46E5; --u3-d:#3730A3;
  --u4:#E11D48; --u4-d:#9F1239;
  --locked:#D8E4F8; --locked-d:#BFD3F2;
  --shadow-2:0 6px 26px -12px rgba(11,42,91,.45);'''
a = h.index('  --paper:#FFFFFF;'); k = '--shadow-2:0 6px 26px -12px rgba(31,40,36,.45);'
b = h.index(k) + len(k); h = h[:a] + root + h[b:]
dark = ':root[data-theme=dark]{color-scheme:dark;--paper:#081426;--surface:#0F2142;--surface-2:#14305F;--ink:#E6EEFC;--ink-2:#A9BBDD;--ink-3:#7F93B8;--line:#1D3560;--line-strong:#2B4A82;--brand:#60A5FA;--brand-d:#2563EB;--brand-ink:#93C5FD;--gold:#D9A441;--gold-d:#A87A22;--certo:#34D399;--certo-soft:#0E3A2E;--certo-line:#1F7A5E;--errado:#FB7185;--errado-soft:#3F1522;--errado-line:#8A3347;--u1:#60A5FA;--u1-d:#2563EB;--u2:#22D3EE;--u2-d:#0E90AD;--u3:#818CF8;--u3-d:#4F46E5;--u4:#FB7185;--u4-d:#E11D48;--locked:#14305F;--locked-d:#0F2142;--shadow-2:0 6px 26px -12px rgba(0,0,0,.7)}'
m = re.search(r'^:root\[data-theme=dark\]\{color-scheme:dark;.*$', h, re.M); assert m
h = h[:m.start()] + dark + h[m.end():]
h = h.replace('<meta name="theme-color" content="#2D8A4E">', '<meta name="theme-color" content="#12408A">')
h = h.replace('.hmc.d4{background:#2D8A4E}', '.hmc.d4{background:#059669}')

# ---------- tela inicial ----------
css = '''
body.home-on > *:not(#homeScreen):not(script):not(style):not(link):not(meta):not(title){display:none!important}
#homeScreen{min-height:100vh;display:none;flex-direction:column;background:var(--paper)}
body.home-on #homeScreen{display:flex}
.home-top{background:linear-gradient(90deg,#0B2A5B,#1D4ED8);color:#fff;padding:26px max(16px,env(safe-area-inset-left,0px)) 28px max(16px,env(safe-area-inset-right,0px))}
.home-top-in{max-width:44rem;margin:0 auto;display:flex;align-items:center;gap:14px}
.home-logo{width:46px;height:46px;border-radius:12px;background:#fff;color:#1D4ED8;display:grid;place-items:center;flex:none}
.home-logo svg{width:26px;height:26px}
.home-top h1{font-size:1.35rem;font-weight:900;letter-spacing:-.01em}
.home-top p{font-size:.82rem;color:#BFDBFE;font-weight:600}
.home-main{flex:1;max-width:44rem;width:100%;margin:0 auto;padding:28px max(16px,env(safe-area-inset-left,0px)) 40px max(16px,env(safe-area-inset-right,0px));display:flex;flex-direction:column;gap:16px}
.home-main h2{font-size:1.1rem;color:var(--ink-2);font-weight:800}
.home-btn{display:flex;align-items:center;gap:16px;text-align:left;width:100%;padding:22px 20px;border-radius:18px;border:1px solid var(--line);background:var(--surface);color:var(--ink);text-decoration:none;font:inherit;cursor:pointer;box-shadow:0 4px 18px rgba(29,78,216,.08);transition:transform .12s,box-shadow .12s,border-color .12s}
.home-btn:hover{transform:translateY(-2px);border-color:var(--brand);box-shadow:0 10px 26px rgba(29,78,216,.16)}
.home-btn .hi{width:56px;height:56px;border-radius:14px;display:grid;place-items:center;flex:none;background:var(--surface-2);color:var(--brand)}
.home-btn .hi svg{width:30px;height:30px}
.home-btn.pri{background:linear-gradient(135deg,#12408A,#2563EB);border-color:transparent;color:#fff}
.home-btn.pri .hi{background:rgba(255,255,255,.16);color:#fff}
.home-btn.pri .hs{color:#DBEAFE}
.home-btn .ht{font-size:1.25rem;font-weight:900;line-height:1.2}
.home-btn .hs{font-size:.88rem;color:var(--ink-2);font-weight:600;margin-top:2px}
.home-btn .hc{margin-left:auto;font-size:1.4rem;opacity:.7}
.hud-home{border:0;background:none;color:var(--brand-ink);cursor:pointer;width:34px;height:34px;border-radius:10px;display:grid;place-items:center;flex:none;padding:0}
.hud-home:hover{background:var(--surface-2)}
.hud-home svg{width:22px;height:22px}
'''
rep('</style>', css + '</style>')
ic = lambda p: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">%s</svg>' % p
home = '''<div id="homeScreen">
  <div class="home-top"><div class="home-top-in">
    <div class="home-logo" aria-hidden="true">%s</div>
    <div><h1>Estudos para concursos</h1><p>ISS Curitiba · ATRFB · Reforma Tributária</p></div>
  </div></div>
  <div class="home-main">
    <h2>Por onde você quer começar?</h2>
    <button type="button" class="home-btn pri" id="homeEstudos">
      <span class="hi" aria-hidden="true">%s</span>
      <span><span class="ht">Meus Estudos</span><br><span class="hs">Trilha, lições, questões, revisões e metas do dia</span></span>
      <span class="hc" aria-hidden="true">›</span>
    </button>
    <a class="home-btn" href="mapas.html" id="homeMapas">
      <span class="hi" aria-hidden="true">%s</span>
      <span><span class="ht">Mapas Mentais</span><br><span class="hs">Mapas visuais e slides de revisão por matéria</span></span>
      <span class="hc" aria-hidden="true">›</span>
    </a>
    <button type="button" class="home-btn" id="homeReforma">
      <span class="hi" aria-hidden="true">%s</span>
      <span><span class="ht">Reforma Tributária</span><br><span class="hs">Flashcards, questões e técnicas de memorização da LC 214 e correlatos</span></span>
      <span class="hc" aria-hidden="true">›</span>
    </button>
  </div>
</div>
<script>
(function(){
  var b=document.body; b.classList.add("home-on");
  function entrar(){ b.classList.remove("home-on"); window.scrollTo(0,0); }
  function voltar(){ b.classList.add("home-on"); window.scrollTo(0,0); }
  document.getElementById("homeEstudos").onclick=entrar;
  document.getElementById("homeReforma").onclick=function(){ entrar(); if(window.__rfHub) window.__rfHub(); };
  window.__voltarInicio=voltar;
  if(location.hash==="#estudos") entrar();
})();
</script>
''' % (
 ic('<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5z"/><path d="M4 21.5V5.5"/><path d="M9 8h6M9 12h4"/>'),
 ic('<path d="M12 3l9 5-9 5-9-5 9-5z"/><path d="M7 11v5c0 1.2 2.2 3 5 3s5-1.8 5-3v-5"/>'),
 ic('<circle cx="12" cy="12" r="3"/><circle cx="4.5" cy="5.5" r="1.8"/><circle cx="19.5" cy="5.5" r="1.8"/><circle cx="4.5" cy="18.5" r="1.8"/><circle cx="19.5" cy="18.5" r="1.8"/><path d="M10 10.2L6 6.8M14 10.2l4-3.4M10 13.8l-4 3.4M14 13.8l4 3.4"/>'),
 ic('<path d="M6 3h9l4 4v14H6z"/><path d="M15 3v4h4"/><path d="M9 12h7M9 16h5"/>'))
k = h.index('<div class="hud"'); h = h[:k] + home + h[k:]
rep('<div class="brandmark">', '<button type="button" class="hud-home" aria-label="Início" title="Início" onclick="window.__voltarInicio&&window.__voltarInicio()"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/></svg></button>\n    <div class="brandmark">')
open(OUT + '/index.html', 'w', encoding='utf8').write(h)

# cores de gráficos no app.js
for f in glob.glob(OUT + '/b0*.js'):
    s = open(f, encoding='utf8').read()
    o = 'var cs=["#2D8A4E","#C08A2A","#2A6F97","#63508C","#B26B2B"]'
    if o in s: open(f, 'w', encoding='utf8').write(s.replace(o, 'var cs=["#1D4ED8","#C08A2A","#0891B2","#4F46E5","#E11D48"]'))
mf = open('manifest.webmanifest').read().replace('#2D8A4E', '#12408A').replace('"background_color": "#FFFFFF"', '"background_color": "#F4F8FF"')
open(OUT + '/manifest.webmanifest', 'w').write(mf)
for f in ['icon-180.png', 'icon-192.png', 'icon-512.png']: shutil.copy(f, OUT)

# ---------- mapas mentais ----------
if MAPAS:
    tmp = os.path.join(OUT, '_fa'); os.makedirs(tmp, exist_ok=True)
    subprocess.check_call(['npm', 'pack', '@fortawesome/fontawesome-free@6.4.0', '--silent'], cwd=tmp)
    subprocess.check_call('tar xzf *.tgz', shell=True, cwd=tmp)
    pk = tmp + '/package'
    b64 = lambda p: base64.b64encode(open(p, 'rb').read()).decode()
    css = open(pk + '/css/all.min.css').read()
    for fam in ['solid-900', 'regular-400']:
        css = re.sub(r'url\(\.\./webfonts/fa-%s\.woff2\) format\("woff2"\),\s*url\(\.\./webfonts/fa-%s\.ttf\) format\("truetype"\)' % (fam, fam),
                     'url(data:font/woff2;base64,%s) format("woff2")' % b64(pk + '/webfonts/fa-%s.woff2' % fam), css)
    css = re.sub(r'@font-face\{font-family:"Font Awesome 6 Brands".*?\}', '', css)
    css = re.sub(r'@font-face\{font-family:"(Font Awesome 5[^"]*|FontAwesome)"[^}]*\}', '', css)
    assert '../webfonts' not in css
    t = open(MAPAS, encoding='utf8').read()
    i = t.index('<script id="mm-data-script">'); j = t.index('</script>', i)
    s = t[i + len('<script id="mm-data-script">'):j]
    d = json.loads(s[len('const MMDATA='):].rstrip(';\n '))
    cnt = {k: len(v) for k, v in d.items()}
    os.makedirs(OUT + '/mm', exist_ok=True)
    for k, v in d.items(): open(OUT + '/mm/%s.json' % k, 'w').write(json.dumps(v, separators=(',', ':')))
    t = t[:i] + '<script id="mm-data-script">const MMDATA={};const MMN=%s;' % json.dumps(cnt) + t[j:]
    link = '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">'
    assert link in t; t = t.replace(link, '<style>' + css + '</style>')
    def r2(a, b):
        global t
        assert a in t, a[:60]; t = t.replace(a, b, 1)
    r2("function mmShow(){ $('btn-mm').style.display=(MMDATA[CURMAT]?'':'none'); }", "function mmShow(){ $('btn-mm').style.display=(MMN[CURMAT]?'':'none'); }")
    r2("function openMM(){\n  mmKey=CURMAT; if(!MMDATA[mmKey]) return;\n  $('mm-title')", """function mmFetch(k){
  if(MMDATA[k]) return Promise.resolve(MMDATA[k]);
  return fetch('mm/'+k+'.json').then(r=>{if(!r.ok)throw new Error(r.status);return r.json();}).then(a=>(MMDATA[k]=a));
}
function openMM(){
  const k=CURMAT; if(!MMN[k]) return;
  const b=$('btn-mm'); b.disabled=true;
  mmFetch(k).then(()=>{ b.disabled=false; if(k===CURMAT) openMM2(); }).catch(()=>{ b.disabled=false; b.title='Falha ao carregar. Tente de novo.'; });
}
function openMM2(){
  mmKey=CURMAT; if(!MMDATA[mmKey]) return;
  $('mm-title')""")
    r2('<button class="icon-btn" id="btn-menu"', '<a class="icon-btn" href="index.html" title="Início" aria-label="Início"><i class="fa-solid fa-house"></i></a>\n    <button class="icon-btn" id="btn-menu"')
    open(OUT + '/mapas.html', 'w', encoding='utf8').write(t)
    shutil.rmtree(tmp)
print('ok', OUT)
