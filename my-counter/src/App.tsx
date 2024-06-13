import React, {useState} from 'react';
import './App.css';
import {Counter, ValueState} from "./Counter";

function App() {
    const maxCount = 5
    const minCount = 0
    const [value, setValue] = useState<ValueState>(minCount)

    const addCounter = () => {
        if (value < maxCount) {
            //setValue(value +1)
            setValue(prevState => prevState +1)
        }
    }

    const resetCounter = () => {
        setValue(minCount)
    }
    return (
        <div className="App">
            <Counter
                addCounter={addCounter}
                resetCounter={resetCounter}
                counterValue={value}
                maxCount={maxCount}
                minCount={minCount}
            />
        </div>
    );
}
export default App;
