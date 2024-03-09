import styles from "./ShopList.module.css";

interface ShopListProps {
  className?: string;
  data: string[];
}
const ShopList = (props: ShopListProps): JSX.Element => {
  const { data, className } = props;
  const { container, element } = styles;

  return (
    <div className={`${container} ${className}`}>
      <h2>Shops:</h2>
      {data.map((shop) => (
        <button className={element}>{shop}</button>
      ))}
    </div>
  );
};

export default ShopList;
