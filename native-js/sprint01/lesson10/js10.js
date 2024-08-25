// this

// 1. Global scope
// 2. Function | arrow function | simple func
// 3. .call .apply .bind
// 4. Function constructor

// ----------------
// 1. Global scope

//console.log(this)

// ----------------
// 2. Function | arrow function | simple func

// "use strict";
//
// const foo = () => {
//     console.log(this)
// }
// function bar() {
//     foo();
// }
// bar()

// "use strict";
//
// function foo() {
//     console.log(this);
// }
// foo()


//----------------------------
// let car = {
//     brand: 'bmw',
//     showBrand() {
//         console.log(this.brand)
//     }
// }
// const newCar = car
// car = null
// newCar.showBrand()

//----------------------------
// function showBrand() {
//     console.log(this.brand)
// }
//
// const car1 = {
//     brand: 'bmw'
// }
//
// const car2 = {
//     brand: 'kia'
// }
//
// car1.f = showBrand
// car2.f = showBrand
//
// car1.f()
// car2.f()

//----------------------------
// let car = {
//     brand: 'bmw',
//     showBrand() {
//         console.log(this.brand)
//     }
// }
//
// const car1 = {
//     brand: 'bmw'
// }
//
// const car2 = {
//     brand: 'kia'
// }
//
// car1.f = car.showBrand
// car2.f = car.showBrand
//
// car1.f()
// car2.f()

//----------------------------
// let car = {
//     brand: 'bmw',
//     showBrand() {
//         console.log(this.brand)
//     },
//     stopEngine() {
//         //this -> car
//         this.showBrand()
//     }
// }
//
// car.stopEngine()


//----------------------------
// function bar() {
//     console.log(this)
// }
// let car = {
//     brand: 'bmw',
//     showBrand() {
//         console.log(this.brand)
//     },
//     stopEngine() {
//         //this -> car
//         bar()
//     }
// }
//
// car.stopEngine()


//----------------------------
// 3. .call .apply .bind
// const car = {
//     speed: 200,
//     showMaxSpeed(a, b) {
//         console.log(this.speed)
//     }
// }
// const scooter = {
//     speed: 60
// }
// car.showMaxSpeed(10, 20)
// car.showMaxSpeed.call(scooter, 10, 20)
// car.showMaxSpeed.apply(scooter, [10, 20])
// const foo = car.showMaxSpeed.bind(scooter, 10, 20)
// foo()


//----------------------------
// Function.prototype.newCall = function (context) {
//     this = context
//     console.log(this)
// }
//
// newCall(5)
//car.showMaxSpeed.newCall(scooter)
//----------------------------
// потеря контекста
// const car = {
//     speed: 200,
//     showMaxSpeed(a, b) {
//         console.log(this.speed)
//     }
// }
// const scooter = {
//     speed: 60
// }
// потеря контекста
//setTimeout(car.showMaxSpeed, 2000)
// первый пример как пофиксить
//setTimeout(() => car.showMaxSpeed(), 2000)
// второй пример как пофиксить
//setTimeout(car.showMaxSpeed.bind(car), 2000)


//----------------------------
// const car = {
//     speed: 200,
//     showMaxSpeed(a, b) {
//         console.log(this.speed)
//     }
// }
// const scooter = {
//     speed: 60
// }
// const ferrari = {
//     speed: 350
// }
// car.showMaxSpeed.bind(scooter).call(ferrari)


//----------------------------
// 4. Function constructor

// function CarCreator(speed, brand) {
//     this.speed = speed;
//     this.brand = brand
// }
//
// const bmw = new CarCreator(200, 'bmw');
// const kia = new CarCreator(220, 'kia');
//
// console.log(bmw);
// console.log(kia);
//
// function foo() {
//     this.name = "bob"
//     return { age: 20}
// }


//----------------------------
// function foo() {
//     // this -> window
//     const x = 10;
//     //this.x = 40
//     return {
//         //x: 20,
//         bar: () => {
//             console.log(this.x);
//         },
//         baz: function () {
//             console.log(this.x)
//         }
//     }
// }
//
// const obj1 = foo()
// obj1.bar(); // undefined
// obj1.baz(); // 20


//----------------------------

function foo() {
    const x = 10;
    return {
        x: 20,
        bar: () => {
            console.log(this.x);
        },
        baz: function () {
            console.log(this.x)
        }
    }
}
const obj2 = foo.call({x:30})
// obj2.bar(); // 30
// obj2.baz(); // 20

let y = obj2.bar
let z = obj2.baz

console.log(y)
console.log(z)

y(); // 30
z(); // undefined