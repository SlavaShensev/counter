import React, {useState} from "react";
import { ChangeEvent } from "react";
import Button from "./battonCounter";
import '../App.css';

type SettingBoardPropsType = {
    valueStart: number
    valueMax: number
    setting: (maxValue: number, startValue: number) => void
}

const SettingBoard = (props: SettingBoardPropsType) => {
    const setting = props.setting
    const valueStart = props.valueStart
    const valueMax = props.valueMax
    const [maxValueInput, setMaxValueInput] = useState(0)
    const [startValueInput, setStartValueInput] = useState(0)
    const setMaxValueInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValueInput(e.currentTarget.valueAsNumber)
    }
    const setStartValueInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStartValueInput(e.currentTarget.valueAsNumber)
    }
    const settingHandler = () => {
        setting(maxValueInput, startValueInput)
    }
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
                <div className={'settingButton'} >
                    <Button value={'set'}
                            callBack={settingHandler}
                    />
                </div>
            </div>
        </div>
    )

}

export default SettingBoard