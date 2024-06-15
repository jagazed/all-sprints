type UsersType = {
    [key: string]: {id: number, name: string}
}
export const users: UsersType = {
    '101': {id: 101, name: 'Dimych'},
    '3232312': {id: 3232312, name: 'Natasha'},
    '1212': {id: 1212, name: 'Valera'},
    '1': {id: 1, name: 'Katya'},
}
//users[1] //достать
var user = {id: 100500, name: 'Igor'}
users[user.id]= user; //добавление в массив
delete users[user.id] //удаление
users[user.id].name = 'Vitya'
export const usersArray = [
    {id: 101, name: 'Dimych'},
    {id: 3232312, name: 'Natasha'},
    {id: 1212, name: 'Valera'},
    {id: 1, name: 'Katya'}
]

//usersArray.find(u => u.id === 1) // достать
//var usersCopy = [...usersArray.filter(), user]  //добавление в массив
//var users = usersArray.filter(u => u.id !== user.id) //удаление из массива


//0(1) измерения сложности доступа к массиву
//0(n)