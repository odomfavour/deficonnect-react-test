import React from 'react'
import logistics from '../../images/logistics.jpg'
import dfcTipper from '../../images/dfctipper.jpg'
import defipay from '../../images/defipay.jpg'
import dehim from '../../images/dehim.jpg'
import tokenFarm from '../../images/tokenfarm.jpg'
import dfcCoin from '../../images/dfccoin.jpg'
import dfcLaunchpad from '../../images/dfc-launchpad.jpg'
import whitepaper from '../../images/assets/whitePaperNew.pdf'

// Import Swiper React components
import { Autoplay, Navigation, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css'; // core Swiper
// import 'swiper/modules/autoplay/autoplay.min.css'; // core Swiper
const Products = () => {
    return (
        <div className="product-slider">
            <div className="container">
                <Swiper
                    modules={[Autoplay, Navigation]}
                    spaceBetween={15}
                    slidesPerView={3}
                    navigation
                    autoplay
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>
                    <a href={whitepaper} target="_blank" rel="noreferrer">
                        <div className="text-center">
                            <img src={dfcCoin} alt="wolf and man" className="img-fluid" />
                        </div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                    <a href={whitepaper} target="_blank" rel="noreferrer">
                        <div className="text-center">
                            <img src={tokenFarm} alt="wolf and man" className="img-fluid" />
                        </div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                    <a href={whitepaper} target="_blank" rel="noreferrer">
                        <div className="text-center">
                            <img src={dfcLaunchpad} alt="wolf and man" className="img-fluid" />
                        </div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                    <a href={whitepaper} target="_blank" rel="noreferrer">
                        <div className="text-center">
                            <img src={dehim} alt="wolf and man" className="img-fluid" />
                        </div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                    <a href={whitepaper} target="_blank" rel="noreferrer">
                        <div className="text-center">
                            <img src={defipay} alt="wolf and man" className="img-fluid" />
                        </div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                    <a href={whitepaper} target="_blank" rel="noreferrer">
                        <div className="text-center">
                            <img src={logistics} alt="wolf and man" className="img-fluid" />
                        </div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="text-center">
                            <img src={dfcTipper} alt="wolf and man" className="img-fluid" />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

        </div>
    )
}

export default Products