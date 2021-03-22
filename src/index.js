import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.scss";
import App from "./app/App";
import { CounterProvider } from "./context/counterContext";
import reportWebVitals from "./reportWebVitals";
import LangProvider from "./context/langContext";

ReactDOM.render(
  <LangProvider>
    <CounterProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CounterProvider>
  </LangProvider>,
  document.getElementById("root")
);

reportWebVitals();
