import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navigation from "./components/Navigation.tsx";
import ProductCard from "./components/ProductCard.tsx";
import Shop from "./pages/Shop.tsx";

const shops = ["shop1", "shopshopshop", "shop3", "shop4", "shop5"];

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Navigation />
    {/* <ProductCard title="Card Product" /> */}
    <Shop />
    {/* <App /> */}
    <div />
  </React.StrictMode>
);
