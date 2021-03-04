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
        const valueStartString = localStorage.getItem('valueStart')
        const valueMaxString = localStorage.getItem('valueMax')

        if(valueStartString && valueMaxString) {
            const valueStartFromLocalStorage = JSON.parse(valueStartString)
            const valueMaxFromLocalStorage = JSON.parse(valueMaxString)

            setValueStart(valueStartFromLocalStorage)
            setValueMax(valueMaxFromLocalStorage)
        }

    },[])

    useEffect(() => {
        localStorage.setItem('valueStart', JSON.stringify(valueStart))
        localStorage.setItem('valueMax', JSON.stringify(valueMax))
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
                         valueMax={valueMax}
                         valueResult={valueResult}
            />
        </div>
    )
}

export default App;
