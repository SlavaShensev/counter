import React, {useState} from 'react';
import './App.css';
import ResultBoard from "./components/result_board";
import SettingBoard from "./components/setting_board";

function App() {
    //
    // const [counter, setCounter] = useState<number>(0)
    // const setCounterHandler = () => counter <= 4 && setCounter(counter + 1)
    // const onRedClass = counter === 5 ? 'red' : ''
    // const stopSetCounter = () => setCounter(0)
    // const disabledInc = counter === 5
    // const disabledReset = counter < 5
    //
    // return (
    //     {/*<div className="App">*/}
    //     {/*    <div>*/}
    //     {/*        <Scoreboard scoreValue={counter} onRedClass={onRedClass}/>*/}
    //     {/*        <Button setCounter={setCounterHandler}*/}
    //     {/*                disabled={disabledInc}*/}
    //     {/*                title={'inc'}*/}
    //     {/*        />*/}
    //     {/*        <Button setCounter={stopSetCounter}*/}
    //     {/*                disabled={disabledReset}*/}
    //     {/*                title={'reset'}*/}
    //     {/*        />*/}
    //     {/*    </div>*/}
    //     {/*</div>*/}
    //
    // );

    const [value, setValue] = useState(0)



    return (
        <div className={'App'}>
            <SettingBoard setting={} />
            <ResultBoard value={value}
                         setValue={setValue}
            />
        </div>
    )
}

export default App;
