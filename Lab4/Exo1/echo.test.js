const exf = require("./echo");

test('prints the string "echo" 5 times', () => {
  console.log = jest.fn();
  exf("echo", 5);
  expect(console.log).toHaveBeenCalledTimes(5);
  expect(console.log).toHaveBeenCalledWith("echo");
});

test('prints the string "JS from server" 10 times', () => {
  console.log = jest.fn();
  exf("JS from server", 10);
  expect(console.log).toHaveBeenCalledTimes(10);
  expect(console.log).toHaveBeenCalledWith("JS from server");
});
