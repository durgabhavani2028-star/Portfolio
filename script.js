// ==============================
// TYPING EFFECT
// ==============================

const typingText = document.getElementById("typing");

const words = [
    "Web Developer",
    "Frontend Developer",
    "Creative Designer",
    "UI Enthusiast",
    "Problem Solver"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!isDeleting) {

        typingText.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        typingText.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            wordIndex++;

            if (wordIndex === words.length) {
                wordIndex = 0;
            }
        }
    }

    setTimeout(typeEffect, isDeleting ? 60 : 120);
}

typeEffect();


// ==============================
// RESUME MODAL
// ==============================

const modal = document.getElementById("resumeModal");
const openBtn = document.getElementById("openResume");
const closeBtn = document.querySelector(".close");

openBtn.addEventListener("click", () => {
    modal.style.display = "block";
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (e) => {

    if (e.target === modal) {
        modal.style.display = "none";
    }

});


// ==============================
// SCROLL REVEAL ANIMATION
// ==============================

const revealElements =
    document.querySelectorAll(
        ".section, .project-card, .skill-card, .glass-card, .certificate-card"
    );

function revealOnScroll() {

    revealElements.forEach(element => {

        const windowHeight = window.innerHeight;
        const revealTop =
            element.getBoundingClientRect().top;

        if (revealTop < windowHeight - 100) {

            element.classList.add("active");
        }

    });

}

window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();


// ==============================
// ACTIVE NAVBAR LINK
// ==============================

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.clientHeight;

        if (
            pageYOffset >= sectionTop
            &&
            pageYOffset <
            sectionTop + sectionHeight
        ) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href")
            ===
            "#" + current
        ) {
            link.classList.add("active");
        }

    });

});


// ==============================
// MOBILE MENU
// ==============================

const menuBtn =
    document.querySelector(".menu-btn");

const navMenu =
    document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    if (
        navMenu.style.display === "flex"
    ) {

        navMenu.style.display = "none";

    } else {

        navMenu.style.display = "flex";
        navMenu.style.flexDirection = "column";
        navMenu.style.position = "absolute";
        navMenu.style.top = "80px";
        navMenu.style.right = "20px";
        navMenu.style.background = "#112240";
        navMenu.style.padding = "20px";
        navMenu.style.borderRadius = "12px";
    }

});


// ==============================
// FLOATING PARTICLES
// ==============================

const particles =
    document.getElementById("particles");

for (let i = 0; i < 50; i++) {

    let particle =
        document.createElement("span");

    particle.style.position = "absolute";

    particle.style.width =
        Math.random() * 5 + 2 + "px";

    particle.style.height =
        particle.style.width;

    particle.style.background =
        "#64FFDA";

    particle.style.borderRadius =
        "50%";

    particle.style.left =
        Math.random() * 100 + "%";

    particle.style.top =
        Math.random() * 100 + "%";

    particle.style.opacity =
        Math.random();

    particle.style.animation =
        `float ${Math.random() * 10 + 5
        }s linear infinite`;

    particles.appendChild(
        particle
    );
}


// ==============================
// PARTICLE ANIMATION STYLE
// ==============================

const style =
    document.createElement("style");

style.innerHTML = `
@keyframes float {

0%{
transform:translateY(0);
opacity:0.2;
}

50%{
opacity:1;
}

100%{
transform:translateY(-100vh);
opacity:0;
}

}
`;

document.head.appendChild(style);


// ==============================
// SMOOTH FADE PAGE LOAD
// ==============================

window.addEventListener("load", () => {

    document.body.style.opacity = "0";

    setTimeout(() => {

        document.body.style.transition =
            "opacity 1s ease";

        document.body.style.opacity = "1";

    }, 100);

});
