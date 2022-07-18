/** seting action types */
export const actionTypes = {

  BSC_MAINNET_CONTRACTS: "BSC_MAINNET_CONTRACTS",

  BSC_TESTNET_CONTRACTS: "BSC_TESTNET_CONTRACTS",

};

/** Action creators for Constants */

export function getBSCMainNetContracts() {
  return {
    type: actionTypes.BSC_MAINNET_CONTRACTS
  };
}
 
export function getBSCTestNetContracts() {
  return {
    type: actionTypes.BSC_TESTNET_CONTRACTS
  };
}