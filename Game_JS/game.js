import {Position} from "./position.js";

export class Game {
    #status = 'PENDING'
    #settings = {
        gridSize: {
            rowsCount: 3,
            columnsCount: 3
        },
        jumpInterval: 1000, // milliseconds,
        winScore: 20
    }

    #numberUtility;
    #googlePosition;
    #player1Position;
    #player2Position;
    #player1Score = 0;
    #player2Score = 0;
    #googleScore = 0;


    // dependency injection
    constructor(numberUtility) {
        this.#numberUtility = numberUtility
        //this.#google = new Google(new Position());
        //this.#google.jump()
    }

    async setSettings(settings) {
        if (settings.gridSize.rowsCount * settings.gridSize.columnsCount < 4) {
            throw new Error('Grid must have at least 4 cells')
        }
        this.#settings = settings
    }

    async #jumpGoogle() {
        // ироки должны быть уже рапосложены на игровом поле
        // create new position
        const newPosition = new Position(
            await this.#numberUtility
                .getRandomNumber(0, this.#settings.gridSize.columnsCount - 1),
            await this.#numberUtility
                .getRandomNumber(0, this.#settings.gridSize.rowsCount - 1)
        )

        // check new posision
        // if ( ( !!this.#googlePosition && newPosition.isEqual(this.#googlePosition) )
        //     || newPosition.isEqual(this.#player1Position))  {
        //     return this.#jumpGoogle();
        // }
        // мой код
        if ((!!this.#googlePosition && newPosition.isEqual(this.#googlePosition))
            || newPosition.isEqual(this.#player1Position) || newPosition.isEqual(this.#player2Position)) {
            return this.#jumpGoogle();
        }

        this.#googlePosition = newPosition

        const catcher = this.#checkGoogleCatching()
        if (catcher) {
            if (catcher === "Player 1") {
                this.#player1Score++
            } else if (catcher === "Player 2") {
                this.#player2Score++
            }
        } else {
            this.#googleScore++
        }

        this.#checkGameEnd()
    }

    async #initPlayer1Position() {
        // google must be jump after this initialization
        // create new position
        const newPosition = new Position(
            await this.#numberUtility
                .getRandomNumber(0, this.#settings.gridSize.columnsCount - 1),
            await this.#numberUtility
                .getRandomNumber(0, this.#settings.gridSize.rowsCount - 1)
        )

        this.#player1Position = newPosition
    }

    //мой код
    async #initPlayer2Position() {
        const newPosition = new Position(
            await this.#numberUtility
                .getRandomNumber(0, this.#settings.gridSize.columnsCount - 1),
            await this.#numberUtility
                .getRandomNumber(0, this.#settings.gridSize.rowsCount - 1)
        )
        if (this.#player1Position && newPosition.isEqual(this.#player1Position)) {
            return this.#initPlayer2Position();
        }
        this.#player2Position = newPosition
    }

    async #runGoogleJumpInterval() {
        setInterval(async () => {
            await this.#jumpGoogle();
        }, this.#settings.jumpInterval)
    }

    async start() {
        // "Принцип единого уровня абстракции" (Single Level of Abstraction Principle, SLAP).
        this.#status = GAME_STATUSES.IN_PROGRESS
        await this.#initPlayer1Position();
        await this.#initPlayer2Position();
        await this.#jumpGoogle();
        await this.#runGoogleJumpInterval();
    }

    // getter
    async getStatus() {
        return this.#status
    }

    async getGooglePosition() {
        return this.#googlePosition
    }

    async getPlayer1Position() {
        return this.#player1Position
    }
    async getPlayer2Position() {
        return this.#player2Position
    }
    async getCheckGoogleCatching() {
        return this.#checkGoogleCatching()
    }
    async getJumpGoogle() {
        return this.#jumpGoogle()
    }

    async movePlayer1(direction) {
        const delta = {
            x: 0, y: 0
        }

        switch (direction) {
            case MOVE_DIRECTIONS.UP:
                delta.y = -1
                break
            case MOVE_DIRECTIONS.DOWN:
                delta.y = 1
                break
            case MOVE_DIRECTIONS.LEFT:
                delta.x = -1
                break
            case MOVE_DIRECTIONS.RIGHT:
                delta.x = 1
                break
            default:
                throw new Error('Invalid direction')
        }
        let newPosition;


        try {
            newPosition = new Position(
                this.#player1Position.x + delta.x,
                this.#player1Position.y + delta.y
            )
        } catch (e) {
            return
        }

        if (!this.#isPositionWithinGrid(newPosition)) {
            return;
        }
        if (this.#isPositionBusy(newPosition)) {
            return;
        }

        const catcher = this.#checkGoogleCatching()
        if (catcher === "Player 1") {
            this.#player1Score++
        }

        this.#player1Position = newPosition;

        this.#checkGameEnd()
    }

    //мой код
    async movePlayer2(direction) {
        const delta = {
            x: 0, y: 0
        }

        switch (direction) {
            case MOVE_DIRECTIONS.UP:
                delta.y = -1
                break
            case MOVE_DIRECTIONS.DOWN:
                delta.y = 1
                break
            case MOVE_DIRECTIONS.LEFT:
                delta.x = -1
                break
            case MOVE_DIRECTIONS.RIGHT:
                delta.x = 1
                break
            default:
                throw new Error('Invalid direction')
        }
        let newPosition;


        try {
            newPosition = new Position(
                this.#player2Position.x + delta.x,
                this.#player2Position.y + delta.y
            )
        } catch (e) {
            return
        }

        if (!this.#isPositionWithinGrid(newPosition)) {
            return;
        }
        if (this.#isPositionBusy(newPosition)) {
            return;
        }

        const catcher = this.#checkGoogleCatching()
        if (catcher === "Player 2") {
            this.#player2Score++
        }

        this.#player2Position = newPosition;

        this.#checkGameEnd()
    }


    #isPositionWithinGrid(position) {
        return (
            position.x >= 0 && position.x < this.#settings.gridSize.columnsCount
            && position.y >= 0 && position.y < this.#settings.gridSize.rowsCount
        )
    }

    #isPositionBusy(position) {
        return position.isEqual(this.#player1Position) || position.isEqual(this.#player2Position)
    }

    #checkGoogleCatching() {
        if (this.#player1Position && this.#googlePosition && this.#player1Position.isEqual(this.#googlePosition)) {
            return "Player 1"
        }
        if (this.#player2Position && this.#googlePosition && this.#player2Position.isEqual(this.#googlePosition)) {
            return "Player 2"
        }
        return null
    }

    #checkGameEnd() {
        if (this.#player1Score >= this.#settings.winScore || this.#player2Score >= this.#settings.winScore || this.#googleScore >= this.#settings.winScore) {
            this.#status = GAME_STATUSES.FINISHED;
            clearInterval(this.#runGoogleJumpInterval);
        }
    }
}

export const GAME_STATUSES = {
    PENDING: 'PENDING',
    IN_PROGRESS: 'IN-PROGRESS',
    FINISHED: 'FINISHED'
}

export const MOVE_DIRECTIONS = {
    UP: 'UP',
    DOWN: 'DOWN',
    LEFT: 'LEFT',
    RIGHT: 'RIGHT'
}