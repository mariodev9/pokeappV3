import React from "react";
import "../App.css";
import { motion } from "framer-motion";

export default function Button({ img, handle }) {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      className="button"
      onClick={handle}
    >
      <img src={img} alt="" />
    </motion.button>
  );
}
