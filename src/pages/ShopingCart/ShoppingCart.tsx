import CartProducts from "../../components/ShopProduct/CartProducts";
import UserFormPart from "../../components/UserForm/UserForm";
import styles from "./ShoppingCart.module.css";

const ShoppingCart = (): JSX.Element => {
  const { container, userForm, productList, submitButton } = styles;

  return (
    <form>
      <div className={container}>
        <UserFormPart className={userForm} />
        <CartProducts
          className={productList}
          data={[
            { title: "product", price: 3 },
            // { title: "product", price: 5 },
            // { title: "product", price: 42 },
            // { title: "product", price: 86 },
            // { title: "product", price: 1 },
            // { title: "product", price: 9 },
          ]}
        />
      </div>

      <button type="submit" className={submitButton}>
        Submit
      </button>
    </form>
  );
};

export default ShoppingCart;
