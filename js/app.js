const hamburger = document.querySelector(".bi-list");
const navMenu = document.querySelector(".navigation__hamburger__list");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    hamburger.classList.toggle("active");
});

$(document).ready(function() {
    $(".owl-carousel").owlCarousel();
});

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    dots: false,
    mouseDrag: false,
    navText: ["<div class='a'><i class='bi bi-arrow-left-circle'></i>", "<i class='bi bi-arrow-right-circle'></i></div>"],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 5
        },
        1000: {
            items: 9
        }
    }
})