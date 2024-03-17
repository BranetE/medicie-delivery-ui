import { useNavigate } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = (): JSX.Element => {
  const { navbar, navbutton } = styles;
  const navigate = useNavigate();

  return (
    <div className={navbar}>
      <a className={navbutton} onClick={() => navigate("/shop")}>
        Shop
      </a>
      <a className={navbutton} onClick={() => navigate("/cart")}>
        Shopping Cart
      </a>
    </div>
  );
};

export default Navigation;
