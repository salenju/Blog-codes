import React from 'react'
import { observer } from 'mobx-react'
import { Form, Input, Button } from 'antd'
import styled from 'styled-components'

import CitySelect from './CitySelect'

const FormItem = Form.Item

const UserInfoForm = Form.create()(observer(props => {
  const { validateFieldsAndScroll, getFieldDecorator } = props.form
  const handleSubmit = (e) => {
    e.preventDefault()
    validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('===>>>UserInfoForm-values:', values)
      }
    })
  }
  return (
    <FormContainer>
    <Form onSubmit={handleSubmit}>
      <FormItem>
        {getFieldDecorator('username', {
          rules: [{ required: true, message: 'Please input your username!' }],
        })(
          <Input
            placeholder="Username"
          />
        )}
      </FormItem>
      <FormItem>
        {
          getFieldDecorator('city', {
            rules: [{ required: true, message: 'Please input your city!' }],
          })(
            // 第三方组件
            <CitySelect
              onSelect={value => props.form.setFieldsValue({city: value})}
            />
          )
        }
      </FormItem>
      <FormItem>
        <Button type='primary' htmlType='submit'>提交</Button>
      </FormItem>
    </Form>
    </FormContainer>
  )
})
)

const FormContainer = styled('div')`
  width:300px;
  padding:20px;
  border:2px solid #d9d9d9;
  border-radius:4px;
  display:flex;
  justify-content:center;
`

export default UserInfoForm