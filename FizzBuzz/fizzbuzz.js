function generateNumbers() {
  const numbers = [];

  for (let i = 1; i <= 100; i++) {
    numbers.push(i);
  }

  return numbers;
}

const isFizz = (number) => number % 3 === 0;
const isBuzz = (number) => number % 5 === 0;

/**
 *
 * @param {Array<number>} numbers
 * @returns {Array<number | 'Fizz' | 'Buzz'>}
 */
function generateFizzBuzz(numbers) {
  return numbers.map((number) => {
    if (isFizz(number) && isBuzz(number)) {
      return "FizzBuzz";
    }
    if (isFizz(number)) {
      return "Fizz";
    }
    if (isBuzz(number)) {
      return "Buzz";
    }
    return number;
  });
}

module.exports = { generateNumbers, generateFizzBuzz };
