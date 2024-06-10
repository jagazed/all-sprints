const ages = [10, 20, 22, 1, 100, 90, 14];

const predicate = (age: number) => {
    return age > 90;
}

console.log(predicate(ages[0]));
const oldAges = [100]; // > 90

type CoursesType = {
    title: string
    price: number
}

const courses = [
    {title: "CSS", price: 110},
    {title: "JS", price: 200},
    {title: "REACT", price: 150}
]


const cheapPredicate = (courses: CoursesType) => {
    return courses.price < 160;
}

const cheapCourses = [
    {title: "CSS", price: 110},
    {title: "REACT", price: 150}
]