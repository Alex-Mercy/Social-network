import React from "react";
import CssProfile from "./MyPosts.module.css";
import Post from "./Post/Post";
import {updateNewPostTextActionCreator, addPostActionCreator} from '../../../redux/profileReducer'




const Myposts = (props) => {

    let postElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);
    
    let AddPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = (event) => {
        let text = event.target.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    }

    return (
        <div className={CssProfile.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange}  value={props.newPostText}/>
                </div>
                <button onClick={ AddPost } className={CssProfile.addPostButton}>Add post</button>
            </div>
            <div>
        {postElements}


            </div>
        </div>
    )
}


export default Myposts;