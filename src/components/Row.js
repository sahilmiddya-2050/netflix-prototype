import React from "react";
import "./Row.css";

const Row = ({ title }) => {
  return (
    <div className="row">
      {/* Title */}
      <h2>{title}</h2>

      {/* Bunch of posters */}
      <div className="row__container">{/* images */}</div>
    </div>
  );
};

export default Row;
