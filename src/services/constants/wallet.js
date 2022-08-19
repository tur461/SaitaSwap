const CHAIN_ID = {
    ETHEREUM: {
        INT: 1,
        HEX: '0x1',
    },

}

const WALLET_EVENT = {
    CHAIN_CHANGE: 'chainChanged',
}

const WALLET_METH = {
    REQ_ACCOUNT: 'eth_requestAccounts',
    SWITCH_CHAIN: 'wallet_switchEthereumChain',
}

export {
    CHAIN_ID,
    WALLET_METH,
    WALLET_EVENT,
}

