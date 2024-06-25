import React, {useRef, useState} from 'react';
import './App.css';
import {Counter, RandomRef, ValueState} from "./Counter";

function App() {
    const maxCount = 5
    let minCount = 0
    const [value, setValue] = useState<ValueState>(minCount)
    const randomValue = useRef<RandomRef>(maxCount)

    const addCounter = () => {
        if (value < randomValue.current) {
            setValue(prevState => prevState +1)
        }
    }

    const setCounter = (maxNumber: number) => {
        randomValue.current = maxNumber
        console.log("maxNumber: ", maxNumber)
        setValue(minCount)
    }

    const setCounter2 = (startNumber: number) => {
        minCount = startNumber
        console.log("startNumber: ", startNumber)
        setValue(minCount)
    }


    return (
        <div className="App">
            <Counter
                addCounter={addCounter}
                counterValue={value}
                randomValue={randomValue.current}
                minCount={minCount}
                maxCount={maxCount}
                updateMaxValue={setCounter}
                updateStartValue={setCounter2}
            />
        </div>
    );
}
export default App;