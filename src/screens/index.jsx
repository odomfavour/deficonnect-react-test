import React, { useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { Contract, ethers } from "ethers";
import "./index.css";
import "./roadmap.css";
import HomeHeader from "../components/HomeHeader/HomeHeader";
import tokenomic from "../images/tokenomics.png";
import topShape from "../images/top-shape.png";
import bottomShape from "../images/bottom-shape.png";
import CTO from "../images/cto-new.jpeg";
import raph from "../images/raph.jpeg";
import albert from "../images/albert-jaku.jpg";
import sp from "../images/sp.png";
import certik from "../images/certik-deficonnect-logo.png";
import hotbit from "../images/hotbit.png";
import coingecko from "../images/coingecko.png";
import coinsbit from "../images/coinsbit.png";
import bitmart from "../images/bitmart.png";
import latoken from "../images/latoken.png";
import bitrue from "../images/bitrue.png";
import ball1 from "../images/1.png";
import ball2 from "../images/2.png";
import ball3 from "../images/3.png";
import ball4 from "../images/4.png";
import ball5 from "../images/5.png";
import ball6 from "../images/6.png";

import coinmarketcap from "../images/coinmarketcap.jpeg";
import deficonnectCoin from "../images/deficonnect-digitalcoin.png";
import tp from "../images/tp.png";
import yf from "../images/yf.png";
import mw from "../images/mw.png";
import cate from "../images/cate.png";
import copyIcon from "../images/copy-icon.png";
import Faqs from "../components/Faqs/Faqs.jsx";
import Products from "../components/Products/Products";
import Footer from "../components/Footer/Footer";
import { dfcContractAddress } from "../web3/contracts";
import dfcAbi from "../web3/abi/dfc";

import { InjectedConnector } from "@web3-react/injected-connector";

const Injected = new InjectedConnector({
  supportedChainIds: [97, 56],
});

// import { BsTelegram, BsFacebook, BsReddit, BsTwitter, BsMedium, BsYoutube } from "react-icons/bs";

const Index = () => {
  const { library, account, active, activate, deactivate } = useWeb3React();
  const [balance, setBalance] = useState();
  const [farmSize, setFarmSize] = useState();
  const [profitReceived, setProfitReceived] = useState();
  const [profitAvailable, setProfitAvailable] = useState();

  useEffect(() => {
    if (!library) return;
    const fn = async () => {
      const dfcContract = new Contract(
        dfcContractAddress,
        dfcAbi,
        library.getSigner()
      );
      const dfcBalance = await dfcContract.balanceOf(account);
      setBalance((parseInt(dfcBalance) / 1e8).toFixed(2));

      const farmSizeRes = await dfcContract.farmSize()
      setFarmSize((parseInt(farmSizeRes)/1e8).toFixed(2))

      const rewardRecieved = await dfcContract.rewardReceived()
      setProfitReceived((parseInt(rewardRecieved)/1e8).toFixed(2))

      const rewardAvailable = await dfcContract.withdrawable()
      setProfitAvailable((parseInt(rewardAvailable)/1e8).toFixed(2))
    };
    fn()
  }, [library, account, setBalance, setFarmSize]);

  const login = () => {
    try {
      activate(Injected);
      localStorage.setItem('connected', 1)
    }catch(err){
      alert(err)
    }
    
  };

  const logout = () => {
    deactivate();
    localStorage.setItem('connected', 0)
  };

  const harvest = async () => {
      if(!library) return;
      const dfcContract = new Contract(
        dfcContractAddress,
        dfcAbi,
        library.getSigner()
      );

      await dfcContract.harvest()
      alert('submitted');
  }

  return (
    <section className="main-container">
      <HomeHeader />
      <section className="banner-bg">
        <div className="container">
          <div className="hero">
            <div className="row">
              <div className="col-lg-7 col-md-12 col-12">
                <h1 className="dfc-welcome-title">WELCOME TO DEFICONNECT</h1>
                <p>
                  DefiConnect is a revolutionized digital community with
                  state-of-the-art, real-world cryptocurrency powered solutions
                  in digital marketing, healthcare, transportation, logistics,
                  and multilevel marketing.
                </p>
                <div className="banner-button-group my-3 d-flex align-items-center flex-wrap">
                  <a href="/markets" className="button-4 btn-warning mb-3 me-3">
                    BUY DFC{" "}
                  </a>
                  <a
                    target=""
                    href="/static/assets/whitePaperNew.pdf"
                    className="button-4 active mb-3 me-3"
                  >
                    Read White Paper
                  </a>
                  <a
                    href="https://t.me/deficonnect"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button-4 active mb-3"
                  >
                    Join Our Community
                  </a>
                </div>
              </div>
              <div className="col-lg-5 col-md-12 col-12">
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    width="516"
                    height="315"
                    src="https://www.youtube.com/embed/LzcNBu5jcJc"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen=""
                    style={{ width: 100 + "%" }}
                  ></iframe>
                </div>
                <div className="dfc-home-socials">
                  <a
                    href="https://t.me/deficonnect"
                    target="_blank"
                    className="active"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-telegram"></i>
                  </a>
                  <a
                    href="https://www.facebook.com/deficonnect"
                    target="_blank"
                    className="active"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a
                    href="https://www.reddit.com/user/deficonnect"
                    target="_blank"
                    className="active"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-reddit"></i>
                  </a>
                  <a
                    href="https://twitter.com/deficonnect"
                    target="_blank"
                    className="active"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    href="https://deficonnect.medium.com/"
                    target="_blank"
                    className="active"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-medium"></i>
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UCYq2MxoWOXfkFHGuAr1H7dQ"
                    target="_blank"
                    className="active"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-3 counter-section">
            <div className="d-flex justify-content-between align-items-center flex-wrap">
              <div className="counter-box">
                <h2>30k+</h2>
                <p>Telegram Followers</p>
              </div>
              <div className="counter-box">
                <h2>45.1k+</h2>
                <p>Twitter Followers</p>
              </div>
              <div className="counter-box">
                <h2>1.9k+</h2>
                <p>Facebook Followers</p>
              </div>
              <div className="counter-box">
                <h2>260+</h2>
                <p>Youtube Followers</p>
              </div>
              <div className="counter-box">
                <h2>260+</h2>
                <p>DFC Holders</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="products">
        <div className="section-header cl-white text-center mt-5">
          <h2 className="title">Our Products</h2>
        </div>
        <Products />
      </section>
      <section id="tokenomics">
        <div className="container">
          <div className="section-header cl-white text-center mt-5">
            <h2 className="title">Tokenomics</h2>
          </div>
          <div className="row">
            <div className="col-md-6">
              <p>
                Unlike every other system, being a part of our DefiConnect gives
                you real time access into how the chains binding our demand and
                supply system really works. This transparency metric is a first
                of its kind that will ensure you make informed decisions as to
                what degree of your asset is being created in a more predictable
                way.
              </p>
              <div className="mt-3 mb-5 contract-border">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Contract address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                  value="0x996c1bf72Ec220289ae0edd3a8d77080642121a2"
                  readOnly
                />
                <img
                  src={copyIcon}
                  alt="copy"
                  className="img-fluid copy-icon"
                />
              </div>
              <a href="/markets" target="" className="button-3 btn-warning">
                BUY DFC
              </a>
            </div>
            <div className="col-md-6">
              <img src={tokenomic} alt="" className="img-fluid" />
              <ul>
                <li>
                  <span>Token Name:</span> DefiConnect
                </li>
                <li>
                  <span>Symbol:</span> DFC
                </li>
                <li>
                  <span>Total Suply:</span> 200,000,000,000,000 DFC
                </li>
                <li>
                  <span>Decimal:</span> 8
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="about-section pt-5">
        <div className="top-shape d-none d-md-block">
          <img src={topShape} alt="css" className="img-fluid" />
        </div>
        <div className="bottom-shape d-none d-md-block">
          <img src={bottomShape} alt="css" className="img-fluid" />
        </div>
        <div
          className="ball-2"
          data-paroller-factor="-0.30"
          data-paroller-factor-lg="0.60"
          data-paroller-type="foreground"
          data-paroller-direction="horizontal"
        >
          <img src={ball1} alt="balls" />
        </div>
        <div
          className="ball-3"
          data-paroller-factor="-0.30"
          data-paroller-factor-lg="0.60"
          data-paroller-type="foreground"
          data-paroller-direction="horizontal"
        >
          <img src={ball2} alt="balls" />
        </div>
        <div
          className="ball-4"
          data-paroller-factor="-0.30"
          data-paroller-factor-lg="0.60"
          data-paroller-type="foreground"
          data-paroller-direction="horizontal"
        >
          <img src={ball3} alt="balls" />
        </div>
        <div
          className="ball-5"
          data-paroller-factor="-0.30"
          data-paroller-factor-lg="0.60"
          data-paroller-type="foreground"
          data-paroller-direction="horizontal"
        >
          <img src={ball4} alt="balls" />
        </div>
        <div
          className="ball-6"
          data-paroller-factor="-0.30"
          data-paroller-factor-lg="0.60"
          data-paroller-type="foreground"
          data-paroller-direction="horizontal"
        >
          <img src={ball5} alt="balls" />
        </div>
        <div
          className="ball-7"
          data-paroller-factor="-0.30"
          data-paroller-factor-lg="0.60"
          data-paroller-type="foreground"
          data-paroller-direction="horizontal"
        >
          <img src={ball6} alt="balls" />
        </div>
        <div className="my-5 about-content">
          <div className="container mb-5">
            <div className="section-header cl-white">
              <h2 className="title">ABOUT US </h2>
            </div>
            <div className="section-body">
              <p
                className="fadeInDown"
                data-wow-duration="0.4s"
                data-wow-delay="0.4s"
              >
                DefiConnect is likened to an ecosystem with huge potentials and
                opportunities that will bring about a major positive shift in
                the financial economy. This will also encumber into the social
                sphere as well as impacting political transparency.
              </p>
              <p
                className="fadeInDown"
                data-wow-duration="0.4s"
                data-wow-delay="0.4s"
              >
                More than just trading on exchanges, our currency (DFC) serves
                as a passing link into incentives rarely experienced in other
                ecosystems .we have successfully executed and stretched the
                domains of crypto currency beyond just financial transactions.
              </p>
              <p
                className="fadeInDown mb-5"
                data-wow-duration="0.4s"
                data-wow-delay="0.4s"
              >
                We have also molded the generic block chain technology for
                specific use cases with a lightweight and easy-to-customize
                implementation.
              </p>
              <a
                href="/static/assets/whitePaperNew.pdf"
                target=""
                className="button-3 btn-warning"
              >
                Read White Paper
              </a>
            </div>
            <div id="1" className="section-header cl-white">
              <h2 className="title">Token Farming</h2>
              
              {active ? (
              ''
              
            ) : (<button
                onClick={login}
                className="etxXUI" style={{width:200}}>Connect</button>
              
            )}
            </div>
            <div id="planting" className="contact-wrapper pb-5">
              <div className="col-md-12" id="countdown">
                <div style={{ marginTop: 40 + "px" }} className="row">
                  <div className="col-md-8 mb-3">
                    <h4 className="mb-2">Connected account</h4>
                    <p
                      style={{ fontSize: 20 + "px" }}
                      data-target="index.walletAddress"
                    >
                      {account ? account : ""}
                    </p>
                  </div>
                  <div className="col-md-4">
                    <h4 className="mb-2">Wallet Balance</h4>
                    <p>
                      <span data-target="index.walletBalance">
                        {balance} DFC
                      </span>
                    </p>
                  </div>
                </div>
                <hr />
                <div className="row mt-3">
                  <div className="col-md-6 mb-5">
                    <h4 className="mb-2">Farm Size</h4>
                    <p className="mb-3">
                      <span data-target="index.farmSize">{farmSize}</span> DFC
                    </p>
                    <input
                      type="hidden"
                      data-target="index.refID"
                      value="0xA175cbc003E53e2F31Cd32543Ce22c4A209DEa6F"
                      readOnly
                    />
                    <input
                      type="number"
                      data-target="index.inputAmount"
                      placeholder="Min. 20,000,000 DFC"
                      min="20,000,000"
                      step="1000000"
                      className="form-control mb-3 col-md-8 col-sm-12 offset-md-2 d-node"
                    />
                    <table
                      className="deposit-table1 table fg-white mt-3"
                      style={{ display: "none", color: "white" }}
                    >
                      <thead>
                        <tr>
                          <th>Start Date</th>
                          <th>Ends In</th>
                          <th>Amount</th>
                        </tr>
                      </thead>
                      <tbody className="deposit-table-content">
                        <tr>
                          <td></td>
                        </tr>
                      </tbody>
                      <tfoot>
                        <tr>
                          <th colSpan={2} className="text-right">
                            Farm Size
                          </th>
                          <th className="active-investment"></th>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                  <div className="col-md-6">
                    <h4 className="mb-2">Profit Received</h4>
                    <p className="mb-3">
                      <span data-target="index.totalProfit">{profitReceived}</span> DFC
                    </p>
                    <h4 className="mb-2">Available Profit</h4>
                    <p className="mb-3">
                      <span data-target="index.profit">{profitAvailable}</span> DFC
                    </p>
                    <div className="row">
                      <div className="col">
                        <button onClick={harvest}
                          className="btn btn-primary col-md-8 col-sm-12 withdrawBtn"
                          data-action="index#harvest"
                        >
                          Harvest
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{ marginTop: 30 + "px" }}
              className="container referral"
            >
              <div className="section-header cl-white">
                <h2 className="title">Referral Program</h2>
                <p>Earn 10% of the farm size of all your referrals</p>
              </div>
              <div className="contact-wrapper pb-5">
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <h4 className="mb-2">Referral Link</h4>
                    <p
                      className="noReferralLink"
                      data-target="index.noReferralLink"
                    >
                      You must stake some token before referring others
                    </p>
                    <div className="input-group mb-3 referralLinkDiv">
                      <input
                        id="refLink"
                        data-target="index.refLink"
                        readOnly=""
                        type="text"
                        className="form-control referralLink"
                      />
                      <div
                        data-action="click->index#copyReferralLink"
                        className="input-group-append btn-primary"
                        style={{ cursor: "copy" }}
                      >
                        <span className="input-group-text" id="basic-addon2">
                          Copy
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 mb-3">
                    <h4 className="mb-2">Referral Earning</h4>
                    <p>Referral earnings are paid directly into your wallet</p>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ marginTop: 30 + "px" }} className="why-dfc">
              <div className="section-header cl-white">
                <h2 className="title">Why deficonnect</h2>
              </div>
              <div className="section-body row">
                <div className="col-md-6 mb-3">
                  <div className="why-wrapper">
                    <div className="section-header cl-white">
                      <h2 style={{ marginTop: 15 + "px" }}>Endless rewards </h2>
                      <i className="fas fa-gifts"></i>
                    </div>
                    <p>
                      The viability of our super real life applications has
                      consistently ensured that a whooping first of its kind
                      190% rate of returns with a daily earning of{" "}
                      <span data-target="index.dailyReward">1.24</span>% is a
                      seamlessly harvested by all the token holders.
                    </p>
                  </div>
                </div>
                <div className=" col-md-6 mb-3">
                  <div className="why-wrapper">
                    <div className="section-header cl-white">
                      <h2 style={{ marginTop: 15 + "px" }}>
                        Free transactions{" "}
                      </h2>
                      <i className="fas fa-credit-card"></i>
                    </div>
                    <p>
                      With DefiConnect, you are in full control of the funds as
                      we have eliminated third-party expenses by charging zero
                      extra monthly subscription fees.
                    </p>
                  </div>
                </div>
                <div className=" col-md-6 mb-3">
                  <div className="why-wrapper">
                    <div className="section-header cl-white">
                      <h2 style={{ marginTop: 15 + "px" }}>Transparency </h2>
                      <i className="fas fa-gavel"></i>
                    </div>
                    <p>
                      To further reinstate our level of commitment, The
                      addresses and daily profit accumulation records of token
                      holders will be on open display on our platforms at a
                      single click.
                    </p>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="why-wrapper">
                    <div className="section-header cl-white">
                      <h2 style={{ marginTop: 15 + "px" }}>
                        Real-world application{" "}
                      </h2>
                      <i className="fas fa-rocket"></i>
                    </div>
                    <p>
                      We are connecting Defi with every aspect that makes up the
                      real-life departments.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ marginTop: 30 + "px" }} className="mlm-launchpad">
              <div className="section-header cl-white">
                <h2 className="title">
                  {" "}
                  Multi-Level Marketing (MLM) Launchpad&nbsp;
                </h2>
                <h5 className="cate">(LIVE)</h5>
              </div>
              <div className="section-body">
                <p>
                  We have simply applied the immutable and permissible nature of
                  Smart Contracts to circumvent the drawbacks that once
                  characterized the MLM business to function with the highest
                  security and zero risks. We offer care for a unique and new
                  perspective to the MLM business laced with fast-paced and
                  transparent transactions using our ecosystems token. People
                  who also join the MLM scheme will receive benefits in the form
                  of crypto assets and tokens through an automated process.
                </p>
                <p>
                  This innovation will give institutions the ability to create a
                  campaign and allow our users to serve as sales agents using
                  the power of their network.
                </p>
                <a href="/launchpad" className="button-3 btn-danger">
                  Launchpad
                </a>
              </div>
            </div>
            <div style={{ marginTop: 30 + "px" }} className="DEHIM">
              <div className="section-header cl-white">
                <h2 className="title">DEHIM Healthcare</h2>
                <h5 className="cate">(Coming Soon)</h5>
              </div>
              <div className="section-body">
                <p>
                  Our healthcare application can be envisaged in five core
                  areas:&nbsp;
                </p>
                <ul style={{ listStyle: "square" }}>
                  <li>Managing electronic medical records</li>
                  <li>Protection of healthcare data</li>
                  <li>Personal health record data management</li>
                  <li>Point-of-care genomics management, and&nbsp;</li>
                  <li>Electronic health records data management.&nbsp;</li>
                </ul>
                <p>
                  The acquisition of our tokens as a digital asset automatically
                  opens you up to using our health package. Once you come on
                  board as a member, our mobile health app, and remote
                  monitoring ensures the security of your electronic medical
                  records on our network. Your data can be rapidly sent to
                  trusted and certified medical personnel in case of an
                  emergency. It is also available for self-monitoring and home
                  care for personal use.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="3" className="faq-section">
        <div className="container">
          <div style={{ marginTop: 30 + "px" }} className="tokenomics">
            <div className="section-header cl-white">
              <h2 className="title">OUR TEAM</h2>
              <p>
                In an ever evolving space championed by the rapid advances in
                technology and increased access to markets, the need to be
                agile, flexible, and adaptable have become a necessity. Our team
                comprises of a collection of versatile individuals with
                experience who have earned the title of expert in their field.
              </p>
            </div>
            <div className="">
              <div className="row">
                <div className="col-md-4 team-member text-center">
                  <img className="img img-fluid" src={CTO} alt="TeamMember" />
                  <h3>Ademu Anthony</h3>
                  <p className="team-rank">Founder / CTO</p>
                  <a
                    href="https://www.linkedin.com/in/ademuanthony/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social"
                  >
                    <i className="fab fa-lg fa-linkedin "></i>
                  </a>
                </div>
                <div className="col-md-4 team-member text-center">
                  <img className="img img-fluid" src={raph} alt="TeamMember" />
                  <h3>Raphael Ikediashi </h3>
                  <p className="team-rank">MD</p>
                  <a
                    href="https://www.linkedin.com/in/raphael-ikediashi-b9888249/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social"
                  >
                    <i className="fab fa-lg fa-linkedin"></i>
                  </a>
                </div>
                <div className="col-md-4 team-member text-center">
                  <img
                    className="img img-fluid"
                    src={albert}
                    alt="TeamMember"
                  />
                  <h3>Albert Jaku</h3>
                  <p className="team-rank">Team Member</p>
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social"
                  >
                    <i className="fab fa-lg fa-linkedin"></i>
                  </a>
                </div>
                <div className="col-md-12 text-center mt-4">
                  <a href="/team" className="button-4 small-button-4">
                    View All Team Members
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="roadmap" className="faq-section padding-top">
        <div className="container">
          <div className="">
            <div className="section-header">
              <h2 className="title">ROADMAP</h2>
            </div>
            <p style={{ margin: ` auto 10px` }}>
              DefiConnect is all about building real world applications that
              bring the many benefits of the DeFi ecosystem to our everyday
              lives. Some plans here might evolve with time, but it will remain
              consistent with the long term vision of connecting DeFi to our
              lives by building real world applications that benefit our regular
              everyday lives.
            </p>
            <div
              id="my-roadmap"
              className="roadmap roadmap--orientation-auto roadmap--initialized"
            >
              <ol className="roadmap__events">
                <li className="roadmap__events__event" style={{ left: `0%` }}>
                  <div className="event">
                    <div className="event__date">Q1 - 2022</div>
                    <div className="event__content">
                      1. DFCTipper <br />
                      2. Launchpad Upgrade
                      <br />
                      3. Exchanges Listing
                      <br />
                      4. DefiPay Public Launching
                      <br />
                      5. Liquidity Farming
                      <br />
                      6. Deficonnect Metaverse
                    </div>
                  </div>
                </li>
                <li
                  className="roadmap__events__event"
                  style={{ left: `33.33%` }}
                >
                  <div className="event">
                    <div className="event__date">Q2 - 2022</div>
                    <div className="event__content">
                      1. Metaverse Initial land offering (ILO)
                      <br />
                      2. Exchanges Listing
                      <br />
                      3. Defipay Multi wallet mobile App
                      <br />
                      4. NFTs marketplace
                      <br />
                      5. Top Token Hub
                    </div>
                  </div>
                </li>
                <li className="roadmap__events__event" style={{ left: `60%` }}>
                  <div className="event">
                    <div className="event__date">Q3 - 2022</div>
                    <div className="event__content">
                      1. Decentralized health insurance marketplace
                      <br />
                      2. Exchanges Listing
                      <br />
                    </div>
                  </div>
                </li>
                <li className="roadmap__events__event" style={{ left: `100%` }}>
                  <div className="event">
                    <div className="event__date">Q4 - 2022</div>
                    <div className="event__content">
                      1. Decentralized health Information marketplace(Dehim)
                      <br />
                      2. Exchanges Listing
                      <br />
                    </div>
                  </div>
                </li>
              </ol>
              <ul className="roadmap__navigation d-none">
                <li></li>
                <li></li>
              </ul>
            </div>
            {/* <div className="roadmap__container">
                                <ul className="roadmap">
                                    <li className="roadmap__item">
                                        <div className="roadmap__item-container">
                                            <ol>
                                                <li></li>
                                                <li></li>
                                                <li></li>
                                                <li></li>
                                            </ol>
                                        </div>
                                    </li>
                                    <li className="roadmap__item">
                                        <div className="roadmap__item-container">
                                            <ol>
                                                <li></li>
                                                <li></li>
                                                <li></li>
                                                <li></li>
                                            </ol>
                                        </div>
                                    </li>
                                    <li className="roadmap__item">
                                        <div className="roadmap__item-container">
                                            <ol>
                                                <li></li>
                                                <li></li>
                                                <li></li>
                                                <li></li>
                                            </ol>
                                        </div>
                                    </li>
                                    <li className="roadmap__item">
                                        <div className="roadmap__item-container">
                                            <ol>
                                                <li></li>
                                                <li></li>
                                                <li></li>
                                                <li></li>
                                            </ol>
                                        </div>
                                    </li>
                                </ul>
                            </div> */}
            <p className="mt-5">
              The future of DefiConnect is solely hinged on the success and
              growth of our community. With a large chunk of our projects
              already in the pipeline, we intend to become the face of the
              crypto community in Africa and help our members grow their wealth
              and enjoy seamless services on our platforms.
            </p>
            <a href="/future" className="button-3 mt-3 btn-warning">
              See vision Board
            </a>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="section-header mt-5">
              <h2 className="title">Secured By</h2>
            </div>
          </div>
          <div className="secured-display">
            <div className="row py-md-5 py-3">
              <div className="col-lg-3 col-md-1"></div>
              <div className="col-lg-3 col-md-5 col-6 mb-3 px-2">
                <div className="secured-box s-blue px-2">
                  <a
                    href="https://github.com/solidproof/smart-contract-audits/blob/main/SmartContract_Audit_Solidproof_DefiConnect.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={sp} alt="" className="img-fluid" />
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-md-5 col-6 mb-3 px-2">
                <div className="secured-box">
                  <a
                    href="https://leaderboard.certik.io/projects/defi-connect"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={certik} alt="" className="img-fluid" />
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-md-1"></div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="section-header">
              <h2 className="title">Partners &amp; Exchanges</h2>
            </div>
          </div>
          <div className="card">
            <div className="partners text-center">
              <div className="row p-4">
                <div className="col-lg-3 col-md-3 col-6 mb-3">
                  <div className="image-box">
                    <a
                      href="https://latoken.com/exchange/DFC_USDT"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img className="img-fluid" src={latoken} alt="roadmap" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-6 mb-3">
                  <div className="image-box">
                    <a
                      href="https://www.hotbit.io/exchange?symbol=DFC_USDT"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="img-fluid mb-2 "
                        src={hotbit}
                        alt="roadmap"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-6 mb-3">
                  <div className="image-box">
                    <a
                      href="https://www.bitmart.com/trade/en?layout=pro&amp;symbol=DFC_USDT"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="img-fluid mb-2 ml-2 "
                        src={bitmart}
                        alt="roadmap"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-6 mb-3">
                  <div className="image-box">
                    <a
                      href="https://www.bitrue.com/trade/dfc_usdt"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img className="img-fluid" src={bitrue} alt="roadmap" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-6 mb-3">
                  <div className="image-box">
                    <a
                      href="https://digitalcoinprice.com/blog/deficonnect-spikes-300-growth"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="img-fluid mb-2 ml-2 "
                        src={coinsbit}
                        alt="roadmap"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-6 mb-3">
                  <div className="image-box">
                    <a
                      href="https://www.coingecko.com/en/coins/deficonnect"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="img-fluid mb-2 ml-2 "
                        src={coingecko}
                        alt="roadmap"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-6 mb-3">
                  <div className="image-box">
                    <a
                      href="https://coinmarketcap.com/currencies/defi-connect/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="img-fluid mb-2 ml-2 "
                        src={coinmarketcap}
                        alt="roadmap"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="section-header">
              <h2 className="title">As Seen On</h2>
            </div>
          </div>
          <div className="card">
            <div className="seen-display">
              <div className="row p-4">
                <div className="col-lg-3 col-md-3 col-6 mb-3">
                  <div className="image-box">
                    <a
                      href="https://news.yahoo.com/news/defi-connect-warms-defipay-launch-154000063.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={yf} alt="" className="img-fluid" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-6 mb-3">
                  <div className="image-box">
                    <a
                      href="https://techpoint.africa/2021/09/14/defi-connect-launches-a-crypto-coin-you-can-spend-like-dollars/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={tp} alt="" className="img-fluid" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-6 mb-3">
                  <div className="image-box">
                    <a
                      href="https://www.marketwatch.com/press-release/defi-connect-warms-up-for-defipay-launch-for-more-convenient-payments-2021-09-27?tesla=y"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={mw} alt="" className="img-fluid" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-6 mb-3">
                  <div className="image-box">
                    <a
                      href="https://digitalcoinprice.com/blog/deficonnect-spikes-300-growth"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={deficonnectCoin} alt="" className="img-fluid" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-5">
        <div className="container">
          <div className="row">
            <div className="section-header">
              <div className="cate">
                <img src={cate} alt="cate" className="img-fluid" />
              </div>
              <h2 className="title">Frequently asked Questions</h2>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-10">
              <Faqs />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </section>
  );
};

export default Index;
