const chooseButton = document.querySelectorAll('.card');
const displayResultArea = document.querySelector('.displayResultArea');
chooseButton.forEach(button => button.addEventListener('click', startGame));

// Make a random output 
function computerPlay(){
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return "Rock";
    } else if (randomNumber === 1){
        return "Paper";
    } else {
        return "Scissors"
    }
}

function startGame(e){
        displayResultArea.textContent = '';
        const round = playRound(e.currentTarget.innerText, computerPlay());
        const result = document.createElement('p');
        displayResultArea.appendChild(result);
        result.innerText = round[0]
}

function countScore(score){
    
}

// Make one round and evaluate the winner and return an array with a message and a number for keeping score.

function playRound (playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();
    switch (true) {
        
        case player == "rock" && computer == "scissors":
            return [`You won! ${player} beats ${computer}.`, 1]; 

        case player == "paper" && computer == "rock":
            return [`You won! ${player} beats ${computer}.`, 1]; 

        case player == "scissors" && computer == "paper":
            return [`You won! ${player} beats ${computer}.`, 1]; 
        case player == computer:
            return [`That is a tie. ${player} against ${computer}.`, 2];
        default:
            return [`You lost! ${computer} beats ${player}!`, 0];
    }
}


