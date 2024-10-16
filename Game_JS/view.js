import {GridView} from "./gridView.js";
import {GAME_STATUSES} from "./game.js";

export class View {
    #rootElement
    #gridView

    #onStartHandler

    constructor(elementId) {
        this.#rootElement = document.getElementById(elementId)
        this.#gridView = new GridView()
    }

    render(viewModel) {
        this.#rootElement.innerHTML = ''
        this.#rootElement.append(this.renderStartButton())
        this.#rootElement.append(this.renderStatus(viewModel.status))

        if (viewModel.status === GAME_STATUSES.IN_PROGRESS) {
            this.#rootElement.append(this.#gridView.render(viewModel.settings))
        }

    }
    renderStartButton() {
        const buttonElement = document.createElement('button')
        buttonElement.append('Start')
        buttonElement.addEventListener("click", async () => {
            await this.#onStartHandler()
        })
        return buttonElement
    }

    set onStart(callback) {
        this.#onStartHandler = callback
    }

    renderStatus(status) {
        const statusElement = document.createElement('div')
        statusElement.append('Status: ' + status)
        return statusElement
    }

}