import { React, useState } from "react";
import "../assets/scss/Nav.scss";
import { useNavigate } from "react-router-dom";

export default function Nav() {
  const [busqueda, setBusqueda] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setBusqueda(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/Pokemon/" + busqueda.toLowerCase());
  };

  return (
    <div className="nav-pokemon centrar">
      <form action="submit" onSubmit={handleSubmit}>
        <input
          name="busqueda"
          type="text"
          value={busqueda}
          placeholder="Name or id"
          onChange={handleChange}
        />
        <button type="submit">search</button>
      </form>
    </div>
  );
}
