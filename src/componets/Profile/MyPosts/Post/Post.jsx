import React from "react";
import s from './Post.module.css'
const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://artrue.ru/wp-content/uploads/2016/10/akter-kabuki.jpg'/>
            {props.text}
            <div>
                <span>{"Like " + props.likesCount}</span>
            </div>
        </div>
    )
}

export default Post