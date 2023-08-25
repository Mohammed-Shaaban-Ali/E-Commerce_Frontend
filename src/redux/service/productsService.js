import request from "../../utils/request";
import { ConfigToken } from "../../utils/validateToken";

const getProducts = async () => {
  const { data } = await request.get("/api/product");
  return data;
};
const addToWishList = async () => {
  const { data } = await request.get("/api/product");
  return data;
};

const productsService = {
  getProducts,
};
export default productsService;
