import React from "react";
import ReactDOM from "react-dom";
// import { BrowserRouter } from 'react-router-dom';

import App from "./App";
import AppProviders from "./contexts";
import * as serviceWorker from "./serviceWorker";

import "./index.scss";

const AppRender = () => {
  return (
    <AppProviders>
      {/* <BrowserRouter> */}
      <App />
      {/* </BrowserRouter> */}
    </AppProviders>
  );
};

ReactDOM.render(<AppRender />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
