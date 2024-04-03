import React from "react";
import "./App.css";

export default function Humans(props) {
  return (
    <div className="kortti">
      <h2>{props.name}</h2>
      <h3>{props.email}</h3>
      <p>{props.address}</p>
      <p>{props.phone}</p>
      <p className="paksu">{props.website}</p>
    </div>
  );
}
