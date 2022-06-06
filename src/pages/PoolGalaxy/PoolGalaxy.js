import React from "react";
import Button from "@restart/ui/esm/Button";
import {
  Container,
  Col,
  Row,
  Form,
  InputGroup,
  FormControl,
  Tabs,
  Tab,
} from "react-bootstrap";
import Searchicon from "../../assets/images/search.png";
import PoolIcon from "../../assets/images/Pool-Header-Logo.svg";
import PoolActive from "./PoolActive";
import PoolInactive from "./PoolInactive";
import "./PoolGalaxy.scss";

function PoolGalaxy(props) {
  const {
    match: { params },
    history,
  } = props;
  const { tab } = params;
  // const handleTab = (data) => {
  //   history.push(`${rootName}/farmplanets/${data}`);
  // };
  return (
    <div className="container_wrap farmpln poolGalaxy_cont">
      <div className="upper_text">
        <Container>
          <Row>
            <Col xl={6} className="pl-0">
              <div className="farm_title">
                <div className="farm_icon">
                  <img src={PoolIcon} />
                </div>
                <div className="desc">
                  <h1 className="title_hd">Pool Galaxy</h1>
                  <p>
                    Stake Saita to earn new tokens. You can unstake at any time!
                    Rewards are calculated per block.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="farm_srchbar">
        <Container>
          <div className="contain_area">
            <Form className="srchbar_area">
              <div className="serch_field">
                <Form.Label>Search</Form.Label>
                <InputGroup>
                  <FormControl id="search" placeholder="Saita" />
                  <Button className="search_btn">
                    <img src={Searchicon} />
                  </Button>
                </InputGroup>
              </div>
              <div className="staked_only">
                <Form.Check
                  type="checkbox"
                  id="stakecheck"
                  label="Staked only"
                />
                <Button className="btn harvest_btn">Harvest all</Button>
              </div>
            </Form>
            <div className="frm_plnet_list">
              <div className="farm_tabs">
                <Tabs
                  activeKey={tab}
                  id="frmplanet_tab"
                  variant="pills"
                  //   onSelect={handleTab}
                >
                  <Tab eventKey="active" title="Active">
                    <PoolActive />
                  </Tab>
                  <Tab eventKey="inactive" title="Inactive">
                    <PoolInactive />
                  </Tab>
                </Tabs>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default PoolGalaxy;
