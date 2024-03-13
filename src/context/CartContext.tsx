import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export type UserProps = {
  name: string;
  email: string;
  phone: string;
  address: string;
};

export type ProductProps = {
  name: string;
  price: number;
  quantity: number;
};

interface CartContextProps {
  userData: UserProps | null;
  products: ProductProps[] | null;
  setUser: React.Dispatch<React.SetStateAction<UserProps>>;
  addProduct: (product: ProductProps) => void;
  changeQuantity: (name: string, newQuantity: number) => void;
  removeProduct: (name: string) => void;
}

export const INITIAL_STATE_USER: UserProps = {
  name: "",
  email: "",
  phone: "",
  address: "",
};

export const INITIAL_STATE_PRODUCTS: ProductProps[] = [
  {
    name: "Prdct",
    price: 900,
    quantity: 1,
  },
  {
    name: "Prdct2",
    price: 800,
    quantity: 1,
  },
];

const INITIAL_STATE_CONTEXT: CartContextProps = {
  userData: null,
  products: INITIAL_STATE_PRODUCTS,
  setUser: () => {},
  addProduct: () => {},
  changeQuantity: () => {},
  removeProduct: () => {},
};

interface CartContextProviderProps {
  children: ReactNode;
}

const CartContext = createContext<CartContextProps>(INITIAL_STATE_CONTEXT);

const CartContextProvider = (props: CartContextProviderProps): JSX.Element => {
  const [user, setUser] = useState<UserProps>(
    JSON.parse(
      localStorage.getItem("user") || JSON.stringify(INITIAL_STATE_USER)
    )
  );
  const [products, setProducts] = useState<ProductProps[]>(
    INITIAL_STATE_PRODUCTS
  );

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    }
  }, [user]);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  });

  const addProduct = (product: ProductProps) => {
    setProducts((prevState) => [...prevState, product]);
  };

  const removeProduct = (productName: string) => {
    setProducts((prevState) =>
      prevState.filter((item) => item.name != productName)
    );
  };

  const changeQuantity = (name: string, newQuantity: number) => {
    setProducts(
      products.map((item) =>
        item.name === name ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const contextValue = useMemo(
    () => ({
      userData: user,
      products: products,
      setUser: setUser,
      addProduct: addProduct,
      changeQuantity: changeQuantity,
      removeProduct: removeProduct,
    }),
    []
  );

  const { children } = props;

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};

export default CartContextProvider;
