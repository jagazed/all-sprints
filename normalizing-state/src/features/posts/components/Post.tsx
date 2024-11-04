import React, {useState} from "react";
import {useSelector} from "react-redux";
import {deletePost, updatePost} from "../posts-reducer";
import {AppStateType, useAppDispatch} from "../../app/store";
import {deletePostComment, fetchPostsComments} from "../comments-reducer";
import {updateAuthorName} from "../authors-reducer";

export const Post: React.FC<{postId: number}> = ({postId}) => {
    const post = useSelector((state: AppStateType) => state.posts.byId[postId])
    const author = useSelector((state: AppStateType) => state.authors.byId[post.authorId])

    console.log(post)
    const [editMode, setEditMode] = useState(false)
    const [editModeAuthor, setEditModeAuthor] = useState(false)
    const [text, setText] = useState(post.text)
    const [authorText, setAuthorText] = useState(author.name)
    const dispatch = useAppDispatch()


    return (<div>
        {/*<b>{author.name}</b>*/}
        {!editModeAuthor && <b onClick={()=> setEditModeAuthor(true)}>{author.name}</b> }
        {editModeAuthor && <textarea
                value={authorText}
                onBlur={() => {
                    dispatch(updateAuthorName(author.id, authorText))
                    setEditModeAuthor(false)
                }}
                onChange={(e) => {setAuthorText(e.currentTarget.value)}}>{authorText}</textarea>
                }
        <br />
        {!editMode && <span onDoubleClick={()=> setEditMode(true)}>{post.text}</span>}
        {editMode && <textarea
            value={text}
            onBlur={() => {
                dispatch(updatePost(post.id, text))
                setEditMode(false)
        }}
            onChange={(e)=> {setText(e.currentTarget.value)}}>{text}</textarea>}
        &nbsp;<button onClick={() => {dispatch(deletePost(post.id))
        console.log("post delete")}}>x</button>
        <br />
        Likes: {post.likes}
        <hr />
        Comments:
        <ul>
            {post.commentsIds.map(id => <Comment key={id} id={id} postId={postId} /> )}
        </ul>
        <button onClick={() => {
            dispatch(fetchPostsComments(postId))
        }}>all comments</button>
        <hr />
    </div>)
}

const Comment: React.FC<{id: number, postId: number}> = ({id, postId}) => {
    const comment = useSelector((state: AppStateType) => state.comments.byId[id])
    const author = useSelector((state: AppStateType) => state.authors.byId[comment.authorId])
    const dispatch = useAppDispatch()
    return <li><b>{author.name}</b>{comment.text} <button onClick={()=> {dispatch(deletePostComment(postId, id))
        console.log("comment delete")}}>x</button></li>
}