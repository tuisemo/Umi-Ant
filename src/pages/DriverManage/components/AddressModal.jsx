import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Modal, Select, Form } from 'antd';
import debounce from 'lodash/debounce';
import CitySelecter from './CitySelecter';
import { getMapAddress } from '@/services/amap';

@connect(() => ({}))
@Form.create()
class AddressModal extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      addressList: [],
    };
    this.onSearch = debounce(this.onSearch, 800);
  }

  onOpen = () => {
    this.setState({
      visible: true,
    });
  };

  onSearch = val => {
    const { form } = this.props;
    const { getFieldValue } = form;
    const params = {
      city: getFieldValue('adcode'),
      keywords: val,
    };
    getMapAddress(params).then(res => {
      const { pois } = res;
      this.setState({
        addressList: pois || [],
      });
    });
  };

  onCancel = () => {
    this.setState({
      visible: false,
    });
  };

  onOk = () => {};

  render() {
    const { visible, addressList, form } = this.state;
    const { getFieldDecorator } = form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 18 },
      },
    };
    return (
      <div>
        <a onClick={this.onOpen}>设置家庭地址</a>
        <Modal title="设置家庭地址" visible={visible} onCancel={this.onCancel} onOk={this.onOk}>
          <Form {...formItemLayout}>
            <Form.Item label="所在城市">
              {getFieldDecorator('adcode', {})(<CitySelecter />)}
            </Form.Item>
            <Form.Item label="详细地址">
              {getFieldDecorator('address', {})(
                <Select onSearch={this.onSearch} showSearch>
                  {addressList.map(el => (
                    <Select.Option key={el.id} value={el.address}>
                      {el.address}
                    </Select.Option>
                  ))}
                </Select>
              )}
            </Form.Item>
          </Form>
        </Modal>
      </div>
    );
  }
}
export default AddressModal;
