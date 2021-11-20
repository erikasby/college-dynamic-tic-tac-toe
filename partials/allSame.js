function allSame(board) {
  let result = true;
  for (let i = 0; i < board.length; i++) {
    if (board[i] !== board[0] || board[i] === "") {
      result = false;
      break;
    }
  }
  console.log(result);
  return result;
}

export default allSame;
