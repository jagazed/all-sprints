function icreaseAge(u: UserType) {
    u.age ++
}

type UserType = {
    name: string
    age: number
    address: {title: string}
}
test('reference type test', ()=>{
    var user = {
        name: 'Dimych1',
        age: 32
    }

    icreaseAge(user);

    expect(user.age).toBe(33)
})

test('Array reference test', ()=>{
    var users = [
        {
            name: 'Dimych1',
            age: 32
        },
        {
            name: 'Dimych1',
            age: 32
        }

    ]

    var admins = users
    admins.push({name: 'Bandyugan', age: 10})

    expect(users[2]).toEqual({name: 'Bandyugan', age: 10})
})

test('reference type2 test', ()=>{
    const address = {
        title: 'Minsk'
    }
    const user: UserType = {
        name: 'Dimych1',
        age: 32,
        address: address
    }

    //let addr = user.address

    const user2: UserType = {
        name: 'Natasha',
        age: 30,
        address: address
    }
    address.title = 'Minsk City';

    expect(user.address).toBe(user2.address)
    expect(user.address.title).toBe('Minsk City')
})

test('reference type array test', ()=>{
    const address = {
        title: 'Minsk'
    }
    const user: UserType = {
        name: 'Dimych',
        age: 32,
        address: address
    }

    const user2: UserType = {
        name: 'Natasha',
        age: 30,
        address: address
    }

    const users = [user, user2, {name: 'Misha', age: 4, address: address}]

    const admins = [user, user2]
    admins[0].name = 'Dmitry'

    expect(users[0].name).toBe('Dmitry')
    expect(user.name).toBe('Dmitry')
})