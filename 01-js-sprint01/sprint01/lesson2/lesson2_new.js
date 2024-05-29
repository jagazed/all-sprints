//push(), pop(), shift(), unshift() -> мутирующие методы массива

//push() добавляет элементы в массив
// const names = ['Alex', 'Bob', 'Ivan', 'Sasha']
// const result = names.push("New name 1", "New name 2")
//
// console.log("names: ", names)
// console.log("result: ", result)

//pop() удаляет последний элемент масива
// const names = ['Alex', 'Bob', 'Ivan', 'Sasha'];
// const poppedResult = names.pop();
//
// console.log("names: ", names);
// console.log("poppedResult: ", poppedResult);

// const names = [];
// const result = names.pop();
//
// console.log("names: ", names); //names: []
// console.log("result: ", result); //result: undefined

//shift() удаляет первый элемент масива
// const names = ['Alex', 'Bob', 'Ivan', 'Sasha'];
// const shiftedResult = names.shift();
// console.log("names: ", names);
// console.log("shiftedResult: ", shiftedResult);

//unshift() добавляет элементы в начало массива
// const names = ['Alex', 'Bob', 'Ivan', 'Sasha'];
// const unshiftedResult = names.unshift("new name1", "new name2");
//
// console.log("names: ", names);
// console.log("unshiftedResult: ", unshiftedResult);

//reverse() - мутирующий метод массива, меняет порядком массив. Не используем к строке!
// const arr = [1, 2, 3, 4, 5];
// arr.reverse();
//
// console.log("reverse array: ", arr); //reverse array: [5, 4, 3, 2, 1]

//split() - преобразует строку в массив
// const str = 'ab-cd-ef';
// const result = str.split('-', 2)
//
// console.log("result: ", result)
// const str = 'ab-cd-ef';
// const res = str.split("");
//
// console.log("res: ", res)

//join() - метод массива, который обьединяет в строку
//1
// const names = ['Alex', 'Bob', 'Ivan', 'Sasha'];
// const joinResult = names.join("-");
//
// console.log("joinResult: ", joinResult); //joinResult:  Alex-Bob-Ivan-Sasha

//2
// const names = ['Alex', 'Bob', 'Ivan', 'Sasha'];
// const joinResult = names.join();
// console.log("joinResult: ", joinResult); // joinResult: Alex,Bob,Ivan,Sasha

//3
// const names = ['Alex', 'Bob', 'Ivan', 'Sasha'];
// const joinResult = names.join("");
// console.log("joinResult: ", joinResult); // joinResult: AlexBobIvanSasha

//4
// const names = ['Alex', 'Bob', 'Ivan', 'Sasha'];
// const joinResult = names.join(" ,");
// console.log("joinResult: ", joinResult); // joinResult: Alex ,Bob ,Ivan ,Sasha

//popular task
// const telephoneNumber = '123456789';
// const result = telephoneNumber.split('');
//
// console.log(result.reverse().join(''));

//concat() - не мутирует исходный массив, добавляет к массиву массив / массивы
// const arr1 = [1, 2]
// const arr2 = [3, 4]
// const arr3 = [5, 6]
// const res = arr1.concat(arr2, arr3)
//
// console.log('res', res) // [ 1, 2, 3, 4, 5, 6 ]

// const arr1 = [1, 2]
// const arr2 = [3, 4]
//
// const nestedArr = [
//     [5, 6],
//     [7, 8, [9, 10]],
// ];

// const result = arr1.concat(arr2, nestedArr);
// console.log("result: ", result); //result:  [ 1, 2, 3, 4, [ 5, 6 ], [ 7, 8, [ 9, 10 ] ] ]


//flat() - убирает уровни вложенности

// const flatRes = nestedArr.flat(1); //result:  [ 5, 6, 7, 8, [ 9, 10 ] ]
// console.log("result: ", flatRes);

// const flatRes = nestedArr.flat(Infinity); // все уровни раскрывает
// console.log("result: ", flatRes); //result:  [ 5, 6, 7, 8, 9, 10 ]

//forEach()
//arr.forEach(function(el, index, arr) => {})

// const arr = [1, 2, 3, 4, 5];
// let sum = 0
// arr.forEach(function (el) {
//     sum += el;
// })

//console.log(sum); //sum: 15

//IndexOf()

// const arr = [1, 2, 3, 4, 5];
// const res = arr.indexOf(6);
// console.log("res: ", res); //res:  -1

//lastIndexOf()
// const arr = [1, 2, 3, 4, 5];
// const res = arr.lastIndexOf(5);
// console.log("res: ", res); //res:  -1

//find() - находит первое совпадение

//1
// const strArr = ['str', 'strststs', 'fgfgf', 'dff', 'fgdgfdgd'];
// const res = strArr.find((el) => {
//     return el.length == 3;
// });
// console.log("res: ", res);

//2
// const arr = [1, 2, 3, 4, 5];
// const res = arr.find((num) => {
//     return num % 2 === 0;
// });
//
// console.log("res: ", res); //res:  2

//includes()
// 1
// const num = [1, 2, 3, 4, 5];
// const result = num.includes(5);
//
// console.log("result: ", result); // true
// 2
// const num = [1, 2, 3, 4, 5];
// const result = num.includes(7);
//
// console.log("result: ", result); // false

//filter() => return new []
// const words = ['spray', 'elite', 'exuberant', 'destruction', 'present']
//
// const result = words.filter(word => word.length > 5)
// console.log(result) // [ 'exuberant', 'destruction', 'present' ]

//sort()

//1) может сортировать без доп параметров на табличке unicode

// const names = ["Alex", "!alex", "alex", "Виктор", "Dymych", "Valera", "Igor", "Ignat"];
//
// console.log(names.sort());
//[
// '!alex',  'Alex',
//     'Dymych', 'Ignat',
//     'Igor',   'Valera',
//     'alex',   'Виктор'
// ]

// const numbers = [1, 2, -3525523, 366643, -3, 15215];
// console.log(numbers.sort()); //[ -3, -3525523, 1, 15215, 2, 366643 ]

//2 мутирует исходный массив т.е. мутабельный метод массива

// const names = ["Alex", "alex"];
// console.log(names.sort() === names); //true

//compare function for sort:
//по возрастанию
// const numbers = [1, 2, -3525523, 366643, -3, 15215];
// const result = numbers.sort((a, b) => a - b) // a - b < 0, a ставят на наименьший индекс(т.е. первее)
// console.log(result);

//по убыванию
// const numbers = [1, 2, -3525523, 366643, -3, 15215];
// const result = numbers.sort((a, b) => b - a) // b - a > 0, b ставят на наименьший индекс(т.е. первее)
// console.log(result); //[ 366643, 15215, 2, 1, -3, -3525523 ]

// const users = [
//     {
//         id: 1,
//         name: 'Bob',
//         isStudent: true,
//     },
//     {
//         id: 2,
//         name: 'Alex',
//         isStudent: true,
//     },
//     {
//         id: 3,
//         name: 'alex',
//         isStudent: true,
//     },
//     {
//         id: 4,
//         name: 'Виктор',
//         isStudent: true,
//     },
//     {
//         id: 5,
//         name: 'виктор',
//         isStudent: true,
//     },
// ]
//
// console.log(users.sort((a, b) => b.name.localeCompare(a.name)));
//[
//    { id: 3, name: 'alex', isStudent: true },
//    { id: 2, name: 'Alex', isStudent: true },
//    { id: 1, name: 'Bob', isStudent: true }
//  ]

//toSorted()

const users1 = [
    {
        id: 1,
        name: 'Bob',
        isStudent: true,
    },
    {
        id: 2,
        name: 'Alex',
        isStudent: true,
    },
    {
        id: 3,
        name: 'Ann',
        isStudent: true,
    },
    {
        id: 4,
        name: 'Donald',
        isStudent: false,
    },
];

// const res = users1.map((user) => user.name);
// console.log(res);

function newMap(arr, callback) {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i]))
    }

    return result
}

const result = newMap(users1, (user) => user.name);
console.log(result);