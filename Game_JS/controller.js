import {MOVE_DIRECTIONS} from "./game.js";

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

        this.#model.subscribe(async () => {
            await this.#view.render()
        })

        document.addEventListener('keydown', this.handleKeyDown.bind(this))
    }

    async getViewModel() {
        const status = await this.#model.getStatus()
        const settings = await this.#model.getSettings()
        const googlePosition = await this.#model.getGooglePosition()
        const player1Position = await this.#model.getPlayer1Position()
        const player2Position = await this.#model.getPlayer2Position()
        const player1Score = await this.#model.getPlayer1Score()
        const player2Score = await this.#model.getPlayer2Score()
        const googleScore = await this.#model.getGoogleScore()

        return {
            status: status,
            settings: settings,
            googlePosition: {...googlePosition},
            player1Position: {...player1Position},
            player2Position: {...player2Position},
            player1Score,
            player2Score,
            googleScore
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

    async handleKeyDown(event) {
        let direction
        switch (event.key) {
            case 'ArrowUp':
                direction = MOVE_DIRECTIONS.UP
                break
            case 'ArrowDown':
                direction = MOVE_DIRECTIONS.DOWN
                break
            case 'ArrowLeft':
                direction = MOVE_DIRECTIONS.LEFT
                break
            case 'ArrowRight':
                direction = MOVE_DIRECTIONS.RIGHT
                break
            case 'w':
                direction = MOVE_DIRECTIONS.UP
                break
            case 's':
                direction = MOVE_DIRECTIONS.DOWN
                break
            case 'a':
                direction = MOVE_DIRECTIONS.LEFT
                break
            case 'd':
                direction = MOVE_DIRECTIONS.RIGHT
                break
            default:
                return
        }

        if (event.key === 'w' || event.key === 's' || event.key === 'a' || event.key === 'd') {
            await this.movePlayer2(direction)
        } else {
            await this.movePlayer1(direction)
        }

    }
    async movePlayer1(direction) {
        await this.#model.movePlayer1(direction)
    }
    async movePlayer2(direction) {
        await this.#model.movePlayer2(direction)
    }
}
