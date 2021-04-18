'use strict';

// selecting elements
const score0Element = document.querySelector('#score--0');
const current0Element = document.getElementById('current--0');
const score1Element = document.getElementById('score--1'); // faster when selecting a lot of elements
const diceELement = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
let currentScore = 0;

score0Element.textContent = 0;
score1Element.textContent = 0;
diceELement.classList.add('hidden');

//rolling dice functions
btnRoll.addEventListener('click', function () {
  //random rumber between 1-6
  const dice = Math.trunc(Math.random() * 6) + 1;

  //display dice
  diceELement.classList.remove('hidden');
  diceELement.src = `dice-${dice}.png`;

  //check roll 1
  if (dice !== 1) {
    // add current score
    currentScore += dice;
    current0Element.textContent = currentScore;
  }
});
