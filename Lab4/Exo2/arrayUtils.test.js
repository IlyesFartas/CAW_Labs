const { first, last, chunk,} = require("./arrayUtils");

test("return the first n elements of an array", () => {
  expect(first([1, 2, 3, 4, 5], 2)).toEqual([1, 2]);
});

test("return the last n elements of an array", () => {
  expect(last([1, 2, 3, 4, 5], 2)).toEqual([4, 5]);
});

test("the concatenation of all the elements of an array of Strings", () => {
  myColor = ["Red", "Green", "White", "Black"];
  expect(myColor.join('')).toBe("RedGreenWhiteBlack")
});

test("Divide an array into several sub-arrays of predefined size", () => {
  expect(chunk([1, 2, 3, 4, 5], 1)).toEqual([[1],[2],[3],[4],[5]]);
});
