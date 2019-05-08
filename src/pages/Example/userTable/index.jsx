import React, { PureComponent, Fragment } from 'react';
import { Form, Table, Input, Button } from 'antd';

class UserTable extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  render() {
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Age',
        dataIndex: 'Age',
        key: 'Age',
      },
      {
        title: 'Nickname',
        dataIndex: 'Nickname',
        key: 'Nickname',
      },
      {
        title: 'Telphone',
        dataIndex: 'Telphone',
        key: 'Telphone',
      },
      {
        title: 'E-mail',
        dataIndex: 'E-mail',
        key: 'E-mail',
      },
      {
        title: 'Tag',
        dataIndex: 'Tag',
        key: 'Tag',
      },
    ];
    const { data } = this.state;
    return (
      <Fragment>
        <Form>
          <Form.Item>
            <Input />
          </Form.Item>
          <Form.Item>
            <Button />
          </Form.Item>
        </Form>
        <Table dataSource={data} columns={columns} />
      </Fragment>
    );
  }
}
export default UserTable;
