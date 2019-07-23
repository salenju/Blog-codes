import React, { Component } from 'react'
import { Form, Input, Button } from 'antd'
import styled from 'styled-components'

import CitySelectClass from './CitySelectClass'
import StateSelectClass from './StateSelectClass'

const FormItem = Form.Item

class UserInfoFormClass extends Component {
  constructor(props) {
    super(props)
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('===>>>UserInfoForm-values:', values)
      }
    })
  }

  render() {
    const { getFieldDecorator, setFieldsValue } = this.props.form

    return (
      <FormContainer>
        <Form onSubmit={this.handleSubmit}>
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
              getFieldDecorator('state', {
                rules: [{ required: true, message: 'Please input your city!' }],
              })(
                // 第三方组件
                <StateSelectClass />
              )
            }
          </FormItem>
          <FormItem>
            {
              getFieldDecorator('city', {
                rules: [{ required: true, message: 'Please input your city!' }],
              })(
                // 第三方组件
                <CitySelectClass
                  callback={value => setFieldsValue({ city: value })}
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
  }
}

const FormContainer = styled('div')`
  width:300px;
  padding:20px;
  border:2px solid #d9d9d9;
  border-radius:4px;
  display:flex;
  justify-content:center;
`

export default Form.create()(UserInfoFormClass)