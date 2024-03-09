import styles from "./ProductCard.module.css";

interface CheckOutProductCardProps {
  title: string;
  price: number;
}

const CheckOutProductCard = (props: CheckOutProductCardProps): JSX.Element => {
  const { title, price } = props;
  const { card, placeholder } = styles;

  return (
    <div className={card}>
      <div className={placeholder}></div>
      <h3>{title}</h3>
      <p>Total Price ${price}</p>
      <input type="number" />
    </div>
  );
};

export default CheckOutProductCard;
