import React, { PureComponent, Fragment } from "react";
import { connect } from "dva";
import { Table } from "antd";
import { Link } from "dva/router";
import CitySelecter from './CitySelecter'
import ParamsForm from './ParamsForm'
@connect(({ driverManage }) => ({
  list: driverManage.list,
  pageNum: driverManage.pageNum,
  pageSize: driverManage.pageSize,
  totalNum: driverManage.totalNum
}))
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
    const { dispatch, bizType } = this.props;
    dispatch({
      type: "driverManage/fetchDriverList",
      payload: { bizType }
    }).then(res => {
      this.setState({
        list: res.data.items,
        pageNum: res.data.pageNum,
        pageSize: res.data.pageSize,
        totalNum: res.data.totalNum
      });
    });
  }
  // 分页触发
  pageEvent(pageNum, pageSize) {
    const { dispatch, bizType } = this.props;
    dispatch({
      type: "driverManage/fetchDriverList",
      payload: { pageNum, pageSize, bizType }
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
        dataIndex: "adcode"
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
        dataIndex: "state"
      },
      {
        title: "分组",
        key: "groupName",
        dataIndex: "groupName"
      },
      {
        title: "家庭地址",
        key: "address",
        dataIndex: "address"
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
        <ParamsForm></ParamsForm>
        <Table
          rowKey={record => record.id}
          dataSource={list}
          columns={columns}
          pagination={{
            current: pageNum,
            total: totalNum,
            onChange: this.pageEvent.bind(this)
          }}
        />

      </Fragment>
    );
  }
}

export default DriverList;
