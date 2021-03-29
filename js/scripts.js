function getUserInput() {
    let answer = prompt("Rock, Paper or Scissors ?").toLowerCase();
    if (answer == 'rock') {
        return 'Rock';
    }
    else if (answer == 'paper') {
        return 'Paper';
    }
    else if (answer == 'scissors') {
        return 'Scissors';
    }
    else {
        alert("Incorrect answer, try again");
        return getUserInput();
    }
}

function computerPlay() {
    const computerTurn = ['Rock', 'Paper', 'Scissors'];
    return computerTurn[Math.floor(Math.random() * computerTurn.length)];
}

function playRound() {
    const playerSelection = getUserInput();
    const computerSelection = computerPlay();
    if (playerSelection == computerSelection) {
        return 'Tie';
    }
    else if (playerSelection == 'Rock' && computerSelection == 'Scissors') {
        return 'You win! Rock beats Scissors';
    }
    else if (playerSelection == 'Paper' && computerSelection == 'Rock') {
        return 'You win! Paper beats Rock';
    }
    else if (playerSelection == 'Scissors' && computerSelection == 'Paper') {
        return 'You win! Scissors beats Paper';
    }
    else if (playerSelection == 'Rock' && computerSelection == 'Paper') {
        return 'You Lose! Paper beats Rock';
    }
    else if (playerSelection == 'Paper' && computerSelection == 'Scissors') {
        return 'You lose! Scissors beats Paper';
    }
    else if (playerSelection == 'Scissors' && computerSelection == 'Rock') {
        return 'You lose! Rock beats Scissors';
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    playRound();
    if (playRound == 'You win! Rock beats Scissors' || 'You win! Paper beats Rock' || 'You win! Scissors beats Paper') {
        playerScore += 1;
        alert("You scored 1 point");
    }
    else if (playRound == 'tie') {
        playerScore += 0;
        computerScore += 0;
        alert("No point awarded");
    }
    else if (playRound == 'You Lose! Paper beats Rock' || 'You Lose! Paper beats Rock' || 'You Lose! Paper beats Rock') {
        computerScore += 1;
        alert("Your opponent scored 1 point");
    }
}

alert(game());