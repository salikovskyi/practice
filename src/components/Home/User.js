import React from "react";
import css from './User.module.css'

export default function User({ id , name, lastName, age}) {
  return <div className={css.div}>
    <h1>{name}</h1>
    <h2>{lastName}</h2>
    <p>age - {age}</p>
    <p>id - {id}</p>
  </div>;
}
