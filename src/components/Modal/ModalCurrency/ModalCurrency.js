import React, { useState } from "react";
import { Col, Row, Modal } from "react-bootstrap";
import "./ModalCurrencyStyle.scss";
import Anchor from "../../../assets/images/ANCHOR-Token.svg";
import BTC from "../../../assets/images/BTCB-Token.svg";
import BNB from "../../../assets/images/WBNB-Token-Icon.svg";
import ETH from "../../../assets/images/ETH-Token.svg";
import CoinItem from "../../coinItem/CoinItem";

const ModalCurrency = (props) => {
  return (
    <Modal
      scrollable={true}
      className="selectCurrency_modal"
      show={props.show}
      onHide={props.handleClose}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Select a Token</Modal.Title>
      </Modal.Header>
      <Row>
        <Col>
          <div className="gradiantWrap">
            <input
              className="searchInput_Style"
              placeholder="Search name or paste address"
              // onChange
              // value
            />
          </div>
          <div className="tokenName">
            <h4>Token Name</h4>
            <hr />
          </div>
        </Col>
      </Row>

      <Modal.Body>
        <Row className="coinListBlockStyle">
          <Col>
            <CoinItem iconImage={Anchor} title={"Anchor"} />
            <CoinItem iconImage={BTC} title={"BTC"} />
            <CoinItem iconImage={BNB} title={"BNB"} />
            <CoinItem iconImage={ETH} title={"ETH"} />
            <CoinItem iconImage={Anchor} title={"Anchor"} />
            <CoinItem iconImage={BTC} title={"BTC"} />
            <CoinItem iconImage={BNB} title={"BNB"} />
            <CoinItem iconImage={ETH} title={"ETH"} />
          </Col>
        </Row>
      </Modal.Body>
      {/* <Modal.Footer>
        <ButtonPrimary
          title="Manage Token Lists"
          className="manageButtonStyle"
        />
      </Modal.Footer> */}
    </Modal>
  );
};

export default ModalCurrency;
