import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";



const MyPosts = (props) => {

    let postElements =
        props.posts.map( p => <Post text={p.text} likesCount={p.likesCount}/>)

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = (e) => {
        let text = e.target.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    }

    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <textarea onChange={onPostChange} value={props.profilePage} placeholder={'Что нового?'}/>
            </div>
            <div>
                <button onClick={addPost}>Add Post</button>
            </div>
            <div className={s.posts}>
                { postElements }
            </div>
        </div>
    )
}

export default MyPosts