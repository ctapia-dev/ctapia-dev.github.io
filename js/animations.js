// ── REVEAL ON SCROLL ──────────────────────────────────────
window.addEventListener("load", () => {
  document.querySelectorAll(".reveal").forEach(el => {
    if (el.getBoundingClientRect().top >= window.innerHeight) {
      el.classList.add("animate");
    } else {
      el.classList.add("active");
    }
  });
  revealOnScroll();
});

function revealOnScroll() {
  document.querySelectorAll(".reveal.animate").forEach((el, i) => {
    if (el.getBoundingClientRect().top < window.innerHeight - 80) {
      setTimeout(() => el.classList.add("active"), i * 60);
    }
  });
}
window.addEventListener("scroll", revealOnScroll);

// ── NAV HIGHLIGHT ──────────────────────────────────────────
const sections = document.querySelectorAll("section[id], footer[id]");
const navLinks = document.querySelectorAll(".nav-links a");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 120) current = s.id;
  });
  navLinks.forEach(a => {
    a.style.color = a.getAttribute("href") === "#" + current ? "var(--accent)" : "";
  });
});

// ── LANG BUTTONS ───────────────────────────────────────────
function updateLangButtons(lang) {
  document.getElementById("btn-es")?.classList.toggle("active", lang === "es");
  document.getElementById("btn-en")?.classList.toggle("active", lang === "en");
}

document.addEventListener("DOMContentLoaded", () => {
  const originalSet = window.setLanguage;
  if (originalSet) {
    window.setLanguage = function(lang) {
      originalSet(lang);
      updateLangButtons(lang);
    };
  }
  updateLangButtons("es");

  // Inicializar dots de cada carrusel
  document.querySelectorAll('.carousel-track').forEach(track => {
    const imgs = track.querySelectorAll('img');
    const container = track.closest('.carousel-container');
    const dotsWrap = container.querySelector('.carousel-dots');
    if (!dotsWrap) return;
    imgs.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
      dot.setAttribute('aria-label', 'Slide ' + (i + 1));
      dot.onclick = () => goToSlide(dot, i);
      dotsWrap.appendChild(dot);
    });
  });
});

// ── FIGMA TOGGLE ───────────────────────────────────────────
function toggleFigma(btn) {
  const container = btn.closest('.figma-toggle-wrap').querySelector('.figma-embed-container');
  const isOpen = container.style.display !== 'none';
  container.style.display = isOpen ? 'none' : 'block';
  btn.classList.toggle('active', !isOpen);
  if (!isOpen) {
    setTimeout(() => container.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 50);
  }
}

// ── CAROUSEL ───────────────────────────────────────────────
const carouselState = {};

function getSlideWidth(track) {
  return track.closest('.carousel-track-wrap').getBoundingClientRect().width;
}

function toggleCarousel(btn) {
  const wrap = btn.closest('.carousel-wrap');
  const container = wrap.querySelector('.carousel-container');
  const isOpen = container.classList.contains('open');

  // Cerrar todos
  document.querySelectorAll('.carousel-container.open').forEach(c => {
    c.classList.remove('open');
  });
  document.querySelectorAll('.carousel-toggle-btn.active').forEach(b => {
    b.classList.remove('active');
  });

  // Abrir si estaba cerrado
  if (!isOpen) {
    container.classList.add('open');
    btn.classList.add('active');

    // Resetear posición al abrir
    const track = container.querySelector('.carousel-track');
    const id = track.id || 'default';
    const current = carouselState[id] || 0;
    // Usar setTimeout para que el DOM haya pintado el ancho real
    setTimeout(() => {
      applySlide(container, track, current);
      container.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 50);
  }
}

function applySlide(container, track, index) {
  const slideWidth = getSlideWidth(track);
  track.style.transform = `translateX(-${index * slideWidth}px)`;

  const counter = container.querySelector('.carousel-current');
  if (counter) counter.textContent = index + 1;

  container.querySelectorAll('.carousel-dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

function moveCarousel(btn, dir) {
  const container = btn.closest('.carousel-container');
  const track = container.querySelector('.carousel-track');
  const total = track.querySelectorAll('img').length;
  const id = track.id || 'default';

  if (carouselState[id] === undefined) carouselState[id] = 0;
  carouselState[id] = (carouselState[id] + dir + total) % total;

  applySlide(container, track, carouselState[id]);
}

function goToSlide(dot, index) {
  const container = dot.closest('.carousel-container');
  const track = container.querySelector('.carousel-track');
  const id = track.id || 'default';
  carouselState[id] = index;
  applySlide(container, track, index);
}

// Recalcular posición al hacer resize (por si cambia el ancho)
window.addEventListener('resize', () => {
  document.querySelectorAll('.carousel-container.open').forEach(container => {
    const track = container.querySelector('.carousel-track');
    const id = track.id || 'default';
    const current = carouselState[id] || 0;
    applySlide(container, track, current);
  });
});

// Navegar con teclado ← →
document.addEventListener('keydown', (e) => {
  const open = document.querySelector('.carousel-container.open');
  if (!open) return;
  if (e.key === 'ArrowLeft') moveCarousel(open.querySelector('.carousel-prev'), -1);
  if (e.key === 'ArrowRight') moveCarousel(open.querySelector('.carousel-next'), 1);
});
