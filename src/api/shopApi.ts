import { instance } from "./axiosConfig";

const prefix = "/shop";

const shopApi = {
  getShops() {
    return instance.get(prefix);
  },
};

export default shopApi;
