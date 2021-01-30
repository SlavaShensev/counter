import React, {useState} from 'react';
import './App.css';
import Scoreboard from './components/Scoreboard';
import Button from "./components/Button";

function App() {

    const [counter, setCounter] = useState<number>(0)

    const setCounterHandler = () => counter <= 4 && setCounter(counter + 1)

    const onRedClass = counter === 5 ? 'red' : ''

    const stopSetCounter = () => setCounter(0)

    const disabledInc = counter === 5

    const disabledReset = counter < 5

    return (

        <div className="App">

            <Scoreboard scoreValue={counter} onRedClass={onRedClass}/>

            <Button setCounter={setCounterHandler}
                    disabled={disabledInc}
                    title={'inc'}
            />

            <Button setCounter={stopSetCounter}
                    disabled={disabledReset}
                    title={'reset'}
            />

        </div>
    );
}

export default App;
