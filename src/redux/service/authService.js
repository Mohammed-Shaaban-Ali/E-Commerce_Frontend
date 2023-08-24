import { toast } from "react-toastify";
import request from "../../utils/request";

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
const authService = {
  login,
  register,
};
export default authService;
