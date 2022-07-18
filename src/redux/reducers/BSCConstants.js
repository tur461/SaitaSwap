import { actionTypes } from "../actions/BSCActions";

/** Empty State Initially  */
const initialState = { };

/** BSC MainNet TokenList & Contract Addresses  */
const BSC_MainNet_Contracts = {
  tokenList: [
    {
      // icon: ETH,
      name: "BNB-Mainnet",
      address: "BNB",
      isAdd: false,
      isDel: false,
      decimals: 18,
      symbol: "ETH",
    },
    {
      // icon: SAITA,
      name: "SAITAMA",
      address: "0x0eD81CAe766d5B1a4B3ed4DFbED036be13c6C09C",
      isAdd: false,
      isDel: false,
      decimals: 9,
      symbol: "SAITAMA..",
    },
    {
      // icon: LP,
      name: "LP",
      address: "0xdF334150FFe9Bc4989a7F3FD5db378d0eD60f0A0",
      isAdd: false,
      isDel: false,
      decimals: 18,
      symbol: "LP",
    },
    {
      // icon: SHRIYO,
      name: "Shiryo-Inu",
      address: "0x0758d7257c0B66C2770a6e94B6c554Db57F921C1",
      isAdd: false,
      isDel: false,
      decimals: 9,
      symbol: "Shiryo-Inu",
    },
    {
      // icon: IMPACTXP,
      name: "ImpactXP",
      address: "0xC3cCc28F41eF294F768F6F35b1F7095F86566b2E",
      isAdd: false,
      isDel: false,
      decimals: 9,
      symbol: "ImpactXP",
    },
    {
      // icon: Kishimoto,
      name: "Kishimoto",
      address: "0xc936cb37F35d3b5F5640Af2fe5AF48afe8e9af3c",
      isAdd: false,
      isDel: false,
      decimals: 9,
      symbol: "Kishimoto",
    },
    {
      // icon: MANDOX,
      name: "Mandox",
      address: "0x9b0f368da211a0dFfAEBfE53a42d6B4A204FAE75",
      isAdd: false,
      isDel: false,
      decimals: 9,
      symbol: "Mandox",
    },
    {
      // icon: shaman,
      name: "Shaman",
      address: "0xaC0DBd7a6f4D50B51aca4e8D363875922CBBE29C",
      isAdd: false,
      isDel: false,
      decimals: 18,
      symbol: "Shaman",
    },
   ],
   router: {
    address: "0xC206bCb31DF33A972b6F52A99C24B5D6b74afdf2",
    Block: 6615558,
    // abi: routerABI,
  },
  panCakeRouter: {
    address: "0xC206bCb31DF33A972b6F52A99C24B5D6b74afdf2",
    blockNumber: 6810080,
    // abi: routerABI,
  },
  factory: {
    address: "0xae6d1ee7B117BFAD762A14B4B80311cB8F5d7e35",
    blockNumber: 6430279,
    // abi: factoryABI,
  },
  pair: {
    address: "",
    blockNumber: 0,
    // abi: pairABI,
  },
  farm: {
    address: "0x642A34f580FBA0D9b82ae8caD9112aAf36B34c1A",
    blockNumber: 10889234,
    // abi: farmABI,
  },
  anchorNew: {
    address: "0x5ac5e6Af46Ef285B3536833E65D245c49b608d9b",
    blockNumber: 10350461,
    // abi: anchorABI,
  },
  referrals: {
    address: "0xe25e719d59574E5eA1F681e49da5207bc56916fB",
    blockNumber: 10004593,
    // abi: referralsABI,
  },
};

/** BSC TestNEt TokenList & Contract Addresses  */
const BSC_TestNet_Contracts = {
  tokenList: [
    {
      // icon: BNB,
      name: "BNB-Testnet",
      address: "BNB",
      isAdd: false,
      isDel: false,
      decimals: 18,
      symbol: "BNB",
    },
    {
      // icon: SAITA,
      name: "SAITAMA",
      address: "0x0eD81CAe766d5B1a4B3ed4DFbED036be13c6C09C",
      isAdd: false,
      isDel: false,
      decimals: 9,
      symbol: "SAITAMA..",
    },
    {
      // icon: LP,
      name: "LP",
      address: "0xdF334150FFe9Bc4989a7F3FD5db378d0eD60f0A0",
      isAdd: false,
      isDel: false,
      decimals: 18,
      symbol: "LP",
    },
    {
      // icon: SHRIYO,
      name: "Shiryo-Inu",
      address: "0x0758d7257c0B66C2770a6e94B6c554Db57F921C1",
      isAdd: false,
      isDel: false,
      decimals: 9,
      symbol: "Shiryo-Inu",
    },
    {
      // icon: IMPACTXP,
      name: "ImpactXP",
      address: "0xC3cCc28F41eF294F768F6F35b1F7095F86566b2E",
      isAdd: false,
      isDel: false,
      decimals: 9,
      symbol: "ImpactXP",
    },
    {
      // icon: Kishimoto,
      name: "Kishimoto",
      address: "0xc936cb37F35d3b5F5640Af2fe5AF48afe8e9af3c",
      isAdd: false,
      isDel: false,
      decimals: 9,
      symbol: "Kishimoto",
    },
    {
      // icon: MANDOX,
      name: "Mandox",
      address: "0x9b0f368da211a0dFfAEBfE53a42d6B4A204FAE75",
      isAdd: false,
      isDel: false,
      decimals: 9,
      symbol: "Mandox",
    },
    {
      // icon: shaman,
      name: "Shaman",
      address: "0xaC0DBd7a6f4D50B51aca4e8D363875922CBBE29C",
      isAdd: false,
      isDel: false,
      decimals: 18,
      symbol: "Shaman",
    },
   ],
   router: {
    address: "0xC206bCb31DF33A972b6F52A99C24B5D6b74afdf2",
    Block: 6615558,
    // abi: routerABI,
  },
  panCakeRouter: {
    address: "0xC206bCb31DF33A972b6F52A99C24B5D6b74afdf2",
    blockNumber: 6810080,
    // abi: routerABI,
  },
  factory: {
    address: "0xae6d1ee7B117BFAD762A14B4B80311cB8F5d7e35",
    blockNumber: 6430279,
    // abi: factoryABI,
  },
  pair: {
    address: "",
    blockNumber: 0,
    // abi: pairABI,
  },
  farm: {
    address: "0x642A34f580FBA0D9b82ae8caD9112aAf36B34c1A",
    blockNumber: 10889234,
    // abi: farmABI,
  },
  anchorNew: {
    address: "0x5ac5e6Af46Ef285B3536833E65D245c49b608d9b",
    blockNumber: 10350461,
    // abi: anchorABI,
  },
  referrals: {
    address: "0xe25e719d59574E5eA1F681e49da5207bc56916fB",
    blockNumber: 10004593,
    // abi: referralsABI,
  },
};

const constants = (state = initialState, action) => {
  switch (action.type) {

    case actionTypes.BSC_MAINNET_CONTRACTS:
      return BSC_MainNet_Contracts;

    case actionTypes.BSC_TESTNET_CONTRACTS:
      return BSC_TestNet_Contracts;

    default:
      return state;
  }
};

export default constants;