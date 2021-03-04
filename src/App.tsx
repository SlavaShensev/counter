import React, {useEffect, useState} from 'react';
import './App.css';
import ResultBoard from "./components/result_board";
import SettingBoard from "./components/setting_board";

function App() {

    const [valueStart, setValueStart] = useState(0)

    const [valueMax, setValueMax] = useState(0)

    console.log(valueMax)

    const setting = (maxValue: number, startValue: number) => {
        setValueStart(startValue)
        setValueMax(maxValue)
    }

    useEffect(()=>{
        const valueUsString = localStorage.getItem('valueCounter')
        const valueMaxUsString = localStorage.getItem('valueCounter')
        if(valueUsString && valueMaxUsString) {
            const newValue = JSON.parse(valueUsString)
            const newMaxValue = JSON.parse(valueMaxUsString)
            setValueStart(newValue)
            setValueMax(newMaxValue)
        }
    },[])

    useEffect(() => {
        localStorage.setItem('valueCounter', JSON.stringify(valueStart))
        localStorage.setItem('maxValueCounter', JSON.stringify(valueMax))
    }, [valueStart, valueMax])

    return (
        <div className={'App'}>
            <SettingBoard setting={setting} valueMax={valueMax} valueStart={valueStart} />
            <ResultBoard value={valueStart}
                         setValue={setValueStart}
            />
        </div>
    )
}

export default App;
