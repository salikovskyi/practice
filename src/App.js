import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import api from "./API";
// import User from "./components/User/User";
import { SortableItemProps } from "@thaddeusjiang/react-sortable-list";

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

  function dragStartHandler(e, user) {
    setCurrnetUser(user);
    // console.log(user);
  }
  function dragEndHandler(e) {
    e.target.style.background = "white";
  }
  function dragOverHandler(e) {
    e.preventDefault();
    e.target.style.background = "lightgray";
  }
  function dropHandler(e, user) {
    e.preventDefault();
    setUsers(
      users.map((c) => {
        // console.log(c);
        if (c.id === user.id) {
          return { ...c, order: currentUser.order };
        }
        if (c.id === currentUser.id) {
          return { ...c, order: user.order };
        }
        return c;
      })
    );
    e.target.style.background = "white";
  }

  const sortCards = (a, b) => {
    if (a.order > b.order) {
      return 1;
    } else {
      return -1;
    }
  };

  useEffect(() => {
    
  }, [users]);

  return (
    <div>
      {users.sort(sortCards).map((user) => (
        <div
          onDragStart={(e) => dragStartHandler(e, user)}
          onDragLeave={(e) => dragEndHandler(e)}
          onDragEnd={(e) => dragEndHandler(e)}
          onDragOver={(e) => dragOverHandler(e)}
          onDrop={(e) => dropHandler(e, user)}
          draggable={true}
        >
          <h1>{user.firstName}</h1>
          {/* <h2>{user.lastName}</h2> */}
        </div>
      ))}
    </div>
  );
}

export default App;
