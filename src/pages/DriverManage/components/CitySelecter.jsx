import React, { PureComponent } from "react"
import { Select } from 'antd'
const { Option } = Select


class CitySelecter extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    handleChange = (val) => {
        console.log('val: ', val)
    };
    render() {
        return (
            <Select defaultValue="lucy" style={{ width: 120 }} onChange={this.handleChange}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="disabled" disabled>Disabled</Option>
                <Option value="Yiminghe">yiminghe</Option>
            </Select>
        )
    }
}
export default CitySelecter