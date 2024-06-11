import {getStreetsTitleOfGovernmentsBuildings} from "../05/05_02";

test("list of streets titles of goverments buildings", () => {
    let streetsName = getStreetsTitleOfGovernmentsBuildings(city.governmentBuildings);

    expect(streetsName.length).toBe(2);
    expect(streetsName[0]).toBe("Central Str");
    expect(streetsName[1]).toBe("South Str");

})