export function fizzBuzz() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const result = [];

  for (let i = 0; i < numbers.length; i++) {
    const currentNumber = numbers[i];
    let fizzBuzzCount = '';

    if (currentNumber % 3 === 0) {
      fizzBuzzCount += 'Fizz';
    }

    if (currentNumber % 5 === 0) {
      fizzBuzzCount += 'Buzz';
    }

    if (currentNumber % 3 && currentNumber % 5) {
      fizzBuzzCount += 'fizzBuzz';
    }

    if (fizzBuzzCount === '') {
      fizzBuzzCount = currentNumber.toString();
    }

    result.push(fizzBuzzCount);
  }
  return result;
}
