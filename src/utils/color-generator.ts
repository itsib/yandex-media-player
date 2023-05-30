import Vibrant from 'node-vibrant/dist/vibrant';

type Vec3 = [number, number, number];

declare class Color {
  constructor(rgb: Vec3, population: number);
  getPopulation: () => number;
  getYiq: () => number;
  getHex: () => string;
  getRgb: () => Vec3;
  getHsl: () => Vec3;
}

const CONTRAST_RATIO = 4.5;

const COLOR_SIMILARITY_THRESHOLD = 150;

const rgbToHex = (r: number, g: number, b: number): string => {
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1, 7);
};

const hslToRgb = (h: number, s: number, l: number): Vec3 => {
  let r: number;
  let g: number;
  let b: number;

  function hue2rgb(p: number, q: number, t: number): number {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
  }

  if (s === 0) {
    r = g = b = l;
  } else {
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }
  return [r * 255, g * 255, b * 255];
};

const luminance = (r: number, g: number, b: number): number => {
  const a = [r, g, b].map(v => {
    let w = v;
    w /= 255;
    return w <= 0.03928 ? w / 12.92 : ((w + 0.055) / 1.055) ** 2.4;
  });
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
};

const contrast = (rgb1: Vec3, rgb2: Vec3): number => {
  const lum1 = luminance(...rgb1);
  const lum2 = luminance(...rgb2);
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  return (brightest + 0.05) / (darkest + 0.05);
};

const getContrastRatio = (rgb1: Vec3, rgb2: Vec3) => Math.round((contrast(rgb1, rgb2) + Number.EPSILON) * 100) / 100;

const colorGenerator = (colors: Color[]): [string, string, string, string] => {
  colors.sort((colorA, colorB) => colorB.getPopulation() - colorA.getPopulation());

  const backgroundColor = colors[0];
  let foregroundColor;

  const contrastRatios = new Map();
  const approvedContrastRatio = (hex, rgb) => {
    if (!contrastRatios.has(hex)) {
      contrastRatios.set(hex, getContrastRatio(backgroundColor.getRgb(), rgb));
    }

    return contrastRatios.get(hex) > CONTRAST_RATIO;
  };

  // We take each next color and find one that has better contrast.
  for (let i = 1; i < colors.length && foregroundColor === undefined; i++) {
    // If this color matches, score, take it.
    if (approvedContrastRatio(colors[i].getHex(), colors[i].getRgb())) {
      foregroundColor = colors[i].getRgb();
      break;
    }

    // This color has the wrong contrast ratio, but it is the right color.
    // Let's find similar colors that might have the right contrast ratio

    const currentColor = colors[i];

    for (let j = i + 1; j < colors.length; j++) {
      const compareColor = colors[j];

      // difference. 0 is same, 765 max difference
      const diffScore =
        Math.abs(currentColor.getRgb()[0] - compareColor.getRgb()[0]) +
        Math.abs(currentColor.getRgb()[1] - compareColor.getRgb()[1]) +
        Math.abs(currentColor.getRgb()[2] - compareColor.getRgb()[2]);

      if (diffScore > COLOR_SIMILARITY_THRESHOLD) {
        continue;
      }

      if (approvedContrastRatio(compareColor.getHex(), compareColor.getRgb())) {
        foregroundColor = compareColor.getRgb();
        break;
      }
    }
  }

  if (foregroundColor === undefined) {
    foregroundColor = backgroundColor.getYiq() < 200 ? [255, 255, 255] : [0, 0, 0];
  }

  foregroundColor = new (backgroundColor as any).constructor(foregroundColor, 0);

  const [bgHueTurn, bgSaturation, bgLightness] = backgroundColor.getHsl();

  const bgHueDeg = 360 * bgHueTurn;
  const amount = bgHueDeg > 240 ? bgHueDeg - 240 : bgHueDeg > 120 ? bgHueDeg - 120 : bgHueDeg;
  const ratio = Math.abs(60 - amount) / 60;
  const threshold = 0.4 * ratio + 0.4;
  // console.debug('Background color');
  // console.debug('hue (turn):', bgHueTurn);
  // console.debug('hue (deg):', bgHueDeg);
  // console.debug('lightness', bgLightness);
  // console.debug('saturation', bgSaturation);
  // console.debug('threshold', threshold);

  // eslint-disable-next-line prettier/prettier
  return [
    foregroundColor.getHex(),
    backgroundColor.getHex(),
    rgbToHex(...hslToRgb(bgHueTurn, bgSaturation, bgLightness > threshold ? 0 : 1)),
    rgbToHex(...hslToRgb(bgHueTurn, bgSaturation, bgLightness > threshold ? 0.1 : 0.9)),
  ];
};

Vibrant._pipeline.generator.register('default', colorGenerator);
export const extractColors = async picture => new Vibrant(picture, { colorCount: 16 }).getPalette() as Promise<[string, string, string, string]>;
