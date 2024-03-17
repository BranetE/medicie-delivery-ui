import { Product } from "../types/Product";
import { instance } from "./axiosConfig";

const prefix = "/product";

const productApi = {
  getProductsByShop(shopId: string) {
    return instance.get<Product[]>(`${prefix}/shop/${shopId}`);
  },
};

export default productApi;
