const cells = document.querySelectorAll(".cell");
const statusText = document.getElementById("status");

let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer ="X";
let gameActive = true;
let vsAI = false;


const winConditions = [
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]
];

cells.forEach((cell, index) => {
    cell.addEventListener("click", () => {
        if (board[index] !== "" || !gameActive) return;

        makeMove(index, currentPlayer);
        
        if (vsAI && gameActive && currentPlayer === "O") {
            statusText.textContent = "Computer is thinking...";
            setTimeout(aiMove, 500);
        }
    });
});


function makeMove(index, player) {
    board[index] = player;
    cells[index].textContent = player;

    if (player === "X") {
        cells[index].classList.add("x");
    } else {
        cells[index].classList.add("o");
    }

    checkWinner();

    if(!gameActive) return;

    currentPlayer = player === "X" ? "O" : "X";
    statusText.textContent = `Player ${currentPlayer}'s turn`;
}

function aiMove() {
    let emptyCells = board.map((value, index) => value === "" ? index : null).filter(value !== null);

    if (emptyCells.length === O) return;

    let randomIndex = empty[Math.floor(Math.random() * emptyCells.length)];

    makeMove(randomIndex, "O");
}

function checkWinner() {
    for (let combo of winConditions) {
        let [a, b, c] = combo;

        if (board[a] && board[a] === board[b] && board[a] === board[c]){
        statusText.textContent =  `${board[a]} wins 🎉`;
        gameActive = false;
        return;
        }
    }
}
    if (!board.includes("")) {
        statusText.textContent = "It's a draw!";
        gameActive = false;
    }

function resetGame() {
    board = ["", "", "", "", "", "", "","",""];
    gameActive = true;
    currentPlayer = "X";
    statusText.textContent = "Player X's turn";

    cells.forEach(cell =>{
        cell.textContent = "";
    });
}

function toggleAI() {
    vsAI = !vsAI;
    resetGame();

    statusText.textContent = vsAI
    ? "Playing vs AI (You = X)"
    : "2 Player Mode";
}
