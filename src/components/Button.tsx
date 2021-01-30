import React from 'react';

type ButtonType = {
    setCounter: () => void
    title: string
    disabled: boolean
}

const Button = ({setCounter, disabled, title}: ButtonType) => (
    <button
        onClick={setCounter}
        disabled={disabled}
    >{title}
    </button>
)


export default Button;