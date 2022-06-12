import { isNumeric } from './is-numeric';

describe('Testing if string is numeric', () => {
  const testStringTruthyNumeric = ['0', '0.0', ' 0.0 ', '1e+30'];

  const testStringFalsyNumeric = ['aaaa4bbbbb3', '1-1', '1eee1', '1.2.3', '1,2223', '2016-12-31'];

  it('Check if strings are numeric', () => {
    testStringTruthyNumeric.forEach((n) => {
      expect(isNumeric(n)).toBeTruthy();
    });
  });

  it('Check if strings are not numeric', () => {
    testStringFalsyNumeric.forEach((n) => {
      expect(isNumeric(n)).toBeFalsy();
    });
  });
});
