import { instance } from "./axiosConfig";

const prefix = "/order";

const orderApi = {
  createOrder(order) {
    instance.post(prefix, order);
  },
};

export default orderApi;
