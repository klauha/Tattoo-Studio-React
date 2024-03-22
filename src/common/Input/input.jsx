import React from 'react'
import "./Input.css"

export const Input = ({type, placeHolder,name}) => {
    return (
        <>
            <input type={type} placeHolder={placeHolder} name={name}/>
        </>
    )
}
