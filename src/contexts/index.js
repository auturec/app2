import React from "react";
import { ToastProvider } from "react-toast-notifications";

const AppProviders = ({ children }) => {
  return <ToastProvider>{children}</ToastProvider>;
};

export default AppProviders;
