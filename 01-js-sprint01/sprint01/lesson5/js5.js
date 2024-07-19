const smallDiv = document.querySelector('#small')
const mediumDiv = document.querySelector('#medium')
const bigDiv = document.querySelector('#big')

const linkElement = document.querySelector('#link')

// subscriber, listener, watcher
// старый вариант
// const handler = () => {
//     console.log('click')
// }
//
// smallDiv.onclick = handler

// новый вариант
const handlerForSmall = (e) => {
    console.log('handler1')
    //console.log("event target", e.target)
    console.log("event currentTarget", e.currentTarget)
    e.stopPropagation()
}
const handlerForMedium = (e) => {
    console.log('handler1')
    //console.log("event target", e.target)
    console.log("event currentTarget", e.currentTarget)
}
const handlerForBig = (e) => {
    console.log('handler1')
    //console.log("event target", e.target)
    console.log("event currentTarget", e.currentTarget)
}

const linkHandler = (e) => {
    e.preventDefault()
    alert('another action')
}
// event object
// const handler1 = (e) => {
//     console.log('handler1')
//     console.log("event object", e)
// }

const handler2 = () => {
    console.log('handler2')
}

smallDiv.addEventListener('click', handlerForSmall)
mediumDiv.addEventListener('click', handlerForMedium)
bigDiv.addEventListener('click', handlerForBig)

linkElement.addEventListener('click', linkHandler)
//подписаться

// smallDiv.addEventListener('click', handler1, true)
// mediumDiv.addEventListener('click', handler1, true)
// bigDiv.addEventListener('click', handler1, {capture: true, once: true})

//отписаться
//smallDiv.removeEventListener('click', handler1)
//чтобы посмотреть сколько подписчиков надо в chrome в console написать
//getEventListeners(smallDiv)