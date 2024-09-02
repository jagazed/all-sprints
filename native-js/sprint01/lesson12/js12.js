// class Car {
//     constructor(brand, speed) {
//         this.brand = brand
//         this.speed = speed
//         this.state = {}
//         this.state ={}
//     }
//     startEngine() {
//         console.log(`Start ${this.brand}`)
//     }
//     stopEngine = function () {
//         console.log(`Start ${this.brand}`)
//     }
// }
//
// const car1 = new Car('bmw', 200)
// const car2 = new Car('bmw', 220)

// __proto__ - это свойство является ссылкой на prototype класса (функции конструктора),
// с помощью которого был создан данный объект

// console.log(car1 === car2) //false
// console.log(car1.brand === car2.brand) //true
// console.log(car1.startEngine === car2.startEngine) //true
// console.log(car1.state === car2.state) //false
// console.log(car1.stopEngine === car2.stopEngine) //false

// console.log(car1.__proto__ === Car.prototype) //true
// console.log(car2.__proto__ === Car.prototype) //true

// const obj1 = new Object()
// const obj2 = {}

// console.log(obj1.__proto__ === Object.prototype)
// console.log(obj2.__proto__ === Object.prototype)

// function func() {}
// console.log(func.__proto__ === Function.prototype)
//
// const foo = () => {}
// console.log(foo.__proto__ === Function.prototype)
//
// const a = 'str'
// const b = 'str'
//
// console.log(a === b)
// console.log(a.__proto__ === String.prototype)

// const num = 22
// console.log(num.__proto__ === Number.prototype)

// console.log(car1.__proto__ === Car.prototype) //true
// console.log(car1.__proto__.__proto__ === Object.prototype) //true
// console.log(car1.__proto__.__proto__.__proto__=== null ) //true

// console.log(Car.__proto__ === Function.prototype) // true
// console.log(Array.__proto__ === Function.prototype) // true
// console.log(Object.__proto__ === Function.prototype) // true
// console.log(Boolean.__proto__ === Function.prototype) // true
// console.log(Function.__proto__ === Function.prototype) // true

function Car(brand, speed) {
    this.brand = brand
    this.speed = speed
}

Car.prototype.startEngine = function () {
    console.log(`Start ${this.brand}`)
}

Car.compareCars = function (){
    console.log("cars were compare")
}

function SuperCar(brand, speed, canFly) {
    Car.call(this, brand, speed)
    this.canFly = canFly
}

SuperCar.prototype.fly = function () {
    console.log(`${this.brand} is flying`)
}

// SuperCar.prototype.__proto__ = Car.prototype
// SuperCar.__proto__ = Car
// тоже самое что и внизу, только новый синтексис
Object.setPrototypeOf(SuperCar.prototype, Car.prototype)
Object.setPrototypeOf(SuperCar, Car)

const superCar1 = new SuperCar("superBmw", 400, true)

console.log(superCar1)
superCar1.fly()
superCar1.startEngine()
Car.compareCars()
SuperCar.compareCars()

console.log(null == undefined)