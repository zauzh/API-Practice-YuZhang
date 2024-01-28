// src/index.js
import React from "react";
import { createRoot } from "react-dom";
import App from "./App";

const root = createRoot(document.getElementById("app"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
