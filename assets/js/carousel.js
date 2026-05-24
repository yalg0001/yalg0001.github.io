document.addEventListener('DOMContentLoaded', function() {
    var splide = new Splide('.splide', {
        type: 'loop',
        perPage: 1,
        perMove: 1,
        gap: '2rem',
        padding: '10%',
        autoplay: true,
        interval: 7000,
        pauseOnHover: true,
    });
    splide.mount();
});