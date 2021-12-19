import React from "react";
import CssProfile from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={CssProfile.post}>
            <img className={CssProfile.post__image} src='https://dogcatdog.ru/wp-content/uploads/d/0/d/d0d201a4f4d30eefedb66ad6b047ca16.jpg' />
            {props.message}
            <div>likes: {props.likesCount}</div>
        </div>
    )
}


export default Post;