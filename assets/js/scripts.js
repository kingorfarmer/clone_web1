$('.menu__topbar').click(function () {
    $('.menu__overlay').toggle();
    $('.slide__menu').toggle();
})

$('.close__menu').click(function () {
    $('.menu__overlay').hide();
    $('.slide__menu').hide();
})

$('.menu__items li:nth-child(3)').click(function () {
    $('.menu__items .about__menu').toggle();
})


// var slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }

// function showSlides(n) {
//     var i;
//     var slides = document.getElementsByClassName("mySlides");
//     var dots = document.getElementsByClassName("dot");
//     if (n > slides.length) { slideIndex = 1 }
//     if (n < 1) { slideIndex = slides.length }
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active__dot", "");
//     }
//     slides[slideIndex - 1].style.display = "block";
//     dots[slideIndex - 1].className += " active__dot";
// }