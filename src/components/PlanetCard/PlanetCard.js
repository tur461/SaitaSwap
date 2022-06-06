import React, {useState} from "react";
import { Button } from 'react-bootstrap'
import './PlanetCard.scss'
import RightArrow from "../../assets/images/right-arrow.png";
import DownArrow from "../../assets/images/down-arrow.png";
import GetLPToken from "../GetLPToken/GetLPToken";

const PlanetCard = props => {
    const [classToggle,setClassToggle]= useState(false);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <Button className={`planet_bar`} onClick={() => setClassToggle(!classToggle)}>
            <div className="cions">
                <span className="coin_imgs uppr"><img src={props.icon1} alt={"icon"}/></span>
                <span className="coin_imgs dwn"><img src={props.icon2} alt={"icon"}/></span>
                <span className="coin_title">{props.title}-{props.title1}</span>
            </div>
            <div className="prcentx">20X</div>
            <div className="coin_detail">
                <div className="apr">
                    <span>APR</span>
                    <p>987.40%</p>
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
                <p>Details <span><img src={DownArrow} /></span></p>
            </div>
        </Button>  
        <div className={classToggle?("planet_strip"): "d-none"}>
            <div className="available_funds">
                <div className="funds">
                    <Button className="funds_btn" onClick={()=> handleShow(true)}>Get LP</Button>
                    <div className="count_funds">
                        <span>Available LP</span>
                        <p>0.0000 LP</p>
                        <span>$0.0000</span>
                    </div>
                    <span className="forwd_arrow"><img src={RightArrow} alt={"right-arrow"} /></span>
                </div>
                <div className="funds">
                    <Button className="funds_btn">Enable Farm</Button>
                    <div className="count_funds">
                        <span>Staked LP</span>
                        <p>0.0000 LP</p>
                        <span>$0.0000</span>
                    </div> <span className="forwd_arrow"><img src={RightArrow} alt={"right-arrow"} /></span>
                </div>
                <div className="funds">
                    <Button className="funds_btn">Harvest</Button>
                    <div className="count_funds">
                        <span>Earned</span>
                        <p>0.0000 Saita</p>
                        <span>$0.0000</span>
                    </div>
                </div>
            </div>
        </div>
        <GetLPToken show={show} handleShow={handleShow} handleClose={handleClose} /> 
        </>
        
    )
}

export default PlanetCard;
