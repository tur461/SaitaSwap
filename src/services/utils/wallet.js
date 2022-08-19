import l_t from "../logging/l_t";
import { rEqual } from "./common";
import log from "../logging/logger";
import { WALLET_TYPES } from "../../constant"
import { CHAIN_ID, WALLET_METH } from "../constants/wallet";

const ensureChain = async (walletType, wallet) => {
    switch(walletType) {
        case WALLET_TYPES.METAMASK :
        case WALLET_TYPES.COINBASE :
        case WALLET_TYPES.WALLET_CONNECT :
            debugger;
            log.i(`ensuring chain with id:`, wallet);
            if(!rEqual(wallet.chainId, CHAIN_ID.ETHEREUM.HEX))
                await wallet.request({
                    method: WALLET_METH.SWITCH_CHAIN,
                    params: [{ chainId: CHAIN_ID.ETHEREUM.HEX }],
                });
            else log.s('selected is ethereum chain!');
        break;
        default: log.i(`no such a wallet!!`);
    }
}

const tryGetAccount = async (walletType, wallet) => {
    // debugger;
    let acc = null;
    switch(walletType) {
        case WALLET_TYPES.METAMASK : acc = await wallet.request({ method: WALLET_METH.REQ_ACCOUNT }); break;
        case WALLET_TYPES.COINBASE : acc = await wallet.request({ method: WALLET_METH.REQ_ACCOUNT }); break;
        case WALLET_TYPES.WALLET_CONNECT : acc = await wallet.request({ method: WALLET_METH.REQ_ACCOUNT }); break;
        default: log.i(`no such a wallet!!`);
    }
    return typeof acc == 'object' ? acc[0] : acc;
}

export {
    ensureChain,
    tryGetAccount,
}