import { instance } from "./axiosConfig";

const prefix = "/product";

export type ProductType = {
  _id: string;
  title: string;
};

const productApi = {
  getProductsByShop(shopId: string) {
    return instance.get<ProductType[]>(`${prefix}/shop/${shopId}`);
  },
};

export default productApi;
