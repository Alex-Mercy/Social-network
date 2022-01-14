import React from "react";
import { connect } from "react-redux";
import { addPost } from '../../../redux/profileReducer'
import Myposts from "./MyPosts";


let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts
    }
}


const MypostsContainer = connect(mapStateToProps, { addPost })(Myposts)

export default MypostsContainer;