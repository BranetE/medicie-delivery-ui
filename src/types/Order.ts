import { Product } from "./Product";
import { User } from "./user";

export type Order = {
  user: User;
  products: Product[];
};
