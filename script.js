function setupNavigationButtons() {
    const botoes = document.querySelectorAll("nav ul li a");

    botoes.forEach((botao) => {
        botao.addEventListener("mouseover", () => {
            botao.classList.add("hovered");
        });

        botao.addEventListener("mouseout", () => {
            botao.classList.remove("hovered");
        });

        botao.addEventListener("click", () => {
            botao.classList.add("clicked");
            setTimeout(() => {
                botao.classList.remove("clicked");
            }, 100);
        });
    });
}


function animateElements() {
    const elementos = document.querySelectorAll(".hero h2, .hero p, .robot-item, .content h2, .content p, .content article");

    elementos.forEach((elemento) => {
        elemento.classList.add("hidden");
        setTimeout(() => {
            elemento.classList.remove("hidden");
        }, 500);
    });
}

function setupHeaderTitleGlitch() {
    const titulo = document.querySelector("header h1");

    titulo.addEventListener("mouseover", () => {
        titulo.classList.add("glitch");
    });

    titulo.addEventListener("mouseout", () => {
        titulo.classList.remove("glitch");
    });
}

function setup3DButtonEffect() {
    const btn3d = document.querySelector(".btn-3d");

    if (btn3d) {
        btn3d.addEventListener("mouseover", () => {
            btn3d.classList.add("btn-3d-hover");
        });

        btn3d.addEventListener("mouseout", () => {
            btn3d.classList.remove("btn-3d-hover");
        });

        btn3d.addEventListener("mousedown", () => {
            btn3d.classList.add("btn-3d-active");
        });

        btn3d.addEventListener("mouseup", () => {
            btn3d.classList.remove("btn-3d-active");
        });
    }
}

document.addEventListener("DOMContentLoaded", () => {
    setupNavigationButtons();
    animateElements();
    setupHeaderTitleGlitch();
    setup3DButtonEffect();
});

