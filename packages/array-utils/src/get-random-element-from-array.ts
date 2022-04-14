/**
 * Will return a random element inside any given array.
 *
 * @param   {any[]}  arr The array you want your element picked from.
 *
 * @return  {any}        Random element from array.
 */
export function getRandomElementFromArray(arr: any[]) {
  return arr[Math.floor(Math.random() * arr.length)];
}
