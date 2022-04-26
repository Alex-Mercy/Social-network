import React from "react";
import styles from "./Users.module.css";
import userPhoto from '../../assets/images/user.jpg'
import { NavLink } from "react-router-dom";
import { userType } from "../../types/types";


type propsType = {
    user: userType
    followingInProgress: Array<number>
    unfollow: (userId: number) => void
    follow: (userId: number) => void
}

const User: React.FC<propsType> = ({user, followingInProgress, unfollow, follow}) => {
    return (
        <div>
            <div>
                <NavLink to={'/profile/' + user.id}>
                    <img src={user.photos.small != null ? user.photos.small 
                        : userPhoto} className={styles.photo} />
                </NavLink>
            </div>
            <div>
                {user.followed 
                ? <button disabled={followingInProgress
                    .some(id => id === user.id)} onClick={() => { 
                        unfollow(user.id) }} >Unfollow</button>
                    : <button disabled={followingInProgress
                        .some(id => id === user.id)} onClick={() => { 
                            follow(user.id) }} >Follow</button>}
            </div>
            <div>
                {user.name}
            </div>
            <div>
                {user.status}
            </div>
            <div>
                {"props.user.location.country"}
            </div>
            <div>
                {"props.user.location.city"}
            </div>
            <div></div>
        </div>
    )
}



export default User;