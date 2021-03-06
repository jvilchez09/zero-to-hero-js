'use strict';
/*
console.log(document.querySelector('.message').textContent);



document.querySelector('.number').textContent = 13;

document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value = 23;
*/

/*

const x = function () {
  console.log(document.querySelector('.guess').value);
};


*/
/**
 * Checkpoint vid #74
 */

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //when there is no input
  if (!guess) {
    displayMessage('⛔No number');

    //when player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉Correcto number');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //when too high or too low
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? '📈Too high' : '📉Too low';
      displayMessage(guess > secretNumber ? '📈Too high' : '📉Too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      score--;
      displayMessage('💥You lost the game');
      document.querySelector('.score').textContent = score;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = null;
});

/**
 * Checkpoint vid #79
 */
