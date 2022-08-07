import React from "react";
import oak from "../../assets/statics/404.jpg";

export default function Error({ search }) {
  return (
    <div className="centrar error">
      <h1>
        <span>{search}</span>?! No existen registros sobre ese pokemon!
      </h1>
      <img src={oak} alt="404 not found" />
    </div>
  );
}
