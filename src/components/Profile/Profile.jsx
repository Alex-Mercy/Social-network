import React from "react";
import Myposts from "./MyPosts.jsx/MyPosts";
import MypostsContainer from "./MyPosts.jsx/MyPostsContainer";
import CssProfile from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MypostsContainer store={props.store}/>
        </div>
    )
}


export default Profile;