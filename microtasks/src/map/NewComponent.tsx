import React from 'react';

// type NewComponentType = {
//     students: Array<StudentType>
// }
//
// export type StudentType = {
//     id: number
//     name: string
//     age: number
// }

type NewCarsType = {
    newCars: Array<CarsType>
}
export type CarsType = {
    manufacturer: string
    model: string
}
export const NewComponent = (props: NewCarsType) => {

    return (
        <table>
            {props.newCars.map((objectFromStudentArray, index) => {
                return (
                    // <li key={objectFromStudentArray.id}>
                    //     <span>{objectFromStudentArray.name} </span>
                    //     <span>age: {objectFromStudentArray.age}</span>
                    // </li>

                        <tr key={index}>
                            <th>{index+1}</th>
                            <th>{objectFromStudentArray.manufacturer}</th>
                            <th>{objectFromStudentArray.model}</th>
                        </tr>

                )
            })}
        </table>
    );
};