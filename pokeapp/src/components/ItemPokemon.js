import React from "react";

export default function ItemPokemon({ name, url }) {
  return (
    <>
      <li>
        {name} {url}
      </li>
    </>
  );
}
