import React, { useState } from "react";
import { Col, Row, Modal } from "react-bootstrap";
import CopyIcon from "../../assets/images/copy.png";
import "./SwitchNetworkModal.scss";
import { useDispatch, useSelector } from "react-redux";
import { BSC_SCAN } from "../../constant";
import { toast } from "../Toast/Toast";
import { CopyToClipboard } from "react-copy-to-clipboard";
import TolerenceIcon from "../../assets/images/tolerence.png";
import Button from "../Button/Button";
import { useEffect } from "react";
import { getBSCMainNetContracts, getBSCTestNetContracts, getEthethereumMainNetContracts, getEthethereumTestNetContracts } from "../../redux/actions";

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

  const handleSelectNetwork = (networkName) => {
    setSelectedNetwork(networkName);
    localStorage.setItem("CURRENT NETWORK", networkName);
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
            <Button onClick={() => handleSelectNetwork("ETHEREUM")}  title="Ethereum"><span className={selectedNetwork === "ETHEREUM" ? "network_eth active_network" : "network_eth"}></span></Button>
            <Button onClick={() => handleSelectNetwork("BSC")} title="BSC"><span  className={selectedNetwork === "BSC" ? "network_bsc active_network" : "network_bsc"}></span></Button>
          </div>
          <div className="d-flex mt-3 gap-2">
            <Button onClick={() => handleSelectNetwork("ETHEREUM TESTNET")}  title="Eth (Testnet) "><span className={selectedNetwork === "ETHEREUM" ? "network_eth active_network" : "network_eth"}></span></Button>
            <Button onClick={() => handleSelectNetwork("BSC TESTNET")} title="BSC (Testnet)"><span  className={selectedNetwork === "BSC" ? "network_bsc active_network" : "network_bsc"}></span></Button>
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
                  href={`${BSC_SCAN}/address/${isUserConnected}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  View on BSC
                  <img src={TolerenceIcon} />
                </a>
                <div className="ms-3">
                  <span>Copy</span>&nbsp;
                  <CopyToClipboard
                    text={`${BSC_SCAN}/address/${isUserConnected}`}
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
