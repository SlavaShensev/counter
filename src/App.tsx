import React, {useEffect, useState} from 'react';
import './App.css';
import ResultBoard from "./components/result_board";
import SettingBoard from "./components/setting_board";

function App() {

    const [valueStart, setValueStart] = useState(0)
    const [valueMax, setValueMax] = useState(0)
    const [valueResult, setValueResult] = useState(0)

    const settingCounter = () => {
        setValueResult(valueStart)
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
            <SettingBoard valueMax={valueMax}
                          valueStart={valueStart}
                          setValueStart={setValueStart}
                          setValueMax={setValueMax}
                          settingCounter={settingCounter}

            />
            <ResultBoard value={valueResult}
                         setValueResult={setValueResult}
            />
        </div>
    )
}

export default App;
