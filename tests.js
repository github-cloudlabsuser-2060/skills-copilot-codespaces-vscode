const calculator = require('./calculator'); // assuming the calculator function is exported from a module

describe('Calculator', () => {
  test('adds two numbers correctly', () => {
    expect(calculator(1, 2, '+')).toBe(3);
  });

  test('subtracts two numbers correctly', () => {
    expect(calculator(5, 2, '-')).toBe(3);
  });

  test('multiplies two numbers correctly', () => {
    expect(calculator(3, 2, '*')).toBe(6);
  });

  test('divides two numbers correctly', () => {
    expect(calculator(6, 2, '/')).toBe(3);
  });

  test('throws an error when dividing by zero', () => {
    expect(() => calculator(1, 0, '/')).toThrow('Error! Division by zero is not allowed.');
  });

  test('throws an error when an invalid operator is used', () => {
    expect(() => calculator(1, 2, '^')).toThrow('Invalid operator!');
  });
});