const choiseButtons = document.querySelectorAll('.card');
choiseButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        console.log(e.currentTarget.innerText);
    })
})
const startGameButton = document.querySelector('.startButton');
console.log(startGameButton)
startGameButton.addEventListener('click', (e) => game());

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

// Make one round and evalutate the winner and returns an array with a message and a number for keeping score.

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

// Make a game that is 5 rounds and return the winner.

function game () {
    let count = 0;
    let userPoints = 0;
    let computerPoints = 0;
    while (count < 5) {        
       // let userInput = ;
        let round = playRound(userInput, computerPlay());
        if (round[1] == 1) {
            userPoints++;
        } else if (round[1] == 0){
            computerPoints++;
        }
        console.log(round[0]);
        count ++;
    }
    console.log(`User: ${userPoints} Computer: ${computerPoints}`);
}


//game();
