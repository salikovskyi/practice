import axios from "axios";

const instance = axios.create({
  baseURL: "https://630a90b73249910032871229.mockapi.io",
});

const getUsers = () => {
  return instance.get("/users?sortBy=createdAt&order=desc");
};

const editUser = (id, or) => {
  return instance.put(`/users/${id}`, `${or}`);
};

export default {
  getUsers,
  editUser,
};
