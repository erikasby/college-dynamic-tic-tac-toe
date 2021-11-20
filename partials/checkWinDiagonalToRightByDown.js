import allSame from "./allSame.js";

function checkWinDiagonalToRightByDown(board, boardSize, winSize) {
  let hasWinner = false;
  let localBoard = board;

  while (hasWinner === false) {
    let iTemp = 0;
    for (
      let i = 0;
      i < boardSize * (boardSize - winSize + 1);
      i = i + boardSize
    ) {
      for (
        let j = 0;
        j < boardSize * (boardSize - winSize + 1 - iTemp) + 1;
        j = j + boardSize + 1
      ) {
        const sample = [];
        for (let k = 0; k < winSize * boardSize; k = k + boardSize + 1) {
          sample.push(localBoard[i + j + k]);
        }
        let result = allSame(sample);

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

export default checkWinDiagonalToRightByDown;
