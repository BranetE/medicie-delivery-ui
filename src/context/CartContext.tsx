import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Product } from "../types/Product";
import { User } from "../types/User";

interface CartContextProps {
  userData: User | null;
  products: Product[] | null;
  setUser: React.Dispatch<React.SetStateAction<User>>;
  addProduct: (product: Product) => void;
  changeQuantity: (name: string, newQuantity: number) => void;
  removeProduct: (name: string) => void;
}

export const INITIAL_STATE_USER: User = {
  name: "",
  email: "",
  phone: "",
  address: "",
};

export const INITIAL_STATE_PRODUCTS: Product[] = [
  {
    title: "",
    price: 900,
    shop: "",
    quantity: 1,
  },
  {
    title: "",
    price: 800,
    shop: "",
    quantity: 1,
  },
];

const INITIAL_STATE_CONTEXT: CartContextProps = {
  userData: null,
  products: [],
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
  const [user, setUser] = useState<User>(
    JSON.parse(
      localStorage.getItem("user") || JSON.stringify(INITIAL_STATE_USER)
    )
  );
  const [products, setProducts] = useState<Product[]>(
    JSON.parse(localStorage.getItem("products") || "[]")
  );

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    }
  }, [user]);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  });

  const addProduct = (product: Product) => {
    // const foundProduct = products.find((p) => p.title == product.title);
    // if (foundProduct && foundProduct.quantity) {
    //   changeQuantity(foundProduct.title, foundProduct.quantity + 1);
    if (product.quantity) {
      changeQuantity(product.title, product.quantity + 1);
    } else {
      product.quantity = 1;
      setProducts((prevState) => [...prevState, product]);
    }
  };

  const removeProduct = (productTitle: string) => {
    setProducts((prevState) =>
      prevState.filter((item) => item.title != productTitle)
    );
  };

  const changeQuantity = (name: string, newQuantity: number) => {
    setProducts(
      products.map((item) =>
        item.title === name ? { ...item, quantity: newQuantity } : item
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
    [user, products]
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
