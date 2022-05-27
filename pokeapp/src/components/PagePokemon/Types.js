import React from "react";

export default function Types(props) {
  return (
    <div className="types col-xl-6">
      <h3>types</h3>
      <div className="types-list fila">
        {props.types.map((item) => (
          <div className="type-item fila" key={item.slot}>
            <span className={item.type.name}></span>
            <p>{item.type.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
