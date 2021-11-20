import allSame from "./allSame.js";

function checkWinDiagonalToRightByRight(board, boardSize, winSize) {
  let hasWinner = false;
  let localBoard = board;

  while (hasWinner === false) {
    for (let i = 0; i < boardSize - winSize + 1; i++) {
      for (
        let j = 0;
        j < boardSize * (boardSize - winSize + 1 - i);
        j = j + boardSize + 1
      ) {
        const sample = [];
        for (let k = 0; k < winSize * boardSize; k = k + boardSize + 1) {
          sample.push(localBoard[i + j + k]);
        }
        const result = allSame(sample);
        console.log(result);
        if (result === true) {
          hasWinner = true;
          return true;
        }
      }
    }
    return false;
  }
}

export default checkWinDiagonalToRightByRight;
