import React, {MouseEventHandler, useState} from 'react';
import './App.css';
import {NewComponent} from "./components/NewComponent";

export type FilterType = 'all' | 'dollar' | 'ruble'
function App() {

    // let[a, setA] = useState(1)
    // const onClickHandler = () => {
    //     setA(++a);
    //     console.log(a)
    // }
    // const onClickHandler2 = () => {
    //     setA(0);
    //     console.log(a)
    // }


    // const myFirstSubscriber: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    //     console.log("Hello I'm Vasya!")
    // }
    // const mySecondSubscriber = () => {
    //     console.log("Hello I'm Ivan!")
    // }
    // const onClickHandler = (name: string) => {
    //     console.log(name)
    // }
    // const Button1Foo = (subscriber: string, age: number) => {
    //     console.log(subscriber, age)
    // }
    // const Button2Foo = (subscriber: string) => {
    //     console.log(subscriber)
    // }
    // const Button3Foo = () => {
    //     console.log('stupid button')
    // }


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
        console.log(nameButton)
    }
    return (
        <div className="App">
            {/*<button onClick={(event) => {console.log('Hello')}}>MyYouTubeChannel-1</button>*/}
            {/*<button onClick={(event) => onClickHandler('Vasya')}>MyYouTubeChannel-1</button>*/}
            {/*<button onClick={(event) => onClickHandler('Ivan')}>MyYouTubeChannel-2</button>*/}
            {/*<button onClick={() => onClickHandler('Some info')}>MyYouTubeChannel-3</button>*/}
            {/*<button onClick={mySecondSubscriber}>MyYouTubeChannel-3</button>*/}

            {/*<button>MyYouTubeChannel-1</button>*/}
            {/*<button>MyYouTubeChannel-2</button>*/}
            {/*<Button name={"MyYouTubeChannel-1"} callBack={() => Button1Foo("I'm Vasya!", 21)}/>*/}
            {/*<Button name={"MyYouTubeChannel-2"} callBack={() => Button2Foo("I'm Ivan!")}/>*/}
            {/*<Button name={"stupid button"} callBack={Button3Foo}/>*/}
            {/*/!*<Button2 name={"all money"} callBack={() => acxenge(useState())} />*!/*/}
            {/*<h1>{a}</h1>*/}
            {/*<button onClick={onClickHandler}>number</button>*/}
            {/*<button onClick={onClickHandler2}>0</button>*/}

            <NewComponent currentMoney={currentMoney} onClickFilterHandler={onClickFilterHandler}/>
        </div>

    );
}

export default App;
