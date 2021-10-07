export type PaletteMode = 'dark' | 'light';

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
        primary: {
          main: '#00b8e6',
        },
        secondary: {
          main: '#f0f5f9',
        },
        success: {
          main: '#2AC940',
        },
        background: {
          default: '#ffffff',
        },
        text: {
          primary: '#333',
          secondary: '#E0E0E0',
          disabled: '#BDBDBD',
        },
        action: {
          focus: '#00B8E6',
          active: '#00B8E6',
        },
      }
      : {
        primary: {
          main: '#00b8e6',
        },
        secondary: {
          main: '#191919',
        },
        success: {
          main: '#2AC940',
        },
        background: {
          default: '#333',
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
    borderRadius: 5,
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
