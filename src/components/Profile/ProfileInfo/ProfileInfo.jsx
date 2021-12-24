import React from "react";
import styles from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={styles.content__image} src='https://s1.1zoom.me/big3/984/Canada_Parks_Lake_Mountains_Forests_Scenery_Rocky_567540_3840x2400.jpg'></img>
            </div>
            <div className={styles.descriptionBlock}>
                Ava + description
            </div>
        </div>
    )
}


export default ProfileInfo;