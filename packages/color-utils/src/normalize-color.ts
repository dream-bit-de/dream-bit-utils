import { rgbaToInt } from 'jimp';

/**
 * This function will normalize RGB or RGBA colors from string to integers for Jimp to use.
 * {@link https://github.com/oliver-moran/jimp | More on the Jimp GitHub Page}
 *
 * However if already a number is passed, it will be returned as is.
 * Furthermore a string will be tested against a regex, which will test if the string contains numbers.
 * If the alpha channel is not provided, it will be added as 255 on the last position of the array (string is split).
 * If the color is not a number or a string, it will be returned.
 *
 * ```typescript
 * // this is the initial rgb value.
 * const rgb: string = '180, -20, 30';
 *
 * // will be transformed to colorchannels like so:
 * const transformedRGBArr: string[] = [ '180', '20', '30', '255' ]
 *
 * // after that it will be clamped into a integer value like this:
 * const rgbIntVal: number = 3021217535;
 *
 * ````
 * Look into the function to understand it deeper.
 * @param   {string}  color  a string or number representing RGB or RGBA values: '180, -20, 30' or 3021217535 (both are the same)
 *
 * @return  {number}         Will return a integer value representing a given RGB or RGBA string value.
 */
export function normalizeColor(color: string | number): number {
  if (typeof color === 'number') return color;

  if (typeof color === 'string') {
    const regexIntFloat = /(?:\d*\.)?\d+/g;
    const regexInt = /^\d+$/;
    const colorChannels = color.match(regexIntFloat).filter((x) => regexInt.test(x));
    const colorChannelsLength = colorChannels.length;
    const colorChannelsFilteredLength = colorChannels.length;

    if (colorChannels == null || colorChannelsLength !== colorChannelsFilteredLength) {
      throw new Error(`color format: "${color}"`);
    } else if (colorChannelsLength < 3 || colorChannelsLength > 4) {
      throw new Error(`color format: "${color}"`);
    } else {
      const alpha = colorChannels[3];

      if (!alpha) {
        colorChannels[3] = '255';
      }

      return rgbaToInt(+colorChannels[0], +colorChannels[1], +colorChannels[2], +colorChannels[3]);
    }
  }
  return color;
}

/**
 *   This method converts HSL color values to RGB color values.
 *
 * @param   {number}  h       The H Value of HLS
 * @param   {number}  s       The S Value of HLS
 * @param   {number}  l       The L Value of HLS
 * @param   {Object}  rgb     RGB Values as Object e.g. { r: 0, g: 0, b: 0 }
 *
 * @return  {Object}          Returns HLS as RGB Object.
 */
export function normalizeHLSToRGB(h: number, s: number, l: number, rgb = { r: 0, g: 0, b: 0 }) {
  const newRGB = { ...rgb };
  const i = Math.floor(h * 6);
  const f = h * 6 - i;
  const p = l * (1 - s);
  const q = l * (1 - f * s);
  const t = l * (1 - (1 - f) * s);

  const modulo = i % 6;
  if (modulo === 0) {
    newRGB.r = l;
    newRGB.g = t;
    newRGB.b = p;
  }
  if (modulo === 1) {
    newRGB.r = q;
    newRGB.g = l;
    newRGB.b = p;
  }
  if (modulo === 2) {
    newRGB.r = p;
    newRGB.g = l;
    newRGB.b = t;
  }
  if (modulo === 3) {
    newRGB.r = p;
    newRGB.g = q;
    newRGB.b = l;
  }
  if (modulo === 4) {
    newRGB.r = t;
    newRGB.g = p;
    newRGB.b = l;
  }
  if (modulo === 5) {
    newRGB.r = l;
    newRGB.g = p;
    newRGB.b = q;
  }
  return newRGB;
}
