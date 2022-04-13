import { shuffleArray } from './shuffle-array';

describe('Testing array shuffling', () => {
  const arrayToBeShuffled = [0, 1, 2, 3, 4, 5];

  it('Shuffling Array with the Fisher-Yates (aka Knuth) Shuffle', () => {
    const shuffledArray = shuffleArray(arrayToBeShuffled);
    expect(shuffledArray).toEqual(arrayToBeShuffled);
  });
});
