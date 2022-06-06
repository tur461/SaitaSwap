import React, { useState } from "react";
import { Container ,Col , Tabs, Tab  } from 'react-bootstrap'
import ConnectWallet from "../../components/ConnectWallet/ConnectWallet";
import CardCustom from "../../components/cardCustom/CardCustom";
import ButtonPrimary from "../../components/Button/Button";
import SelectCoin from "../../components/selectCoin/SelectCoin";
import ArrowDown from "../../assets/images/Arrow-Down-Icon.svg";
import SettingIcon from "../../assets/images/Settings-Icon.svg";
import NIOBIcon from "../../assets/images/saitaswap.png";
import BNBIcon from "../../assets/images/WBNB-Token-Icon.svg";
import SwitchIcon from "../../assets/images/Switch-Icon.svg";
import ModalCurrency from "../../components/Modal/ModalCurrency/ModalCurrency";
import "./Trade.scss";
import SettingModal from "../../components/Modal/SettingModal/SettingModal";

const Exchange = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);
  const [settingShow, setsettingShow] = useState(false);
  const settingClose = () => setsettingShow(false);
  const settinghandleShow = () => setsettingShow(true);
  const [classToggle, setClassToggle] = useState(false);
  return (
    <>
    <Container fluid className="swapScreen comnSection">
            <CardCustom>
              <div className="settingSec">
                <h4>Exchange</h4>
                <div className="settingIcon">
                  <img src={SettingIcon} onClick={() => settinghandleShow(true)} />
                </div>
              </div>
              <SelectCoin
                coinImage={NIOBIcon}
                onClick={() => handleShow(true)}
                inputLabel="From"
                label="Balance: 0.25212545"
                value="SAITA"
                className="mb-0"
                placeholder="0.0"
              />
              <div className="convert_plus">
                <img src={ArrowDown} />
              </div>
              <SelectCoin
                coinImage={BNBIcon}
                onClick={() => handleShow(true)}
                inputLabel="To (estimated)"
                label="Balance: 5.5318"
                value="BNB"
                placeholder="0.0"
                className="mb-3 swapTo"
              />
              <Col className="priceSec_col">
                <div>
                  <h5>Price</h5>
                  <h5>Slippage Tolerance</h5>
                </div>
                <div className="text-end">
                  <h5>
                    14.2798 SAITA per BUSD{" "}
                    <img
                      src={SwitchIcon}
                      alt="swap_icon"
                      className="ms-2"
                    />
                  </h5>
                  <h5>5%</h5>
                </div>
              </Col>
              <Col className="swapBtn_col">
                <ButtonPrimary
                  className="swapBtn"
                  title="Approve"
                  onClick={() => handleShow1(true)}
                />
                <ButtonPrimary
                  className="swapBtn dismissBtn"
                  title="Dismiss"
                  onClick={() => handleShow1(true)}
                />
              </Col>
          </CardCustom>
          </Container>
      <ModalCurrency
        show={show}
        handleShow={handleShow}
        handleClose={handleClose}
      />
      <ConnectWallet
        show={show1}
        handleShow={handleShow1}
        handleClose={handleClose1}
      />
      <SettingModal
        show={settingShow}
        handleShow={settinghandleShow}
        handleClose={settingClose}
      />
  </>
  
  );
};

export default Exchange;
