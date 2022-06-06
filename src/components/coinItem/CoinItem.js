import React from "react";
import { Col, Row } from "react-bootstrap";
import "./CoinItemStyle.scss";

const CoinItem = (props) => {
  return (
    <Col className="coinItem_style">
      <img src={props.iconImage} />
      <p className="titleStyle">{props.title}</p>
    </Col>
  );
};
export default CoinItem;
