import React, { useState } from "react";
import { Container ,Col } from 'react-bootstrap'
import ConnectWallet from "../../components/ConnectWallet/ConnectWallet";
import CardCustom from "../../components/cardCustom/CardCustom";
import ButtonPrimary from "../../components/Button/Button";
import SelectCoin from "../../components/selectCoin/SelectCoin";
import Plusicon from "../../assets/images/plus_yellow.png";
import NIOBIcon from "../../assets/images/saitaswap.png";
import BNBIcon from "../../assets/images/WBNB-Token-Icon.svg";
import ModalCurrency from "../../components/Modal/ModalCurrency/ModalCurrency";
import ButtonBack from "../../components/buttonBack/ButtonBack";
import "./Trade.scss";
import SettingModal from "../../components/Modal/SettingModal/SettingModal";

const AddLiquidity = (props) => {
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
                    <div className="text-center settingSec d-block">
                    <ButtonBack />
                    <h4 className="text-center">Add Liquidity</h4>
                    </div>
                    <div className="liquidtySec">
                    <SelectCoin
                        coinImage={NIOBIcon}
                        onClick={() => handleShow(true)}
                        inputLabel="Input"
                        label="Balance: 32.2615"
                        value="SAITA"
                        className="mb-0"
                        placeholder="0.0"
                        amount
                        amountValue="MAX"
                    />
                    <div className="convert_plus">
                        <img src={Plusicon} style={{ width: 22 }} />
                    </div>
                    <SelectCoin
                        coinImage={BNBIcon}
                        onClick={() => handleShow(true)}
                        inputLabel="Input"
                        label="Balance: 10.500"
                        value="BNB"
                        placeholder="0.0"
                        className="mb-3 swapTo"
                        amount
                        amountValue="MAX"
                    />
                    <Col className="poolSec">
                        <h6>PRICES AND POOL SHARE</h6>
                        <div className="poolDiv">
                        <span>
                            100 <br />
                            <small>BUSD per SAITA</small>
                        </span>
                        <span>
                            0.01 <br />
                            <small>SAITA per BUSD</small>
                        </span>
                        <span>
                            100% <br />
                            <small>Share of Pool</small>
                        </span>
                        </div>
                    </Col>
                    </div>
                    <Col className="swapBtn_col">
                    <ButtonPrimary
                        className="swapBtn"
                        title="Approve USDT"
                        onClick={() => handleShow1(true)}
                    />
                    <ButtonPrimary
                        className="swapBtn dismissBtn"
                        title="Supply"
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

export default AddLiquidity;
