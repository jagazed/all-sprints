import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {Accordion} from "./components/Accordion/Accordion";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";
import {Select} from "./components/Select/Select";
import {SelectAdd} from "./components/Select/SelectAdd";

function App() {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
    let [switchOn, setSwitchOn] = useState<boolean>(false)
    const [selectedValue, setSelectedValue] = useState(1); // for SelectedAdd


    return (
        <div className={"App"}>
            <PageTitle title = {"This is APP component"}/>
            <PageTitle title = {"My friend"}/>
            {/*Article 1*/}
            {/*<Rating value = {3}/>*/}
            {/*<Accordion titleValue = {"Меню 1"} collapsed = {true} />*/}
            <Accordion titleValue = {"Меню 2"} collapsed={accordionCollapsed} items={[]} onClick={()=>{}} onChange={()=> {setAccordionCollapsed(!accordionCollapsed)}} />
            {/*Article 2*/}
            {/*<Rating value = {0}/>*/}
            {/*<Rating value = {1}/>*/}
            {/*<Rating value = {2}/>*/}

            {/*<Rating value = {4}/>*/}
            {/*<Rating value = {5}/>*/}

            <UncontrolledAccordion titleValue = {"Меню 1"}/>
            {/*<UncontrolledAccordion titleValue = {"Меню 2"}/>*/}
            {/*<UncontrolledRating/>*/}
            {/*<UncontrolledRating/>*/}
            <UncontrolledRating onChange={()=> {}} />
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <UncontrolledOnOff onChange={setSwitchOn} /> {switchOn.toString()}
            <OnOff on={switchOn} onChange={ (on) => {setSwitchOn(on)}} />
            <SelectAdd value={selectedValue}
                       onChange={setSelectedValue} items={[
                {title: "none", value: 1},
                {title: "Minsk", value: 2},
                {title: "Kiev", value: 3}
            ]}/>

            <Select value={2} onChange={()=>{}} items={[
                {title: "none", value: 1},
                {title: "Minsk", value: 2},
                {title: "Kiev", value: 3}
            ]} />

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
