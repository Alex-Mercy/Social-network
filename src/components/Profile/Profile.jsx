import React from "react";
import MypostsContainer from "./MyPosts.jsx/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {
    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MypostsContainer />
        </div>
    )
}


export default Profile;