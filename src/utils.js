const upperBound = 256;

export const getColorValueArray = () => {
  const colorValueArr = [];
  for (let r = 8; r <= upperBound; r = r + 8) {
    for (let g = 8; g <= upperBound; g = g + 8) {
      for (let b = 8; b <= upperBound; b = b + 8) {
        colorValueArr.push({ r, g, b });
      }
    }
  }
  return colorValueArr;
};

export const getPixelPositionArray = () => {
  const pixelPositionArr = [];
  for (let x = 1; x <= 256; x = x + 1) {
    for (let y = 1; y <= 128; y = y + 1) {
      pixelPositionArr.push({ x, y });
    }
  }
  return pixelPositionArr;
};
