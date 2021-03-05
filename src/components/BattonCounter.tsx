import React from "react";

type ButtonPropsType = {
    value: string
    statusDisabled: boolean
    callBack: () => void
}

const Button = ({callBack, value, statusDisabled}: ButtonPropsType) => {
    return <button
        onClick={callBack}
        disabled={statusDisabled}
    >
        {value}
    </button>
}

export default Button