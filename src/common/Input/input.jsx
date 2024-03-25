import React from 'react'
import "./Input.css"

export const Input = ({ type, placeHolder, name,value, onChangeFunction }) => {
    return (
        <>
            <input className='inputDesign'
                type={type}
                placeholder={placeHolder}
                name={name}
                value={value}
                onChange={onChangeFunction}
            />
        </>
    )
}
