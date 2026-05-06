/* =====================================================
   A MÃO ESQUERDA DO COSMOS — app.js
   GitHub Pages Player — lê áudios da pasta /audio/
   ===================================================== */

// ── CAPÍTULOS (175 + cap 0) ──
const CHAPTERS = [
  { num: 0,   title: "Prólogo",                         part: 0 },
  { num: 1,   title: "O Gelo nas Veias",                part: 1 },
  { num: 2,   title: "Sussurros nas Sombras",           part: 1 },
  { num: 3,   title: "Ecos nas Catacumbas",             part: 1 },
  { num: 4,   title: "O Jogo do Mestre Instrutor",      part: 1 },
  { num: 5,   title: "Presságios na Névoa",             part: 1 },
  { num: 6,   title: "A Noite das Sombras Longas",      part: 1 },
  { num: 7,   title: "Fagulhas na Forja",               part: 1 },
  { num: 8,   title: "Dois Estranhos na Escuridão",     part: 1 },
  { num: 9,   title: "Correntezas e Confiança",         part: 1 },
  { num: 10,  title: "O Limiar da Liberdade",           part: 1 },
  { num: 11,  title: "Além dos Muros",                  part: 1 },
  { num: 12,  title: "O Mundo Proibido",                part: 1 },
  { num: 13,  title: "Primeiras Estrelas",              part: 1 },
  { num: 14,  title: "A Voz do Cosmos",                 part: 1 },
  { num: 15,  title: "Herdeiros Despertos",             part: 1 },
  { num: 16,  title: "O Mapa das Sombras",              part: 1 },
  { num: 17,  title: "Raízes da Luz",                   part: 1 },
  { num: 18,  title: "A Profecia Esquecida",            part: 1 },
  { num: 19,  title: "Laços de Sangue",                 part: 1 },
  { num: 20,  title: "O Primeiro Sinal",                part: 1 },
  { num: 21,  title: "Caminhos Divergentes",            part: 1 },
  { num: 22,  title: "A Torre do Silêncio",             part: 1 },
  { num: 23,  title: "Segredos da Ordem",               part: 1 },
  { num: 24,  title: "O Arquivo Proibido",              part: 1 },
  { num: 25,  title: "Chamas na Noite",                 part: 1 },
  { num: 26,  title: "O Encontro dos Destinados",       part: 1 },
  { num: 27,  title: "Vozes do Passado",                part: 1 },
  { num: 28,  title: "A Marca Cósmica",                 part: 1 },
  { num: 29,  title: "Ecos da Criação",                 part: 1 },
  { num: 30,  title: "A Quinta Dimensão",               part: 1 },
  { num: 31,  title: "Fragmentos de Memória",           part: 1 },
  { num: 32,  title: "O Portal das Almas",              part: 1 },
  { num: 33,  title: "Sentinelas da Ordem",             part: 1 },
  { num: 34,  title: "A Herança Proibida",              part: 1 },
  { num: 35,  title: "Luz entre Trevas",                part: 1 },
  { num: 36,  title: "O Despertar de Elara",            part: 1 },
  { num: 37,  title: "Segredos de Rhys",                part: 1 },
  { num: 38,  title: "A Conspiração das Sombras",       part: 1 },
  { num: 39,  title: "O Pacto Antigo",                  part: 1 },
  { num: 40,  title: "Guardiões da Luz",                part: 1 },
  { num: 41,  title: "A Travessia",                     part: 1 },
  { num: 42,  title: "Memórias de Outro Mundo",         part: 1 },
  { num: 43,  title: "O Véu Rasgado",                   part: 1 },
  { num: 44,  title: "Filhos do Cosmos",                part: 1 },
  { num: 45,  title: "A Ordem Restaurada",              part: 1 },
  { num: 46,  title: "Sombras que Falam",               part: 1 },
  { num: 47,  title: "O Último Acólito",                part: 1 },
  { num: 48,  title: "Coragem nas Trevas",              part: 1 },
  { num: 49,  title: "O Eco da Profecia",               part: 1 },
  { num: 50,  title: "Meio Caminho",                    part: 1 },
  { num: 51,  title: "A Luz do Amanhecer",              part: 2 },
  { num: 52,  title: "O Cosmos se Abre",                part: 2 },
  { num: 53,  title: "Herdeiros Reunidos",              part: 2 },
  { num: 54,  title: "A Ordem dos Antigos",             part: 2 },
  { num: 55,  title: "Batalha nas Estrelas",            part: 2 },
  { num: 56,  title: "O Preço da Liberdade",            part: 2 },
  { num: 57,  title: "Laços Eternos",                   part: 2 },
  { num: 58,  title: "A Última Fortaleza",              part: 2 },
  { num: 59,  title: "Chamas do Cosmos",                part: 2 },
  { num: 60,  title: "O Sacrifício de Liam",            part: 2 },
  { num: 61,  title: "Além do Horizonte",               part: 2 },
  { num: 62,  title: "A Verdade de Vorlag",             part: 2 },
  { num: 63,  title: "Destinos Entrelaçados",           part: 2 },
  { num: 64,  title: "O Cosmos Responde",               part: 2 },
  { num: 65,  title: "A Mão Esquerda Revelada",         part: 2 },
  { num: 66,  title: "Guardiões Despertos",             part: 2 },
  { num: 67,  title: "A Grande Convergência",           part: 2 },
  { num: 68,  title: "Filhos da Luz",                   part: 2 },
  { num: 69,  title: "O Dom Ancestral",                 part: 2 },
  { num: 70,  title: "Sombras Vencidas",                part: 2 },
  { num: 71,  title: "A Nova Ordem",                    part: 2 },
  { num: 72,  title: "Mundos Paralelos",                part: 2 },
  { num: 73,  title: "O Elo Cósmico",                   part: 2 },
  { num: 74,  title: "Almas Irmãs",                     part: 2 },
  { num: 75,  title: "A Batalha Final Aproxima",        part: 2 },
  { num: 76,  title: "Forças Ocultas",                  part: 2 },
  { num: 77,  title: "O Retorno dos Antigos",           part: 2 },
  { num: 78,  title: "Luz Plena",                       part: 2 },
  { num: 79,  title: "O Último Véu",                    part: 2 },
  { num: 80,  title: "Além da Escuridão",               part: 2 },
  { num: 81,  title: "A Chave do Cosmos",               part: 2 },
  { num: 82,  title: "Heróis Forjados",                 part: 2 },
  { num: 83,  title: "A Tapeçaria do Destino",          part: 2 },
  { num: 84,  title: "Vozes do Cosmos",                 part: 2 },
  { num: 85,  title: "O Santuário da Luz",              part: 2 },
  { num: 86,  title: "Aliados Improváveis",             part: 2 },
  { num: 87,  title: "O Dom da Visão",                  part: 2 },
  { num: 88,  title: "Cosmos em Chamas",                part: 2 },
  { num: 89,  title: "A Última Esperança",              part: 2 },
  { num: 90,  title: "Renascidos da Luz",               part: 2 },
  { num: 91,  title: "O Segredo de Malakor",            part: 2 },
  { num: 92,  title: "A Teia de Sombras",               part: 2 },
  { num: 93,  title: "Raios de Esperança",              part: 2 },
  { num: 94,  title: "O Despertar Cósmico",             part: 2 },
  { num: 95,  title: "Laços de Luz",                    part: 2 },
  { num: 96,  title: "A Fonte Primordial",              part: 2 },
  { num: 97,  title: "Guerreiros da Luz",               part: 2 },
  { num: 98,  title: "O Preço do Conhecimento",         part: 2 },
  { num: 99,  title: "Nas Bordas do Cosmos",            part: 2 },
  { num: 100, title: "Um Século de Capítulos",          part: 2 },
  { num: 101, title: "Ecos do Amanhã",                  part: 2 },
  { num: 102, title: "A Ordem Cósmica",                 part: 2 },
  { num: 103, title: "Filhos da Sombra e da Luz",       part: 2 },
  { num: 104, title: "O Grande Despertar",              part: 2 },
  { num: 105, title: "Mundos em Colapso",               part: 2 },
  { num: 106, title: "A Dança das Estrelas",            part: 2 },
  { num: 107, title: "Forças Primordiais",              part: 2 },
  { num: 108, title: "O Caminho da Luz",                part: 2 },
  { num: 109, title: "Sombras do Passado",              part: 2 },
  { num: 110, title: "A Última Batalha Começa",         part: 2 },
  { num: 111, title: "Herdeiros em Guerra",             part: 2 },
  { num: 112, title: "O Cosmos Sangra",                 part: 2 },
  { num: 113, title: "Luz contra Trevas",               part: 2 },
  { num: 114, title: "O Sacrifício Supremo",            part: 2 },
  { num: 115, title: "Almas Livres",                    part: 2 },
  { num: 116, title: "A Vitória da Luz",                part: 2 },
  { num: 117, title: "Cosmos Restaurado",               part: 2 },
  { num: 118, title: "O Novo Amanhecer",                part: 2 },
  { num: 119, title: "Herdeiros da Luz Plena",          part: 2 },
  { num: 120, title: "O Legado Eterno",                 part: 2 },
  { num: 121, title: "A Última Fronteira",              part: 2 },
  { num: 122, title: "Guardiões do Cosmos",             part: 2 },
  { num: 123, title: "O Dom da Liberdade",              part: 2 },
  { num: 124, title: "Almas Reunidas",                  part: 2 },
  { num: 125, title: "A Grande Travessia",              part: 2 },
  { num: 126, title: "O Cosmos Abraça",                 part: 2 },
  { num: 127, title: "Herdeiros Completos",             part: 2 },
  { num: 128, title: "A Paz das Estrelas",              part: 2 },
  { num: 129, title: "Luz Eterna",                      part: 2 },
  { num: 130, title: "O Fim do Começo",                 part: 2 },
  { num: 131, title: "Novos Horizontes",                part: 2 },
  { num: 132, title: "A Jornada Continua",              part: 2 },
  { num: 133, title: "Cosmos Infinito",                 part: 2 },
  { num: 134, title: "O Elo Imortal",                   part: 2 },
  { num: 135, title: "Filhos das Estrelas",             part: 2 },
  { num: 136, title: "A Herança da Luz",                part: 2 },
  { num: 137, title: "Mundos Unidos",                   part: 2 },
  { num: 138, title: "O Cosmos Canta",                  part: 2 },
  { num: 139, title: "Herdeiros Imortais",              part: 2 },
  { num: 140, title: "A Última Sombra",                 part: 2 },
  { num: 141, title: "Luz Triunfante",                  part: 2 },
  { num: 142, title: "O Cosmos em Paz",                 part: 2 },
  { num: 143, title: "Guardiões Eternos",               part: 2 },
  { num: 144, title: "A Dança da Criação",              part: 2 },
  { num: 145, title: "Filhos do Infinito",              part: 2 },
  { num: 146, title: "O Legado dos Antigos",            part: 2 },
  { num: 147, title: "Almas do Cosmos",                 part: 2 },
  { num: 148, title: "A Última Palavra",                part: 2 },
  { num: 149, title: "Ecos da Eternidade",              part: 2 },
  { num: 150, title: "Meados da Jornada Final",         part: 2 },
  { num: 151, title: "O Cosmos Respira",                part: 2 },
  { num: 152, title: "Herdeiros da Criação",            part: 2 },
  { num: 153, title: "A Luz que Nunca Apaga",           part: 2 },
  { num: 154, title: "O Elo Primordial",                part: 2 },
  { num: 155, title: "Filhos da Eternidade",            part: 2 },
  { num: 156, title: "O Cosmos Revestido",              part: 2 },
  { num: 157, title: "A Grande Revelação",              part: 2 },
  { num: 158, title: "Herdeiros Absolutos",             part: 2 },
  { num: 159, title: "A Fonte da Luz",                  part: 2 },
  { num: 160, title: "O Cosmos Perfeito",               part: 2 },
  { num: 161, title: "Almas Eternas",                   part: 2 },
  { num: 162, title: "O Dom Final",                     part: 2 },
  { num: 163, title: "Guardiões da Criação",            part: 2 },
  { num: 164, title: "A Última Chama",                  part: 2 },
  { num: 165, title: "Cosmos Unificado",                part: 2 },
  { num: 166, title: "O Elo dos Herdeiros",             part: 2 },
  { num: 167, title: "Luz sem Fim",                     part: 2 },
  { num: 168, title: "A Jornada Completa",              part: 2 },
  { num: 169, title: "Filhos da Luz Eterna",            part: 2 },
  { num: 170, title: "O Cosmos Transcende",             part: 2 },
  { num: 171, title: "Herdeiros da Criação Divina",     part: 2 },
  { num: 172, title: "A Paz Cósmica",                   part: 2 },
  { num: 173, title: "O Legado Imortal",                part: 2 },
  { num: 174, title: "Guardiões do Infinito",           part: 2 },
  { num: 175, title: "O Cosmos — Fim e Começo",         part: 2 },
];

const PART_LABELS = {
  0: "Prólogo",
  1: "Parte I — Ecos do Silêncio",
  2: "Parte II — Herdeiros da Luz"
};

// ── GERA URL DO ÁUDIO para um capítulo ──
// Os arquivos devem estar em /audio/ com nomes como:
//   cap000.mp3, cap001.mp3 ... cap175.mp3
// OU com nomes que o script de upload gerou (ex: capitulo_001.mp3)
// A função tenta múltiplos padrões de nome.
function audioUrl(num) {
  const p = String(num).padStart(3, '0');
  // Retorna array de candidatos para tentar em ordem
  return [
    `audio/cap${p}.mp3`,
    `audio/capitulo_${p}.mp3`,
    `audio/cap_${p}.mp3`,
    `audio/${p}.mp3`,
    `audio/cap${p}.ogg`,
    `audio/cap${p}.m4a`,
    `audio/cap${p}.wav`,
  ];
}

// ── ESTADO ──
let currentIdx = 0;
let filtered   = [...CHAPTERS];
let audioReady = {}; // cache de URLs que existem

// ── INIT ──
document.addEventListener('DOMContentLoaded', () => {
  initStars();
  initNavbar();
  initAnimations();
  initCounters();
  renderList(filtered);
  selectChap(0); // começa no prólogo/cap0
  setupAutoNext();
  setupMobileMenu();
  checkAllAudio();
});

// ── VERIFICA QUAIS ÁUDIOS EXISTEM ──
function checkAllAudio() {
  // Verificação assíncrona leve para marcar capítulos disponíveis
  CHAPTERS.forEach(ch => {
    const candidates = audioUrl(ch.num);
    tryNextCandidate(ch.num, candidates, 0);
  });
}

function tryNextCandidate(num, candidates, idx) {
  if (idx >= candidates.length) return;
  const url = candidates[idx];
  fetch(url, { method: 'HEAD' })
    .then(r => {
      if (r.ok) {
        audioReady[num] = url;
        // Atualizar ícone na lista
        const el = document.getElementById(`ci-${num}`);
        if (el) {
          el.innerHTML = '<i class="fas fa-headphones" style="color:#4fc3f7;font-size:.65rem"></i>';
        }
      } else {
        tryNextCandidate(num, candidates, idx + 1);
      }
    })
    .catch(() => tryNextCandidate(num, candidates, idx + 1));
}

// ── RENDERIZAR LISTA DE CAPÍTULOS ──
function renderList(list) {
  const el = document.getElementById('chapList');
  if (!el) return;

  let lastPart = -1;
  let html = '';

  list.forEach((ch, i) => {
    const globalIdx = CHAPTERS.indexOf(ch);
    const isActive  = globalIdx === currentIdx;
    const hasAudio  = !!audioReady[ch.num];
    const partLabel = PART_LABELS[ch.part];

    if (ch.part !== lastPart) {
      lastPart = ch.part;
      html += `<div class="chap-part-header">${partLabel}</div>`;
    }

    html += `
      <div class="chap-item ${isActive ? 'active' : ''}"
           onclick="selectChap(${globalIdx})"
           id="chap-${globalIdx}">
        <span class="ci-num">${ch.num}</span>
        <div class="ci-ico">
          <i class="fas ${isActive ? 'fa-volume-up' : 'fa-play'}"></i>
        </div>
        <span class="ci-title">
          ${ch.num === 0 ? 'Prólogo' : `Cap. ${ch.num}`}: ${ch.title}
        </span>
        <span id="ci-${ch.num}" class="ci-part">
          ${hasAudio
            ? '<i class="fas fa-headphones" style="color:#4fc3f7;font-size:.65rem"></i>'
            : '<i class="fas fa-clock" style="color:rgba(160,144,112,.35);font-size:.65rem"></i>'
          }
        </span>
      </div>`;
  });

  el.innerHTML = html;
  document.getElementById('searchCount').textContent =
    `${list.length} capítulo${list.length !== 1 ? 's' : ''}`;
}

// ── SELECIONAR CAPÍTULO ──
function selectChap(idx) {
  currentIdx = idx;
  const ch   = CHAPTERS[idx];
  if (!ch) return;

  // Atualizar UI do player
  const titleEl = document.getElementById('npTitle');
  const subEl   = document.getElementById('npSub');
  const badge   = document.getElementById('npBadge');
  const spin    = document.getElementById('npSpin');

  if (titleEl) titleEl.textContent = ch.num === 0
    ? `Prólogo: ${ch.title}`
    : `Capítulo ${ch.num}: ${ch.title}`;

  if (subEl) subEl.textContent =
    `${ch.num === 0 ? 'Prólogo' : `Capítulo ${ch.num}`} de 175 · ${PART_LABELS[ch.part]}`;

  // Carregar áudio
  const audio  = document.getElementById('mainAudio');
  const srcEl  = document.getElementById('audioSrc');
  const bestUrl = audioReady[ch.num];

  if (audio && srcEl) {
    if (bestUrl) {
      srcEl.src = bestUrl;
      audio.load();
      audio.play().catch(() => {});
      if (badge) badge.innerHTML = '<i class="fas fa-circle" style="font-size:.5rem;color:#4fc3f7"></i>&nbsp; Reproduzindo';
      if (spin) spin.classList.add('playing');
    } else {
      // Tenta candidatos um a um
      const candidates = audioUrl(ch.num);
      tryLoadAudio(audio, srcEl, candidates, 0, ch.num, badge, spin);
    }
  }

  // Re-renderizar lista
  renderList(filtered.length < CHAPTERS.length ? filtered : CHAPTERS);

  // Scroll para item ativo
  setTimeout(() => {
    const el = document.getElementById(`chap-${idx}`);
    if (el) el.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }, 80);
}

function tryLoadAudio(audio, srcEl, candidates, idx, chapNum, badge, spin) {
  if (idx >= candidates.length) {
    if (badge) badge.innerHTML = '<i class="fas fa-clock" style="font-size:.5rem;color:#a09070"></i>&nbsp; Áudio em processamento';
    showToast(`⏳ Áudio do Capítulo ${chapNum} em breve...`);
    return;
  }
  const url = candidates[idx];
  fetch(url, { method: 'HEAD' })
    .then(r => {
      if (r.ok) {
        audioReady[chapNum] = url;
        srcEl.src = url;
        audio.load();
        audio.play().catch(() => {});
        if (badge) badge.innerHTML = '<i class="fas fa-circle" style="font-size:.5rem;color:#4fc3f7"></i>&nbsp; Reproduzindo';
        if (spin) spin.classList.add('playing');
      } else {
        tryLoadAudio(audio, srcEl, candidates, idx + 1, chapNum, badge, spin);
      }
    })
    .catch(() => tryLoadAudio(audio, srcEl, candidates, idx + 1, chapNum, badge, spin));
}

// ── NAVEGAÇÃO ──
function prevChap() {
  if (currentIdx > 0) selectChap(currentIdx - 1);
}
function nextChap() {
  if (currentIdx < CHAPTERS.length - 1) selectChap(currentIdx + 1);
}

// ── AUTO NEXT ──
function setupAutoNext() {
  const audio = document.getElementById('mainAudio');
  const spin  = document.getElementById('npSpin');
  const badge = document.getElementById('npBadge');
  if (!audio) return;

  audio.addEventListener('ended', () => {
    if (spin) spin.classList.remove('playing');
    if (currentIdx < CHAPTERS.length - 1) setTimeout(() => nextChap(), 1000);
  });
  audio.addEventListener('play',  () => { if (spin) spin.classList.add('playing'); });
  audio.addEventListener('pause', () => { if (spin) spin.classList.remove('playing'); });
  audio.addEventListener('error', () => {
    if (spin) spin.classList.remove('playing');
    if (badge) badge.innerHTML = '<i class="fas fa-exclamation-circle" style="font-size:.5rem;color:#e05555"></i>&nbsp; Áudio não disponível';
  });
}

// ── FILTRAR CAPÍTULOS ──
function filterChaps() {
  const q = (document.getElementById('searchInput')?.value || '').toLowerCase().trim();
  filtered = q
    ? CHAPTERS.filter(ch =>
        ch.title.toLowerCase().includes(q) ||
        String(ch.num).includes(q) ||
        (ch.num === 0 && 'prólogo'.includes(q))
      )
    : [...CHAPTERS];
  renderList(filtered);
}

// ── TOAST ──
function showToast(msg) {
  let t = document.getElementById('_toast');
  if (!t) {
    t = document.createElement('div');
    t.id = '_toast';
    Object.assign(t.style, {
      position:'fixed', bottom:'28px', left:'50%', transform:'translateX(-50%)',
      background:'rgba(13,27,42,.97)', border:'1px solid rgba(79,195,247,.4)',
      color:'#4fc3f7', padding:'11px 28px', borderRadius:'50px',
      fontSize:'.85rem', zIndex:'9999', letterSpacing:'1px',
      boxShadow:'0 8px 30px rgba(0,0,0,.5)', transition:'opacity .3s',
    });
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.style.opacity = '1';
  clearTimeout(t._to);
  t._to = setTimeout(() => { t.style.opacity = '0'; }, 3000);
}

// ── MOBILE MENU ──
function toggleMenu() {
  const m = document.getElementById('navMobile');
  if (m) m.classList.toggle('open');
}
function setupMobileMenu() {
  document.addEventListener('click', e => {
    const m = document.getElementById('navMobile');
    const nb = document.querySelector('#navbar');
    if (m && nb && !nb.contains(e.target)) m.classList.remove('open');
  });
}

// ── NAVBAR SCROLL ──
function initNavbar() {
  const nb = document.getElementById('navbar');
  if (!nb) return;
  const onScroll = () => nb.classList.toggle('scrolled', window.scrollY > 50);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// ── COUNTERS ANIMADOS ──
function initCounters() {
  const els = document.querySelectorAll('.stat-n[data-count]');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el  = entry.target;
      const end = parseInt(el.dataset.count, 10);
      const dur = 1400;
      const step = Math.ceil(end / (dur / 16));
      let cur = 0;
      const tick = () => {
        cur = Math.min(cur + step, end);
        el.textContent = cur;
        if (cur < end) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      obs.unobserve(el);
    });
  }, { threshold: 0.5 });
  els.forEach(el => obs.observe(el));
}

// ── ANIMAÇÕES DE ENTRADA ──
function initAnimations() {
  // Hero animations on load
  setTimeout(() => {
    document.querySelectorAll('.animate-in').forEach((el, i) => {
      setTimeout(() => el.classList.add('show'), i * 120);
    });
  }, 200);

  // Scroll reveals
  const obs = new IntersectionObserver(
    entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('show'); }),
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

// ── ESTRELAS CANVAS ──
function initStars() {
  const canvas = document.getElementById('stars');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize, { passive: true });

  const COUNT = 220;
  const stars = Array.from({ length: COUNT }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.4 + 0.2,
    a: Math.random(),
    da: (Math.random() * 0.006 + 0.002) * (Math.random() > .5 ? 1 : -1),
  }));

  // Shooting stars
  const shoots = [];
  function addShoot() {
    shoots.push({
      x: Math.random() * canvas.width * 0.6,
      y: Math.random() * canvas.height * 0.4,
      len: Math.random() * 120 + 60,
      speed: Math.random() * 8 + 4,
      a: 1,
      angle: Math.PI / 4 + (Math.random() - .5) * 0.3,
    });
    setTimeout(addShoot, Math.random() * 8000 + 4000);
  }
  setTimeout(addShoot, 3000);

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Stars
    stars.forEach(s => {
      s.a += s.da;
      if (s.a > 1) { s.a = 1; s.da = -Math.abs(s.da); }
      if (s.a < .05) { s.a = .05; s.da = Math.abs(s.da); }
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,240,${s.a})`;
      ctx.fill();
    });

    // Shooting stars
    for (let i = shoots.length - 1; i >= 0; i--) {
      const s = shoots[i];
      ctx.beginPath();
      ctx.moveTo(s.x, s.y);
      ctx.lineTo(s.x - Math.cos(s.angle) * s.len, s.y - Math.sin(s.angle) * s.len);
      const grad = ctx.createLinearGradient(
        s.x, s.y,
        s.x - Math.cos(s.angle) * s.len,
        s.y - Math.sin(s.angle) * s.len
      );
      grad.addColorStop(0, `rgba(201,168,76,${s.a})`);
      grad.addColorStop(1, 'rgba(201,168,76,0)');
      ctx.strokeStyle = grad;
      ctx.lineWidth = 1.5;
      ctx.stroke();
      s.x += Math.cos(s.angle) * s.speed;
      s.y += Math.sin(s.angle) * s.speed;
      s.a -= 0.018;
      if (s.a <= 0) shoots.splice(i, 1);
    }

    requestAnimationFrame(draw);
  }
  draw();
}

// ── CSS EXTRA: cabeçalho de parte na lista ──
const extraCSS = `
.chap-part-header {
  padding: 10px 24px 6px;
  font-family: 'Cinzel', serif;
  font-size: .68rem;
  color: rgba(201,168,76,.55);
  letter-spacing: 3px;
  text-transform: uppercase;
  border-bottom: 1px solid rgba(201,168,76,.08);
  margin-top: 6px;
}
`;
const styleEl = document.createElement('style');
styleEl.textContent = extraCSS;
document.head.appendChild(styleEl);

console.log('%c✦ A Mão Esquerda do Cosmos — Herdeiros da Luz', 'color:#c9a84c;font-size:15px;font-weight:bold;');
console.log('%c© Nélio Correia da Silva Filho | @tzadkel', 'color:#4fc3f7;font-size:12px;');
