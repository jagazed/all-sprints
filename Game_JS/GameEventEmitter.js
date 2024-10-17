export class GameEventEmitter{
    #listeners
    constructor() {
        this.#listeners = []
    }

    on(callback) {
        this.#listeners.push(callback)
    }

    emit(data) {
        if (this.#listeners) {
            this.#listeners.forEach(callback => callback(data))
        }
    }
}