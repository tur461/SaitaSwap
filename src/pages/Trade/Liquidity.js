import React, { useState } from "react";
import { Container, Col, Accordion } from "react-bootstrap";
import CardCustom from "../../components/cardCustom/CardCustom";
import ButtonPrimary from "../../components/Button/Button";
import SettingIcon from "../../assets/images/Settings-Icon.svg";
import Plusicon from "../../assets/images/plus_ico.png";
import SettingModal from "../../components/Modal/SettingModal/SettingModal";
import { Link } from "react-router-dom";
import ButtonLink from "../../components/buttonLink/ButtonLink";
import "./Trade.scss";
import RemoveLiquidity from "../../components/Modal/RemoveLiquidity/RemoveLiquidity";

const Liquidity = (props) => {
  const [settingShow, setsettingShow] = useState(false);
  const settingClose = () => setsettingShow(false);
  const settinghandleShow = () => setsettingShow(true);
  // remove liquidity
  const [removeShow, setremoveShow] = useState(false);
  const removeClose = () => setremoveShow(false);
  const removehandleShow = () => setremoveShow(true);

  return (
    <>
      <Container fluid className="swapScreen comnSection add_lq_box">
        <CardCustom>
          <div className="settingSec">
            <div className="in_title">
              <h4>Liquidity</h4>
              <p className="mb-0">Add liquidity to receive LP tokens</p>
            </div>
            <div className="settingIcon">
              <img src={SettingIcon} onClick={() => settinghandleShow(true)} />
            </div>
          </div>

          <div className="add_liq text-center">
            <ButtonLink
              title="Add liquidity"
              className="add_liquidity_btn"
              icon={Plusicon}
              link="/trade/liquidity/addLiquidity"
            />
          </div>
          <div className="settingSec d-block mb-0">
            <div className="in_title">
              <h4>Your Liquidity</h4>
            </div>
          </div>
          <div className="liquidity_list">
            <h3>Connect a wallet to view your liquidity</h3>
          </div>
          <Accordion defaultActiveKey="0" className="yourLiq_accordian">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                ANK/BUSD <span className="ms-auto">Manage</span>
              </Accordion.Header>
              <Accordion.Body>
                <div className="amountDiv">
                  <ul className="text-start">
                    <li>Your total pool tokens:</li>
                    <li>Pooled ANK:</li>
                    <li>Pooled BUSD:</li>
                  </ul>
                  <ul className="text-end">
                    <li>0.000024545</li>
                    <li>1021.25645</li>
                    <li>1245.45554</li>
                  </ul>
                </div>
                <div className="remove_liq text-center mb-2">
                  <ButtonPrimary
                    title="Remove liquidity"
                    className="remove_liq_btn"
                    onClick={() => removehandleShow(true)}
                  />
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Col className="tokeninfo">
            <p>
              Don't see a pool you joined? <Link>import it.</Link>
            </p>
            <p>
              Or, if you staked your LP tokens in a farm, unstake them to see
              them here.
            </p>
          </Col>
        </CardCustom>
      </Container>
      <SettingModal
        show={settingShow}
        handleShow={settinghandleShow}
        handleClose={settingClose}
      />
      <RemoveLiquidity
        show={removeShow}
        handleShow={removehandleShow}
        handleClose={removeClose}
      />
    </>
  );
};

export default Liquidity;
