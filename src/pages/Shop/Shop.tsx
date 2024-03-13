import { useEffect, useState } from "react";
// import ShopProducts from "../../components/ShopProduct/ShopProducts";
import styles from "./Shop.module.css";
import shopApi, { ShopType } from "../../api/shopApi";
import ShopProducts from "../../components/ShopProduct/ShopProducts";
import productApi, { ProductType } from "../../api/productApi";

const Shop = (): JSX.Element => {
  const [shops, setShops] = useState<ShopType[]>([]);
  const [activeShop, setActiveShop] = useState<ShopType>();
  const [products, setProducts] = useState<ProductType[]>([]);
  const { container, shopList, productList, element } = styles;

  useEffect(() => {
    shopApi.getShops().then((res) => setShops(res.data));
  }, []);

  useEffect(() => {
    if (activeShop != undefined) {
      productApi
        .getProductsByShop(activeShop._id)
        .then((res) => setProducts(res.data));
    }
  }, [activeShop]);

  return (
    <div className={container}>
      <div className={`${shopList}`}>
        <h2>Shops:</h2>
        {shops.map((shop) => (
          <button
            key={shop._id}
            className={element}
            onClick={() => setActiveShop(shop)}
          >
            {shop.title}
          </button>
        ))}
      </div>
      <ShopProducts className={productList} data={products} />
    </div>
  );
};

export default Shop;
