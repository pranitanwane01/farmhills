
// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import "./index.css";
// import CartProvider from "./context/CartContext";
// import AuthProvider from "./context/AuthContext";

// import { BrowserRouter } from "react-router-dom";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <BrowserRouter>
//   <AuthProvider>
//     <CartProvider>
//       <App />
//     </CartProvider>
//     </AuthProvider>
//   </BrowserRouter>,3
// );

import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";

import { BrowserRouter } from "react-router-dom";

import CartProvider from "./context/CartContext";
import AuthProvider from "./context/AuthContext";

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
