import {api, AuthorApiType} from "../../api/api";
import {fetchPostsSuccess, mapToLookupTable} from "./posts-reducer";
import {fetchPostCommentsSuccess} from "./comments-reducer";
import {Dispatch} from "redux";

const initialState ={
    //items: [] as PostType[],
    //allIds: [] as number[],
    byId: {} as {[key: string]: AuthorApiType}
}

type StateType = typeof initialState

export const authorsReducer = (state = initialState, action:
    | ReturnType<typeof fetchPostsSuccess>
    | ReturnType<typeof fetchPostCommentsSuccess>
    | ReturnType<typeof updateAuthorNameSuccess>): StateType => {
    switch (action.type) {
        case 'posts/fetchPostsSuccess': {
            return {
                ...state,
                //items: action.payload.posts,
                //allIds: action.payload.posts.map(p => p.author.id),
                byId: {
                    ...state.byId,
                    ...mapToLookupTable(action.payload.posts.map(p => p.author)),
                    ...mapToLookupTable(action.payload.posts.map(p => p.lastComments).flat().map(c => c.author))
                }
            }
        }
        case "posts/fetchPostCommentsSuccess": {
            return {
                ...state,
                byId: {
                    ...state.byId,
                    ...mapToLookupTable(action.payload.comments.map(p => p.author))
                }
            }
        }
        case "posts/updateAuthorNameSuccess": {
            return {
                ...state,
                byId: {
                    ...state.byId,
                    [action.payload.authorId]: {...state.byId[action.payload.authorId], name: action.payload.name}
                }
                // ...state,
                // byId: {
                //     ...state.byId,
                //     [action.payload.postId]: {...state.byId[action.payload.postId], text: action.payload.text}
            }
        }
    }
    return state
}

export const updateAuthorNameSuccess = (authorId: number, name: string) => ({type: 'posts/updateAuthorNameSuccess', payload: {authorId, name}} as const)

export const updateAuthorName = (authorId: number, name: string) => async (dispatch: Dispatch) => {
    console.log("updateAuthorName use")
    const result = await api.updateAuthorName(authorId, name)
    dispatch(updateAuthorNameSuccess(authorId, name))
}