import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import styles from "./ProfileInfo.module.css";
import userPhoto from '../../../assets/images/user.jpg'
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            {/* <div>
                <img className={styles.content__image} src='https://s1.1zoom.me/big3/984/Canada_Parks_Lake_Mountains_Forests_Scenery_Rocky_567540_3840x2400.jpg'></img>
            </div> */}
            <div className={styles.descriptionBlock}>
                {props.profile.photos.large ?<img src={props.profile.photos.large}/> 
                : <img className={styles.userPhoto} src={userPhoto}  />}

                <ProfileStatusWithHooks status={props.status} updateUserStatus={props.updateUserStatus}/>
                <div>Description</div>
                

                {/* <img src={props.profile.photos.large}  /> */}
                
            </div>
        </div>
    )
}


export default ProfileInfo;