import {applyMiddleware, combineReducers, createStore} from "redux";
import {postsReducer} from "../posts/posts-reducer";
import  {thunk} from "redux-thunk";
import {authorsReducer} from "../posts/authors-reducer";
import {commentsReducer} from "../posts/comments-reducer";

let rootReducer = combineReducers({
    posts: postsReducer,
    authors: authorsReducer,
    comments: commentsReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(thunk))

// @ts-ignore
window.store = store