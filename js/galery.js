
// const images = document.querySelectorAll(".card img");

// const lightbox = document.getElementById("lightbox");
// const lightboxImage = document.getElementById("lightboxImage");
// const closeLightbox = document.getElementById("closeLightbox");
// const prevImage = document.getElementById("prevImage");
// const nextImage = document.getElementById("nextImage");
// const lightboxCounter = document.getElementById("lightboxCounter");


// // VERIFICAÇÃO
// console.log("Imagens:", images.length);
// console.log("Lightbox:", lightbox);
// console.log("Imagem do Lightbox:", lightboxImage);
// console.log("Botão fechar:", closeLightbox);
// console.log("Botão anterior:", prevImage);
// console.log("Botão próximo:", nextImage);
// console.log("Contador:", lightboxCounter);


// // Índice da imagem atual
// let currentIndex = 0;


// // ABRIR LIGHTBOX
// function openLightbox(index) {

//     currentIndex = index;

//     updateLightbox();

//     lightbox.classList.add("active");

//     document.body.style.overflow = "hidden";
// }


// // ATUALIZAR IMAGEM
// function updateLightbox() {

//     const image = images[currentIndex];

//     lightboxImage.src = image.src;
//     lightboxImage.alt = image.alt;

//     lightboxCounter.textContent =
//         `${currentIndex + 1} / ${images.length}`;
// }


// // PRÓXIMA IMAGEM
// function showNext() {

//     currentIndex++;

//     if (currentIndex >= images.length) {
//         currentIndex = 0;
//     }

//     updateLightbox();
// }


// // IMAGEM ANTERIOR
// function showPrevious() {

//     currentIndex--;

//     if (currentIndex < 0) {
//         currentIndex = images.length - 1;
//     }

//     updateLightbox();
// }


// // CLIQUE NAS IMAGENS
// images.forEach((image, index) => {

//     image.addEventListener("click", () => {

//         openLightbox(index);

//     });

// });


// // BOTÃO PRÓXIMO
// nextImage.addEventListener("click", showNext);


// // BOTÃO ANTERIOR
// prevImage.addEventListener("click", showPrevious);


// // BOTÃO FECHAR
// closeLightbox.addEventListener("click", () => {

//     lightbox.classList.remove("active");

//     document.body.style.overflow = "";

// });


// // CLICAR FORA DA IMAGEM
// lightbox.addEventListener("click", (event) => {

//     if (event.target === lightbox) {

//         lightbox.classList.remove("active");

//         document.body.style.overflow = "";

//     }

// });


// // TECLADO
// document.addEventListener("keydown", (event) => {

//     if (!lightbox.classList.contains("active")) {
//         return;
//     }


//     // ESC
//     if (event.key === "Escape") {

//         lightbox.classList.remove("active");

//         document.body.style.overflow = "";

//     }


//     // SETA DIREITA
//     if (event.key === "ArrowRight") {

//         showNext();

//     }


//     // SETA ESQUERDA
//     if (event.key === "ArrowLeft") {

//         showPrevious();

//     }

// });


// console.log("JavaScript da galeria carregado!");


// ===============================
// ELEMENTOS
// ===============================




// ---********************************************************

// const galleryItems = document.querySelectorAll(".gallery-item");

// const lightbox = document.getElementById("lightbox");

// const lightboxMedia = document.getElementById("lightboxMedia");

// const closeLightbox = document.getElementById("closeLightbox");

// const prevImage = document.getElementById("prevImage");

// const nextImage = document.getElementById("nextImage");

// const lightboxCounter = document.getElementById("lightboxCounter");

// const lightboxTitle = document.getElementById("lightboxTitle");


// // ===============================
// // VARIÁVEL
// // ===============================

// let currentIndex = 0;


// // ===============================
// // ABRIR LIGHTBOX
// // ===============================

// function openLightbox(index) {

//     currentIndex = index;

//     updateLightbox();

//     lightbox.classList.add("active");

//     document.body.style.overflow = "hidden";
// }


// // ===============================
// // ATUALIZAR LIGHTBOX
// // ===============================

// function updateLightbox() {

//     // Limpa o conteúdo anterior
//     lightboxMedia.innerHTML = "";


//     const item = galleryItems[currentIndex];


//     // ===========================
//     // VERIFICA SE É VÍDEO
//     // ===========================

//     if (item.dataset.type === "video") {

//     const video = document.createElement("video");

//     video.src = item.dataset.src;

//     video.controls = true;
//     video.autoplay = true;
//     video.playsInline = true;
//     video.muted = true;

//     video.classList.add("lightbox-video");

//     lightboxMedia.appendChild(video);

//     video.play().catch(error => {
//         console.log("O navegador bloqueou o autoplay:", error);
//     });
// }


//     // ===========================
//     // SE FOR IMAGEM
//     // ===========================

//     else {

//         const image = document.createElement("img");

//         image.src = item.src;

//         image.alt = item.alt;

//         image.classList.add("lightbox-image");

//         lightboxMedia.appendChild(image);

//     }


//     // ===========================
//     // TÍTULO
//     // ===========================

//     lightboxTitle.textContent =
//         item.dataset.title || item.alt || "";


//     // ===========================
//     // CONTADOR
//     // ===========================

//     lightboxCounter.textContent =
//         `${currentIndex + 1} / ${galleryItems.length}`;
// }


// // ===============================
// // PRÓXIMO
// // ===============================

// function showNext() {

//     currentIndex++;

//     if (currentIndex >= galleryItems.length) {

//         currentIndex = 0;
//     }

//     updateLightbox();
// }


// // ===============================
// // ANTERIOR
// // ===============================

// function showPrevious() {

//     currentIndex--;

//     if (currentIndex < 0) {

//         currentIndex = galleryItems.length - 1;
//     }

//     updateLightbox();
// }


// // ===============================
// // CLIQUE NOS ITENS
// // ===============================

// galleryItems.forEach((item, index) => {

//     item.addEventListener("click", () => {

//         openLightbox(index);

//     });

// });


// // ===============================
// // BOTÃO PRÓXIMO
// // ===============================

// nextImage.addEventListener("click", showNext);


// // ===============================
// // BOTÃO ANTERIOR
// // ===============================

// prevImage.addEventListener("click", showPrevious);


// // ===============================
// // FECHAR
// // ===============================

// function closeLightboxFunction() {

//     lightbox.classList.remove("active");

//     document.body.style.overflow = "";

//     // Para o vídeo quando fechar
//     lightboxMedia.innerHTML = "";
// }


// closeLightbox.addEventListener(
//     "click",
//     closeLightboxFunction
// );


// // ===============================
// // CLICAR FORA
// // ===============================

// lightbox.addEventListener("click", (event) => {

//     if (event.target === lightbox) {

//         closeLightboxFunction();

//     }

// });


// // ===============================
// // TECLADO
// // ===============================

// document.addEventListener("keydown", (event) => {

//     if (!lightbox.classList.contains("active")) {

//         return;
//     }


//     // ESC
//     if (event.key === "Escape") {

//         closeLightboxFunction();

//     }


//     // DIREITA
//     if (event.key === "ArrowRight") {

//         showNext();

//     }


//     // ESQUERDA
//     if (event.key === "ArrowLeft") {

//         showPrevious();

//     }

// });








// -************************
console.log("JavaScript da galeria carregado!");


// ========================================
// ELEMENTOS
// ========================================

const galleryItems = document.querySelectorAll(".gallery-item");

const lightbox = document.getElementById("lightbox");

const lightboxMedia = document.getElementById("lightboxMedia");

const closeButton = document.getElementById("closeLightbox");

const prevButton = document.getElementById("prevImage");

const nextButton = document.getElementById("nextImage");

const lightboxCounter = document.getElementById("lightboxCounter");

const lightboxTitle = document.getElementById("lightboxTitle");

let currentIndex = 0;


// ========================================
// ABRIR LIGHTBOX
// ========================================

function openLightbox(index) {

    currentIndex = index;

    updateLightbox();

    lightbox.classList.add("active");

    document.body.style.overflow = "hidden";
}


// ========================================
// ATUALIZAR IMAGEM
// ========================================

function updateLightbox() {

    const item = galleryItems[currentIndex];

    if (!item) {
        return;
    }


    // Limpa o conteúdo anterior
    lightboxMedia.innerHTML = "";


    // Cria imagem
    const image = document.createElement("img");

    image.src = item.src;

    image.alt = item.alt || "";

    image.classList.add("lightbox-image");


    // Adiciona ao Lightbox
    lightboxMedia.appendChild(image);


    // Título
    lightboxTitle.textContent =
        item.dataset.title || item.alt || "";


    // Contador
    lightboxCounter.textContent =
        `${currentIndex + 1} / ${galleryItems.length}`;
}


// ========================================
// PRÓXIMA IMAGEM
// ========================================

function showNext() {

    currentIndex++;

    if (currentIndex >= galleryItems.length) {

        currentIndex = 0;

    }

    updateLightbox();
}


// ========================================
// IMAGEM ANTERIOR
// ========================================

function showPrevious() {

    currentIndex--;

    if (currentIndex < 0) {

        currentIndex = galleryItems.length - 1;

    }

    updateLightbox();
}


// ========================================
// CLIQUE NAS IMAGENS
// ========================================

galleryItems.forEach((item, index) => {

    item.addEventListener("click", () => {

        openLightbox(index);

    });

});


// ========================================
// BOTÃO PRÓXIMO
// ========================================

nextButton.addEventListener("click", (event) => {

    event.stopPropagation();

    showNext();

});


// ========================================
// BOTÃO ANTERIOR
// ========================================

prevButton.addEventListener("click", (event) => {

    event.stopPropagation();

    showPrevious();

});


// ========================================
// FECHAR LIGHTBOX
// ========================================

function closeLightbox() {

    lightbox.classList.remove("active");

    document.body.style.overflow = "";

    lightboxMedia.innerHTML = "";
}


closeButton.addEventListener("click", (event) => {

    event.stopPropagation();

    closeLightbox();

});


// ========================================
// CLICAR FORA DA IMAGEM
// ========================================

lightbox.addEventListener("click", (event) => {

    if (event.target === lightbox) {

        closeLightbox();

    }

});


// ========================================
// TECLADO
// ========================================

document.addEventListener("keydown", (event) => {

    if (!lightbox.classList.contains("active")) {

        return;

    }


    // ESC
    if (event.key === "Escape") {

        closeLightbox();

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