function DeleteUserAction(userId) {
    // this = {}
    this.type = 'DELETE-USER';
    this.payload = {
        userId: userId
    }
}

const action1 = new DeleteUserAction(121212)
const action2 = new DeleteUserAction(1212332)
console.log(action1)
console.log(action2)