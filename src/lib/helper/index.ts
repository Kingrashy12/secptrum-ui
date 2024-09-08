// Helper function to convert hex color to RGB array format
export const hexToRgbArray = (hex: any) => {
  const bigint = parseInt(hex.slice(1), 16);
  const r = ((bigint >> 16) & 255) / 255;
  const g = ((bigint >> 8) & 255) / 255;
  const b = (bigint & 255) / 255;
  return [r, g, b, 1]; // RGB array with alpha 1
};
