import addOne from "./partials/addOne.js";
import changePlayer from "./partials/changePlayer.js";
import isValid from "./partials/isValid.js";
import updateBoard from "./partials/updateBoard.js";
import createBoard from "./partials/createBoard.js";

import checkWinDiagonalToLeftByDown from "./partials/checkWinDiagonalToLeftByDown.js";
import checkWinDiagonalToLeftByLeft from "./partials/checkWinDiagonalToLeftByLeft.js";
import checkWinDiagonalToRightByRight from "./partials/checkWinDiagonalToRightByRight.js";
import checkWinDiagonalToRightByDown from "./partials/checkWinDiagonalToRightByDown.js";
import checkWinHorizontal from "./partials/checkWinHorizontal.js";
import checkWinVertical from "./partials/checkWinVertical.js";

const turn = document.querySelector(".turn");
const winner = document.querySelector(".winner");
const reset = document.querySelector("#reset");

let winSize = parseInt(document.getElementById("winSize").value);
let boardSize = parseInt(document.getElementById("boardSize").value);
const update = document.getElementById("update");
const gameBoard = document.querySelector(".board");

let board = createBoard(boardSize * boardSize);
function addTiles() {
  gameBoard.innerHTML = "";
  gameBoard.style = `grid-template-columns: repeat(${boardSize}, 1fr)`;
  for (let i = 0; i < boardSize * boardSize; i++) {
    var div = document.createElement("div");
    div.classList.add("tile");
    gameBoard.appendChild(div);
  }
}
addTiles();

let tiles = document.querySelectorAll(".tile");

tiles.forEach((tile, index) => {
  tile.addEventListener("click", () => changeTurn(tile, index));
});

let player = "X";
let isLive = true;

// const winningConditions = [
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
//   [0, 3, 6],
//   [1, 4, 7],
//   [2, 5, 8],
//   [0, 4, 8],
//   [2, 4, 6],
// ];

reset.addEventListener("click", function () {
  runDefaults();
});

update.addEventListener("click", function () {
  winSize = parseInt(document.getElementById("winSize").value);
  boardSize = parseInt(document.getElementById("boardSize").value);
  addTiles();
  runDefaults();

  tiles.forEach((tile, index) => {
    tile.addEventListener("click", () => changeTurn(tile, index));
  });
});

function changeTurn(tile, index) {
  const runValidation = isValid(tile.innerHTML);
  if (runValidation === true && isLive === true && boardSize >= winSize) {
    board[index] = updateBoard(player);

    checkWin();

    if (turn.innerText === `Player X's turn`) {
      tile.innerHTML = addOne(player);
      tile.className = "tile active";
      player = changePlayer(player);
      turn.innerHTML = `Player <span class='player'>O</span>'s turn`;
    } else if (turn.innerText === `Player O's turn`) {
      tile.innerHTML = addOne(player);
      tile.className = "tile active";
      player = changePlayer(player);
      turn.innerHTML = `Player <span class='player'>X</span>'s turn`;
    }
  }
}

function checkWin() {
  let roundWon = false;
  let boardLength = boardSize * boardSize;
  console.log("BOARD LENGHT: " + boardLength);
  let lbd = checkWinDiagonalToLeftByDown(board, boardSize, winSize);
  let lbl = checkWinDiagonalToLeftByLeft(board, boardSize, winSize);
  let rbd = checkWinDiagonalToRightByDown(board, boardSize, winSize);
  let rbr = checkWinDiagonalToRightByRight(board, boardSize, winSize);
  let vertical = checkWinVertical(board, boardSize, winSize);
  let horizontal = checkWinHorizontal(board, boardLength, boardSize, winSize);

  if (lbd === true) {
    roundWon = true;
  } else if (lbl === true) {
    roundWon = true;
  } else if (rbd === true) {
    roundWon = true;
  } else if (rbr === true) {
    roundWon = true;
  } else if (horizontal === true) {
    roundWon = true;
  } else if (vertical === true) {
    roundWon = true;
  }

  if (roundWon === true) {
    winner.innerHTML = `Player <span class="player">${player}</span> won!`;
    winner.className = "winner";
    isLive = false;
    return;
  }

  if (!board.includes("")) {
    winner.innerHTML = `<span class="tie">TIE</span>`;
    winner.className = "winner";
  }
}

function runDefaults() {
  tiles = document.querySelectorAll(".tile");
  for (let tile of tiles) {
    tile.innerHTML = "";
  }
  turn.innerHTML = "Player <span class='player'>X</span>'s turn";
  player = "X";
  board.length = 0;
  board = createBoard(boardSize * boardSize);
  console.log("NEW BOARD HERE: " + board);
  isLive = true;
  winner.className = "winner hide";
  for (let tile of tiles) {
    tile.className = "tile";
  }
}
