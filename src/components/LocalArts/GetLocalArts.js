import React, { Component } from 'react';
import GetInterferance from './drawing_components/interferance/GetInterferance';
import GetSelf from './drawing_components/self/GetSelf';
// get posts from online api
// it's return a json file

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
//import "react-tabs/style/react-tabs.css";


class GetLocalArts extends Component {

  render() {

    return (
      <div className="draw-wrapper">
        <Tabs>
          <TabList>  
            <Tab>main</Tab>
            <Tab>self</Tab>
            <Tab>interferance</Tab>
          </TabList>
          <div class="tab-panel">
            <TabPanel>
              <h1>
                <span>Explore⋅⋅</span>
                <span>Compose⋅⋅</span>  
                <span>Destroy⋅⋅</span>
              </h1>
            </TabPanel>
            <TabPanel><GetSelf/></TabPanel>
            <TabPanel><GetInterferance/></TabPanel>
          </div>
        </Tabs>
      </div>
    );
  }
}
  
export default GetLocalArts;