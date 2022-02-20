import React from 'react'

import flame from '../../images/flame.png'
import dfcLogo from '../../images/dfcLogo.png'

const Footer = () => {
    return (
        <footer className="footer-section bg_img" data-background="/static/assets/images/footer/footer-bg.jpg">
            <div className="container">
                <div className="footer-top padding-top padding-bottom">
                    <div className="logo">
                        <a href="/#0">
                            <img src={dfcLogo} alt="logo" />
                        </a>
                    </div>
                    <ul className="social-icons">
                        <li>
                            <a href="https://t.me/deficonnect" target="_blank" rel="noopener noreferrer" className="active"><i className="fab fa-telegram"></i></a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/deficonnect" target="_blank" rel="noopener noreferrer" className="active"><i className="fab fa-facebook"></i></a>
                        </li>
                        <li>
                            <a href="https://www.reddit.com/user/deficonnect" target="_blank" rel="noopener noreferrer" className="active"><i className="fab fa-reddit"></i></a>
                        </li>
                        <li>
                            <a href="https://twitter.com/deficonnect" target="_blank" rel="noopener noreferrer" className="active"><i className="fab fa-twitter"></i></a>
                        </li>
                        <li>
                            <a href="https://deficonnect.medium.com/" target="_blank" rel="noopener noreferrer" className="active"><i className="fab fa-medium"></i></a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/channel/UCYq2MxoWOXfkFHGuAr1H7dQ" target="_blank" rel="noopener noreferrer" className="active"><i className="fab fa-youtube"></i></a>
                        </li>
                    </ul>
                    <div className="mt-3">
                        <p className="text-center">Email: info@deficonnect.tech</p>
                        <p className="text-center">Contract Address: 0x996c1bf72Ec220289ae0edd3a8d77080642121a2</p>
                        <div className="text-center">
                            <img src={flame} alt="Burned" style={{ marginBottom: -20 + 'px' }} className="img-fluid" />
                            <h5>108,000,000,000,000 (54%)</h5>
                            <p className="mt-1" style={{ color: '#ced4da!important' }}>Burned Tokens</p>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <ul className="footer-link">
                        <li>
                            <a href="/markets">Invest Now</a>
                        </li>
                        <li>
                            <a href="#2">FAQs</a>
                        </li>
                    </ul>
                </div>
                <div className="copyright">
                    <p>
                        Copyright © 2020.All Rights Reserved By <a href="/#0">DFC</a>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer