import React from "react";
import CssProfile from "./MyPosts.module.css";
import Post from "./Post/Post";
import {updateNewPostTextActionCreator, addPostActionCreator} from '../../../redux/profileReducer'




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
        <div className={CssProfile.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange}  value={props.newPostText}/>
                </div>
                <button onClick={ onAddPost } className={CssProfile.addPostButton}>Add post</button>
            </div>
            <div>
        {postElements}


            </div>
        </div>
    )
}


export default Myposts;