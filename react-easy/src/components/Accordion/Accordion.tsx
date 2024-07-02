import React from 'react';

export type AccordionValueType = boolean

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
    items: string[]
}
export function Accordion(props: AccordionPropsType) {
    console.log("Accordion rendering")
    return <div>
        <AccordionTitle title={props.titleValue} onChange={props.onChange}/>
        { !props.collapsed && <AccordionBody items={props.items}/>}
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
type AccordionBodyPropsType = {
    items: string[]
}
function AccordionBody(props: AccordionBodyPropsType) {
    console.log("Accordion rendering")
    return <ul>
        {props.items.map((i, index) => <li key={index}>{i}</li>)}
    </ul>
}
