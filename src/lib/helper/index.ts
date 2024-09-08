// Helper function to convert hex color to RGB array format
export const hexToRgbArray = (hex: any) => {
  const bigint = parseInt(hex.slice(1), 16);
  const r = ((bigint >> 16) & 255) / 255;
  const g = ((bigint >> 8) & 255) / 255;
  const b = (bigint & 255) / 255;
  return [r, g, b, 1]; // RGB array with alpha 1
};

export function generateId() {
  const numbers = "0123456789";
  let result = "";
  for (let i = 0; i < 11; i++) {
    result =
      result + numbers.charAt(Math.floor(Math.random() * numbers.length));
  }
  return result;
}
