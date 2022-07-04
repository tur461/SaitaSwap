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
export const pancakeFactory = "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f";

// ******** BSC_TEST_NET LP's, WETH and USD **********
export const ANCHOR_BUSD_LP = "0xe59099067708C3030332CbEAE91e420D588E109C";
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

// ******** BSC_MAIN_NET Token List **********
export const TOKEN_LIST = [
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
    symbol: "SAITAMA",
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
  {
    icon: USDT,
    name: "wrapped ether token",
    address: "0x5ac5e6Af46Ef285B3536833E65D245c49b608d9b",
    isAdd: true,
    isDel: false,
    decimals: 18,
    symbol: "WETH",
  },
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
// ********* BSC_MAIN_NET Contract Address **********
export const MAIN_CONTRACT_LIST = {
  router: {
    address: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
    blockNumber: 6810080,
    abi: routerABI,
  },
  panCakeRouter: {
    address: "0x10ED43C718714eb63d5aA57B78B54704E256024E",
    blockNumber: 6810080,
    abi: routerABI,
  },
  factory: {
    address: "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f",
    blockNumber: 6809737,
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

// ******** BSC_TEST_NET Token List **********
// export const TOKEN_LIST = [
//   {
//     icon: BNB,
//     name: "BNB",
//     address: "BNB",
//     isAdd: false,
//     isDel: false,
//     decimals: 18,
//     symbol: "BNB",
//   },
//   {
//     icon: NIOB,
//     name: "NIOB",
//     address: "0x5C4EF57E46c1E7724FCe37cb3B7a4451b7457856",
//     isAdd: false,
//     isDel: false,
//     decimals: 18,
//     symbol: "NB",
//   },
//   {
//     icon: BUSD,
//     name: "BUSD",
//     address: "0x781F761139BB3B776DB8fD73DA5524E8eE458a97",
//     isAdd: false,
//     isDel: false,
//     decimals: 18,
//     symbol: "BUSD",
//   },
//   {
//     icon: ETH,
//     name: "ETH",
//     address: "0xe76833b8880B33adeC6d996B753E461A251bFd4e",
//     isAdd: false,
//     isDel: false,
//     decimals: 18,
//     symbol: "ETH",
//   },
//   {
//     icon: ADA,
//     name: "Cardano",
//     address: "0x8c033367885a452254b0FD4B8B4BBb0552D9Cd63",
//     isAdd: false,
//     isDel: false,
//     decimals: 18,
//     symbol: "ADA",
//   },
//   {
//     icon: defaultImg,
//     name: "Matic Token",
//     address: "0x589Ffc4669b1126364c472dd7E954C404F6649b0",
//     isAdd: false,
//     isDel: false,
//     decimals: 18,
//     symbol: "MATIC",
//   },
//   {
//     icon: defaultImg,
//     name: "MDex",
//     address: "0xc0ABFCD5a3090728939E74A036F9c82b4B261796",
//     isAdd: false,
//     isDel: false,
//     decimals: 18,
//     symbol: "MDX",
//   },
// ];

// ********* BSC_TestNet Contract Address **********
// export const MAIN_CONTRACT_LIST = {
//   router: {
//     address: "0x7489714061Fdf3B194D7151174817a3b2A1a918d",
//     blockNumber: 6810080,
//     abi: routerABI,
//   },
//   factory: {
//     address: "0x33c86EBefA8910Aa85Fa09AC09714Caee54a7AA6",
//     blockNumber: 6809737,
//     abi: factoryABI,
//   },
//   pair: {
//     address: "",
//     blockNumber: 0,
//     abi: pairABI,
//   },
//   farm: {
//     address: "0xD6813A8809aD40e6d7Bd1540D454b126F10CBcEA",
//     blockNumber: 10004492,
//     abi: farmABI,
//   },
//   anchorNew: {
//     address: "0xe121335A886FA620671D0d2a946139Fa5B265AB0",
//     blockNumber: 10350461,
//     abi: anchorABI,
//   },
//   referrals: {
//     address: "0xF28b3D49Fd5d0B3DF81B9d3E559092CAeF512f9A",
//     blockNumber: 10004593,
//     abi: referralsABI,
//   },
// };

// ******* Extra tokens just for icons *********
// {
//   icon: defaultImg,
//   name: "Dai Token",
//   address: "0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3",
//   isAdd: false,
//   isDel: false,
//   decimals: 18,
//   symbol: "DAI",
// },
// {
//   icon: BTC,
//   name: "BTCB Token",
//   address: "0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c",
//   isAdd: false,
//   isDel: false,
//   decimals: 18,
//   symbol: "BTCB",
// },
// {
//   icon: USDT,
//   name: "Tether USD",
//   address: "0x55d398326f99059fF775485246999027B3197955",
//   isAdd: false,
//   isDel: false,
//   decimals: 18,
//   symbol: "USDT",
// },
// {
//   icon: POLKADOT,
//   name: "Polkadot Token",
//   address: "0x7083609fCE4d1d8Dc0C979AAb8c869Ea2C873402",
//   isAdd: false,
//   isDel: false,
//   decimals: 18,
//   symbol: "DOT",
// },
// {
//   icon: TRON,
//   name: "TRON",
//   address: "0x85EAC5Ac2F758618dFa09bDbe0cf174e7d574D5B",
//   isAdd: false,
//   isDel: false,
//   decimals: 18,
//   symbol: "TRX",
// },
// {
//   icon: CAKE,
//   name: "PancakeSwap Token",
//   address: "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82",
//   isAdd: false,
//   isDel: false,
//   decimals: 18,
//   symbol: "Cake",
// },
// {
//   icon: BNB,
//   name: "Wrapped BNB",
//   address: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
//   isAdd: false,
//   isDel: false,
//   decimals: 18,
//   symbol: "WBNB",
// }
