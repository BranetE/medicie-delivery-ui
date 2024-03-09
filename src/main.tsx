import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navigation from "./components/Navigation/Navigation.tsx";
import ProductCard from "./components/ProductCard/ProductCard.tsx";
import Shop from "./pages/Shop/Shop.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Navigation />
    {/* <ProductCard title="Card Product" /> */}
    <Shop />
    {/* <App /> */}
    <div />
  </React.StrictMode>
);
