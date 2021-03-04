import React from "react";
import Button from "./battonCounter";

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
                <div className={'incButtonBoardScreen'}>
                    <Button value={'inc'} callBack={setValueHandler}/>
                </div>

                <div className={'resButtonBoardScreen'}>
                    <Button value={'reset'} callBack={clearValueHandler}/>
                </div>

            </div>
        </div>
    )

}

export default ResultBoard