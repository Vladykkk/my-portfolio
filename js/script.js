/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
let burger = document.querySelector(".header__burger");
let menu = document.querySelector(".header__menu");
let list = document.querySelector(".header__list");
let logo = document.querySelector(".header__logo")
let moveLock = document.querySelector("body");

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
/******/ })()
;