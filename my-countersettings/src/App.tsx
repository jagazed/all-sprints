import React, {ChangeEvent, useRef, useState} from 'react';
import './App.css';
import {Counter, RandomRef, ValueState} from "./Counter";
import {CounterSettings, MaxValueState} from "./CounterSettings";

function App() {
  const maxCount = 5
  const minCount = 0
  const [value, setValue] = useState<ValueState>(minCount)
  const randomValue = useRef<RandomRef>(maxCount)
  const [maxValue, setMaxValue] = useState<MaxValueState>('')

  const addCounter = () => {
    if (value < randomValue.current) {
      setValue(prevState => prevState +1)
    }
  }

  const changeMaxValueCounter = (event: ChangeEvent<HTMLInputElement>) => {
    setMaxValue(event.currentTarget.value)
    console.log(event.currentTarget.value)
  }

  const setCounter = () => {
    const newMaxValue = Number(maxValue)
    setValue(newMaxValue)
  }

  const resetCounter = () => {
    const maxValue = Math.floor(Math.random()*10)
    maxValue === 0 ? randomValue.current = 1 : randomValue.current = maxValue;
    setValue(minCount)
  }
  return (
      <div className="App">
        <CounterSettings
            setCounter={setCounter}
            changeMaxValueCounter={changeMaxValueCounter}
            counterValue={value}
            maxValue={maxValue}
        />
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
