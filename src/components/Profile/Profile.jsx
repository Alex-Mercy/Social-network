import React from "react";
import Myposts from "./MyPosts.jsx/MyPosts";
import MypostsContainer from "./MyPosts.jsx/MyPostsContainer";
import CssProfile from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MypostsContainer />
        </div>
    )
}


export default Profile;