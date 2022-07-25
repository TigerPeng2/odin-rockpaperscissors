game();

function game() {
    let wins = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = getPlayerSelection();
        let computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);

        switch(result.charAt(4)) {
            case 'w':
                wins++;
                break;
            case 'l':
                wins--;
                break;
        }
        
        console.log(result);
    }

    if (wins > 0) {
        console.log("Congrats! You won!");
    } else if (wins < 0) {
        console.log("Welp, you lost.");
    } else {
        console.log("You tied.");
    }
}

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

function getPlayerSelection() {
    let input = prompt("Choose: Rock, Paper, or Scissors").toLowerCase();

    while (input !== "rock" && input !== "paper" && input !== "scissors") {
        input = prompt("Please enter a valid selection.").toLowerCase();
    }

    return input;
}

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();
} 