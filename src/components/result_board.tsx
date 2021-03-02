import React from "react";

type ResultBoardPropsType = {}

const ResultBoard = (props: ResultBoardPropsType) => {
    return (
        <div className={'resultBoard'}>
            <div className={'resultBoardScreen'}>
                //code
            </div>
            <div className={'buttonBoardScreen'} >
                <button className={'incButtonBoardScreen'} >
                    inc
                </button>
                <button className={'resButtonBoardScreen'} >
                    reset
                </button>
            </div>
        </div>
    )

}

export default ResultBoard