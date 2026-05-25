const frases = [
    "Desarrollador Backend en formación",
    "Apasionado por Java y Node.js",
    "Ing. Electrónico que ama el código",
    "Builder de APIs y sistemas"
];
let fIdx = 0, cIdx = 0, borr = false;
const tyEl = document.getElementById("typing");
 
function typeWriter() {
    const f = frases[fIdx];
    tyEl.textContent = borr ? f.substring(0, cIdx - 1) : f.substring(0, cIdx + 1);
    borr ? cIdx-- : cIdx++;
    if (!borr && cIdx === f.length) {
        borr = true;
        setTimeout(typeWriter, 2000);
        return;
    }
    if (borr && cIdx === 0) {
        borr = false;
        fIdx = (fIdx + 1) % frases.length;
    }
    setTimeout(typeWriter, borr ? 45 : 80);
}
typeWriter();
 
 
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            // Animar barras de habilidades cuando entran al viewport
            entry.target.querySelectorAll(".bar-fill").forEach(bar => {
                bar.style.width = bar.dataset.width;
            });
        }
    });
}, { threshold: 0.1 });
 
document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));
 
 

const navbar = document.getElementById("navbar");
 
window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 60);

    document.getElementById("scrollTop").classList.toggle("visible", window.scrollY > 400);
});
 
 

const sections = document.querySelectorAll("section[id]");
 
window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 120) current = s.id;
    });
    document.querySelectorAll(".nav-links a").forEach(a => {
        a.classList.toggle("active", a.getAttribute("href") === "#" + current);
    });
});
 
 

function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("open");
}
 

document.addEventListener("click", e => {
    if (!e.target.closest(".navbar")) {
        document.getElementById("navLinks").classList.remove("open");
    }
});
 
 

function handleSubmit(e) {
    e.preventDefault();
    const btn = e.target.querySelector("button");
    const fb  = document.getElementById("form-feedback");
 
    btn.disabled = true;
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Enviando...';
 

    setTimeout(() => {
        fb.textContent  = "✅ ¡Mensaje enviado! Te responderé a la brevedad.";
        fb.className    = "form-feedback success";
        btn.innerHTML   = '<i class="fa-solid fa-paper-plane"></i> Enviar mensaje';
        btn.disabled    = false;
        e.target.reset();
        setTimeout(() => { fb.textContent = ""; fb.className = "form-feedback"; }, 5000);
    }, 1500);
}