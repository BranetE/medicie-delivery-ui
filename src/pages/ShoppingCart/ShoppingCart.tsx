// import { useState } from "react";
import CartProducts from "../../components/ShopProduct/CartProducts";
import UserFormPart from "../../components/UserForm/UserForm";
import styles from "./ShoppingCart.module.css";
import { useCart } from "../../context/CartContext";
import { useEffect, useState } from "react";

const ShoppingCart = (): JSX.Element => {
  const { container, userForm, productList, submitButton, fullPrice } = styles;
  const { products } = useCart();
  const [totalPrice, setTotalPrice] = useState<number>();

  useEffect(() => {
    setTotalPrice(
      products
        ?.map((p) => p.price * p.quantity)
        .reduce((total, amount) => total + amount)
    );
  }, [products]);

  return (
    <form>
      <div className={container}>
        <UserFormPart className={userForm} />
        <CartProducts className={productList} data={products} />
      </div>

      <h3 className={fullPrice}>Full Price: ${totalPrice}</h3>
      <input type="submit" className={submitButton} value="Submit" />
    </form>
  );
};

export default ShoppingCart;
