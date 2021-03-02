import React, {useState} from "react";
import { ChangeEvent } from "react";

type SettingBoardPropsType = {
    setting: (maxValue: number, startValue: number) => void
}

const SettingBoard = (props: SettingBoardPropsType) => {
    const setting = props.setting
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
                           value={maxValueInput}
                           onChange={setMaxValueInputHandler}
                    />
                </div>
                <div className={'startValue'}>
                    <p>
                        start value
                    </p>
                    <input type={'number'}
                           value={startValueInput}
                           onChange={setStartValueInputHandler}
                    />
                </div>
            </div>
            <div className={'buttonBoardScreen'}>
                <button className={'settingButton'}
                        onClick={settingHandler}
                >
                    set
                </button>
            </div>
        </div>
    )

}

export default SettingBoard