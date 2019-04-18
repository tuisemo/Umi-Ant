import React from "react";
import { Tabs } from "antd";
import DriverList from "./components/DriverList";
const TabPane = Tabs.TabPane;

class DriverManage extends React.Component {
  render() {
    return (
      <Tabs>
        <TabPane tab="快车" key="1">
          <DriverList bizType={300} />
        </TabPane>
        <TabPane tab="专车" key="2">
          <DriverList bizType={301} />
        </TabPane>
        {/* <TabPane tab="出租车" key="3">
          <DriverList bizType={302} />
        </TabPane> */}
      </Tabs>
    );
  }
}
export default DriverManage;
