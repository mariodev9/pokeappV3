import React from "react";
import "../App.css";

export default function Button({ msg, handle }) {
  return (
    <button className="button" onClick={handle}>
      {msg}
    </button>
  );
}
