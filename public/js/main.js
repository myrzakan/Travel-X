!function(){"use strict";var __webpack_modules__={"./src/js/main.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module_mobile_nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/mobile-nav */ "./src/js/module/mobile-nav.js");\n\n\n(0,_module_mobile_nav__WEBPACK_IMPORTED_MODULE_0__["default"])()\n\n\ndocument.addEventListener("DOMContentLoaded", function () {\n  var mySwiper = new Swiper(".swiper", {\n    // Optional parameters\n    // direction: "vertical",\n    loop: true,\n    parallax: true,\n    speed: 1000,\n\n    keyboard: {\n      enabled: true\n    },\n\n    // If we need pagination\n    pagination: {\n      el: ".slider-controls__count",\n      type: "fraction"\n    },\n\n    // Navigation arrows\n    navigation: {\n      nextEl: "#sliderNext",\n      prevEl: "#sliderPrew",\n    },\n\n    // And if we need scrollbar\n    scrollbar: {\n      el: ".swiper-scrollbar",\n    },\n  });\n});\n\n\n\n\n//# sourceURL=webpack://gulp-starter/./src/js/main.js?')},"./src/js/module/mobile-nav.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval("__webpack_require__.r(__webpack_exports__);\nfunction mobileNav() {\n\tconst navBtnOpen = document.querySelector('#modalOpen');\n\tconst navBtnClose = document.querySelector('#modalClose');\n\n\tconst navOverlay = document.querySelector('#mobileNavOverlay');\n\tconst nav = document.querySelector('#mobileNav');\n\n\tnavBtnOpen.onclick = toggleMobileNav;\n\tnavBtnClose.onclick = toggleMobileNav;\n\tnavOverlay.onclick = toggleMobileNav;\n\n\tfunction toggleMobileNav() {\n\t\tnavOverlay.classList.toggle('mobile-nav-overlay--open');\n\t\tnav.classList.toggle('mobile-nav--open');\n\t\tdocument.body.classList.toggle('no-scroll');\n\t}\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (mobileNav);\n\n//# sourceURL=webpack://gulp-starter/./src/js/module/mobile-nav.js?")}},__webpack_module_cache__={};function __webpack_require__(e){var n=__webpack_module_cache__[e];if(void 0!==n)return n.exports;var _=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](_,_.exports,__webpack_require__),_.exports}__webpack_require__.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var __webpack_exports__=__webpack_require__("./src/js/main.js")}();