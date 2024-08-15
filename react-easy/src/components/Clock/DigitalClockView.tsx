import React from "react";
import {ClockViewPropsType} from "./Clock";

export const DigitalClockView: React.FC<ClockViewPropsType> = ({date}) => {
    return <><span>{String(date.getHours()).padStart(2, '0')}</span>
        :
        <span>{String(date.getMinutes()).padStart(2, '0')}</span>
        :
        <span>{String(date.getSeconds()).padStart(2, '0')}</span>
    </>
}