import React, { useState } from 'react'
import { Input } from '../../common/Input/input'
// import { Button } from '../../common/Button/Button'
import './Register.css'

export const Register = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [first_name, setfirst_Name] = useState("")
    const [last_name, setlast_Name] = useState("")


    const registerMe = () => {
        console.log(first_name);
        console.log(last_name);
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

        if (e.target.name === "first_name") {
            setfirst_Name(e.target.value)
        }
        if (e.target.name === "last_name") {
            setlast_Name(e.target.value)
        }
    }
    return (
        <div className='registerDesign'>
            <Input
                type="text"
                placeHolder="Nombre"
                name="last_name"
                onChangeFunction={(e) => inputHandler(e)}
            />
            <Input
                type="text"
                placeHolder="Apellidos"
                name="first_name"
                onChangeFunction={(e) => inputHandler(e)}
            />
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


            <button onClick={registerMe}>Registrar</button>
        </div>
    )
}
