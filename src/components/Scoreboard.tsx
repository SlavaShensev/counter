import React from 'react';

type ScoreboardType = {
    scoreValue: number
    onRedClass: () => string | undefined

}


function Scoreboard(props: ScoreboardType) {
   const onRedClassHandler = props.onRedClass()
    return (
        <div className={onRedClassHandler}>
            <h1>{props.scoreValue}</h1>
        </div>
    )
}

export default Scoreboard;