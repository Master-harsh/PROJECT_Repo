console.log(parseInt(Math.random()*10 + 10));

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrhigh = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if(playGame){
    submit.addEventListener("click", function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if (isNaN(guess)) {
        alert("please enter a valid number.")
    } else if(guess < 1){
        alert("Please enter a number greater than 100.")
    } else if(guess > 100){
        alert("Please enter a number less than 100.")
    } else {
        prevGuess.push(guess)
        if (numGuess === 11) {
            displayGuess(guess);
            displayMessage(`Game over, Random number was ${randomNumber}`);
            EndGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    if (guess === randomNumber) {
        displayMessage(`You guessed right`);
        EndGame();
    } else if(guess < randomNumber){
        displayMessage('Number is Too low');
    } else if(guess > randomNumber) {
        displayMessage("Number is TOOO high");
    }
}

function displayGuess(guess){
    userInput.value = '';
    guessSlot.innerHTML += `${guess} `
    numGuess++;
    remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message){
    lowOrhigh.innerHTML = `<h2>${message}</h2>`;

}

function NewGame(){
    const newGameButton = document.querySelector("#newGame");
    newGameButton.addEventListener('click', function(e) {
        
    });
}

function EndGame(){
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h1 id="newGame">Start new game</h1>`;
    startOver.appendChild(p);
    playGame = false;
    NewGame();
}