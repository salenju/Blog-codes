import React from 'react'
import {storiesOf} from '@storybook/react' 

import Codes from '../src'

const {UserInfoForm} = Codes

storiesOf('Codes',module)
  .add('UserInfoForm',() => <UserInfoForm />)