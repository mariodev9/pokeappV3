import "./App.css";
import { React, useState, useEffect } from "react";
import axios from "axios";
import PokemonList from "./components/PokemonList";
import Button from "./components/Buttons";
// import Spinner from "./components/Spinner";

function App() {
  const [info, setInfo] = useState([]);
  // const [loading, setLoading] = useState(true);
  const [offset, setOffset] = useState(0);

  const BASE_URL =
    "https://pokeapi.co/api/v2/pokemon/?offset=" + offset + "&limit=20";

  const fetchData = (url) => {
    axios.get(url).then((response) => {
      const data = response.data;
      setInfo(data.results);
      // setLoading(false);
    });
  };

  function More() {
    setOffset(offset + 20);
  }

  function Back() {
    setOffset(offset - 20);
  }

  useEffect(() => {
    fetchData(BASE_URL);
  }, [BASE_URL]);

  // if (loading) return <Spinner />;

  return (
    <>
      <h1 className="title">Pokeapp</h1>
      <PokemonList data={info} />
      <div className="buttons">
        {offset !== 0 ? <Button msg="Menos" handle={Back} /> : null}
        <Button msg="Mas" handle={More} />
      </div>
    </>
  );
}

export default App;
