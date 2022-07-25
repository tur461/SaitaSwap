import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarFooter,
} from "react-pro-sidebar";
import { isMobile } from "react-device-detect";
import Twitter from "../../assets/images/twitter-icon.svg";
import NIOBtoken from "../../assets/images/saitaswap.png";
import Telegram from "../../assets/images/telegram-icon.svg";
import Docs from "../../assets/images/docs-icon.svg";
import Youtube from "../../assets/images/token_icons/saitamaIcons/youtube.svg";
import facebook from "../../assets/images/token_icons/saitamaIcons/facebook.svg";
import instagram from "../../assets/images/token_icons/saitamaIcons/instagram.svg";
import discord from "../../assets/images/token_icons/saitamaIcons/discord.svg";

import Medium from "../../assets/images/medium-icon.svg";
import Github from "../../assets/images/git.svg";
import Globe from "../../assets/images/language-switcher-icon.svg";
import "./Sidebar.scss";
import useWindowDimensions from "../../hooks/getWindowDimensions";
import {
  ANCHOR_BUSD_LP,
  AUDIT,
  DOCS,
  INSURANCE_FUND,
  LOTTERY,
  NIOB_SHARING,
  PREDICTION_TRAINING,
  TRADING_FEE_CASHBACK,
} from "../../assets/tokens";
import { ExchangeService } from "../../services/ExchangeService";

const Sidebar = (props) => {
  const { width } = useWindowDimensions();

  const [selectedOption, setSelectedOption] = useState("");
  const [NiobBusdValue, setNiobBusdValue] = useState("");
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  const closeSidebar = () => {
    if (width < 991) {
      props.small_nav();
    }
  };

  const setSideBarOption = (option) => {
    if (selectedOption == option) {
      setSelectedOption("");
    } else {
      if (props.showSocial) {
        if (!isMobile) {
          // props.closeSidebar();
        }
      }
      setSelectedOption(option);
    }
  };

  const getNiobDollarValue = async () => {
    const res = await ExchangeService.getAmountsOutForDValue(1000000000, [
      "0x0eD81CAe766d5B1a4B3ed4DFbED036be13c6C09C",
      "0xc778417E063141139Fce010982780140Aa0cD5Ab",
      "0xe185DB528FAfCBceb3bF00687E5aaFDC6DB17089",
    ]);
    setNiobBusdValue(res[2] / 10 ** 18);
  };

  React.useEffect(() => {
    getNiobDollarValue();
    if (props.showSocial) {
      setSelectedOption("");
    }
  }, [props.showSocial]);
  return (
    <ProSidebar
      className={`sidebar_style ${props.className}`}
      style={{ width: "150px" }}
    >
      <Menu iconShape="square">
        {/* <MenuItem
          onClick={() => { closeSidebar(); setSideBarOption("") }}
          className={splitLocation[1] === "home" ? "active" : ""}
          icon={<i className="home_nav_icon"></i>}
        >
          <Link to="/home">Homebase</Link>
        </MenuItem>
        <MenuItem
          onClick={() => { closeSidebar(); setSideBarOption("") }}
          className={splitLocation[1] === "home" ? "active" : ""}
          icon={<i className="pred_nav_icon"></i>}
        >
          <Link to="/home">Prediction Trading</Link>
          <a href={"https://prdt.niob.app"} target="_blank">Prediction Trading</a>
        </MenuItem> */}
        <SubMenu
          title="Trade"
          open={selectedOption == "Trade"}
          onOpenChange={() => setSideBarOption("Trade")}
          icon={<i className="trade_nav"></i>}
        >
          <MenuItem
            onClick={() => closeSidebar()}
            className={splitLocation[2] === "exchange" ? "active" : ""}
            icon={<i className="exchange_nav_icon"></i>}
          >
            <Link to="/trade/exchange">Exchange</Link>
          </MenuItem>
          <MenuItem
            onClick={() => closeSidebar()}
            className={splitLocation[2] === "liquidity" ? "active" : ""}
            icon={<i className="liquidity_nav_icon"></i>}
          >
            <Link to="/trade/liquidity">Liquidity</Link>
          </MenuItem>
        </SubMenu>
        <MenuItem
          onClick={() => {
            closeSidebar();
            setSideBarOption("");
          }}
          className={splitLocation[1] === "liquidity" ? "active" : ""}
          icon={<i className="stake_nav_icon"></i>}
        >
          <Link to="/staking">Stake</Link>
        </MenuItem>
        {/* <MenuItem
          onClick={() => {
            closeSidebar();
            setSideBarOption("");
          }}
          className={splitLocation[1] === "farmplanets" ? "active" : ""}
          icon={<i className="farm_nav_icon"></i>}
        >
          <Link to="/farmplanets/active">Farms</Link>
        </MenuItem> */}
        {/* <MenuItem
          onClick={() => {
            closeSidebar();
            setSideBarOption("");
          }}
          className={splitLocation[1] === "poolgalaxy" ? "active" : ""}
          icon={<i className="pools_nav_icon"></i>}
        >
          <Link to="/poolgalaxy">Pool Galaxy</Link>
        </MenuItem> */}
        {/* <MenuItem onClick={()=>setSideBarOption("")} icon={<i className="lottery_nav_icon"></i>}><Link to="/lottery">Lottery</Link></MenuItem> */}
        {/* <MenuItem
          onClick={() => {
            closeSidebar();
            setSideBarOption("");
          }}
          className={splitLocation[1] === "referral" ? "active" : ""}
          icon={<i className="referrals_nav_icon"></i>}
        >
          <Link to="/referral">Referral</Link>
        </MenuItem> */}
        {/* <MenuItem
          onClick={() => {
            setSideBarOption("");
            closeSidebar();
          }}
          icon={<i className="audits_nav_icon"></i>}
        >
          <a href={AUDIT} target="_blank">
            Audits
          </a>
        </MenuItem> */}
        {/* <SubMenu
          title="Features"
          open={selectedOption == "Features"}
          onOpenChange={() => setSideBarOption("Features")}
          icon={<i className="features_nav_icon"></i>}
        > */}
        {/* <MenuItem
            onClick={() => { closeSidebar() }}
          >
            <a href={LOTTERY} target="_blank">Lottery</a>
          </MenuItem>  */}
        {/* <MenuItem
            onClick={() => { closeSidebar() }}
          >
            <a href={NIOB_SHARING} target="_blank">Niob-Sharing</a>
          </MenuItem>
          <MenuItem
            onClick={() => { closeSidebar() }}
          >
            <a href={PREDICTION_TRAINING} target="_blank">Prediction Trading</a>
          </MenuItem>
          <MenuItem
            onClick={() => { closeSidebar() }}
          >
            <a href={INSURANCE_FUND} target="_blank">Insurance Fund</a>
          </MenuItem> */}
        {/* <MenuItem
            onClick={() => { closeSidebar() }}
          >
            <a href={TRADING_FEE_CASHBACK} target="_blank">Trading-Fee Cashback</a>
          </MenuItem> */}
        {/* </SubMenu> */}

        {/* <SubMenu
          title="Listings"
          open={selectedOption == "Listings"}
          onOpenChange={() => setSideBarOption("Listings")}
          icon={<i className="listings_nav_icon"></i>}
        >
          <MenuItem
            onClick={() => {closeSidebar()}}
          >
            <Link to="/">Listing A</Link>
          </MenuItem>
          <MenuItem
            onClick={() => {closeSidebar()}}
          >
            <Link to="/">Listing B</Link>
          </MenuItem>
        </SubMenu> */}

        {/* <SubMenu
          title="Analytics"
          open={selectedOption == "Analytics"}
          onOpenChange={() => setSideBarOption("Analytics")}
          icon={<i className="analytics_nav_icon"></i>}
        >
          <MenuItem
            onClick={() => {
              closeSidebar();
            }}
          >
            <Link to="/">Analytic A</Link>
          </MenuItem>
          <MenuItem
            onClick={() => {
              closeSidebar();
            }}
          >
            <Link to="/">Analytic B</Link>
          </MenuItem>
        </SubMenu> */}

        {/* <SubMenu
          title="More"
          open={selectedOption == "More"}
          onOpenChange={() => setSideBarOption("More")}
          icon={<i className="more_nav_icon"></i>}
        > */}
        {/* <MenuItem
            onClick={() => {
              closeSidebar();
            }}
          >
            <a href={DOCS} target="_blank">
              Docs
            </a>
          </MenuItem> */}
        {/* <MenuItem
            onClick={() => {closeSidebar()}}
          >
            <Link to="/">Blog</Link>
          </MenuItem> */}
        {/* </SubMenu> */}
      </Menu>
      {/* {props.showSocial ? (
        <></>
      ) : ( */}
      <SidebarFooter className="sidebar_footer">
        <ul className="token-language">
          <li className="token_list">
            <img src={NIOBtoken} />{" "}
            <span style={{ color: "white" }}>
              ${NiobBusdValue ? NiobBusdValue.toFixed(4) : "0"}
            </span>
          </li>
          {/* <li className="lang_list">
            <img src={Globe} /> <span className="lang_text">EN</span>
          </li> */}
        </ul>
        <ul className="social_links">
          {/* <li>
            <Link>
              <img src={Github} />
            </Link>
          </li> */}
          <li>
            <a href="https://www.instagram.com/we.are.saitama/" target="_blank">
              <img src={instagram} />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/groups/1275234186328559/"
              target="_blank"
            >
              <img src={facebook} />
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/channel/UCcgXSwHloSMeXygKx8bTGBA"
              target="_blank"
            >
              <img src={Youtube} />
            </a>
          </li>
          <li>
            <a href="https://discord.gg/saitama" target="_blank">
              <img src={discord} />
            </a>
          </li>
          {/* <li>
            <Link>
              <img src={Medium} />
            </Link>
          </li> */}
          <li>
            <a href="https://twitter.com/wearesaitama" target="_blank">
              <img src={Twitter} />
            </a>
          </li>
          <li>
            <a href="https://t.me/+PjupkZhaJSc1Mjhh" target="_blank">
              <img src={Telegram} />
            </a>
          </li>
        </ul>
      </SidebarFooter>
      {/* )} */}
    </ProSidebar>
  );
};
export default Sidebar;
