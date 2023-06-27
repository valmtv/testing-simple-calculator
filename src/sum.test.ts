import { sum } from './sum';

describe('sum() returns', () => {
  describe('for positive numbers sum() returns', () => {
    it('sum of two numbers', () => {
      expect(sum(1,2)).toBe(3);
      expect(sum(4,5)).toBe(9);
    });
  });
  describe('for negative numbers sum() returns', () => {
    it('sum of two numbers', () => {
      expect(sum(-1,2)).toBe(1);
      expect(sum(-4,-5)).toBe(-9);
    });
  });
});
