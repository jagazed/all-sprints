export class Controller {
    /**
     * @type View
     */
    #view
    /**
     * @type Counter
     */
    #model

    constructor(view, model) {
        this.#view = view
        this.#model = model

        //this.#view.controller = this

        this.#view.onIncrement = () => this.increment()
    }

    async init() {
        this.#model.addEventListener(async () => {
            await this.#refreshUI()
        })
        this.#model.addEventListener(async () => {
            console.log("thx model i know about your changes")
        })

        await this.#model.start()
        await this.#refreshUI()
    }

    async #refreshUI() {
        const viewModelDTO = await this.mapModelToViewModelDTO()
        this.#view.render(viewModelDTO)
    }

    async mapModelToViewModelDTO() {
        return {
            value: this.#model.count
        }
    }

    async increment() {
        this.#model.increment();
        //await this.#refreshUI()
    }
}