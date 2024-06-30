import React from 'react';

export type AccordionValueType = boolean

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    //value: boolean
    onChange: () => void
}
export function Accordion(props: AccordionPropsType) {
    console.log("Accordion rendering")
    return <div>
        <AccordionTitle title={props.titleValue} onChange={props.onChange}/>
        { !props.collapsed && <AccordionBody/>}
    </div>
}
type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}
function AccordionTitle(props:AccordionTitlePropsType) {
    console.log("AccordionTitle rendering");
    return (
        <h3 onClick={(event)=> props.onChange()}>{props.title}</h3>
    );
}

function AccordionBody() {
    console.log("Accordion rendering")
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}
