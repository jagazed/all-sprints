import {api, PostType} from "../../api/api";
import {Dispatch} from "redux";

const initialState ={
    items: [] as PostType[]
}
export const postsReducer = (state = initialState, action:
    | ReturnType<typeof fetchPostsSuccess>
    | ReturnType<typeof updatePostSuccess>) => {
    switch (action.type) {
        case 'posts/fetchPostsSuccess': {
            return {
                ...state,
                items: action.payload.posts
            }
        }
        case "posts/updatePostSuccess": {
            return {
                ...state,
                items: state.items.map(i => i.id === action.payload.postId ? {...i, text: action.payload.text}: i)
            }
        }
    }
    return state
}

export const updatePostSuccess = (postId: number, text: string) => ({type: 'posts/updatePostSuccess', payload: {postId, text}} as const)
export const fetchPostsSuccess = (posts: PostType[]) => ({type: 'posts/fetchPostsSuccess', payload: {posts}} as const)

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