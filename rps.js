let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let numb = Math.floor((Math.random() * 100)) + 1;
    let str = "";
    if (numb <= 40) {
        str = "rock";
    }
    else if (numb <= 70) {
        str = "paper";
    }
    else {
        str = "scissors";
    }
    return str.toLowerCase();
}

function getHumanChoice() {
    let choice = prompt("Enter your choice");
    return choice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {

    let loss = "you loose";
    let win = "you win";
    
    console.log(`Human choice is ${humanChoice}`);
    console.log(`Computer choice is ${computerChoice}`);

    if (humanChoice == "rock") {
            if (computerChoice == "paper") {
                console.log(`${loss} . ${computerChoice} beats ${humanChoice}`);
                computerScore++;
            }
            else if (computerChoice == "scissors") {
                console.log(`${win} . ${humanChoice} beats ${computerChoice}`);
                humanScore++;
            }
        }

        else if (humanChoice == "paper") {
            if (computerChoice == "rock") {
                console.log(`${win}.${humanChoice} beats ${computerChoice}`);
                humanScore++;
            }
            else if (computerChoice == "scissors") {
                console.log(`${loss}.${computerChoice} beats ${humanChoice}`);
                computerScore++;
            }
        }

        else if (humanChoice == "scissors") {
            if (computerChoice == "paper") {
                console.log(`${win}.${humanChoice} beats ${computerChoice}`);
                humanScore++;
            }
            else if (computerChoice == "rock") {
                console.log(`${loss}.${computerChoice} beats ${humanChoice}`);
                computerScore++;
            }
        }
        else {
            console.log("invalid input");
        }

        if (humanChoice == computerChoice) {
            console.log("Its a tie!");
        }

        console.log(`Your Score : ${humanScore}`);
        console.log(`Computer's Score : ${computerScore}`);
    }
const humanselection = getHumanChoice();
const computerselection = getComputerChoice();

playRound(humanselection, computerselection);

