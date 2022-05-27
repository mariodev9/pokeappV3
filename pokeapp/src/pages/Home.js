import "../App.css";
import { React, useState, useEffect } from "react";
import axios from "axios";
import PokemonList from "../components/PokemonList";
import Button from "../components/Buttons";
import logo from "../assets/statics/pokeapp-logo.png";
import back from "../assets/statics/back.png";
import next from "../assets/statics/next.png";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

export default function Home() {
  const [info, setInfo] = useState([]);
  const [offset, setOffset] = useState(0);
  const [max, setMax] = useState();

  const BASE_URL =
    "https://pokeapi.co/api/v2/pokemon/?offset=" + offset + "&limit=20";

  const fetchData = (url) => {
    axios.get(url).then((response) => {
      const data = response.data;
      setInfo(data.results);
      setMax(data.count);
    });
  };

  //   function More() {
  //     setOffset(offset + 20);
  //   }

  //   function Back() {
  //     setOffset(offset - 20);
  //   }

  useEffect(() => {
    fetchData(BASE_URL);
  }, [BASE_URL]);

  return (
    <>
      <div className="title">
        <img src={logo} alt="" />
      </div>
      <p className="description">
        Encuentra todos los pokemones de todas las regiones!
      </p>
      <Nav />
      <PokemonList data={info} />
      <div className="buttons">
        {offset !== 0 ? (
          <Button handle={() => setOffset(offset - 20)} img={back} />
        ) : null}
        {offset >= max - 20 ? null : (
          <Button handle={() => setOffset(offset + 20)} img={next} />
        )}
      </div>
      <Footer />
    </>
  );
}
