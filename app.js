// let name = 'Tyra Kerubo';
// console.log(`Hello ${name}`);

function getComputerChoice(){
  // let computerChoice = Math.floor(Math.random() * 3)
  // if (computerChoice === 0) {
  //   computerChoice === 'rock'
  //   console.log('rock');
  // } else if (computerChoice === 1) {
  //   computerChoice === 'paper'
  //   console.log('paper');
  // } else {
  //   computerChoice === 'scissors';
  //   console.log('scissors');

  let computerChoice = ['rock', 'paper', 'scissors'];
  let randomInt = Math.floor(Math.random() * computerChoice.length);

  return computerChoice[randomInt];
  } 

const computerSelection = getComputerChoice();
console.log(`Computer choice's: ${computerSelection}`);