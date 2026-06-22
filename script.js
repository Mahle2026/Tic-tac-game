const cells = document.querySelectorAll(".cell");
const statusText = document.getElementById("status");
const restartBtn = document.getElementById("restartBtn");

let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer ="X";
let gameActive = true;


const winPatterns = [
[0,1,2], [3,4,5], [6,7,8],
[0,3,6], [1,4,7], [2,5,8],
[0,4,8], [2,4,6]
];

cells.forEach(cell => {
    cell.addEventListener("click", cellClicked);
});

restartBtn.addEventListener("click", restartGame);

function cellClicked() {
    const index = this.dataset.index;

    if(board[index] !== "" || !gameActive) return;

    board[index] = currentPlayer;
    this.textContent = currentPlayer;

    if(currentPlayer === "X") {
        this.classList.add("x");
    } else {
        this.classList.add("o");
    }
}

function checkWinner() {
    let winner = false;

    winPatterns.forEach(patter => {
        const [a,b,c] = patterns;

        if (board[a] && 
            board[a] === board[b] && 
            board[a] === board[c] 
        ){
            winner = true;
    }
});

    if (!board.includes("")) {
        statusText.textContent = "It's a Draw!";
        gameActive = false;
        return;
    }
    
function resetGame() {
    board = ["", "", "", "", "", "", "","",""];
    gameActive = true;
    currentPlayer = "X";
    statusText.textContent = "Player X's turn";

    cells.forEach(cell =>{
        cell.textContent = "";
        cell.classList.remove("x");
        cell.classList.remove("o");
    });
}

