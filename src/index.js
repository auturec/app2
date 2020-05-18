import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import CssBaseline from '@material-ui/core/CssBaseline';

import App from 'app';
import AppProviders from './contexts';
import * as serviceWorker from './serviceWorker';
import './index.scss';

const AppRender = () => {
  return (
    <AppProviders>
      <CssBaseline />
      <App />
    </AppProviders>
  );
};

ReactDOM.render(<AppRender />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
