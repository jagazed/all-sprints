// promise .then .catch /finally
// важная тема
//import fetch from "node-fetch";
//import fetchPromise from 'fetchPromise'

//1
// был такой вариант
// function fetchCallback(url, callback) {
//     //
//     callback()
// }


// fetchCallback('https://booksstore.com/authors', (err, data) => {
//     if (err) {
//         console.log(err)
//     } else {
//         fetchCallback(`https://booksstore.com/authors/${data.authorid}`, (err, data) => {
//             if (err) {
//                 console.log(err)
//             } else {
//                 ...
//             }
//         })
//     }
// })

// fetchPromise("https://booksstore.com/authors")
//     .then((data) => {
//         fetchPromise("https://booksstore.com/authors/${data.authorid}")
// })




fetchPromise ("https://booksstore.com/authors")
    .then((data) => {
        return fetchPromise("https://booksstore.com/authors/${data.authorId}");
    })
    .then((data) => {
        return fetchPromise("https://booksstore.com/authors/autorId/${data.books}");
    })
    .then((data) => {
        return fetchPromise("https://booksstore.com/authors/autorId/books/${data.bookId}");
    })
    .then((data) => {
        return fetchPromise("https://booksstore.com/authors/autorId/books/bookId/${data.page}");
    })
    .catch((err) => {
        console.log(err)
    })



//promise

// function Promise(executor) {
//
//     const resolve = (data) => {
//         return {
//             state: 'fullfilled',
//             result: data
//         }
//     }
//     const reject = (err) => {
//         return {
//             state: 'rejected',
//             result: err
//         }
//     }
//
// }

// const promise = new Promise((res, rej) => {
//     setTimeout(() => {
//         //res('some data from server')
//         rej('error from server2')
//     }, 2000)
// })
//
// console.log(promise)



// const axios = {
//     get(url) {
//         return new Promise((res, rej) => {
//             fetch(url, (err, data)=> {
//                 if (err) {
//                     rej(err)
//                 }
//                 res(data)
//             })
//         })
//     }
// }
//
// const pr = axios.get('books.com')

//const pr = fetchPromise('book.com')


// console.log('start')
// const promise = new Promise((res, rej) => {
//     setTimeout(() => {
//         res('some data from server')
//         rej('error from server2')
//     }, 2000)
// })
//
// console.log('end')

//3
// function fetchPromise() {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             //res('some data from server')
//             rej('error from server2')
//         }, 2000)
//     })
// }
//
// fetchPromise().then(
//     (data) => {
//         console.log(data);
//     },
//     (err) => {
//         console.log(err);
//     })
// код вверху
// .catch((err) => {
//     console.log(err)
// })

//4
// function fetchPromise() {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             //res('some data from server')
//             //rej('error from server2')
//             return false
//         }, 2000)
//     })
// }
// fetchPromise()
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log(err);
//     })
// .finally(() => {
//     console.log("finally")
// })

// function delay(time) {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             rej("reject1 ")
//         }, time)
//     })
// }
// delay(1000)
//     .catch((t) => t + "catch1 ")
//     .catch((t) => t + "catch2 ")
//     .then((t) => t + "then1 ")
//     .finally((t) => t + "finally")
//     .then((t) => console.log(t)); //reject1 catch1 then1
