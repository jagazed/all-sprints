import React, {useEffect, useState} from "react";
import {DigitalClockView} from "./DigitalClockView";
import {AnalogClockView} from "./AnalogClockView";

type PropsType = {
    mode?: 'digital' | 'analog'
}

//export const get2digitsString = (num: number) => num < 10 ? '0' + num : num
//const secondString = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds()
export const Clock: React.FC<PropsType> = (props) => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const intervalID = setInterval (() => {
            setDate(new Date())
        }, 1000)
        return () => {
            clearInterval(intervalID)
        }
    }, []);


    let view ;

    switch (props.mode) {
        case 'analog' :
            view = <AnalogClockView date={date} />
            break;
        case 'digital':
        default:
            view = <DigitalClockView date={date} />
    }

    return <div>
        {view}
    </div>
}

export type ClockViewPropsType = {
    date: Date
}

