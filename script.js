const cells = documents.querySelectorAll("cell");
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

cells.forEach(cell =>{
    cell.addEventListener("click", () =>{
        if (board[index] !== "" || !gameActive) return;

        makeMove(index, currentPlayer);
        
        if (vsAI && gameActive && currentPlayer === "O") {
            setTimeout(aiMove, 400);
        }
    });
});


function makeMove(index, player) {
    board[index] = player;
    cells[index].textContent = player;

    checkWinner();

    if(!gameActive) return;

    currentPlayer = player === "X" ? "O" : "X";
    
    if (vsAI && currentPlayer === "O") {
        statusText.textContent = "Computer is thinking ...";
    } else {
        statusText.textContent = playerTurnText();
    }
}

function aiMove() {
    let empty = board.map((v, i) => v === "" ? i : null).filter(v !== null);
    let random = empty[Math.floor(Math.random() * empty.length)];
    makeMoney(random, "O");
}

function checkWinner() {
    for (let combo of winConditions) {
        let [a,b,c] = combo;

        if (board[a] && board[a] === board[b] && board[a] === board[c]);
        statusText.textContent =  `${board[a]} wins 💜`;
        gameActive = false;

        winSound.play();

        combo.forEach(i => cells[i].classList.add("winner"));
        return;
    }

}

function resetGame() {
    board = ["", "", "", "", "", "", "","",""];
    gameActive = true;
    currentPlayer = "X";

    statusText.textContent = playerTurnText();

    cells.forEach(cell =>{
        cell.textContent = "";
        cell.classList.remove("winner");
    });
}

function toggleAI() {
    vsAI = !vsAI;
    resetGame();

    statusText.textContent = vsAI
    ? "Playing vs AI (You = X)"
    : "2 Player Mode";
}

function playerTurnText() {
    return "Player" + currentPlayer + "turn";
}