import { useCart } from "../../context/CartContext";
import styles from "./ProductCard.module.css";
import { Product } from "../../types/Product";
import QuantitySelector from "./QuantitySelector";

interface ProductCardProps {
  product: Product;
}

const ProductCard = (props: ProductCardProps): JSX.Element => {
  const { product } = props;
  const { card, placeholder, addButton } = styles;
  const { addProduct } = useCart();

  return (
    <div className={card}>
      <div className={placeholder}></div>
      <h3>{product.title}</h3>
      <h4>Price: ${product.price}</h4>
      {product.quantity ? (
        <QuantitySelector defaultValue={product.quantity} onChange={changeQuantity()}/>
        />
      ) : (
        <button
          className={addButton}
          onClick={() => {
            alert("Product was added to your cart");
            addProduct(product);
          }}
        >
          Add To Cart
        </button>
      )}
    </div>
  );
};

export default ProductCard;
