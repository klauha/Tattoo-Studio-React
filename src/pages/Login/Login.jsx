
import React, { useState } from 'react'
import { Input } from '../../common/Input/input'
import "./Login.css"

export const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const LogMe = () => {
    console.log(email);
    console.log(password);
  }

  const inputHandler = (e) => {
    if (e.target.name === "email") {
        setEmail(e.target.value)
    }
    if (e.target.name === "password") {
        setPassword(e.target.value)
    }

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
