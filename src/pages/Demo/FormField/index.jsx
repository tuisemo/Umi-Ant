import React, { PureComponent } from 'react';
import { Form, Input, Button } from 'antd';
import Layout from './components/layout';

@Form.create()
class FormField extends PureComponent {
  comparePassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  };

  handlerSubmit = e => {
    const { form } = this.props;
    const { getFieldsValue } = form;
    const formData = getFieldsValue();
    console.log('formData: ', formData);
    console.log('e: ', e);
  };

  render() {
    const { form } = this.props;
    const { getFieldDecorator } = form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 16 },
    };
    const formButtonLayout = {
      wrapperCol: { span: 16, offset: 6 },
    };
    return (
      <Layout>
        <Form>
          <Form.Item {...formItemLayout} label="E-mail">
            {getFieldDecorator('email', {
              rules: [{ required: true, message: 'Please input your E-mail' }],
            })(<Input />)}
          </Form.Item>
          <Form.Item {...formItemLayout} label="Password">
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password' }],
            })(<Input type="password" />)}
          </Form.Item>
          <Form.Item {...formItemLayout} label="Confirm Password">
            {getFieldDecorator('confirmPassword', {
              rules: [{ required: true, message: 'Please input your Confirm Password' }],
            })(<Input type="password" />)}
          </Form.Item>
          <Form.Item {...formItemLayout} label="Nickname">
            {getFieldDecorator('nickname', {
              rules: [{ required: true, message: 'Please input your Nickname' }],
            })(<Input />)}
          </Form.Item>
          <Form.Item {...formButtonLayout} label="">
            <Button type="primary" onClick={this.handlerSubmit}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Layout>
    );
  }
}
export default FormField;
