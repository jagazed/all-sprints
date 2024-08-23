// let obj = {
//     name: 'Bob', //статическое св-во
//     age: 55 //статическое св-во
// };
//
// console.log("obj: ", obj)

// function createObj (key, value) {
//     let newObj = {};
//     newObj[key] = value;
//     return newObj
// }
//console.log(createObj("car", "BMW"))

// function createObj2 (key, value) {
//     return {
//         [key]: value
//     }
// }
//
// console.log(createObj2("car", "Audi"))

//1
// let propertyName = "status";
// const obj1 = {
//     name: "John", //статическое св-во
//     [propertyName]: 'checked' //динамическое(вычисляемое) св-во
// };
// console.log("obj1: ", obj1); //obj1:  { name: 'John', status: 'checked' }

//2
// let prefix = "status_";
// const obj2 = {
//     age: 25,
//     [prefix + 'id']: "new member"  //динамическое(вычисляемое) св-во
// }
//
// console.log("obj: ", obj2)

//3

// let index = 2;
// let testProperty = "test"
//
// let obj = {
//     [index + 2]: 4,
//     [testProperty.toUpperCase()]: "test key in upper case"
// }
// console.log(obj) //{ '4': 4, TEST: 'test key in upper case' }

//4
//Practical task:

// const STATUS_BUSY = 'busy';
// const STATUS_READY = 'ready';
//
// const STATUS_LABELS = {
//     [STATUS_BUSY]: 'ожидает',
//     [STATUS_READY]: 'готово'
// }
//
// const drivers = [
//     {name: "Pavel", status: "busy"},
//     {name: "Anna", status: "ready"},
//     {name: "Kiryll", status: "busy"}
// ]
//
// const driversStatuses = drivers.map((driver) => {
//     const { status } = driver; //const status = driver.status , получается { status } деструктуризация массива drivers
//     return STATUS_LABELS[status]
// });
// console.log(driversStatuses) // [ 'ожидает', 'готово', 'ожидает' ]


//Object.keys() - возвращает массив ключей

// const driver = {name: "Pavel", status: "busy"}
//
// const result = Object.keys(driver);
// console.log(result);

//!!!!!
// const driver = {name: "Pavel", status: "busy", country: {id : 1}};
// const result = Object.keys(driver);
// console.log(result); // [ 'name', 'status', 'country' ]


//Object.values() - возвращает массив значений

//1
// const driver = {name: "Pavel", status: "busy"}
//
// const result = Object.values(driver);
// console.log(result); // [ 'Pavel', 'busy' ]

//2
// const driver = {name: "Pavel", status: "busy", country: {id : 1}};
//
// const result = Object.values(driver);
// console.log(result); // [ 'Pavel', 'busy', { id: 1 } ]


//Object.entries() - возвращаем массив пар [ключ, значение]

//1
// const driver = {name: "Pavel", status: "busy"}
// const result = Object.entries(driver);
//
// console.log(result); // [ [ 'name', 'Pavel' ], [ 'status', 'busy' ] ]

//2
// const driver = {name: "Pavel", status: "busy", country: {id : 1}};
// const result = Object.entries(driver);
//
// console.log(result); // [ [ 'name', 'Pavel' ], [ 'status', 'busy' ], [ 'country', { id: 1 } ] ]


// new Map, new Set
// new Map () - это коллекция ключ\значение. Ключи могут быть любого типа
// Виктория ниразу за 4 года не использовала new Map, а вот new Set использовала для уникальных ключей

//1
// let map = new Map();
//
// const func = () => {}
// map.set(func, 'function')
// console.log(map.get(func))

// map.set('1', 'first value number');
// map.set(1, 'number'); // цифра как ключ
// map.set(true, 'boolean value'); // булево значение как ключ
// map.set([], 'array');
// map.set({}, 'object');
//
// console.log(map); // Map(5) {
//     '1' => 'first value number',
//         1 => 'number',
//         true => 'boolean value',
//         [] => 'array',
//         {} => 'object'
// }


//2
// let map = new Map();
// map.set('1', 'first value number');
// map.set(true, 'number'); // цифра как ключ

// console.log(map.get('1')); //first value number
// console.log(map.get(true)); //number

// map.clear();
// console.log(map);
//
// map.set("1", "one");
// map.set("2", "two");
// map.delete('2');
// console.log(map);
// console.log(map.size);


//new Set() - особый вид коллекции (множество без ключей). Все значения уникальные. Для работы с уникальными элементами

//1
//let set = new Set();
//console.log(set) // Set(0) {}

// set.add("value1");
// set.add("value2");
// set.add("value1");
//console.log(set) // Set(2) { 'value1', 'value2' }

// set.delete('value1')
// console.log("set after deleting: ", set); // set after deleting:  Set(1) { 'value2' }

// console.log("is it here? ", set.has('value1'))
//
// set.clear();
// console.log(set);

//2
//let set = new Set(['value1', 'value2', 3, 4]);
//console.log(set) // Set(4) { 'value1', 'value2', 3, 4 }

//let numbers = [1, 1, 1, 3, 4, 5, 6, 76, 7, 8, 9, 0, 6];
// let uniqueNumbers = new Set(numbers)
// console.log(uniqueNumbers); // Set(10) { 1, 3, 4, 5, 6, 76, 7, 8, 9, 0 }
//
// let newArr = [...uniqueNumbers]
// console.log(newArr); // [
//     1, 3, 4, 5, 6,
//     76, 7, 8, 9, 0
// ]

// let result = [... new Set(numbers)];
// console.log(result) //[
//     // 1, 3, 4, 5, 6,
//     //     76, 7, 8, 9, 0
//     // ]
// console.log(numbers);

//3
// let numbers = [1, 1, 1, 3, 4, 5, 6, 76, 7, 8, 9, 0, 6];
// let result = new Set(numbers).toArray



