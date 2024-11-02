import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {updatePost} from "../posts-reducer";
import {AppStateType} from "../../app/store";

export const Post: React.FC<{postId: number}> = ({postId}) => {
    const post = useSelector((state: AppStateType) => state.posts.byId[postId])
    const author = useSelector((state: AppStateType) => state.authors.byId[post.authorId])

    console.log(post)
    const [editMode, setEditMode] = useState(false)
    const [text, setText] = useState(post.text)
    const dispatch = useDispatch()


    return (<div>
        <b>{author.name}</b>
        <br />
        {!editMode && <span onDoubleClick={()=> setEditMode(true)}>{post.text}</span>}
        {editMode && <textarea
            value={text}
            onBlur={() => {
                dispatch(updatePost(post.id, text))
                setEditMode(false)
        }}
            onChange={(e)=> {setText(e.currentTarget.value)}}>{text}</textarea>}
        <br />
        Likes: {post.likes}
        <hr />
    </div>)
}