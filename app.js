const BURGER = document.querySelector(".burger");
const NAV = document.querySelector(".header__container__nav");
const MENU_MOBILE = document.querySelector(".menu_mobile");
const MENU_DESK = document.getElementsByTagName("nav")[0];

window.addEventListener("DOMContentLoaded", function () {
    if (window.matchMedia('(max-device-width: 768px)').matches) {
        MENU_MOBILE.appendChild(NAV);
    }
    if (document.body.clientWidth <= 768) {
        MENU_MOBILE.appendChild(NAV);
    } else {
        MENU_DESK.appendChild(NAV);
    }
});

window.addEventListener("resize", function (e) {
    if (document.body.clientWidth <= 768) {
        MENU_MOBILE.appendChild(NAV);
    } else {
        MENU_DESK.appendChild(NAV);
    }
});

BURGER.addEventListener("click", function () {
    BURGER.classList.toggle("active");
    MENU_MOBILE.classList.toggle("active");
});