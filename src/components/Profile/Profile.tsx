import React from "react";
import { ProfileType } from "../../types/types";
import MypostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

type PropsType = {
    profile: ProfileType
    status: string
    updateUserStatus: () => void
    saveProfile: (profile: ProfileType) => Promise<any>
    savePhoto: (file: File) => void
    isOwner: any
    

}

const Profile:React.FC<PropsType> = ({profile, status, updateUserStatus, saveProfile, savePhoto, isOwner}) => {
    return (
        <div>
            <ProfileInfo profile={profile} status={status} 
                updateUserStatus={updateUserStatus} saveProfile={saveProfile}
                isOwner = {isOwner} savePhoto={savePhoto} />
            <MypostsContainer />
        </div>
    )
}


export default Profile;