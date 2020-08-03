const sum = require('../lib/sum');

test('Normal Case: 1 + 2 = 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('Null Cases', () => {
  expect(sum(null, 2)).toBe(2);
  expect(sum(1, null)).toBe(1);
  expect(sum(null, null)).toBe(0);
});

test('String Cases', () => {
  //expect(sum('A', 2)).toMatch('A2');
  expect(sum('A', 2)).toThrow('Does not support strings');
});  