import { Dimensions, PixelRatio } from 'react-native';

const dynamicFontSize = (size: number): number => {
  const scale = Dimensions.get('window').width / 320; // Adjust the base width as needed
  const newSize = size * scale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

const getCardWidth = (percentage: number): number => {
  const windowWidth = Dimensions.get('window').width;
  return windowWidth * percentage;
};

export { dynamicFontSize, getCardWidth };
