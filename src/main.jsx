import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AppRouter from "./AppRouter";
import { BrowserRouter } from "react-router-dom";
// load library css
import "nexious-library/@index.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App>
        <AppRouter />
      </App>
    </BrowserRouter>
  </React.StrictMode>
);
