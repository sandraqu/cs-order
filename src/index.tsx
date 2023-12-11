import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import Order from "./components/features/order/Order";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Order />
  </React.StrictMode>,
);
