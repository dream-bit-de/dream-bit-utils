import { getRandomElementFromArray } from './get-random-element-from-array';

describe('Testing returning of random element', () => {
  const arr = [0, 1, 2, 3, 4, 5];

  it('Get random element from array', () => {
    const elem: number = getRandomElementFromArray(arr);
    expect(arr.includes(elem)).toBeTruthy();
  });
});
