
// это все что связано с хостингом(всплытием)

// let car = 'bmw'
//
// function startEngine() {
//     console.log(`start ${car}`);
//
// }
//
// car = 'audi';
// startEngine();

// const glovalLE = {
//     environmentRecords: {
//
//     },
//
//     outer: null
// }
//
// globalLE {} -> null

// foo();
// // bar();
// // baz();
// console.log(a)
//
// function foo() {
//     console.log("foo");
// }
//
// const bar = function () {
//     console.log("bar")
// }
//
// const baz = () => {
//     console.log("baz")
// }
//
// var a = 'str'
// let b = 10;
// const c = 20;
// console.log(a)

// что то другое

// globalLE {} -> null
//let car = 'bmw' // globalLE {car: 'bmw'} -> null

//car ='kia' // globalLE {car: 'kia'} -> null
// мы работаем всегда с объектами Lexical Environment
// объекты лексического окружения
// {
//     //le
// }
// //исключение
// const obj = {
//     // не создается le внутри
// }

//const {name, id} = props // globalLE {{name, id} : props} -> null
// все что мы пишем в целом все залетает в globalLE
//const arr = [] // globalLE {car: 'bmw', arr: []} -> null

// while () { // while это кусок кода
//     //whileLE {}
//     const car = 'audi'
// }
// 1
// globalLE {startEngine: func, car: undefined} -> null
// startEngine()
// var car = 'bmw' // globalLE {startEngine: func, car: 'bmw'} -> null
//
// function startEngine() {
//     //startEngineLE {} -> globalLE
//     console.log(`start ${car}`);
//
// }
// const foo = startEngine();  // globalLE {startEngine: func, car: 'bmw', foo: undefined } -> null // увидим car: 'bmw'
//
// car = 'audi';

// 2
// globalLE {startEngine: func, car: undefined} -> null
// var car = 'bmw' // globalLE {startEngine: func, car: 'bmw'} -> null
//
// function startEngine() {
//     //startEngineLE {} -> globalLE
//     //console.log(`start ${car}`);
//     return () => console.log(`start ${car}`);
// }
// const foo = startEngine();  // globalLE {startEngine: func, car: 'bmw', foo: func} -> null // foo: func -> будет
// // сидеть ссылка на функциюю () => console.log(`start ${car}`)
//
// car = 'audi'; // globalLE {startEngine: func, car: 'audi', foo: func} -> null
// foo()

//3
// globalLE {} -> null
// let car = 'bmw' // globalLE {func, car: 'bmw'} -> null
// const startEngine = () => { // globalLE {car: 'bmw', startEngine: func} -> null
//     // -> globalLE
//     console.log(`start ${car}`);
// }
// car = 'kia' // globalLE {car: 'kia', startEngine: func} -> null
// startEngine()

//4
// const App = () => {
//     const foo = () => {}
//     <button bar={foo} />
// }
//
// const Button = ({bar}) => {
//     bar()
// }

//5
// globalLE {} -> null
// const counterCreator = () => {
//     // -> globalLE // сразу ничего а потом вот эта строка при первом вызове
//     // counterCreatorLE {} -> globalLE
//     let count = 0; // counterCreatorLE {count: 0} -> globalLE
//
//     return () => {
//         // {} -> counterCreatorLE
//         console.log(++count);
//     };
// }
//
// const counter = counterCreator(); //ссылка на функцию //globalLE {counter: func} -> null
//
// counter();
// counter();
// counter();

// --------------
// 6
// самый важный пример
// const counterCreator = () => {
//     // -> globalLE // сразу ничего а потом вот эта строка при первом вызове
//     // counterCreatorLE {} -> globalLE
//     let count = 0; // counterCreatorLE {count: 0} -> globalLE
//
//     return () => {
//         // {} -> counterCreatorLE
//         console.log(++count);
//     };
// }
//
// const counter1 = counterCreator(); //ссылка на функцию //globalLE {counter: func} -> null
// const counter2 = counterCreator(); //ссылка на функцию //globalLE {counter: func} -> null
//
// console.log(counter1 === counter2); //false
//
// counter1();
// counter1();
// counter1();
//
// counter2();
// counter2();
// counter2();

// --------------
// 7
// рекурсия

// 2(4) --> 2 * 2(3) --> 2 * 2 * 2(2) --> 2 * 2 * 2 * 2(1)
// const pow = (x, n) => {
//     if (n === 1) { //условия выхода из рекурсия
//         return x
//     } else {
//         return x * pow(x, n-1) //шаг рекурсии n-1
//     }
// }
// pow(2,4)
// console.log(pow)
// шаг рекурсии
// условия выхода из рекурсия

// 8
// 5! --> 5 + 4! --> 5 * 4 * 3! --> 5 * 4 * 3 * 2! --> 5 * 4 * 3 * 2 * 1!
const factorial = (n) => {
    if (n === 1){
        return n
    } else {
        return n * factorial(n-1)
    }
}
console.log(factorial(12))