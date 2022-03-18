import React from "react";
import HomeHeader from "../../components/HomeHeader/HomeHeader";
import "./defifarm.css";
import Footer from "../../components/Footer/Footer";
import FarmCard from './FarmCard'
import {data} from './FarmData'
import { Tabs, Tab } from "react-bootstrap";

const Defifarm = () => {
  return (
    <section className="main-container">
      <HomeHeader />
      <section className="banner-bg" style={{paddingTop: 160}}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3 col-12">
              <div className="content">
              <Tabs defaultActiveKey="yield" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="yield" title="Yield Farming">
                <div className="row">
                {data.filter(d=>d.type===1).map(d => <FarmCard farmData={d} key={d.pool}></FarmCard>)}
                </div>
                </Tab>
                <Tab eventKey="staking" title="Staking">
                <div className="row">
                  {data.filter(d=>d.type===0).map(d => <FarmCard farmData={d} key={d.pool}></FarmCard>)}
                </div>
                </Tab>
              </Tabs>
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
