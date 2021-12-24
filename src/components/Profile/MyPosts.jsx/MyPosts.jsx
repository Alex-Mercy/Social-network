import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";





const Myposts = (props) => {

    let postElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} key={p.id} />);
    
    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = (event) => {
        let text = event.target.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={styles.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange}  value={props.newPostText}/>
                </div>
                <button onClick={ onAddPost } className={styles.addPostButton}>Add post</button>
            </div>
            <div>
        {postElements}


            </div>
        </div>
    )
}


export default Myposts;