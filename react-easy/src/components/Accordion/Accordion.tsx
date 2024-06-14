import React from 'react';

export type AccordionValueType = boolean

type AccordionPropsType = {
    titleValue: string
    //collapsed: boolean
    value: boolean
    onClick: (value: boolean ) => void
}
export function Accordion(props: AccordionPropsType) {
    console.log("Accordion rendering")
    return <div>
        <AccordionTitle value={props.value} title={props.titleValue} onClick={props.onClick}/>
        { !props.value && <AccordionBody/>}
    </div>
}
type AccordionTitlePropsType = {
    title: string
    value: boolean
    onClick: (value: boolean) => void
}
function AccordionTitle(props:AccordionTitlePropsType) {
    console.log("AccordionTitle rendering");
    return (
        <h3 onClick={()=> {props.onClick(!props.value)} }>{props.title}</h3>
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
