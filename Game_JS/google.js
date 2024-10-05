export class Google {
    #position
    #points = 0

    constructor(position) {
        this.#position = position
    }

    get position() {
        return this.#position
    }

    get points() {
        return this.#points
    }

    addPoint() {
        this.#points += 1
    }

    setPosition(newPosition) {
        this.#position = newPosition
    }
}