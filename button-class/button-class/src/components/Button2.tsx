import React from 'react';

type Button2Type = {
    name: string
    callBack: ()=> void
}
export const Button2 = (props:Button2Type) => {
    const onClickHandler = () => {
        props.callBack()
    }
    return (
        <button onClick={onClickHandler}>{props.name}</button>
    );
};

export default Button2;