import React from "react";
import { Form, Icon, Input, Button, Checkbox, Row, Col } from "antd";
import { connect } from 'dva';
import styles from "./Login.less";

@connect()
class NormalLoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    const self=this
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        self.loginRequest(values)
      }
    });
  };
  loginRequest=(values)=>{
    console.log('values: ', values);
    const { dispatch } = this.props;
    dispatch({type:'users/Login',payload:values})
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className={styles["login-form"]}>
        <Form.Item>
          <h1 className={styles["login-title"]}>Ant Design</h1>
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("userAccount", {
            rules: [{ required: true, message: "Please input your userAccount!" }]
          })(
            <Input
              size="large"
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="userAccount"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "Please input your Password!" }]
          })(
            <Input
              size="large"
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="Password"
            />
          )}
        </Form.Item>
        <Form.Item>
          <Row gutter={8}>
            <Col span={16}>
              {getFieldDecorator("captcha", {
                rules: [
                  { required: true, message: "Please input your captcha!" }
                ]
              })(
                <Input
                  size="large"
                  prefix={
                    <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="captcha"
                />
              )}
            </Col>
            <Col span={8}>
            <Button size="large" className={styles['login-form-button']}>获取验证码</Button>
            </Col>
          </Row>
        </Form.Item>
        <Form.Item>
          <Button
            size="large"
            type="primary"
            htmlType="submit"
            className={styles["login-form-button"]}
          >
            Log in
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default Form.create()(NormalLoginForm);
