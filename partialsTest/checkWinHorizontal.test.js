import checkWinHorizontal from "../partials/checkWinHorizontal";

const board1 = ["X", "", "", "X", "", "", "X", "", ""];
const boardSize1 = "3";
const winSize1 = "3";

const boardLength1 = 9;
const boardLength2 = 9;

const board2 = ["", "", "", "", "", "", "", "", ""];
const boardSize2 = "3";
const winSize2 = "3";

test("add good board", () => {
  expect(
    checkWinHorizontal(board1, boardLength1, boardSize1, winSize1)
  ).toEqual(true);
});

test("add bad board", () => {
  expect(
    checkWinHorizontal(board2, boardLength2, boardSize2, winSize2)
  ).toEqual(true);
});
