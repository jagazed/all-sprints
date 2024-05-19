import React, {MouseEventHandler} from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from "./components/Button";

function App() {
    // const myFirstSubscriber: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    //     console.log("Hello I'm Vasya!")
    // }
    // const mySecondSubscriber = () => {
    //     console.log("Hello I'm Ivan!")
    // }
    // const onClickHandler = (name: string) => {
    //     console.log(name)
    // }

    return (
        <div className="App">
            {/*<button onClick={(event) => {console.log('Hello')}}>MyYouTubeChannel-1</button>*/}
            {/*<button onClick={(event) => onClickHandler('Vasya')}>MyYouTubeChannel-1</button>*/}
            {/*<button onClick={(event) => onClickHandler('Ivan')}>MyYouTubeChannel-2</button>*/}
            {/*<button onClick={() => onClickHandler('Some info')}>MyYouTubeChannel-3</button>*/}
            {/*<button onClick={mySecondSubscriber}>MyYouTubeChannel-3</button>*/}

            {/*<button>MyYouTubeChannel-1</button>*/}
            {/*<button>MyYouTubeChannel-2</button>*/}
            <Button name={"MyYouTubeChannel-1"}/>
            <Button name={"MyYouTubeChannel-2"}/>
        </div>
    );
}

export default App;
