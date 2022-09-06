import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import api from "./API";
// import User from "./components/User/User";
import { SortableItemProps } from "@thaddeusjiang/react-sortable-list";
import { Reorder } from "framer-motion";
import { useDrag } from "react-dnd";

function App() {

  const sum =(a,b) => {
    return a + b 
  }
  
  const logName = (fn) => {
    return (...args)=> {
      return fn(...args)
    }
  }

  const wrappedSum = logName(sum)
  const result = wrappedSum(2,3)
  return (
<div></div>
  );
}

export default App;
