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
    console.log(error.request.data.message);
  }
};
const getsingleProduct = async (id) => {
  try {
    const { data } = await request.get(`/api/product/${id}`);
    return data;
  } catch (error) {
    console.log(error.request.data.message);
  }
};
const productsService = {
  getProducts,
  addToWishList,
  getsingleProduct,
};
export default productsService;
