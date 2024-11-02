import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Post} from "../features/posts/components/Post";
import {AppStateType} from "../features/app/store";
import {fetchPosts} from "../features/posts/posts-reducer";

export const PostPage: React.FC = (props) => {
    const items = useSelector((state: AppStateType) => state.posts.allIds)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchPosts())
    }, []);

    return (<div>
        {items.map(id => <Post key={id} postId={id} />)}
</div>)
}