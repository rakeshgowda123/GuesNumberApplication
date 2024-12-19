console.log('Hello!');
const randomNumber = parseInt(Math.random() * 10 + 1);
console.log(randomNumber);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessfield');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const startOver = document.querySelector('.resultParas');
const resetbut = document.querySelector('.reset');

const p = document.createElement('p');
const celebratepng = document.createElement('img');
let prevGuess = [];
let numGuess = 0;

let playGame = true;
if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid a Number');
  } else if (guess < 1) {
    alert('Please enter a valid a Number more than 1');
  } else if (guess > 10) {
    alert('Please enter a valid a Number less than 10');
  } else {
    prevGuess.push(guess);
    if (numGuess === 5) {
      displayGuess(guess);
      displayMessage(`Game Over,Random number was ${randomNumber} `);
      resetbut.style.display = 'block';
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
  //
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`Your gess was Right ${guess}`);
    endGame();
    resetbut.style.display = 'block';
    celebratepng.src =
      'https://i0.wp.com/justmaths.co.uk/wp-content/uploads/2016/10/celebration-gif.gif?ssl=1';

    celebratepng.style.width = '200px'; // Optional: Set width
    celebratepng.style.height = '200px'; // Optional: Set height
    startOver.appendChild(celebratepng);
  } else if (guess < randomNumber) {
    displayMessage(`Your gess was too low`);
  } else if (guess > randomNumber) {
    displayMessage(`Your gess was too high`);
  }
  //
}
function displayGuess(guess) {
  // userInput.value = '';
  guessSlot.innerHTML += `${guess} , `;
  numGuess++;
  remaining.innerHTML = `${6 - numGuess}`;
}
function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message} </h2>`;
}

//end game
resetbut.addEventListener('click', function (e) {
  if (numGuess === 1) {
    prevGuess.value = ' ';
    guessSlot.value = '';
    remaining.value = 5;
  }
});

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id ="newGame"> Start new Game </h2>`;
  startOver.append(p);
  playGame = false;
}
