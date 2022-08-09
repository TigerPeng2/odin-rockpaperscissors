let btns = document.querySelectorAll('button');
let maxBtnWidth = 0;

btns.forEach(btn => {
    if (btn.offsetWidth > maxBtnWidth) {
        maxBtnWidth = btn.offsetWidth;
    }
});

btns.forEach(btn => {
    btn.style.width = maxBtnWidth + "px";
});

let rockbtn = document.querySelector('#rockbtn');
let paperbtn = document.querySelector('#paperbtn');
let scissorsbtn = document.querySelector('#scissorsbtn');

rockbtn.addEventListener('click', () => {
    let resultString = playRound("rock", computerPlay());
    updateGameResult(resultString);
    updateScore(resultString);
});

paperbtn.addEventListener('click', () => {
    let resultString = playRound("paper", computerPlay());
    updateGameResult(resultString);
    updateScore(resultString);
});
scissorsbtn.addEventListener('click', () => {
    let resultString = playRound("scissors", computerPlay());
    updateGameResult(resultString);
    updateScore(resultString);
});

let result = document.querySelector('.result');

let playerScore = document.querySelector('#playerscore');
let computerScore = document.querySelector('#computerscore');

function computerPlay() {
    let rand = Math.floor(Math.random() * 3);

    switch (rand) {
        case 0:
            return "Rock";
            break;
        case 1:
            return "Paper";
            break;
        case 2:
            return "Scissors";
            break;
        default:
            return "Scissors";
            break;
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = capitalize(playerSelection);
    let won;
    if (playerSelection === "Rock") {
        if (computerSelection === "Paper") {
            won = -1;
        } else if (computerSelection === "Scissors") {
            won = 1;
        } else {
            won = 0;
        }
    } else if (playerSelection === "Paper") {
        if (computerSelection === "Scissors") {
            won = -1;
        } else if (computerSelection === "Rock") {
            won = 1;
        } else {
            won = 0;
        }
    } else {
        if (computerSelection === "Rock") {
            won = -1;
        } else if (computerSelection === "Paper") {
            won = 1;
        } else {
            won = 0;
        }
    }

    if (won === 1) {
        return `You won! ${playerSelection} beats ${computerSelection}.`
    } else if (won === -1) {
        return `You lost! ${computerSelection} beats ${playerSelection}.`
    } else {
        return `You tied! You both chose ${playerSelection}.`
    }
}

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();
}

function updateGameResult(text) {
    result.textContent = text;
}

function updateScore(text) {
    switch(text.charAt(4)) {
        case 'w':
            playerScore.textContent = +playerScore.textContent + 1;
            break;
        case 'l':
            computerScore.textContent = +computerScore.textContent + 1;
            break;
    }

    checkGameOver();
}

function checkGameOver() {
    if (playerScore.textContent === "5") {
        updateGameResult("The player has won!");
        resetScores();
    }
    if (computerScore.textContent === "5") {
        updateGameResult("The computer has won!");
        resetScores();
    }
}

function resetScores() {
    playerScore.textContent = 0;
    computerScore.textContent = 0;
}