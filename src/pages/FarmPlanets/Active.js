import React from 'react'
import { Container, Row, Col, Table } from "react-bootstrap";
import PlanetCard from "../../components/PlanetCard/PlanetCard";
import NIOB from "../../assets/images/saitaswap.png";
import BUSD from "../../assets/images/BUSD-Token.svg";
import ANCHOR from "../../assets/images/ANCHOR-Token.svg";
import ETH from "../../assets/images/ETH-Token.svg";
import BTCB from "../../assets/images/BTCB-Token.svg";
import CAKE from "../../assets/images/CAKE-Token.svg";

const Active = () => {
    return (
        <div className="planet_list active">
            <Row>
                <Col xl={12}>
                    <div className="planet_list_view">
                        <PlanetCard icon1={NIOB} icon2={BUSD} title={`SAITA`} title1={`BUSD`}/>
                        <PlanetCard icon1={NIOB} icon2={ANCHOR} title={`SAITA`} title1={`ANCHOR`}/>
                        <PlanetCard icon1={NIOB} icon2={ETH} title={`SAITA`} title1={`ETH`}/>  
                        <PlanetCard icon1={NIOB} icon2={BTCB} title={`SAITA`} title1={`BTCB`}/> 
                        <PlanetCard icon1={NIOB} icon2={CAKE} title={`SAITA`} title1={`CAKE`}/> 
                        <PlanetCard icon1={NIOB} icon2={BUSD} title={`SAITA`} title1={`BUSD`}/>
                        <PlanetCard icon1={NIOB} icon2={ANCHOR} title={`SAITA`} title1={`ANCHOR`}/>
                        <PlanetCard icon1={NIOB} icon2={ETH} title={`SAITA`} title1={`ETH`}/>  
                        <PlanetCard icon1={NIOB} icon2={BTCB} title={`SAITA`} title1={`BTCB`}/> 
                        <PlanetCard icon1={NIOB} icon2={CAKE} title={`SAITA`} title1={`CAKE`}/> 
                   </div>
                </Col>
            </Row>
            
        </div>
    )
}

export default Active;
