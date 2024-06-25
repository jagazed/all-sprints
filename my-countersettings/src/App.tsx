import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {Counter, MaxValueState, StartValueState, ValueState} from "./Counter";

function App() {
    const maxCount = 5
    const minCount = 0
    const [value, setValue] = useState<ValueState>(minCount)
    //const randomValue = useRef<RandomRef>(maxCount)
    const [startValue, setStartValue] = useState<StartValueState>('')
    const [maxValue, setMaxValue] = useState<MaxValueState>('')

    const addCounter = () => {
        if (Number(startValue) < Number(maxValue)) {
            setValue(prevState => prevState + 1)
        }
    }

    const changeMaxValueCounter = (event: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(event.currentTarget.value)
    }
    const changeStartValueCounter = (event: ChangeEvent<HTMLInputElement>) => {
        setStartValue(event.currentTarget.value)
    }

    const setCounter = () => {
        const newMaxValue = Number(maxValue)
        setValue(newMaxValue)
        setValue(value)
    }

    const resetCounter = () => {
        // const maxValue = Math.floor(Math.random()*10)
        // maxValue === 0 ? randomValue.current = 1 : randomValue.current = maxValue;
        setValue(minCount)
    }
    return (
        <div className="App">
            <Counter
                setCounter={setCounter}
                changeMaxValueCounter={changeMaxValueCounter}
                changeStartValueCounter={changeStartValueCounter}
                maxValue={maxValue}
                startValue={startValue}

                addCounter={addCounter}
                resetCounter={resetCounter}
                counterValue={value}
                //randomValue={maxCount}
                minCount={minCount}
            />
        </div>
    );
}

export default App;
