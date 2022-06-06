import React, {useState} from 'react'
import { Col, Row, Modal, Button } from 'react-bootstrap'
import './ConnectWallet.scss'
import { Link } from 'react-router-dom'
import iconMatamask from '../../assets/images/metamask_icon.png'
import iconCoinbase from '../../assets/images/coinbase_icon.svg'
import iconWallet from '../../assets/images/wallet_icon.svg'
import TokenPocket from '../../assets/images/tp.png'
import TrustWallet from '../../assets/images/trust-wallet.png'
import Binance from '../../assets/images/Binance-chain.png'
import MathWallet from '../../assets/images/mathwallet.png'
 

const ConnectWallet = props => {
    return (
        <Modal centered scrollable={true} className="connect_wallet" show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Connect to a wallet</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Col className="baseToken_style">
                        <ul>
                            <li><Button>MetaMask<span><img src={iconMatamask} /></span> </Button></li>
                            <li><Button>CoinBase Wallet<span><img src={iconCoinbase} /></span> </Button></li>
                            <li><Button>WalletConnect<span><img src={iconWallet} /></span> </Button></li>
                            <li><Button>TrustWallet<span><img src={TrustWallet} /></span> </Button></li>
                            <li><Button>MathWallet<span><img src={MathWallet} /></span> </Button></li>
                            <li><Button>TokenPocket<span><img src={TokenPocket} /></span> </Button></li>
                            <li><Button>Binance Chain Wallet<span><img src={Binance} /></span> </Button></li>
                        </ul>
                    </Col>
                </Row>
            </Modal.Body>
        </Modal>
    )
}

export default ConnectWallet;
