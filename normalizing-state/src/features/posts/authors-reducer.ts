import {AuthorApiType} from "../../api/api";
import {fetchPostsSuccess, mapToLookupTable} from "./posts-reducer";

const initialState ={
    //items: [] as PostType[],
    //allIds: [] as number[],
    byId: {} as {[key: string]: AuthorApiType}
}

type StateType = typeof initialState

export const authorsReducer = (state = initialState, action:
    | ReturnType<typeof fetchPostsSuccess>): StateType => {
    switch (action.type) {
        case 'posts/fetchPostsSuccess': {
            return {
                ...state,
                //items: action.payload.posts,
                //allIds: action.payload.posts.map(p => p.author.id),
                byId: mapToLookupTable(action.payload.posts.map(p => p.author))
            }
        }
        // case "posts/updatePostSuccess": {
        //     return {
        //         ...state,
        //         byId: {
        //             ...state.byId,
        //             [action.payload.postId]: {...state.byId[action.payload.postId], text: action.payload.text}
        //         }
        //         //items: state.items.map(i => i.id === action.payload.postId ? {...i, text: action.payload.text}: i)
        //     }
        // }
    }
    return state
}