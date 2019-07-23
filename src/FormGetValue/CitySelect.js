import React from 'react'
import { observer } from 'mobx-react'
import { Select } from 'antd'

const { Option } = Select
const CitySelect = observer((props) => {

  return (
    <Select
      showSearch
      allowClear
      style={{ width: 200 }}
      placeholder="Select a city"
      optionFilterProp="children"
      filterOption={(input, option) =>
        option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
      {...props}
    >
      <Option value="SH">上海</Option>
      <Option value="BJ">北京</Option>
      <Option value="SZ">深圳</Option>
      <Option value="XIAN">西安</Option>
    </Select>
  )
})

export default CitySelect