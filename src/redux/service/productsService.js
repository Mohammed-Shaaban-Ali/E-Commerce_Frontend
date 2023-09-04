import { toast } from "react-toastify";
import request from "../../utils/request";
import { ConfigToken } from "../../utils/validateToken";

const getProducts = async (filter) => {
  try {
    const { data } = await request.get(
      `/api/product?${
        filter?.category ? `category=${filter?.category}&&` : ""
      }${filter?.brand ? `brand=${filter?.brand}&&` : ""}${
        filter?.tag ? `tags=${filter?.tag}&&` : ""
      }${filter?.minPrice ? `price[gte]=${filter?.minPrice}&&` : ""}${
        filter?.maxPrice ? `price[lte]=${filter?.maxPrice}&&` : ""
      }${filter?.sort ? `sort=${filter?.sort}&&` : ""}    
      `
    );
    return data;
  } catch (error) {
    // console.log(error)
    toast.error(error?.response?.data?.message);
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
    toast.error(error?.response?.data?.message);
  }
};
const getsingleProduct = async (id) => {
  try {
    const { data } = await request.get(`/api/product/${id}`);
    return data;
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
};

const addRating = async (Data) => {
  try {
    const { data } = await request.put(
      `/api/product/rating`,
      Data,
      ConfigToken
    );
    return data;
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
};
const productsService = {
  getProducts,
  addToWishList,
  getsingleProduct,
  addRating,
};
export default productsService;
