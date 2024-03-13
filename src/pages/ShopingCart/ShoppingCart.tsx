// import { useState } from "react";
import CartProducts from "../../components/ShopProduct/CartProducts";
import UserFormPart from "../../components/UserForm/UserForm";
import styles from "./ShoppingCart.module.css";
import { useCart } from "../../context/CartContext";

// interface ShoppingCartFormData {
//   name: string;
//   email: string;
//   phone: string;
//   address: string;
//   products: number[];
// }

const ShoppingCart = (): JSX.Element => {
  const { container, userForm, productList, submitButton } = styles;
  // const [value, setValue] = useState<ShoppingCartFormData>({
  //   name: "",
  //   email: "",
  //   phone: "",
  //   address: "",
  //   products: [],
  // });

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setValue({ ...value, [e.target.name]: e.target.value });
  // };

  const { products } = useCart();

  return (
    <form>
      <div className={container}>
        <UserFormPart className={userForm} />
        <CartProducts className={productList} data={products} />
      </div>

      <input type="submit" className={submitButton} />
    </form>
  );
};

export default ShoppingCart;
