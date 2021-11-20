import createBoard from "../partials/createBoard.js";

const boardLength = 9;

test("create board of 9 elements", () => {
  expect(createBoard(boardLength)).toEqual([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
});
