import {ManType} from "./Destructuring";
import exp from "node:constants";


let props: ManType;
beforeEach(()=> {
    props = {
        name: "Dimych",
        age: 32,
        lessons: [{title: "1"}, {title: "2"}, {title: "3", name: 'react'}],
        address: {
            street: {
                title: "Nezavisimosti street"
            }
        }
    }
})

test('', ()=> {
    //const age = props.age;
    //const lessons = props.lessons;
    const {age, lessons} = props;
    const {title} = props.address.street

    expect(age).toBe(32);
    expect(lessons.length).toBe(3);

    expect(title).toBe('Nezavisimosti street')
})

test('no words', ()=> {
    const l1 = props.lessons[0];
    const l2 = props.lessons[1];
    //const [ls1, ls2] = props.lessons;
    // если к третьем обьекту
    //const [,, ls3 ] = props.lessons;
    const [, ls2, ...restLessons] = props.lessons
    expect(l1.title).toBe('1')
    expect(l2.title).toBe('2')

    //expect(ls3.title).toBe('3')
    //expect(ls2.title).toBe('2')

    expect(restLessons.length).toBe(1)
    expect(restLessons[0].title).toBe('3')
    expect(restLessons[0].name).toBe('react')

    expect(restLessons[0]).toStrictEqual({name: 'react', title: '3'})
})