import { evenNumbers, toDollars, divideBy, multiplyBy } from './numbers';

describe('evenNumbers', () => {
  it('returns the even numbers', () => {
    const numbers = [1, 4, 5, 10, 0];
    const result = evenNumbers(numbers);
    expect(result).toEqual([4, 10, 0]);
  });
});

describe('toDollars', () => {
  it('returns the number formatted in dollars and cents', () => {
    const number = 123.456;
    const result = toDollars(number);
    expect(result).toEqual('$123.46');
  });
});

describe('divideBy', () => {
  it('Returns a new array of numbers where every entry has been divided by the given divisor', () => {
    const numbers = [1, 4, 5, 10, 0];
    const divisor = 2;
    const result = divideBy(numbers, divisor);
    expect(result).toEqual([0.5, 2, 2.5, 5, 0]);
  });
});

describe('multiplyBy', () => {
  it('Modifies an object by multiplying the value of each key, but only if that value is a number', () => {
    const obj = { a: 2, b: 4, c: 7, d: 10 };
    const multiplier = 2;
    const result = multiplyBy(obj, multiplier);
    expect(result).toEqual({ a: 4, b: 8, c: 14, d: 20 });
  });

  it('Returns an unchanged object if there are no numeric values', () => {
    const obj = { a: 'hello', b: true, c: null };
    const multiplier = 2;
    const result = multiplyBy(obj, multiplier);
    expect(result).toEqual({ a: 'hello', b: true, c: null });
  });
  it('modifies the original object', () => {
    const obj = { foo: 1, bar: '2' };
    const result = multiplyBy(obj, 3);
    expect(obj).toBe(result);
  });
});
