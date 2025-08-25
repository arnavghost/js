// Generate a random number between 1 and 100
let randomNumber = parseInt(Math.random() * 100 + 1);

// Get references to the important elements from the HTML
const submit = document.querySelector('#subt');      // submit button
const userInput = document.querySelector('#guessField'); // input box for user guess
const guessSlot = document.querySelector('.guesses');    // area to display previous guesses
const remaining = document.querySelector('.lastResult'); // area to show remaining attempts
const lowOrHi = document.querySelector('.lowOrHi');      // area to show "too high/too low" messages
const startOver = document.querySelector('.resultParas'); // container for new game button

// Create a paragraph element for the "New Game" button later
const p = document.createElement('p');

// Track guesses
let prevGuess = []; // stores all previous guesses
let numGuess = 1;   // start counting guesses
let playGame = true; // game state flag

// If game is active, listen for the submit button click
if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault(); // stop page refresh
    const guess = parseInt(userInput.value); // get the user's guess as a number
    console.log(guess); // debug log
    validateGuess(guess); // check if guess is valid
  });
}

// Validate user input
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1) {
    alert('Please enter a number more than 1');
  } else if (guess > 100) {
    alert('Please enter a number less than 100');
  } else {
    // if guess is valid, store it
    prevGuess.push(guess);

    // Check if max attempts (10) reached
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame(); // stop game
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

// Compare guess with random number
function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`🎉 You guessed it right!`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOO low ⬇️`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOO high ⬆️`);
  }
}

// Show guesses and remaining attempts
function displayGuess(guess) {
  userInput.value = ''; // clear input box
  guessSlot.innerHTML += `${guess}, `; // add guess to list
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `; // update remaining chances
}

// Show hint or win/lose message
function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

// End the game
function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', ''); // disable input
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`; // add new game button
  startOver.appendChild(p); // add button to DOM
  playGame = false; // stop current game
  newGame(); // set up new game listener
}

// Restart the game
function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1); // new random number
    prevGuess = []; // reset guesses
    numGuess = 1;   // reset counter
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled'); // enable input
    startOver.removeChild(p); // remove "new game" button
    playGame = true; // set game back to active
  });
}
