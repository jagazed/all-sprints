// 1
// const deleteUser = (userId) => {
//     const action = {
//         type: 'DELETE-USER',
//         payload: {
//             userId: userId
//         }
//         m:() {
//
//     }
//     }
//     return action
// }
//
// const action1 = deleteUser("121223")
// const action2 = deleteUser("444444")
//
// console.log(action1)
// console.log(action2)



//2
const userFabric = (name) => {
    const user = {
        name: name,
        site: 'it-incubator.by',
        dateOfBirth: new Date(1989, 1, 2),
        hello() {
            console.log(`I am ${this.name} from ${this.site}`)
        }
    }
    return user
}

const u1 = userFabric('Dimych')
const u2 = userFabric('Artem')

u1.hello()