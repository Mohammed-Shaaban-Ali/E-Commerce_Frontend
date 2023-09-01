import { toast } from "react-toastify";
import request from "../../utils/request";
import { ConfigToken } from "../../utils/validateToken";

const addComment = async (comment) => {
  try {
    const { data } = await request.post("/api/enquiry/", comment);
    return data;
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

const contectService = {
  addComment,
};
export default contectService;
