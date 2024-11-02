import {applyMiddleware, combineReducers, createStore} from "redux";
import {postsReducer} from "../posts/posts-reducer";
import  {thunk} from "redux-thunk";
import {authorsReducer} from "../posts/authors-reducer";

let rootReducer = combineReducers({
    posts: postsReducer,
    authors: authorsReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(thunk))

// @ts-ignore
window.store = store