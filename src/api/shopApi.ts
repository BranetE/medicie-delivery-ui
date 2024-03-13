import { instance } from "./axiosConfig";

const prefix = "/shop";

export type ShopType = {
  _id: string;
  title: string;
};

const shopApi = {
  getShops() {
    return instance.get<ShopType[]>(prefix);
  },
};

export default shopApi;
