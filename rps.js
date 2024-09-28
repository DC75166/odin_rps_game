let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let numb =  Math.floor((Math.random()*100))+1;
    // console.log(numb);
    if(numb<=40){
        // console.log("rock");
        return "rock";
    }
    else if(numb<=70){
        // console.log("paper");
        return "paper";
    }
    else{
        // console.log("scissors");
        return "scissors";
    }
}

function getHumanChoice(){
   let choice = prompt("Enter your choice");
        return choice;
}

function playRound(humanChoice,computerChoice){

   humanChoice = humanChoice.toLowerCase();

    let loss = "you loose";
    let win = "you win";

    if(humanChoice == "rock"){
        if(computerChoice == "paper"){
            console.log(`${loss} . ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        }
        else if(computerChoice == "scissors"){
            console.log(`${win} . ${humanChoice} beats ${computerChoice}`);
            humanScore++;
        }
    }

    if(humanChoice == "paper"){
        if(computerChoice == "rock"){
            console.log(`${win}.${humanChoice} beats ${computerChoice}`);
            humanScore++;
        }
        else if (computerChoice == "scissors"){
            console.log(`${loss}.${computerChoice} beats ${humanChoice}`);
            computerScore++;
        }
    }

    if (humanChoice == "scissors"){
        if(computerChoice == "paper"){
            console.log(`${win}.${humanChoice} beats ${computerChoice}`);
            humanScore++;
        }
        else if(computerChoice == "rock"){
            console.log(`${loss}.${computerChoice} beats ${humanChoice}`);
            computerScore++;
        }
    }

    if(humanChoice == computerChoice){
        console.log("Its a tie!");
        humanScore++;
        computerScore++;
    }
    console.log(`Your Score : ${humanScore}`);
    console.log(`Computer's Score : ${computerScore}`);
}

const humanselection = getHumanChoice().toLowerCase();
const computerselection = getComputerChoice().toLowerCase();

playRound(humanselection,computerselection);

