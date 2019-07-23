import React from 'react'
import {storiesOf} from '@storybook/react' 
import '../node_modules/antd/dist/antd.css';

import Codes from '../src'

const {UserInfoForm} = Codes

storiesOf('Codes',module)
  .add('UserInfoForm',() => <UserInfoForm />)