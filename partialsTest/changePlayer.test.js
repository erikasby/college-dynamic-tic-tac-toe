import changePlayer from "../partials/changePlayer.js";

const player1 = "X";
const player2 = "O";

test("change player from X to O", () => {
  expect(changePlayer(player1)).toEqual("O");
});

test("change player from O to X", () => {
  expect(changePlayer(player2)).toEqual("X");
});
