import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "./assets/styles/globalStyle";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    {/* <FontStyles /> */}
    <App />
  </React.StrictMode>
);
