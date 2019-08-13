import React, { Component } from 'react';
import GetInterferance from './drawing_components/interferance/GetInterferance';
import GetSelf from './drawing_components/self/GetSelf';
import GetBalance from './drawing_components/balance/GetBalance';
// get posts from online api
// it's return a json file

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
//import "react-tabs/style/react-tabs.css";


class GetLocalArts extends Component {

  render() {
    let aosDelay = 50;
    return (
      <div className="draw-wrapper">
        <Tabs>
          <TabList>  
            <Tab data-aos="fade-left" data-aos-delay="100">main</Tab>
            <Tab data-aos="fade-left" data-aos-delay="150">self</Tab>
            <Tab data-aos="fade-left" data-aos-delay="200">interferance</Tab>
            <Tab data-aos="fade-left" data-aos-delay="200">balance</Tab>
          </TabList>
          <div className="tab-panel">
            <TabPanel>
              <h1>
                <span data-aos="fade-left" data-aos-delay="200">Explore⋅⋅</span>
                <span data-aos="fade-left" data-aos-delay="250">Compose⋅⋅</span>  
                <span data-aos="fade-left" data-aos-delay="300">Destroy⋅⋅</span>
              </h1>
            </TabPanel>
            <TabPanel>
              <GetSelf/>
            </TabPanel>
            <TabPanel>
              <GetInterferance/>
            </TabPanel>
            <TabPanel>
              <GetBalance/>
            </TabPanel>
          </div>
        </Tabs>
      </div>
    );
  }
}
  
export default GetLocalArts;