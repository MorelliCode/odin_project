console.log("Hello, world!");
console.log(getComputerChoice());

let playerSelection = "SCISSORS";
let playerScore = 0;
const computerSelection = getComputerChoice();
console.log(playerSelection);

function getComputerChoice(){
    let computerPlay = Math.floor(Math.random() * 10);
    let result = "";
    if (computerPlay > 6){
        result = "Rock";
    }
    else if (computerPlay > 3){
        result = "Scissors";
    }
    else {
        result = "Paper";
    }
    return result;
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    let fstLetter = playerSelection[0];
    playerSelection = fstLetter.toUpperCase() + playerSelection.slice(1-playerSelection.length, playerSelection.length)

    if (playerSelection == computerSelection){
        return "Draw!";
    }
    else if (playerSelection == "Scissors" && computerSelection == "Rock"){
        return "You lose! " +computerSelection +" beats " +playerSelection;
    }
    else if (playerSelection == "Rock" && computerSelection == "Paper"){
        return "You lose! " +computerSelection +" beats " +playerSelection;
    }
    else if (playerSelection == "Paper" && computerSelection == "Scissors"){
        return "You lose! " +computerSelection +" beats " +playerSelection;
    }
    else if (playerSelection == "Scissors" && computerSelection == "Paper"){
        playerScore++;
        return "You win! " +playerSelection +" beats " +computerSelection;
    }
    else if (playerSelection == "Rock" && computerSelection == "Scissors"){
        playerScore++;
        return "You win! " +playerSelection +" beats " +computerSelection;
    }
    else if (playerSelection == "Scissors" && computerSelection == "Paper"){
        playerScore++;
        return "You win! " +playerSelection +" beats " +computerSelection;
    }
    else{
        return "Something went wrong. Did you input your choice correctly?"
    }
}

console.log(playRound(playerSelection, computerSelection));
console.log(playerScore);

function game(){
    for(let i = 0; i<5; i++){
        playRound(playerSelection, computerSelection);
    }
    if (playerScore > 2) {
        return "You're the champion! You won " +playerScore +" out of 5 games!";      
    } else {
        return "You Lose! You only won " +playerScore +" out of 5 games...";
    }
}