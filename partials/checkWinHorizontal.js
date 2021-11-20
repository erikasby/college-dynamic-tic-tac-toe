import allSame from "./allSame.js";

function checkWinHorizontal(board, boardLength, boardSize, winSize) {
  let hasWinner = false;
  let localBoard = board;
  console.log(board);

  while (hasWinner === false) {
    for (let i = 0; i < boardLength; i = i + boardSize) {
      for (let j = 0; j < boardSize - winSize + 1; j++) {
        const sample = [];
        for (let k = 0; k < winSize; k++) {
          sample.push(localBoard[i + j + k]);
        }

        const result = allSame(sample);
        console.log("Result " + result);
        console.log(sample);
        if (result === true) {
          hasWinner = true;
          return true;
        }
      }
    }
    return false;
  }

  localBoard.length = 0;
}

export default checkWinHorizontal;
