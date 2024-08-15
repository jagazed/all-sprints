import {Clock} from "./Clock";
import React, {useState} from "react";

export default {
    title: 'Clock',
    component: Clock
};

export const BaseAnalogExample = () => {
    return <Clock mode={"analog"} />
};

export const BaseDigitalExample = () => {
    return <Clock mode={"digital"} />
};