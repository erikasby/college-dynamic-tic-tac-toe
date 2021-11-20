import allSame from "../partials/allSame";

const board1 = ["X", "X", "X"];
const board2 = ["X", "X", ""];

test("add fully same board", () => {
  expect(allSame(board1)).toEqual(true);
});

test("add not full board", () => {
  expect(allSame(board2)).toEqual(false);
});
