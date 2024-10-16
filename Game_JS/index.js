import {Game} from "./game.js";
import {View} from "./view.js";
import {Controller} from "./controller.js";
import {NumberUtility} from "./number-utility.js";

const numberUtil = new NumberUtility()
const game = new Game(numberUtil)
await game.setSettings({
    gridSize: {
        rowsCount: 4,
        columnsCount: 4
    }
})
const view = new View('app')

const controller = new Controller(view, game)

controller.init()
