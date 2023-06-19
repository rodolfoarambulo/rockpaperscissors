let playerScore = 0;
let computerScore = 0;

const result = document.querySelector('#result');
const scores = document.querySelector('#scores');

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
        computerScore++;
        return 'You lose! Paper beats Rock';
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        playerScore++;
        return 'You win! Rock beats Scissors'
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        computerScore++;
        return 'You lose! Scissors beats Paper';
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        playerScore++;
        return 'You win! Paper beats Rock';
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        computerScore++;
        return 'You lose! Rock beats Scissors';
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        playerScore++;
        return 'You win! Scissors beats Paper';
    } else {
        return 'Unknown conditions!';
    }
}

function resetScores() {
    playerScore = 0;
    computerScore = 0;
}

function checkScores() {
    if (playerScore === 5) {
        alert('Player wins!');
        resetScores();
    }

    if (computerScore === 5) {
        alert('Computer wins!');
        resetScores();
    }
}


const btnRock = document.querySelector('#btnRock');
btnRock.addEventListener(
    'click',
    () => {
        result.textContent = playRound('rock', getComputerChoice());
        checkScores();
        scores.textContent = 'Player: ' + playerScore + ' | COM: ' + computerScore;
    },
    false
);

const btnPaper = document.querySelector('#btnPaper');
btnPaper.addEventListener(
    'click',
    () => {
        result.textContent = playRound('paper', getComputerChoice());
        checkScores();
        scores.textContent = 'Player: ' + playerScore + ' | COM: ' + computerScore;
    },
    false
);

const btnScissors = document.querySelector('#btnScissors');
btnScissors.addEventListener(
    'click',
    () => {
        result.textContent = playRound('scissors', getComputerChoice());
        checkScores();
        scores.textContent = 'Player: ' + playerScore + ' | COM: ' + computerScore;
    },
    false
);
