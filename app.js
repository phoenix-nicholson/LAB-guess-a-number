// import functions and grab DOM elements
let randNum = (Math.floor(Math.random() * 20)) + 1;
const guessButton = document.getElementById('guess-btn');
const userGuess = document.getElementById('user-guess');
const reset = document.getElementById('reset');
const resultP = document.getElementById('result');
const numGuessSpan = document.getElementById('num-guess');

// initialize global state
let numGuesses = 4;
let result;


// set event listeners 
guessButton.addEventListener('click', ()=> {
  
    numGuesses--;
    const userGuessValue = Number(userGuess.value);
  
  
    if (userGuessValue === randNum) {
        result = "You're correct!";
        document.getElementById('guess-btn').disabled = true;
    } 

    else if (userGuessValue < randNum) {
        result = 'Guess Higher!';
    }

    else if (userGuessValue > randNum) {
        result = 'Guess Lower!';
    }

    if (numGuesses === 0){
        document.getElementById('guess-btn').disabled = true;
    }

    numGuessSpan.textContent = `${numGuesses}`;
    // console.log(guessButton, 'clicking');

    resultP.textContent = result;

    // console.log(randNum);
  

});

reset.addEventListener('click', ()=> {
    numGuesses = 4;
    guessButton.disabled = false;
    randNum = (Math.floor(Math.random() * 20)) + 1;
    // console.log(randNum);
    
});

  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
