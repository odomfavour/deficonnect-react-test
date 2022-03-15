import React, { useState } from "react";
import { useParams } from "react-router-dom";
import HomeHeader from "../../components/HomeHeader/HomeHeader";
import "./farmDetail.css";
import Footer from "../../components/Footer/Footer";
import StakingModal from "./stakingModal";

const FarmDetail = () => {
  const params = useParams();
  console.log(params);
  const [tokenApproved, setTokenApproved] = useState(true);
  const [modalStakeShow, setModalStakeShow] = useState(false)

  return (
    <section className="main-container">
      <HomeHeader />
      <section className="banner-bg">
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
                            <div className="sc-fzpkJw hctKJM">
                              <div className="sc-fzqNJr kMMPox">
                                <span>0.0000</span>
                              </div>
                              <div className="sc-fzqBZW dNJHjO">BFI Earned</div>
                            </div>
                            <div className="sc-fznzOf fXZbIS">
                              <button
                                color="rgb(67,210,255)"
                                disabled=""
                                fontSize="12"
                                size="56"
                                className="sc-AxhCb evjpbC"
                              >
                                Harvest
                              </button>
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
                                <span>0.000</span>
                              </div>
                              <div className="sc-fzqBZW dNJHjO">
                                BFI/BNB PANCAKE LP Tokens Staked
                              </div>
                            </div>
                            {!tokenApproved ? (
                              <div className="sc-fzoaKM SiFfD">
                                <button
                                  color="rgb(67,210,255)"
                                  fontSize="12"
                                  size="56"
                                  className="sc-AxhCb etxXUI"
                                >
                                  Approve BFI/BNB PANCAKE LP
                                </button>
                              </div>
                            ) : (
                              <div className="sc-fzoaKM SiFfD">
                                <button
                                  color="rgb(67,210,255)"
                                  font-size="12"
                                  size="56"
                                  className="sc-AxhCb evjpbC"
                                  disabled=""
                                >
                                  Unstake
                                </button>
                                <div className="sc-fzomuh XOob"></div>
                                <button className="sc-fzoant hiqUxk" onClick={() => {setModalStakeShow(true)}}>
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
