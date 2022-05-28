const theme: keyof typeof themeColors = 'lightblue';

export const themeColors = {
  lightblue: {
    primary: '#14CFEB',
    secondary: '#9C14EB',
    tertiary: '#63EB14',
  },
};

export const colors = {
  white: '#fefefe',
  black: '#111111',
  primary: themeColors[theme].primary,
  secondary: themeColors[theme].secondary,
  tertiary: themeColors[theme].tertiary,
};
