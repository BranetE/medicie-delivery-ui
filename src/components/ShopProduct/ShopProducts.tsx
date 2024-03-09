import ProductCard from "../ProductCard/ProductCard";
import styles from "./ShopProduct.module.css";

interface ShopProductsProps {
  className?: string;
  data: string[];
}

const ShopProducts = (props: ShopProductsProps): JSX.Element => {
  const { data, className } = props;
  const { container } = styles;
  return (
    <div className={`${container} ${className}`}>
      {data.map((productTitle) => (
        <ProductCard title={productTitle} />
      ))}
    </div>
  );
};

export default ShopProducts;
