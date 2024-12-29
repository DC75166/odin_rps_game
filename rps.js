//function to randomly generate the computer choices
function getComputerChoice(){

  let random = (Math.floor(Math.random()*100));

  if(random>=0 && random<33){
    return "rock";
  }
  else if(random>=33 && random<66){
    return "paper";
  }
  else{
    return "scissors";
  }
}

// Function to get the human input
function getHumanChoice(){
   let choice = prompt("Enter your choice");
   let str = choice.toLowerCase();
   return str;
}

// Function to play the game for 5 rounds
function playGame(){

// Variables to track the score of both computer and human
let humanScore = 0;
let computerScore = 0;

// Play 5 rounds
for(let i=0;i<5;i++){
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  playRound(humanSelection,computerSelection);
}

// Function to play the game for 1 round
  function playRound(humanChoice,computerChoice){
    
    let loss = "you loose";
    let win = "you win";

     if(humanChoice == computerChoice){
      console.log("Draw");
      computerScore;
      humanScore;
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

  //  Prints the score for each round
  console.log(`Your Score : ${humanScore}`);
  console.log(`Computer's Score : ${computerScore}`);
}

// Prints the final score
  if(`${humanScore}`>`${computerScore}`){
    console.log("Congrats!You won the game");
  }
  else if(`${computerScore}`>`${humanScore}`) {
    console.log("uh oh! Better luck next time");
  }
  else{
    console.log("You guys are tied! Try Again to beat the computer");
  }
}

playGame();



