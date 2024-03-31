import React, { useState } from 'react'
import { Input } from '../../common/Input/input'
// import { Button } from '../../common/Button/Button'
import './Register.css'
import { useNavigate } from "react-router-dom";
import { register } from '../../services/apiCalls';
import { Header } from '../../common/Header/Header';

export const Register = () => {
    // const [email, setEmail] = useState("")
    // const [password, setPassword] = useState("")

    const [bodyCredentials, setBodyCredentials] = useState(
        {
            email: "",
            password: ""
        }
    )

    const navigate = useNavigate();

    const registerMe = async() => {
        const userRegistered = await register(bodyCredentials)
       
        if(userRegistered.success) {
            navigate('/login')
        }
    }

    const inputHandler = (e) => {
        // if (e.target.name === "email") {
        //     setEmail(e.target.value)
        // }
        // if (e.target.name === "password") {
        //     setPassword(e.target.value)
        // }

        setBodyCredentials( (prevState) => (
            {
                ...prevState,
                [e.target.name]: e.target.value,
            }
        ))
    }
    return (
        <>
        <Header />
        <div className='registerDesign'>
            <Input
                className= "inputDesign"
                type="email"
                placeHolder="email"
                name="email"
                onChangeFunction={(e) => inputHandler(e)}
            />
            <Input
                className= "inputDesign"
                type="password"
                placeHolder="password"
                name="password"
                onChangeFunction={(e) => inputHandler(e)}
            />


            <button onClick={registerMe}>Registrar</button>
        </div>
        </>
    )
}
