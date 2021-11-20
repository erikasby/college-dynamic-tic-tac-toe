import allSame from "./allSame.js";

function checkWinDiagonalToLeftByLeft(board, boardSize, winSize) {
  let hasWinner = false;
  let localBoard = board;

  while (hasWinner === false) {
    let iTemp = 0;
    for (let i = boardSize - 1; i > boardSize - winSize - 1; i--) {
      for (
        let j = 0;
        j < boardSize * (boardSize - winSize - iTemp) + 1;
        j = j + boardSize - 1
      ) {
        const sample = [];
        for (
          let k = 0;
          k < winSize * boardSize - boardSize;
          k = k + boardSize - 1
        ) {
          sample.push(localBoard[j + k + i]);
        }
        const result = allSame(sample);
        console.log(sample);
        if (result === true) {
          hasWinner = true;
          return true;
        }
      }
      iTemp++;
    }
    return false;
  }
}

export default checkWinDiagonalToLeftByLeft;
