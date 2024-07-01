import { action } from '@storybook/addon-actions';

import {Accordion} from './Accordion';
import React, {useState} from "react";

export default {
    title: 'Accordion',
    component: Accordion
};

const callback = action("accordion mode change event fired")
const onChangeHandler = action('onChange')
export const MenuCollapsedMode = () => <Accordion titleValue = {"Menu"} collapsed={true} onChange={callback} />
export const UsersUncollapsedMode = () => <Accordion titleValue = {"Users"} collapsed={false} onChange={callback} />

export const AccordionDemo = () => {
    const [value, setValue] = useState(false)
    return <Accordion titleValue = {"Accordion"} collapsed={value} onChange={() => {setValue(!value)}} />
}