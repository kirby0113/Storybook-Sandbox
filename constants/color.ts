const theme: keyof typeof themeColors = 'lightblue';

export const themeColors = {
  lightblue: {
    primary: { light: '#85e6f5', normal: '#14CFEB', dark: '#0e8da0' },
    secondary: { light: '#CB85F5', normal: '#9C14EB', dark: '#7C10BB' },
    tertiary: { light: '#C3F7A4', normal: '#63EB14', dark: '#4FBB10' },
  },
};

export const colors = {
  white: { light: '#fefefe', normal: '#fefefe', dark: '#fefefe' },
  black: { light: '#111111', normal: '#111111', dark: '#111111' },
  primary: themeColors[theme].primary,
  secondary: themeColors[theme].secondary,
  tertiary: themeColors[theme].tertiary,
};
