import { createMuiTheme } from '@material-ui/core/styles/';

const theme = createMuiTheme({
  palette: {
    type: 'light',
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
      secondary: '#f6fbfe',
      disabled: '#BDBDBD',
    },
    action: {
      focus: '#34A0CE',
      active: '#34A0CE',
    },
    background: {
      default: '#fcfcfc',
    },
    background: {
      default: '#fcfcfc',
    },
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

export default theme;
