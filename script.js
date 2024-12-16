const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const computerChoiceDisplay = document.getElementById('computer-choice');
const resultDisplay = document.getElementById('result');

function getComputerChoice() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'It\'s a tie!';
  } else if (
    (userChoice === 'Rock' && computerChoice === 'Scissors') ||
    (userChoice === 'Paper' && computerChoice === 'Rock') ||
    (userChoice === 'Scissors' && computerChoice === 'Paper')
  ) {
    return 'You win!';
  } else {
    return 'Computer wins!';
  }
}

rockButton.addEventListener('click', () => {
  const computerChoice = getComputerChoice();
  computerChoiceDisplay.textContent = `Computer chose: ${computerChoice}`;
  const result = determineWinner('Rock', computerChoice);
  resultDisplay.textContent = result;
});

paperButton.addEventListener('click', () => {
  const computerChoice = getComputerChoice();
  computerChoiceDisplay.textContent = `Computer chose: ${computerChoice}`;
  const result = determineWinner('Paper', computerChoice);
  resultDisplay.textContent = result;
});

scissorsButton.addEventListener('click', () => {
  const computerChoice = getComputerChoice();
  computerChoiceDisplay.textContent = `Computer chose: ${computerChoice}`;
  const result = determineWinner('Scissors', computerChoice);
  resultDisplay.textContent = result;
});