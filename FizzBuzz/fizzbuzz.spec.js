const { generateNumbers, generateFizzBuzz } = require("./fizzbuzz");

describe("FizzBuzz", () => {
  it("should generate numbers from 1 to 100", () => {
    const numbers = generateNumbers();

    expect(numbers).toHaveLength(100);
  });

  it("should generate 'Fizz' instead of numbers divisible by 3", () => {
    const numbers = generateNumbers();

    const numbersWithFizzBuzz = generateFizzBuzz(numbers);

    const onlyFizz = numbersWithFizzBuzz.filter((number) => {
      return number === "Fizz";
    });

    expect(onlyFizz).toHaveLength(27);
  });

  it("should generate 'Buzz' instead of numbers divisible by 5", () => {
    const numbers = generateNumbers();

    const numbersWithFizzBuzz = generateFizzBuzz(numbers);

    const onlyBuzz = numbersWithFizzBuzz.filter((number) => {
      return number === "Buzz";
    });

    expect(onlyBuzz).toHaveLength(14);
  });

  it("should generate 'FizzBuzz' instead of numbers divisible by 3 and 5", () => {
    const numbers = generateNumbers();

    const numbersWithFizzBuzz = generateFizzBuzz(numbers);

    const onlyBuzz = numbersWithFizzBuzz.filter((number) => {
      return number === "FizzBuzz";
    });

    expect(onlyBuzz).toHaveLength(6);
  });
});
