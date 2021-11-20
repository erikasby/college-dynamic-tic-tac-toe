import updateBoard from "../partials/updateBoard.js";

const player = "X";

test("return current player", () => {
  expect(updateBoard(player)).toEqual(player);
});
