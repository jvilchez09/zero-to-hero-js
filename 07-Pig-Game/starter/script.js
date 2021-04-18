'use strict';

// selecting elements
const score0Element = document.querySelector('#score--0');
const score1Element = document.getElementById('score--1'); // faster when selecting a lot of elements
const diceELement = document.querySelector('.dice');

score0Element.textContent = 0;
score1Element.textContent = 0;
diceELement.classList.add('hidden');
