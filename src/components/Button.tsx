import React from 'react';

type ButtonType = {
    setCounter: () => void
    title: string
    disabled: boolean
}


function Button(props: ButtonType) {
    return <button onClick={() => {
        props.setCounter()
    }}
                   disabled={props.disabled}
    >{props.title}</button>
}

export default Button;