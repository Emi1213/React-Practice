import React from "react";
import ReactDOM from "react-dom/client";
import { CounterApp } from "./Components/CounterApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CounterApp value={3} />
  </React.StrictMode>
);
