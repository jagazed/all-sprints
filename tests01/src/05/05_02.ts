import {GovernmentBuildingType, HouseType} from "../01-hello-tests/02/02_02";

export const getStreetsTitleOfGovernmentsBuildings = (buildings: Array<GovernmentBuildingType>) => {
    return buildings.map(b => b.address.street.title)
}

export const getStreetsTitleOfHouse = (houses: Array<GovernmentBuildingType>) => {
    return houses.map(s => s.address.street.title)
}

export const createMessages = (houses: Array<HouseType>) => {
    return houses.map( h => `Hello guys from ${h.address.street.title}`)
}