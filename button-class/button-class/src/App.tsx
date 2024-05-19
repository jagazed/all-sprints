import React, {MouseEventHandler, useState} from 'react';
import './App.css';
import {NewComponent} from "./components/NewComponent";

export type FilterType = 'all' | 'dollar' | 'ruble'
function App() {
    const [money, setMoney] = useState([
        {banknote: 'dollar', nominal: 100, number: ' a1234567890'},
        {banknote: 'dollar', nominal: 50, number: ' z1234567890'},
        {banknote: 'ruble', nominal: 100, number: ' w1234567890'},
        {banknote: 'dollar', nominal: 100, number: ' c1234567890'},
        {banknote: 'dollar', nominal: 50, number: ' e123456790'},
        {banknote: 'ruble', nominal: 100, number: ' r1234562890'},
        {banknote: 'dollar', nominal: 50, number: ' x123452791'},
        {banknote: 'ruble', nominal: 50, number: ' v1234567892'}
    ])

    const [filter, setFilter] = useState<FilterType>('all')
    let currentMoney = money;
    if (filter === 'ruble') {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknote === 'ruble')
    } if (filter === 'dollar') {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknote === 'dollar')
    }

    const onClickFilterHandler = (nameButton: FilterType) => {
        setFilter(nameButton)
    }
    return (
        <div className="App">
            <NewComponent currentMoney={currentMoney} onClickFilterHandler={onClickFilterHandler}/>
        </div>

    );
}

export default App;
