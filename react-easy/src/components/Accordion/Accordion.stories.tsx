import {action} from '@storybook/addon-actions';

import {Accordion} from './Accordion';
import React, {useState} from "react";

export default {
    title: 'Accordion',
    component: Accordion
};

const callback = action("accordion mode change event fired")
const onClickCallback = action("some item was clicked")
const onChangeHandler = action('onChange')
export const MenuCollapsedMode = () => <Accordion titleValue={"Menu"} collapsed={true} onChange={callback} items={[]}
                                                  onClick={onClickCallback}/>
export const UsersUncollapsedMode = () => <Accordion titleValue={"Users"} collapsed={false} onChange={callback}
                                                     onClick={onClickCallback}
                                                     items={[
                                                         {title: "Dimych", value: 1},
                                                         {title: "Valera", value: 2},
                                                         {title: "Artem", value: 3},
                                                         {title: "Viktor", value: 4}
                                                     ]}/>

export const AccordionDemo = () => {
    const [value, setValue] = useState(false)
    return <Accordion titleValue={"Accordion"} collapsed={value} onChange={() => {
        setValue(!value)
    }}
                      items={[
                          {title: "Dimych", value: 1},
                          {title: "Valera", value: 2},
                          {title: "Artem", value: 3},
                          {title: "Viktor", value: 4}
                      ]} onClick={(id)=> { alert(`user with ID ${id} should be happy`)}}/>
}