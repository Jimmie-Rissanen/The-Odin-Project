const chooseButton = document.querySelectorAll('.card');
chooseButton.forEach(button => button.addEventListener('click', playRound));

const displayResultArea = document.querySelector('.displayResultArea');

const gameStartButton = displayResultArea.querySelector('.gameStartButton');
gameStartButton.addEventListener('click', startTheGame);

const scoreBoard = displayResultArea.querySelector('.scoreBoard');

const yourScore = scoreBoard.querySelector('.yourScore').childNodes[3];
const computerScore = scoreBoard.querySelector('.computerScore').childNodes[3];

const winner = document.createElement('h2');
const playAgainButton = document.createElement('button');
playAgainButton.classList.add('gameButton');
playAgainButton.addEventListener('click', newGame)

function startTheGame(){
    displayResult();
}

function displayResult(){
    if(displayResultArea.contains(gameStartButton)){
        displayResultArea.removeChild(gameStartButton);
        scoreBoard.removeAttribute('hidden');
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
    if(scoreBoard.hidden === false){
        const player = playerSelection(e);
        const computer = computerSelection();
        const result = evaluateWinner(player, computer);
        countScore(result);
        displayWinner();
    }
}

function displayWinner(){
    if(yourScore.innerText == 5){
        createWinnerDiv('You won!');
    } else if (computerScore.innerText == 5){
        createWinnerDiv('The computer won!');
    }
}

function createWinnerDiv(winnerText){
    if(displayResultArea.contains(scoreBoard)){
        displayResultArea.removeChild(scoreBoard);
    }
    winner.innerText = winnerText;
    displayResultArea.appendChild(winner);
    playAgainButton.innerText = 'Play another round?';
    displayResultArea.appendChild(playAgainButton);
}

function newGame(){
    displayResultArea.removeChild(playAgainButton);
    displayResultArea.removeChild(winner);
    yourScore.innerText = 0;
    computerScore.innerText = 0;
    displayResultArea.appendChild(scoreBoard);
}

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


