import React, {useEffect, useMemo, useState} from "react";
import {log} from "node:util";
import internal from "node:stream";

export default {
    title: 'useEffect demo'
}

export const SimpleExample = () => {

    const [fake, setFake] = useState(1) // [0, function(newValue){}]
    const [counter, setCounter] = useState(1) // [0, function(newValue){}]
    console.log("SimpleExample")

    useEffect(() => {
        console.log("useEffect every render")
        document.title = counter.toString()
    });
    useEffect(() => {
        console.log("useEffect only first render (componentDidMount)")
        document.title = counter.toString()
    }, []);
    useEffect(() => {
        console.log("useEffect first render and every counter change")
        document.title = counter.toString()
    }, [counter]);

    return <>
        Hello, {counter} {fake}
        <button onClick={() => setFake(fake + 1)}>fake</button>
        <button onClick={() => setCounter(counter + 1)}>counter</button>
    </>
}
export const SetIntervalExample = () => {

    const [fake, setFake] = useState(1) // [0, function(newValue){}]
    const [counter, setCounter] = useState(1) // [0, function(newValue){}]
    console.log("SetTimeoutExample")
    let now = new Date()
    useEffect(() => {
        // 1
        // console.log("useEffect every render")
        // document.title = counter.toString()

        // 2
        // setTimeout(()=> {
        //     console.log("setTimeout")
        //     document.title = counter.toString()
        // }, 1000)

        //3
        // setInterval(() => {
        //     console.log("tick: " + counter)
        //     setCounter((state) => state + 1)
        // }, 1000)
        const intervalId = setInterval(() => {
            //console.log("tick: " + counter )
            setCounter((state) => state + 1)
        }, 1000)
        return () =>{
            clearInterval(intervalId)
        }
    }, []);



    return <>
        {String(now.getHours()).padStart(2, '0')}:{String(now.getMinutes()).padStart(2, '0')}:{String(now.getSeconds()).padStart(2, '0')} -
        Hello, counter: {counter} - fake: {fake}
        <button onClick={() => setFake(fake + 1)}>fake</button>
        <button onClick={() => setCounter(counter + 1)}>counter</button>
    </>
}


export const ResetEffectExample = () => {
    const [counter, setCounter] = useState(1)

    console.log("Component rendered with " + counter)

    useEffect(() => {
        console.log("Effect occurred " + counter)

        return () => {
            console.log("RESET EFFECT " + counter)
        }
    }, [counter]);

    const increase = () => {setCounter(counter+1)}

    return <>
        Hello, counter: {counter} <button onClick={increase}>+</button>
    </>
}

export const KeysTrackerExample = () => {
    const [text, setText] = useState('')

    console.log("Component rendered with " + text)

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            console.log(e.key);
            setText(text + e.key)
        }
        window.addEventListener('keypress', handler)
        return () => {
            window.removeEventListener('keypress', handler)
        }

    }, [text]);

    return <>
        Typed text: {text}
    </>
}

export const SetTimeoutExample = () => {
    const [text, setText] = useState('')

    console.log("Component rendered with " + text)

    useEffect(() => {
        const timeoutId = setTimeout(()=>{
            console.log("Timeout expired")
            setText('3 second passed')
        }, 3000)
        return () => {
            clearTimeout(timeoutId)
        }

    }, [text]);

    return <>
        Typed text: {text}
    </>
}
