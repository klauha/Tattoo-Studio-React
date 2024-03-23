import "./Button.css"

import React from 'react'

export const Button = ({className,title, functionEmit }) => {
    return (
        <div
            // className={className}
            onclick={functionEmit}
            title={title}
        >

        </div>
    )
}
