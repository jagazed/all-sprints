export class Controller {
    #view
    #model
    // есть класс Controller когда его будут инстанцилировать (создавать экземпляр класса) должны буду засунуть view
    // и модель это называется Dependency Injections
    // Dependency Injections
    constructor(view, model) {
        this.#view = view
        this.#model = model

    }

    async getViewModel() {
        const status = await this.#model.getStatus()
        const settings = await this.#model.getSettings()
        return {
            status: status,
            settings: settings
        }
    }

    async init() {
        const viewModel = await this.getViewModel()
        await this.#view.render(viewModel)
    }
}