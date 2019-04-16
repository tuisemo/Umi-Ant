import React, { PureComponent } from "react"
import { connect } from 'dva'
import { Select } from 'antd'
const { Option } = Select

@connect(({ global }) => (
    {
        'OPEN_CITY': global.OPEN_CITY
    }
))
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
        const { OPEN_CITY } = this.props
        console.log('OPEN_CITY: ', OPEN_CITY);
        return (
            <Select style={{ width: 120 }} onChange={this.handleChange}>
                {
                    Object.keys(OPEN_CITY).map(el => {
                        return <Option value={el} key={el}>{OPEN_CITY[el]}</Option>
                    })
                }
            </Select>
        )
    }
}
export default CitySelecter