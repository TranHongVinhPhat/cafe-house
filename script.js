// sidebar
$(document).ready(function() {
    $("#sidebar").mCustomScrollbar({
        theme: "minimal"
    });

    $('#dismiss, .overlay').on('click', function() {
        $('#sidebar').removeClass('active');
        $('.overlay').removeClass('active');
    });

    $('#si').on('click', function() {
        $('#sidebar').addClass('active');
        $('.overlay').addClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });
});


// carousel
//car 1
$(document).ready(function() {
    $(".carousel-main").owlCarousel({
        items: 2,
        navigation: true,
        navigationText: ['<span class="fas fa-arrow-left fa-2x";></span>', '<span  class="fas fa-arrow-right fa-2x";></span>'],
        autoPlay: true,
        autoplayTimeout: 5000,


    });
});
//car 2

$(document).ready(function() {
    $("#carousel-main").owlCarousel({
        items: 3,
        navigation: true,
        navigationText: ['<i class="fas fa-arrow-left fa-2x";></i>', '<i  class="fas fa-arrow-right fa-2x";></i>'],
        autoPlay: true,

    });
});

//tap
const baoquan = document.querySelector(".baoquan")
const chitiet = document.querySelector(".chitiet")
const hang = document.querySelector(".hang")
if (chitiet) {
    chitiet.addEventListener("click", function() {
        document.querySelector(".khung").style.display = "block"
        document.querySelector(".khung1").style.display = "none"
        document.querySelector(".khung2").style.display = "none"
    })
}
if (baoquan) {
    baoquan.addEventListener("click", function() {
        document.querySelector(".khung").style.display = "none"
        document.querySelector(".khung1").style.display = "block"
        document.querySelector(".khung2").style.display = "none"
    })
}

if (hang) {
    hang.addEventListener("click", function() {
        document.querySelector(".khung").style.display = "none"
        document.querySelector(".khung1").style.display = "none"
        document.querySelector(".khung2").style.display = "block"
    })
}
$(function() {
    var $button = $(".toanbotap button");
    $button.click(function() {
        $button.removeClass("active");
        $(this).addClass("active");
    });
});