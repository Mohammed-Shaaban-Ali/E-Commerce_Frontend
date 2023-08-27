import { toast } from "react-toastify";
import request from "../../utils/request";
import { ConfigToken } from "../../utils/validateToken";

const login = async (userData) => {
  try {
    const { data } = await request.post("/api/user/login", userData);
    if (data) {
      localStorage.setItem("normalUser", JSON.stringify(data));
    }
    toast.success("Login Success");
  } catch (error) {
    toast.error(error.response.data.message);
  }
};
const register = async (userData) => {
  try {
    const { data } = await request.post("/api/user/register", userData);
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

const getWishlist = async () => {
  try {
    const { data } = await request.get("/api/user/wishlist", ConfigToken);
    return data;
  } catch (error) {
    toast.error(error.response.data.message);
  }
};
const addCart = async (cartdata) => {
  try {
    const { data } = await request.post(
      "/api/user/cart",
      cartdata,
      ConfigToken
    );
    return data;
  } catch (error) {
    toast.error(error.response.data.message);
  }
};
const getCart = async () => {
  try {
    const { data } = await request.get("/api/user/cart", ConfigToken);
    return data;
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

const authService = {
  login,
  register,
  getWishlist,
  addCart,
  getCart,
};
export default authService;
