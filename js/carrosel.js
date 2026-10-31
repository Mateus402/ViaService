document.addEventListener("DOMContentLoaded", function () {

    const track = document.getElementById("servicesTrack");
    const next = document.querySelector(".services-carousel .next");
    const prev = document.querySelector(".services-carousel .prev");

    if (!track || !next || !prev) {
        console.error("Elementos do carrossel não encontrados.");
        return;
    }

    function getScrollAmount() {
        const card = track.querySelector(".service-slide");
        const gap = parseFloat(getComputedStyle(track).gap) || 0;

        return card.getBoundingClientRect().width + gap;
    }

    next.addEventListener("click", function () {
        track.scrollBy({
            left: getScrollAmount(),
            behavior: "smooth"
        });
    });

    prev.addEventListener("click", function () {
        track.scrollBy({
            left: -getScrollAmount(),
            behavior: "smooth"
        });
    });

});