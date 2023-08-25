import request from "../../utils/request";
import { ConfigToken } from "../../utils/validateToken";

const getProducts = async () => {
  try {
    const { data } = await request.get("/api/product");
    return data;
  } catch (error) {
    console.log(error);
  }
};
const addToWishList = async (prodId) => {
  try {
    const { data } = await request.put(
      "/api/product/wishlist",
      { prodId },
      ConfigToken
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

const productsService = {
  getProducts,
  addToWishList,
};
export default productsService;
