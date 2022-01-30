import React from "react";
import MypostsContainer from "./MyPosts.jsx/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {
    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} 
                updateUserStatus={props.updateUserStatus} saveProfile={props.saveProfile}
                isOwner = {props.isOwner} savePhoto={props.savePhoto} />
            <MypostsContainer />
        </div>
    )
}


export default Profile;