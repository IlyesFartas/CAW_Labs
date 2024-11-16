function fn(a, b, ...args) {
  console.log("args:", args);
}
// A
fn(1, 2, 3, "A", "B", "C");

// B
fn(1, 2);

// C
let x = ["a", "b", "c", "d"];
fn(...x);
