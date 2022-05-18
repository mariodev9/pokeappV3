import { React, useState, useEffect } from "react";
import "../assets/scss/PokemonList.scss";
import ItemPokemon from "./ItemPokemon";

export default function PokemonList({ data }) {
  //   const [results, setResults] = useState([]);

  //   useEffect(() => setResults(data), []);
  console.log(data, "EL ARRAY");
  return (
    <div className="pokemon-list">
      <ul>
        {data.map((item) => (
          <ItemPokemon key={item.name} name={item.name} url={item.url} />
        ))}
      </ul>
    </div>
  );
}
