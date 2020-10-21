import { add } from '../stringCalculator';

describe('stringCalculator', () => {
  it('should return an array with the passed number in the function', () => {
    expect(add('2')).toStrictEqual([2]);
  });

  it('should return an empty array when the passed value is an empty string', () => {
    expect(add('')).toStrictEqual([]);
  });

  it('should return an empty array when the passed value is Nan', () => {
    expect(add('a')).toStrictEqual([]);
  });

  it('should return an array when the values parsed as a numbers', () => {
    expect(add('2,4,5')).toStrictEqual([2, 4, 5]);
  });
});
