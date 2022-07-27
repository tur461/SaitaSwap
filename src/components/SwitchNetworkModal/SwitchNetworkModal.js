import React, { useState } from "react";
import { Col, Row, Modal } from "react-bootstrap";
import CopyIcon from "../../assets/images/copy.png";
import "./SwitchNetworkModal.scss";
import { useDispatch, useSelector } from "react-redux";
import { NETWORK_SCAN } from "../../constant";
import { toast } from "../Toast/Toast";
import { CopyToClipboard } from "react-copy-to-clipboard";
import TolerenceIcon from "../../assets/images/tolerence.png";
import Button from "../Button/Button";
import { useEffect } from "react";
import { getBSCMainNetContracts, getBSCTestNetContracts, getEthethereumMainNetContracts, getEthethereumTestNetContracts } from "../../redux/actions";
import { ContractServices } from "../../services/ContractServices";
const SwitchNetworkModal = ({ show, handleClose, logout }) => {
  const dispatch = useDispatch();

  const isUserConnected = useSelector((state) => state.persist.isUserConnected);
  const [selectedNetwork, setSelectedNetwork] = useState("ETHEREUM");

  useEffect(() => { 
    const currentNetwork = localStorage.getItem("CURRENT NETWORK");
    if (currentNetwork === "ETHEREUM") {
      dispatch(getEthethereumMainNetContracts());
    }
    if (currentNetwork === "ETHEREUM TESTNET") {
      dispatch(getEthethereumTestNetContracts());
    }
    if (currentNetwork === "BSC") {
      dispatch(getBSCMainNetContracts());
    }
    if (currentNetwork === "BSC TESTNET") {
      dispatch(getBSCTestNetContracts());
    }
        
  }, [])

  const handleSelectNetwork = (networkName, chainID, chainId_NUMBER, symbol, networkChainName, rpcUrl, explorerUrl) => {
    setSelectedNetwork(networkName);
    // localStorage.removeItem("CURRENT NETWORK");
    // localStorage.removeItem("REACT_APP_NETWORK_CHAIN_NAME");
    // localStorage.removeItem("REACT_APP_NETWORK_CHAIN_ID");
    // localStorage.removeItem("REACT_APP_NETWORK_CHAIN_ID_NUMBER");
    // localStorage.removeItem("REACT_APP_NETWORK_NATIVE_CURRENCY_SYMBOL");
    // localStorage.removeItem("REACT_APP_NETWORK_RPC_URL");
    // localStorage.removeItem("REACT_APP_NETWORK_LINK");
    
    localStorage.setItem("CURRENT NETWORK", networkName);
    localStorage.setItem("REACT_APP_NETWORK_CHAIN_NAME", networkChainName);
    localStorage.setItem("REACT_APP_NETWORK_CHAIN_ID", chainID);
    localStorage.setItem("REACT_APP_NETWORK_CHAIN_ID_NUMBER", chainId_NUMBER);
    localStorage.setItem("REACT_APP_NETWORK_NATIVE_CURRENCY_SYMBOL", symbol);
    localStorage.setItem("REACT_APP_NETWORK_RPC_URL", rpcUrl);
    localStorage.setItem("REACT_APP_NETWORK_LINK", explorerUrl);
    ContractServices.walletWindowListener()
    window.location.reload();
  }

  return (
    <Modal
      centered
      scrollable={true}
      className="connect_wallet"
      show={show}
      onHide={handleClose}
    >
      <Modal.Header closeButton>
        <Modal.Title className="text-center">Switch Network
          <div className="d-flex mt-3 gap-2">
            <Button onClick={() => handleSelectNetwork("ETHEREUM", "0x1", 1, "ETH", "Ethereum", "https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161", "https://etherscan.io")}  title="Ethereum"><span className={selectedNetwork === "ETHEREUM" ? "network_eth active_network" : "network_eth"}></span></Button>
            <Button onClick={() => handleSelectNetwork("BSC", "0x38", 38, "BNB", "Smart Chain", "https://bsc-dataseed.binance.org", "https://bscscan.com")} title="BSC"><span  className={selectedNetwork === "BSC" ? "network_bsc active_network" : "network_bsc"}></span></Button>
          </div>
          {/* Hide below buttons before preparing build */}
          <div className="d-flex mt-3 gap-2">
            <Button onClick={() => handleSelectNetwork("ETHEREUM TESTNET", "0x4", 4, "ETH", "Ethereum Testnet", "https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161", "https://rinkey.etherscan.io")}  title="Eth (Testnet) "><span className={selectedNetwork === "ETHEREUM" ? "network_eth active_network" : "network_eth"}></span></Button>
            <Button onClick={() => handleSelectNetwork("BSC TESTNET", "0x61", 61, "BNB", "Smart Chain - Testnet", "https://data-seed-prebsc-1-s1.binance.org:8545/", "https://testnet.bscscan.com")} title="BSC (Testnet)"><span  className={selectedNetwork === "BSC" ? "network_bsc active_network" : "network_bsc"}></span></Button>
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col className="baseToken_style">
            <div className="profileModal_sec">
              <p>{isUserConnected}</p>
              <div className="copySec">
                <a
                  href={`${NETWORK_SCAN}/address/${isUserConnected}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  View on BSC
                  <img src={TolerenceIcon} />
                </a>
                <div className="ms-3">
                  <span>Copy</span>&nbsp;
                  <CopyToClipboard
                    text={`${NETWORK_SCAN}/address/${isUserConnected}`}
                    onCopy={() => toast.success("Copied!")}
                  >
                    <img className="copy-icon" alt="copy" src={CopyIcon} />
                  </CopyToClipboard>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export default SwitchNetworkModal;
