import Button from "@restart/ui/esm/Button";
import React from "react";
import {
  Container,
  Col,
  Row,
  Form,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Active from "./Active";
import Inactive from "./Inactive";
import { Tabs, Tab } from "react-bootstrap";
import { rootName } from "../../constant";
import Searchicon from "../../assets/images/search.png";
import FarmIcon from "../../assets/images/Farm-Header-Logo.svg";
import "./FarmPlanets.scss";

const FarmPlanets = (props) => {
  const {
    match: { params },
    history,
  } = props;
  const { tab } = params;
  const handleTab = (data) => {
    history.push(`${rootName}/farmplanets/${data}`);
  };

  return (
    <div className="container_wrap farmpln">
      <div className="upper_text">
        <Container>
          <Row>
            <Col xl={6} className="pl-0">
              <div className="farm_title">
                <div className="farm_icon">
                  <img src={FarmIcon} />
                </div>
                <div className="desc">
                  <h1 className="title_hd">Farm Planets</h1>
                  <p>
                    There is so much to explore! Saita Swap offers multiple
                    farming oppurtunities to you. Get amazing rewards by staking
                    your LP tokens in return for additional Saita Tokens.
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
                  onSelect={handleTab}
                >
                  <Tab eventKey="active" title="Active">
                    <Active />
                  </Tab>
                  <Tab eventKey="inactive" title="Inactive">
                    <Inactive />
                  </Tab>
                </Tabs>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default FarmPlanets;
