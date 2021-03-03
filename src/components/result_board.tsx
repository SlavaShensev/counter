import React from "react";

type ResultBoardPropsType = {
    value: number
    setValue: (n: number) => void
}

const ResultBoard = (props: ResultBoardPropsType) => {
    const setValue = props.setValue
    const value = props.value
    const setValueHandler = () => {
        setValue(value + 1)
    }
    const clearValueHandler = () => {
        setValue(0)
        localStorage.clear()
    }
    return (
        <div className={'resultBoard'}>
            <div className={'resultBoardScreen'}>
                {props.value}
            </div>
            <div className={'buttonsBoardScreen'}>
                <button className={'incButtonBoardScreen'}
                        onClick={setValueHandler}
                >
                    inc
                </button>
                <button className={'resButtonBoardScreen'}
                        onClick={clearValueHandler}
                >
                    reset
                </button>
            </div>
        </div>
    )

}

export default ResultBoard