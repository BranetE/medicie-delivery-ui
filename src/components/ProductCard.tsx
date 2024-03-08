import styles from "./ProductCard.module.css";

interface ProductCardProps {
  title: string;
}

const ProductCard = (props: ProductCardProps): JSX.Element => {
  const { title } = props;
  const { card, placeholder, addbutton } = styles;

  return (
    <div className={card}>
      <div className={placeholder}></div>
      <h3>{title}</h3>
      <button className={addbutton}>Add To Cart</button>
    </div>
  );
};

export default ProductCard;
