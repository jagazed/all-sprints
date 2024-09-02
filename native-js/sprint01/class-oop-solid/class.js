class User {
    constructor(name, site, dob) {
        this.name = name;
        this.site = site;
        this.dateOfBirth =dob;
        this.counter = 0;
    }

    hello() {
        this.counter++;
        console.log(`I am ${this.name} from ${this.site}`)
    }
}

const u1 = new User('Dimych', 'it-incubator.by', new Date(1989, 1, 2))
const u2 = new User('Artem', 'it-incubator.by', new Date(1989, 11, 27))

u1.hello()
u2.hello()