import { Navigate } from "react-router-dom";

export const openRoute = ({ children }) => {
  const getToken = JSON.parse(localStorage.getItem("normalUser"));

  return getToken?.token ? <Navigate to="/" replace={true} /> : children;
};
