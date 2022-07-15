/** seting action types */
export const actionTypes = {

  BSC_MAINNET_CONTRACTS: "BSC_MAINNET_CONTRACTS",
  BSC_MAINNET_TOKENS: "BSC_MAINNET_TOKENS",

  BSC_TESTNET_CONTRACTS: "BSC_TESTNET_CONTRACTS",
  BSC_TESTNET_TOKENS: "BSC_TESTNET_TOKENS"
};

/*
 * Action creators for Constants
 */

export function getBSCMainNetContracts() {
  return {
    type: actionTypes.BSC_MAINNET_CONTRACTS
  };
}

export function getBSCMainNetTokens() {
  return {
    type: actionTypes.BSC_MAINNET_TOKENS
  };
}

export function getBSCTestNetContracts() {
  return {
    type: actionTypes.BSC_TESTNET_CONTRACTS
  };
}

export function getBSCTestNetTokens() {
  return {
    type: actionTypes.BSC_TESTNET_TOKENS
  };
}
