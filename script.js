"use strict";

// SELECTIONS

const leftNavEl = document.querySelector(`.left-nav`);

const accordionEl = document.querySelector(`.accordion`);

const contentSectionEl = document.querySelector(`.content-section`);

const iconMobileNavEl = document.querySelector(`.icon-mobile-nav`);

const navigationEl = document.querySelector(`.navigation`);

const navItemEl = document.querySelector(`.nav-item`);

// EVENT HANDLERS

leftNavEl.addEventListener(`click`, function (e) {
  if (e.target.classList.contains(`title`)) {
    e.target.parentNode.classList.toggle(`open`);
  }
});
leftNavEl.addEventListener(`click`, function (e) {
  if (
    e.target.classList.contains(`title-inner`) ||
    e.target.classList.contains(`fa-solid`)
  ) {
    e.target.parentNode.parentNode.classList.toggle(`open`);
  }
});

iconMobileNavEl.addEventListener(`click`, function () {
  contentSectionEl.classList.toggle(`content-section-width`);
  leftNavEl.classList.toggle(`active`);
});
