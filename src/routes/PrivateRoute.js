import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const getToken = JSON.parse(localStorage.getItem("normalUser"));

  return getToken?.token ? children : <Navigate to="/login" replace={true} />;
};
