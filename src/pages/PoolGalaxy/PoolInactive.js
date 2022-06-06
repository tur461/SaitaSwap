import React from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import PlanetCard from "../../components/PlanetCard/PlanetCard";
import NIOB from "../../assets/images/saitaswap.png";
import BUSD from "../../assets/images/BUSD-Token.svg";
import ANCHOR from "../../assets/images/ANCHOR-Token.svg";
import ETH from "../../assets/images/ETH-Token.svg";
import BTCB from "../../assets/images/BTCB-Token.svg";
import CAKE from "../../assets/images/CAKE-Token.svg";
import GalaxyCard from "../../components/GalaxyCard/GalaxyCard";

const PoolInactive = () => {
  return (
    <div className="planet_list active">
      <Row>
      <Col xl={12}>
          <div className="planet_list_view">
            <div className="headingStyle">
              <h6>Token</h6>
              <h6>APR</h6>
              <h6>Total Staked</h6>
              <h6 className="earnTxt">Earned</h6>
            </div>
            <GalaxyCard icon1={ETH} title={`ETH`} />
            <GalaxyCard icon1={BUSD} title={`BUSD`} />
            <GalaxyCard icon1={CAKE} title={`CAKE`} />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default PoolInactive;
