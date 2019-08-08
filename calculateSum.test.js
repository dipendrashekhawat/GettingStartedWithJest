import {calculateSum} from './calculateSum';

// passing test case
test('adds 10 + 20 to equal 30', () => {
    expect(calculateSum(10,20)).toBe(30);
});

// failing test case
test('adds 2 + 2 to equal 4', () => {
    expect(calculateSum(2,2)).toBe(4);
});