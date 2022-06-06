import React from "react";
import { Col, Row, Modal } from "react-bootstrap";
import "./SettingModal.scss";

const SettingModal = (props) => {
  return (
    <Modal
      scrollable={true}
      className="selectCurrency_modal setting_modl"
      show={props.show}
      onHide={props.handleClose}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Settings</Modal.Title>
      </Modal.Header>
      <Row>
        <Col>
          <div className="tokenName">
            <hr />
          </div>
        </Col>
      </Row>

      <Modal.Body>
        <Row>
          <Col>
            <div className="stting_modl">
              <h6>Slippage tolerance</h6>
              <div className="selct_area">
                <div className="d-flex">
                  <button>0.1%</button>
                  <button>0.5%</button>
                  <button>1%</button>
                  <span className="d-flex align-items-center">
                    <input type="text" placeholder="56" /> %
                  </span>
                </div>
                <small>Your transaction may be frontrun</small>
              </div>
              <h6>Transaction deadline</h6>
              <div className="selct_area dedline">
                <div className="d-flex align-items-center">
                  <button>20</button> minutes
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export default SettingModal;
