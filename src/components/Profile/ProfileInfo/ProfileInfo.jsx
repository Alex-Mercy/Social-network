import React from "react";
import CssProfileInfo from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={CssProfileInfo.content__image} src='https://s1.1zoom.me/big3/984/Canada_Parks_Lake_Mountains_Forests_Scenery_Rocky_567540_3840x2400.jpg'></img>
            </div>
            <div className={CssProfileInfo.descriptionBlock}>
                Ava + description
            </div>
        </div>
    )
}


export default ProfileInfo;