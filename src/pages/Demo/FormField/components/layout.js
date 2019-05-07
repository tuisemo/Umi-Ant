import React from 'react';
import { Row, Col } from 'antd';

const Layout = props => {
  const { children } = props;
  return (
    <Row>
      <Col span={10}>{children}</Col>
    </Row>
  );
};
export default Layout;
