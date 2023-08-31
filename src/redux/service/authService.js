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

const removeProductCart = async (id) => {
  try {
    const { data } = await request.delete(
      `/api/user/remove-cart/${id}`,
      ConfigToken
    );
    return data;
  } catch (error) {
    toast.error(error.response.data.message);
  }
};
const updateProductCartUsingQuantity = async (cartData) => {
  try {
    const { cartItemId, newQuantity } = cartData;
    //console.log(typeof +cartItemId);
    const { data } = await request.put(
      `/api/user/updateCartItem/${newQuantity}/${cartItemId}`,
      "",
      ConfigToken
    );
    return data;
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

const creatOrder = async (orderData) => {
  try {
    const { data } = await request.post(
      `/api/user/cart/create-order`,
      orderData,
      ConfigToken
    );
    return data;
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

const getMyOrder = async () => {
  try {
    const { data } = await request.get(`/api/user/cart/myorder`, ConfigToken);
    return data;
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

const updateMyProfile = async (Data) => {
  try {
    const { data } = await request.put(`/api/user/`, Data, ConfigToken);
    if (data) {
      const user = JSON.parse(localStorage.getItem("normalUser"));
      user.firstName = data.firstName;
      user.lastName = data.lastName;
      user.email = data.email;
      user.mobile = data.mobile;
      localStorage.setItem("normalUser", JSON.stringify(user));
    }
    return data;
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

const forgotPassword = async (Data) => {
  try {
    const { data } = await request.post(
      `/api/user/forgot-password-token`,
      Data
    );
    return data;
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

const resetPassword = async (Data) => {
  const { token, password } = Data;
  console.log(password);
  try {
    const { data } = await request.put(`/api/user/reset-password/${token}`, {
      password,
    });
    return data;
  } catch (error) {
    toast.error(error);
  }
};

const authService = {
  login,
  register,
  getWishlist,
  addCart,
  getCart,
  removeProductCart,
  updateProductCartUsingQuantity,
  creatOrder,
  getMyOrder,
  updateMyProfile,
  forgotPassword,
  resetPassword,
};
export default authService;
