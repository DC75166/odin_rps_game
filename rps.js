// Variables to track the score of both computer and human
let humanScore = 0;
let computerScore = 0;

//function to randomly generate the computer choices
function getComputerChoice(){

  let random = Math.floor(Math.random()*100);
  console.log(random);

  if(random>=0 && random<33){
    // console.log("rock");
    return "rock";
  }
  else if(random>=33 && random<66){
    // console.log("paper");
    return "paper";
  }
  else{
    // console.log("scissors");
    return "scissors";
  }
}

// Function to get the human input
function getHumanChoice(){
   let choice = prompt("Enter your choice");
   let str = choice.toLowerCase();
   return str;
}

// Function to play the game
function playRound(humanChoice,computerChoice){
    //  console.log(humanChoice);
    
    let loss = "you loose";
    let win = "you win";

     if(humanChoice == computerChoice){
      console.log("Draw");
     }

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

  console.log(`Your Score : ${humanScore}`);
  console.log(`Computer's Score : ${computerScore}`);
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

// getComputerChoice();
// getHumanChoice();
playRound(humanSelection,computerSelection);
