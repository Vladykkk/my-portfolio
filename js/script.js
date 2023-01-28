"use strict"

const header = document.querySelector(".header");
const burger = document.querySelector(".header__burger");
const menu = document.querySelector(".header__menu");
const list = document.querySelector(".header__list");
const logo = document.querySelector(".header__logo")
const moveLock = document.querySelector(".body");

let isMenuOpen = false;

// Close menu on icon
burger.addEventListener("click", function () {
	burger.classList.toggle("active");
	menu.classList.toggle("active");
	moveLock.classList.toggle("lock", !isMenuOpen);
	isMenuOpen = !isMenuOpen;
});

// Close menu on link click
document.querySelectorAll(".header__logo, .header__link").forEach(n => n.addEventListener("click", () => {
	burger.classList.remove("active");
	menu.classList.remove("active");
	moveLock.classList.remove("lock");
	isMenuOpen = false;
}));

logo.addEventListener("click", function () {
	moveLock.classList.remove("lock");
	isMenuOpen = false;
});