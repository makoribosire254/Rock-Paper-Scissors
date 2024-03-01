const getComputerChoice = (choice) => {
  let computerChoice;

  choice = Math.floor(Math.random() * 3);

  if(choice === 0){
    computerChoice = 'rock';
  } else if(choice === 1){
    computerChoice = 'paper';
  } else {
    computerChoice = 'scissors'
  }
  return computerChoice;
}

// let computerChoice = getComputerChoice()
// console.log(`Computer Choice: ${computerChoice}`)

const getUserChoice = userInput => {
  userInput = prompt(`Enter 'rock', 'paper', 'scissors'!`);
  userInput = userInput.toLowerCase();

  if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
    return userInput
  } else {
    return `Enter a valid User Input: 'rock', 'paper', 'scissors'`;
  }
}

// let userChoice = getUserChoice();
// console.log(`User Choice: ${userChoice}`);


const playRound = (playerSelection, computerSelection) => {
  playerSelection = getUserChoice();
  computerSelection = getComputerChoice();

  if (playerSelection === computerSelection){
    return `The game ends in a TIE!!`
  } 
  
  if(playerSelection === 'rock'){
    if(computerSelection === 'paper') {
      return `Sorry, Computer won!!`
    } else {
      return `Congratulations. You won!`
    }
  }

  if(playerSelection === 'paper') {
    if(computerSelection === 'scissors'){
      return `Sorry, Computer won!!`
    } else {
      return `Congratulations. You won!`
    }
  }

  if(playerSelection === 'scissors') {
    if(computerSelection === 'rock') {
      return `Sorry. Computer won!`
    } else {
      return `Congratulations. You won!`
    }
  }
}

function playGame(){
  const userChoice = getUserChoice();
  const computerChoice = getComputerChoice()
  console.log(`You: ${userChoice}`);
  console.log(`Computer: ${computerChoice}`);

  console.log(playRound(userChoice, computerChoice));
}

playGame();