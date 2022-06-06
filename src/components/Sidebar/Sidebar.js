import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarFooter } from 'react-pro-sidebar';
import {isMobile} from 'react-device-detect';
import Twitter from "../../assets/images/twitter-icon.svg";
import NIOBtoken from "../../assets/images/saitaswap.png";
import Telegram from "../../assets/images/telegram-icon.svg";
import Docs from "../../assets/images/docs-icon.svg";
import Medium from "../../assets/images/medium-icon.svg";
import Github from "../../assets/images/git.svg";
import Globe from "../../assets/images/language-switcher-icon.svg";
import './Sidebar.scss'

const Sidebar = props => {

    const [selectedOption,setSelectedOption]=useState("")
    const location = useLocation();
    const { pathname } = location;  
    const splitLocation = pathname.split("/");
    console.log("Sidebar console" + pathname)

    const setSideBarOption =(option)=>{
        if(selectedOption==option){
            setSelectedOption("")
        }else{
            if(props.showSocial){
                if(!isMobile){
                 props.closeSidebar()

                }

            }
            setSelectedOption(option)
        }
    }
    React.useEffect(()=>{
        if( props.showSocial){
            setSelectedOption("");

        }
    },[props.showSocial])

    return (
        <ProSidebar className={`sidebar_style ${props.className}`} >
            <Menu iconShape="square">
                <MenuItem onClick={()=>setSideBarOption("")} className={splitLocation[1] === "home" ? "active" : ""} icon={<i className="home_nav_icon"></i>}>
                    <Link to="/home">Homebase</Link>
                </MenuItem>
                <SubMenu title="Trade"  open={selectedOption=="Trade"} onOpenChange={()=>setSideBarOption("Trade")} icon={<i className="trade_nav"></i>}>
                    <MenuItem className={splitLocation[1] === "swap" ? "active" : ""}>
                        <Link to="/trade/exchange" >Exchange</Link>
                    </MenuItem>
                    <MenuItem className={splitLocation[1] === "liquidity" ? "active" : ""}>
                        <Link to="/trade/liquidity" >Liquidity</Link>
                    </MenuItem>
                </SubMenu>
                    <MenuItem onClick={()=>setSideBarOption("")} className={splitLocation[1] === "farmplanets" ? "active" : ""} icon={<i className="farm_nav_icon"></i>}><Link to="/farmplanets/active">Farm Planets</Link></MenuItem>
                    <MenuItem  onClick={()=>setSideBarOption("")} className={splitLocation[1] === "poolgalaxy" ? "active" : ""} icon={<i className="pools_nav_icon"></i>}><Link to="/poolgalaxy">Pool Galaxy</Link></MenuItem>
                    <MenuItem onClick={()=>setSideBarOption("")} icon={<i className="lottery_nav_icon"></i>}><Link to="/lottery">Lottery</Link></MenuItem>
                    <MenuItem onClick={()=>setSideBarOption("")} className={splitLocation[1] === "referral" ? "active" : ""} icon={<i className="referrals_nav_icon"></i>}><Link to="/referral">Referral</Link></MenuItem>
                    <MenuItem onClick={()=>setSideBarOption("")} icon={<i className="audits_nav_icon"></i>}><Link to="/Home">Audits</Link></MenuItem>
                <SubMenu title="Features"  open={selectedOption=="Features"} onOpenChange={()=>setSideBarOption("Features")} icon={<i className="features_nav_icon"></i>}>
                    <MenuItem>
                        <Link to="/">Feature A</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to="/">Feature B</Link>
                    </MenuItem>
                </SubMenu>

                <SubMenu title="Listings"  open={selectedOption=="Listings"} onOpenChange={()=>setSideBarOption("Listings")} icon={<i className="listings_nav_icon"></i>}>
                    <MenuItem>
                        <Link to="/">Listing A</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to="/">Listing B</Link>
                    </MenuItem>
                </SubMenu>

                <SubMenu title="Analytics" open={selectedOption=="Analytics"} onOpenChange={()=>setSideBarOption("Analytics")} icon={<i className="analytics_nav_icon"></i>}>
                    <MenuItem>
                        <Link to="/">Analytic A</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to="/">Analytic B</Link>
                    </MenuItem>
                </SubMenu>

                <SubMenu title="More" open={selectedOption=="More"} onOpenChange={()=>setSideBarOption("More")} icon={<i className="more_nav_icon"></i>}>
                    <MenuItem>
                        <Link to="/">
                            Docs
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to="/">
                            Blog
                        </Link>
                    </MenuItem>
                </SubMenu>

            </Menu>
            {
                props.showSocial ?
                    <></>
                    :
            <SidebarFooter className="sidebar_footer" >
                <ul className="token-language">
                    <li className="token_list"><Link><img src={NIOBtoken} /> <span>$0.50</span></Link></li>
                    <li className="lang_list"><img src={Globe} /> <span className="lang_text">EN</span></li>
                </ul>
                <ul className="social_links">
                    <li><Link><img src={Github} /></Link></li>
                    <li><Link><img src={Docs} /></Link></li>
                    <li><Link><img src={Medium} /></Link></li>
                    <li><Link><img src={Twitter} /></Link></li>
                    <li><Link><img src={Telegram} /></Link></li>
                </ul>
            </SidebarFooter>
            }
        </ProSidebar>
    )
}
export default Sidebar;