document.addEventListener("DOMContentLoaded", function () {
    const track = document.getElementById("servicesTrack");
    const next = document.querySelector(".carousel-arrow.next");
    const prev = document.querySelector(".carousel-arrow.prev");

    if (!track || !next || !prev) return;

    function getScrollAmount() {
        const card = track.querySelector(".service-slide");
        const gap = parseInt(getComputedStyle(track).gap) || 0;

        return card.offsetWidth + gap;
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