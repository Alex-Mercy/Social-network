import React, { useState } from "react";
import Preloader from "../../common/Preloader/Preloader";
import styles from "./ProfileInfo.module.css";
import userPhoto from '../../../assets/images/user.jpg'
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({profile, status, updateUserStatus, isOwner, savePhoto, saveProfile}) => {

    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader />
    }

    const selectedNewAvatar = (e) => {
        if (e.target.files.length) {
        savePhoto(e.target.files[0]);
        }
    }

    const onSubmit = (formData) => {
        saveProfile(formData).then (
            () => {
                setEditMode(false);
            }
        )
       
        
    }

    return (
        <div className={styles.descriptionBlock}>
            {profile.photos.large ? <img src={profile.photos.large} />
                : <img className={styles.userPhoto} src={userPhoto} />}
            {isOwner && <input type={"file"} onChange={selectedNewAvatar} />}
            {editMode ? 
            <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
            : <ProfileData profile={profile} isOwner={isOwner}
            goToEditMode = {() => {setEditMode(true)}} /> }
            <ProfileStatusWithHooks status={status} updateUserStatus={updateUserStatus} />
        </div>
    )

}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return (
        <div>
            <div>
                {isOwner && <div><button onClick={goToEditMode} >Edit</button></div>}
                <div><b>Full name</b>: {profile.fullName}</div>
                <div>
                    <b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}
                </div>
                {profile.lookingForAJob && <div>
                    <b>My professioanl slills</b>: {profile.lookingForAJobDescription}
                </div>}
                <div>
                    <b>About me</b>: {profile.aboutMe}
                </div>
                
                <div>
                    <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                        return <div className={styles.contacts}>
                        <Contact key={key} contactTitle={key}
                            contactValue={profile.contacts[key]} />
                            </div>
                    })}
                </div>
                
            </div>
        </div>
    )
}


const Contact = ({ contactTitle, contactValue }) => {
    return <div><b>{contactTitle}: </b>{contactValue}</div>
}



export default ProfileInfo;