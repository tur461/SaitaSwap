import React, { useState } from "react";
import { useEffect } from "react";
import {
  Container,
  Col,
  Row,
  Button,
  Form,
  FormControl,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Reflink from "../../assets/images/reflink-icon.svg";
import Twitter from "../../assets/images/twitter-icon.svg";
import Telegram from "../../assets/images/telegram-icon.svg";
import "./Staking.scss";
import { ContractServices } from "../../services/ContractServices";
import ABISTAKING from "../../assets/ABI/SaitaABI.json";
import TOKENABI from "../../assets/ABI/abi.saitama.json";
const Staking = () => {
  const contractAddress = "0xd9bcc6474499B397707D3379595f2d27f47B3629";
  const tokenAddress = "0x0eD81CAe766d5B1a4B3ed4DFbED036be13c6C09C";
  const MAX_AMT = "0xffffffffffffffffffffffffffffffffffffffff";
  const [inputAmount, setInputAmount] = useState();
  const [days, setDays] = useState(1);
  const [reward, setReward] = useState(0);
  const [tokenBalance, setTokenBalance] = useState();
  const [finaldays, setfinaldays] = useState();
  const [transactionNo, setTransNo] = useState({});
  const [dataArray, setDataArray] = useState([]);
  let daataarray = [];
  // const [dataObj, setDataObj] = useState({
  //   amount: "",
  //   lockInUntil: "",
  //   isUnstaked: "",
  //   stakeInTime: "",
  // })

  let totalSeconds = 86400;
  let finalRewards = inputAmount && reward ? (inputAmount * reward) / 100 : 0;
  useEffect(async () => {
    let contract = await ContractServices.callContract(
      contractAddress,
      ABISTAKING
    );
    console.log("real contract", contract.methods);
    let rewardPercent = await contract.methods
      .rewardPercent(days * totalSeconds)
      .call();
    setReward(rewardPercent);
    console.log("reward", rewardPercent);
    console.log("useEffect days", days);
    let userAddress = await ContractServices.isMetamaskInstalled();
    const TokenBalance = await ContractServices.getTokenBalanceFull(
      tokenAddress,
      userAddress
    );
    console.log("tokenbalace", TokenBalance);
    setTokenBalance(TokenBalance);
  }, [days]);
  const destructure = async (array) => {
    daataarray.push({
      amount: array[0],
      lockInUntil: array[1],
      lockInPeriod: array[2],
      stakeInTime: array[3],
    });
    console.log("ydaataarraye hai dataObj", array, daataarray);
  };
  // const hello = async () => {
  //   let contract = await Contractservices.callContract(
  //     contractAddress,
  //     ABISTAKING
  //   );
  //   console.log("real contract", contract.methods);
  //   let reward = await contract.methods.rewardPercent(totalSeconds).call();
  //   console.log("reward", reward);
  //   setReward(reward);
  // };
  console.log("ye hai main array", dataArray);
  const letsCallContract = async () => {
    try {
      let userAddress = await ContractServices.isMetamaskInstalled();
      // let gasPrice = await Contractservices.calculateGasPrice();
      let tokenInstance = await ContractServices.callContract(
        tokenAddress,
        TOKENABI
      );
      console.log("tokenInstance", tokenInstance);
      let estimateGas = await tokenInstance.methods
        .approve(contractAddress, MAX_AMT)
        .estimateGas({ from: userAddress });
      let approveToken = await tokenInstance.methods
        .allowance(userAddress, contractAddress)
        .call();
      if (approveToken == 0) {
        await tokenInstance.methods
          .approve(contractAddress, MAX_AMT)
          .send({ from: userAddress, gas: estimateGas });
      }
      let contract = await ContractServices.callContract(
        contractAddress,
        ABISTAKING
      );
      console.log("contract", contract.methods);
      console.log("userAddress", userAddress);
      console.log("nnncnbcnc", days);
      console.log("++++++++++++++++before stake");
      let gas = await contract.methods
        .stake(days * totalSeconds, inputAmount)
        .estimateGas({ from: userAddress });
      console.log("before stake");
      let result = await contract.methods
        .stake(days * totalSeconds, inputAmount)
        .send({ from: userAddress, gas: gas });
      console.log("gas", gas);
      console.log("tokeninstance", tokenInstance);
      console.log("result", result);
      let data = await contract.methods.stakingTx(userAddress);
      setfinaldays(days * totalSeconds);
      const transactionNo = await contract.methods
        .stakingTx(userAddress)
        .call();
      console.log("transactionNo", transactionNo);
      setTransNo(transactionNo);
      let totalTransactions = transactionNo.txNo;
      console.log("totalTransactions", totalTransactions);
      let transactionDetails;
      for (let i = 1; i <= totalTransactions; i++) {
        transactionDetails = await contract.methods
          .userTransactions(userAddress, i)
          .call();
        // console.log("transactionDetails", transactionDetails);
        await destructure(transactionDetails);
      }

      setDataArray(daataarray);

      // console.log("transactionDetails2", transactionDetails);
    } catch (error) {
      console.log(error);
    }
  };

  console.log("inputamount", inputAmount, "days", days);
  console.log("lastFinalArray", dataArray);
  console.log("rewar------------d", reward);
  localStorage.setItem("Transaction details", dataArray);
  return (
    <div className="container_wrap referral_page">
      <div className="timeto_connect">
        <Container className="custom_container">
          <Row>
            <Col>
              <div className="staking_block">
                <div className="staking_head">
                  <p>Stake</p>
                </div>
                <p className="para">
                  Saitama Balance:{" "}
                  <span className="ms-2">{tokenBalance?.toFixed(4)}</span>
                </p>
                <div className="staking_content">
                  <FormControl
                    placeholder="Input"
                    value={inputAmount}
                    onChange={(e) => setInputAmount(e.target.value)}
                  />
                  <div className="duration_sec">
                    <Button
                      className="time_duration"
                      onClick={() => setDays(60)}
                    >
                      60 days
                    </Button>
                    <Button
                      className="time_duration"
                      onClick={() => setDays(90)}
                    >
                      90 days
                    </Button>
                    <Button
                      className="time_duration"
                      onClick={() => setDays(120)}
                    >
                      120 days
                    </Button>
                  </div>
                  <div className="text_area text-white">
                    <div className="d-flex flex-column">
                      <p className="d-flex">
                        <span>APY:</span>
                        <span className="ms-2">{reward}%</span>
                      </p>
                      <p className="d-flex">
                        <span>Lock Days:</span>{" "}
                        <span className="ms-2">{days}</span>
                      </p>
                      <p className="d-flex">
                        <span>Final Rewards:</span>{" "}
                        <span className="ms-2">{finalRewards}</span>
                      </p>
                    </div>
                    <div>
                      <p className="d-flex">
                        <span>Daily Rewards:</span>{" "}
                        <span className="ms-2">60</span>
                      </p>
                    </div>
                  </div>
                  <Button className="stake_btn" onClick={letsCallContract}>
                    Stake
                  </Button>
                </div>
                {console.log("in the jsx", dataArray)}
                {dataArray
                  ? dataArray?.map((item) => (
                      <div className="duration_bits">
                        <h3>{item.time}</h3>
                        <div className="value_sec px-3">
                          <div className="value_amount_sec d-block">
                            <div className="value_amount d-flex">
                              <p>Stake Amount:</p>
                              <p>{item.amount}</p>
                            </div>
                            <div className="value_amount d-flex">
                              <p>lockInUntil:</p>
                              <p>{item.lockInUntil}</p>
                            </div>
                            <div className="value_amount d-flex">
                              <p>lockInPeriod:</p>
                              <p>{item.lockInUntil / 86400 + "Days"}</p>
                            </div>
                          </div>
                          <Button className="unstake_btn">Unstake</Button>
                        </div>
                      </div>
                    ))
                  : null}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* <div className="referrl_comm">
                <Container className="custom_container">
                    <Row>
                       
                    </Row>
                </Container>
            </div> */}
    </div>
  );
};

export default Staking;
