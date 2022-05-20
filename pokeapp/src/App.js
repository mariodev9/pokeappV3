import "./App.css";
import { React, useState, useEffect } from "react";
import axios from "axios";
import PokemonList from "./components/PokemonList";
import Button from "./components/Buttons";
import logo from "./assets/statics/pokeapp-logo.png";
import back from "./assets/statics/back.png";
import next from "./assets/statics/next.png";
import Footer from "./components/Footer";

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
      <div className="title">
        <img src={logo} alt="" />
      </div>
      <p className="description">
        Encuentra todos los pokemones de todas las regiones!
      </p>
      <PokemonList data={info} />
      <div className="buttons">
        {offset !== 0 ? <Button handle={Back} img={back} /> : null}
        <Button handle={More} img={next} />
      </div>
      <Footer />
    </>
  );
}

export default App;
