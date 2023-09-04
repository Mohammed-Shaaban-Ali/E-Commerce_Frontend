import { toast } from "react-toastify";
import request from "../../utils/request";
import { ConfigToken } from "../../utils/validateToken";

const getAllBlogs = async () => {
  try {
    const { data } = await request.get("/api/blog");
    return data;
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
};
const getBlog = async (id) => {
  try {
    const { data } = await request.get(`/api/blog/${id}`);
    return data;
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
};

const blogService = { getAllBlogs, getBlog };
export default blogService;
