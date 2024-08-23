// subscriber == listener == handler == watcher == observer -> это все слова синонимы, которые являются callback

const store = {
    subscribers: []
}

const button = {
    subscribers: {
        'click': [],
        'focus': [],
        'dbClick': []
    },
    addEventListener(eventName, subscriber) {
        this.subscribers[eventName].push(subscriber)

        return () => {
            this.subscribers[eventName] = this.subscribers[eventName].filter(sub => sub !== subscriber)
        }
    },
    click(e) {
        this.subscribers['click'].forEach(sub => sub(e))
    },
    focus() {
        this.subscribers['focus'].forEach(sub => sub())
    },
    dbClick() {
        this.subscribers['dbClick'].forEach(sub => sub())
    },
    removeEventListener(eventName, subscriber) {
        //this.subscribers[eventName] = this.subscribers[eventName].filter(sub => sub !== subscriber)
    }
}
const foo = () => {
    console.log("click on button")
}
button.addEventListener('click', foo)
const deleteClickSubscriber = button.addEventListener('click', foo)
deleteClickSubscriber()




//2
// const smallDiv = document.querySelector('#small')
// const mediumDiv = document.querySelector('#medium')
// const bigDiv = document.querySelector('#big')
//
// const link = document.querySelector('#link')
//
// function handler1(event) {
//     console.log('click on div ha', event.currentTarget)
//     event.stopPropagation()
// }
// function handler2(event) {
//     console.log('link on div ha')
//     event.preventDefault()
//     alert('asd')
// }
//
// //smallDiv.onclick = handler
//
// smallDiv.addEventListener('click', handler1, )
// //mediumDiv.addEventListener('click', handler1, {capture: true} )
// //mediumDiv.addEventListener('click', handler1, {capture: true, once: true} )
// mediumDiv.addEventListener('click', handler1)
// bigDiv.addEventListener('click', handler1)
// link.addEventListener('click', handler2)