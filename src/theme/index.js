import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  typography: {
    useNextVariants: true,
    fontFamily: 'Oxygen, sans-serif'
  },
  palette: {
    primary: {
      light: '#daffef',
      main: '#44ffd1',
      dark: '#17bebb',
      contrastText: '#242038'
    },
    secondary: {
      main: '#23c9ff',
      contrastText: '#242038'
    },
    background: {
      default: '#daffef'
    },
    text: {
      primary: '#17bebb',
      secondary: '#23c9ff'
    }
  }
});
