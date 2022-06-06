import React, {useState} from "react";
import './Header.scss'
import {Link} from 'react-router-dom'
import IconToggle from '../../assets/images/menu_toggle_icon.png'
import Iconmenu from '../../assets/images/wrap-menu.png'
import Button from "../Button/Button";
import ConnectWallet from "../ConnectWallet/ConnectWallet";

const Header = props => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <div className={`header_style ${props.className}`}>
                <div className="header_left_style">
                    <div className="for_desktop">
                        <div  className="hamburg" onClick={props.small_nav}>
                            {
                                props.mobileIcon ?
                                <img src={Iconmenu} alt="" />
                                :
                                <img src={IconToggle} />                            
                            }
                        </div> 
                    </div>
                    <div className="for_mobile">
                        <div className="hamburg" onClick={props.small_nav}>
                            {
                                props.mobileIcon ?
                                <img src={IconToggle} />
                                :
                                <img src={Iconmenu} alt="" />                            
                            }
                        </div>
                    </div>
                    <Link to="/home" className="header_logo"></Link> 
                </div>
                <div className="header_right_style">
                    <Button onClick={()=> handleShow(true)} title="Connect"/>
                </div>
                <ConnectWallet show={show} handleShow={handleShow} handleClose={handleClose} /> 
        </div>
          
    )
}

export default Header;