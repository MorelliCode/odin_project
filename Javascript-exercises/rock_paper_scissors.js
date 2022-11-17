console.log("Hello, world!");
console.log(getComputerChoice());

function getComputerChoice(){
    let computerPlay = Math.floor(Math.random() * 10);
    let result = "";
    if (computerPlay > 3){
        result = "Rock";
    }
    else if (computerPlay > 6){
        result = "Scissors";
    }
    else {
        result = "Paper";
    }
    return result;
}

