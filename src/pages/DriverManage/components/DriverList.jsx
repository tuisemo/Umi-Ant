import React, { PureComponent, Fragment } from "react";
import { connect } from "dva";
import { Table, Form, Select, Button, Input } from "antd";
import { Link } from "dva/router";
import CitySelecter from './CitySelecter'
import AddressModal from './AddressModal'
const { Option } = Select
@connect(({ global, driverManage }) => ({
  'OPEN_CITY': global.OPEN_CITY,
  list: driverManage.list,
  pageNum: driverManage.pageNum,
  pageSize: driverManage.pageSize,
  totalNum: driverManage.totalNum
}))

@Form.create()
class DriverList extends PureComponent {
  // 列表数据可组件内部消化
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      pageNum: 1,
      pageSize: 10,
      totalNum: 1
    };
  }
  componentDidMount() {
    this.tableDraw()
  }
  // 分页触发
  pageEvent = (pageNum, pageSize) => {
    const { getFieldsValue } = this.props.form
    const params = getFieldsValue()
    this.tableDraw(params, pageNum, pageSize)
  }
  // 表单查询
  handlerSearch = () => {
    const { getFieldsValue } = this.props.form
    const params = getFieldsValue()
    this.tableDraw(params)
  }
  // 列表数据请求及渲染
  tableDraw = (params = {}, pageNum = 1, pageSize = 10) => {
    const { dispatch, bizType } = this.props;
    dispatch({
      type: "driverManage/fetchDriverList",
      payload: { ...params, bizType, pageNum, pageSize }
    }).then(res => {
      this.setState({
        list: res.data.items,
        pageNum: res.data.pageNum,
        pageSize: res.data.pageSize,
        totalNum: res.data.totalNum
      });
    });
  }
  render() {
    const { OPEN_CITY } = this.props
    const { getFieldDecorator } = this.props.form
    const { list, pageNum, pageSize, totalNum } = this.state;
    const columns = [
      {
        title: "编号",
        key: "id",
        dataIndex: "id"
      },
      {
        title: "联系方式",
        key: "mobile",
        dataIndex: "mobile"
      },
      {
        title: "姓名",
        key: "name",
        dataIndex: "name"
      },
      {
        title: "车牌号",
        key: "plateNo",
        dataIndex: "plateNo"
      },
      {
        title: "所属城市",
        key: "adcode",
        render: (text, record) => {
          return OPEN_CITY[record.adcode]
        }
      },
      {
        title: "订单量",
        key: "orderCount",
        dataIndex: "orderCount"
      },
      {
        title: "营业总额",
        key: "operateAmount",
        dataIndex: "operateAmount"
      },
      {
        title: "账户余额",
        key: "balance",
        dataIndex: "balance"
      },
      {
        title: "账户状态",
        key: "state",
        render: (text, record) => {
          const STATE = {
            2: '未激活',
            3: '正常',
            4: '离职',
            10: '封号',
          }
          return STATE[record.state]
        }
      },
      {
        title: "分组",
        key: "groupName",
        dataIndex: "groupName"
      },
      {
        title: "家庭地址",
        key: "address",
        render: (text, record) => (
          record.address ? <span>{record.address.address}</span> : <AddressModal></AddressModal>
        )
      },
      {
        title: "操作",
        render: (text, record) => (
          <Fragment>
            <Link to={`/DriverDetail/${record.id}`}>详情</Link>
            <a>操作</a>
          </Fragment>
        )
      }
    ];
    return (
      <Fragment>
        <Form layout="inline">
          <Form.Item label="城市：">
            {getFieldDecorator('adcode', {})(
              <CitySelecter></CitySelecter>
            )}
          </Form.Item>
          <Form.Item label="状态:">
            {getFieldDecorator('state', {
              initialValue: null
            })(
              <Select style={{ width: 120 }} >
                <Option value={null}>全部</Option>
                <Option value={2}>未激活</Option>
                <Option value={3}>正常</Option>
                <Option value={4}>离职</Option>
                <Option value={10}>封号</Option>
              </Select>
            )}
          </Form.Item>
          <Form.Item label="司机姓名">
            {getFieldDecorator('name', {})(
              <Input allowClear placeholder="司机姓名"></Input >
            )}
          </Form.Item>
          <Form.Item label="手机号">
            {getFieldDecorator('mobile', {})(
              <Input allowClear placeholder="手机号"></Input >
            )}
          </Form.Item>
          <Form.Item label="车牌号">
            {getFieldDecorator('plateNo', {})(
              <Input allowClear placeholder="车牌号"></Input >
            )}
          </Form.Item>
          <Form.Item>
            <Button type="primary" onClick={this.handlerSearch}>搜索</Button>
          </Form.Item>
        </Form>
        <Table
          rowKey={record => record.id}
          dataSource={list}
          columns={columns}
          pagination={{
            current: pageNum,
            total: totalNum,
            onChange: this.pageEvent
          }}
        />

      </Fragment>
    );
  }
}

export default DriverList;
