import ShopList from "../../components/ShopList/ShopList";
import ShopProducts from "../../components/ShopProduct/ShopProducts";
import styles from "./Shop.module.css";

const Shop = (): JSX.Element => {
  const { container, shopList, productList } = styles;

  return (
    <div className={container}>
      <ShopList
        className={shopList}
        data={[
          "shop1",
          "shopshopshop",
          "shop3",
          "shop4",
          "shop5",
          "shop1",
          "shopshopshop",
          "shop3",
          "shop4",
          "shop5",
          "shop1",
          "shopshopshop",
          "shop3",
          "shop4",
          "shop5",
        ]}
      />
      <ShopProducts
        className={productList}
        data={[
          "pr1",
          "product",
          "pr3",
          "pr4",
          "pr1",
          "product",
          "pr3",
          "pr4",
          "pr1",
          "product",
          "pr3",
          "pr4",
        ]}
      />
    </div>
  );
};

export default Shop;
