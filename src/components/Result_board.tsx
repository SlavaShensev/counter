import React from "react";
import '../App.css';
import Button from "./BattonCounter";

type ResultBoardPropsType = {
    value: number
    valueMax: number
    valueStart: number
    valueResult: number
    setValueResult: (valueResult: number) => void
    incButtonDisabled: () => boolean
    resButtonDisabled: () => boolean
}

const ResultBoard = ({
                         value,
                         setValueResult,
                         valueMax,
                         valueStart,
                         valueResult,
                         incButtonDisabled,
                         resButtonDisabled,
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

    const valueHandler = () => {
        if ((valueMax < valueStart) || ((valueMax || valueStart) < 0)) {
            return <div className={'redTextError'}>
                incorrect value
            </div>
        }
        return value
    }

    return (
        <
            div
            className={'resultBoard'}>
            <div
                className={'resultBoardScreen'}>
                {valueHandler()}
            </div>
            <div className={'buttonsBoardScreen'}>
                <div className={'incButtonBoardScreen'}>
                    <Button value={'inc'}
                            callBack={setValueHandler}
                            statusDisabled={incButtonDisabled}
                    />
                </div>
                <div className={'resButtonBoardScreen'}>
                    <Button value={'reset'}
                            callBack={clearValueHandler}
                            statusDisabled={resButtonDisabled}
                    />
                </div>
            </div>
        </div>
    )
}

export default ResultBoard