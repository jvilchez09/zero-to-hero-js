'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '🎉Correcto number';

document.querySelector('.number').textContent = 13;

document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value = 23;
*/

const x = function () {
  console.log(document.querySelector('.guess').value);
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔No number';
  }
});

/**
 * Checkpoint vid #74
 */
