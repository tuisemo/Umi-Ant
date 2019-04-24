import React from 'react';
import { Tabs } from 'antd';
import DriverList from './components/DriverList';

const { TabPane } = Tabs;

const DriverManage = () => (
  <Tabs>
    <TabPane tab="快车" key="1">
      <DriverList bizType={300} />
    </TabPane>
    <TabPane tab="专车" key="2">
      <DriverList bizType={301} />
    </TabPane>
  </Tabs>
);
export default DriverManage;
