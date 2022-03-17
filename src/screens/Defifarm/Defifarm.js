import React from "react";
import HomeHeader from "../../components/HomeHeader/HomeHeader";
import "./defifarm.css";
import Footer from "../../components/Footer/Footer";
import FarmCard from './FarmCard'
import {data} from './FarmData'

const Defifarm = () => {
  return (
    <section className="main-container">
      <HomeHeader />
      <section className="banner-bg" style={{paddingTop: 160}}>
        <div className="container">
          <div className="row">
            <div className="col-md-10 offset-md-1 col-12">
              <div className="content">
                <h1 className="dfc-welcome-title mt-md-5 mt-0"> DEFIFARM</h1>
                <div className="row">

                  {data.map(d => <FarmCard farmData={d} key={d.pool}></FarmCard>)}

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

export default Defifarm;
