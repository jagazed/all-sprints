import {View} from "./view.js";
import {Controller} from "./controller.js";
import {Counter} from "./counter.js";


const model = new Counter()
const view = new View('app')

const controller = new Controller(view, model)

controller.init()