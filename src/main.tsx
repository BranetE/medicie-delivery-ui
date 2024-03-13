import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navigation from "./components/Navigation/Navigation.tsx";
// import ProductCard from "./components/ProductCard/ProductCard.tsx";
// import Shop from "./pages/Shop/Shop.tsx";
import ShoppingCart from "./pages/ShopingCart/ShoppingCart.tsx";
import CartContextProvider from "./context/CartContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Navigation />
    <CartContextProvider>
      <ShoppingCart />
    </CartContextProvider>
  </React.StrictMode>
);
