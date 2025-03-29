function calculateAverage(numbers) {
  if (numbers.length === 0) return 0;
  let sum = 0;
  numbers.forEach(number => {
    sum += number;
  });
  return sum / numbers.length;
}
