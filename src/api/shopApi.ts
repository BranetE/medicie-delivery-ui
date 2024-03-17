import { Shop } from "../types/Shop";
import { instance } from "./axiosConfig";

const prefix = "/shop";

const shopApi = {
  getShops() {
    return instance.get<Shop[]>(prefix);
  },
};

export default shopApi;
