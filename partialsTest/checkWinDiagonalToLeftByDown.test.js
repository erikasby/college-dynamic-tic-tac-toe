import checkWinDiagonalToLeftByDown from "../partials/checkWinDiagonalToLeftByDown";

const board1 = ["", "", "X", "", "X", "", "X", "", ""];
const boardSize1 = "3";
const winSize1 = "3";

const board2 = ["X", "X", "O", "X", "", "", "", "", ""];
const boardSize2 = "3";
const winSize2 = "3";

test("add true lbd board", () => {
  expect(checkWinDiagonalToLeftByDown(board1, boardSize1, winSize1)).toEqual(
    true
  );
});

test("add false lbd board", () => {
  expect(checkWinDiagonalToLeftByDown(board2, boardSize2, winSize2)).toEqual(
    false
  );
});
