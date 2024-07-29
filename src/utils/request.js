import axios from "axios";

const request = axios.create({
  baseURL: "https://e-commerce-backend-9ux4.onrender.com",
});

export default request;
