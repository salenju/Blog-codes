import React from 'react'
import { storiesOf } from '@storybook/react'
import '../node_modules/antd/dist/antd.css';

import Codes from '../src'

const {
  UserInfoForm,
  UserInfoFormClass,
  RowCrollDemo,
  RowCrollDemo01,
  RowCrollDemo02,
  RowCrollDemo03,
} = Codes

storiesOf('Codes', module)
  .add('UserInfoForm', () => <UserInfoForm />)
  .add('UserInfoFormClass', () => <UserInfoFormClass />)

storiesOf('RowCroll', module)
  .add('RowCroll-Hook', () => <RowCrollDemo height={200} speed={25} />)
  .add('RowCroll-Hook操作DOM', () => <RowCrollDemo01 height={200} speed={25} />)
  .add('RowCroll-class', () => <RowCrollDemo02 height={200} speed={25} />)
  .add('RowCroll-间歇滚动', () => <RowCrollDemo03 />)

