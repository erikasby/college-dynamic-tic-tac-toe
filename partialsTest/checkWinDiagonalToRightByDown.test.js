import checkWinDiagonalToRightByDown from "../partials/checkWinDiagonalToRightByDown";

const board1 = ["X", "", "", "", "X", "", "", "", "X"];
const boardSize1 = "3";
const winSize1 = "3";

const board2 = ["", "", "O", "", "", "", "", "", ""];
const boardSize2 = "3";
const winSize2 = "3";

test("add true board", () => {
  expect(checkWinDiagonalToRightByDown(board1, boardSize1, winSize1)).toEqual(
    true
  );
});

test("add false board", () => {
  expect(checkWinDiagonalToRightByDown(board2, boardSize2, winSize2)).toEqual(
    false
  );
});
