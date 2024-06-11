import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";


function App() {
    return (
        <div className={"App"}>
            <PageTitle title = {"This is APP component"}/>
            <PageTitle title = {"My friend"}/>
            Article 1
            <Rating value = {3}/>
            <Accordion titleValue = {"Меню 1"} collapsed = {true} />
            <Accordion titleValue = {"Меню 2"} collapsed = {false} />
            Article 2
            <Rating value = {0}/>
            <Rating value = {1}/>
            <Rating value = {2}/>
            <Rating value = {3}/>
            <Rating value = {4}/>
            <Rating value = {5}/>
            <OnOff />
            <OnOff />
            <UncontrolledAccordion titleValue = {"Меню 1"}/>
            <UncontrolledAccordion titleValue = {"Меню 2"}/>
            <UncontrolledRating/>
            <UncontrolledRating/>
            <UncontrolledRating/>
        </div>
    );
}

type PageTitleType = {
    title: string
}
function PageTitle (props: PageTitleType) {
    console.log("PageTitle rendering");
    return <h1>{ props.title }</h1>
}

export default App;
