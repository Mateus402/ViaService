// 

console.log("JavaScript da galeria carregado!");

const images = document.querySelectorAll(".card img");

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const closeLightbox = document.getElementById("closeLightbox");
const prevImage = document.getElementById("prevImage");
const nextImage = document.getElementById("nextImage");
const lightboxCounter = document.getElementById("lightboxCounter");


// VERIFICAÇÃO
console.log("Imagens:", images.length);
console.log("Lightbox:", lightbox);
console.log("Imagem do Lightbox:", lightboxImage);
console.log("Botão fechar:", closeLightbox);
console.log("Botão anterior:", prevImage);
console.log("Botão próximo:", nextImage);
console.log("Contador:", lightboxCounter);


// Índice da imagem atual
let currentIndex = 0;


// ABRIR LIGHTBOX
function openLightbox(index) {

    currentIndex = index;

    updateLightbox();

    lightbox.classList.add("active");

    document.body.style.overflow = "hidden";
}


// ATUALIZAR IMAGEM
function updateLightbox() {

    const image = images[currentIndex];

    lightboxImage.src = image.src;
    lightboxImage.alt = image.alt;

    lightboxCounter.textContent =
        `${currentIndex + 1} / ${images.length}`;
}


// PRÓXIMA IMAGEM
function showNext() {

    currentIndex++;

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    updateLightbox();
}


// IMAGEM ANTERIOR
function showPrevious() {

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    updateLightbox();
}


// CLIQUE NAS IMAGENS
images.forEach((image, index) => {

    image.addEventListener("click", () => {

        openLightbox(index);

    });

});


// BOTÃO PRÓXIMO
nextImage.addEventListener("click", showNext);


// BOTÃO ANTERIOR
prevImage.addEventListener("click", showPrevious);


// BOTÃO FECHAR
closeLightbox.addEventListener("click", () => {

    lightbox.classList.remove("active");

    document.body.style.overflow = "";

});


// CLICAR FORA DA IMAGEM
lightbox.addEventListener("click", (event) => {

    if (event.target === lightbox) {

        lightbox.classList.remove("active");

        document.body.style.overflow = "";

    }

});


// TECLADO
document.addEventListener("keydown", (event) => {

    if (!lightbox.classList.contains("active")) {
        return;
    }


    // ESC
    if (event.key === "Escape") {

        lightbox.classList.remove("active");

        document.body.style.overflow = "";

    }


    // SETA DIREITA
    if (event.key === "ArrowRight") {

        showNext();

    }


    // SETA ESQUERDA
    if (event.key === "ArrowLeft") {

        showPrevious();

    }

});