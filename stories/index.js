import React from 'react'
import {storiesOf} from '@storybook/react' 
import '../node_modules/antd/dist/antd.css';

import Codes from '../src'

const {UserInfoForm,UserInfoFormClass} = Codes

storiesOf('Codes',module)
  .add('UserInfoForm',() => <UserInfoForm />)
  .add('UserInfoFormClass',() => <UserInfoFormClass />)