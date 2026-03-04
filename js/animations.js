// Reveal on scroll
function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");
  reveals.forEach((el, i) => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 80) {
      setTimeout(() => el.classList.add("active"), i * 60);
    }
  });
}
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// Active nav link highlight on scroll
const sections = document.querySelectorAll("section[id], footer[id]");
const navLinks = document.querySelectorAll(".nav-links a");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 120) current = s.id;
  });
  navLinks.forEach(a => {
    const href = a.getAttribute("href");
    a.style.color = href === "#" + current ? "var(--accent)" : "";
  });
});

// Lang button active state
function updateLangButtons(lang) {
  document.getElementById("btn-es").classList.toggle("active", lang === "es");
  document.getElementById("btn-en").classList.toggle("active", lang === "en");
}

// Override setLanguage to also update buttons
const _originalSetLanguage = window.setLanguage;
document.addEventListener("DOMContentLoaded", () => {
  const originalSet = window.setLanguage;
  window.setLanguage = function(lang) {
    originalSet(lang);
    updateLangButtons(lang);
  };
  updateLangButtons("es");
});
