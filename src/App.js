import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import api from "./API";
// import User from "./components/User/User";
import { SortableItemProps } from "@thaddeusjiang/react-sortable-list";
import { Reorder } from "framer-motion"

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

  // useEffect(() => {
  //   // console.log(users);
  //   api.editUser(currentUser.id, 5)
  // }, [currentUser])
  

  function dragStartHandler(e, user) {
    setCurrnetUser(user);
    console.log(user);
  }


  return (
    <Reorder.Group axis="y" values={users} onReorder={setUsers} >
      {users.map((user) => (
        <Reorder.Item key={user.id} value={user} onDragStart={(e) => dragStartHandler(e, user)}>
          <h1>{user.lastName}</h1>
        </Reorder.Item>
      ))}
      <button onClick={(e) => api.editUser(currentUser.id, 5)}></button>
    </Reorder.Group>
  )
}

export default App;
