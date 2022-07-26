import React, { useEffect } from "react";
import { Col, Row, Modal, Button } from "react-bootstrap";
import "./ConnectWallet.scss";
import { useDispatch } from "react-redux";
import { ContractServices } from "../../services/ContractServices";
import { login } from "../../redux/actions";
import { toast } from "../../components/Toast/Toast";
import WalletConnectProvider from "@walletconnect/web3-provider";

import iconMatamask from "../../assets/images/metamask_icon.png";
import iconCoinbase from "../../assets/images/coinbase_icon.svg";
import iconWallet from "../../assets/images/wallet_icon.svg";
import TokenPocket from "../../assets/images/tp.png";
import TrustWallet from "../../assets/images/trust-wallet.png";
import Binance from "../../assets/images/Binance-chain.png";
import MathWallet from "../../assets/images/mathwallet.png";

const ConnectWallet = ({ show, handleClose }) => {
  const dispatch = useDispatch();

  const loginCall = async (walletType, type) => {
    try {
      if (walletType === "BinanceChain") {
        const account = await ContractServices.isBinanceChainInstalled();
        if (account) {
          dispatch(login({ account, walletType }));
          handleClose(false);
          window.location.reload();
        }
      } else if (walletType === "Walletconnect") {
        try {
          const d = await ContractServices.callWeb3ForWalletConnect();
          const account = d.provider.accounts[0];
          console.log("in connect wallet", account, d);
          d.provider.on("connect", (_) =>
            console.log("congrats u r connected..")
          );
          d.provider.on("accountsChanged", async (accounts) => {
            console.log("account changed on remote");
            setTimeout(function () {
              window.location.reload();
            }, 500);
            let account = accounts[0];
            console.log("in connect wallet1", account);
            dispatch(login({ account, walletType }));
            handleClose(false);
            //return;
            window.location.reload();
          });
          dispatch(login({ account, walletType }));
          
          handleClose(false);
          //  window.location.reload();
        } catch (error) {
          console.log(error, "wallet error");
        }
      } else {
        const account = await ContractServices.isMetamaskInstalled(type);
        if (account) {
          dispatch(login({ account, walletType }));
          handleClose(false);
          // window.location.reload();
        }
      }
    } catch (err) {
      toast.error(err.message);
    }
  };
  useEffect(() => {
    (async () => {
      if (localStorage.getItem("walletconnect"))
        loginCall("Walletconnect", "Walletconnect");
    })();
  }, []);

  return (
    <Modal
      centered
      scrollable={true}
      className="connect_wallet"
      show={show}
      onHide={handleClose}
    >
      <Modal.Header closeButton>
        <Modal.Title>Connect to a wallet</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col className="baseToken_style token_strut">
            <ul>
              <li>
                <Button onClick={() => loginCall("Metamask", "Metamask")}>
                  MetaMask
                  <span>
                    <img src={iconMatamask} />
                  </span>{" "}
                </Button>
              </li>
              {/* <li>
                <Button>
                  CoinBase Wallet
                  <span>
                    <img src={iconCoinbase} />
                  </span>{" "}
                </Button>
              </li> */}
              <li>
                <Button
                  onClick={() => loginCall("Walletconnect", "Walletconnect")}
                >
                  WalletConnect
                  <span>
                    <img src={iconWallet} />
                  </span>{" "}
                </Button>
              </li>

              {/* <li>
                <Button>
                  TrustWallet
                  <span>
                    <img src={TrustWallet} />
                  </span>{" "}
                </Button>
              </li>
              <li>
                <Button>
                  MathWallet
                  <span>
                    <img src={MathWallet} />
                  </span>{" "}
                </Button>
              </li>
              <li>
                <Button>
                  TokenPocket
                  <span>
                    <img src={TokenPocket} />
                  </span>{" "}
                </Button>
              </li>
              <li>
                <Button>
                  Binance Chain Wallet
                  <span>
                    <img src={Binance} />
                  </span>{" "}
                </Button>
              </li> */}
            </ul>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export default ConnectWallet;
