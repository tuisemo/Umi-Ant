import React from 'react'
import { connect } from 'dva'
import { Form, Select, Button } from 'antd'
import CitySelecter from './CitySelecter'
const { Option } = Select
@connect(({ global }) => (
    {
        'OPEN_CITY': global.OPEN_CITY
    }
))
@Form.create()

class ParamsForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    handlerSearch = () => {
        const { callbackFun } = this.props
        const { getFieldsValue } = this.props.form
        const params = getFieldsValue()
        callbackFun(params)

    }
    render() {
        const { OPEN_CITY } = this.props
        const { getFieldDecorator } = this.props.form

        return (
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
                <Form.Item>
                    <Button type="primary" onClick={this.handlerSearch}>搜索</Button>
                </Form.Item>
            </Form>
        )
    }
}
export default ParamsForm