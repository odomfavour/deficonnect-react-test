import React, { useEffect, useState } from "react";
import { Contract, BigNumber } from "ethers";
import { useWeb3React } from "@web3-react/core";
import { useParams } from "react-router-dom";
import HomeHeader from "../../components/HomeHeader/HomeHeader";
import "./farmDetail.css";
import Footer from "../../components/Footer/Footer";
import StakingModal from "./StakingModal";
import { getDetailLabel, getFarmData } from "../Defifarm/FarmData";
import { defiFarmContractAddress } from "../../web3/contracts";
import dfcAbi from "../../web3/abi/dfc";
import defiFarmAbi from "../../web3/abi/defiFarm";
import MyPositionModal from "./MyPositionModal";

const FarmDetail = () => {
  const { library, account } = useWeb3React();
  const params = useParams();
  const [tokenApproved, setTokenApproved] = useState(false);
  const [modalStakeShow, setModalStakeShow] = useState(false);
  const [farmSize, setFarmSize] = useState("0.0000");
  const [profit, setProfit] = useState("0.0000");
  const [showPositionModal, setShowPositionModal] = useState(false)

  const farmInfo = getFarmData(params.ticker);

  useEffect(() => {
    const updatedUI = async () => {
      try {
        if (!library) return;
        const tokenContract = new Contract(
          farmInfo.tokenAddress,
          dfcAbi,
          library.getSigner()
        );

        const defiFarmContract = new Contract(
          defiFarmContractAddress,
          defiFarmAbi,
          library.getSigner()
        );

        const allowance = await tokenContract.allowance(
          account,
          defiFarmContractAddress
        );
        setTokenApproved(parseInt(allowance) > 0);

        const farmSizeRes = await defiFarmContract.farmSize(
          account,
          farmInfo.pool
        );
        setFarmSize(
          (
            parseInt(farmSizeRes) /
            parseInt(10 ** (await tokenContract.decimals()))
          ).toFixed(4)
        );

        const profitRes = await defiFarmContract.unrealisedProfit(farmInfo.pool);
        setProfit((parseInt(profitRes) / parseInt(10 ** 8)).toFixed(4));
      } catch (error) {
        console.error(error);
      }
    };

    updatedUI();

    const interval = setInterval(() => {
      updatedUI();
    }, 50000);

    return () => clearInterval(interval);
  });

  const approveToken = async () => {
    try {
      if (!library) return;
      const tokenContract = new Contract(
        farmInfo.tokenAddress,
        dfcAbi,
        library.getSigner()
      );
      await tokenContract.approve(
        defiFarmContractAddress,
        BigNumber.from(1e14).mul(1e8)
      );
      const allowance = await tokenContract.allowance(
        account,
        defiFarmContractAddress
      );
      setTokenApproved(parseInt(allowance) > 0);
    } catch (err) {
      console.log(err);
    }
  };



  return (
    <section className="main-container">
      <HomeHeader />
      <section className="banner-bg" style={{ paddingTbop: 160 }}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2 col-12">
              <div className="content">
                <div className="ant-row sc-fzowVh equHBw">
                  <div className="sc-fzoJus bPIkEp">
                    <div className="sc-fzoVTD Atfvz">
                      <div className="sc-fzoKki GoZkS">
                        <div className="sc-fzoYkl gna-dsK">
                          <div className="sc-fznMnq biVOqy">
                            <div className="sc-fzpkJw hctKJM mt-5">
                              <div className="sc-fzqNJr kMMPox">
                                <span>{profit}</span>
                              </div>
                              <div className="sc-fzqBZW dNJHjO">Unrealised Profit</div>
                            </div>
                            
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="sc-fzozJi dZjuQi" size="24"></div>

                    <div className="sc-fzoVTD Atfvz">
                      <div className="sc-fzoKki GoZkS">
                        <div className="sc-fzoYkl gna-dsK">
                          <div className="sc-fzqAui eoGDzK">
                            <div className="sc-fznLPX dtmoaU">
                              <div className="sc-fzqNJr kMMPox">
                                <span>{farmSize}</span>
                              </div>
                              <div className="sc-fzqBZW dNJHjO">
                                {getDetailLabel(farmInfo)} Staked
                              </div>
                            </div>
                            {!tokenApproved ? (
                              <div className="sc-fzoaKM SiFfD">
                                <button
                                  onClick={approveToken}
                                  disabled={!library}
                                  color="rgb(67,210,255)"
                                  fontSize="12"
                                  size="56"
                                  className="sc-AxhCb evjpbC"
                                >
                                  Approve {getDetailLabel(farmInfo)}
                                </button>
                              </div>
                            ) : (
                              <div className="sc-fzoaKM SiFfD">
                              <MyPositionModal
                                    farmInfo={farmInfo}
                                    show={showPositionModal}
                                    handleClose={() => setShowPositionModal(false)}
                                  />
                                <button
                                  onClick={() => {setShowPositionModal(true)}}
                                  disabled={farmSize === 0}
                                  color="rgb(67,210,255)"
                                  fontSize="12"
                                  size="56"
                                  className="sc-AxhCb evjpbC"
                                >
                                  My Positions
                                </button>
                                <div className="sc-fzomuh XOob"></div>
                                <button
                                  className="sc-fzoant hiqUxk"
                                  onClick={() => {
                                    setModalStakeShow(true);
                                  }}
                                >
                                  <svg
                                    height="24"
                                    viewBox="0 0 24 24"
                                    width="24"
                                  >
                                    <path d="M0 0h24v24H0z" fill="none"></path>
                                    <path
                                      d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
                                      fill="#000"
                                    ></path>
                                  </svg>
                                </button>
                                {modalStakeShow ? (
                                  <StakingModal
                                    farmInfo={farmInfo}
                                    show={modalStakeShow}
                                    handleClose={() => setModalStakeShow(false)}
                                  />
                                ) : (
                                  ""
                                )}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sc-fzozJi dZjuQi" size="24"></div>
                  <div className="sc-fzpisO bcrkNl">
                    <button
                      color="rgb(67,210,255)"
                      fontSize="12"
                      size="56"
                      className="sc-AxhCb etxXUI"
                    >
                      <a
                        href="https://exchange.pancakeswap.finance/#/add/0x81859801b01764D4f0Fa5E64729f5a6C3b91435b/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c"
                        target="__blank"
                        className="sc-AxgMl eAkvDu"
                      >
                        Add Liquidity
                      </a>
                    </button>
                    <div className="sc-fzozJi dZjuQi" size="24"></div>
                    <button
                      color="rgb(67,210,255)"
                      fontSize="12"
                      size="56"
                      className="sc-AxhCb etxXUI"
                    >
                      <a
                        href="https://exchange.pancakeswap.finance/#/remove/0x81859801b01764D4f0Fa5E64729f5a6C3b91435b/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c"
                        target="__blank"
                        className="sc-AxgMl eAkvDu"
                      >
                        Remove Liquidity
                      </a>
                    </button>
                  </div>
                  <div className="sc-fzozJi dZSHle" size="48"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </section>
  );
};

export default FarmDetail;
