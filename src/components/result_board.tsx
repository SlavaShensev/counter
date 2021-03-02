import React from "react";

type ResultBoardPropsType = {
    value: number
    setValue: (n: number) => void
}

const ResultBoard = (props: ResultBoardPropsType) => {
    return (
        <div className={'resultBoard'}>
            <div className={'resultBoardScreen'}>
                {props.value}
            </div>
            <div className={'buttonsBoardScreen'}>
                <button className={'incButtonBoardScreen'}
                        onClick={() => props.setValue(props.value + 1)}
                >
                    inc
                </button>
                <button className={'resButtonBoardScreen'}
                        onClick={()=>props.setValue(0)}
                >
                    reset
                </button>
            </div>
        </div>
    )

}

export default ResultBoard