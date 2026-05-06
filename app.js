/* =====================================================
   A MÃO ESQUERDA DO COSMOS — HERDEIROS DA LUZ
   JavaScript — Player Audiobook + UI
   ===================================================== */

'use strict';

// =====================================================
// DADOS DOS CAPÍTULOS (175 capítulos)
// =====================================================
const CHAPTERS = [
  { num: 0,   title: "Prólogo — O Início de Tudo" },
  { num: 1,   title: "O Despertar" },
  { num: 2,   title: "Vozes no Vazio" },
  { num: 3,   title: "A Marca da Herança" },
  { num: 4,   title: "Sombras do Passado" },
  { num: 5,   title: "O Primeiro Passo" },
  { num: 6,   title: "Além das Fronteiras" },
  { num: 7,   title: "A Torre dos Ecos" },
  { num: 8,   title: "Revelações Antigas" },
  { num: 9,   title: "O Caminho das Estrelas" },
  { num: 10,  title: "Filhos da Luz" },
  { num: 11,  title: "O Santuário Proibido" },
  { num: 12,  title: "Laços de Sangue" },
  { num: 13,  title: "A Noite das Chamas" },
  { num: 14,  title: "Segredos da Ordem" },
  { num: 15,  title: "O Guardião das Sombras" },
  { num: 16,  title: "Entre Dois Mundos" },
  { num: 17,  title: "A Profecia Esquecida" },
  { num: 18,  title: "Ruínas Celestiais" },
  { num: 19,  title: "O Peso da Escolha" },
  { num: 20,  title: "Aliados Improváveis" },
  { num: 21,  title: "A Voz das Pedras" },
  { num: 22,  title: "Ecos do Silêncio" },
  { num: 23,  title: "A Batalha Interior" },
  { num: 24,  title: "Fragmentos de Memória" },
  { num: 25,  title: "O Elo Perdido" },
  { num: 26,  title: "Nas Profundezas do Cosmos" },
  { num: 27,  title: "A Terceira Lua" },
  { num: 28,  title: "O Despertar do Dragão" },
  { num: 29,  title: "Chamas e Cinzas" },
  { num: 30,  title: "A Ordem dos Herdeiros" },
  { num: 31,  title: "Caminhos Divergentes" },
  { num: 32,  title: "A Última Esperança" },
  { num: 33,  title: "O Véu das Sombras" },
  { num: 34,  title: "Segredos da Criação" },
  { num: 35,  title: "A Chave do Destino" },
  { num: 36,  title: "Mundos Paralelos" },
  { num: 37,  title: "O Preço da Glória" },
  { num: 38,  title: "Labirinto de Luz" },
  { num: 39,  title: "A Promessa Sagrada" },
  { num: 40,  title: "Entre o Ser e o Nada" },
  { num: 41,  title: "O Chamado Ancestral" },
  { num: 42,  title: "Forças Ocultas" },
  { num: 43,  title: "A Porta dos Sonhos" },
  { num: 44,  title: "Guerreiros da Aurora" },
  { num: 45,  title: "O Cristal Sagrado" },
  { num: 46,  title: "Nas Margens do Impossível" },
  { num: 47,  title: "A Dança das Constelações" },
  { num: 48,  title: "Espelhos da Alma" },
  { num: 49,  title: "O Despertar da Fênix" },
  { num: 50,  title: "Metade da Jornada" },
  { num: 51,  title: "A Ilha dos Esquecidos" },
  { num: 52,  title: "Raízes do Caos" },
  { num: 53,  title: "O Oráculo Silencioso" },
  { num: 54,  title: "Correntes do Tempo" },
  { num: 55,  title: "A Herança Proibida" },
  { num: 56,  title: "Nas Sombras da Eternidade" },
  { num: 57,  title: "O Guardião do Limiar" },
  { num: 58,  title: "A Última Sentinela" },
  { num: 59,  title: "Chamas Imortais" },
  { num: 60,  title: "O Pacto das Estrelas" },
  { num: 61,  title: "Renascimento" },
  { num: 62,  title: "A Teia do Destino" },
  { num: 63,  title: "Guerras Invisíveis" },
  { num: 64,  title: "O Espírito da Terra" },
  { num: 65,  title: "Além do Horizonte" },
  { num: 66,  title: "A Voz do Cosmos" },
  { num: 67,  title: "Fragmentos de Luz" },
  { num: 68,  title: "O Retorno dos Antigos" },
  { num: 69,  title: "Nas Fronteiras do Real" },
  { num: 70,  title: "A Sombra da Verdade" },
  { num: 71,  title: "O Caminho da Redenção" },
  { num: 72,  title: "Lamentos do Vento" },
  { num: 73,  title: "A Forja do Herói" },
  { num: 74,  title: "Segredos Eternos" },
  { num: 75,  title: "O Laço Inquebrantável" },
  { num: 76,  title: "Além da Morte" },
  { num: 77,  title: "A Coroa Celestial" },
  { num: 78,  title: "Guerreiros do Amanhã" },
  { num: 79,  title: "O Ponto de Virada" },
  { num: 80,  title: "Nas Cinzas do Mundo" },
  { num: 81,  title: "A Luz que Persiste" },
  { num: 82,  title: "O Preço da Liberdade" },
  { num: 83,  title: "Almas Gêmeas" },
  { num: 84,  title: "A Grande Convergência" },
  { num: 85,  title: "O Fim do Começo" },
  { num: 86,  title: "Silêncio Antes da Tempestade" },
  { num: 87,  title: "Fim da Parte I — Ecos do Silêncio" },
  { num: 88,  title: "PARTE II — Herdeiros da Luz" },
  { num: 89,  title: "O Novo Amanhecer" },
  { num: 90,  title: "A Chama Renascida" },
  { num: 91,  title: "Guerras Celestiais" },
  { num: 92,  title: "O Legado dos Mestres" },
  { num: 93,  title: "Nas Profundezas do Abismo" },
  { num: 94,  title: "A Última Aliança" },
  { num: 95,  title: "Forças do Destino" },
  { num: 96,  title: "O Mapa das Estrelas" },
  { num: 97,  title: "Segredos da Fortaleza" },
  { num: 98,  title: "A Batalha dos Titãs" },
  { num: 99,  title: "Renascimento das Sombras" },
  { num: 100, title: "O Centésimo Passo" },
  { num: 101, title: "Além dos Limites" },
  { num: 102, title: "A Voz do Silêncio" },
  { num: 103, title: "Guerreiros de Luz" },
  { num: 104, title: "O Segredo Revelado" },
  { num: 105, title: "Nas Margens do Caos" },
  { num: 106, title: "A Escolha Final" },
  { num: 107, title: "O Coração do Cosmos" },
  { num: 108, title: "Fragmentos de Eternidade" },
  { num: 109, title: "A Última Batalha" },
  { num: 110, title: "Entre Mundos" },
  { num: 111, title: "O Sacrifício Supremo" },
  { num: 112, title: "Laços de Destino" },
  { num: 113, title: "A Porta da Eternidade" },
  { num: 114, title: "Guerreiros Imortais" },
  { num: 115, title: "O Rugido do Cosmos" },
  { num: 116, title: "Nas Sombras da Glória" },
  { num: 117, title: "A Luz do Fim" },
  { num: 118, title: "O Grande Despertar" },
  { num: 119, title: "Filhos da Eternidade" },
  { num: 120, title: "A Coroa de Luz" },
  { num: 121, title: "O Caminho dos Heróis" },
  { num: 122, title: "Além do Possível" },
  { num: 123, title: "A Última Chama" },
  { num: 124, title: "Nas Fronteiras da Eternidade" },
  { num: 125, title: "O Segredo do Cosmos" },
  { num: 126, title: "Guerras do Espírito" },
  { num: 127, title: "A Herança da Luz" },
  { num: 128, title: "Renascimento Eterno" },
  { num: 129, title: "O Guardião Final" },
  { num: 130, title: "Nas Profundezas da Luz" },
  { num: 131, title: "A Grande Revelação" },
  { num: 132, title: "O Mapa do Destino" },
  { num: 133, title: "Além das Sombras" },
  { num: 134, title: "A Batalha Suprema" },
  { num: 135, title: "Guerreiros da Eternidade" },
  { num: 136, title: "O Laço do Cosmos" },
  { num: 137, title: "Nas Margens do Infinito" },
  { num: 138, title: "A Voz dos Herdeiros" },
  { num: 139, title: "O Fim das Guerras" },
  { num: 140, title: "Luz e Sombra" },
  { num: 141, title: "A Última Escolha" },
  { num: 142, title: "Filhos do Cosmos" },
  { num: 143, title: "O Grande Caminho" },
  { num: 144, title: "Nas Ruínas do Passado" },
  { num: 145, title: "A Chave da Eternidade" },
  { num: 146, title: "Guerreiros da Luz" },
  { num: 147, title: "O Despertar Final" },
  { num: 148, title: "Além da Eternidade" },
  { num: 149, title: "A Última Profecia" },
  { num: 150, title: "Metade Final" },
  { num: 151, title: "O Caminho da Glória" },
  { num: 152, title: "Nas Fronteiras do Cosmos" },
  { num: 153, title: "A Grande Aliança" },
  { num: 154, title: "Guerras de Luz" },
  { num: 155, title: "O Sacrifício dos Heróis" },
  { num: 156, title: "Nas Sombras do Cosmos" },
  { num: 157, title: "A Última Fronteira" },
  { num: 158, title: "Filhos da Luz e da Sombra" },
  { num: 159, title: "O Coração dos Herdeiros" },
  { num: 160, title: "Nas Profundezas do Destino" },
  { num: 161, title: "A Grande Jornada" },
  { num: 162, title: "Guerreiros do Cosmos" },
  { num: 163, title: "O Segredo Final" },
  { num: 164, title: "Além dos Sonhos" },
  { num: 165, title: "A Última Batalha dos Herdeiros" },
  { num: 166, title: "Nas Margens da Eternidade" },
  { num: 167, title: "O Rugido Final" },
  { num: 168, title: "A Voz do Destino" },
  { num: 169, title: "Filhos do Infinito" },
  { num: 170, title: "O Grande Final" },
  { num: 171, title: "Nas Profundezas da Glória" },
  { num: 172, title: "A Última Luz" },
  { num: 173, title: "O Fim e o Começo" },
  { num: 174, title: "Herdeiros da Eternidade" },
  { num: 175, title: "Epílogo — O Cosmos Continua" }
];

// =====================================================
// ESTADO DO PLAYER
// =====================================================
let currentChapterIdx = 0;
let audioEl = null;
let isPlaying = false;
let progressInterval = null;

// =====================================================
// INICIALIZAÇÃO
// =====================================================
document.addEventListener('DOMContentLoaded', () => {
  console.log('%c✦ A Mão Esquerda do Cosmos — Herdeiros da Luz', 'color: #c9a84c; font-size: 16px; font-weight: bold;');

  initStars();
  initParticles();
  initNavbar();
  initChaptersList();
  initAudioPlayer();
  initScrollAnimations();
  loadChapter(0, false);
});

// =====================================================
// ESTRELAS ANIMADAS
// =====================================================
function initStars() {
  const canvas = document.getElementById('starsCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let stars = [];

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    createStars();
  }

  function createStars() {
    stars = [];
    const count = Math.floor((canvas.width * canvas.height) / 4000);
    for (let i = 0; i < count; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.2,
        alpha: Math.random() * 0.8 + 0.2,
        speed: Math.random() * 0.003 + 0.001,
        phase: Math.random() * Math.PI * 2,
        gold: Math.random() < 0.08
      });
    }
  }

  let frame = 0;
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    frame++;
    stars.forEach(s => {
      const twinkle = Math.sin(frame * s.speed + s.phase) * 0.4 + 0.6;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = s.gold
        ? `rgba(201,168,76,${s.alpha * twinkle})`
        : `rgba(255,255,255,${s.alpha * twinkle})`;
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }

  resize();
  window.addEventListener('resize', resize);
  draw();
}

// =====================================================
// PARTÍCULAS DOURADAS
// =====================================================
function initParticles() {
  const container = document.getElementById('particles');
  if (!container) return;

  function createParticle() {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 3 + 1;
    p.style.cssText = `
      left: ${Math.random() * 100}%;
      width: ${size}px;
      height: ${size}px;
      animation-duration: ${Math.random() * 15 + 8}s;
      animation-delay: ${Math.random() * 8}s;
      opacity: 0;
    `;
    container.appendChild(p);
    setTimeout(() => p.remove(), 25000);
  }

  setInterval(createParticle, 800);
  for (let i = 0; i < 8; i++) createParticle();
}

// =====================================================
// NAVBAR
// =====================================================
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const menuBtn = document.getElementById('menuBtn');
  const navMobile = document.getElementById('navMobile');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  if (menuBtn) {
    menuBtn.addEventListener('click', () => {
      navMobile.classList.toggle('open');
    });
  }
}

window.closeMobile = function () {
  const navMobile = document.getElementById('navMobile');
  if (navMobile) navMobile.classList.remove('open');
};

// =====================================================
// LISTA DE CAPÍTULOS
// =====================================================
function initChaptersList() {
  const list = document.getElementById('chaptersList');
  if (!list) return;
  renderChapters(CHAPTERS);
}

function renderChapters(chapters) {
  const list = document.getElementById('chaptersList');
  if (!list) return;

  list.innerHTML = chapters.map((ch, idx) => {
    const globalIdx = CHAPTERS.findIndex(c => c.num === ch.num);
    const audioSrc = getAudioSrc(ch.num);
    const hasAudio = !!audioSrc;
    return `
      <div class="chapter-item ${globalIdx === currentChapterIdx ? 'active' : ''} ${!hasAudio ? 'no-audio' : ''}"
           id="cap-${ch.num}"
           onclick="loadChapter(${globalIdx}, true)">
        <span class="chapter-num">Cap. ${String(ch.num).padStart(3,'0')}</span>
        <span class="chapter-name">${ch.title}</span>
        <span class="chapter-play">
          ${globalIdx === currentChapterIdx && isPlaying
            ? '<i class="fas fa-pause"></i>'
            : '<i class="fas fa-play"></i>'}
        </span>
      </div>
    `;
  }).join('');
}

window.filterChapters = function () {
  const q = document.getElementById('searchInput').value.toLowerCase();
  const filtered = CHAPTERS.filter(ch =>
    ch.title.toLowerCase().includes(q) ||
    String(ch.num).includes(q)
  );
  renderChapters(filtered);
};

// =====================================================
// AUDIO PLAYER
// =====================================================
function initAudioPlayer() {
  audioEl = document.getElementById('audioPlayer');
  if (!audioEl) return;

  audioEl.volume = 0.8;

  audioEl.addEventListener('timeupdate', updateProgress);
  audioEl.addEventListener('loadedmetadata', updateDuration);
  audioEl.addEventListener('ended', () => {
    isPlaying = false;
    updatePlayIcons();
    if (currentChapterIdx < CHAPTERS.length - 1) {
      setTimeout(() => loadChapter(currentChapterIdx + 1, true), 1000);
    }
  });
  audioEl.addEventListener('error', (e) => {
    console.warn('Áudio não disponível para este capítulo.');
    updateNoAudioUI();
  });
  audioEl.addEventListener('play', () => {
    isPlaying = true;
    updatePlayIcons();
  });
  audioEl.addEventListener('pause', () => {
    isPlaying = false;
    updatePlayIcons();
  });
}

function getAudioSrc(num) {
  // Nomes possíveis de arquivo para cada capítulo
  const padded = String(num).padStart(3, '0');
  // Formatos possíveis de nomeação
  return `/audio/cap${padded}.mp3`;
}

function loadChapter(idx, autoPlay) {
  if (idx < 0 || idx >= CHAPTERS.length) return;

  currentChapterIdx = idx;
  const ch = CHAPTERS[idx];
  const src = getAudioSrc(ch.num);

  // Atualiza UI do player
  const titleEl = document.getElementById('playerTitle');
  if (titleEl) titleEl.textContent = `Capítulo ${ch.num} — ${ch.title}`;

  // Tenta carregar o áudio
  if (audioEl) {
    audioEl.pause();
    isPlaying = false;

    // Tenta os dois formatos mais comuns
    const sources = [
      `/audio/cap${String(ch.num).padStart(3,'0')}.mp3`,
      `/audio/cap${String(ch.num).padStart(3,'0')}.ogg`,
      `/audio/${String(ch.num).padStart(3,'0')}.mp3`,
      `/audio/capitulo_${String(ch.num).padStart(3,'0')}.mp3`,
      `/audio/capitulo${String(ch.num).padStart(3,'0')}.mp3`,
    ];

    audioEl.src = sources[0];
    audioEl.load();

    if (autoPlay) {
      const playPromise = audioEl.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          isPlaying = true;
          updatePlayIcons();
        }).catch(() => {
          // Áudio não disponível
          updateNoAudioUI();
        });
      }
    }
  }

  // Scroll para o capítulo na lista
  const capEl = document.getElementById(`cap-${ch.num}`);
  if (capEl) {
    capEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  // Re-renderizar lista para atualizar ativo
  const q = document.getElementById('searchInput')?.value?.toLowerCase() || '';
  const filtered = q
    ? CHAPTERS.filter(c => c.title.toLowerCase().includes(q) || String(c.num).includes(q))
    : CHAPTERS;
  renderChapters(filtered);
}

function updateNoAudioUI() {
  isPlaying = false;
  updatePlayIcons();
  const titleEl = document.getElementById('playerTitle');
  const ch = CHAPTERS[currentChapterIdx];
  if (titleEl) {
    titleEl.textContent = `Cap. ${ch.num} — ${ch.title} (Áudio não disponível)`;
  }
}

window.togglePlay = function () {
  if (!audioEl) return;
  if (audioEl.paused) {
    const p = audioEl.play();
    if (p !== undefined) {
      p.then(() => {
        isPlaying = true;
        updatePlayIcons();
      }).catch(() => {
        showNoAudioAlert();
      });
    }
  } else {
    audioEl.pause();
  }
};

function showNoAudioAlert() {
  const notice = document.querySelector('.audiobook-notice');
  if (notice) {
    notice.style.border = '1px solid rgba(201,168,76,0.6)';
    notice.style.background = 'rgba(201,168,76,0.1)';
    notice.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    setTimeout(() => {
      notice.style.border = '';
      notice.style.background = '';
    }, 3000);
  }
}

window.prevChapter = function () {
  if (currentChapterIdx > 0) loadChapter(currentChapterIdx - 1, isPlaying);
};

window.nextChapter = function () {
  if (currentChapterIdx < CHAPTERS.length - 1) loadChapter(currentChapterIdx + 1, isPlaying);
};

window.rewind = function () {
  if (audioEl) audioEl.currentTime = Math.max(0, audioEl.currentTime - 15);
};

window.forward = function () {
  if (audioEl) audioEl.currentTime = Math.min(audioEl.duration || 0, audioEl.currentTime + 15);
};

window.setVolume = function (val) {
  if (audioEl) audioEl.volume = parseFloat(val);
};

window.toggleMute = function () {
  if (audioEl) {
    audioEl.muted = !audioEl.muted;
    const icon = document.querySelector('.volume-wrap i');
    if (icon) {
      icon.className = audioEl.muted ? 'fas fa-volume-mute' : 'fas fa-volume-up';
    }
  }
};

window.setSpeed = function (val) {
  if (audioEl) audioEl.playbackRate = parseFloat(val);
};

window.seekAudio = function (e) {
  if (!audioEl || !audioEl.duration) return;
  const bar = document.getElementById('progressBar');
  if (!bar) return;
  const rect = bar.getBoundingClientRect();
  const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
  audioEl.currentTime = ratio * audioEl.duration;
};

function updateProgress() {
  if (!audioEl || !audioEl.duration) return;
  const pct = (audioEl.currentTime / audioEl.duration) * 100;
  const fill = document.getElementById('progressFill');
  const thumb = document.getElementById('progressThumb');
  const cur = document.getElementById('currentTime');
  if (fill) fill.style.width = pct + '%';
  if (thumb) thumb.style.left = pct + '%';
  if (cur) cur.textContent = formatTime(audioEl.currentTime);
}

function updateDuration() {
  if (!audioEl) return;
  const tot = document.getElementById('totalTime');
  if (tot) tot.textContent = formatTime(audioEl.duration);
}

function updatePlayIcons() {
  const icon1 = document.getElementById('playIcon');
  const icon2 = document.getElementById('playBigIcon');
  const cls = isPlaying ? 'fas fa-pause' : 'fas fa-play';
  if (icon1) icon1.className = cls;
  if (icon2) icon2.className = cls;

  // Atualizar ícone no capítulo ativo
  const activeItems = document.querySelectorAll('.chapter-item.active .chapter-play i');
  activeItems.forEach(i => {
    i.className = isPlaying ? 'fas fa-pause' : 'fas fa-play';
  });
}

function formatTime(s) {
  if (!s || isNaN(s)) return '0:00';
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec.toString().padStart(2, '0')}`;
}

// =====================================================
// SCROLL ANIMATIONS
// =====================================================
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

  const animated = document.querySelectorAll(
    '.parte-card, .personagem, .formato-card, .loja-card, .sobre-quote, .autor-bio p'
  );
  animated.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = `opacity 0.6s ease ${i * 0.05}s, transform 0.6s ease ${i * 0.05}s`;
    observer.observe(el);
  });

  document.addEventListener('animationend', () => {}, false);
}

document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('scroll', () => {
    document.querySelectorAll('.parte-card, .personagem, .formato-card, .loja-card').forEach(el => {
      if (el.getBoundingClientRect().top < window.innerHeight - 60) {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }
    });
  });
});
