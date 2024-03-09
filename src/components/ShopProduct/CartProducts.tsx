import CheckOutProductCard from "../ProductCard/CheckOutProductCard";
import styles from "./ShopProduct.module.css";

interface CartProductProps {
  className?: string;
  data: { price: number; title: string }[];
}

const CartProducts = (props: CartProductProps): JSX.Element => {
  const { className, data } = props;
  const { container } = styles;

  return (
    <div className={`${className} ${container}`}>
      {data.map(({ title, price }) => (
        <CheckOutProductCard title={title} price={price} />
      ))}
    </div>
  );
};

export default CartProducts;
