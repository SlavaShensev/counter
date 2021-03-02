import React from "react";

type SettingBoardPropsType = {}

const SettingBoard = (props: SettingBoardPropsType) => {
    return (
        <div className={'settingBoard'}>
            <div className={'settingBoardScreen'}>
                <div className={'maxValue'}>
                    <p>
                        max value
                    </p>
                    <input type={'number'}/>
                </div>
                <div className={'startValue'}>
                    <p>
                        start value
                    </p>
                    <input type={'number'}/>
                </div>
            </div>
            <div className={'buttonBoardScreen'}>
                <button className={'settingButton'}>
                    set
                </button>
            </div>
        </div>
    )

}

export default SettingBoard