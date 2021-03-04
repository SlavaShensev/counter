import React from "react";

type ButtonPropsType = {
    value: string
    callBack: () => void
}

const Button = (props: ButtonPropsType) => {
    return <button
        onClick={props.callBack}
    >
        {props.value}
    </button>
}

export default Button