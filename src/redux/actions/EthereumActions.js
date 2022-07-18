/** seting action types */
export const actionTypes = {

  ETHEREUM_MAINNET_CONTRACTS: "ETHEREUM_MAINNET_CONTRACTS",
   
  ETHEREUM_TESTNET_CONTRACTS: "ETHEREUM_TESTNET_CONTRACTS",

};

/** Action creators for Constants */

export function getEthethereumMainNetContracts() {
  return {
    type: actionTypes.ETHEREUM_MAINNET_CONTRACTS
  };
}

export function getEthethereumTestNetContracts() {
  return {
    type: actionTypes.ETHEREUM_TESTNET_CONTRACTS
  };
}
  