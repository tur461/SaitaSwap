import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./SelectCoinStyle.scss";
import iconDropDown from "../../assets/images/down-arrow.png";

const SelectCoin = (props) => {
  return (
    <Col className={`selectCoin_style ${props.className}`}>
      <Row className="mx-0">
        <Col className="selectCoin_left_style">
          <label>{props.inputLabel}</label>
          <input
            type={props.type}
            onChange={props.onChange}
            placeholder={props.placeholder}
          />
        </Col>
        <Col className="selectCoin_right_style">
          <label>{props.label}</label>
          <Col className="select_buttonStyle">
            <button onClick={props.onClick}>
              {props.amount ? <strong>{props.amountValue}</strong> : ""}
              <img src={props.coinImage} className="coin_Img" />
              <strong style={{ fontSize: props.selectTokenText ? "" : "" }}>
                {props.value}
              </strong>
              <img className="selectDropDownStyle" src={iconDropDown} />
            </button>
          </Col>
        </Col>
      </Row>
    </Col>
  );
};

export default SelectCoin;
