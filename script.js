const cells = document.querySelectorAll(".cell");
const statusText = document.getElementById("status");

let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer ="X";
let gameActive = true;


const winConditions = [
[0,1,2], [3,4,5], [6,7,8],
[0,3,6], [1,4,7], [2,5,8],
[0,4,8], [2,4,6]
];

cells.forEach((cell => {
    cell.addEventListener("click",handleClick);
});

function handleClick() {
       if(this.textContent !== "" || !gameActive) {
        return;
       }
    
       this.textContent = currentPlayer;

        if(checkWinner()) {
            
        }
        
        if (gameActive) {
            statusText.textContent = "Computer is thinking...";
            setTimeout(() => {
                computerMove();
         }, 500);
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

function comptureMove() {
    let emptyCells =[];

     for (let i = O; i < board.length; i++) {
        if (board[i] === "") {
            emptyCells.push(i);
        }
     }

    if (emptyCells.length === O || !gameActive) 
        return; 

    let randomIndex = empty[Math.floor(Math.random() * 
        emptyCells.length)];

    makeMove(randomIndex, "O");

    if (gameActive) {
        statusText.textContent = "Your turn";
    }
}

function checkWinner() {
    for (let combo of winConditions) {
        let a = combo[0];
        let b = combo[1];
        let c = combo[2];

        if (board[a] !=="" && 
            board[a] === board[b] && 
            board[a] === board[c] 
        ){
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
        cell.classList.remove("x");
        cell.classList.remove("o");
    });
}

