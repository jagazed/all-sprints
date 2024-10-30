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
    #eventEmitter;
    #googlePosition;
    #player1Position;
    #player2Position;
    #player1Score = 0;
    #player2Score = 0;
    #googleScore = 0;
    #googleJumpInterval
    #previousGooglePosition



    // dependency injection
    constructor(numberUtility, eventEmitter) {
        this.#numberUtility = numberUtility
        this.#eventEmitter = eventEmitter
        this.#googleJumpInterval = null
        this.#previousGooglePosition = null
        //this.#google = new Google(new Position());
        //this.#google.jump()
    }

    async subscribe(callback) {
        this.#eventEmitter.on(callback)
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

        if ((!!this.#googlePosition && newPosition.isEqual(this.#googlePosition))
            || newPosition.isEqual(this.#player1Position) || newPosition.isEqual(this.#player2Position)) {
            return await this.#jumpGoogle();
        }
        this.#previousGooglePosition = this.#googlePosition
        this.#googlePosition = newPosition

        // const catcher = this.#checkGoogleCatching()
        // if (catcher === "Google") {
        //     //console.log("googleScore", this.#googleScore)
        //     this.#googleScore++
        // }
        // const catcher = await this.#checkGoogleCatching()
        // if (catcher === "Google") {
        //     console.log("Google catcher", this.#googleScore)
        //     //this.#googleScore++
        // }
        // if (newPosition.isEqual(this.#player1Position) || newPosition.isEqual(this.#player2Position)) {
        //     // Один из игроков поймал Google
        //     if (newPosition.isEqual(this.#player1Position)) {
        //         this.#player1Score++;
        //     } else {
        //         this.#player2Score++;
        //     }
        // } else {
        //     // Google успешно прыгнул
        //     this.#googleScore++;
        // }

        this.#eventEmitter.emit()

        //await this.#checkGameEnd()
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
        this.#eventEmitter.emit()
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
        this.#eventEmitter.emit()
    }

    async #runGoogleJumpInterval() {
        this.#googleJumpInterval = setInterval(async () => {
            console.log("Google is jumping");
            await this.#jumpGoogle();
            console.log("Checking Google catching");
            console.log('player1Position', this.#player1Position)
            console.log('player2Position', this.#player2Position)
            console.log('googlePosition', this.#googlePosition)
            console.log('previousGooglePosition', this.#previousGooglePosition)
            await this.#checkGoogleCatching() // ???
            await this.#checkGameEnd()
        }, this.#settings.jumpInterval)
    }

    async start() {
        // "Принцип единого уровня абстракции" (Single Level of Abstraction Principle, SLAP).
        this.#status = GAME_STATUSES.IN_PROGRESS;
        await this.#initPlayer1Position();
        await this.#initPlayer2Position();
        await this.#jumpGoogle();
        await this.#runGoogleJumpInterval();
    }

    async stop() {
        this.#status = GAME_STATUSES.PENDING
        clearInterval(this.#runGoogleJumpInterval)
    }

    // getter
    async getStatus() {
        return this.#status
    }


    async getSettings() {
        return this.#settings
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
    // new
    async getPlayer1Score() {
        return this.#player1Score
    }
    async getPlayer2Score() {
        return this.#player2Score
    }
    async getGoogleScore() {
        return this.#googleScore
    }
    // ---

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

        this.#player1Position = newPosition;

        this.#eventEmitter.emit()

        // const catcher = await this.#checkGoogleCatching()
        // if (catcher === "Player 1") {
        //     console.log("player 1 catcher his score:", this.#player1Score)
        //     //this.#player1Score++
        // }

        //await this.#checkGoogleCatching()
        //await this.#checkGameEnd()
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

        // const catcher = this.#checkGoogleCatching()
        // if (catcher === "Player 2") {
        //     this.#player2Score++
        // }

        this.#player2Position = newPosition;
        this.#eventEmitter.emit();
        //await this.#checkGoogleCatching()
        //await this.#checkGameEnd()
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

    // #checkGoogleCatching() {
    //     if (this.#player1Position && this.#googlePosition && this.#player1Position.isEqual(this.#googlePosition)) {
    //         console.log("checkGoogleCatching player1")
    //         return "Player 1"
    //     } else if (this.#player2Position && this.#googlePosition && this.#player2Position.isEqual(this.#googlePosition)) {
    //         return "Player 2"
    //     } else {
    //         console.log("google check")
    //         return "Google"
    //     }
    // }

    async #checkGoogleCatching() {
        // if (this.#googlePosition.isEqual(this.#player1Position)) {
        //     this.#player1Score++;
        //     this.#eventEmitter.emit();
        // } else if (this.#googlePosition.isEqual(this.#player2Position)) {
        //     this.#player2Score++;
        //     this.#eventEmitter.emit();
        // } else {
        //     this.#googleScore++;
        //     this.#eventEmitter.emit();
        // }

        if (this.#previousGooglePosition && (this.#previousGooglePosition.isEqual(this.#player1Position) || this.#previousGooglePosition.isEqual(this.#player2Position))) {
            if (this.#previousGooglePosition.isEqual(this.#player1Position)) {
                this.#player1Score++;
                this.#eventEmitter.emit();
            } else if (this.#previousGooglePosition.isEqual(this.#player2Position)) {
                this.#player2Score++;
                this.#eventEmitter.emit();
            }
        } else {
            this.#googleScore++;
            this.#eventEmitter.emit();
        }
    }

    async #checkGameEnd() {
        if (this.#player1Score >= this.#settings.winScore || this.#player2Score >= this.#settings.winScore || this.#googleScore >= this.#settings.winScore) {
            this.#status = GAME_STATUSES.FINISHED;
            //clearInterval(this.#runGoogleJumpInterval);
            clearInterval(this.#googleJumpInterval)
            this.#eventEmitter.emit()

            console.log("player 1: ", this.#player1Score)
            console.log("player 2: ", this.#player2Score)
            console.log("google: ", this.#googleScore)
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