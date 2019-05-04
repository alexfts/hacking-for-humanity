import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  typography: {
    useNextVariants: true
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
    }
  }
});
