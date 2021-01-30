import React from 'react';

type ScoreboardType = {
    scoreValue: number
    onRedClass:  string

}


const Scoreboard = ({onRedClass, scoreValue}: ScoreboardType) =>  (
    <div className={onRedClass}>
        <h1>{scoreValue}</h1>
    </div>

)

export default Scoreboard;