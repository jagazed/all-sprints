import React from 'react';

type OnOffPropsType = {
    check: boolean
}
export const OnOff = (props: OnOffPropsType) => {
    return (
        <div>
            {props.check && <OnOffBody/>}
            {!props.check && <OnOffBody2/>}
        </div>
    );
};
function OnOffBody() {
    return (
        <>
            <span><b>ON</b></span><span> off </span><span>green light</span>
        </>

    )
}
function OnOffBody2() {
    return (
        <>
            <span>on</span><span> <b>OFF</b> </span><span>red light</span>
        </>

    )
}
