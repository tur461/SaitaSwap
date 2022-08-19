import Web3 from "web3";
import TOKEN_ABI from "../assets/ABI/tokenContract.ABI.json";
import { toast } from "../components/Toast/Toast";
import {
  NETWORK_CHAIN_ID,
  NETWORK_CHAIN_NAME,
  NETWORK_LINK,
  NETWORK_NATIVE_CURRENCY_DECIMALS,
  NETWORK_NATIVE_CURRENCY_NAME,
  NETWORK_NATIVE_CURRENCY_SYMBOL,
  NETWORK_RPC_URL,
  WALLET_TYPES,
} from "../constant";
import WalletConnectProvider from "@walletconnect/web3-provider";

let web3Object=null;
let contractOjbect;
let currentContractAddress;
let tokenContractObject;
let currentTokenAddress;
let walletTypeObject = WALLET_TYPES.NONE;

//only for lp tokens
const convertToDecimals = async (value) => {
  const decimals = 18;
  return Number(value) / 10 ** decimals;
};

const isMetamaskInstalled = async (type) => {
  //Have to check the ethereum binding on the window object to see if it's installed
  const { ethereum, web3 } = window;
  const result = Boolean(ethereum && ethereum.isMetaMask);
  walletTypeObject = "Metamask";
  if (result) {
    //metamask
    try {
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      return accounts[0];
    } catch (err) {
      toast.error(err.message);
      return false;
    }
  } else if (ethereum) {
    //trust wallet
    try {
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      return accounts[0];
    } catch (err) {
      toast.error(err.message);
      return false;
    }
  } else if (web3) {
    //trustwallet
    const accounts = await web3.eth.getAccounts();
    return accounts[0];
  } else {
    if (type) {
      toast.error(`Install ${type} extension first!`);
    }
    return false;
  }
};

const isBinanceChainInstalled = async () => {
  //Have to check the ethereum binding on the window object to see if it's installed
  const { BinanceChain } = window;
  if (BinanceChain) {
    walletTypeObject = "BinanceChain";
    try {
      const accounts = await BinanceChain.request({
        method: "eth_requestAccounts",
      });
      return accounts[0];
    } catch (err) {
      toast.error(err.message);
      return false;
    }
  } else {
    toast.error("Install BinanceChain extension first!");
    return false;
  }
};

const walletWindowListener = async () => {
  const { coinbaseWalletExtension, BinanceChain, ethereum } = window;
  console.log('### wallet type object:', walletTypeObject, 'NETWORK_CHAIN_ID', NETWORK_CHAIN_ID);
  if (walletTypeObject === WALLET_TYPES.METAMASK) {
    const result = Boolean(ethereum && ethereum.isMetaMask);
    if (result) {
      if (ethereum.chainId !== NETWORK_CHAIN_ID) {
        try {
          const chain = await ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: NETWORK_CHAIN_ID }],
          });
        } catch (error) {
          console.log("metamask error", error);
          if (error?.code === 4902) {
            try {
              const addChain = await ethereum.request({
                method: "wallet_addEthereumChain",
                params: [
                  {
                    chainId: NETWORK_CHAIN_ID,
                    chainName: NETWORK_CHAIN_NAME,
                    nativeCurrency: {
                      name: NETWORK_NATIVE_CURRENCY_NAME,
                      symbol: NETWORK_NATIVE_CURRENCY_SYMBOL,
                      decimals: Number(NETWORK_NATIVE_CURRENCY_DECIMALS),
                    },
                    rpcUrls: [NETWORK_RPC_URL],
                    blockExplorerUrls: [NETWORK_LINK],
                  },
                ],
              });
              // window.location.reload();
            } catch (error) {}
          }
        }
      }

      ethereum.on("chainChanged", async (chainId) => {
        if (chainId !== NETWORK_CHAIN_ID) {
          // toast.error('Select Binance Smart Chain Mainnet Network in wallet!')
          try {
            const chain = await ethereum.request({
              method: "wallet_switchEthereumChain",
              params: [{ chainId: NETWORK_CHAIN_ID }],
            });
          } catch (error) {
            console.log("metamask error", error);
            if (error?.code === 4902) {
              try {
                const addChain = await ethereum.request({
                  method: "wallet_addEthereumChain",
                  params: [
                    {
                      chainId: await window.ethereum.chainId,
                      chainName: NETWORK_CHAIN_NAME,
                      nativeCurrency: {
                        name: NETWORK_NATIVE_CURRENCY_NAME,
                        symbol: NETWORK_NATIVE_CURRENCY_SYMBOL,
                        decimals: Number(NETWORK_NATIVE_CURRENCY_DECIMALS),
                      },
                      rpcUrls: [NETWORK_RPC_URL],
                      blockExplorerUrls: [NETWORK_LINK],
                    },
                  ],
                });
              } catch (error) {}
            }
          }
        }
      });
    }
  } else
  if(walletTypeObject === WALLET_TYPES.COINBASE) {
    
    coinbaseWalletExtension.on("chainChanged", async (chainId) => {
      if (chainId !== NETWORK_CHAIN_ID) {
        // toast.error('Select Binance Smart Chain Mainnet Network in wallet!')
        try {
          const chain = await coinbaseWalletExtension.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: NETWORK_CHAIN_ID }],
          });
        } catch (error) {
          console.log("coinbase error", error);
        }
      }
    })
  }
};

const callWeb3 = async () => {
  console.log('callWeb3', web3Object, walletTypeObject);
  if (web3Object) return web3Object;
  const { coinbaseWalletExtension, ethereum, web3 } = window;
  if (walletTypeObject === WALLET_TYPES.METAMASK) {
    console.log('walletTypeObject', walletTypeObject, 'ethereum', ethereum);
    if (ethereum && ethereum.isMetaMask) return (web3Object = new Web3(ethereum));
    else if (web3) return (web3Object = new Web3(web3.currentProvider));
    else toast.error("You have to install Wallet!");
  } else if(walletTypeObject === WALLET_TYPES.COINBASE) {
    console.log('walletTypeObject', walletTypeObject, 'coinbaseWalletExtension', coinbaseWalletExtension);
    if(coinbaseWalletExtension && coinbaseWalletExtension.isCoinbaseWallet) return (web3Object = new Web3(coinbaseWalletExtension));
  } else if(walletTypeObject === WALLET_TYPES.NONE) return (web3Object = null);
  else return toast.error("You have to install Wallet!");
};

const clearWeb3Object = _ => web3Object = null;

const callContract = async (contractAddress, contractABI) => {
  if (
    contractOjbect &&
    currentContractAddress &&
    currentContractAddress.toLowerCase() === contractAddress.toLowerCase()
  ) {
    return contractOjbect;
  }
  const web3Object = await callWeb3();
  currentContractAddress = contractAddress;
  contractOjbect = new web3Object.eth.Contract(contractABI, contractAddress);
  return contractOjbect;
};
const callTokenContract = async (tokenAddress) => {
  if (
    tokenContractObject &&
    currentContractAddress &&
    currentTokenAddress.toLowerCase() === tokenAddress.toLowerCase()
  ) {
    return tokenContractObject;
  }
  const web3Object = await callWeb3();
  currentTokenAddress = tokenAddress;
  tokenContractObject = new web3Object.eth.Contract(
    TOKEN_ABI,
    currentTokenAddress
  );
  return tokenContractObject;
};

const calculateGasPrice = async () => {
  const web3 = await callWeb3();
  return await web3.eth.getGasPrice();
};

const getDefaultAccount = async () => {
  const web3 = await callWeb3();
  const accounts = await web3.eth.getAccounts();
  console.log("accounts sss", accounts);
  return accounts[0];
};

const approveToken = async (
  address,
  value,
  mainContractAddress,
  tokenAddress
) => {
  try {
    const gasPrice = await calculateGasPrice();
    const contract = await callTokenContract(tokenAddress);
    //calculate estimate gas limit
    const gas = await contract.methods
      .approve(mainContractAddress, value)
      .estimateGas({ from: address });

    return await contract.methods
      .approve(mainContractAddress, value)
      .send({ from: address, gasPrice, gas });
  } catch (error) {
    return error;
  }
};

const allowanceToken = async (tokenAddress, mainContractAddress, address) => {
  try {
    const contract = await callTokenContract(tokenAddress);
    return await contract.methods
      .allowance(address, mainContractAddress)
      .call();
  } catch (error) {
    return error;
  }
};

const getTokenBalanceForMax = async (tokenAddress, address) => {
  try {
    const contract = await callTokenContract(tokenAddress);
    console.log("### addr:", tokenAddress, address);
    const decimals = await contract.methods.decimals().call();
    let result = await contract.methods.balanceOf(address).call();
    result = Number(result) / 10 ** decimals;
    return Number(result);
  } catch (error) {
    console.log("Error:", error);
    return 0;
  }
};

const getTokenBalance = async (tokenAddress, address) => {
  try {
    const contract = await callTokenContract(tokenAddress);
    console.log("### addr:", tokenAddress, address);
    const decimals = await contract.methods.decimals().call();
    let result = await contract.methods.balanceOf(address).call();
    result = (Number(result) / 10 ** decimals).toFixed(5);
    console.log(result);
    return Number(result);
  } catch (error) {
    console.log("Error:", error);
    return 0;
  }
};
const getTokenBalanceFull = async (tokenAddress, address) => {
  try {
    const contract = await callTokenContract(tokenAddress);
    const decimals = await contract.methods.decimals().call();

    let result = await contract.methods.balanceOf(address).call();
    result = result / 10 ** decimals;

    return result;
  } catch (error) {
    console.log("Error:", error);
    return 0;
  }
};

const getDecimals = async (tokenAddress) => {
  try {
    const contract = await callTokenContract(tokenAddress);
    return await contract.methods.decimals().call();
  } catch (error) {
    return error;
  }
};

const getTokenName = async (tokenAddress) => {
  try {
    const contract = await callTokenContract(tokenAddress);
    return await contract.methods.name().call();
  } catch (error) {
    return error;
  }
};

const getTokenSymbol = async (tokenAddress) => {
  try {
    const contract = await callTokenContract(tokenAddress);
    return await contract.methods.symbol().call();
  } catch (error) {
    return error;
  }
};

const getBNBBalanceForMax = async (address) => {
  try {
    const web3 = await callWeb3();
    let result = await web3.eth.getBalance(address);
    //result = (Number(result) / 10 ** 18).toFixed(5);
    return Number(result);
  } catch (error) {
    return error;
  }
};

const getBNBBalance = async (address) => {
  try {
    const web3 = await callWeb3();
    let result = await web3.eth.getBalance(address);
    result = (Number(result) / 10 ** 18).toFixed(5);
    return Number(result);
  } catch (error) {
    return error;
  }
};

const setWalletType = async (walletType) => {
  walletTypeObject = walletType;
};

const getTotalSupply = async (tokenAddress) => {
  try {
    const contract = await callTokenContract(tokenAddress);
    let result = await contract.methods.totalSupply().call();
    const decimals = await contract.methods.decimals().call();
    result = Number(result) / 10 ** Number(decimals);
    return result;
  } catch (error) {
    return error;
  }
};

const web3ErrorHandle = async (err) => {
  let message = "Transaction Reverted!";
  if (err.message.indexOf("Rejected") > -1) {
    message = "User denied the transaction!";
  } else if (err.message && err.message.indexOf("User denied") > -1) {
    message = "User denied the tra nsaction!";
  } else if (err.message && err.message.indexOf("INSUFFICIENT_B") > -1) {
    message = "Insufficient value of second token!";
  } else if (err.message && err.message.indexOf("INSUFFICIENT_A") > -1) {
    message = "Insufficient value of first token!";
  } else {
    console.log(err, err.message);
  }
  return message;
};

const getLiquidity100Value = async (tokenAddress, address) => {
  try {
    const contract = await callTokenContract(tokenAddress);

    return await contract.methods.balanceOf(address).call();
  } catch (error) {
    console.log("Error:", error);
    return error;
  }
};

//exporting functions
export const ContractServices = {
  isMetamaskInstalled,
  isBinanceChainInstalled,
  callWeb3,
  web3Object,
  callContract,
  calculateGasPrice,
  approveToken,
  getTokenBalance,
  getBNBBalanceForMax,
  getTokenBalanceFull,
  getDecimals,
  getTokenName,
  getTokenSymbol,
  getBNBBalance,
  setWalletType,
  allowanceToken,
  getTotalSupply,
  convertToDecimals,
  getTokenBalanceForMax,
  web3ErrorHandle,
  getDefaultAccount,
  callTokenContract,
  walletWindowListener,
  walletTypeObject,
  getLiquidity100Value,
  clearWeb3Object,
};
