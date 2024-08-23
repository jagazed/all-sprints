// let a = {} // new object()
// let b = [] // new Array()
// <User /> // new User({})
//
// let pr = new Promise( (resolve, reject) => {
//     setTimeout(() => {
//         console.log('ttt')
//         resolve()
//     }, 3000)
// })

//2
// let axios = {
//     get(){
//         let pr = new Promise( (resolve, reject) => {
//             setTimeout(() => {
//                 console.log('ttt')
//                 resolve("YoYoYo")
//             }, 3000)
//         })
//         return pr
//     }
// }
//
// axios.get()
//     .then(data => console.log(data))
//     .then(() => {console.log("1")})
//     .then(() => {console.log("2")})
//     .catch( (data) => {console.error(data)})

//3
// let axios = {
//     get(){
//         let pr = new Promise( (resolve, reject) => {
//             setTimeout(() => {
//                 console.log('ttt')
//                 resolve("YoYoYo")
//             }, 3000)
//         })
//         return pr
//     }
// }
//
// let promise = axios.get()
//
//     promise.then((message) => {
//         console.log(message)
//         return 1
//     })
//     .then((data) => {console.log(data)})
//     .then(() => {console.log("2")})
//         .then((data) => {console.log(data)})
//     .catch( (data) => {console.error(data)})

//4
// let axios = {
//     get(){
//         return new Promise( (resolve, reject) => {
//             setTimeout(() => {
//                 // console.log('ttt')
//                 // resolve("YoYoYo")
//                 resolve({
//                     G:2,
//                     g3: 4,
//                     message: "yoyoyo"
//                 })
//             }, 3000)
//         })
//         return pr
//     }
// }
//
// let promise = axios.get()
//
// promise.then((message) => {
//     //console.log("log",message.message)
//     return message.message
// })
//     .then((data) => {
//         console.log("log", data)
//         //return data
//     })
//     .then((data) => {console.log("data", data)})
//     .then((data) => {console.log(data)})
//     .catch( (data) => {console.error(data)})

//5
// let axios = {
//     get(){
//         return new Promise( (resolve, reject) => {
//             setTimeout(() => {
//                 resolve({
//                     G:2,
//                     g3: 4,
//                     message: "yoyoyo"
//                 })
//             }, 3000)
//         })
//         return pr
//     }
// }
//
// let promise = axios.get()
//
// promise.then((message) => {
//     return new Promise((res) => {
//         res('New Promise')
//     })
// })
//     .then((data) => {
//         console.log("log", data)
//         //return data
//     })
//     .then((data) => {console.log("data", data)})
//     .then((data) => {console.log(data)})
//     .catch( (data) => {console.error(data)})


//6
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

//7
let fetch = (url) => {
    return new Promise((res, rej) => {
        switch (url) {
            case 'google': {
                setTimeout(() => {
                    res({data: 'from goolge'})
                }, 2000)
                break;
            }
            case 'yahoo': {
                setTimeout(() => {
                    res({data: 'from yahoo'})
                }, 4000)
                break;
            }
            case 'bing': {
                setTimeout(() => {
                    res({data: 'from bing'})
                }, 3000)
                break;
            }
        }
    })
}

// let makeRequests = () => {
//     fetch("google")
//         .then((data) =>{
//             console.log('data form google')
//             return fetch("yahoo")
//         })
//         .then((data) =>{
//             console.log('data form yahoo')
//             return fetch("bing")
//         })
//         .then((data) =>{
//             console.log('data form bing')
//         })
// }
//
// makeRequests()

// let makeRequests2 = async () => {
//     let data = await fetch("google");
//     console.log(data)
//     data = await fetch("yahoo")
//     console.log(data)
//     data = await fetch("bing")
//     console.log(data)
// }
//
// makeRequests2()

// let makeRequstAtTheOneMoment = async () => {
//     let promises = [
//         fetch("google"),
//         fetch("yahoo"),
//         fetch("bing")
//     ]
//
//     let data = await Promise.all(promises)
// }

// let makeRequstAtTheOneMoment = async () => {
//     let dataFromGoogle = await fetch("google")
//     if (dataFromGoogle.isAuth) {
//         let promises = [
//             fetch("yahoo"),
//             fetch("bing")
//         ]
//
//         let data = await Promise.all(promises)
//     }
//
//
// }
// makeRequstAtTheOneMoment()