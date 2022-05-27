import React from "react";
import oak from "../../assets/statics/404.jpg";

export default function Error() {
  return (
    <div className="centrar error">
      <h1>Ups! No existen registros sobre ese pokemon</h1>
      <img src={oak} alt="404 not found" />
    </div>
  );
}
