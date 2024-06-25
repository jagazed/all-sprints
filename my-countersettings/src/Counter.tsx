import React, {ChangeEvent} from 'react';
import {Button} from "./Button";

type CounterPropsType = {
    minCount: number
    addCounter: () => void
    resetCounter: () => void
    counterValue: ValueState
    //randomValue: RandomRef

    setCounter: () => void
    changeMaxValueCounter: (event: ChangeEvent<HTMLInputElement>) => void
    changeStartValueCounter: (event: ChangeEvent<HTMLInputElement>) => void
    maxValue: MaxValueState
    startValue: StartValueState

}

export type ValueState = number
export type MaxValueState = string
export type StartValueState = string
export const Counter = (
    {
        minCount,
        addCounter,
        resetCounter,
        counterValue,
        //randomValue,

        setCounter,
        changeMaxValueCounter,
        changeStartValueCounter,
        maxValue,
        startValue
    }: CounterPropsType) => {

    const counterDisabled = startValue >= maxValue
    const resetDisabled = startValue === minCount.toString()

    return (
        <>
            <div className={"counterSettings"}>
                <div>max value:
                    <input
                        type={"number"}
                        onChange={changeMaxValueCounter}
                        placeholder={maxValue.toString()}

                    />
                </div>
                <div>start value:
                    <input
                        type={"number"}
                        onChange={changeStartValueCounter}
                        placeholder={counterValue.toString()}

                    />
                </div>
                <div><Button title={"set"} onClickHandler={setCounter}/></div>
            </div>
            <div className={"counterBox"}>
                <div className={"maxValue"}>Max value: {maxValue}</div>
                <div className={startValue === maxValue ? "counter-full" : "counter"}>{startValue}</div>

                <div className="progress-container">
                    <div className="progress-bar" style={{width: `${(100 / Number(maxValue)) * Number(startValue)}%`}}></div>
                </div>

                <Button classes={"incButton"} title={"inc"} onClickHandler={addCounter} disabled={counterDisabled}/>
                <Button classes={"resButton"} title={"reset"} onClickHandler={resetCounter} disabled={resetDisabled}/>
            </div>
        </>

    );
};
