import React from "react";
import { Container ,Col, Row, Button, Form, FormControl  } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Reflink from "../../assets/images/reflink-icon.svg";
import Twitter from "../../assets/images/twitter-icon.svg";
import Telegram from "../../assets/images/telegram-icon.svg";
import './Referral.scss'

const Referral = () => {
    return(            
        <div className="container_wrap referral_page">
            <div className="timeto_connect">
                <Container className="custom_container">
                    <Row>
                        <Col xxl={6} xl={6}>
                            <div className="invite_othr">
                                <h1 className="title_hd">Time to connect</h1>
                                <h2>Invite your Friends. Earn <br />Cryptocurrency together!</h2>
                                <p>Earn a certain commission reward from your friends swaps on <br />Saita Swap and 3% from their earnings on Farms & Launchpools.</p>
                                <Link to="">Read more</Link>
                            </div>
                        </Col>
                        <Col xxl={5} xl={6}>
                            <div className="invite_othr refflink">
                                <img src={Reflink} />
                                <h2>My Referral Link</h2>
                                <div className="referalcodeDiv d-block">
                                    <Form.Group>
                                        <div className="referalCopyBox">
                                            <input class="form-control"  value="https://Saitaswap.app/165135138431535…" readOnly />
                                            <CopyToClipboard>
                                                <button></button>
                                            </CopyToClipboard>
                                        </div>
                                    </Form.Group>
                                </div>
                                <ul className="how_get">
                                    <li>
                                        <p>You will get</p>
                                        <span>100%</span>
                                    </li>
                                    <li>
                                        <p>Friends will get</p>
                                        <span>0%</span>
                                    </li>
                                </ul>
                                <div className="share_anyone">
                                    <p>Share</p>
                                    <ul class="shareable">
                                        <li><Link><img src={Twitter} /></Link></li>
                                        <li><Link><img src={Telegram} /></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="referrl_comm">
                <Container className="custom_container">
                    <Row>
                        <Col lg={4} md={6} xs={12}>
                            <div className="totl_reff">
                                <div className="reff_title">
                                    <h3>Total Referrals</h3>
                                </div>
                                <div className="reff_cont">
                                    <span>0</span>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={6} xs={12}>
                            <div className="totl_reff">
                                <div className="reff_title">
                                    <h3>Total Referral Commission</h3>
                                </div>
                                <div className="reff_cont">
                                    <span>0 Saita</span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            
        </div>
        
    )

}

export default Referral;