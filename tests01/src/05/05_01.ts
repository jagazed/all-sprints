import exp from "node:constants";

export type ManType = {
    name: string
    age: number
}

const people: Array<ManType> = [
    { name: "Andrew Ivanov", age: 33},
    { name: "Alexander Petrov", age: 24},
    { name: "Dmitry Sidorov", age: 18}
]

const dimychTransformator = (man: ManType) => ({
        stack: ["css, html", "js", "tdd", "react"],
        firstName: man.name.split(" ")[0],
        lastName: man.name.split(" ")[1]
})

const devs = [
    {
        stack: ["css, html", "js", "tdd", "react"],
        firstName: "Andrew", lastname: "Ivanov"
    },
    {
        stack: ["css, html", "js", "tdd", "react"],
        firstName: "Alexander", lastname: "Petrov"
    },
    {
        stack: ["css, html", "js", "tdd", "react"],
        firstName: "Dmitry", lastname: "Sidorov"
    }
]


const dev2 = [
    dimychTransformator(people[0])
]

const dev3 = people.map(dimychTransformator)
const dev4 = people.map(man => ({
    stack: ["css, html", "js", "tdd", "react"],
    firstName: man.name.split(" ")[0],
    lastName: man.name.split(" ")[1]
}))

const messages = people.map( man => `Hello ${man.name.split(" ")[0]}. Welcome to IT-Incubator`)

export const createGreetingMessage = (people: Array<ManType>) => {
    return people.map( man => `Hello ${man.name.split(" ")[0]}. Welcome to IT-Incubator`)
}