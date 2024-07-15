export type UserType = {
    name: string
    hair: number
    address: {
        city: string
        house?: number
    }
}
export type LaptopType = {
    title: string
}
export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}
export type UserWithBooksType = UserType & {
    books: Array<string>
}
type CompanyType = { id: number, title: string }

export type WithCompaniesType = UserType & {
    companies: Array<CompanyType>
}

export function makeHairstyle(u: UserType, power: number) {
    const copy = {
        ...u, hair: u.hair / power
    }
    return copy
}

export function moveUser(u: UserWithLaptopType, city: string) {
    return  {
        ...u, address : {...u.address, city: city}
    }
}
export function moveUserToOtherHouse(u: UserWithLaptopType & UserWithBooksType, house: number) {
    return  {
        ...u, address : {...u.address, house: house}
    }
}

export function upgradeUserLaptop(u: UserWithLaptopType, title: string) {
    return {
        ...u, laptop : {...u.laptop, title: title}
    }
}

export function addNewBooksToUser(u: UserWithLaptopType & UserWithBooksType, newBooks: Array<string>) {
    return  {
        ...u, books : [...u.books, ...newBooks]
    }
}
export const updateBook = (u: UserWithLaptopType & UserWithBooksType, oldBooks: string, newBooks: string) => ({
        ...u, books: u.books.map(b => b === oldBooks ? newBooks : b)
    })

export const removeBook = (u: UserWithLaptopType & UserWithBooksType, deleteBook: string) => ({
    ...u, books: u.books.filter(b => b === deleteBook ? '' : b)
})

export function addCompany(u: UserWithLaptopType & WithCompaniesType, newComp: Array<{  id: number, title: string }>) {
    return  {
        ...u, companies : [...u.companies, ...newComp]
    }
}
export const updateCompany = (u: WithCompaniesType, id: number, newTitle: string) => ({
    ...u, companies: u.companies.map(c => c.id === id ? {...c, title: newTitle} : c)
})
export const updateCompany2 = (companies: { [key: string]: Array<CompanyType> }, userName: string, companyID: number, newTitle: string) => {
    let companyCopy = {...companies}
    companyCopy[userName] = companyCopy[userName].map(c => c.id === companyID ? {...c, title: newTitle}: c)
    return companyCopy
}