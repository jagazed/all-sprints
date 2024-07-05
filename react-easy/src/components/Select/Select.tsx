import React, {ChangeEvent, useState} from 'react';
import styles from './Select.module.css';

type ItemType = {
    title: string
    value: any
}
type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]
}

export function Select(props: SelectPropsType) {

    const selectedItem = props.items.find(i => i.value === props.value)

    return (
        <>
            <select>
                <option value={1}>Minsk</option>
                <option value={2}>Kiev</option>
                <option value={3}>Moscow</option>
            </select>
            <div className={styles.select + " " + styles.active}>
                <h3>{selectedItem && selectedItem.title}</h3>
                <div className={styles.items}>
                    {props.items.map((i, index) => <div key={index}>{i.title}</div>)}
                </div>
            </div>
        </>
    )
}