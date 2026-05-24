document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('back-to-top');
    button.style.display = 'none';

    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            button.style.display = 'flex';
        } else {
            button.style.display = 'none';
        }
    });

    button.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

});