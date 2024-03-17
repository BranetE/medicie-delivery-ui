import { ProductType } from "../../api/productApi";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./ShopProduct.module.css";

interface ShopProductsProps {
  className?: string;
  data: ProductType[];
}

const ShopProducts = (props: ShopProductsProps): JSX.Element => {
  const { data, className } = props;
  const { container } = styles;
  return (
    <div className={`${container} ${className}`}>
      {data.map((product) => (
        <ProductCard
          key={product._id}
          title={product.title}
          price={product.price}
          shop={product.shop}
        />
      ))}
    </div>
  );
};

export default ShopProducts;
