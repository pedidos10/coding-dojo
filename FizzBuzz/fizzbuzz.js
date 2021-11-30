function generateNumbers() {
  const numbers = [];

  for (let i = 1; i <= 100; i++) {
    numbers.push(i);
  }

  return numbers;
}

/**
 *
 * @param {Array<number>} numbers
 * @returns {Array<number | 'Fizz' | 'Buzz'>}
 */
function generateFizzBuzz(numbers) {
  return numbers.map((number) => {
    if (number % 3 === 0) {
      return "Fizz";
    }
    if (number % 5 === 0) {
      return "Buzz";
    }
    return number;
  });
}

module.exports = { generateNumbers, generateFizzBuzz };
