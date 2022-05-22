import React from "react";
import "../App.css";
import { motion } from "framer-motion";

export default function Button({ img, handle }) {
  return (
    <motion.button
      whileTap={{ scale: 1.2 }}
      className="button"
      onClick={handle}
    >
      <img src={img} alt="" />
    </motion.button>
  );
}
