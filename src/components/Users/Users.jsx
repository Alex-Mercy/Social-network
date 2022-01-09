import React from "react";
import styles from "./Users.module.css";
import userPhoto from '../../assets/images/user.jpg'
import { NavLink } from "react-router-dom";
import { followAPI } from "../../api/api";


const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div className={styles.usersPage}>
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p && styles.selectedPage}
                        onClick={(e) => { props.onPageChanged(p); }} > {p}</span>
                })}

            </div>
            {props.users.map(u => <div key={u.id}>
                <div>
                    <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.photo} />
                    </NavLink>
                </div>
                <div>
                    {u.followed ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                        props.toggleFollowingProgress(true, u.id)
                        followAPI.unfollowUsers(u.id).then(data => {
                            if (data.resultCode == 0) {
                                props.unfollow(u.id);
                            }
                            props.toggleFollowingProgress(false, u.id)
                        });
                        props.unfollow(u.id);
                    }} >Unfollow</button>
                        : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                            props.toggleFollowingProgress(true, u.id)
                            followAPI.followUsers(u.id).then(data => {
                                if (data.resultCode == 0) {
                                    props.follow(u.id);
                                }
                                props.toggleFollowingProgress(false, u.id)
                            });
                        }} >Follow</button>}
                </div>
                <div>
                    {u.name}
                </div>
                <div>
                    {u.status}
                </div>
                <div>
                    {"u.location.country"}
                </div>
                <div>
                    {"u.location.city"}
                </div>
                <div></div>
            </div>)}
        </div>

    )
}






export default Users;