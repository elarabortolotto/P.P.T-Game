// PEDRA PAPEL TESOURA \\
const choices = ["pedra", "papel", "tesoura"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
const resetBtn = document.getElementById("resetBtn");

let playerScore = 0;
let computerScore = 0;
let isPlaying = false;

function playGame(playerChoice) {
    if (isPlaying) return; // Bloqueia cliques rápidos
    isPlaying = true;

    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if (playerChoice === computerChoice) {
        result = "EMPATE";
    } else {
        switch (playerChoice) {
            case "pedra":
                result = (computerChoice === "tesoura") ? "VOCÊ GANHOU!" : "VOCÊ PERDEU!";
                break;
            case "papel":
                result = (computerChoice === "pedra") ? "VOCÊ GANHOU!" : "VOCÊ PERDEU!";
                break;
            case "tesoura":
                result = (computerChoice === "papel") ? "VOCÊ GANHOU!" : "VOCÊ PERDEU!";
                break;
        }
    }

    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTADOR: ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText", "redText");

    switch (result) {
        case "VOCÊ GANHOU!":
            resultDisplay.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "VOCÊ PERDEU!":
            resultDisplay.classList.add("redText");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
    }

    // Permite novo jogo após 0,5s
    setTimeout(() => { isPlaying = false; }, 500);
}

// === RESET DE PONTUAÇÃO ===
resetBtn.addEventListener("click", () => {
    playerScore = 0;
    computerScore = 0;
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
    playerDisplay.textContent = "PLAYER: ";
    computerDisplay.textContent = "COMPUTADOR: ";
    resultDisplay.textContent = "";
    resultDisplay.classList.remove("greenText", "redText");
});
