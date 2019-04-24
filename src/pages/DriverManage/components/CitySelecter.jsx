import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Select } from 'antd';

const { Option } = Select;

@connect(({ global }) => ({
  OPEN_CITY: global.OPEN_CITY,
}))
class CitySelecter extends PureComponent {
  constructor(props) {
    super(props);
    const value = props.value || {};
    this.state = {
      adcode: value.adcode,
    };
  }

  handleChange = val => {
    const { onChange } = this.props;
    this.setState({
      adcode: val,
    });
    onChange(val);
  };

  render() {
    const { OPEN_CITY } = this.props;
    const { adcode } = this.state;
    return (
      <Select defaultValue={adcode} style={{ width: 120 }} onChange={this.handleChange}>
        <Option value={null}>全部</Option>
        {Object.keys(OPEN_CITY).map(el => (
          <Option value={el} key={el}>
            {OPEN_CITY[el]}
          </Option>
        ))}
      </Select>
    );
  }
}
export default CitySelecter;
