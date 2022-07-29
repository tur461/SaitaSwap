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
import { URLS, WALLET_TYPES } from "../../constant";
import * as AMFI from '@amfi/connect-wallet';

const chains = [
  {
      name: 'ethereum',
      chainID: 1,
      hex: '0x1',
  }

]

const config = {
  wallets: ['CoinbaseWallet'],
  network: {
    name: 'ethereum',
    chainID: 1,
  },
  provider: {
    CoinbaseWallet: {
      name: 'CoinbaseWallet',
      useProvider: 'rpc', // Used to select the type of provider below
      provider: {
        // infura: {
        //   infuraID: '1cd01716-7d96-44f5-9a90-7416a4ac657b', // Your id from Infura
        // },
        rpc: {
          rpc: {
            // If you use Ethereum rpc, pass full Infura URL
            // 3: 'https://ropsten.infura.io/v3/PASS_HERE_BLOCKCHAIN_RPC',
            // For use this rpc change chainId below to 56
            // 56: 'https://bsc-dataseed.binance.org/',
            1: URLS.RPC_REMOTE,
          },
          chainId: 1, // Used to select a rpc above
        },
      },
    },
  },
  settings: {
    // Add provider type from wallets in this config
    providerType: true,
  },
};

const ConnectWallet = ({ show, handleClose }) => {
  const connectWallet = new AMFI.ConnectWallet();
  connectWallet.addChains(chains)

  
  const dispatch = useDispatch();

  const loginCall = async (walletType, type) => {
    try {
      if(walletType === WALLET_TYPES.COINBASE){
        const result = await connectWallet.connect(
          config.provider.CoinbaseWallet, 
          config.network, 
          config.settings
        );
        console.log('result:', result);
        if(result.connected) {
          
          result.provider.on('connect', e => {
            console.log('on connect', e);
            // dispatch(login({ account, walletType }));
          })
          result.provider.on('disconnect', e => {
            console.log('on disconnect');
          })
          result.provider.on('accountsChanged', accounts => {
            console.log('account changed:', accounts);
          })
          result.provider.on('chainChanged', e => {
            console.log('chain changed:', e);
          })
          const provider = result.provider;
          console.log('chianId', await provider.getChainId());
          const accounts = await connectWallet.getAccounts();
          console.log('accounts:', accounts.address)

          dispatch(login({ account: accounts.address, walletType }));
        } else {
          console.log('connected', result.provider);
        }

        // const account = await result.provider.enable();
        // console.log('external connected', result.provider, account);
        
          
        handleClose(false);
      }else if (walletType === "BinanceChain") {
        const account = await ContractServices.isBinanceChainInstalled();
        if (account) {
          dispatch(login({ account, walletType }));
          handleClose(false);
          // window.location.reload();
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
            // window.location.reload();
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
              <li>
                <Button
                  onClick={_ => loginCall(WALLET_TYPES.COINBASE)}
                >
                  CoinBase Wallet
                  <span>
                    <img src={iconCoinbase} />
                  </span>{" "}
                </Button>
              </li>
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
