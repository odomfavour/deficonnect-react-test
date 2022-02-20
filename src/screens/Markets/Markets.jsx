import React from 'react'
import HomeHeader from '../../components/HomeHeader/HomeHeader'
import computer from '../../images/banner-7.png'
import ps from '../../images/markets/ps.jpg'
import hotbit from '../../images/markets/hotbit.png'
import coinsbit from '../../images/markets/coinsbit.png'
import bmLogo from '../../images/markets/bmlogo.png'
import latoken from '../../images/markets/lt.png'


import topShape from '../../images/top-shape.png'
import bottomShape from '../../images/bottom-shape.png'

import './market.css'
import Footer from '../../components/Footer/Footer'

const Markets = () => {
    return (
        <section className="main-container">
            <HomeHeader />
            <section className="banner-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 col-12">
                            <div className="content">
                                <h1 className='dfc-welcome-title mt-md-5 mt-0'> DEFICONNECT</h1>
                                <p>List of exchanges that currently have deficonnect listed.</p>
                                <div class="table-responsive">
                                    <table class="table table-dark table-striped">
                                        <thead>
                                            <tr>
                                                <td></td>
                                                <td>Name</td>
                                                <td>Trading pair</td>
                                                <td>Listed</td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className='img-box'><img src={latoken} alt="Latoken" /></td>
                                                <td><a href="https://latoken.com/exchange/DFC_USDT" target="_blank" rel="noopener noreferrer">Latoken</a></td>
                                                <td>DFC/USDT</td>
                                                <td>15/08/2021</td>
                                            </tr>
                                            <tr>
                                                <td className='img-box'><img src={ps} alt="Pancakeswap" /></td>
                                                <td><a href="https://pancakeswap.finance/swap#/swap?outputCurrency=0x996c1bf72Ec220289ae0edd3a8d77080642121a2" target="_blank" rel="noopener noreferrer">Pancakeswap</a></td>
                                                <td>DFC/BNB</td>
                                                <td>15/08/2021</td>
                                            </tr>
                                            <tr>
                                                <td className='img-box'><img src={hotbit} alt="Hotbit" /></td>
                                                <td><a href="https://www.hotbit.io/exchange?symbol=DFC_USDT" target="_blank" rel="noopener noreferrer">Hotbit</a></td>
                                                <td>DFC/USDT</td>
                                                <td>29/09/2021</td>
                                            </tr>
                                            <tr>
                                                <td className='img-box'><img src={coinsbit} alt="Coinsbit" /></td>
                                                <td><a href="https://coinsbit.io/trade/DFC_mUSDT" target="_blank" rel="noopener noreferrer">Coinsbit</a></td>
                                                <td>DFC/USDT</td>
                                                <td>29/09/2021</td>
                                            </tr>
                                            <tr>
                                                <td className='img-box'><img src={bmLogo} alt="bitmart" /></td>
                                                <td><a href="https://coinsbit.io/trade/DFC_mUSDT" target="_blank" rel="noopener noreferrer">Bitmart</a></td>
                                                <td>DFC/USDT</td>
                                                <td>22/10/2021</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 d-none d-md-block">
                            <img src={computer} alt="computer" className='' />
                        </div>
                    </div>
                </div>
            </section>
            <section className="featured-exchange">
            <div className="top-shape d-none d-md-block">
                    <img src={topShape} alt="css" className='img-fluid' />
                </div>
                <div className="bottom-shape d-none d-md-block">
                    <img src={bottomShape} alt="css" className='img-fluid' />
                </div>
                <div class="container">
                    <div class="row">
                        <div class="featured mt-5 mb-5">
                            <h3 >Featured Exchange</h3>
                            <h2 class="mb-3">Latoken</h2>
                            <p>LATOKEN is a rapidly growing crypto exchange platform which provides real-time trading services including Bitcoin
                                (BTC), Ethereum (ETH) and Tether (USDT) trading. DFC can easily be bought and sold on LATOKEN using USDT.</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </section>
    )
}

export default Markets