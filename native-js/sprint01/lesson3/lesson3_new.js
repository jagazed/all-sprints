//slice - иммутабельный
//поизиция, номер элемента на котором закончится вырезания
//arr.slice(откуда отрезать, [докуда отрезать]);

//1
// let arr = ['a', 'b', 'c', 'd', 'e']
// let subArr = arr.slice(0,2); //вырезает не включительно
//
// console.log("arr: ", arr);
// console.log("subArr: ", subArr);

//2
// let arr = ['a', 'b', 'c', 'd', 'e']
// let subArr = arr.slice();
//
// console.log("arr: ", arr); //arr:  [ 'a', 'b', 'c', 'd', 'e' ]
// console.log(arr === subArr); //false

//3
// let arr = ['a', 'b', 'c', 'd', 'e']
// let subArr = arr.slice(2);
//
// console.log("subArr: ",subArr); // [ 'c', 'd', 'e' ]

//splice - мутабельный
//массив.splice(откуда удаляем, сколько удаляем, [вставить], [вставить]...);

//1
// let arr = ['a', 'b', 'c', 'd', 'e'];
// let subArr = arr.splice(1, 3);
// console.log("arr: ", arr);
// console.log("subArr: ", subArr);

//2
// let arr = ['a', 'b', 'c', 'd', 'e'];
// let subArr = arr.splice(0, 0, 'test value1', 'test value2');
// console.log("arr: ", arr);
// console.log("subArr: ", subArr);

//toSpliced - иммутабельный, передаются переменные точно также как и в сплайсе

// const months = ['Jan', 'Mar', 'Apr', 'May'];
// const newMonths = months.toSpliced(1, 0, 'Feb');
//
// console.log("newMonths: ", newMonths);



//reduce()

// let a = [1, 2, 3, 4, 5];
// let sum = 0;
// for(let i = 0; i <a.length; i++) {
//     sum = sum + a[i];
// }

//console.log(sum);

// reduce(function (acc, item, index) {}, [])
// reduce(function (acc, item, index) {}) //стартовое значение acc = a[0], т.к. не указали его через запятую


//task 1
// let a = [1, 2, 3, 4, 5];
// let result = a.reduce(function (acc, current) {
//     // console.log("acc: ", acc);
//     // console.log("current: ", current);
//     return acc + current;
// }, 0)
// console.log("result: ", result);


//task 2
// const fruits = [
//     { name: 'apple', quantity: 2 },
//     { name: 'banana', quantity: 3 },
//     { name: 'orange', quantity: 1 },
// ]
//
// const totalQuantity = fruits.reduce(function (acc, fruit) {
//     console.log("acc: ", acc);
//     console.log("fruit: ", fruit);
//     return acc + fruit.quantity
// }, 0)
//
// console.log(totalQuantity) //6


//task 3
// const numbers = [5, 6, 7, 10, 6, 7];
// const maxNumber = numbers.reduce(function (acc, currentNumber) {
//     console.log("currentNumber: ", currentNumber);
//     console.log("acc: ", acc);
//     return currentNumber > acc ? currentNumber : acc
// }, numbers[0])
// console.log("maxNumber: ", maxNumber);


//task4
// const people = [
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 30 },
//     { name: 'Charlie', age: 22 },
// ]; // {names: [...], totalAges: 0}
//
// const result = people.reduce(function (acc, user) {
//     acc.names.push(user.name);
//     acc.totalAges += user.age;
//     return acc;
// }, {names: [], totalAges: 0})
//
// console.log(result);


//task5
// const people = [
//     { name: 'Vika', age: 25, budget: 4500 },
//     { name: 'Nikita', age: 45, budget: 35000 },
//     { name: 'Igor', age: 55, budget: 340 },
//     { name: 'Insaf', age: 65, budget: 50000 },
//     { name: 'Alyona', age: 75, budget: 20 },
// ]; // .. (number)
//
// const totalBudget = people.reduce((acc, budget) => {
//     return acc + budget.budget;
// }, 0);
//
// console.log(totalBudget);


//task 6
// const people = [
//     { name: 'Vika', age: 25, budget: 4500 },
//     { name: 'Nikita', age: 45, budget: 35000 },
//     { name: 'Igor', age: 55, budget: 340 },
//     { name: 'Insaf', age: 65, budget: 50000 },
//     { name: 'Alyona', age: 75, budget: 20 },
// ]; //{totalBudget: [...], names: [...]}
//
// const result = people.reduce( (acc, currentValue) => {
//     let sum = 0;
//     sum += currentValue.budget;
//     console.log("sum: ", sum);
//     acc.totalBudget.push(currentValue.budget);
//     acc.names.push(currentValue.name);
//     return acc;
// }, {totalBudget: [], names: []})
// console.log(result);


//task 7
// const peoples = [
//     { name: 'Vika', age: 25, budget: 4500 },
//     { name: 'Nikita', age: 45, budget: 35000 },
//     { name: 'Igor', age: 55, budget: 340 },
//     { name: 'Insaf', age: 65, budget: 50000 },
//     { name: 'Alyona', age: 75, budget: 20 },
// ];
// const words = ['Hello', ' ', 'world', '!'];
//
// const result = words.reduce((acc, el) => {
//     return acc + el;
// }, '');
//
// console.log(result);


//task 8
// const arr = [1, 20, 30, 60, 7, 0];
// const minNum = arr.reduce((acc, el) => {
//     return el < acc ? el : acc;
// })
//
// console.log(minNum);


