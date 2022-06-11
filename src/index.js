import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ItemProvider } from "../src/Contexts/ItemContext";
import { CartProvider } from "../src/Contexts/CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <CartProvider>
      <ItemProvider>
        <App />
      </ItemProvider>
    </CartProvider>
  </BrowserRouter>
);
reportWebVitals();