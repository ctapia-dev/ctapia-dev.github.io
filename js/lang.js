const translations = {
  es: {
    // nav
    nav_about: "Sobre mí",
    nav_skills: "Stack",
    nav_projects: "Proyectos",
    nav_experience: "Experiencia",
    nav_certifications: "Certs",
    nav_contact: "Contacto",

    // hero
    hero_tag: "Disponible para nuevas oportunidades",
    hero_role: "Full Stack · Backend · DevOps",
    hero_subtitle: "Ingeniera en Computación e Informática. Viña del Mar, Chile.",
    btn_cv: "Descargar CV",
    stat_tech: "Tecnologías",
    stat_projects: "Proyectos",
    stat_certs: "Certificaciones",

    // about
    about_title: "Sobre mí",
    about_text: "Ingeniera en Computación e Informática con experiencia en desarrollo de software, monitoreo de infraestructura y administración de bases de datos. Me especializo en construir soluciones eficientes integrando buenas prácticas de ciberseguridad, accesibilidad y trabajo colaborativo. He trabajado con entornos Linux, herramientas de observabilidad y metodologías ágiles, aportando valor tanto en desarrollo como en operaciones.",
    about_card1_title: "Formación",
    about_card1_body: "Ing. en Computación e Informática — UNAB, 2020–2025",
    about_card2_title: "Ubicación",
    about_card2_body: "Viña del Mar, Chile — abierta a trabajo remoto",
    about_card3_title: "Idiomas",
    about_card3_body: "Español (nativo) · Inglés (intermedio)",

    // skills
    skills_title: "Habilidades",
    skills_languages: "Lenguajes",
    skills_frontend: "Frontend",
    skills_backend: "Backend",
    skills_database: "Bases de Datos",
    skills_tools: "DevOps & Tools",
    skills_monitoring: "Monitoreo & Datos",

    // projects
    projects_title: "Proyectos",
    project_selfteach: "Aplicación móvil para Android, orientada a la inclusión para las personas con Autismo y Cuidadores, diseñada para ofrecer estrategias de gestión emocional, recursos educativos que facilita la comprensión y la inclusión hasta una comunidad para compartir experiencias, obtener consejos y acceder a recursos valiosos que mejorarán su calidad de vida. Proyecto realizado para Proyecto de Título utilizando metodología Scrum.",
    project_vconnect: "App Android de reporte de incidentes en tiempo real. Rol: Project Manager & Scrum Master — gestioné epics, historias de usuario y seguimiento en Jira, documentación técnica en Confluence y generación de burndown charts del sprint.",
    project_cluster: "Solución escalable con MongoDB distribuido, evaluando estrategias de sharding y replicación para Big Data.",
    project_blog_title: "Blog Tecnologías Disruptivas",
    project_blog: "Divulgación técnica sobre Blockchain, NFT, VR e Impresión 3D. Gestión de CMS y comunicación técnica.",

    // experience
    experience_title: "Experiencia",
    exp_role: "Practicante — Desarrollo y Monitoreo",
    exp_bullet1: "Implementé dashboards con Grafana y Prometheus, mejorando visibilidad del sistema y reduciendo tiempo de detección de incidentes.",
    exp_bullet2: "Automaticé la generación de reportes de métricas semanales, eliminando un proceso manual.",
    exp_bullet3: "Soporte en entornos Linux con buenas prácticas de seguridad y disponibilidad.",
    exp_bullet4: "Metodología Scrum con Jira y Confluence, participando en planificación de sprints y revisiones de equipo.",

    // certifications
    certifications_title: "Certificaciones",

    // contact
    contact_title: "Contacto",
    contact_desc: "Abierta a nuevas oportunidades laborales, proyectos freelance o simplemente conectar con personas del mundo tech. ¡No dudes en escribirme!"
  },

  en: {
    // nav
    nav_about: "About",
    nav_skills: "Stack",
    nav_projects: "Projects",
    nav_experience: "Experience",
    nav_certifications: "Certs",
    nav_contact: "Contact",

    // hero
    hero_tag: "Open to new opportunities",
    hero_role: "Full Stack · Backend · DevOps",
    hero_subtitle: "Computer and Informatics Engineer. Viña del Mar, Chile.",
    btn_cv: "Download CV",
    stat_tech: "Technologies",
    stat_projects: "Projects",
    stat_certs: "Certifications",

    // about
    about_title: "About Me",
    about_text: "Computer and Informatics Engineer with experience in software development, infrastructure monitoring, and database administration. I specialize in building efficient solutions integrating cybersecurity best practices, accessibility, and collaborative workflows. Experienced in Linux environments, observability tools, and agile methodologies.",
    about_card1_title: "Education",
    about_card1_body: "Computer & Informatics Engineering — UNAB, 2020–2025",
    about_card2_title: "Location",
    about_card2_body: "Viña del Mar, Chile — open to remote work",
    about_card3_title: "Languages",
    about_card3_body: "Spanish (native) · English (intermediate)",

    // skills
    skills_title: "Skills",
    skills_languages: "Languages",
    skills_frontend: "Frontend",
    skills_backend: "Backend",
    skills_database: "Databases",
    skills_tools: "DevOps & Tools",
    skills_monitoring: "Monitoring & Data",

    // projects
    projects_title: "Projects",
    project_selfteach: "Android mobile app focused on inclusion for people with Autism and Caregivers. Offers emotional management strategies, educational resources, and a community to share experiences and access resources that improve quality of life. Thesis project developed with Scrum methodology.",
    project_vconnect: "Android real-time incident reporting app. Role: Project Manager & Scrum Master — managed epics, user stories and task tracking in Jira, technical documentation in Confluence, and sprint burndown chart reporting.",
    project_cluster: "Scalable solution with distributed MongoDB, evaluating sharding and replication strategies for Big Data.",
    project_blog_title: "Disruptive Technologies Blog",
    project_blog: "Technical content about Blockchain, NFT, VR and 3D Printing. CMS management and technical communication.",

    // experience
    experience_title: "Experience",
    exp_role: "Professional Intern — Development & Monitoring",
    exp_bullet1: "Built infrastructure dashboards with Grafana and Prometheus, improving system visibility and reducing incident detection time.",
    exp_bullet2: "Automated weekly metrics report generation, replacing a manual process.",
    exp_bullet3: "System support in Linux environments applying security and availability best practices.",
    exp_bullet4: "Scrum methodology with Jira and Confluence, participating in sprint planning and team reviews.",

    // certifications
    certifications_title: "Certifications",

    // contact
    contact_title: "Contact",
    contact_desc: "Open to job opportunities, freelance projects, or simply connecting with people in tech. Feel free to reach out!"
  }
};

function setLanguage(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key] !== undefined) {
      el.textContent = translations[lang][key];
    }
  });
}

setLanguage("es");
