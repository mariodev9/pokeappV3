import "../assets/scss/ItemPokemon.scss";
import { React, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Spinner from "../components/Spinner";
import Description from "../components/PagePokemon/Description";
import Types from "../components/PagePokemon/Types";
import Error from "../components/PagePokemon/Error";
import Nav from "../components/Nav";
import home from "../assets/statics/home-icon.jpg";

const POKEMON_SEARCH_STATES = {
  NOT_KNOWN: 0,
  LOADING: 1,
  SUCCES: 2,
  ERROR: -1,
};

export default function PagePokemon() {
  let params = useParams();
  const [info, setInfo] = useState({});
  const [status, setStatus] = useState(POKEMON_SEARCH_STATES.NOT_KNOWN);

  const POKEMON_URL = `https://pokeapi.co/api/v2/pokemon/${params.id}`;

  const fetchPokemon = (url) => {
    axios
      .get(url)
      .then((response) => {
        const data = response.data;
        setInfo(data);
        setStatus(POKEMON_SEARCH_STATES.LOADING);
      })
      .then(() => setStatus(POKEMON_SEARCH_STATES.SUCCES))
      .catch(function (error) {
        if (error.response) {
          setStatus(POKEMON_SEARCH_STATES.ERROR);
        }
      });
  };

  useEffect(() => {
    fetchPokemon(POKEMON_URL);
  }, [POKEMON_URL]);

  return (
    <>
      <div className="fila centrar ">
        <Link to="/">
          <img className="home-icon" src={home} alt="home" />
        </Link>
        <Nav />
      </div>
      {status === POKEMON_SEARCH_STATES.ERROR && <Error search={params.id} />}
      {status === POKEMON_SEARCH_STATES.LOADING && (
        <div className="centrar">
          <Spinner />
        </div>
      )}

      {status === POKEMON_SEARCH_STATES.SUCCES && (
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
          <Description species={info.species?.name} />
          <Types types={info.types} />
        </div>
      )}
    </>
  );
}
