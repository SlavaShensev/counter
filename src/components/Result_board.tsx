import React from "react";
import '../App.css';
import Button from "./BattonCounter";

type ResultBoardPropsType = {
    value: number
    valueMax: number
    valueResult: number
    setValueResult: (valueResult: number) => void
    statusDisabled: boolean
    andValueClass: string  // ---???
}

const ResultBoard = ({
                         value,
                         setValueResult,
                         valueMax,
                         valueResult,
                         statusDisabled,
                         andValueClass
                     }: ResultBoardPropsType) => {
    const setValueHandler = () => {
        if (valueResult < valueMax) {
            setValueResult(value + 1)
        }
    }
    const clearValueHandler = () => {
        setValueResult(0)
        localStorage.clear()
    }
    return (
        <
            div
            className={'resultBoard'}>
            < div
                className={'resultBoardScreen' + ' ' + andValueClass}>
                {value}
            </div>
            <div className={'buttonsBoardScreen'}>
                <div className={'incButtonBoardScreen'}>
                    <Button value={'inc'}
                            callBack={setValueHandler}
                            statusDisabled={statusDisabled}
                    />
                </div>
                <div className={'resButtonBoardScreen'}>
                    <Button value={'reset'}
                            callBack={clearValueHandler}
                            statusDisabled={statusDisabled}
                    />
                </div>
            </div>
        </div>
    )
}

export default ResultBoard