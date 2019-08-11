import {calculateSum, validateNumbers} from './calculateSum';

// passing test case
test('adds 10 + 20 to equal 30', () => {
    expect(calculateSum(10,20)).toBe(30);
});

// failing test case
test('adds 2 + 2 to equal 5', () => {
    expect(calculateSum(2,2)).toBe(5);
});

// Adding validation test cases
test('string is used instead of a number', () => {
    expect(validateNumbers('ds', 5)).not.toBeTruthy();
  });

  test('both the inputs are of type string instead of number', () => {
      expect(validateNumbers('Dipendra', 'Shekhawat')).toBeTruthy();
  });

  test('validation successful as both the inputs are numbers', () => {
    expect(validateNumbers(25, 25)).toBeTruthy();
});