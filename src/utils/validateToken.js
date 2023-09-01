const getToken = localStorage.getItem("normalUser")
  ? JSON.parse(localStorage.getItem("normalUser"))
  : null;

export const ConfigToken = {
  headers: {
    Authorization: `Bearer ${getToken?.token}`,
    accept: "application/json",
  },
};
