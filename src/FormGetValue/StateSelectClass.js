import React, { Component } from 'react'
import { Select } from 'antd'

const { Option } = Select

class StateSelectClass extends Component {

  constructor(props) {
    super(props)
  }

  handleSelect = (value) => {
    const { onChange } = this.props
    onChange(value)
  }

  render() {
    return (
      <Select
        showSearch
        allowClear
        style={{ width: 200 }}
        placeholder="Select a state"
        optionFilterProp="children"
        filterOption={(input, option) =>
          option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
        onSelect={value => this.handleSelect(value)}
      >
        <Option value="GZ">广州</Option>
        <Option value="SC">四川</Option>
        <Option value="YN">云南</Option>
        <Option value="SHANXI">陕西</Option>
      </Select>
    )
  }
}

export default StateSelectClass