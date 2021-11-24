'use strict';

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const nav = document.querySelector('.nav');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Button scrolling
btnScrollTo.addEventListener('click', function (e) {
  //element we want to do scroll
  const s1coords = section1.getBoundingClientRect();
  console.log('s1coords', s1coords);
  //element we click to scroll
  console.log('boton que hace scroll', e.target.getBoundingClientRect());

  console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);

  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );
  // top is always relative to the viewport top when used in s1coords.top
  // Scrolling
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset

  // );
  //old school
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });
  //modern way
  section1.scrollIntoView({ behavior: 'smooth' });
});

/// page navigation

// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

/**
 * Event delegation
 */

//add event listener to common parent

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  //match strategy
  if (e.target.classList.contains('nav__link')) {
    console.log('LINK');
    console.log(e.target);

    const id = e.target.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

//tabbed component
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  console.log(clicked);

  //guard clause
  if (!clicked) return;

  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');

  tabsContent.forEach(c => c.classList.remove('operations__content--active'));
  //active content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

//menu fade animationn
const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el != link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};
//passingh argument into handler
nav.addEventListener('mouseover', handleHover.bind(0.5));

nav.addEventListener('mouseout', handleHover.bind(1));

console.log('---selecting elements---*-*-*-*-');
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
document.querySelectorAll('section--1'); //nodelist

document.getElementById('section--1');
const allbuttons = document.getElementsByTagName('button'); //html collection---it gets updated automatically
console.log(allbuttons);

console.log(document.getElementsByClassName('btn')); //returns a html collection

// creating and inserting elements
// .incertadjacentHYML

const message = document.createElement('div');

message.classList.add('cookie-message');
// message.textContent = 'se use cookies for bla bla';
message.innerHTML =
  'se use cookies for bla bla <button class="btn btn--close-cookie">vale</button>';

header.prepend(message);

// header.append(message.cloneNode(true));

header.before(message);
header.after(message);

/**
 * Delete elements
 */

document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
  });

/**
 * STyles
 */

//styles

message.style.backgroundColor = '#37383d';

console.log(message.style.backgroundColor);

console.log(getComputedStyle(message).color);

console.log(message);

const height = (message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px');

console.log(getComputedStyle(message).height);
console.log(height);

document.documentElement.style.setProperty('--color-primary', 'orangered');

//attributes
//standar
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);
//nonstandard
console.log(logo.deigner);

console.log(logo.getAttribute('designer'));
console.log(logo.setAttribute('Copmp', 'Bankist'));

const link = document.querySelector('.nav__link--btn');
console.log(link.href); //absolute path
console.log(link.getAttribute('href')); //as in html

//data attributes
console.log(logo.dataset.versionNumber);

// Classes
logo.classList.add('c', 'j');
logo.classList.remove('c', 'j');
logo.classList.toggle('c');
logo.classList.contains('c'); // not includes

const h1 = document.querySelector('h1');

const alertH1 = function (e) {
  alert('u reading heading');

  h1.removeEventListener('mouseenter', alertH1);
};

h1.addEventListener('mouseenter', alertH1);
/**
 *
 * Old school
 */
// h1.onmouseenter = function (e) {
//   alert('u reading heading');
// };

/**
 * Bubbleling in practice
 */
/*
// rgb(255,255,255)
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
console.log(randomColor());

document.querySelector('.nav__link').addEventListener('click', function (e) {
  console.log('Link', e.target, e.currentTarget);
  this.style.backgroundColor = randomColor();

  //stop propagation
  // e.stopPropagation(); //not a good idea in practice
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  console.log('Container', e.target, e.currentTarget);
  this.style.backgroundColor = randomColor();
});

document.querySelector('.nav').addEventListener(
  'click',
  function (e) {
    console.log('Nav', e.target, e.currentTarget);
    this.style.backgroundColor = randomColor();
  },
  true // hace que sea capture primero, no en el bubbleing face sino en la propagacion
);
*/

/**
 * DOM Traversion
 */

//going downward: child
console.log(h1.childNodes);
console.log(h1.children);
h1.firstElementChild.style.color = 'white';

//going upwards: parents

console.log(h1.parentNode);

h1.closest('.header').style.background = 'var(--gradient-secondary)';

//going sidewards: siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children);

/**
 * passing event handlers
 */
