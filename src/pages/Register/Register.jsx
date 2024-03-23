import React, { useState } from 'react'
import { Input } from '../../common/Input/input'
// import { Button } from '../../common/Button/Button'
import './Register.css'
import { useNavigate } from "react-router-dom";

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
        // console.log(email);
        // console.log(password);
        console.log(bodyCredentials.password);
        console.log(bodyCredentials.email);

        console.log(bodyCredentials);

        const response = await fetch(
            'http://localhost:4000/api/auth/register',
            {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(bodyCredentials),
            }    
        )

        const userRegistered = await response.json()

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
        <div className='registerDesign'>
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
