import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BigNumber } from "bignumber.js";
import {
  Container,
  Col,
  Row,
  Button,
  Form,
  FormControl,
  Table,
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
import { toast } from "../../components/Toast/Toast";
import Loader from "react-loader-spinner";
import Timer from "../../components/Timer/Timer";
import { startLoading, stopLoading } from "../../redux/actions";
import { EVENTS } from "../../constant";
const Staking = () => {
  const stakingProxy = "0x409353a02Ba3CCf60F3c503A6fd842a7A9C20782";
  // const stakingContract = "0xE6A55671c1b863b73cCd8ECAcf4fa8Db3D6FF1b7";
  const tokenAddress = "0xce3f08e664693ca792cace4af1364d5e220827b2"; //saitaToken
  const MAX_AMT = "0xffffffffffffffffffffffffffffffffffffffff";
  const [inputAmount, setInputAmount] = useState();
  const [days, setDays] = useState(0);
  const [reward, setReward] = useState(0);
  const [tokenBalance, setTokenBalance] = useState();
  // const [finaldays, setfinaldays] = useState();
  const [transactionNo, setTransNo] = useState({});
  const [dataArray, setDataArray] = useState([]);
  const [contract, setContract] = useState();
  const [userAddress, setUserAddress] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  // const [, setDaysLeft] = useState(true);
  let daysLeft;
  let daataarray = [];
  const dispatch = useDispatch();
  // const [dataObj, setDataObj] = useState({
  //   amount: "",
  //   lockInUntil: "",
  //   isUnstaked: "",
  //   stakeInTime: "",
  // })

  let totalSeconds = 86400;
  let finalRewards =
    inputAmount && reward ? (inputAmount * ((reward * days) / 365)) / 100 : 0;
  const isTheUserConnected = useSelector(
    (state) => state.persist.isUserConnected
  );

  const someF = async () => {
    let contract = await ContractServices.callContract(
      stakingProxy,
      ABISTAKING
    );
    setContract(contract);

    let rewardPercent = await contract.methods
      .rewardPercent(days * totalSeconds)
      .call();
    setReward(rewardPercent / 100);

    let userAddress = isTheUserConnected;
    setUserAddress(userAddress);
    const TokenBalance = await ContractServices.getTokenBalance(
      tokenAddress,
      userAddress
    );
    console.log("TokenBalance", TokenBalance);
    setTokenBalance(TokenBalance);
  };

  document.addEventListener(EVENTS.LOGIN_SUCCESS, async (e) => {
    e.preventDefault();
    await someF();
  });

  useEffect(
    (_) => {
      (async (_) => {
        await someF();
      })();
    },
    [days]
  );

  const handleChange = (e) => {
    setInputAmount(e.target.value);
    if (inputAmount) {
      setIsDisabled(false);
    }
  };

  const startTimer = (timer) => {
    const countDownDate = new Date(timer * 1000);
    const now = new Date().getTime();
    const difference = countDownDate - now;
    const days = Math.floor(difference / (24 * 60 * 60 * 1000));
    const hours = Math.floor(
      (difference % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (60 * 60 * 1000)) / (1000 * 60));
    const seconds = Math.floor((difference % (60 * 1000)) / 1000);
    // console.log("the difference", difference);
    if (difference < 0) {
      daysLeft = false;

      return <>{"Lockin period is over"}</>;
    } else {
      return <>{days + ":" + hours + ":" + minutes}</>;
    }
  };
  console.log("the days left", daysLeft);
  const destructure = async (array, i, stakingRewards) => {
    console.log("stakingRewards", stakingRewards);
    daataarray.push({
      amount: array[0],
      lockInPeriod: array[1],
      lockInUntil: array[3],
      isClaimed: array[4],
      transactionNo: i,
      stakingRewards: stakingRewards,
    });
  };

  const letsCallContract = async () => {
    debugger;
    if (isTheUserConnected) {
      if (inputAmount) {
        try {
          dispatch(startLoading());
          // let userAddress = await ContractServices.isMetamaskInstalled();
          // let gasPrice = await Contractservices.calculateGasPrice();
          let tokenInstance = await ContractServices.callContract(
            tokenAddress,
            TOKENABI
          );

          let estimateGas = await tokenInstance.methods
            .approve(stakingProxy, MAX_AMT)
            .estimateGas({ from: userAddress });
          setIsDisabled(true);
          let approveToken = await tokenInstance.methods
            .allowance(userAddress, stakingProxy)
            .call();
          if (approveToken == 0) {
            await tokenInstance.methods
              .approve(stakingProxy, MAX_AMT)
              .send({ from: userAddress, gas: estimateGas });
          }
          let contract = await ContractServices.callContract(
            stakingProxy,
            ABISTAKING
          );

          let gas = await contract.methods
            .stake(days * totalSeconds, BigNumber(inputAmount) * 10 ** 9)
            .estimateGas({ from: userAddress });

          let result = await contract.methods
            .stake(days * totalSeconds, BigNumber(inputAmount) * 10 ** 9)
            .send({ from: userAddress, gas: gas });
          console.log("uuuu result", result);
          // let data = await contract.methods.stakingTx(userAddress);
          // setfinaldays(days * totalSeconds);
          const transactionNo = await contract.methods
            .stakingTx(userAddress)
            .call();

          // setTransNo(transactionNo);
          let totalTransactions = transactionNo.txNo;

          let transactionDetails;
          let stakingRewards;
          for (let i = 1; i <= totalTransactions; i++) {
            transactionDetails = await contract.methods
              .userTransactions(userAddress, i)
              .call();
            stakingRewards = await contract.methods
              .rewards(userAddress, i)
              .call();
            console.log("transactionDetails", transactionDetails);
            await destructure(transactionDetails, i, stakingRewards);
          }

          setDataArray(daataarray.reverse());
          setIsDisabled(false);
          dispatch(stopLoading());
        } catch (error) {
          console.log(error);
        }
      } else {
        toast.error("Please enter the staking amount");
      }
    } else {
      toast.error("Please Connect your wallet first");
    }
  };
  console.log("99999", contract?.methods);
  console.log("thidijojoijoijj", tokenBalance);
  const letsUnstake = async (trans) => {
    if (isTheUserConnected) {
      try {
        let contract = await ContractServices.callContract(
          stakingProxy,
          ABISTAKING
        );
        let userAddress = await ContractServices.isMetamaskInstalled();
        let gas = await contract.methods
          .claim(trans)
          .estimateGas({ from: userAddress });
        let result = contract.methods
          .claim(trans)
          .send({ from: userAddress, gas: gas });

        const transactionNo = await contract.methods
          .stakingTx(userAddress)
          .call();

        setTransNo(transactionNo);
        let totalTransactions = transactionNo.txNo;

        let transactionDetails;
        for (let i = 1; i <= totalTransactions; i++) {
          transactionDetails = await contract.methods
            .userTransactions(userAddress, i)
            .call();
          // console.log("transactionDetails", transactionDetails);
          await destructure(transactionDetails, i);
        }
      } catch (error) {
        toast.error(error);
      }
    } else {
      toast.error("Please Connect your wallet first");
    }
  };
  const getTheStake = async () => {
    // alert("in gettheStake");
    if (isTheUserConnected) {
      try {
        setIsDisabled(true);
        dispatch(startLoading());
        const transactionNo = await contract.methods
          .stakingTx(userAddress)
          .call();
        // console.log("transactionNo", transactionNo);
        setTransNo(transactionNo);
        let totalTransactions = transactionNo.txNo;
        // console.log("totalTransactions", totalTransactions);
        let transactionDetails;
        let stakingRewards;
        for (let i = 1; i <= totalTransactions; i++) {
          transactionDetails = await contract.methods
            .userTransactions(userAddress, i)
            .call();
          stakingRewards = await contract.methods
            .rewards(userAddress, i)
            .call();
          // console.log("transactionDetails", transactionDetails);
          await destructure(transactionDetails, i, stakingRewards);
        }
        setDataArray(daataarray);
        setIsDisabled(false);
        dispatch(stopLoading());
      } catch (error) {
        alert(error);
      }
    } else {
      toast.error("Please connect your wallet first");
    }
  };
  // console.log("daysLeft", daysLeft);
  return (
    // referral_page
    <div className="container_wrap stakePage py-40">
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
                  <form>
                    <FormControl
                      placeholder="Input"
                      value={inputAmount}
                      onChange={(e) => handleChange(e)}
                      required
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
                          <span>Lock-In Period:</span>{" "}
                          <span className="ms-2">{days} Days</span>
                        </p>
                        <p className="d-flex">
                          <span>Final Rewards:</span>{" "}
                          <span className="ms-2">{finalRewards} Saitama</span>
                        </p>
                      </div>
                    </div>
                    <Button
                      className="stake_btn"
                      id="myBtn"
                      disabled={isDisabled}
                      onClick={letsCallContract}
                    >
                      Stake
                    </Button>
                  </form>

                  <Button className="stake_btn" onClick={getTheStake}>
                    Get your stakings
                  </Button>
                </div>
                {/* {console.log("in the jsx", dataArray)} */}
                <div className="stakeAmountbox">
                  <Table responsive className="duration_bits">
                    <thead>
                      <tr>
                        <th>Stake Amount</th>
                        {/* <th>Rewards</th> */}
                        <th>Rewards</th>
                        <th>
                          Locked in Until<br></br> (DD:HH:MM)
                        </th>
                        <th>Lock In Period</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    {dataArray.length > 0
                      ? dataArray?.map((item) => (
                          <tbody>
                            <tr>
                              <td>{item.amount / 10 ** 9} Saitama</td>
                              <td>{item.stakingRewards / 10 ** 9} Saitama</td>
                              {/* <td>{finalRewards} Saitama</td> */}
                              <td>
                                {/* {item.lockInUntil} */}
                                {startTimer(item.lockInUntil)}
                                <div className="timerBox"></div>
                              </td>
                              <td>
                                {item.lockInPeriod / totalSeconds + " Days"}
                              </td>
                              <td>
                                {item.isClaimed === true ? (
                                  <Button className="unstake_btn">
                                    Claimed
                                  </Button>
                                ) : daysLeft === false ? (
                                  <Button
                                    className="unstake_btn"
                                    onClick={() => {
                                      try {
                                        letsUnstake(item.transactionNo);
                                      } catch (err) {
                                        console.log(err);
                                      }
                                    }}
                                  >
                                    Unstake
                                  </Button>
                                ) : (
                                  <Button
                                    className="unstake_btn"
                                    disabled={true}
                                  >
                                    Unstake
                                  </Button>
                                )}
                              </td>
                            </tr>
                          </tbody>
                          // <div className="duration_bits value_sec">
                          //   <h3>{item.time}</h3>

                          //   <div className="value_sec px-3">
                          //     <div className="value_amount_sec d-block">
                          //       <div className="value_amount d-flex">
                          //         <p></p>
                          //         <p></p>
                          //       </div>
                          //       <div className="value_amount d-flex">
                          //         <p></p>
                          //         <p></p>
                          //       </div>
                          //       <div className="value_amount d-flex">
                          //         <p>:</p>
                          //         <p></p>
                          //       </div>
                          //     </div>
                          //   </div>
                          // </div>
                        ))
                      : null}
                  </Table>
                </div>
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
