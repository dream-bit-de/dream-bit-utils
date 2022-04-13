import { scaleArrayByFactor } from './scale-array-by-factor';

describe('Testing array scaling by factor', () => {
  const arrayToScale = [
    [0, 1],
    [1, 0]
  ];

  it('Scaling array horizontally', () => {
    const scaled = scaleArrayByFactor(arrayToScale, 2);
    expect(scaled[0].length).toBe(arrayToScale[0].length * 2);
  });

  it('Scaling array vertically', () => {
    const scaled = scaleArrayByFactor(arrayToScale, 2);
    expect(scaled.length).toBe(arrayToScale.length * 2);
  });
});
