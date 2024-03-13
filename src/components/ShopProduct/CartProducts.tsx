import { ProductProps } from "../../context/CartContext";
import CheckOutProductCard from "../ProductCard/CheckOutProductCard";
import styles from "./ShopProduct.module.css";

interface CartProductProps {
  className?: string;
  data: ProductProps[] | null;
}

const CartProducts = (props: CartProductProps): JSX.Element => {
  const { className, data } = props;
  const { container } = styles;

  return (
    <div className={`${className} ${container}`}>
      {data?.map(({ name, price, quantity }) => (
        <CheckOutProductCard
          key={name}
          title={name}
          price={price}
          quantity={quantity}
        />
      ))}
    </div>
  );
};

export default CartProducts;
