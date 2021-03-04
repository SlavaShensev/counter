import React from "react";
import {ChangeEvent} from "react";
import Button from "./battonCounter";
import '../App.css';

type SettingBoardPropsType = {
    valueStart: number
    valueMax: number
    setValueStart: (startValue: number) => void
    setValueMax: (maxValue: number) => void
    settingCounter: () => void
}

const SettingBoard = ({
                          valueStart,
                          valueMax,
                          setValueStart,
                          setValueMax,
                          settingCounter
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
                    />
                </div>
                <div className={'startValue'}>
                    <p>
                        start value
                    </p>
                    <input type={'number'}
                           value={valueStart}
                           onChange={setStartValueInputHandler}
                    />
                </div>
            </div>
            <div className={'buttonBoardScreen'}>
                <div className={'settingButton'}>
                    <Button value={'set'}
                            callBack={settingCounterHandler}
                    />
                </div>
            </div>
        </div>
    )

}

export default SettingBoard