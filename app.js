// import functions and grab DOM elements
const randNum = (Math.floor(Math.random()*20)) + 1;
const guessButton = document.getElementById('guess-btn');
const userGuess = document.getElementById('user-guess').value;
const reset = document.getElementById('reset');
const resultP = document.getElementById('result');

// initialize global state
let numGuesses = 4;
let result;
// set event listeners 
guessButton.addEventListener('click', ()=> {
  numGuesses--;
  // console.log(numGuesses);
  
  
  if (userGuess === randNum) {
    result = "You're correct!"
  } 

  else if (userGuess < randNum) {
    result = 'Guess Higher!'
  }

  else if (userGuess > randNum) {
    result = 'Guess Lower!'
  }

  if (userGuess >3){
    document.getElementById('button').disabled = true;
  }

  


  resultP.textContent = result;

  console.log(userGuess);
  

});

  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
