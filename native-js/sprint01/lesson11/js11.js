// const car1 = {
//     brand: 'bmw',
//     color: 'black'
// }
// const car2 = {
//     brand: 'kia',
//     color: 'white'
// }
// const car3 = {
//     brand: 'audi',
//     color: 'red'
// }

//----------------------------------
// function carCreator(brand, color) {
//     return {
//         brand: brand,
//         color: color,
//         startEngine: function (){
//             console.log(`start ${this.brand}`)
//         }
//     }
// }
//
// const car1 = carCreator('bmw', 'black')
// const car2 = carCreator('audi', 'gold')
// //console.log(car1)
// car1.startEngine()
// car2.startEngine()
// console.log(car1)
// console.log(car2)

//----------------------------------
// function carCreator(brand, color) {
//     this.brand = brand
//     this.color = color
//     // this.startEngine = function (){
//     //     console.log(`Start ${this.brand}`)
//     // }
// }
//
// // убрано в комменты
// carCreator.prototype.startEngine = function (){
//     console.log(`Start ${this.brand}`)
// }
//
// const car1 = new carCreator('bmw', 'black')
// const car2 = new carCreator('audi', 'gold')
// console.log(car1)
// console.log(car2)
//
// car1.startEngine()
// car2.startEngine()


//----------------------------------
//classes

//1
// class Car {
//     constructor(brand, color) {
//         this.wheels = 4
//         this.brand = brand
//         this.color = color
//     }
//     startEngine() {
//         console.log(`Start ${this.brand}`)
//     }
//     stopEngine() {
//         console.log(`Stop ${this.brand}`)
//         const carE = () => {
//             console.log(`See ${this.brand}`)
//         }
//         carE()
//     }
// }
// const car1 = new Car('bmw', 'black')
// const car2 = new Car('audi', 'gold')
// console.log(car1)
// console.log(car2)
//
// car1.startEngine()
// car2.startEngine()
//
// car1.stopEngine()
// car2.stopEngine()

//----------------------------------
//2
// class Car {
//     #wheels
//     constructor(brand, color) {
//         this.#wheels = 4
//         this.brand = brand
//         this.color = color
//     }
//     startEngine() {
//         console.log(`Start ${this.brand}`)
//     }
//     getWheels() {
//         return this.#wheels
//     }
//     setWheels(newValue) {
//         if (typeof newValue !== 'number'){
//             throw Error('value must be a number')
//         }
//         this.#wheels = newValue
//     }
// }
//
// const car1 = new Car('bmw', 'black')
// const car2 = new Car('audi', 'gold')
//
// console.log(car1.getWheels())
// car1.setWheels('asd')
// console.log(car1.getWheels())
// console.log(car2)


//----------------------------------
//3
// class Car {
//     #wheels
//     constructor(brand, color) {
//         this.#wheels = 4
//         this.brand = brand
//         this.color = color
//     }
//     startEngine() {
//         console.log(`Start ${this.brand}`)
//     }
//     get wheels() {
//         console.log('get wheels')
//         return this.#wheels
//     }
//     set wheels(newValue) {
//         if (typeof newValue !== 'number') {
//             throw Error('value must be a number')
//         }
//         this.#wheels = newValue
//     }
// }
//
// const car1 = new Car('bmw', 'black')
// const car2 = new Car('audi', 'gold')
//
// console.log(car1.wheels)
// car1.wheels = 5
// console.log(car1.wheels)
// console.log(car2)

//----------------------------------
//4
// class Car {
//     #wheels
//
//     constructor(brand, color, speed) {
//         this.#wheels = 4
//         this.brand = brand
//         this.color = color
//         this.speed = speed
//     }
//
//     startEngine() {
//         console.log(`Start ${this.brand}`)
//     }
//
//     get wheels() {
//         console.log('get wheels')
//         return this.#wheels
//     }
//
//     set wheels(newValue) {
//         if (typeof newValue !== 'number') {
//             throw Error('value must be a number')
//         }
//         this.#wheels = newValue
//     }
//
//     static compartCarSpeed(car1, car2) {
//         car1.speed > car2.speed
//             ? console.log(`${car1.brand} if faster then ${car2.brand}`)
//             : console.log(`${car2.brand} if faster then ${car1.brand}`)
//     }
// }
//
// // Promise.all([pr1, pr2 , pr3])
//
// const bmw = new Car('bmw', 'black', 200)
// const audi = new Car('audi', 'gold', 220)
//
// Car.compartCarSpeed(bmw, audi)


//----------------------------------
//5
class Car {
    #wheels
    constructor(brand, color, speed) {
        this.#wheels = 4
        this.brand = brand
        this.color = color
        this.speed = speed
    }

    startEngine() {
        console.log(`Start ${this.brand}`)
    }

    get wheels() {
        console.log('get wheels')
        return this.#wheels
    }

    set wheels(newValue) {
        if (typeof newValue !== 'number') {
            throw Error('value must be a number')
        }
        this.#wheels = newValue
    }

    static compartCarSpeed(car1, car2) {
        car1.speed > car2.speed
            ? console.log(`${car1.brand} if faster then ${car2.brand}`)
            : console.log(`${car2.brand} if faster then ${car1.brand}`)
    }
}

const bmw = new Car('bmw', 'black', 200)
const audi = new Car('audi', 'gold', 220)

//Car.compartCarSpeed(bmw, audi)

class SuperCar extends Car {
    constructor(brand, color, speed, canFly) {
        super(brand, color, speed)
        this.canFly = canFly
    }
    fly() {
        console.log('start flying')
    }
    startEngine() {
        console.log('start from extended class')
    }
}

const superBmw = new SuperCar('superBmw', 'black', 400, true)
console.log(superBmw)

superBmw.fly()
bmw.startEngine()
superBmw.startEngine()
//console.log(superBmw)
SuperCar.compartCarSpeed(bmw, superBmw)