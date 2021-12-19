import React from "react";
import { addPost } from "../../redux/state";
import Myposts from "./MyPosts.jsx/MyPosts";
import CssProfile from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <Myposts posts={props.profilePage.posts} 
            newPostText={props.profilePage.newPostText} 
            dispatch={props.dispatch} />
        </div>
    )
}


export default Profile;