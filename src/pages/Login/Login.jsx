
import React, { useState } from 'react'
import { Input } from '../../common/Input/input'
import "./Login.css"

export const Login = () => {

  const [bodyCredentials, setBodyCredentials] = useState(
    {
      email: "",
      password: ""
    }
  )

  const LogMe = async() => {
    const response = await fetch(
      'http://localhost:4000/api/auth/login',
      {
        method: "Post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bodyCredentials),
      }
   )
   const loggedUser = await response.json
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
