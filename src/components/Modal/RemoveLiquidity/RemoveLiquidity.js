import React from "react";
import { Col, Row, Modal } from "react-bootstrap";
import DownArrow from "../../../assets/images/down-arrow.png";
import NiobIcon from "../../../assets/images/saitaswap.png";
import BnbIcon from "../../../assets/images/WBNB-Token-Icon.svg";
import Button from "../../Button/Button";
import "./RemoveLiquidity.scss";

const RemoveLiquidity = (props) => {
  return (
    <Modal
      scrollable={true}
      className="selectCurrency_modal removeLiq_Modal"
      show={props.show}
      onHide={props.handleClose}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Remove Liquidity</Modal.Title>
      </Modal.Header>
      <div className="tokenName">
        <hr />
      </div>
      <Modal.Body>
        <Col className="removeAmnt comnBrdr">
          <h6 className="d-flex">
            Amount <span className="ms-auto">Detailed</span>
          </h6>
          <div class="slidecontainer">
            <h2>0%</h2>
            <input type="range" className="slider" />
          </div>
          <div className="amountSelect">
            <button type="button">25%</button>
            <button type="button" className="mx-1">
              50%
            </button>
            <button type="button" className="me-1">
              75%
            </button>
            <button type="button">Max</button>
          </div>
        </Col>
        <Col className="text-center downArrow">
          <img src={DownArrow} alt="down_icon" />
        </Col>
        <Col className="receiveAmnt comnBrdr">
          <ul className="text-start">
            <li>-</li>
            <li>-</li>
          </ul>
          <ul className="text-end leftSide">
            <li>
              <img src={NiobIcon} alt="coin_icon" />
              Saita
            </li>
            <li>
              <img src={BnbIcon} alt="coin_icon" />
              BNB
            </li>
            <h6 className="text-end">Receive WBNB</h6>
          </ul>
        </Col>
        <Col className="totalPrice">
          <ul className="text-start">
            <li>Price:</li>
          </ul>
          <ul className="text-end">
            <li>1 Saita = 0.00035815 BNB</li>
            <li>1 BNB = 3870.84 Saita</li>
          </ul>
        </Col>
        <Col className="btnCol">
          <Button className="approveBtn" title="Approve" />
          <Button className="swapBtn dismissBtn" title="Enter an amount" />
        </Col>
      </Modal.Body>
    </Modal>
  );
};

export default RemoveLiquidity;
