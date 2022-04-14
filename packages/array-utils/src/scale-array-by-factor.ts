/**
 * This function will scale any given 2-dimensional array [[this will be scaled, this will be scaled]] by a given factor.
 * {@link https://stackoverflow.com/a/49640959/4457744 | Inspired by Stackoverflow Answer}
 *
 * ```typescript
 * const arr: number[][] = [[1,4]]
 * const factor: number =  2;
 * 
 * // will return [[1,1,4,4]]
 * const scaledArr: number[][] = scaleArrayByFactor(arr, factor);

 * ````
 *  if you want to scale multidimensional array, use a recursion as a wrapper.
 *
 * @param   {any[][]}  arr     Any 2-dimensional array to be scaled
 * @param   {number[][]}  factor  the factor to scale the given array.
 *
 * @return  {string[][]}          returns the scaled array by factor.
 */
export function scaleArrayByFactor(arr: any[][], factor: number): any[][] {
  let scaled = [];

  for (let r = 0; r < arr.length; r++) {
    const row = arr[r];

    let scaledPixelData = [];
    for (let pix = 0; pix < row.length; pix++) {
      const pixel = row[pix];
      // do not use .apply as it will result in a call stack limit exceeding error for larger arrays.
      scaledPixelData = scaledPixelData.concat(Array(factor).fill(pixel));
    }
    scaled = scaled.concat(Array(factor).fill(scaledPixelData));
  }

  return scaled;
}
