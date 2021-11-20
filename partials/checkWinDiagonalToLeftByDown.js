import allSame from "./allSame.js";

function checkWinDiagonalToLeftByDown(board, boardSize, winSize) {
  let hasWinner = false;
  let localBoard = board;

  //same as RightByRight but in push give +boardSize
  while (hasWinner === false) {
    let iTemp = 0;
    for (
      let i = boardSize - 1;
      i < boardSize * (boardSize - winSize + 1);
      i = i + boardSize
    ) {
      for (
        let j = 0;
        // j < boardSize * boardSize - boardSize * 2;
        j < boardSize * (boardSize - winSize - iTemp) + 1;
        j = j + boardSize - 1
      ) {
        const sample = [];
        console.log(sample);
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

export default checkWinDiagonalToLeftByDown;
