import axios from "axios";

const instance = axios.create({
  baseURL: "https://630a90b73249910032871229.mockapi.io",
});

const getUsers = () => {
    return instance.get('/users')
}


export default {
    getUsers,
}