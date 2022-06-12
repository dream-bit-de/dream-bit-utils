/**
 * This function will check if the given parameter is a numeric value.
 * Be aware that this function will not include any locale formatting.
 *
 * It is worth noting to read through dis Stack Overflow question:
 * @see https://stackoverflow.com/questions/175739/how-can-i-check-if-a-string-is-a-valid-number
 *
 * @param   {any}  toBeChecked  Any type to be checked if is number.
 *
 * @return  {boolean}           If the given parameter is a numeric value it will return true.
 */
export function isNumeric(toBeChecked: any): boolean {
  return (
    (typeof toBeChecked === 'number' || (typeof toBeChecked === 'string' && toBeChecked.trim() !== '')) &&
    !isNaN(toBeChecked as number)
  );
}
