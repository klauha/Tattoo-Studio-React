
import React, { useState } from 'react'
import { Input } from '../../common/Input/input'
import "./Login.css"
import { login } from '../../services/apiCalls'
import { useNavigate } from 'react-router-dom'
import { decodeToken } from 'react-jwt'
import { Header } from '../../common/Header/Header'

export const Login = () => {

  const [bodyCredentials, setBodyCredentials] = useState(
    {
      email: "",
      password: ""
    }
  )

  const navigate = useNavigate()

  const LogMe = async () => {
    const responseApiLogin = await login(bodyCredentials)

    const decoded = decodeToken(responseApiLogin.token)

    console.log(decoded);

    if (responseApiLogin.success && decoded.roleName === "user") {
      localStorage.setItem("token", responseApiLogin.token)
      localStorage.setItem('name', decoded.username)
      localStorage.setItem('role', decoded.roleName)
      // navigate("/home")
      window.location.href = "/home";
    } else {
      localStorage.setItem("token", responseApiLogin.token)
      localStorage.setItem('name', decoded.username)
      localStorage.setItem('role', decoded.roleName)
      navigate("/admin/users")
      // window.location.href = "/admin/users";
    }
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
    <>
      <Header />

      <div className='loginDesign'>
        <div className="formLogin">
        <Input
          className="inputDesign"
          type="email"
          placeHolder="email"
          name="email"
          onChangeFunction={(e) => inputHandler(e)}
        />
        <Input
          className="inputDesign"
          type="password"
          placeHolder="password"
          name="password"
          onChangeFunction={(e) => inputHandler(e)}
        />

        <button onClick={LogMe}>Login</button>
        </div>
      </div>
    </>

  )
}
