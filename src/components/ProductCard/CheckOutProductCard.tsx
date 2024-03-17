// import { useState } from "react";
import styles from "./ProductCard.module.css";
import { useCart } from "../../context/CartContext";
import { useState } from "react";

interface CheckOutProductCardProps {
  title: string;
  price: number;
  quantity: number;
}

const CheckOutProductCard = (props: CheckOutProductCardProps): JSX.Element => {
  const { changeQuantity } = useCart();
  const { title, price, quantity } = props;
  const [totalPrice, setTotalPrice] = useState(price * quantity);
  const { card, placeholder } = styles;

  return (
    <div className={card}>
      <div className={placeholder}></div>
      <h3>{title}</h3>
      <p>Total Price ${totalPrice}</p>
      <input
        name="quantity"
        type="number"
        defaultValue={quantity}
        min={1}
        onChange={(e) => {
          const targetValue = parseInt(e.target.value);
          changeQuantity(title, targetValue);
          setTotalPrice(price * targetValue);
        }}
      />
    </div>
  );
};

export default CheckOutProductCard;
