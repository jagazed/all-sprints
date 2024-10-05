export class GridSettings {
    #rowsCount
    #columnsCount

    constructor(rowsCount, columnsCount) {
        this.#rowsCount = rowsCount
        this.#columnsCount = columnsCount
    }

    get rowsCount() {
        return this.#rowsCount
    }

    get columnsCount() {
        return this.#columnsCount
    }
}
