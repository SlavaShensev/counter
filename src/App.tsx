import React, {useEffect, useState} from 'react';
import './App.css';
import SettingBoard from './components/Setting_board';
import ResultBoard from "./components/Result_board";

function App() {
    const [valueStart, setValueStart] = useState(0)
    const [valueMax, setValueMax] = useState(0)
    const [valueResult, setValueResult] = useState(0)
    const settingCounter = () => {
        setValueResult(valueStart)
    }

    useEffect(() => {
        const valueStartString = localStorage.getItem('valueStart')
        const valueMaxString = localStorage.getItem('valueMax')
        if (valueStartString && valueMaxString) {
            const valueStartFromLocalStorage = JSON.parse(valueStartString)
            const valueMaxFromLocalStorage = JSON.parse(valueMaxString)

            setValueStart(valueStartFromLocalStorage)
            setValueMax(valueMaxFromLocalStorage)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('valueStart', JSON.stringify(valueStart))
        localStorage.setItem('valueMax', JSON.stringify(valueMax))
    }, [valueStart, valueMax])

    const setButtonDisabled = () => {
        if (valueMax > valueStart) {
            if (valueMax && valueStart >= 0) {
                return false
            }
        }
        return true
    }

    const incButtonDisabled = () => {
        if (valueMax > valueResult) {
            return false
        }
        return true
    }

    const resButtonDisabled = () => {
        if (valueMax === valueResult) {
            return false
        }
        return true
    }

    const errorValueMax = (valueMax < 0) ? 'red' : ''

    const errorValueStart = (valueMax < valueStart || valueStart < 0) ? 'red' : ''

    return (
        <div className={'App'}>
            <SettingBoard valueMax={valueMax}
                          valueStart={valueStart}
                          setValueStart={setValueStart}
                          setValueMax={setValueMax}
                          settingCounter={settingCounter}
                          statusDisabled={setButtonDisabled}
                          errorValueMax={errorValueMax}
                          errorValueStart={errorValueStart}

            />
            <ResultBoard value={valueResult}
                         setValueResult={setValueResult}
                         valueMax={valueMax}
                         valueStart={valueStart}
                         valueResult={valueResult}
                         incButtonDisabled={incButtonDisabled}
                         resButtonDisabled={resButtonDisabled}
            />
        </div>
    )
}

export default App;
