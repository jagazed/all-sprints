import {api, AuthorApiType, CommentApiType, PostApiType} from "../../api/api";
import {fetchPostsSuccess, mapToLookupTable} from "./posts-reducer";
import {Dispatch} from "redux";

export type CommentType = Omit<CommentApiType, 'author'> & { authorId: number}


const initialState ={
    byId: {} as {[key: string]: CommentType}
}

type StateType = typeof initialState

export const commentsReducer = (state = initialState, action:
    | ReturnType<typeof fetchPostsSuccess>
    | ReturnType<typeof fetchPostCommentsSuccess>
    | ReturnType<typeof deletePostCommentsSuccess>): StateType => {
    switch (action.type) {
        case 'posts/fetchPostsSuccess': {
            return {
                ...state,
                byId: {
                    ...state.byId,
                    ...mapToLookupTable(action.payload.posts.map(p => p.lastComments).flat().map(c => {
                            const comment: CommentType = {
                                id: c.id,
                                authorId: c.author.id,
                                text: c.text
                            }
                            return comment
                        })
                    )
                }
            }
        }
        case 'posts/fetchPostCommentsSuccess': {
            const lookupTable = mapToLookupTable(action.payload.comments.map(c => {
                const comment: CommentType = {
                    id: c.id,
                    authorId: c.author.id,
                    text: c.text
                }
                return comment
            }))
            return {
                ...state,
                byId: {
                    ...state.byId,
                    ...lookupTable
                }
            }
        }
        case "posts/deletePostCommentsSuccess": {
            const byIdCopy = {
                ...state.byId
            }
            delete byIdCopy[action.payload.commentId]
            return {
                ...state,
                byId: byIdCopy
            }
        }
    }
    return state
}

export const fetchPostCommentsSuccess = (postId: number, comments: CommentApiType[]) => ({type: 'posts/fetchPostCommentsSuccess', payload: {comments, postId}} as const)
export const deletePostCommentsSuccess = (postId: number, commentId: number) => ({type: 'posts/deletePostCommentsSuccess', payload: {postId, commentId}} as const)

export const fetchPostsComments = (postId: number) => async (dispatch: Dispatch) => {
    const comments = await api.getComments(postId)
    dispatch(fetchPostCommentsSuccess(postId, comments))
}
export const deletePostComment = (postId: number, commentId: number) => async (dispatch: Dispatch) => {
    const result = await api.deleteComment(postId, commentId)
    dispatch(deletePostCommentsSuccess(postId, commentId))
}