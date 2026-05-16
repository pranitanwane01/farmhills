
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import CartProvider from "./context/CartContext";
import AuthProvider from "./context/AuthContext";

import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <AuthProvider>
    <CartProvider>
      <App />
    </CartProvider>
    </AuthProvider>
  </BrowserRouter>,3
);

