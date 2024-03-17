import { Product } from "../../types/Product";
import CheckOutProductCard from "../ProductCard/CheckOutProductCard";
import styles from "./ShopProduct.module.css";

interface CartProductProps {
  className?: string;
  data: Product[] | null;
}

const CartProducts = (props: CartProductProps): JSX.Element => {
  const { className, data } = props;
  const { container } = styles;

  return (
    <div className={`${className} ${container}`}>
      {data?.map(({ title, price, quantity }) => (
        <CheckOutProductCard title={title} price={price} quantity={quantity} />
      ))}
    </div>
  );
};

export default CartProducts;
