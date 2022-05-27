import React from "react";
import { Col } from "reactstrap";
import "../assets/scss/Spinner.scss";

export default function Spinner() {
  return (
    <Col xl="5" className="spinner-container">
      <div className="spinner">
        <span className="spinner-inner-1"></span>
        <span className="spinner-inner-2"></span>
        <span className="spinner-inner-3"></span>
      </div>
    </Col>
  );
}
