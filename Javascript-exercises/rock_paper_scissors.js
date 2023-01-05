console.log("Hello, world!");
console.log(getComputerChoice());

let playerSelection = "SCISSORS";
let playerScore = 0;
let computerSelection = getComputerChoice();
console.log(playerSelection);

console.log(game());


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

function game(){
    for(let i = 0; i<5; ++i){
        playerSelection = window.prompt('Rock, Paper, or Scissors?', 'rock')
        console.log(playRound(playerSelection, getComputerChoice()));
    }
    if (playerScore > 2) {
        return "You're the champion! You won " +playerScore +" out of 5 games!";      
    } else {
        return "You Lose! You only won " +playerScore +" out of 5 games...";
    }
}