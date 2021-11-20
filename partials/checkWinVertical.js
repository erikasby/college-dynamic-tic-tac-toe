import allSame from "./allSame.js";

function checkWinVertical(board, boardSize, winSize) {
  let hasWinner = false;
  let localBoard = board;

  while (hasWinner === false) {
    for (let i = 0; i < boardSize; i++) {
      for (
        let j = 0;
        j < boardSize * (boardSize - winSize + 1);
        j = j + boardSize
      ) {
        const sample = [];
        for (let k = 0; k < winSize * boardSize; k = k + boardSize) {
          sample.push(localBoard[i + j + k]);
        }
        const result = allSame(sample);
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

export default checkWinVertical;
