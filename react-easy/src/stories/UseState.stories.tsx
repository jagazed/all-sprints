import React, {useMemo, useState} from "react";

export default {
    title: 'useState demo'
}
function generateData() {
    console.log("generateData")
    return 32340238021
}

export const Example1 = () => {
    console.log("Example1")

    //const initValue = useMemo(generateData, [])

    const [counter, setCounter] = useState<number>(generateData) // [0, function(newValue){}]

    //const changer = (state: number) => state + 1
    // ниже тоже самое написано
    // const changer = (state: number) => {
    //     debugger
    //     return state + 1
    // }


    return <>
        <button onClick={() => { setCounter(state => state + 1)}}>+</button>
        {counter}
    </>
}