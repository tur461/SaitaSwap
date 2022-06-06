import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "../PlanetCard/PlanetCard.scss";
// import RightArrow from "../../assets/images/right-arrow.png";
import DownArrow from "../../assets/images/down-arrow.png";
import Schdule from "../../assets/images/schdule.png";
import ReturnInvest from "../ReturnInvest/ReturnInvest";
import ButtonPrimary from "../Button/Button";
import "./GalaxyCard.scss";

const GalaxyCard = (props) => {
  const [classToggle, setClassToggle] = useState(false);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
      <Button
        className={`planet_bar glaxy_bar`}
        onClick={() => setClassToggle(!classToggle)}
      >
        <div className="cions">
          <span className="coin_imgs uppr">
            <img src={props.icon1} alt={"icon"} />
          </span>
          
          <span className="coin_title glxy_token"><span className="title_nm">Token</span>{props.title}</span>
        </div>

        <div className="coin_detail"> 
          <div className="d-flex align-items-center">
            <div className="prcentx">10X</div>
            <img className="QrIcon" src={Schdule} />
            <div className="apr">
              <span>APR</span>
              <p>128%</p>
            </div>
          </div>
          <div className="lqdty">
            <span>Liquidity</span> 
            <p>$81,400.000</p>
          </div>
          <div className="erndNiob">
            <span>Earned Saita</span>
            <p>50,000.000</p>
          </div>
        </div>
        <div className="dtl_btn">
          <p>
            Details{" "}
            <span>
              <img src={DownArrow} />
            </span>
          </p>
        </div>
      </Button>
      <div className={classToggle ? "planet_strip" : "d-none"}>
        <div className="stakedValue">
          <div className="d-flex comnDiv">
            <div className="stkd_title">
              <h6>Total Staked:</h6>
              <h6>Stake:</h6>
            </div>
            <div className="boldTxt">
              <h6>840,000,888.9000</h6>
              <h6>Saita</h6>
            </div>
          </div>
          <div className="d-flex comnDiv">
            <div className="stkd_title">
              <h6>Staked Value:</h6>
              <h6>Earned Value:</h6>
            </div>
            <div className="boldTxt">
              <h6>$0.00</h6>
              <h6>$0.00</h6>
            </div>
          </div>
          <div className="vwdoc_btn">
            <div className="linksTxt">
              <a href="#">View on BscScan</a>
              <a href="#">View Project Site</a>
            </div>
            <ButtonPrimary className="unlockWallet_Btn" onClick={()=> handleShow(true)} title="Unlock Wallet" />
          </div>
      </div>
      </div>
      <ReturnInvest show={show} handleShow={handleShow} handleClose={handleClose} /> 
    </>
  );
};

export default GalaxyCard;


