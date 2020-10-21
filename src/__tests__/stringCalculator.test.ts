import { add } from '../stringCalculator';

describe('stringCalculator', () => {
  it('should return an array with the passed number in the function', () => {
    expect(add('2')).toStrictEqual([2]);
  });
});
