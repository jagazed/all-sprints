import React, {ChangeEvent} from 'react';
import {Button} from "./Button";

type CounterSettingsType = {
    setCounter: () => void
    changeMaxValueCounter: (event: ChangeEvent<HTMLInputElement>) => void
    counterValue: ValueState
    maxValue: MaxValueState
}
export type ValueState = number;
export type MaxValueState = string;
export const CounterSettings = (
    {
        setCounter,
        changeMaxValueCounter,
        counterValue,
        maxValue
    }: CounterSettingsType) => {

    //const [maxValue, setMaxValue] = useState('')
    // const changeMaxValueCounter = (event: ChangeEvent<HTMLInputElement>) => {
    //     setMaxValue(event.currentTarget.value)
    //     console.log(event.currentTarget.value)
    // }
    // const setMaxValueCounter = () => {
    //     console.log(maxValue)
    // }
    return (
        <div>
            <div>max value:
                <input
                    type={"number"}
                    // value={"8"}
                    onChange={changeMaxValueCounter}

                />
            </div>
            <div>start value:</div>
            <div><Button title={"set"} onClickHandler={setCounter}/></div>
        </div>
    );
};
