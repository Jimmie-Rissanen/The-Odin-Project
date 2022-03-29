const chooseButton = document.querySelectorAll('.card');
chooseButton.forEach(button => button.addEventListener('click', playRound));

const displayResultArea = document.querySelector('.displayResultArea');

const gameStartButton = displayResultArea.querySelector('.gameStartButton');
gameStartButton.addEventListener('click', startTheGame);

const chooseArea = document.querySelector('.choose');

const header = document.querySelector('.header');

const headerText = document.querySelector('.heading');

const scoreBoard = displayResultArea.querySelector('.scoreBoard');

const yourScore = scoreBoard.querySelector('.yourScore').childNodes[3];
const computerScore = scoreBoard.querySelector('.computerScore').childNodes[3];

const playAgainButton = document.querySelector('.playAgainButton');
playAgainButton.addEventListener('click', newGame)


// Start Game and show score

function startTheGame(){
    headerText.classList.toggle('hide');
    mobileMoveButton();
    displayResult();
}

function displayResult(){
    if(!gameStartButton.classList.contains('hide')){
        gameStartButton.classList.toggle('hide');
        scoreBoard.classList.toggle('hide');
    }
}

function countScore(score){
    if(score === 1){
       yourScore.innerText = parseInt(yourScore.innerText) + 1;
    } else if(score === 0){
        computerScore.innerText = parseInt(computerScore.innerText) + 1;
    }
}

function playRound (e) {
    if(!gameStartButton.classList.contains('hide') || playAgainButton.classList.contains('hide')){
        const player = playerSelection(e);
        const computer = computerSelection();
        const result = evaluateWinner(player, computer);
        flashResultColor(result);
        countScore(result);
        displayWinner();
    }
}


// Show the winner in a header 

function displayWinner(){
    if(yourScore.innerText == 5){
        mobileMoveButton();
        createWinnerDiv('You won!');
    } else if (computerScore.innerText == 5){
        mobileMoveButton();
        createWinnerDiv('You Lost!');
    }
}


function createWinnerDiv(text){
    if(displayResultArea.contains(scoreBoard)){
        displayResultArea.removeChild(scoreBoard);
    }
    headerText.innerText = text;
    headerText.classList.toggle('hide');
    playAgainButton.classList.toggle('hide');
}

function newGame(){
    playAgainButton.classList.toggle('hide');
    headerText.classList.toggle('hide');
    mobileMoveButton();
    yourScore.innerText = 0;
    computerScore.innerText = 0;
    displayResultArea.appendChild(scoreBoard);
}

// Game logic. Player and computer selection

function computerSelection(){
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return "Rock";
    } else if (randomNumber === 1){
        return "Paper";
    } else {
        return "Scissors"
    }
}

function playerSelection(e) {
    return e.currentTarget.id;
}

function evaluateWinner(player, computer){
    switch (true) {
        case player == "Rock" && computer == "Scissors":
            return 1;
        case player == "Paper" && computer == "Rock":
            return 1;
        case player == "Scissors" && computer == "Paper":
            return 1; 
        case player == computer:
            return 2;
        default:
            return 0;
    }
}

// Utility functions

function toggleHide(theElement){
    theElement.classList.toggle('hide');
}

function mobileMoveButton(){
    if(window.innerWidth <= 700){
        chooseArea.classList.toggle('order');
    }
}

function flashResultColor(result){
    if(result === 0){
       delayToggle('redFlash')
    } else if(result === 1){
       delayToggle('greenFlash') 
    } else{
       delayToggle('evenFlash')
    }

}

function wait(milliSec){
    return new Promise(resolve => setTimeout(resolve, milliSec));
}

async function delayToggle(className){
    header.classList.toggle(className);
    await wait(250);
    header.classList.toggle(className);
}