import React from 'react';
import './App.css';
import {Header} from "./site/Header";
import {Body} from "./site/Body";
import {Footer} from "./site/Footer";
import {CarsType, NewComponent} from "./map/NewComponent";

function App() {
    // let student: Array<StudentType> = [
    //     {id:1, name: "John", age: 22},
    //     {id:2, name: "Alex", age: 27},
    //     {id:3, name: "Hanna", age: 39},
    // ]
    let topCars: Array<CarsType> = [
        {manufacturer: "BMW", model: "m5cs"},
        {manufacturer: "Mercedes", model: "e63s"},
        {manufacturer: "Audi", model: "rs6"}
    ]
  return (
      <>
          <Header title={"NEW HEADER"}/>
          <Body titleforBody={"NEW BODY"}/>
          <Footer/>
          <NewComponent newCars={topCars}/>
      </>
  );
}

export default App;
