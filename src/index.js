import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GlobalStyle } from "./assetss/styles/globalStyles";
import { AppProvider } from "./context/context";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <GlobalStyle />
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
