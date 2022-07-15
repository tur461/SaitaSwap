/** seting action types */
export const actionTypes = {

  ETHEREUM_MAINNET_CONTRACTS: "ETHEREUM_MAINNET_CONTRACTS",
  ETHEREUM_MAINNET_TOKENS: "ETHEREUM_MAINNET_TOKENS",

  ETHEREUM_TESTNET_CONTRACTS: "ETHEREUM_TESTNET_CONTRACTS",
  ETHEREUM_TESTNET_TOKENS: "ETHEREUM_TESTNET_TOKENS"

};

/*
 * Action creators for Constants
 */

export function getEthethereumMainNetContracts() {
  return {
    type: actionTypes.ETHEREUM_MAINNET_CONTRACTS
  };
}

export function getEthethereumMainNetTokens() {
  return {
    type: actionTypes.ETHEREUM_MAINNET_TOKENS
  };
}

export function getEthethereumTestNetContracts() {
  return {
    type: actionTypes.ETHEREUM_TESTNET_CONTRACTS
  };
}

export function getEthethereumTestNetTokens() {
  return {
    type: actionTypes.ETHEREUM_TESTNET_TOKENS
  };
}
  