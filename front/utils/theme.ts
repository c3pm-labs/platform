import { createMuiTheme } from '@material-ui/core/styles/';

const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#00b8e6',
    },
    success: {
      main: '#2AC940',
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
