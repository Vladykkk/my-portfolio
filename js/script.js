"use strict"

const header = document.querySelector(".header");
const burger = document.querySelector(".header__burger");
const menu = document.querySelector(".header__menu");
const list = document.querySelector(".header__list");
const logo = document.querySelector(".header__logo")
const moveLock = document.querySelector(".body");

const lastScrollY = window.scrollY;

// Close menu on icon
burger.onclick = function () {
	burger.classList.toggle("active");
	menu.classList.toggle("active");
	moveLock.classList.toggle("lock");
}

list.onclick = function () {
	list.classList.remove("active");
	moveLock.classList.toggle("lock");
}

logo.onclick = function () {
	moveLock.classList.remove("lock");
}

// Close menu on link click
document.querySelectorAll(".header__logo, .header__link").forEach(n => n.addEventListener("click", () => {
	burger.classList.remove("active");
	menu.classList.remove("active");
}));