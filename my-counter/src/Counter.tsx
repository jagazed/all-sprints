import React from 'react';
import {Button} from "./Button";

type CounterPropsType = {
    maxCount: number,
    minCount: number,
    addCounter: () => void
    resetCounter: () => void
    counterValue: ValueState
}

export type ValueState = number;
export const Counter = (
    {
        maxCount,
        minCount,
        addCounter,
        resetCounter,
        counterValue
    }: CounterPropsType) => {

    const counterDisabled = counterValue > maxCount
    const resetDisabled = counterValue === minCount

    return (
        <div className={"counterBox"}>
            <div className={counterValue === maxCount ? "counter-full" : "counter"}>{counterValue}</div>
            <Button classes={counterValue === maxCount ? "incButton-disabled" : "incButton"} title={"inc"}
                    onClickHandler={addCounter} disabled={counterDisabled}/>
            <Button classes={"resButton"} title={"reset"} onClickHandler={resetCounter} disabled={resetDisabled}/>
        </div>
    );
};
