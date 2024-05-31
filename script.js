const options = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}



getComputerChoice();

function checkWinner(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "Tie"
    }
    else if (
        (playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'rock')){
        return "player";}
    else {
        return "computer";
    }
}


function playRound(playerSelection, computerSelection){
    const result = checkWinner(playerSelection,computerSelection);
    if (result == "Tie"){
        return "It's a tie"
    }
    else if (result == "player"){
        return "you win!"
    }
    else if (result == "computer"){
        return "computer wins!"
    }
}


function getPlayerChoice(){
    let validatedInput = false;
    while(validatedInput == false){
        const choice = prompt("Rock Paper Scissors");
        if(choice == null){
            continue;
        }
        const choiceInLower = choice.toLowerCase();
        if (options.includes(choiceInLower)){
            validatedInput == true;
            return choiceInLower;
        }
    }
}

getPlayerChoice();

function game() {
    let scorePlayer = 0;
    let scoreComputer = 0;
    console.log("welcome");
    for (let i = 0; i < 5; i++){
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log("----");
        if(checkWinner(playerSelection, computerSelection) == 'player'){
            scorePlayer++;
        }
        else if (checkWinner(playerSelection, computerSelection) == 'computer'){
            scoreComputer++;
        }
        console.log(`You chose ${playerSelection}`);
        console.log(`Computer selected ${computerSelection}`);
        
    }
    console.log("Game Over");
    if(scorePlayer > scoreComputer){
        console.log("Player Wins!!!")
    }
    else if(scorePlayer < scoreComputer){
        console.log("Computer wins :(")
    }
}

game();