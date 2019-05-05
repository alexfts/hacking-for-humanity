import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Layout from './routes/Layout';
import { BrowserRouter } from 'react-router-dom';
import theme from './theme';
import './App.css';

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />

      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
