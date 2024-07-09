const userName = (user = "") => {
    let userName: any = "Victor"
    userName += user
    return user;
}

const student = userName() || "Artem"

/*Какое значение получит переменная student? */
console.log("s_",student)
console.log("res",userName())