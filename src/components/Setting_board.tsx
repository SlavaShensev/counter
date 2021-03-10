import React from "react";
import {ChangeEvent} from "react";
import '../App.css';
import Button from "./BattonCounter";

type SettingBoardPropsType = {
    valueStart: number
    valueMax: number
    setValueStart: (startValue: number) => void
    setValueMax: (maxValue: number) => void
    settingCounter: () => void
    statusDisabled: () => boolean
    error: string
}

const SettingBoard = ({
                          valueStart,
                          valueMax,
                          setValueStart,
                          setValueMax,
                          settingCounter,
                          statusDisabled,
                          error
                      }: SettingBoardPropsType) => {
    const setMaxValueInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValueMax(e.currentTarget.valueAsNumber)
    }
    const setStartValueInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValueStart(e.currentTarget.valueAsNumber)
    }
    const settingCounterHandler = () => settingCounter()
    return (
        <div className={'settingBoard'}>
            <div className={'settingBoardScreen'}>
                <div className={'maxValue'}>
                    <p>
                        max value
                    </p>
                    <input type={'number'}
                           value={valueMax}
                           onChange={setMaxValueInputHandler}
                           className={error}
                    />
                </div>
                <div className={'startValue'}>
                    <p>
                        start value
                    </p>
                    <input type={'number'}
                           value={valueStart}
                           onChange={setStartValueInputHandler}
                           className={error}
                    />
                </div>
            </div>
            <div className={'buttonBoardScreen'}>
                <div className={'settingButton'}>
                    <Button value={'set'}
                            callBack={settingCounterHandler}
                            statusDisabled={statusDisabled}
                    />
                </div>
            </div>
        </div>
    )
}

export default SettingBoard