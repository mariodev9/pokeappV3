import "./App.css";
import { React, useState, useEffect } from "react";
import axios from "axios";
//
// import { fetchData } from "./components/functions/Fetchdata";

import PokemonList from "./components/PokemonList";

function App() {
  const [info, setInfo] = useState([]);
  const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";
  const MORE_URL = "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20";

  const fetchData = (url) => {
    axios.get(url).then((response) => {
      const data = response.data;
      console.log("TOTAL DATA", data);
      setInfo(data.results);
    });
  };

  useEffect(() => fetchData(BASE_URL), []);

  // hacer andar
  //   useEffect(() => setInfo(fetchData(BASE_URL)), []);
  return (
    <>
      <h1>Pokeapp</h1>
      <PokemonList data={info} />
      {/* al apretar el boton fetchdatear con MORE_URL: tiene parametros programables - > offset=20&limit=20 */}
      <button>mas</button>
    </>
  );
}

export default App;
