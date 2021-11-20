import checkWinDiagonalToRightByRight from "../partials/checkWinDiagonalToRightByRight";

const board1 = ["X", "", "", "", "X", "", "", "", "X"];
const boardSize1 = "3";
const winSize1 = "3";

const board2 = ["", "X", "", "", "", "", "", "", ""];
const boardSize2 = "3";
const winSize2 = "3";

test("add true board", () => {
  expect(checkWinDiagonalToRightByRight(board1, boardSize1, winSize1)).toEqual(
    true
  );
});

test("add false board", () => {
  expect(checkWinDiagonalToRightByRight(board2, boardSize2, winSize2)).toEqual(
    false
  );
});
