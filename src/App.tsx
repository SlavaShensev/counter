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
       if(valueMax > valueStart) {
           if (valueMax && valueStart >= 0) {
               return false
           }
       }
       return true
    }

    const incButtonDisabled = () => {
        if(valueMax === 1) {
                return false
        }
        return true
    }

    const resButtonDisabled = () => {

        if(valueMax === 2) {
                return true
        }

        return false
    }

    const andValueClass = 'red'

    const error = 'red'

    return (
        <div className={'App'}>
            <SettingBoard valueMax={valueMax}
                          valueStart={valueStart}
                          setValueStart={setValueStart}
                          setValueMax={setValueMax}
                          settingCounter={settingCounter}
                          statusDisabled={setButtonDisabled}
                          error={error}

            />
            <ResultBoard value={valueResult}
                         setValueResult={setValueResult}
                         valueMax={valueMax}
                         valueResult={valueResult}
                         incButtonDisabled={incButtonDisabled}
                         resButtonDisabled={resButtonDisabled}
                         andValueClass={andValueClass}
            />
        </div>
    )
}

export default App;
