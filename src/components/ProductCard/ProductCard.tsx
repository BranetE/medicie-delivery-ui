import { useCart } from "../../context/CartContext";
import styles from "./ProductCard.module.css";

interface ProductCardProps {
  title: string;
}

const ProductCard = (props: ProductCardProps): JSX.Element => {
  const { title } = props;
  const { card, placeholder, addButton } = styles;
  const { addProduct } = useCart();

  return (
    <div className={card}>
      <div className={placeholder}></div>
      <h3>{title}</h3>
      <button className={addButton}>Add To Cart</button>
    </div>
  );
};

export default ProductCard;
