import React, {useEffect, useState} from "react";

type PropsType = {

}
export const Clock: React.FC<PropsType> = (props) => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const intervalID = setInterval (() => {
            setDate(new Date())
        }, 1000)
        return () => {
            clearInterval(intervalID)
        }
    }, []);
    const secondString = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds()

    return <div>
        <span>{String(date.getHours()).padStart(2, '0')}</span>
        :
        <span>{String(date.getMinutes()).padStart(2, '0')}</span>
        :
        {/*<span>{date.getSeconds()}</span>*/}
        <span>{String(date.getSeconds()).padStart(2, '0')}</span>
    </div>
}