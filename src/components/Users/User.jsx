import React from "react";
import styles from "./Users.module.css";
import userPhoto from '../../assets/images/user.jpg'
import { NavLink } from "react-router-dom";


const User = (props) => {
    return (
        <div>
            <div>
                <NavLink to={'/profile/' + props.user.id}>
                    <img src={props.user.photos.small != null ? props.user.photos.small 
                        : userPhoto} className={styles.photo} />
                </NavLink>
            </div>
            <div>
                {props.user.followed ? <button disabled={props.followingInProgress
                    .some(id => id === props.user.id)} onClick={() => { 
                        props.unfollow(props.user.id) }} >Unfollow</button>
                    : <button disabled={props.followingInProgress
                        .some(id => id === props.user.id)} onClick={() => { 
                            props.follow(props.user.id) }} >Follow</button>}
            </div>
            <div>
                {props.user.name}
            </div>
            <div>
                {props.user.status}
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