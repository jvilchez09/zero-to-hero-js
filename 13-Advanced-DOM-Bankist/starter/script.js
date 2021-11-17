'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

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

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

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
