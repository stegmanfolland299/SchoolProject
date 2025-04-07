function sumNumbers(a, b) {
  if (!Number.isInteger(a)) {
    throw new Error("Invalid input: 'a' must be an integer");
  }
  if (!Number.isInteger(b)) {
    throw new Error("Invalid input: 'b' must be an integer");
  }

  return a + b;
}

console.log(sumNumbers(10, 5)); // Output: 15
