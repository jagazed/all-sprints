import {api, PostApiType} from "../../api/api";
import {Dispatch} from "redux";

export type PostType = {
    id: number
    text: string
    likes: number
    authorId: number
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
    | ReturnType<typeof updatePostSuccess>) => {
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
                        authorId: p.author.id
                    }
                    return copy
                }))
            }
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
    }
    return state
}

export const updatePostSuccess = (postId: number, text: string) => ({type: 'posts/updatePostSuccess', payload: {postId, text}} as const)
export const fetchPostsSuccess = (posts: PostApiType[]) => ({type: 'posts/fetchPostsSuccess', payload: {posts}} as const)

export const fetchPosts = () => async (dispatch: Dispatch) => {
    const posts = await api.getPost()
    dispatch(fetchPostsSuccess(posts))
    // try {
    //     const posts = await api.getPost();
    //     dispatch(fetchPostsSuccess(posts));
    // } catch (error) {
    //     console.error('Error fetching posts:', error);
    // }
}

export const updatePost = (postId: number, text: string) => async (dispatch: Dispatch) => {
    const result = await api.updatePost(postId, text)
    dispatch(updatePostSuccess(postId, text))
}