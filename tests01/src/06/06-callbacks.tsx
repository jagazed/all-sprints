import React, {MouseEvent} from 'react';
import {ChangeEvent} from 'react';

export const User = () => {
    const deleteUser = (event: MouseEvent<HTMLButtonElement>) => {

        alert(event.currentTarget.name)
    }

    const saveUser = () => {
        alert('user have been saved')
    }

    const onNameChanged = () => {
        console.log("name change")
    }
    const onAgeChanged = (event: ChangeEvent<HTMLInputElement>) => {
        console.log("age change:" + event.currentTarget.value)
    }
    const focusLostHandler = () => {
        console.log("focus lost")
    }

    return <div><textarea onChange={onNameChanged} onBlur={focusLostHandler}>Dimych</textarea>
        <input onChange={onAgeChanged} type={"number"}/>
        <button name="delete" onClick={deleteUser}>delete</button>
        <button name="save" onClick={deleteUser}>save</button>
    </div>
}