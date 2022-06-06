import React from "react";
import { Carousel, Row, Col, Image } from "react-bootstrap";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { rootName } from "../../constant";
import Button from "../../components/Button/Button";
import FarmCard from "../../components/FarmCard/FarmCard";
import NIOB from "../../assets/images/saitaswap.png";
import BUSD from "../../assets/images/BUSD-Token.svg";
import ANCHOR from "../../assets/images/ANCHOR-Token.svg";
import BTCB from "../../assets/images/BTCB-Token.svg";
import "./Home.scss";

const Home = () => {
  const options = {
    indicators: false,
  };

  const history = useHistory();

  return (
    <div className="container_wrap">
      <div className="container container_inside homePage">
        <Carousel fade {...options}>
          <Carousel.Item>
            <Carousel.Caption>
              <h3>Welcome to SAITA Swap</h3>
              <p>
                Decentralized Exchange and Automatic Liquidity Acquisition Yield
                Farm running currently on Binance Smart Chain.
              </p>
              <p>
                If you are new to SAITA please also visit our Tutorial Section in
                our official docs. We’ll teach you step by step you to use SAITA
                Swap and it’s assets.
              </p>
              <Link className="captionFooter d-flex justify-content-between align-items-center">
                <span>SAITA Tutorial</span>
                <span>
                  <Image
                    src={require("../../assets/images/Link-Icon.svg").default}
                    alt="icon"
                  />
                </span>
              </Link>
            </Carousel.Caption>
            <Image
              className="bgImage"
              alt="image"
              src={
                require("../../assets/images/dashboard-header-bg.jpg").default
              }
            />
          </Carousel.Item>
          <Carousel.Item>
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              <Link className="captionFooter d-flex justify-content-between align-items-center">
                <span>SAITA Tutorial</span>{" "}
                <span>
                  <Image
                    src={require("../../assets/images/Link-Icon.svg").default}
                    alt="icon"
                  />
                </span>
              </Link>
            </Carousel.Caption>
            <Image
              className="bgImage"
              alt="image"
              src={
                require("../../assets/images/dashboard-header-bg.jpg").default
              }
            />
          </Carousel.Item>
          <Carousel.Item>
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              <Link className="captionFooter d-flex justify-content-between align-items-center">
                <span>SAITA Tutorial</span>{" "}
                <span>
                  <Image
                    src={require("../../assets/images/Link-Icon.svg").default}
                    alt="icon"
                  />
                </span>
              </Link>
            </Carousel.Caption>
            <Image
              className="bgImage"
              alt="image"
              src={
                require("../../assets/images/dashboard-header-bg.jpg").default
              }
            />
          </Carousel.Item>
        </Carousel>
        <Row className="startEngine">
          <Col xl={4} lg={12}>
            <div className="comnBlk">
              <Image
                className="headerImg"
                src={require("../../assets/images/swap-icon.svg").default}
              />
              <h3>Start your engine </h3>
              <p>Start your journey or improve your wallet portfolio:</p>
              <h3>SAITA Price: $0.50</h3>
              <Link className="captionFooter d-flex justify-content-between align-items-center">
                <span>Buy SAITA Token </span> <span className="arrowIcon" />
              </Link>
            </div>
          </Col>
          <Col xl={4} lg={12}>
            <div className="comnBlk">
              <Image
                className="headerImg"
                src={require("../../assets/images/farm-icon.svg").default}
              />
              <h3>Farm Planets</h3>
              <p>Stake LP tokens in Farms and earn up to:</p>
              <h3>1,000 % APY</h3>
              <Link className="captionFooter d-flex justify-content-between align-items-center" to="farmplanets/active">
                <span>Start farming</span> <span className="arrowIcon" />
              </Link>
            </div>
          </Col>
          <Col xl={4} lg={12}>
            <div className="comnBlk">
              <Image
                className="headerImg"
                src={require("../../assets/images/reflink-icon.svg").default}
              />
              <h3>Decentralized Ref Link </h3>
              <p>Enjoy Referral Rewards from:</p>
              <h3>Farms, Pools Swaps</h3>
              <Link className="captionFooter d-flex justify-content-between align-items-center" to="/referral">
                <span>Start inviting friends</span>{" "}
                <span className="arrowIcon" />
              </Link>
            </div>
          </Col>
        </Row>
        <Row className="announcements">
          <Col xl={6} lg={12} >
            <div className="comnBlk">
              <div className="headSec">
                <div className="d-flex justify-content-between align-items-center">
                  <h3>News & Announcements</h3>
                  <ul className="d-flex justify-content-between align-items-center mb-0 socialLinks">
                    <li>
                      <a>
                        <Image
                          src={
                            require("../../assets/images/twitter-icon.svg")
                              .default
                          }
                        />
                      </a>
                    </li>
                    <li>
                      <a>
                        <Image
                          src={
                            require("../../assets/images/telegram-icon.svg")
                              .default
                          }
                        />
                      </a>
                    </li>
                  </ul>
                </div>

                <h5>Tweets by @SaitaSwap</h5>
              </div>
              <div className="NiobSwap">
                <h5>
                  SaitaSwap<span>@SaitaSwap</span>
                </h5>
                <p>
                  This may probably be the most important and life-changing
                  Tweet you’ve ever read in your whole life. We proudly present
                  the most intuitive, secure and sexiest CryptoSwap on the World
                  Wide Web. Welcome to the feature. Welcome to SaitaSwap.</p>

                <p>This may probably be the most important and life-changing Tweet you’ve ever read in your whole life. We proudly present the most intuitive, secure and sexiest CryptoSwap on the World Wide Web. Welcome to the feature. Welcome to SaitaSwap. We proudly present the most intuitive, secure and sexiest CryptoSwap on the World
                  Wide Web. Welcome to the feature. Welcome to SaitaSwap.</p>
                



             
              <div className="niobImg tweet_Img">
                <Image className="tweet_img"
                  src={
                    require("../../assets/images/Niob-Header-Logo.svg")
                      .default
                  }
                />
              </div>
            </div>
          </div>
        </Col>
        <Col xl={6} lg={12}>
          <div className="comnBlk mb-4">
            <h3>SAITA Stats</h3>
            <ul className="pl-0 niobStats">
              <li>
                <label>Market Cap</label>
                <span>$100,000,001</span>
              </li>
              <li>
                <label>Total Minted</label>
                <span>38,913,839</span>
              </li>
              <li>
                <label>Total Burned</label>
                <span>2,587,911 </span>
              </li>
              <li>
                <label>Total Locked Rewards</label>
                <span>12,438,199 </span>
              </li>
              <li>
                <label> Circulating Supply </label>
                <span>23,891,243</span>
              </li>
              <li>
                <label>Max Tx Amoung </label>
                <span>58,373 </span>
              </li>
              <li>
                <label>New ANCHOR/Block Transfer Tax</label>
                <span> 75 3,0%</span>
              </li>
              <li>
                <label>Transfer Tax</label>
                <span>3,0%</span>
              </li>
            </ul>
          </div>
          <div className="comnBlk">
            <h3>Total Value Locked (TVL)</h3>
            <div className="totl_value">
              <h3>$20,000,000.00</h3>
              <p className="mb-0">Across all Farms and Pools</p>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="all_farms">
        <Col md={12}>
          <div className="farm_title">
            <h3>Top Farm Planets</h3>
            <Button title="All Farms" onClick={() => { history.push(`${rootName}/farmplanets/active`) }} />
          </div>
        </Col>
        <Col xl={4} lg={12}>
          <FarmCard title="SAITA" title1="BUSD" icon1={NIOB} icon2={BUSD} liquidity="$81,400.000"
            apy="987.40 %" />
        </Col>
        <Col xl={4} lg={12}>
          <FarmCard title="SAITA" title1="BTCB" icon1={NIOB} icon2={BTCB} liquidity="$98,500.000" apy="1,187.40 %"
          />
        </Col>
        <Col xl={4} lg={12}>
          <FarmCard title="SAITA" title1="ANCHOR" icon1={NIOB} icon2={ANCHOR} liquidity="$108,450.000"
            apy="435.90 %" />
        </Col>
      </Row>
    </div>
    </div >
  );
};

export default Home;
