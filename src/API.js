import axios from "axios";
const instance = axios.create({
  baseURL: "http://localhost:3000",
});

const getUsers = () => {
  return instance.get("/users");
};

const postUsers = (users) => {
  return instance.post("/users", users);
};

const deleteUser = (number) => {
  return instance.delete(`/users/${number}`);
};
// const delete2 = () => {
//   return instance.delete("/users/2");
// };
// const delete3 = () => {
//   return instance.delete("/users/3");
// };
// const delete4 = () => {
//   return instance.delete("/users/4");
// };
// const delete5 = () => {
//   return instance.delete("/users/5");
// };

export default {
  getUsers,
  deleteUser,
  // delete2,
  // delete3,
  // delete4,
  // delete5,
  postUsers,
};
