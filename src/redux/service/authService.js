import request from "../../utils/request";

const login = async (userData) => {
  // const { data } = await request.post("/api/user/login", userData);
  // if (data) {
  //   localStorage.setItem("user", JSON.stringify(data));
  // }
  // return data;
};

const authService = {
  login,
};
export default authService;
