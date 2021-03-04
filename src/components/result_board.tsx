import React from "react";
import Button from "./battonCounter";
import '../App.css';

type ResultBoardPropsType = {
    value: number
    setValueResult: (valueResult: number)=> void
}

const ResultBoard = ({
                         value, setValueResult
                     }: ResultBoardPropsType) => {
    const setValueHandler = () => {
        setValueResult(value + 1)
    }
    const clearValueHandler = () => {
        setValueResult(0)
        localStorage.clear()
    }
    return (
        <div className={'resultBoard'}>
            <div className={'resultBoardScreen'}>
                {value}
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