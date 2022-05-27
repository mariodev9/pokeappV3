import { React, useState, useEffect } from "react";
import axios from "axios";
import "../assets/scss/ItemPokemon.scss";
import Spinner from "./Spinner";
import { WeightIcon, HeightIcon } from "./SvgIcons";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ItemPokemon({ url }) {
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPokemon = (url) => {
    axios.get(url).then((response) => {
      const data = response.data;
      setInfo(data);
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchPokemon(url);
  }, [url]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <motion.div
          className="col-xl-4 item-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
        >
          <Link to={`/Pokemon/${info.id}`} className="link">
            <img
              src={info.sprites?.front_default}
              className="pokemon-image"
              alt="pokemon"
            />
            <div className="name">
              <p>{info.name}</p>
              <p>n° {info.id}</p>
            </div>
          </Link>
          <div className="characteristics">
            <div className="characteristic">
              {WeightIcon}
              <p>{info.weight === 10000 ? "Max" : info.weight}</p>
            </div>
            <div className="characteristic">
              {HeightIcon}
              <p>{info.height}</p>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}
