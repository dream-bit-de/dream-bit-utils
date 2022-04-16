/**
 * Note that as numbers in JavaScript are IEEE 754 floating point numbers with round-to-nearest-even behavior,
 * the ranges claimed for the functions below (excluding the one for Math.random() itself) aren't exact.
 * If extremely large bounds are chosen (2^53 or higher),
 * it's possible in extremely rare cases to calculate the usually-excluded upper bound.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random | Math MDN}
 *
 * @note
 * Math.random() does not provide cryptographically secure random numbers.
 * Do not use them for anything related to security. Use the Web Crypto API instead, and more precisely the window.crypto.getRandomValues() method.
 *
 * @return  {number}  expected output: a number from 0 to <1
 */
export function getRandom(): number {
  return Math.random();
}

/**
 * This example returns a random integer between the specified values.
 * The value is no lower than min (or the next integer greater than min if min isn't an integer),
 * and is less than (but not equal to) max.
 *
 * @param   {number}  min  The minimum Value you want your number to have (possibility)
 * @param   {number}  max  The maximum Value you want your number to have (possibility)
 *
 * @return  {number}       a random number between min and max inclusive.
 */
export function getRandomIntInclusive(min: number, max: number): number {
  const normalizedMin = Math.ceil(min);
  const normalizedMax = Math.floor(max);
  return Math.floor(Math.random() * (normalizedMax - normalizedMin + 1) + normalizedMin); // The maximum is inclusive and the minimum is inclusive
}

/**
 * This example returns a random number between the specified values.
 * he returned value is no lower than (and may possibly equal) min, and is less than (and not equal) max.
 *
 * @param   {number}  min  The minimum Value you want your number to have (possibility)
 * @param   {number}  max  The maximum Value you want your number to have (possibility)
 *
 * @return  {number}       a random number between min and max
 */
export function getRandomArbitrary(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}
