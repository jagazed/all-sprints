import {action} from '@storybook/addon-actions';

import {Select} from './Select';
import React, {useState} from "react";

export default {
    title: 'Select',
    component: Select
};

export const SelectCollapsedMode = () => {
    return (
        <>
            <Select value={1} onChange={()=>{}} items={[]}/>
            <p>asdasd</p>
        </>
    )
}