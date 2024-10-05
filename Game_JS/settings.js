export class Settings {
    #gridSize
    #jumpInterval
    #winPoints

    constructor(gridSize, jumpInterval, winPoints) {
        this.#gridSize = gridSize
        this.#jumpInterval = jumpInterval
        this.#winPoints = winPoints
    }

    get gridSize() {
        return this.#gridSize
    }

    get jumpInterval() {
        return this.#jumpInterval
    }

    get winPoints() {
        return this.#winPoints
    }
}