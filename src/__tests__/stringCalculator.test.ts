import { add } from '../stringCalculator';

describe('stringCalculator', () => {
  it('should return an array with the passed number in the function', () => {
    expect(add('2')).toStrictEqual([2]);
  });

  it('should return an empty array with the passsed value is an empty string', () => {
    expect(add('')).toStrictEqual([]);
  });

  it('should return an empty array with the passsed value is Nan', () => {
    expect(add('a')).toStrictEqual([]);
  });
});
