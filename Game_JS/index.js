import {Game} from "./game.js";
import {View} from "./view.js";
import {Controller} from "./controller.js";
import {NumberUtility} from "./number-utility.js";
import {GameEventEmitter} from "./GameEventEmitter.js";

const eventEmitter = new GameEventEmitter()
const numberUtil = new NumberUtility()
const game = new Game(numberUtil, eventEmitter)

// наследование против композиции

await game.setSettings({
    gridSize: {
        rowsCount: 4,
        columnsCount: 4
    },
    jumpInterval: 1000,
    winScore: 20
})
const view = new View('app')

const controller = new Controller(view, game)

controller.init()
