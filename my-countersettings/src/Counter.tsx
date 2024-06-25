import React, {ChangeEvent, useState} from 'react';
import {Button} from "./Button";

type CounterPropsType = {
    minCount: number
    maxCount: number
    addCounter: () => void
    counterValue: ValueState
    randomValue: RandomRef

    updateMaxValue: (maxValueCounter: number) => void
    updateStartValue: (startValueCounter: number) => void
}

export type ValueState = number;
export type RandomRef = number;
export const Counter = (
    {
        minCount,
        maxCount,
        addCounter,
        counterValue,
        randomValue,
        updateMaxValue,
        updateStartValue

    }: CounterPropsType) => {

    const [maxValueCounter, setMaxValueCounter] = useState(maxCount)
    const [startValueCounter, setStartValueCounter] = useState(minCount)

    const counterDisabled = counterValue >= maxValueCounter
    const resetDisabled = counterValue <= startValueCounter

    const changeMaxValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setMaxValueCounter(Number(event.currentTarget.value))
        //console.log(Number(event.currentTarget.value))
    }
    const changeMinValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setStartValueCounter(Number(event.currentTarget.value))
    }

    const setNewValueCounter = () => {
        updateMaxValue(maxValueCounter)
        updateStartValue(startValueCounter)
    }

    return (
        <>
            <div className={"counterSettings"}>
                <div>max value:
                    <input type={"number"} value={maxValueCounter} onChange={changeMaxValueHandler} />
                </div>
                <div>start value:
                    <input type={"number"} value={startValueCounter} onChange={changeMinValueHandler} />
                </div>
                <div><Button title={"set"} onClickHandler={setNewValueCounter}/></div>
            </div>
            <div className={"counterBox"}>
                <div className={"maxValue"}>Max value: {randomValue}</div>
                <div className={counterValue === randomValue ? "counter-full" : "counter"}>{counterValue}</div>

                <div className="progress-container">
                    <div className="progress-bar" style={{width: `${(100 / randomValue) * counterValue}%`}}></div>
                </div>

                <Button classes={"incButton"} title={"inc"} onClickHandler={addCounter} disabled={counterDisabled}/>
                <Button classes={"resButton"} title={"reset"} onClickHandler={setNewValueCounter} disabled={resetDisabled}/>
            </div>
        </>

    )
        ;
};