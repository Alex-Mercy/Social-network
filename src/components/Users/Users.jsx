import React from "react";
import styles from "./Users.module.css";
import userPhoto from '../../assets/images/user.jpg'
import { NavLink } from "react-router-dom";
import * as axios from 'axios';


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
                    {u.followed ? <button onClick={() => {
                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                            withCredentials: true,
                            headers: {
                                "API-KEY": "24635b41-a830-49f0-81e2-67ea1fbc69b6"
                            }
                        })
                            .then(response => {
                                if (response.data.resultCode == 0) {
                                    props.follow(u.id);
                                }

                            });
                        props.unfollow(u.id);

                    }} >Unfollow</button>
                        : <button onClick={() => {

                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                withCredentials: true,
                            headers: {
                                "API-KEY": "24635b41-a830-49f0-81e2-67ea1fbc69b6"
                            }
                            })
                                .then(response => {
                                    if (response.data.resultCode == 0) {
                                        props.follow(u.id);
                                    }

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