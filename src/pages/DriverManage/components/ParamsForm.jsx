import React from 'react'
import {connect} from 'dva'
import { Form, Select } from 'antd'
import CitySelecter from './CitySelecter'
const { Option } = Select
@connect(({global})=>(
    {
        'OPEN_CITY':global.OPEN_CITY
    }
))
@Form.create()

class ParamsForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const { OPEN_CITY } = this.props
        // console.log('OPEN_CITY: ', OPEN_CITY);
        const { getFieldDecorator } = this.props.form

        return (
            <Form layout="inline">
                <Form.Item label="城市：">
                    {getFieldDecorator('adcode', {})(
                        <CitySelecter></CitySelecter>
                    )}
                </Form.Item>
                <Form.Item label="状态:">
                    {getFieldDecorator('state', {})(
                        <Select style={{width:120}}>
                            <Option value="1">1</Option>
                            <Option value="2">2</Option>
                            <Option value="3">3</Option>
                        </Select>
                    )}
                </Form.Item>
            </Form>
        )
    }
}
export default ParamsForm