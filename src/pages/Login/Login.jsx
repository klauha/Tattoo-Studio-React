
import React, { useState } from 'react'
import { Input } from '../../common/Input/input'
import "./Login.css"
import { login } from '../../services/apiCalls'

export const Login = () => {

  const [bodyCredentials, setBodyCredentials] = useState(
    {
      email: "",
      password: ""
    }
  )

  const LogMe = async() => {
    const result = await login(bodyCredentials)
    console.log(result);
  }

const inputHandler = (e) => {
  setBodyCredentials((prevState) => (
    {
      ...prevState,
      [e.target.name]: e.target.value
    }
  ))

}
return (
  <div className='loginDesign'>
    <Input
      type="email"
      placeHolder="email"
      name="email"
      onChangeFunction={(e) => inputHandler(e)}
    />
    <Input
      type="password"
      placeHolder="password"
      name="password"
      onChangeFunction={(e) => inputHandler(e)}
    />


    <button onClick={LogMe}>Login</button>

  </div>
)
}
