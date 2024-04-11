import { fizzBuzz } from './number';

describe('number length is 15', () => {
  it('length 15', () => {
    const lengthNumbers = fizzBuzz();
    expect(lengthNumbers.length).toBe(15);
  });

  it('multiple of 3', () => {
    const lengthNumbers = fizzBuzz();
    expect(lengthNumbers[2]).toBe('Fizz');
  });

  it('multiple of 5', () => {
    const lengthNumbers = fizzBuzz();
    expect(lengthNumbers[4]).toBe('Buzz');
  });

  it('multiple of 3 and 5', () => {
    const lengthNumbers = fizzBuzz();
    expect(lengthNumbers[14]).toBe('FizzBuzz');
  });
});
