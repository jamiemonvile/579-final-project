const api_url ="https://zenquotes.io/api/random/cddd740191d76986397efc5c6bf0cdd7d86ca720";

async function getapi(url) {
  const response = await fetch(url);
  var data = await response.json();
  console.log(data);
  for (const key in data){
    const quoteInformation = data[key];
    const quote = quoteInformation.q;
    const author = quoteInformation.a;
    console.log(quote, author);
    document.getElementById("quote").textContent = quote;
    document.getElementById("author").textContent = author;
    }
};

getapi(api_url);

const statusDisplay = document.querySelector('.game-status');

let gameActive = true;
let currentPlayer = "X";
let gameState = ["", "", "", "", "", "", "", "", ""];

const winningMessage = () => `${currentPlayer} has won!`;
const drawMessage = () => `Game ended in a draw!`;
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;

statusDisplay.innerHTML = currentPlayerTurn();

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function cellPlayed(clickedCell, clickedCellIndex) {
    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.innerHTML = currentPlayer;
}

function changePlayer() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusDisplay.innerHTML = currentPlayerTurn();
}

function verifyResult() {
    let roundWon = false;
    for (let i = 0; i <= 7; i++) {
        const winCondition = winningConditions[i];
        let a = gameState[winCondition[0]];
        let b = gameState[winCondition[1]];
        let c = gameState[winCondition[2]];
        if (a === '' || b === '' || c === ''){
            continue;
        }
        if (a === b && b === c){
            roundWon = true;
            break
        }
    }
    if (roundWon){
        statusDisplay.innerHTML = winningMessage();
        gameActive = false;
        return;
    }

    let roundDraw = !gameState.includes("");
    if (roundDraw){
        statusDisplay.innerHTML = drawMessage();
        gameActive = false;
        return;
    }

    changePlayer();
}

function cellClick(clickedCellEvent) {
    const clickedCell = clickedCellEvent.target;
    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));
    
    if (gameState[clickedCellIndex] !== "" || !gameActive){
        return;
    }

    cellPlayed(clickedCell, clickedCellIndex);
    verifyResult();
}

function restartGame() {
    location.reload();
}

document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', cellClick));

document.querySelector('.game-restart').addEventListener('click', restartGame);

