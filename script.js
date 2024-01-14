'use strict';

let score = 20;
let highscore = 0;
let secret_number = Math.trunc(Math.random() * 20) + 1;

const displayMessage = function(message) {
    document.querySelector(".message").textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // When there is no valid input
  if (!guess) {
    displayMessage('⛔ No Number!');
    // When player wins
  } else if (guess === secret_number) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secret_number;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = score;
    }
    // When guess is wrong
  } else if (guess !== secret_number) {
    // When player still has guesses left
    if (score > 1) {
      displayMessage(guess > secret_number ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
      // When player is out of guesses
    } else {
      displayMessage('💥 You lost the game!');
      document.querySelector(".score") = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secret_number = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});