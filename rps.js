
function playGame() {

  //function to randomly generate the computer choices
  function getComputerChoice() {

    let random = (Math.floor(Math.random() * 100) + 1);
    console.log(random);
    let choice = '';

    if (random >= 0 && random < 33) {
      choice = "rock";
    }
    else if (random >= 33 && random < 66) {
      choice = "paper";
    }
    else {
      choice = "scissors";
    }
    console.log(choice);
    return choice;
  }

  let humanChoice = '';
  const buttons = document.querySelectorAll("button");
  
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      humanChoice = button.id;
      playRound(getComputerChoice(), humanChoice);
    });
  })

  let humanScore = 0;
  let computerScore = 0;

  // Function to play the game for 1 round
  function playRound(humanChoice, computerChoice) {

    const result = document.querySelector('#results');
    const hScore = document.querySelector("#hScore");
    const cScore = document.querySelector("#cScore");

    let loss = "you loose";
    let win = "you win";

    //  Prints final score
    if ((humanScore) == 5 || (computerScore) == 5) {
      if (humanScore == computerScore) {
        result.textContent = "Its a Tie";
      }
      else if (humanScore > computerScore) {
        result.textContent = "You win!! Congrats";
      }
      else {
        result.textContent = "You Lose! Try again";
      }
    }
    else {
      if (humanChoice == computerChoice) {
        result.textContent = ("Draw");
        computerScore;
        humanScore;
      }

      if (humanChoice == "rock") {
        if (computerChoice == "paper") {
          result.textContent = (`${loss} . ${computerChoice} beats ${humanChoice}`);
          computerScore++;
        }
        else if (computerChoice == "scissors") {
          result.textContent = (`${win} . ${humanChoice} beats ${computerChoice}`);
          humanScore++;
        }
      }

      if (humanChoice == "paper") {
        if (computerChoice == "rock") {
          result.textContent = (`${win}.${humanChoice} beats ${computerChoice}`);
          humanScore++;
        }
        else if (computerChoice == "scissors") {
          result.textContent = (`${loss}.${computerChoice} beats ${humanChoice}`);
          computerScore++;
        }
      }

      if (humanChoice == "scissors") {
        if (computerChoice == "paper") {
          result.textContent = (`${win}.${humanChoice} beats ${computerChoice}`);
          humanScore++;
        }
        else if (computerChoice == "rock") {
          result.textContent = (`${loss}.${computerChoice} beats ${humanChoice}`);
          computerScore++;
        }
      }

      //  Prints the score for each round
      hScore.textContent = (`Your Score : ${humanScore}`);
      cScore.textContent = (`Computer's Score : ${computerScore}`);
      result.appendChild(hScore);
      result.appendChild(cScore);
    }
  }
}

playGame();