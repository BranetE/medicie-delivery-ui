import { instance } from "./axiosConfig";

const prefix = "/product";

const productApi = {
  getProductsByShop(shopId: string) {
    instance.get(`${prefix}/shop/${shopId}`);
  },
};

export default productApi;
