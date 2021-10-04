// Make a random output 
function computerPlay(){
    let randomNumber = Math.floor(Math.random() * 10 - 2);
    if (randomNumber < 3) {
        return "Rock";
    } else if (randomNumber < 6){
        return "Paper";
    } else {
        return "Scissors"
    }
}

// Make one round and evalutate the winner.

function playRound (playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();

    switch (true) {
        
        case player == "rock" && computer == "scissors":
            return `You won! ${player} beats ${computer}.`; 

        case player == "paper" && computer == "rock":
            return `You won! ${player} beats ${computer}.`; 

        case player == "scissors" && computer == "paper":
            return `You won! ${player} beats ${computer}.`; 
        case player == computer:
            return `That is a tie. ${player} against ${computer}.`
        default:
            return `You lost! ${computer} beats ${player}!`;
    }
}

// Make a game that is 5 rounds and return the winner.

function game () {
    let count = 0;
    wile (count < 5) {
        // make the user do input and run the functions. add 1 to count. evalutate the winner and console log it.
    }
}

console.log(playRound("rOCK", computerPlay()));
