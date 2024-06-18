import React from 'react';
import {Button} from "./Button";

type CounterPropsType = {
    minCount: number
    addCounter: () => void
    resetCounter: () => void
    counterValue: ValueState
    randomValue: RandomState
}

export type ValueState = number;
export type RandomState = number;
export const Counter = (
    {
        minCount,
        addCounter,
        resetCounter,
        counterValue,
        randomValue
    }: CounterPropsType) => {

    const counterDisabled = counterValue > randomValue
    const resetDisabled = counterValue === minCount

    return (
        <div className={"counterBox"}>
            <div className={"maxValue"}>Max value: {randomValue}</div>
            <div className={counterValue === randomValue ? "counter-full" : "counter"}>{counterValue}</div>

            <div className="progress-container">
                <div className="progress-bar" style={{width: `${(100 / randomValue) * counterValue}%`}}></div>
            </div>

            <Button classes={"incButton"} title={"inc"} onClickHandler={addCounter} disabled={counterDisabled}/>
            <Button classes={"resButton"} title={"reset"} onClickHandler={resetCounter} disabled={resetDisabled}/>
        </div>
    );
};
