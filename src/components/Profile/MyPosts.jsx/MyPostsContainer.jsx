import React from "react";
import {updateNewPostTextActionCreator, addPostActionCreator} from '../../../redux/profileReducer'
import Myposts from "./MyPosts";




const MypostsContainer = (props) => {    
    let state = props.store.getState();


    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let onPostChange = (text) => {
        props.store.dispatch(updateNewPostTextActionCreator(text));
    }

    return <Myposts updateNewPostText={onPostChange} addPost={addPost} 
    posts={state.profilePage.posts}
    newPostText={state.profilePage.newPostText}
    />

    
}


export default MypostsContainer;