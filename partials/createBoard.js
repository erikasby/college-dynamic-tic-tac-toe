let board = [];

function createBoard(boardLength) {
  for (let i = 0; i < boardLength; i++) {
    board.push("".toString());
  }
  return board;
}

export default createBoard;
