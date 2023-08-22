const getToken = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;

export const ConfigToken = {
  headers: {
    Authorization: `Bearer ${getToken !== null ? getToken.token : ""}`,
    accept: "application/json",
  },
};
