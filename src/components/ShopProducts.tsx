import ProductCard from "./ProductCard";
import styles from "./FlexContainer.module.css";

interface ShopProductsProps {
  className?: string;
  data: string[];
}

const ShopProducts = (props: ShopProductsProps): JSX.Element => {
  const { data, className } = props;
  const { containerHorizontal } = styles;
  return (
    <div className={`${containerHorizontal} ${className}`}>
      {data.map((productTitle: string) => (
        <ProductCard title={productTitle} />
      ))}
    </div>
  );
};

export default ShopProducts;
