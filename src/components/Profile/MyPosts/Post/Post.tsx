import React from "react";
import styles from "./Post.module.css";

type PropsType = {
message: string
likesCount: number
}

const Post: React.FC<PropsType> = ({message, likesCount}) => {
    return (
        <div className={styles.post}>
            <img className={styles.post__image} src='https://dogcatdog.ru/wp-content/uploads/d/0/d/d0d201a4f4d30eefedb66ad6b047ca16.jpg' />
            {message}
            <div>likes: {likesCount}</div>
        </div>
    )
}


export default Post;