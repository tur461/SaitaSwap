import React from "react";
import { Container, Tab, Tabs } from "react-bootstrap";
import Exchange from "./Exchange";
import Liquidity from "././Liquidity";
import { rootName } from '../../constant'
import "./Trade.scss";
import AddLiquidity from "./AddLiquidity";

const Trade = (props) => {
  const { match: { params }, history } = props;
  const { tab,fillter } = params
  const handleTab = (data) => {
      history.push(`${rootName}/trade/${data}`)
  }

  return (
    <div className="container_wrap trade">
      <Container fluid className="swapScreen comnSection">
        <Container className="smallContainer">
          <h2 className="text-center swap_title">Make a Swap</h2>
          <div className="comnBlk">
            <Tabs activeKey={tab} defaultActiveKey="swap" id="uncontrolled-tab-example" className="mb-3" onSelect={handleTab}>
              <Tab eventKey="exchange" title="Swap">
                <Exchange />
              </Tab>
              <Tab eventKey="liquidity" title="Liquidity">
              {fillter === "addLiquidity" ? <AddLiquidity/> : <Liquidity/> }  
              </Tab>
              <Tab eventKey="Bridge" title="Bridge" disabled />
            </Tabs>
          </div>
        </Container>
      </Container>
    </div>
  );
};

export default Trade;
 