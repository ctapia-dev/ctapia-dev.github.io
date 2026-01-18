const translations = {
  es: {
    name: "Constanza Tapia",
    role: "Ingeniera en Computación e Informática",

    btn_cv: "Descargar CV",

    about_title: "Sobre mí",
    about_text:
      "Ingeniera en Computación e Informática con experiencia en desarrollo de software, monitoreo de infraestructura y administración de bases de datos. Me especializo en construir soluciones eficientes y escalables, integrando buenas prácticas de ciberseguridad, accesibilidad y trabajo colaborativo. He trabajado con entornos Linux, herramientas de observabilidad y metodologías ágiles, aportando valor tanto en etapas de desarrollo como de operación.",

    projects_title: "Proyectos",
    project_selfteach:
      "Aplicación móvil Android orientada a la inclusión, desarrollada con enfoque en accesibilidad y metodologías ágiles.",
    project_vconnect:
      "Sistema de reporte de incidentes en tiempo real, gestionado con Jira y GitHub, aplicando principios de ciberseguridad.",
    project_cluster:
      "Desarrollo de una solución escalable con bases de datos distribuidas, orientada a entornos Big Data.",

    skills_title: "Habilidades",

    experience_title: "Experiencia",
    experience_text:
      "Practicante Profesional en Vanda (2024), apoyando el monitoreo de sistemas, generación de métricas e implementación de dashboards para la gestión de infraestructura, con enfoque en seguridad y disponibilidad.",

    certifications_title: "Certificaciones",

    contact_title: "Contacto"
  },

  en: {
    name: "Constanza Tapia",
    role: "Computer and Informatics Engineer",

    btn_cv: "Download CV",

    about_title: "About Me",
    about_text:
      "Computer and Informatics Engineer with experience in software development, infrastructure monitoring, and database administration. Specialized in building efficient and scalable solutions, integrating cybersecurity best practices, accessibility, and collaborative workflows. Experienced in Linux environments, observability tools, and agile methodologies, contributing value across both development and operational stages.",

    projects_title: "Projects",
    project_selfteach:
      "Android mobile application focused on inclusion, developed with accessibility principles and agile methodologies.",
    project_vconnect:
      "Real-time incident reporting system, managed with Jira and GitHub, applying cybersecurity best practices.",
    project_cluster:
      "Development of a scalable solution using distributed databases, oriented toward Big Data environments.",

    skills_title: "Skills",

    experience_title: "Experience",
    experience_text:
      "Professional Intern at Vanda (2024), supporting system monitoring, metrics generation, and infrastructure dashboard implementation with a focus on security and availability.",

    certifications_title: "Certifications",

    contact_title: "Contact"
  }
};

function setLanguage(lang) {
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.getAttribute("data-i18n");
    element.textContent = translations[lang][key];
  });
}

// Idioma por defecto
setLanguage("es");
