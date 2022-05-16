import React from "react";
import { connect } from "react-redux";
import { actions } from '../../../redux/profileReducer'
import { StateType } from "../../../redux/store";
import Myposts from "./MyPosts";


let mapStateToProps = (state: StateType) => {
    return {
        posts: state.profilePage.posts
    }
}


const MypostsContainer = connect(mapStateToProps, { actions})(Myposts)

export default MypostsContainer;