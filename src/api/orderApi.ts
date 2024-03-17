import { Order } from "../types/Order";
import { instance } from "./axiosConfig";

const prefix = "/order";

const orderApi = {
  createOrder(order: Order) {
    instance.post(prefix, order);
  },
};

export default orderApi;
