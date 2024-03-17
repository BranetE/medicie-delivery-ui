import { useEffect, useState } from "react";
import { ShopType } from "../../api/shopApi";
import ShopProducts from "../ShopProduct/ShopProducts";
import styles from "./ShopList.module.css";
import productApi, { ProductType } from "../../api/productApi";

interface ShopListProps {
  className?: string;
  data: ShopType[];
}
const ShopList = (props: ShopListProps): JSX.Element => {
  const { data } = props;
  const [activeShop, setActiveShop] = useState<ShopType>();
  const [products, setProducts] = useState<ProductType[]>([]);
  const { container, element } = styles;

  useEffect(() => {
    if (activeShop != undefined) {
      productApi
        .getProductsByShop(activeShop._id)
        .then((res) => setProducts(res.data));
    }
  }, [activeShop]);

  return (
    <div className={container}>
      <h2>Shops:</h2>
      {data.map((shop) => (
        <button
          key={shop._id}
          className={element}
          onClick={() => setActiveShop(shop)}
        >
          {shop.title}
        </button>
      ))}
    </div>
  );
};

export default ShopList;
