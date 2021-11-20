import isValid from "../partials/isValid.js";

const tile1 = "";
const tile2 = "test";

test("check if tile is empty", () => {
  expect(isValid(tile1)).toEqual(true);
});

test("check if tile is not empty", () => {
  expect(isValid(tile2)).toEqual(false);
});
