import React from "react";
import { connect } from "react-redux";
import { updateNewPostText, addPost } from '../../../redux/profileReducer'
import Myposts from "./MyPosts";


let mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts
    }
}


const MypostsContainer = connect(mapStateToProps, {addPost, updateNewPostText})(Myposts)

export default MypostsContainer;