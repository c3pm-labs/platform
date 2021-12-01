import { ThemeOptions } from '@material-ui/core';

export type PaletteMode = 'dark' | 'light';

export const getDesignTokens = (mode: PaletteMode): ThemeOptions => ({
  palette: {
    type: mode,
    ...(mode === 'light'
      ? {
        primary: {
          main: '#34A0CE',
        },
        secondary: {
          main: '#FF7044',
        },
        success: {
          main: '#2AC940',
        },
        text: {
          primary: '#333',
          secondary: '#BDBDBD',
          disabled: '#BDBDBD',
        },
        action: {
          focus: '#34A0CE',
          active: '#34A0CE',
        },
        background: {
          default: '#fcfcfc',
        },
      }
      : {
        primary: {
          main: '#34A0CE',
        },
        secondary: {
          main: '#ff7044',
        },
        success: {
          main: '#2AC940',
        },
        background: {
          default: '#191919',
        },
        text: {
          primary: '#ffffff',
          secondary: '#f5f5f5',
          disabled: '#BDBDBD',
        },
        action: {
          focus: '#00B8E6',
          active: '#00B8E6',
        },
      }),
  },
  shape: {
    borderRadius: 25,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1025,
      lg: 1280,
      xl: 1920,
    },
  },
});
