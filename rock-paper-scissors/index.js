// Make a random output 
function computerPlay(){
    let randomNumber = Math.floor(Math.random() * 8);
    if (randomNumber < 3) {
        return "Rock";
    } else if (randomNumber < 6){
        return "Paper";
    } else {
        return "Scissors"
    }
}

// Take an imput

// Decide the winner of the round


// Count the score and

// Print the winner

console.log(computerPlay());