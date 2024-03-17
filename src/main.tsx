import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navigation from "./components/Navigation/Navigation.tsx";
// import ProductCard from "./components/ProductCard/ProductCard.tsx";
import Shop from "./pages/Shop/Shop.tsx";
import CartContextProvider from "./context/CartContext.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navigation />
      <CartContextProvider>
        <Routes>
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<ShoppingCart />} />
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
