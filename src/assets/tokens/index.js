import ANCHOR from "../images/token_icons/ANCHOR-Token.svg";
import BTC from "../images/token_icons/BTCB-Token.svg";
import BNB from "../images/token_icons/WBNB-Token-Icon.svg";
import ETH from "../images/token_icons/ETH-Token.svg";
import BUSD from "../images/token_icons/BUSD-Token.svg";
import ADA from "../images/token_icons/ADA.svg";
import defaultImg from "../images/token_icons/default.svg";
import USDT from "../images/token_icons/USDT.svg";
import POLKADOT from "../images/token_icons/POLKADOT.svg";
import TRON from "../images/token_icons/TRON.svg";
import CAKE from "../images/token_icons/CAKE.svg";
import NIOB from "../images/token_icons/NIOB.svg";
import SHRIYO from "../images/token_icons/saitamaIcons/shriyo-Inu.png";
import IMPACTXP from "../images/token_icons/saitamaIcons/impactXp.png";
import Kishimoto from "../images/token_icons/saitamaIcons/kishimoto.png";
import MANDOX from "../images/token_icons/saitamaIcons/MandoX.png";
import SAITA from "../images/saitaswap.png";
import SHAMAN from "../images/schdule.png";
import LP from "../images/Pool-Header-Logo.png";
import ETH1 from "../images/token_icons/Ethreallogo.png";
import routerABI from "../ABI/router.ABI.json";
import factoryABI from "../ABI/factory.ABI.json";
import pairABI from "../ABI/pair.ABI.json";
import farmABI from "../ABI/farmABI.json";
import anchorABI from "../ABI/anchor.ABI.json";
import referralsABI from "../ABI/referrals.ABI.json";
import shaman from "../images/token_icons/saitamaIcons/shaman.png";

export const NIOB1 = "0x035781918b7221293B6938c9c0037cDf1dB183dE";
export const NIOB2 = "0xADdcE6c9Dd30a6b252eAB252a11aBe518381132C";
export const BURN_ADDRESS = "0x000000000000000000000000000000000000dEaD";
export const DEFLATIONNARY_TOKENS = [
  "0x0eD81CAe766d5B1a4B3ed4DFbED036be13c6C09C",
  "0x0758d7257c0B66C2770a6e94B6c554Db57F921C1",
  "0xC3cCc28F41eF294F768F6F35b1F7095F86566b2E",
  "0xc936cb37F35d3b5F5640Af2fe5AF48afe8e9af3c",
  "0x9b0f368da211a0dFfAEBfE53a42d6B4A204FAE75",
  "0xaC0DBd7a6f4D50B51aca4e8D363875922CBBE29C",
];
export const LIQUIDITY_PROVIDER_FEE = 0.2;

// ******** BSC_MAIN_NET LP's, WETH and USD **********
// export const ANCHOR_BUSD_LP = "0xca8cb77efac26f901042196f766bac4ee5077df0";
// export const BNB_BUSD_LP = "0xe2466652a46e47fa278be0a2ad8dce7c8445be41";
// export const WETH = "0xc778417E063141139Fce010982780140Aa0cD5Ab";
// export const USD = "0xe9e7cea3dedca5984780bafc599bd69add087d56";
export const pancakeFactory = "0xae6d1ee7B117BFAD762A14B4B80311cB8F5d7e35";

// ******** BSC_TEST_NET LP's, WETH and USD **********
export const ANCHOR_BUSD_LP = "0xD50Ec4dE8d3f3A63F886860B261E9e560CF02053";
export const BNB_BUSD_LP = "0xE5799D95Ac7ECCbAf672777eDb516D29c030f5a9";
export const WETH = "0xc778417E063141139Fce010982780140Aa0cD5Ab";
export const USD = "0x2Dd65fFe5F1B2D8a745b7194cCa59B451C5986D2";
export const Saitama = "0x0eD81CAe766d5B1a4B3ed4DFbED036be13c6C09C";

export const AUDIT = "https://docs.niob.finance/audits";
export const LOTTERY = "https://docs.niob.finance/products/#niob-lottery";
export const NIOB_SHARING =
  "https://docs.niob.finance/products/#niob-sharing-season";
export const PREDICTION_TRAINING =
  "https://docs.niob.finance/products/#prediction-trading";
export const INSURANCE_FUND =
  "https://docs.niob.finance/products/#niob-insurance-fund";
export const TRADING_FEE_CASHBACK =
  "https://docs.niob.finance/products/#trading-fee-cashback";
export const DOCS = "https://docs.niob.finance";


// ******************************** TOKEN LIST **************************************

/** BSC MAIN NET Token List  */
const BSC_MAINNET_TOKEN_LIST = [
  // {
  //   icon: USDT,
  //   name: "ether token",
  //   address: "0xe9e7cea3dedca5984780bafc599bd69add087d56",
  //   isAdd: true,
  //   isDel: false,
  //   decimals: 18,
  //   symbol: "ETH",
  // },
  // {
  //   icon: USDT,
  //   name: "saitama token",
  //   address: "0x4aac18De824eC1b553dbf342829834E4FF3F7a9F",
  //   isAdd: true,
  //   isDel: false,
  //   decimals: 18,
  //   symbol: "SAITAMA",
  // },
  {
    icon: ETH,
    name: "BSC-Mainnet",
    address: "BNB",
    isAdd: false,
    isDel: false,
    decimals: 18,
    symbol: "BSC-Mainnet",
  },
  {
    icon: SAITA,
    name: "SAITAMA",
    address: "0x0eD81CAe766d5B1a4B3ed4DFbED036be13c6C09C",
    isAdd: false,
    isDel: false,
    decimals: 9,
    symbol: "SAITAMA..",
  },
  {
    icon: LP,
    name: "LP",
    address: "0xdF334150FFe9Bc4989a7F3FD5db378d0eD60f0A0",
    isAdd: false,
    isDel: false,
    decimals: 18,
    symbol: "LP",
  },
  {
    icon: SHRIYO,
    name: "Shiryo-Inu",
    address: "0x0758d7257c0B66C2770a6e94B6c554Db57F921C1",
    isAdd: false,
    isDel: false,
    decimals: 9,
    symbol: "Shiryo-Inu",
  },
  {
    icon: IMPACTXP,
    name: "ImpactXP",
    address: "0xC3cCc28F41eF294F768F6F35b1F7095F86566b2E",
    isAdd: false,
    isDel: false,
    decimals: 9,
    symbol: "ImpactXP",
  },
  {
    icon: Kishimoto,
    name: "Kishimoto",
    address: "0xc936cb37F35d3b5F5640Af2fe5AF48afe8e9af3c",
    isAdd: false,
    isDel: false,
    decimals: 9,
    symbol: "Kishimoto",
  },
  {
    icon: MANDOX,
    name: "Mandox",
    address: "0x9b0f368da211a0dFfAEBfE53a42d6B4A204FAE75",
    isAdd: false,
    isDel: false,
    decimals: 9,
    symbol: "Mandox",
  },
  {
    icon: shaman,
    name: "Shaman",
    address: "0xaC0DBd7a6f4D50B51aca4e8D363875922CBBE29C",
    isAdd: false,
    isDel: false,
    decimals: 18,
    symbol: "Shaman",
  },
  // {
  //   icon: USDT,
  //   name: "wrapped ether token",
  //   address: "0x5ac5e6Af46Ef285B3536833E65D245c49b608d9b",
  //   isAdd: true,
  //   isDel: false,
  //   decimals: 18,
  //   symbol: "WETH",
  // },
  // {
  //   icon: BUSD,
  //   name: "BUSD",
  //   address: "0xe9e7cea3dedca5984780bafc599bd69add087d56",
  //   isAdd: false,
  //   isDel: false,
  //   decimals: 18,
  //   symbol: "BUSD",
  // },
  // {
  //   icon: ANCHOR,
  //   name: "ANCHOR",
  //   address: "0x4aac18De824eC1b553dbf342829834E4FF3F7a9F",
  //   isAdd: false,
  //   isDel: false,
  //   decimals: 18,
  //   symbol: "ANCHOR",
  // },
  // {
  //   icon: BNB,
  //   name: "WBNB",
  //   address: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
  //   isAdd: false,
  //   isDel: false,
  //   decimals: 18,
  //   symbol: "WBNB",
  // },
  // {
  //   icon: BTC,
  //   name: "BTCB",
  //   address: "0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c",
  //   isAdd: false,
  //   isDel: false,
  //   decimals: 18,
  //   symbol: "BTCB",
  // },
  // {
  //   icon: ETH,
  //   name: "B-ETH",
  //   address: "0x2170ed0880ac9a755fd29b2688956bd959f933f8",
  //   isAdd: false,
  //   isDel: false,
  //   decimals: 18,
  //   symbol: "ETH",
  // },
  // {
  //   icon: CAKE,
  //   name: "CAKE",
  //   address: "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82",
  //   isAdd: false,
  //   isDel: false,
  //   decimals: 18,
  //   symbol: "CAKE",
  // },
];

/** BSC TEST NET Token List */
const BSC_TESTNET_TOKEN_LIST = [
  {
    icon: BNB,
    name: "BNB",
    address: "BNB",
    isAdd: false,
    isDel: false,
    decimals: 18,
    symbol: "BNB",
  },
  {
    icon: SAITA,
    name: "SAITAMA",
    address: "0xC206bCb31DF33A972b6F52A99C24B5D6b74afdf2",
    isAdd: false,
    isDel: false,
    decimals: 9,
    symbol: "SAITAMA..",
  },
  {
    icon: LP,
    name: "LP",
    address: "0xdF334150FFe9Bc4989a7F3FD5db378d0eD60f0A0",
    isAdd: false,
    isDel: false,
    decimals: 18,
    symbol: "LP",
  },
  {
    icon: SHRIYO,
    name: "Shiryo-Inu",
    address: "0x0758d7257c0B66C2770a6e94B6c554Db57F921C1",
    isAdd: false,
    isDel: false,
    decimals: 9,
    symbol: "Shiryo-Inu",
  },
  {
    icon: IMPACTXP,
    name: "ImpactXP",
    address: "0xC3cCc28F41eF294F768F6F35b1F7095F86566b2E",
    isAdd: false,
    isDel: false,
    decimals: 9,
    symbol: "ImpactXP",
  },
  {
    icon: Kishimoto,
    name: "Kishimoto",
    address: "0xc936cb37F35d3b5F5640Af2fe5AF48afe8e9af3c",
    isAdd: false,
    isDel: false,
    decimals: 9,
    symbol: "Kishimoto",
  },
  {
    icon: MANDOX,
    name: "Mandox",
    address: "0x9b0f368da211a0dFfAEBfE53a42d6B4A204FAE75",
    isAdd: false,
    isDel: false,
    decimals: 9,
    symbol: "Mandox",
  },
  {
    icon: shaman,
    name: "Shaman",
    address: "0xaC0DBd7a6f4D50B51aca4e8D363875922CBBE29C",
    isAdd: false,
    isDel: false,
    decimals: 18,
    symbol: "Shaman",
  },
  // {
  //   icon: USDT,
  //   name: "wrapped ether token",
  //   address: "0x5ac5e6Af46Ef285B3536833E65D245c49b608d9b",
  //   isAdd: true,
  //   isDel: false,
  //   decimals: 18,
  //   symbol: "WETH",
  // },
  // {
  //   icon: BUSD,
  //   name: "BUSD",
  //   address: "0xe9e7cea3dedca5984780bafc599bd69add087d56",
  //   isAdd: false,
  //   isDel: false,
  //   decimals: 18,
  //   symbol: "BUSD",
  // },
  // {
  //   icon: ANCHOR,
  //   name: "ANCHOR",
  //   address: "0x4aac18De824eC1b553dbf342829834E4FF3F7a9F",
  //   isAdd: false,
  //   isDel: false,
  //   decimals: 18,
  //   symbol: "ANCHOR",
  // },
  // {
  //   icon: BNB,
  //   name: "WBNB",
  //   address: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
  //   isAdd: false,
  //   isDel: false,
  //   decimals: 18,
  //   symbol: "WBNB",
  // },
  // {
  //   icon: BTC,
  //   name: "BTCB",
  //   address: "0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c",
  //   isAdd: false,
  //   isDel: false,
  //   decimals: 18,
  //   symbol: "BTCB",
  // },
  // {
  //   icon: ETH,
  //   name: "B-ETH",
  //   address: "0x2170ed0880ac9a755fd29b2688956bd959f933f8",
  //   isAdd: false,
  //   isDel: false,
  //   decimals: 18,
  //   symbol: "ETH",
  // },
  // {
  //   icon: CAKE,
  //   name: "CAKE",
  //   address: "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82",
  //   isAdd: false,
  //   isDel: false,
  //   decimals: 18,
  //   symbol: "CAKE",
  // },
];

/** ETHEREUM MAIN NET Token List */
const ETHEREUM_MAINNET_TOKEN_LIST = [
  // {
  //   icon: USDT,
  //   name: "ether token",
  //   address: "0xe9e7cea3dedca5984780bafc599bd69add087d56",
  //   isAdd: true,
  //   isDel: false,
  //   decimals: 18,
  //   symbol: "ETH",
  // },
  // {
  //   icon: USDT,
  //   name: "saitama token",
  //   address: "0x4aac18De824eC1b553dbf342829834E4FF3F7a9F",
  //   isAdd: true,
  //   isDel: false,
  //   decimals: 18,
  //   symbol: "SAITAMA",
  // },
  {
    icon: ETH,
    name: "ETH",
    address: "BNB",
    isAdd: false,
    isDel: false,
    decimals: 18,
    symbol: "ETH",
  },
  {
    icon: SAITA,
    name: "SAITAMA",
    address: "0x0eD81CAe766d5B1a4B3ed4DFbED036be13c6C09C",
    isAdd: false,
    isDel: false,
    decimals: 9,
    symbol: "SAITAMA..",
  },
  {
    icon: LP,
    name: "LP",
    address: "0xdF334150FFe9Bc4989a7F3FD5db378d0eD60f0A0",
    isAdd: false,
    isDel: false,
    decimals: 18,
    symbol: "LP",
  },
  {
    icon: SHRIYO,
    name: "Shiryo-Inu",
    address: "0x0758d7257c0B66C2770a6e94B6c554Db57F921C1",
    isAdd: false,
    isDel: false,
    decimals: 9,
    symbol: "Shiryo-Inu",
  },
  {
    icon: IMPACTXP,
    name: "ImpactXP",
    address: "0xC3cCc28F41eF294F768F6F35b1F7095F86566b2E",
    isAdd: false,
    isDel: false,
    decimals: 9,
    symbol: "ImpactXP",
  },
  {
    icon: Kishimoto,
    name: "Kishimoto",
    address: "0xc936cb37F35d3b5F5640Af2fe5AF48afe8e9af3c",
    isAdd: false,
    isDel: false,
    decimals: 9,
    symbol: "Kishimoto",
  },
  {
    icon: MANDOX,
    name: "Mandox",
    address: "0x9b0f368da211a0dFfAEBfE53a42d6B4A204FAE75",
    isAdd: false,
    isDel: false,
    decimals: 9,
    symbol: "Mandox",
  },
  {
    icon: shaman,
    name: "Shaman",
    address: "0xaC0DBd7a6f4D50B51aca4e8D363875922CBBE29C",
    isAdd: false,
    isDel: false,
    decimals: 18,
    symbol: "Shaman",
  },
  // {
  //   icon: USDT,
  //   name: "wrapped ether token",
  //   address: "0x5ac5e6Af46Ef285B3536833E65D245c49b608d9b",
  //   isAdd: true,
  //   isDel: false,
  //   decimals: 18,
  //   symbol: "WETH",
  // },
  // {
  //   icon: BUSD,
  //   name: "BUSD",
  //   address: "0xe9e7cea3dedca5984780bafc599bd69add087d56",
  //   isAdd: false,
  //   isDel: false,
  //   decimals: 18,
  //   symbol: "BUSD",
  // },
  // {
  //   icon: ANCHOR,
  //   name: "ANCHOR",
  //   address: "0x4aac18De824eC1b553dbf342829834E4FF3F7a9F",
  //   isAdd: false,
  //   isDel: false,
  //   decimals: 18,
  //   symbol: "ANCHOR",
  // },
  // {
  //   icon: BNB,
  //   name: "WBNB",
  //   address: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
  //   isAdd: false,
  //   isDel: false,
  //   decimals: 18,
  //   symbol: "WBNB",
  // },
  // {
  //   icon: BTC,
  //   name: "BTCB",
  //   address: "0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c",
  //   isAdd: false,
  //   isDel: false,
  //   decimals: 18,
  //   symbol: "BTCB",
  // },
  // {
  //   icon: ETH,
  //   name: "B-ETH",
  //   address: "0x2170ed0880ac9a755fd29b2688956bd959f933f8",
  //   isAdd: false,
  //   isDel: false,
  //   decimals: 18,
  //   symbol: "ETH",
  // },
  // {
  //   icon: CAKE,
  //   name: "CAKE",
  //   address: "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82",
  //   isAdd: false,
  //   isDel: false,
  //   decimals: 18,
  //   symbol: "CAKE",
  // },
];

/** ETHEREUM TEST NET Token List */
const ETHEREUM_TESTNET_TOKEN_LIST = [
  // {
  //   icon: USDT,
  //   name: "ether token",
  //   address: "0xe9e7cea3dedca5984780bafc599bd69add087d56",
  //   isAdd: true,
  //   isDel: false,
  //   decimals: 18,
  //   symbol: "ETH",
  // },
  // {
  //   icon: USDT,
  //   name: "saitama token",
  //   address: "0x4aac18De824eC1b553dbf342829834E4FF3F7a9F",
  //   isAdd: true,
  //   isDel: false,
  //   decimals: 18,
  //   symbol: "SAITAMA",
  // },
  {
    icon: ETH,
    name: "ETH",
    address: "BNB",
    isAdd: false,
    isDel: false,
    decimals: 18,
    symbol: "ETH",
  },
  {
    icon: SAITA,
    name: "SAITAMA",
    address: "0x0eD81CAe766d5B1a4B3ed4DFbED036be13c6C09C",
    isAdd: false,
    isDel: false,
    decimals: 9,
    symbol: "SAITAMA..",
  },
  {
    icon: LP,
    name: "LP",
    address: "0xdF334150FFe9Bc4989a7F3FD5db378d0eD60f0A0",
    isAdd: false,
    isDel: false,
    decimals: 18,
    symbol: "LP",
  },
  {
    icon: SHRIYO,
    name: "Shiryo-Inu",
    address: "0x0758d7257c0B66C2770a6e94B6c554Db57F921C1",
    isAdd: false,
    isDel: false,
    decimals: 9,
    symbol: "Shiryo-Inu",
  },
  {
    icon: IMPACTXP,
    name: "ImpactXP",
    address: "0xC3cCc28F41eF294F768F6F35b1F7095F86566b2E",
    isAdd: false,
    isDel: false,
    decimals: 9,
    symbol: "ImpactXP",
  },
  {
    icon: Kishimoto,
    name: "Kishimoto",
    address: "0xc936cb37F35d3b5F5640Af2fe5AF48afe8e9af3c",
    isAdd: false,
    isDel: false,
    decimals: 9,
    symbol: "Kishimoto",
  },
  {
    icon: MANDOX,
    name: "Mandox",
    address: "0x9b0f368da211a0dFfAEBfE53a42d6B4A204FAE75",
    isAdd: false,
    isDel: false,
    decimals: 9,
    symbol: "Mandox",
  },
  {
    icon: shaman,
    name: "Shaman",
    address: "0xaC0DBd7a6f4D50B51aca4e8D363875922CBBE29C",
    isAdd: false,
    isDel: false,
    decimals: 18,
    symbol: "Shaman",
  },
  // {
  //   icon: USDT,
  //   name: "wrapped ether token",
  //   address: "0x5ac5e6Af46Ef285B3536833E65D245c49b608d9b",
  //   isAdd: true,
  //   isDel: false,
  //   decimals: 18,
  //   symbol: "WETH",
  // },
  // {
  //   icon: BUSD,
  //   name: "BUSD",
  //   address: "0xe9e7cea3dedca5984780bafc599bd69add087d56",
  //   isAdd: false,
  //   isDel: false,
  //   decimals: 18,
  //   symbol: "BUSD",
  // },
  // {
  //   icon: ANCHOR,
  //   name: "ANCHOR",
  //   address: "0x4aac18De824eC1b553dbf342829834E4FF3F7a9F",
  //   isAdd: false,
  //   isDel: false,
  //   decimals: 18,
  //   symbol: "ANCHOR",
  // },
  // {
  //   icon: BNB,
  //   name: "WBNB",
  //   address: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
  //   isAdd: false,
  //   isDel: false,
  //   decimals: 18,
  //   symbol: "WBNB",
  // },
  // {
  //   icon: BTC,
  //   name: "BTCB",
  //   address: "0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c",
  //   isAdd: false,
  //   isDel: false,
  //   decimals: 18,
  //   symbol: "BTCB",
  // },
  // {
  //   icon: ETH,
  //   name: "B-ETH",
  //   address: "0x2170ed0880ac9a755fd29b2688956bd959f933f8",
  //   isAdd: false,
  //   isDel: false,
  //   decimals: 18,
  //   symbol: "ETH",
  // },
  // {
  //   icon: CAKE,
  //   name: "CAKE",
  //   address: "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82",
  //   isAdd: false,
  //   isDel: false,
  //   decimals: 18,
  //   symbol: "CAKE",
  // },
];


// ******************************** CONTRACTS LIST **************************************

/** BSC MAIN-NET CONTRACTS LIST*/
const BSC_MAINNET_CONTRACT_LIST = {
  router: {
    address: "",
    Block: 6615558,
    abi: routerABI,
  },
  panCakeRouter: {
    address: "",
    blockNumber: 6810080,
    abi: routerABI,
  },
  factory: {
    address: "",
    blockNumber: 6430279,
    abi: factoryABI,
  },
  pair: {
    address: "",
    blockNumber: 0,
    abi: pairABI,
  },
  farm: {
    address: "",
    blockNumber: 10889234,
    abi: farmABI,
  },
  anchorNew: {
    address: "",
    blockNumber: 10350461,
    abi: anchorABI,
  },
  referrals: {
    address: "",
    blockNumber: 10004593,
    abi: referralsABI,
  },
};

/** BSC TEST-NET CONTRACTS */
const BSC_TESTNET_CONTRACT_LIST = {
  router: {
    address: "0x6B3cc5c352647B6a9fdEBc0BDE187ca457d0c25c",
    Block: 6615558,
    abi: routerABI,
  },
  panCakeRouter: {
    address: "0xC206bCb31DF33A972b6F52A99C24B5D6b74afdf2",
    blockNumber: 6810080,
    abi: routerABI,
  },
  factory: {
    address: "0x6E201B30835033855125bdCfc06Bf5efFD4b75E8",
    blockNumber: 6430279,
    abi: factoryABI,
  },
  pair: {
    address: "",
    blockNumber: 0,
    abi: pairABI,
  },
  farm: {
    address: "0xf539187098368B02915D0d8aB538a30D7Bc66147",
    blockNumber: 10889234,
    abi: farmABI,
  },
  anchorNew: {
    address: "0xC206bCb31DF33A972b6F52A99C24B5D6b74afdf2",
    blockNumber: 10350461,
    abi: anchorABI,
  },
  referrals: {
    address: "",
    blockNumber: 10004593,
    abi: referralsABI,
  },
};

/** ETHEREUM-MAIN NET CONTRACTS */
const ETHEREUM_MAINNET_CONTRACT_LIST = {
  router: {
    address: "0xC206bCb31DF33A972b6F52A99C24B5D6b74afdf2",
    Block: 6615558,
    abi: routerABI,
  },
  panCakeRouter: {
    address: "0xC206bCb31DF33A972b6F52A99C24B5D6b74afdf2",
    blockNumber: 6810080,
    abi: routerABI,
  },
  factory: {
    address: "0xae6d1ee7B117BFAD762A14B4B80311cB8F5d7e35",
    blockNumber: 6430279,
    abi: factoryABI,
  },
  pair: {
    address: "",
    blockNumber: 0,
    abi: pairABI,
  },
  farm: {
    address: "0x642A34f580FBA0D9b82ae8caD9112aAf36B34c1A",
    blockNumber: 10889234,
    abi: farmABI,
  },
  anchorNew: {
    address: "0x5ac5e6Af46Ef285B3536833E65D245c49b608d9b",
    blockNumber: 10350461,
    abi: anchorABI,
  },
  referrals: {
    address: "0xe25e719d59574E5eA1F681e49da5207bc56916fB",
    blockNumber: 10004593,
    abi: referralsABI,
  },
};

/** ETHEREUM-TEST NET CONTRACTS */
const ETHEREUM_TESTNET_CONTRACT_LIST = {
  router: {
    address: "0xC206bCb31DF33A972b6F52A99C24B5D6b74afdf2",
    Block: 6615558,
    abi: routerABI,
  },
  panCakeRouter: {
    address: "0xC206bCb31DF33A972b6F52A99C24B5D6b74afdf2",
    blockNumber: 6810080,
    abi: routerABI,
  },
  factory: {
    address: "0xae6d1ee7B117BFAD762A14B4B80311cB8F5d7e35",
    blockNumber: 6430279,
    abi: factoryABI,
  },
  pair: {
    address: "",
    blockNumber: 0,
    abi: pairABI,
  },
  farm: {
    address: "0x642A34f580FBA0D9b82ae8caD9112aAf36B34c1A",
    blockNumber: 10889234,
    abi: farmABI,
  },
  anchorNew: {
    address: "0x5ac5e6Af46Ef285B3536833E65D245c49b608d9b",
    blockNumber: 10350461,
    abi: anchorABI,
  },
  referrals: {
    address: "0xe25e719d59574E5eA1F681e49da5207bc56916fB",
    blockNumber: 10004593,
    abi: referralsABI,
  },
};

const currentNetwork = localStorage.getItem("CURRENT NETWORK");

/** Default Token List Set this accoriding to default network */
let TOKEN_LIST = [
  // {
  //   icon: USDT,
  //   name: "ether token",
  //   address: "0xe9e7cea3dedca5984780bafc599bd69add087d56",
  //   isAdd: true,
  //   isDel: false,
  //   decimals: 18,
  //   symbol: "ETH",
  // },
  // {
  //   icon: USDT,
  //   name: "saitama token",
  //   address: "0x4aac18De824eC1b553dbf342829834E4FF3F7a9F",
  //   isAdd: true,
  //   isDel: false,
  //   decimals: 18,
  //   symbol: "SAITAMA",
  // },
  {
    icon: ETH,
    name: "ETH",
    address: "BNB",
    isAdd: false,
    isDel: false,
    decimals: 18,
    symbol: "ETH",
  },
  {
    icon: SAITA,
    name: "SAITAMA",
    address: "0x0eD81CAe766d5B1a4B3ed4DFbED036be13c6C09C",
    isAdd: false,
    isDel: false,
    decimals: 9,
    symbol: "SAITAMA..",
  },
  {
    icon: LP,
    name: "LP",
    address: "0xdF334150FFe9Bc4989a7F3FD5db378d0eD60f0A0",
    isAdd: false,
    isDel: false,
    decimals: 18,
    symbol: "LP",
  },
  {
    icon: SHRIYO,
    name: "Shiryo-Inu",
    address: "0x0758d7257c0B66C2770a6e94B6c554Db57F921C1",
    isAdd: false,
    isDel: false,
    decimals: 9,
    symbol: "Shiryo-Inu",
  },
  {
    icon: IMPACTXP,
    name: "ImpactXP",
    address: "0xC3cCc28F41eF294F768F6F35b1F7095F86566b2E",
    isAdd: false,
    isDel: false,
    decimals: 9,
    symbol: "ImpactXP",
  },
  {
    icon: Kishimoto,
    name: "Kishimoto",
    address: "0xc936cb37F35d3b5F5640Af2fe5AF48afe8e9af3c",
    isAdd: false,
    isDel: false,
    decimals: 9,
    symbol: "Kishimoto",
  },
  {
    icon: MANDOX,
    name: "Mandox",
    address: "0x9b0f368da211a0dFfAEBfE53a42d6B4A204FAE75",
    isAdd: false,
    isDel: false,
    decimals: 9,
    symbol: "Mandox",
  },
  {
    icon: shaman,
    name: "Shaman",
    address: "0xaC0DBd7a6f4D50B51aca4e8D363875922CBBE29C",
    isAdd: false,
    isDel: false,
    decimals: 18,
    symbol: "Shaman",
  },
  // {
  //   icon: USDT,
  //   name: "wrapped ether token",
  //   address: "0x5ac5e6Af46Ef285B3536833E65D245c49b608d9b",
  //   isAdd: true,
  //   isDel: false,
  //   decimals: 18,
  //   symbol: "WETH",
  // },
  // {
  //   icon: BUSD,
  //   name: "BUSD",
  //   address: "0xe9e7cea3dedca5984780bafc599bd69add087d56",
  //   isAdd: false,
  //   isDel: false,
  //   decimals: 18,
  //   symbol: "BUSD",
  // },
  // {
  //   icon: ANCHOR,
  //   name: "ANCHOR",
  //   address: "0x4aac18De824eC1b553dbf342829834E4FF3F7a9F",
  //   isAdd: false,
  //   isDel: false,
  //   decimals: 18,
  //   symbol: "ANCHOR",
  // },
  // {
  //   icon: BNB,
  //   name: "WBNB",
  //   address: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
  //   isAdd: false,
  //   isDel: false,
  //   decimals: 18,
  //   symbol: "WBNB",
  // },
  // {
  //   icon: BTC,
  //   name: "BTCB",
  //   address: "0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c",
  //   isAdd: false,
  //   isDel: false,
  //   decimals: 18,
  //   symbol: "BTCB",
  // },
  // {
  //   icon: ETH,
  //   name: "B-ETH",
  //   address: "0x2170ed0880ac9a755fd29b2688956bd959f933f8",
  //   isAdd: false,
  //   isDel: false,
  //   decimals: 18,
  //   symbol: "ETH",
  // },
  // {
  //   icon: CAKE,
  //   name: "CAKE",
  //   address: "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82",
  //   isAdd: false,
  //   isDel: false,
  //   decimals: 18,
  //   symbol: "CAKE",
  // },
];

let MAIN_CONTRACT_LIST = [];

if (currentNetwork === "BSC") {
  TOKEN_LIST = BSC_MAINNET_TOKEN_LIST
  MAIN_CONTRACT_LIST = BSC_MAINNET_CONTRACT_LIST
}
if (currentNetwork === "BSC TESTNET") {
  TOKEN_LIST = BSC_TESTNET_TOKEN_LIST
  MAIN_CONTRACT_LIST = BSC_TESTNET_CONTRACT_LIST
}
if (currentNetwork === "ETHEREUM") {
  TOKEN_LIST = ETHEREUM_MAINNET_TOKEN_LIST
  MAIN_CONTRACT_LIST = ETHEREUM_MAINNET_CONTRACT_LIST
}
if (currentNetwork === "ETHEREUM TESTNET") {
  TOKEN_LIST = ETHEREUM_TESTNET_TOKEN_LIST
  MAIN_CONTRACT_LIST = ETHEREUM_TESTNET_CONTRACT_LIST
}
  console.log('1111', TOKEN_LIST);
  console.log('2222', MAIN_CONTRACT_LIST);
export { TOKEN_LIST }
export { MAIN_CONTRACT_LIST }
 





// ==============================

// WETH: {
//   name: 'wrapped ether token',
//   dec: 18,
//   sym: 'WETH',
//   icon: Eth,
//   bal: '',
//   isAdded: !0,
//   isDeleted: !1,
//   addr: '0xc778417E063141139Fce010982780140Aa0cD5Ab',
// },
// TUR: {
//   name: 'tur token',
//   dec: 18,
//   sym: 'TUR',
//   icon: Gen,
//   bal: '',
//   isAdded: !0,
//   isDeleted: !1,
//   addr: '0xEe8F3Df788B0357d35D66F9023626f99f29a8351',
// },
// STEEP: {
//   name: 'steep labs token',
//   dec: 18,
//   sym: 'STEEP',
//   icon: Gen,
//   bal: '',
//   isAdded: !0,
//   isDeleted: !1,
//   addr: '0x8605c0c5E361dd897A5526558C48E7ff0D51353c',
// },
// SAITAMA: {
//   name: 'saitama token',
//   dec: 18,
//   sym: 'SAITAMA',
//   icon: Saitama,
//   bal: '',
//   isAdded: !0,
//   isDeleted: !1,
//   addr: '0x352E956eB0247792842ABD234d3f7425BBf544c2',
// }
// }