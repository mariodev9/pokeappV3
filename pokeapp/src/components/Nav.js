import { React, useState } from "react";
import "../assets/scss/Nav.scss";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Nav() {
  const [busqueda, setBusqueda] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setBusqueda(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (busqueda) {
      navigate("/Pokemon/" + busqueda.toLowerCase());
    }
  };

  return (
    <motion.div
      className="nav-pokemon centrar"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <form action="submit" onSubmit={handleSubmit}>
        <input
          name="busqueda"
          type="text"
          value={busqueda}
          placeholder="Nombre o id"
          onChange={handleChange}
        />
        <button type="submit">Buscar</button>
      </form>
    </motion.div>
  );
}
