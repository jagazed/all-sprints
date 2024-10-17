export class Controller {
    /** @type {View} */
    #view
    /** @type {Game} */
    #model
    // есть класс Controller когда его будут инстанцилировать (создавать экземпляр класса) должны буду засунуть view
    // и модель это называется Dependency Injections
    // Dependency Injections
    constructor(view, model) {
        this.#view = view
        this.#model = model
        this.#view.controller = this

        this.#model.subscribe(async () =>{
            await this.#view.render()
        })
    }

    async getViewModel() {
        const status = await this.#model.getStatus()
        const settings = await this.#model.getSettings()
        const googlePosition = await this.#model.getGooglePosition()
        return {
            status: status,
            settings: settings,
            googlePosition: {...googlePosition}
        }
    }

    async startGame() {
        await this.#model.start()
        await this.#view.render()
    }

    async init() {
        //const viewModel = await this.getViewModel()
        await this.#view.render()
    }
}