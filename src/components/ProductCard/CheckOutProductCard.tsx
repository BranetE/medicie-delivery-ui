// import { useState } from "react";
import styles from "./ProductCard.module.css";
import { useCart } from "../../context/CartContext";

interface CheckOutProductCardProps {
  title: string;
  price: number;
  quantity: number;
}

const CheckOutProductCard = (props: CheckOutProductCardProps): JSX.Element => {
  const { changeQuantity } = useCart();
  const { title, price, quantity } = props;
  const { card, placeholder } = styles;

  return (
    <div className={card}>
      <div className={placeholder}></div>
      <h3>{title}</h3>
      <p>Total Price ${price}</p>
      <input
        name="quantity"
        type="number"
        defaultValue={quantity}
        min={1}
        onChange={(e) => changeQuantity(title, parseInt(e.target.value))}
      />
    </div>
  );
};

export default CheckOutProductCard;
