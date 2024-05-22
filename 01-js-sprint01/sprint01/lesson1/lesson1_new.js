//примитивы
//string, number, boolean, null, undefined, symbol, BigInt

//ссылочные типы данных
//object, array, function/class,  map, set

//особенности ссылчных типов данных

//более сложная структура
//имеют свойства и методы
//ссылочный тип
//

const users1 = {
    id: 1,
    name: 'Bob',
    isStudent: true,
};

// const users2 = users1;
// users2.isStudent = false;
// //console.log('users2: ', users2);
// console.log('users1: ', users1);
// console.log('users2: ', users2);

//spread operator
const originalObj = { a: 12, b: 231 };
const shallowCopy = { ...originalObj };

// console.log(shallowCopy); // { a: 1, b: 2 }

const users2 = {...users1};
// console.log(users2.name = "Alex");
// console.log(users2);


const users = [
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
        isStudent: true,
    }
];

// const result1 = [...users].pop();
// console.log("users: ", users);


const superUser = {
    id: 10,
    name: 'Clementina DuBuque',
    username: 'Moriah.Stanton',
    email: 'Rey.Padberg@karina.biz',
    address: {
        street: 'Kattie Turnpike',
        suite: 'Suite 198',
        city: 'Lebsackbury',
        zipcode: '31428-2261',
        geo: {
            lat: '-38.2386',
            lng: '57.2232',
        },
    },
    phone: '024-648-3804',
    website: 'ambrose.net',
    company: {
        name: 'Hoeger LLC',
        catchPhrase: 'Centralized empowering task-force',
        bs: 'target end-to-end models',
    },
};

// const superUserCopy = {... superUser};
// superUserCopy.address.city = "Minsk";
// console.log("initial superUser", superUser.address.city);
// console.log("copy superUserCopy", superUserCopy.address.city);

// const superCopy2 = {...superUser, address: {...superUser.address, city: "Minsk", geo: {...superUser.address.geo, lat: "test value"}}, company: {...superUser.company, name: "BBC"}}
// console.log("initial superUser", superUser.address.city);
// console.log("copy superCopy2", superCopy2.address.city);
// console.log("initial geo superUser", superUser.address.geo.lat);
// console.log("copy geo superCopy2", superCopy2.address.geo.lat);
// console.log("company name superUser", superUser.company.name);
// console.log("company name superCopy2", superCopy2.company.name);

const structuredCloneCopy = structuredClone(superUser);
structuredCloneCopy.address.geo.lat = "test value";
console.log("superuser: ", superUser.address.geo.lat);
console.log("structuredCloneCopy: ", structuredCloneCopy.address.geo.lat);



