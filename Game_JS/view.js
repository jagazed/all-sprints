import {GridView} from "./gridView.js";
import {GAME_STATUSES} from "./game.js";

export class View {
    #rootElement
    #gridView
    #controller


    constructor(elementId) {
        this.#rootElement = document.getElementById(elementId)
        this.#gridView = new GridView()
    }

    set controller (controller) {
        this.#controller = controller
    }

    async render() {
        const viewModel = await this.#controller.getViewModel()
        this.#rootElement.innerHTML = ''
        this.#rootElement.append(this.renderStartButton())
        this.#rootElement.append(this.renderStatus(viewModel.status))

        if (viewModel.status === GAME_STATUSES.IN_PROGRESS) {
            this.#rootElement.append(this.#gridView.render(viewModel))
        }

    }
    renderStartButton() {
        const buttonElement = document.createElement('button')
        buttonElement.append('Start')
        buttonElement.addEventListener("click", async () => {
            await this.#controller.startGame()
        })
        return buttonElement
    }


    renderStatus(status) {
        const statusElement = document.createElement('div')
        statusElement.append('Status: ' + status)
        return statusElement
    }

}