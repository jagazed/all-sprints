const sm = document.getElementById("small")
const md = document.getElementById("medium")
const bg = document.getElementById("big")

const handler1 = (event) => {
    if (event.currentTarget.id === "small"){
        alert()
    }
}


// const handler2 = (event) => {
//     console.log(event.currentTarget);
// }
// const handler3 = (event) => {
//     console.log(event.currentTarget);
// }


//sm.onclick = handler1;
// sm.onclick = handler2;
// sm.onclick = null;
//console.log(sm)

// const func = () => handler2("yo")

sm.addEventListener("click", handler1)
// sm.addEventListener("click", func)
// sm.removeEventListener("click", func)
console.dir(sm)
// md.addEventListener("click", handler2, false)
// bg.addEventListener("click", handler3, {capture: false})