import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Post} from "../features/posts/components/Post";
import {AppStateType} from "../features/app/store";
import {fetchPosts} from "../features/posts/reducer";

export const PostPage: React.FC = () => {
    const items = useSelector((state: AppStateType) => state.posts.items)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchPosts())
    }, []);

    return (<div>
        {items.map(i => <Post key={i.id} post={i} />)}
</div>)
}