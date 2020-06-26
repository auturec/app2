import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import App from 'app';
import AppProviders from './contexts';
import * as serviceWorker from './serviceWorker';
import './index.scss';

const AppRender = () => {
  // setting the default font to Montserrat
  const theme = createMuiTheme({
    typography: {
      fontFamily: 'Montserrat, sans-serif',
    },
  });

  return (
    <AppProviders>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </AppProviders>
  );
};

ReactDOM.render(<AppRender />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
