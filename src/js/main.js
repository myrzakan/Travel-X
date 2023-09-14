import mobileNav from "./module/mobile-nav"

mobileNav()


document.addEventListener("DOMContentLoaded", function () {
  var mySwiper = new Swiper(".swiper", {
    // Optional parameters
    // direction: "vertical",
    loop: true,
    parallax: true,
    speed: 1000,

    keyboard: {
      enabled: true
    },

    // If we need pagination
    pagination: {
      el: ".slider-controls__count",
      type: "fraction"
    },

    // Navigation arrows
    navigation: {
      nextEl: "#sliderNext",
      prevEl: "#sliderPrew",
    },

    // And if we need scrollbar
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });
});


