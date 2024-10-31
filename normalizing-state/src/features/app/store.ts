import {applyMiddleware, combineReducers, createStore} from "redux";
import {postsReducer} from "../posts/reducer";
import  {thunk} from "redux-thunk";

let rootReducer = combineReducers({
    posts: postsReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(thunk))