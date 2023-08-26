import request from "../../utils/request";
import { ConfigToken } from "../../utils/validateToken";

const addComment = async (comment) => {
  try {
    const { data } = await request.post("/api/enquiry/", comment);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const contectService = {
  addComment,
};
export default contectService;
