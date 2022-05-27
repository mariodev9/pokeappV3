import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Spinner from "../components/Spinner";
import "../assets/scss/ItemPokemon.scss";
import Description from "../components/PagePokemon/Description";
import Types from "../components/PagePokemon/Types";
import Error from "../components/PagePokemon/Error";

export default function PagePokemon() {
  let params = useParams();
  const [info, setInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const POKEMON_URL = `https://pokeapi.co/api/v2/pokemon/${params.id}`;

  const fetchPokemon = (url) => {
    axios
      .get(url)
      .then((response) => {
        const data = response.data;
        setInfo(data);
        setLoading(false);
      })
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          setError(true);
        }
      });
  };

  useEffect(() => {
    fetchPokemon(POKEMON_URL);
  }, []);

  return (
    <>
      {error && <Error />}
      {loading ? (
        <div className="centrar">
          <Spinner />
        </div>
      ) : (
        <div className="container centrar">
          <h1 className="pokemon-name">
            {info.name} n° {info.id}
          </h1>
          <div className=" image-container centrar">
            <img
              src={info.sprites?.front_default}
              className="pokemon-image"
              alt="pokemon"
            />
          </div>
          <Description id={params.id} />
          <Types types={info.types} />
        </div>
      )}
    </>
  );
}
