import React, { PureComponent, useState } from 'react';
import { connect } from 'dva';
import { Form, Input, Button, Select, DatePicker } from 'antd';
import Layout from './components/layout';

@connect()
@Form.create()
class FormField extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      params: {
        email: 'tuisemo@sina.cn',
        nickname: 'faded_inks',
      },
    };
  }

  comparePassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  };

  changeParams = () => {
    this.setState({
      params: {
        email: 'mochacha@sina.cn',
        nickname: 'alone',
      },
    });
    const { form } = this.props;
    const { getFieldsValue } = form;
    const formData = getFieldsValue();
    console.log('formData: ', formData);
  };

  handlerSubmit = e => {
    const { form, dispatch } = this.props;
    const { getFieldsValue } = form;
    const formData = getFieldsValue();
    console.log('formData: ', formData);
    dispatch({ type: 'demo/addUser', payload: formData });
  };

  render() {
    const { form } = this.props;
    const { getFieldDecorator } = form;
    const { params } = this.state;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 16 },
    };
    const formButtonLayout = {
      wrapperCol: { span: 16, offset: 6 },
    };

    const selectBefore = (
      <Select defaultValue="Http://">
        <Select.Option value="Http://">Http://</Select.Option>
        <Select.Option value="Https://">Https://</Select.Option>
      </Select>
    );

    return (
      <Layout>
        <Form>
          <Form.Item {...formItemLayout} label="Nickname">
            {getFieldDecorator('nickname', {
              initialValue: params.nickname,
              rules: [{ required: true, message: 'Please input your Nickname' }],
            })(<Input allowClear />)}
          </Form.Item>
          <Form.Item {...formItemLayout} label="E-mail">
            {getFieldDecorator('email', {
              initialValue: params.email,
              rules: [{ required: true, message: 'Please input your E-mail' }],
            })(<Input allowClear />)}
          </Form.Item>
          <Form.Item {...formItemLayout} label="Password">
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password' }],
            })(<Input type="password" allowClear />)}
          </Form.Item>
          <Form.Item {...formItemLayout} label="Confirm Password">
            {getFieldDecorator('confirmPassword', {
              rules: [{ required: true, message: 'Please input your Confirm Password' }],
            })(<Input type="password" allowClear />)}
          </Form.Item>
          <Form.Item {...formItemLayout} label="Birthday">
            {getFieldDecorator('birthday', {
              // rules: [{ required: true, message: 'Please input your Birthday' }],
            })(<DatePicker />)}
          </Form.Item>
          <Form.Item {...formItemLayout} label="BlogAddress">
            {getFieldDecorator('blogAddress', {
              // rules: [{ required: true, message: 'Please input your BlogAddress' }],
            })(<Input addonBefore={selectBefore} allowClear />)}
          </Form.Item>
          <Form.Item {...formButtonLayout} label="">
            <Button block type="primary" onClick={this.handlerSubmit}>
              Submit
            </Button>
            <Button block onClick={this.changeParams}>
              changeParams
            </Button>
          </Form.Item>
        </Form>
      </Layout>
    );
  }
}
export default FormField;

/**
 * 以下为react hooks组件写法
 */
// function FormField(props) {
//   const [params, setParams] = useState({
//     email: 'tuisemo@sina.cn',
//     nickname: 'faded_inks',
//   });

//   function comparePassword(rule, value, callback) {
//     const { form } = props;
//     if (value && value !== form.getFieldValue('password')) {
//       callback('Two passwords that you enter is inconsistent!');
//     } else {
//       callback();
//     }
//   }

//   const changeParams = () => {
//     setParams({
//       email: 'mochacha@sina.cn',
//       nickname: 'alone',
//     });
//     const { form } = props;
//     const { getFieldsValue } = form;
//     const formData = getFieldsValue();
//     console.log('formData: ', formData);
//   };

//   const handlerSubmit = e => {
//     const { form } = props;
//     const { getFieldsValue } = form;
//     const formData = getFieldsValue();
//     console.log('formData: ', formData);
//     console.log('e: ', e);
//   };

//   const { form } = props;
//   const { getFieldDecorator } = form;
//   const formItemLayout = {
//     labelCol: { span: 6 },
//     wrapperCol: { span: 16 },
//   };
//   const formButtonLayout = {
//     wrapperCol: { span: 16, offset: 6 },
//   };
//   const selectBefore = (
//     <Select defaultValue="Http://">
//       <Select.Option value="Http://">Http://</Select.Option>
//       <Select.Option value="Https://">Https://</Select.Option>
//     </Select>
//   );
//   return (
//     <Layout>
//       <Form>
//         <Form.Item {...formItemLayout} label="E-mail">
//           {getFieldDecorator('email', {
//             initialValue: params.email,
//             rules: [{ required: true, message: 'Please input your E-mail' }],
//           })(<Input />)}
//         </Form.Item>
//         <Form.Item {...formItemLayout} label="Password">
//           {getFieldDecorator('password', {
//             rules: [{ required: true, message: 'Please input your Password' }],
//           })(<Input type="password" />)}
//         </Form.Item>
//         <Form.Item {...formItemLayout} label="Confirm Password">
//           {getFieldDecorator('confirmPassword', {
//             rules: [{ required: true, message: 'Please input your Confirm Password' }],
//           })(<Input type="password" />)}
//         </Form.Item>
//         <Form.Item {...formItemLayout} label="Nickname">
//           {getFieldDecorator('nickname', {
//             initialValue: params.nickname,
//             rules: [{ required: true, message: 'Please input your Nickname' }],
//           })(<Input />)}
//         </Form.Item>
//         <Form.Item {...formItemLayout} label="BlogAddress">
//           {getFieldDecorator('blogAddress', {
//             rules: [{ required: true, message: 'Please input your BlogAddress' }],
//           })(<Input addonBefore={selectBefore} />)}
//         </Form.Item>
//         <Form.Item {...formButtonLayout} label="">
//           <Button type="primary" onClick={handlerSubmit}>
//             Submit
//           </Button>
//           <Button type="primary" onClick={changeParams}>
//             changeParams
//           </Button>
//         </Form.Item>
//       </Form>
//     </Layout>
//   );
// }
// export default Form.create()(FormField);
