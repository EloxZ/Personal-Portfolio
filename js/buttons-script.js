let theme = "dark";
let language = "eng";

const localization = {
    "es": {
        "greeting" : "// Hola, soy Eloy.",
        "p1" : "Gracias por tomarte el tiempo de revisar mi portafolio. Como ingeniero de software junior, reconozco que tengo mucho que aprender, y siempre estoy trabajando para mejorar mis habilidades. Esta página contiene ejemplos de proyectos que demuestran mi pasión por la ingeniería de software y mi dedicación para convertirme en un mejor ingeniero.",
        "p2" : "Si bien mi portafolio puede no ser extenso, estoy entusiasmado por aprender y crecer en este campo. Creo que cada proyecto presenta una oportunidad para mejorar mi conocimiento y habilidades. Agradezco cualquier oportunidad de contribuir a proyectos del mundo real y aprender de profesionales experimentados.",
        "projects" : "// Mis <b>proyectos</b>",
        "in-progress" : "En progreso",
        "trivial-desc" : "Recreación del juego Trivial Pursuit con Pixi.JS y servicios Siette.",
        "chip8-desc" : "Emulador de Chip-8 desarrollado en C++.",
        "mylist-desc" : "Pequeña red social para compartir y listar tus medios de entretenimiento favoritos.",
        "techs" : "// Tecnologías con las que he <b>trabajado</b>",
        "home" : "Inicio",
        "portfolio" : "Portafolio",
        "contact" : "Contacto"
    },
    "eng": {
        "greeting" : "// Hello, I'm Eloy.",
        "p1" : "Thank you for taking the time to review my portfolio. As a junior software engineer, I recognize that I have much to learn, and I'm always working to improve my skills. This page contains examples of projects that demonstrate my passion for software engineering and my dedication to becoming a better engineer.",
        "p2" : "While my portfolio may not be extensive, I'm enthusiastic about learning and growing in this field. I believe that every project presents an opportunity to enhance my knowledge and skills. I'm grateful for any chance to contribute to real-world projects and learn from experienced professionals.",
        "projects" : "// My <b>projects</b>",
        "in-progress" : "In progress",
        "trivial-desc" : "Trivial Pursuit recreation with Pixi.JS and Siette services.",
        "chip8-desc" : "Chip-8 Emulator developed in C++.",
        "mylist-desc" : "Small social network to share and list your favourite entertainment media.",
        "techs": "// Technologies I've <b>worked</b> with",
        "home" : "Home",
        "portfolio" : "Portfolio",
        "contact" : "Contact"
    },
}

function toggleLanguage() {
    lang = (language == "eng")? "es" : "eng";
    changeLanguage(lang);
}

function changeLanguage(lang) {
    const flagIcon = document.getElementById("flag-icon");
    flagIcon.src = flagIcon.src.replace(language, lang);
    language = lang;
    const elements = document.querySelectorAll('[data-translation-key]');

  elements.forEach(element => {
    const key = element.dataset.translationKey;
    element.innerHTML = localization[lang][key];
  });
} 

function toggleTheme() {
    const lastTheme = theme;
    theme = (theme == "dark")? "light" : "dark";
    const invertValue = (theme == "dark")? 0 : 1;
    const iconString = (theme == "dark")? "moon" : "sun";

    const primaryColor = `var(--primary-${theme})`;
    const secondaryColor = `var(--secondary-${theme})`;
    const fontColor = `var(--font-color-${theme})`;
    const accentColor = `var(--accent-color-${theme})`;
    const backgroundImage = `var(--background-${theme})`;
    const flagIcon = document.getElementById("flag-icon");

    document.body.style.setProperty("--page-primary-color", primaryColor);
    document.body.style.setProperty("--page-secondary-color", secondaryColor);
    document.body.style.setProperty("--page-font-color", fontColor);
    document.body.style.setProperty("--page-accent-color", accentColor);
    document.body.style.setProperty("--page-background", backgroundImage);
    document.getElementById("shuttle-section").style.setProperty("filter",`invert(${invertValue})`);
    document.getElementById("theme-icon").className = `lnr lnr-${iconString}`;
    flagIcon.src = flagIcon.src.replace(lastTheme, theme);
}

