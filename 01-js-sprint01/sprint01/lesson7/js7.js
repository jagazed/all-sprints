
//1
// fetch("https://google.com").then((data) =>{
//     console.log('data form google', data.url)
// })
// fetch("https://yahoo.com").then((data) =>{
//     console.log('data form google', data.url)
// })
// fetch("https://bing.com").then((data) =>{
//     console.log('data form google', data.url)
// })

//2
// fetch("https://google.com")
//     .then((data) =>{
//         console.log('data form google', data.url)
//         return fetch("https://yahoo.com")
// })
// .then((data) =>{
//     console.log('data form yahoo', data.url)
//     return fetch("https://bing.com")
// })
// .then((data) =>{
//     console.log('data form bing', data.url)
// })
// .catch((err) => {
//     console.log(err)
// })

//3
// const asyncFetch = async () => {
//     const yahooData = await fetch("https://yahoo.com")
//     console.log('data from yahoo', yahooData.url)
//
//     const bingData = await fetch("https://bing.com")
//     console.log('data form bing', bingData.url)
//
//     const googleData = await fetch("https://google.com")
//     console.log('data form google', googleData.url)
// }
//
// asyncFetch()

//4
// const asyncFetch = async () => {
//     try {
//         const yahooData = await fetch("https://yahoo.com")
//         console.log('data from yahoo', yahooData.url)
//
//         const bingData = await fetch("https://binsg.com")
//         console.log('data form bing', bingData.url)
//
//         const googleData = await fetch("https://google.com")
//         console.log('data form google', googleData.url)
//     } catch (err) {
//         console.log("ERROR", err)
//     }
// }
// asyncFetch()

//5
// fetchPromise ("https://booksstore.com/authors")
//     .then((data) => {
//         return fetchPromise("https://booksstore.com/authors/${data.authorId}");
//     })
//     .then((data) => {
//         return fetchPromise("https://booksstore.com/authors/autorId/${data.books}");
//     })
//     .then((data) => {
//         return fetchPromise("https://booksstore.com/authors/autorId/books/${data.bookId}");
//     })
//     .then((data) => {
//         return fetchPromise("https://booksstore.com/authors/autorId/books/bookId/${data.page}");
//     })
//     .catch((err) => {
//         console.log(err)
//     })
//
// const fetchAsync = async () => {
//     try {
//         const dataFrom1request = await fetchPromise("https://booksstore.com/authors");
//         const dataFrom2request = await fetchPromise("https://booksstore.com/authors/${dataFrom1request.authorId}");
//         const dataFrom3request = await fetchPromise("https://booksstore.com/authors/autorId/${dataFrom2request.books}");
//         const dataFrom4request = await fetchPromise("https://booksstore.com/authors/autorId/books/${dataFrom3request.bookId}");
//         const dataFrom5request = await fetchPromise("https://booksstore.com/authors/autorId/books/bookId/${dataFrom4request.page}");
//         console.log(dataFrom5request)
//     } catch (err) {
//         console.log("ERROR", err)
//     }
// }
//
// fetchAsync().then(() => {
//     console.log('then from async')
// })

//6
//function* foo(){}
//function * foo(){}
//const generator = function* foo () {}

// function* gerateSalaryWithBonus(salary) {
//     console.log('before 1 yield')
//     yield salary + (salary / 100) * 15;
//     console.log('before 2 yield')
//     yield salary + (salary / 100) * 20;
//     console.log('before 3 yield')
//     yield salary + (salary / 100) * 25;
//     console.log('before 4 yield')
//     yield salary + (salary / 100) * 30;
//     console.log('before 5 yield')
//     return salary + (salary / 100) * 35; // лучге завершать через return тогда в done будет true
// }
//
// const generator = gerateSalaryWithBonus(1000)
//
// console.log(generator.next().value);
// console.log(generator.next().value);
// console.log(generator.next().value);
// console.log(generator.next().value);
// console.log(generator.next().value);
//console.log(gerateSalaryWithBonus(1000))


//7
// all, race, any, allSettled

// const pr1 = fetch("https://yahoo.com")
// const pr2 = fetch("https://bing.com")
// const pr3 = fetch("https://google.com")
//
// const bigPromise = Promise.all([pr1, pr2, pr3])
//
// bigPromise
//     .then((bigData) => {
//     console.log(bigData)
// })
//     .catch((err) => {
//     console.log("ERROR", err.message)
// })

// тоже самое
// Promise.all([
//     fetch("https://yahoo.com"),
//     fetch("https://bing.com"),
//     fetch("https://google.com")
// ])
//     .then((bigData) => {
//         console.log(bigData)
//     })
//     .catch((err) => {
//         console.log("ERROR", err.message)
//     })

//8
// Promise.race([
//     fetch("https://yahoo.com"),
//     fetch("https://bing.com"),
//     fetch("https://google.com")
// ])
//     .then((data) => {
//         console.log(data.url)
//     })
//     .catch((err) => {
//         console.log("ERROR", err.message)
//     })

//9
Promise.any([
    fetch("https://yahoo.com"),
    fetch("https://bing.com"),
    fetch("https://google.com")
])
    .then((data) => {
        console.log(data.url)
    })
    .catch((err) => {
        console.log("ERROR", err.message)
    })

//10
// Promise.allSettled([
//     fetch("https://yahoo.com"),
//     fetch("https://bing.com"),
//     fetch("https://google.com")
// ])
//     .then((data) => {
//         console.log(data)
//     })
//     .catch((err) => {
//         console.log("ERROR", err.message)
//     })
