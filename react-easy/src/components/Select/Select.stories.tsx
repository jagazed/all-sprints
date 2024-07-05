import {action} from '@storybook/addon-actions';

import {Select} from './Select';
import React, {useState} from "react";

export default {
    title: 'Select',
    component: Select
};

export const WithValue = () => {
    return (
        <>
            <Select value={2} onChange={action("value changed")} items={[
                {value: 1, title: "Minsk"},
                {value: 2, title: "Kiev"},
                {value: 3, title: "Moscow"}
            ]}/>
        </>
    )
}

export const WithoutValue = () => {
    return (
        <>
            <Select onChange={action("value changed")} items={[
                {title: "Minsk", value: 1},
                {title: "Kiev", value: 2},
                {title: "Moscow", value: 3}
            ]}/>
        </>
    )
}