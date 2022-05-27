import { React, useState, useEffect } from "react";
import axios from "axios";

export default function Description(props) {
  const [info, setInfo] = useState({});
  const [description, setDescription] = useState("");

  const [loading, setLoading] = useState(true);

  const URL = `https://pokeapi.co/api/v2/pokemon-species/${props.id}/`;

  const fetchDescription = (url) => {
    axios.get(url).then((response) => {
      const data = response.data;

      for (let i = 0; i < 3; i++) {
        if (data.flavor_text_entries[i].language.name === "en") {
          setDescription(data.flavor_text_entries[i].flavor_text);
          i = 4;
        }
      }
    });
    setLoading(false);
  };

  useEffect(() => {
    fetchDescription(URL);
  }, []);

  return (
    <>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <div className="col-xl-6 pokemon-description">
          <p>{description}</p>
        </div>
      )}
    </>
  );
}
