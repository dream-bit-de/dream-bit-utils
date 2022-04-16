/**
 * Will sum up 2 numbers with a given limit.
 * If that limit would've been exceeded  by the addition, the limit is returned.
 *
 * @param   {number}  limit           the maximum number to be returned of sum.
 * @param   {number|number[]}  a      number to be summed up can also be an array of numbers
 * @param   {number}  b               number to be summed up
 *
 * @return  {number}                 returns the sum if it didn't exceed the limit, else the limit will be returned.
 */
export function additionWithLimit(limit: number, a: number | number[], b?: number) {
  if (Array.isArray(a)) {
    return a.reduce((acc, curr) => {
      if (acc + curr <= limit) {
        acc = acc + curr;
      } else {
        acc = limit;
      }
      return acc;
    }, 0);
  }

  if (a + b <= limit) return a + b;

  return limit; // return the maximum limit
}

/**
 * Will subtract 2 numbers with a given limit.
 * If that limit would've been undershot by the subtraction, the limit is returned.
 *
 * @param   {number}  limit  the maximum number to be returned of subtraction
 * @param   {number}  a      number to be subtracted from
 * @param   {number}  b      number to subtract.
 *
 * @return  {number}        returns the subtraction if it didn't undershot the limit, else the limit will be returned.
 */
export function subtractionWithLimit(limit: number, a: number, b: number) {
  if (a - b >= limit) return a - b;

  return limit; // return the minimum limit
}
