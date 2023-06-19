function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    switch (computerChoice) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == computerSelection) {
        return "It's a tie!";
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        return 'You lose! Paper beats Rock';
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return 'You win! Rock beats Scissors'
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        return 'You lose! Scissors beats Paper';
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return 'You win! Paper beats Rock';
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        return 'You lose! Rock beats Scissors';
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return 'You win! Scissors beats Paper';
    } else {
        return 'Unknown conditions!';
    }
}

const result = document.querySelector('#result');

const btnRock = document.querySelector('#btnRock');
btnRock.addEventListener(
    'click',
    () => {
        result.textContent = playRound('rock', getComputerChoice());
    },
    false
);

const btnPaper = document.querySelector('#btnPaper');
btnPaper.addEventListener(
    'click',
    () => {
        result.textContent = playRound('paper', getComputerChoice());
    },
    false
);

const btnScissors = document.querySelector('#btnScissors');
btnScissors.addEventListener(
    'click',
    () => {
        result.textContent = playRound('scissors', getComputerChoice());
    },
    false
);
