import React, {useRef, useState} from 'react';
import './App.css';
import {Counter, RandomState, ValueState} from "./Counter";

function App() {
    const maxCount = 5
    const minCount = 0
    const [value, setValue] = useState<ValueState>(minCount)
    const randomValue = useRef<RandomState>(maxCount)

    const addCounter = () => {
        if (value < randomValue.current) {
            setValue(prevState => prevState +1)
        }
    }

    const resetCounter = () => {
        const maxValue = Math.floor(Math.random()*10)
        maxValue === 0 ? randomValue.current = 1 : randomValue.current = maxValue;
        setValue(minCount)
    }
    return (
        <div className="App">
            <Counter
                addCounter={addCounter}
                resetCounter={resetCounter}
                counterValue={value}
                randomValue={randomValue.current}
                minCount={minCount}
            />
        </div>
    );
}
export default App;
