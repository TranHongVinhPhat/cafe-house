//sidebar
function openRightMenu() {
    document.getElementById("rightMenu").style.display = "block";
}

function closeRightMenu() {
    document.getElementById("rightMenu").style.display = "none";
}
// carousel

$('.carousel-main').owlCarousel({
        items: 2,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        margin: -40,
        nav: true,
        dots: false,
        navText: ['', '<span  class="fas fa-arrow-right fa-2x";></span>'],
        // '<span class="fas fa-arrow-left fa-2x";></span>',
    })
    //