let header = document.querySelector(".header__inner");
let headerH = document.querySelector(".header__inner").clientHeight;

console.log(headerH);

document.onscroll = function () {
  let scroll = window.scrollY;
  if (scroll > headerH) {
    header.classList.add("header--fixed");
    document.body.style.paddingTop = headerH + "px";
  } else {
    header.classList.remove("header--fixed");
    document.body.removeAttribute("style");
  }
};

document.addEventListener("DOMContentLoaded", function () {
  const menuLinks = document.querySelectorAll(".menu__link");

  menuLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      // Удаляем класс "active" у всех ссылок
      menuLinks.forEach((item) => {
        item.classList.remove("active");
      });

      // Добавляем класс "active" к текущей кликнутой ссылке
      this.classList.add("active");
    });
  });
});
var mixer = mixitup(".popular__list, menu__list");
