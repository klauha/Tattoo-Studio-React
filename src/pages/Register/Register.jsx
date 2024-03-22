import React from 'react'
import "./Register.css"
import { Input } from '../../common/Input/input'


export const Register = () => {
  return (
    <div className='registerDessign'>
        <Input type="email" placeHolder="email" name="email" />
        <Input type="pasword" placeHolder="password" name="password" />
      
    </div>
  )
}
