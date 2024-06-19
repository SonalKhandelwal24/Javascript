let randomNum = parseInt(Math.random() * 100 + 1);

const userInput = document.querySelector('#guessField');
const submit = document.querySelector('#subt');
const guessValues = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.msgLowOrHi');
const startOver = document.querySelector('.resultPara');

const p = document.createElement('p')

let preGuessArray = [];
let num_guess = 1;

let playGame = true;

//if playGame is true then submit the value of user input in guess and then use method validateGuess ---
if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();

        let guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    })
}

//check the guess values that values are correct or not, if value is between 1-100 then push the guess value array and check the no. of guesses is less than or greater than 10---
function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number');
    }
    else if(guess < 1){
        alert('Please enter number greater than zero');
    }
    else if(guess > 100){
        alert('Please enter number less than 100');
    }
    else{
        preGuessArray.push(guess);
        if(num_guess === 11){
            cleanDisplayGuess(guess);  
            displayMessage(`Game Over! Random number was ${randomNum}`);
            endGame();  
        }else{
            cleanDisplayGuess(guess);
            checkGuess(guess);
        }
    }
}

//check the guess value are equal, or not equal to random number and display the message---
function checkGuess(guess){
    if(guess === randomNum){
        displayMessage(`You guessed the right value`)
        endGame();
    }
    else if(guess < randomNum){
        displayMessage(`Number is too low`)
    }
    if(guess > randomNum){
        displayMessage(`Number is too high`)
    }    
}

//clean the userInput, and add the guess value in previous guess list and calculate the value of remaining that how many chances are remaining 
function cleanDisplayGuess(guess){
    userInput.value = '';
    guessValues.innerHTML += `${guess}, `;
    num_guess++;
    remaining.innerHTML = `${11 - num_guess}`;

}
//display the message---
function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}
//End the game---
function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled', '')
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}
function newGame(){
    //Start the game
    let newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function(e){
        randomNum = parseInt(Math.random() * 100 + 1);
        preGuessArray = [];
        num_guess = 1
        guessValues.innerHTML = '';
        remaining.innerHTML = `${11 - num_guess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        
        playGame = true;
    })
}