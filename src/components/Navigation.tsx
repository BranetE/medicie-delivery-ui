import styles from "./Navigation.module.css";

const Navigation = (): JSX.Element => {
  const { navbar, navbutton } = styles;

  return (
    <div className={navbar}>
      <a className={navbutton}>Shop</a>
      <a className={navbutton}>Shopping Cart</a>
    </div>
  );
};

export default Navigation;
