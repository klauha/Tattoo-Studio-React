import React from 'react'
import "./Input.css"

export const Input = ({className, type, placeHolder, name,value, onChangeFunction }) => {
    return (
        <>
            <input 
                className={className}
                type={type}
                placeholder={placeHolder}
                name={name}
                value={value}
                onChange={onChangeFunction}
            />
        </>
    )
}
{/* <input className='inputDesign inputProfileDessign' */}