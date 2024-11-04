import {api, PostApiType} from "../../api/api";
import {Dispatch} from "redux";
import {deletePostCommentsSuccess, fetchPostCommentsSuccess} from "./comments-reducer";

export type PostType = {
    id: number
    text: string
    likes: number
    authorId: number
    commentsIds: number[]
}

const initialState ={
    //items: [] as PostType[],
    allIds: [] as number[],
    byId: {} as {[key: string]: PostType}
}

type LookupTableType<T> = {[key: string]: T}

export const mapToLookupTable = <T extends {id: number}>(items: T[]): LookupTableType<T> => {
    const acc: LookupTableType<T> = {}
    return items.reduce((acc, item) => {
        acc[item.id] = item
        return acc
    }, acc)
}

export const postsReducer = (state = initialState, action:
    | ReturnType<typeof fetchPostsSuccess>
    | ReturnType<typeof updatePostSuccess>
    | ReturnType<typeof fetchPostCommentsSuccess>
    | ReturnType<typeof deletePostCommentsSuccess>
    | ReturnType<typeof deletePostSuccess>) => {
    switch (action.type) {
        case 'posts/fetchPostsSuccess': {
            return {
                ...state,
                //items: action.payload.posts,
                allIds: action.payload.posts.map(p => p.id),
                byId: mapToLookupTable(action.payload.posts.map(p => {
                    const copy: PostType = {
                        id: p.id,
                        likes: p.likes,
                        text: p.text,
                        authorId: p.author.id,
                        commentsIds: p.lastComments.map(c => c.id)
                    }
                    return copy
                }))
            }
        }
        case "posts/fetchPostCommentsSuccess": {
            return  {...state, byId: {
                    ...state.byId,
                    [action.payload.postId]: {
                        ...state.byId[action.payload.postId],
                        commentsIds: action.payload.comments.map(c => c.id)
                    }
                }}
        }
        case "posts/updatePostSuccess": {
            return {
                ...state,
                byId: {
                    ...state.byId,
                    [action.payload.postId]: {...state.byId[action.payload.postId], text: action.payload.text}
                }
                //items: state.items.map(i => i.id === action.payload.postId ? {...i, text: action.payload.text}: i)
            }
        }
        case "posts/deletePostCommentsSuccess": {
            let post = state.byId[action.payload.postId];
            return {
                ...state,
                byId: {
                    ...state.byId,
                    [action.payload.postId]: {...post, commentsIds: post.commentsIds.filter(id => id !== action.payload.commentId)}
                }
            }
        }
        case "posts/deletePostSuccess": {
            // let post = state.byId[action.payload.postId];
            // return {
            //     ...state,
            //     byId: {
            //         ...state.byId,
            //         [action.payload.postId]: {...post, commentsIds: post.commentsIds.filter(id => id !== action.payload.commentId)}
            //     }
            // }


            // let post = state.byId[action.payload.postId]
            // return {
            //     ...state,
            //     byId: {
            //         ...state.byId,
            //         [action.payload.postId]: {...post, id: post.}
            //     }
            // }

            const byIdCopy = {
                ...state.byId
            }
            delete byIdCopy[action.payload.postId]
            return {
                ...state,
                byId: byIdCopy
            }
        }
    }
    return state
}

export const updatePostSuccess = (postId: number, text: string) => ({type: 'posts/updatePostSuccess', payload: {postId, text}} as const)
export const fetchPostsSuccess = (posts: PostApiType[]) => ({type: 'posts/fetchPostsSuccess', payload: {posts}} as const)
export const deletePostSuccess = (postId: number) => ({type: 'posts/deletePostSuccess', payload: {postId}} as const)

export const fetchPosts = () => async (dispatch: Dispatch) => {
    const posts = await api.getPost()
    dispatch(fetchPostsSuccess(posts))
}

export const updatePost = (postId: number, text: string) => async (dispatch: Dispatch) => {
    const result = await api.updatePost(postId, text)
    dispatch(updatePostSuccess(postId, text))
}

export const deletePost = (postId: number) => async (dispatch: Dispatch) => {
    const result = await api.deletePost(postId)
    console.log("deletePost in posts reducer")
    dispatch(deletePostSuccess(postId))
}