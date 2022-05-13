import React from "react";
import { connect } from "react-redux";
import { actions } from '../../../redux/profileReducer'
import Myposts from "./MyPosts";


let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts
    }
}


const MypostsContainer = connect(mapStateToProps, { actions})(Myposts)

export default MypostsContainer;