import {StudentType} from "../01-hello-tests/02/02";

export const sum = (a: number, b: number) => {
    return a+b;
}

export const addSkills = ( student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}