import checkWinVertical from "../partials/checkWinVertical";

const board1 = ["X", "X", "X", "X", "X", "X", "X", "X", "X"];
const boardSize1 = "3";
const winSize1 = "3";

const board2 = ["", "", "", "X", "", "", "", "", ""];
const boardSize2 = "3";
const winSize2 = "3";

test("add good board", () => {
  expect(checkWinVertical(board1, boardSize1, winSize1)).toEqual(false);
});

test("add bad board", () => {
  expect(checkWinVertical(board2, boardSize2, winSize2)).toEqual(false);
});
