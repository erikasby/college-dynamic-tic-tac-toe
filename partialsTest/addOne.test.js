import addOne from "../partials/addOne.js";

const player = "X";

test("adds X or O", () => {
  expect(addOne(player)).toEqual("<span class='playerX'>X</span>");
});
