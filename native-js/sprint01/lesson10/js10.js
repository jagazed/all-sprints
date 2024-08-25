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
const car = {
    speed: 200,
    showMaxSpeed(a, b) {
        console.log(this.speed)
    }
}
const scooter = {
    speed: 60
}
const ferrari = {
    speed: 350
}
car.showMaxSpeed.bind(scooter).call(ferrari)
