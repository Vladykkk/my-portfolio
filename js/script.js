/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/modules/functions.js
// Перевірка підтримки webp, додавання класу webp або no-webp для HTML
function isWebp() {
	// Перевірка підтримки webp
	function testWebP(callback) {
		let webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}
	// Додавання класу _webp або _no-webp для HTML
	testWebP(function (support) {
		let className = support === true ? 'webp' : 'no-webp';
		document.documentElement.classList.add(className);
	});
}
;// CONCATENATED MODULE: ./src/js/script.js


isWebp();

// Main

// Variables
const header = document.querySelector(".header");

let burger = document.querySelector(".header__burger");
let menu = document.querySelector(".header__menu");
let list = document.querySelector(".header__list");
let logo = document.querySelector(".header__logo")
let moveLock = document.querySelector("body");
let lastScrollY = window.scrollY;

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
}))

// Menu dissapear when scrolling
window.addEventListener("scroll", () => {
	if (lastScrollY < window.scrollY) {
		header.classList.add("header--hidden");
	} else {
		header.classList.remove("header--hidden");
	}

	lastScrollY = window.scrollY;
});
/******/ })()
;