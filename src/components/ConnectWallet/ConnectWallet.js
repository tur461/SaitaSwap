import React, { useEffect } from "react";
import { Col, Row, Modal, Button } from "react-bootstrap";
import "./ConnectWallet.scss";
import { useDispatch } from "react-redux";
import { ContractServices } from "../../services/ContractServices";
import { connectAnyWalletSuccess } from "../../redux/actions";
import { toast } from "../../components/Toast/Toast";
import iconMatamask from "../../assets/images/metamask_icon.png";
import iconCoinbase from "../../assets/images/coinbase_icon.svg";
import iconWallet from "../../assets/images/wallet_icon.svg";
import TokenPocket from "../../assets/images/tp.png";
import TrustWallet from "../../assets/images/trust-wallet.png";
import Binance from "../../assets/images/Binance-chain.png";
import MathWallet from "../../assets/images/mathwallet.png";
import { URLS, WALLET_TYPES } from "../../constant";
import * as AMFI from '@amfi/connect-wallet';
import { ensureChain, tryGetAccount } from "../../services/utils/wallet";
import { CHAIN_ID, WALLET_EVENT } from "../../services/constants/wallet";
import { rEqual } from "../../services/utils/common";
import log from "../../services/logging/logger";
import WalletConnectProvider from "@walletconnect/web3-provider";

const chains = [
  {
      name: 'ethereum',
      chainID: 1,
      hex: '0x1',
  }

];

const wallets = [
  'MetaMask', 
  'WalletConnect', 
  'CoinbaseWallet'
]

const config = {
  wallets,
  network: {
    name: 'ethereum',
    chainID: 1,
  },
  provider: {
    MetaMask: {
      name: 'MetaMask',
      useProvider: 'rpc',
      provider: {
        rpc: {
          rpc: {
            
          }
        }
      }
    },
    CoinbaseWallet: {
      name: 'CoinbaseWallet',
      useProvider: 'rpc',
      provider: {
        rpc: {
          rpc: {

          }
        }
      }
    },
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
  const dispatch = useDispatch();
  
  const handlePostConnection = async (wType, wallet) => {
    wallet.on(WALLET_EVENT.CHAIN_CHANGE, async chainId => {
      log.s('chain changed:', chainId);
      if(!rEqual(CHAIN_ID.ETHEREUM.HEX, chainId)) 
        await ensureChain(wType, wallet);
    })
    const acc = await tryGetAccount(wType, wallet);
    log.i('account:', acc);
    if (acc) {
      await ensureChain(wType, wallet);
      dispatch(connectAnyWalletSuccess({ account: acc, wType }));
      handleClose(!1);
    }
  }

  const connectAnyWallet = async (walletType) => {
    ContractServices.setWalletType(walletType);
    let wallet = null;
    switch(walletType) {
      case WALLET_TYPES.METAMASK:
        wallet = window.ethereum;
        await handlePostConnection(walletType, wallet);
      break;
      case WALLET_TYPES.COINBASE:
        const coinBase = new AMFI.ConnectWallet();
        coinBase.addChains(chains);
        const result = await coinBase.connect(
          config.provider.CoinbaseWallet, 
          config.network, 
          config.settings
        );
        if(result.connected) {
          wallet = result.provider;
          // wallet.on('accountsChanged', accounts => {
          //   console.log('account changed:', accounts);
          // })
          await handlePostConnection(walletType, wallet);
        } else log.i('not connected!', result);
      break;
      case WALLET_TYPES.WALLET_CONNECT:
        wallet = new WalletConnectProvider({
          rpc: {
            1: URLS.RPC_REMOTE
          },
          qrcode: !0,
        });
        await handlePostConnection(walletType, wallet);
      break;
      default: log.e('invalid wallet type!!');
    } 
  };
  useEffect(() => {
    (async () => {
      if (localStorage.getItem("walletconnect"))
        connectAnyWallet(WALLET_TYPES.WALLET_CONNECT);
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
                <Button onClick={() => connectAnyWallet(WALLET_TYPES.METAMASK)}>
                  MetaMask
                  <span>
                    <img src={iconMatamask} />
                  </span>{" "}
                </Button>
              </li>
              <li>
                <Button
                  onClick={_ => connectAnyWallet(WALLET_TYPES.COINBASE)}
                >
                  CoinBase Wallet
                  <span>
                    <img src={iconCoinbase} />
                  </span>{" "}
                </Button>
              </li>
              <li>
                <Button
                  onClick={() => connectAnyWallet(WALLET_TYPES.WALLET_CONNECT)}
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
