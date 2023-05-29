export function hexToRgba(hex: string, alfa = 1): string | undefined {
  const parsed = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!parsed) {
    return undefined;
  }
  const [, r, g, b] = parsed;
  return `rgba(${parseInt(r, 16)}, ${parseInt(g, 16)}, ${parseInt(b, 16)}, ${alfa})`;
}
