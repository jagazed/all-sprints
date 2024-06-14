import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {Accordion, AccordionValueType} from "./components/Accordion/Accordion";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";

function App() {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
    let [controlOnOff, setControlOnOff] = useState<boolean>(false)

    return (
        <div className={"App"}>
            <PageTitle title = {"This is APP component"}/>
            <PageTitle title = {"My friend"}/>
            {/*Article 1*/}
            {/*<Rating value = {3}/>*/}
            {/*<Accordion titleValue = {"Меню 1"} collapsed = {true} />*/}
            <Accordion titleValue = {"Меню 2"} value={accordionCollapsed} onClick={setAccordionCollapsed} />
            {/*Article 2*/}
            {/*<Rating value = {0}/>*/}
            {/*<Rating value = {1}/>*/}
            {/*<Rating value = {2}/>*/}

            {/*<Rating value = {4}/>*/}
            {/*<Rating value = {5}/>*/}

            {/*<UncontrolledAccordion titleValue = {"Меню 1"}/>*/}
            {/*<UncontrolledAccordion titleValue = {"Меню 2"}/>*/}
            {/*<UncontrolledRating/>*/}
            {/*<UncontrolledRating/>*/}
            <UncontrolledRating/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <UncontrolledOnOff />
            <OnOff value={controlOnOff} onClick={setControlOnOff} />
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
