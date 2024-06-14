import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./components/Rating/Rating";

function App() {
    let [ratingValue, setRatingVaslue] = useState<RatingValueType>(0)

    return (
        <div className={"App"}>
            <PageTitle title = {"This is APP component"}/>
            <PageTitle title = {"My friend"}/>
            {/*Article 1*/}
            {/*<Rating value = {3}/>*/}
            {/*<Accordion titleValue = {"Меню 1"} collapsed = {true} />*/}
            {/*<Accordion titleValue = {"Меню 2"} collapsed = {false} />*/}
            {/*Article 2*/}
            {/*<Rating value = {0}/>*/}
            {/*<Rating value = {1}/>*/}
            {/*<Rating value = {2}/>*/}

            {/*<Rating value = {4}/>*/}
            {/*<Rating value = {5}/>*/}
            {/*<OnOff />*/}
            {/*<OnOff />*/}
            {/*<UncontrolledAccordion titleValue = {"Меню 1"}/>*/}
            {/*<UncontrolledAccordion titleValue = {"Меню 2"}/>*/}
            {/*<UncontrolledRating/>*/}
            {/*<UncontrolledRating/>*/}
            {/*<UncontrolledRating/>*/}
            <Rating value = {ratingValue} onClick={setRatingVaslue}/>
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
