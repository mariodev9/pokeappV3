import React from "react";
import { Col } from "reactstrap";
import "../assets/scss/Spinner.scss";

export default function Spinner() {
  return (
    <Col xl="4" className="spinner-container">
      <div class="spinner">
        <span class="spinner-inner-1"></span>
        <span class="spinner-inner-2"></span>
        <span class="spinner-inner-3"></span>
      </div>
    </Col>
  );
}
