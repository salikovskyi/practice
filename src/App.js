import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import api from "./API";
// import User from "./components/User/User";
import { SortableItemProps } from "@thaddeusjiang/react-sortable-list";
import { Reorder } from "framer-motion";
import { useDrag } from "react-dnd";

function App() {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrnetUser] = useState(null);
  useEffect(() => {
    const beach = async () => {
      const { data } = await api.getUsers();
      setUsers(data);
    };

    beach();
  }, []);

  useEffect(() => {
    console.log(users);
  }, [users])

  // function eq() {
  //   api.deleteUser5();
  //   api.deleteUser4();
  //   api.deleteUser3();
  //   api.deleteUser2();
  //   api.deleteUser1();
  // }
  function deletee() {
    users.forEach((el, i, arr) => {
      api.deleteUser(i + 1);
    });
  }

  
  return (
    <Reorder.Group axis="y" values={users} onReorder={setUsers}>
      {users.map((user) => (
        <Reorder.Item key={user.id} value={user}>
          <h1>{user.lastName}</h1>
        </Reorder.Item>
      ))}
      <button
        onClick={(e) => {
          api.postUsers(users[0]);
          deletee();


        }}
      >
        СОХРАНЯЛКА
      </button>
    </Reorder.Group>
  );
}

export default App;
