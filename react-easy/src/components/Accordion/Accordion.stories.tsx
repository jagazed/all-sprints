import { action } from '@storybook/addon-actions';

import {Accordion} from './Accordion';
import React, {useState} from "react";

export default {
    title: 'Accordion',
    component: Accordion
};

const callback = action("accordion mode change event fired")
const onChangeHandler = action('onChange')
export const MenuCollapsedMode = () => <Accordion titleValue = {"Menu"} collapsed={true} onChange={callback} items={[]} />
export const UsersUncollapsedMode = () => <Accordion titleValue = {"Users"} collapsed={false} onChange={callback} items={["Dimych", "Valera", "Artem", "Viktor"]} />

export const AccordionDemo = () => {
    const [value, setValue] = useState(false)
    return <Accordion titleValue = {"Accordion"} collapsed={value} onChange={() => {setValue(!value)}} items={["Dimych", "Valera", "Artem", "Viktor"]} />
}