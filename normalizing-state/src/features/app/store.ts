import {AnyAction,applyMiddleware,  combineReducers, createStore} from "redux";
import {postsReducer} from "../posts/posts-reducer";
import {thunk, ThunkDispatch} from "redux-thunk";
import {authorsReducer} from "../posts/authors-reducer";
import {commentsReducer} from "../posts/comments-reducer";
import {useDispatch} from "react-redux";

// export type PostsState = ReturnType<typeof postsReducer>;
// export type AuthorsState = ReturnType<typeof authorsReducer>;
// export type CommentsState = ReturnType<typeof commentsReducer>;

// let rootReducer = combineReducers({
//     posts: postsReducer,
//     authors: authorsReducer,
//     comments: commentsReducer
// })

let rootReducer = combineReducers({
    posts: postsReducer,
    authors: authorsReducer,
    comments: commentsReducer,
});

export type AppStateType = ReturnType<typeof rootReducer>

export let store = createStore(rootReducer, applyMiddleware(thunk))


export type AppThunkDispatch = ThunkDispatch<AppStateType, any, AnyAction>
export const useAppDispatch = () => useDispatch<AppThunkDispatch>()


// @ts-ignore
window.store = store